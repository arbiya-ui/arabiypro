import { Lesson } from "../../types";

export const l2_9: Lesson = {
  id: "l2_9",
  title: "Imtihan Al-Mutawassit (Ujian Akhir Menengah)",
  titleAr: "إِمْتِحَانُ الْمُتَوَسِّطِ",
  description: "Ujian komprehensif akhir Level 2 mencakup materi Bab 1 hingga Bab 8 untuk mengukur penguasaan bahasa Arab tingkat menengah.",
  xpReward: 120,
  isCompleted: false,
  isLocked: false,
  type: "comprehensive",
  content: {
    introTitle: "Puncak Pembuktian: Gerbang Emas Menuju Al-Mutaqaddim",
    introduction: "Allahu Akbar! Inilah momen yang paling membanggakan dalam perjalanan belajar Anda. Selamat datang di Bab 9: Ujian Akhir Level 2. Ingatlah kembali hari pertama Anda di Level 1 saat belum mengenal satupun kata kerja; kini Anda telah berdiri di sini sebagai pembelajar tingkat menengah yang tangguh. Belajar bahasa Arab itu ternyata mudah saat kita melakukannya dengan konsisten dan penuh cinta.\n\nUjian ini bukanlah beban, melainkan panggung kehormatan untuk merayakan keberhasilan Anda. Kita akan merangkum seluruh materi dari Bab 1 hingga Bab 8 dalam satu evaluasi komprehensif. Percayalah pada kemampuan Anda sendiri, sebagaimana kami bangga pada pencapaian Anda. Selesaikan ujian ini dengan gemilang, dan bersiaplah untuk menyambut tantangan yang lebih agung di Level 3!",
    introBadges: [
      { icon: "🏆", text: "PENANTANG SEJATI (Siap menghadapi evaluasi komprehensif)" },
      { icon: "📜", text: "CALON AL-MAHIR (Selangkah lagi menuju tingkat mahir premium)" },
      { icon: "⚡", text: "SEMANGAT MEMBARA (Belajar bahasa Arab itu mudah dan asyik)" },
      { icon: "🎓", text: "STRUKTUR KOKOH (Menguasai pondasi Level 1 & Level 2)" }
    ],
    grammar: {
      logicExplanation: "Berikut adalah rangkuman logika utama dari Level 2 untuk membantu Anda menguasai ujian akhir ini:\n\n1. **Keajaiban Fi'il (Kata Kerja)**: Di Level 2, kita belajar bahwa kata kerja adalah jantung kalimat. Fi'il Madhi (Lampau) dan Mudhari' (Sedang/Akan) berubah sesuai siapa pelakunya. Bahasa Arab sangat efisien—satu kata sudah bisa menjadi satu kalimat utuh!\n\n2. **Presisi 'Adad (Angka)**: Kita mempelajari bagaimana angka 3-10 berinteraksi dengan benda. Ingat rahasianya: gender angka harus berlawanan dengan benda tunggalnya. Ini adalah bukti ketelitian bahasa Arab.\n\n3. **Dimensi Tempat & Waktu**: Pola Isim Makan dan Zaman (Maf'al/Maf'il) memudahkan kita menyebutkan lokasi atau waktu kejadian hanya dengan satu pola kata.\n\n4. **Objek & Intensitas**: Kita juga mempelajari Isim Maf'ul (objek) dan Shighah Mubalaghah (penyangatan sifat). Semua ini adalah bekal utama untuk memahami teks-teks Al-Qur'an dan literatur Arab klasik.\n\nBelajar bahasa Arab itu mudah karena polanya sangat logis dan konsisten. Mari kita buktikan!",
      examples: [
        {
          arabic: "كَتَبْتُ ثَلَاثَةَ تَقَارِيرَ فِي الْمَكْتَبِ",
          translation: "Saya telah menulis tiga laporan di kantor.",
          grammarNote: "Gabungan Bab 1 (Madhi), Bab 3 ('Adad), dan Bab 4 (Isim Makan)."
        },
        {
          arabic: "اللَّهُ غَفُورٌ عَلِيمٌ بِعِبَادِهِ",
          translation: "Allah Maha Pengampun lagi Maha Mengetahui terhadap hamba-Nya.",
          grammarNote: "Bab 7 (Shighah Mubalaghah) menunjukkan intensitas sifat Allah."
        }
      ],
      commonMistakes: [
        {
          original: "بَيْتٌ كَبِيرُ",
          correction: "بَيْتٌ كَبِيرٌ",
          note: "Harakat sifat harus selalu mengikuti bendanya (Kaidah Na'at)."
        },
        {
          original: "ثَلَاثَةُ كِتَابٍ",
          correction: "ثَلَاثَةُ كُتُبٍ",
          note: "Setelah angka 3-10, benda harus berbentuk jamak dan berharakat kasrah."
        }
      ],
      tashrif: {
        title: "Pola Kunci Level 2",
        rows: [
          { dhamir: "B1: Madhi", fiil: "فَعَلَ", akhiran: "-(a)", contoh: "ذَهَبَ" },
          { dhamir: "B2: Tafdhil", fiil: "أَفْعَلُ", akhiran: "(a-f-a-lu)", contoh: "أَجْمَلُ" },
          { dhamir: "B3: 'Adad", fiil: "فَعَلَةٌ", akhiran: "(-atun)", contoh: "سَبْعَةٌ" },
          { dhamir: "B4: Makan", fiil: "مَفْعَلٌ", akhiran: "(ma-f-al)", contoh: "مَطْعَمٌ" },
          { dhamir: "B5: Masdar", fiil: "فِعَالٌ", akhiran: "(fi'aal)", contoh: "ذَهَابٌ" },
          { dhamir: "B6: Mudhari", fiil: "يَفْعَلُ", akhiran: "(ya-f-alu)", contoh: "يَكْتُبُ" },
          { dhamir: "B7: Mubalaghah", fiil: "فَعُولٌ", akhiran: "(-uun)", contoh: "صَبُورٌ" },
          { dhamir: "B8: Maf'ul", fiil: "مَفْعُولٌ", akhiran: "(ma-f-uul)", contoh: "مكْتُوبٌ" }
        ]
      }
    },
    cards: [
      {
        id: "l2_9_c1",
        wordAr: "إِمْتِحَانٌ كَامِلٌ",
        transliteration: "Imtihaanun kaamilun",
        translation: "Ujian komprehensif / lengkap",
        description: "Evaluasi akhir level yang mencakup seluruh materi.",
        exampleAr: "هَذَا إِمْتِحَانٌ كَامِلٌ لِلْمُسْتَوَى الثَّانِي",
        exampleTrans: "Hadzaa imtihaanun kaamilun lil-mustawas-tsaanii",
        exampleTranslation: "Ini adalah ujian lengkap untuk tingkat kedua.",
      },
      {
        id: "l2_9_c2",
        wordAr: "شَهَادَةٌ",
        transliteration: "Syahaadatun",
        translation: "Sertifikat / Piagam",
        description: "Bukti kelulusan berharga setelah menyelesaikan level.",
        exampleAr: "أَحْصُلُ عَلَى الشَّهَادَةِ بَعْدَ النَّجَاحِ",
        exampleTrans: "Ahshulu 'alas-syahaadati ba'dan-najaahi",
        exampleTranslation: "Saya mendapatkan sertifikat setelah kelulusan sukses.",
      },
      {
        id: "l2_9_c3",
        wordAr: "مُحَادَثَةٌ",
        transliteration: "Muhaadatsatun",
        translation: "Percakapan / Dialog",
        description: "Kemampuan berbicara dan berkomunikasi secara aktif.",
        exampleAr: "الْمُحَادَثَةُ بِالْعَرَبِيَّةِ مُفِيدَةٌ",
        exampleTrans: "Al-muhaadatsatu bil-'arabiyyati mufiidatun",
        exampleTranslation: "Percakapan dengan bahasa Arab itu sangat bermanfaat.",
      },
      {
        id: "l2_9_c4",
        wordAr: "إِنْشَاءٌ",
        transliteration: "Insyaa'un",
        translation: "Mengarang / Menulis essay",
        description: "Uji tulis untuk mengekspresikan pikiran dalam bahasa Arab.",
        exampleAr: "كَتَبْتُ إِنْشَاءً بِلُغَةٍ عَرَبِيَّةٍ فُصْحَى",
        exampleTrans: "Katabtu insyaa'an bilughatin 'arabiyyatin fush-haa",
        exampleTranslation: "Saya menulis essay dengan bahasa Arab yang fasih.",
      },
      {
        id: "l2_9_c5",
        wordAr: "تَقْيِيمٌ",
        transliteration: "Taqyiimun",
        translation: "Evaluasi / Penilaian",
        description: "Proses mengukur kemajuan belajar secara objektif.",
        exampleAr: "تَقْيِيمُ الْمُعَلِّمِ مُمْتَازٌ",
        exampleTrans: "Taqyiimul mu'allimi mumtaazun",
        exampleTranslation: "Evaluasi dari guru sangat bagus.",
      },
    ],
    dialog: [
      {
        speaker: "أُسْتَاذٌ",
        arabic: "أَهْلًا بِكُمْ فِي الْاِمْتِحَانِ الْأَخِيرِ لِلْمُسْتَوَى الثَّانِي.",
        translation: "Selamat datang di ujian akhir untuk Level 2.",
        note: "Penyambutan ustadz."
      },
      {
        speaker: "طَالِبٌ",
        arabic: "نَحْنُ مُسْتَعِدُّونَ يَا أُسْتَاذُ، نَسْأَلُ اللَّهَ التَّوْفِيقَ.",
        translation: "Kami sudah siap wahai Ustadz, kami memohon taufiq dari Allah.",
        note: "Semangat siswa."
      },
      {
        speaker: "أُسْتَاذٌ",
        arabic: "اِقْرَأُوا الْأَسْئِلَةَ بِتَمَهُّلٍ وَفَكِّرُوا فِي الْقَوَاعِدِ.",
        translation: "Bacalah pertanyaan-pertanyaan dengan tenang dan pikirkan kaidah-kaidahnya.",
        note: "Saran ustadz."
      }
    ],
    quiz: [
      // BAB 1: Fi'il Madhi (6 questions)
      {
        id: "l2_9_q1",
        type: "multiple-choice",
        question: "Apa arti dari kata 'كَتَبَ'?",
        options: ["Sedang menulis", "Telah menulis", "Akan menulis", "Penulis"],
        correctAnswer: "Telah menulis",
        explanation: "Materi Bab 1: Fi'il Madhi menunjukkan pekerjaan yang telah selesai.",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q2",
        type: "multiple-choice",
        question: "Akhiran apa yang ditambahkan pada Fi'il Madhi jika subjeknya adalah 'أَنَا' (Saya)?",
        options: ["-تَ", "-تِ", "-تُ", "-نَا"],
        correctAnswer: "-تُ",
        explanation: "Materi Bab 1: Subjek 'saya' pada Fi'il Madhi ditandai akhiran 'tu' (Contoh: ذَهَبْتُ).",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q3",
        type: "translate",
        question: "Terjemahkan ke bahasa Arab: 'Dia (laki-laki) telah pergi ke pasar'",
        options: ["ذَهَبَ إِلَى السُّوقِ", "ذَهَبَتْ إِلَى السُّوقِ", "ذَهَبْتُ إِلَى السُّوقِ", "يَذْهَبُ إِلَى السُّوقِ"],
        correctAnswer: "ذَهَبَ إِلَى السُّوقِ",
        explanation: "Materi Bab 1: Fi'il Madhi untuk dhomir Huwa (Dia Lk) adalah bentuk asli kata kerja.",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q4",
        type: "multiple-choice",
        question: "Bentuk Fi'il Madhi untuk subjek 'أَنْتُمْ' (Kalian Laki-laki) dari kata 'رَجَعَ' adalah...",
        options: ["رَجَعْتَ", "رَجَعْتُمْ", "رَجَعُوا", "رَجَعْنَا"],
        correctAnswer: "رَجَعْتُمْ",
        explanation: "Materi Bab 1: Akhiran '-tum' menunjukkan subjek jamak mudzakkar mukhatab.",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q5",
        type: "fill-blank",
        question: "Lengkapi kalimat ini: هُنَّ ____ إِلَى الْمَدْرَسَةِ (Mereka perempuan telah pergi)",
        options: ["ذَهَبُوا", "ذَهَبْنَ", "ذَهَبَتْ", "ذَهَبْتُنَّ"],
        correctAnswer: "ذَهَبْنَ",
        explanation: "Materi Bab 1: Dhomir Hunna (Mereka Pr) ditandai dengan Nun Niswah berharakat fathah di akhir.",
        difficulty: "hard",
        points: 3
      },
      {
        id: "l2_9_q6",
        type: "multiple-choice",
        question: "Manakah di bawah ini yang merupakan Fi'il Madhi?",
        options: ["يَكْتُبُ", "اكْتُبْ", "كَتَبَ", "كِتَابٌ"],
        correctAnswer: "كَتَبَ",
        explanation: "Materi Bab 1: Mengenali pola Fi'il Madhi dasar (Fa'ala).",
        difficulty: "basic",
        points: 1
      },

      // BAB 2: Na'at & Tafdhil (6 questions)
      {
        id: "l2_9_q7",
        type: "multiple-choice",
        question: "Apa arti dari 'أَكْبَرُ'?",
        options: ["Besar", "Sangat besar", "Lebih/Paling besar", "Pembesar"],
        correctAnswer: "Lebih/Paling besar",
        explanation: "Materi Bab 2: Isim Tafdhil (pola Af'alu) menunjukkan perbandingan 'lebih' atau 'paling'.",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q8",
        type: "multiple-choice",
        question: "Jika bendanya (Man'ut) adalah 'الْبَيْتُ' (Rumah - Mudzakkar), maka sifatnya (Na'at) yang benar adalah...",
        options: ["الْكَبِيرُ", "الْكَبِيرَةُ", "كَبِيرٌ", "كَبِيرَةٌ"],
        correctAnswer: "الْكَبِيرُ",
        explanation: "Materi Bab 2: Na'at harus mengikuti Man'ut dalam Alif-Lam dan Gender.",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q9",
        type: "translate",
        question: "Terjemahkan: 'Buku yang baru itu indah'",
        options: ["الْكِتَابُ الْجَدِيدُ جَمِيلٌ", "كِتَابٌ جَدِيدٌ جَمِيلٌ", "الْكِتَابُ جَدِيدٌ جَمِيلٌ", "الْكِتَابُ الْجَدِIDُ الْجَمِيلُ"],
        correctAnswer: "الْكِتَابُ الْجَدِيدُ جَمِيلٌ",
        explanation: "Materi Bab 2: Susunan Mubtada-Khabar dengan Na'at pada Mubtada.",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q10",
        type: "multiple-choice",
        question: "Bagaimana cara membandingkan 'B ini lebih indah daripada A'?",
        options: ["B أَجْمَلُ مِنْ A", "B أَجْمَلُ A", "B جَمِيلٌ مِنْ A", "B جَمِيلَةٌ مِنْ A"],
        correctAnswer: "B أَجْمَلُ مِنْ A",
        explanation: "Materi Bab 2: Perbandingan menggunakan Isim Tafdhil diikuti kata 'min'.",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q11",
        type: "multiple-choice",
        question: "Pilihlah kalimat yang benar secara tata bahasa:",
        options: ["عِنْدِي سَيَّارَةٌ أَسْرَعُ", "عِنْدِي سَيَّارَةٌ سَرِيعٌ", "عِنْدِي السَّيَّارَةُ سَرِيعَةٌ", "عِنْدِي سَيَّارَةٌ أَسْرَعُ مِنْ سَيَّارَتِكَ"],
        correctAnswer: "عِنْدِي سَيَّارَةٌ أَسْرَعُ مِنْ سَيَّارَتِكَ",
        explanation: "Materi Bab 2: Penggunaan Isim Tafdhil untuk perbandingan antar dua objek.",
        difficulty: "hard",
        points: 3
      },
      {
        id: "l2_9_q12",
        type: "multiple-choice",
        question: "Manakah di bawah ini yang merupakan Isim Tafdhil?",
        options: ["صَغِيرٌ", "أَصْغَرُ", "تَصْغِيرٌ", "صَاغِرٌ"],
        correctAnswer: "أَصْغَرُ",
        explanation: "Materi Bab 2: Mengenali pola Af'alu.",
        difficulty: "basic",
        points: 1
      },

      // BAB 3: 'Adad-Ma'dud (6 questions)
      {
        id: "l2_9_q13",
        type: "multiple-choice",
        question: "Apa arti dari 'خَمْسَةٌ'?",
        options: ["Tiga", "Lima", "Tujuh", "Sembilan"],
        correctAnswer: "Lima",
        explanation: "Materi Bab 3: Kosakata angka dasar (Adad).",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q14",
        type: "multiple-choice",
        question: "Bentuk jamak dari 'كِتَابٌ' (Kitab) adalah...",
        options: ["كِتَابَاتٌ", "كِتَابُونَ", "كُتُبٌ", "مَكْتَبَةٌ"],
        correctAnswer: "كُتُبٌ",
        explanation: "Materi Bab 3: Mengetahui jamak taksir untuk digunakan dalam Adad-Ma'dud.",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q15",
        type: "translate",
        question: "Terjemahkan: 'Tiga buah buku'",
        options: ["ثَلَاثَةُ كِتَابٍ", "ثَلَاثَةُ كُتُبٍ", "ثَلَاثُ كُتُبٍ", "ثَلَاثَةُ كُتُبًا"],
        correctAnswer: "ثَلَاثَةُ كُتُبٍ",
        explanation: "Materi Bab 3: Angka 3-10 untuk benda mudzakkar menggunakan angka muannats (ta marbuthah).",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q16",
        type: "multiple-choice",
        question: "Jika bendanya adalah 'طَالِبَاتٌ' (Para siswi - Muannats), maka angka '7' ditulis...",
        options: ["سَبْعَةُ", "سَبْعُ", "سَبْعُونَ", "سَابِعُ"],
        correctAnswer: "سَبْعُ",
        explanation: "Materi Bab 3: Angka 3-10 memiliki gender berlawanan dengan benda tunggalnya (Thalibah = Pr, maka angka = Lk).",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q17",
        type: "fill-blank",
        question: "Lengkapi: فِي الْفَصْلِ ____ (Sepuluh siswa)",
        options: ["عَشَرَةُ طَالِبٍ", "عَشَرَةُ طُلَّابٍ", "عَشَرُ طُلَّابٍ", "عَشَرَةَ طَالِبًا"],
        correctAnswer: "عَشَرَةُ طُلَّابٍ",
        explanation: "Materi Bab 3: 'Adad-Ma'dud 3-10 wajib jamak majrur.",
        difficulty: "hard",
        points: 3
      },
      {
        id: "l2_9_q18",
        type: "multiple-choice",
        question: "Harakat akhir 'Ma'dud' (benda yang dihitung) pada angka 3-10 adalah...",
        options: ["Fathatain", "Dhammatain", "Kasratain", "Sukun"],
        correctAnswer: "Kasratain",
        explanation: "Materi Bab 3: Ma'dud berposisi sebagai Mudhaf Ilaih sehingga harus majrur.",
        difficulty: "basic",
        points: 1
      },

      // BAB 4: Isim Makan & Zaman (6 questions)
      {
        id: "l2_9_q19",
        type: "multiple-choice",
        question: "Apa arti dari 'مَسْجِدٌ'?",
        options: ["Sekolah", "Rumah", "Tempat Sujud (Masjid)", "Restoran"],
        correctAnswer: "Tempat Sujud (Masjid)",
        explanation: "Materi Bab 4: Isim Makan menunjukkan tempat terjadinya perbuatan.",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q20",
        type: "multiple-choice",
        question: "Pola dasar yang umum digunakan untuk Isim Makan adalah...",
        options: ["مَفْعَلٌ", "فَاعِلٌ", "مَفْعُولٌ", "فَعَّالٌ"],
        correctAnswer: "مَفْعَلٌ",
        explanation: "Materi Bab 4: Isim Makan/Zaman umumnya mengikuti pola Maf'al atau Maf'il.",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q21",
        type: "multiple-choice",
        question: "Manakah di bawah ini yang merupakan Isim Zaman (Keterangan Waktu)?",
        options: ["مَطْعَمٌ", "مَوْعِدٌ", "مَلْعَبٌ", "مَدْخَلٌ"],
        correctAnswer: "مَوْعِدٌ",
        explanation: "Materi Bab 4: Maw'id berarti waktu janji/pertemuan.",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q22",
        type: "translate",
        question: "Terjemahkan: 'Tempat makan (Restoran)'",
        options: ["مَطْعَمٌ", "مَأْكَلٌ", "مَشْرَبٌ", "مَطْبَخٌ"],
        correctAnswer: "مَطْعَمٌ",
        explanation: "Materi Bab 4: Isim Makan dari Th-A-M (makan) adalah Math'am.",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q23",
        type: "fill-blank",
        question: "Isim Makan dari kata 'خَرَجَ' (Keluar) adalah ____",
        options: ["مَخْرَجٌ", "مُخْرِجٌ", "خَارِجٌ", "مَخْرِيجٌ"],
        correctAnswer: "مَخْرَجٌ",
        explanation: "Materi Bab 4: Pembentukan Isim Makan mengikuti pola Maf'al.",
        difficulty: "hard",
        points: 3
      },
      {
        id: "l2_9_q24",
        type: "multiple-choice",
        question: "Di mana biasanya kita berolahraga (Berdasarkan pola Isim Makan)?",
        options: ["مَلْعَبٌ", "مَطْبَخٌ", "مَوْقِفٌ", "مَجْلِسٌ"],
        correctAnswer: "مَلْعَبٌ",
        explanation: "Materi Bab 4: Mal'ab berasal dari La'iba (bermain/olahraga).",
        difficulty: "basic",
        points: 1
      },

      // BAB 5: Masdar (6 questions)
      {
        id: "l2_9_q25",
        type: "multiple-choice",
        question: "Apa arti dari 'قِرَاءَةٌ'?",
        options: ["Telah membaca", "Sedang membaca", "Bacaan/Membaca (KB)", "Pembaca"],
        correctAnswer: "Bacaan/Membaca (KB)",
        explanation: "Materi Bab 5: Masdar adalah kata benda abstrak yang menunjukkan tindakan tanpa terikat waktu.",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q26",
        type: "multiple-choice",
        question: "Masdar adalah kata benda yang berasal dari...",
        options: ["Isim Sifat", "Kata Kerja (Fi'il)", "Huruf Jar", "Adad"],
        correctAnswer: "Kata Kerja (Fi'il)",
        explanation: "Materi Bab 5: Masdar merupakan bentuk dasar kata benda dari sebuah perbuatan.",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q27",
        type: "multiple-choice",
        question: "Bentuk Masdar dari kata 'سَلَّمَ' (Mengucap salam) adalah...",
        options: ["سَلَامٌ", "تَسْلِيمٌ", "مُسَلِّمٌ", "سَالِمٌ"],
        correctAnswer: "تَسْلِيمٌ",
        explanation: "Materi Bab 5: Pola Masdar untuk Fi'il Mudha'af (bertasydid) adalah Taf'iil.",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q28",
        type: "translate",
        question: "Terjemahkan: 'Saya suka membaca'",
        options: ["أُحِبُّ يَقْرَأُ", "أُحِبُّ الْقِرَاءَةَ", "أُحِبُّ قَرَأَ", "أُحِبُّ قَارِئًا"],
        correctAnswer: "أُحِبُّ الْقِرَاءَةَ",
        explanation: "Materi Bab 5: Setelah kata kerja 'suka', biasanya diikuti Masdar sebagai objek.",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q29",
        type: "fill-blank",
        question: "Masdar dari kata 'عَلَّمَ' (Mengajar) adalah ____",
        options: ["تَعْلِيمٌ", "عِلْمٌ", "مُعَلِّمٌ", "تَعَلُّمٌ"],
        correctAnswer: "تَعْلِيمٌ",
        explanation: "Materi Bab 5: Pola Taf'iil (Ta'liim) adalah bentuk Masdar yang umum.",
        difficulty: "hard",
        points: 3
      },
      {
        id: "l2_9_q30",
        type: "multiple-choice",
        question: "Manakah kalimat yang menggunakan Masdar sebagai subjek?",
        options: ["السَّفَرُ مُتْعِبٌ", "ذَهَبْتُ إِلَى السَّفَرِ", "يُسَافِرُ الرَّجُلُ", "مُسَافِرٌ قَادِمٌ"],
        correctAnswer: "السَّفَرُ مُتْعِبٌ",
        explanation: "Materi Bab 5: Safar adalah Masdar yang bertindak sebagai Mubtada.",
        difficulty: "medium",
        points: 2
      },

      // BAB 6: Fi'il Mudhari' & Jumlah Fi'liyyah (6 questions)
      {
        id: "l2_9_q31",
        type: "multiple-choice",
        question: "Huruf awalan apa yang digunakan untuk subjek 'هُوَ' (Dia Lk) pada Fi'il Mudhari'?",
        options: ["يـ", "تـ", "أ", "نـ"],
        correctAnswer: "يـ",
        explanation: "Materi Bab 6: Awalan 'Ya' menunjukkan dhomir Huwa.",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q32",
        type: "multiple-choice",
        question: "Apa arti dari 'يَشْرَحُ'?",
        options: ["Telah menjelaskan", "Sedang/Akan menjelaskan", "Penjelasan", "Jelaskanlah"],
        correctAnswer: "Sedang/Akan menjelaskan",
        explanation: "Materi Bab 6: Fi'il Mudhari' menunjukkan pekerjaan yang sedang atau akan dilakukan.",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q33",
        type: "translate",
        question: "Terjemahkan: 'Fatimah sedang makan'",
        options: ["يَأْكُلُ فَاطِمَةُ", "تَأْكُلُ فَاطِمَةُ", "أَكَلَتْ فَاطِمَةُ", "تَأْكُلِينَ يَا فَاطِمَةُ"],
        correctAnswer: "تَأْكُلُ فَاطِمَةُ",
        explanation: "Materi Bab 6: Fi'il Mudhari' untuk Hiya (Pr) diawali dengan huruf 'Ta'.",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q34",
        type: "multiple-choice",
        question: "Jika kita ingin mengatakan 'Kami sedang menulis', awalan apa yang digunakan?",
        options: ["أَـ", "تَـ", "يَـ", "نَـ"],
        correctAnswer: "نَـ",
        explanation: "Materi Bab 6: Awalan 'Nun' digunakan untuk dhomir Nahnu (Kami).",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q35",
        type: "fill-blank",
        question: "Ubahlah 'كَتَبَ' (Madhi) menjadi Mudhari' untuk subjek 'أَنَا' (Saya): ____",
        options: ["يَكْتُبُ", "تَكْتُبُ", "أَكْتُبُ", "نَكْتُبُ"],
        correctAnswer: "أَكْتُبُ",
        explanation: "Materi Bab 6: Awalan Alif (Hamzah) menunjukkan subjek 'Ana'.",
        difficulty: "hard",
        points: 3
      },
      {
        id: "l2_9_q36",
        type: "multiple-choice",
        question: "Pilihlah kata kerja yang tepat: الطُّلَّابُ ____ إِلَى الْمَدْرَسَةِ",
        options: ["يَذْهَبُ", "تَذْهَبُ", "يَذْهَبُونَ", "تَذْهَبُونَ"],
        correctAnswer: "يَذْهَبُونَ",
        explanation: "Materi Bab 6: Penyesuaian kata kerja dengan subjek jamak dalam Jumlah Ismiyyah.",
        difficulty: "medium",
        points: 2
      },

      // BAB 7: Shighah Mubalaghah (6 questions)
      {
        id: "l2_9_q37",
        type: "multiple-choice",
        question: "Apa arti dari 'شَكُورٌ'?",
        options: ["Orang yang bersyukur", "Maha Mensyukuri", "Bersyukur (KB)", "Sedang bersyukur"],
        correctAnswer: "Maha Mensyukuri",
        explanation: "Materi Bab 7: Shighah Mubalaghah pola Fa'uul menunjukkan intensitas tinggi atau 'Maha'.",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q38",
        type: "multiple-choice",
        question: "Manakah contoh Shighah Mubalaghah dengan pola 'فَعِيلٌ'?",
        options: ["صَبُورٌ", "عَلِيمٌ", "عَالِمٌ", "مَعْلُومٌ"],
        correctAnswer: "عَلِيمٌ",
        explanation: "Materi Bab 7: 'Aliim (Maha Mengetahui) mengikuti pola Fa'iil.",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q39",
        type: "translate",
        question: "Terjemahkan: 'Allah Maha Pengampun lagi Maha Penyayang'",
        options: ["اللَّهُ غَفُورٌ رَحِيمٌ", "اللَّهُ غَافِرٌ رَاحِمٌ", "اللَّهُ مَغْفُورٌ مَرْحُومٌ", "اللَّهُ غَفُورًا رَحِيمًا"],
        correctAnswer: "اللَّهُ غَفُورٌ رَحِيمٌ",
        explanation: "Materi Bab 7: Penggunaan asma'ul husna dengan pola Mubalaghah.",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q40",
        type: "multiple-choice",
        question: "Apa perbedaan makna antara 'عَالِمٌ' dan 'عَلِيمٌ'?",
        options: ["Tidak ada bedanya", "'Aalim = Tahu biasa, 'Aliim = Maha Tahu", "'Aliim = Tahu biasa, 'Aalim = Maha Tahu", "Keduanya kata kerja"],
        correctAnswer: "'Aalim = Tahu biasa, 'Aliim = Maha Tahu",
        explanation: "Materi Bab 7: Shighah Mubalaghah ('Aliim) memberikan makna penyangatan dibandingkan Isim Fa'il ('Aalim).",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q41",
        type: "multiple-choice",
        question: "Manakah pasangan kata yang semuanya merupakan Shighah Mubalaghah?",
        options: ["صَبُورٌ، غَفُورٌ", "كَاذِبٌ، صَادِقٌ", "مَكْتُوبٌ، مَعْلُومٌ", "يَذْهَبُ، يَرْجِعُ"],
        correctAnswer: "صَبُورٌ، غَفُورٌ",
        explanation: "Materi Bab 7: Mengenali pola Fa'uul.",
        difficulty: "hard",
        points: 3
      },
      {
        id: "l2_9_q42",
        type: "multiple-choice",
        question: "Sifat Allah yang berarti 'Maha Mengetahui' adalah...",
        options: ["عَلِيمٌ", "قَدِيرٌ", "حَكِيمٌ", "بَصِيرٌ"],
        correctAnswer: "عَلِيمٌ",
        explanation: "Materi Bab 7: Pengetahuan kosa kata Asma'ul Husna.",
        difficulty: "medium",
        points: 2
      },

      // BAB 8: Keluhan Sakit & Isim Maf'ul (6 questions)
      {
        id: "l2_9_q43",
        type: "multiple-choice",
        question: "Apa arti dari 'مَشْغُولٌ'?",
        options: ["Sibuk/Disibukkan", "Sedang bekerja", "Pekerjaan", "Tempat kerja"],
        correctAnswer: "Sibuk/Disibukkan",
        explanation: "Materi Bab 8: Isim Maf'ul pola Maf'uul menunjukkan orang yang dikenai perbuatan.",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q44",
        type: "multiple-choice",
        question: "Bagaimana cara mengatakan 'Saya menderita sakit kepala'?",
        options: ["عِنْدِي صُدَاعٌ", "أَشْعُرُ بِصُدَاعٍ", "أَنَا صُدَاعٌ", "Pilihan A & B benar"],
        correctAnswer: "Pilihan A & B benar",
        explanation: "Materi Bab 8: Menggunakan 'Indii' atau 'Asy'uru bi-' untuk keluhan sakit.",
        difficulty: "basic",
        points: 1
      },
      {
        id: "l2_9_q45",
        type: "multiple-choice",
        question: "Isim Maf'ul dari kata 'فَتَحَ' (Membuka) adalah...",
        options: ["فَاتِحٌ", "مَفْتُوحٌ", "فَتْحٌ", "يَفْتَحُ"],
        correctAnswer: "مَفْتُوحٌ",
        explanation: "Materi Bab 8: Mengikuti pola Maf'uul.",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q46",
        type: "translate",
        question: "Terjemahkan: 'Surat itu tertulis'",
        options: ["الرِّسَالَةُ مَكْتُوبٌ", "الرِّسَالَةُ مَكْتُوبَةٌ", "الرِّسَالَةُ كَتَبَ", "الرِّسَالَةُ يَكْتُبُ"],
        correctAnswer: "الرِّسَالَةُ مَكْتُوبَةٌ",
        explanation: "Materi Bab 8: Isim Maf'ul harus mengikuti gender benda (Muannats).",
        difficulty: "medium",
        points: 2
      },
      {
        id: "l2_9_q47",
        type: "multiple-choice",
        question: "Manakah kalimat yang benar untuk 'Tangan saya patah'?",
        options: ["يَدِي مَكْسُورٌ", "يَدِي مَكْسُورَةٌ", "يَدِي كَاسِرٌ", "يَدِي كَسَرَ"],
        correctAnswer: "يَدِي مَكْسُORَةٌ",
        explanation: "Materi Bab 8: Anggota tubuh berpasangan dianggap muannats.",
        difficulty: "hard",
        points: 3
      },
      {
        id: "l2_9_q48",
        type: "multiple-choice",
        question: "Manakah di bawah ini yang merupakan Isim Maf'ul?",
        options: ["مَأْكُولٌ", "آكِلٌ", "يَأْكُلُ", "أَكْلٌ"],
        correctAnswer: "مَأْكُولٌ",
        explanation: "Materi Bab 8: Pola Maf'uul menunjukkan objek (yang dimakan).",
        difficulty: "medium",
        points: 2
      },

      // MIXED / COMPREHENSIVE (2 questions)
      {
        id: "l2_9_q49",
        type: "translate",
        question: "Terjemahkan: 'Saya telah menulis tiga surat di kantor'",
        options: ["كَتَبْتُ ثَلَاثَةَ رَسَائِلَ فِي الْمَكْتَبِ", "كَتَبْتُ ثَلَاثَ رَسَائِلَ فِي الْمَكْتَبِ", "كَتَبَ ثَلَاثَةَ رَسَائِلَ فِي الْمَكْتَبِ", "كَتَبْتُ ثَلَاثَةَ رِسَالَةً فِي الْمَكْتَبِ"],
        correctAnswer: "كَتَبْتُ ثَلَاثَ رَسَائِلَ فِي الْمَكْتَبِ",
        explanation: "Evaluasi Gabungan: Bab 1 (Madhi), Bab 3 ('Adad - Risalah pr, maka 3 lk), Bab 4 (Isim Makan).",
        difficulty: "hard",
        points: 3
      },
      {
        id: "l2_9_q50",
        type: "translate",
        question: "Terjemahkan: 'Dokter sedang pergi ke rumah sakit'",
        options: ["يَذْهَبُ الطَّبِيبُ إِلَى الْمُسْتَشْفَى", "ذَهَبَ الطَّبِيبُ إِلَى الْمُسْتَشْفَى", "تَذْهَبُ الطَّبِيبُ إِلَى الْمُسْتَشْفَى", "يَذْهَبُونَ الطَّبِيبُ إِلَى الْمُسْتَشْفَى"],
        correctAnswer: "يَذْهَبُ الطَّبِيبُ إِلَى الْمُسْتَشْفَى",
        explanation: "Evaluasi Gabungan: Bab 6 (Mudhari') dan Bab 8 (Kosa kata medis).",
        difficulty: "hard",
        points: 3
      }
    ]
  }
};
