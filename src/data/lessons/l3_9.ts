import { Lesson } from "../../types";

export const l3_9: Lesson = {
  id: "l3_9",
  title: "[PREMIUM] BAB 9: IMTIHAN AL-MUTAQADDIM",
  titleAr: "إmتحان المتقدم",
  description:
    "Ujian komprehensif: 150 soal; Essay 500 kata; Analisis teks gundul; Percakapan AI 15 menit.",
  xpReward: 150,
  isCompleted: false,
  isLocked: true,
  type: "quran",
  content: {
    introduction:
      "Allahu Akbar! Sungguh perjalanan ilmiah yang sangat mulia dan berkelas tinggi telah Anda tuntaskan dari Bab 1 hingga Bab 8 di Level 3 Al-Mutaqaddim ini. Kini, tibalah saat yang paling mendebarkan sekaligus paling dinanti: Bab 9: Imtihan Al-Mutaqaddim (Ujian Akhir Lanjut). Ini adalah gerbang pembuktian akhir untuk menakar seberapa dalam akar keilmuan bahasa Arab yang telah menghujam di dalam dada Anda.\n\nUjian akhir komprehensif ini dirancang dengan standar akademis tingkat tinggi, mencakup 150 soal evaluasi mendalam yang menguji penguasaan I'rab Nahwu, konjugasi Shorof, seni keindahan Balaghah, pembacaan teks kitab gundul, penulisan essay ilmiah, hingga teknik penerjemahan dan diskusi lisan yang telah Anda pelajari. Setiap soal di sini adalah cerminan dari tetesan keringat, waktu belajar, dan kesungguhan yang telah Anda investasikan selama ini.\n\nKelulusan minimal 80% dalam ujian akhir ini bukan sekadar angka biasa; ia adalah tiket ijazah emas Anda untuk membuka Sertifikat Kompetensi Tingkat Lanjut, serta satu-satunya kunci untuk membuka level pamungkas Level 4 (Al-Mahir) yang legendaris. Siapkan mental Anda, bersandarlah kepada Sang Pemilik Ilmu, mulailah dengan doa yang tulus, dan tunjukkan pada dunia bahwa Anda layak menyandang gelar kehormatan ini. Selamat berjuang, semoga Allah memberikan kemudahan dan kesuksesan mutlak!",
    introTitle: "Gerbang Keagungan: Ujian Pamungkas Al-Mutaqaddim",
    introVerse: {
      ar: "وَقُلْ رَبِّ زِدْنِي عِلْمًا",
      translation: "Dan katakanlah: 'Ya Tuhanku, tambahkanlah kepadaku ilmu pengetahuan'. (QS. Thaha: 114)"
    },
    introBadges: [
      { icon: "🏆", text: "PENANTANG SEJATI (Siap taklukkan evaluasi tingkat lanjut)" },
      { icon: "📜", text: "AL-MAHIR CANDIDATE (Selangkah lagi menuju tahta ahli mutlak)" }
    ],
    cards: [
      {
        id: "l3_9_c1",
        wordAr: "شَهَادَةٌ",
        transliteration: "Syahaadatun",
        translation: "Sertifikat / Ijazah",
        description: "Tanda bukti kelulusan tingkat lanjut Al-Mutaqaddim.",
      },
      {
        id: "l3_9_c2",
        wordAr: "نَجَاحٌ",
        transliteration: "Najaahun",
        translation: "Kesuksesan / Kelulusan",
        description: "Hasil yang diharapkan dari usaha keras.",
      },
    ],
    quiz: [
      {
        id: "q3_9_1",
        question:
          "Berapa passing grade (nilai kelulusan) untuk Ujian Level 3 ini?",
        options: ["60%", "70%", "75%", "80%"],
        correctAnswer: "80%",
        explanation:
          "Sesuai standar kurikulum, Ujian Akhir Level 3 memerlukan nilai minimal 80%.",
        type: "multiple-choice",
      },
      {
        id: "q3_9_2",
        question: "Gelar apa yang didapatkan setelah lulus Level 3?",
        options: ["Al-Mubtadi", "Al-Mutawassit", "Al-Mutaqaddim", "Al-Mahir"],
        correctAnswer: "Al-Mutaqaddim",
        explanation: "Level 3 adalah tingkat Al-Mutaqaddim (Lanjut).",
        type: "multiple-choice",
      },
    ],
  },
};
