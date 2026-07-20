/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";
import { Award, Download, Share2, ArrowLeft, Lock, CheckCircle, Trophy, Crown, FileText } from "lucide-react";
import { UserProfile } from "../types";
import { CURRICULUM_DATA } from "../data/curriculum";
import { jsPDF } from "jspdf";

interface CertificateProps {
  userProfile: UserProfile;
  completedLessons: string[];
  onBack: () => void;
}

export default function Certificate({ userProfile, completedLessons, onBack }: CertificateProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedLevelId, setSelectedLevelId] = useState<string>("level_1");
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  // Check completion for all levels
  const levelStatus = CURRICULUM_DATA.map(lvl => {
    const total = lvl.lessons.length;
    const completed = lvl.lessons.filter(l => (completedLessons || []).includes(l.id)).length;
    const isFinished = total > 0 && completed === total;
    return { id: lvl.id, name: lvl.name, isFinished, progress: Math.round((completed / total) * 100), completedCount: completed, totalCount: total };
  });

  const currentStatus = levelStatus.find(s => s.id === selectedLevelId) || levelStatus[0];
  const userName = userProfile.name || "Sahabat ArabiyPro";

  // Generate a semi-unique certificate number
  const getCertNumber = (levelId: string) => {
    const levelNum = levelId.split('_')[1];
    const datePart = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const nameHash = userName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return `AP-L${levelNum}-${datePart}-${nameHash.toString(16).toUpperCase()}`;
  };

  const drawCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 1000;
    canvas.height = 700;

    // Background
    ctx.fillStyle = "#FDFBF7";
    ctx.fillRect(0, 0, 1000, 700);

    // Frame
    ctx.strokeStyle = "#0A3B29";
    ctx.lineWidth = 14;
    ctx.strokeRect(20, 20, 960, 660);

    // Gold Inner Border
    ctx.strokeStyle = "#D4A359";
    ctx.lineWidth = 4;
    ctx.strokeRect(35, 35, 930, 630);

    // Ornaments
    const drawOrnament = (x: number, y: number) => {
      ctx.fillStyle = "#D4A359";
      ctx.beginPath(); ctx.arc(x, y, 10, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#0A3B29";
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(x, y, 15, 0, Math.PI * 2); ctx.stroke();
    };
    drawOrnament(35, 35); drawOrnament(965, 35); drawOrnament(35, 665); drawOrnament(965, 665);

    // Header
    ctx.fillStyle = "#0A3B29";
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.fillText("🎓 ARABIYPRO", 500, 90);
    ctx.fillStyle = "#D4A359";
    ctx.font = "italic 16px Georgia";
    ctx.fillText("Mendidik Bahasa Al-Quran dari Dasar hingga Mahir", 500, 115);

    // Title
    ctx.fillStyle = "#0A3B29";
    ctx.font = "bold 48px Georgia";
    ctx.fillText("SERTIFIKAT KELULUSAN", 500, 190);

    // Awarded to
    ctx.fillStyle = "#666666";
    ctx.font = "18px Arial";
    ctx.fillText("Dengan bangga dianugerahkan kepada:", 500, 245);

    // Name
    ctx.fillStyle = "#D4A359";
    ctx.font = "bold 42px Georgia";
    ctx.fillText(userName, 500, 305);

    ctx.strokeStyle = "#D4A359";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(300, 325); ctx.lineTo(700, 325); ctx.stroke();

    // Body
    ctx.fillStyle = "#1A2E26";
    ctx.font = "16px Arial";
    ctx.fillText("Atas dedikasi luar biasa dan keberhasilan menyelesaikan seluruh kurikulum", 500, 370);
    ctx.fillText(`program pembelajaran Bahasa Arab komprehensif:`, 500, 395);

    // Level
    ctx.fillStyle = "#0A3B29";
    ctx.font = "bold 28px Georgia";
    ctx.fillText(currentStatus.name, 500, 440);

    // Seal
    ctx.fillStyle = "#D4A359";
    ctx.beginPath(); ctx.arc(500, 520, 40, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 12px Arial";
    ctx.fillText("OFFICIAL", 500, 515);
    ctx.fillText("ACADEMY", 500, 530);

    // Footer Info
    const today = new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
    ctx.fillStyle = "#666666";
    ctx.font = "13px Arial";
    ctx.textAlign = "left";
    ctx.fillText(`Tanggal: ${today}`, 100, 580);
    ctx.fillText(`No. Sertifikat: ${getCertNumber(selectedLevelId)}`, 100, 605);

    // Signature
    ctx.textAlign = "center";
    ctx.fillText("Tanda Tangan Pengajar:", 800, 500);
    ctx.fillStyle = "#0A2540";
    ctx.font = "italic 24px Georgia";
    ctx.fillText("Ahmad Al-Hafidz", 800, 545);
    ctx.strokeStyle = "#CCCCCC";
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(700, 560); ctx.lineTo(900, 560); ctx.stroke();
    ctx.fillStyle = "#666666";
    ctx.font = "12px Arial";
    ctx.fillText("Direktur ArabiyPro", 800, 580);
  };

  useEffect(() => {
    if (currentStatus.isFinished) {
      setTimeout(drawCertificate, 200);
    }
  }, [selectedLevelId, currentStatus.isFinished, userName]);

  const handleDownloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `Sertifikat_${selectedLevelId}_${userName.replace(/\s+/g, "_")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleDownloadPdf = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsGeneratingPdf(true);
    
    try {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1000, 700] });
      pdf.addImage(imgData, "PNG", 0, 0, 1000, 700);
      pdf.save(`Sertifikat_${selectedLevelId}_${userName.replace(/\s+/g, "_")}.pdf`);
    } catch (err) {
      console.error(err);
      alert("Gagal mengunduh PDF. Silakan gunakan format Gambar (PNG) sebagai alternatif.");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="space-y-6 pb-12 bg-app-background">
      <div className="flex items-center justify-between border-b border-app-border pb-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 rounded-xl bg-app-surface border border-app-border text-app-text-muted hover:text-app-text-main shadow-sm cursor-pointer"><ArrowLeft className="w-5 h-5" /></button>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-app-primary flex items-center gap-2">
              <Award className="w-6 h-6 text-app-accent" /> Sertifikat Digital
            </h2>
            <p className="text-xs text-app-text-muted">Selesaikan setiap tingkat untuk meraih pengakuan resmi</p>
          </div>
        </div>
      </div>

      {/* Level Switcher */}
      <div className="flex overflow-x-auto gap-2 p-1.5 bg-app-surface border border-app-border rounded-2xl shadow-sm scrollbar-none">
        {levelStatus.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedLevelId(s.id)}
            className={`px-4 py-2 rounded-xl text-[11px] font-black transition-all cursor-pointer shrink-0 ${
              selectedLevelId === s.id ? "bg-app-primary text-white shadow-sm" : "text-app-text-muted hover:text-app-text-main"
            }`}
          >
            {s.name.split(':')[0]} {s.isFinished && "✅"}
          </button>
        ))}
      </div>

      {currentStatus.isFinished ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="overflow-x-auto bg-app-surface p-4 rounded-3xl border border-app-accent/30 shadow-md flex justify-center">
              <canvas ref={canvasRef} className="w-full max-w-[850px] border border-app-border rounded-2xl shadow-inner aspect-[1000/700]" />
            </div>
            <p className="text-center text-[10px] text-gray-400 italic">Sertifikat Resmi ArabiyPro untuk {userName}</p>
          </div>

          <div className="space-y-5 bg-app-surface p-6 rounded-3xl border border-app-border shadow-sm h-fit">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center"><CheckCircle className="w-7 h-7" /></div>
              <div>
                <h4 className="font-extrabold text-sm text-app-text-main leading-none">Selamat Atas Kelulusan!</h4>
                <p className="text-[10px] text-gray-400 font-medium mt-1">Anda telah menguasai materi {currentStatus.name}</p>
              </div>
            </div>

            <hr className="border-app-border" />

            <div className="space-y-3">
              <button onClick={handleDownloadPdf} disabled={isGeneratingPdf} className="w-full py-3.5 bg-app-primary hover:bg-[#153a2b] text-white font-black rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50 transition-all">
                {isGeneratingPdf ? <RefreshCw className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />} Unduh PDF Resmi
              </button>
              <button onClick={handleDownloadImage} className="w-full py-3.5 bg-app-surface hover:bg-app-background text-app-primary border border-app-primary/20 font-black rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all">
                <Download className="w-4 h-4" /> Simpan Sebagai Gambar
              </button>
              <button className="w-full py-3.5 bg-app-surface hover:bg-app-background text-app-accent border border-app-accent/20 font-black rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all">
                <Share2 className="w-4 h-4" /> Bagikan Pencapaian
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-xl mx-auto bg-app-surface p-10 rounded-3xl border border-app-border shadow-md text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto text-amber-600"><Lock className="w-10 h-10" /></div>
          <div className="space-y-2">
            <h3 className="font-extrabold text-xl text-app-text-main">Sertifikat Masih Terkunci</h3>
            <p className="text-xs text-app-text-muted max-w-sm mx-auto leading-relaxed">Selesaikan seluruh 8 bab materi di <strong>{currentStatus.name}</strong> untuk membuka sertifikat digital resmi Anda.</p>
          </div>
          <div className="bg-app-background p-6 rounded-2xl border border-app-border space-y-4">
            <div className="flex justify-between items-center text-xs font-bold text-app-text-main">
              <span>Kemajuan Tingkat</span> <span className="font-mono text-app-accent">{currentStatus.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div className="bg-app-accent h-full transition-all duration-700" style={{ width: `${currentStatus.progress}%` }} />
            </div>
            <p className="text-[10px] text-gray-400 text-left">Menyelesaikan <strong>{currentStatus.completedCount}</strong> dari <strong>{currentStatus.totalCount}</strong> pelajaran wajib.</p>
          </div>
          <button onClick={onBack} className="px-8 py-3 bg-app-accent text-white font-black rounded-xl text-xs uppercase tracking-wider cursor-pointer shadow-md inline-flex items-center gap-2"><Trophy className="w-4 h-4" /> Lanjutkan Belajar</button>
        </div>
      )}
    </div>
  );
}

const RefreshCw = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);
