import { Lesson } from "../../types";

export const l3_5: Lesson = {
  id: "l3_5",
  title: "BAB 5: ILMU AL-BALAGHAH (Seni Keindahan Bahasa)",
  titleAr: "عِلْمُ الْبَلَاغَةِ",
  description: "Menjelajahi estetika sastra Arab: Tasybih (Metafora), Majaz (Kiasan), dan Mukjizat Al-Quran.",
  xpReward: 70,
  isCompleted: false,
  isLocked: false,
  type: "quran",
  content: {
    introduction: "Selamat datang di puncak estetika bahasa Arab! Setelah menguasai struktur (Nahwu) dan bentuk (Shorof), kini saatnya kita mempelajari 'jiwa' dan 'keindahan' bahasa tersebut melalui Ilmu Balaghah.",
    introTitle: "Seni Estetika: Menyelami Keindahan Sastra Arab",
    introVerse: {
      ar: "إِنَّ مِنَ الْبَيَانِ لَسِحْرًا",
      translation: "Sesungguhnya dalam keindahan bahasa terdapat sihir (kekuatan yang memukau). (Hadits)"
    },
    introBadges: [
      { icon: "🎨", text: "ANALIS SASTRA (Mampu membedah metafora dan kiasan)" },
      { icon: "✨", text: "MUKJIZAT LISAN (Merasakan keagungan bahasa Al-Quran)" }
    ],
    totalSentencesDisplay: "250 Ayat & Puisi Pilihan",
    cards: [
      {
        id: "l3_5_c1",
        wordAr: "بَلَاغَةٌ",
        translation: "Retorika / Kefasihan",
        description: "Ilmu yang mempelajari cara menyampaikan pesan yang sesuai dengan situasi dan kondisi audiens.",
        category: "Dasar",
        examples: [
          { ar: "الْبَلَاغَةُ هِيَ مُطَابَقَةُ الْكَلَامِ لِمُقْتَضَى الْحَالِ", translation: "Balaghah adalah kesesuaian ucapan dengan tuntutan keadaan." }
        ]
      },
      {
        id: "l3_5_c2",
        wordAr: "فَصَاحَةٌ",
        translation: "Kefasihan Pengucapan",
        description: "Kejelasan lafadz dan kemudahan dalam pengucapan kata.",
        category: "Dasar",
        examples: [
          { ar: "كَلَامٌ فَصِيحٌ", translation: "Ucapan yang fasih." }
        ]
      },
      {
        id: "l3_5_c3",
        wordAr: "تَشْبِيهٌ",
        translation: "Penyerupaan / Simile",
        description: "Menyamakan sesuatu dengan sesuatu yang lain dalam suatu sifat tertentu menggunakan alat seru.",
        category: "Ilmu Bayan",
        examples: [
          { ar: "أَنْتَ كَالْبَحْرِ فِي الْجُودِ", translation: "Engkau laksana lautan dalam kedermawanan.", analysis: "Anta (Mushabbah), Ka (Alat), Al-Bahr (Mushabbah bih)." }
        ]
      },
      {
        id: "l3_5_c4",
        wordAr: "مُشَبَّهٌ",
        translation: "Subjek yang Diserupakan",
        description: "Unsur dalam Tasybih yang ingin digambarkan sifatnya.",
        category: "Rukun Tasybih",
        examples: [
          { ar: "عَلِيٌّ كَالْأَسَدِ", analysis: "Aliyun: Mushabbah." }
        ]
      },
      {
        id: "l3_5_c5",
        wordAr: "مُشَبَّهٌ بِهِ",
        translation: "Objek Penyerupa",
        description: "Unsur yang dijadikan standar perbandingan (biasanya lebih kuat sifatnya).",
        category: "Rukun Tasybih",
        examples: [
          { ar: "عَلِيٌّ كَالْأَسَدِ", analysis: "Al-Asad: Mushabbah bih." }
        ]
      },
      {
        id: "l3_5_c6",
        wordAr: "وَجْهُ الشَّبَهِ",
        translation: "Sifat yang Diserupakan",
        description: "Titik temu atau kesamaan sifat antara kedua belah pihak.",
        category: "Rukun Tasybih",
        examples: [
          { ar: "فِي الشُّجَاعَةِ", translation: "Dalam hal keberanian.", analysis: "Wajhu syabah." }
        ]
      },
      {
        id: "l3_5_c7",
        wordAr: "مَجَازٌ",
        translation: "Kiasan / Metafora",
        description: "Penggunaan kata di luar makna aslinya karena adanya keterkaitan.",
        category: "Ilmu Bayan",
        examples: [
          { ar: "رَأَيْتُ أَسَدًا يَرْمِي", translation: "Saya melihat singa sedang memanah.", analysis: "Singa di sini maksudnya pahlawan berani." }
        ]
      },
      {
        id: "l3_5_c8",
        wordAr: "كِنَايَةٌ",
        translation: "Sindiran / Implikasi",
        description: "Ungkapan yang maknanya tersirat, bukan harfiah.",
        category: "Ilmu Bayan",
        examples: [
          { ar: "فُلَانٌ طَوِيلُ النِّجَادِ", translation: "Si fulan panjang sarung pedangnya.", analysis: "Maksudnya dia tinggi badannya." }
        ]
      },
      {
        id: "l3_5_c9",
        wordAr: "عِلْمُ الْمَعَانِي",
        translation: "Ilmu Makna",
        description: "Cabang Balaghah yang membahas struktur kalimat agar sesuai konteks.",
        category: "Cabang Balaghah",
        examples: [
          { ar: "الْإِيجَازُ وَالْإِطْنَابُ", translation: "Ringkas vs Luas." }
        ]
      },
      {
        id: "l3_5_c10",
        wordAr: "عِلْمُ الْبَيَانِ",
        translation: "Ilmu Penjelasan (Imajinasi)",
        description: "Membahas cara mengungkapkan satu makna dengan berbagai gaya (Tasybih, Majaz, Kinayah).",
        category: "Cabang Balaghah",
        examples: [
          { ar: "الصُّوَرُ الْبَيَانِيَّةُ", translation: "Citraan sastra." }
        ]
      },
      {
        id: "l3_5_c11",
        wordAr: "عِلْمُ الْبَدِيعِ",
        translation: "Ilmu Keindahan (Ornamen)",
        description: "Membahas hiasan kata baik dari segi lafadz maupun makna.",
        category: "Cabang Balaghah",
        examples: [
          { ar: "السَّجْعُ وَالْجِنَاسُ", translation: "Rima dan Aliterasi." }
        ]
      },
      {
        id: "l3_5_c12",
        wordAr: "سَجْعٌ",
        translation: "Rima / Sajak Akhir",
        description: "Kesamaan bunyi pada akhir kalimat.",
        category: "Ilmu Badi'",
        examples: [
          { ar: "قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ", translation: "Sajak pada huruf Dal." }
        ]
      },
      {
        id: "l3_5_c13",
        wordAr: "جِنَاسٌ",
        translation: "Aliterasi / Homonim",
        description: "Dua kata yang bunyinya mirip tapi artinya berbeda.",
        category: "Ilmu Badi'",
        examples: [
          { ar: "يَوْمَ تَقُومُ السَّاعَةُ يُقْسِمُ الْمُجْرِمُونَ مَا لَبِثُوا غَيْرَ سَاعَةٍ", translation: "As-Sa'ah (Kiamat) dan Sa'ah (Waktu/Jam)." }
        ]
      },
      {
        id: "l3_5_c14",
        wordAr: "طِبَاقٌ",
        translation: "Antitesis / Lawan Kata",
        description: "Mengumpulkan dua kata yang berlawanan dalam satu kalimat.",
        category: "Ilmu Badi'",
        examples: [
          { ar: "يَعْلَمُونَ وَلَا يَعْلَمُونَ", translation: "Mengetahui dan tidak mengetahui." }
        ]
      },
      {
        id: "l3_5_c15",
        wordAr: "إِيجَازٌ",
        translation: "Ringkas (Konsis)",
        description: "Mengungkapkan makna luas dengan kata yang sedikit.",
        category: "Ilmu Ma'ani",
        examples: [
          { ar: "الْقِصَاصُ حَيَاةٌ", translation: "Hukum qishash itu adalah kehidupan.", analysis: "Makna yang sangat dalam dalam kata singkat." }
        ]
      },
      {
        id: "l3_5_c16",
        wordAr: "إِطْنَابٌ",
        translation: "Panjang Lebar / Elaborasi",
        description: "Memperpanjang ucapan untuk tujuan tertentu (penegasan, dll).",
        category: "Ilmu Ma'ani",
        examples: [
          { ar: "قَالَ رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي", translation: "Nabi Zakariya mengeluh kondisinya secara detail." }
        ]
      },
      {
        id: "l3_5_c17",
        wordAr: "اسْتِعَارَةٌ",
        translation: "Metafora Pinjaman",
        description: "Majaz yang rukun tasybihnya dibuang salah satu.",
        category: "Ilmu Bayan",
        examples: [
          { ar: "وَاشْتَعَلَ الرَّأْسُ شَيْبًا", translation: "Dan kepala telah berkobar dengan uban.", analysis: "Uban diibaratkan api yang berkobar." }
        ]
      },
      {
        id: "l3_5_c18",
        wordAr: "مُسَاوَاةٌ",
        translation: "Keseimbangan",
        description: "Kata dan makna sebanding, tidak terlalu ringkas dan tidak terlalu panjang.",
        category: "Ilmu Ma'ani",
        examples: [
          { ar: "وَمَا تُقَدِّمُوا لِأَنْفُسِكُمْ مِنْ خَيْرٍ تَجِدُوهُ عِنْدَ اللَّهِ", translation: "Kalimat yang pas proporsinya." }
        ]
      },
      {
        id: "l3_5_c19",
        wordAr: "بَرِيعٌ",
        translation: "Sangat Berbakat / Brilian",
        description: "Sifat untuk sastrawan yang menguasai Balaghah.",
        category: "Sifat",
        examples: [
          { ar: "أَدِيبٌ بَرِيعٌ", translation: "Sastrawan yang brilian." }
        ]
      },
      {
        id: "l3_5_c20",
        wordAr: "مُقَابَلَةٌ",
        translation: "Kesejajaran Berlawanan",
        description: "Dua kelompok kata berlawanan dengan dua kelompok kata lainnya.",
        category: "Ilmu Badi'",
        examples: [
          { ar: "فَلْيَضْحَكُوا قَلِيلاً وَلْيَبْكُوا كَثِيرًا", translation: "Tertawa sedikit vs Menangis banyak." }
        ]
      },
      {
        id: "l3_5_c21",
        wordAr: "تَوْرِيَةٌ",
        translation: "Ambigu yang Indah",
        description: "Menyebutkan kata yang punya makna dekat (tidak dimaksud) dan makna jauh (dimaksud).",
        category: "Ilmu Badi'",
        examples: [
          { ar: "وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ", translation: "Bi-aydin: Tangan (dekat) vs Kekuatan (jauh/maksud)." }
        ]
      },
      {
        id: "l3_5_c22",
        wordAr: "اقْتِبَاسٌ",
        translation: "Kutipan / Inkorporasi",
        description: "Memasukkan ayat Al-Quran atau Hadits ke dalam puisi/prosa tanpa menyebut sumber.",
        category: "Ilmu Badi'",
        examples: [
          { ar: "لَا تَلُمْنِي عَلَى هَوَايَ فَإِنَّ الْحُبَّ مَيْلٌ", analysis: "Menyisipkan gaya bahasa sakral." }
        ]
      },
      {
        id: "l3_5_c23",
        wordAr: "خَبَرٌ",
        translation: "Kalimat Berita",
        description: "Kalimat yang bisa dinilai benar atau dusta.",
        category: "Ilmu Ma'ani",
        examples: [
          { ar: "الشَّمْسُ طَالِعَةٌ", translation: "Matahari sedang terbit." }
        ]
      },
      {
        id: "l3_5_c24",
        wordAr: "إِنْشَاءٌ",
        translation: "Kalimat Non-Berita (Insya')",
        description: "Kalimat perintah, larangan, pertanyaan, doa, dll.",
        category: "Ilmu Ma'ani",
        examples: [
          { ar: "هَلْ ذَهَبْتَ؟", translation: "Apakah kamu sudah pergi?" }
        ]
      },
      {
        id: "l3_5_c25",
        wordAr: "أَمْرٌ",
        translation: "Perintah",
        description: "Tujuannya bisa perintah asli, doa, atau bimbingan.",
        category: "Insya'",
        examples: [
          { ar: "رَبِّ اغْفِرْ لِي", translation: "Wahai Tuhanku, ampunilah aku (Perintah -> Doa)." }
        ]
      },
      {
        id: "l3_5_c26",
        wordAr: "نَهْيٌ",
        translation: "Larangan",
        description: "Menggunakan Laa Nahiyah.",
        category: "Insya'",
        examples: [
          { ar: "لَا تَقْرَبُوا الزِّنَا", translation: "Janganlah kalian mendekati zina." }
        ]
      },
      {
        id: "l3_5_c27",
        wordAr: "تَمَنِّي",
        translation: "Angan-angan (Mustahil)",
        description: "Mengharap sesuatu yang tidak mungkin atau sangat sulit.",
        category: "Insya'",
        examples: [
          { ar: "أَلَا لَيْتَ الشَّبَابَ يَعُودُ يَوْمًا", translation: "Duhai andaikan masa muda kembali suatu hari." }
        ]
      },
      {
        id: "l3_5_c28",
        wordAr: "نِدَاءٌ",
        translation: "Panggilan (Retoris)",
        description: "Memanggil sesuatu yang bukan manusia atau panggilan sayang.",
        category: "Insya'",
        examples: [
          { ar: "يَا لَيْلُ طُلْ", translation: "Wahai malam, memanjanglah (Panggilan ke benda)." }
        ]
      },
      {
        id: "l3_5_c29",
        wordAr: "قَصْرٌ",
        translation: "Pembatasan / Eksklusivitas",
        description: "Membatasi sesuatu pada sesuatu yang lain.",
        category: "Ilmu Ma'ani",
        examples: [
          { ar: "مَا مُحَمَّدٌ إِلَّا رَسُولٌ", translation: "Tidaklah Muhammad itu melainkan seorang utusan." }
        ]
      },
      {
        id: "l3_5_c30",
        wordAr: "أُسْلُوبٌ",
        translation: "Gaya Bahasa / Style",
        description: "Cara khas seseorang dalam menyusun kata.",
        category: "Dasar",
        examples: [
          { ar: "الْأُسْلُوبُ هُوَ الرَّجُلُ", translation: "Gaya bahasa menunjukkan kepribadian seseorang." }
        ]
      }
    ],
    grammarSection: {
      title: "Trilogi Balaghah: Ma'ani, Bayan, dan Badi'",
      introduction: "Balaghah terbagi menjadi tiga pilar utama yang menyempurnakan kualitas komunikasi kita dalam bahasa Arab.",
      rules: [
        {
          title: "1. Ilmu Ma'ani (Ketepatan Konteks)",
          description: "Mempelajari bagaimana kalimat harus disusun agar sesuai dengan keadaan pendengar. Kapan harus ringkas (Ijaz) dan kapan harus panjang (Ithnab).",
          examples: [
            { ar: "الْإِيجَازُ (Ijaz)", translation: "Ringkas (Contoh: Al-Hajju 'Arafah)" },
            { ar: "الْإِطْنَابُ (Ithnab)", translation: "Elaborasi untuk penekanan." }
          ]
        },
        {
          title: "2. Ilmu Bayan (Keindahan Imajinasi)",
          description: "Mempelajari cara-cara yang berbeda untuk mengungkapkan satu makna agar lebih berkesan.",
          examples: [
            { ar: "التَّشْبِيهُ (Tasybih)", translation: "Penyerupaan (Dia seperti singa)" },
            { ar: "الِاسْتِعَارَةُ (Isti'arah)", translation: "Metafora (Singa itu sedang berpidato)" }
          ]
        },
        {
          title: "3. Ilmu Badi' (Ornamen Kata)",
          description: "Mempelajari hiasan-hiasan yang mempercantik lafadz atau makna kalimat.",
          examples: [
            { ar: "السَّجْعُ (Sajak)", translation: "Rima akhir yang harmonis." },
            { ar: "الْمُقَابَلَةُ (Antitesis)", translation: "Kesejajaran makna yang berlawanan." }
          ]
        }
      ],
      tips: "Balaghah bukan hanya untuk pujangga, tapi kunci memahami mukjizat linguistik Al-Quran yang tidak mungkin ditiru oleh manusia manapun."
    },
    dialogueSection: {
      title: "Dialog: Diskusi Keindahan Ayat",
      introduction: "Guru dan murid sedang menganalisis keindahan satu ayat pendek namun kaya makna.",
      dialogues: [
        {
          speaker: "Murid",
          ar: "يَا أُسْتَاذُ، مَا السِّرُّ فِي جَمَالِ قَوْلِهِ تَعَالَى 'وَالرُّبْحُ فِي الصَّبْرِ'؟",
          en: "O teacher, what is the secret in the beauty of the saying 'and profit is in patience'?",
          tr: "Wahai guru, apa rahasia keindahan ucapan 'dan keuntungan ada pada kesabaran'?"
        },
        {
          speaker: "Guru",
          ar: "هَذَا يُسَمَّى 'إِيجَازٌ'. كَلِمَاتٌ قَلِيلَةٌ لَكِنَّهَا تَحْمِلُ مَعْنًى عَمِيقًا لِلْحَيَاةِ.",
          en: "This is called 'Ijaz' (conciseness). Few words, but they carry a deep meaning for life.",
          tr: "Ini disebut 'Ijaz' (meringkas). Kata-katanya sedikit tapi membawa makna yang sangat dalam bagi kehidupan."
        },
        {
          speaker: "Murid",
          ar: "وَهَلْ فِي الْقُرْآنِ 'تَشْبِيهٌ' أَيْضًا؟",
          en: "And is there 'Tasybih' (simile) in the Quran as well?",
          tr: "Dan apakah di Al-Quran ada 'Tasybih' juga?"
        },
        {
          speaker: "Guru",
          ar: "كَثِيرٌ جِدًّا! مِثْلُ: 'أَعْمَالُهُمْ كَسَرَابٍ بِقِيعَةٍ'. هَذَا يُصَوِّرُ خَيْبَةَ الْكَافِرِ بِصُورَةٍ رَائِعَةٍ.",
          en: "Very much! Like: 'their deeds are like a mirage in a lowland'. This depicts the failure of the disbeliever in a wonderful image.",
          tr: "Sangat banyak! Seperti: 'amal mereka laksana fatamorgana di tanah datar'. Ini menggambarkan kegagalan orang kafir dengan citraan yang luar biasa."
        }
      ]
    },
    quiz: [
      {
        id: "l3_5_q1",
        question: "Apa definisi Balaghah menurut ulama?",
        options: ["Berbicara dengan suara keras", "Kesesuaian ucapan dengan tuntutan keadaan (konteks)", "Menghafal banyak kosa kata", "Menulis dengan khat yang indah"],
        correctAnswer: "Kesesuaian ucapan dengan tuntutan keadaan (konteks)",
        explanation: "Balaghah adalah kepandaian menempatkan kata sesuai situasi (Al-Maqam).",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q2",
        question: "Unsur yang diserupakan dalam Tasybih disebut...",
        options: ["Mushabbah", "Mushabbah bih", "Wajhu syabah", "Adat tasybih"],
        correctAnswer: "Mushabbah",
        explanation: "Mushabbah adalah objek yang ingin kita beri perumpamaan.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q3",
        question: "Cabang Balaghah yang membahas metafora dan kiasan adalah...",
        options: ["Ilmu Ma'ani", "Ilmu Bayan", "Ilmu Badi'", "Ilmu Nahwu"],
        correctAnswer: "Ilmu Bayan",
        explanation: "Ilmu Bayan fokus pada gaya pengungkapan imajinatif.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q4",
        question: "Apa arti 'Ijaz' (إِيجَاز)?",
        options: ["Berbicara panjang lebar", "Meringkas kata tanpa mengurangi makna", "Pemberian contoh", "Pengulangan kata"],
        correctAnswer: "Meringkas kata tanpa mengurangi makna",
        explanation: "Ijaz adalah seni singkat-padat (Conciseness).",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q5",
        question: "Kesamaan bunyi di akhir kalimat disebut...",
        options: ["Jinas", "Saj' (Sajak)", "Tibaq", "Isti'arah"],
        correctAnswer: "Saj' (Sajak)",
        explanation: "Saj' adalah rima atau kesamaan akhiran bunyi.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q6",
        question: "Dua kata yang bunyinya sama tapi artinya beda disebut...",
        options: ["Saj'", "Jinas", "Tibaq", "Ijaz"],
        correctAnswer: "Jinas",
        explanation: "Contoh: Sa'ah (Kiamat) dan Sa'ah (Waktu).",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q7",
        question: "Apa yang dimaksud dengan 'Isti'arah'?",
        options: ["Metafora yang meminjam makna", "Puisi pendek", "Pertanyaan retoris", "Pujian berlebihan"],
        correctAnswer: "Metafora yang meminjam makna",
        explanation: "Isti'arah adalah tasybih yang dibuang salah satu rukun utamanya.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q8",
        question: "Ungkapan 'Si Fulan banyak abunya' (dermawan) adalah contoh dari...",
        options: ["Tasybih", "Majaz", "Kinayah", "Saj'"],
        correctAnswer: "Kinayah",
        explanation: "Kinayah adalah sindiran halus atau implikasi makna.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q9",
        question: "Antitesis (lawan kata dalam satu kalimat) disebut...",
        options: ["Tibaq", "Muqabalah", "Saj'", "Jinas"],
        correctAnswer: "Tibaq",
        explanation: "Tibaq adalah perlawanan kata (Contoh: Hidup vs Mati).",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q10",
        question: "Kalimat yang tujuannya murni memberi informasi disebut...",
        options: ["Insya'", "Khabar", "Nida'", "Amr"],
        correctAnswer: "Khabar",
        explanation: "Khabar adalah kalimat berita.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q11",
        question: "Manakah yang merupakan rukun Tasybih yang paling kuat sifatnya?",
        options: ["Mushabbah", "Mushabbah bih", "Adat Tasybih", "Wajhu Syabah"],
        correctAnswer: "Mushabbah bih",
        explanation: "Mushabbah bih adalah standar atau pembanding yang lebih kuat.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q12",
        question: "Apa tujuan utama Ilmu Badi'?",
        options: ["Mencari kebenaran", "Menghias kata dan makna", "Menerjemahkan bahasa", "Menghitung jumlah kata"],
        correctAnswer: "Menghias kata dan makna",
        explanation: "Ilmu Badi' fokus pada ornamen dan estetika.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q13",
        question: "Kata 'Mubalaghah' artinya...",
        options: ["Keindahan", "Penyangatan/Berlebihan", "Kekuatan", "Ketenangan"],
        correctAnswer: "Penyangatan/Berlebihan",
        explanation: "Mubalaghah berarti melebihkan atau sangat.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q14",
        question: "Gaya bahasa 'Dia laksana bulan' menggunakan alat penyerupa (Adat) berupa...",
        options: ["Laksana (Ka-)", "Dia", "Bulan", "Cantik"],
        correctAnswer: "Laksana (Ka-)",
        explanation: "Huruf Kaf (seperti/laksana) adalah adat tasybih.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q15",
        question: "Apa arti 'Ithnab' (إِطْنَاب)?",
        options: ["Ringkas", "Memperpanjang ucapan untuk tujuan tertentu", "Larangan", "Panggilan"],
        correctAnswer: "Memperpanjang ucapan untuk tujuan tertentu",
        explanation: "Ithnab adalah kebalikan dari Ijaz.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q16",
        question: "Ayat 'Wahai langit, berhentilah hujan' adalah contoh...",
        options: ["Khabar", "Nida' (Panggilan Retoris)", "Tasybih", "Tibaq"],
        correctAnswer: "Nida' (Panggilan Retoris)",
        explanation: "Memanggil benda mati dalam sastra disebut Nida' Majazi.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q17",
        question: "Seni membatasi satu hal pada hal lainnya disebut...",
        options: ["Qashr", "Jinas", "Saj'", "Tibaq"],
        correctAnswer: "Qashr",
        explanation: "Qashr artinya pembatasan (Contoh: Tiada Tuhan selain Allah).",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q18",
        question: "Apa itu 'Mukjizat Lughawiyyah'?",
        options: ["Mukjizat tenaga", "Kemukjizatan dari sisi bahasa (seperti Al-Quran)", "Kesehatan nabi", "Kemenangan perang"],
        correctAnswer: "Kemukjizatan dari sisi bahasa (seperti Al-Quran)",
        explanation: "Al-Quran adalah mukjizat sastra tertinggi yang tidak tertandingi.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q19",
        question: "Manakah yang merupakan contoh 'Tibaq'?",
        options: ["Terang dan Gelap", "Wajah laksana rembulan", "Dia orang baik", "Hadir semuanya"],
        correctAnswer: "Terang dan Gelap",
        explanation: "Dua kata yang berlawanan.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q20",
        question: "Apa itu 'Iqthibas'?",
        options: ["Menghina penyair lain", "Mengutip ayat/hadits ke dalam puisi", "Membakar buku", "Menulis kamus"],
        correctAnswer: "Mengutip ayat/hadits ke dalam puisi",
        explanation: "Menyisipkan gaya bahasa sakral ke dalam karya sastra.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q21",
        question: "Gaya bahasa Al-Quran 'Dan kepala telah menyala uban' menggunakan...",
        options: ["Tasybih", "Isti'arah (Metafora Pinjaman)", "Jinas", "Saj'"],
        correctAnswer: "Isti'arah (Metafora Pinjaman)",
        explanation: "Meminjam kata 'Isyta'ala' (Menyala/Berkobar) untuk pertumbuhan uban.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q22",
        question: "Apa tujuan utama mempelajari Ilmu Ma'ani?",
        options: ["Biar fasih ngobrol", "Agar ucapan sesuai dengan tuntutan keadaan", "Menghafal doa", "Mengetahui sejarah"],
        correctAnswer: "Agar ucapan sesuai dengan tuntutan keadaan",
        explanation: "Ma'ani fokus pada fungsionalitas pesan dalam konteks sosial.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q23",
        question: "Contoh 'Muqabalah' adalah perlawanan antara...",
        options: ["Satu kata vs satu kata", "Satu kalimat vs satu kalimat", "Kelompok kata vs kelompok kata", "Puisi vs Prosa"],
        correctAnswer: "Kelompok kata vs kelompok kata",
        explanation: "Muqabalah lebih luas dari Tibaq (Contoh: Senyum sedikit vs Tangis banyak).",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q24",
        question: "Apa arti 'As-Saj'u'?",
        options: ["Diam", "Sajak/Rima", "Berteriak", "Melompat"],
        correctAnswer: "Sajak/Rima",
        explanation: "Persamaan rima akhir kalimat.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q25",
        question: "Isim manakah yang bermakna 'Fasih'?",
        options: ["Fashiih", "Baligh", "Barii'", "Qadiir"],
        correctAnswer: "Fashiih",
        explanation: "Al-Fashahah berarti kejelasan dan kelancaran bahasa.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q26",
        question: "Retorika dalam bahasa Arab disebut...",
        options: ["Nahwu", "Balaghah", "Shorof", "Mantiq"],
        correctAnswer: "Balaghah",
        explanation: "Balaghah adalah ilmu retorika dan sastra.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q27",
        question: "Kenapa Tasybih penting dalam sastra?",
        options: ["Untuk memperjelas gambaran dan memperkuat kesan", "Biar puisi jadi panjang", "Hanya formalitas", "Supaya sulit dimengerti"],
        correctAnswer: "Untuk memperjelas gambaran dan memperkuat kesan",
        explanation: "Analogi membantu manusia memahami konsep abstrak melalui hal yang konkret.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q28",
        question: "Apa arti 'Uslub'?",
        options: ["Cara makan", "Gaya bahasa / Style", "Cara tidur", "Metode perang"],
        correctAnswer: "Gaya bahasa / Style",
        explanation: "Uslub adalah keunikan cara penyampaian seseorang.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q29",
        question: "Mana yang merupakan contoh 'Jinas'?",
        options: ["Pagi dan Sore", "Shalat Maghrib di negeri Maghrib (Maroko)", "Anak itu laksana singa", "Dunia itu sementara"],
        correctAnswer: "Shalat Maghrib di negeri Maghrib (Maroko)",
        explanation: "Kata 'Maghrib' (Waktu) dan 'Maghrib' (Tempat) bunyinya sama tapi beda makna.",
        type: "multiple-choice"
      },
      {
        id: "l3_5_q30",
        question: "Puncak keindahan Balaghah ada pada...",
        options: ["Puisi Jahiliyyah", "Novel Modern", "Al-Quran Al-Karim", "Pidato Politik"],
        correctAnswer: "Al-Quran Al-Karim",
        explanation: "Al-Quran adalah standar tertinggi dan sumber utama ilmu Balaghah.",
        type: "multiple-choice"
      }
    ]
  }
};
