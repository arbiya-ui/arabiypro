import { Lesson } from "../../types";

export const l3_8: Lesson = {
  id: "l3_8",
  title: "[PREMIUM] BAB 8: AT-TARJAMAH WA AL-MUHADATSATUL 'ILMIYYAH",
  titleAr: "الترجمة والمحادثة العلمية",
  description:
    "Teknik penerjemahan (Tarjamah) Indonesia-Arab & sebaliknya; Munaqasyah (diskusi ilmiah) menggunakan ungkapan akademis.",
  xpReward: 60,
  isCompleted: false,
  isLocked: true,
  type: "conversation",
  content: {
    introduction:
      "Sungguh pencapaian yang membanggakan setelah Anda berhasil menumpahkan pikiran ilmiah dalam bentuk tulisan akademis di Bab 7! Kini, tantangan berikutnya telah menanti: menerjemahkan pemikiran secara instan dan mengutarakannya secara lisan dalam forum diskusi intelektual. Selamat datang di Bab 8: At-Tarjamah wa Al-Muhadatsatul 'Ilmiyyah. Di bab penutup materi Level 3 ini, kita akan melatih kecepatan berpikir, ketangkasan menerjemahkan, serta seni mempertahankan argumen ilmiah secara langsung.\n\nKita akan mempelajari teknik-teknik penerjemahan taktis (tarjamah) baik dari Indonesia ke Arab maupun sebaliknya, dengan tetap menjaga keselarasan makna tanpa terjebak pada penerjemahan kata-per-kata yang kaku. Anda juga akan dipandu untuk melakukan munaqasyah (debat/diskusi ilmiah) menggunakan frasa-frasa akademik yang elegan, seperti menyanggah pendapat dengan sopan, menyetujui argumen dengan dalil yang kuat, serta menyimpulkan diskusi dengan bahasa yang lugas dan berwibawa.\n\nBab ini adalah latihan tempur terakhir yang sangat krusial sebelum Anda menghadapi evaluasi kelulusan akhir. Berbicaralah dengan berani, terjemahkan dengan cerdas, and pancarkan wibawa ilmiah Anda, karena seluruh kemahiran lisan and tulisan yang Anda kumpulkan hingga bab ini akan diuji secara komprehensif pada Bab 9—ujian pamungkas untuk menentukan kelayakan Anda menyandang gelar Al-Mutaqaddim!",
    introTitle: "Jembatan Makna: Seni Terjemah & Debat Intelektual",
    introVerse: {
      ar: "وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ",
      translation: "Dan di antara tanda-tanda kekuasaan-Nya ialah menciptakan langit dan bumi dan berlain-lainan bahasamu dan warna kulitmu. (QS. Ar-Rum: 22)"
    },
    introBadges: [
      { icon: "🌉", text: "INTERPRETER TANGKAS (Terjemah akurat antar dua bahasa)" },
      { icon: "🗣️", text: "DEBATUR ELITE (Pancarkan wibawa ilmiah dalam diskusi lisan)" }
    ],
    cards: [
      {
        id: "l3_8_c1",
        wordAr: "تَرْجَمَةٌ",
        transliteration: "Tarjamatun",
        translation: "Penerjemahan",
        description: "Mengalihkan pesan dari satu bahasa ke bahasa lain dengan akurat.",
      },
      {
        id: "l3_8_c2",
        wordAr: "مُنَاقَشَةٌ عِلْمِيَّةٌ",
        transliteration: "Munaaqasyatun 'ilmiyyatun",
        translation: "Diskusi ilmiah",
        description: "Forum bertukar argumen akademis yang santun dan kokoh.",
      },
      {
        id: "l3_8_c3",
        wordAr: "رَأْيٌ",
        transliteration: "Ra'yun",
        translation: "Pendapat",
        description: "Opini atau pandangan pribadi.",
      },
      {
        id: "l3_8_c4",
        wordAr: "دَلِيلٌ",
        transliteration: "Daliilun",
        translation: "Bukti / Dalil",
        description: "Argumen penguat pendapat.",
      },
    ],
    quiz: [
      {
        id: "q3_8_1",
        question: "Apa istilah bahasa Arab untuk forum diskusi ilmiah atau pertukaran pemikiran?",
        options: ["Munaqasyah 'Ilmiyyah", "Safarun", "Muthala'ah", "Dahraja"],
        correctAnswer: "Munaqasyah 'Ilmiyyah",
        explanation: "Munaqasyah 'Ilmiyyah adalah padanan yang tepat untuk diskusi ilmiah.",
        type: "multiple-choice",
      },
      {
        id: "q3_8_2",
        question: "Kata 'Daliil' (دليل) berarti?",
        options: ["Pertanyaan", "Bukti / Argumen", "Jawaban", "Kesimpulan"],
        correctAnswer: "Bukti / Argumen",
        explanation: "Dalil adalah bukti atau landasan argumen.",
        type: "multiple-choice",
      },
    ],
  },
};
