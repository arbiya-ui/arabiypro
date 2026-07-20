/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from "react";
import { BarChart3, TrendingUp, Sparkles, BrainCircuit, Lightbulb, Clock, CheckCircle2, Download, Trophy } from "lucide-react";
import { UserProfile } from "../types";
import { UstadzAhmadAvatar } from "./UserAvatar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface AnalyticsProps {
  userProfile: UserProfile;
  onNavigate: (tabId: any, params?: any) => void;
}

export default function Analytics({ userProfile, onNavigate }: AnalyticsProps) {
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

  const analyticsRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  
  // Custom mock analytics data
  const categoryStrengths = [
    { category: "Hijaiyah & Makhraj", score: 95, color: "bg-app-primary" },
    { category: "Kosakata Qur'an", score: 85, color: "bg-app-primary" },
    { category: "Tata Bahasa (Grammar)", score: 65, color: "bg-amber-500" },
    { category: "Percakapan (AI Conversation)", score: 75, color: "bg-app-accent" },
    { category: "Tashrif & Konjugasi", score: 50, color: "bg-rose-500" },
  ];

  const weeklyStudyMinutes = [
    { day: "Sen", min: 15 },
    { day: "Sel", min: 30 },
    { day: "Rab", min: 10 },
    { day: "Kam", min: 25 },
    { day: "Jum", min: 20 },
    { day: "Sab", min: 45 },
    { day: "Ahd", min: 12 },
  ];

  const chartData = {
    labels: weeklyStudyMinutes.map(d => d.day),
    datasets: [
      {
        label: 'Menit Belajar',
        data: weeklyStudyMinutes.map(d => d.min),
        backgroundColor: '#C9A84C',
        hoverBackgroundColor: '#E5C467',
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#A0A0B0',
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#A0A0B0',
        }
      },
    },
  };

  // AI Diagnostic Generator
  const getAiInsight = () => {
    if (userProfile.accuracy < 60) {
      return "Fokus pada pengulangan harakat dasar dan latihan menyalin di kanvas menulis. Konsistensimu adalah kunci!";
    } else if (userProfile.xp < 200) {
      return "Kerja bagus untuk permulaan! Anda menunjukkan pemahaman makhraj yang baik. Mari tingkatkan penguasaan kata kerja di Level 2.";
    } else {
      return "Analisis mendeteksi Anda sangat kuat di Huruf Hijaiyah, namun sedikit lemah di Tashrif kata kerja lampau. Cobalah luangkan waktu 5 menit di 'Word Match Blitz' untuk melatih ingatan!";
    }
  };

  const handleExportPDF = async () => {
    if (!analyticsRef.current) return;
    setIsExporting(true);
    
    try {
      const canvas = await html2canvas(analyticsRef.current, {
        scale: 2,
        backgroundColor: '#F4F7F5', // Consistent rendering with theme background
        useCORS: true,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Laporan_Kemajuan_ArabiyPro.pdf');
    } catch (err) {
      console.error("Failed to export PDF", err);
      alert("Gagal mengekspor PDF.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div id="analytics-view" className="space-y-6 pb-12 bg-premium-navy-dark px-4 bg-geometric-dark" ref={analyticsRef}>
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-accent" />
            Laporan Kemajuan Belajar
          </h2>
          <p className="text-white/60 text-xs font-semibold">Pantau statistik detail keaktifan, pencapaian target, dan evaluasi kekuatan bahasa Anda</p>
        </div>
        <button
          onClick={handleExportPDF}
          disabled={isExporting}
          className="px-4 py-2.5 bg-accent hover:brightness-110 text-primary text-xs font-black rounded-xl flex items-center gap-2 transition-all disabled:opacity-50 cursor-pointer w-fit shadow-lg shadow-accent/20 scale-100 active:scale-95 border border-accent/50 uppercase tracking-widest"
        >
          <Download className="w-4 h-4" />
          {isExporting ? "Mengekspor..." : "Export PDF"}
        </button>
      </div>

      {/* MONDAY WEEKLY REPORT - MOVED FROM DASHBOARD */}
      <div className="p-6 rounded-3xl bg-secondary border border-accent/20 text-white shadow-xl text-left space-y-6 relative overflow-hidden glass">
        <div className="absolute -right-6 -bottom-6 opacity-[0.04] w-48 h-48">
          <Trophy className="w-full h-full text-white" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent glass">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] text-accent font-black font-mono tracking-widest block uppercase">SENIN LAPORAN</span>
              <h4 className="font-black text-sm text-white">Laporan Perkembangan Mingguan Akademik</h4>
            </div>
          </div>
          <span className="text-[10px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/60 font-mono glass">
            Minggu Lalu (Senin - Minggu)
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3.5 bg-white/5 border border-white/5 rounded-2xl glass-dark">
            <span className="text-[9px] text-white/40 block font-mono">DURASI BELAJAR</span>
            <span className="text-sm font-black text-white font-mono block mt-1">145 Menit</span>
            <span className="text-[10px] text-accent font-mono font-bold mt-0.5 block">▲ +25% vs Pekan Lalu</span>
          </div>

          <div className="p-3.5 bg-white/5 border border-white/5 rounded-2xl glass-dark">
            <span className="text-[9px] text-white/40 block font-mono">BAB TERLEWATI</span>
            <span className="text-sm font-black text-accent font-mono block mt-1">3 Bab Selesai</span>
            <span className="text-[10px] text-white/40 font-mono mt-0.5 block">Lulus Akurasi 82%</span>
          </div>

          <div className="p-3.5 bg-white/5 border border-white/5 rounded-2xl glass-dark">
            <span className="text-[9px] text-white/40 block font-mono">KATA MUFRODAT BARU</span>
            <span className="text-sm font-black text-accent font-mono block mt-1">24 Kata Baru</span>
            <span className="text-[10px] text-accent font-mono font-bold mt-0.5 block">Selesai Evaluasi</span>
          </div>

          <div className="p-3.5 bg-white/5 border border-white/5 rounded-2xl glass-dark">
            <span className="text-[9px] text-white/40 block font-mono">REKOR STREAK MAKS</span>
            <span className="text-sm font-black text-white font-mono block mt-1">7 Hari Aktif</span>
            <span className="text-[10px] text-ruby font-mono font-bold mt-0.5 block">Streak Sempurna ⭐</span>
          </div>
        </div>

        <div className="p-4 bg-black/25 border border-white/5 rounded-2xl flex items-start gap-3.5 glass-dark">
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10 bg-secondary">
            <UstadzAhmadAvatar className="w-full h-full" />
          </div>
          <div>
            <span className="text-[9px] text-accent font-black uppercase tracking-wider block">MOTIVASI AI PERSONAL (USTADZ AHMAD):</span>
            <p className="text-xs text-white/90 leading-relaxed font-semibold italic mt-1">
              "Ustadz Ahmad berkata: Sesungguhnya keistiqomahan dalam berlatih, walau hanya 15 menit setiap hari, jauh lebih dicintai Allah daripada belajar berjam-jam namun kemudian terputus. Kemajuan Anda pekan lalu sangat membanggakan, Sahabat. Pertahankan langkah mulia ini!"
            </p>
          </div>
        </div>
      </div>

      {/* CORE PROGRESS WIDGETS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 rounded-3xl bg-secondary shadow-sm border border-accent/10 space-y-2 glass">
          <div className="flex justify-between items-center text-xs text-white/40 font-mono">
            <span>TOTAL XP DIKUMPULKAN</span>
            <span>⚡ TARGET 500</span>
          </div>
          <h3 className="text-3xl font-black text-accent font-mono drop-shadow-[0_0_10px_rgba(201,168,76,0.3)]">{userProfile.xp} XP</h3>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden glass">
            <div className="h-full bg-accent rounded-full shadow-[0_0_10px_rgba(201,168,76,0.5)]" style={{ width: `${Math.min(100, (userProfile.xp / 500) * 100)}%` }} />
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-secondary shadow-sm border border-accent/10 space-y-2 glass">
          <div className="flex justify-between items-center text-xs text-white/40 font-mono">
            <span>KEAKTIFAN BELAJAR</span>
            <span>⏱ TARGET {userProfile.targetMinutes}M/HARI</span>
          </div>
          <h3 className="text-3xl font-black text-white font-mono">{userProfile.minutesLearned} Menit</h3>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden glass">
            <div className="h-full bg-accent rounded-full" style={{ width: `${Math.min(100, (userProfile.minutesLearned / userProfile.targetMinutes) * 100)}%` }} />
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-secondary shadow-sm border border-accent/10 space-y-2 glass">
          <div className="flex justify-between items-center text-xs text-white/40 font-mono">
            <span>AKURASI EVALUASI</span>
            <span>🎯 TARGET 80%</span>
          </div>
          <h3 className="text-3xl font-black text-accent font-mono drop-shadow-[0_0_10px_rgba(201,168,76,0.3)]">{userProfile.accuracy}%</h3>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden glass">
            <div className="h-full bg-accent rounded-full shadow-[0_0_10px_rgba(201,168,76,0.5)]" style={{ width: `${userProfile.accuracy}%` }} />
          </div>
        </div>
      </div>

      {/* CHARTS GRID SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* WEEKLY ACTIVITY CHART (Chart.js) */}
        <div className="lg:col-span-3 p-6 rounded-3xl bg-secondary shadow-sm border border-accent/10 flex flex-col justify-between glass">
          <div>
            <h3 className="text-lg font-black text-white mb-1 flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              Menit Belajar Mingguan
            </h3>
            <p className="text-white/40 text-xs mb-6 font-semibold uppercase tracking-wider">Waktu yang Anda habiskan untuk melatih vokal Arab setiap harinya</p>
          </div>

          <div className="h-56 w-full relative">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* PERFORMANCE BY CATEGORY METER */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-secondary shadow-sm border border-accent/10 space-y-4 glass">
          <div>
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-accent" />
              Kekuatan Kategori Bahasa
            </h3>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">Peta kekuatan materi berdasarkan rasio ketepatan quiz Anda</p>
          </div>

          <div className="space-y-3 pt-2">
            {categoryStrengths.map((item, idx) => {
              // Map old styling bg colors to proper clean solid colors
              let barColor = "bg-accent";
              if (item.color.includes("amber") || item.color.includes("rose")) barColor = "bg-ruby";
              return (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-black">
                    <span className="text-white/60 truncate mr-2">{item.category}</span>
                    <span className="text-white font-mono font-black">{item.score}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden glass">
                    <div className={`h-full ${barColor} rounded-full`} style={{ width: `${item.score}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* AI INSTRUCTION DIAGNOSTIC BAR */}
      <div className="p-6 rounded-3xl bg-secondary shadow-sm border border-accent/20 relative overflow-hidden glass">
        <div className="absolute top-1/2 -translate-y-1/2 right-4 text-white/[0.02] text-7xl font-black pointer-events-none font-sans">
          INSIGHT
        </div>

        <div className="flex gap-4 items-start relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 glass">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-[9px] px-2 py-0.5 rounded bg-accent/15 text-accent font-black font-mono tracking-wider uppercase">
              AI ANALISIS REKOMENDASI
            </span>
            <h4 className="font-black text-sm text-white">Rencana Tindakan Personalisasi</h4>
            <p className="text-white/60 text-xs leading-relaxed max-w-2xl pt-1 font-semibold italic">
              "{getAiInsight()}"
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

