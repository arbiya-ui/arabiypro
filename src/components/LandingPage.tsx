/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, Sparkles, MessageSquare, Trophy, ShieldCheck, Flame } from "lucide-react";

interface LandingPageProps {
  onEnterApp: () => void;
}

export default function LandingPage({ onEnterApp }: LandingPageProps) {
  return (
    <div id="landing-page" className="min-h-screen bg-premium-navy-dark text-white flex flex-col relative overflow-hidden font-sans bg-geometric-dark">
      
      {/* Background Decorative Gold Rings & Stars */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full border border-accent/10 pointer-events-none animate-pulse" />
      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] rounded-full border border-accent/5 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full border border-secondary/20 pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Floating Sparkles Decoration */}
      <div className="absolute top-1/4 left-10 text-accent/20 text-3xl animate-bounce pointer-events-none">✨</div>
      <div className="absolute top-1/3 right-12 text-secondary text-4xl animate-pulse pointer-events-none">🌙</div>
      <div className="absolute bottom-1/4 right-1/4 text-accent/20 text-2xl animate-bounce pointer-events-none">⭐</div>

      {/* HEADER NAVBAR */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10 border-b border-white/5 glass mt-4 rounded-3xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary border border-accent flex items-center justify-center text-xl font-bold text-accent shadow-[0_0_20px_rgba(201,168,76,0.3)] glass">
            ع
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-white via-accent to-accent bg-clip-text text-transparent">
              ArabiyPro
            </span>
            <span className="text-[10px] block text-white/40 tracking-widest font-black">EDUKASI PREMIUM</span>
          </div>
        </div>
        <button
          onClick={onEnterApp}
          className="px-5 py-2.5 rounded-xl border border-accent/40 text-accent hover:bg-accent hover:text-primary active:scale-95 transition-all font-black text-sm flex items-center gap-2 cursor-pointer glass"
        >
          Masuk Dashboard
        </button>
      </header>

      {/* HERO SECTION */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10 w-full">
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 backdrop-blur-md glass">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            Platform Belajar Bahasa Al-Qur'an #1 di Indonesia
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
            Belajar Bahasa <span className="text-accent drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]">Arab</span>, <br className="hidden sm:inline" />
            Dari Nol Sampai Mahir.
          </h1>

          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Kuasai ribuan kosakata, percakapan harian, hingga gramatika Al-Qur'an dengan cara yang paling elegan dan menyenangkan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button
              onClick={onEnterApp}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-accent text-primary font-black text-lg hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer border border-accent/50"
            >
              Mulai Belajar Gratis
              <Sparkles className="w-5 h-5" />
            </button>
            <a
              href="#fitur"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-lg hover:bg-white/10 active:scale-95 transition-all text-center glass"
            >
              Lihat Fitur
            </a>
          </div>

          {/* Micro Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto lg:mx-0 border-t border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-accent">4 Level</div>
              <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Kurikulum</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-accent">AI Chat</div>
              <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Tutor</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-accent">6 Game</div>
              <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Arena</div>
            </div>
          </div>
        </div>

        {/* Calligraphy Ornament Display Card */}
        <div className="flex-1 flex justify-center w-full max-w-md lg:max-w-none relative">
          <div className="relative w-full max-w-md p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden group glass">
            
            {/* Ambient gold glow back */}
            <div className="absolute -inset-10 bg-accent/10 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Traditional Geometric Pattern SVG decoration */}
            <div className="w-64 h-64 mb-6 flex items-center justify-center text-accent/5 absolute opacity-10 select-none pointer-events-none animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                <polygon points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35" />
                <polygon points="50,15 58,42 85,50 58,58 50,85 42,58 15,50 42,42" transform="rotate(45 50 50)" />
              </svg>
            </div>

            <div className="w-24 h-24 rounded-3xl bg-secondary flex items-center justify-center border-2 border-accent shadow-[0_0_30px_rgba(201,168,76,0.2)] mb-6 animate-float glass">
              <span className="text-5xl text-accent font-black">ب</span>
            </div>

            <div className="arabic-text text-5xl sm:text-6xl text-accent font-black tracking-widest my-4 filter drop-shadow-[0_0_15px_rgba(201,168,76,0.4)] select-none">
              أَهْلًا وَسَهْلًا
            </div>
            
            <p className="text-white/60 text-sm font-bold tracking-wider mt-4 uppercase">
              Selamat Datang di ArabiyPro
            </p>

            <div className="mt-10 p-4 bg-accent/10 border border-accent/20 rounded-2xl text-accent text-[10px] font-black uppercase tracking-widest flex items-center gap-2 max-w-xs justify-center glass">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              Sertifikasi Premium Level 1-4
            </div>
          </div>
        </div>
      </main>

      {/* FEATURES SECTION */}
      <section id="fitur" className="py-20 sm:py-32 bg-primary/40 relative border-t border-white/5 glass">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Fitur <span className="text-accent">Unggulan</span> Premium
            </h2>
            <p className="text-white/50 font-medium">
              Ecosystem pembelajaran lengkap yang dirancang khusus untuk mempercepat penguasaan Bahasa Arab Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-accent/40 transition-all flex flex-col justify-between group glass hover:bg-white/10">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform border border-accent/20 shadow-lg">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-white">Kurikulum 4 Level</h3>
                <p className="text-white/50 text-sm leading-relaxed font-medium">
                  Dirancang komprehensif dari Level Al-Mubtadi hingga Al-Mahir. Kuasai Nahwu & Shorof dengan peta jalan yang terstruktur.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-accent/40 transition-all flex flex-col justify-between group glass hover:bg-white/10">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform border border-accent/20 shadow-lg">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-white">AI Tutor Chat</h3>
                <p className="text-white/50 text-sm leading-relaxed font-medium">
                  Praktik bercakap langsung dengan AI. Dapatkan perbaikan tata bahasa real-time dan tingkatkan kemampuan berbicara Anda.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-accent/40 transition-all flex flex-col justify-between group glass hover:bg-white/10">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform border border-accent/20 shadow-lg">
                  <Flame className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-white">Mastery Arena</h3>
                <p className="text-white/50 text-sm leading-relaxed font-medium">
                  Asah kemampuan Anda dengan 6 game interaktif yang seru. Belajar tidak pernah semenyenangkan ini!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-primary/80 py-12 text-center text-[10px] text-white/20 border-t border-white/5 mt-auto glass">
        <p className="uppercase tracking-[0.3em] font-black">© 2026 ArabiyPro — Kuasai Bahasa Al-Qur'an</p>
        <p className="mt-2 text-white/10">Crafted with ❤️ and Modern Technology for Ummah</p>
      </footer>
    </div>
  );
}
