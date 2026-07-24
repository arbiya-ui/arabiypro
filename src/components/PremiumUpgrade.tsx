/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Check, Crown, CreditCard, Award, Zap, HelpCircle, ShieldCheck, Lock, Users, Star, ArrowRight, Clock, Upload, Send, AlertCircle, Banknote } from "lucide-react";
import { UserProfile, PaymentProof } from "../types";
import { CURRICULUM_DATA } from "../data/curriculum";

interface PremiumUpgradeProps {
  onSuccessUpgrade: () => void;
  isAlreadyPremium: boolean;
  userProfile: UserProfile;
}

export default function PremiumUpgrade({ onSuccessUpgrade, isAlreadyPremium, userProfile }: PremiumUpgradeProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showProofForm, setShowProofForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("monthly");
  const [isProcessing, setIsProcessing] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 45, s: 12 });

  const totalChapters = CURRICULUM_DATA.reduce((acc, lvl) => acc + lvl.lessons.length, 0);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: userProfile.name || "",
    phone: userProfile.phone || "",
    nominal: ""
  });
  const [photoProof, setPhotoProof] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"none" | "success" | "pending">("none");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check for existing pending payments
  useEffect(() => {
    const pending = localStorage.getItem("pendingPayments");
    if (pending) {
      const payments: PaymentProof[] = JSON.parse(pending);
      if (payments.some(p => p.status === "pending" && p.userName === userProfile.name)) {
        setSubmissionStatus("pending");
      }
    }
  }, [userProfile.name]);

  // Reset countdown every 24h simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
            else { h = 23; m = 45; s = 12; }
          }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  const premiumFeatures = [
    "Akses materi lanjutan (Level 3 Mutaqaddim & Level 4 Mahir)",
    "Asisten Guru AI Ustadz Ahmad tak terbatas",
    "Analitik progress belajar mingguan",
    "Laporan belajar PDF (Downloadable)",
    "Bebas Iklan & Akses Eksklusif Grup Belajar WhatsApp",
    "Webinar Zoom Bulanan Tatap Muka bersama Syekh Arab"
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoProof(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitProof = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoProof || !formData.fullName || !formData.phone || !formData.nominal) {
      alert("Mohon lengkapi semua data dan lampirkan bukti transfer.");
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      const newProof: PaymentProof = {
        id: `PAY-${Date.now()}`,
        userId: userProfile.id, // Save userId if available (Supabase UID)
        userName: formData.fullName,
        phone: formData.phone,
        package: selectedPlan,
        nominal: Number(formData.nominal),
        timestamp: new Date().toISOString(),
        photoBase64: photoProof,
        status: "pending"
      };

      const existingJson = localStorage.getItem("pendingPayments");
      const existing: PaymentProof[] = existingJson ? JSON.parse(existingJson) : [];
      localStorage.setItem("pendingPayments", JSON.stringify([...existing, newProof]));
      
      setIsSubmitting(false);
      setSubmissionStatus("pending");
      setShowProofForm(false);
      
      // Update global admin notification badge simulation
      window.dispatchEvent(new CustomEvent("new-payment-received"));
    }, 1500);
  };

  const isExpired = userProfile.trialStatus === "expired";

  return (
    <div id="premium-upgrade-view" className="max-w-4xl mx-auto space-y-6 pb-12">
      
      {/* INTERSTITIAL FOR EXPIRED TRIAL */}
      {isExpired && !isAlreadyPremium && (
        <div className="bg-app-surface rounded-[2.5rem] border-2 border-rose-500/20 shadow-xl p-8 mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-rose-100 dark:bg-rose-900/20 border-4 border-white dark:border-white/10 flex items-center justify-center text-6xl shadow-inner animate-pulse">
              🔒
            </div>
            <div className="flex-1 text-center md:text-left space-y-3">
              <span className="px-3 py-1 bg-rose-500 text-white text-[10px] font-black rounded-full uppercase tracking-widest">TRIAL EXPIRED</span>
              <h2 className="text-2xl md:text-3xl font-black text-app-text-main dark:text-white leading-tight">
                Sayang sekali jika berhenti di sini...
              </h2>
              <p className="text-sm text-app-text-muted leading-relaxed font-medium">
                Masa trial 7 hari Anda telah berakhir. Anda sudah menyelesaikan <span className="text-app-primary dark:text-app-accent font-bold">{userProfile.completedLessons?.length || 0} bab</span> dan menguasai <span className="text-app-primary dark:text-app-accent font-bold">{userProfile.masteredWordsCount} kosakata</span> Arab! Jangan biarkan progress Anda terhenti.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-app-background dark:bg-black/20 rounded-2xl border border-app-border dark:border-white/5">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Versi Gratis</h4>
              <div className="space-y-2">
                <p className="text-xs text-gray-400 flex items-center gap-2"><Lock className="w-3.5 h-3.5" /> Bab 3 s/d {totalChapters} Terkunci</p>
                <p className="text-xs text-gray-400 flex items-center gap-2"><Lock className="w-3.5 h-3.5" /> AI Tutor Sangat Terbatas</p>
                <p className="text-xs text-gray-400 flex items-center gap-2"><Lock className="w-3.5 h-3.5" /> Tanpa Sertifikat Resmi</p>
              </div>
            </div>
            <div className="p-4 bg-app-primary/5 dark:bg-app-accent/5 rounded-2xl border border-app-accent/30">
              <h4 className="text-[10px] font-black text-app-accent uppercase tracking-widest mb-3">Versi Premium</h4>
              <div className="space-y-2">
                <p className="text-xs text-app-primary dark:text-app-accent font-bold flex items-center gap-2"><Sparkles className="w-3.5 h-3.5" /> Akses {totalChapters} Bab Lengkap</p>
                <p className="text-xs text-app-primary dark:text-app-accent font-bold flex items-center gap-2"><Sparkles className="w-3.5 h-3.5" /> AI Tutor 24/7 Tanpa Batas</p>
                <p className="text-xs text-app-primary dark:text-app-accent font-bold flex items-center gap-2"><Sparkles className="w-3.5 h-3.5" /> Sertifikat Resmi per Level</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HEADER HERO AREA */}
      <div className="text-center space-y-3 py-10 relative overflow-hidden bg-gradient-to-b from-app-accent/5 to-transparent rounded-[3rem]">
        {/* Calligraphy watermark backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-app-accent/[0.03] text-9xl font-black pointer-events-none select-none italic">
          الملك
        </div>

        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-[#C9A84C] border-2 border-white/20 flex items-center justify-center text-emerald-950 text-4xl mx-auto animate-float shadow-xl shadow-app-accent/20 relative z-10">
          <Crown className="w-10 h-10" />
        </div>

        <div className="relative z-10 space-y-3">
          <span className="text-[10px] px-3 py-1.5 rounded-full bg-app-accent/20 text-app-accent border border-app-accent/40 font-mono font-extrabold uppercase tracking-widest block w-fit mx-auto backdrop-blur-md">
            ARABIYPRO PREMIUM
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-app-primary dark:text-app-accent tracking-tighter">Upgrade Ke Premium</h2>
          <p className="text-app-text-main-muted text-xs md:text-sm max-w-lg mx-auto leading-relaxed font-medium">
            Kuasai bahasa Al-Qur'an secara lebih cepat, terstruktur, dan terdidik bersama asisten tutor AI bersertifikasi tinggi. Buka konten Level 2, 3 & 4!
          </p>

          {userProfile.trialStatus === 'active' && userProfile.trialDaysLeft !== undefined && (
            <div className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 dark:bg-app-accent/20 text-app-primary dark:text-app-accent rounded-full border border-app-accent/30 text-[10px] font-black uppercase tracking-widest animate-pulse shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-current" /> Trial Anda: {userProfile.trialDaysLeft} Hari Lagi
            </div>
          )}
        </div>

        {/* URGENCY TIMER */}
        {!isAlreadyPremium && (
          <div className="mt-6 flex flex-col items-center">
            <div className="bg-rose-500 text-white px-4 py-2 rounded-2xl shadow-lg flex items-center gap-3">
              <Clock className="w-4 h-4 animate-pulse" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[8px] font-black uppercase tracking-widest">Promo Berakhir Dalam:</span>
                <span className="text-lg font-black font-mono">
                  {formatTime(timeLeft.h)}:{formatTime(timeLeft.m)}:{formatTime(timeLeft.s)}
                </span>
              </div>
            </div>
            <p className="text-[10px] text-rose-500 font-bold mt-2 uppercase tracking-tighter italic">HEMAT 51% — Penawaran Terbatas Khusus Hari Ini!</p>
          </div>
        )}
      </div>

      {isAlreadyPremium ? (
        <div className="p-8 rounded-3xl bg-gradient-to-r from-app-primary via-[#0A3B29] to-app-primary border border-app-accent/40 text-center space-y-4 shadow-lg text-white">
          <span className="text-4xl animate-pulse inline-block">🌟</span>
          <h3 className="text-xl font-bold">Anda Adalah Anggota Premium!</h3>
          <p className="text-xs text-white/80 max-w-sm mx-auto leading-relaxed">
            Terima kasih atas dukungannya. Seluruh fitur tutor AI percakapan, kurikulum Level 2, 3 & 4, dan sertifikat digital kini telah terbuka penuh secara permanen.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* TIER 1: GRATIS */}
          <div className="p-8 rounded-3xl bg-app-surface shadow-app-card border border-app-border dark:border-white/5 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs text-app-text-muted font-extrabold tracking-widest uppercase font-mono">
                DASAR
              </span>
              <h3 className="text-2xl font-black text-app-primary dark:text-white">Gratis</h3>
              
              <div className="py-4 border-b border-app-border dark:border-white/5">
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black text-app-primary dark:text-white font-mono">Rp0</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-[11px] text-app-text-muted dark:text-gray-400 block flex items-start gap-2"><Check className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" /> Akses Bab 1-5 Level 1</span>
                <span className="text-[11px] text-app-text-muted dark:text-gray-400 block flex items-start gap-2"><Check className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" /> Trial 7 Hari Akses Penuh Level 1-4</span>
                <span className="text-[11px] text-app-text-muted dark:text-gray-400 block flex items-start gap-2"><Check className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" /> Kuota AI Terbatas (10/hari)</span>
                <span className="text-[11px] text-app-text-muted dark:text-gray-400 block flex items-start gap-2"><Check className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" /> Iklan di aplikasi</span>
              </div>
            </div>

            <button
              disabled
              className="w-full mt-8 py-3 bg-gray-100 dark:bg-app-surface/5 text-gray-400 font-bold text-sm rounded-xl cursor-not-allowed text-center"
            >
              Paket Saat Ini
            </button>
          </div>

          {/* TIER 2: BULANAN */}
          <div className="p-8 rounded-3xl bg-app-surface border border-app-primary/20 flex flex-col justify-between relative shadow-lg">
            <div className="space-y-4">
              <span className="text-xs text-app-primary dark:text-app-accent font-extrabold tracking-widest uppercase font-mono">
                BULANAN
              </span>
              <h3 className="text-2xl font-black text-app-primary dark:text-white">Fleksibel</h3>
              
              <div className="py-4 border-b border-app-border dark:border-white/5">
                <span className="text-gray-400 text-xs line-through block font-mono">Rp99.000 / bln</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black text-app-primary dark:text-white font-mono">Rp49.000</span>
                  <span className="text-xs text-app-text-muted font-medium">/bln</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-[11px] text-app-primary dark:text-white font-semibold flex items-start gap-2"><Check className="w-3.5 h-3.5 text-app-primary dark:text-app-accent mt-0.5 shrink-0" /> Buka Akses Penuh Level 2, 3 & 4</span>
                <span className="text-[11px] text-app-primary dark:text-white font-semibold flex items-start gap-2"><Check className="w-3.5 h-3.5 text-app-primary dark:text-app-accent mt-0.5 shrink-0" /> Tutor AI Tanpa Batas</span>
                <span className="text-[11px] text-app-primary dark:text-white font-semibold flex items-start gap-2"><Check className="w-3.5 h-3.5 text-app-primary dark:text-app-accent mt-0.5 shrink-0" /> Laporan PDF & Sertifikat</span>
              </div>
            </div>

            <button
              onClick={() => { setSelectedPlan("monthly"); setShowProofForm(true); }}
              className="w-full mt-8 py-3 bg-app-primary hover:bg-[#153d2e] text-white font-bold text-sm rounded-xl active:scale-95 transition-all cursor-pointer text-center shadow-md shadow-app-primary/20"
            >
              Ambil Promo Sekarang!
            </button>
          </div>
          
          {/* TIER 3: TAHUNAN (LUXURY) */}
          <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-app-primary to-emerald-950 border-2 border-app-accent flex flex-col justify-between relative shadow-[0_20px_60px_rgba(201,168,76,0.15)] transform lg:-translate-y-4 group">
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-app-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </div>
            
            {/* Best Value Badge */}
            <span className="absolute -top-4 right-6 text-[10px] font-extrabold font-mono tracking-wider px-4 py-1.5 bg-gradient-to-r from-rose-600 to-rose-500 text-white rounded-full uppercase shadow-lg border-2 border-app-primary animate-pulse z-20">
              HEMAT 51%
            </span>

            <div className="space-y-4 relative z-10">
              <span className="text-xs text-app-accent font-extrabold tracking-widest uppercase font-mono bg-app-accent/10 px-3 py-1 rounded-full border border-app-accent/20">
                TAHUNAN
              </span>
              <h3 className="text-3xl font-black text-white tracking-tight">Istiqomah</h3>
              
              <div className="py-4 border-b border-app-accent/30">
                <span className="text-white/40 text-xs line-through block font-mono">Rp799.000 / Tahun</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-black text-app-accent font-mono drop-shadow-[0_0_15px_rgba(201,168,76,0.4)]">Rp399.000</span>
                  <span className="text-xs text-white/70 font-medium">/thn</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-xs text-white font-semibold flex items-start gap-2"><Check className="w-4 h-4 text-app-accent mt-0.5 shrink-0" /> Hanya Rp33.250/bulan</span>
                <span className="text-xs text-white font-semibold flex items-start gap-2"><Check className="w-4 h-4 text-app-accent mt-0.5 shrink-0" /> Semua fitur bulanan</span>
                <span className="text-xs text-white font-semibold flex items-start gap-2"><Check className="w-4 h-4 text-app-accent mt-0.5 shrink-0" /> Prioritas support 24/7</span>
              </div>
            </div>

            <button
              onClick={() => { setSelectedPlan("annual"); setShowProofForm(true); }}
              className="w-full mt-8 py-4 bg-gradient-to-r from-amber-400 to-[#C9A84C] hover:from-amber-300 hover:to-amber-500 text-emerald-950 font-black text-sm rounded-2xl active:scale-95 transition-all cursor-pointer text-center shadow-[0_5px_20px_rgba(201,168,76,0.4)] hover:shadow-[0_10px_30px_rgba(201,168,76,0.6)] relative z-10"
            >
              Mulai Langganan Premium ✨
            </button>
          </div>

        </div>
      )}

      {/* GUARANTEE */}
      <div className="flex flex-col items-center justify-center p-8 bg-amber-50/50 dark:bg-app-accent/5 border border-amber-100 dark:border-app-accent/20 rounded-3xl mt-8">
        <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-app-accent/20 flex items-center justify-center mb-4">
          <ShieldCheck className="w-6 h-6 text-app-accent" />
        </div>
        <h4 className="font-bold text-app-primary dark:text-app-accent text-lg mb-2">🛡️ Garansi 30 Hari Uang Kembali</h4>
        <p className="text-xs text-app-text-muted dark:text-gray-400 text-center max-w-md leading-relaxed">
          Jika Anda merasa ArabiyPro Premium tidak membantu dalam belajar bahasa Arab, kami akan mengembalikan uang Anda 100% tanpa syarat. <span className="font-bold">Kepercayaan Anda adalah amanah bagi kami.</span>
        </p>
      </div>

      {/* TESTIMONIALS */}
      <div className="mt-12">
        <h3 className="text-2xl font-black text-center text-app-primary dark:text-white mb-8">Apa Kata Siswa Premium Kami?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Ahmad", job: "Jakarta", text: "Setelah 3 bulan dengan ArabiyPro, saya sudah bisa membaca kitab! Worth it banget." },
            { name: "Fatimah", job: "Surabaya", text: "AI Tutornya luar biasa, seperti punya guru Arab pribadi 24 jam yang sangat sabar mengoreksi makhraj saya." },
            { name: "Yusuf", job: "Bandung", text: "Lebih murah dari les privat tapi hasilnya jauh lebih bagus. Fitur gamification-nya bikin belajar jadi nagih terus." }
          ].map((t, i) => (
            <div key={i} className="bg-app-surface p-6 rounded-3xl border border-app-border dark:border-white/5 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all">
              <div>
                <div className="flex gap-1 text-app-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-sm text-app-text-muted dark:text-gray-300 italic mb-6 leading-relaxed">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50 dark:border-white/5">
                <div className="w-10 h-10 rounded-full bg-app-primary/10 flex items-center justify-center text-lg">👤</div>
                <div>
                  <h5 className="font-bold text-sm text-app-primary dark:text-app-accent">{t.name}</h5>
                  <p className="text-[10px] text-gray-400">{t.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-12 max-w-2xl mx-auto">
        <h3 className="text-2xl font-black text-center text-app-primary dark:text-white mb-8">Pertanyaan Umum (FAQ)</h3>
        <div className="space-y-4 text-left">
          {[
            { q: "Apakah saya bisa membatalkan langganan kapan saja?", a: "Tentu. Anda bisa membatalkan langganan kapan saja melalui menu pengaturan. Akses premium akan tetap aktif hingga akhir periode tagihan." },
            { q: "Bagaimana cara kerja garansi 30 hari?", a: "Cukup hubungi tim support kami dalam 30 hari pertama berlangganan, kami akan memproses pengembalian dana 100% tanpa syarat." },
            { q: "Apakah materi bisa diakses offline?", a: "Saat ini aplikasi membutuhkan koneksi internet, terutama untuk fitur AI interaktif. Namun laporan PDF dapat Anda download." },
            { q: "Metode pembayaran apa saja yang diterima?", a: "Kami menerima berbagai metode pembayaran termasuk QRIS, GoPay, OVO, Virtual Account (BCA, Mandiri, BNI, BRI), dan Kartu Kredit/Debit." },
            { q: "Apakah ada grup belajar khusus?", a: "Ya! Anggota Premium mendapatkan akses eksklusif ke grup WhatsApp untuk berdiskusi dengan siswa lain dan mentor." }
          ].map((faq, i) => (
            <div key={i} className="bg-app-surface p-5 rounded-2xl border border-app-border dark:border-white/5 shadow-sm">
              <h4 className="font-bold text-app-primary dark:text-app-accent text-sm mb-2">{faq.q}</h4>
              <p className="text-xs text-app-text-muted dark:text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* STATUS PENDING UI */}
      {submissionStatus === "pending" && (
        <div className="p-6 bg-amber-500/10 border border-amber-500/30 rounded-3xl flex items-center gap-4 animate-pulse mt-8">
          <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl">
            ⏳
          </div>
          <div>
            <h4 className="font-black text-app-primary text-sm uppercase">Menunggu Konfirmasi Admin</h4>
            <p className="text-[10px] text-app-text-muted font-bold leading-tight mt-0.5">
              Bukti pembayaran Anda sudah kami terima. Admin akan melakukan pengecekan maksimal 1x24 jam. Kode token akan dikirim ke WhatsApp Anda.
            </p>
          </div>
        </div>
      )}

      {/* MANUAL PAYMENT & PROOF FORM MODAL */}
      {showProofForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-app-surface rounded-[2.5rem] w-full max-w-2xl shadow-2xl relative border-2 border-app-accent/30 my-8">
            <button onClick={() => setShowProofForm(false)} className="absolute top-6 right-6 p-2 hover:bg-gray-100 dark:hover:bg-app-surface/10 rounded-full text-gray-400">
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left: Instructions */}
              <div className="p-8 bg-app-primary text-white space-y-6 md:rounded-l-[2.3rem] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-app-accent to-transparent opacity-60" />
                <div className="flex items-center gap-3 relative z-10">
                  <Banknote className="w-6 h-6 text-app-accent" />
                  <h3 className="text-xl font-black uppercase tracking-tight">Instruksi Bayar</h3>
                </div>
                
                <div className="space-y-4 relative z-10">
                  <div className="p-4 bg-white/5 border border-app-accent/20 rounded-2xl hover:bg-white/10 transition-colors">
                    <p className="text-[10px] font-black text-app-accent uppercase mb-2">TRANSFER BANK BSI</p>
                    <p className="text-sm font-bold tracking-widest">2564429140</p>
                    <p className="text-[10px] opacity-70">A/N: Karso</p>
                  </div>
                  
                  <div className="p-4 bg-white/5 border border-app-accent/20 rounded-2xl hover:bg-white/10 transition-colors">
                    <p className="text-[10px] font-black text-app-accent uppercase mb-2">E-WALLET DANA</p>
                    <p className="text-sm font-bold tracking-widest">085770480102</p>
                    <p className="text-[10px] opacity-70">A/N: Karso</p>
                  </div>

                  <div className="p-4 bg-white/5 border border-app-accent/20 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                    <div className="w-16 h-16 bg-white rounded-lg p-1 shrink-0 shadow-lg shadow-black/20">
                       <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ArabiyProPayment" alt="QRIS" className="w-full h-full grayscale opacity-60" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-app-accent uppercase mb-1">SCAN QRIS</p>
                      <p className="text-[10px] opacity-70 leading-tight">Mendukung GoPay, OVO, ShopeePay, Dana, dll.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <h4 className="text-[10px] font-black text-app-accent uppercase tracking-widest">LANGKAH AKTIVASI:</h4>
                  {[
                    "Transfer sesuai paket yang dipilih",
                    "Upload bukti pembayaran di samping",
                    "Tunggu konfirmasi admin (Maks 1x24 Jam)",
                    "Token dikirim via WhatsApp",
                    "Input kode di Profil & Setelan"
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-4 h-4 rounded-full bg-app-accent text-app-primary text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">{i+1}</span>
                      <p className="text-[11px] font-medium text-white/90">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Form */}
              <div className="p-8 space-y-6">
                <div className="space-y-1">
                   <h3 className="text-xl font-black text-app-primary dark:text-white">KONFIRMASI</h3>
                   <p className="text-[10px] text-app-text-muted font-bold uppercase">Paket: {selectedPlan === "annual" ? "TAHUNAN (Rp399.000)" : "BULANAN (Rp49.000)"}</p>
                </div>

                <form onSubmit={handleSubmitProof} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Nama Lengkap</label>
                    <input 
                      type="text" 
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-4 py-3 bg-app-background dark:bg-app-surface/5 border border-app-border dark:border-white/10 rounded-xl text-sm focus:border-app-accent outline-none transition-all"
                      placeholder="Masukkan nama sesuai transfer"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Nomor HP / WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-app-background dark:bg-app-surface/5 border border-app-border dark:border-white/10 rounded-xl text-sm focus:border-app-accent outline-none transition-all"
                      placeholder="Contoh: 081234567890"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Nominal Transfer (Rp)</label>
                    <input 
                      type="number" 
                      required
                      value={formData.nominal}
                      onChange={(e) => setFormData({...formData, nominal: e.target.value})}
                      className="w-full px-4 py-3 bg-app-background dark:bg-app-surface/5 border border-app-border dark:border-white/10 rounded-xl text-sm focus:border-app-accent outline-none transition-all"
                      placeholder={selectedPlan === "annual" ? "399000" : "49000"}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Bukti Transfer (Foto)</label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full h-32 border-2 border-dashed border-app-border dark:border-white/10 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-app-background dark:hover:bg-app-surface/5 transition-all overflow-hidden relative"
                    >
                      {photoProof ? (
                        <img src={photoProof} alt="Proof" className="w-full h-full object-cover" />
                      ) : (
                        <>
                          <Upload className="w-6 h-6 text-gray-400" />
                          <span className="text-[10px] text-app-text-muted font-bold uppercase">Klik Untuk Upload</span>
                        </>
                      )}
                    </div>
                    <input 
                      type="file" 
                      accept="image/*"
                      className="hidden"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-app-accent hover:bg-app-accent text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Mengirim..." : <><Send className="w-4 h-4" /> KIRIM BUKTI PEMBAYARAN</>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
