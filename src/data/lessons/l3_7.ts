import { Lesson } from "../../types";

export const l3_7: Lesson = {
  id: "l3_7",
  title: "[PREMIUM] BAB 7: AL-KITABAH AL-MUTAQADDIMAH",
  titleAr: "الكتابة المتقدمة",
  description:
    "Menulis essay argumentatif, surat resmi & akademik; Gaya penulisan Modern (MSA).",
  xpReward: 60,
  isCompleted: false,
  isLocked: true,
  type: "conversation",
  content: {
    introduction:
      "Selamat atas kesuksesan luar biasa Anda dalam menembus batas membaca teks gundul pada Bab 6! Jika membaca adalah seni mencerna ilmu, maka menulis adalah seni membagikan ilmu tersebut kepada dunia. Selamat datang di Bab 7: Al-Kitabah Al-Mutaqaddimah. Di bab ini, kita akan bertransisi dari penikmat teks menjadi produsen teks Arab yang otoritatif, ilmiah, dan berkelas dunia.\n\nAnda akan dibimbing melintasi kaidah menulis essay argumentatif (Maqaal) yang koheren, menyusun surat resmi kenegaraan atau akademik (Risaalatun Rasmiyyatun) dengan diksi diplomatis yang sangat santun, hingga menyusun proposal ilmiah menggunakan standar Modern Standard Arabic (MSA). Kita akan mempelajari bagaimana menyatukan gagasan demi gagasan menggunakan kata penghubung (adawaatur rabth) yang khas, sehingga tulisan Anda mengalir dengan logika yang kokoh dan gaya bahasa yang anggun.\n\nKemampuan menulis dengan standar akademik adalah bukti nyata bahwa Anda telah naik kelas menjadi seorang pemikir dalam bahasa Arab. Tulislah setiap baris kalimat di bab ini dengan penuh ketelitian dan kebanggaan, karena karya tulis ilmiah yang Anda ciptakan di sini akan langsung melatih kelancaran lidah dan analisis lisan Anda pada Bab 8, di mana kita akan mempraktikkan terjemahan langsung dan diskusi ilmiah lisan!",
    introTitle: "Pena Sang Ilmuwan: Menulis Essay & Korespondensi Resmi",
    introVerse: {
      ar: "نُونَ وَالْقَلَمِ وَمَا يَسْطُرُونَ",
      translation: "Nun, demi kalam dan apa yang mereka tulis. (QS. Al-Qalam: 1)"
    },
    introBadges: [
      { icon: "🖋️", text: "PENULIS ILMIAH (Susun essay akademik dengan standar MSA)" },
      { icon: "🏛️", text: "DIPLOMAT BAHASA (Mahir surat-menyurat resmi yang elegan)" }
    ],
    cards: [
      {
        id: "l3_7_c1",
        wordAr: "مَقَالٌ",
        transliteration: "Maqaalun",
        translation: "Artikel / Essay",
        description: "Tulisan ilmiah atau opini.",
      },
      {
        id: "l3_7_c2",
        wordAr: "رِسَالَةٌ رَسْمِيَّةٌ",
        transliteration: "Risaalatun rasmiyyatun",
        translation: "Surat Resmi",
        description: "Korespondensi formal.",
      },
      {
        id: "l3_7_c3",
        wordAr: "مُقَدِّمَةٌ",
        transliteration: "Muqaddimatun",
        translation: "Pendahuluan",
        description: "Bagian awal tulisan.",
      },
      {
        id: "l3_7_c4",
        wordAr: "خَاتِمَةٌ",
        transliteration: "Khaatimatun",
        translation: "Kesimpulan / Penutup",
        description: "Bagian akhir tulisan.",
      },
    ],
    quiz: [
      {
        id: "q3_7_1",
        question:
          "Apa sebutan untuk standar bahasa Arab modern yang digunakan dalam media dan dokumen resmi?",
        options: [
          "Amiyyah",
          "MSA (Modern Standard Arabic)",
          "Jahiliyyah",
          "Syi'ir",
        ],
        correctAnswer: "MSA (Modern Standard Arabic)",
        explanation:
          "MSA atau Fusha Ashriyyah adalah standar penulisan Arab modern.",
        type: "multiple-choice",
      },
      {
        id: "q3_7_2",
        question: "Bagian 'Kesimpulan' dalam bahasa Arab disebut?",
        options: ["Muqaddimah", "Maudhu'", "Khaatimah", "Unwan"],
        correctAnswer: "Khaatimah",
        explanation: "Khaatimah (خاتمة) berarti penutup atau kesimpulan.",
        type: "multiple-choice",
      },
    ],
  },
};
