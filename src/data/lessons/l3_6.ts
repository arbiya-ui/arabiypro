import { Lesson } from "../../types";

export const l3_6: Lesson = {
  id: "l3_6",
  title: "[PREMIUM] BAB 6: QIRA'AH AL-KUTUB",
  titleAr: "قراءة الكتب",
  description:
    "Metodologi baca kitab gundul; Al-Ajurrumiyyah, Arba'in Nawawi, Bulughul Maram.",
  xpReward: 60,
  isCompleted: false,
  isLocked: true,
  type: "quran",
  content: {
    introduction:
      "Luar biasa! Setelah jiwa Anda dihiasi dengan keindahan sastra Balaghah di Bab 5, kini saatnya membuktikan seluruh ketajaman intelektual Anda pada tantangan paling legendaris bagi setiap pencinta bahasa Arab. Selamat datang di Bab 6: Qira'ah Al-Kutub (Membaca Kitab). Di sinilah impian Anda untuk mampu membaca, meng-I'rab, dan menerjemahkan teks Arab gundul (tanpa harakat) atau yang populer disebut 'Kitab Kuning' akan menjadi kenyataan.\n\nKita tidak akan membaca teks sembarangan. Kita akan membedah langsung paragraf demi paragraf dari karya-karya monumental para ulama besar terdahulu, seperti Matan Al-Ajurrumiyyah (kitab suci gramatika), Al-Arba'in An-Nawawiyyah (kumpulan hadits pokok), hingga cuplikan fikih Bulughul Maram. Anda akan dibekali dengan metodologi 'Tarkib'—langkah taktis menentukan mana mubtada, khabar, fa'il, na'at, atau mudhaf ilaih pada lembaran teks yang polos tanpa bantuan harakat atau tanda baca modern.\n\nSetiap kalimat yang berhasil Anda baca dengan harakat dan makna yang tepat di bab ini akan mengalirkan rasa bangga dan kepuasan intelektual yang tak terlukiskan dalam sanubari Anda. Pertahankan konsentrasi tinggi dan asah terus insting linguistik Anda, karena kemandirian membaca literatur klasik ini akan langsung melatih jari jemari Anda pada Bab 7, di mana Anda akan belajar bagaimana mengekspresikan pikiran ilmiah Anda sendiri dalam bentuk tulisan Arab yang indah dan formal!",
    introTitle: "Menaklukkan Teks Gundul: Menyelami Samudera Kitab Klasik",
    introVerse: {
      ar: "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ",
      translation: "Katakanlah: 'Adakah sama orang-orang yang mengetahui dengan orang-orang yang tidak mengetahui?' (QS. Az-Zumar: 9)"
    },
    introBadges: [
      { icon: "📖", text: "PEMBACA MANDIRI (Kuasai teknik baca kitab tanpa harakat)" },
      { icon: "⚔️", text: "PENAKLUK TARKIB (Mampu menganalisis naskah ulama secara akurat)" }
    ],
    cards: [
      {
        id: "l3_6_c1",
        wordAr: "مَتْنُ الآجُرُّومِيَّةِ",
        transliteration: "Matnul Ajurrumiyyah",
        translation: "Matan Ajurrumiyyah",
        description: "Kitab dasar gramatika Arab klasik.",
      },
      {
        id: "l3_6_c2",
        wordAr: "الأَرْبَعِينَ النَّوَوِيَّة",
        transliteration: "Al-Arba'in An-Nawawiyyah",
        translation: "40 Hadits Nawawi",
        description: "Kumpulan hadits pokok dalam Islam.",
      },
      {
        id: "l3_6_c3",
        wordAr: "بُلُوغُ الْمَرَامِ",
        transliteration: "Bulughul Maram",
        translation: "Bulughul Maram",
        description: "Kitab hadits hukum fikih.",
      },
      {
        id: "l3_6_c4",
        wordAr: "تَرْكِيبٌ",
        transliteration: "Tarkiibun",
        translation: "Struktur / Analisis Kalimat",
        description: "Metode menentukan kedudukan kata dalam kalimat.",
      },
    ],
    quiz: [
      {
        id: "q3_6_1",
        question:
          "Apa istilah populer untuk naskah Arab yang ditulis tanpa harakat?",
        options: [
          "Kitab Gundul",
          "Kitab Suci",
          "Kitab Imla'",
          "Kitab Syair",
        ],
        correctAnswer: "Kitab Gundul",
        explanation:
          "Di Indonesia, naskah Arab tanpa harakat sering disebut Kitab Gundul atau Kitab Kuning.",
        type: "multiple-choice",
      },
      {
        id: "q3_6_2",
        question: "Kitab gramatika Arab klasik yang sangat populer adalah?",
        options: ["Bulughul Maram", "Al-Ajurrumiyyah", "Arba'in Nawawi", "Tafsir Jalalain"],
        correctAnswer: "Al-Ajurrumiyyah",
        explanation: "Al-Ajurrumiyyah adalah kitab dasar ilmu Nahwu.",
        type: "multiple-choice",
      },
    ],
  },
};
