import React, { useState, useEffect, useCallback, useRef } from "react";
import { 
  Gamepad2, 
  Trophy, 
  Zap, 
  Puzzle, 
  Brain, 
  Volume2, 
  RefreshCw, 
  ChevronLeft, 
  Star, 
  CheckCircle2, 
  XCircle,
  Flame,
  Award,
  BookOpen,
  Keyboard,
  Sword,
  Search,
  Type,
  X
} from "lucide-react";
import { UserProfile } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface GamesHubProps {
  userProfile: UserProfile;
  onUpdateXp: (amount: number) => void;
  onUpdateCoins: (amount: number) => void;
  initialGame?: any;
  onNavigate: (tabId: any, params?: any) => void;
}

type GameType = 'word_match' | 'memory' | 'puzzle' | 'spelling' | 'crossword' | 'boss_battle';

interface GameState {
  score: number;
  timeLeft: number;
  isActive: boolean;
  isFinished: boolean;
  level: number;
  combo: number;
}

// PREMIUM VOCABULARY DATABASE (100+ Words)
const GAME_VOCAB = [
  { ar: "بَيْت", id: "Rumah", tr: "Bayt" },
  { ar: "قَلَم", id: "Pena", tr: "Qalam" },
  { ar: "كِتَاب", id: "Buku", tr: "Kitab" },
  { ar: "مَدْرَسَة", id: "Sekolah", tr: "Madrasah" },
  { ar: "طَالِب", id: "Siswa", tr: "Thalib" },
  { ar: "أُسْتَاذ", id: "Guru", tr: "Ustadz" },
  { ar: "بَاب", id: "Pintu", tr: "Bab" },
  { ar: "نَافِذَة", id: "Jendela", tr: "Nafidzah" },
  { ar: "كُرْسِيّ", id: "Kursi", tr: "Kursiy" },
  { ar: "مَكْتَب", id: "Meja", tr: "Maktab" },
  { ar: "سَيَّارَة", id: "Mobil", tr: "Sayyarah" },
  { ar: "طَائِرَة", id: "Pesawat", tr: "Tha'irah" },
  { ar: "سَمَك", id: "Ikan", tr: "Samak" },
  { ar: "قِطّ", id: "Kucing", tr: "Qith" },
  { ar: "كَلْب", id: "Anjing", tr: "Kalb" },
  { ar: "أَب", id: "Ayah", tr: "Ab" },
  { ar: "أُمّ", id: "Ibu", tr: "Umm" },
  { ar: "أَخ", id: "Saudara Laki-laki", tr: "Akh" },
  { ar: "أُخْت", id: "Saudara Perempuan", tr: "Ukht" },
  { ar: "مَاء", id: "Air", tr: "Ma'" },
  { ar: "شَمْس", id: "Matahari", tr: "Syams" },
  { ar: "قَمَر", id: "Bulan", tr: "Qamar" },
  { ar: "نَجْم", id: "Bintang", tr: "Najm" },
  { ar: "يَوْم", id: "Hari", tr: "Yaum" },
  { ar: "لَيْل", id: "Malam", tr: "Lail" },
  { ar: "نَهَار", id: "Siang", tr: "Nahar" },
  { ar: "وَقْت", id: "Waktu", tr: "Waqt" },
  { ar: "مَسْجِد", id: "Masjid", tr: "Masjid" },
  { ar: "سُوق", id: "Pasar", tr: "Suq" },
  { ar: "حَدِيقَة", id: "Taman", tr: "Hadiqah" },
  { ar: "لَبَن", id: "Susu", tr: "Laban" },
  { ar: "خُبْز", id: "Roti", tr: "Khubz" },
  { ar: "أَرُزّ", id: "Nasi", tr: "Aruzz" },
  { ar: "تُفَّاح", id: "Apel", tr: "Tuffah" },
  { ar: "عِنَب", id: "Anggur", tr: "Inab" },
  { ar: "مَوْز", id: "Pisang", tr: "Mauz" },
  { ar: "زَهْرَة", id: "Bunga", tr: "Zahrah" },
  { ar: "جَبَل", id: "Gunung", tr: "Jabal" },
  { ar: "بَحْر", id: "Laut", tr: "Bahr" },
  { ar: "نَهْر", id: "Sungai", tr: "Nahr" },
  { ar: "قَرْيَة", id: "Desa", tr: "Qaryah" },
  { ar: "مَدِينَة", id: "Kota", tr: "Madinah" },
  { ar: "طَرِيق", id: "Jalan", tr: "Thariq" },
  { ar: "رَجُل", id: "Pria", tr: "Rajul" },
  { ar: "اِمْرَأَة", id: "Wanita", tr: "Imra'ah" },
  { ar: "وَلَد", id: "Anak Laki-laki", tr: "Walad" },
  { ar: "بِنْت", id: "Anak Perempuan", tr: "Bint" },
  { ar: "يَد", id: "Tangan", tr: "Yad" },
  { ar: "رِجْل", id: "Kaki", tr: "Rijl" },
  { ar: "رَأْس", id: "Kepala", tr: "Ra's" },
  { ar: "عَيْن", id: "Mata", tr: "Ayn" },
  { ar: "أُذُن", id: "Telinga", tr: "Udzun" },
  { ar: "أَنْف", id: "Hidung", tr: "Anf" },
  { ar: "فَم", id: "Mulut", tr: "Fam" },
  { ar: "قَلْب", id: "Hati", tr: "Qalb" },
  { ar: "لِسَان", id: "Lidah", tr: "Lisan" },
  { ar: "شَعْر", id: "Rambut", tr: "Sya'r" },
  { ar: "جِسْم", id: "Tubuh", tr: "Jism" },
  { ar: "ثَوْب", id: "Pakaian", tr: "Tsaub" },
  { ar: "حِذَاء", id: "Sepatu", tr: "Hidza'" },
  { ar: "سَاعَة", id: "Jam", tr: "Sa'ah" },
  { ar: "نَظَّارَة", id: "Kacamata", tr: "Nadzdzarah" },
  { ar: "حَقِيبَة", id: "Tas", tr: "Haqibah" },
  { ar: "مِفْتَاح", id: "Kunci", tr: "Miftah" },
  { ar: "جَوَّال", id: "Ponsel", tr: "Jawwal" },
  { ar: "حَاسُوب", id: "Komputer", tr: "Hasub" },
  { ar: "وَرَقَة", id: "Kertas", tr: "Waraqah" },
  { ar: "صُورَة", id: "Gambar", tr: "Surah" },
  { ar: "لَوْن", id: "Warna", tr: "Laun" },
  { ar: "أَبْيَض", id: "Putih", tr: "Abyadh" },
  { ar: "أَسْوَد", id: "Hitam", tr: "Aswad" },
  { ar: "أَحْمَر", id: "Merah", tr: "Ahmar" },
  { ar: "أَخْضَر", id: "Hijau", tr: "Akhdhar" },
  { ar: "أَزْرَق", id: "Biru", tr: "Azraq" },
  { ar: "أَصْفَر", id: "Kuning", tr: "Ashfar" },
  { ar: "كَبِير", id: "Besar", tr: "Kabir" },
  { ar: "صَغِير", id: "Kecil", tr: "Shaghir" },
  { ar: "طَوِيل", id: "Panjang/Tinggi", tr: "Thawil" },
  { ar: "قَصِير", id: "Pendek", tr: "Qashir" },
  { ar: "جَدِيد", id: "Baru", tr: "Jadid" },
  { ar: "قَدِيم", id: "Lama", tr: "Qadim" },
  { ar: "جَمِيل", id: "Indah/Ganteng", tr: "Jamil" },
  { ar: "قَبِيح", id: "Buruk/Jelek", tr: "Qabih" },
  { ar: "نَظِيف", id: "Bersih", tr: "Nazhif" },
  { ar: "وَسِخ", id: "Kotor", tr: "Wasikh" },
  { ar: "سَرِيع", id: "Cepat", tr: "Sari'" },
  { ar: "بَطِيء", id: "Lambat", tr: "Bathi'" },
  { ar: "قَوِيّ", id: "Kuat", tr: "Qawiy" },
  { ar: "ضَعِيف", id: "Lemah", tr: "Dha'if" },
  { ar: "غَنِيّ", id: "Kaya", tr: "Ghaniy" },
  { ar: "فَقِير", id: "Miskin", tr: "Faqir" },
  { ar: "حَارّ", id: "Panas", tr: "Harr" },
  { ar: "بَارِد", id: "Dingin", tr: "Barid" },
  { ar: "سَعِيد", id: "Bahagia", tr: "Sa'id" },
  { ar: "حَزِين", id: "Sedih", tr: "Hazin" },
  { ar: "مَرِيض", id: "Sakit", tr: "Maridh" },
  { ar: "طَيِّب", id: "Baik", tr: "Thayyib" },
  { ar: "خَيْر", id: "Kebaikan", tr: "Khair" },
  { ar: "شَرّ", id: "Keburukan", tr: "Syarr" },
  { ar: "حَقّ", id: "Kebenaran", tr: "Haqq" },
  { ar: "بَاطِل", id: "Kebatilan", tr: "Bathil" }
];

const removeHarakat = (text: string) => {
  return text.replace(/[\u064B-\u065F\u0670]/g, "");
};

export default function GamesHub({ userProfile, onUpdateXp, onUpdateCoins, initialGame, onNavigate }: GamesHubProps) {
  const [activeGame, setActiveGame] = useState<GameType | null>(initialGame || null);
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    timeLeft: 60,
    isActive: false,
    isFinished: false,
    level: 1,
    combo: 0
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // GAME DATA STATES
  const [matchPairs, setMatchPairs] = useState<any[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const [memoryCards, setMemoryCards] = useState<any[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [currentWord, setCurrentWord] = useState<any>(null);
  const [userInput, setUserInput] = useState("");
  const [puzzleWord, setPuzzleWord] = useState<string[]>([]);
  const [puzzleOptions, setPuzzleOptions] = useState<string[]>([]);
  const [puzzleTarget, setPuzzleTarget] = useState("");
  const [bossCount, setBossCount] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [maxQuestions, setMaxQuestions] = useState(10);

  const startTimer = useCallback((seconds: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGameState(prev => ({ ...prev, timeLeft: seconds, isActive: true, isFinished: false }));
    timerRef.current = setInterval(() => {
      setGameState(prev => {
        if (prev.timeLeft <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return { ...prev, timeLeft: 0, isActive: false, isFinished: true };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);
  }, []);

  const playSound = (type: 'correct' | 'wrong' | 'click' | 'finish') => {
    try {
      const audio = new Audio();
      if (type === 'correct') audio.src = "https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3";
      if (type === 'wrong') audio.src = "https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3";
      if (type === 'finish') audio.src = "https://assets.mixkit.co/active_storage/sfx/2017/2017-preview.mp3";
      audio.volume = 0.2;
      audio.play().catch(() => {});
    } catch (e) {}
  };

  const speak = (text: string) => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ar-SA';
    utter.rate = 0.7;
    synth.speak(utter);
  };

  // --- GAME INITIALIZERS ---

  const initWordMatch = () => {
    const subset = [...GAME_VOCAB].sort(() => Math.random() - 0.5).slice(0, 6);
    const items: any[] = [];
    subset.forEach(w => {
      items.push({ text: w.ar, pair: w.id, type: 'ar', matched: false });
      items.push({ text: w.id, pair: w.ar, type: 'id', matched: false });
    });
    setMatchPairs(items.sort(() => Math.random() - 0.5));
    startTimer(45);
  };

  const initMemory = () => {
    const subset = [...GAME_VOCAB].sort(() => Math.random() - 0.5).slice(0, 8);
    const cards: any[] = [];
    subset.forEach((w, idx) => {
      cards.push({ id: `ar-${idx}`, label: w.ar, isFlipped: false, isMatched: false, pairId: idx, type: 'ar' });
      cards.push({ id: `id-${idx}`, label: w.id, isFlipped: false, isMatched: false, pairId: idx, type: 'id' });
    });
    setMemoryCards(cards.sort(() => Math.random() - 0.5));
    setFlippedIndices([]);
    startTimer(90);
  };

  const [crosswordGrid, setCrosswordGrid] = useState<any[][]>([]);
  const [crosswordClues, setCrosswordClues] = useState<any[]>([]);

  const initCrossword = () => {
    // Sederhana: 3 kata dalam grid 5x5
    // Kata 1: Horizontal (0,0) - Madrasah (5 huruf: م د ر س ة)
    // Kata 2: Vertical (0,0) - Maktab (4 huruf: م ك ت ب)
    // Kata 3: Horizontal (3,0) - Bayt (3 huruf: ب ي ت)
    
    const grid = Array(5).fill(null).map(() => Array(5).fill({ char: '', input: '', isBlocked: true, number: null }));
    
    // Kata 1: مَدْرَسَة (5 huruf) - Baris 0
    const w1 = "مدرسة".split("");
    w1.forEach((c, i) => {
      grid[0][i] = { char: c, input: '', isBlocked: false, number: i === 0 ? 1 : null };
    });

    // Kata 2: مَكْتَب (4 huruf) - Kolom 0
    const w2 = "مكتب".split("");
    w2.forEach((c, i) => {
      if (i === 0) {
        grid[i][0] = { ...grid[i][0], char: c, number: 1 };
      } else {
        grid[i][0] = { char: c, input: '', isBlocked: false, number: null };
      }
    });

    // Kata 3: بَيْت (3 huruf) - Baris 3
    const w3 = "بيت".split("");
    w3.forEach((c, i) => {
      grid[3][i] = { char: c, input: '', isBlocked: false, number: 2 };
    });

    setCrosswordGrid(grid);
    setCrosswordClues([
      { num: 1, type: 'Mendatar', hint: "Sekolah (5 huruf)" },
      { num: 1, type: 'Menurun', hint: "Meja (4 huruf)" },
      { num: 2, type: 'Mendatar', hint: "Rumah (3 huruf)" }
    ]);
    startTimer(180);
  };

  const initSpelling = () => {
    setQuestionIndex(1);
    setMaxQuestions(10);
    const word = GAME_VOCAB[Math.floor(Math.random() * GAME_VOCAB.length)];
    setCurrentWord(word);
    setUserInput("");
    speak(word.ar);
    startTimer(120);
  };

  const initPuzzle = () => {
    setQuestionIndex(1);
    setMaxQuestions(10);
    const word = GAME_VOCAB[Math.floor(Math.random() * GAME_VOCAB.length)];
    const normalizedWord = removeHarakat(word.ar);
    const letters = normalizedWord.split("");
    setPuzzleTarget(normalizedWord);
    setPuzzleWord(new Array(letters.length).fill(""));
    setPuzzleOptions([...letters].sort(() => Math.random() - 0.5));
    setCurrentWord(word);
    startTimer(180);
  };

  const initBoss = () => {
    setBossCount(10);
    initSpelling();
  };

  const handleGameSelect = (type: GameType) => {
    setActiveGame(type);
    setGameState(prev => ({ ...prev, score: 0, combo: 0 }));
    if (type === 'word_match') initWordMatch();
    if (type === 'memory') initMemory();
    if (type === 'spelling') initSpelling();
    if (type === 'puzzle') initPuzzle();
    if (type === 'boss_battle') initBoss();
    if (type === 'crossword') initCrossword(); 
  };

  // --- GAME LOGIC HANDLERS ---

  const onCrosswordInput = (r: number, c: number, val: string) => {
    const newGrid = [...crosswordGrid];
    newGrid[r][c] = { ...newGrid[r][c], input: val };
    setCrosswordGrid(newGrid);

    // Cek jika semua benar
    let allCorrect = true;
    let filledCount = 0;
    newGrid.forEach(row => {
      row.forEach(cell => {
        if (!cell.isBlocked) {
          if (cell.input !== cell.char) allCorrect = false;
          if (cell.input !== '') filledCount++;
        }
      });
    });

    if (allCorrect && filledCount > 0) {
      playSound('correct');
      setGameState(prev => ({ ...prev, score: prev.score + 100, isFinished: true, isActive: false }));
    }
  };

  const onMatchClick = (idx: number) => {
    if (matchPairs[idx].matched || !gameState.isActive) return;
    if (selectedMatch === null) {
      setSelectedMatch(idx);
      return;
    }
    if (selectedMatch === idx) {
      setSelectedMatch(null);
      return;
    }

    const first = matchPairs[selectedMatch];
    const second = matchPairs[idx];

    if (first.pair === second.text) {
      playSound('correct');
      const newPairs = [...matchPairs];
      newPairs[selectedMatch].matched = true;
      newPairs[idx].matched = true;
      setMatchPairs(newPairs);
      setSelectedMatch(null);
      setGameState(prev => ({ ...prev, score: prev.score + 10, combo: prev.combo + 1 }));
      if (newPairs.every(p => p.matched)) {
        setTimeout(initWordMatch, 800);
      }
    } else {
      playSound('wrong');
      setSelectedMatch(null);
      setGameState(prev => ({ ...prev, combo: 0 }));
    }
  };

  const onMemoryClick = (idx: number) => {
    if (memoryCards[idx].isFlipped || memoryCards[idx].isMatched || flippedIndices.length >= 2 || !gameState.isActive) return;

    const newCards = [...memoryCards];
    newCards[idx].isFlipped = true;
    setMemoryCards(newCards);
    const newFlipped = [...flippedIndices, idx];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      const [i1, i2] = newFlipped;
      if (newCards[i1].pairId === newCards[i2].pairId) {
        playSound('correct');
        setTimeout(() => {
          newCards[i1].isMatched = true;
          newCards[i2].isMatched = true;
          setMemoryCards([...newCards]);
          setFlippedIndices([]);
          setGameState(prev => ({ ...prev, score: prev.score + 25 }));
          if (newCards.every(c => c.isMatched)) {
            setGameState(prev => ({ ...prev, isFinished: true, isActive: false }));
          }
        }, 500);
      } else {
        playSound('wrong');
        setTimeout(() => {
          newCards[i1].isFlipped = false;
          newCards[i2].isFlipped = false;
          setMemoryCards([...newCards]);
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  const checkSpelling = () => {
    if (!currentWord || !gameState.isActive) return;
    const input = userInput.trim();
    const normalizedInput = removeHarakat(input);
    const normalizedTarget = removeHarakat(currentWord.ar);

    const isCorrect = 
      input === currentWord.ar || 
      normalizedInput === normalizedTarget || 
      input.toLowerCase() === currentWord.tr.toLowerCase() || 
      input.toLowerCase() === currentWord.id.toLowerCase();

    if (isCorrect) {
      playSound('correct');
      const scoreGain = activeGame === 'boss_battle' ? 50 : 20;
      setGameState(prev => ({ ...prev, score: prev.score + scoreGain, combo: prev.combo + 1 }));
      
      if (activeGame === 'boss_battle') {
        if (bossCount > 1) {
          setBossCount(prev => prev - 1);
          const next = GAME_VOCAB[Math.floor(Math.random() * GAME_VOCAB.length)];
          setCurrentWord(next);
          setUserInput("");
          speak(next.ar);
        } else {
          setGameState(prev => ({ ...prev, isFinished: true, isActive: false }));
        }
      } else {
        if (questionIndex < maxQuestions) {
          setQuestionIndex(prev => prev + 1);
          const next = GAME_VOCAB[Math.floor(Math.random() * GAME_VOCAB.length)];
          setCurrentWord(next);
          setUserInput("");
          speak(next.ar);
        } else {
          setGameState(prev => ({ ...prev, isFinished: true, isActive: false }));
        }
      }
    } else {
      playSound('wrong');
      setUserInput("");
    }
  };

  const onPuzzleLetterClick = (letter: string, optIdx: number) => {
    const emptyIdx = puzzleWord.indexOf("");
    if (emptyIdx === -1) return;

    const newWord = [...puzzleWord];
    newWord[emptyIdx] = letter;
    setPuzzleWord(newWord);

    const newOpts = [...puzzleOptions];
    newOpts.splice(optIdx, 1);
    setPuzzleOptions(newOpts);

    if (!newWord.includes("")) {
      if (newWord.join("") === puzzleTarget) {
        playSound('correct');
        setGameState(prev => ({ ...prev, score: prev.score + 30 }));
        
        if (questionIndex < maxQuestions) {
          setTimeout(() => {
            setQuestionIndex(prev => prev + 1);
            const word = GAME_VOCAB[Math.floor(Math.random() * GAME_VOCAB.length)];
            const letters = word.ar.split("");
            setPuzzleTarget(word.ar);
            setPuzzleWord(new Array(letters.length).fill(""));
            setPuzzleOptions([...letters].sort(() => Math.random() - 0.5));
            setCurrentWord(word);
          }, 800);
        } else {
          setTimeout(() => {
            setGameState(prev => ({ ...prev, isFinished: true, isActive: false }));
          }, 1000);
        }
      } else {
        playSound('wrong');
        setTimeout(() => {
          const originalLetters = puzzleTarget.split("");
          setPuzzleWord(new Array(originalLetters.length).fill(""));
          setPuzzleOptions([...originalLetters].sort(() => Math.random() - 0.5));
        }, 500);
      }
    }
  };

  const claimRewards = () => {
    const xp = Math.floor(gameState.score / 2);
    const coins = Math.floor(gameState.score / 10);
    onUpdateXp(xp);
    onUpdateCoins(coins);
    setActiveGame(null);
    playSound('finish');
  };

  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <div className="w-full min-h-[70vh] bg-premium-navy-dark p-4 md:p-8 rounded-[3rem] text-white overflow-x-hidden border border-accent/20 glass shadow-2xl relative bg-geometric-dark">
      <AnimatePresence mode="wait">
        {!activeGame ? (
          <motion.div 
            key="lobby"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-10 relative z-10"
          >
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-10">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-accent font-bold tracking-widest text-[10px] uppercase">
                  <Zap size={14} className="fill-accent" />
                  Elite Mastery Training
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">Mastery <span className="text-accent drop-shadow-[0_0_10px_rgba(201,168,76,0.3)]">Arena</span></h1>
                <p className="text-white/60 text-sm max-w-lg font-medium">Uji kemampuan Bahasa Arab Anda dengan tantangan premium harian dalam suasana yang elegan khas ArabiyPro.</p>
              </div>
              <div className="flex gap-4">
                <StatCard label="XP" value={userProfile.xp} icon={<Award className="text-accent" size={16} />} />
                <StatCard label="Streak" value={`${userProfile.streak} 🔥`} icon={<Flame className="text-ruby" size={16} />} />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
              <GameItem 
                title="Word Match Blitz" 
                desc="Cocokkan 12 pasang kata Arab & Indonesia dalam 45 detik!"
                icon={<Zap size={32} className="text-accent" />}
                difficulty="Mudah"
                color="from-accent/10 to-primary/80"
                onPlay={() => handleGameSelect('word_match')}
              />
              <GameItem 
                title="Memory Cards" 
                desc="Temukan 8 pasangan kata tersembunyi. Tajamkan ingatan visualmu."
                icon={<Brain size={32} className="text-accent" />}
                difficulty="Sedang"
                color="from-accent/10 to-primary/80"
                onPlay={() => handleGameSelect('memory')}
              />
              <GameItem 
                title="Hijaiyah Puzzle" 
                desc="Susun huruf-huruf acak menjadi kata yang bermakna tepat. (10 Soal)"
                icon={<Puzzle size={32} className="text-accent" />}
                difficulty="Sedang"
                color="from-accent/10 to-primary/80"
                onPlay={() => handleGameSelect('puzzle')}
              />
              <GameItem 
                title="Spelling Bee" 
                desc="Dengar pengucapan murni dan ketikkan katanya dengan sempurna. (10 Soal)"
                icon={<Keyboard size={32} className="text-accent" />}
                difficulty="Sulit"
                color="from-accent/10 to-primary/80"
                onPlay={() => handleGameSelect('spelling')}
              />
              <GameItem 
                title="Arabic Crossword" 
                desc="Teka-teki silang interaktif dengan kosakata Al-Qur'an pilihan."
                icon={<Search size={32} className="text-accent" />}
                difficulty="Expert"
                color="from-accent/10 to-primary/80"
                onPlay={() => handleGameSelect('crossword')}
              />
              <GameItem 
                title="Boss Battle" 
                desc="Tantangan 10 kata beruntun tanpa henti. Hadiah XP 2x lipat!"
                icon={<Sword size={32} className="text-ruby" />}
                difficulty="Legendary"
                color="from-ruby/10 to-primary/80 border-ruby/30"
                onPlay={() => handleGameSelect('boss_battle')}
              />
            </div>
          </motion.div>

        ) : (
          <motion.div 
            key="game-stage"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full relative z-10"
          >
            <div className="bg-secondary/80 border border-accent/20 rounded-[3rem] p-6 md:p-10 shadow-2xl relative overflow-hidden glass">
              {/* Header */}
              <div className="flex justify-between items-center mb-10 relative z-10">
                <button onClick={() => setActiveGame(null)} className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors glass">
                  <ChevronLeft />
                </button>
                <div className="flex flex-col items-center">
                  {(activeGame === 'spelling' || activeGame === 'puzzle') && (
                    <span className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">Soal {questionIndex} / {maxQuestions}</span>
                  )}
                  <div className="flex gap-8">
                    <GameStat label="TIME" value={`${gameState.timeLeft}s`} color={gameState.timeLeft < 10 ? 'text-ruby' : 'text-white'} />
                    <GameStat label="SCORE" value={gameState.score} color="text-accent" />
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10 glass">
                  <Flame className="w-4 h-4 text-ruby" />
                  <span className="font-black text-xs text-white">{gameState.combo}x Combo</span>
                </div>
              </div>

              {/* Stage Content */}
              <div className="min-h-[450px] flex items-center justify-center">
                {activeGame === 'word_match' && !gameState.isFinished && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                    {matchPairs.map((p, idx) => (
                      <button
                        key={idx}
                        disabled={p.matched}
                        onClick={() => onMatchClick(idx)}
                        className={`h-24 md:h-32 rounded-2xl border-2 transition-all duration-300 p-2 flex items-center justify-center text-center glass-dark
                          ${p.matched ? 'bg-accent/5 border-accent/10 opacity-30 scale-95' : 
                            selectedMatch === idx ? 'bg-accent/20 border-accent shadow-lg scale-105' : 'bg-white/5 border-white/10 hover:border-accent/40'}
                        `}
                      >
                        <span className={`font-black ${p.type === 'ar' ? 'arabic text-2xl md:text-3xl text-accent' : 'text-xs md:text-sm text-white/80'}`}>
                          {p.text}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {activeGame === 'memory' && !gameState.isFinished && (
                  <div className="grid grid-cols-4 gap-3 w-full max-w-2xl perspective-1000">
                    {memoryCards.map((c, idx) => (
                      <button
                        key={idx}
                        disabled={c.isMatched}
                        onClick={() => onMemoryClick(idx)}
                        className={`aspect-square rounded-2xl border-2 transition-all duration-500 relative preserve-3d glass-dark
                          ${c.isMatched ? 'opacity-0 pointer-events-none scale-50' : ''}
                        `}
                      >
                        <div className={`absolute inset-0 transition-all duration-500 rounded-2xl flex items-center justify-center backface-hidden ${c.isFlipped ? 'opacity-0 rotate-y-180' : 'bg-secondary border-accent/30 shadow-inner'}`}>
                           <Star className="text-accent/30" />
                        </div>
                        <div className={`absolute inset-0 transition-all duration-500 rounded-2xl bg-white flex items-center justify-center p-2 backface-hidden ${c.isFlipped ? 'rotate-y-0' : 'rotate-y-180 opacity-0'}`}>
                           <span className={`font-black text-center ${c.type === 'ar' ? 'arabic text-primary text-xl' : 'text-primary text-[10px] md:text-xs'}`}>
                             {c.label}
                           </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {(activeGame === 'spelling' || activeGame === 'boss_battle') && !gameState.isFinished && (
                  <div className="w-full max-w-md space-y-8 text-center">
                    {activeGame === 'boss_battle' && (
                      <div className="mb-4">
                        <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Boss HP</p>
                        <div className="w-full h-2 bg-white/5 rounded-full mt-1 overflow-hidden glass">
                          <div className="h-full bg-gradient-to-r from-accent to-ruby transition-all shadow-[0_0_10px_rgba(201,168,76,0.5)]" style={{ width: `${(bossCount / 10) * 100}%` }} />
                        </div>
                      </div>
                    )}
                    <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10 shadow-xl glass">
                       <Volume2 className="w-10 h-10 text-accent animate-pulse" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white">Apa yang Anda dengar?</h3>
                    <div className="space-y-4">
                      <input 
                        type="text"
                        value={userInput}
                        onChange={e => setUserInput(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && checkSpelling()}
                        autoFocus
                        placeholder="Tulis dalam Arab atau Latin..."
                        className="w-full px-6 py-5 bg-white/5 border-2 border-white/10 rounded-3xl text-center font-black text-xl focus:border-accent focus:outline-none transition-all glass-dark"
                      />
                      <div className="flex gap-4">
                        <button onClick={() => speak(currentWord.ar)} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all glass">Ulangi Audio</button>
                        <button onClick={checkSpelling} className="flex-[2] py-4 bg-accent text-primary rounded-2xl font-black shadow-lg shadow-accent/20 hover:brightness-110 active:scale-95 transition-all">Periksa</button>
                      </div>
                    </div>
                  </div>
                )}

                {activeGame === 'puzzle' && !gameState.isFinished && (
                  <div className="w-full max-w-lg space-y-12">
                    <div className="flex justify-center gap-3" dir="rtl">
                      {puzzleWord.map((letter, i) => (
                        <div key={i} className="w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 border-dashed border-white/20 bg-white/5 flex items-center justify-center glass">
                          <span className="arabic text-3xl md:text-4xl font-black text-accent drop-shadow-[0_0_10px_rgba(201,168,76,0.3)]">{letter}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                      {puzzleOptions.map((letter, i) => (
                        <button 
                          key={i}
                          onClick={() => onPuzzleLetterClick(letter, i)}
                          className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white text-primary flex items-center justify-center shadow-xl hover:-translate-y-1 active:scale-95 transition-all"
                        >
                          <span className="arabic text-3xl font-black">{letter}</span>
                        </button>
                      ))}
                    </div>
                    <div className="text-center">
                       <p className="text-white/40 text-sm italic font-medium">Petunjuk: "{currentWord?.id}"</p>
                    </div>
                  </div>
                )}

                {activeGame === 'crossword' && !gameState.isFinished && (
                  <div className="w-full max-w-4xl grid md:grid-cols-2 gap-10 items-center">
                    <div className="grid grid-cols-5 gap-1 bg-white/5 p-4 rounded-3xl border border-white/10 aspect-square glass">
                      {crosswordGrid.map((row, r) => (
                        row.map((cell, c) => (
                          <div 
                            key={`${r}-${c}`} 
                            className={`relative aspect-square rounded-lg flex items-center justify-center transition-all
                              ${cell.isBlocked ? 'bg-black/20' : 'bg-white shadow-lg'}
                            `}
                          >
                            {cell.number && (
                              <span className="absolute top-1 left-1 text-[8px] font-bold text-primary leading-none">{cell.number}</span>
                            )}
                            {!cell.isBlocked && (
                              <input 
                                type="text"
                                maxLength={1}
                                value={cell.input}
                                onChange={e => onCrosswordInput(r, c, e.target.value)}
                                className="w-full h-full bg-transparent text-center arabic text-2xl font-black text-primary outline-none focus:bg-accent/10 rounded-lg transition-colors"
                              />
                            )}
                          </div>
                        ))
                      ))}
                    </div>

                    <div className="space-y-6 text-left">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="p-3 bg-accent/10 border border-accent/20 rounded-2xl text-accent glass">
                           <BookOpen size={24} />
                         </div>
                         <div>
                            <h3 className="font-black text-xl text-white">Petunjuk TTS</h3>
                            <p className="text-[10px] text-accent font-black uppercase tracking-widest">Lengkapi Kotak-Kotak Kosong</p>
                         </div>
                      </div>
                      
                      <div className="space-y-4">
                        {crosswordClues.map((clue, idx) => (
                          <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-all glass">
                             <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary font-black text-xs shrink-0">{clue.num}</div>
                             <div>
                                <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">{clue.type}</p>
                                <p className="font-bold text-white leading-tight">{clue.hint}</p>
                             </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-6 bg-white/5 rounded-3xl border border-white/10 italic text-sm text-white/50 glass">
                         "Gunakan keyboard Arabic atau ketik huruf latin yang mewakili suara huruf tersebut."
                      </div>
                    </div>
                  </div>
                )}

                {gameState.isFinished && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-primary/95 backdrop-blur-md flex flex-col items-center justify-center p-10 text-center z-50"
                  >
                    <Trophy className="text-accent w-20 h-20 mb-6 drop-shadow-[0_0_20px_rgba(201,168,76,0.5)]" />
                    <h2 className="text-4xl font-black mb-2 text-white">Mabruk!</h2>
                    <p className="text-white/60 mb-10 font-medium">Anda telah menyelesaikan sesi tantangan dengan sangat baik.</p>
                    
                    <div className="grid grid-cols-2 gap-6 w-full max-w-sm mb-12">
                       <div className="bg-white/5 p-6 rounded-3xl border border-white/10 glass">
                          <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">XP Bonus</p>
                          <p className="text-3xl font-black text-white">+{Math.floor(gameState.score / 2)}</p>
                       </div>
                       <div className="bg-white/5 p-6 rounded-3xl border border-white/10 glass">
                          <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">Koin</p>
                          <p className="text-3xl font-black text-white">+{Math.floor(gameState.score / 10)}</p>
                       </div>
                    </div>

                    <button onClick={claimRewards} className="w-full max-w-sm py-5 bg-accent text-primary font-black text-xl rounded-2xl shadow-2xl shadow-accent/20 hover:brightness-110 hover:scale-105 active:scale-95 transition-all border border-accent/50 uppercase tracking-widest">
                      Klaim Hadiah ✨
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GameItem({ title, desc, icon, difficulty, color, onPlay }: any) {
  return (
    <div className={`bg-gradient-to-br ${color} border border-accent/20 rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-8 flex flex-col h-full hover:border-accent/60 hover:bg-secondary/40 transition-all duration-500 group relative overflow-hidden shadow-xl hover:shadow-accent/5 glass`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-accent/10 transition-all duration-700" />
      
      <div className="bg-accent/10 w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10 shadow-inner border border-accent/20 glass">
        <div className="scale-75 sm:scale-100 text-accent">
          {icon}
        </div>
      </div>
      
      <div className="flex-1 space-y-2 sm:space-y-3 relative z-10 text-left">
        <div className="flex items-center gap-2">
           <span className="text-[8px] sm:text-[10px] font-black px-2 sm:px-3 py-0.5 sm:py-1 bg-black/20 text-accent rounded-full uppercase tracking-tighter border border-white/5">{difficulty}</span>
        </div>
        <h3 className="text-xs sm:text-xl md:text-2xl font-black text-white tracking-tight leading-tight">{title}</h3>
        <p className="text-white/60 text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-relaxed font-medium line-clamp-2 sm:line-clamp-none">{desc}</p>
      </div>
      
      <button 
        onClick={onPlay} 
        className="mt-4 sm:mt-8 w-full py-2.5 sm:py-4 bg-white/5 hover:bg-accent hover:text-primary rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-[8px] sm:text-[10px] transition-all relative z-10 border border-white/10 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/20 active:scale-95 glass"
      >
        Mainkan <span className="hidden sm:inline">Sekarang</span> →
      </button>
    </div>
  );
}

function StatCard({ label, value, icon }: any) {
  return (
    <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-3 glass">
      <div className="w-8 h-8 bg-white/5 rounded-xl flex items-center justify-center glass">{icon}</div>
      <div>
        <p className="text-[8px] font-black text-accent uppercase tracking-widest">{label}</p>
        <p className="text-sm font-black">{value}</p>
      </div>
    </div>
  );
}

function GameStat({ label, value, color }: any) {
  return (
    <div className="text-center">
      <p className="text-[9px] text-accent/60 font-black uppercase tracking-widest mb-1">{label}</p>
      <p className={`text-2xl font-black ${color}`}>{value}</p>
    </div>
  );
}
