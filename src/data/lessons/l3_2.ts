import { Lesson } from "../../types";

export const l3_2: Lesson = {
  id: "l3_2",
  title: "BAB 2: AN-NAHWU AL-MUTAWASSIT (Nahwu Lanjut)",
  titleAr: "النَّحْوُ الْمُتَوَسِّطُ",
  description: "Dinamika Amil: Mengendalikan pengaruh Inna, Kaana, Hal, dan Tamyiz dalam kalimat.",
  xpReward: 60,
  isCompleted: false,
  isLocked: false,
  type: "grammar",
  content: {
    introduction: "Luar biasa! Setelah Anda berhasil menguasai dasar-dasar I'rab pada Bab 1, kini lisan Anda telah siap untuk mendaki anak tangga berikutnya. Di sini, kita akan mengeksplorasi kekuatan dari 'Amil Nawasikh'—kelompok kata pengubah kedudukan kalimat dasar, yang dipimpin oleh dinasti bersaudara yang sangat mahsyur: Inna dan Kaana.",
    introTitle: "Dinamika Amil: Mengendalikan Pengaruh Dalam Kalimat",
    introVerse: {
      ar: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      translation: "Sesungguhnya sesudah kesulitan itu ada kemudahan. (QS. Al-Insyirah: 6)"
    },
    introBadges: [
      { icon: "🏗️", text: "ARSITEK KALIMAT (Kuasai pengaruh Inna dan Kaana)" },
      { icon: "🎭", text: "EKSPRESI ELITE (Gunakan Haal dan Tamyiz untuk detail profesional)" }
    ],
    totalSentencesDisplay: "150 Kalimat Dinamika Kalimat",
    cards: [
      {
        id: "l3_2_c1",
        wordAr: "إِنَّ وَأَخَوَاتُهَا",
        translation: "Inna dan Saudaranya",
        description: "Huruf yang menashabkan Isim dan merafa'kan Khabar.",
        category: "Amil Nawasikh",
        examples: [
          { ar: "إِنَّ اللَّهَ عَلِيمٌ", translation: "Sesungguhnya Allah Maha Mengetahui.", analysis: "Allaha: Mansub, 'Aliimun: Marfu'." }
        ]
      },
      {
        id: "l3_2_c2",
        wordAr: "كَانَ وَأَخَوَاتُهَا",
        translation: "Kaana dan Saudaranya",
        description: "Fi'il yang merafa'kan Isim dan menashabkan Khabar.",
        category: "Amil Nawasikh",
        examples: [
          { ar: "كَانَ اللَّهُ عَلِيمًا", translation: "Allah (dahulu dan selalu) Maha Mengetahui.", analysis: "Allahu: Marfu', 'Aliiman: Mansub." }
        ]
      },
      {
        id: "l3_2_c3",
        wordAr: "أَنَّ",
        translation: "Bahwa (Anna)",
        description: "Saudara Inna yang berfungsi sebagai penyambung di tengah kalimat.",
        category: "Amil Nawasikh",
        examples: [
          { ar: "أَعْلَمُ أَنَّ اللَّهَ قَدِيرٌ", translation: "Saya tahu bahwa Allah Maha Kuasa.", analysis: "Nashab Isim, Rafa' Khabar." }
        ]
      },
      {
        id: "l3_2_c4",
        wordAr: "كَأَنَّ",
        translation: "Seakan-akan",
        description: "Saudara Inna untuk penyerupaan (Tasybih).",
        category: "Amil Nawasikh",
        examples: [
          { ar: "كَأَنَّ الْجَمَلَ سَفِينَةٌ", translation: "Seakan-akan unta itu adalah kapal (padang pasir).", analysis: "Isim: Mansub." }
        ]
      },
      {
        id: "l3_2_c5",
        wordAr: "لَكِنَّ",
        translation: "Akan tetapi",
        description: "Saudara Inna untuk menyanggah atau menyusul (Istidrak).",
        category: "Amil Nawasikh",
        examples: [
          { ar: "الْبَيْتُ جَمِيلٌ لَكِنَّ الْغُرْفَةَ صَغِيرَةٌ", translation: "Rumah itu indah akan tetapi kamarnya kecil.", analysis: "Isim: Mansub." }
        ]
      },
      {
        id: "l3_2_c6",
        wordAr: "لَعَلَّ",
        translation: "Semoga (Harapan)",
        description: "Saudara Inna untuk Tarajji (harapan yang mungkin).",
        category: "Amil Nawasikh",
        examples: [
          { ar: "لَعَلَّ اللَّهَ يَرْحَمُنَا", translation: "Semoga Allah merahmati kita.", analysis: "Allaha: Mansub." }
        ]
      },
      {
        id: "l3_2_c7",
        wordAr: "لَيْتَ",
        translation: "Andaikan (Khayalan)",
        description: "Saudara Inna untuk Tamanni (angan-angan yang sulit/mustahil).",
        category: "Amil Nawasikh",
        examples: [
          { ar: "لَيْتَ الشَّبَابَ يَعُودُ", translation: "Andaikan masa muda kembali.", analysis: "As-Syabaaba: Mansub." }
        ]
      },
      {
        id: "l3_2_c8",
        wordAr: "لَا النَّافِيَةُ لِلْجِنْسِ",
        translation: "Laa Penafi Jenis",
        description: "Laa yang menafikan seluruh jenis isim setelahnya (status Nashab).",
        category: "Amil Nawasikh",
        examples: [
          { ar: "لَا إِلَهَ إِلَّا اللَّهُ", translation: "Tidak ada Tuhan (yang berhak disembah) kecuali Allah.", analysis: "Ilaha: Mansub." }
        ]
      },
      {
        id: "l3_2_c9",
        wordAr: "أَصْبَحَ",
        translation: "Menjadi (Waktu Pagi)",
        description: "Saudara Kaana yang menunjukkan perubahan status.",
        category: "Amil Nawasikh",
        examples: [
          { ar: "أَصْبَحَ الْوَلَدُ مُهَنْدِسًا", translation: "Anak itu telah menjadi insinyur.", analysis: "Merafa'kan Isim, Menashabkan Khabar." }
        ]
      },
      {
        id: "l3_2_c10",
        wordAr: "صَارَ",
        translation: "Menjadi (Perubahan Umum)",
        description: "Saudara Kaana untuk perpindahan sifat (Tahawwul).",
        category: "Amil Nawasikh",
        examples: [
          { ar: "صَارَ الطِّينُ خَزَفًا", translation: "Tanah liat itu telah menjadi keramik.", analysis: "Rafa' Isim, Nashab Khabar." }
        ]
      },
      {
        id: "l3_2_c11",
        wordAr: "لَيْسَ",
        translation: "Bukan / Tidak",
        description: "Saudara Kaana untuk peniadaan (Nafi).",
        category: "Amil Nawasikh",
        examples: [
          { ar: "لَيْسَ الْعِلْمُ صَعْبًا", translation: "Ilmu itu tidaklah sulit.", analysis: "Al-'Ilmu: Marfu', Sha'ban: Mansub." }
        ]
      },
      {
        id: "l3_2_c12",
        wordAr: "الْحَالُ",
        translation: "Keterangan Keadaan (Hal)",
        description: "Isim Mansub yang menjelaskan kondisi subjek/objek.",
        category: "Manshubat",
        examples: [
          { ar: "جَاءَ زَيْدٌ رَاكِبًا", translation: "Zaid datang dalam keadaan berkendara.", analysis: "Raakiban: Hal (Mansub)." }
        ]
      },
      {
        id: "l3_2_c13",
        wordAr: "التَّمْيِيزُ",
        translation: "Penjelas (Tamyiz)",
        description: "Isim Mansub yang menjelaskan ketidakjelasan kata sebelumnya.",
        category: "Manshubat",
        examples: [
          { ar: "اشْتَرَيْتُ عِشْرِينَ كِتَابًا", translation: "Saya membeli dua puluh buku.", analysis: "Kitaaban: Tamyiz (Mansub)." }
        ]
      },
      {
        id: "l3_2_c14",
        wordAr: "الْمَفْعُولُ فِيهِ",
        translation: "Keterangan Tempat/Waktu (Zharf)",
        description: "Statusnya selalu Mansub.",
        category: "Manshubat",
        examples: [
          { ar: "سَافَرْتُ لَيْلًا", translation: "Saya bepergian pada malam hari.", analysis: "Lailan: Zharf Zaman (Mansub)." }
        ]
      },
      {
        id: "l3_2_c15",
        wordAr: "الْمَفْعُولُ لِأَجْلِهِ",
        translation: "Keterangan Alasan",
        description: "Isim yang menjelaskan tujuan/alasan dilakukan perbuatan.",
        category: "Manshubat",
        examples: [
          { ar: "قُمْتُ إِجْلَالًا لِلْأُسْتَاذِ", translation: "Saya berdiri karena hormat kepada guru.", analysis: "Ijlaalan: Maf'ul li Ajlih (Mansub)." }
        ]
      },
      {
        id: "l3_2_c16",
        wordAr: "الْمَفْعُولُ الْمُطْلَقُ",
        translation: "Keterangan Penegas",
        description: "Masdar yang disebut setelah fi'ilnya untuk penguatan.",
        category: "Manshubat",
        examples: [
          { ar: "ضَرَبْتُهُ ضَرْبًا", translation: "Saya benar-benar memukulnya.", analysis: "Dharban: Maf'ul Muthlaq (Mansub)." }
        ]
      },
      {
        id: "l3_2_c17",
        wordAr: "الِاسْتِثْنَاءُ",
        translation: "Pengecualian",
        description: "Mengeluarkan sesuatu dari hukum umum (menggunakan Illa).",
        category: "Manshubat",
        examples: [
          { ar: "حَضَرَ الطُّلَّابُ إِلَّا زَيْدًا", translation: "Para siswa hadir kecuali Zaid.", analysis: "Zaidan: Mustatsna (Mansub)." }
        ]
      },
      {
        id: "l3_2_c18",
        wordAr: "الْمُنَادَى",
        translation: "Panggilan",
        description: "Status kata setelah huruf panggilan (Ya).",
        category: "Manshubat",
        examples: [
          { ar: "يَا عَبْدَ اللَّهِ", translation: "Wahai Abdullah.", analysis: "'Abda: Mansub (Munada Mudhaf)." }
        ]
      },
      {
        id: "l3_2_c19",
        wordAr: "خَبَرُ كَانَ",
        translation: "Khabar Kaana",
        description: "Statusnya selalu Mansub.",
        category: "Amil Nawasikh",
        examples: [
          { ar: "أَصْبَحَ الْجَوُّ بَارِدًا", translation: "Cuaca telah menjadi dingin.", analysis: "Baaridan: Mansub." }
        ]
      },
      {
        id: "l3_2_c20",
        wordAr: "اسْمُ إِنَّ",
        translation: "Isim Inna",
        description: "Statusnya selalu Mansub.",
        category: "Amil Nawasikh",
        examples: [
          { ar: "إِنَّ الْعِلْمَ نَافِعٌ", analysis: "Al-'Ilma: Mansub." }
        ]
      },
      {
        id: "l3_2_c21",
        wordAr: "الْمَنْصُوبَاتُ",
        translation: "Daftar Kata Berstatus Nashab",
        description: "Ada 15 jabatan kata yang berstatus Mansub dalam Nahwu.",
        category: "Ringkasan",
        examples: [
          { ar: "مَفْعُولَات، حَال، تَمْيِيز..." }
        ]
      },
      {
        id: "l3_2_c22",
        wordAr: "مَا دَامَ",
        translation: "Selama (Waktu)",
        description: "Saudara Kaana yang menunjukkan durasi.",
        category: "Amil Nawasikh",
        examples: [
          { ar: "لَا أَخْرُجُ مَا دَامَ الْمَطَرُ نَازِلًا", translation: "Saya tidak akan keluar selama hujan turun.", analysis: "Naazilan: Mansub." }
        ]
      },
      {
        id: "l3_2_c23",
        wordAr: "مَا زَالَ",
        translation: "Masih (Senantiasa)",
        description: "Saudara Kaana yang menunjukkan kontinuitas.",
        category: "Amil Nawasikh",
        examples: [
          { ar: "مَا زَالَ الطَّالِبُ يَدْرُسُ", translation: "Siswa itu masih belajar.", analysis: "Rafa' Isim, Nashab Khabar." }
        ]
      },
      {
        id: "l3_2_c24",
        wordAr: "إِلَّا",
        translation: "Kecuali",
        description: "Huruf utama untuk Istitsna'.",
        category: "Alat",
        examples: [
          { ar: "كُلُّ شَيْءٍ هَالِكٌ إِلَّا وَجْهَهُ", analysis: "Wajhahu: Mustatsna." }
        ]
      },
      {
        id: "l3_2_c25",
        wordAr: "ظَرُوفُ الْمَكَانِ",
        translation: "Keterangan Tempat",
        description: "Kata seperti: Amama (depan), Khalfa (belakang), Fauqa (atas).",
        category: "Manshubat",
        examples: [
          { ar: "الْكِتَابُ فَوْقَ الْمَكْتَبِ", analysis: "Fauqa: Zharf (Mansub)." }
        ]
      },
      {
        id: "l3_2_c26",
        wordAr: "ظَرُوفُ الزَّمَانِ",
        translation: "Keterangan Waktu",
        description: "Kata seperti: Yauman (sehari), Lailan (semalam), Ghadan (besok).",
        category: "Manshubat",
        examples: [
          { ar: "سَأَسَافِرُ غَدًا", analysis: "Ghadan: Zharf (Mansub)." }
        ]
      },
      {
        id: "l3_2_c27",
        wordAr: "أَمَامَ",
        translation: "Di depan",
        description: "Zharf Makan yang paling sering digunakan.",
        category: "Zharf",
        examples: [
          { ar: "الْبَيْتُ أَمَامَ الْمَسْجِدِ", analysis: "Amaama: Mansub." }
        ]
      },
      {
        id: "l3_2_c28",
        wordAr: "خَلْفَ",
        translation: "Di belakang",
        description: "Lawan dari Amama.",
        category: "Zharf",
        examples: [
          { ar: "الْبُسْتَانُ خَلْفَ الدَّارِ", analysis: "Khalfa: Mansub." }
        ]
      },
      {
        id: "l3_2_c29",
        wordAr: "فَوْقَ",
        translation: "Di atas",
        description: "Menunjukkan posisi lebih tinggi.",
        category: "Zharf",
        examples: [
          { ar: "السَّمَاءُ فَوْقَنَا", analysis: "Fauqa: Mansub." }
        ]
      },
      {
        id: "l3_2_c30",
        wordAr: "تَحْتَ",
        translation: "Di bawah",
        description: "Menunjukkan posisi lebih rendah.",
        category: "Zharf",
        examples: [
          { ar: "الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ", analysis: "Tahta: Mansub." }
        ]
      }
    ],
    grammarSection: {
      title: "Dinamika Amil: Inna, Kaana, dan Keterangan Tambahan",
      introduction: "Kalimat bahasa Arab bisa berubah drastis maknanya dengan hadirnya 'penguasa' kalimat. Inna menegaskan, Kaana menceritakan status.",
      rules: [
        {
          title: "1. Dinasti Inna (Penegas)",
          description: "Inna dan saudaranya mengubah Mubtada (Isim Inna) menjadi Mansub dan Khabar menjadi Marfu'.",
          examples: [
            { ar: "إِنَّ زَيْدًا مَرِيضٌ", translation: "Sesungguhnya Zaid (Isim Inna) sakit (Khabar Inna)." }
          ]
        },
        {
          title: "2. Dinasti Kaana (Status/Waktu)",
          description: "Kaana bekerja terbalik: Mubtada (Isim Kaana) tetap Marfu', tapi Khabar menjadi Mansub.",
          examples: [
            { ar: "كَانَ زَيْدٌ مَرِيضًا", translation: "Zaid (dahulu/tadinya) sakit." }
          ]
        },
        {
          title: "3. Hal dan Tamyiz (Si Paling Detail)",
          description: "Hal menjelaskan 'Bagaimana' (Keadaan), Tamyiz menjelaskan 'Apa' (Spesifikasi). Keduanya selalu Mansub.",
          examples: [
            { ar: "ضَحِكَ الطِّفْلُ مَسْرُورًا (Hal)", translation: "Anak itu tertawa (dalam keadaan) bahagia." },
            { ar: "عِنْدِي رِطْلٌ زَيْتًا (Tamyiz)", translation: "Saya punya seliter (berupa) minyak." }
          ]
        }
      ],
      tips: "Hati-hati! Jangan tertukar antara Inna dan Kaana. Inna = Nashab-Rafa'. Kaana = Rafa'-Nashab."
    },
    dialogueSection: {
      title: "Dialog: Perdebatan Inna dan Kaana",
      introduction: "Dua orang siswa sedang berlatih membuat kalimat kompleks menggunakan amil nawasikh.",
      dialogues: [
        {
          speaker: "Siswa A",
          ar: "هَلْ تَعْرِفُ أَنَّ الْبَيْتَ كَبِيرٌ؟",
          en: "Do you know that the house is big?",
          tr: "Apakah kamu tahu bahwa rumah itu besar?"
        },
        {
          speaker: "Siswa B",
          ar: "نَعَمْ، لَكِنَّ الْغُرْفَةَ صَغِيرَةٌ. لَيْتَ لِي بَيْتًا أَوْسَعَ!",
          en: "Yes, but the room is small. I wish I had a wider house!",
          tr: "Ya, tapi kamarnya kecil. Andaikan aku punya rumah yang lebih luas!"
        },
        {
          speaker: "Siswa A",
          ar: "لَا تَحْزَنْ! كَانَ زَيْدٌ فَقِيرًا فَأَصْبَحَ غَنِيًّا بِالْعَمَلِ.",
          en: "Don't be sad! Zaid was poor then he became rich through hard work.",
          tr: "Jangan sedih! Zaid tadinya miskin lalu menjadi kaya dengan bekerja."
        },
        {
          speaker: "Siswa B",
          ar: "صَدَقْتَ. لَعَلَّ اللَّهَ يَرْزُقُنَا الرِّزْقَ الْحَلَالَ.",
          en: "You are right. May Allah grant us lawful sustenance.",
          tr: "Kamu benar. Semoga Allah memberi kita rezeki yang halal."
        }
      ]
    },
    quiz: [
      {
        id: "l3_2_q1",
        question: "Apa fungsi utama dari amil Inna?",
        options: ["Merafa'kan Isim dan Menashabkan Khabar", "Menashabkan Isim dan Merafa'kan Khabar", "Menashabkan keduanya", "Merafa'kan keduanya"],
        correctAnswer: "Menashabkan Isim dan Merafa'kan Khabar",
        explanation: "Inna wa akhawaatuha menashabkan Mubtada (Isim Inna) dan merafa'kan Khabar.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q2",
        question: "Mana yang merupakan saudara (akhawat) dari Kaana?",
        options: ["Anna", "Lakinna", "Ashbaha", "La'alla"],
        correctAnswer: "Ashbaha",
        explanation: "Ashbaha adalah salah satu saudara Kaana yang menunjukkan waktu pagi.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q3",
        question: "Status I'rab bagi Khabar Kaana adalah...",
        options: ["Marfu'", "Mansub", "Majrur", "Majzum"],
        correctAnswer: "Mansub",
        explanation: "Kaana merafa'kan isim dan menashabkan khabar.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q4",
        question: "Apa arti dari 'Layta' (لَيْتَ)?",
        options: ["Sesungguhnya", "Semoga", "Andaikan (Khayalan)", "Akan tetapi"],
        correctAnswer: "Andaikan (Khayalan)",
        explanation: "Layta digunakan untuk angan-angan yang sulit tercapai (Tamanni).",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q5",
        question: "Isim yang menjelaskan keadaan pelaku saat kejadian disebut...",
        options: ["Tamyiz", "Hal", "Zharf", "Maf'ul bih"],
        correctAnswer: "Hal",
        explanation: "Hal adalah penjelas keadaan (Contoh: Ja'a rakiban).",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q6",
        question: "Pilih kalimat yang benar secara Nahwu!",
        options: ["كَانَ زَيْدٌ صَالِحٌ", "كَانَ زَيْدًا صَالِحًا", "كَانَ زَيْدٌ صَالِحًا", "كَانَ زَيْدٍ صَالِحٍ"],
        correctAnswer: "كَانَ زَيْدٌ صَالِحًا",
        explanation: "Isim Kaana Marfu' (Zaidun) dan Khabarnya Mansub (Shalihan).",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q7",
        question: "Apa arti 'La'alla' (لَعَلَّ)?",
        options: ["Semoga (Harapan)", "Tetapi", "Seakan-akan", "Bukan"],
        correctAnswer: "Semoga (Harapan)",
        explanation: "La'alla digunakan untuk harapan yang mungkin terjadi (Tarajji).",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q8",
        question: "Berapa jumlah saudara Inna?",
        options: ["4", "6", "10", "13"],
        correctAnswer: "6",
        explanation: "Inna, Anna, Ka-anna, Lakinna, Layta, La'alla.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q9",
        question: "Kata 'Laisa' (لَيْسَ) berfungsi untuk...",
        options: ["Menetapkan", "Menaifkan/Meniadakan", "Mengharap", "Meragu"],
        correctAnswer: "Menaifkan/Meniadakan",
        explanation: "Laisa berarti 'Bukan/Tidak'.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q10",
        question: "Apa I'rab dari Tamyiz?",
        options: ["Marfu'", "Mansub", "Majrur", "Majzum"],
        correctAnswer: "Mansub",
        explanation: "Tamyiz (penjelas spesifikasi) selalu berstatus Mansub.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q11",
        question: "Terjemahkan: 'Sesungguhnya Muhammad itu utusan Allah'",
        options: ["إِنَّ مُحَمَّدٌ رَسُولُ اللَّهِ", "إِنَّ مُحَمَّدًا رَسُولُ اللَّهِ", "كَانَ مُحَمَّدًا رَسُولُ اللَّهِ", "لَيْسَ مُحَمَّدًا رَسُولُ اللَّهِ"],
        correctAnswer: "إِنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
        explanation: "Inna menashabkan Isim (Muhammadan).",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q12",
        question: "Mana yang merupakan Zharf Makan (Keterangan Tempat)?",
        options: ["Lailan (Semalam)", "Amaama (Depan)", "Ghadan (Besok)", "Yauman (Sehari)"],
        correctAnswer: "Amaama (Depan)",
        explanation: "Amaama menunjukkan posisi tempat.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q13",
        question: "Apa fungsi dari 'Ka-anna' (كَأَنَّ)?",
        options: ["Penegasan", "Penyangkalan", "Penyerupaan (Tasybih)", "Harapan"],
        correctAnswer: "Penyerupaan (Tasybih)",
        explanation: "Ka-anna berarti 'Seolah-olah'.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q14",
        question: "Isim Mansub setelah 'Illa' dalam kalimat pengecualian disebut...",
        options: ["Maf'ul", "Tamyiz", "Mustatsna", "Munada"],
        correctAnswer: "Mustatsna",
        explanation: "Mustatsna adalah yang dikecualikan.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q15",
        question: "Jabatan kata 'Amama' dalam 'Zaidun Amama al-Baiti' adalah...",
        options: ["Hal", "Tamyiz", "Zharf Makan", "Maf'ul li Ajlih"],
        correctAnswer: "Zharf Makan",
        explanation: "Menunjukkan keterangan tempat di depan rumah.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q16",
        question: "Kata 'Madaama' menunjukkan makna...",
        options: ["Masih", "Akan", "Selama (Durasi)", "Berhenti"],
        correctAnswer: "Selama (Durasi)",
        explanation: "Madaama digunakan untuk menetapkan durasi waktu.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q17",
        question: "Pilih kalimat yang benar!",
        options: ["إِنَّ اللَّهُ غَفُورٌ", "إِنَّ اللَّهَ غَفُورًا", "إِنَّ اللَّهَ غَفُورٌ", "كَانَ اللَّهَ غَفُورٌ"],
        correctAnswer: "إِنَّ اللَّهَ غَفُورٌ",
        explanation: "Isim Inna Mansub (Allaha) dan Khabar Inna Marfu' (Ghafuurun).",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q18",
        question: "Apa arti dari 'Khalfa' (خَلْفَ)?",
        options: ["Depan", "Belakang", "Atas", "Bawah"],
        correctAnswer: "Belakang",
        explanation: "Khalfa adalah zharf makan yang berarti belakang.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q19",
        question: "Apa fungsi dari 'Lakinna' (لَكِنَّ)?",
        options: ["Istidrak (Penyangkalan/Sanggahan)", "Harapan", "Khayalan", "Peniadaan"],
        correctAnswer: "Istidrak (Penyangkalan/Sanggahan)",
        explanation: "Lakinna digunakan untuk menyatakan 'Akan tetapi'.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q20",
        question: "Manakah amil yang menashabkan Isim dan merafa'kan Khabar?",
        options: ["Kaana", "Laisa", "Inna", "Sara"],
        correctAnswer: "Inna",
        explanation: "Inna wa akhawaatuha adalah penashab isim.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q21",
        question: "Status I'rab 'Zaidan' dalam 'Laa Ilaha Illa Zaidan' (misal) atau 'Illa Zaidan' adalah...",
        options: ["Marfu'", "Mansub", "Majrur", "Majzum"],
        correctAnswer: "Mansub",
        explanation: "Mustatsna dengan Illa biasanya berstatus Mansub.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q22",
        question: "Apa arti 'Fauqa' (فَوْقَ)?",
        options: ["Bawah", "Samping", "Atas", "Dalam"],
        correctAnswer: "Atas",
        explanation: "Fauqa adalah zharf makan yang berarti di atas.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q23",
        question: "Amil manakah yang berarti 'Masih'?",
        options: ["Kaana", "Laisa", "Ma Zaala", "Ma Daama"],
        correctAnswer: "Ma Zaala",
        explanation: "Ma Zaala menunjukkan keberlangsungan (Masih/Senantiasa).",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q24",
        question: "Apa arti 'Ya' dalam 'Ya Abdallah'?",
        options: ["Huruf Jar", "Huruf Nida (Panggilan)", "Huruf Athaf", "Huruf Syarat"],
        correctAnswer: "Huruf Nida (Panggilan)",
        explanation: "Ya digunakan untuk memanggil (Munada).",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q25",
        question: "Apa I'rab dari Munada (yang dipanggil) dalam bentuk Mudhaf?",
        options: ["Marfu'", "Mansub", "Majrur", "Majzum"],
        correctAnswer: "Mansub",
        explanation: "Contoh: Ya 'Abda Allahi (Mansub).",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q26",
        question: "Apa arti 'Tahta' (تَحْتَ)?",
        options: ["Atas", "Depan", "Belakang", "Bawah"],
        correctAnswer: "Bawah",
        explanation: "Tahta adalah zharf makan yang berarti di bawah.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q27",
        question: "Zharf Lailan (ليلاً) berarti...",
        options: ["Pagi", "Siang", "Malam", "Sore"],
        correctAnswer: "Malam",
        explanation: "Lailan berarti pada waktu malam.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q28",
        question: "Amil Nawasikh berarti amil yang...",
        options: ["Memperbaiki", "Menghapus/Mengubah hukum asal", "Menambah kata", "Menyambung"],
        correctAnswer: "Menghapus/Mengubah hukum asal",
        explanation: "Nasakh berarti menghapus, karena mereka menghapus status Rafa' pada Mubtada/Khabar.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q29",
        question: "Apa arti 'Anna' (أَنَّ)?",
        options: ["Bahwa", "Sesungguhnya", "Seolah-olah", "Semoga"],
        correctAnswer: "Bahwa",
        explanation: "Anna biasanya berada di tengah kalimat dan berarti 'bahwa'.",
        type: "multiple-choice"
      },
      {
        id: "l3_2_q30",
        question: "Kenapa Kaana disebut Fi'il Naqish (Kurang)?",
        options: ["Karena sedikit hurufnya", "Karena tidak butuh subjek (Fa'il), tapi butuh Isim/Khabar", "Karena jarang digunakan", "Karena artinya jelek"],
        correctAnswer: "Karena tidak butuh subjek (Fa'il), tapi butuh Isim/Khabar",
        explanation: "Ia tidak melakukan perbuatan fisik tapi memberikan status waktu pada kalimat Ismiyah.",
        type: "multiple-choice"
      }
    ]
  }
};
