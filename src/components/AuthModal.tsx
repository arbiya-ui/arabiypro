import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import { X, Mail, Lock, User, LogIn, UserPlus, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { signIn, signUp } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const translateError = (err: any) => {
    const msg = err.message || '';
    if (msg.includes('Email not confirmed')) return 'Email belum dikonfirmasi. Silakan cek kotak masuk Anda.';
    if (msg.includes('Invalid login credentials')) return 'Email atau kata sandi salah.';
    if (msg.includes('User already registered')) return 'Email sudah terdaftar.';
    if (msg.includes('Password should be at least 6 characters')) return 'Kata sandi minimal 6 karakter.';
    return msg || 'Terjadi kesalahan saat autentikasi';
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!isLogin && password !== confirmPassword) {
      setError('Konfirmasi kata sandi tidak cocok.');
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) throw error;
        onClose();
      } else {
        const { error } = await signUp(email, password, { full_name: name });
        if (error) throw error;
        setSuccess('Pendaftaran berhasil! Silakan cek email Anda untuk verifikasi.');
        setTimeout(() => {
          setIsLogin(true);
          setSuccess(null);
        }, 3000);
      }
    } catch (err: any) {
      setError(translateError(err));
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-app-primary/60 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-md bg-[#F8F9F8] rounded-[2rem] shadow-2xl overflow-hidden relative"
      >
        {/* Header decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#D4AF37]" />
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors text-black/40 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#0B3D2E]/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#0B3D2E]/10">
              {isLogin ? (
                <LogIn className="w-8 h-8 text-[#0B3D2E]" />
              ) : (
                <UserPlus className="w-8 h-8 text-[#0B3D2E]" />
              )}
            </div>
            <h2 className="text-2xl font-black text-[#0B3D2E] tracking-tight">
              {isLogin ? 'Selamat Datang' : 'Daftar Akun'}
            </h2>
            <p className="text-sm text-black/50 mt-2 font-medium">
              {isLogin ? 'Masuk untuk mengakses materi belajar Anda' : 'Mulai perjalanan belajar Bahasa Arab Anda'}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#0B3D2E]/60 ml-1 tracking-widest uppercase">NAMA LENGKAP</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/20" />
                  <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama lengkap Anda"
                    className="w-full bg-black/5 border border-black/5 rounded-xl py-3.5 pl-12 pr-4 text-black placeholder:text-black/20 focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]/10 transition-all font-medium text-sm"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-[10px] font-black text-[#0B3D2E]/60 ml-1 tracking-widest uppercase">ALAMAT EMAIL</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/20" />
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@contoh.com"
                  className="w-full bg-black/5 border border-black/5 rounded-xl py-3.5 pl-12 pr-4 text-black placeholder:text-black/20 focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]/10 transition-all font-medium text-sm"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-[#0B3D2E]/60 ml-1 tracking-widest uppercase">KATA SANDI</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/20" />
                <input 
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black/5 border border-black/5 rounded-xl py-3.5 pl-12 pr-4 text-black placeholder:text-black/20 focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]/10 transition-all font-medium text-sm"
                />
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#0B3D2E]/60 ml-1 tracking-widest uppercase">KONFIRMASI KATA SANDI</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/20" />
                  <input 
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-black/5 border border-black/5 rounded-xl py-3.5 pl-12 pr-4 text-black placeholder:text-black/20 focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]/10 transition-all font-medium text-sm"
                  />
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-xs font-bold"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p>{error}</p>
                </motion.div>
              )}

              {success && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-600 text-xs font-bold"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <p>{success}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 text-white py-4 rounded-xl font-black text-xs tracking-[0.2em] uppercase shadow-xl shadow-[#0B3D2E]/10 transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center gap-3 mt-6"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isLogin ? (
                <>MASUK <LogIn className="w-4 h-4" /></>
              ) : (
                <>DAFTAR SEKARANG <UserPlus className="w-4 h-4" /></>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
                setSuccess(null);
              }}
              className="text-xs font-bold text-black/40 hover:text-[#D4AF37] transition-colors uppercase tracking-wider"
            >
              {isLogin ? (
                <>Belum punya akun? <span className="text-[#D4AF37] ml-1">Daftar di sini</span></>
              ) : (
                <>Sudah punya akun? <span className="text-[#D4AF37] ml-1">Masuk di sini</span></>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthModal;
