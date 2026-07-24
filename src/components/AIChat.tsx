import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Mic, MicOff, Volume2, X, Play, Square } from 'lucide-react';
import { UserProfile } from '../types';
import { speakArabic, isSpeaking, stopSpeech, getAudioSpeed, setAudioSpeed } from '../lib/speech';

interface Props {
  userProfile: UserProfile;
  onUpdateXp: (amount: number) => void;
  initialScenarioId?: string;
  onNavigate: (tabId: any, params?: any) => void;
}

export default function AIChat({ userProfile, onUpdateXp, initialScenarioId, onNavigate }: Props) {
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

  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { role: 'ai', content: `السلام عليكم ${userProfile.name}! Saya Ustadz Ahmad. Mari kita belajar Bahasa Arab hari ini.` }
  ]);
  const [input, setInput] = useState('');
  const [inputLang, setInputLang] = useState<'id-ID' | 'ar-SA'>('id-ID');
  const [loading, setLoading] = useState(false);
  const [voice, setVoice] = useState<'Ahmad' | 'Fatimah'>('Ahmad');
  const [selectedScenario, setSelectedScenario] = useState<string | null>(initialScenarioId || null);
  const [speed, setSpeed] = useState(getAudioSpeed());
  const [currentlySpeaking, setCurrentlySpeaking] = useState<number | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scenarios = [
    { id: 'market', title: 'Di Pasar', icon: '🛒', prompt: 'Kita sedang di pasar tradisional. Kamu ingin membeli buah-buahan dan sayuran. Mari tawar-menawar.' },
    { id: 'mosque', title: 'Di Masjid', icon: '🕌', prompt: 'Kita sedang di masjid. Kamu ingin bertanya tentang waktu shalat atau arah kiblat.' },
    { id: 'school', title: 'Di Sekolah', icon: '🏫', prompt: 'Kita sedang di sekolah. Kamu adalah siswa baru yang ingin berkenalan dengan teman sekelas.' },
    { id: 'restaurant', title: 'Di Restoran', icon: '🍽️', prompt: 'Kita sedang di restoran. Kamu ingin memesan makanan khas Timur Tengah.' },
    { id: 'interview', title: 'Wawancara Kerja', icon: '💼', prompt: 'Kamu sedang melamar pekerjaan sebagai guru Bahasa Arab. Saya adalah pewawancaranya.' },
    { id: 'airport', title: 'Di Bandara', icon: '✈️', prompt: 'Kita sedang di bandara. Kamu ingin check-in atau bertanya tentang jadwal penerbangan.' },
    { id: 'hospital', title: 'Di Rumah Sakit', icon: '🏥', prompt: 'Kamu sedang tidak enak badan dan ingin berkonsultasi dengan dokter.' },
    { id: 'hotel', title: 'Di Hotel', icon: '🏨', prompt: 'Kamu ingin memesan kamar atau menanyakan fasilitas hotel.' }
  ];

  useEffect(() => {
    if (selectedScenario) {
      const scenario = scenarios.find(s => s.id === selectedScenario);
      if (scenario) {
        setMessages([
          { role: 'ai', content: `السلام عليكم ${userProfile.name}! Skenario kita hari ini: ${scenario.title}.\n${scenario.prompt}` }
        ]);
      }
    }
  }, [selectedScenario]);

  useEffect(() => {
    setAudioSpeed(speed);
  }, [speed]);

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Speech Recognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = inputLang;

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(prev => prev + (prev ? ' ' : '') + transcript);
        setIsRecording(false);
      };

      recognitionRef.current.onerror = () => {
        setIsRecording(false);
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }
  }, []);

  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
    } else {
      if (recognitionRef.current) {
        recognitionRef.current.lang = inputLang;
      }
      setIsRecording(true);
      recognitionRef.current?.start();
    }
  };

  const speak = (text: string, index?: number) => {
    if (index !== undefined) {
      if (currentlySpeaking === index) {
        stopSpeech();
        setCurrentlySpeaking(null);
        return;
      }
      setCurrentlySpeaking(index);
    }
    
    const gender = voice.toLowerCase() === 'ahmad' ? 'male' : 'female';
    speakArabic(text, speed, gender, () => {
      if (index !== undefined) setCurrentlySpeaking(null);
    });
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user' as const, content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const currentScenario = scenarios.find(s => s.id === selectedScenario);
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, userMsg], 
          voice,
          scenarioPrompt: currentScenario?.prompt || null
        })
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        setMessages((prev) => [...prev, { role: 'ai', content: data.error || "Maaf, terjadi kesalahan teknis. Coba lagi nanti." }]);
        return;
      }

      const aiMsg = { role: 'ai' as const, content: data.response };
      setMessages((prev) => [...prev, aiMsg]);
      speak(data.response, messages.length + 1);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: 'ai', content: "Koneksi terputus. Pastikan internet Anda aktif." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full md:h-[650px] w-full max-w-3xl mx-auto bg-premium-navy-dark md:rounded-3xl border-x md:border border-accent/20 overflow-hidden glass shadow-2xl transition-all duration-500 relative">
      {/* Premium Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent z-20 opacity-50" />
      
      <div className="p-4 md:p-5 border-b border-accent/10 flex flex-col gap-4 bg-secondary/80 backdrop-blur-md sticky top-0 z-10 glass">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-accent/10 flex items-center justify-center border border-accent/30 shadow-[0_0_15px_rgba(201,168,76,0.2)] glass">
              <Bot className="text-accent" size={18} />
            </div>
            <div>
              <h2 className="text-base md:text-lg font-black text-white leading-none">Ustadz {voice}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[9px] md:text-[10px] text-accent font-black uppercase tracking-widest block">Tutor AI Premium</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setVoice(v => v === 'Ahmad' ? 'Fatimah' : 'Ahmad')}
              className="text-[9px] md:text-[10px] font-black px-3 md:px-4 py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-full hover:bg-accent/20 hover:border-accent/30 transition-all text-white uppercase tracking-wider shadow-sm glass"
            >
              Ustadzah {voice === 'Ahmad' ? 'Fatimah' : 'Ahmad'}
            </button>
          </div>
        </div>

        {/* SCENARIO PICKER */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar scroll-smooth snap-x">
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedScenario(s.id)}
              className={`
                px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest whitespace-nowrap border-2 flex items-center gap-2 transition-all snap-start glass
                ${selectedScenario === s.id 
                  ? "bg-accent border-accent text-primary shadow-lg shadow-accent/20" 
                  : "bg-white/5 border-white/5 text-white/40 hover:border-accent/30 hover:text-white"
                }
              `}
            >
              <span>{s.icon}</span>
              {s.title}
            </button>
          ))}
          <button
            onClick={() => setSelectedScenario(null)}
            className={`
              px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest whitespace-nowrap border-2 flex items-center gap-2 transition-all snap-start glass
              ${selectedScenario === null 
                ? "bg-accent border-accent text-primary shadow-lg shadow-accent/20" 
                : "bg-white/5 border-white/5 text-white/40 hover:border-accent/30 hover:text-white"
              }
            `}
          >
            <span>💬</span> Bebas
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scrollbar-none bg-gradient-to-b from-transparent to-black/20 pb-10 md:pb-6">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-start gap-2 md:gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 md:w-9 md:h-9 rounded-xl flex items-center justify-center shadow-lg transition-transform hover:scale-110 ${
                m.role === 'user' 
                  ? 'bg-accent border border-accent/30' 
                  : 'bg-secondary border border-accent/20'
              }`}>
                {m.role === 'user' ? <User className="text-primary" size={16} /> : <Bot className="text-accent" size={16} />}
              </div>
              <div className={`p-3 md:p-4 rounded-2xl max-w-[88%] shadow-md relative group glass ${
                m.role === 'user' 
                  ? 'bg-accent/10 border border-accent/20 rounded-tr-none' 
                  : 'bg-white/[0.05] border border-white/5 rounded-tl-none hover:border-accent/20'
              }`}>
                {m.role === 'ai' && (
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent rounded-l-2xl opacity-40" />
                )}
                <div className={`${m.role === 'ai' ? 'leading-relaxed' : 'text-sm font-bold'}`}>
                  {m.role === 'user' ? (
                    <span className="text-accent font-black text-sm md:text-lg">{m.content}</span>
                  ) : (
                    (m.content || "").split('\n').map((line, idx) => {
                      const isArabic = /[\u0600-\u06FF]/.test(line);
                      return (
                        <div 
                          key={idx} 
                          className={isArabic 
                            ? "text-accent arabic-text text-lg md:text-3xl mb-2 drop-shadow-[0_0_10px_rgba(201,168,76,0.3)] font-bold" 
                            : "text-white/70 text-[10px] md:text-sm italic font-semibold mt-1"}
                          dir={isArabic ? "rtl" : "ltr"}
                        >
                          {line}
                        </div>
                      );
                    })
                  )}
                </div>
                {m.role === 'ai' && (
                  <div className="mt-2 flex justify-end pr-1">
                    <button 
                      onClick={() => speak(m.content, i)}
                      className={`p-1.5 rounded-full transition-all ${
                        currentlySpeaking === i 
                          ? 'text-ruby bg-ruby/10 scale-110' 
                          : 'text-accent hover:text-white hover:bg-accent/20'
                      }`}
                      title={currentlySpeaking === i ? "Berhenti" : "Dengarkan Suara"}
                    >
                      {currentlySpeaking === i ? (
                        <div className="flex items-center gap-0.5 h-3 md:h-5">
                          <div className="w-1 bg-ruby animate-[bounce_0.6s_infinite_0ms]" style={{ height: '60%' }} />
                          <div className="w-1 bg-ruby animate-[bounce_0.6s_infinite_200ms]" style={{ height: '100%' }} />
                          <div className="w-1 bg-ruby animate-[bounce_0.6s_infinite_400ms]" style={{ height: '80%' }} />
                        </div>
                      ) : (
                        <Volume2 className="w-4 h-4 md:w-5 md:h-5" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-3 animate-pulse">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-secondary border border-accent/20 flex items-center justify-center glass">
              <Loader2 className="w-4 h-4 md:w-5 md:h-5 text-accent animate-spin" />
            </div>
            <span className="text-[10px] md:text-xs text-accent/70 font-black italic tracking-wide">Ustadz sedang mengetik...</span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area: Adjusted for Mobile Navigation - Fixed above bottom nav */}
      <div className="relative p-2 md:p-5 border-t border-white/10 bg-primary/95 md:bg-primary/90 backdrop-blur-xl md:backdrop-blur-md z-40 glass">
        <div className="max-w-3xl mx-auto flex items-center gap-2 md:gap-3">
          {/* Input Field */}
          <div className="flex-1 relative">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder={isRecording ? "Mendengarkan..." : "Ketik Bahasa Arab..."}
              className={`w-full bg-white/[0.05] border p-2.5 md:p-4 rounded-xl md:rounded-2xl text-white text-xs md:text-base placeholder:text-white/20 focus:outline-none transition-all glass-dark ${
                isRecording 
                  ? 'border-ruby/50 ring-2 ring-ruby/20' 
                  : 'border-white/10 focus:ring-2 focus:ring-accent/50 focus:border-accent/50'
              }`} 
            />
          </div>

          {/* Action Buttons: Compact on Mobile */}
          <div className="flex items-center gap-1.5 md:gap-2">
            {/* Language Toggle */}
            <div className="flex bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-1 glass overflow-hidden">
              <button
                onClick={() => setInputLang('id-ID')}
                className={`px-2 md:px-3 py-1 text-[10px] md:text-xs font-black transition-all rounded-lg ${
                  inputLang === 'id-ID' 
                    ? 'bg-accent text-primary shadow-sm' 
                    : 'text-white/40 hover:text-white'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setInputLang('ar-SA')}
                className={`px-2 md:px-3 py-1 text-[10px] md:text-xs font-black transition-all rounded-lg ${
                  inputLang === 'ar-SA' 
                    ? 'bg-accent text-primary shadow-sm' 
                    : 'text-white/40 hover:text-white'
                }`}
              >
                AR
              </button>
            </div>

            <button 
              onClick={toggleRecording}
              className={`p-2.5 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300 flex items-center justify-center shadow-lg transform active:scale-90 glass ${
                isRecording 
                  ? 'bg-ruby text-white animate-pulse shadow-[0_0_20px_rgba(233,69,96,0.4)]' 
                  : 'bg-white/5 text-accent hover:bg-accent/10 border border-white/10'
              }`}
              title={isRecording ? 'Berhenti' : 'Rekam Suara'}
            >
              {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
              <span className="hidden md:inline ml-2 text-xs font-black">{isRecording ? 'Berhenti' : 'Suara'}</span>
            </button>

            <button 
              onClick={sendMessage} 
              disabled={loading || !input.trim()} 
              className="p-2.5 md:p-4 bg-accent text-primary rounded-xl md:rounded-2xl hover:brightness-110 hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] disabled:opacity-30 disabled:hover:shadow-none transition-all duration-300 transform active:scale-95 shadow-lg flex items-center justify-center gap-2 border border-accent/50 font-black"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              <span className="hidden md:inline text-xs font-black uppercase tracking-wider">Kirim</span>
            </button>
          </div>
        </div>
        {/* Safe Area Spacer for iOS */}
        <div className="h-1 md:hidden" />
      </div>
    </div>
  );
}
