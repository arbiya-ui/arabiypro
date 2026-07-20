const fs = require('fs');
const content = fs.readFileSync('src/data/lessons/l2_5.ts', 'utf8');

const introContent = `
    introduction: "Sungguh menakjubkan melihat seberapa jauh Anda telah melangkah melintasi samudera ilmu perjalanan di Bab 4. Sekarang, perjalanan itu membawa Anda ke gerbang profesionalisme di Bab 5: Al-Mihnah (Pekerjaan & Karir). Di bab ini, kita akan meningkatkan level bahasa Arab Anda ke ranah formal, bisnis, dunia kerja modern, serta administrasi perkantoran.\\n\\nAnda akan dipandu untuk menguasai komunikasi dalam wawancara kerja (muqaabalatul 'amal), menulis daftar riwayat hidup (siiratun dzaatiyyatun), hingga berinteraksi dengan direktur (mudiir). Di pilar tata bahasa, kita akan membedah 'Masdar'—kata benda abstrak hasil bentukan kata kerja (verbal noun) yang merupakan jantung dari morfologi bahasa Arab (Shorof). Memahami Masdar akan melipatgandakan kosakata Anda secara instan.\\n\\nDunia karir menanti para profesional yang memiliki keahlian bahasa Arab yang fasih dan diplomatis. Selesaikan modul karir ini dengan performa terbaik Anda, karena kemahiran berbahasa formal ini akan menjadi modal vital saat kita memasuki Bab 6, di mana Anda akan belajar membaca, mencerna, dan menganalisis berita serta informasi dari media massa Arab!",
    introTitle: "Membangun Masa Depan: Bahasa Arab di Dunia Kerja",
    introVerse: {
      ar: "وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ",
      translation: "Dan Katakanlah: 'Bekerjalah kamu, maka Allah dan Rasul-Nya serta orang-orang mukmin akan melihat pekerjaanmu itu'. (QS. At-Taubah: 105)"
    },
    introBadges: [
      { icon: "💼", text: "PROFESIONAL MUDA (Mahir berkomunikasi di lingkungan kantor)" },
      { icon: "📜", text: "MASTER MASDAR (Kuasai akar kata benda untuk bahasa formal)" }
    ],
`;

const updatedContent = content.replace('content: {', 'content: {' + introContent);
fs.writeFileSync('src/data/lessons/l2_5.ts', updatedContent);
