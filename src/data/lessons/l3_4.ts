import { Lesson } from "../../types";

export const l3_4: Lesson = {
  id: "l3_4",
  title: "BAB 4: ASH-SHARF AL-MUTAWASSIT (Shorof Lanjut)",
  titleAr: "الصَّرْفُ الْمُتَوَسِّطُ",
  description: "Wazan Ruba'i, Isim Alat, Makan, Zaman, Sighah Mubalaghah, dan Ilmu Isytiqaq.",
  xpReward: 60,
  isCompleted: false,
  isLocked: false,
  type: "grammar",
  content: {
    introduction: "Bersiaplah untuk memperluas imperium kosakata Anda ke tingkat yang lebih menantang. Di bab ini, kita akan mengeksplorasi wazan-wazan Ruba'i (4 huruf asli) dan pembentukan kata benda fungsional seperti Isim Alat, Makan, dan Zaman.",
    introTitle: "Ekspansi Kosakata: Pola Lanjut & Makna Intensitas",
    introVerse: {
      ar: "نَرْفَعُ دَرَجَاتٍ مَنْ نَشَاءُ ۗ وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ",
      translation: "Kami tinggikan derajat orang yang Kami kehendaki; dan di atas tiap-tiap orang yang berpengetahuan itu ada lagi Yang Maha Mengetahui. (QS. Yusuf: 76)"
    },
    introBadges: [
      { icon: "🛠️", text: "MASTER PERKAKAS (Kuasai Isim Alat, Makan, dan Zaman)" },
      { icon: "🔥", text: "POWER USER (Gunakan Sighah Mubalaghah untuk penekanan makna)" }
    ],
    totalSentencesDisplay: "200 Kalimat Morfologi Lanjut",
    cards: [
      {
        id: "l3_4_c1",
        wordAr: "فَعْلَلَ",
        translation: "Wazan Ruba'i Mujarrad",
        description: "Kata kerja dengan 4 huruf asli (tanpa tambahan).",
        category: "Ruba'i",
        examples: [
          { ar: "دَحْرَجَ الْوَلَدُ الْكُرَةَ", translation: "Anak itu menggulingkan bola.", analysis: "Dahraja: 4 huruf asli." },
          { ar: "زَلْزَلَ اللَّهُ الْأَرْضَ", translation: "Allah mengguncangkan bumi.", analysis: "Zalzala: 4 huruf asli." }
        ]
      },
      {
        id: "l3_4_c2",
        wordAr: "مِفْعَالٌ",
        translation: "Isim Alat (Pola 1)",
        description: "Pola kata benda untuk alat/perkakas.",
        category: "Isim Alat",
        examples: [
          { ar: "مِفْتَاحُ الْبَيْتِ", translation: "Kunci rumah.", analysis: "Miftaah: Dari Fataha (Membuka)." },
          { ar: "مِصْبَاحُ النُّورِ", translation: "Lampu cahaya.", analysis: "Misbaah: Dari Sabaha." }
        ]
      },
      {
        id: "l3_4_c3",
        wordAr: "مِفْعَلٌ",
        translation: "Isim Alat (Pola 2)",
        description: "Pola alat lainnya yang umum digunakan.",
        category: "Isim Alat",
        examples: [
          { ar: "مِبْرَدٌ", translation: "Kikir/Asahan.", analysis: "Mibrad: Dari Barada." },
          { ar: "مِقَصٌّ", translation: "Gunting.", analysis: "Miqass: Dari Qassa." }
        ]
      },
      {
        id: "l3_4_c4",
        wordAr: "مِفْعَلَةٌ",
        translation: "Isim Alat (Pola 3)",
        description: "Pola alat feminin.",
        category: "Isim Alat",
        examples: [
          { ar: "مِكْنَسَةٌ", translation: "Sapu.", analysis: "Miknasah: Dari Kanasa (Menyapu)." },
          { ar: "مِلْعَقَةٌ", translation: "Sendok.", analysis: "Mil'aqah: Dari La'iqa (Menjilat)." }
        ]
      },
      {
        id: "l3_4_c5",
        wordAr: "مَفْعَلٌ",
        translation: "Isim Makan/Zaman",
        description: "Tempat atau waktu dilakukannya perbuatan.",
        category: "Tempat & Waktu",
        examples: [
          { ar: "مَطْعَمٌ", translation: "Restoran (Tempat Makan).", analysis: "Dari Tha'ima (Makan)." },
          { ar: "مَكْتَبٌ", translation: "Meja/Kantor (Tempat Menulis).", analysis: "Dari Kataba (Menulis)." }
        ]
      },
      {
        id: "l3_4_c6",
        wordAr: "مَفْعِلٌ",
        translation: "Isim Makan/Zaman (Pola 2)",
        description: "Pola tempat/waktu untuk fi'il tertentu.",
        category: "Tempat & Waktu",
        examples: [
          { ar: "مَسْجِدٌ", translation: "Masjid (Tempat Sujud).", analysis: "Dari Sajada." },
          { ar: "مَوْعِدٌ", translation: "Janji (Waktu Perjanjian).", analysis: "Dari Wa'ada." }
        ]
      },
      {
        id: "l3_4_c7",
        wordAr: "فَعَّالٌ",
        translation: "Sighah Mubalaghah (Amat Sangat)",
        description: "Menunjukkan sifat yang sangat kuat atau sering dilakukan.",
        category: "Mubalaghah",
        examples: [
          { ar: "اللَّهُ رَزَّاقٌ", translation: "Allah Maha Pemberi Rezeki.", analysis: "Razzaaq: Sangat banyak memberi." },
          { ar: "هُوَ كَذَّابٌ", translation: "Dia adalah pembohong besar.", analysis: "Kadz-dzab: Sering bohong." }
        ]
      },
      {
        id: "l3_4_c8",
        wordAr: "فَعُولٌ",
        translation: "Sighah Mubalaghah (Pola 2)",
        description: "Sangat... (Pola lainnya).",
        category: "Mubalaghah",
        examples: [
          { ar: "إِنَّهُ غَفُورٌ", translation: "Sesungguhnya Dia Maha Pengampun.", analysis: "Ghafuur: Sangat mengampuni." },
          { ar: "رَجُلٌ صَبُورٌ", translation: "Lelaki yang sangat penyabar.", analysis: "Shabuur." }
        ]
      },
      {
        id: "l3_4_c9",
        wordAr: "فَعِيلٌ",
        translation: "Sighah Mubalaghah (Pola 3)",
        description: "Sangat... (Pola yang paling umum).",
        category: "Mubalaghah",
        examples: [
          { ar: "اللَّهُ رَحِيمٌ", translation: "Allah Maha Penyayang.", analysis: "Rahiim." },
          { ar: "عَلِيمٌ بِذَاتِ الصُّدُورِ", translation: "Maha Mengetahui isi hati.", analysis: "'Aliim." }
        ]
      },
      {
        id: "l3_4_c10",
        wordAr: "مِفْعَالٌ",
        translation: "Sighah Mubalaghah (Pola 4)",
        description: "Sangat... (Pola yang sama dengan Isim Alat).",
        category: "Mubalaghah",
        examples: [
          { ar: "رَجُلٌ مِقْدَامٌ", translation: "Lelaki yang sangat berani/maju.", analysis: "Miqdaam." }
        ]
      },
      {
        id: "l3_4_c11",
        wordAr: "تَفَعْلَلَ",
        translation: "Wazan Ruba'i Mazid (Tambah 1)",
        description: "Ruba'i Mujarrad ditambah huruf Ta di awal.",
        category: "Ruba'i Mazid",
        examples: [
          { ar: "تَدَحْرَجَ الْوَلَدُ", translation: "Anak itu terguling.", analysis: "Dari Dahraja." }
        ]
      },
      {
        id: "l3_4_c12",
        wordAr: "افْعَنْلَلَ",
        translation: "Wazan Ruba'i Mazid (Tambah 2)",
        description: "Pola 6 huruf (Ruba'i + 2).",
        category: "Ruba'i Mazid",
        examples: [
          { ar: "احْرَنْجَمَ النَّاسُ", translation: "Orang-orang berkumpul.", analysis: "Pola jarang." }
        ]
      },
      {
        id: "l3_4_c13",
        wordAr: "مِقَصٌّ",
        translation: "Gunting",
        description: "Isim Alat pola Mif'al.",
        category: "Isim Alat",
        examples: [
          { ar: "أَقُصُّ الْوَرَقَ بِالْمِقَصِّ", translation: "Saya memotong kertas dengan gunting." }
        ]
      },
      {
        id: "l3_4_c14",
        wordAr: "مِحْرَاثٌ",
        translation: "Bajak Sawah",
        description: "Isim Alat pola Mif'aal.",
        category: "Isim Alat",
        examples: [
          { ar: "يَسْتَعْمِلُ الْفَلَّاحُ الْمِحْرَاثَ", translation: "Petani menggunakan bajak." }
        ]
      },
      {
        id: "l3_4_c15",
        wordAr: "مَلْعَبٌ",
        translation: "Lapangan",
        description: "Isim Makan (Tempat Main).",
        category: "Tempat",
        examples: [
          { ar: "نَلْعَبُ فِي الْمَلْعَبِ", translation: "Kami bermain di lapangan." }
        ]
      },
      {
        id: "l3_4_c16",
        wordAr: "مَخْبَزٌ",
        translation: "Toko Roti / Bakery",
        description: "Isim Makan (Tempat Roti).",
        category: "Tempat",
        examples: [
          { ar: "أَشْتَرِي الْخُبْزَ مِنَ الْمَخْبَزِ", translation: "Saya membeli roti dari toko roti." }
        ]
      },
      {
        id: "l3_4_c17",
        wordAr: "مَشْرِقٌ",
        translation: "Timur (Tempat Terbit)",
        description: "Isim Makan pola Mif'il.",
        category: "Tempat",
        examples: [
          { ar: "تَطْلُعُ الشَّمْسُ مِنَ الْمَشْرِقِ", translation: "Matahari terbit dari timur." }
        ]
      },
      {
        id: "l3_4_c18",
        wordAr: "مَغْرِبٌ",
        translation: "Barat (Tempat Tenggelam)",
        description: "Isim Makan pola Mif'il.",
        category: "Tempat",
        examples: [
          { ar: "تَغْرُبُ الشَّمْسُ فِي الْمَغْرِبِ", translation: "Matahari tenggelam di barat." }
        ]
      },
      {
        id: "l3_4_c19",
        wordAr: "شَكُورٌ",
        translation: "Maha Bersyukur",
        description: "Sighah Mubalaghah pola Fa'uul.",
        category: "Mubalaghah",
        examples: [
          { ar: "إِنَّ اللَّهَ غَفُورٌ شَكُورٌ", translation: "Sesungguhnya Allah Maha Pengampun lagi Maha Bersyukur." }
        ]
      },
      {
        id: "l3_4_c20",
        wordAr: "تَوَّابٌ",
        translation: "Maha Menerima Tobat",
        description: "Sighah Mubalaghah pola Fa''aal.",
        category: "Mubalaghah",
        examples: [
          { ar: "إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ", translation: "Sesungguhnya Dialah Yang Maha Penerima Tobat lagi Maha Penyayang." }
        ]
      },
      {
        id: "l3_4_c21",
        wordAr: "سَمِيعٌ",
        translation: "Maha Mendengar",
        description: "Sighah Mubalaghah pola Fa'iil.",
        category: "Mubalaghah",
        examples: [
          { ar: "وَاللَّهُ سَمِيعٌ عَلِيمٌ", translation: "Dan Allah Maha Mendengar lagi Maha Mengetahui." }
        ]
      },
      {
        id: "l3_4_c22",
        wordAr: "بَصِيرٌ",
        translation: "Maha Melihat",
        description: "Sighah Mubalaghah pola Fa'iil.",
        category: "Mubalaghah",
        examples: [
          { ar: "إِنَّ اللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌ", translation: "Sesungguhnya Allah Maha Melihat apa yang kalian kerjakan." }
        ]
      },
      {
        id: "l3_4_c23",
        wordAr: "قَهَّارٌ",
        translation: "Maha Perkasa",
        description: "Sighah Mubalaghah pola Fa''aal.",
        category: "Mubalaghah",
        examples: [
          { ar: "الْوَاحِدُ الْقَهَّارُ", translation: "Yang Maha Esa lagi Maha Perkasa." }
        ]
      },
      {
        id: "l3_4_c24",
        wordAr: "مَجْمَعٌ",
        translation: "Tempat Berkumpul / Kompleks",
        description: "Isim Makan dari Jama'a.",
        category: "Tempat",
        examples: [
          { ar: "مَجْمَعُ اللُّغَةِ الْعَرَبِيَّةِ", translation: "Lembaga/Kompleks Bahasa Arab." }
        ]
      },
      {
        id: "l3_4_c25",
        wordAr: "مَوْلِدٌ",
        translation: "Waktu Kelahiran",
        description: "Isim Zaman dari Walada.",
        category: "Waktu",
        examples: [
          { ar: "مَوْلِدُ النَّبِيِّ", translation: "Waktu kelahiran Nabi." }
        ]
      },
      {
        id: "l3_4_c26",
        wordAr: "مَهْبِطٌ",
        translation: "Tempat Turun / Landing",
        description: "Isim Makan dari Habatha.",
        category: "Tempat",
        examples: [
          { ar: "مَهْبِطُ الْوَحْيِ", translation: "Tempat turunnya wahyu." }
        ]
      },
      {
        id: "l3_4_c27",
        wordAr: "بَسْمَلَ",
        translation: "Mengucap Basmalah",
        description: "Ruba'i Mujarrad tipe Naht (Singkatan).",
        category: "Ruba'i",
        examples: [
          { ar: "بَسْمَلَ الْقَارِئُ", translation: "Pembaca itu mengucap Bismillah." }
        ]
      },
      {
        id: "l3_4_c28",
        wordAr: "حَمْدَلَ",
        translation: "Mengucap Hamdalah",
        description: "Ruba'i Mujarrad tipe Naht.",
        category: "Ruba'i",
        examples: [
          { ar: "حَمْدَلَ الْمُسْلِمُ بَعْدَ الْأَكْلِ", translation: "Muslim itu mengucap Alhamdulillah setelah makan." }
        ]
      },
      {
        id: "l3_4_c29",
        wordAr: "تَرْجَمَ",
        translation: "Menerjemahkan",
        description: "Ruba'i Mujarrad yang sangat umum.",
        category: "Ruba'i",
        examples: [
          { ar: "تَرْجَمَ الْأُسْتَاذُ الْكِتَابَ", translation: "Guru itu menerjemahkan buku itu." }
        ]
      },
      {
        id: "l3_4_c30",
        wordAr: "طَمْأَنَ",
        translation: "Menenangkan",
        description: "Ruba'i Mujarrad.",
        category: "Ruba'i",
        examples: [
          { ar: "طَمْأَنَ الطَّبِيبُ الْمَرِيضَ", translation: "Dokter itu menenangkan pasien." }
        ]
      }
    ],
    grammarSection: {
      title: "Morfologi Lanjut: Ruba'i dan Kata Fungsional",
      introduction: "Di level menengah ini, kita mengenal kata-kata yang lebih kompleks strukturnya namun sangat fungsional untuk kehidupan sehari-hari.",
      rules: [
        {
          title: "1. Fi'il Ruba'i (4 Huruf Asli)",
          description: "Ada kata kerja yang memang aslinya 4 huruf, bukan 3. Pola utamanya adalah 'Fa'lala'.",
          examples: [
            { ar: "دَحْرَجَ (Dahraja)", translation: "Menggulingkan" },
            { ar: "زَلْزَلَ (Zalzala)", translation: "Mengguncangkan" },
            { ar: "تَرْجَمَ (Tarjama)", translation: "Menerjemahkan" }
          ]
        },
        {
          title: "2. Isim Alat (Nama Perkakas)",
          description: "Bahasa Arab punya 'wadah' khusus untuk menamai alat. Cukup masukkan akar kata ke polanya.",
          examples: [
            { ar: "مِفْعَال (Mif'aal)", translation: "Contoh: Miftaah (Kunci)" },
            { ar: "مِفْعَل (Mif'al)", translation: "Contoh: Miqass (Gunting)" },
            { ar: "مِفْعَلَة (Mif'alah)", translation: "Contoh: Mil'aqah (Sendok)" }
          ]
        },
        {
          title: "3. Sighah Mubalaghah (Penyangatan)",
          description: "Untuk menyatakan sesuatu yang 'sangat' atau 'Maha', gunakan pola mubalaghah.",
          examples: [
            { ar: "فَعَّال (Fa''aal)", translation: "Contoh: Tawwaab (Maha Penerima Tobat)" },
            { ar: "فَعُول (Fa'uul)", translation: "Contoh: Ghafuur (Maha Pengampun)" },
            { ar: "فَعِيل (Fa'iil)", translation: "Contoh: Rahiim (Maha Penyayang)" }
          ]
        }
      ],
      tips: "Isim Makan (Tempat) dan Isim Zaman (Waktu) memiliki pola yang sama (Maf'al/Maf'il). Konteks kalimatlah yang menentukan apakah ia berarti tempat atau waktu."
    },
    dialogueSection: {
      title: "Dialog: Di Bengkel Kreativitas",
      introduction: "Zaid dan Umar sedang berbicara tentang alat-alat dan pekerjaan mereka.",
      dialogues: [
        {
          speaker: "Zaid",
          ar: "أَيْنَ مِفْتَاحُ الْمَعْمَلِ يَا عُمَرُ؟",
          en: "Where is the laboratory key, O Umar?",
          tr: "Di mana kunci laboratorium, wahai Umar?"
        },
        {
          speaker: "Umar",
          ar: "هُوَ مَعِي. أُرِيدُ أَنْ أُتَرْجِمَ هَذَا الْبَحْثَ فِي الْمَكْتَبِ.",
          en: "It is with me. I want to translate this research in the office.",
          tr: "Ada padaku. Aku ingin menerjemahkan riset ini di kantor."
        },
        {
          speaker: "Zaid",
          ar: "مَا شَاءَ اللَّهُ! اللَّهُ رَزَّاقٌ يُعْطِيكَ الْعِلْمَ وَالْمَالَ.",
          en: "Maa syaa Allah! Allah is the Sustainer who gives you knowledge and wealth.",
          tr: "Maa syaa Allah! Allah Maha Pemberi Rezeki yang memberimu ilmu dan harta."
        },
        {
          speaker: "Umar",
          ar: "الْحَمْدُ لِلَّهِ. سَأَذْهَبُ إِلَى الْمَطْعَمِ بَعْدَ ذَلِكَ.",
          en: "Praise be to Allah. I will go to the restaurant after that.",
          tr: "Alhamdulillah. Saya akan pergi ke restoran setelah itu."
        }
      ]
    },
    quiz: [
      {
        id: "l3_4_q1",
        question: "Apa wazan dasar untuk Fi'il Ruba'i Mujarrad?",
        options: ["Fa'ala", "Af'ala", "Fa'lala", "Tafa'ala"],
        correctAnswer: "Fa'lala",
        explanation: "Pola dasar kata kerja 4 huruf asli adalah Fa'lala (Contoh: Dahraja).",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q2",
        question: "Manakah yang merupakan Isim Alat dari 'Fataha' (Membuka)?",
        options: ["Maftuuh", "Miftaah", "Faatih", "Fathun"],
        correctAnswer: "Miftaah",
        explanation: "Miftaah (Kunci) mengikuti pola Isim Alat Mif'aal.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q3",
        question: "Apa arti 'Zalzala' (زَلْزَلَ)?",
        options: ["Membelah", "Menggulingkan", "Mengguncangkan", "Menghancurkan"],
        correctAnswer: "Mengguncangkan",
        explanation: "Zalzala adalah fi'il ruba'i yang berarti mengguncangkan.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q4",
        question: "Apa pola Isim Makan (Tempat) untuk kata 'Sajada'?",
        options: ["Saajid", "Masjuud", "Masjid", "Suujuud"],
        correctAnswer: "Masjid",
        explanation: "Masjid (Tempat Sujud) mengikuti pola Maf'il.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q5",
        question: "Sighah Mubalaghah 'Razzaaq' berarti...",
        options: ["Pemberi rezeki", "Maha Pemberi Rezeki (Banyak/Terus-menerus)", "Mencari rezeki", "Penerima rezeki"],
        correctAnswer: "Maha Pemberi Rezeki (Banyak/Terus-menerus)",
        explanation: "Pola Fa''aal menunjukkan intensitas yang sangat tinggi.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q6",
        question: "Manakah yang merupakan Isim Alat?",
        options: ["Masjid", "Mibrad (Kikir)", "Maktub", "Manzil"],
        correctAnswer: "Mibrad (Kikir)",
        explanation: "Mibrad adalah alat untuk mengikir/mengasah.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q7",
        question: "Apa arti 'Tarjama' (تَرْجَمَ)?",
        options: ["Menulis", "Membaca", "Menerjemahkan", "Berbicara"],
        correctAnswer: "Menerjemahkan",
        explanation: "Tarjama adalah fi'il ruba'i yang berarti menerjemahkan.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q8",
        question: "Pola 'Mif'alatun' (مِفْعَلَةٌ) digunakan untuk...",
        options: ["Isim Fa'il", "Isim Maf'ul", "Isim Alat", "Masdar"],
        correctAnswer: "Isim Alat",
        explanation: "Contoh: Mil'aqah (Sendok), Miknasah (Sapu).",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q9",
        question: "Apa arti 'Ghafuur'?",
        options: ["Maha Pengampun", "Maha Mengetahui", "Maha Melihat", "Maha Mendengar"],
        correctAnswer: "Maha Pengampun",
        explanation: "Ghafuur adalah mubalaghah dari Ghafara (Mengampuni).",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q10",
        question: "Kata 'Mabsuuth' (Senang) berasal dari pola...",
        options: ["Isim Fa'il", "Isim Maf'ul", "Mubalaghah", "Zharf"],
        correctAnswer: "Isim Maf'ul",
        explanation: "Berasal dari Basatha (Membentangkan/Melapangkan).",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q11",
        question: "Apa Isim Makan dari 'Kataba'?",
        options: ["Kaatib", "Maktab", "Maktuub", "Kitaabah"],
        correctAnswer: "Maktab",
        explanation: "Maktab berarti kantor atau meja tulis (Tempat Menulis).",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q12",
        question: "Apa arti 'Basmala' (بَسْمَلَ)?",
        options: ["Membaca buku", "Mengucap Bismillah", "Mulai bekerja", "Masuk rumah"],
        correctAnswer: "Mengucap Bismillah",
        explanation: "Ini adalah fi'il ruba'i hasil singkatan (Naht).",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q13",
        question: "Wazan 'Taf'iil' adalah masdar dari bab...",
        options: ["Af'ala", "Fa''ala", "Faa'ala", "Fa'lala"],
        correctAnswer: "Fa''ala",
        explanation: "Contoh: Ta'liim, Tadriib, Tathwiir.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q14",
        question: "Manakah yang merupakan Isim Zaman (Waktu)?",
        options: ["Miftaah", "Mawlid (Waktu lahir)", "Maktab", "Masjid"],
        correctAnswer: "Mawlid (Waktu lahir)",
        explanation: "Mawlid menunjukkan waktu terjadinya kelahiran.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q15",
        question: "Apa arti 'Rahiim'?",
        options: ["Maha Pengasih", "Maha Penyayang", "Maha Mulia", "Maha Kuasa"],
        correctAnswer: "Maha Penyayang",
        explanation: "Ar-Rahiim adalah mubalaghah yang menunjukkan rahmat yang berkelanjutan.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q16",
        question: "Isim Makan 'Mat'am' (مَطْعَم) berarti...",
        options: ["Toko", "Pasar", "Restoran", "Dapur"],
        correctAnswer: "Restoran",
        explanation: "Tempat makan (dari Tha'ima).",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q17",
        question: "Apa Isim Alat untuk 'Menyapu' (Kanasa)?",
        options: ["Maknus", "Miknasah", "Kaanis", "Kansun"],
        correctAnswer: "Miknasah",
        explanation: "Miknasah berarti sapu.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q18",
        question: "Sighah Mubalaghah pola 'Fa'uul' contohnya adalah...",
        options: ["'Aliim", "Syakuur", "Razzaaq", "Mubarak"],
        correctAnswer: "Syakuur",
        explanation: "Syakuur (Maha Bersyukur) mengikuti pola Fa'uul.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q19",
        question: "Apa arti 'Hamdala' (حَمْدَلَ)?",
        options: ["Memuji", "Mengucap Alhamdulillah", "Sabar", "Membantu"],
        correctAnswer: "Mengucap Alhamdulillah",
        explanation: "Singkatan dari Alhamdu lillah.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q20",
        question: "Isim Makan 'Maghrib' menunjukkan tempat...",
        options: ["Terbit", "Tenggelam (Barat)", "Tengah", "Utara"],
        correctAnswer: "Tenggelam (Barat)",
        explanation: "Dari Gharaba (Tenggelam).",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q21",
        question: "Apa pola Isim Alat dari 'Gunting' (Qassa)?",
        options: ["Mif'aal", "Mif'al", "Mif'alah", "Fu'al"],
        correctAnswer: "Mif'al",
        explanation: "Miqass (Mif'al).",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q22",
        question: "Apa arti 'Thama-ana' (طَمْأَنَ)?",
        options: ["Menenangkan", "Takut", "Ragu", "Lari"],
        correctAnswer: "Menenangkan",
        explanation: "Fi'il ruba'i yang berarti menenangkan.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q23",
        question: "Isim Zaman 'Maw-'id' berarti...",
        options: ["Tempat duduk", "Waktu perjanjian/janji", "Waktu makan", "Waktu tidur"],
        correctAnswer: "Waktu perjanjian/janji",
        explanation: "Dari Wa'ada (Berjanji).",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q24",
        question: "Manakah yang merupakan Sighah Mubalaghah?",
        options: ["Kaatib", "Maktuub", "Kadz-dzaab", "Kitaab"],
        correctAnswer: "Kadz-dzaab",
        explanation: "Kadz-dzaab (Sangat pendusta).",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q25",
        question: "Apa Isim Makan untuk 'Belajar' (Darasa)?",
        options: ["Daris", "Madrasah", "Madruus", "Darsun"],
        correctAnswer: "Madrasah",
        explanation: "Madrasah (Tempat Belajar).",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q26",
        question: "Apa arti 'Dahraja'?",
        options: ["Membangun", "Menggulingkan", "Menanam", "Memetik"],
        correctAnswer: "Menggulingkan",
        explanation: "Fi'il ruba'i yang berarti menggulingkan sesuatu.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q27",
        question: "Pola 'Mif'aal' (مِفْعَال) bisa bermakna...",
        options: ["Isim Alat saja", "Sighah Mubalaghah saja", "Isim Alat & Sighah Mubalaghah", "Masdar"],
        correctAnswer: "Isim Alat & Sighah Mubalaghah",
        explanation: "Contoh: Miftaah (Alat) dan Miqdaam (Mubalaghah).",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q28",
        question: "Apa Isim Makan dari 'Jama-a' (Berkumpul)?",
        options: ["Jaami'", "Majmu'", "Majma'", "Jima'"],
        correctAnswer: "Majma'",
        explanation: "Majma' berarti tempat berkumpul atau kompleks.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q29",
        question: "Ilmu yang mempelajari akar kata dan pecahannya disebut...",
        options: ["Nahwu", "Isytiqaq (Etimologi)", "Tajwid", "Fiqh"],
        correctAnswer: "Isytiqaq (Etimologi)",
        explanation: "Isytiqaq membahas bagaimana kata dicabang-cabangkan dari akarnya.",
        type: "multiple-choice"
      },
      {
        id: "l3_4_q30",
        question: "Kenapa wazan 'Razzaaq' penting dipahami?",
        options: ["Hanya untuk ujian", "Untuk memahami sifat Allah yang tak terbatas", "Biar tahu cara jualan", "Tidak penting"],
        correctAnswer: "Untuk memahami sifat Allah yang tak terbatas",
        explanation: "Sighah Mubalaghah membantu kita memahami kedalaman makna Asmaul Husna.",
        type: "multiple-choice"
      }
    ]
  }
};
