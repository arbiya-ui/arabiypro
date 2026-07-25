/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  Users, 
  Globe, 
  Key, 
  BarChart3, 
  X, 
  Lock, 
  Unlock, 
  RefreshCw, 
  Crown, 
  ShieldAlert,
  Settings,
  Trash2,
  CheckCircle2,
  Clock,
  LayoutDashboard,
  Eye,
  EyeOff,
  Banknote,
  Check,
  Ban,
  Download,
  ExternalLink,
  Copy, 
  Plus,
  MessageCircle,
  Zap,
  CreditCard,
  Smartphone,
  Phone,
  MapPin,
  MessageSquare
} from "lucide-react";
import { UserProfile, PaymentProof, PremiumToken } from "../types";
import { generatePremiumToken, formatIndoDate } from "../lib/payment";
import { resetTrial, simulateExpiredTrial, updateSupabasePremium, updateSupabaseChatPremium } from "../lib/trial";
import { supabase, isSupabaseConfigured } from "../lib/supabase";

interface AdminPanelProps {
  onClose: () => void;
  userProfile: UserProfile;
  onUpdateProfile: (profile: UserProfile) => void;
}

export default function AdminPanel({ onClose, userProfile, onUpdateProfile }: AdminPanelProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<"owner" | "payments" | "users" | "global" | "codes" | "stats" | "settings" | "leads" | "devices">("owner");
  
  // App Settings state
  const [appSettings, setAppSettings] = useState({
    prices: {
      monthly: 49000,
      annual: 399000,
      chat_addon: 49000
    },
    contacts: {
      email: "support@arabiypro.id",
      whatsapp: "+62 812-3456-7890",
      instagram: "@arabiypro.official",
      twitter: "@arabiy_pro"
    },
    office: {
      name: "Gedung Al-Azhar Digital Hub",
      address: "Jl. Sisingamangaraja No. 1, Kebayoran Baru, Jakarta Selatan, 12110."
    },
    paymentMethods: {
      bank_mandiri: { acc: "1800017868961", name: "KARSO" },
      e_wallet: { acc: "085770480102", name: "Karso" },
      qris_data: "ArabiyProPayment",
      qris_image: ""
    },
    promo: {
      text: "HEMAT 51% — Penawaran Terbatas Khusus Hari Ini!",
      isActive: true
    }
  });

  // Local storage based state
  const [savedUsers, setSavedUsers] = useState<any[]>([]);
  const [generatedCodes, setGeneratedCodes] = useState<any[]>([]);
  const [pendingPayments, setPendingPayments] = useState<PaymentProof[]>([]);
  const [transactionHistory, setTransactionHistory] = useState<PaymentProof[]>([]);
  const [premiumTokens, setPremiumTokens] = useState<PremiumToken[]>([]);
  const [supportLeads, setSupportLeads] = useState<any[]>([]);
  const [deviceActivities, setDeviceActivities] = useState<any[]>([]);
  const [isFetchingActivities, setIsFetchingActivities] = useState(false);
  const [showImageModal, setShowImageModal] = useState<string | null>(null);
  const [newManualToken, setNewManualToken] = useState<{name: string, package: "monthly" | "annual"}>({name: "", package: "monthly"});
  const [showManualTokenDialog, setShowManualTokenDialog] = useState(false);

  const [globalSettings, setGlobalSettings] = useState({
    maintenance: false,
    allPremiumFree: false,
    noAds: true,
    demoMode: false
  });

  // Owner specific toggles (persisted in localStorage)
  const [ownerToggles, setOwnerToggles] = useState({
    unlockAll: localStorage.getItem("owner_unlockAll") === "true",
    bypassLock: localStorage.getItem("owner_bypassLock") === "true",
    allPremium: localStorage.getItem("owner_allPremium") === "true"
  });

  useEffect(() => {
    // Load data from localStorage
    const users = JSON.parse(localStorage.getItem("all_users_registry") || "[]");
    setSavedUsers(users);
    
    const codes = JSON.parse(localStorage.getItem("admin_generated_codes") || "[]");
    setGeneratedCodes(codes);

    const settings = JSON.parse(localStorage.getItem("admin_global_settings") || "{}");
    if (Object.keys(settings).length > 0) setGlobalSettings(prev => ({ ...prev, ...settings }));

    const appSet = JSON.parse(localStorage.getItem("app_settings") || "{}");
    if (Object.keys(appSet).length > 0) setAppSettings(prev => ({ ...prev, ...appSet }));

    const leads = JSON.parse(localStorage.getItem("support_leads") || "[]");
    setSupportLeads(leads);

    // Load Payments & Tokens
    const payments = JSON.parse(localStorage.getItem("pendingPayments") || "[]");
    setPendingPayments(payments.filter((p: PaymentProof) => p.status === "pending"));
    setTransactionHistory(payments.filter((p: PaymentProof) => p.status !== "pending"));

    const tokens = JSON.parse(localStorage.getItem("premiumTokens") || "[]");
    setPremiumTokens(tokens);

    if (activeTab === 'devices') {
      fetchDeviceActivities();
    }
  }, [activeTab]);

  const fetchDeviceActivities = async () => {
    if (!isSupabaseConfigured) return;
    setIsFetchingActivities(true);
    try {
      const { data, error } = await supabase
        .from('device_activity')
        .select('*')
        .order('open_count', { ascending: false });
      
      if (error) {
        if (error.code === '42P01') {
          console.warn('Supabase: device_activity table not found.');
        } else {
          throw error;
        }
      }
      setDeviceActivities(data || []);
    } catch (err: any) {
      if (err?.code !== '42P01') {
        console.error("Failed to fetch device activities:", err?.message || err, "| Code:", err?.code);
      }
    } finally {
      setIsFetchingActivities(false);
    }
  };

  const handleUpdateDeviceStatus = async (deviceId: string, updates: any) => {
    if (!isSupabaseConfigured) return;
    try {
      const { error } = await supabase
        .from('device_activity')
        .update(updates)
        .eq('device_id', deviceId);
      
      if (error) throw error;
      fetchDeviceActivities();
      alert("Status device berhasil diperbarui!");
    } catch (err) {
      console.error("Failed to update device status:", err);
      alert("Gagal memperbarui status device.");
    }
  };

  const handleUpdateCodeExpiry = (codeId: number, newDate: string) => {
    const updated = generatedCodes.map(c => {
      if (c.id === codeId) {
        return { ...c, expiresAt: newDate, duration: `Hingga ${formatIndoDate(newDate)}` };
      }
      return c;
    });
    setGeneratedCodes(updated);
    localStorage.setItem("admin_generated_codes", JSON.stringify(updated));
    alert("Tanggal kedaluwarsa berhasil diperbarui!");
  };

  const handleUpdateUserExpiry = (userId: string, newDate: string, type: 'materi' | 'chat') => {
    const updated = savedUsers.map(u => {
      if (u.id === userId || u.userId === userId) {
        if (type === 'materi') {
          return { ...u, isPremium: true, premiumExpiresAt: newDate };
        } else {
          return { ...u, isChatPremium: true, chatPremiumExpiresAt: newDate };
        }
      }
      return u;
    });
    setSavedUsers(updated);
    localStorage.setItem("all_users_registry", JSON.stringify(updated));
    
    if (isSupabaseConfigured) {
      if (type === 'materi') {
        updateSupabasePremium(userId, true, newDate);
      } else {
        updateSupabaseChatPremium(userId, true, newDate);
      }
    }
    alert(`Masa aktif ${type} berhasil diperbarui!`);
  };

  const handleSaveGlobalSettings = (newSettings: typeof globalSettings) => {
    setGlobalSettings(newSettings);
    localStorage.setItem("admin_global_settings", JSON.stringify(newSettings));
  };

  const handleSaveAppSettings = (newSettings: typeof appSettings) => {
    setAppSettings(newSettings);
    localStorage.setItem("app_settings", JSON.stringify(newSettings));
    alert("Pengaturan aplikasi berhasil disimpan!");
    // Trigger update for other components
    window.dispatchEvent(new CustomEvent('app-settings-updated'));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "arabiypro2024") {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Kredensial tidak valid. Silakan coba lagi.");
    }
  };

  const toggleOwnerSetting = (key: keyof typeof ownerToggles) => {
    const newVal = !ownerToggles[key];
    setOwnerToggles(prev => ({ ...prev, [key]: newVal }));
    localStorage.setItem(`owner_${String(key)}`, String(newVal));
    
    // If turning on all premium for owner
    if (key === "allPremium" && newVal) {
      localStorage.setItem("ownerMode", "true");
      onUpdateProfile({ ...userProfile, isOwner: true, isPremium: true });
    } else if (key === "allPremium" && !newVal) {
      // Don't necessarily remove owner mode, just the premium flag if desired
      onUpdateProfile({ ...userProfile, isPremium: false });
    }
  };

  const handleConfirmPayment = (paymentId: string) => {
    const payment = pendingPayments.find(p => p.id === paymentId);
    if (!payment) return;

    const isChat = payment.purchaseType === 'chat' || payment.package === 'chat_addon';
    const label = isChat ? 'AI Chat Plus' : 'Premium Materi';
    const durationLabel = isChat ? '30 Hari' : (payment.package === 'annual' ? '365 Hari' : '30 Hari');

    if (!confirm(`Konfirmasi pembayaran Rp${payment.nominal.toLocaleString()} dari ${payment.userName} untuk ${label} (${durationLabel})? Token akan otomatis digenerate.`)) return;

    // 1. Generate Token
    const newToken = generatePremiumToken(payment.userName, payment.package as any);
    newToken.purchaseType = isChat ? 'chat' : 'materi';

    // If we have a userId, associate it with the token
    if (payment.userId) {
      newToken.userId = payment.userId;
    }
    
    // 2. Update Premium Tokens Storage
    const tokens = [...premiumTokens, newToken];
    setPremiumTokens(tokens);
    localStorage.setItem("premiumTokens", JSON.stringify(tokens));

    // Sync to Supabase if userId is present
    if (payment.userId) {
      if (isChat) {
        const expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 1); // 1 month
        updateSupabaseChatPremium(payment.userId, true, expiryDate.toISOString());
      } else {
        const days = payment.package === 'annual' ? 365 : 30;
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + days);
        updateSupabasePremium(payment.userId, true, expiryDate.toISOString());
      }
    }

    // 3. Update Payment Status
    const allPayments: PaymentProof[] = JSON.parse(localStorage.getItem("pendingPayments") || "[]");
    const updatedPayments = allPayments.map(p => 
      p.id === paymentId ? { ...p, status: "confirmed" as const } : p
    );
    localStorage.setItem("pendingPayments", JSON.stringify(updatedPayments));
    
    // 4. Update local state
    setPendingPayments(updatedPayments.filter(p => p.status === "pending"));
    setTransactionHistory(updatedPayments.filter(p => p.status !== "pending"));

    // 5. Success message with token
    alert(`PEMBAYARAN BERHASIL DIKONFIRMASI!\n\nTOKEN: ${newToken.tokenCode}\n\nSilakan kirim token ini ke WhatsApp user.`);
    
    // Open WA directly simulation
    const waMsg = encodeURIComponent(`Token Premium ArabiyPro Anda: ${newToken.tokenCode} berlaku ${newToken.package === 'annual' ? '365' : '30'} hari. Masukkan di Profil & Setelan.`);
    window.open(`https://wa.me/${payment.phone.replace(/^0/, '62')}?text=${waMsg}`, '_blank');
  };

  const handleRejectPayment = (paymentId: string) => {
    const reason = prompt("Masukkan alasan penolakan:");
    if (reason === null) return;

    const allPayments: PaymentProof[] = JSON.parse(localStorage.getItem("pendingPayments") || "[]");
    const updatedPayments = allPayments.map(p => 
      p.id === paymentId ? { ...p, status: "rejected" as const, rejectionReason: reason } : p
    );
    localStorage.setItem("pendingPayments", JSON.stringify(updatedPayments));
    
    setPendingPayments(updatedPayments.filter(p => p.status === "pending"));
    setTransactionHistory(updatedPayments.filter(p => p.status !== "pending"));
    
    const payment = allPayments.find(p => p.id === paymentId);
    if (payment) {
      const waMsg = encodeURIComponent(`Mohon maaf, bukti pembayaran ArabiyPro Anda ditolak.\nAlasan: ${reason}\nSilakan hubungi admin jika ada kendala.`);
      window.open(`https://wa.me/${payment.phone.replace(/^0/, '62')}?text=${waMsg}`, '_blank');
    }
  };

  const handleCreateManualToken = () => {
     if (!newManualToken.name) return alert("Nama user harus diisi!");
     const newToken = generatePremiumToken(newManualToken.name, newManualToken.package);
     const tokens = [...premiumTokens, newToken];
     setPremiumTokens(tokens);
     localStorage.setItem("premiumTokens", JSON.stringify(tokens));
     alert(`TOKEN BERHASIL DIBUAT!\n\nTOKEN: ${newToken.tokenCode}`);
     setShowManualTokenDialog(false);
     setNewManualToken({name: "", package: "monthly"});
  };

  const calculateRevenue = (period: "today" | "week" | "month") => {
    const now = new Date();
    const confirmed = transactionHistory.filter(p => p.status === "confirmed");
    
    return confirmed.reduce((acc, curr) => {
      const payDate = new Date(curr.timestamp);
      if (period === "today" && payDate.toDateString() === now.toDateString()) return acc + curr.nominal;
      if (period === "month" && payDate.getMonth() === now.getMonth()) return acc + curr.nominal;
      return acc;
    }, 0);
  };

  const generateNewCode = (name: string, duration: string) => {
    const code = `ARAB-${Math.floor(1000 + Math.random() * 9000)}`;
    const expiry = duration === "7" ? 7 : duration === "30" ? 30 : 9999;
    const newCodeObj = {
      id: Date.now(),
      code,
      assignedTo: name,
      duration: duration === "forever" ? "Selamanya" : `${duration} Hari`,
      createdAt: new Date().toISOString(),
      used: false
    };
    const updatedCodes = [...generatedCodes, newCodeObj];
    setGeneratedCodes(updatedCodes);
    localStorage.setItem("admin_generated_codes", JSON.stringify(updatedCodes));
  };

  const deleteCode = (id: number) => {
    const updated = generatedCodes.filter(c => c.id !== id);
    setGeneratedCodes(updated);
    localStorage.setItem("admin_generated_codes", JSON.stringify(updated));
  };

  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="w-full max-w-md bg-app-surface rounded-[2rem] shadow-2xl overflow-hidden border border-app-border">
          <div className="bg-app-primary p-8 text-center relative">
            <button onClick={onClose} className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors cursor-pointer">
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 bg-app-surface/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
              <Lock className="w-8 h-8 text-app-accent" />
            </div>
            <h2 className="text-xl font-black text-white">Admin Login</h2>
            <p className="text-xs text-white/60 mt-1 uppercase tracking-widest font-mono">ArabiyPro Control Panel</p>
          </div>
          
          <form onSubmit={handleLogin} className="p-6 sm:p-8 space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider ml-1">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-app-background border border-app-border focus:border-app-primary focus:ring-1 focus:ring-[#0A3B29] outline-none transition-all text-sm font-medium"
                placeholder="Masukkan username"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider ml-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-app-background border border-app-border focus:border-app-primary focus:ring-1 focus:ring-[#0A3B29] outline-none transition-all text-sm font-medium"
                placeholder="••••••••"
              />
            </div>
            {loginError && <p className="text-[10px] text-rose-500 font-bold text-center">{loginError}</p>}
            <button type="submit" className="w-full py-3.5 bg-app-primary hover:bg-[#153d2e] text-white font-black rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-app-primary/20 transition-all active:scale-95 cursor-pointer mt-2">
              Akses Panel Kontrol
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex bg-app-background overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-app-primary text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-app-surface/10 flex items-center justify-center border border-white/20">
            <ShieldCheck className="w-5 h-5 text-app-accent" />
          </div>
          <div className="leading-tight">
            <h1 className="text-sm font-black tracking-tight">ADMIN PANEL</h1>
            <p className="text-[9px] text-app-accent font-bold uppercase tracking-widest">ArabiyPro</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {[
            { id: "owner", label: "Owner Account", icon: Crown },
            { id: "payments", label: "Pembayaran Masuk", icon: Banknote, badge: pendingPayments.length },
            { id: "users", label: "Manajemen User", icon: Users },
            { id: "global", label: "Kontrol Global", icon: Globe },
            { id: "codes", label: "Kode Akses", icon: Key },
            { id: "devices", label: "Monitoring Device", icon: Smartphone },
            { id: "stats", label: "Statistik", icon: BarChart3 },
            { id: "leads", label: "Pesan Masuk", icon: MessageSquare, badge: supportLeads.filter(l => l.status === 'unread').length },
            { id: "settings", label: "Pengaturan", icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer relative ${
                activeTab === item.id 
                  ? "bg-app-surface/10 text-app-accent border-l-4 border-app-accent" 
                  : "text-white/60 hover:text-white hover:bg-app-surface/5"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
              {item.badge && item.badge > 0 && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-rose-500 text-white text-[9px] font-black rounded-full flex items-center justify-center animate-pulse">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button onClick={onClose} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer">
            <X className="w-3.5 h-3.5" /> Tutup Panel
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-app-surface border-b border-app-border flex items-center justify-between px-8 shrink-0 shadow-sm">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-4 h-4 text-gray-400" />
            <h2 className="text-sm font-black text-app-text-main uppercase tracking-widest">
              {activeTab === 'owner' && 'Section 1: Kontrol Akun Owner'}
              {activeTab === 'payments' && 'Section 2: Pembayaran Masuk'}
              {activeTab === 'users' && 'Section 3: Manajemen User'}
              {activeTab === 'global' && 'Section 4: Kontrol Global'}
              {activeTab === 'codes' && 'Section 5: Kode Akses Khusus'}
              {activeTab === 'devices' && 'Section 6: Monitoring Aktivitas Device'}
              {activeTab === 'stats' && 'Section 7: Statistik Aplikasi'}
              {activeTab === 'leads' && 'Section 8: Pesan Bantuan & Lead'}
              {activeTab === 'settings' && 'Section 9: Pengaturan Aplikasi'}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-app-accent/10 border border-app-accent/20 text-app-accent text-[10px] font-black tracking-[0.2em] uppercase">
              ADMIN MODE
            </span>
          </div>
        </header>

        {/* Tab Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-app-background/50">
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* SECTION 1: OWNER ACCOUNT */}
            {activeTab === "owner" && (
              <div className="space-y-6 animate-fade-in">
                <div className="p-8 rounded-[2rem] bg-gradient-to-br from-app-primary to-[#123023] border border-app-accent/30 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute right-0 top-0 opacity-[0.03] w-64 h-64 transform translate-x-12 -translate-y-12">
                    <Crown className="w-full h-full" />
                  </div>
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-app-surface/10 border border-white/20 flex items-center justify-center text-app-accent">
                      <Crown className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black">Owner Account</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-black uppercase tracking-widest">PREMIUM PLUS SELAMANYA</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-app-surface/10 text-white/60 font-mono">ID: OWNER-001</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 relative z-10">
                    {[
                      { id: "unlockAll", label: "Buka Semua Bab & Level", desc: "Abaikan syarat kelulusan" },
                      { id: "bypassLock", label: "Bypass Ujian & Lock", desc: "Lewati kuis evaluasi" },
                      { id: "allPremium", label: "Akses Fitur Premium", desc: "Aktifkan status PRO" }
                    ].map((item) => (
                      <div key={item.id} className="p-4 rounded-2xl bg-app-surface/5 border border-white/10 space-y-3">
                        <div className="flex justify-between items-start">
                          <h4 className="text-[11px] font-black uppercase tracking-wider">{item.label}</h4>
                          <button 
                            onClick={() => toggleOwnerSetting(item.id as any)}
                            className={`w-10 h-5 rounded-full transition-colors relative cursor-pointer ${ownerToggles[item.id as keyof typeof ownerToggles] ? "bg-app-accent" : "bg-app-surface/10"}`}
                          >
                            <div className={`absolute top-1 w-3 h-3 rounded-full bg-app-surface transition-all ${ownerToggles[item.id as keyof typeof ownerToggles] ? "left-6" : "left-1"}`} />
                          </button>
                        </div>
                        <p className="text-[9px] text-white/50">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* TRIAL MANAGEMENT SECTION */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <h4 className="text-[11px] font-black uppercase tracking-wider mb-4 text-app-accent">Trial System Testing</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button 
                        onClick={() => {
                          const updated = resetTrial();
                          onUpdateProfile({ ...userProfile, ...updated });
                          alert("Trial berhasil direset ke 7 hari.");
                        }}
                        className="px-4 py-3 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-600/50 text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5" /> Reset Trial User Ini
                      </button>
                      <button 
                        onClick={() => {
                          const updated = simulateExpiredTrial();
                          onUpdateProfile({ ...userProfile, ...updated });
                          alert("Simulasi expired aktif (trial dimulai 8 hari yang lalu).");
                        }}
                        className="px-4 py-3 bg-rose-600/20 hover:bg-rose-600/30 border border-rose-600/50 text-rose-400 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Clock className="w-3.5 h-3.5" /> Simulasi Trial Expired
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                    <button 
                      onClick={() => {
                        if(confirm("Anda yakin ingin mereset semua kemajuan belajar Anda?")) {
                          onUpdateProfile({ ...userProfile, xp: 0, coins: 0, streak: 0, completedLessons: [] });
                          alert("Progress berhasil direset.");
                        }
                      }}
                      className="px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Reset Progress Saya
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 2: PAYMENT MANAGEMENT */}
            {activeTab === "payments" && (
              <div className="space-y-6 animate-fade-in">
                {/* Summary Header */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-6 bg-app-primary rounded-3xl text-white shadow-lg">
                    <span className="text-[10px] font-black uppercase opacity-60 tracking-widest block mb-1">Pendapatan Bulan Ini</span>
                    <h3 className="text-2xl font-black font-mono">Rp{calculateRevenue("month").toLocaleString()}</h3>
                  </div>
                  <div className="p-6 bg-app-surface rounded-3xl border border-app-border shadow-sm">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Premium Aktif</span>
                    <h3 className="text-2xl font-black font-mono text-app-primary">{premiumTokens.filter(t => t.status === 'used').length} User</h3>
                  </div>
                  <div className="p-6 bg-app-surface rounded-3xl border border-app-border shadow-sm flex items-center justify-between">
                    <div>
                       <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Pending</span>
                       <h3 className="text-2xl font-black font-mono text-rose-500">{pendingPayments.length}</h3>
                    </div>
                    <button 
                      onClick={() => setShowManualTokenDialog(true)}
                      className="p-3 bg-app-accent text-white rounded-2xl hover:scale-105 transition-all cursor-pointer"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Main Payments Table */}
                <div className="bg-app-surface rounded-3xl border border-app-border shadow-sm overflow-hidden">
                   <div className="p-6 border-b border-app-border flex justify-between items-center">
                      <h3 className="text-sm font-black text-app-text-main uppercase tracking-widest">Antrian Pembayaran Pending</h3>
                   </div>
                   
                   <div className="overflow-x-auto">
                     <table className="w-full text-left">
                        <thead>
                           <tr className="bg-app-background text-[10px] font-black text-gray-400 uppercase tracking-wider border-b border-app-border">
                              <th className="px-6 py-4">User & Paket</th>
                              <th className="px-6 py-4">Nominal</th>
                              <th className="px-6 py-4">Waktu Upload</th>
                              <th className="px-6 py-4">Bukti</th>
                              <th className="px-6 py-4 text-right">Aksi</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                           {pendingPayments.length === 0 ? (
                             <tr><td colSpan={5} className="px-6 py-12 text-center text-gray-400 text-xs italic">Semua pembayaran sudah diproses. ☕</td></tr>
                           ) : (
                             pendingPayments.map(p => (
                               <tr key={p.id} className="hover:bg-app-background/50 transition-colors">
                                  <td className="px-6 py-4">
                                     <div className="flex flex-col">
                                        <span className="text-sm font-bold text-app-text-main">{p.userName}</span>
                                                                                 <div className="flex items-center gap-2 mt-1">
                                            <span className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase tracking-wider ${p.purchaseType === 'chat' || p.package === 'chat_addon' ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'}`}>
                                               {p.purchaseType === 'chat' || p.package === 'chat_addon' ? 'AI Chat Plus' : 'Premium Materi'}
                                            </span>
                                            <span className="text-[10px] text-gray-400 font-bold uppercase">{p.phone} • {p.package === 'annual' ? 'TAHUNAN' : p.package === 'chat_addon' ? 'CHAT ADDON' : 'BULANAN'}</span>
                                         </div>

                                     </div>
                                  </td>
                                  <td className="px-6 py-4">
                                     <span className="text-xs font-black text-app-primary font-mono">Rp{p.nominal.toLocaleString()}</span>
                                  </td>
                                  <td className="px-6 py-4">
                                     <span className="text-[10px] font-bold text-app-text-muted">{new Date(p.timestamp).toLocaleString("id-ID")}</span>
                                  </td>
                                  <td className="px-6 py-4">
                                     <button 
                                      onClick={() => setShowImageModal(p.photoBase64)}
                                      className="w-12 h-12 rounded-lg bg-gray-100 border border-app-border overflow-hidden cursor-pointer hover:border-app-accent transition-all"
                                     >
                                        <img src={p.photoBase64} alt="Proof" className="w-full h-full object-cover" />
                                     </button>
                                  </td>
                                  <td className="px-6 py-4 text-right space-x-2">
                                     <button 
                                      onClick={() => handleConfirmPayment(p.id)}
                                      className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all cursor-pointer shadow-sm" title="Konfirmasi"
                                     >
                                        <Check className="w-4 h-4" />
                                     </button>
                                     <button 
                                      onClick={() => handleRejectPayment(p.id)}
                                      className="p-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-all cursor-pointer shadow-sm" title="Tolak"
                                     >
                                        <Ban className="w-4 h-4" />
                                     </button>
                                  </td>
                               </tr>
                             ))
                           )}
                        </tbody>
                     </table>
                   </div>
                </div>

                {/* Transaction History */}
                <div className="bg-app-surface rounded-3xl border border-app-border shadow-sm overflow-hidden">
                   <div className="p-6 border-b border-app-border bg-app-background/50">
                      <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Riwayat Transaksi</h3>
                   </div>
                   <div className="overflow-x-auto">
                     <table className="w-full text-left text-[10px]">
                        <thead>
                           <tr className="bg-app-background/50 text-gray-400 font-black uppercase border-b border-app-border">
                              <th className="px-6 py-3">Nama</th>
                              <th className="px-6 py-3">Paket</th>
                              <th className="px-6 py-3">Nominal</th>
                              <th className="px-6 py-3">Status</th>
                              <th className="px-6 py-3 text-right">Aksi</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                           {transactionHistory.length === 0 ? (
                             <tr><td colSpan={5} className="px-6 py-4 text-center text-gray-400 italic">Belum ada riwayat.</td></tr>
                           ) : (
                             transactionHistory.sort((a,b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).map(p => (
                               <tr key={p.id}>
                                  <td className="px-6 py-3 font-bold">{p.userName}</td>
                                  <td className="px-6 py-3">{p.package.toUpperCase()}</td>
                                  <td className="px-6 py-3 font-mono">Rp{p.nominal.toLocaleString()}</td>
                                  <td className="px-6 py-3">
                                     <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-tighter
                                      ${p.status === 'confirmed' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                                        {p.status}
                                     </span>
                                  </td>
                                  <td className="px-6 py-3 text-right">
                                     <button 
                                      onClick={() => window.open(`https://wa.me/${p.phone.replace(/^0/, '62')}`, '_blank')}
                                      className="p-1.5 text-app-primary hover:bg-emerald-50 rounded-lg"
                                     >
                                        <ExternalLink className="w-3.5 h-3.5" />
                                     </button>
                                  </td>
                               </tr>
                             ))
                           )}
                        </tbody>
                     </table>
                   </div>
                </div>
              </div>
            )}
            {activeTab === "users" && (
              <div className="bg-app-surface rounded-3xl border border-app-border shadow-sm overflow-hidden animate-fade-in">
                <div className="p-6 border-b border-app-border bg-app-background/50 flex justify-between items-center">
                  <h3 className="text-sm font-black text-app-text-main uppercase tracking-widest">Database User Lokal</h3>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">{savedUsers.length} Terdaftar</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-app-background text-[10px] font-black text-gray-400 uppercase tracking-wider border-b border-app-border">
                        <th className="px-6 py-4">Nama User</th>
                        <th className="px-6 py-4">Level Terakhir</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {savedUsers.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-6 py-12 text-center text-gray-400 text-xs italic">Belum ada user lain yang terdaftar di device ini.</td>
                        </tr>
                      ) : (
                        savedUsers.map((user, idx) => (
                          <tr key={idx} className="hover:bg-app-background/50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-app-primary/10 flex items-center justify-center text-app-primary text-xs font-bold">{user.name?.[0] || "U"}</div>
                                <span className="text-sm font-bold text-app-text-main">{user.name || "Unknown User"}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-xs font-mono font-bold text-app-text-muted">Level {user.lastLevel || "1"}</span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex flex-col gap-1">
                                {user.isPremium ? (
                                  <div className="flex flex-col">
                                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-600 text-[9px] font-black uppercase tracking-widest text-center">PREMIUM</span>
                                    {user.premiumExpiresAt && (
                                      <span className="text-[8px] text-gray-400 font-bold mt-0.5">Exp: {new Date(user.premiumExpiresAt).toLocaleDateString()}</span>
                                    )}
                                  </div>
                                ) : (
                                  <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-400 text-[9px] font-black uppercase tracking-widest text-center">GRATIS</span>
                                )}
                                {user.isChatPremium && (
                                  <div className="flex flex-col">
                                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-600 text-[9px] font-black uppercase tracking-widest text-center">CHAT PLUS</span>
                                    {user.chatPremiumExpiresAt && (
                                      <span className="text-[8px] text-gray-400 font-bold mt-0.5">Exp: {new Date(user.chatPremiumExpiresAt).toLocaleDateString()}</span>
                                    )}
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex flex-col gap-2 items-end">
                                <div className="flex items-center gap-1">
                                  <span className="text-[8px] font-black text-gray-400 uppercase">Set Exp:</span>
                                  <input 
                                    type="date" 
                                    className="px-2 py-1 bg-app-background border border-app-border rounded text-[9px] outline-none"
                                    onChange={(e) => handleUpdateUserExpiry(user.id || user.userId, e.target.value, 'materi')}
                                  />
                                </div>
                                <div className="flex gap-1">
                                  <button onClick={() => handleUpdateUserExpiry(user.id || user.userId, "2099-12-31", 'materi')} className="p-1.5 text-app-accent hover:bg-app-accent/10 rounded-lg transition-all" title="Buka Premium Selamanya"><Crown className="w-4 h-4" /></button>
                                  <button className="p-1.5 text-emerald-500 hover:bg-emerald-50 rounded-lg transition-all" title="Reset Progress"><RefreshCw className="w-4 h-4" /></button>
                                  <button className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-all" title="Kunci Semua"><Lock className="w-4 h-4" /></button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* SECTION 3: GLOBAL CONTROLS */}
            {activeTab === "global" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                {[
                  { id: "maintenance", label: "Mode Maintenance", desc: "Matikan akses aplikasi untuk semua user", icon: ShieldAlert, color: "rose" },
                  { id: "allPremiumFree", label: "Semua User Premium Gratis", desc: "Aktifkan status PRO untuk seluruh user", icon: Crown, color: "amber" },
                  { id: "noAds", label: "Nonaktifkan Iklan", desc: "Sembunyikan semua banner promosi premium", icon: EyeOff, color: "blue" },
                  { id: "demoMode", label: "Mode Demo", desc: "Tampilkan data dummy untuk keperluan presentasi", icon: LayoutDashboard, color: "emerald" }
                ].map((item) => {
                  const isActive = globalSettings[item.id as keyof typeof globalSettings];
                  return (
                    <div key={item.id} className="p-6 bg-app-surface rounded-3xl border border-app-border shadow-sm space-y-4">
                      <div className="flex justify-between items-start">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-${item.color}-500/10 text-${item.color}-600`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <button 
                          onClick={() => handleSaveGlobalSettings({ ...globalSettings, [item.id]: !isActive })}
                          className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${isActive ? "bg-app-primary" : "bg-gray-200"}`}
                        >
                          <div className={`absolute top-1 w-4 h-4 rounded-full bg-app-surface transition-all ${isActive ? "left-7" : "left-1"}`} />
                        </button>
                      </div>
                      <div>
                        <h4 className="font-black text-sm text-app-text-main">{item.label}</h4>
                        <p className="text-[10px] text-gray-400 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* SECTION 4: CODE GENERATOR */}
            {activeTab === "codes" && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-app-surface p-6 rounded-3xl border border-app-border shadow-sm space-y-6">
                  <h3 className="text-sm font-black text-app-text-main uppercase tracking-widest flex items-center gap-2">
                    <Key className="w-4 h-4 text-app-accent" /> Generate Kode Akses Premium
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider ml-1">Nama User</label>
                      <input id="new-code-name" type="text" className="w-full px-4 py-3 rounded-xl bg-app-background border border-app-border text-xs font-bold outline-none" placeholder="Contoh: Ahmad" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider ml-1">Durasi Akses</label>
                      <select id="new-code-duration" className="w-full px-4 py-3 rounded-xl bg-app-background border border-app-border text-xs font-bold outline-none">
                        <option value="7">7 Hari</option>
                        <option value="30">30 Hari</option>
                        <option value="forever">Selamanya</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <button 
                        onClick={() => {
                          const name = (document.getElementById('new-code-name') as HTMLInputElement).value;
                          const dur = (document.getElementById('new-code-duration') as HTMLSelectElement).value;
                          if (!name) return alert("Pilih nama user!");
                          generateNewCode(name, dur);
                          (document.getElementById('new-code-name') as HTMLInputElement).value = "";
                        }}
                        className="w-full py-3 bg-app-accent hover:bg-app-accent text-white font-black rounded-xl text-[10px] uppercase tracking-widest shadow-lg shadow-[#D4A359]/20 transition-all cursor-pointer"
                      >
                        Generate Kode
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-app-surface rounded-3xl border border-app-border shadow-sm overflow-hidden">
                  <div className="p-4 bg-app-background border-b border-app-border flex justify-between items-center">
                    <span className="text-[10px] font-black text-gray-400 uppercase">Daftar Kode Aktif</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="bg-app-background/50 text-[9px] font-black text-gray-400 uppercase border-b border-app-border">
                          <th className="px-6 py-3">Kode</th>
                          <th className="px-6 py-3">User</th>
                          <th className="px-6 py-3">Durasi</th>
                          <th className="px-6 py-3">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {generatedCodes.length === 0 ? (
                          <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-400 italic">Belum ada kode yang di-generate.</td></tr>
                        ) : (
                          generatedCodes.map((code) => (
                            <tr key={code.id}>
                              <td className="px-6 py-3 font-mono font-black text-app-primary">{code.code}</td>
                              <td className="px-6 py-3 font-bold">{code.assignedTo}</td>
                              <td className="px-6 py-3"><span className="px-2 py-0.5 rounded bg-app-accent/20 text-app-accent text-[9px] font-bold">{code.duration}</span></td>
                              <td className="px-6 py-3">
                                <div className="flex items-center gap-2">
                                  <input 
                                    type="date" 
                                    className="px-2 py-1 bg-app-background border border-app-border rounded text-[9px] outline-none"
                                    onChange={(e) => handleUpdateCodeExpiry(code.id, e.target.value)}
                                  />
                                  <button onClick={() => deleteCode(code.id)} className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 6: DEVICE MONITORING */}
            {activeTab === "devices" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-black text-app-primary dark:text-white uppercase tracking-tight">Monitoring Aktivitas Device</h3>
                    <p className="text-[10px] text-app-text-muted font-bold uppercase tracking-widest mt-1">Lacak penggunaan dan keamanan perangkat</p>
                  </div>
                  <button 
                    onClick={fetchDeviceActivities}
                    className="p-3 bg-app-accent/10 text-app-accent rounded-2xl hover:bg-app-accent/20 transition-all cursor-pointer shadow-sm shadow-app-accent/10"
                  >
                    <RefreshCw className={`w-5 h-5 ${isFetchingActivities ? 'animate-spin' : ''}`} />
                  </button>
                </div>

                <div className="bg-app-surface rounded-[2.5rem] border border-app-border shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-app-background text-[10px] font-black text-gray-400 uppercase tracking-wider border-b border-app-border">
                          <th className="px-6 py-4">Device ID & Tanggal</th>
                          <th className="px-6 py-4">Activation Code</th>
                          <th className="px-6 py-4">Open</th>
                          <th className="px-6 py-4">Chat</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4 text-right">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50 dark:divide-white/5">
                        {isFetchingActivities ? (
                          <tr><td colSpan={6} className="px-6 py-20 text-center text-gray-400 italic">Memuat data aktivitas dari database...</td></tr>
                        ) : deviceActivities.length === 0 ? (
                          <tr>
                            <td colSpan={6} className="px-6 py-20 text-center space-y-4">
                              <p className="text-gray-400 italic">Belum ada data aktivitas terdeteksi.</p>
                              {isSupabaseConfigured && (
                                <div className="max-w-md mx-auto p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-left">
                                  <p className="text-xs text-amber-800 dark:text-amber-200 font-bold mb-2">💡 Tips untuk Admin:</p>
                                  <p className="text-[10px] text-amber-700 dark:text-amber-300 leading-relaxed">
                                    Jika Anda baru pertama kali menggunakan Supabase, pastikan Anda telah menjalankan perintah SQL yang ada di file <code className="bg-amber-100 dark:bg-amber-800 px-1 rounded">supabase_setup.sql</code> di Supabase SQL Editor untuk membuat tabel yang diperlukan.
                                  </p>
                                </div>
                              )}
                            </td>
                          </tr>
                        ) : (
                          deviceActivities.map((device) => {
                            const isSuspicious = device.open_count > 50 || device.ai_chat_count > 60; 
                            return (
                              <tr key={device.id} className={`hover:bg-app-background/30 transition-colors ${isSuspicious ? 'bg-amber-500/5' : ''}`}>
                                <td className="px-6 py-4">
                                  <div className="flex flex-col">
                                    <span className="text-xs font-mono font-black text-app-primary dark:text-app-accent">#{device.device_id.substring(0, 8)}</span>
                                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{new Date(device.activity_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <span className="text-[10px] font-black text-app-text-main dark:text-white font-mono">{device.activation_code || "-"}</span>
                                </td>
                                <td className="px-6 py-4">
                                  <span className={`text-sm font-black ${device.open_count > 50 ? 'text-rose-500' : 'text-app-primary dark:text-white'}`}>{device.open_count}</span>
                                </td>
                                <td className="px-6 py-4">
                                  <span className={`text-sm font-black ${device.ai_chat_count > 60 ? 'text-rose-500' : 'text-app-primary dark:text-white'}`}>{device.ai_chat_count}</span>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex flex-col gap-1">
                                    {device.is_blocked ? (
                                      <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[8px] font-black uppercase text-center shadow-sm shadow-rose-500/20">BLOKIR</span>
                                    ) : device.is_flagged ? (
                                      <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[8px] font-black uppercase text-center shadow-sm shadow-amber-500/20">DITANDAI</span>
                                    ) : (
                                      <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[8px] font-black uppercase text-center shadow-sm shadow-emerald-500/20">NORMAL</span>
                                    )}
                                    {isSuspicious && !device.is_flagged && !device.is_blocked && (
                                      <span className="flex items-center gap-1 text-[8px] text-amber-600 font-black uppercase mt-1">
                                        <ShieldAlert className="w-2.5 h-2.5" /> Mencurigakan
                                      </span>
                                    )}
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-right space-x-1.5">
                                  {!device.is_flagged && !device.is_blocked && (
                                    <button 
                                      onClick={() => {
                                        const reason = prompt("Alasan menandai device ini:");
                                        if (reason) handleUpdateDeviceStatus(device.device_id, { is_flagged: true, flag_reason: reason });
                                      }}
                                      className="p-2 bg-amber-500/10 text-amber-600 rounded-lg hover:bg-amber-500 text-white transition-all cursor-pointer"
                                      title="Tandai Mencurigakan"
                                    >
                                      <ShieldAlert className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                  {device.is_blocked ? (
                                    <button 
                                      onClick={() => handleUpdateDeviceStatus(device.device_id, { is_blocked: false })}
                                      className="p-2 bg-emerald-500/10 text-emerald-600 rounded-lg hover:bg-emerald-500 text-white transition-all cursor-pointer"
                                      title="Buka Blokir"
                                    >
                                      <Unlock className="w-3.5 h-3.5" />
                                    </button>
                                  ) : (
                                    <button 
                                      onClick={() => {
                                        const reason = prompt("Alasan blokir device ini (WAJIB):");
                                        if (!reason) return;
                                        if (confirm("Yakin blokir device ini? User tidak akan bisa akses aplikasi sampai kamu buka blokirnya")) {
                                          handleUpdateDeviceStatus(device.device_id, { is_blocked: true, blocked_reason: reason });
                                        }
                                      }}
                                      className="p-2 bg-rose-500/10 text-rose-600 rounded-lg hover:bg-rose-500 text-white transition-all cursor-pointer"
                                      title="Blokir Device"
                                    >
                                      <Ban className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 7: STATS */}
            {activeTab === "stats" && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: "Total User", value: "124", icon: Users, color: "blue" },
                    { label: "Sesi Hari Ini", value: "32", icon: Clock, color: "emerald" },
                    { label: "Waktu Belajar Avg", value: "24m", icon: BarChart3, color: "amber" },
                    { label: "Revenue Est.", value: "Rp 1.2jt", icon: Crown, color: "rose" }
                  ].map((stat, idx) => (
                    <div key={idx} className="p-5 bg-app-surface rounded-3xl border border-app-border shadow-sm flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-${stat.color}-500/10 text-${stat.color}-600 flex items-center justify-center`}>
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[9px] text-gray-400 font-black uppercase tracking-wider block">{stat.label}</span>
                        <span className="text-lg font-black text-app-text-main font-mono">{stat.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-app-surface rounded-3xl border border-app-border shadow-sm">
                    <h4 className="text-[11px] font-black text-app-text-main uppercase tracking-widest mb-6">Bab Paling Populer</h4>
                    <div className="space-y-4">
                      {[
                        { name: "Pelajaran 1: Salam & Perkenalan", count: 85, color: "#0A3B29" },
                        { name: "Pelajaran 2: Anggota Keluarga", count: 62, color: "#D4A359" },
                        { name: "Pelajaran 3: Rumah & Perabotan", count: 44, color: "#D4A359" }
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <div className="flex justify-between text-[10px] font-bold">
                            <span className="text-app-text-muted">{item.name}</span>
                            <span className="text-gray-400">{item.count}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${item.count}%`, backgroundColor: item.color }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-app-primary rounded-3xl border border-white/5 text-white">
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-app-accent mb-4">LOG AKTIVITAS TERBARU</h4>
                    <div className="space-y-3 font-mono text-[9px]">
                      {[
                        { time: "22:14", msg: "User 'Abdul' menyelesaikan Bab 1." },
                        { time: "22:10", msg: "Admin meng-generate kode ARAB-4521." },
                        { time: "22:05", msg: "Sesi belajar baru dimulai oleh 'Muhsin'." },
                        { time: "21:58", msg: "User 'Ustadz' melakukan bypass ujian." }
                      ].map((log, idx) => (
                        <div key={idx} className="flex gap-3 text-white/40">
                          <span className="text-app-accent">{log.time}</span>
                          <span>{log.msg}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "leads" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-black text-app-primary dark:text-white">Daftar Pesan Bantuan</h3>
                    <p className="text-[10px] text-app-text-muted font-bold uppercase tracking-widest mt-1">Total {supportLeads.length} Pesan dari User</p>
                  </div>
                  <button 
                    onClick={() => {
                      if(confirm("Hapus semua pesan?")) {
                        localStorage.removeItem("support_leads");
                        setSupportLeads([]);
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-rose-500/10 text-rose-500 rounded-xl text-[10px] font-black uppercase hover:bg-rose-500/20 transition-all cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" /> Bersihkan Semua
                  </button>
                </div>

                {/* LEAD STATISTICS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 bg-app-surface rounded-3xl border border-app-border shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-app-accent/10 text-app-accent flex items-center justify-center">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-400 font-black uppercase tracking-wider block">Total Pesan</span>
                      <span className="text-lg font-black text-app-text-main font-mono">{supportLeads.length}</span>
                    </div>
                  </div>
                  <div className="p-5 bg-app-surface rounded-3xl border border-app-border shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-400 font-black uppercase tracking-wider block">Belum Dibaca</span>
                      <span className="text-lg font-black text-app-text-main font-mono">{supportLeads.filter(l => l.status === 'unread').length}</span>
                    </div>
                  </div>
                  <div className="p-5 bg-app-surface rounded-3xl border border-app-border shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-400 font-black uppercase tracking-wider block">Pesan Hari Ini</span>
                      <span className="text-lg font-black text-app-text-main font-mono">
                        {supportLeads.filter(l => new Date(l.timestamp).toDateString() === new Date().toDateString()).length}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {supportLeads.length === 0 ? (
                    <div className="p-20 text-center space-y-4 bg-app-surface rounded-[2.5rem] border border-app-border border-dashed">
                      <div className="w-16 h-16 bg-app-accent/5 rounded-full flex items-center justify-center mx-auto text-app-accent/30">
                        <MessageSquare className="w-8 h-8" />
                      </div>
                      <p className="text-sm font-bold text-gray-400">Belum ada pesan bantuan masuk.</p>
                    </div>
                  ) : (
                    supportLeads.map((lead) => (
                      <div 
                        key={lead.id} 
                        className={`p-6 bg-app-surface rounded-[2.5rem] border transition-all ${lead.status === 'unread' ? 'border-app-accent bg-app-accent/[0.02]' : 'border-app-border'}`}
                      >
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div className="space-y-4 flex-1">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-2xl bg-app-accent/10 flex items-center justify-center text-app-accent font-black">
                                {lead.name.charAt(0)}
                              </div>
                              <div>
                                <h4 className="text-sm font-black text-app-primary dark:text-white">{lead.name}</h4>
                                <div className="flex items-center gap-3 mt-0.5">
                                  <span className="flex items-center gap-1 text-[10px] text-app-text-muted font-bold">
                                    <Clock className="w-3 h-3" /> {new Date(lead.timestamp).toLocaleString('id-ID')}
                                  </span>
                                  {lead.status === 'unread' && (
                                    <span className="px-2 py-0.5 rounded-full bg-app-accent text-white text-[8px] font-black uppercase">BARU</span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="p-3 bg-app-background/50 rounded-xl space-y-1">
                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                                  <Phone className="w-3 h-3" /> WhatsApp
                                </p>
                                <p className="text-xs font-bold text-app-primary dark:text-app-accent">{lead.phone}</p>
                              </div>
                              <div className="p-3 bg-app-background/50 rounded-xl space-y-1">
                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                                  <MapPin className="w-3 h-3" /> Lokasi
                                </p>
                                <p className="text-xs font-bold text-app-primary dark:text-white truncate">{lead.address || "-"}</p>
                              </div>
                            </div>

                            <div className="p-4 bg-app-background rounded-2xl border border-app-border">
                              <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Pesan:</p>
                              <p className="text-xs leading-relaxed text-app-text-main font-medium">{lead.message}</p>
                            </div>
                          </div>

                          <div className="flex flex-row md:flex-col gap-2 shrink-0">
                            {lead.status === 'unread' && (
                              <button 
                                onClick={() => {
                                  const newLeads = supportLeads.map(l => l.id === lead.id ? {...l, status: 'read'} : l);
                                  setSupportLeads(newLeads);
                                  localStorage.setItem("support_leads", JSON.stringify(newLeads));
                                }}
                                className="px-4 py-2 bg-app-accent text-white text-[10px] font-black rounded-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                              >
                                Tandai Dibaca
                              </button>
                            )}
                            <button 
                              onClick={() => {
                                const whatsappUrl = `https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Halo%20${encodeURIComponent(lead.name)},%20kami%20dari%20CS%20ArabiyPro%20ingin%20menanggapi%20pesan%20Anda:%20${encodeURIComponent(lead.message)}`;
                                window.open(whatsappUrl, '_blank');
                              }}
                              className="px-4 py-2 bg-emerald-500 text-white text-[10px] font-black rounded-xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                            >
                              <Phone className="w-3 h-3" /> Balas via WA
                            </button>
                            <button 
                              onClick={() => {
                                const newLeads = supportLeads.filter(l => l.id !== lead.id);
                                setSupportLeads(newLeads);
                                localStorage.setItem("support_leads", JSON.stringify(newLeads));
                              }}
                              className="px-4 py-2 bg-rose-500/10 text-rose-500 text-[10px] font-black rounded-xl hover:bg-rose-500/20 transition-all cursor-pointer"
                            >
                              Hapus
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* SECTION 8: SETTINGS */}
            {activeTab === "settings" && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* HARGA PAKET */}
                    <div className="p-8 bg-app-surface rounded-[2.5rem] border border-app-border space-y-6">
                       <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                             <Crown className="w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="text-sm font-black text-app-text-main uppercase tracking-widest">Harga Paket</h4>
                             <p className="text-[10px] text-gray-400 font-bold">Atur harga langganan ArabiyPro</p>
                          </div>
                       </div>
                       <div className="space-y-4">
                          <div className="space-y-1.5">
                             <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Paket Bulanan (IDR)</label>
                             <input 
                               type="number" 
                               value={appSettings.prices.monthly}
                               onChange={(e) => setAppSettings({...appSettings, prices: {...appSettings.prices, monthly: Number(e.target.value)}})}
                               className="w-full px-4 py-3 bg-app-background border border-app-border rounded-xl outline-none focus:border-app-accent font-mono text-sm"
                             />
                          </div>
                          <div className="space-y-1.5">
                             <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Paket Tahunan (IDR)</label>
                             <input 
                               type="number" 
                               value={appSettings.prices.annual}
                               onChange={(e) => setAppSettings({...appSettings, prices: {...appSettings.prices, annual: Number(e.target.value)}})}
                               className="w-full px-4 py-3 bg-app-background border border-app-border rounded-xl outline-none focus:border-app-accent font-mono text-sm"
                             />
                          </div>
                          <div className="space-y-1.5">
                             <label className="text-[10px] font-black text-gray-400 uppercase ml-1">AI Chat Plus (IDR)</label>
                             <input 
                               type="number" 
                               value={appSettings.prices.chat_addon}
                               onChange={(e) => setAppSettings({...appSettings, prices: {...appSettings.prices, chat_addon: Number(e.target.value)}})}
                               className="w-full px-4 py-3 bg-app-background border border-app-border rounded-xl outline-none focus:border-app-accent font-mono text-sm"
                             />
                          </div>
                       </div>
                    </div>

                    {/* KONTAK SUPPORT */}
                    <div className="p-8 bg-app-surface rounded-[2.5rem] border border-app-border space-y-6">
                       <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                             <MessageCircle className="w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="text-sm font-black text-app-text-main uppercase tracking-widest">Kontak & Support</h4>
                             <p className="text-[10px] text-gray-400 font-bold">Informasi yang tampil di halaman Bantuan</p>
                          </div>
                       </div>
                       <div className="space-y-4">
                          <div className="space-y-1.5">
                             <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Email Support</label>
                             <input 
                               type="text" 
                               value={appSettings.contacts.email}
                               onChange={(e) => setAppSettings({...appSettings, contacts: {...appSettings.contacts, email: e.target.value}})}
                               className="w-full px-4 py-3 bg-app-background border border-app-border rounded-xl outline-none focus:border-app-accent text-sm"
                             />
                          </div>
                          <div className="space-y-1.5">
                             <label className="text-[10px] font-black text-gray-400 uppercase ml-1">WhatsApp CS</label>
                             <input 
                               type="text" 
                               value={appSettings.contacts.whatsapp}
                               onChange={(e) => setAppSettings({...appSettings, contacts: {...appSettings.contacts, whatsapp: e.target.value}})}
                               className="w-full px-4 py-3 bg-app-background border border-app-border rounded-xl outline-none focus:border-app-accent text-sm"
                             />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                             <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Instagram</label>
                                <input 
                                  type="text" 
                                  value={appSettings.contacts.instagram}
                                  onChange={(e) => setAppSettings({...appSettings, contacts: {...appSettings.contacts, instagram: e.target.value}})}
                                  className="w-full px-4 py-3 bg-app-background border border-app-border rounded-xl outline-none focus:border-app-accent text-sm"
                                />
                             </div>
                             <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Twitter / X</label>
                                <input 
                                  type="text" 
                                  value={appSettings.contacts.twitter}
                                  onChange={(e) => setAppSettings({...appSettings, contacts: {...appSettings.contacts, twitter: e.target.value}})}
                                  className="w-full px-4 py-3 bg-app-background border border-app-border rounded-xl outline-none focus:border-app-accent text-sm"
                                />
                             </div>
                          </div>

                          {/* LOKASI KANTOR */}
                          <div className="pt-4 border-t border-app-border space-y-4">
                             <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Nama Gedung / Kantor</label>
                                <input 
                                  type="text" 
                                  value={appSettings.office?.name || ""}
                                  onChange={(e) => setAppSettings({...appSettings, office: {...(appSettings.office || {address: ""}), name: e.target.value}})}
                                  className="w-full px-4 py-3 bg-app-background border border-app-border rounded-xl outline-none focus:border-app-accent text-sm"
                                  placeholder="Contoh: Gedung Al-Azhar Digital Hub"
                                />
                             </div>
                             <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Alamat Lengkap</label>
                                <textarea 
                                  value={appSettings.office?.address || ""}
                                  onChange={(e) => setAppSettings({...appSettings, office: {...(appSettings.office || {name: ""}), address: e.target.value}})}
                                  className="w-full h-20 px-4 py-3 bg-app-background border border-app-border rounded-xl outline-none focus:border-app-accent text-sm resize-none"
                                  placeholder="Masukkan alamat lengkap kantor..."
                                />
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* PEMBAYARAN */}
                    <div className="p-8 bg-app-surface rounded-[2.5rem] border border-app-border space-y-6">
                       <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                             <Banknote className="w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="text-sm font-black text-app-text-main uppercase tracking-widest">Metode Pembayaran</h4>
                             <p className="text-[10px] text-gray-400 font-bold">Rekening & QRIS untuk upgrade</p>
                          </div>
                       </div>
                       <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-3">
                             <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-gray-400 uppercase ml-1">No. Rek Mandiri</label>
                                <input 
                                  type="text" 
                                  value={appSettings.paymentMethods.bank_mandiri?.acc || ""}
                                  onChange={(e) => setAppSettings({...appSettings, paymentMethods: {...appSettings.paymentMethods, bank_mandiri: { acc: e.target.value, name: appSettings.paymentMethods.bank_mandiri?.name || "KARSO" }}})}
                                  className="w-full px-4 py-3 bg-app-background border border-app-border rounded-xl outline-none focus:border-app-accent text-sm font-mono"
                                />
                             </div>
                             <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-gray-400 uppercase ml-1">A/N Mandiri</label>
                                <input 
                                  type="text" 
                                  value={appSettings.paymentMethods.bank_mandiri?.name || ""}
                                  onChange={(e) => setAppSettings({...appSettings, paymentMethods: {...appSettings.paymentMethods, bank_mandiri: { name: e.target.value, acc: appSettings.paymentMethods.bank_mandiri?.acc || "1800017868961" }}})}
                                  className="w-full px-4 py-3 bg-app-background border border-app-border rounded-xl outline-none focus:border-app-accent text-sm"
                                />
                             </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                             <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-gray-400 uppercase ml-1">No. DANA</label>
                                <input 
                                  type="text" 
                                  value={appSettings.paymentMethods.e_wallet.acc}
                                  onChange={(e) => setAppSettings({...appSettings, paymentMethods: {...appSettings.paymentMethods, e_wallet: {...appSettings.paymentMethods.e_wallet, acc: e.target.value}}})}
                                  className="w-full px-4 py-3 bg-app-background border border-app-border rounded-xl outline-none focus:border-app-accent text-sm font-mono"
                                />
                             </div>
                             <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-gray-400 uppercase ml-1">A/N DANA</label>
                                <input 
                                  type="text" 
                                  value={appSettings.paymentMethods.e_wallet.name}
                                  onChange={(e) => setAppSettings({...appSettings, paymentMethods: {...appSettings.paymentMethods, e_wallet: {...appSettings.paymentMethods.e_wallet, name: e.target.value}}})}
                                  className="w-full px-4 py-3 bg-app-background border border-app-border rounded-xl outline-none focus:border-app-accent text-sm"
                                />
                             </div>
                          </div>
                          <div className="space-y-1.5">
                             <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Update Gambar QRIS</label>
                             <div 
                               onClick={() => {
                                 const input = document.createElement('input');
                                 input.type = 'file';
                                 input.accept = 'image/*';
                                 input.onchange = (e: any) => {
                                   const file = e.target.files?.[0];
                                   if (file) {
                                     const reader = new FileReader();
                                     reader.onloadend = () => {
                                       setAppSettings({
                                         ...appSettings, 
                                         paymentMethods: {
                                           ...appSettings.paymentMethods, 
                                           qris_image: reader.result as string
                                         }
                                       });
                                     };
                                     reader.readAsDataURL(file);
                                   }
                                 };
                                 input.click();
                               }}
                               className="w-full h-24 border-2 border-dashed border-app-border rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-app-accent/5 transition-all overflow-hidden relative group"
                             >
                               {appSettings.paymentMethods.qris_image ? (
                                 <>
                                   <img src={appSettings.paymentMethods.qris_image} alt="QRIS Preview" className="w-full h-full object-contain opacity-50 group-hover:opacity-30" />
                                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                      <p className="text-[10px] font-black text-app-accent bg-white dark:bg-app-surface px-3 py-1 rounded-full shadow-lg">Klik Ganti Gambar</p>
                                   </div>
                                 </>
                               ) : (
                                 <>
                                   <Smartphone className="w-5 h-5 text-gray-400" />
                                   <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Upload QRIS (PNG/JPG)</span>
                                 </>
                               )}
                             </div>
                          </div>
                          <div className="space-y-1.5">
                             <label className="text-[10px] font-black text-gray-400 uppercase ml-1">QRIS Data String (Fallback)</label>
                             <input 
                               type="text" 
                               value={appSettings.paymentMethods.qris_data}
                               onChange={(e) => setAppSettings({...appSettings, paymentMethods: {...appSettings.paymentMethods, qris_data: e.target.value}})}
                               className="w-full px-4 py-3 bg-app-background border border-app-border rounded-xl outline-none focus:border-app-accent text-sm"
                             />
                          </div>
                       </div>
                    </div>

                    {/* PROMO */}
                    <div className="p-8 bg-app-surface rounded-[2.5rem] border border-app-border space-y-6">
                       <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                             <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                                <Zap className="w-6 h-6" />
                             </div>
                             <div>
                                <h4 className="text-sm font-black text-app-text-main uppercase tracking-widest">Banner Promo</h4>
                                <p className="text-[10px] text-gray-400 font-bold">Aktifkan diskon/pengumuman</p>
                             </div>
                          </div>
                          <button 
                            onClick={() => setAppSettings({...appSettings, promo: {...appSettings.promo, isActive: !appSettings.promo.isActive}})}
                            className={`w-12 h-6 rounded-full relative transition-all ${appSettings.promo.isActive ? 'bg-app-accent' : 'bg-gray-300'}`}
                          >
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${appSettings.promo.isActive ? 'right-1' : 'left-1'}`} />
                          </button>
                       </div>
                       <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Pesan Promo</label>
                          <textarea 
                            value={appSettings.promo.text}
                            onChange={(e) => setAppSettings({...appSettings, promo: {...appSettings.promo, text: e.target.value}})}
                            className="w-full h-32 px-4 py-3 bg-app-background border border-app-border rounded-2xl outline-none focus:border-app-accent text-sm resize-none"
                          />
                       </div>
                    </div>
                 </div>

                 <div className="flex justify-end gap-4">
                    <button 
                      onClick={() => {
                         const appSet = JSON.parse(localStorage.getItem("app_settings") || "{}");
                         if (Object.keys(appSet).length > 0) setAppSettings(appSet);
                         alert("Perubahan dibatalkan.");
                      }}
                      className="px-8 py-4 bg-app-surface border border-app-border text-app-primary dark:text-white font-black uppercase tracking-widest rounded-2xl shadow-xl transition-all active:scale-95 cursor-pointer"
                    >
                       Batal
                    </button>
                    <button 
                      onClick={() => handleSaveAppSettings(appSettings)}
                      className="px-12 py-4 bg-app-accent text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-app-accent/30 hover:scale-[1.05] active:scale-95 transition-all cursor-pointer"
                    >
                       Simpan Perubahan
                    </button>
                 </div>
              </div>
            )}

          </div>
        </main>
      </div>

      {/* MANUAL TOKEN DIALOG */}
      {showManualTokenDialog && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
           <div className="bg-app-surface rounded-3xl w-full max-w-sm p-8 space-y-6 shadow-2xl border-2 border-app-accent">
              <div className="text-center">
                 <div className="w-16 h-16 bg-app-accent/10 rounded-2xl flex items-center justify-center mx-auto text-app-accent mb-4">
                    <Key className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-black text-app-primary">BUAT TOKEN MANUAL</h3>
                 <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Tanpa Proses Pembayaran</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                   <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Nama Penerima</label>
                   <input 
                    type="text" 
                    value={newManualToken.name}
                    onChange={(e) => setNewManualToken({...newManualToken, name: e.target.value})}
                    className="w-full px-4 py-3 bg-app-background border border-app-border rounded-xl text-sm focus:border-app-accent outline-none" 
                    placeholder="Nama user..."
                   />
                </div>
                <div className="space-y-1.5">
                   <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Paket</label>
                   <select 
                    value={newManualToken.package}
                    onChange={(e) => setNewManualToken({...newManualToken, package: e.target.value as any})}
                    className="w-full px-4 py-3 bg-app-background border border-app-border rounded-xl text-sm outline-none"
                   >
                      <option value="monthly">Bulanan (30 Hari)</option>
                      <option value="annual">Tahunan (365 Hari)</option>
                   </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                 <button onClick={() => setShowManualTokenDialog(false)} className="py-3 bg-gray-100 text-app-text-muted font-black rounded-xl text-xs uppercase tracking-widest cursor-pointer">Batal</button>
                 <button onClick={handleCreateManualToken} className="py-3 bg-app-accent text-white font-black rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-[#D4A359]/20 cursor-pointer">Generate</button>
              </div>
           </div>
        </div>
      )}

      {/* IMAGE ZOOM MODAL */}
      {showImageModal && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center p-8 bg-black/90 backdrop-blur-xl cursor-zoom-out"
          onClick={() => setShowImageModal(null)}
        >
           <img src={showImageModal} alt="Zoom" className="max-w-full max-h-full rounded-2xl shadow-2xl border-4 border-white/10" />
           <button className="absolute top-8 right-8 p-3 bg-app-surface/10 hover:bg-app-surface/20 rounded-full text-white">✕</button>
        </div>
      )}
    </div>
  );
}
