/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import ReactMarkdown from "react-markdown";
import {
  ArrowLeft,
  BookOpen,
  Volume2,
  Sparkles,
  Award,
  CheckCircle,
  XCircle,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  RefreshCw,
  Clock,
  ShieldAlert,
  BookOpenCheck,
  Languages,
  MessageSquare,
  Mic,
  Star,
  ArrowRight,
  Download,
  Trophy,
  Play,
  Pause,
  SkipForward,
} from "lucide-react";
import { Lesson, UserProfile, QuizQuestion, LessonCardItem } from "../types";
import { speakArabic, stopSpeech, getAudioSpeed, setAudioSpeed } from "../lib/speech";
import UserAvatar, { UstadzAhmadAvatar, UstadzahFatimahAvatar } from "./UserAvatar";

const hasArabicText = (text: string) => /[\u0600-\u06FF]/.test(text);

const LATIN_TRANSLATION_MAP: Record<string, string> = {
  "dzalika - hadzihi": "Itu - Ini",
  "tilka - hadza": "Itu - Ini",
  "dzalika - hadza": "Itu - Ini",
  "tilka - hadzihi": "Itu - Ini",
  "dzalika haqiibatun": "Itu tas",
  "tilka haqiibatun": "Itu tas",
  "hadza haqiibatun": "Ini tas",
  "hadzihi haqiibatun": "Ini tas",
  "dzalika darraajatun": "Itu sepeda",
  "tilka darraajatun": "Itu sepeda",
  "hadza darraajatun": "Ini sepeda",
  "hadzihi darraajatun": "Ini sepeda",
  "hadza saa'atun": "Ini jam",
  "hadzihi saa'atun": "Ini jam",
  "dzalika saa'atun": "Itu jam",
  "tilka saa'atun": "Itu jam",
  "hadza naafidzatun": "Ini jendela",
  "hadzihi baabun": "Ini pintu",
  "hadzihi ghurfatun": "Ini kamar",
  "hadza thaawilatun": "Ini meja",
  "hadza miftaahun jadiidun": "Ini kunci baru",
  "hadzihi miftaahun jadiidatun": "Ini kunci baru",
  "hadza miftaahun jadiidatun": "Ini kunci baru",
  "hadzihi miftaahun jadiidun": "Ini kunci baru",
  "dzalika sayyaaratun jamiilun": "Itu mobil indah",
  "tilka sayyaaratun jamiilatun": "Itu mobil indah",
  "dzalika sayyaaratun jamiilatun": "Itu mobil indah",
  "tilka sayyaaratun jamiilun": "Itu mobil indah",
  "hadza ustaadzatii": "Ini guruku",
  "hadzihi ustaadzatii": "Ini guruku",
  "dzalika ustaadzatii": "Itu guruku",
  "tilka ustaadzatii": "Itu guruku",
  "hadza jaddii": "Ini kakekku",
  "dzalika jaddatii": "Itu nenekku",
  "jaddatii fil bayti": "Nenekku di rumah",
  "ummii fil madrasati": "Ibuku di sekolah",
  "akhuuka": "Saudaramu (lk)",
  "akhuuki": "Saudaramu (pr)",
  "ukhtuka": "Saudara perempuanmu (lk)",
  "ukhtuki": "Saudara perempuanmu (pr)",
  "akhii": "Saudaraku",
  "ukhtii": "Saudara perempuanku",
  "abii": "Ayahku",
  "ummii": "Ibuku",
  "jaddatii": "Nenekku",
  "jaddii": "Kakekku",
  "miftaahun": "Kunci",
  "sayyaaratun": "Mobil",
  "ustaadzun": "Guru",
  "qalamun": "Pena",
  "kitaabun": "Buku",
  "baytun": "Rumah",
  "masjidun": "Masjid",
  "madrasatun": "Sekolah",
  "naafidzatun": "Jendela",
  "ghurfatun": "Kamar",
  "thaawilatun": "Meja makan",
  "baabun": "Pintu",
  "sabbuuratun": "Papan tulis",
  "darraajatun": "Sepeda",
  "saa'atun": "Jam",
  "dzalika": "Itu",
  "tilka": "Itu",
  "hadza": "Ini",
  "hadzihi": "Ini"
};

function replaceLatinWithTranslation(text: string): string {
  if (!text || typeof text !== 'string') return text;
  
  return text.replace(/\(([^)]+)\)/g, (match, inner) => {
    const trimmed = inner.trim();
    const lowerTrimmed = trimmed.toLowerCase();
    
    // Check exact map
    if (LATIN_TRANSLATION_MAP[lowerTrimmed]) {
      return `(${LATIN_TRANSLATION_MAP[lowerTrimmed]})`;
    }
    
    // Handle split by hyphens or spaces
    if (trimmed.includes(" - ")) {
      const parts = trimmed.split(" - ");
      const translatedParts = parts.map(p => {
        const lp = p.trim().toLowerCase();
        return LATIN_TRANSLATION_MAP[lp] || p.trim();
      });
      return `(${translatedParts.join(" - ")})`;
    }
    
    // Fallback word-by-word replacement
    const words = trimmed.split(/\s+/);
    let hasMatch = false;
    const translatedWords = words.map(word => {
      const cleanWord = word.toLowerCase().replace(/[^a-z']/g, "");
      if (LATIN_TRANSLATION_MAP[cleanWord]) {
        hasMatch = true;
        return LATIN_TRANSLATION_MAP[cleanWord];
      }
      return word;
    });
    
    if (hasMatch) {
      const result = translatedWords.join(" ");
      return `(${result.charAt(0).toUpperCase() + result.slice(1)})`;
    }
    
    return match;
  });
}

function splitOptionText(opt: string) {
  if (!opt) return { arabic: "", translation: "" };
  
  // Check if there are parentheses at the end
  const match = opt.match(/^(.*?)\(([^)]+)\)\s*$/);
  if (match) {
    const arabic = match[1].trim();
    const translation = match[2].trim();
    return { arabic, translation };
  }
  
  // If no parentheses, is it entirely non-Arabic?
  if (!hasArabicText(opt)) {
    return { arabic: "", translation: opt };
  }
  
  // Entirely Arabic or mixed without parentheses
  return { arabic: opt, translation: "" };
}

interface LessonViewProps {
  lesson: Lesson;
  userProfile: UserProfile;
  onBack: () => void;
  onCompleteLesson: (
    lessonId: string,
    xpGained: number,
    coinsGained: number,
    correctRatio: number,
  ) => void;
}

interface ChapterStats {
  attemptsToday: number;
  lastAttemptTime: string;
  failures: number;
  needReviewAll: boolean;
  needReviewWeak: boolean;
  weakTopics: string[];
}

function expandQuiz(
  lessonId: string,
  cards: LessonCardItem[],
  quiz: QuizQuestion[],
): QuizQuestion[] {
  let targetCount = 30;
  const isLevel1 = lessonId.startsWith("l1_");
  const isLevel2 = lessonId.startsWith("l2_");
  const isLevel3 = lessonId.startsWith("l3_");
  const isLevel4 = lessonId.startsWith("l4_");
  const isExam = lessonId.endsWith("_9");

  if (isExam) {
    return quiz;
  }

  if (isLevel1) {
    targetCount = isExam ? 100 : 30;
  } else if (isLevel2) {
    targetCount = isExam ? 120 : 40;
  } else if (isLevel3) {
    targetCount = isExam ? 150 : 50;
  } else if (isLevel4) {
    targetCount = isExam ? 200 : 60;
  }

  // Seed list with existing handcrafted quiz questions
  let expanded: QuizQuestion[] = [...quiz];

  // Generate matching questions from cards
  if (cards && cards.length > 0) {
    cards.forEach((card, idx) => {
      // 1. Meaning matching
      const meaningOptions = [card.translation];
      while (meaningOptions.length < 4) {
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        if (!meaningOptions.includes(randomCard.translation)) {
          meaningOptions.push(randomCard.translation);
        } else {
          const alternatives = [
            "Buku",
            "Pena",
            "Rumah",
            "Masjid",
            "Sekolah",
            "Roti",
            "Matahari",
            "Bulan",
            "Air",
            "Pelajar",
          ];
          const alt =
            alternatives[Math.floor(Math.random() * alternatives.length)];
          if (!meaningOptions.includes(alt)) meaningOptions.push(alt);
        }
      }
      meaningOptions.sort(() => Math.random() - 0.5);

      expanded.push({
        id: `gen_meaning_${lessonId}_${idx}`,
        question: `Apa arti dari kata '${card.wordAr}'?`,
        options: meaningOptions,
        correctAnswer: card.translation,
        explanation: `'${card.wordAr}' berarti '${card.translation}'.`,
        type: "multiple-choice",
      });

      // 2. Word matching
      const wordOptions = [card.wordAr];
      while (wordOptions.length < 4) {
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        if (!wordOptions.includes(randomCard.wordAr)) {
          wordOptions.push(randomCard.wordAr);
        } else {
          const alternativesAr = [
            "بَيْتٌ",
            "قَلَمٌ",
            "أُسْتَاذٌ",
            "كِتَابٌ",
            "مَاءٌ",
            "مَسْجِدٌ",
            "مَدْرَسَةٌ",
            "خُبْزٌ",
            "سَمَاءٌ",
            "طَالِبٌ",
          ];
          const altAr =
            alternativesAr[Math.floor(Math.random() * alternativesAr.length)];
          if (!wordOptions.includes(altAr)) wordOptions.push(altAr);
        }
      }
      wordOptions.sort(() => Math.random() - 0.5);

      expanded.push({
        id: `gen_word_${lessonId}_${idx}`,
        question: `Manakah kata Arab yang berarti '${card.translation}'?`,
        options: wordOptions,
        correctAnswer: card.wordAr,
        explanation: `'${card.translation}' dalam bahasa Arab ditulis '${card.wordAr}'.`,
        type: "multiple-choice",
      });
    });
  }

  // Clone and vary until exact target
  let safetyLoop = 0;
  while (expanded.length < targetCount && safetyLoop < 1000) {
    safetyLoop++;
    const baseQ =
      quiz[Math.floor(Math.random() * quiz.length)] ||
      expanded[Math.floor(Math.random() * expanded.length)];
    if (baseQ) {
      expanded.push({
        ...baseQ,
        id: `${baseQ.id}_dup_${expanded.length}`,
      });
    } else {
      expanded.push({
        id: `fallback_${lessonId}_${expanded.length}`,
        question:
          "Apakah bahasa Arab adalah salah satu bahasa tertua di dunia?",
        options: [
          "Ya, benar",
          "Tidak",
          "Hanya digunakan di satu kota",
          "Ragu-ragu",
        ],
        correctAnswer: "Ya, benar",
        explanation:
          "Bahasa Arab merupakan salah satu rumpun bahasa Semit tertua yang masih aktif digunakan.",
        type: "multiple-choice",
      });
    }
  }

  return expanded.slice(0, targetCount);
}

// Komponen WordCard statis sesuai instruksi user
const WordCard = ({ 
  word, 
  index,
  gender = "male",
  speed = 1.0
}: { 
  word: any; 
  index: number;
  gender?: "male" | "female";
  speed?: number;
}) => {
  const [playing, setPlaying] = useState(false);
  const [playingExampleIndex, setPlayingExampleIndex] = useState<number | null>(null);

  const playAudio = async (text: string) => {
    if (!text) return;
    setPlaying(true);
    try {
      await speakArabic(text, speed, gender);
    } catch (e) {
      console.error(e);
    } finally {
      setPlaying(false);
    }
  };

  const playExampleAudio = async (text: string, idx: number) => {
    if (!text) return;
    setPlayingExampleIndex(idx);
    try {
      await speakArabic(text, speed, gender);
    } catch (e) {
      console.error(e);
    } finally {
      setPlayingExampleIndex(null);
    }
  };

  const arabic = word?.arabic || word?.arab || word?.wordAr || '';
  const translit = word?.transliteration || word?.trans || '';
  const meaning = word?.meaning || word?.translation || '';
  const examples = word?.examples || (word?.exampleAr ? [{
    ar: word.exampleAr,
    trans: word.exampleTrans,
    translation: word.exampleTranslation,
    grammarNote: word.exampleAnalysis || "Menganalisis struktur kalimat dasar."
  }] : []);

  return (
    <div className="w-full bg-secondary/80 backdrop-blur-md rounded-[2.5rem] border-2 border-accent shadow-[0_20px_50px_rgba(201,168,76,0.2)] overflow-hidden mb-6 relative glass">
      {/* Decorative Golden Islamic Corner Arcs */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/15 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />

      {/* Premium Emerald-Gold Header with Mentor */}
      <div className="bg-secondary p-8 md:p-12 flex flex-col items-center text-center relative overflow-hidden border-b-2 border-accent glass">
        <div className="absolute top-4 left-4 opacity-10 font-mono text-xs text-accent">
          KODE: KST-{index + 1}
        </div>

        {/* Dynamic Mentor Avatar Bubble based on Voice Gender */}
        <div className="flex items-center gap-3 bg-primary/60 border border-accent/30 px-4 py-2 rounded-2xl mb-6 shadow-md glass">
          <div className="w-8 h-8 rounded-xl overflow-hidden shrink-0 bg-secondary">
            {gender === "female" ? (
              <UstadzahFatimahAvatar className="w-full h-full" />
            ) : (
              <UstadzAhmadAvatar className="w-full h-full" />
            )}
          </div>
          <span className="text-[10px] font-black text-accent uppercase tracking-widest font-mono">
            {gender === "female" ? "USTADZAH FATIMAH" : "USTADZ AHMAD"}
          </span>
        </div>

        <h2 
          className="arabic text-5xl sm:text-7xl text-accent font-black leading-[1.6] select-all drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]" 
          dir="rtl"
          style={{ fontFamily: "'Amiri', serif" }}
        >
          {arabic}
        </h2>

        {translit && (
          <span className="text-xs sm:text-sm font-semibold text-white/80 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mt-4 tracking-widest uppercase font-mono glass-dark">
            {translit}
          </span>
        )}

        <h3 className="text-xl sm:text-3xl font-black text-white mt-4 tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
          "{meaning}"
        </h3>

        {word?.description && (
          <p className="text-[10px] sm:text-xs text-white/60 mt-3 max-w-[80%] leading-relaxed font-medium italic">
            {word.description}
          </p>
        )}

        {/* Big Pulse Audio Play Button */}
        <div className="mt-8 flex flex-col items-center">
          <button 
            onClick={() => playAudio(arabic)}
            className={`w-14 h-14 rounded-full bg-accent hover:brightness-110 active:scale-95 transition-all shadow-lg hover:shadow-accent/40 cursor-pointer flex items-center justify-center border border-accent/50 relative group`}
            aria-label="Putar Suara Mufrodat"
          >
            <Volume2 className={`w-6 h-6 text-primary ${playing ? 'animate-pulse' : ''}`} />
            {playing && (
              <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
            )}
          </button>
          <span className="text-[9px] font-black text-accent tracking-[0.15em] uppercase mt-2 block">DENGARKAN LAFAL</span>
        </div>

        {/* Animated Sound Waveform (Modern Visual Accent) */}
        {playing && (
          <div className="flex justify-center items-end gap-1.5 h-6 mt-6">
            {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((h, i) => (
              <motion.div
                key={i}
                className="w-1 bg-accent rounded-full"
                animate={{ height: ["15%", "100%", "15%"] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.06 }}
                style={{ height: `${h * 15}%` }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Examples Section */}
      <div className="p-6 md:p-10 space-y-6 bg-secondary text-white glass-dark">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-accent rounded-full shadow-[0_0_8px_rgba(201,168,76,0.6)]" />
          <h4 className="font-black text-accent text-xs uppercase tracking-[0.25em] text-left">
            Contoh Penggunaan (Tathbiq)
          </h4>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {examples.length > 0 ? (
            examples.slice(0, 10).map((ex: any, i: number) => {
              const isExPlaying = playingExampleIndex === i;
              return (
                <div 
                  key={i} 
                  className="group flex gap-4 bg-primary/40 hover:bg-primary/60 p-4 md:p-6 rounded-3xl border border-accent/10 hover:border-accent/40 transition-all duration-300 items-start shadow-sm glass"
                >
                  <span className="w-7 h-7 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center font-black text-accent text-xs pt-0.5 shrink-0 glass">
                    {i + 1}
                  </span>
                  
                  <div className="flex-1 min-w-0 text-left">
                    <p 
                      className="arabic text-2xl sm:text-3xl text-right text-accent font-bold leading-normal mb-2" 
                      dir="rtl"
                      style={{ fontFamily: "'Amiri', serif" }}
                    >
                      {ex.ar || ex.arabic}
                    </p>
                    {ex.trans && (
                      <p className="text-[10px] sm:text-xs text-white/40 font-mono tracking-wider italic mb-1 text-left uppercase">
                        {ex.trans}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-white font-bold mb-2 text-left leading-tight">
                      "{ex.translation || ex.meaning}"
                    </p>
                      <p className="text-[9px] sm:text-[10px] text-white/60 font-semibold bg-white/5 px-2.5 py-1 rounded-xl border border-white/5 inline-block text-left glass-dark">
                        💡 Logika: <ArabicStyledText text={ex.grammarNote || ex.analysis || ex.logicExplanation || "Menganalisis struktur kalimat dasar."} />
                      </p>
                  </div>

                  <button 
                    onClick={() => playExampleAudio(ex.ar || ex.arabic, i)}
                    className={`text-accent hover:text-primary p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-accent hover:border-accent transition-all shrink-0 mt-1 relative flex items-center justify-center glass`}
                    aria-label="Putar Suara Contoh"
                  >
                    <Volume2 size={16} className={isExPlaying ? "animate-pulse" : ""} />
                    {isExPlaying && (
                      <span className="absolute inset-0 rounded-xl bg-accent/25 animate-ping" />
                    )}
                  </button>
                </div>
              );
            })
          ) : (
            <div className="text-center py-6 text-xs text-white/40 italic font-bold">
              Tidak ada contoh tambahan untuk kosakata ini.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Kontainer Mufrodat dengan navigasi sesuai instruksi user
const MufrodatSection = ({ lesson, onComplete }: { lesson: any; onComplete: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gender, setGender] = useState<"male" | "female">(() => {
    return (localStorage.getItem("arabiyPro_voice_gender") as "male" | "female") || "male";
  });
  const [speed, setSpeed] = useState<number>(() => {
    return getAudioSpeed();
  });

  const words = lesson?.content?.cards || lesson?.cards || [];

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const changeGender = (g: "male" | "female") => {
    setGender(g);
    localStorage.setItem("arabiyPro_voice_gender", g);
  };

  const changeSpeed = (s: number) => {
    setSpeed(s);
    setAudioSpeed(s);
  };

  if (words.length === 0) return <div className="text-center py-20 font-black text-emerald-900">Data kosakata tidak ditemukan.</div>;

  const progress = ((currentIndex + 1) / words.length) * 100;

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 md:py-8 pb-32">
      
      {/* Premium Settings Bar for Voice and Speed Controls */}
      <div className="bg-secondary/90 border-2 border-accent rounded-2xl p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-white shadow-lg relative overflow-hidden glass">
        {/* Tutor Selection Group */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="text-[10px] font-black text-accent tracking-wider uppercase font-mono">TUTOR AI:</span>
          <div className="flex gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10 w-full sm:w-auto glass">
            <button 
              onClick={() => changeGender("male")}
              className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${gender === "male" ? "bg-accent text-primary font-extrabold shadow" : "hover:text-accent text-white/80"}`}
            >
              🧔 <span className="text-[10px]">UST. AHMAD</span>
            </button>
            <button 
              onClick={() => changeGender("female")}
              className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${gender === "female" ? "bg-accent text-primary font-extrabold shadow" : "hover:text-accent text-white/80"}`}
            >
              👩‍🦱 <span className="text-[10px]">USTZ. FATIMAH</span>
            </button>
          </div>
        </div>

        {/* Speed Controls Group */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-[10px] font-black text-accent tracking-wider uppercase font-mono">TEMPO SUARA:</span>
          <div className="flex gap-1 bg-black/40 p-1 rounded-xl border border-white/10 glass">
            {[0.5, 0.75, 1.0, 1.25].map((s) => (
              <button
                key={s}
                onClick={() => changeSpeed(s)}
                className={`px-2 py-1 rounded text-[10px] font-mono font-black cursor-pointer transition-all ${speed === s ? "bg-accent text-primary" : "hover:text-accent text-white/70"}`}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Header */}
      <div className="flex justify-between items-center mb-4 text-left">
        <div className="text-left">
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter">Mufrodat (Kosakata)</h3>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Hafalkan mufrodat & pelajari contoh penggunaannya</p>
        </div>
        <div className="bg-secondary border border-accent/50 px-4 py-1.5 rounded-2xl text-white shadow font-mono glass">
           <span className="text-accent font-black text-base">{currentIndex + 1}</span>
           <span className="text-white/20 font-black text-xs mx-1">/</span>
           <span className="text-white/60 font-black text-xs">{words.length}</span>
        </div>
      </div>

      <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden shadow-inner border border-white/5 mb-8 glass">
        <motion.div 
          className="h-full bg-accent shadow-[0_0_15px_rgba(201,168,76,0.6)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x;
            if (swipe < -100) {
              handleNext();
            } else if (swipe > 100) {
              handlePrev();
            }
          }}
          className="cursor-grab active:cursor-grabbing"
        >
          <WordCard word={words[currentIndex]} index={currentIndex} gender={gender} speed={speed} />
        </motion.div>
      </AnimatePresence>

      {/* Helper text */}
      <p className="text-center text-[10px] text-white/30 font-semibold mb-6 uppercase tracking-widest">
        💡 Tips: Geser (swipe) kartu ke kiri/kanan atau gunakan tombol navigasi di bawah ini.
      </p>

      {/* Navigasi Bawah Tetap */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-xl border-t-2 border-accent/20 p-4 z-40 flex justify-center glass">
        <div className="max-w-4xl w-full flex gap-3">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex-1 py-3.5 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 border-2 glass
              ${currentIndex === 0 
                ? 'bg-white/5 border-white/5 text-white/20 cursor-not-allowed' 
                : 'bg-secondary/40 hover:bg-secondary/80 border-accent/30 text-accent hover:text-white shadow-sm'}`}
          >
            <ChevronLeft size={16} /> Sebelumnya
          </button>
          <button
            onClick={handleNext}
            className="flex-[2] py-3.5 bg-accent text-primary hover:brightness-110 border-2 border-accent/50 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer"
          >
            {currentIndex === words.length - 1 ? 'Selesai & Lanjut' : 'Berikutnya'} <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ArabicStyledText = ({ text }: { text: any }) => {
  if (!text) return null;
  if (typeof text !== 'string') {
    return null;
  }
  // Regex to match Arabic words including harakat and common punctuation
  const parts = text.split(/([\u0600-\u06FF\u064B-\u065F\u0670-\u06D3\u06D5-\u06FF]+)/g);
  
  return (
    <>
      {parts.map((part, i) => {
        if (/[\u0600-\u06FF]/.test(part)) {
          return (
            <span 
              key={i} 
              className="font-arabic text-accent text-lg sm:text-2xl md:text-4xl px-1 font-bold inline-block" 
              style={{ fontFamily: "'Amiri', serif", direction: 'rtl' }}
            >
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
};

export default function LessonView({
  lesson,
  userProfile,
  onBack,
  onCompleteLesson,
}: LessonViewProps) {
  if (!lesson || !lesson.content) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-8 text-center bg-geometric-dark">
        <div className="w-20 h-20 bg-ruby/10 rounded-3xl border border-ruby/30 flex items-center justify-center mb-6">
          <ShieldAlert className="w-10 h-10 text-ruby" />
        </div>
        <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2">Data Tidak Lengkap</h3>
        <p className="text-sm text-white/60 mb-8 max-w-xs">Maaf, terjadi kesalahan saat memuat materi pelajaran ini. Struktur data tidak ditemukan.</p>
        <button 
          onClick={onBack}
          className="px-6 py-3 bg-secondary border border-accent/30 text-accent rounded-xl font-bold uppercase tracking-widest text-xs flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali
        </button>
      </div>
    );
  }

  const [phase, setPhase] = useState<
    | "intro"
    | "grammar"
    | "dialog"
    | "cards"
    | "quiz"
    | "summary"
    | "failed"
    | "reviewMode"
    | "deep_grammar"
    | "reading"
    | "deep_dialog"
  >("intro");
  
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState<QuizQuestion[]>([]);
  const [speed, setSpeed] = useState(getAudioSpeed());
  const scrollRef = useRef<HTMLDivElement>(null);

  // Dynamic question pool upscaler
  const quizQuestions = useMemo(() => {
    const cards = lesson.content?.cards || [];
    const quiz = lesson.content?.quiz || [];
    const rawQuestions = expandQuiz(lesson.id, cards, quiz);
    return rawQuestions.map(q => {
      return {
        ...q,
        options: (q.options || []).map(opt => replaceLatinWithTranslation(opt)),
        correctAnswer: replaceLatinWithTranslation(q.correctAnswer || ""),
        explanation: q.explanation ? replaceLatinWithTranslation(q.explanation) : q.explanation
      };
    });
  }, [lesson.id, lesson.content]);

  const progress = useMemo(() => {
    const phases = ["intro", "cards", "grammar", "reading", "dialog", "quiz", "summary"];
    const idx = phases.indexOf(phase);
    return ((idx + 1) / phases.length) * 100;
  }, [phase]);

  const handleNextPhase = () => {
    const hasCards = (lesson.content?.cards?.length > 0) || ((lesson as any).cards?.length > 0);

    if (phase === "intro") {
      if (hasCards) {
        setPhase("cards");
      } else if (lesson.content?.grammarSection || lesson.content?.grammar) {
        setPhase("grammar");
      } else if (lesson.content?.readingSection || lesson.content?.reading) {
        setPhase("reading");
      } else if (lesson.content?.dialogueSection || lesson.content?.dialog) {
        setPhase("dialog");
      } else {
        setPhase("quiz");
      }
    } else if (phase === "cards") {
      if (lesson.content?.grammarSection || lesson.content?.grammar) setPhase("grammar");
      else if (lesson.content?.readingSection || lesson.content?.reading) setPhase("reading");
      else if (lesson.content?.dialogueSection || lesson.content?.dialog) setPhase("dialog");
      else setPhase("quiz");
    } else if (phase === "grammar") {
      if (lesson.content?.readingSection || lesson.content?.reading) setPhase("reading");
      else if (lesson.content?.dialogueSection || lesson.content?.dialog) setPhase("dialog");
      else setPhase("quiz");
    } else if (phase === "reading") {
      if (lesson.content?.dialogueSection || lesson.content?.dialog) setPhase("dialog");
      else setPhase("quiz");
    } else if (phase === "dialog") setPhase("quiz");
    
    if (scrollRef.current) scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckAnswer = () => {
    if (isAnswered || !selectedAnswer) return;
    setIsAnswered(true);
    const currentQuestion = quizQuestions[currentQuizIndex];
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    if (correct) {
      setQuizScore(prev => prev + (currentQuestion.points ?? 1));
    } else {
      setWrongQuestions(prev => [...prev, currentQuestion]);
    }
  };

  const handleNextQuiz = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    if (currentQuizIndex < quizQuestions.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
    } else {
      const totalPoints = quizQuestions.reduce((acc, q) => acc + (q.points ?? 1), 0);
      const accuracy = (quizScore / totalPoints) * 100;
      if (accuracy >= 75) setPhase("summary");
      else setPhase("failed");
    }
    if (scrollRef.current) scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetToRetry = () => {
    setPhase("intro");
    setCurrentQuizIndex(0);
    setQuizScore(0);
    setWrongQuestions([]);
    setIsAnswered(false);
    setSelectedAnswer(null);
  };

  const handleCompleteAndSave = () => {
    const totalPoints = quizQuestions.reduce((acc, q) => acc + (q.points ?? 1), 0);
    const accuracyRatio = Math.round((quizScore / totalPoints) * 100);
    
    // For comprehensive exams, we might want to give more XP or special badges
    const xpBonus = lesson.type === "comprehensive" ? lesson.xpReward : lesson.xpReward;
    
    onCompleteLesson(lesson.id, xpBonus, 25, accuracyRatio);
    onBack();
  };

  const isExam = lesson.id.endsWith("_9") || lesson.type === "comprehensive";
  const totalPoints = quizQuestions.reduce((acc, q) => acc + (q.points ?? 1), 0);
  const isPassed = (quizScore / totalPoints) * 100 >= (isExam ? 75 : 70);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary p-0 md:p-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full h-full max-w-6xl bg-premium-navy-dark md:rounded-[3rem] shadow-2xl flex flex-col relative overflow-hidden bg-geometric-dark"
      >
        {/* Progress Bar & Header */}
        <div className="absolute top-0 left-0 w-full z-20">
          <div className="h-1.5 md:h-2 bg-white/5 w-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-accent shadow-[0_0_15px_rgba(201,168,76,0.5)]"
            />
          </div>
          <div className="flex justify-between items-center py-3 md:py-5 px-4 md:px-10 bg-secondary/80 backdrop-blur-md border-b border-white/5 glass">
            <div className="flex items-center gap-3 md:gap-5">
              <button
                onClick={onBack}
                className="p-2 md:p-3 hover:bg-white/5 rounded-2xl transition-all group glass"
              >
                <ChevronLeft className="text-white group-hover:-translate-x-1 transition-transform" />
              </button>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-left">
                <h2 className="text-sm md:text-lg font-black text-white uppercase tracking-tight leading-none mb-1 truncate max-w-[150px] md:max-w-none">
                  {lesson.title}
                </h2>
                <p className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-widest">
                  Level {lesson.level || (lesson.id.startsWith("l1_") ? 1 : 2)} • Bab {lesson.bab || lesson.id.split("_")[1]}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden sm:flex flex-col items-end mr-4 text-right">
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Mastery Level</span>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className={`w-3 h-1 rounded-full ${s <= 3 ? 'bg-accent' : 'bg-white/10'}`} />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 md:px-5 py-1.5 md:py-2.5 rounded-2xl border border-white/10 glass">
                <Trophy size={14} className="text-accent" />
                <span className="font-black text-white text-xs md:text-sm">
                  {quizScore} XP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto mt-[60px] md:mt-[85px] px-4 md:px-12 py-6 md:py-12 custom-scrollbar"
        >
          <AnimatePresence mode="wait">
            {phase === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-4xl mx-auto space-y-6 md:space-y-10"
              >
                {/* Hero Section */}
                <div className="text-center space-y-4 md:space-y-6 pt-6 md:pt-8">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block bg-accent/15 backdrop-blur-sm text-accent text-[10px] md:text-xs font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] mb-2 shadow-[0_0_20px_rgba(201,168,76,0.3)] border-2 border-accent/60 glass"
                  >
                    Bismillah • Pelajaran Dimulai
                  </motion.span>
                  
                  <div className="space-y-3 md:space-y-5">
                    <h1 className="text-3xl md:text-6xl font-black text-white leading-[1.6] md:leading-[1.4] arabic drop-shadow-md" dir="rtl">
                      {lesson.titleAr || "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"}
                    </h1>
                    <h2 className="text-lg md:text-3xl font-black text-white/90 tracking-tight max-w-2xl mx-auto px-4">
                      {lesson.title}
                    </h2>
                  </div>
                </div>

                {/* Ayat Al-Quran Pembuka (introVerse) */}
                {lesson.content.introVerse && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-secondary/40 border-y-2 border-accent/50 py-6 md:py-8 px-6 text-center space-y-3 md:space-y-4 rounded-2xl md:rounded-3xl shadow-sm glass"
                  >
                    <p className="arabic text-2xl md:text-4xl text-white font-bold leading-[1.8]" dir="rtl">
                      {lesson.content.introVerse.ar}
                    </p>
                    <p className="text-[11px] md:text-base text-white/60 font-semibold italic border-t border-accent/20 pt-3 md:pt-4 max-w-lg mx-auto">
                      "{lesson.content.introVerse.translation}"
                    </p>
                  </motion.div>
                )}

                {/* Main Content Section */}
                {(lesson.content?.introduction || lesson.content?.intro) && (
                  <div className="space-y-4 md:space-y-6">
                    <div className="bg-secondary/60 rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-10 border-2 border-accent/40 shadow-2xl shadow-primary/40 relative overflow-hidden group glass">
                      {/* Decorative Gold Corner */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />
                      
                      {/* Decoration */}
                      <div className="absolute top-0 right-0 p-8 md:p-10 opacity-[0.03] group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000">
                         <BookOpen size={180} className="text-white" />
                      </div>
                      
                      <div className="space-y-4 md:space-y-5 relative z-10 text-left">
                        <div className="flex items-center gap-3 md:gap-4 mb-1 md:mb-3">
                          <div className="w-1.5 md:w-2 h-8 md:h-10 bg-accent rounded-full shadow-[0_0_10px_rgba(201,168,76,0.4)] border-r-2 border-accent/20" />
                          <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">
                            {lesson.content.introTitle || "Muqodimah"}
                          </h3>
                        </div>
                        
                        <div className="prose prose-invert max-w-none">
                          <p className="text-sm md:text-lg text-white/80 leading-relaxed font-medium whitespace-pre-line text-justify md:text-left tracking-tight md:tracking-normal">
                            <ArabicStyledText text={lesson.content.introduction || lesson.content.intro} />
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tips & Tricks Section */}
                    {lesson.content.tips && lesson.content.tips.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {lesson.content.tips.map((tip: any, i: number) => (
                          <div key={i} className="bg-accent/5 border border-accent/20 rounded-2xl p-5 relative overflow-hidden group hover:bg-accent/10 transition-all glass">
                            <div className="absolute -top-2 -right-2 opacity-10 group-hover:scale-110 transition-transform">
                              <Sparkles size={40} className="text-accent" />
                            </div>
                            <h4 className="text-accent text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                              <HelpCircle size={12} /> {tip.title}
                            </h4>
                            <p className="text-white/70 text-xs font-bold leading-relaxed text-left">
                              {tip.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                      <div className="bg-secondary/60 p-3 md:p-6 rounded-xl md:rounded-[1.5rem] border-2 border-accent/30 shadow-lg flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left group/card hover:border-accent/80 transition-all glass">
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-white/5 rounded-lg md:rounded-xl flex items-center justify-center text-accent shrink-0 border border-transparent group-hover/card:border-accent/50 transition-all glass-dark">
                          <BookOpenCheck size={18} className="md:w-6 md:h-6" />
                        </div>
                        <div className="text-left">
                          <p className="text-[7px] md:text-[9px] font-black text-accent uppercase tracking-widest">Kosakata</p>
                          <p className="text-xs md:text-xl font-black text-white">{lesson.content.cards?.length || 0} Kata</p>
                        </div>
                      </div>
                      <div className="bg-secondary/60 p-3 md:p-6 rounded-xl md:rounded-[1.5rem] border-2 border-accent/30 shadow-lg flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left group/card hover:border-accent/80 transition-all glass">
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center text-accent shrink-0 border border-transparent group-hover/card:border-accent/50 transition-all glass-dark">
                          <Trophy size={18} className="md:w-6 md:h-6" />
                        </div>
                        <div className="text-left">
                          <p className="text-[7px] md:text-[9px] font-black text-accent uppercase tracking-widest">Hadiah XP</p>
                          <p className="text-xs md:text-xl font-black text-white">{lesson.xpReward} XP</p>
                        </div>
                      </div>
                      <div className="bg-secondary/60 p-3 md:p-6 rounded-xl md:rounded-[1.5rem] border-2 border-accent/30 shadow-lg flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left col-span-2 md:col-span-1 group/card hover:border-accent/80 transition-all glass">
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-accent rounded-lg md:rounded-xl flex items-center justify-center text-primary shrink-0 border border-accent/50 transition-all">
                          <Star size={18} className="md:w-6 md:h-6" />
                        </div>
                        <div className="text-left">
                          <p className="text-[7px] md:text-[9px] font-black text-accent uppercase tracking-widest">Target Skor</p>
                          <p className="text-xs md:text-xl font-black text-white">75% Lulus</p>
                        </div>
                      </div>
                    </div>

                    {/* Learning Goals */}
                    <div className="bg-secondary rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden border-2 border-accent/40 glass">
                       <div className="absolute top-0 right-0 p-8 opacity-20">
                         <Sparkles size={120} className="text-accent" />
                       </div>
                       <h3 className="text-lg md:text-xl font-black mb-4 md:mb-6 uppercase tracking-widest flex items-center gap-3 md:gap-4 text-left text-white">
                         <div className="w-1.5 h-5 md:h-7 bg-accent rounded-full shadow-[0_0_15px_rgba(201,168,76,0.8)]" />
                         Target Pembelajaran
                       </h3>
                       <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 text-left">
                         {(lesson.content.introBadges || []).map((badge: any, i: number) => (
                           <li key={i} className="flex items-start gap-3 md:gap-4 group">
                             <div className="w-7 h-7 md:w-9 md:h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all shadow-md glass-dark">
                               <span className="text-sm md:text-lg">{badge.icon || '🎯'}</span>
                             </div>
                             <p className="text-[11px] md:text-sm font-bold leading-tight pt-1 md:pt-1.5 text-white/70 group-hover:text-white transition-colors">
                               {badge.text}
                             </p>
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>
                )}

                <div className="flex justify-center pt-2 md:pt-4 pb-6">
                  <button
                    onClick={handleNextPhase}
                    className="group relative w-full md:w-auto px-10 md:px-16 py-3 md:py-5 bg-accent text-primary font-black rounded-lg md:rounded-[2rem] shadow-xl shadow-accent/20 hover:brightness-110 transition-all flex items-center justify-center gap-3 md:gap-4 overflow-hidden transform hover:scale-105 active:scale-95 cursor-pointer border border-accent/50"
                  >
                    <span className="relative z-10 text-sm md:text-lg uppercase tracking-[0.2em]">Mulai Belajar</span>
                    <ArrowRight className="relative z-10 group-hover:translate-x-3 transition-transform w-4 h-4 md:w-6 md:h-6" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* 2. CARDS / MUFRODAT */}
            {(phase === "cards") && (
              <MufrodatSection lesson={lesson} onComplete={handleNextPhase} />
            )}

            {/* 3. GRAMMAR */}
            {(phase === "grammar") && (lesson.content?.grammarSection || lesson.content?.grammar) && (
              <div className="max-w-4xl mx-auto space-y-10">
                {(() => {
                  const grammar = lesson.content.grammarSection || lesson.content.grammar;
                  return (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-secondary p-4 sm:p-8 md:p-16 rounded-2xl md:rounded-[3.5rem] border-2 border-accent shadow-[0_20px_60px_rgba(26,26,46,0.5),0_0_30px_rgba(201,168,76,0.15)] space-y-6 md:space-y-12 relative overflow-hidden glass"
                    >
                      <div className="text-center space-y-2 md:space-y-4">
                        <span className="premium-badge-gold text-[10px] md:text-[11px] font-black px-4 md:px-6 py-1.5 md:py-2.5 rounded-full uppercase tracking-[0.2em] inline-block border border-accent/30 shadow-sm glass">
                          Nahwu & Shorof • Tata Bahasa
                        </span>
                        <h2 className="text-2xl md:text-5xl font-black text-white tracking-tighter drop-shadow-md">
                          <ArabicStyledText text={grammar.title || "Analisis Tata Bahasa"} />
                        </h2>
                      </div>
                      
                      <div className="bg-primary/40 p-4 sm:p-8 md:p-12 rounded-xl md:rounded-[2.5rem] border border-accent/30 shadow-inner glass-dark">
                        {grammar.note ? (
                          <p className="text-sm md:text-2xl text-white font-medium leading-relaxed italic border-l-4 border-accent pl-4 md:pl-6">
                            <ArabicStyledText text={grammar.note} />
                          </p>
                        ) : (
                          <p className="text-sm md:text-2xl text-white font-medium leading-relaxed whitespace-pre-line text-justify md:text-left">
                            <ArabicStyledText text={grammar.explanation || grammar.logic} />
                          </p>
                        )}
                      </div>

                      {grammar.content && (
                        <div className="prose prose-invert max-w-none bg-primary/20 p-6 md:p-12 rounded-3xl border-2 border-white/5 shadow-sm glass">
                          <div className="flex items-center gap-3 mb-6">
                            <Sparkles className="text-accent w-5 h-5 md:w-8 md:h-8" />
                            <h3 className="text-lg md:text-2xl font-black text-white uppercase tracking-tight">Analogi Pendalaman</h3>
                          </div>
                          <div className="markdown-body text-sm md:text-xl text-white/80 leading-relaxed font-medium">
                            <ReactMarkdown>{grammar.content}</ReactMarkdown>
                          </div>
                        </div>
                      )}

                      {/* TASHRIF TABLES */}
                      {["tashrif", "tashrif_mudhari"].map((key) => {
                        const tashrifData = grammar[key];
                        if (!tashrifData) return null;

                        return (
                          <div key={key} className="space-y-4 md:space-y-8">
                            <div className="flex items-center gap-2 md:gap-4">
                              <div className="w-1.5 md:w-2 h-6 md:h-8 bg-accent rounded-full shadow-[0_0_10px_rgba(201,168,76,0.6)]" />
                              <h4 className="font-black text-white uppercase tracking-widest text-xs md:text-lg">
                                <ArabicStyledText text={tashrifData.title} />
                              </h4>
                            </div>
                            <div className="grid grid-cols-1 gap-2 md:gap-3">
                              {tashrifData.rows.map((row: any, idx: number) => (
                                <div key={idx} className="bg-primary/40 rounded-xl md:rounded-2xl border border-accent/20 p-3 md:p-6 flex items-center justify-between gap-2 md:gap-6 hover:bg-primary/60 transition-all shadow-sm glass">
                                  <div className="flex flex-col items-center justify-center min-w-[60px] md:min-w-[100px] border-r border-white/10 pr-2 md:pr-4">
                                    <span className="text-lg md:text-2xl font-arabic text-white" style={{ fontFamily: "'Amiri', serif" }}>{row.dhamir}</span>
                                    <span className="text-[10px] md:text-xs text-white/50 font-medium text-center uppercase tracking-tighter">{row.dhaminMeaning}</span>
                                  </div>
                                  
                                  <div className="flex-1 flex items-center justify-center gap-4 md:gap-12 px-2 md:px-8">
                                    <div className="flex flex-col items-center">
                                      <span className="text-2xl md:text-4xl font-arabic text-[#D4AF37] font-bold" style={{ fontFamily: "'Amiri', serif" }} dir="rtl">
                                        {row.fiil}
                                      </span>
                                    </div>
                                    
                                    <div className="flex flex-col items-center bg-black/20 px-2 md:px-4 py-1 rounded-lg border border-red-500/20">
                                      <span className="text-red-500 font-bold text-xs md:text-lg">{row.akhiran || row.awalanCiri}</span>
                                      <span className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest">Ciri</span>
                                    </div>
                                  </div>

                                  <div className="hidden sm:flex flex-col items-end border-l border-white/10 pl-4 md:pl-8 min-w-[120px] md:min-w-[200px]">
                                    <span className="text-sm md:text-xl font-arabic text-[#0B3D2E]" style={{ fontFamily: "'Amiri', serif" }} dir="rtl">
                                      {row.contoh}
                                    </span>
                                    <span className="text-[8px] md:text-[10px] text-white/30 uppercase tracking-[0.2em]">Contoh Penggunaan</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                      
                      {grammar.examples && grammar.examples.length > 0 && (
                        <div className="space-y-4 md:space-y-8">
                          <div className="flex items-center gap-2 md:gap-4">
                            <div className="w-1.5 md:w-2 h-6 md:h-8 bg-accent rounded-full shadow-[0_0_10px_rgba(201,168,76,0.6)]" />
                            <h4 className="font-black text-white uppercase tracking-widest text-xs md:text-base">Contoh Analisis Mendalam</h4>
                          </div>
                          <div className="grid grid-cols-1 gap-4 md:gap-6">
                            {grammar.examples.map((ex: any, idx: number) => (
                              <div key={idx} className="p-4 md:p-8 bg-primary/40 rounded-2xl md:rounded-[2.5rem] border border-accent/20 border-l-4 border-l-accent flex flex-col-reverse md:flex-row justify-between items-stretch md:items-center gap-4 md:gap-8 group hover:bg-primary/60 hover:border-accent/60 transition-all shadow-sm glass">
                                <div className="flex-1 text-right">
                                  <p className="arabic text-2xl sm:text-4xl text-accent font-bold mb-4 md:mb-6" dir="rtl" style={{ fontFamily: "'Amiri', serif" }}>{ex.ar || ex.arabic || ex.wordAr}</p>
                                  <div className="text-left bg-secondary/80 p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/5 shadow-sm glass">
                                    <p className="text-base sm:text-2xl font-black text-white mb-2 leading-tight tracking-tight">"{ex.translation || ex.meaning}"</p>
                                    <div className="h-px bg-white/10 w-full my-3 md:my-4" />
                                    <p className="text-xs md:text-base text-white/60 italic leading-relaxed">
                                      <span className="font-black not-italic mr-2 text-accent uppercase tracking-widest text-[10px]">LOGIKA:</span>
                                      <ArabicStyledText text={ex.grammarNote || ex.analysis || "Menerapkan kaidah tata bahasa Arab untuk membentuk struktur kalimat yang sempurna."} />
                                    </p>
                                  </div>
                                </div>
                                <button 
                                  onClick={() => speakArabic(ex.ar || ex.arabic, speed)}
                                  className="self-end md:self-auto p-3 md:p-6 bg-secondary border border-accent/30 rounded-xl md:rounded-[2rem] text-accent shadow-sm hover:bg-accent hover:text-primary md:group-hover:scale-110 transition-all transform active:scale-95 shadow-md flex items-center justify-center glass"
                                >
                                  <Volume2 className="w-5 h-5 md:w-7 md:h-7" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {grammar.deepGrammar && (
                        <div className="bg-primary/40 p-6 md:p-12 rounded-2xl md:rounded-[3.5rem] border-2 border-accent/30 mt-12 glass-dark">
                          <div className="text-center mb-8 md:mb-12">
                            <span className="premium-badge-gold text-[9px] md:text-[10px] font-black px-4 md:px-6 py-1.5 md:py-2.5 rounded-full uppercase tracking-[0.2em] inline-block border border-accent/30 shadow-sm glass">
                              Shorof Al-Mutaqaddim • Pendalaman
                            </span>
                            <h3 className="text-xl md:text-4xl font-black text-white mt-4 tracking-tighter">
                              <ArabicStyledText text={grammar.deepGrammar.title || "Kaidah Penting"} />
                            </h3>
                          </div>
                          
                          {grammar.deepGrammar.note && (
                            <div className="bg-accent/10 p-4 md:p-8 rounded-xl md:rounded-[2rem] border border-accent/20 mb-8 md:mb-12 glass">
                              <p className="text-sm md:text-xl text-white font-medium italic leading-relaxed text-center">
                                <ArabicStyledText text={grammar.deepGrammar.note} />
                              </p>
                            </div>
                          )}

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {grammar.deepGrammar.points?.map((point: any, idx: number) => (
                              <div key={idx} className="bg-secondary/60 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-accent/30 transition-all glass">
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:scale-110 transition-transform">
                                  <Sparkles className="w-12 h-12 md:w-20 md:h-20 text-white" />
                                </div>
                                <h4 className="text-accent font-black text-xs md:text-base uppercase tracking-widest mb-4 flex items-center gap-2">
                                  <div className="w-1 h-4 bg-accent rounded-full" />
                                  <ArabicStyledText text={point.title} />
                                </h4>
                                <p className="text-white/70 text-sm md:text-lg font-bold leading-relaxed mb-6">
                                  <ArabicStyledText text={point.content} />
                                </p>
                                {point.example && (
                                  <div className="bg-black/40 rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/5 text-center shadow-inner glass-dark">
                                    <p className="arabic text-3xl md:text-6xl text-accent font-black" dir="rtl" style={{ fontFamily: "'Amiri', serif" }}>
                                      {point.example}
                                    </p>
                                    <span className="text-[8px] md:text-[10px] text-white/30 uppercase tracking-[0.2em] mt-4 block font-black">Contoh Kalimat</span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {grammar.commonMistakes && grammar.commonMistakes.length > 0 && (
                        <div className="space-y-4 md:space-y-8 mt-12">
                          <div className="flex items-center gap-2 md:gap-4">
                            <div className="w-1.5 md:w-2 h-6 md:h-8 bg-ruby rounded-full shadow-[0_0_10px_rgba(233,69,96,0.6)]" />
                            <h4 className="font-black text-white uppercase tracking-widest text-xs md:text-base">Waspadai Kesalahan Umum</h4>
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            {grammar.commonMistakes.map((mistake: any, idx: number) => (
                              <div key={idx} className="bg-primary/40 rounded-2xl md:rounded-[2.5rem] border border-ruby/20 p-6 md:p-10 glass overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                  <ShieldAlert className="w-12 h-12 md:w-20 md:h-20 text-ruby" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-6 md:mb-10">
                                  <div className="space-y-2">
                                    <span className="text-[10px] font-black text-ruby uppercase tracking-[0.2em] mb-2 block">❌ SALAH</span>
                                    <p className="arabic text-2xl md:text-4xl text-white/40 line-through opacity-50" dir="rtl" style={{ fontFamily: "'Amiri', serif" }}>{mistake.wrong}</p>
                                  </div>
                                  <div className="space-y-2">
                                    <span className="text-[10px] font-black text-green-500 uppercase tracking-[0.2em] mb-2 block">✅ BENAR</span>
                                    <p className="arabic text-2xl md:text-5xl text-accent font-bold" dir="rtl" style={{ fontFamily: "'Amiri', serif" }}>{mistake.correct}</p>
                                  </div>
                                </div>
                                <div className="h-px bg-white/10 w-full mb-4 md:mb-6" />
                                <p className="text-xs md:text-lg text-white/60 font-medium italic">
                                  <span className="text-accent font-black not-italic mr-2">PENJELASAN:</span>
                                  <ArabicStyledText text={mistake.explanation} />
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {(grammar.comparisonWithIndonesian || grammar.editorialBox) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                          {grammar.comparisonWithIndonesian && (
                            <div className="bg-accent/5 rounded-2xl md:rounded-[2.5rem] border border-accent/20 p-6 md:p-10 glass">
                              <h5 className="text-accent font-black text-[10px] md:text-xs uppercase tracking-[0.25em] mb-4">Perbandingan Bahasa</h5>
                              <p className="text-sm md:text-lg text-white/80 leading-relaxed font-medium italic">
                                <ArabicStyledText text={grammar.comparisonWithIndonesian} />
                              </p>
                            </div>
                          )}
                          {grammar.editorialBox && (
                            <div className="bg-primary/60 rounded-2xl md:rounded-[2.5rem] border border-white/10 p-6 md:p-10 glass">
                              <h5 className="text-white font-black text-[10px] md:text-xs uppercase tracking-[0.25em] mb-4 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-accent" /> {grammar.editorialBox.title || "Tips Belajar"}
                              </h5>
                              <p className="text-sm md:text-lg text-white/60 leading-relaxed">
                                <ArabicStyledText text={grammar.editorialBox.content} />
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {grammar.rules && grammar.rules.length > 0 && (
                        <div className="bg-primary/20 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-white/5 mt-12 glass-dark">
                          <h5 className="text-accent font-black text-[10px] md:text-xs uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent" /> Kaidah Utama
                          </h5>
                          <ul className="space-y-6">
                            {grammar.rules.map((rule: any, i: number) => (
                              <li key={i} className="flex items-start gap-4 text-white/80 text-sm md:text-lg italic font-medium leading-relaxed">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_5px_#C9A84C]" />
                                <div className="flex-1">
                                  {rule.title && (
                                    <p className="font-black text-accent not-italic uppercase tracking-wider text-[10px] md:text-xs mb-1">
                                      <ArabicStyledText text={rule.title} />
                                    </p>
                                  )}
                                  <p>
                                    <ArabicStyledText text={typeof rule === 'string' ? rule : rule.content} />
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="pt-6 md:pt-12 flex justify-center border-t border-white/5">
                        <button 
                          onClick={handleNextPhase}
                          className="w-full md:w-auto px-8 md:px-16 py-3.5 md:py-6 bg-accent border-2 border-accent/50 text-primary font-black rounded-xl md:rounded-[2.5rem] shadow-2xl hover:brightness-110 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 md:gap-4 transform active:scale-95 shadow-accent/20 cursor-pointer"
                        >
                          <span className="text-sm md:text-lg uppercase tracking-widest">Lanjut Materi Berikutnya</span> <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })()}
              </div>
            )}
            
            {/* 4. READING */}
            {phase === "reading" && (lesson.content?.readingSection || lesson.content?.reading) && (
              <div className="max-w-4xl mx-auto space-y-10">
                {(() => {
                  const reading = lesson.content.readingSection || lesson.content.reading;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-secondary p-4 sm:p-8 md:p-16 rounded-2xl md:rounded-[3.5rem] border-2 border-accent shadow-[0_20px_60px_rgba(26,26,46,0.5),0_0_30px_rgba(201,168,76,0.15)] space-y-6 md:space-y-12 relative overflow-hidden glass"
                    >
                      <div className="text-center space-y-2 md:space-y-4">
                        <span className="premium-badge-gold text-[10px] md:text-[11px] font-black px-4 md:px-6 py-1.5 md:py-2.5 rounded-full uppercase tracking-[0.2em] inline-block border border-accent/30 shadow-sm glass">
                          Qira'ah • Latihan Membaca
                        </span>
                        <h2 className="text-2xl md:text-5xl font-black text-white tracking-tighter drop-shadow-md">
                          <ArabicStyledText text={reading.title || "Analisis Kalimat Utuh"} />
                        </h2>
                      </div>
 
                      <div className="space-y-6 md:space-y-10">
                        {(reading.sentences || reading.paragraphs).map((sent: any, idx: number) => (
                          <div key={idx} className="p-4 sm:p-8 md:p-12 border border-accent/20 border-l-4 border-l-accent rounded-2xl md:rounded-[3rem] bg-primary/40 group hover:bg-primary/60 hover:border-accent/60 transition-all relative shadow-sm glass">
                             <div className="flex flex-col-reverse md:flex-row justify-between items-stretch md:items-start gap-4 md:gap-10">
                               <div className="flex-1 text-right">
                                   <p className="arabic text-2xl sm:text-4xl md:text-6xl text-white font-bold mb-4 md:mb-10 leading-[1.8]" dir="rtl" style={{ fontFamily: "'Amiri', serif" }}>
                                     {sent.ar || sent.arabic || sent.wordAr}
                                   </p>
                                 <div className="text-left bg-secondary/80 p-4 sm:p-8 rounded-xl md:rounded-[2rem] border border-white/5 shadow-sm relative overflow-hidden glass">
                                   <div className="absolute top-0 left-0 w-1 md:w-2 h-full bg-accent" />
                                   <p className="text-lg sm:text-2xl md:text-3xl font-black text-white mb-3 md:mb-6 leading-tight tracking-tight">"{sent.translation || sent.meaning}"</p>
                                   <div className="h-px bg-white/10 w-full mb-3 md:mb-6" />
                                   <div className="flex items-start gap-2 md:gap-4">
                                     <div className="w-1.5 md:w-2 h-5 md:h-7 bg-accent rounded-full shrink-0 mt-1 shadow-[0_0_8px_rgba(201,168,76,0.4)]" />
                                      <p className="text-xs sm:text-base md:text-lg text-white/60 leading-relaxed italic">
                                       <span className="font-black not-italic mr-3 uppercase text-[9px] md:text-[10px] tracking-widest text-accent block mb-1">Logika Kalimat</span>
                                       <ArabicStyledText text={sent.grammarNote || sent.analysis || sent.logicExplanation || "Struktur kalimat ini menggabungkan Isim Isyarah dengan Khabar yang selaras."} />
                                     </p>
                                   </div>
                                 </div>
                               </div>
                               <button 
                                 onClick={() => speakArabic(sent.ar || sent.arabic, speed)}
                                 className="self-end md:self-auto p-3 md:p-6 bg-secondary border border-accent/30 rounded-xl md:rounded-[2rem] text-accent shadow-sm hover:bg-accent hover:text-primary md:group-hover:scale-110 transition-all transform active:scale-95 shadow-md flex items-center justify-center glass"
                               >
                                 <Volume2 className="w-5 h-5 md:w-8 md:h-8" />
                                </button>
                              </div>
                            </div>
                        ))}
                      </div>
 
                      <div className="pt-6 md:pt-12 flex justify-center border-t border-white/5">
                        <button 
                          onClick={handleNextPhase}
                          className="w-full md:w-auto px-8 md:px-16 py-3.5 md:py-6 bg-accent border-2 border-accent/50 text-primary font-black rounded-xl md:rounded-[2.5rem] shadow-2xl hover:brightness-110 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 md:gap-4 transform active:scale-95 shadow-accent/20 cursor-pointer"
                        >
                          <span className="text-sm md:text-lg uppercase tracking-widest">Lanjut ke Percakapan</span> <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })()}
              </div>
            )}

            {/* 5. DIALOG */}
            {(phase === "dialog") && (lesson.content?.dialogueSection || lesson.content?.dialog) && (
              <div className="max-w-4xl mx-auto space-y-10">
                {(() => {
                  const dialog = lesson.content.dialogueSection || lesson.content.dialog;
                  // Handle different line key variants
                  const lines = Array.isArray(dialog) ? dialog : (dialog.lines || dialog.dialog || dialog.content || []);
                  const uniqueSpeakers = Array.from(new Set(lines.map((l: any) => l.speaker)));
                  const speakerA = uniqueSpeakers[0] || 'A';
                  return (
                    <motion.div
                      key="dialog"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-secondary p-4 sm:p-8 md:p-16 rounded-2xl md:rounded-[3.5rem] border-2 border-accent shadow-[0_20px_60px_rgba(26,26,46,0.5),0_0_30px_rgba(201,168,76,0.15)] space-y-6 md:space-y-12 relative overflow-hidden glass"
                    >
                      <div className="text-center space-y-2 md:space-y-4">
                        <span className="premium-badge-gold text-[10px] md:text-[11px] font-black px-4 md:px-6 py-1.5 md:py-2.5 rounded-full uppercase tracking-[0.2em] inline-block border border-accent/30 shadow-sm glass">
                          Hiwar • Dialog Percakapan
                        </span>
                        <h2 className="text-2xl md:text-5xl font-black text-white tracking-tighter drop-shadow-md">
                          <ArabicStyledText text={dialog.title || "Latihan Percakapan Aktif"} />
                        </h2>
                      </div>
 
                      <div className="space-y-8 md:space-y-12 relative py-4 md:py-10">
                        <div className="absolute left-[1.5rem] md:left-[3rem] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent -z-0" />
                        
                        {lines.map((line: any, idx: number) => {
                          const isSpeakerA = line.speaker === speakerA;
                          const initialChar = line.speaker ? line.speaker.charAt(0).toUpperCase() : 'A';
                          // Handle different text key variants
                          const arabicText = line.textAr || line.ar || line.arabic;
                          const idText = line.textId || line.translation || line.meaning;
                          
                          return (
                            <div key={idx} className={`flex ${isSpeakerA ? 'justify-start' : 'justify-end'} relative z-10`}>
                              <div className={`max-w-[92%] sm:max-w-[88%] md:max-w-[80%] p-5 sm:p-7 md:p-10 rounded-2xl md:rounded-[3rem] shadow-2xl flex flex-col gap-4 md:gap-7 relative group border-2 glass
                                ${isSpeakerA 
                                  ? 'bg-primary/70 text-white rounded-bl-none shadow-primary/50 border-accent/60' 
                                  : 'bg-primary/40 text-white rounded-br-none border-white/10 shadow-lg'}`}
                              >
                                <div className="flex justify-between items-center gap-4 md:gap-8">
                                  <div className="flex items-center gap-3 md:gap-4">
                                    <div className={`w-9 h-9 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center font-black text-sm md:text-xl shadow-lg glass ${isSpeakerA ? 'bg-accent text-primary' : 'bg-secondary text-accent border border-accent/30'}`}>
                                      {initialChar}
                                    </div>
                                    <div className="flex flex-col">
                                      <span className={`text-[9px] md:text-[11px] font-black uppercase tracking-[0.25em] ${isSpeakerA ? 'text-accent' : 'text-white/40'}`}>
                                        {isSpeakerA ? 'Pembicara' : 'Lawan Bicara'}
                                      </span>
                                      <span className={`text-xs md:text-lg font-bold tracking-tight ${isSpeakerA ? 'text-white' : 'text-white/80'}`}>
                                        {line.speaker}
                                      </span>
                                    </div>
                                  </div>
                                  <button 
                                    onClick={() => speakArabic(arabicText, speed)}
                                    className={`p-2.5 md:p-4 rounded-xl md:rounded-2xl transition-all transform hover:scale-110 active:scale-95 shadow-md glass ${isSpeakerA ? 'bg-white/10 hover:bg-white/20' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}
                                  >
                                    <Volume2 className="w-4 h-4 md:w-6 md:h-6 text-accent" />
                                  </button>
                                </div>
                                <div className="relative">
                                  <p className="arabic text-2xl sm:text-4xl md:text-6xl text-right font-bold leading-[1.8] text-accent drop-shadow-md select-all" dir="rtl" style={{ fontFamily: "'Amiri', serif" }}>
                                    {arabicText}
                                  </p>
                                </div>
                                <div className={`h-px w-full opacity-20 ${isSpeakerA ? 'bg-white' : 'bg-white/40'}`} />
                                <p className={`text-sm sm:text-base md:text-2xl font-medium leading-relaxed ${isSpeakerA ? 'text-white italic' : 'text-white/70'}`}>
                                  "{idText}"
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
 
                      <div className="pt-6 md:pt-12 flex justify-center border-t border-white/5">
                        <button 
                          onClick={handleNextPhase}
                          className="w-full md:w-auto px-8 md:px-16 py-3.5 md:py-6 bg-accent border-2 border-accent/50 text-primary font-black rounded-xl md:rounded-[2.5rem] shadow-2xl hover:brightness-110 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 md:gap-4 transform active:scale-95 shadow-accent/20 cursor-pointer"
                        >
                          <span className="text-sm md:text-lg uppercase tracking-widest">Siap untuk Ujian Akhir?</span> <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })()}
              </div>
            )}

            {/* 6. QUIZ */}
            {phase === "quiz" && (
              <div className="max-w-4xl mx-auto px-4 py-6 md:py-10">
                <div className="bg-secondary border-2 border-accent text-white rounded-3xl md:rounded-[4rem] p-6 sm:p-12 md:p-16 shadow-[0_20px_60px_rgba(26,26,46,0.5)] space-y-6 md:space-y-12 relative overflow-hidden glass">
                  
                  {/* Decorative corner highlights */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />

                  {/* Celestial tracking line progress bar */}
                  <div className="absolute top-0 left-0 w-full h-3 bg-black/40 border-b border-white/5 glass">
                     <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuizIndex + 1) / quizQuestions.length) * 100}%` }}
                        className="h-full bg-accent shadow-[0_0_20px_rgba(201,168,76,0.7)]"
                     />
                  </div>

                  <div className="text-center space-y-3 md:space-y-5">
                    <span className="bg-primary/60 text-accent text-[9px] md:text-[11px] font-black uppercase tracking-[0.25em] px-4 md:px-6 py-2 rounded-full border border-accent/30 shadow-inner inline-block glass">
                      Evaluasi Pemahaman • Pertanyaan {currentQuizIndex + 1} / {quizQuestions.length}
                    </span>
                        <h2 
                          className={`text-xl sm:text-3xl md:text-5xl font-black text-white leading-normal tracking-tight max-w-2xl mx-auto ${hasArabicText(quizQuestions[currentQuizIndex].question || quizQuestions[currentQuizIndex].questionAr || "") ? 'arabic text-accent font-normal leading-relaxed' : ''}`}
                          style={hasArabicText(quizQuestions[currentQuizIndex].question || quizQuestions[currentQuizIndex].questionAr || "") ? { fontFamily: "'Amiri', serif" } : undefined}
                        >
                          {quizQuestions[currentQuizIndex].questionAr && (
                             <div className="mb-4 text-4xl md:text-6xl text-center" dir="rtl">{quizQuestions[currentQuizIndex].questionAr}</div>
                          )}
                          <ArabicStyledText text={quizQuestions[currentQuizIndex].question} />
                        </h2>
                  </div>

                  {/* Options container */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                    {quizQuestions[currentQuizIndex].options.map((opt: string, i: number) => {
                      const isCorrect = opt === quizQuestions[currentQuizIndex].correctAnswer;
                      const isSelected = selectedAnswer === opt;
                      const { arabic, translation } = splitOptionText(opt);
                      
                      let btnClass = "bg-primary/40 border-white/10 text-white hover:bg-primary/60 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 glass";
                      if (isAnswered) {
                        if (isCorrect) {
                          btnClass = "bg-accent border-accent text-primary shadow-2xl scale-[1.02]";
                        } else if (isSelected) {
                          btnClass = "bg-red-950/80 border-red-500 text-red-200 shadow-xl";
                        } else {
                          btnClass = "opacity-20 grayscale pointer-events-none scale-95 border-white/5";
                        }
                      } else if (isSelected) {
                        btnClass = "bg-primary/80 border-accent text-accent shadow-2xl scale-[1.02] shadow-accent/10 glass";
                      }

                      return (
                        <button
                          key={i}
                          disabled={isAnswered}
                          onClick={() => setSelectedAnswer(opt)}
                          className={`group w-full p-4 sm:p-5 md:p-6 text-left rounded-2xl border-2 transition-all transform active:scale-[0.98] ${btnClass} flex items-center justify-between gap-4 cursor-pointer`}
                        >
                          <div className="flex-1 flex flex-col items-start gap-1 text-left">
                            {arabic ? (
                              <>
                                <span 
                                  className={`arabic text-lg sm:text-xl md:text-2xl font-semibold tracking-wide ${isAnswered && isCorrect ? 'text-primary' : 'text-white'}`}
                                  style={{ fontFamily: "'Amiri', serif" }}
                                  dir="rtl"
                                >
                                  {arabic}
                                </span>
                                {translation && (
                                  <span className={`text-[11px] sm:text-xs font-bold leading-normal ${isAnswered && isCorrect ? 'text-primary/80' : 'text-accent'}`}>
                                    {translation}
                                  </span>
                                )}
                              </>
                            ) : (
                              <span className={`text-sm sm:text-base font-black ${isAnswered && isCorrect ? 'text-primary' : 'text-white'}`}>
                                {translation || opt}
                              </span>
                            )}
                          </div>
                          
                          {/* Option token Badge */}
                          <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 border-2 text-xs md:text-sm font-black transition-all glass
                            ${isAnswered 
                              ? (isCorrect 
                                ? 'bg-primary text-accent border-primary' 
                                : (isSelected 
                                  ? 'bg-red-600 text-white border-red-500' 
                                  : 'border-white/25 text-white/50')) 
                              : (isSelected 
                                ? 'bg-accent/30 text-accent border-accent' 
                                : 'bg-black/30 border-white/10 text-white/70 group-hover:border-accent/50')}`}
                          >
                            {isAnswered ? (
                              isCorrect ? (
                                <CheckCircle size={14} className="md:w-4 h-4" />
                              ) : isSelected ? (
                                <XCircle size={14} className="md:w-4 h-4" />
                              ) : null
                            ) : (
                              i === 0 ? 'A' : i === 1 ? 'B' : i === 2 ? 'C' : 'D'
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {!isAnswered ? (
                    <button
                      disabled={!selectedAnswer}
                      onClick={handleCheckAnswer}
                      className={`w-full py-4 md:py-6 rounded-2xl font-black text-sm sm:text-base md:text-lg uppercase tracking-widest shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2 border-2 cursor-pointer
                        ${selectedAnswer 
                          ? 'bg-accent text-primary border-accent shadow-accent/20 hover:brightness-110 hover:scale-[1.01]' 
                          : 'bg-primary/40 border-white/5 text-white/20 cursor-not-allowed grayscale opacity-40 glass'}`}
                    >
                      Periksa Jawaban Sekarang
                    </button>
                  ) : (
                    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
                      
                      {/* Wisdom Speech Bubble from selected Tutor */}
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        
                        {/* Tutor Avatar Circle */}
                        {(() => {
                          const tutorGender = localStorage.getItem("arabiyPro_voice_gender") === "female" ? "female" : "male";
                          return (
                            <div className="shrink-0 flex flex-col items-center gap-1 bg-primary/80 border border-accent/30 p-2.5 rounded-2xl shadow-lg glass">
                              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden bg-primary flex items-center justify-center">
                                {tutorGender === "female" ? (
                                  <UstadzahFatimahAvatar className="w-full h-full" />
                                ) : (
                                  <UstadzAhmadAvatar className="w-full h-full" />
                                )}
                              </div>
                              <span className="text-[8px] md:text-[9px] font-black text-accent tracking-wider uppercase font-mono mt-1 text-center leading-none">
                                {tutorGender === "female" ? "USTZ. FATIMAH" : "UST. AHMAD"}
                              </span>
                            </div>
                          );
                        })()}

                        {/* Speech bubble explanation box */}
                        <div className="flex-1 bg-primary/60 p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] border-2 border-accent/30 relative text-left glass">
                          {/* Speech triangle */}
                          <div className="hidden sm:block absolute top-6 -left-3.5 w-0 h-0 border-t-[10px] border-t-transparent border-r-[15px] border-r-accent/30 border-b-[10px] border-b-transparent pointer-events-none" />
                          <div className="hidden sm:block absolute top-6 -left-2 w-0 h-0 border-t-[10px] border-t-transparent border-r-[15px] border-r-primary/95 border-b-[10px] border-b-transparent pointer-events-none z-10" />
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-3.5 bg-accent rounded-full shadow-[0_0_8px_#C9A84C]" />
                              <span className="text-accent text-[10px] uppercase tracking-widest font-mono font-black">Penjelasan Guru</span>
                            </div>
                            <p className="text-xs sm:text-sm md:text-lg text-white font-semibold leading-relaxed">
                              <ArabicStyledText text={quizQuestions[currentQuizIndex].explanation} />
                            </p>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={handleNextQuiz}
                        className="w-full py-4 md:py-6 bg-accent text-primary border-2 border-accent rounded-2xl font-black text-sm sm:text-base md:text-lg uppercase tracking-wider shadow-2xl hover:brightness-110 transition-all flex items-center justify-center gap-2 transform hover:scale-[1.01] active:scale-95 cursor-pointer"
                      >
                        <span>{currentQuizIndex === quizQuestions.length - 1 ? "Selesaikan Ujian Akhir" : "Pertanyaan Berikutnya"}</span> 
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 7. SUMMARY */}
            {phase === "summary" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto text-center space-y-12 py-10"
              >
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center -z-10">
                    <motion.div 
                      animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                      transition={{ duration: 15, repeat: Infinity }}
                      className="w-80 h-80 bg-accent/20 blur-[100px] rounded-full"
                    />
                  </div>
                  <div className="w-48 h-48 bg-secondary rounded-[4rem] mx-auto flex items-center justify-center shadow-[0_20px_50px_rgba(26,26,46,0.4)] relative border-4 border-accent animate-bounce glass">
                    <Trophy size={100} className="text-accent" />
                  </div>
                </div>

                <div className="space-y-6">
                   <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-lg">
                     {lesson.type === "comprehensive" ? "UJIAN LULUS!" : "MUMTAZ!"}
                   </h1>
                   <div className="h-2 w-24 bg-accent mx-auto rounded-full shadow-[0_0_10px_rgba(201,168,76,0.6)]" />
                   <p className="text-2xl text-white/80 font-bold tracking-tight">
                     {lesson.type === "comprehensive" 
                        ? "Maa syaa Allah! Anda telah menaklukkan ujian akhir Level 2." 
                        : "Alhamdulillah, Anda telah menguasai bab ini dengan sempurna!"}
                   </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-primary/40 p-8 rounded-[3rem] border-2 border-accent/30 shadow-xl transform hover:scale-105 transition-transform glass">
                    <span className="text-[11px] font-black text-accent uppercase tracking-[0.3em] block mb-3">Skor Akurasi</span>
                    <span className="text-5xl font-black text-white tracking-tighter">{Math.round((quizScore / totalPoints) * 100)}%</span>
                  </div>
                  <div className="bg-primary/40 p-8 rounded-[3rem] border-2 border-accent/30 shadow-xl transform hover:scale-105 transition-transform glass">
                    <span className="text-[11px] font-black text-accent uppercase tracking-[0.3em] block mb-3">Total Poin</span>
                    <span className="text-4xl font-black text-white tracking-tighter">{quizScore} / {totalPoints}</span>
                  </div>
                </div>

                <button
                  onClick={handleCompleteAndSave}
                  className="w-full py-8 bg-accent border-2 border-accent text-primary rounded-[3rem] font-black text-2xl shadow-[0_20px_40px_rgba(201,168,76,0.3)] hover:brightness-110 transition-all transform hover:scale-[1.02] active:scale-95 uppercase tracking-widest cursor-pointer"
                >
                  Simpan Progres & Selesai
                </button>
              </motion.div>
            )}

            {/* 8. FAILED */}
            {phase === "failed" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto text-center space-y-12 py-10"
              >
                <div className="w-48 h-48 bg-primary border-4 border-red-500 rounded-[4rem] mx-auto flex items-center justify-center shadow-2xl shadow-red-900/30 animate-pulse glass">
                  <XCircle size={100} className="text-red-500" />
                </div>

                <div className="space-y-6">
                   <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-md">
                     {lesson.type === "comprehensive" ? "BELUM LULUS" : "BELUM LULUS"}
                   </h1>
                   <div className="h-2 w-24 bg-red-500 mx-auto rounded-full shadow-[0_0_10px_rgba(239,68,68,0.4)]" />
                   <p className="text-2xl text-white/80 font-bold tracking-tight">Jangan putus asa! Skor Anda: {Math.round((quizScore / totalPoints) * 100)}%</p>
                   {isExam && <p className="text-ruby font-black uppercase tracking-tighter">Dibutuhkan minimal 75% untuk lulus ujian ini.</p>}
                </div>

                <div className="bg-primary/40 p-10 rounded-[3.5rem] border-2 border-white/5 text-left shadow-xl glass">
                  <h4 className="font-black text-accent uppercase tracking-[0.2em] text-[11px] mb-6 flex items-center gap-3">
                    <ShieldAlert size={16} /> Materi Yang Perlu Diulang:
                  </h4>
                  <div className="space-y-4">
                    {wrongQuestions.slice(0, 3).map((q, i) => (
                      <div key={i} className="text-base md:text-lg font-bold text-white flex gap-4 p-4 bg-primary/60 rounded-2xl border border-white/10 glass">
                        <span className="font-black opacity-30 tracking-tighter shrink-0 text-accent">#{i + 1}</span> {q.question}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleResetToRetry}
                  className="w-full py-8 bg-red-600 text-white rounded-[3rem] font-black text-2xl shadow-2xl hover:bg-red-700 transition-all transform hover:scale-[1.02] active:scale-95 uppercase tracking-widest cursor-pointer"
                >
                  Ulangi Ujian Sekarang
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
