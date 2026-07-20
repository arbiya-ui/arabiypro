/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from "react";
import { 
  Sparkles, 
  Flame, 
  Trophy, 
  BookOpen, 
  Compass, 
  TrendingUp, 
  Volume2, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  BookMarked,
  Crown,
  BarChart3,
  User,
  MessageSquare,
  Bot,
  Smartphone,
  Gamepad2,
  Award,
  Bell,
  HelpCircle,
  ShieldCheck,
  Calendar,
  Zap,
  CheckCircle,
  AlertTriangle,
  History,
  Star,
  Target,
  Lock
} from "lucide-react";
import { UserProfile, UserLevelType, PaymentProof } from "../types";
import { DAILY_HADITS_LIST, CURRICULUM_DATA } from "../data/curriculum";
import UserAvatar, { UstadzAhmadAvatar } from "./UserAvatar";

const MOCK_KOSAKATA_SEARCH = [
  { ar: "كِتَابٌ", trans: "Kitaabun", id: "Buku" },
  { ar: "قَلَمٌ", trans: "Qalamun", id: "Pena" },
  { ar: "مَدْرَسَةٌ", trans: "Madrasatun", id: "Sekolah" },
  { ar: "بَيْتٌ", trans: "Baitun", id: "Rumah" },
  { ar: "مَسْجِدٌ", trans: "Masjidun", id: "Masjid" },
  { ar: "طَالِبٌ", trans: "Thaalibun", id: "Siswa" },
  { ar: "أُسْتَاذٌ", trans: "Ustadzun", id: "Guru" },
  { ar: "اللُّغَةُ العَرَبِيَّةُ", trans: "Al-lughatul 'arabiyyatu", id: "Bahasa Arab" }
];

const FEATURES_GRID_ITEMS = [
  { tab: "dictionary", params: null, title: "Mufrodat", name: "mufrodat", desc: "Belajar kosakata", icon: "📖", bgCircle: "bg-primary text-white shadow-xl shadow-primary/20" },
  { tab: "conversation", params: { scenarioId: "free" }, title: "Percakapan", name: "percakapan", desc: "Dialog sehari-hari", icon: "💬", bgCircle: "bg-accent text-white shadow-xl shadow-accent/20" },
  { tab: "practice", params: { subTab: "pronunciation" }, title: "Pengucapan", name: "pengucapan", desc: "Latih pelafalan", icon: "🎙️", bgCircle: "bg-teal text-white shadow-xl shadow-teal/20" },
  { tab: "practice", params: { subTab: "flashcards" }, title: "Latihan", name: "latihan", desc: "Uji kemampuan", icon: "✏️", bgCircle: "bg-teal/80 text-white shadow-xl shadow-teal/20" },
  { tab: "games", params: { game: "lexicon" }, title: "Leksikon Pro", name: "leksikon pro", desc: "Uji kosa kata", icon: "💎", bgCircle: "bg-primary/90 text-white shadow-xl shadow-primary/20" },
  { tab: "conversation", params: { scenarioId: "free" }, title: "AI Guru Arab", name: "ai guru arab", desc: "Tanya apa saja", icon: "🤖", bgCircle: "bg-teal/90 text-white shadow-xl shadow-teal/30" },
  { tab: "games", params: { game: "lobby" }, title: "Mastery Arena", name: "mastery arena", desc: "Asah kognitif", icon: "🏛️", bgCircle: "bg-accent text-white shadow-xl shadow-accent/20" },
  { tab: "learn", params: null, title: "Kurikulum", name: "kurikulum", desc: "Materi lengkap", icon: "🗺️", bgCircle: "bg-secondary text-white shadow-xl shadow-secondary/20" },
  { tab: "tajwid", params: null, title: "Tajwid", name: "tajwid", desc: "Belajar tajwid", icon: "🕌", bgCircle: "bg-accent/80 text-white shadow-xl shadow-accent/20" },
  { tab: "dictionary", params: null, title: "Kamus Saku", name: "kamus saku", desc: "Cari arti kata", icon: "📚", bgCircle: "bg-primary/80 text-white shadow-xl shadow-primary/20" },
  { tab: "progress", params: null, title: "Analitik", name: "analitik", desc: "Pantau kemajuan", icon: "📈", bgCircle: "bg-teal/70 text-white shadow-xl shadow-teal/20" },
  { tab: "certificate", params: null, title: "Sertifikat", name: "sertifikat", desc: "Raih sertifikat", icon: "🏅", bgCircle: "bg-accent/90 text-white shadow-xl shadow-accent/20" }
];

interface DashboardProps {
  userProfile: UserProfile;
  completedLessons?: string[];
  onNavigate: (tabId: string, params?: any) => void;
  onUpdateProfile?: (updated: UserProfile) => void;
}

export default function Dashboard({ 
  userProfile, 
  completedLessons = [], 
  onNavigate,
  onUpdateProfile 
}: DashboardProps) {
  const [hadits, setHadits] = useState(DAILY_HADITS_LIST[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{
    features: any[];
    vocabulary: any[];
    lessons: any[];
  } | null>(null);
  const [pendingPayment, setPendingPayment] = useState<PaymentProof | null>(null);
  const [expiredNotif, setExpiredNotif] = useState(false);

  // Placement Test State
  const [showPlacementModal, setShowPlacementModal] = useState(false);
  const [placementStep, setPlacementStep] = useState<"welcome" | "q1" | "q2" | "q3" | "q4" | "q5" | "result">("welcome");
  const [placementAnswers, setPlacementAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    const isDone = localStorage.getItem("arabiyPro_placement_test_done") === "true";
    if (!isDone) {
      setShowPlacementModal(true);
    }
  }, []);

  // Update hadits daily
  useEffect(() => {
    const day = new Date().getDay();
    const index = day % DAILY_HADITS_LIST.length;
    setHadits(DAILY_HADITS_LIST[index]);
  }, []);

  // Sync searches
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults(null);
      return;
    }
    const query = searchQuery.toLowerCase();
    const filteredFeatures = FEATURES_GRID_ITEMS.filter(f => 
      f.title.toLowerCase().includes(query) || f.desc.toLowerCase().includes(query)
    );
    const filteredVocab = MOCK_KOSAKATA_SEARCH.filter(v => 
      v.ar.includes(query) || v.trans.toLowerCase().includes(query) || v.id.toLowerCase().includes(query)
    );
    const allLessons = CURRICULUM_DATA.flatMap(lvl => 
      lvl.lessons.map(les => ({ ...les, levelId: lvl.id }))
    );
    const filteredLessons = allLessons.filter(l => 
      l.title.toLowerCase().includes(query) || l.description.toLowerCase().includes(query)
    );

    setSearchResults({
      features: filteredFeatures,
      vocabulary: filteredVocab,
      lessons: filteredLessons
    });
  }, [searchQuery]);

  // Compute actual inactivity days from profile
  const realInactivityDays = useMemo(() => {
    if (!userProfile.lastActiveDate) return 0;
    const lastActive = new Date(userProfile.lastActiveDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - lastActive.getTime());
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return days;
  }, [userProfile.lastActiveDate]);

  // Smart notification generator based on activity levels and progress
  const smartNotification = useMemo(() => {
    // 1. Inactivity checks
    if (realInactivityDays === 1) {
      return {
        type: "motivation",
        text: `Sudah 1 hari Anda belum berlatih nih, ${userProfile.name}. Luangkan waktu 15 menit saja hari ini untuk menjaga hafalan kosakata Anda! 📚`
      };
    } else if (realInactivityDays >= 3 && realInactivityDays < 7) {
      return {
        type: "target",
        text: `Sudah ${realInactivityDays} hari absen! Momentum belajar sangat berharga, mari penuhi target harian Anda (${userProfile.targetMinutes} menit) sekarang! ⏳`
      };
    } else if (realInactivityDays >= 7) {
      return {
        type: "danger",
        text: `⚠️ BAHAYA STREAK PADAM! Sudah ${realInactivityDays} hari Anda tidak aktif. Selesaikan 1 bab hari ini untuk menyelamatkan statistik belajar Anda! 🔥`
      };
    }

    // 2. Progress-based recommendations (AI Logic)
    const allLessons = CURRICULUM_DATA.flatMap(lvl => lvl.lessons);
    const nextLesson = allLessons.find(l => !completedLessons.includes(l.id));

    if (nextLesson) {
      return {
        type: "ai-recommendation",
        text: `Rekomendasi AI: Berdasarkan kemajuan Anda, langkah selanjutnya adalah "${nextLesson.title}". Klik 'Lanjut Belajar' untuk memulai! 🚀`,
        action: () => onNavigate("learn")
      };
    }

    if (completedLessons.length === allLessons.length) {
      return {
        type: "success",
        text: `Masyallah! 🎉 Anda telah menyelesaikan seluruh kurikulum. Klik tab Sertifikat untuk mengunduh bukti kelulusan Anda! 🏅`
      };
    }

    return {
      type: "neutral",
      text: "Selamat belajar! AI Tutor Ustadz Ahmad siap membantu membetulkan pelafalan makhraj Anda hari ini."
    };
  }, [realInactivityDays, userProfile.name, userProfile.targetMinutes, completedLessons, onNavigate]);

  const speakArabic = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ar-SA";
      window.speechSynthesis.speak(utterance);
    }
  };

  // Mock Leaderboard
  const leaderboardData = [
    { name: "Sufyan Al-Ghazali", avatar: "👳", xp: 4850, isPremium: true, rank: 1 },
    { name: "Zaynab Al-Habsyi", avatar: "🧕", xp: 3910, isPremium: true, rank: 2 },
    { name: "Yusuf Iskandar", avatar: "🧔", xp: 3240, isPremium: false, rank: 3 },
    { name: "Aisyah Kamila", avatar: "👩‍🦱", xp: 2890, isPremium: true, rank: 4 },
    { name: userProfile.name, avatar: userProfile.avatar, xp: userProfile.xp, isPremium: userProfile.isPremium, rank: 5 },
  ].sort((a, b) => b.xp - a.xp);

  // Calculate 7-day weekly streak calendar (Sen-Min)
  const getWeeklyStreakDays = () => {
    const weekdays = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
    const today = new Date();
    const currentDay = today.getDay();
    const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
    
    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + mondayOffset + i);
      
      const todayIndex = currentDay === 0 ? 6 : currentDay - 1;
      const isToday = i === todayIndex;
      const isCompleted = i <= todayIndex && (todayIndex - i) < userProfile.streak;
      
      days.push({
        name: weekdays[i],
        num: d.getDate(),
        isCompleted,
        isToday
      });
    }
    return days;
  };

  // Placement Test scoring & routing
  const calculatePlacementResult = () => {
    let score = 0;
    
    // Q1
    if (placementAnswers.q1 === "Ya lancar") score += 3;
    else if (placementAnswers.q1 === "Ya tapi lambat") score += 1;
    
    // Q2
    if (placementAnswers.q2 === "Ya banyak") score += 3;
    else if (placementAnswers.q2 === "Beberapa") score += 1;
    
    // Q3
    if (placementAnswers.q3 === "Ya") score += 3;
    else if (placementAnswers.q3 === "Sedikit") score += 1;
    
    // Q4
    if (placementAnswers.q4 === "Ya") score += 2;

    let recommendedLevel: UserLevelType = UserLevelType.MUBTADI;
    let desc = "";

    if (score <= 2) {
      recommendedLevel = UserLevelType.MUBTADI;
      desc = "Level 1: Al-Mubtadi (Pemula Mutlak). Bagus untuk memperkuat pondasi bunyi makhraj dan kosakata dasar fusha.";
    } else if (score >= 3 && score <= 5) {
      recommendedLevel = UserLevelType.MUTAWASSIT;
      desc = "Level 2: Al-Mutawassit (Menengah Bawah). Anda sudah memahami dasar membaca, mari kuasai kosakata harian & dhamir!";
    } else if (score >= 6 && score <= 8) {
      recommendedLevel = UserLevelType.MUTAQADDIM;
      desc = "Level 3: Al-Mutaqaddim (Menengah Tinggi). Sangat cocok untuk mulai mendalami struktur Fi'il Madhi dan Mudhari.";
    } else {
      recommendedLevel = UserLevelType.MAHIR;
      desc = "Level 4: Al-Mahir (Ahli Lanjutan). Anda hebat! Langsung hadapi skenario dialog AI interaktif tingkat tinggi.";
    }

    return { recommendedLevel, desc };
  };

  const handleFinishPlacement = () => {
    const { recommendedLevel } = calculatePlacementResult();
    
    // Update profile level in global state and localStorage
    if (onUpdateProfile) {
      onUpdateProfile({
        ...userProfile,
        level: recommendedLevel
      });
    }
    
    localStorage.setItem("arabiyPro_placement_test_done", "true");
    setShowPlacementModal(false);
    onNavigate("learn");
  };

  // CHECK PAYMENT & EXPIRY STATUS
  useEffect(() => {
    const allPayments: PaymentProof[] = JSON.parse(localStorage.getItem("pendingPayments") || "[]");
    // Find the latest pending payment for this user (by name match for now as mock auth)
    const latest = allPayments.filter(p => p.userName === userProfile.name && p.status === "pending").pop();
    if (latest) setPendingPayment(latest);

    const wasExpired = localStorage.getItem("premium_expired_notif") === "true";
    if (wasExpired) setExpiredNotif(true);
  }, [userProfile.name]);

  const handleClearExpiredNotif = () => {
    setExpiredNotif(false);
    localStorage.removeItem("premium_expired_notif");
  };

  const premiumExpiryInfo = useMemo(() => {
    if (!userProfile.isPremium || !userProfile.premiumExpires) return null;
    const now = new Date();
    const expiry = new Date(userProfile.premiumExpires);
    const diffTime = expiry.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return { daysLeft: diffDays, date: userProfile.premiumExpires };
  }, [userProfile.isPremium, userProfile.premiumExpires]);

  const trialBanner = useMemo(() => {
    if (userProfile.isPremium || userProfile.isOwner || !userProfile.trialStatus || userProfile.trialStatus === "none") {
      return null;
    }

    const days = userProfile.trialDaysLeft ?? 0;
    
    if (userProfile.trialStatus === "expired") {
      return (
        <div className="p-4 rounded-2xl bg-rose-500 text-white shadow-lg flex items-center justify-between gap-4 animate-pulse">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-app-surface/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h5 className="font-black text-sm uppercase tracking-tight text-white">Masa Trial Telah Berakhir</h5>
              <p className="text-[10px] font-medium opacity-90 leading-tight">Upgrade ke Premium untuk tetap mengakses semua materi dan fitur AI Tutor.</p>
            </div>
          </div>
          <button 
            onClick={() => onNavigate("premium")}
            className="px-4 py-2 bg-app-surface text-rose-600 font-black text-[10px] rounded-xl hover:scale-105 transition-transform shrink-0 shadow-md cursor-pointer"
          >
            UPGRADE SEKARANG
          </button>
        </div>
      );
    }

    if (days >= 4 && days <= 7) {
      return (
        <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center justify-center gap-2 shadow-sm">
          <span className="text-sm">🎁</span>
          <p className="text-[11px] font-black">
            Trial Gratis: <span className="font-black text-emerald-800 dark:text-emerald-200">{days} hari tersisa</span> — Nikmati semua materi ArabiyPro!
          </p>
        </div>
      );
    }

    if (days === 3 || days === 2) {
       return (
        <div className="p-3.5 rounded-2xl bg-app-accent/10 border border-app-accent/30 text-app-primary dark:text-app-accent flex items-center justify-center gap-2 shadow-md">
          <span className="text-sm">⚡</span>
          <p className="text-[11px] font-black text-app-primary dark:text-white">
            <span className="font-black text-[#8B5A2B] dark:text-[#C9A84C]">{days} hari lagi trial berakhir!</span> Upgrade sekarang dan jangan sampai progress Anda terhenti.
          </p>
          <button onClick={() => onNavigate("premium")} className="ml-2 px-3 py-1 bg-app-accent text-white rounded-lg text-[9px] font-black hover:scale-105 transition-all cursor-pointer">UPGRADE</button>
        </div>
      );
    }

    if (days === 1) {
      return (
        <div className="p-3.5 rounded-2xl bg-orange-500 text-white flex items-center justify-center gap-2 shadow-xl animate-pulse">
          <Clock className="w-4 h-4" />
          <p className="text-[11px] font-black">
            BESOK trial Anda berakhir! Semua materi akan terkunci. Upgrade Premium sekarang!
          </p>
          <button onClick={() => onNavigate("premium")} className="ml-2 px-3 py-1 bg-app-surface text-orange-600 rounded-lg text-[9px] font-black hover:scale-105 transition-all cursor-pointer">UPGRADE SEKARANG</button>
        </div>
      );
    }

    return null;
  }, [userProfile.trialDaysLeft, userProfile.trialStatus, userProfile.isPremium, userProfile.isOwner, onNavigate]);

  const [showLastDayModal, setShowLastDayModal] = useState(false);
  
  useEffect(() => {
    if (userProfile.trialStatus === "active" && userProfile.trialDaysLeft === 1) {
      const today = new Date().toDateString();
      const lastShown = localStorage.getItem("lastDayModalShown");
      if (lastShown !== today) {
        setShowLastDayModal(true);
        localStorage.setItem("lastDayModalShown", today);
      }
    }
  }, [userProfile.trialStatus, userProfile.trialDaysLeft]);

  return (
    <div id="dashboard-view" className="space-y-4 sm:space-y-6 pb-12">
      
      {/* PREMIUM EXPIRY / PAYMENT NOTIFICATIONS */}
      {(expiredNotif || pendingPayment || (premiumExpiryInfo && premiumExpiryInfo.daysLeft <= 7)) && (
        <div className="space-y-4">
          {expiredNotif && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-between gap-4 animate-fade-in shadow-sm">
              <div className="flex items-center gap-3 text-rose-800">
                 <AlertTriangle className="w-5 h-5" />
                 <div>
                    <p className="text-xs font-black uppercase tracking-tight">Masa Premium Berakhir 🛑</p>
                    <p className="text-[10px] font-medium opacity-80">Paket Premium Anda telah habis. Akses ke materi lanjutan kini terkunci.</p>
                 </div>
              </div>
              <div className="flex gap-2">
                 <button onClick={() => onNavigate("premium")} className="px-3 py-1.5 bg-rose-500 text-white text-[10px] font-black rounded-lg shadow-sm cursor-pointer">PERPANJANG</button>
                 <button onClick={handleClearExpiredNotif} className="p-1.5 text-rose-300 hover:text-rose-500">✕</button>
              </div>
            </div>
          )}

          {pendingPayment && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-between gap-4 animate-fade-in shadow-sm">
              <div className="flex items-center gap-3 text-amber-800">
                 <Clock className="w-5 h-5 animate-pulse" />
                 <div>
                    <p className="text-xs font-black uppercase tracking-tight">Konfirmasi Pembayaran Sedang Diproses ⏳</p>
                    <p className="text-[10px] font-medium opacity-80">Bukti pembayaran {pendingPayment.package === 'annual' ? 'Paket Tahunan' : 'Paket Bulanan'} Anda sedang diverifikasi admin.</p>
                 </div>
              </div>
              <button onClick={() => onNavigate("premium")} className="px-3 py-1.5 bg-amber-500 text-white text-[10px] font-black rounded-lg shadow-sm cursor-pointer">LIHAT STATUS</button>
            </div>
          )}

          {premiumExpiryInfo && premiumExpiryInfo.daysLeft <= 7 && (
            <div className="p-4 rounded-2xl bg-app-accent/10 border border-app-accent/20 flex items-center justify-between gap-4 animate-fade-in shadow-sm">
              <div className="flex items-center gap-3 text-app-primary dark:text-app-accent">
                 <ShieldCheck className="w-5 h-5" />
                 <div>
                    <p className="text-xs font-black uppercase tracking-tight">Masa Premium Hampir Habis ⏳</p>
                    <p className="text-[10px] font-medium opacity-80 dark:text-zinc-100 font-bold">Premium Anda akan berakhir dalam {premiumExpiryInfo.daysLeft} hari lagi. Perpanjang sekarang untuk belajar tanpa henti!</p>
                 </div>
              </div>
              <button onClick={() => onNavigate("premium")} className="px-3 py-1.5 bg-app-accent/100 text-white text-[10px] font-black rounded-lg shadow-sm cursor-pointer">PERPANJANG SEKARANG</button>
            </div>
          )}
        </div>
      )}

      {/* TRIAL BANNER */}
      {trialBanner}

      {/* LAST DAY MODAL */}
      {showLastDayModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-[100] animate-fade-in">
          <div className="bg-app-surface rounded-3xl p-8 max-w-md w-full shadow-2xl text-center space-y-6 relative overflow-hidden border-2 border-app-accent">
             <div className="absolute top-0 right-0 w-32 h-32 bg-app-accent/10 rounded-full blur-3xl" />
             <div className="w-20 h-20 bg-app-accent/20 border-2 border-app-accent rounded-full flex items-center justify-center mx-auto text-4xl animate-bounce">
               🔔
             </div>
             <div className="space-y-2">
               <h3 className="text-2xl font-black text-app-primary dark:text-app-accent uppercase tracking-tight">INI HARI TERAKHIR TRIAL ANDA!</h3>
               <p className="text-sm text-app-text-muted leading-relaxed">
                 <span className="dark:text-zinc-100 font-extrabold text-sm leading-relaxed block text-center">Setelah hari ini, hanya Bab 1 & 2 Level 1 yang bisa diakses gratis. Jangan biarkan semangat belajar Arab Anda terhenti di sini!</span>
               </p>
             </div>
             <div className="space-y-3">
               <button 
                 onClick={() => {
                   setShowLastDayModal(false);
                   onNavigate("premium");
                 }}
                 className="w-full py-4 bg-app-accent hover:bg-[#D4A359] text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 cursor-pointer"
               >
                 Upgrade Premium Rp49.000/bln
               </button>
               <button 
                 onClick={() => setShowLastDayModal(false)}
                 className="text-xs font-black text-gray-400 dark:text-zinc-200 hover:text-app-text-muted dark:hover:text-zinc-100 transition-colors cursor-pointer"
               >
                 Ingatkan Besok
               </button>
             </div>
          </div>
        </div>
      )}
      
      {/* HEADER BAR */}
      <div className="w-full bg-primary/95 backdrop-blur-md rounded-2xl p-2.5 px-3 sm:p-3 sm:pl-6 sm:pr-8 border-2 border-accent shadow-[0_0_20px_rgba(201,168,76,0.2)] flex items-center justify-between h-14 sm:h-16 shrink-0 gap-2 sm:gap-4 relative z-40">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-accent bg-secondary flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
            <UserAvatar avatar={userProfile.avatar} className="w-full h-full" />
          </div>
          <div className="min-w-0 text-left flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 overflow-hidden">
            <div className="shrink-0 flex items-center gap-1 sm:gap-2">
              <div>
                <h1 className="text-xs sm:text-base font-black text-white leading-none truncate flex items-center gap-1">
                  Halo, {userProfile.name}! 👋
                </h1>
                <p className="text-[9px] sm:text-xs text-accent font-black mt-0.5 sm:mt-1 leading-none">
                  Tingkat: <span className="text-white font-extrabold">{userProfile.level}</span>
                </p>
              </div>
            </div>

            {/* INTEGRATED RECOMMENDATION - HIDDEN ON MOBILE, TRUNCATED ON TABLET/DESKTOP */}
            <div className="hidden sm:flex items-center gap-2 sm:gap-3 sm:pl-4 sm:border-l sm:border-accent/30 min-w-0 max-w-[200px] md:max-w-[300px] lg:max-w-[400px]">
              <div className={`hidden md:flex w-7 h-7 sm:w-8 sm:h-8 rounded-full items-center justify-center shrink-0 shadow-sm
                ${smartNotification.type === "danger" ? "bg-ruby/20" : "bg-accent/15"}`}>
                <Bell className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${smartNotification.type === "danger" ? "text-ruby animate-bounce" : "text-accent"}`} />
              </div>
              <div className="min-w-0">
                <span className="text-[8px] sm:text-[9px] text-accent/80 font-black uppercase tracking-widest leading-none block mb-0.5 truncate">
                  {smartNotification.type === "danger" ? "PEMBERITAHUAN MENDESAK" : "REKOMENDASI BELAJAR"}
                </span>
                <p className="text-[9px] sm:text-[10px] font-bold text-white leading-tight truncate">
                  {smartNotification.text}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tengah: Search bar */}
        <div className="flex-grow max-w-[320px] relative mx-2 hidden md:block">
          <div className="flex items-center gap-2 bg-primary/50 border border-accent/30 rounded-full px-3.5 py-2 w-full glass">
            <span className="text-gray-400 text-xs">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari materi, kosakata..."
              className="bg-transparent border-none outline-none text-xs text-white w-full placeholder-gray-400 dark:placeholder-zinc-300 font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="text-gray-400 hover:text-white text-xs cursor-pointer px-1"
              >
                ✕
              </button>
            )}
          </div>

          {/* Search dropdown results */}
          {searchResults && (
            <div className="absolute top-12 left-0 right-0 bg-primary border border-accent/30 rounded-2xl shadow-2xl z-50 max-h-[300px] overflow-y-auto p-3 text-left space-y-3 glass-dark">
              {searchResults.features.length > 0 && (
                <div>
                  <span className="text-[9px] text-accent font-mono font-bold uppercase tracking-wider block mb-1">FITUR</span>
                  <div className="space-y-1">
                    {searchResults.features.slice(0, 3).map((feat, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSearchQuery("");
                          onNavigate(feat.tab, feat.params);
                        }}
                        className="w-full text-left px-2 py-1 hover:bg-secondary text-xs text-white flex items-center gap-2 rounded-lg"
                      >
                        <span>{feat.icon}</span>
                        <span className="font-bold">{feat.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {searchResults.vocabulary.length > 0 && (
                <div>
                  <span className="text-[9px] text-accent font-mono font-bold uppercase tracking-wider block mb-1">MUFRODAT</span>
                  <div className="space-y-1">
                    {searchResults.vocabulary.slice(0, 3).map((v, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSearchQuery("");
                          onNavigate("dictionary");
                        }}
                        className="w-full text-left px-2 py-1 hover:bg-secondary text-xs text-white flex justify-between items-center rounded-lg"
                      >
                        <span className="arabic-text text-sm font-bold text-accent">{v.ar}</span>
                        <span className="text-[10px] text-gray-300">{v.id}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Kanan: Stats / Premium Button */}
        <div className="flex items-center justify-end gap-1.5 sm:gap-3 shrink-0 min-w-0">
          {/* Ikon notifikasi (lonceng) */}
          <button className="relative p-1.5 sm:p-2 rounded-full hover:bg-white/10 text-gray-300 transition-colors shrink-0 cursor-pointer" aria-label="Notifikasi">
            <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
            <span className="absolute top-1 right-1 w-1 h-1 bg-ruby rounded-full animate-ping" />
            <span className="absolute top-1 right-1 w-1 h-1 bg-ruby rounded-full" />
          </button>

          {/* Koin XP: gold coin + angka */}
          <div className="flex items-center gap-1 bg-accent/10 border border-accent/30 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-black text-accent font-mono shrink-0 shadow-sm">
            <span>🪙</span>
            <span>{userProfile.coins}</span>
          </div>

          {/* Tombol upgrade */}
          {userProfile.isPremium ? (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-accent/80 to-accent text-white text-[9px] sm:text-[10px] font-black rounded-full border border-accent/50 shrink-0 shadow-sm">
              <Crown className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" /> <span className="hidden xs:inline">PREMIUM</span>
            </span>
          ) : userProfile.trialStatus === "active" ? (
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <span className="inline-flex items-center gap-1 px-1.5 py-1 bg-gradient-to-r from-accent/60 to-accent text-white text-[9px] font-black rounded-full border border-accent/30 shrink-0 shadow-sm">
                🎁 <span className="hidden xs:inline">TRIAL</span>
              </span>
              <button 
                onClick={() => onNavigate("premium")}
                className="px-2 py-1 sm:px-4 sm:py-2 text-[9px] sm:text-xs font-black rounded-full shadow-md hover:scale-105 active:scale-95 transition-all duration-300 shrink-0 cursor-pointer flex items-center justify-center whitespace-nowrap bg-accent text-primary"
              >
                <span>UPGRADE</span>
              </button>
            </div>
          ) : (
            <button 
              onClick={() => onNavigate("premium")}
              className="px-2 py-1 sm:px-4 sm:py-2 text-[9px] sm:text-xs font-black rounded-full shadow-md hover:scale-105 active:scale-95 transition-all duration-300 shrink-0 cursor-pointer flex items-center justify-center whitespace-nowrap bg-accent text-primary"
            >
              <span>UPGRADE</span>
            </button>
          )}
        </div>
      </div>

      {/* THREE-COLUMN HERO SECTION: GREETING | MOTIVATION | USTADZ AHMAD */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
        
        {/* NAVY GREETING CARD */}
        <div className="rounded-3xl bg-premium-navy-dark p-6 text-white shadow-2xl text-left flex flex-col justify-between relative overflow-hidden border-2 border-accent/30 glass">
          <div className="absolute right-0 top-0 opacity-10 w-32 h-32 transform translate-x-4 -translate-y-4">
            <Compass className="w-full h-full text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-black mb-2 text-white">Ahlan wa Sahlan!</h3>
            <p className="text-xs text-white/70 leading-relaxed font-semibold">
              Senang melihat Anda kembali berlatih hari ini. Setiap menit yang Anda luangkan adalah langkah besar menuju kefasihan bahasa Al-Qur'an.
            </p>
          </div>
          <button 
            onClick={() => onNavigate("learn")}
            className="mt-6 w-full py-3 bg-accent hover:brightness-110 text-primary font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl active:scale-95 cursor-pointer border border-accent/50"
          >
            Lanjut Belajar Sekarang
          </button>
        </div>

        {/* MOTIVATIONAL HADITS CORE */}
        <div className="rounded-3xl bg-premium-navy p-6 shadow-2xl flex flex-col justify-between text-left text-white border-2 border-accent/20 glass-dark">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-accent/20 pb-2">
              <span className="text-[10px] font-black text-accent uppercase tracking-widest font-mono">
                ⭐ Hadits Motivasi
              </span>
              <button onClick={() => speakArabic(hadits.textAr)} className="p-1 hover:bg-white/10 rounded-lg text-accent cursor-pointer">
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              <h4 className="arabic-text text-xl font-bold text-accent leading-relaxed text-right drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                {hadits.textAr}
              </h4>
              <p className="text-[11px] text-white/80 italic leading-relaxed font-medium">
                "{hadits.textId}"
              </p>
            </div>
          </div>
          <span className="text-[10px] text-accent/75 font-mono font-black mt-4 block">{hadits.narrator}</span>
        </div>

        {/* USTADZ AHMAD AI TUTOR CARD */}
        <div className="rounded-3xl bg-premium-navy p-6 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden group border-2 border-accent/30 glass">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700" />
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-accent/50 shadow-lg shrink-0 bg-secondary">
              <UstadzAhmadAvatar className="w-full h-full" />
            </div>
            <div>
              <h4 className="font-black text-sm text-white leading-tight">Ustadz Ahmad Al-Hafidz</h4>
              <p className="text-[10px] text-accent font-black uppercase mt-1 tracking-widest">Tutor AI Premium</p>
              <div className="mt-2.5 p-2.5 bg-primary/80 rounded-xl border border-accent/20 relative glass-dark">
                <div className="absolute -left-1.5 top-3 w-3 h-3 bg-primary/80 border-l border-b border-accent/20 rotate-45" />
                <p className="text-[10px] text-white/90 italic leading-relaxed relative z-10">
                  "Sudahkah Anda melatih pelafalan makhraj huruf Dhod hari ini, Sahabat?"
                </p>
              </div>
            </div>
          </div>
          <button 
            onClick={() => onNavigate("conversation")}
            className="mt-5 w-full py-3 bg-accent hover:brightness-110 text-primary text-[10px] font-black uppercase tracking-[0.15em] rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(201,168,76,0.3)] hover:shadow-[0_4px_25px_rgba(201,168,76,0.5)] active:scale-95 cursor-pointer flex items-center justify-center gap-2 border border-accent/50"
          >
            <Bot className="w-4 h-4" />
            MULAI PERCAKAPAN AI →
          </button>
        </div>

      </div>

      {/* THREE-COLUMN SECONDARY SECTION: PREMIUM | STREAK | STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
        {/* PREMIUM UPGRADE CARD */}
        <div className="rounded-3xl bg-premium-navy p-6 shadow-2xl text-left flex flex-col justify-between text-white border-2 border-accent/20 glass">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-sm text-white">Akses Fitur Premium</h4>
              <p className="text-[10px] text-white/70 mt-1 leading-relaxed font-semibold">Dapatkan akses ke ribuan mufrodat, dialog AI tanpa batas, dan sertifikat resmi kelulusan.</p>
            </div>
          </div>
          <button 
            onClick={() => onNavigate("premium")}
            className="mt-6 w-full py-2.5 bg-accent hover:brightness-110 text-primary font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl cursor-pointer border border-accent/50"
          >
            Upgrade Sekarang
          </button>
        </div>

        {/* DETAILED STREAK CALENDAR */}
        <div className="rounded-3xl bg-premium-navy p-6 shadow-2xl text-left flex flex-col justify-between text-white border-2 border-accent/20 glass-dark">
          <div>
            <h4 className="font-black text-sm text-white flex items-center gap-2">
              <Flame className="w-4 h-4 text-ruby" /> Kalender Streak
            </h4>
            <p className="text-[10px] text-white/60 mt-1 font-semibold">Pantau keaktifan belajar Anda pekan ini.</p>
            
            <div className="grid grid-cols-7 gap-1.5 mt-6">
              {getWeeklyStreakDays().map((day, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5">
                  <span className={`text-[8px] font-black uppercase ${day.isToday ? "text-accent" : "text-white/30"}`}>{day.name}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black border transition-all
                    ${day.isCompleted 
                      ? "bg-accent border-accent text-primary shadow-xl shadow-accent/20" 
                      : day.isToday 
                        ? "bg-primary/80 border-accent text-accent"
                        : "bg-primary/40 border-white/10 text-white/20"
                    }`}
                  >
                    {day.num}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
            <span className="text-[10px] text-white/40 font-black">TOTAL AKTIF</span>
            <span className="text-xs font-black text-accent font-mono">{userProfile.streak} HARI</span>
          </div>
        </div>

        {/* QUICK STATS WRAPPER */}
        <div className="rounded-3xl bg-premium-navy p-6 shadow-2xl text-left flex flex-col justify-between relative overflow-hidden group text-white border-2 border-accent/20 glass">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
          <div className="space-y-4 relative z-10">
            <h4 className="font-black text-sm text-accent flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-accent" /> Ringkasan Performa
            </h4>
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-white/50 font-black uppercase tracking-widest">Akurasi Rata-rata</span>
                <span className="text-xs font-black text-accent font-mono">{userProfile.accuracy}%</span>
              </div>
              <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden border border-white/10">
                <div className="h-full bg-accent" style={{ width: `${userProfile.accuracy}%` }} />
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-[10px] text-white/50 font-black uppercase tracking-widest">Koin Terkumpul</span>
                <span className="text-xs font-black text-accent font-mono">{userProfile.coins} 🪙</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => onNavigate("progress")}
            className="mt-6 w-full py-2 bg-primary/60 text-white/60 hover:bg-primary border border-white/10 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer"
          >
            Buka Analitik Detail
          </button>
        </div>
      </div>

      {/* WHY CHOOSE ARABIYPRO SECTION */}
      <div className="bg-[#052218] rounded-[2.5rem] p-8 sm:p-12 border-2 border-[#D4AF37]/40 shadow-2xl text-center space-y-10 text-white relative overflow-hidden">
        {/* Background glow decorator */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl mx-auto space-y-3 relative z-10">
          <span className="text-[10px] px-3 py-1 bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/20 rounded-full font-black tracking-[0.2em] uppercase">MENGAPA KAMI?</span>
          <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Kenapa Belajar di ArabiyPro?</h3>
          <p className="text-xs sm:text-base text-white/90 leading-relaxed font-bold">Metode pembelajaran modern yang menggabungkan kecanggihan AI dengan kurikulum klasik pondok pesantren yang terstruktur.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 relative z-10">
          {[
            { icon: "🕌", title: "Kurikulum Klasik", desc: "Materi terstandar dari kitab-kitab rujukan utama Nahwu & Shorof." },
            { icon: "🤖", title: "AI Tutor 24/7", desc: "Latih percakapan kapan saja dengan Ustadz Ahmad berbasis Gemini AI." },
            { icon: "🎙️", title: "Analisis Makhraj", desc: "Verifikasi suara secara instan untuk memastikan pelafalan huruf tepat." },
            { icon: "📜", title: "Sertifikasi Resmi", desc: "Dapatkan ijazah kelulusan digital setiap Anda menyelesaikan satu tingkatan." }
          ].map((item, idx) => (
            <div key={idx} className="space-y-4 group">
              <div className="w-16 h-16 rounded-3xl bg-[#0B3D2E] border border-[#D4AF37]/30 flex items-center justify-center text-3xl mx-auto shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#D4AF37]/20">
                {item.icon}
              </div>
              <h4 className="font-black text-white text-base sm:text-lg">{item.title}</h4>
              <p className="text-xs text-white/80 leading-relaxed px-4 font-bold">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION SERTIFIKAT DIGITAL */}
      <div id="certificate-section" className="bg-[#0B3D2E] rounded-[2.5rem] p-8 sm:p-12 border-2 border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Award className="w-32 h-32 text-[#D4AF37]" />
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 relative z-10">
          <div className="space-y-2 text-left">
            <h3 className="text-3xl font-black text-white flex items-center gap-3 tracking-tight">
              Sertifikat Digital
            </h3>
            <p className="text-white/70 text-sm max-w-md font-medium">
              Raih pengakuan resmi setiap Anda menyelesaikan tingkatan kurikulum ArabiyPro. Sertifikat dapat diunduh dalam format PDF & Gambar.
            </p>
          </div>
          <button 
            onClick={() => onNavigate("certificate")}
            className="px-6 py-3 bg-[#D4AF37] hover:brightness-110 text-[#0B3D2E] font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-gold/20 cursor-pointer"
          >
            Lihat Semua Sertifikat
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {CURRICULUM_DATA.map((level) => {
            const total = level.lessons.length;
            const completed = level.lessons.filter(l => (completedLessons || []).includes(l.id)).length;
            const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
            const isFinished = progress === 100;
            const isHidden = (level as any).isHidden;

            if (isHidden) return null;

            return (
              <div 
                key={level.id}
                className={`p-6 rounded-3xl border transition-all ${isFinished ? 'bg-white/10 border-[#D4AF37]/50 shadow-lg' : 'bg-black/20 border-white/10'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isFinished ? 'bg-[#D4AF37] text-[#0B3D2E]' : 'bg-white/5 text-white/30'}`}>
                    {isFinished ? <Award className="w-6 h-6" /> : <Lock className="w-5 h-5" />}
                  </div>
                  {isFinished && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                </div>
                
                <h4 className="font-black text-white text-sm mb-1">{level.name}</h4>
                <p className="text-[10px] text-white/50 font-bold mb-4 uppercase tracking-wider">{isFinished ? 'Sudah Lulus' : 'Dalam Proses'}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-[9px] font-black text-white/40 uppercase">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${isFinished ? 'bg-[#D4AF37]' : 'bg-white/20'}`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <button
                  disabled={!isFinished}
                  onClick={() => onNavigate("certificate")}
                  className={`mt-6 w-full py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all
                    ${isFinished 
                      ? 'bg-white text-[#0B3D2E] hover:bg-[#D4AF37] hover:text-white cursor-pointer' 
                      : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'}`}
                >
                  {isFinished ? 'Unduh Sekarang' : 'Terkunci'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER SECTION */}
      <footer className="pt-10 pb-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white w-full">
        <div className="text-left">
          <h3 className="font-black text-white flex items-center gap-2">
            🎓 <span className="text-white">Arabiy</span><span className="text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">Pro</span> <span className="text-[10px] px-2 py-0.5 rounded bg-[#D4AF37]/25 text-[#D4AF37] font-mono border border-[#D4AF37]/20">PRO</span>
          </h3>
          <p className="text-[10px] text-white/80 mt-1 font-semibold">Platform Belajar Bahasa Arab Modern Berbasis AI • Versi 2.0.4</p>
        </div>
        
        <div className="flex gap-4">
          {["Bantuan", "Privasi", "Syarat", "Kontak"].map(link => (
            <button key={link} className="text-[11px] font-extrabold text-[#D4AF37] hover:text-white transition-colors cursor-pointer">{link}</button>
          ))}
        </div>
        
        <p className="text-[10px] text-white/60 font-bold">© 2026 ArabiyPro. All rights reserved.</p>
      </footer>

      {/* CORE STATISTIK OVERVIEW GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-app-surface p-3 sm:p-4 rounded-2xl border-2 border-[#C9A84C]/60 hover:border-[#C9A84C] shadow-[0_4px_15px_rgba(201,168,76,0.1)] transition-all flex items-center gap-2 sm:gap-3 text-left min-w-0 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-orange-50 dark:bg-orange-950/20 flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-110 transition-transform">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 fill-orange-500/10" />
          </div>
          <div className="min-w-0">
            <span className="text-[8px] sm:text-[9px] font-black text-slate-900 dark:text-zinc-100 block tracking-wider uppercase truncate">STREAK BELAJAR</span>
            <span className="text-xs sm:text-base font-black text-app-accent font-mono leading-tight truncate block">{userProfile.streak} Hari</span>
          </div>
        </div>

        <div className="bg-app-surface p-3 sm:p-4 rounded-2xl border-2 border-[#C9A84C]/60 hover:border-[#C9A84C] shadow-[0_4px_15px_rgba(201,168,76,0.1)] transition-all flex items-center gap-2 sm:gap-3 text-left min-w-0 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-app-accent/10 flex items-center justify-center text-app-accent shrink-0 group-hover:scale-110 transition-transform">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[8px] sm:text-[9px] font-black text-slate-900 dark:text-zinc-100 block tracking-wider uppercase truncate">TOTAL SKOR</span>
            <span className="text-xs sm:text-base font-black text-app-accent font-mono leading-tight truncate block">{userProfile.xp} XP</span>
          </div>
        </div>

        <div className="bg-app-surface p-3 sm:p-4 rounded-2xl border-2 border-[#C9A84C]/60 hover:border-[#C9A84C] shadow-[0_4px_15px_rgba(201,168,76,0.1)] transition-all flex items-center gap-2 sm:gap-3 text-left min-w-0 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-app-primary/10 flex items-center justify-center text-app-primary dark:text-app-accent shrink-0 group-hover:scale-110 transition-transform">
            <BookMarked className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[8px] sm:text-[9px] font-black text-slate-900 dark:text-zinc-100 block tracking-wider uppercase truncate">KATA DIKUASAI</span>
            <span className="text-xs sm:text-base font-black text-app-primary dark:text-app-accent font-mono leading-tight truncate block">{userProfile.masteredWordsCount} Kata</span>
          </div>
        </div>

        <div className="bg-app-surface p-3 sm:p-4 rounded-2xl border-2 border-[#C9A84C]/60 hover:border-[#C9A84C] shadow-[0_4px_15px_rgba(201,168,76,0.1)] transition-all flex items-center gap-2 sm:gap-3 text-left min-w-0 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-app-accent/10 dark:bg-app-accent/20 flex items-center justify-center text-app-accent shrink-0 group-hover:scale-110 transition-transform">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[8px] sm:text-[9px] font-black text-slate-900 dark:text-zinc-100 block tracking-wider uppercase truncate">AKURASI JAWABAN</span>
            <span className="text-xs sm:text-base font-black text-app-accent font-mono leading-tight truncate block">{userProfile.accuracy}% Benar</span>
          </div>
        </div>
      </div>

      {/* FEATURES CHOOSER */}
      <div className="space-y-4 text-left">
        <h3 className="text-sm sm:text-lg font-black text-black dark:text-app-accent flex items-center gap-2">
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
          Pilihan Menu Pembelajaran
        </h3>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {FEATURES_GRID_ITEMS.map((feat, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(feat.tab, feat.params)}
                className="p-2.5 sm:p-4 bg-app-surface rounded-2xl border border-app-border dark:border-white/5 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-app-accent/50 transition-all text-center flex flex-col items-center justify-center cursor-pointer group min-h-[90px] sm:min-h-0 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-app-accent/5 rounded-full blur-xl group-hover:bg-app-accent/10 transition-colors" />
                <div className={`w-8 h-8 sm:w-11 sm:h-11 rounded-full ${feat.bgCircle} flex items-center justify-center text-base sm:text-xl mb-1.5 sm:mb-2.5 group-hover:scale-110 transition-transform shrink-0 shadow-lg shadow-black/10`}>
                  {feat.icon}
                </div>
                <h4 className="font-black text-black dark:text-white text-[10px] sm:text-xs leading-tight group-hover:text-app-accent transition-colors text-center truncate w-full relative z-10">
                  {feat.title}
                </h4>
                <p className="hidden sm:block text-[9px] text-slate-700 dark:text-zinc-200 mt-1 font-extrabold leading-tight text-center relative z-10">
                  {feat.desc}
                </p>
              </button>
          ))}
        </div>
      </div>

      {/* CORE 3-COLUMN LEADERBOARD / PLACEMENT NAVIGATION PREVIEW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
        {/* LEADERBOARD PANEL */}
        <div className="rounded-3xl bg-app-surface border-2 border-[#C9A84C] p-5 shadow-[0_4px_25px_rgba(201,168,76,0.1)] text-left flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-black dark:text-white flex items-center gap-1.5 mb-1">
              <Trophy className="w-4 h-4 text-app-accent" /> Klasemen Juara Hari Ini
            </h3>
            <p className="text-slate-700 dark:text-zinc-200 text-[10px] font-black mb-4">Aktivitas belajar teraktif seluruh Indonesia</p>
            
            <div className="space-y-2">
              {leaderboardData.map((item, idx) => {
                const isUser = item.name === userProfile.name;
                let medal = idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : "";
                
                return (
                  <div 
                    key={idx}
                    className={`flex items-center justify-between p-2 rounded-xl border transition-all
                      ${isUser 
                        ? "bg-app-accent/10 border-app-accent shadow-sm"
                        : "bg-app-background dark:bg-app-surface/5 border-app-border dark:border-white/5"
                      }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[10px] font-mono font-black text-slate-800 dark:text-zinc-200 w-5 text-center shrink-0">
                        {medal || `#${idx + 1}`}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-app-surface/10 flex items-center justify-center text-xs overflow-hidden shrink-0">
                        <UserAvatar avatar={item.avatar} className="w-full h-full" />
                      </div>
                      <span className={`text-xs font-black truncate ${isUser ? "text-app-accent" : "text-black dark:text-gray-200"}`}>
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs font-black font-mono text-app-accent shrink-0">{item.xp} XP</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ROADMAP TIMELINE */}
        <div className="rounded-3xl bg-app-surface border-2 border-[#C9A84C] p-5 shadow-[0_4px_25px_rgba(201,168,76,0.1)] text-left flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-black dark:text-white flex items-center gap-1.5 mb-1">
              <span className="text-base">🗺️</span> Struktur Jenjang Akademik
            </h3>
            <p className="text-slate-700 dark:text-zinc-100 text-[10px] font-black mb-4">Jenjang kurikulum terstruktur fusha</p>

            <div className="relative pl-4 border-l border-app-border dark:border-white/10 space-y-4">
              {[
                { label: "Level 1: Al-Mubtadi", desc: "Fondasi makhraj & vocab dasar", active: userProfile.level === UserLevelType.MUBTADI },
                { label: "Level 2: Al-Mutawassit", desc: "100 kosakata & jumlah ismiyyah", active: userProfile.level === UserLevelType.MUTAWASSIT },
                { label: "Level 3: Al-Mutaqaddim", desc: "Fi'il Madhi, Mudhari & Amrin", active: userProfile.level === UserLevelType.MUTAQADDIM },
                { label: "Level 4: Al-Mahir", desc: "Skenario dialek & pidato lisan", active: userProfile.level === UserLevelType.MAHIR }
              ].map((lvl, idx) => (
                <div key={idx} className="relative">
                  <span className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border-2 
                    ${lvl.active ? "bg-app-accent border-app-primary dark:border-white/20 shadow-[0_0_10px_#C9A84C]" : "bg-gray-300 border-white"}`} 
                  />
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className={`font-black text-[11px] uppercase tracking-wider ${lvl.active ? "text-app-accent" : "text-black dark:text-zinc-100"}`}>{lvl.label}</h4>
                      <p className="text-[9px] text-slate-700 dark:text-zinc-100 font-extrabold leading-tight">{lvl.desc}</p>
                    </div>
                    {lvl.active && (
                      <span className="text-[8px] bg-app-primary text-white px-1 py-0.2 rounded font-mono font-bold shrink-0">AKTIF</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={() => onNavigate("learn")}
            className="w-full py-2 border border-app-primary dark:border-app-accent text-app-primary dark:text-app-accent hover:bg-app-primary dark:hover:bg-app-accent hover:text-white dark:hover:text-app-primary text-[10px] font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer mt-4"
          >
            Masuk Peta Kurikulum →
          </button>
        </div>

        {/* COMPREHENSIVE PLACEMENT TEST ENTRY CARD */}
        <div className="rounded-3xl bg-gradient-to-br from-app-primary to-app-primary p-5 shadow-sm text-left flex flex-col justify-between text-white border-2 border-[#C9A84C] relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 w-32 h-32 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" fill="none" />
              <polygon points="40,30 70,50 40,70" />
            </svg>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎓</span>
              <div>
                <h4 className="font-extrabold text-sm text-app-accent">Placement Test Akademik</h4>
                <p className="text-[10px] text-white/70">Langsung Lewati Bab Sesuai Kemampuan Anda</p>
              </div>
            </div>

            <p className="text-xs text-white/85 leading-relaxed font-medium">
              Apakah Anda sudah memiliki dasar bahasa Arab sebelumnya? Ikuti Placement Test singkat untuk memetakan level awal Anda secara instan dan melompati pelajaran dasar.
            </p>
          </div>

          <button
            onClick={() => {
              setPlacementStep("welcome");
              setShowPlacementModal(true);
            }}
            className="mt-6 w-full py-2.5 bg-app-accent hover:bg-[#D4A359] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl cursor-pointer shadow-md text-center font-sans"
          >
            Mulai Placement Test 📝
          </button>
        </div>

      </div>

      {/* PLACEMENT TEST COMPREHENSIVE POPUP MODAL */}
      {showPlacementModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-app-surface border border-app-border dark:border-white/5 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-6 text-left relative overflow-hidden">
            
            {/* Corner decorator */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-app-accent/5 rounded-full blur-2xl pointer-events-none" />

            {/* STEP: WELCOME */}
            {placementStep === "welcome" && (
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-app-accent/10 border-2 border-app-accent flex items-center justify-center text-app-accent mx-auto animate-float">
                  <Compass className="w-7 h-7" />
                </div>
                
                <div className="text-center space-y-2">
                  <span className="text-[9px] px-2.5 py-1 rounded bg-app-accent/10 text-app-accent border border-app-accent/20 font-black font-mono tracking-widest uppercase">
                    PLACEMENT EVALUATION
                  </span>
                  <h3 className="text-xl font-black text-app-text-main dark:text-white">Uji Kemampuan Awal Anda</h3>
                  <p className="text-xs text-app-text-muted dark:text-zinc-100 max-w-sm mx-auto leading-relaxed font-semibold">
                    Evaluasi terstandarisasi untuk menentukan tingkat kurikulum paling ideal. Anda dapat melewati bab yang terlalu mudah secara instan!
                  </p>
                </div>

                <div className="p-3.5 bg-app-background dark:bg-black/15 border border-app-border dark:border-white/5 rounded-2xl flex items-start gap-2.5">
                  <span className="text-base text-amber-500">⚡</span>
                  <p className="text-[11px] text-app-text-muted dark:text-zinc-100 leading-relaxed font-bold">
                    Hanya butuh 1-2 menit saja. AI kami akan memetakan jawaban Anda ke salah satu dari 4 level utama.
                  </p>
                </div>

                <div className="pt-4 flex justify-between gap-3">
                  <button
                    onClick={() => {
                      // Bypass / Skip test
                      localStorage.setItem("arabiyPro_placement_test_done", "true");
                      setShowPlacementModal(false);
                    }}
                    className="px-4 py-3 bg-gray-100 dark:bg-app-surface/5 hover:bg-gray-150 text-app-text-muted dark:text-zinc-100 text-xs font-black rounded-xl cursor-pointer"
                  >
                    Lewati (Mulai dari Nol)
                  </button>
                  <button
                    onClick={() => setPlacementStep("q1")}
                    className="flex-1 px-5 py-3 bg-app-accent hover:bg-app-accent text-white font-extrabold text-xs tracking-wider uppercase rounded-xl cursor-pointer text-center shadow-md font-sans"
                  >
                    Mulai Evaluasi →
                  </button>
                </div>
              </div>
            )}

            {/* STEP: Q1 */}
            {placementStep === "q1" && (
              <div className="space-y-5">
                <div className="flex justify-between items-center border-b border-app-border dark:border-white/5 pb-3">
                  <span className="text-[10px] text-app-accent font-mono font-black">SOAL 1 DARI 5</span>
                  <span className="text-xs text-gray-400 font-mono">Progress: 20%</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-black text-app-text-main dark:text-white">Pertanyaan 1: Bisakah Anda membaca tulisan berhuruf Arab dengan lancar?</h4>
                  <p className="text-xs text-gray-400">Pilih tingkat kenyamanan membaca aksara Arab Anda saat ini.</p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  {[
                    { key: "Ya lancar", label: "Ya, saya bisa membaca dengan sangat lancar beserta harakatnya." },
                    { key: "Ya tapi lambat", label: "Ya, saya bisa mengeja hurufnya namun masih agak lambat." },
                    { key: "Belum", label: "Belum, saya masih asing dan ingin belajar dari pengenalan huruf hijaiyah." }
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setPlacementAnswers({ ...placementAnswers, q1: opt.key });
                        setPlacementStep("q2");
                      }}
                      className="p-4 rounded-xl border border-app-border dark:border-white/5 hover:border-app-accent hover:bg-app-accent/5 text-left text-xs font-bold text-app-text-main dark:text-gray-300 transition-all cursor-pointer"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP: Q2 */}
            {placementStep === "q2" && (
              <div className="space-y-5">
                <div className="flex justify-between items-center border-b border-app-border dark:border-white/5 pb-3">
                  <span className="text-[10px] text-app-accent font-mono font-black">SOAL 2 DARI 5</span>
                  <span className="text-xs text-gray-400 font-mono">Progress: 40%</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-black text-app-text-main dark:text-white">Pertanyaan 2: Apakah Anda mengetahui arti kata-kata dasar dalam bahasa Arab?</h4>
                  <p className="text-xs text-gray-400">Misalnya seperti kata baitu (بيت), qalamu (قلم), atau ustadzu (أستاذ).</p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  {[
                    { key: "Ya banyak", label: "Ya, saya tahu banyak kosakata benda dan profesi sederhana." },
                    { key: "Beberapa", label: "Hanya beberapa kata yang familiar saja." },
                    { key: "Belum", label: "Belum tahu sama sekali artinya." }
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setPlacementAnswers({ ...placementAnswers, q2: opt.key });
                        setPlacementStep("q3");
                      }}
                      className="p-4 rounded-xl border border-app-border dark:border-white/5 hover:border-app-accent hover:bg-app-accent/5 text-left text-xs font-bold text-app-text-main dark:text-gray-300 transition-all cursor-pointer"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP: Q3 */}
            {placementStep === "q3" && (
              <div className="space-y-5">
                <div className="flex justify-between items-center border-b border-app-border dark:border-white/5 pb-3">
                  <span className="text-[10px] text-app-accent font-mono font-black">SOAL 3 DARI 5</span>
                  <span className="text-xs text-gray-400 font-mono">Progress: 60%</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-black text-app-text-main dark:text-white">Pertanyaan 3: Pernahkah Anda mempelajari kaidah tata bahasa Nahwu / Shorof sebelumnya?</h4>
                  <p className="text-xs text-gray-400">Seperti dhamir kata ganti, fi'il madhi/mudhari, atau pembagian isim.</p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  {[
                    { key: "Ya", label: "Ya, saya pernah mempelajarinya secara aktif." },
                    { key: "Sedikit", label: "Pernah mendengar sekilas, tapi belum lancar mempraktikkannya." },
                    { key: "Belum pernah", label: "Belum pernah sama sekali mempelajari tata bahasa nahwu/shorof." }
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setPlacementAnswers({ ...placementAnswers, q3: opt.key });
                        setPlacementStep("q4");
                      }}
                      className="p-4 rounded-xl border border-app-border dark:border-white/5 hover:border-app-accent hover:bg-app-accent/5 text-left text-xs font-bold text-app-text-main dark:text-gray-300 transition-all cursor-pointer"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP: Q4 */}
            {placementStep === "q4" && (
              <div className="space-y-5">
                <div className="flex justify-between items-center border-b border-app-border dark:border-white/5 pb-3">
                  <span className="text-[10px] text-app-accent font-mono font-black">SOAL 4 DARI 5</span>
                  <span className="text-xs text-gray-400 font-mono">Progress: 80%</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-black text-app-text-main dark:text-white">Pertanyaan 4: Pernahkah Anda mengikuti kursus, kelas formal, atau belajar di pondok pesantren?</h4>
                  <p className="text-xs text-gray-400">Pengalaman belajar formal sangat membantu pembiasaan dialek.</p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  {[
                    { key: "Ya", label: "Ya, saya pernah belajar di kelas formal / ponpes / kursus interaktif." },
                    { key: "Tidak", label: "Tidak, saya belajar secara mandiri (otodidak) selama ini." }
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setPlacementAnswers({ ...placementAnswers, q4: opt.key });
                        setPlacementStep("q5");
                      }}
                      className="p-4 rounded-xl border border-app-border dark:border-white/5 hover:border-app-accent hover:bg-app-accent/5 text-left text-xs font-bold text-app-text-main dark:text-gray-300 transition-all cursor-pointer"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP: Q5 */}
            {placementStep === "q5" && (
              <div className="space-y-5">
                <div className="flex justify-between items-center border-b border-app-border dark:border-white/5 pb-3">
                  <span className="text-[10px] text-app-accent font-mono font-black">SOAL 5 DARI 5</span>
                  <span className="text-xs text-gray-400 font-mono">Progress: 100%</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-black text-app-text-main dark:text-white">Pertanyaan 5: Apakah target utama Anda dalam mempelajari bahasa Arab saat ini?</h4>
                  <p className="text-xs text-gray-400">Target yang jelas membantu memprioritaskan rekomendasi latihan.</p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  {[
                    { key: "Percakapan", label: "Percakapan harian interaktif (Mubadalah/Amiyyah)." },
                    { key: "Baca Quran & Kitab", label: "Membaca & memahami Al-Qur'an serta kitab gundul (Klasik)." },
                    { key: "Akademik", label: "Kebutuhan ujian formal, sekolah, atau kuliah." },
                    { key: "Semua bidang", label: "Menguasai semua aspek (mendengar, berbicara, menulis)." }
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setPlacementAnswers({ ...placementAnswers, q5: opt.key });
                        setPlacementStep("result");
                      }}
                      className="p-4 rounded-xl border border-app-border dark:border-white/5 hover:border-app-accent hover:bg-app-accent/5 text-left text-xs font-bold text-app-text-main dark:text-gray-300 transition-all cursor-pointer"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP: RESULT */}
            {placementStep === "result" && (
              <div className="space-y-5 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 mx-auto animate-pulse">
                  <ShieldCheck className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/25 font-black font-mono tracking-widest uppercase">
                    ANALYSIS COMPLETE
                  </span>
                  <h3 className="text-xl font-black text-app-text-main dark:text-white">Rekomendasi Level Pembelajaran</h3>
                  <p className="text-xs text-app-text-muted dark:text-zinc-100 leading-relaxed max-w-sm mx-auto font-extrabold">
                    Berdasarkan asesmen AI, berikut adalah tingkat materi awal yang paling optimal untuk Anda mulai:
                  </p>
                </div>

                {/* Level recommendation block */}
                <div className="p-5 rounded-2xl bg-app-background dark:bg-black/15 border border-app-border dark:border-white/5 space-y-2.5">
                  <h4 className="text-base font-black text-app-accent uppercase tracking-wider font-mono">
                    LEVEL REKOMENDASI: {calculatePlacementResult().recommendedLevel.toUpperCase()}
                  </h4>
                  <p className="text-xs text-app-text-muted dark:text-zinc-100 font-extrabold leading-relaxed">
                    {calculatePlacementResult().desc}
                  </p>
                </div>

                <p className="text-[10px] text-gray-400 dark:text-zinc-200 font-bold">
                  *Anda dapat pindah ke level lain secara manual kapan saja dari peta kurikulum.
                </p>

                <div className="pt-4 flex justify-center">
                  <button
                    onClick={handleFinishPlacement}
                    className="w-full sm:w-auto px-10 py-4 bg-app-accent hover:bg-app-accent text-white font-black text-xs tracking-wider uppercase rounded-xl cursor-pointer shadow-md font-sans text-center"
                  >
                    Mulai Belajar di Level Ini →
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
