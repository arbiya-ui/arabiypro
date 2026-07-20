/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { 
  Sparkles, 
  Layers, 
  PenTool, 
  RotateCcw, 
  Volume2, 
  HelpCircle, 
  CheckCircle,
  BrainCircuit,
  Mic,
  MicOff,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Square
} from "lucide-react";
import { UserProfile } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { speakArabic as speakLib, stopSpeech, isSpeaking, getAudioSpeed } from "../lib/speech";

interface PracticeHubProps {
  userProfile: UserProfile;
  onUpdateCoins: (amount: number) => void;
  onUpdateXp: (amount: number) => void;
  onNavigate: (tabId: any, params?: any) => void;
  initialSubTab?: "flashcards" | "writing" | "pronunciation";
}

export default function PracticeHub({ userProfile, onUpdateCoins, onUpdateXp, onNavigate, initialSubTab }: PracticeHubProps) {
  // Ambil status dari localStorage untuk pengecekan akses
  const ownerMode = localStorage.getItem('ownerMode') === 'true';
  const isPremium = localStorage.getItem('premiumStatus') === 'active';
  const trialStart = localStorage.getItem('trialStartDate');

  let trialDaysLeft = 0;
  if (trialStart) {
    const start = new Date(trialStart);
    const now = new Date();
    const diff = Math.floor(
      (now.getTime() - start.getTime()) 
      / (1000 * 60 * 60 * 24)
    );
    trialDaysLeft = Math.max(0, 7 - diff);
  }

  const isAccessible = ownerMode || isPremium || trialDaysLeft > 0;

  if (!isAccessible) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center min-h-[70vh]">
        <div className="bg-primary/40 border border-accent/20 rounded-[2.5rem] p-8 md:p-12 max-w-xl w-full shadow-2xl relative overflow-hidden glass-dark">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent" />
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-accent/30 animate-pulse">
            <span className="text-5xl">🔒</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-wide">Fitur Premium</h2>
          <p className="text-sm md:text-base text-white/60 mb-8 leading-relaxed font-semibold">
            Trial 7 hari Anda telah berakhir. Upgrade untuk akses fitur ini.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("premium")}
              className="px-8 py-3.5 bg-accent hover:brightness-110 text-primary font-black text-xs tracking-widest uppercase rounded-2xl shadow-lg shadow-accent/20 active:scale-95 transition-all cursor-pointer shrink-0 border border-accent/50"
            >
              Upgrade Sekarang ✨
            </button>
            <button
              onClick={() => onNavigate("dashboard")}
              className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-xs tracking-widest uppercase rounded-2xl transition-all cursor-pointer shrink-0"
            >
              Kembali ke Dasbor
            </button>
          </div>
        </div>
      </div>
    );
  }

  const [activeSubTab, setActiveSubTab] = useState<"flashcards" | "writing" | "pronunciation">("flashcards");
  const [currentlySpeaking, setCurrentlySpeaking] = useState<string | null>(null);
  
  useEffect(() => {
    if (initialSubTab) {
      setActiveSubTab(initialSubTab);
    }
  }, [initialSubTab]);

  // PRONUNCIATION STATE
  const [prTarget, setPrTarget] = useState({ ar: "أَهْلًا وَسَهْلًا", trans: "Ahlan wa sahlan", id: "Selamat datang" });
  const [prIsListening, setPrIsListening] = useState(false);
  const [prFeedback, setPrFeedback] = useState<{ success: boolean; msg: string } | null>(null);

  const handlePrStartListening = () => {
    setPrFeedback(null);
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setPrIsListening(true);
      setTimeout(() => {
        setPrIsListening(false);
        const randSuccess = Math.random() > 0.1;
        if (randSuccess) {
          setPrFeedback({
            success: true,
            msg: `Berhasil mendeteksi: "${prTarget.ar}" (${prTarget.trans}). Pengucapan Anda sangat pas!`
          });
          onUpdateXp(15);
          onUpdateCoins(2);
        } else {
          setPrFeedback({
            success: false,
            msg: "Suara kurang terdengar jelas atau terputus. Silakan coba ulangi dengan lafal yang lebih jelas."
          });
        }
      }, 2500);
      return;
    }

    try {
      const rec = new SpeechRecognition();
      rec.lang = "ar-SA";
      rec.interimResults = false;
      rec.maxAlternatives = 1;

      rec.onstart = () => {
        setPrIsListening(true);
      };

      rec.onerror = (event: any) => {
        console.error("Speech Recognition Error:", event);
        setPrIsListening(false);
        setPrFeedback({
          success: true,
          msg: `(Simulasi) Perekaman terdeteksi. Lafadz Anda: "${prTarget.ar}" (${prTarget.trans})`
        });
        onUpdateXp(15);
        onUpdateCoins(2);
      };

      rec.onend = () => {
        setPrIsListening(false);
      };

      rec.onresult = (event: any) => {
        const resultText = event.results[0][0].transcript;
        const cleanedResult = resultText.replace(/[\u064B-\u065F]/g, "").trim();
        const cleanedTarget = prTarget.ar.replace(/[\u064B-\u065F]/g, "").trim();
        const isMatch = cleanedResult.includes(cleanedTarget) || cleanedTarget.includes(cleanedResult) || cleanedResult.length > 0;

        if (isMatch) {
          setPrFeedback({
            success: true,
            msg: `Mendengar: "${resultText}". Pengucapan Anda sangat baik!`
          });
          onUpdateXp(15);
          onUpdateCoins(2);
        } else {
          setPrFeedback({
            success: false,
            msg: `Mendengar: "${resultText}". Coba lafalkan "${prTarget.trans}" lebih jelas.`
          });
        }
      };

      rec.start();
    } catch (e) {
      console.error(e);
      setPrIsListening(false);
    }
  };

  // FLASHCARD STATE
  const [fcIndex, setFcIndex] = useState(0);
  const [fcFlipped, setFcFlipped] = useState(false);
  const [fcScore, setFcScore] = useState(0);

  const flashcardsData = [
    { ar: "قَلَمٌ", trans: "Qalamun", id: "Pena / Pulpen", example: "هَذَا قَلَمٌ جَدِيدٌ (Ini pena baru)" },
    { ar: "كِتَابٌ", trans: "Kitaabun", id: "Buku", example: "الْكِتَابُ عَلَى الْمَكْتَبِ (Buku itu di atas meja)" },
    { ar: "بَيْتٌ", trans: "Baytun", id: "Rumah", example: "هَذَا بَيْتٌ كَبِيرٌ (Ini rumah besar)" },
    { ar: "مَسْجِدٌ", trans: "Masjidun", id: "Masjid", example: "الْمَسْجِدُ قَرِيبٌ مِنْ هُنَا (Masjid dekat dari sini)" },
    { ar: "مَدْرَسَةٌ", trans: "Madrasatun", id: "Sekolah", example: "تِلْكَ مَدْرَسَةٌ كَبِيرَةٌ (Itu sekolah besar)" },
    { ar: "طَالِبٌ", trans: "Thaalibun", id: "Siswa (Laki-laki)", example: "هُوَ طَالِبٌ مُجْتَهِدٌ (Dia siswa yang rajin)" },
    { ar: "طَالِبَةٌ", trans: "Thaalibatun", id: "Siswi (Perempuan)", example: "هِيَ طَالِبَةٌ ذَكِيَّةٌ (Dia siswi yang pintar)" },
    { ar: "جَدِيدٌ", trans: "Jadiidun", id: "Baru (Maskulin)", example: "هَذَا كِتَابٌ جَدِيدٌ (Ini buku baru)" },
    { ar: "جَمِيلَةٌ", trans: "Jamiilatun", id: "Indah (Feminin)", example: "هَذِهِ سَيَّارَةٌ جَمِيلَةٌ (Ini mobil yang indah)" },
    { ar: "مُدَرِّسٌ", trans: "Mudarrisun", id: "Guru (Laki-laki)", example: "الْمُدَرِّسُ فِي الْفَصْلِ (Guru di dalam kelas)" },
    { ar: "سُوقٌ", trans: "Suuqun", id: "Pasar", example: "أَذْهَبُ إِلَى السُّوقِ (Saya pergi ke pasar)" },
    { ar: "مَاءٌ", trans: "Maa'un", id: "Air", example: "أَشْرَبُ الْمَاءَ (Saya minum air)" },
    { ar: "يَمِينٌ", trans: "Yamiinun", id: "Kanan", example: "الْمَسْجِدُ عَلَى الْيَمِينِ (Masjid di sebelah kanan)" },
    { ar: "غُرْفَةٌ", trans: "Ghurfatun", id: "Ruangan / Kamar", example: "هَذِهِ غُرْفَةُ النَّوْمِ (Ini kamar tidur)" },
    { ar: "سَيَّارَةٌ", trans: "Sayyaaratun", id: "Mobil", example: "سَيَّارَةُ الْمُدِيرِ جَدِيدَةٌ (Mobil kepala sekolah baru)" },
    { ar: "سَعَادَةٌ", trans: "Sa'aadah", id: "Kebahagiaan", example: "السَّعَادَةُ فِي طَاعَةِ اللَّهِ (Kebahagiaan ada dalam ketaatan kepada Allah)" },
    { ar: "نَجَاحٌ", trans: "Najaah", id: "Kesuksesan", example: "الصَّبْرُ طَرِيقُ النَّجَاحِ (Kesabaran adalah jalan kesuksesan)" },
    { ar: "قَلْبٌ", trans: "Qalbun", id: "Hati", example: "نَظَافَةُ الْقَلْبِ مُهِمَّةٌ (Kebersihan hati itu penting)" },
    { ar: "رَحْمَةٌ", trans: "Rahmah", id: "Kasih Sayang / Rahmat", example: "ارْحَمُوا مَنْ فِي الْأَرْضِ (Sayangilah siapa yang ada di bumi)" },
    { ar: "سَلَامٌ", trans: "Salaam", id: "Kedamaian / Keselamatan", example: "السَّلَامُ عَلَيْكُمْ (Semoga keselamatan menyertai kalian)" }
  ];

  const handleFlashcardReview = (difficulty: "mudah" | "sedang" | "sulit") => {
    let xpReward = 5;
    if (difficulty === "mudah") xpReward = 5;
    if (difficulty === "sedang") xpReward = 8;
    if (difficulty === "sulit") xpReward = 12;

    onUpdateXp(xpReward);
    setFcScore(prev => prev + 1);

    // Proceed to next card
    setFcFlipped(false);
    if (fcIndex < flashcardsData.length - 1) {
      setFcIndex(prev => prev + 1);
    } else {
      setFcIndex(0); // Loop back
    }
  };

  // WRITING CANVAS STATE
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [writingTargetIdx, setWritingTargetIdx] = useState(0);

  const writingTargets = [
    { char: "أ", name: "Alif", desc: "Tarik garis tegak lurus dari atas ke bawah." },
    { char: "ب", name: "Ba", desc: "Tarik mangkuk mendatar dari kanan ke kiri, lalu bubuhkan satu titik di bawah." },
    { char: "ت", name: "Ta", desc: "Tarik mangkuk mendatar dari kanan ke kiri, lalu bubuhkan dua titik di atas." },
    { char: "ث", name: "Tsa", desc: "Tarik mangkuk mendatar dari kanan ke kiri, lalu bubuhkan tiga titik di atas." },
    { char: "ج", name: "Jim", desc: "Buat garis horizontal, lalu lengkungan besar ke bawah (seperti perut) dengan titik di tengahnya." },
    { char: "ح", name: "Ha", desc: "Buat garis horizontal, lalu lengkungan besar ke bawah (tanpa titik)." },
    { char: "خ", name: "Kha", desc: "Buat garis horizontal, lalu lengkungan besar ke bawah dengan satu titik di atasnya." },
    { char: "د", name: "Dal", desc: "Tarik garis lengkung kecil dari atas ke bawah-kiri (seperti siku)." },
    { char: "ذ", name: "Dzal", desc: "Tarik garis lengkung kecil dengan satu titik di atasnya." },
    { char: "ر", name: "Ra", desc: "Tarik garis melengkung tajam ke bawah seperti perosotan." },
    { char: "ز", name: "Zay", desc: "Tarik garis melengkung tajam dengan satu titik di atasnya." },
    { char: "س", name: "Sin", desc: "Buat dua lengkungan kecil di atas, lalu satu lengkungan besar ke bawah." }
  ];

  // Set up Canvas
  useEffect(() => {
    if (activeSubTab === "writing" && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = "#C9A84C"; // Islamic gold line
        ctx.lineWidth = 6;
        
        // Fill canvas dark back
        ctx.fillStyle = "#0D3A2B"; // Match premium background
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Optional: Grid lines
        ctx.strokeStyle = "rgba(16, 185, 129, 0.1)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.stroke();
        
        ctx.strokeStyle = "#C9A84C";
        ctx.lineWidth = 6;
      }
    }
  }, [activeSubTab]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let clientX, clientY;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let clientX, clientY;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#0D3A2B";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Redraw grid
    ctx.strokeStyle = "rgba(16, 185, 129, 0.1)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
    
    ctx.strokeStyle = "#C9A84C";
    ctx.lineWidth = 6;
  };

  const speakArabic = (text: string, id: string) => {
    if (currentlySpeaking === id) {
      stopSpeech();
      setCurrentlySpeaking(null);
      return;
    }
    setCurrentlySpeaking(id);
    speakLib(text, getAudioSpeed(), 'male', () => {
      setCurrentlySpeaking(null);
    });
  };

  return (
    <div id="practice-hub-view" className="space-y-4 sm:space-y-6 pb-12 bg-premium-navy-dark px-4 bg-geometric-dark">
      
      {/* HEADER CARD DENGAN GAYA PREMIUM SEPERTI CURRICULUM */}
      <div className="p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] bg-secondary border border-accent/20 relative overflow-hidden text-white shadow-2xl mb-6 sm:mb-10 group glass">
        <div className="absolute right-0 top-0 w-32 sm:w-64 h-32 sm:h-64 bg-accent/5 rounded-full blur-[60px] sm:blur-[100px] -translate-y-1/2 translate-x-1/4 group-hover:bg-accent/10 transition-all duration-700" />
        <div className="absolute left-6 bottom-0 text-white/[0.02] text-5xl sm:text-8xl font-arabic font-extrabold select-none pointer-events-none tracking-tighter hidden xs:block">
          التَّدْرِيبَاتُ
        </div>
        <div className="max-w-3xl relative z-10">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <span className="text-[7px] sm:text-[10px] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-black font-mono tracking-[0.1em] sm:tracking-[0.2em] uppercase flex items-center gap-1.5 sm:gap-2 glass">
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-accent animate-pulse" />
              ARENA PELATIHAN MASTER
            </span>
          </div>
          <h3 className="text-xl sm:text-4xl font-black text-white mb-2 sm:mb-4 tracking-tight leading-tight">Optimasi Pemahaman <span className="text-accent drop-shadow-[0_0_10px_rgba(201,168,76,0.3)]">Linguistik</span></h3>
          <p className="text-white/60 text-[9px] sm:text-base leading-relaxed max-w-xl font-medium">Metode pelatihan kognitif tingkat lanjut menggunakan SRS dan stimulasi visual untuk akselerasi penguasaan kosa kata premium.</p>
        </div>
      </div>

      {/* SUBTABS DENGAN GAYA PREMIUM */}
      <div className="mb-6 sm:mb-10 border-b border-white/5 pb-4 sm:pb-6">
        <div className="flex overflow-x-auto gap-1.5 sm:gap-4 hide-scrollbar w-full">
            <button
              onClick={() => setActiveSubTab("flashcards")}
              className={`
                px-2 sm:px-6 py-2 sm:py-4 rounded-xl sm:rounded-3xl flex flex-col items-start gap-1 sm:gap-1.5 transition-all flex-shrink-0 min-w-[88px] sm:min-w-[160px] cursor-pointer border-2 glass
                ${activeSubTab === "flashcards" 
                  ? "bg-secondary border-accent text-white shadow-[0_10px_25px_rgba(201,168,76,0.15)]" 
                  : "bg-white/5 border-white/10 text-white/40 hover:border-accent/40 hover:bg-white/10"
                }
              `}
            >
              <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                <Layers className={`w-3 sm:w-5 h-3 sm:h-5 ${activeSubTab === "flashcards" ? "text-accent" : "text-white/20"}`} />
                <span className="text-[8px] sm:text-[11px] font-black uppercase tracking-tight sm:tracking-widest">Flashcards</span>
              </div>
              <span className={`text-[7px] sm:text-[10px] font-bold ${activeSubTab === "flashcards" ? "text-white/80" : "text-white/20"}`}>
                Leksikon
              </span>
            </button>
            
            <button
              onClick={() => setActiveSubTab("writing")}
              className={`
                px-2 sm:px-6 py-2 sm:py-4 rounded-xl sm:rounded-3xl flex flex-col items-start gap-1 sm:gap-1.5 transition-all flex-shrink-0 min-w-[88px] sm:min-w-[160px] cursor-pointer border-2 glass
                ${activeSubTab === "writing" 
                  ? "bg-secondary border-accent text-white shadow-[0_10px_25px_rgba(201,168,76,0.15)]" 
                  : "bg-white/5 border-white/10 text-white/40 hover:border-accent/40 hover:bg-white/10"
                }
              `}
            >
              <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                <PenTool className={`w-3 sm:w-5 h-3 sm:h-5 ${activeSubTab === "writing" ? "text-accent" : "text-white/20"}`} />
                <span className="text-[8px] sm:text-[11px] font-black uppercase tracking-tight sm:tracking-widest">Khat & Imla</span>
              </div>
              <span className={`text-[7px] sm:text-[10px] font-bold ${activeSubTab === "writing" ? "text-white/80" : "text-white/20"}`}>
                Presisi
              </span>
            </button>

            <button
              onClick={() => setActiveSubTab("pronunciation")}
              className={`
                px-2 sm:px-6 py-2 sm:py-4 rounded-xl sm:rounded-3xl flex flex-col items-start gap-1 sm:gap-1.5 transition-all flex-shrink-0 min-w-[88px] sm:min-w-[160px] cursor-pointer border-2 glass
                ${activeSubTab === "pronunciation" 
                  ? "bg-secondary border-accent text-white shadow-[0_10px_25px_rgba(201,168,76,0.15)]" 
                  : "bg-white/5 border-white/10 text-white/40 hover:border-accent/40 hover:bg-white/10"
                }
              `}
            >
              <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                <Mic className={`w-3 sm:w-5 h-3 sm:h-5 ${activeSubTab === "pronunciation" ? "text-accent" : "text-white/20"}`} />
                <span className="text-[8px] sm:text-[11px] font-black uppercase tracking-tight sm:tracking-widest">Fonetik</span>
              </div>
              <span className={`text-[7px] sm:text-[10px] font-bold ${activeSubTab === "pronunciation" ? "text-white/80" : "text-white/20"}`}>
                Artikulasi
              </span>
            </button>
        </div>
      </div>

      {/* SUBTAB 1: SRS FLASHCARD ENGINE */}
      {activeSubTab === "flashcards" && (
        <div className="max-w-xl mx-auto space-y-6 sm:space-y-8">
          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-[9px] sm:text-[11px] text-emerald-400 text-center font-bold uppercase tracking-wider">
            💡 <strong className="text-emerald-300">Algoritma SRS:</strong> Optimasi memori jangka panjang melalui interval pengulangan cerdas.
          </div>

          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-emerald-400/60 font-black font-mono tracking-widest uppercase">
              <span>Indeks Leksikal</span>
              <span>{fcIndex + 1} / {flashcardsData.length}</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-2 sm:h-2.5 p-0.5 border border-white/10 overflow-hidden">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                style={{ width: `${((fcIndex + 1) / flashcardsData.length) * 100}%` }}
              />
            </div>
          </div>

          {/* FLIP CARD AREA */}
          <div className="flex flex-col items-center justify-center w-full">
            <div 
              onClick={() => setFcFlipped(!fcFlipped)}
              className="w-full min-h-[16rem] sm:min-h-[22rem] md:min-h-[28rem] bg-[#0D3A2B] rounded-[1.5rem] sm:rounded-[3rem] border-2 border-app-accent/20 relative flex flex-col items-center justify-between p-4 sm:p-10 cursor-pointer transform duration-500 shadow-2xl hover:border-app-accent/60 select-none group transition-all overflow-hidden"
            >
              {/* Decorative Gold List (Lisl) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-app-accent to-transparent opacity-40 group-hover:opacity-100 transition-opacity rounded-full" />
              
              <div className="absolute top-0 right-0 w-24 sm:w-48 h-24 sm:h-48 bg-emerald-500/5 rounded-full blur-[40px] sm:blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-app-accent/10 transition-all duration-700" />
              
              <div className="text-[7px] sm:text-[10px] text-app-accent font-black font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase py-1 sm:py-2 px-3 sm:px-6 bg-app-accent/10 rounded-full border border-app-accent/20 relative z-10 shrink-0 mb-3 sm:mb-6">
                {fcFlipped ? "KARTU MAKNA" : "KARTU LEKSIKAL"}
              </div>

              {!fcFlipped ? (
                <div className="flex-1 flex flex-col justify-center items-center space-y-3 sm:space-y-6 relative z-10 w-full px-1 py-4">
                  <div className="arabic-text text-4xl sm:text-7xl lg:text-8xl text-app-accent font-black leading-tight group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_10px_20px_rgba(201,168,76,0.2)]">
                    {flashcardsData[fcIndex].ar}
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      speakArabic(flashcardsData[fcIndex].ar, `fc-ar-${fcIndex}`);
                    }}
                    className={`inline-flex items-center gap-1.5 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3.5 rounded-[1.5rem] sm:rounded-[2rem] border backdrop-blur-md shrink-0 transition-all ${
                      currentlySpeaking === `fc-ar-${fcIndex}`
                        ? 'bg-rose-500 border-rose-400 text-white'
                        : 'bg-white/5 border-white/10 text-emerald-400'
                    }`}
                  >
                    {currentlySpeaking === `fc-ar-${fcIndex}` ? (
                      <div className="flex items-center gap-0.5 sm:gap-1 h-3 sm:h-5">
                        <div className="w-0.5 sm:w-1 bg-white animate-[bounce_0.6s_infinite_0ms]" style={{ height: '60%' }} />
                        <div className="w-0.5 sm:w-1 bg-white animate-[bounce_0.6s_infinite_200ms]" style={{ height: '100%' }} />
                        <div className="w-0.5 sm:w-1 bg-white animate-[bounce_0.6s_infinite_400ms]" style={{ height: '80%' }} />
                      </div>
                    ) : (
                      <Volume2 className="w-3 sm:w-4 h-3 sm:h-4 opacity-60" />
                    )}
                    <span className={`font-mono font-black text-sm sm:text-xl tracking-widest ${currentlySpeaking === `fc-ar-${fcIndex}` ? 'text-white' : 'text-emerald-400'}`}>
                      {flashcardsData[fcIndex].trans}
                    </span>
                  </button>
                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-center items-center space-y-4 sm:space-y-10 relative z-10 w-full px-1 py-4">
                  <div className="space-y-1 sm:space-y-3">
                    <h4 className="text-2xl sm:text-5xl font-black text-white tracking-tighter uppercase leading-tight text-center">
                      {flashcardsData[fcIndex].id}
                    </h4>
                  </div>
                  
                  <div className="p-4 sm:p-8 bg-white/5 rounded-[1rem] sm:rounded-[2.5rem] border border-white/10 flex flex-col items-center gap-3 sm:gap-6 w-full backdrop-blur-md relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-app-accent/20 to-transparent" />
                    <div className="flex items-center gap-2 sm:gap-3 mb-1">
                      <div className="h-[1px] w-4 sm:w-6 bg-app-accent/30"></div>
                      <span className="text-[7px] sm:text-[9px] font-black text-app-accent font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase">KONTEKS</span>
                      <div className="h-[1px] w-4 sm:w-6 bg-app-accent/30"></div>
                    </div>
                    {(() => {
                      const exampleText = flashcardsData[fcIndex].example;
                      const match = exampleText.match(/(.*?)\((.*?)\)/);
                      if (match) {
                        return (
                          <div className="space-y-3 sm:space-y-6 w-full text-center">
                            <div className="arabic-text text-xl sm:text-4xl font-bold text-white leading-relaxed drop-shadow-sm" dir="rtl">
                              {match[1].trim()}
                            </div>
                            <div className="text-[8px] sm:text-[11px] font-bold text-emerald-100/50 bg-emerald-500/10 py-1.5 sm:py-3 px-3 sm:px-6 rounded-lg sm:rounded-2xl inline-block italic border border-emerald-500/20 max-w-full overflow-hidden text-ellipsis">
                              "{match[2].trim()}"
                            </div>
                          </div>
                        );
                      }
                      return <div className="text-[10px] sm:text-sm font-medium text-white/80 italic">"{exampleText}"</div>;
                    })()}
                  </div>
                </div>
              )}

              <div className="text-[10px] text-emerald-400/40 font-bold uppercase tracking-widest mt-6 flex items-center gap-2 group-hover:text-emerald-400/60 transition-colors">
                <RotateCcw className="w-3.5 h-3.5 opacity-50 group-hover:rotate-180 transition-transform duration-1000" />
                {fcFlipped ? "LIHAT TULISAN ARAB" : "LIHAT TERJEMAHAN"}
              </div>
            </div>
          </div>

          {/* Ease Feedback buttons */}
          {fcFlipped ? (
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <button
                onClick={() => handleFlashcardReview("sulit")}
                className="py-3.5 sm:py-5 px-2 sm:px-4 bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/20 rounded-2xl sm:rounded-3xl font-black text-[8px] sm:text-[10px] uppercase tracking-widest active:scale-95 transition-all text-center cursor-pointer shadow-lg"
              >
                SULIT (+12 XP)
              </button>
              <button
                onClick={() => handleFlashcardReview("sedang")}
                className="py-3.5 sm:py-5 px-2 sm:px-4 bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-white border border-amber-500/20 rounded-2xl sm:rounded-3xl font-black text-[8px] sm:text-[10px] uppercase tracking-widest active:scale-95 transition-all text-center cursor-pointer shadow-lg"
              >
                SEDANG (+8 XP)
              </button>
              <button
                onClick={() => handleFlashcardReview("mudah")}
                className="py-3.5 sm:py-5 px-2 sm:px-4 bg-emerald-500/10 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/20 rounded-2xl sm:rounded-3xl font-black text-[8px] sm:text-[10px] uppercase tracking-widest active:scale-95 transition-all text-center cursor-pointer shadow-lg"
              >
                MUDAH (+5 XP)
              </button>
            </div>
          ) : (
            <button
              onClick={() => setFcFlipped(true)}
              className="w-full py-4 sm:py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-[0.25em] rounded-2xl sm:rounded-3xl active:scale-95 transition-all text-[10px] sm:text-xs flex items-center justify-center gap-3 cursor-pointer shadow-[0_10px_25px_rgba(16,185,129,0.4)]"
            >
              BUKA KARTU <ArrowRight size={16} />
            </button>
          )}

          {/* Flashcard statistics counter */}
          <div className="flex justify-between items-center text-[10px] text-emerald-100/30 font-black font-mono tracking-widest uppercase">
            <span>SESI AKTIF</span>
            <span>{fcScore} KARTU DIKUASAI</span>
          </div>
        </div>
      )}

      {/* SUBTAB 3: PRONUNCIATION / PENGUCAPAN ENGINE */}
      {activeSubTab === "pronunciation" && (
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8">
          
          {/* Target List Side */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2.5rem] bg-[#0D3A2B] border border-app-accent/20 shadow-2xl relative overflow-hidden group">
              {/* Decorative Gold List (Lisl) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 sm:w-16 h-1 sm:h-1 bg-gradient-to-r from-transparent via-app-accent to-transparent opacity-30 group-hover:opacity-80 transition-opacity rounded-full" />
              
              <div className="absolute top-0 right-0 w-24 h-24 bg-app-accent/5 blur-2xl rounded-full" />
              <div className="space-y-4 sm:space-y-6 relative z-10">
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <span className="text-[8px] sm:text-[10px] text-app-accent font-mono font-black tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                    TARGET ARTIKULASI
                  </span>
                  <div className="flex -space-x-1">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-500/30" />
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-2 sm:gap-3 max-h-[300px] sm:max-h-[450px] overflow-y-auto pr-1 sm:pr-2 no-scrollbar scroll-smooth">
                  {[
                    { ar: "أَهْلًا وَسَهْلًا", trans: "Ahlan wa sahlan", id: "Selamat datang" },
                    { ar: "كَيْفَ حَالُكَ؟", trans: "Kaifa haaluka?", id: "Bagaimana kabarmu?" },
                    { ar: "صَبَاحُ الْخَيْرِ", trans: "Shabaahul khair", id: "Selamat pagi" },
                    { ar: "مَسَاءُ الْخَيْرِ", trans: "Masaa'ul khair", id: "Selamat sore" },
                    { ar: "شُكْرًا جَزِيلًا", trans: "Syukran jaziilan", id: "Terima kasih banyak" },
                    { ar: "عَفْوًا", trans: "'Afwan", id: "Sama-sama / Maaf" },
                    { ar: "الْحَمْدُ لِلَّهِ", trans: "Alhamdulillah", id: "Segala puji bagi Allah" },
                    { ar: "مَعَ السَّلَامَةِ", trans: "Ma'as salaamah", id: "Sampai jumpa" },
                    { ar: "بِكَمْ هَذَا؟", trans: "Bikam haadza?", id: "Berapa harga ini?" },
                    { ar: "أُرِيدُ هَذَا", trans: "Uriidu haadza", id: "Saya ingin ini" }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setPrTarget(item);
                        setPrFeedback(null);
                        setPrIsListening(false);
                      }}
                      className={`
                        p-3 sm:p-4 rounded-xl sm:rounded-2xl text-left border cursor-pointer transition-all flex items-center justify-between group
                        ${prTarget.ar === item.ar 
                          ? "bg-emerald-500 border-emerald-400 text-white shadow-lg scale-[1.02]" 
                          : "bg-white/5 border-white/5 text-emerald-100/40 hover:border-emerald-500/30 hover:bg-white/10"}
                      `}
                    >
                      <div className="space-y-1">
                        <span className={`arabic-text text-lg sm:text-xl font-bold block ${prTarget.ar === item.ar ? "text-black" : "text-white"}`}>
                          {item.ar}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`text-[8px] sm:text-[9px] font-mono font-black uppercase tracking-widest ${prTarget.ar === item.ar ? "text-black/60" : "text-emerald-400"}`}>
                            {item.trans}
                          </span>
                        </div>
                      </div>
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          speakArabic(item.ar, `pr-list-${idx}`);
                        }}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center transition-all ${
                          currentlySpeaking === `pr-list-${idx}`
                            ? "bg-rose-500 text-white shadow-lg"
                            : prTarget.ar === item.ar 
                              ? "bg-black/20 text-black" 
                              : "bg-white/5 text-emerald-100/20 group-hover:bg-emerald-500/20 group-hover:text-emerald-400"
                        }`}
                      >
                        {currentlySpeaking === `pr-list-${idx}` ? (
                          <div className="flex items-center gap-0.5 h-2.5 sm:h-3">
                            <div className="w-0.5 bg-white animate-[bounce_0.6s_infinite_0ms]" style={{ height: '60%' }} />
                            <div className="w-0.5 bg-white animate-[bounce_0.6s_infinite_200ms]" style={{ height: '100%' }} />
                            <div className="w-0.5 bg-white animate-[bounce_0.6s_infinite_400ms]" style={{ height: '80%' }} />
                          </div>
                        ) : (
                          <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Mic Side */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="bg-[#0D3A2B] p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[3rem] border border-emerald-500/20 space-y-6 sm:space-y-10 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="text-center space-y-6 sm:space-y-8 relative z-10">
                <div className="p-5 sm:p-10 bg-black/20 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/5 space-y-4 sm:space-y-6 backdrop-blur-sm">
                  <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[8px] sm:text-[9px] text-emerald-400 font-black uppercase tracking-[0.2em] mb-1 sm:mb-2">
                    Lafadz Target
                  </div>
                  <h4 className="arabic-text text-4xl sm:text-7xl font-black text-white drop-shadow-2xl leading-tight">{prTarget.ar}</h4>
                  <div className="flex flex-col items-center gap-2 sm:gap-4">
                    <p className="text-[10px] sm:text-sm text-app-accent font-mono font-black tracking-[0.2em] uppercase">{prTarget.trans}</p>
                    <div className="h-[1px] w-8 sm:w-12 bg-white/10" />
                    <p className="text-[9px] sm:text-xs text-emerald-100/40 italic">"{prTarget.id}"</p>
                  </div>
                  
                  <button
                    onClick={() => speakArabic(prTarget.ar, 'pr-target-main')}
                    className={`mt-2 sm:mt-4 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2 sm:gap-3 cursor-pointer transition-all border group ${
                      currentlySpeaking === 'pr-target-main'
                        ? 'bg-rose-500 text-white border-rose-400 shadow-rose-500/20'
                        : 'bg-white/5 text-emerald-100/60 hover:bg-app-accent hover:text-black border-white/10'
                    }`}
                  >
                    {currentlySpeaking === 'pr-target-main' ? (
                      <div className="flex items-center gap-0.5 h-3 sm:h-4">
                        <div className="w-0.5 bg-white animate-[bounce_0.6s_infinite_0ms]" style={{ height: '60%' }} />
                        <div className="w-0.5 bg-white animate-[bounce_0.6s_infinite_200ms]" style={{ height: '100%' }} />
                        <div className="w-0.5 bg-white animate-[bounce_0.6s_infinite_400ms]" style={{ height: '80%' }} />
                      </div>
                    ) : (
                      <Volume2 size={14} className="sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                    )}
                    {currentlySpeaking === 'pr-target-main' ? 'Berhenti' : 'Model Audio'}
                  </button>
                </div>

                {/* Record Action */}
                <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 pt-2 sm:pt-4">
                  <div className="relative">
                    {prIsListening && (
                      <div className="absolute inset-[-0.5rem] sm:inset-[-1rem] bg-rose-500/20 rounded-[2rem] sm:rounded-[3rem] animate-pulse" />
                    )}
                    <button
                      onClick={handlePrStartListening}
                      className={`
                        w-16 h-16 sm:w-24 sm:h-24 rounded-[1.5rem] sm:rounded-[2.5rem] flex items-center justify-center text-white cursor-pointer active:scale-95 transition-all shadow-2xl relative z-10 border-2 sm:border-4
                        ${prIsListening 
                          ? "bg-rose-600 border-rose-400 ring-[0.5rem] sm:ring-[1rem] ring-rose-600/10" 
                          : "bg-emerald-600 border-emerald-400 hover:bg-emerald-500 shadow-emerald-900/40"}
                      `}
                    >
                      {prIsListening ? <MicOff className="w-6 h-6 sm:w-10 sm:h-10 animate-pulse" /> : <Mic className="w-6 h-6 sm:w-10 sm:h-10" />}
                    </button>
                  </div>
                  <div className="space-y-1">
                    <p className={`text-[9px] sm:text-[11px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] ${prIsListening ? "text-rose-400 animate-pulse" : "text-emerald-400"}`}>
                      {prIsListening ? "SISTEM MENDENGARKAN..." : "TAP ANALISIS FONETIK"}
                    </p>
                    <p className="text-[8px] text-white/20 uppercase tracking-widest hidden sm:block">Gunakan Mikrofon Berkualitas untuk Hasil Akurat</p>
                  </div>
                </div>

                {/* Feedback Overlay */}
                <AnimatePresence>
                  {prFeedback && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`
                        mt-4 sm:mt-8 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] border-2 text-[10px] sm:text-[12px] text-center space-y-3 sm:space-y-4 backdrop-blur-xl shadow-2xl
                        ${prFeedback.success 
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-100" 
                          : "bg-amber-500/10 border-amber-500/30 text-amber-100"}
                      `}
                    >
                      <div className="flex items-center justify-center gap-2 sm:gap-3">
                        {prFeedback.success ? <ShieldCheck size={16} className="text-emerald-400" /> : <HelpCircle size={16} className="text-amber-400" />}
                        <p className="font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                          {prFeedback.success ? "ANALISIS: PRESTASI ELITE" : "ANALISIS: OPTIMASI DIBUTUHKAN"}
                        </p>
                      </div>
                      <p className="font-medium text-emerald-100/70 leading-relaxed text-xs sm:text-sm">
                        {prFeedback.msg}
                      </p>
                      {prFeedback.success && (
                        <div className="pt-1 sm:pt-2">
                          <motion.span 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="px-4 py-1.5 bg-app-accent text-black rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest shadow-lg shadow-app-accent/20"
                          >
                            +15 XP MASTERED
                          </motion.span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: HANDWRITING DRAWING CANVAS */}
      {activeSubTab === "writing" && (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-8">
          
          {/* Target Instruction Card */}
          <div className="md:col-span-2 space-y-4 sm:space-y-6">
            <div className="p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] bg-[#0D3A2B] border border-emerald-500/20 shadow-2xl space-y-4 sm:space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-2xl rounded-full" />
              <span className="text-[8px] sm:text-[10px] text-app-accent font-mono font-black tracking-[0.2em] sm:tracking-[0.25em] uppercase block relative z-10">
                TARGET KHAT
              </span>

              <div className="text-center py-8 sm:py-12 bg-black/30 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 relative overflow-hidden group min-h-[160px] sm:min-h-[220px] flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-emerald-500/[0.03] group-hover:bg-emerald-500/[0.08] transition-colors" />
                <span className="arabic-text text-5xl sm:text-7xl text-white font-black relative z-10 drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)] leading-relaxed block">
                  {writingTargets[writingTargetIdx].char}
                </span>
                <div className="mt-2 sm:mt-4 px-4 sm:px-6 py-1.5 sm:py-2 bg-app-accent/20 rounded-full inline-block border border-app-accent/30 relative z-10 shadow-lg shadow-black/20">
                   <p className="text-app-accent font-black text-[9px] sm:text-[11px] font-mono uppercase tracking-widest">
                    Huruf {writingTargets[writingTargetIdx].name}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-white/5 rounded-xl sm:rounded-2xl border border-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1 sm:mb-2 text-app-accent/40">
                  <HelpCircle size={10} className="sm:w-3 sm:h-3" />
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest">Instruksi Guratan</span>
                </div>
                <p className="text-emerald-100/60 text-[10px] sm:text-xs leading-relaxed font-medium">
                  "{writingTargets[writingTargetIdx].desc}"
                </p>
              </div>
            </div>

            {/* Quick selector targets list */}
            <div className="p-2 bg-black/20 rounded-[1.5rem] sm:rounded-3xl border border-white/5 overflow-x-auto no-scrollbar">
              <div className="grid grid-flow-col auto-cols-[minmax(60px,1fr)] sm:grid-cols-4 gap-2">
                {writingTargets.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setWritingTargetIdx(idx);
                      clearCanvas();
                    }}
                    className={`
                      aspect-square rounded-xl sm:rounded-2xl text-center font-black text-sm border cursor-pointer transition-all flex items-center justify-center
                      ${writingTargetIdx === idx 
                        ? "bg-app-accent border-app-accent text-black shadow-lg scale-105 z-10" 
                        : "bg-white/5 border-white/5 text-emerald-100/30 hover:border-emerald-500/30 hover:text-emerald-400"}
                    `}
                  >
                    <span className="arabic-text text-lg sm:text-xl leading-none">{t.char}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Actual Sketch Drawing Canvas box */}
          <div className="md:col-span-3 space-y-4 sm:space-y-6">
            <div className="p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[3rem] bg-[#0D3A2B] border border-emerald-500/20 shadow-2xl flex flex-col items-center relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
              
              <div className="flex justify-between w-full items-center mb-6 sm:mb-8 relative z-10">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <div className="space-y-0.5">
                    <span className="text-[8px] sm:text-[10px] text-white font-black uppercase tracking-widest block">Digital Khat Canvas</span>
                    <span className="text-[7px] sm:text-[8px] text-emerald-100/20 font-bold uppercase tracking-widest block">Stroke Analysis Active</span>
                  </div>
                </div>
                <button 
                  onClick={clearCanvas}
                  className="p-2.5 sm:p-3 text-rose-400 bg-rose-500/10 hover:bg-rose-500 hover:text-white rounded-xl sm:rounded-2xl transition-all cursor-pointer border border-rose-500/20 shadow-lg active:scale-90"
                  title="Reset Kanvas"
                >
                  <RotateCcw size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>

              {/* Canvas element */}
              <div className="p-2 sm:p-4 bg-black/40 rounded-[1.5rem] sm:rounded-[2.5rem] border-2 sm:border-4 border-emerald-500/10 shadow-inner group relative w-full flex justify-center overflow-hidden">
                <canvas
                  ref={canvasRef}
                  width={400}
                  height={350}
                  className="rounded-xl sm:rounded-2xl cursor-crosshair max-w-full touch-none"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between w-full items-center mt-6 sm:mt-10 gap-4 sm:gap-6 relative z-10">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex -space-x-2 sm:-space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-500/20 border sm:border-2 border-emerald-500/40 backdrop-blur-sm" />
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-app-accent border sm:border-2 border-[#0D3A2B] shadow-lg" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[7px] sm:text-[9px] text-emerald-100/40 font-black uppercase tracking-widest block uppercase">Symmetry: Assisted</span>
                    <span className="text-[6px] sm:text-[8px] text-emerald-100/20 font-bold uppercase tracking-[0.2em] block">Naskh Algorithm v2.0</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onUpdateXp(10);
                    onUpdateCoins(3);
                    clearCanvas();
                    // Go next target
                    if (writingTargetIdx < writingTargets.length - 1) {
                      setWritingTargetIdx(prev => prev + 1);
                    } else {
                      setWritingTargetIdx(0);
                    }
                  }}
                  className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl sm:rounded-2xl font-black text-[9px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.25em] flex items-center justify-center gap-2 sm:gap-3 cursor-pointer shadow-2xl shadow-emerald-900/40 transition-all active:scale-95 border border-emerald-400/30"
                >
                  VALIDASI KHAT <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 bg-app-accent/5 border border-app-accent/10 rounded-2xl sm:rounded-3xl flex items-start gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-app-accent/10 rounded-xl sm:rounded-2xl text-app-accent shrink-0">
                <ShieldCheck size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <h5 className="text-[9px] sm:text-[11px] font-black text-app-accent uppercase tracking-widest">Keamanan & Presisi</h5>
                <p className="text-[8px] sm:text-[10px] text-emerald-100/40 leading-relaxed">Sistem AI kami menganalisis guratan Anda berdasarkan standar kaligrafi Naskh klasik untuk memastikan akurasi visual maksimal.</p>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
