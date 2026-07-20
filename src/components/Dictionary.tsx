/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { 
  BookMarked, 
  Search, 
  Volume2, 
  HelpCircle,
  Filter,
  ArrowRight,
  Sparkles,
  Hash,
  ChevronLeft,
  ChevronRight,
  Square
} from "lucide-react";
import { DICTIONARY_DATA } from "../data/curriculum";
import { motion, AnimatePresence } from "motion/react";
import { speakArabic, isSpeaking, stopSpeech, getAudioSpeed } from "../lib/speech";

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentlySpeaking, setCurrentlySpeaking] = useState<string | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    const slider = scrollRef.current;
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const categories = [
    "Semua", 
    "Keluarga",
    "Kata Kerja",
    "Kata Sifat",
    "Benda harian", 
    "Tempat", 
    "Transportasi", 
    "Profesi", 
    "Makanan & Minuman", 
    "Alam", 
    "Waktu", 
    "Tubuh",
    "Pendidikan",
    "Teknologi",
    "Jamak Taksir"
  ];

  const filteredWords = DICTIONARY_DATA.filter((item) => {
    const matchesSearch = 
      item.ar.includes(searchTerm) || 
      item.trans.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "Semua" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const speakWord = (arText: string, id: string) => {
    if (currentlySpeaking === id) {
      stopSpeech();
      setCurrentlySpeaking(null);
      return;
    }
    setCurrentlySpeaking(id);
    speakArabic(arText, getAudioSpeed(), 'male', () => {
      setCurrentlySpeaking(null);
    });
  };

  return (
    <div id="dictionary-view" className="space-y-10 pb-20 bg-premium-navy-dark px-4 bg-geometric-dark">
      
      {/* PREMIUM HEADER SECTION */}
      <div className="relative overflow-hidden rounded-[3rem] bg-secondary p-10 border border-accent/20 shadow-2xl glass">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -ml-32 -mb-32" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 glass">
              <Sparkles size={14} className="text-accent" />
              <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Premium Lexicon</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Kamus Saku <span className="text-accent drop-shadow-[0_0_10px_rgba(201,168,76,0.3)]">ArabiyPro</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              Eksplorasi ribuan perbendaharaan kata (mufrodat) Arab terlengkap. Dilengkapi harakat presisi, transliterasi standar internasional, dan audio pelafalan jernih.
            </p>
          </div>
          
          <div className="hidden lg:block">
            <div className="w-32 h-32 rounded-[2.5rem] bg-accent flex items-center justify-center rotate-12 shadow-2xl shadow-accent/20 border-4 border-white/20 glass">
              <BookMarked size={48} className="text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* ADVANCED SEARCH & FILTER PANEL */}
      <div className="sticky top-4 z-40 bg-secondary/80 backdrop-blur-2xl p-6 rounded-[2.5rem] border border-accent/10 shadow-2xl space-y-6 glass">
        <div className="flex flex-col xl:flex-row gap-6">
          {/* SEARCH INPUT */}
          <div className="relative flex-1 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-accent/40 w-5 h-5 group-focus-within:text-accent transition-colors" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari mufrodat (Arab, Latin, atau Indonesia)..."
              className="w-full bg-white/5 border-2 border-white/5 rounded-[2rem] pl-16 pr-6 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-white/10 transition-all shadow-inner glass-dark"
            />
          </div>

          {/* QUICK CATEGORIES - SCROLLABLE CONTAINER */}
          <div className="flex items-center gap-3 flex-1 min-w-0 overflow-hidden relative group/nav">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 text-white/40 uppercase text-[9px] font-black tracking-widest border-r border-white/10 mr-2 flex-shrink-0">
              <Filter size={12} /> Kategori
            </div>
            
            {/* Scroll Buttons - Desktop Only */}
            <button 
              onClick={() => scroll("left")}
              className="absolute left-24 z-10 p-1.5 rounded-full bg-black/40 border border-white/10 text-white opacity-0 group-hover/nav:opacity-100 transition-opacity hidden lg:block hover:bg-accent hover:text-primary glass"
            >
              <ChevronLeft size={14} />
            </button>

            <div 
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              className="flex-1 overflow-x-auto pb-2 no-scrollbar scroll-smooth snap-x touch-pan-x cursor-grab active:cursor-grabbing select-none"
            >
              <div className="flex gap-2 min-w-max pr-10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`
                      px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer border-2 snap-start glass
                      ${selectedCategory === cat 
                        ? "bg-accent border-accent text-primary shadow-lg shadow-accent/20" 
                        : "bg-white/5 border-white/5 text-white/40 hover:border-accent/30 hover:text-white"
                      }
                    `}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => scroll("right")}
              className="absolute right-2 z-10 p-1.5 rounded-full bg-black/40 border border-white/10 text-white opacity-0 group-hover/nav:opacity-100 transition-opacity hidden lg:block hover:bg-accent hover:text-primary glass"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* DICTIONARY RESULTS STATS */}
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Hash size={14} className="text-accent" />
          <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.25em]">
            Database: {filteredWords.length} Mufrodat Terverifikasi
          </span>
        </div>
        <div className="h-px flex-1 bg-white/5 mx-6" />
      </div>

      {/* DICTIONARY GRID - UPDATED TO 3 COLUMNS ON MOBILE */}
      <AnimatePresence mode="popLayout">
        {filteredWords.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 relative z-10"
          >
            {filteredWords.map((item, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.02 }}
                key={`${item.ar}-${item.id}`}
                className="group relative p-3 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-secondary border border-accent/10 flex flex-col justify-between hover:border-accent/60 hover:bg-secondary transition-all duration-300 shadow-xl hover:shadow-accent/5 glass"
              >
                {/* Decorative Gold List (Lisl) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                
                <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/20 rounded-2xl sm:rounded-[2rem] transition-all pointer-events-none" />
                <div className="space-y-2 sm:space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[6px] sm:text-[8px] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-black uppercase tracking-widest truncate max-w-[50%] glass">
                      {item.category}
                    </span>
                    <button
                      onClick={() => speakWord(item.ar, `dict-${idx}`)}
                      className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl border flex items-center justify-center transition-all cursor-pointer glass ${
                        currentlySpeaking === `dict-${idx}`
                          ? 'bg-ruby text-white border-ruby/50'
                          : 'bg-white/5 border-white/10 text-white/40 hover:bg-accent hover:text-primary hover:border-accent'
                      }`}
                    >
                      {currentlySpeaking === `dict-${idx}` ? (
                        <div className="flex items-center gap-0.5 h-2 sm:h-3">
                          <div className="w-0.5 bg-white animate-[bounce_0.6s_infinite_0ms]" style={{ height: '60%' }} />
                          <div className="w-0.5 bg-white animate-[bounce_0.6s_infinite_200ms]" style={{ height: '100%' }} />
                          <div className="w-0.5 bg-white animate-[bounce_0.6s_infinite_400ms]" style={{ height: '80%' }} />
                        </div>
                      ) : (
                        <Volume2 size={12} className="sm:w-[16px] sm:h-[16px]" />
                      )}
                    </button>
                  </div>
                  
                  <div className="space-y-0.5 sm:space-y-1">
                    <h4 className="arabic text-xl sm:text-3xl text-white font-black group-hover:text-accent transition-colors leading-tight">
                      {item.ar}
                    </h4>
                    <p className="text-[7px] sm:text-[9px] text-white/40 font-mono tracking-widest uppercase truncate">{item.trans}</p>
                  </div>
 
                  <div className="pt-2 sm:pt-4 border-t border-white/5">
                    <p className="text-[7px] sm:text-[9px] text-white/20 font-black uppercase tracking-widest mb-0.5">Arti</p>
                    <p className="text-[10px] sm:text-sm text-white font-bold tracking-tight line-clamp-1">{item.id}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 bg-secondary border border-accent/20 rounded-[3rem] space-y-6 shadow-2xl relative overflow-hidden glass"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.05),transparent)] animate-pulse" />
            <HelpCircle className="w-20 h-20 text-accent/20 mx-auto" />
            <div className="space-y-2 relative z-10">
              <h4 className="text-2xl font-black text-white">Mufrodat Nihil</h4>
              <p className="text-sm text-white/40 max-w-sm mx-auto font-medium">
                Maaf, kata kunci yang Anda cari tidak tersedia dalam database kami. Gunakan istilah lain atau reset kategori pencarian.
              </p>
            </div>
            <button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Semua");
              }}
              className="px-8 py-4 bg-accent text-primary rounded-2xl font-black text-xs uppercase tracking-widest cursor-pointer relative z-10 border border-accent/50 shadow-lg shadow-accent/20"
            >
              Reset Pencarian
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
