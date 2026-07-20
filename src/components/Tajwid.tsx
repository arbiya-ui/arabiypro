/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BookOpen, Volume2, ArrowLeft, Info, HelpCircle } from "lucide-react";

interface TajwidRule {
  title: string;
  desc: string;
  examples: {
    ar: string;
    trans: string;
    id: string;
    note?: string;
  }[];
}

const TAJWID_SECTIONS: { [key: string]: { title: string; icon: string; rules: TajwidRule[] } } = {
  nun_mati: {
    title: "Hukum Nun Mati & Tanwin",
    icon: "📗",
    rules: [
      {
        title: "Idzhar Halqi (إظهار حلقي)",
        desc: "Dibaca dengan jelas dan tegas tanpa mendengung (ghunnah) jika Nun Mati (نْ) atau Tanwin (ً ٍ ٌ) bertemu salah satu huruf halqi: Hamzah (أ), Ha (هـ), 'Ain (ع), Ha (ح), Ghain (غ), Kha (خ).",
        examples: [
          { ar: "مَنْ آمَنَ", trans: "Man aamana", id: "Barangsiapa yang beriman", note: "Pertemuan نْ dengan أ" },
          { ar: "عَذَابٌ أَلِيمٌ", trans: "'Adzaabun aliim", id: "Siksa yang pedih", note: "Pertemuan ٌ dengan أ" },
          { ar: "مِنْ حَكِيمٍ", trans: "Min hakiim", id: "Dari Yang Maha Bijaksana", note: "Pertemuan نْ dengan ح" }
        ]
      },
      {
        title: "Idgham Bighunnah (إدغام بغنة)",
        desc: "Meleburkan suara Nun Mati atau Tanwin disertai dengungan yang ditahan selama 2 harakat jika bertemu huruf: Ya (ي), Nun (ن), Mim (م), Wawu (و) [disingkat Yanmu].",
        examples: [
          { ar: "مَنْ يَقُولُ", trans: "May yaquulu", id: "Barangsiapa yang berkata", note: "Pertemuan نْ dengan ي" },
          { ar: "لَهَبٍ وَتَبَّ", trans: "Lahabiw watabba", id: "Gejolak api dan binasalah", note: "Pertemuan ٍ dengan و" },
          { ar: "مِنْ مَاءٍ", trans: "Mim maain", id: "Dari air", note: "Pertemuan نْ dengan م" }
        ]
      },
      {
        title: "Idgham Bilaghunnah (إدغام بغير غنة)",
        desc: "Meleburkan suara Nun Mati atau Tanwin tanpa disertai dengung langsung masuk ke huruf berikutnya jika bertemu: Lam (ل) dan Ra (ر).",
        examples: [
          { ar: "مِنْ رَبِّهِمْ", trans: "Mir rabbihim", id: "Dari Tuhan mereka", note: "Pertemuan نْ dengan ر" },
          { ar: "هُدًى لِلْمُتَّقِينَ", trans: "Hudal lilmuttaqiin", id: "Petunjuk bagi orang yang bertaqwa", note: "Pertemuan ً dengan ل" }
        ]
      },
      {
        title: "Iqlab (إقلاب)",
        desc: "Mengubah bunyi Nun Mati atau Tanwin menjadi bunyi Mim mati (مْ) disertai dengungan samar jika bertemu huruf Ba (ب).",
        examples: [
          { ar: "مِنْ بَعْدِ", trans: "Mim ba'di", id: "Setelah / Sesudah", note: "Pertemuan نْ dengan ب" },
          { ar: "سَمِيعٌ بَصِيرٌ", trans: "Sami'um bashiir", id: "Maha Mendengar lagi Maha Melihat", note: "Pertemuan ٌ dengan ب" }
        ]
      },
      {
        title: "Ikhfa Haqiqi (إخفاء حقيقي)",
        desc: "Menyamarkan suara Nun Mati atau Tanwin secara samar-samar di antara bunyi Idzhar dan Idgham, disertai dengung jika bertemu 15 huruf hijaiyah lainnya.",
        examples: [
          { ar: "مِنْ قَبْلِ", trans: "Min qabli", id: "Sebelumnya", note: "Pertemuan نْ dengan ق" },
          { ar: "صِرَاطًا مُسْتَقِيمًا", trans: "Shiraatham mustaqiima", id: "Jalan yang lurus", note: "Pertemuan ً dengan م (Idgham mimi), contoh ikhfa: أَنْفُسَهُمْ (Anfusahum)" },
          { ar: "كِتَابٌ كَرِيمٌ", trans: "Kitaabun kariim", id: "Kitab yang mulia", note: "Pertemuan ٌ dengan ك" }
        ]
      }
    ]
  },
  mim_mati: {
    title: "Hukum Mim Mati",
    icon: "📘",
    rules: [
      {
        title: "Ikhfa Syafawi (إخفاء شفوي)",
        desc: "Membaca Mim mati (مْ) secara samar di bibir disertai dengungan yang ditahan sekitar 2 harakat jika bertemu huruf Ba (ب).",
        examples: [
          { ar: "تَرْمِيهِمْ بِحِجَارَةٍ", trans: "Tarmiihim bihijaarah", id: "Melempari mereka dengan batu", note: "Pertemuan مْ dengan ب" },
          { ar: "أَمْ جَعَلُوا", trans: "Am ja'aluu", id: "Atau apakah mereka menjadikan", note: "Contoh Idzhar Syafawi" }
        ]
      },
      {
        title: "Idgham Mimi / Mutamatsilain (إدغام ميمي)",
        desc: "Memasukkan suara Mim mati (مْ) ke dalam huruf Mim berikutnya disertai dengungan ghunnah jika Mim mati bertemu Mim.",
        examples: [
          { ar: "لَهُمْ مَا يَشَاؤُونَ", trans: "Lahum maa yasyaa'uun", id: "Bagi mereka apa yang mereka inginkan", note: "Pertemuan مْ dengan م" },
          { ar: "فِي قُلُوبِهِمْ مَرَضٌ", trans: "Fii quluubihimm maradun", id: "Di dalam hati mereka ada penyakit", note: "Pertemuan مْ dengan م" }
        ]
      },
      {
        title: "Idzhar Syafawi (إظهار شفوي)",
        desc: "Membaca suara Mim mati (مْ) secara jelas, terang, tanpa dengung jika bertemu dengan seluruh huruf hijaiyah selain Mim (م) dan Ba (ب).",
        examples: [
          { ar: "أَنْعَمْتَ عَلَيْهِمْ", trans: "An'amta 'alaihim", id: "Kamu telah beri nikmat atas mereka", note: "Pertemuan مْ dengan ت dan ع" },
          { ar: "لَمْ يَلِدْ", trans: "Lam yalid", id: "Dia tidak melahirkan", note: "Pertemuan مْ dengan ي" }
        ]
      }
    ]
  },
  qalqalah: {
    title: "Hukum Qalqalah (Memantul)",
    icon: "🔊",
    rules: [
      {
        title: "Huruf Qalqalah (قُطْبُ جَدٍ)",
        desc: "Membaca memantul pada 5 huruf khusus ketika berharakat sukun asli atau dibaca sukun karena waqaf (berhenti). Huruf-hurufnya adalah: Qaf (ق), Tha (ط), Ba (ب), Jim (ج), Dal (Ref: قُطْبُ جَدٍ).",
        examples: [
          { ar: "ق ط ب ج د", trans: "Qaf, Tha, Ba, Jim, Dal", id: "Lima Huruf Qalqalah", note: "Disusun dalam frasa Qutbu Jadin" }
        ]
      },
      {
        title: "Qalqalah Sugra (صغرى - Kecil)",
        desc: "Pantulan suara yang tipis atau kecil karena huruf qalqalah berharakat sukun asli berada di tengah kata dan bukan tempat pemberhentian.",
        examples: [
          { ar: "يَجْعَلُونَ", trans: "Yaj'aluuna", id: "Mereka menjadikan", note: "Huruf Jim (ج) sukun di tengah kata" },
          { ar: "يَقْطَعُونَ", trans: "Yaqtha'uuna", id: "Mereka memutuskan", note: "Huruf Qaf (ق) sukun di tengah kata" }
        ]
      },
      {
        title: "Qalqalah Kubra (كبرى - Besar)",
        desc: "Pantulan suara yang tebal dan kuat karena huruf qalqalah berada di akhir kalimat yang dibaca sukun akibat waqaf (berhenti).",
        examples: [
          { ar: "الْفَلَقِ", trans: "Al-falaq", id: "Waktu subuh (ketika waqaf)", note: "Qaf (ق) di akhir dibaca mati" },
          { ar: "مِنْ مَسَدٍ", trans: "Min masad", id: "Dari sabut (ketika waqaf)", note: "Dal (د) di akhir dibaca mati" },
          { ar: "ذَاتِ الْبُرُوجِ", trans: "Dzatil-buruuj", id: "Yang mempunyai gugusan bintang", note: "Jim (ج) di akhir dibaca mati" }
        ]
      }
    ]
  },
  mad_asli: {
    title: "Hukum Mad (Pemanjangan Suara)",
    icon: "📖",
    rules: [
      {
        title: "Mad Thabi'i / Asli (مد طبيعي)",
        desc: "Membaca panjang sepanjang 2 harakat (ketukan) apabila: Alif (أ) didahului Fathah, Wawu mati (وْ) didahului Dhammah, atau Ya mati (يْ) didahului Kasrah.",
        examples: [
          { ar: "قَالَ", trans: "Qaala", id: "Dia telah berkata", note: "Alif didahului Fathah" },
          { ar: "يَقُولُ", trans: "Yaquulu", id: "Dia sedang berkata", note: "Wawu mati didahului Dhammah" },
          { ar: "قِيلَ", trans: "Qiila", id: "Telah dikatakan", note: "Ya mati didahului Kasrah" }
        ]
      }
    ]
  }
};

export default function Tajwid({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<string>("nun_mati");
  const [playingAr, setPlayingAr] = useState<string | null>(null);

  const speakArabic = (text: string) => {
    if ("speechSynthesis" in window) {
      // Cancel any ongoing speaking
      window.speechSynthesis.cancel();
      setPlayingAr(text);

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ar-SA";
      utterance.rate = 0.8; // slightly slower for educational clear speaking

      utterance.onend = () => {
        setPlayingAr(null);
      };

      utterance.onerror = () => {
        setPlayingAr(null);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      alert("Browser Anda tidak mendukung Web Speech API untuk pemutaran audio.");
    }
  };

  return (
    <div id="tajwid-view" className="space-y-6 pb-12 bg-app-background">
      
      {/* HEADER SECTION */}
      <div className="flex items-center justify-between border-b border-app-border pb-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="p-2 rounded-xl bg-app-surface border border-app-border text-app-text-muted hover:text-app-text-main transition-all shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-app-primary flex items-center gap-2">
              <span>🔊</span> Panduan Ilmu Tajwid Sederhana
            </h2>
            <p className="text-xs text-app-text-muted">Belajar membaca Al-Quran dengan baik, benar, dan tartil</p>
          </div>
        </div>
      </div>

      {/* TABS SELECTOR */}
      <div className="flex overflow-x-auto gap-2 p-1 bg-app-surface border border-app-border rounded-2xl shadow-sm no-scrollbar">
        {Object.entries(TAJWID_SECTIONS).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`
              px-4 py-2.5 rounded-xl text-xs font-black shrink-0 transition-all flex items-center gap-2 cursor-pointer
              ${activeTab === key 
                ? "bg-app-primary text-white shadow-md shadow-app-primary/10" 
                : "text-app-text-muted hover:text-app-text-main hover:bg-app-background"}
            `}
          >
            <span className="text-sm">{value.icon}</span>
            <span>{value.title}</span>
          </button>
        ))}
      </div>

      {/* EXPLANATION GRID */}
      <div className="space-y-6">
        <div className="p-4 rounded-2xl bg-app-primary border border-app-primary text-xs text-app-primary flex items-start gap-3 shadow-sm bg-app-surface">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-app-primary" />
          <div>
            <strong>Informasi Pendidikan:</strong> Klik tombol speaker <Volume2 className="inline w-3.5 h-3.5" /> di samping tulisan Arab untuk memperdengarkan lafadz/cara membaca contoh ayat secara langsung menggunakan teknologi Text-to-Speech Al-Mu'allim.
          </div>
        </div>

        {TAJWID_SECTIONS[activeTab].rules.map((rule, idx) => (
          <div 
            key={idx} 
            className="bg-app-surface rounded-3xl border border-app-accent/20 shadow-xl overflow-hidden relative group"
          >
            {/* Decorative Gold List (Lisl) */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-app-accent to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
            
            {/* Rule Header */}
            <div className="p-5 bg-app-background border-b border-app-border relative">
              <h3 className="font-extrabold text-base text-app-primary">
                {rule.title}
              </h3>
              <p className="text-xs text-app-text-muted mt-1.5 leading-relaxed">
                {rule.desc}
              </p>
            </div>

            {/* Rule Examples list */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rule.examples.map((ex, eIdx) => (
                <div 
                  key={eIdx}
                  className="p-4 bg-app-surface rounded-2xl border border-app-border hover:border-app-accent/35 transition-all flex flex-col justify-between group relative overflow-hidden shadow-sm"
                >
                  {ex.note && (
                    <span className="absolute top-2 right-2 text-[8px] bg-gray-100 px-2 py-0.5 rounded-full font-bold text-gray-400 uppercase tracking-wider">
                      {ex.note}
                    </span>
                  )}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold font-serif text-app-text-main leading-loose select-all tracking-wide drop-shadow-[0_2px_8px_rgba(201,168,76,0.2)]">
                        {ex.ar}
                      </span>
                      <button
                        onClick={() => speakArabic(ex.ar)}
                        className={`
                          p-2.5 rounded-xl border transition-all flex items-center justify-center shrink-0 cursor-pointer
                          ${playingAr === ex.ar 
                            ? "bg-app-accent border-app-accent text-emerald-950 animate-pulse" 
                            : "bg-app-surface border-app-accent/10 text-app-accent hover:bg-app-accent/10 hover:border-app-accent/40 hover:scale-105"}
                        `}
                        title="Dengarkan pengucapan tartil"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-mono font-bold text-app-accent">
                        {ex.trans}
                      </p>
                      <p className="text-[11px] text-app-text-muted leading-normal italic">
                        "{ex.id}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
