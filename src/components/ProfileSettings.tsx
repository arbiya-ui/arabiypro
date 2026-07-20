/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { User, Save, Target, Check, Crown, CheckCircle2, PartyPopper, TrendingUp } from "lucide-react";
import { UserProfile, UserLevelType, PremiumToken } from "../types";
import { validateToken, formatIndoDate } from "../lib/payment";
import { AVATAR_PRESETS } from "../data/curriculum";
import UserAvatar from "./UserAvatar";

interface ProfileSettingsProps {
  userProfile: UserProfile;
  onUpdateProfile: (updated: Partial<UserProfile>) => void;
}

export default function ProfileSettings({ userProfile, onUpdateProfile }: ProfileSettingsProps) {
  const [nameInput, setNameInput] = useState(userProfile.name);
  const [selectedAvatar, setSelectedAvatar] = useState(userProfile.avatar);
  const [targetMin, setTargetMin] = useState(userProfile.targetMinutes);
  
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Premium activation states
  const [premiumCode, setPremiumCode] = useState("");
  const [codeError, setCodeError] = useState("");
  const [codeSuccess, setCodeSuccess] = useState("");

  const handleActivateCode = () => {
    setCodeError("");
    setCodeSuccess("");
    
    if (!premiumCode) return;

    // Validate token format AA-XXXX-XXXX
    const cleanToken = premiumCode.trim().toUpperCase();
    
    // Check against premiumTokens storage
    const { valid, error, token } = validateToken(cleanToken);

    if (valid && token) {
      // Mark as used in storage
      const tokensJson = localStorage.getItem("premiumTokens");
      const tokens: PremiumToken[] = tokensJson ? JSON.parse(tokensJson) : [];
      
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + token.durationDays);

      const updatedTokens = tokens.map((t: PremiumToken) => 
        t.tokenCode === cleanToken 
          ? { ...t, status: "used" as const, activeDate: new Date().toISOString(), expiryDate: expiryDate.toISOString() } 
          : t
      );
      localStorage.setItem("premiumTokens", JSON.stringify(updatedTokens));

      // Update user profile
      onUpdateProfile({ 
        ...userProfile, 
        isPremium: true, 
        premiumCode: cleanToken,
        premiumExpires: expiryDate.toISOString()
      });
      
      setCodeSuccess(`Masyallah! Token "${cleanToken}" berhasil diaktifkan. Paket: Premium ${token.package === 'annual' ? 'Tahunan' : 'Bulanan'} berlaku sampai ${formatIndoDate(expiryDate.toISOString())}. Selamat belajar!`);
      setPremiumCode("");
    } else {
      if (error === "already_used") setCodeError("Token sudah pernah digunakan. Hubungi admin jika ada masalah.");
      else if (error === "expired") setCodeError("Token sudah kadaluarsa. Perpanjang premium Anda.");
      else setCodeError("Token tidak ditemukan. Pastikan penulisan benar atau hubungi admin.");
    }
  };

  const handleInputTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (val.length > 2) {
      val = val.substring(0, 2) + "-" + val.substring(2);
    }
    if (val.length > 7) {
      val = val.substring(0, 7) + "-" + val.substring(7);
    }
    setPremiumCode(val.substring(0, 12));
  };

  const handleSaveProfile = () => {
    onUpdateProfile({
      name: nameInput,
      avatar: selectedAvatar,
      targetMinutes: targetMin
    });
    
    localStorage.setItem("userAvatar", selectedAvatar);
    
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  return (
    <div id="settings-view" className="max-w-3xl mx-auto space-y-8 pb-12 bg-premium-navy-dark relative px-4 bg-geometric-dark">
      {/* DECORATIVE BACKGROUND PATTERN */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-secondary p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group glass">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 100 100" className="text-white fill-current">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
        
        <div className="relative z-10 space-y-2">
          <h2 className="text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 glass">
              <User className="w-7 h-7 text-accent" />
            </div>
            Pengaturan Profil
          </h2>
          <p className="text-white/60 text-sm max-w-md font-medium">
            Personalisasi identitas belajar Anda dan kelola pengaturan pengalaman belajar ArabiyPro.
          </p>
        </div>
        
        {/* PREMIUM BADGE INDICATOR */}
        <div className="relative z-10">
          {userProfile.isPremium ? (
            <div className="flex flex-col items-center gap-2 p-4 bg-accent/10 border border-accent/30 rounded-3xl backdrop-blur-md group-hover:border-accent/50 transition-all glass">
              <Crown className="w-8 h-8 text-accent animate-float" />
              <div className="text-center">
                <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em] block">Status Akun</span>
                <span className="text-sm font-bold text-white uppercase tracking-wider">Premium Elite</span>
              </div>
            </div>
          ) : (
            <button 
              onClick={() => (window as any).onNavigate?.('premium')}
              className="w-full sm:w-auto flex flex-col items-center gap-2 p-3 sm:p-4 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all cursor-pointer glass"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/40 glass">
                <Crown className="w-5 h-5" />
              </div>
              <div className="text-center">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest block">Akun Gratis</span>
                <span className="text-xs font-bold text-accent uppercase underline underline-offset-4">Upgrade Ke PRO</span>
              </div>
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* FORM UTAMA */}
        <div className="p-6 md:p-8 rounded-[2.5rem] bg-secondary shadow-xl border border-accent/10 relative overflow-hidden glass">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
          
          <div className="space-y-10">
            {/* SECTION: IDENTITAS */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent glass">
                  <User className="w-4 h-4" />
                </div>
                <h3 className="font-black text-sm text-white uppercase tracking-widest">Identitas Belajar</h3>
              </div>

              {/* AVATAR PRESENTS GRID SELECTOR */}
              <div className="space-y-4">
                <label className="text-[11px] font-black text-white/40 block uppercase tracking-widest">
                  Karakter Visual (Avatar)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                  {AVATAR_PRESETS.map((p) => {
                    const isSelected = selectedAvatar === p.id || selectedAvatar === p.emoji;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setSelectedAvatar(p.id)}
                        className={`p-2 rounded-[2rem] flex flex-col items-center justify-center relative cursor-pointer transition-all duration-300 group glass-dark
                          ${isSelected ? "bg-accent/10 border-2 border-accent/30 scale-105 shadow-lg" : "hover:bg-white/5 border-2 border-transparent"}`}
                      >
                        <div className={`w-16 h-16 flex items-center justify-center transform transition-transform group-hover:scale-110`}>
                          <UserAvatar avatar={p.id} className="w-full h-full" isActive={isSelected} />
                        </div>
                        <span className={`text-[9px] block font-black mt-2 transition-colors uppercase tracking-tight ${isSelected ? "text-accent" : "text-white/40"}`}>{p.name}</span>
                        {isSelected && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-primary rounded-full flex items-center justify-center shadow-md animate-bounce-subtle">
                            <Check className="w-3 h-3 stroke-[4]" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* NAME INPUT */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-white/40 block uppercase tracking-widest">
                  Nama Lengkap Anda
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="w-4 h-4 text-white/40 group-focus-within:text-accent transition-colors" />
                  </div>
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm text-white focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 font-bold transition-all glass-dark"
                    placeholder="Masukkan nama Anda..."
                  />
                </div>
              </div>
            </div>

            {/* SECTION: KOMITMEN & TARGET */}
            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent glass">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="font-black text-sm text-white uppercase tracking-widest">Target & Disiplin</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-white/40 block uppercase tracking-widest">
                    Pilih Target Durasi Harian
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[15, 30, 45].map((m) => {
                      const isActive = targetMin === m;
                      return (
                        <button
                          key={m}
                          onClick={() => setTargetMin(m)}
                          className={`
                            py-4 rounded-2xl text-xs font-black transition-all cursor-pointer border-2 glass
                            ${isActive 
                              ? "bg-accent border-accent text-primary shadow-lg shadow-accent/20" 
                              : "bg-white/5 border-white/10 text-white/40 hover:border-accent/40 hover:text-accent"}
                          `}
                        >
                          {m} Menit
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[10px] text-white/40 italic font-medium">
                    * Konsistensi lebih penting daripada durasi. Pilih yang realistis untuk Anda.
                  </p>
                </div>

                <div className="p-6 bg-secondary rounded-3xl border border-accent/20 text-white relative overflow-hidden group glass">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-12 h-12" />
                  </div>
                  <div className="relative z-10 space-y-4 text-left">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent">Progress Hari Ini</span>
                      <span className="text-xl font-black font-mono">{userProfile.minutesLearned} <span className="text-xs text-accent font-sans">/ {targetMin} Min</span></span>
                    </div>
                    <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5 glass">
                      <div 
                        className="h-full bg-accent shadow-[0_0_10px_rgba(201,168,76,0.5)] transition-all duration-1000" 
                        style={{ width: `${Math.min(100, (userProfile.minutesLearned / targetMin) * 100)}%` }}
                      />
                    </div>
                    <p className="text-[11px] font-medium text-white/60 leading-relaxed italic">
                      {userProfile.minutesLearned >= targetMin 
                        ? "Masyallah! Target tercapai. Teruskan istiqomah Anda! 🔥" 
                        : `Semangat! Anda butuh ${Math.max(0, targetMin - userProfile.minutesLearned)} menit lagi untuk mencapai target.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION: AI TECHNOLOGY STATUS */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 shadow-sm glass">
              <h3 className="font-black text-sm text-accent mb-4 uppercase tracking-widest">
                Status Layanan AI
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl glass-dark">
                  <div className="flex items-center gap-2">
                    <span>🤖</span>
                    <span className="text-sm font-bold text-white/80">AI Tutor Arab</span>
                  </div>
                  <span className="text-[10px] bg-accent/20 text-accent px-3 py-1 rounded-full font-black uppercase tracking-widest">
                    ✅ Aktif
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl glass-dark">
                  <div className="flex items-center gap-2">
                    <span>🔊</span>
                    <span className="text-sm font-bold text-white/80">Suara Arab (TTS)</span>
                  </div>
                  <span className="text-[10px] bg-accent/20 text-accent px-3 py-1 rounded-full font-black uppercase tracking-widest">
                    ✅ Aktif
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl glass-dark">
                  <div className="flex items-center gap-2">
                    <span>📚</span>
                    <span className="text-sm font-bold text-white/80">Kurikulum 32 Bab</span>
                  </div>
                  <span className="text-[10px] bg-accent/20 text-accent px-3 py-1 rounded-full font-black uppercase tracking-widest">
                    ✅ Aktif
                  </span>
                </div>
              </div>
              
              <p className="text-[10px] text-white/30 mt-4 text-center font-bold uppercase tracking-widest">
                Semua layanan berjalan normal
              </p>
            </div>

            {/* SECTION: AKTIVASI PREMIUM */}
            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent glass">
                  <Crown className="w-4 h-4" />
                </div>
                <h3 className="font-black text-sm text-white uppercase tracking-widest">Redeem Kode Akses</h3>
              </div>

            <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="text" 
                  value={premiumCode}
                  onChange={handleInputTokenChange}
                  placeholder="AA-XXXX-XXXX"
                  className="w-full sm:flex-1 px-4 sm:px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm font-mono font-black outline-none focus:border-accent transition-all uppercase tracking-widest text-white glass-dark placeholder:text-white/20"
                />
                <button 
                  onClick={handleActivateCode}
                  className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-accent hover:brightness-110 text-primary font-black text-xs uppercase tracking-[0.15em] rounded-2xl transition-all active:scale-95 shadow-xl shadow-accent/20 cursor-pointer border border-accent/50"
                >
                  AKTIFKAN
                </button>
              </div>
              
              {codeError && <p className="text-[10px] text-ruby font-black ml-1 animate-pulse">⚠️ {codeError}</p>}
              {codeSuccess && (
                <div className="p-5 bg-secondary border border-accent/40 text-white rounded-[2rem] space-y-3 animate-bounce-subtle shadow-xl shadow-accent/10 glass">
                  <div className="flex items-center gap-3">
                    <PartyPopper className="w-6 h-6 text-accent" />
                    <p className="text-xs font-black uppercase tracking-widest">Selamat! Akses Premium Aktif 🎉</p>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed font-bold italic">{codeSuccess}</p>
                </div>
              )}
            </div>

            {/* SECTION: TENTANG APLIKASI */}
            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent glass">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-black text-sm text-white uppercase tracking-widest">Tentang ArabiyPro</h3>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4 glass-dark">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/40 font-black uppercase tracking-widest">Versi Aplikasi</span>
                  <span className="text-white font-black">v2.4.0-Gold</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/40 font-black uppercase tracking-widest">Engine AI</span>
                  <span className="text-accent font-black">Gemini 2.0 Flash</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/40 font-black uppercase tracking-widest">Bantuan & Support</span>
                  <span className="text-accent font-black underline">support@arabiypro.id</span>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <p className="text-[10px] text-white/30 leading-relaxed text-center italic font-bold">
                    "Kuasai Bahasa Al-Qur'an, Dari Nol Hingga Mahir"
                  </p>
                </div>
              </div>
            </div>

            {/* FINAL ACTIONS */}
            <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="text-left">
                <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-1">Status Keamanan</p>
                <p className="text-xs text-accent font-black flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Data Terenkripsi Lokal
                </p>
              </div>
              <button
                onClick={handleSaveProfile}
                className={`w-full sm:w-auto px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 shadow-2xl border
                  ${saveSuccess 
                    ? "bg-accent text-primary shadow-accent/30 border-accent" 
                    : "bg-primary text-white hover:bg-secondary shadow-primary/20 border-white/10 cursor-pointer"}`}
              >
                {saveSuccess ? (
                  <>
                    <Check className="w-5 h-5 stroke-[4]" /> Perubahan Disimpan
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" /> Simpan Konfigurasi
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
