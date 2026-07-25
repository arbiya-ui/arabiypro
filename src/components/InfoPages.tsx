import React from 'react';
import { motion } from 'motion/react';
import { 
  HelpCircle, 
  ShieldCheck, 
  FileText, 
  Mail, 
  MessageCircle, 
  Globe, 
  Instagram, 
  Twitter, 
  ExternalLink, 
  ChevronRight,
  Book,
  Smartphone,
  Star,
  Zap,
  ArrowLeft,
  CheckCircle
} from 'lucide-react';

interface InfoPagesProps {
  type: 'Bantuan' | 'Privasi' | 'Syarat' | 'Kontak';
  onClose: () => void;
}

export const InfoContent: React.FC<InfoPagesProps> = ({ type, onClose }) => {
  const [appSettings, setAppSettings] = React.useState({
    contacts: {
      email: "support@arabiypro.id",
      whatsapp: "+62 812-3456-7890",
      instagram: "@arabiypro.official",
      twitter: "@arabiy_pro"
    },
    office: {
      name: "Gedung Al-Azhar Digital Hub",
      address: "Jl. Sisingamangaraja No. 1, Kebayoran Baru, Jakarta Selatan, 12110."
    }
  });

  React.useEffect(() => {
    const saved = localStorage.getItem('app_settings');
    if (saved) setAppSettings(JSON.parse(saved));
  }, []);

  const [showLeadForm, setShowLeadForm] = React.useState(false);
  const [leadData, setLeadData] = React.useState({
    name: "",
    phone: "",
    address: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newLead = {
        id: Date.now().toString(),
        ...leadData,
        timestamp: new Date().toISOString(),
        status: 'unread'
      };
      
      const existingLeads = JSON.parse(localStorage.getItem('support_leads') || '[]');
      localStorage.setItem('support_leads', JSON.stringify([newLead, ...existingLeads]));
      
      setIsSubmitting(false);
      setShowSuccess(true);
      setLeadData({ name: "", phone: "", address: "", message: "" });
    }, 1000);
  };

  const renderSuccess = () => (
    <div className="flex flex-col items-center justify-center py-10 space-y-6 animate-in fade-in zoom-in-95 duration-500">
      <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 relative">
        <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping opacity-25"></div>
        <CheckCircle className="w-10 h-10" />
      </div>
      <div className="text-center space-y-2">
        <h4 className="text-lg font-black text-app-primary dark:text-white uppercase tracking-tight">Pesan Terkirim!</h4>
        <p className="text-[11px] text-[#0B3D2E]/60 dark:text-white/60 font-bold leading-relaxed max-w-[240px] mx-auto">
          Terima kasih telah menghubungi kami. Admin ArabiyPro akan membalas pesan Anda secepatnya melalui WhatsApp.
        </p>
      </div>
      <button 
        onClick={() => {
          setShowSuccess(false);
          setShowLeadForm(false);
        }}
        className="px-8 py-3 bg-app-accent text-white font-black text-[10px] uppercase tracking-widest rounded-xl shadow-lg shadow-app-accent/20 hover:scale-105 transition-all"
      >
        KEMBALI KE BANTUAN
      </button>
    </div>
  );

  const renderLeadForm = () => (
    <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
      {showSuccess ? renderSuccess() : (
        <>
      <div className="flex items-center gap-3 mb-2">
        <button 
          onClick={() => setShowLeadForm(false)}
          className="w-8 h-8 rounded-full bg-app-accent/10 flex items-center justify-center text-app-accent hover:bg-app-accent/20 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h4 className="text-sm font-black text-app-primary dark:text-white uppercase">Formulir Bantuan</h4>
      </div>
      
      <form onSubmit={handleSubmitLead} className="space-y-3">
        <div className="space-y-1">
          <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Nama Lengkap</label>
          <input 
            required
            type="text" 
            value={leadData.name}
            onChange={(e) => setLeadData({...leadData, name: e.target.value})}
            className="w-full px-4 py-2.5 bg-white dark:bg-white/5 border border-app-border dark:border-white/10 rounded-xl text-xs outline-none focus:border-app-accent"
            placeholder="Masukkan nama Anda..."
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Nomor WhatsApp</label>
          <input 
            required
            type="tel" 
            value={leadData.phone}
            onChange={(e) => setLeadData({...leadData, phone: e.target.value})}
            className="w-full px-4 py-2.5 bg-white dark:bg-white/5 border border-app-border dark:border-white/10 rounded-xl text-xs outline-none focus:border-app-accent"
            placeholder="Contoh: 0812xxxx"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Alamat (Opsional)</label>
          <input 
            type="text" 
            value={leadData.address}
            onChange={(e) => setLeadData({...leadData, address: e.target.value})}
            className="w-full px-4 py-2.5 bg-white dark:bg-white/5 border border-app-border dark:border-white/10 rounded-xl text-xs outline-none focus:border-app-accent"
            placeholder="Masukkan alamat singkat..."
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Pesan / Masalah</label>
          <textarea 
            required
            value={leadData.message}
            onChange={(e) => setLeadData({...leadData, message: e.target.value})}
            className="w-full h-24 px-4 py-2.5 bg-white dark:bg-white/5 border border-app-border dark:border-white/10 rounded-xl text-xs outline-none focus:border-app-accent resize-none"
            placeholder="Apa yang bisa kami bantu?"
          />
        </div>
        
        <button 
          disabled={isSubmitting}
          type="submit"
          className="w-full py-3 bg-app-accent text-white font-black uppercase text-[10px] tracking-widest rounded-xl shadow-lg shadow-app-accent/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
        >
          {isSubmitting ? "MENGIRIM..." : "KIRIM PESAN SEKARANG"}
        </button>
      </form>
      </>
      )}
    </div>
  );

  const renderBantuan = () => (
    <div className="space-y-6 text-left">
      {showLeadForm ? renderLeadForm() : (
        <>
      <div className="space-y-4">
        <h4 className="text-app-accent font-black text-xs uppercase tracking-[0.2em]">Pertanyaan Umum (FAQ)</h4>
        
        <div className="space-y-3">
          {[
            { q: "Bagaimana cara memulai belajar?", a: "Klik menu 'Belajar' di navigasi bawah, pilih Level 1, dan mulailah dari Bab 1: Huruf Hijaiyah." },
            { q: "Apakah ArabiyPro gratis?", a: "Ya, Level 1 tersedia secara gratis. Untuk akses penuh Level 2-4 dan fitur AI tanpa batas, Anda perlu berlangganan Premium." },
            { q: "Bagaimana cara kerja AI Tutor?", a: "AI Tutor (Ustadz Ahmad) membantu Anda berlatih percakapan real-time dan memberikan koreksi tata bahasa secara instan." },
            { q: "Sertifikat didapatkan kapan?", a: "Sertifikat digital diberikan secara otomatis setelah Anda menuntaskan ujian akhir di setiap Level." }
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-app-accent/5 border border-app-accent/10 rounded-2xl space-y-1">
              <p className="text-app-primary dark:text-app-accent font-black text-xs">{item.q}</p>
              <p className="text-[#0B3D2E]/60 dark:text-white/60 text-[11px] leading-relaxed font-bold">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 bg-app-accent rounded-[2rem] text-white space-y-3 shadow-xl shadow-app-accent/20">
        <div className="flex items-center gap-3">
          <Smartphone className="w-5 h-5" />
          <p className="text-[11px] font-black uppercase tracking-widest">Butuh Bantuan Langsung?</p>
        </div>
        <p className="text-[10px] leading-relaxed font-bold opacity-90">Tim support kami siap membantu Anda 24/7 melalui WhatsApp atau Email.</p>
        <button 
          onClick={() => setShowLeadForm(true)}
          className="w-full py-3 bg-white text-app-accent rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-opacity-90 transition-all"
        >
          Hubungi CS ArabiyPro
        </button>
      </div>
      </>
      )}
    </div>
  );

  const renderPrivasi = () => (
    <div className="space-y-6 text-left">
      <div className="space-y-4">
        <p className="text-[#0B3D2E]/70 dark:text-white/70 text-xs leading-relaxed font-medium">
          Keamanan data Anda adalah prioritas utama kami. ArabiyPro berkomitmen melindungi privasi setiap pengguna.
        </p>

        <div className="space-y-4">
          {[
            { icon: ShieldCheck, title: "Data Pribadi", desc: "Kami hanya menyimpan nama, email, dan progres belajar Anda untuk kebutuhan sinkronisasi akun." },
            { icon: Globe, title: "Penyimpanan Lokal", desc: "Sebagian besar data interaksi AI dan latihan disimpan di perangkat Anda untuk kecepatan akses." },
            { icon: FileText, title: "Keamanan Akun", desc: "Kami menggunakan enkripsi standar industri untuk melindungi kredensial login Anda." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-app-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-app-accent" />
              </div>
              <div className="space-y-1">
                <h5 className="text-app-primary dark:text-white font-black text-xs uppercase tracking-wider">{item.title}</h5>
                <p className="text-[#0B3D2E]/60 dark:text-white/60 text-[10px] leading-relaxed font-bold">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-app-accent/10">
        <p className="text-[9px] text-[#0B3D2E]/40 dark:text-white/40 italic font-medium">
          Terakhir diperbarui: 23 Juli 2026. Dengan menggunakan aplikasi ini, Anda menyetujui kebijakan privasi kami.
        </p>
      </div>
    </div>
  );

  const renderSyarat = () => (
    <div className="space-y-6 text-left">
      <div className="space-y-4 overflow-y-auto max-h-[300px] pr-2 scrollbar-thin scrollbar-thumb-app-accent/20">
        <div className="space-y-3">
          <h5 className="text-app-primary dark:text-white font-black text-xs uppercase tracking-wider">1. Penggunaan Layanan</h5>
          <p className="text-[#0B3D2E]/60 dark:text-white/60 text-[10px] leading-relaxed font-medium">
            Pengguna setuju untuk menggunakan ArabiyPro hanya untuk tujuan pembelajaran bahasa Arab yang sah dan bermartabat.
          </p>

          <h5 className="text-app-primary dark:text-white font-black text-xs uppercase tracking-wider">2. Langganan Premium</h5>
          <p className="text-[#0B3D2E]/60 dark:text-white/60 text-[10px] leading-relaxed font-medium">
            Pembayaran untuk akses Premium bersifat final dan tidak dapat diuangkan kembali, kecuali dalam kondisi teknis khusus yang disetujui admin.
          </p>

          <h5 className="text-app-primary dark:text-white font-black text-xs uppercase tracking-wider">3. Hak Kekayaan Intelektual</h5>
          <p className="text-[#0B3D2E]/60 dark:text-white/60 text-[10px] leading-relaxed font-medium">
            Seluruh konten materi, desain, dan kurikulum dalam ArabiyPro adalah milik eksklusif platform dan dilindungi undang-undang.
          </p>

          <h5 className="text-app-primary dark:text-white font-black text-xs uppercase tracking-wider">4. Batasan Tanggung Jawab</h5>
          <p className="text-[#0B3D2E]/60 dark:text-white/60 text-[10px] leading-relaxed font-medium">
            Platform tidak bertanggung jawab atas kesalahan penafsiran materi oleh pengguna di luar konteks pembelajaran yang disediakan.
          </p>
        </div>
      </div>

      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 rounded-2xl">
        <p className="text-[10px] text-yellow-700 dark:text-yellow-500 font-bold leading-relaxed">
          PENTING: Pelanggaran terhadap syarat & ketentuan dapat berakibat pada penangguhan akun secara permanen.
        </p>
      </div>
    </div>
  );

  const renderKontak = () => (
    <div className="space-y-6 text-left">
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: Mail, label: "Email Support", value: appSettings.contacts.email, color: "bg-blue-500" },
          { icon: MessageCircle, label: "WhatsApp", value: appSettings.contacts.whatsapp, color: "bg-green-500" },
          { icon: Instagram, label: "Instagram", value: appSettings.contacts.instagram, color: "bg-pink-500" },
          { icon: Twitter, label: "Twitter / X", value: appSettings.contacts.twitter, color: "bg-black" }
        ].map((item, idx) => (
          <div key={idx} className="p-4 bg-white dark:bg-white/5 border border-app-accent/10 rounded-2xl space-y-2 hover:border-app-accent transition-all cursor-pointer group">
            <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center text-white shadow-lg shadow-black/5 group-hover:scale-110 transition-transform`}>
              <item.icon className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <p className="text-[9px] text-[#0B3D2E]/40 dark:text-white/40 font-black uppercase tracking-widest">{item.label}</p>
              <p className="text-[10px] text-app-primary dark:text-white font-bold truncate">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 pt-2">
        <h5 className="text-app-primary dark:text-white font-black text-xs uppercase tracking-wider text-center">Lokasi Kantor Kami</h5>
        <div className="p-4 bg-app-accent/5 border border-app-accent/10 rounded-2xl flex items-start gap-3">
          <Globe className="w-5 h-5 text-app-accent mt-0.5 shrink-0" />
          <div className="space-y-1">
            <p className="text-app-primary dark:text-white font-black text-[11px]">{appSettings.office.name}</p>
            <p className="text-[#0B3D2E]/60 dark:text-white/60 text-[10px] leading-relaxed font-medium">{appSettings.office.address}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 bg-app-accent/10 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
          {type === 'Bantuan' ? '🎧' : type === 'Privasi' ? '🔒' : type === 'Syarat' ? '📝' : '📞'}
        </div>
        <div>
          <h3 className="text-xl font-black text-app-primary dark:text-white tracking-tight leading-none">{type}</h3>
          <p className="text-[10px] text-app-accent font-black uppercase tracking-[0.3em] mt-1">ArabiyPro Support</p>
        </div>
      </div>

      <div className="min-h-[200px] max-h-[420px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-app-accent/20 scrollbar-track-transparent">
        {type === 'Bantuan' && renderBantuan()}
        {type === 'Privasi' && renderPrivasi()}
        {type === 'Syarat' && renderSyarat()}
        {type === 'Kontak' && renderKontak()}
      </div>

      <button 
        onClick={onClose}
        className="w-full py-4 bg-app-primary text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-app-primary/20 cursor-pointer active:scale-95 flex items-center justify-center gap-2"
      >
        Tutup Halaman
      </button>
    </div>
  );
};
