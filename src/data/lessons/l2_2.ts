import { Lesson } from "../../types";

export const l2_2: Lesson = {
  id: "l2_2",
  level: 2,
  bab: 2,
  title: "BAB 2: AL-WASHF (Penyifatan)",
  titleAr: "الْوَصْفُ",
  description: "Pelajari cara menyifati benda dan orang dengan harmoni Na'at-Man'ut serta membandingkan kualitas dengan Isim Tafdhil.",
  xpReward: 45,
  isCompleted: false,
  isLocked: false,
  type: "comprehensive",
  content: {
    introduction: "Luar biasa! Anda telah memahami mesin penggerak bahasa di Bab 1. Sekarang, mari kita beri warna pada setiap kalimat Anda melalui Bab 2: Al-Washf (Penyifatan). Ingatlah betapa sederhananya kata benda yang Anda pelajari di Level 1; kini kita akan membuat mereka jauh lebih hidup dengan menyematkan sifat-sifat yang indah dan presisi. Belajar bahasa Arab itu mudah karena ia memiliki aturan keselarasan (Na'at-Man'ut) yang sangat logis.\n\nDi bab ini, kita akan melatih 'rasa' bahasa Anda untuk menyifati benda dan orang dengan tepat. Anda juga akan belajar cara membandingkan dua hal (Isim Tafdhil), seperti mengatakan sesuatu 'lebih besar' atau 'paling indah'. Penguasaan teknik penyifatan ini akan membuat cerita Anda semakin detail sebelum kita belajar menempatkannya dalam dimensi ruang dan waktu di bab selanjutnya!",
    introTitle: "Seni Mendeskripsikan: Harmoni Sifat dan Puncak Perbandingan",
    introVerse: {
      ar: "وَاللَّهُ أَخْرَجَكُمْ مِنْ بُطُونِ أُمَّهَاتِكُمْ لَا تَعْلَمُونَ شَيْئًا",
      translation: "Dan Allah mengeluarkan kamu dari perut ibumu dalam keadaan tidak mengetahui sesuatu pun. (QS. An-Nahl: 78) — Perhatikan bagaimana keadaan (sifat kondisi) manusia dideskripsikan saat lahir."
    },
    introBadges: [
      { icon: "⚖️", text: "KESELARASAN TOTAL (Menyelaraskan Sifat dengan Bendanya)" },
      { icon: "🏆", text: "MASTER PERBANDINGAN (Menguasai Pola 'Lebih' dan 'Ter-')" }
    ],
    totalSentencesDisplay: "320 Kalimat Deskriptif",
    cards: [
      // KELOMPOK 1 — SIFAT FISIK (1-15)
      {
        id: "l2_2_c1",
        wordAr: "طَوِيلٌ / طَوِيلَةٌ",
        translation: "Tinggi / Panjang",
        description: "Digunakan untuk ukuran dimensi vertikal manusia atau panjang suatu benda.",
        category: "Sifat Fisik",
        examples: [
          { ar: "الرَّجُلُ طَوِيلٌ جِدًّا", translation: "Lelaki itu sangat tinggi.", grammarNote: "Logika: Sifat mudzakkar mengikuti benda mudzakkar." },
          { ar: "هَذِهِ مِسْطَرَةٌ طَوِيلَةٌ", translation: "Ini adalah penggaris yang panjang.", grammarNote: "Logika: Sifat muannats mengikuti benda muannats." },
          { ar: "الطَّالِبُ الطَّوِيلُ نَشِيطٌ", translation: "Siswa yang tinggi itu rajin.", grammarNote: "Logika: Na'at mengikuti Man'ut dalam hal Ma'rifah (Al-)." },
          { ar: "رَأَيْتُ رَجُلًا طَوِيلًا", translation: "Saya melihat lelaki yang tinggi.", grammarNote: "Logika: Sifat mengikuti benda dalam harakat nashab (fathah)." },
          { ar: "هُوَ أَطْوَلُ مِنْ أَخِيهِ", translation: "Dia lebih tinggi dari saudaranya.", grammarNote: "Logika: Isim Tafdhil pola 'Af'alu' untuk perbandingan." },
          { ar: "أَطْوَلُ جَبَلٍ فِي الْعَالَمِ", translation: "Gunung tertinggi di dunia.", grammarNote: "Logika: Isim Tafdhil + Mudhaf Ilaihi = Paling/Ter-." },
          { ar: "الْبِنْتُ الطَّوِيلَةُ جَمِيلَةٌ", translation: "Anak perempuan yang tinggi itu cantik.", grammarNote: "Logika: Keselarasan gender muannats." },
          { ar: "نَحْنُ نَسْلُكُ طَرِيقًا طَوِيلًا", translation: "Kami menempuh jalan yang panjang.", grammarNote: "Logika: Sifat nakirah mengikuti benda nakirah." },
          { ar: "هَلْ قَلَمُكَ طَوِيلٌ؟", translation: "Apakah penamu panjang?", grammarNote: "Logika: Sifat pada benda mudzakkar." },
          { ar: "الْمَنَارَةُ الطَّوِيلَةُ بَعِيدَةٌ", translation: "Menara yang tinggi itu jauh.", grammarNote: "Logika: Na'at ma'rifah muannats." }
        ]
      },
      {
        id: "l2_2_c2",
        wordAr: "قَصِيرٌ / قَصِيرَةٌ",
        translation: "Pendek",
        description: "Lawan kata dari Thawil. Digunakan untuk dimensi ukuran yang rendah.",
        category: "Sifat Fisik",
        examples: [
          { ar: "الْوَلَدُ قَصِيرٌ", translation: "Anak itu pendek.", grammarNote: "Logika: Sifat mengikuti subjek mudzakkar." },
          { ar: "الْمَرْأَةُ قَصِيرَةٌ", translation: "Wanita itu pendek.", grammarNote: "Logika: Sifat mengikuti subjek muannats." },
          { ar: "هَذَا ثَوْبٌ قَصِيرٌ", translation: "Ini adalah baju yang pendek.", grammarNote: "Logika: Na'at-Man'ut nakirah mudzakkar." },
          { ar: "أَنَا أَقْصَرُ مِنْكَ", translation: "Saya lebih pendek darimu.", grammarNote: "Logika: Isim Tafdhil pola perbandingan." },
          { ar: "أَقْصَرُ سُورَةٍ فِي الْقُرْآنِ", translation: "Surah terpendek di Al-Quran.", grammarNote: "Logika: Isim Tafdhil superlatif." },
          { ar: "لَبِسْتُ قَمِيصًا قَصِيرًا", translation: "Saya memakai kemeja pendek.", grammarNote: "Logika: Sifat mengikuti harakat nashab." },
          { ar: "الْقِصَّةُ الْقَصِيرَةُ مُمْتِعَةٌ", translation: "Cerita pendek itu menyenangkan.", grammarNote: "Logika: Na'at-Man'ut ma'rifah muannats." },
          { ar: "جَلَسْتُ عَلَى كُرْسِيٍّ قَصِيرٍ", translation: "Saya duduk di atas kursi yang pendek.", grammarNote: "Logika: Sifat mengikuti harakat majrur (kasrah)." },
          { ar: "الْوَقْتُ قَصِيرٌ", translation: "Waktunya pendek (singkat).", grammarNote: "Logika: Sifat untuk hal abstrak." },
          { ar: "شَعْرٌ قَصِيرٌ", translation: "Rambut pendek.", grammarNote: "Logika: Deskripsi fisik." }
        ]
      },
      {
        id: "l2_2_c3",
        wordAr: "كَبِيرٌ / كَبِيرَةٌ",
        translation: "Besar / Tua",
        description: "Bisa merujuk pada ukuran volume atau usia seseorang.",
        category: "Sifat Fisik",
        examples: [
          { ar: "الْبَيْتُ كَبِيرٌ", translation: "Rumah itu besar.", grammarNote: "Logika: Ukuran fisik benda mudzakkar." },
          { ar: "الْجَدُّ كَبِيرٌ فِي السِّنِّ", translation: "Kakek itu sudah tua usianya.", grammarNote: "Logika: Sifat usia untuk manusia." },
          { ar: "هَذِهِ مَدِينَةٌ كَبِيرَةٌ", translation: "Ini adalah kota yang besar.", grammarNote: "Logika: Keselarasan muannats pada kota." },
          { ar: "أَخِي الْأَكْبَرُ طَبِيبٌ", translation: "Kakak laki-lakiku yang tertua adalah dokter.", grammarNote: "Logika: Superlatif 'Al-Akbar' berarti tertua." },
          { ar: "بَيْتِي أَكْبَرُ مِنْ بَيْتِكَ", translation: "Rumahku lebih besar dari rumahmu.", grammarNote: "Logika: Isim Tafdhil perbandingan ukuran." },
          { ar: "اللَّهُ أَكْبَرُ", translation: "Allah Maha Besar.", grammarNote: "Logika: Superlatif mutlak." },
          { ar: "فِي الْمَسْجِدِ الْكَبِيرِ", translation: "Di dalam masjid yang besar.", grammarNote: "Logika: Na'at mengikuti i'rab jar." },
          { ar: "رَأَيْتُ فِيلًا كَبِيرًا", translation: "Saya melihat gajah yang besar.", grammarNote: "Logika: Sifat mengikuti nashab." },
          { ar: "أُسْرَةٌ كَبِيرَةٌ", translation: "Keluarga yang besar.", grammarNote: "Logika: Deskripsi kelompok." },
          { ar: "الْعُلَمَاءُ الْكِبَارُ", translation: "Para ulama besar (senior).", grammarNote: "Logika: Jamak taksir sifat." }
        ]
      },
      {
        id: "l2_2_c4",
        wordAr: "صَغِيرٌ / صَغِيرَةٌ",
        translation: "Kecil / Muda",
        description: "Lawan kata Kabiir. Merujuk pada ukuran kecil atau usia muda.",
        category: "Sifat Fisik",
        examples: [
          { ar: "الْقِطُّ صَغِيرٌ", translation: "Kucing itu kecil.", grammarNote: "Logika: Ukuran fisik hewan mudzakkar." },
          { ar: "الْوَلَدُ صَغِيرٌ", translation: "Anak itu masih kecil (muda).", grammarNote: "Logika: Sifat usia muda." },
          { ar: "غُرْفَةٌ صَغِيرَةٌ", translation: "Kamar yang kecil.", grammarNote: "Logika: Keselarasan muannats." },
          { ar: "أَخِي أَصْغَرُ مِنِّي", translation: "Adikku lebih muda dariku.", grammarNote: "Logika: Isim Tafdhil perbandingan usia." },
          { ar: "أَصْغَرُ طِفْلٍ فِي الْبَيْتِ", translation: "Anak terkecil di rumah.", grammarNote: "Logika: Superlatif superlatif." },
          { ar: "هَذِهِ مَلْعَقَةٌ صَغِيرَةٌ", translation: "Ini adalah sendok yang kecil.", grammarNote: "Logika: Sifat benda muannats." },
          { ar: "النَّمْلَةُ حَشَرَةٌ صَغِيرَةٌ", translation: "Semut adalah serangga kecil.", grammarNote: "Logika: Deskripsi makhluk hidup." },
          { ar: "فِي الْقَرْيَةِ الصَّغِيرَةِ", translation: "Di desa yang kecil itu.", grammarNote: "Logika: Na'at ma'rifah majrur." },
          { ar: "كِتَابٌ صَغِيرٌ فِي جَيْبِي", translation: "Buku kecil di kantongku.", grammarNote: "Logika: Na'at-Man'ut nakirah." },
          { ar: "صَغِيرٌ جِدًّا", translation: "Sangat kecil.", grammarNote: "Logika: Penguatan sifat." }
        ]
      },
      {
        id: "l2_2_c5",
        wordAr: "سَمِينٌ / سَمِينَةٌ",
        translation: "Gemuk",
        description: "Sifat fisik untuk tubuh yang berisi atau berlemak.",
        category: "Sifat Fisik",
        examples: [
          { ar: "الرَّجُلُ سَمِينٌ", translation: "Lelaki itu gemuk.", grammarNote: "Logika: Deskripsi fisik mudzakkar." },
          { ar: "بَقَرَةٌ سَمِينَةٌ", translation: "Sapi yang gemuk.", grammarNote: "Logika: Deskripsi fisik hewan muannats." },
          { ar: "هُوَ أَسْمَنُ مِنْ صَدِيقِهِ", translation: "Dia lebih gemuk dari temannya.", grammarNote: "Logika: Isim Tafdhil perbandingan." },
          { ar: "أَسْمَنُ رَجُلٍ", translation: "Lelaki paling gemuk.", grammarNote: "Logika: Superlatif fisik." },
          { ar: "الْقِطُّ السَّمِينُ يَنَامُ", translation: "Kucing gemuk itu sedang tidur.", grammarNote: "Logika: Na'at ma'rifah mudzakkar." },
          { ar: "أَكَلَ طَعَامًا سَمِينًا", translation: "Dia makan makanan yang berlemak.", grammarNote: "Logika: Sifat mengikuti nashab." },
          { ar: "جِسْمٌ سَمِينٌ", translation: "Tubuh yang gemuk.", grammarNote: "Logika: Deskripsi organ tubuh." },
          { ar: "الْمَرْأَةُ السَّمِينَةُ نَشِيطَةٌ", translation: "Wanita gemuk itu rajin.", grammarNote: "Logika: Deskripsi muannats." },
          { ar: "هَلْ أَنْتَ سَمِينٌ؟", translation: "Apakah kamu gemuk?", grammarNote: "Logika: Pertanyaan sifat." },
          { ar: "لَا تَكُنْ سَمِينًا", translation: "Jangan jadi gemuk (jaga kesehatan).", grammarNote: "Logika: Sifat dalam larangan." }
        ]
      },
      {
        id: "l2_2_c6",
        wordAr: "نَحِيفٌ / نَحِيفَةٌ",
        translation: "Kurus / Ramping",
        description: "Lawan kata Samin. Tubuh yang tipis atau kurang lemak.",
        category: "Sifat Fisik",
        examples: [
          { ar: "الْوَلَدُ نَحِيفٌ", translation: "Anak laki-laki itu kurus.", grammarNote: "Logika: Sifat fisik mudzakkar." },
          { ar: "بِنْتٌ نَحِيفَةٌ", translation: "Anak perempuan yang ramping.", grammarNote: "Logika: Sifat fisik muannats." },
          { ar: "هُوَ أَنْحَفُ مِنْكَ", translation: "Dia lebih kurus darimu.", grammarNote: "Logika: Isim Tafdhil 'Anhafu'." },
          { ar: "أَنْحَفُ طَالِبٍ فِي الْفَصْلِ", translation: "Siswa paling kurus di kelas.", grammarNote: "Logika: Superlatif fisik." },
          { ar: "رَأَيْتُ رَجُلًا نَحِيفًا", translation: "Saya melihat lelaki yang kurus.", grammarNote: "Logika: Sifat mengikuti nashab." },
          { ar: "سَاقٌ نَحِيفَةٌ", translation: "Kaki yang ramping.", grammarNote: "Logika: Saaq (kaki) adalah muannats." },
          { ar: "الْخَادِمُ النَّحِيفُ سَرِيعٌ", translation: "Pelayan kurus itu cepat.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "جِسْمٌ نَحِيفٌ وَقَوِيٌّ", translation: "Tubuh yang kurus dan kuat.", grammarNote: "Logika: Dua sifat beriringan." },
          { ar: "هَلْ هِيَ نَحِيفَةٌ؟", translation: "Apakah dia ramping?", grammarNote: "Logika: Pertanyaan muannats." },
          { ar: "نَحِيفٌ جِدًّا", translation: "Sangat kurus.", grammarNote: "Logika: Penguatan intensitas." }
        ]
      },
      {
        id: "l2_2_c7",
        wordAr: "جَمِيلٌ / جَمِيلَةٌ",
        translation: "Tampan / Indah / Cantik",
        description: "Sifat untuk keindahan rupa atau pemandangan.",
        category: "Sifat Fisik",
        examples: [
          { ar: "الْوَجْهُ جَمِيلٌ", translation: "Wajah itu tampan/indah.", grammarNote: "Logika: Sifat rupa mudzakkar." },
          { ar: "الْبِنْتُ جَمِيلَةٌ", translation: "Anak perempuan itu cantik.", grammarNote: "Logika: Sifat rupa muannats." },
          { ar: "مَنْظَرٌ جَمِيلٌ", translation: "Pemandangan yang indah.", grammarNote: "Logika: Sifat estetika benda." },
          { ar: "هُوَ أَجْمَلُ مِنْ غَيْرِهِ", translation: "Dia lebih tampan dari yang lain.", grammarNote: "Logika: Isim Tafdhil 'Ajmalu'." },
          { ar: "أَجْمَلُ مَكَانٍ فِي الْعَالَمِ", translation: "Tempat terindah di dunia.", grammarNote: "Logika: Superlatif estetika." },
          { ar: "زَهْرَةٌ جَمِيلَةٌ", translation: "Bunga yang indah.", grammarNote: "Logika: Na'at muannats nakirah." },
          { ar: "الْحَدِيقَةُ الْجَمِيلَةُ وَاسِعَةٌ", translation: "Taman yang indah itu luas.", grammarNote: "Logika: Na'at ma'rifah muannats." },
          { ar: "خَطٌّ جَمِيلٌ", translation: "Tulisan yang indah.", grammarNote: "Logika: Kualitas karya." },
          { ar: "صَوْتٌ جَمِيلٌ", translation: "Suara yang merdu/indah.", grammarNote: "Logika: Kualitas suara." },
          { ar: "أَحْسَنْتَ يَا جَمِيلُ", translation: "Bagus sekali wahai yang tampan (panggilan).", grammarNote: "Logika: Sifat sebagai panggilan." }
        ]
      },
      {
        id: "l2_2_c8",
        wordAr: "قَبِيحٌ / قَبِيحَةٌ",
        translation: "Buruk / Jelek",
        description: "Lawan kata Jamiil. Digunakan untuk rupa atau perbuatan.",
        category: "Sifat Fisik",
        examples: [
          { ar: "مَنْظَرٌ قَبِيحٌ", translation: "Pemandangan yang buruk.", grammarNote: "Logika: Sifat visual negatif." },
          { ar: "الْفِعْلُ الْقَبِيحُ مَذْمُومٌ", translation: "Perbuatan yang buruk itu tercela.", grammarNote: "Logika: Sifat untuk perilaku." },
          { ar: "هَذَا رَسْمٌ قَبِيحٌ", translation: "Ini adalah gambar yang jelek.", grammarNote: "Logika: Evaluasi karya." },
          { ar: "هُوَ أَقْبَحُ مِنْهُ", translation: "Dia lebih buruk darinya.", grammarNote: "Logika: Isim Tafdhil perbandingan negatif." },
          { ar: "أَقْبَحُ صِفَةٍ", translation: "Sifat paling buruk.", grammarNote: "Logika: Superlatif negatif." },
          { ar: "لَا تَقُلْ كَلَامًا قَبِيحًا", translation: "Jangan ucapkan kata-kata yang buruk.", grammarNote: "Logika: Sifat mengikuti nashab." },
          { ar: "رَائِحَةٌ قَبِيحَةٌ", translation: "Bau yang buruk (busuk).", grammarNote: "Logika: Sifat indra muannats." },
          { ar: "وَجْهٌ قَبِيحٌ", translation: "Wajah yang buruk.", grammarNote: "Logika: Deskripsi rupa." },
          { ar: "الْكَذِبُ خُلُقٌ قَبِيحٌ", translation: "Bohong adalah akhlak yang buruk.", grammarNote: "Logika: Klasifikasi perilaku." },
          { ar: "قَبِيحٌ جِدًّا", translation: "Sangat buruk.", grammarNote: "Logika: Penguatan makna." }
        ]
      },
      {
        id: "l2_2_c9",
        wordAr: "قَوِيٌّ / قَوِيَّةٌ",
        translation: "Kuat",
        description: "Merujuk pada kekuatan fisik, pengaruh, atau argumen.",
        category: "Sifat Fisik",
        examples: [
          { ar: "الرَّجُلُ قَوِيٌّ", translation: "Lelaki itu kuat.", grammarNote: "Logika: Kekuatan fisik mudzakkar." },
          { ar: "الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ", translation: "Mukmin yang kuat itu lebih baik.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "رِيحٌ قَوِيَّةٌ", translation: "Angin yang kuat (kencang).", grammarNote: "Logika: Riih (angin) adalah muannats." },
          { ar: "هُوَ أَقْوَى مِنْ خَصْمِهِ", translation: "Dia lebih kuat dari lawannya.", grammarNote: "Logika: Isim Tafdhil 'Aqwaa'." },
          { ar: "أَقْوَى جَيْشٍ", translation: "Tentara terkuat.", grammarNote: "Logika: Superlatif kekuatan." },
          { ar: "حُجَّةٌ قَوِيَّةٌ", translation: "Argumen yang kuat.", grammarNote: "Logika: Kekuatan logika muannats." },
          { ar: "يَدٌ قَوِيَّةٌ", translation: "Tangan yang kuat.", grammarNote: "Logika: Yadun (tangan) adalah muannats." },
          { ar: "عَزِيمَةٌ قَوِيَّةٌ", translation: "Tekad yang kuat.", grammarNote: "Logika: Kualitas mental." },
          { ar: "صَوْتٌ قَوِيٌّ", translation: "Suara yang kuat/lantang.", grammarNote: "Logika: Kualitas vokal." },
          { ar: "هَذَا بِنَاءٌ قَوِيٌّ", translation: "Ini adalah bangunan yang kuat.", grammarNote: "Logika: Kekuatan struktur." }
        ]
      },
      {
        id: "l2_2_c10",
        wordAr: "ضَعِيفٌ / ضَعِيفَةٌ",
        translation: "Lemah",
        description: "Lawan kata Qawiy. Kurang tenaga atau kurang dasar.",
        category: "Sifat Fisik",
        examples: [
          { ar: "الْمَرِيضُ ضَعِيفٌ", translation: "Orang sakit itu lemah.", grammarNote: "Logika: Kondisi fisik mudzakkar." },
          { ar: "حَدِيثٌ ضَعِيفٌ", translation: "Hadis yang lemah.", grammarNote: "Logika: Kualitas riwayat." },
          { ar: "حُجَّةٌ ضَعِيفَةٌ", translation: "Argumen yang lemah.", grammarNote: "Logika: Kelemahan logika muannats." },
          { ar: "هُوَ أَضْعَفُ مِنْ غَيْرِهِ", translation: "Dia lebih lemah dari yang lain.", grammarNote: "Logika: Isim Tafdhil 'Adh'afu'." },
          { ar: "أَضْعَفُ الْإِيمَانِ", translation: "Iman yang paling lemah.", grammarNote: "Logika: Superlatif hadits." },
          { ar: "نَبَاتٌ ضَعِيفٌ", translation: "Tanaman yang lemah.", grammarNote: "Logika: Deskripsi makhluk hidup." },
          { ar: "بَصَرٌ ضَعِيفٌ", translation: "Pandangan yang lemah (rabun).", grammarNote: "Logika: Kondisi indra." },
          { ar: "الْمَرْأَةُ الضَّعِيفَةُ", translation: "Wanita yang lemah itu.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "صَوْتٌ ضَعِيفٌ", translation: "Suara yang lemah/pelan.", grammarNote: "Logika: Kualitas audio." },
          { ar: "لَا تَكُنْ ضَعِيفًا", translation: "Jangan jadi lemah.", grammarNote: "Logika: Sifat dalam larangan." }
        ]
      },
      {
        id: "l2_2_c11",
        wordAr: "سَرِيعٌ / سَرِيعَةٌ",
        translation: "Cepat",
        description: "Sifat untuk gerakan atau proses yang berlangsung singkat.",
        category: "Kualitas",
        examples: [
          { ar: "الْقِطَارُ سَرِيعٌ", translation: "Kereta itu cepat.", grammarNote: "Logika: Kecepatan transportasi mudzakkar." },
          { ar: "سَيَّارَةٌ سَرِيعَةٌ", translation: "Mobil yang cepat.", grammarNote: "Logika: Kecepatan muannats." },
          { ar: "الطَّائِرَةُ أَسْرَعُ مِنَ السَّيَّارَةِ", translation: "Pesawat lebih cepat dari mobil.", grammarNote: "Logika: Isim Tafdhil perbandingan." },
          { ar: "أَسْرَعُ حَيَوَانٍ فِي الْعَالَمِ", translation: "Hewan tercepat di dunia.", grammarNote: "Logika: Superlatif kecepatan." },
          { ar: "جَوَابٌ سَرِيعٌ", translation: "Jawaban yang cepat.", grammarNote: "Logika: Kecepatan respon." },
          { ar: "الْأَيَّامُ سَرِيعَةٌ", translation: "Hari-hari itu cepat (berlalu).", grammarNote: "Logika: Jamak taksir benda mati = muannats." },
          { ar: "خُطْوَةٌ سَرِيعَةٌ", translation: "Langkah yang cepat.", grammarNote: "Logika: Deskripsi gerak." },
          { ar: "نَجَاحٌ سَرِيعٌ", translation: "Kesuksesan yang cepat.", grammarNote: "Logika: Kualitas proses." },
          { ar: "الْفَهْدُ السَّرِيعُ", translation: "Macan tutul yang cepat itu.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "سَرِيعٌ جِدًّا", translation: "Sangat cepat.", grammarNote: "Logika: Penguatan intensitas." }
        ]
      },
      {
        id: "l2_2_c12",
        wordAr: "بَطِيءٌ / بَطِيئَةٌ",
        translation: "Lambat",
        description: "Lawan kata Sari'. Kecepatan rendah.",
        category: "Kualitas",
        examples: [
          { ar: "السُّلَحْفَاةُ بَطِيئَةٌ", translation: "Kura-kura itu lambat.", grammarNote: "Logika: Kecepatan hewan muannats." },
          { ar: "هَذَا حَاسُوبٌ بَطِيءٌ", translation: "Ini adalah komputer yang lambat.", grammarNote: "Logika: Kecepatan teknologi mudzakkar." },
          { ar: "هُوَ أَبْطَأُ مِنِّي", translation: "Dia lebih lambat dariku.", grammarNote: "Logika: Isim Tafdhil 'Abtha'u'." },
          { ar: "أَبْطَأُ لَاعِبٍ", translation: "Pemain paling lambat.", grammarNote: "Logika: Superlatif kecepatan." },
          { ar: "حَرَكَةٌ بَطِيئَةٌ", translation: "Gerakan yang lambat.", grammarNote: "Logika: Deskripsi gerak." },
          { ar: "الْإِنْتَرْنِت بَطِيءٌ جِدًّا", translation: "Internetnya sangat lambat.", grammarNote: "Logika: Keluhan teknologi." },
          { ar: "قِرَاءَةٌ بَطِيئَةٌ", translation: "Bacaan yang lambat.", grammarNote: "Logika: Kualitas aktivitas." },
          { ar: "فَهْمٌ بَطِيءٌ", translation: "Pemahaman yang lambat.", grammarNote: "Logika: Kualitas kognitif." },
          { ar: "الْقِطَارُ الْبَطِيءُ بَعِيدٌ", translation: "Kereta yang lambat itu jauh.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "مَشْيٌ بَطِيءٌ", translation: "Jalan yang lambat.", grammarNote: "Logika: Deskripsi fisik." }
        ]
      },
      {
        id: "l2_2_c13",
        wordAr: "وَاسِعٌ / وَاسِعَةٌ",
        translation: "Luas / Lebar",
        description: "Sifat untuk area atau ruang yang lapang.",
        category: "Kualitas",
        examples: [
          { ar: "الْبَيْتُ وَاسِعٌ", translation: "Rumah itu luas.", grammarNote: "Logika: Luas area mudzakkar." },
          { ar: "مَدْرَسَةٌ وَاسِعَةٌ", translation: "Sekolah yang luas.", grammarNote: "Logika: Luas area muannats." },
          { ar: "الْمَيْدَانُ الْوَاسِعُ", translation: "Lapangan yang luas itu.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "بَحْرٌ وَاسِعٌ", translation: "Laut yang luas.", grammarNote: "Logika: Deskripsi alam." },
          { ar: "طَرِيقٌ وَاسِعٌ", translation: "Jalan yang luas (lebar).", grammarNote: "Logika: Deskripsi infrastruktur." },
          { ar: "بَيْتِي أَوْسَعُ مِنْ بَيْتِكَ", translation: "Rumahku lebih luas dari rumahmu.", grammarNote: "Logika: Isim Tafdhil perbandingan luas." },
          { ar: "أَوْسَعُ مَلْعَبٍ فِي الْمَدِينَةِ", translation: "Lapangan terluas di kota.", grammarNote: "Logika: Superlatif luas." },
          { ar: "رَحْمَةُ اللَّهِ وَاسِعَةٌ", translation: "Rahmat Allah itu luas.", grammarNote: "Logika: Deskripsi abstrak muannats." },
          { ar: "عِلْمٌ وَاسِعٌ", translation: "Ilmu yang luas.", grammarNote: "Logika: Kualitas intelektual." },
          { ar: "صَدْرٌ وَاسِعٌ", translation: "Dada yang lapang (sabar).", grammarNote: "Logika: Metafora kepribadian." }
        ]
      },
      {
        id: "l2_2_c14",
        wordAr: "ضَيِّقٌ / ضَيِّقَةٌ",
        translation: "Sempit",
        description: "Lawan kata Waasi'. Ruang yang terbatas.",
        category: "Kualitas",
        examples: [
          { ar: "الْمَكَانُ ضَيِّقٌ", translation: "Tempatnya sempit.", grammarNote: "Logika: Kualitas ruang mudzakkar." },
          { ar: "غُرْفَةٌ ضَيِّقَةٌ", translation: "Kamar yang sempit.", grammarNote: "Logika: Kualitas ruang muannats." },
          { ar: "هَذَا الطَّرِيقُ أَضْيَقُ", translation: "Jalan ini lebih sempit.", grammarNote: "Logika: Isim Tafdhil 'Adhyaqu'." },
          { ar: "أَضْيَقُ زُقَاقٍ", translation: "Gang paling sempit.", grammarNote: "Logika: Superlatif ruang." },
          { ar: "الْبَابُ الضَّيِّقُ", translation: "Pintu yang sempit itu.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "ثَوْبٌ ضَيِّقٌ", translation: "Baju yang sempit (ketat).", grammarNote: "Logika: Kualitas pakaian." },
          { ar: "حَيَاةٌ ضَيِّقَةٌ", translation: "Kehidupan yang sempit (susah).", grammarNote: "Logika: Deskripsi batin/ekonomi." },
          { ar: "أَضْيَقُ مِنَ الْبَابِ", translation: "Lebih sempit dari pintu.", grammarNote: "Logika: Perbandingan fisik." },
          { ar: "بَالٌ ضَيِّقٌ", grammarNote: "Pikiran yang sempit.", translation: "Kualitas kognitif." },
          { ar: "ضَيِّقٌ جِدًّا", translation: "Sangat sempit.", grammarNote: "Logika: Penguatan intensitas." }
        ]
      },
      {
        id: "l2_2_c15",
        wordAr: "ثَقِيلٌ / ثَقِيلَةٌ",
        translation: "Berat",
        description: "Merujuk pada massa benda atau beban yang sulit.",
        category: "Kualitas",
        examples: [
          { ar: "الْحَجَرُ ثَقِيلٌ", translation: "Batu itu berat.", grammarNote: "Logika: Berat fisik mudzakkar." },
          { ar: "حَقِيبَةٌ ثَقِيلَةٌ", translation: "Tas yang berat.", grammarNote: "Logika: Berat fisik muannats." },
          { ar: "هَذَا الصُّنْدُوقُ أَثْقَلُ", translation: "Kotak ini lebih berat.", grammarNote: "Logika: Isim Tafdhil 'Atsqalu'." },
          { ar: "أَثْقَلُ شَيْءٍ", translation: "Hal yang paling berat.", grammarNote: "Logika: Superlatif berat." },
          { ar: "الْمَسْؤُولِيَّةُ الثَّقِيلَةُ", translation: "Tanggung jawab yang berat itu.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "طَعَامٌ ثَقِيلٌ", translation: "Makanan yang berat (berlemak).", grammarNote: "Logika: Kualitas nutrisi." },
          { ar: "نَوْمٌ ثَقِيلٌ", translation: "Tidur yang nyenyak (berat).", grammarNote: "Logika: Kualitas istirahat." },
          { ar: "خَطَوَاتٌ ثَقِيلَةٌ", translation: "Langkah-langkah yang berat.", grammarNote: "Logika: Deskripsi gerak muannats." },
          { ar: "صَوْتٌ ثَقِيلٌ", translation: "Suara yang berat/bass.", grammarNote: "Logika: Kualitas audio." },
          { ar: "أَثْقَلُ مِنَ الْجَبَلِ", translation: "Lebih berat dari gunung.", grammarNote: "Logika: Perbandingan hiperbolis." }
        ]
      },
      // KELOMPOK 2 — SIFAT KEPRIBADIAN (16-30)
      {
        id: "l2_2_c16",
        wordAr: "ذَكِيٌّ / ذَكِيَّةٌ",
        translation: "Cerdas / Pintar",
        description: "Sifat untuk ketajaman pikiran atau kecerdasan.",
        category: "Kepribadian",
        examples: [
          { ar: "الطَّالِبُ ذَكِيٌّ", translation: "Siswa itu cerdas.", grammarNote: "Logika: Kecerdasan mudzakkar." },
          { ar: "بِنْتٌ ذَكِيَّةٌ", translation: "Anak perempuan yang cerdas.", grammarNote: "Logika: Kecerdasan muannats." },
          { ar: "عَلِيٌّ أَذْكَى مِنْ زَيْدٍ", translation: "Ali lebih cerdas dari Zaid.", grammarNote: "Logika: Isim Tafdhil 'Adzka'." },
          { ar: "أَذْكَى طَالِبٍ", translation: "Siswa paling cerdas.", grammarNote: "Logika: Superlatif kecerdasan." },
          { ar: "فِكْرَةٌ ذَكِيَّةٌ", translation: "Ide yang cerdas.", grammarNote: "Logika: Na'at muannats nakirah." },
          { ar: "الْأُسْتَاذُ الذَّكِيُّ مَحْبُوبٌ", translation: "Ustadz yang cerdas itu dicintai.", grammarNote: "Logika: Na'at ma'rifah mudzakkar." },
          { ar: "قَلْبٌ ذَكِيٌّ", translation: "Hati yang cerdas/peka.", grammarNote: "Logika: Kualitas batin." },
          { ar: "أَذْكِيَاءُ", translation: "Orang-orang cerdas.", grammarNote: "Logika: Jamak taksir." },
          { ar: "هِيَ طَالِبَةٌ ذَكِيَّةٌ", translation: "Dia adalah siswi yang cerdas.", grammarNote: "Logika: Struktur muannats." },
          { ar: "ذَكِيٌّ جِدًّا", translation: "Sangat cerdas.", grammarNote: "Logika: Penguatan sifat." }
        ]
      },
      {
        id: "l2_2_c17",
        wordAr: "كَسْلَانُ / كَسْلَى",
        translation: "Malas",
        description: "Sifat bagi orang yang enggan bekerja atau belajar.",
        category: "Kepribadian",
        examples: [
          { ar: "الْوَلَدُ كَسْلَانُ", translation: "Anak itu malas.", grammarNote: "Logika: Sifat mudzakkar pola Fa'laanu." },
          { ar: "الْبِنْتُ كَسْلَى", translation: "Anak perempuan itu malas.", grammarNote: "Logika: Sifat muannats pola Fu'laa." },
          { ar: "لَا تَكُنْ كَسْلَانًا", translation: "Jangan jadi pemalas.", grammarNote: "Logika: Sifat dalam larangan." },
          { ar: "الطَّالِبُ الْكَسْلَانُ رَسَبَ", translation: "Siswa yang malas itu gagal.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "هُوَ أَكْسَلُ مِنْكَ", translation: "Dia lebih malas darimu.", grammarNote: "Logika: Isim Tafdhil 'Aksalu'." },
          { ar: "أَكْسَلُ رَجُلٍ", translation: "Lelaki paling malas.", grammarNote: "Logika: Superlatif negatif." },
          { ar: "كَسَالَى", translation: "Orang-orang malas.", grammarNote: "Logika: Jamak taksir." },
          { ar: "نَفْسٌ كَسْلَى", translation: "Jiwa yang malas.", grammarNote: "Logika: Kualitas diri muannats." },
          { ar: "جَارٌ كَسْلَانُ", translation: "Tetangga yang malas.", grammarNote: "Logika: Deskripsi sosial." },
          { ar: "أَنْتَ كَسْلَانُ الْيَوْمَ", translation: "Kamu malas hari ini.", grammarNote: "Logika: Kondisi temporal." }
        ]
      },
      {
        id: "l2_2_c18",
        wordAr: "كَرِيمٌ / كَرِيمَةٌ",
        translation: "Dermawan / Mulia",
        description: "Sifat mulia bagi orang yang suka memberi atau memiliki kehormatan.",
        category: "Kepribadian",
        examples: [
          { ar: "الرَّجُلُ كَرِيمٌ", translation: "Lelaki itu dermawan.", grammarNote: "Logika: Kedermawanan mudzakkar." },
          { ar: "الْقُرْآنُ الْكَرِيمُ", translation: "Al-Quran yang Mulia.", grammarNote: "Logika: Sifat kemuliaan kitab." },
          { ar: "هُوَ أَكْرَمُ النَّاسِ", translation: "Dia manusia paling mulia/dermawan.", grammarNote: "Logika: Superlatif 'Akramu'." },
          { ar: "أَكْرَمُ مِنْ حَاتِمٍ", translation: "Lebih dermawan dari Hatim (tokoh legendaris).", grammarNote: "Logika: Perbandingan ketokohan." },
          { ar: "أُمٌّ كَرِيمَةٌ", translation: "Ibu yang mulia.", grammarNote: "Logika: Sifat muannats nakirah." },
          { ar: "الضَّيْفُ الْكَرِيمُ", translation: "Tamu yang mulia itu.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "خُلُقٌ كَرِيمٌ", translation: "Akhlak yang mulia.", grammarNote: "Logika: Kualitas perilaku." },
          { ar: "جَائِزَةٌ كَرِيمَةٌ", translation: "Hadiah yang mulia/berharga.", grammarNote: "Logika: Deskripsi benda." },
          { ar: "كُرَمَاءُ", translation: "Orang-orang dermawan.", grammarNote: "Logika: Jamak taksir." },
          { ar: "نَفْسٌ كَرِيمَةٌ", translation: "Jiwa yang mulia.", grammarNote: "Logika: Kualitas batin." }
        ]
      },
      {
        id: "l2_2_c19",
        wordAr: "بَخِيلٌ / بَخِيلَةٌ",
        translation: "Pelit / Kikir",
        description: "Lawan kata Kariim. Enggan berbagi harta.",
        category: "Kepribadian",
        examples: [
          { ar: "الرَّجُلُ بَخِيلٌ", translation: "Lelaki itu pelit.", grammarNote: "Logika: Sifat negatif mudzakkar." },
          { ar: "تَاجِرٌ بَخِيلٌ", translation: "Pedagang yang pelit.", grammarNote: "Logika: Na'at nakirah mudzakkar." },
          { ar: "الْبَخِيلُ لَا يُحِبُّهُ النَّاسُ", translation: "Orang pelit tidak disukai manusia.", grammarNote: "Logika: Isim sebagai subjek." },
          { ar: "هُوَ أَبْخَلُ مِنْ غَيْرِهِ", translation: "Dia lebih pelit dari yang lain.", grammarNote: "Logika: Isim Tafdhil 'Abkhalu'." },
          { ar: "أَبْخَلُ النَّاسِ", translation: "Manusia paling pelit.", grammarNote: "Logika: Superlatif negatif." },
          { ar: "صِفَةٌ بَخِيلَةٌ", translation: "Sifat yang kikir.", grammarNote: "Logika: Keselarasan muannats." },
          { ar: "الْجَارُ الْبَخِيلُ", translation: "Tetangga yang pelit itu.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "لَا تَكُنْ بَخِيلًا", translation: "Jangan jadi pelit.", grammarNote: "Logika: Sifat dalam larangan." },
          { ar: "يَدٌ بَخِيلَةٌ", translation: "Tangan yang pelit (metafora).", grammarNote: "Logika: Deskripsi figuratif." },
          { ar: "بُخَلَاءُ", translation: "Orang-orang pelit.", grammarNote: "Logika: Jamak taksir." }
        ]
      },
      {
        id: "l2_2_c20",
        wordAr: "صَابِرٌ / صَابِرَةٌ",
        translation: "Sabar",
        description: "Sifat keteguhan hati menghadapi ujian.",
        category: "Kepribadian",
        examples: [
          { ar: "الْمُؤْمِنُ صَابِرٌ", translation: "Seorang mukmin itu sabar.", grammarNote: "Logika: Kualitas iman mudzakkar." },
          { ar: "أُمٌّ صَابِرَةٌ", translation: "Ibu yang sabar.", grammarNote: "Logika: Sifat muannats nakirah." },
          { ar: "الرَّجُلُ الصَّابِرُ مَأْجُورٌ", translation: "Lelaki yang sabar itu berpahala.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "أَيُّوبُ أَصْبَرُ النَّبِيِّينَ", translation: "Nabi Ayub nabi paling sabar.", grammarNote: "Logika: Superlatif 'Asbaru'." },
          { ar: "أَصْبَرُ مِنْكَ", translation: "Lebih sabar darimu.", grammarNote: "Logika: Isim Tafdhil perbandingan." },
          { ar: "قَلْبٌ صَابِرٌ", translation: "Hati yang sabar.", grammarNote: "Logika: Kualitas batin." },
          { ar: "نَفْسٌ صَابِرَةٌ", translation: "Jiwa yang sabar.", grammarNote: "Logika: Kualitas diri muannats." },
          { ar: "كُنْ صَابِرًا", translation: "Jadilah penyabar.", grammarNote: "Logika: Perintah sifat." },
          { ar: "الصَّابِرُونَ", translation: "Orang-orang sabar.", grammarNote: "Logika: Jamak mudzakkar salim (Washf)." },
          { ar: "صَبْرٌ جَمِيلٌ", translation: "Kesabaran yang indah.", grammarNote: "Logika: Dua sifat beriringan." }
        ]
      },
      {
        id: "l2_2_c21",
        wordAr: "شُجَاعٌ / شُجَاعَةٌ",
        translation: "Berani",
        description: "Sifat kepahlawanan dan ketegasan hati.",
        category: "Kepribadian",
        examples: [
          { ar: "الْجُنْدِيُّ شُجَاعٌ", translation: "Prajurit itu berani.", grammarNote: "Logika: Karakter profesi mudzakkar." },
          { ar: "بِنْتٌ شُجَاعَةٌ", translation: "Anak perempuan yang berani.", grammarNote: "Logika: Karakter muannats." },
          { ar: "هُوَ أَشْجَعُ مِنَ الْأَسَدِ", translation: "Dia lebih berani dari singa.", grammarNote: "Logika: Isim Tafdhil 'Asyja'u'." },
          { ar: "أَشْجَعُ رَجُلٍ", translation: "Lelaki paling berani.", grammarNote: "Logika: Superlatif kepahlawanan." },
          { ar: "الْقَائِدُ الشُّجَاعُ", translation: "Pemimpin yang berani itu.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "قَلْبٌ شُجَاعٌ", translation: "Hati yang berani.", grammarNote: "Logika: Deskripsi batin." },
          { ar: "كَلَامٌ شُجَاعٌ", translation: "Ucapan yang berani.", grammarNote: "Logika: Kualitas ucapan." },
          { ar: "مَوْقِفٌ شُجَاعٌ", translation: "Sikap yang berani.", grammarNote: "Logika: Evaluasi aksi." },
          { ar: "شُجْعَانٌ", translation: "Pemberani-pemberani.", grammarNote: "Logika: Jamak taksir." },
          { ar: "هِيَ شُجَاعَةٌ جِدًّا", translation: "Dia sangat berani.", grammarNote: "Logika: Penguatan muannats." }
        ]
      },
      {
        id: "l2_2_c22",
        wordAr: "جَبَانٌ / جَبَانَةٌ",
        translation: "Penakut / Pengecut",
        description: "Lawan kata Syuja'. Mudah merasa takut.",
        category: "Kepribadian",
        examples: [
          { ar: "الرَّجُلُ جَبَانٌ", translation: "Lelaki itu penakut.", grammarNote: "Logika: Sifat negatif mudzakkar." },
          { ar: "الْعَدُوُّ الْجَبَانُ يَفِرُّ", translation: "Musuh yang penakut itu kabur.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "أَنْتَ أَجْبَنُ مِنْهُ", translation: "Kamu lebih penakut darinya.", grammarNote: "Logika: Isim Tafdhil 'Ajbanu'." },
          { ar: "أَجْبَنُ النَّاسِ", translation: "Manusia paling penakut.", grammarNote: "Logika: Superlatif negatif." },
          { ar: "صِفَةٌ جَبَانَةٌ", translation: "Sifat yang pengecut.", grammarNote: "Logika: Keselarasan muannats." },
          { ar: "لَا تَكُنْ جَبَانًا", translation: "Jangan jadi penakut.", grammarNote: "Logika: Sifat dalam larangan." },
          { ar: "قَلْبٌ جَبَانٌ", translation: "Hati yang penakut.", grammarNote: "Logika: Deskripsi batin." },
          { ar: "أَرْنَبٌ جَبَانٌ", translation: "Kelinci yang penakut.", grammarNote: "Logika: Karakteristik hewan." },
          { ar: "جُبَنَاءُ", translation: "Pengecut-pengecut.", grammarNote: "Logika: Jamak taksir." },
          { ar: "مَوْقِفٌ جَبَانٌ", translation: "Sikap yang pengecut.", grammarNote: "Logika: Evaluasi aksi." }
        ]
      },
      {
        id: "l2_2_c23",
        wordAr: "مُؤَدَّبٌ / مُؤَدَّبَةٌ",
        translation: "Sopan / Beradab",
        description: "Sifat bagi orang yang memiliki tata krama yang baik.",
        category: "Kepribadian",
        examples: [
          { ar: "الْوَلَدُ مُؤَدَّبٌ", translation: "Anak itu sopan.", grammarNote: "Logika: Kualitas akhlak mudzakkar." },
          { ar: "بِنْتٌ مُؤَدَّبَةٌ", translation: "Anak perempuan yang sopan.", grammarNote: "Logika: Kualitas akhlak muannats." },
          { ar: "الضَّيْفُ الْمُؤَدَّبُ", translation: "Tamu yang sopan itu.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "هُوَ أَدَّبُ مِنِّي", translation: "Dia lebih beradab dariku.", grammarNote: "Logika: Isim Tafdhil (Jarang, sering pakai 'aktsaru adaban')." },
          { ar: "أَهْلٌ مُؤَدَّبُونَ", translation: "Keluarga yang sopan.", grammarNote: "Logika: Jamak mudzakkar salim." },
          { ar: "تِلْمِيذٌ مُؤَدَّبٌ", translation: "Murid yang sopan.", grammarNote: "Logika: Na'at nakirah." },
          { ar: "خُلُقٌ مُؤَدَّبٌ", translation: "Akhlak yang beradab.", grammarNote: "Logika: Deskripsi abstrak." },
          { ar: "الْمُؤَدَّبُ مَحْبُوبٌ", translation: "Orang yang sopan itu dicintai.", grammarNote: "Logika: Isim sebagai subjek." },
          { ar: "كُنْ مُؤَدَّبًا مَعَ الْكِبَارِ", translation: "Sopanlah kepada orang tua.", grammarNote: "Logika: Perintah akhlak." },
          { ar: "بِشَكْلٍ مُؤَدَّبٍ", translation: "Secara sopan.", grammarNote: "Logika: Keterangan cara." }
        ]
      },
      {
        id: "l2_2_c24",
        wordAr: "سَهْلٌ / سَهْلَةٌ",
        translation: "Mudah / Gampang",
        description: "Sifat untuk tingkat kesulitan yang rendah.",
        category: "Kualitas",
        examples: [
          { ar: "الِامْتِحَانُ سَهْلٌ", translation: "Ujian itu mudah.", grammarNote: "Logika: Kualitas kognitif mudzakkar." },
          { ar: "لُغَةٌ سَهْلَةٌ", translation: "Bahasa yang mudah.", grammarNote: "Logika: Kualitas muannats." },
          { ar: "هَذَا الدَّرْسُ أَسْهَلُ", translation: "Pelajaran ini lebih mudah.", grammarNote: "Logika: Isim Tafdhil 'Ashal'u'." },
          { ar: "أَسْهَلُ لُغَةٍ", translation: "Bahasa paling mudah.", grammarNote: "Logika: Superlatif kemudahan." },
          { ar: "طَرِيقٌ سَهْلٌ", translation: "Jalan yang mudah.", grammarNote: "Logika: Deskripsi jalur." },
          { ar: "الدَّرْسُ السَّهْلُ مَحْبُوبٌ", translation: "Pelajaran yang mudah itu disukai.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "أَمْرٌ سَهْلٌ", translation: "Urusan yang mudah.", grammarNote: "Logika: Deskripsi situasi." },
          { ar: "بِطَرِيقَةٍ سَهْلَةٍ", translation: "Dengan cara yang mudah.", grammarNote: "Logika: Keterangan cara." },
          { ar: "تَمْرِينٌ سَهْلٌ", translation: "Latihan yang mudah.", grammarNote: "Logika: Na'at nakirah." },
          { ar: "الْعَرَبيَّةُ سَهْلَةٌ جِدًّا", translation: "Bahasa Arab sangat mudah.", grammarNote: "Logika: Motivasi belajar." }
        ]
      },
      {
        id: "l2_2_c25",
        wordAr: "صَعْبٌ / صَعْبَةٌ",
        translation: "Sulit / Susah",
        description: "Lawan kata Sahl. Tingkat kesulitan tinggi.",
        category: "Kualitas",
        examples: [
          { ar: "الدَّرْسُ صَعْبٌ", translation: "Pelajaran itu sulit.", grammarNote: "Logika: Kualitas kognitif mudzakkar." },
          { ar: "مُشْكِلَةٌ صَعْبَةٌ", translation: "Masalah yang sulit.", grammarNote: "Logika: Kualitas muannats." },
          { ar: "هَذَا التَّمْرِينُ أَصْعَبُ", translation: "Latihan ini lebih sulit.", grammarNote: "Logika: Isim Tafdhil 'As'abu'." },
          { ar: "أَصْعَبُ مَادَّةٍ", translation: "Mata pelajaran paling sulit.", grammarNote: "Logika: Superlatif kesulitan." },
          { ar: "طَرِيقٌ صَعْبٌ", translation: "Jalan yang sulit (terjal).", grammarNote: "Logika: Deskripsi jalur." },
          { ar: "الِامْتِحَانُ الصَّعْبُ", translation: "Ujian yang sulit itu.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "حَيَاةٌ صَعْبَةٌ", translation: "Kehidupan yang sulit.", grammarNote: "Logika: Deskripsi kualitas hidup." },
          { ar: "قَرَارٌ صَعْبٌ", translation: "Keputusan yang sulit.", grammarNote: "Logika: Deskripsi aksi." },
          { ar: "أَصْعَبُ مِنَ الْقَدِيمِ", translation: "Lebih sulit dari yang lama.", grammarNote: "Logika: Perbandingan temporal." },
          { ar: "بِشَكْلٍ صَعْبٍ", translation: "Secara sulit.", grammarNote: "Logika: Keterangan cara." }
        ]
      },
      {
        id: "l2_2_c26",
        wordAr: "أَحْسَنُ",
        translation: "Lebih Baik / Terbaik",
        description: "Isim Tafdhil dari 'Hasan'. Puncak kualitas kebaikan.",
        category: "Isim Tafdhil",
        examples: [
          { ar: "أَنْتَ أَحْسَنُ طَالِبٍ", translation: "Kamu siswa terbaik.", grammarNote: "Logika: Isim Tafdhil superlatif." },
          { ar: "هَذَا أَحْسَنُ مِنْ ذَاكَ", translation: "Ini lebih baik dari itu.", grammarNote: "Logika: Isim Tafdhil perbandingan." },
          { ar: "أَحْسَنُ عَمَلٍ", translation: "Amal paling baik.", grammarNote: "Logika: Fokus kualitas." },
          { ar: "أَحْسَنُ النَّاسِ", translation: "Manusia terbaik.", grammarNote: "Logika: Superlatif sosial." },
          { ar: "طَرِيقَةٌ أَحْسَنُ", translation: "Cara yang lebih baik.", grammarNote: "Logika: Evaluasi cara." },
          { ar: "أَحْسَنْتَ!", translation: "Kamu telah berbuat baik! (Pujian).", grammarNote: "Logika: Bentuk fi'il madi berkaitan." },
          { ar: "أَحْسَنُ الْخَبَرِ", translation: "Berita terbaik.", grammarNote: "Logika: Kualitas informasi." },
          { ar: "خُلُقٌ أَحْسَنُ", translation: "Akhlak yang lebih baik.", grammarNote: "Logika: Kualitas diri." },
          { ar: "أَحْسَنُ مَوْقِعٍ", translation: "Situs terbaik.", grammarNote: "Logika: Evaluasi modern." },
          { ar: "الْأَحْسَنُ أَنْ نَصْبِرَ", translation: "Yang terbaik adalah kita bersabar.", grammarNote: "Logika: Struktur saran." }
        ]
      },
      {
        id: "l2_2_c27",
        wordAr: "أَسْوَأُ",
        translation: "Lebih Buruk / Terburuk",
        description: "Isim Tafdhil dari 'Sayyi''. Puncak kualitas negatif.",
        category: "Isim Tafdhil",
        examples: [
          { ar: "هَذَا أَسْوَأُ", translation: "Ini lebih buruk.", grammarNote: "Logika: Evaluasi negatif." },
          { ar: "أَسْوَأُ يَوْمٍ", translation: "Hari terburuk.", grammarNote: "Logika: Superlatif negatif." },
          { ar: "الْكَذِبُ أَسْوَأُ مِنَ الْبُخْلِ", translation: "Bohong lebih buruk dari pelit.", grammarNote: "Logika: Perbandingan etika." },
          { ar: "أَسْوَأُ الْعَادَاتِ", translation: "Kebiasaan paling buruk.", grammarNote: "Logika: Superlatif perilaku." },
          { ar: "طَعْمٌ أَسْوَأُ", translation: "Rasa yang lebih buruk.", grammarNote: "Logika: Kualitas indra." },
          { ar: "خَبَرٌ أَسْوَأُ", translation: "Berita yang lebih buruk.", grammarNote: "Logika: Informasi negatif." },
          { ar: "هَذَا أَسْوَأُ مَا رَأَيْتُ", translation: "Ini hal terburuk yang kulihat.", grammarNote: "Logika: Pengalaman pribadi." },
          { ar: "أَسْوَأُ طَالِبٍ", translation: "Siswa terburuk (nilainya).", grammarNote: "Logika: Evaluasi akademik." },
          { ar: "أَسْوَأُ حَالٍ", translation: "Kondisi paling buruk.", grammarNote: "Logika: Deskripsi situasi." },
          { ar: "قَرَارٌ أَسْوَأُ", translation: "Keputusan yang lebih buruk.", grammarNote: "Logika: Evaluasi aksi." }
        ]
      },
      {
        id: "l2_2_c28",
        wordAr: "أَوْسَعُ",
        translation: "Lebih Luas / Terluas",
        description: "Isim Tafdhil dari 'Waasi''. Dimensi ruang atau rahmat.",
        category: "Isim Tafdhil",
        examples: [
          { ar: "الْبَيْتُ أَوْسَعُ", translation: "Rumah itu lebih luas.", grammarNote: "Logika: Perbandingan ruang." },
          { ar: "أَوْسَعُ مَلْعَبٍ", translation: "Lapangan terluas.", grammarNote: "Logika: Superlatif tempat." },
          { ar: "رَحْمَةُ اللَّهِ أَوْسَعُ", translation: "Rahmat Allah lebih luas.", grammarNote: "Logika: Luas tak terbatas." },
          { ar: "أَوْسَعُ مِنَ الْبَحْرِ", translation: "Lebih luas dari laut.", grammarNote: "Logika: Perbandingan alam." },
          { ar: "عِلْمٌ أَوْسَعُ", translation: "Ilmu yang lebih luas.", grammarNote: "Logika: Kualitas intelektual." },
          { ar: "أَوْسَعُ الصُّدُورِ", translation: "Dada paling lapang.", grammarNote: "Logika: Kualitas batin." },
          { ar: "هَذِهِ الْقَاعَةُ أَوْسَعُ", translation: "Aula ini lebih luas.", grammarNote: "Logika: Perbandingan ruang muannats." },
          { ar: "أَوْسَعُ الْآفَاقِ", translation: "Wawasan paling luas.", grammarNote: "Logika: Metafora pengetahuan." },
          { ar: "طَرِيقٌ أَوْسَعُ", translation: "Jalan yang lebih luas.", grammarNote: "Logika: Deskripsi jalur." },
          { ar: "أَوْسَعُ فُرْصَةٍ", translation: "Kesempatan terluas.", grammarNote: "Logika: Deskripsi peluang." }
        ]
      },
      {
        id: "l2_2_c29",
        wordAr: "أَضْيَقُ",
        translation: "Lebih Sempit / Tersempit",
        description: "Isim Tafdhil dari 'Dhayyiq'. Keterbatasan ruang atau batin.",
        category: "Isim Tafdhil",
        examples: [
          { ar: "الْمَكَانُ أَضْيَقُ", translation: "Tempatnya lebih sempit.", grammarNote: "Logika: Perbandingan ruang." },
          { ar: "أَضْيَقُ زُقَاقٍ", translation: "Gang paling sempit.", grammarNote: "Logika: Superlatif tempat." },
          { ar: "ثَوْبٌ أَضْيَقُ", translation: "Baju yang lebih sempit.", grammarNote: "Logika: Kualitas pakaian." },
          { ar: "أَضْيَقُ مِنَ الْبَابِ", translation: "Lebih sempit dari pintu.", grammarNote: "Logika: Perbandingan fisik." },
          { ar: "فَهْمٌ أَضْيَقُ", translation: "Pemahaman yang lebih sempit.", grammarNote: "Logika: Kualitas kognitif." },
          { ar: "عَيْشٌ أَضْيَقُ", translation: "Penghidupan yang lebih sempit.", grammarNote: "Logika: Kondisi ekonomi." },
          { ar: "أَضْيَقُ الدَّائِرَةِ", translation: "Lingkaran paling sempit.", grammarNote: "Logika: Deskripsi kelompok." },
          { ar: "صَدْرٌ أَضْيَقُ", translation: "Dada yang lebih sesak/sempit.", grammarNote: "Logika: Kondisi batin." },
          { ar: "هَذِهِ الْحُجْرَةُ أَضْيَقُ", translation: "Ruangan ini lebih sempit.", grammarNote: "Logika: Perbandingan muannats." },
          { ar: "أَضْيَقُ حَالٍ", translation: "Kondisi paling sempit (sulit).", grammarNote: "Logika: Deskripsi situasi." }
        ]
      },
      {
        id: "l2_2_c30",
        wordAr: "مِنْ / مِمَّا",
        translation: "Dari / Daripada",
        description: "Kata sambung wajib untuk membangun kalimat perbandingan (Isim Tafdhil + Min).",
        category: "Penghubung",
        examples: [
          { ar: "أَكْبَرُ مِنْ", translation: "Lebih besar dari.", grammarNote: "Logika: Struktur dasar perbandingan." },
          { ar: "أَحْسَنُ مِمَّا كَانَ", translation: "Lebih baik daripada sebelumnya.", grammarNote: "Logika: Min + Maa = Mimmaa." },
          { ar: "أَقْصَرُ مِنْكَ", translation: "Lebih pendek darimu.", grammarNote: "Logika: Min + Dhamir." },
          { ar: "أَجْمَلُ مِنْ هَذَا", translation: "Lebih indah dari ini.", grammarNote: "Logika: Min + Isim Isyarah." },
          { ar: "أَغْلَى مِنْ ذَاكَ", translation: "Lebih mahal dari itu.", grammarNote: "Logika: Min + Isim Isyarah jauh." },
          { ar: "أَصْعَبُ مِمَّا نَظُنُّ", translation: "Lebih sulit dari yang kita duga.", grammarNote: "Logika: Perbandingan dengan aksi." },
          { ar: "أَسْرَعُ مِنْ جَرْيِكَ", translation: "Lebih cepat dari larimu.", grammarNote: "Logika: Min + Masdar." },
          { ar: "أَقَلُّ مِنَ الْقَلِيلِ", translation: "Lebih sedikit dari yang sedikit.", grammarNote: "Logika: Penekanan." },
          { ar: "أَبْعَدُ مِنْ هُنَا", translation: "Lebih jauh dari sini.", grammarNote: "Logika: Min + Zharaf." },
          { ar: "أَقْرَبُ مِمَّا تَتَخَيَّلُ", translation: "Lebih dekat dari yang kamu bayangkan.", grammarNote: "Logika: Perbandingan abstrak." }
        ]
      }
    ],
    grammar: {
      logicExplanation: "Bahasa Arab sangat teliti dalam menyelaraskan sifat. Mari pahami dua logika utamanya:\n\n1. **Logika Na'at–Man'ut (Harmoni Benda-Sifat)**: Kata sifat (Na'at) bukan sekadar imbuhan, tapi ia adalah 'bayangan' bagi benda yang disifatinya (Man'ut). Jika Man'ut adalah laki-laki (mudzakkar), maka Na'at harus mudzakkar. Jika Man'ut memiliki Alif-Lam (Ma'rifah), maka Na'at wajib memiliki Alif-Lam. Keselarasan ini harus terjadi dalam 4 hal: **Gender, Jumlah, Definitas (AL), dan Harakat Akhir (I'rab)**.\n\n2. **Logika Isim Tafdhil (Kekuatan Perbandingan)**: Untuk menyatakan derajat 'Lebih' atau 'Paling', bahasa Arab menggunakan pola sakti **أَفْعَلُ (Af'alu)**. \n- **Logika Perbandingan**: Gunakan pola **أَفْعَلُ + مِنْ** (Contoh: أَكْبَرُ مِنْ = Lebih besar dari). Pola ini bersifat 'unisex' (tidak berubah mudzakkar/muannats saat digunakan sebagai pembanding).\n- **Logika Superlatif**: Gunakan pola **أَفْعَلُ + Benda Nakirah** (Contoh: أَكْبَرُ بَيْتٍ = Rumah terbesar).",
      examples: [
        {
          wordAr: "الْبَيْتُ الْكَبِيرُ جَمِيلٌ",
          translation: "Rumah yang besar itu indah",
          analysis: "الْبَيْتُ (Man'ut) Ma'rifah Mudzakkar Dhammah. الْكَبِيرُ (Na'at) mengikuti persis semua status Man'ut-nya."
        },
        {
          wordAr: "رَأَيْتُ بِنْتًا صَغِيرَةً",
          translation: "Saya melihat anak perempuan yang kecil",
          analysis: "بِنْتًا (Man'ut) Nakirah Muannats Fathatain. صَغِيرَةً (Na'at) mengikuti harmoninya."
        },
        {
          wordAr: "هَذَا الدَّرْسُ أَسْهَلُ مِنْ ذَاكَ",
          translation: "Pelajaran ini lebih mudah dari itu",
          analysis: "أَسْهَلُ adalah Isim Tafdhil dari 'Sahl'. Ditambah 'Min' untuk membandingkan dua hal."
        },
        {
          wordAr: "أَحْسَنُ النَّاسِ أَنْفَعُهُمْ",
          translation: "Manusia terbaik adalah yang paling bermanfaat",
          analysis: "أَحْسَنُ (Superlatif) + النَّاسِ (Ma'rifah). Menunjukkan derajat tertinggi dari sekumpulan orang."
        },
        {
          wordAr: "فِي الْمَدْرَسَةِ الْجَدِيدَةِ طُلَّابٌ نَشِيطُونَ",
          translation: "Di sekolah yang baru ada siswa-siswa yang rajin",
          analysis: "الْجَدِيدَةِ (Na'at) mengikuti الْمَدْرَسَةِ (Majrur). نَشِيطُونَ (Na'at) mengikuti طُلَّابٌ (Jamak)."
        },
        {
          wordAr: "أَنَا أَصْغَرُ مِنْ أَخِي",
          translation: "Saya lebih muda dari saudaraku",
          analysis: "Pola Af'alu Min digunakan untuk perbandingan usia (Shaghiir -> Ashghar)."
        }
      ],
      commonMistakes: [
        {
          wrong: "بِنْتٌ جَمِيلٌ",
          correct: "بِنْتٌ جَمِيلَةٌ",
          explanation: "Kesalahan Gender: Man'ut muannats wajib diikuti Na'at muannats (tambah Ta Marbuthah)."
        },
        {
          wrong: "الْوَلَدُ كَبِيرُ",
          correct: "الْوَلَدُ الْكَبِيرُ",
          explanation: "Kesalahan Definitas: Jika Man'ut pakai AL, Na'at wajib pakai AL untuk mengartikan 'yang'."
        },
        {
          wrong: "هُوَ أَطْوَلُ عَنْكَ",
          correct: "هُوَ أَطْوَلُ مِنْكَ",
          explanation: "Kesalahan Preposisi: Perbandingan Isim Tafdhil wajib menggunakan 'Min' (مِنْ), bukan 'an atau yang lain."
        },
        {
          wrong: "أَنَا أَسْهَلُ مِنْ خَالِدٍ",
          correct: "أَنَا أَذْكَى مِنْ خَالِدٍ",
          explanation: "Kesalahan Konteks: 'As-hal' berarti mudah (untuk benda/urusan). Untuk manusia cerdas gunakan 'Adzka'."
        }
      ],
      comparisonWithIndonesian: "Dalam bahasa Indonesia, sifat tidak berubah (Rumah besar, Mobil besar). Dalam bahasa Arab, sifat harus 'setia' mengikuti status bendanya (Baitun kabiirun, Sayyaaratun kabiiratun).",
      rules: [
        {
          title: "Harmoni 4 Syarat",
          content: "Na'at wajib mengikuti Man'ut dalam: Jenis, Jumlah, Ma'rifah/Nakirah, dan Harakat.",
          examples: []
        },
        {
          title: "Struktur Isim Tafdhil",
          content: "Rumus: [A] + أَفْعَلُ + مِنْ + [B]. Pola ini tidak berubah gender saat membandingkan.",
          examples: []
        }
      ],
      editorialBox: {
        title: "TIPS CERDAS",
        content: "Ingatlah Na'at sebagai 'Bayangan'. Ke mana pun bendanya pergi dan seperti apa pun bentuknya, bayangannya (sifatnya) akan selalu mengikuti secara identik."
      },
      tashrif: {
        title: "Pola Perubahan Isim Tafdhil (Keunggulan)",
        rows: [
          { dhamir: "Mudzakkar", dhamirMeaning: "Tunggal (L)", fiil: "أَفْعَلُ", akhiran: "-", contoh: "أَكْبَرُ (Terbesar L)" },
          { dhamir: "Muannats", dhamirMeaning: "Tunggal (P)", fiil: "فُعْلَى", akhiran: "ى (Alif Maqshurah)", contoh: "كُبْرَى (Terbesar P)" },
          { dhamir: "Mutsanna L", dhamirMeaning: "Dual (L)", fiil: "أَفْعَلَانِ", akhiran: "انِ", contoh: "أَكْبَرَانِ (Dua terbesar)" },
          { dhamir: "Jamak L", dhamirMeaning: "Jamak (L)", fiil: "أَفَاعِلُ", akhiran: "Jamak", contoh: "أَكَابِرُ (Para pembesar)" }
        ]
      },
      deepGrammar: {
        title: "Pendalaman Na'at & Tafdhil",
        note: "Na'at bisa berupa satu kata (Mufrod) atau kalimat (Jumlah). Isim Tafdhil juga bisa berfungsi sebagai penentu urutan (Ter-).",
        points: [
          {
            title: "Sifat Jamak Benda Mati",
            content: "Setiap jamak benda mati (non-manusia) dianggap sebagai Muannats Tunggal. Maka sifatnya harus muannats tunggal.",
            example: "كُتُبٌ جَدِيدَةٌ (Buku-buku baru)"
          },
          {
            title: "Isim Tafdhil Superlatif",
            content: "Jika Isim Tafdhil diikuti benda nakirah yang majrur, ia bermakna 'Paling'.",
            example: "أَحْسَنُ قِصَّةٍ (Cerita terbaik)"
          }
        ]
      }
    },
    readingSection: {
      title: "Deskripsi Lingkungan Sekolah (Qira'ah)",
      sentences: [
        {
          wordAr: "هَذِهِ مَدْرَسَةٌ وَاسِعَةٌ وَجَمِيلَةٌ جِدًّا",
          translation: "Ini adalah sekolah yang luas dan sangat indah",
          logicExplanation: "Logika: مَدْرَسَةٌ (Man'ut Muannats) diikuti dua Na'at muannats (وَاسِعَةٌ & جَمِيلَةٌ). Semuanya selaras."
        },
        {
          wordAr: "أَخِي الْكَبِيرُ أَطْوَلُ مِنْ أَبِي",
          translation: "Kakak laki-lakiku lebih tinggi dari ayahku",
          logicExplanation: "Logika: الْكَبِيرُ (Na'at Ma'rifah) mengikuti أَخِي. أَطْوَلُ (Isim Tafdhil) membandingkan dua orang."
        },
        {
          wordAr: "الْكُتُبُ الْجَدِيدَةُ نَافِعَةٌ لِلطُّلَّابِ",
          translation: "Buku-buku baru itu bermanfaat bagi para siswa",
          logicExplanation: "Logika: الْكُتُبُ (Jamak Benda Mati) = Muannats Tunggal, maka sifatnya الْجَدِيدَةُ (Muannats)."
        },
        {
          wordAr: "هَذَا سُؤَالٌ سَهْلٌ وَلَكِنَّ هَذَا أَصْعَبُ",
          translation: "Ini pertanyaan yang mudah, tapi yang ini lebih sulit",
          logicExplanation: "Logika: سَهْلٌ (Na'at nakirah). أَصْعَبُ (Isim Tafdhil) berdiri sendiri sebagai pembanding."
        },
        {
          wordAr: "أَحْسَنُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
          translation: "Manusia terbaik adalah yang paling bermanfaat bagi manusia",
          logicExplanation: "Logika: Dua Isim Tafdhil (أَحْسَنُ & أَنْفَعُ) menunjukkan derajat superlatif mutlak."
        }
      ]
    },
    dialogueSection: {
      title: "Membandingkan Benda di Kelas",
      context: "Ali dan Ahmad sedang mengobrol sambil membandingkan peralatan sekolah mereka di dalam kelas.",
      lines: [
        { speaker: "Ali", ar: "يَا أَحْمَدُ، هَلْ قَلَمُكَ جَدِيدٌ؟", translation: "Wahai Ahmad, apakah penamu baru?", note: "Sifat benda (Jadiid)." },
        { speaker: "Ahmad", ar: "لَا، هَذَا قَلَمٌ قَدِيمٌ، وَلَكِنَّهُ جَمِيلٌ", translation: "Tidak, ini pena lama, tapi bagus.", note: "Dua sifat berlawanan (Qadiim & Jamiil)." },
        { speaker: "Ali", ar: "أَنَا عِنْدِي حَقِيبَةٌ كَبِيرَةٌ جِدًّا", translation: "Saya punya tas yang sangat besar.", note: "Na'at-Man'ut Muannats." },
        { speaker: "Ahmad", ar: "حَقِيبَتِي أَكْبَرُ مِنْ حَقِيبَتِكَ", translation: "Tas saya lebih besar dari tasmu.", note: "Isim Tafdhil (Akbaru min)." },
        { speaker: "Ali", ar: "هَلْ هَذَا الْكِتَابُ سَهْلٌ لَكَ؟", translation: "Apakah buku ini mudah bagimu?", note: "Kualitas kognitif (Sahl)." },
        { speaker: "Ahmad", ar: "نَعَمْ، هُوَ أَسْهَلُ كِتَابٍ قَرَأْتُهُ", translation: "Ya, ini buku paling mudah yang pernah kubaca.", note: "Superlatif (As-halu kitabin)." },
        { speaker: "Ali", ar: "أَرَى أَنَّ خَطَّكَ أَجْمَلُ مِنْ خَطِّي", translation: "Saya lihat tulisanmu lebih indah dari tulisanku.", note: "Isim Tafdhil Estetika (Ajmalu min)." },
        { speaker: "Ahmad", ar: "شُكْرًا، أَنْتَ صَدِيقٌ كَرِيمٌ يَا عَلِيُّ", translation: "Terima kasih, kamu teman yang dermawan wahai Ali.", note: "Sifat kepribadian (Kariim)." },
        { speaker: "Ali", ar: "هَلِ الِامْتِحَانُ غَدًا صَعْبٌ؟", translation: "Apakah ujian besok sulit?", note: "Na'at Ma'rifah (Al-Imtihan ash-sha'b)." },
        { speaker: "Ahmad", ar: "أَظُنُّ أَنَّهُ أَصْعَبُ مِنِ امْتِحَانِ أَمْسِ", translation: "Saya rasa itu lebih sulit dari ujian kemarin.", note: "Isim Tafdhil perbandingan (As'abu min)." },
        { speaker: "Ali", ar: "أَنْتَ طَالِبٌ ذَكِيٌّ، سَتَنْجَحُ بِسُهُولَةٍ", translation: "Kamu siswa yang cerdas, kamu akan lulus dengan mudah.", note: "Sifat kognitif (Dzakiyyun)." },
        { speaker: "Ahmad", ar: "إِنْ شَاءَ اللَّهُ، نَحْنُ نَحْتَاجُ إِلَى صَبْرٍ كَثِيرٍ", translation: "Insya Allah, kita butuh kesabaran yang banyak.", note: "Na'at-Man'ut nakirah (Sabrin katsiirin)." },
        { speaker: "Ali", ar: "اللَّهُ مَعَ الصَّابِرِينَ، هَيَّا نَدْرُسُ مَعًا", translation: "Allah bersama orang-orang sabar, ayo belajar bersama.", note: "Motivasi dari Quran." },
        { speaker: "Ahmad", ar: "هَيَّا بِنَا! هَذِهِ فِكْرَةٌ أَحْسَنُ", translation: "Ayo! Ini ide yang lebih baik.", note: "Isim Tafdhil sebagai sifat (Ahsan)." }
      ]
    },
    quiz: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Lengkapi kalimat: 'Ini adalah rumah yang besar'.",
        questionAr: "هَذَا بَيْتٌ ____",
        options: ["كَبِيرٌ", "كَبِيرَةٌ", "أَكْبَرُ", "الْكَبِيرُ"],
        correctAnswer: "كَبِيرٌ",
        explanation: "Benda nakirah mudzakkar (baitun) harus diikuti sifat nakirah mudzakkar (kabiirun)."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Pilih Isim Tafdhil yang tepat: 'Zaid lebih tinggi dari Khalid'.",
        questionAr: "زَيْدٌ ____ مِنْ خَالِدٍ",
        options: ["طَوِيلٌ", "أَطْوَلُ", "طَوِيلَةٌ", "طُولٌ"],
        correctAnswer: "أَطْوَلُ",
        explanation: "Pola Af'alu (Athwalu) digunakan untuk perbandingan 'lebih'."
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Apa arti dari 'الْقُرْآنُ الْكَرِيمُ'?",
        options: ["Quran yang baru", "Quran yang mulia", "Membaca Quran", "Quran itu indah"],
        correctAnswer: "Quran yang mulia",
        explanation: "Al-Kariim berarti Yang Mulia, merupakan na'at untuk Al-Quran."
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "Manakah yang merupakan kesalahan Na'at-Man'ut?",
        options: ["بِنْتٌ صَغِيرَةٌ", "الْوَلَدُ الذَّكِيُّ", "سَيَّارَةٌ جَمِيلٌ", "مَدْرَسَةٌ وَاسِعَةٌ"],
        correctAnswer: "سَيَّارَةٌ جَمِيلٌ",
        explanation: "Sayyarah (muannats) harusnya diikuti jamiilah (muannats), bukan jamiil (mudzakkar)."
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "Terjemahkan: 'Bahasa terindah'.",
        options: ["لُغَةٌ جَمِيلَةٌ", "أَجْمَلُ لُغَةٍ", "اللُّغَةُ الْجَمِيلَةُ", "جَمِيلُ لُغَةٍ"],
        correctAnswer: "أَجْمَلُ لُغَةٍ",
        explanation: "Pola Isim Tafdhil (Ajmalu) diikuti benda nakirah (lughatin) menunjukkan superlatif (paling/ter-)."
      },
      {
        id: "q6",
        type: "multiple-choice",
        question: "Apa lawan kata dari 'قَوِيٌّ' (Kuat)?",
        options: ["سَرِيعٌ", "ضَعِيفٌ", "قَدِيمٌ", "صَعْبٌ"],
        correctAnswer: "ضَعِيفٌ",
        explanation: "Dha'iifun (ضَعِيفٌ) berarti lemah."
      },
      {
        id: "q7",
        type: "multiple-choice",
        question: "Lengkapi: 'Saya punya teman (P) yang cerdas'.",
        questionAr: "لِي صَدِيقَةٌ ____",
        options: ["ذَكِيٌّ", "ذَكِيَّةٌ", "أَذْكَى", "الذَّكِيُّ"],
        correctAnswer: "ذَكِيَّةٌ",
        explanation: "Shadiiqatun (muannats) diikuti dzakiyyatun (muannats)."
      },
      {
        id: "q8",
        type: "multiple-choice",
        question: "Apa Isim Tafdhil dari kata 'سَهْلٌ' (Mudah)?",
        options: ["سَاهِلٌ", "تَسْهِيلٌ", "أَسْهَلُ", "سُهُولَةٌ"],
        correctAnswer: "أَسْهَلُ",
        explanation: "Pola Af'alu dari Sahl (سَهْل) adalah Ashallu (أَسْهَلُ)."
      },
      {
        id: "q9",
        type: "multiple-choice",
        question: "Mana yang benar untuk 'Mobil yang cepat itu'?",
        options: ["سَيَّارَةٌ سَرِيعَةٌ", "السَّيَّارَةُ السَّرِيعَةُ", "سَيَّارَةٌ السَّرِيعَةُ", "السَّيَّارَةُ سَرِيعَةٌ"],
        correctAnswer: "السَّيَّارَةُ السَّرِيعَةُ",
        explanation: "Benda ber-AL (Ma'rifah) maka sifatnya juga harus ber-AL (Keselarasan Definitas)."
      },
      {
        id: "q10",
        type: "multiple-choice",
        question: "Apa arti 'أَكْبَرُ' dalam 'اللَّهُ أَكْبَرُ'?",
        options: ["Besar", "Lebih Besar", "Maha Besar / Terbesar", "Pilihan B dan C benar"],
        correctAnswer: "Pilihan B dan C benar",
        explanation: "Akbaru bisa berarti lebih besar (perbandingan) atau maha/terbesar (superlatif)."
      },
      {
        id: "q11",
        type: "multiple-choice",
        question: "Ubah 'جَمِيلٌ' menjadi bentuk superlatif (terindah).",
        options: ["جَمَّالٌ", "أَجْمَلُ", "مُجَمَّلٌ", "تَجْمِيلٌ"],
        correctAnswer: "أَجْمَلُ",
        explanation: "Pola Af'alu dari Jamiil (جَمِيل) adalah Ajmalu (أَجْمَلُ)."
      },
      {
        id: "q12",
        type: "multiple-choice",
        question: "Lengkapi: 'Ini adalah penguasa yang adil'.",
        questionAr: "هَذَا حَاكِمٌ ____",
        options: ["عَادِلٌ", "عَادِلَةٌ", "أَعْدَلُ", "الْعَادِلُ"],
        correctAnswer: "عَادِلٌ",
        explanation: "Haakimun (L) diikuti 'aadilun (L) secara selaras."
      },
      {
        id: "q13",
        type: "multiple-choice",
        question: "Apa arti 'أَقَلُّ'?",
        options: ["Lebih banyak", "Lebih sedikit", "Paling luas", "Sangat sempit"],
        correctAnswer: "Lebih sedikit",
        explanation: "Aqallu adalah Isim Tafdhil dari Qaliil (sedikit)."
      },
      {
        id: "q14",
        type: "multiple-choice",
        question: "Manakah kalimat yang menggunakan Na'at-Man'ut dengan benar?",
        options: ["رَأَيْتُ وَلَدًا صَغِيرٌ", "رَأَيْتُ وَلَدًا صَغِيرًا", "رَأَيْتُ وَلَدٌ صَغِيرًا", "الْوَلَدُ صَغِيرًا"],
        correctAnswer: "رَأَيْتُ وَلَدًا صَغِيرًا",
        explanation: "Sifat (shaghiiran) harus mengikuti harakat benda (waladan) yaitu fathatain (Nashab)."
      },
      {
        id: "q15",
        type: "multiple-choice",
        question: "Bagaimana pola perbandingan 'lebih... daripada'?",
        options: ["Pola: Isim + Sifat", "Pola: Af'alu + Min", "Pola: Min + Af'alu", "Pola: Sifat + Isim"],
        correctAnswer: "Pola: Af'alu + Min",
        explanation: "Contoh: Akbaru min (أَكْبَرُ مِنْ) berarti lebih besar dari."
      },
      {
        id: "q16",
        type: "multiple-choice",
        question: "Apa Isim Tafdhil dari 'كَثِيرٌ' (Banyak)?",
        options: ["كَثَّارٌ", "أَكْثَرُ", "أَكْثَرَةٌ", "تَكْثِيرٌ"],
        correctAnswer: "أَكْثَرُ",
        explanation: "Aktsaru (أَكْثَرُ) berarti lebih banyak atau terbanyak."
      },
      {
        id: "q17",
        type: "multiple-choice",
        question: "Terjemahkan: 'Ini adalah sekolah yang luas'.",
        options: ["هَذَا مَدْرَسَةٌ وَاسِعٌ", "هَذِهِ مَدْرَسَةٌ وَاسِعَةٌ", "هَذَا مَدْرَسَةٌ وَاسِعَةٌ", "هَذِهِ مَدْرَسَةٌ وَاسِعٌ"],
        correctAnswer: "هَذِهِ مَدْرَسَةٌ وَاسِعَةٌ",
        explanation: "Madrasah (Muannats) menggunakan Hadzihi dan sifat Waasi'ah."
      },
      {
        id: "q18",
        type: "multiple-choice",
        question: "Lengkapi: 'Matahari lebih besar dari Bumi'.",
        questionAr: "الشَّمْسُ ____ مِنَ الْأَرْضِ",
        options: ["كَبِيرٌ", "أَكْبَرُ", "كَبِيرَةٌ", "أَصْغَرُ"],
        correctAnswer: "أَكْبَرُ",
        explanation: "Akbaru digunakan untuk membandingkan ukuran."
      },
      {
        id: "q19",
        type: "multiple-choice",
        question: "Apa arti 'ذَكِيٌّ'?",
        options: ["Kuat", "Cerdas", "Sabar", "Mulia"],
        correctAnswer: "Cerdas",
        explanation: "Dzakiyyun (ذَكِيٌّ) berarti pintar atau cerdas."
      },
      {
        id: "q20",
        type: "multiple-choice",
        question: "Mana yang merupakan bentuk muannats dari 'طَوِيلٌ'?",
        options: ["طَوِيلَةٌ", "أَطْوَلُ", "طُولٌ", "مُطَاوِلٌ"],
        correctAnswer: "طَوِيلَةٌ",
        explanation: "Penambahan Ta Marbuthah untuk bentuk muannats (Thawiilatun)."
      },
      {
        id: "q21",
        type: "multiple-choice",
        question: "Lengkapi: 'Siswa itu rajin'.",
        questionAr: "الطَّالِبُ ____",
        options: ["نَشِيطٌ", "نَشِيطَةٌ", "أَنْشَطُ", "النَّشِيطُ"],
        correctAnswer: "نَشِيطٌ",
        explanation: "Thaalib (L) diikuti nasyiitun (L) sebagai khabar kalimat."
      },
      {
        id: "q22",
        type: "multiple-choice",
        question: "Apa Isim Tafdhil dari 'قَرِيبٌ' (Dekat)?",
        options: ["أَقْرَبُ", "قَرَّابٌ", "تَقْرِيبٌ", "قَرِيبَةٌ"],
        correctAnswer: "أَقْرَبُ",
        explanation: "Aqrabu (أَقْرَبُ) berarti lebih dekat atau terdekat."
      },
      {
        id: "q23",
        type: "multiple-choice",
        question: "Terjemahkan: 'Teman yang baik (P)'.",
        options: ["صَدِيقٌ صَالِحٌ", "صَدِيقَةٌ صَالِحَةٌ", "أَحْسَنُ صَدِيقٍ", "صَدِيقَةٌ صَالِحٌ"],
        correctAnswer: "صَدِيقَةٌ صَالِحَةٌ",
        explanation: "Keselarasan muannats untuk teman perempuan (shadiiqah) dan sifat (shaalihah)."
      },
      {
        id: "q24",
        type: "multiple-choice",
        question: "Apa arti 'أَوْسَعُ'?",
        options: ["Lebih sempit", "Lebih luas", "Paling panjang", "Sangat pendek"],
        correctAnswer: "Lebih luas",
        explanation: "Isim Tafdhil dari Waasi' (وَاسِع) berarti lebih luas."
      },
      {
        id: "q25",
        type: "multiple-choice",
        question: "Lengkapi: 'Rumah lama itu indah'.",
        questionAr: "الْبَيْتُ الْقَدِيمُ ____",
        options: ["جَمِيلٌ", "جَمِيلَةٌ", "أَجْمَلُ", "الْجَمِيلُ"],
        correctAnswer: "جَمِيلٌ",
        explanation: "Kalimat butuh khabar (jamiilun) untuk subjek al-bait al-qadiim."
      },
      {
        id: "q26",
        type: "multiple-choice",
        question: "Manakah yang menunjukkan perbandingan 'ter-' (Superlatif)?",
        options: ["أَطْوَلُ مِنْ", "الْوَلَدُ الطَّوِيلُ", "أَطْوَلُ طَالِبٍ", "طَوِيلٌ جِدًّا"],
        correctAnswer: "أَطْوَلُ طَالِبٍ",
        explanation: "Isim Tafdhil diikuti Mudhaf Ilaihi nakirah menunjukkan superlatif."
      },
      {
        id: "q27",
        type: "multiple-choice",
        question: "Apa arti 'بَخِيلٌ'?",
        options: ["Dermawan", "Pelit", "Berani", "Sabar"],
        correctAnswer: "Pelit",
        explanation: "Bakhiil (بَخِيل) berarti kikir atau pelit."
      },
      {
        id: "q28",
        type: "multiple-choice",
        question: "Apa bentuk Isim Tafdhil dari 'صَعْبٌ' (Sulit)?",
        options: ["أَصْعَبُ", "تَصْعِيبٌ", "صَعِيبٌ", "أَصْعَبَةٌ"],
        correctAnswer: "أَصْعَبُ",
        explanation: "Pola Af'alu dari Sha'b (صَعْب) adalah As'abu (أَصْعَبُ)."
      },
      {
        id: "q29",
        type: "multiple-choice",
        question: "Terjemahkan: 'Pena baru'.",
        options: ["قَلَمٌ جَدِيدٌ", "الْقَلَمُ الْجَدِيدُ", "قَلَمٌ الْجَدِيدُ", "Pilihan A dan B benar sesuai konteks"],
        correctAnswer: "Pilihan A dan B benar sesuai konteks",
        explanation: "Keduanya benar secara tata bahasa Na'at-Man'ut."
      },
      {
        id: "q30",
        type: "multiple-choice",
        question: "Lengkapi: 'Maryam lebih cerdas dari Aisyah'.",
        questionAr: "مَرْيَمُ ____ مِنْ عَائِشَةَ",
        options: ["ذَكِيَّةٌ", "أَذْكَى", "ذَكِيٌّ", "أَذْكِيَاءُ"],
        correctAnswer: "أَذْكَى",
        explanation: "Isim Tafdhil pola Af'alu (Adzka) tidak berubah gender dalam perbandingan."
      }
    ]
  }
};
