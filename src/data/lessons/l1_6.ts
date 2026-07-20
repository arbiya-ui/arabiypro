import { Lesson } from "../../types";

export const l1_6: Lesson = {
  id: "l1_6",
  title: "Bab 6: Ath-Tha'am wa Asy-Syarab",
  titleAr: "الطَّعَامُ وَالشَّرَابُ",
  description: "Mengenal ragam makanan dan minuman dalam bahasa Arab serta memahami konsep Nakirah dan Ma'rifah.",
  xpReward: 1200,
  isCompleted: false,
  isLocked: false,
  type: "comprehensive",
  content: {
    introduction: "Makanan dan minuman bukan sekadar kebutuhan fisik, melainkan anugerah yang patut disyukuri. Dalam tradisi Arab, tata krama makan dan menghargai rezeki adalah cerminan dari akhlak mulia. Bab ini akan membuka pintu bagi Anda untuk menyelami kelezatan kosakata kuliner Arab, dan akan membuktikan bahwa memesan makanan atau mengekspresikan rasa dalam bahasa Arab sangatlah mudah dan menyenangkan.\n\nAnda akan belajar lebih dari sekadar nama-nama hidangan, tetapi juga memahami rahasia kecil bahasa Arab: Isim Nakirah dan Ma'rifah (Indefinit dan Definit). Ini hanyalah soal menambahkan 'Alif Lam' (ال) di awal kata! Sangat sederhana, bukan? Aturan praktis ini adalah rahasia untuk membedakan antara menyebut 'sebuah roti' secara umum, dengan 'roti itu' yang spesifik di hadapan Anda, membangun logika kalimat yang tajam dan akurat tanpa kerumitan berarti.\n\nSetiap suapan ilmu yang Anda dapatkan di sini adalah persiapan praktis untuk percakapan nyata, entah saat memesan kopi di Kairo atau menyantap nasi di Dubai. Mari masuki bab ini dengan rasa lapar akan ilmu, nikmati betapa gampangnya menguasai setiap strukturnya, dan rasakan kepuasan saat Anda mampu berkomunikasi dengan presisi. Bismillah, mari kita mulai hidangan bahasa yang ringan dan lezat ini!",
    introTitle: "Menikmati Berkah Rezeki: Seni Kuliner dan Logika Bahasa",
    introVerse: {
      ar: "فَلْيَنْظُرِ الْإِنْسَانُ إِلَى طَعَامِهِ",
      translation: "Maka hendaklah manusia itu memperhatikan makanannya. (QS. 'Abasa: 24)"
    },
    introBadges: [
      { icon: "🍽️", text: "KOSAKATA KULINER (Menguasai 30 kata esensial seputar makanan, minuman, dan rasa)" },
      { icon: "🎯", text: "PRESISI MA'RIFAH (Membedakan objek spesifik dan umum dengan partikel 'AL')" }
    ],
    totalSentencesDisplay: "300 Kalimat Progresif",
    tips: [
      {
        title: "Efek 'Al' pada Spesifikasi",
        content: "Menambahkan 'Al' pada makanan mengubahnya dari sekadar benda umum menjadi benda yang spesifik. 'Tho'amun' (makanan apapun) menjadi 'Ath-Tho'amu' (makanan yang itu)."
      },
      {
        title: "Musuh Bebuyutan: Al & Tanwin",
        content: "Ingat prinsip emas ini: 'Al' dan 'Tanwin' tidak akan pernah akur. Mereka tidak akan pernah muncul bersamaan di satu kata yang sama. Pilih salah satu!"
      },
      {
        title: "Harmoni Rasa & Gender",
        content: "Kata sifat untuk rasa (seperti manis atau asin) harus mengikuti gender makanan. Jika makanannya feminin (pakai ة), maka rasanya juga harus pakai ة!"
      }
    ],
    cards: [
      {
        id: "l1_6_c1",
        wordAr: "طَعَامٌ",
        translation: "Makanan",
        category: "Makanan Pokok",
        description: "Makanan secara umum.",
        logicBox: "Isim Nakirah. Jika Ma'rifah menjadi الطَّعَامُ (dengan AL, tanpa tanwin). Jamaknya أَطْعِمَةٌ.",
        examples: [
          { ar: "هَذَا طَعَامٌ لَذِيذٌ", translation: "Ini makanan yang lezat", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "أَكَلْتُ الطَّعَامَ", translation: "Saya telah memakan makanan itu", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih (Ma'rifah)", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih (Ma'rifah)" },
          { ar: "أَيْنَ الطَّعَامُ؟", translation: "Di mana makanan itu?", grammarNote: "Tanya + Mubtada", analysis: "Tanya + Mubtada" },
          { ar: "طَعَامُ الْعَشَاءِ", translation: "Makanan malam (Makan malam)", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "نَحْتَاجُ إِلَى طَعَامٍ", translation: "Kami membutuhkan makanan", grammarNote: "Fi'il-Fa'il + Huruf Jar + Isim Majrur (Nakirah)", analysis: "Fi'il-Fa'il + Huruf Jar + Isim Majrur (Nakirah)" },
          { ar: "هَلْ طَبَخْتِ الطَّعَامَ؟", translation: "Apakah kamu (pr) telah memasak makanan itu?", grammarNote: "Tanya + Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Tanya + Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "الطَّعَامُ جَاهِزٌ", translation: "Makanan itu sudah siap", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "يُحِبُّ الطَّعَامَ الْحَارَّ", translation: "Dia menyukai makanan yang pedas", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Sifat", analysis: "Fi'il-Fa'il + Maf'ul bih + Sifat" },
          { ar: "طَعَامٌ كَثِيرٌ", translation: "Makanan yang banyak", grammarNote: "Mubtada/Khabar + Sifat", analysis: "Mubtada/Khabar + Sifat" },
          { ar: "شُكْرًا عَلَى الطَّعَامِ", translation: "Terima kasih atas makanannya", grammarNote: "Maf'ul muthlaq + Syibhul Jumlah", analysis: "Maf'ul muthlaq + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_6_c2",
        wordAr: "خُبْزٌ",
        translation: "Roti",
        category: "Makanan Pokok",
        description: "Makanan pokok dari tepung.",
        logicBox: "Isim Nakirah. Ma'rifah: الْخُبْزُ (Al Qamariyyah). Jamaknya أَخْبَازٌ.",
        examples: [
          { ar: "آكُلُ خُبْزًا", translation: "Saya makan roti (sebuah roti/tidak tentu)", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih (Nakirah)", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih (Nakirah)" },
          { ar: "الْخُبْزُ طَازَجٌ", translation: "Roti itu segar", grammarNote: "Mubtada (Ma'rifah) + Khabar", analysis: "Mubtada (Ma'rifah) + Khabar" },
          { ar: "اِشْتَرَيْتُ الْخُبْزَ", translation: "Saya telah membeli roti itu", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "أَيْنَ أَبِيعُ الْخُبْزَ؟", translation: "Di mana saya menjual roti?", grammarNote: "Tanya + Fi'il-Fa'il + Maf'ul bih", analysis: "Tanya + Fi'il-Fa'il + Maf'ul bih" },
          { ar: "خُبْزٌ بَارِدٌ", translation: "Roti yang dingin", grammarNote: "Nakirah + Sifat", analysis: "Nakirah + Sifat" },
          { ar: "أُرِيدُ خُبْزًا مِنْ فَضْلِكَ", translation: "Saya ingin roti tolong", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "قَطَعَ الْخُبْزَ بِالسِّكِّينِ", translation: "Dia memotong roti dengan pisau", grammarNote: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah" },
          { ar: "صَنَعَتْ أُمِّي الْخُبْزَ", translation: "Ibuku membuat roti itu", grammarNote: "Fi'il Madhi + Fa'il + Maf'ul bih", analysis: "Fi'il Madhi + Fa'il + Maf'ul bih" },
          { ar: "ثَمَنُ الْخُبْزِ رَخِيصٌ", translation: "Harga roti itu murah", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "خُبْزٌ بِالزُّبْدَةِ", translation: "Roti dengan mentega", grammarNote: "Isim Nakirah + Syibhul Jumlah", analysis: "Isim Nakirah + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_6_c3",
        wordAr: "أَرُزٌّ",
        translation: "Nasi/Beras",
        category: "Makanan Pokok",
        description: "Makanan pokok Asia.",
        logicBox: "Isim Nakirah. Ma'rifah: الْأَرُزُّ (Al Qamariyyah).",
        examples: [
          { ar: "نَأْكُلُ الْأَرُزَّ كُلَّ يَوْمٍ", translation: "Kami makan nasi setiap hari", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Zharaf", analysis: "Fi'il-Fa'il + Maf'ul bih + Zharaf" },
          { ar: "أَرُزٌّ مَطْبُوخٌ", translation: "Nasi yang dimasak", grammarNote: "Nakirah + Sifat", analysis: "Nakirah + Sifat" },
          { ar: "الْأَرُزُّ أَبْيَضُ", translation: "Beras itu putih", grammarNote: "Mubtada (Ma'rifah) + Khabar", analysis: "Mubtada (Ma'rifah) + Khabar" },
          { ar: "طَبَخْتُ الْأَرُزَّ", translation: "Saya memasak nasi", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "هَلْ تُرِيدُ أَرُزًّا؟", translation: "Apakah kamu mau nasi?", grammarNote: "Tanya + Fi'il-Fa'il + Maf'ul bih (Nakirah)", analysis: "Tanya + Fi'il-Fa'il + Maf'ul bih (Nakirah)" },
          { ar: "أَرُزٌّ مَعَ اللَّحْمِ", translation: "Nasi bersama daging", grammarNote: "Isim + Zharaf + Mudhaf ilayh", analysis: "Isim + Zharaf + Mudhaf ilayh" },
          { ar: "صَحْنُ الْأَرُزِّ", translation: "Sepiring nasi", grammarNote: "Mudhaf + Mudhaf ilayh (Ma'rifah)", analysis: "Mudhaf + Mudhaf ilayh (Ma'rifah)" },
          { ar: "زَرَعَ الْفَلَّاحُ الْأَرُزَّ", translation: "Petani menanam padi/beras", grammarNote: "Fi'il Madhi + Fa'il + Maf'ul bih", analysis: "Fi'il Madhi + Fa'il + Maf'ul bih" },
          { ar: "الْأَرُزُّ لَذِيذٌ جِدًّا", translation: "Nasi itu sangat enak", grammarNote: "Mubtada + Khabar + Maf'ul muthlaq", analysis: "Mubtada + Khabar + Maf'ul muthlaq" },
          { ar: "كِيلُو أَرُزٍّ", translation: "Satu kilo beras", grammarNote: "Mudhaf + Mudhaf ilayh (Nakirah)", analysis: "Mudhaf + Mudhaf ilayh (Nakirah)" }
        ]
      },
      {
        id: "l1_6_c4",
        wordAr: "لَحْمٌ",
        translation: "Daging",
        category: "Makanan Pokok",
        description: "Daging merah.",
        logicBox: "Isim Nakirah. Ma'rifah: اللَّحْمُ (Al Syamsiyyah). Jamaknya لُحُومٌ.",
        examples: [
          { ar: "أُحِبُّ اللَّحْمَ الْمَشْوِيَّ", translation: "Saya suka daging bakar itu", grammarNote: "Fi'il-Fa'il + Maf'ul bih (Ma'rifah) + Sifat", analysis: "Fi'il-Fa'il + Maf'ul bih (Ma'rifah) + Sifat" },
          { ar: "هَذَا لَحْمٌ حَلَالٌ", translation: "Ini daging halal", grammarNote: "Mubtada + Khabar (Nakirah) + Sifat", analysis: "Mubtada + Khabar (Nakirah) + Sifat" },
          { ar: "لَحْمُ الْبَقَرِ غَالٍ", translation: "Daging sapi itu mahal", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "لَا آكُلُ اللَّحْمَ", translation: "Saya tidak makan daging", grammarNote: "Nafi + Fi'il-Fa'il + Maf'ul bih", analysis: "Nafi + Fi'il-Fa'il + Maf'ul bih" },
          { ar: "قَطَّعَ اللَّحْمَ بِسُرْعَةٍ", translation: "Dia memotong daging dengan cepat", grammarNote: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah" },
          { ar: "أُرِيدُ كِيلُو لَحْمٍ", translation: "Saya mau sekilo daging", grammarNote: "Fi'il-Fa'il + Maf'ul bih (Mudhaf) + Mudhaf ilayh", analysis: "Fi'il-Fa'il + Maf'ul bih (Mudhaf) + Mudhaf ilayh" },
          { ar: "اللَّحْمُ طَازَجٌ", translation: "Daging itu segar", grammarNote: "Mubtada (Ma'rifah) + Khabar", analysis: "Mubtada (Ma'rifah) + Khabar" },
          { ar: "طَبَخْنَا لَحْمًا مُبَهَّرًا", translation: "Kami memasak daging berbumbu", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih (Nakirah) + Sifat", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih (Nakirah) + Sifat" },
          { ar: "حَسَاءُ اللَّحْمِ لَذِيذٌ", translation: "Sup daging itu lezat", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "سِعْرُ اللَّحْمِ مُرْتَفِعٌ", translation: "Harga daging itu tinggi", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" }
        ]
      },
      {
        id: "l1_6_c5",
        wordAr: "سَمَكٌ",
        translation: "Ikan",
        category: "Makanan Pokok",
        description: "Ikan. Daging ikan laut atau tawar.",
        logicBox: "Isim Nakirah. Ma'rifah: السَّمَكُ (Al Syamsiyyah). Jamaknya أَسْمَاكٌ.",
        examples: [
          { ar: "أَكَلْتُ سَمَكًا", translation: "Saya makan seekor ikan (tidak tentu)", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih (Nakirah)", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih (Nakirah)" },
          { ar: "السَّمَكُ مُفِيدٌ", translation: "Ikan itu bermanfaat", grammarNote: "Mubtada (Ma'rifah) + Khabar", analysis: "Mubtada (Ma'rifah) + Khabar" },
          { ar: "اِصْطَادَ السَّمَكَةَ", translation: "Dia memancing ikan itu (muannats)", grammarNote: "Fi'il Madhi + Maf'ul bih (Ma'rifah)", analysis: "Fi'il Madhi + Maf'ul bih (Ma'rifah)" },
          { ar: "أُحِبُّ السَّمَكَ الْمَقْلِيَّ", translation: "Saya suka ikan goreng", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Sifat", analysis: "Fi'il-Fa'il + Maf'ul bih + Sifat" },
          { ar: "هَلْ هَذَا سَمَكٌ؟", translation: "Apakah ini ikan?", grammarNote: "Tanya + Mubtada + Khabar (Nakirah)", analysis: "Tanya + Mubtada + Khabar (Nakirah)" },
          { ar: "اِشْتَرَيْتُ السَّمَكَ مِنَ السُّوقِ", translation: "Saya membeli ikan dari pasar", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "سَمَكَةٌ كَبِيرَةٌ", translation: "Seekor ikan yang besar", grammarNote: "Nakirah + Sifat", analysis: "Nakirah + Sifat" },
          { ar: "سَمَكُ الْبَحْرِ مَالِحٌ", translation: "Ikan laut itu asin", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "نَتَنَاوَلُ السَّمَكَ غَدًا", translation: "Kami menyantap ikan besok", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih + Zharaf Zaman", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih + Zharaf Zaman" },
          { ar: "لَحْمُ السَّمَكِ أَبْيَضُ", translation: "Daging ikan itu putih", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" }
        ]
      },
      {
        id: "l1_6_c6",
        wordAr: "دَجَاجٌ",
        translation: "Ayam",
        category: "Makanan Pokok",
        description: "Daging ayam.",
        logicBox: "Isim Nakirah. Ma'rifah: الدَّجَاجُ (Al Syamsiyyah). Bentuk mufrad muannats: دَجَاجَةٌ (ayam betina/seekor ayam).",
        examples: [
          { ar: "طَبَخَتْ أُمِّي دَجَاجَةً", translation: "Ibuku memasak seekor ayam", grammarNote: "Fi'il Madhi + Fa'il + Maf'ul bih (Nakirah)", analysis: "Fi'il Madhi + Fa'il + Maf'ul bih (Nakirah)" },
          { ar: "الدَّجَاجُ غَالٍ الْيَوْمَ", translation: "Ayam mahal hari ini", grammarNote: "Mubtada (Ma'rifah) + Khabar + Zharaf Zaman", analysis: "Mubtada (Ma'rifah) + Khabar + Zharaf Zaman" },
          { ar: "أُرِيدُ دَجَاجًا مَشْوِيًّا", translation: "Saya ingin ayam bakar", grammarNote: "Fi'il-Fa'il + Maf'ul bih (Nakirah) + Sifat", analysis: "Fi'il-Fa'il + Maf'ul bih (Nakirah) + Sifat" },
          { ar: "هَذَا لَحْمُ دَجَاجٍ", translation: "Ini daging ayam", grammarNote: "Mubtada + Khabar (idhafah)", analysis: "Mubtada + Khabar (idhafah)" },
          { ar: "أَكَلْتُ الدَّجَاجَ", translation: "Saya makan ayam itu", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih (Ma'rifah)", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih (Ma'rifah)" },
          { ar: "شُورْبَةُ الدَّجَاجِ", translation: "Sup ayam", grammarNote: "Mudhaf + Mudhaf ilayh (Ma'rifah)", analysis: "Mudhaf + Mudhaf ilayh (Ma'rifah)" },
          { ar: "دَجَاجَةٌ صَغِيرَةٌ", translation: "Seekor ayam kecil", grammarNote: "Nakirah + Sifat", analysis: "Nakirah + Sifat" },
          { ar: "هَلْ تُحِبُّ الدَّجَاجَ؟", translation: "Apakah kamu suka ayam?", grammarNote: "Tanya + Fi'il-Fa'il + Maf'ul bih", analysis: "Tanya + Fi'il-Fa'il + Maf'ul bih" },
          { ar: "اِشْتَرَى دَجَاجًا مِنَ السُّوقِ", translation: "Dia membeli ayam dari pasar", grammarNote: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah" },
          { ar: "الدَّجَاجُ الْمَقْلِيُّ لَذِيذٌ", translation: "Ayam goreng itu lezat", grammarNote: "Mubtada + Sifat + Khabar", analysis: "Mubtada + Sifat + Khabar" }
        ]
      },
      {
        id: "l1_6_c7",
        wordAr: "بَيْضٌ",
        translation: "Telur",
        category: "Makanan Pokok",
        description: "Telur.",
        logicBox: "Isim Nakirah. Ma'rifah: الْبَيْضُ (Al Qamariyyah). Mufradnya: بَيْضَةٌ (sebutir telur).",
        examples: [
          { ar: "أَفْطَرْتُ بِالْبَيْضِ", translation: "Saya sarapan dengan telur", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah (Ma'rifah)", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah (Ma'rifah)" },
          { ar: "هَذِهِ بَيْضَةٌ كَبِيرَةٌ", translation: "Ini sebutir telur yang besar", grammarNote: "Mubtada + Khabar (Nakirah) + Sifat", analysis: "Mubtada + Khabar (Nakirah) + Sifat" },
          { ar: "أَكَلْتُ بَيْضَتَيْنِ", translation: "Saya makan dua butir telur", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih (Mutsanna)", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih (Mutsanna)" },
          { ar: "الْبَيْضُ مُفِيدٌ", translation: "Telur itu bermanfaat", grammarNote: "Mubtada (Ma'rifah) + Khabar", analysis: "Mubtada (Ma'rifah) + Khabar" },
          { ar: "أُرِيدُ بَيْضًا مَقْلِيًّا", translation: "Saya mau telur dadar/ceplok", grammarNote: "Fi'il-Fa'il + Maf'ul bih (Nakirah) + Sifat", analysis: "Fi'il-Fa'il + Maf'ul bih (Nakirah) + Sifat" },
          { ar: "سَلَقَتِ الْبَيْضَ", translation: "Dia (pr) merebus telur", grammarNote: "Fi'il Madhi + Maf'ul bih (Ma'rifah)", analysis: "Fi'il Madhi + Maf'ul bih (Ma'rifah)" },
          { ar: "بَيْضَةٌ مَسْلُوقَةٌ", translation: "Telur rebus", grammarNote: "Nakirah + Sifat", analysis: "Nakirah + Sifat" },
          { ar: "كَمْ بَيْضَةً فِي الثَّلَّاجَةِ؟", translation: "Berapa telur di kulkas?", grammarNote: "Tanya + Tamyiz + Syibhul Jumlah", analysis: "Tanya + Tamyiz + Syibhul Jumlah" },
          { ar: "سِعْرُ الْبَيْضِ مُرْتَفِعٌ", translation: "Harga telur naik", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "خَلَطَ الدَّقِيقَ وَالْبَيْضَ", translation: "Dia mencampur tepung dan telur", grammarNote: "Fi'il Madhi + Maf'ul bih + Ma'thuf", analysis: "Fi'il Madhi + Maf'ul bih + Ma'thuf" }
        ]
      },
      {
        id: "l1_6_c8",
        wordAr: "خُضْرَةٌ",
        translation: "Sayuran",
        category: "Makanan Pokok",
        description: "Sayur-mayur hijau.",
        logicBox: "Isim Nakirah. Ma'rifah: الْخُضْرَةُ. Jamaknya خُضْرَوَاتٌ.",
        examples: [
          { ar: "أُحِبُّ الْخُضْرَوَاتِ", translation: "Saya suka sayuran", grammarNote: "Fi'il-Fa'il + Maf'ul bih (Jamak Muannats Salim)", analysis: "Fi'il-Fa'il + Maf'ul bih (Jamak Muannats Salim)" },
          { ar: "الْخُضْرَةُ طَازَجَةٌ", translation: "Sayuran itu segar", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "طَبَخَتْ حَسَاءَ الْخُضْرَةِ", translation: "Dia (pr) memasak sup sayuran", grammarNote: "Fi'il Madhi + Maf'ul bih (idhafah)", analysis: "Fi'il Madhi + Maf'ul bih (idhafah)" },
          { ar: "هَذِهِ خُضْرَةٌ مُفِيدَةٌ", translation: "Ini sayuran yang bermanfaat", grammarNote: "Mubtada + Khabar (Nakirah) + Sifat", analysis: "Mubtada + Khabar (Nakirah) + Sifat" },
          { ar: "نَأْكُلُ خُضْرَوَاتٍ كَثِيرَةً", translation: "Kami makan banyak sayuran", grammarNote: "Fi'il-Fa'il + Maf'ul bih (Nakirah) + Sifat", analysis: "Fi'il-Fa'il + Maf'ul bih (Nakirah) + Sifat" },
          { ar: "السَّلَطَةُ مِنَ الْخُضْرَوَاتِ", translation: "Salad terbuat dari sayur-sayuran", grammarNote: "Mubtada + Syibhul Jumlah", analysis: "Mubtada + Syibhul Jumlah" },
          { ar: "اِشْتَرَيْتُ خُضْرَةً مِنَ السُّوقِ", translation: "Saya membeli sayuran dari pasar", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "الْخُضْرَوَاتُ رَخِيصَةٌ الْيَوْمَ", translation: "Sayuran murah hari ini", grammarNote: "Mubtada (Ma'rifah) + Khabar + Zharaf Zaman", analysis: "Mubtada (Ma'rifah) + Khabar + Zharaf Zaman" },
          { ar: "طَعَامٌ مَلِيءٌ بِالْخُضْرَةِ", translation: "Makanan yang penuh dengan sayuran", grammarNote: "Nakirah + Sifat + Syibhul Jumlah", analysis: "Nakirah + Sifat + Syibhul Jumlah" },
          { ar: "يَجِبُ غَسْلُ الْخُضْرَوَاتِ", translation: "Wajib mencuci sayuran", grammarNote: "Fi'il Mudhari + Fa'il (idhafah)", analysis: "Fi'il Mudhari + Fa'il (idhafah)" }
        ]
      },
      {
        id: "l1_6_c9",
        wordAr: "فَاكِهَةٌ",
        translation: "Buah-buahan",
        category: "Makanan Pokok",
        description: "Buah-buahan segar.",
        logicBox: "Isim Nakirah, Muannats. Ma'rifah: الْفَاكِهَةُ. Jamaknya فَوَاكِهُ (ghairu munsharif).",
        examples: [
          { ar: "هَذِهِ فَاكِهَةٌ لَذِيذَةٌ", translation: "Ini buah yang lezat", grammarNote: "Mubtada + Khabar (Nakirah) + Sifat", analysis: "Mubtada + Khabar (Nakirah) + Sifat" },
          { ar: "الْفَوَاكِهُ مُفِيدَةٌ لِلْجِسْمِ", translation: "Buah-buahan bermanfaat untuk tubuh", grammarNote: "Mubtada (Ma'rifah) + Khabar + Syibhul Jumlah", analysis: "Mubtada (Ma'rifah) + Khabar + Syibhul Jumlah" },
          { ar: "أَكَلْتُ فَاكِهَةً بَعْدَ الطَّعَامِ", translation: "Saya makan sebuah buah setelah makan", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Zharaf", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Zharaf" },
          { ar: "أُحِبُّ الْفَوَاكِهَ جَمِيعًا", translation: "Saya menyukai semua buah-buahan", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Hal", analysis: "Fi'il-Fa'il + Maf'ul bih + Hal" },
          { ar: "مَا هِيَ فَاكِهَتُكَ الْمُفَضَّلَةُ؟", translation: "Apa buah kesukaanmu?", grammarNote: "Tanya + Mubtada + Khabar (idhafah) + Sifat", analysis: "Tanya + Mubtada + Khabar (idhafah) + Sifat" },
          { ar: "عَصِيرُ الْفَوَاكِهِ الطَّازَجَةِ", translation: "Jus buah-buahan segar", grammarNote: "Mudhaf + Mudhaf ilayh + Sifat", analysis: "Mudhaf + Mudhaf ilayh + Sifat" },
          { ar: "فِي الْحَدِيقَةِ أَشْجَارُ فَاكِهَةٍ", translation: "Di taman ada pohon-pohon buah", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar (idhafah Nakirah)", analysis: "Khabar Muqaddam + Mubtada Muakhkhar (idhafah Nakirah)" },
          { ar: "الْفَاكِهَةُ نَاضِجَةٌ", translation: "Buah itu matang", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "تَشْتَرِي الْفَاكِهَةَ مِنَ السُّوقِ", translation: "Dia (pr) membeli buah dari pasar", grammarNote: "Fi'il Mudhari + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Mudhari + Maf'ul bih + Syibhul Jumlah" },
          { ar: "تُفَّاحَةٌ فَاكِهَةٌ جَمِيلَةٌ", translation: "Apel adalah buah yang indah", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" }
        ]
      },
      {
        id: "l1_6_c10",
        wordAr: "حَلِيبٌ",
        translation: "Susu",
        category: "Makanan Pokok",
        description: "Susu murni.",
        logicBox: "Isim Nakirah. Ma'rifah: الْحَلِيبُ. Sering dianggap sama dengan لَبَنٌ di beberapa dialek, tapi حَلِيبٌ pasti susu segar.",
        examples: [
          { ar: "أَشْرَبُ حَلِيبًا", translation: "Saya minum susu (segas susu/tidak tentu)", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih (Nakirah)", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih (Nakirah)" },
          { ar: "الْحَلِيبُ سَاخِنٌ", translation: "Susu itu panas", grammarNote: "Mubtada (Ma'rifah) + Khabar", analysis: "Mubtada (Ma'rifah) + Khabar" },
          { ar: "شَرِبَ الطِّفْلُ الْحَلِيبَ", translation: "Anak itu telah meminum susu", grammarNote: "Fi'il Madhi + Fa'il + Maf'ul bih (Ma'rifah)", analysis: "Fi'il Madhi + Fa'il + Maf'ul bih (Ma'rifah)" },
          { ar: "كُوبٌ مِنْ حَلِيبٍ", translation: "Segelas susu", grammarNote: "Nakirah + Syibhul Jumlah (Keterangan)", analysis: "Nakirah + Syibhul Jumlah (Keterangan)" },
          { ar: "هَلْ هَذَا حَلِيبُ بَقَرٍ؟", translation: "Apakah ini susu sapi?", grammarNote: "Tanya + Mubtada + Khabar (idhafah Nakirah)", analysis: "Tanya + Mubtada + Khabar (idhafah Nakirah)" },
          { ar: "حَلِيبٌ طَازَجٌ", translation: "Susu segar", grammarNote: "Nakirah + Sifat", analysis: "Nakirah + Sifat" },
          { ar: "أُضِيفُ الْحَلِيبَ إِلَى الْقَهْوَةِ", translation: "Saya menambahkan susu ke dalam kopi", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "يَشْرَبُونَ الْحَلِيبَ كُلَّ صَبَاحٍ", translation: "Mereka meminum susu setiap pagi", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Zharaf", analysis: "Fi'il-Fa'il + Maf'ul bih + Zharaf" },
          { ar: "الْحَلِيبُ مَلِيءٌ بِالْكَالْسِيُومِ", translation: "Susu penuh dengan kalsium", grammarNote: "Mubtada + Khabar + Syibhul Jumlah", analysis: "Mubtada + Khabar + Syibhul Jumlah" },
          { ar: "هَاتِ كُوبَ الْحَلِيبِ", translation: "Berikan segelas susu itu", grammarNote: "Fi'il Amr + Maf'ul bih (idhafah)", analysis: "Fi'il Amr + Maf'ul bih (idhafah)" }
        ]
      },
      {
        id: "l1_6_c11",
        wordAr: "مَاءٌ",
        translation: "Air",
        category: "Minuman",
        description: "Air putih/mineral.",
        logicBox: "Isim Nakirah. Ma'rifah: الْمَاءُ (Al Qamariyyah). Jamaknya مِيَاهٌ.",
        examples: [
          { ar: "أُرِيدُ مَاءً بَارِدًا", translation: "Saya ingin air dingin", grammarNote: "Fi'il-Fa'il + Maf'ul bih (Nakirah) + Sifat", analysis: "Fi'il-Fa'il + Maf'ul bih (Nakirah) + Sifat" },
          { ar: "الْمَاءُ صَافٍ", translation: "Air itu jernih", grammarNote: "Mubtada (Ma'rifah) + Khabar", analysis: "Mubtada (Ma'rifah) + Khabar" },
          { ar: "شَرِبْتُ الْمَاءَ", translation: "Saya telah meminum air itu", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih (Ma'rifah)", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih (Ma'rifah)" },
          { ar: "الْمَاءُ سِرُّ الْحَيَاةِ", translation: "Air adalah rahasia kehidupan", grammarNote: "Mubtada + Khabar (idhafah)", analysis: "Mubtada + Khabar (idhafah)" },
          { ar: "هَلْ عِنْدَكَ مَاءٌ؟", translation: "Apakah kamu punya air?", grammarNote: "Tanya + Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar", analysis: "Tanya + Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar" },
          { ar: "كَأْسُ مَاءٍ مِنْ فَضْلِكَ", translation: "Segelas air tolong", grammarNote: "Mudhaf + Mudhaf ilayh (Nakirah) + Syibhul Jumlah", analysis: "Mudhaf + Mudhaf ilayh (Nakirah) + Syibhul Jumlah" },
          { ar: "الْمَاءُ يَغْلِي", translation: "Air itu mendidih", grammarNote: "Mubtada + Jumlah Fi'liyyah (Khabar)", analysis: "Mubtada + Jumlah Fi'liyyah (Khabar)" },
          { ar: "نَحْرِصُ عَلَى الْمِيَاهِ النَّظِيفَةِ", translation: "Kami menjaga air yang bersih", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Sifat", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Sifat" },
          { ar: "مَاءُ الْبَحْرِ مَالِحٌ", translation: "Air laut itu asin", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "اسْقِنِي مَاءً", translation: "Berilah aku minum air", grammarNote: "Fi'il Amr-Maf'ul bih 1 + Maf'ul bih 2", analysis: "Fi'il Amr-Maf'ul bih 1 + Maf'ul bih 2" }
        ]
      },
      {
        id: "l1_6_c12",
        wordAr: "شَايٌ",
        translation: "Teh",
        category: "Minuman",
        description: "Minuman teh.",
        logicBox: "Isim Nakirah. Ma'rifah: الشَّايُ (Al Syamsiyyah).",
        examples: [
          { ar: "أُحِبُّ الشَّايَ", translation: "Saya suka teh", grammarNote: "Fi'il-Fa'il + Maf'ul bih (Ma'rifah)", analysis: "Fi'il-Fa'il + Maf'ul bih (Ma'rifah)" },
          { ar: "الشَّايُ حَارٌّ", translation: "Teh itu panas", grammarNote: "Mubtada (Ma'rifah) + Khabar", analysis: "Mubtada (Ma'rifah) + Khabar" },
          { ar: "هَلْ تَشْرَبُ شَايًا؟", translation: "Apakah kamu minum (segelas) teh?", grammarNote: "Tanya + Fi'il-Fa'il + Maf'ul bih (Nakirah)", analysis: "Tanya + Fi'il-Fa'il + Maf'ul bih (Nakirah)" },
          { ar: "شَايٌ بِالنَّعْنَاعِ", translation: "Teh dengan mint", grammarNote: "Nakirah + Syibhul Jumlah", analysis: "Nakirah + Syibhul Jumlah" },
          { ar: "أَعْدَدْتُ الشَّايَ لِلضُّيُوفِ", translation: "Saya menyiapkan teh untuk tamu", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "الشَّايُ الْأَخْضَرُ مُفِيدٌ", translation: "Teh hijau bermanfaat", grammarNote: "Mubtada + Sifat + Khabar", analysis: "Mubtada + Sifat + Khabar" },
          { ar: "أُرِيدُ كُوبَ شَايٍ", translation: "Saya ingin secangkir teh", grammarNote: "Fi'il-Fa'il + Maf'ul bih (idhafah Nakirah)", analysis: "Fi'il-Fa'il + Maf'ul bih (idhafah Nakirah)" },
          { ar: "يَشْرَبُ الشَّايَ بَعْدَ الْعَصْرِ", translation: "Dia meminum teh setelah ashar", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Zharaf", analysis: "Fi'il-Fa'il + Maf'ul bih + Zharaf" },
          { ar: "الشَّايُ حُلْوٌ جِدًّا", translation: "Teh ini manis sekali", grammarNote: "Mubtada + Khabar + Maf'ul muthlaq", analysis: "Mubtada + Khabar + Maf'ul muthlaq" },
          { ar: "طَلَبْتُ شَايًا مُثَلَّجًا", translation: "Saya memesan teh es", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Sifat", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Sifat" }
        ]
      },
      {
        id: "l1_6_c13",
        wordAr: "قَهْوَةٌ",
        translation: "Kopi",
        category: "Minuman",
        description: "Minuman kopi.",
        logicBox: "Isim Nakirah, Muannats. Ma'rifah: الْقَهْوَةُ. Jamaknya قَهَوَاتٌ.",
        examples: [
          { ar: "أَشْرَبُ قَهْوَةً فِي الصَّبَاحِ", translation: "Saya minum secangkir kopi di pagi hari", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih (Nakirah) + Syibhul Jumlah", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih (Nakirah) + Syibhul Jumlah" },
          { ar: "الْقَهْوَةُ مُرَّةٌ", translation: "Kopi itu pahit", grammarNote: "Mubtada (Ma'rifah) + Khabar", analysis: "Mubtada (Ma'rifah) + Khabar" },
          { ar: "فِنْجَانُ قَهْوَةٍ مِنْ فَضْلِكَ", translation: "Secangkir kopi tolong", grammarNote: "Mudhaf + Mudhaf ilayh (Nakirah) + Syibhul Jumlah", analysis: "Mudhaf + Mudhaf ilayh (Nakirah) + Syibhul Jumlah" },
          { ar: "هَلْ تُحِبُّ الْقَهْوَةَ؟", translation: "Apakah kamu suka kopi?", grammarNote: "Tanya + Fi'il-Fa'il + Maf'ul bih", analysis: "Tanya + Fi'il-Fa'il + Maf'ul bih" },
          { ar: "قَهْوَةٌ بِالْحَلِيبِ", translation: "Kopi dengan susu", grammarNote: "Nakirah + Syibhul Jumlah", analysis: "Nakirah + Syibhul Jumlah" },
          { ar: "صَنَعَتِ الْقَهْوَةَ الْعَرَبِيَّةَ", translation: "Dia (pr) membuat kopi Arab", grammarNote: "Fi'il Madhi + Maf'ul bih + Sifat", analysis: "Fi'il Madhi + Maf'ul bih + Sifat" },
          { ar: "الْقَهْوَةُ جَاهِزَةٌ", translation: "Kopi sudah siap", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "رَائِحَةُ الْقَهْوَةِ جَمِيلَةٌ", translation: "Aroma kopi itu enak", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "شَرِبْتُ قَهْوَةً سَاخِنَةً", translation: "Saya minum kopi panas", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Sifat", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Sifat" },
          { ar: "الْقَهْوَةُ السَّوْدَاءُ مُنَبِّهَةٌ", translation: "Kopi hitam menyegarkan", grammarNote: "Mubtada + Sifat + Khabar", analysis: "Mubtada + Sifat + Khabar" }
        ]
      },
      {
        id: "l1_6_c14",
        wordAr: "عَصِيرٌ",
        translation: "Jus",
        category: "Minuman",
        description: "Jus buah-buahan.",
        logicBox: "Isim Nakirah. Ma'rifah: الْعَصِيرُ. Jamaknya عَصَائِرُ.",
        examples: [
          { ar: "عَصِيرُ بُرْتُقَالٍ", translation: "Jus jeruk", grammarNote: "Mudhaf + Mudhaf ilayh (Nakirah)", analysis: "Mudhaf + Mudhaf ilayh (Nakirah)" },
          { ar: "الْعَصِيرُ بَارِدٌ", translation: "Jus itu dingin", grammarNote: "Mubtada (Ma'rifah) + Khabar", analysis: "Mubtada (Ma'rifah) + Khabar" },
          { ar: "طَلَبْتُ عَصِيرًا", translation: "Saya memesan segelas jus", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih (Nakirah)", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih (Nakirah)" },
          { ar: "هَلْ عِنْدَكُمْ عَصِيرُ تُفَّاحٍ؟", translation: "Apakah kalian punya jus apel?", grammarNote: "Tanya + Khabar Muqaddam + Mubtada (idhafah)", analysis: "Tanya + Khabar Muqaddam + Mubtada (idhafah)" },
          { ar: "أَشْرَبُ الْعَصِيرَ مَعَ الطَّعَامِ", translation: "Saya minum jus bersama makanan", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih + Zharaf", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih + Zharaf" },
          { ar: "عَصِيرٌ طَازَجٌ", translation: "Jus segar", grammarNote: "Nakirah + Sifat", analysis: "Nakirah + Sifat" },
          { ar: "الْعَصِيرُ حُلْوٌ جِدًّا", translation: "Jus itu sangat manis", grammarNote: "Mubtada + Khabar + Maf'ul muthlaq", analysis: "Mubtada + Khabar + Maf'ul muthlaq" },
          { ar: "أُفَضِّلُ عَصِيرَ الْمَانْجُو", translation: "Saya lebih suka jus mangga", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih (idhafah)", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih (idhafah)" },
          { ar: "هَذَا عَصِيرٌ لَذِيذٌ", translation: "Ini jus yang lezat", grammarNote: "Mubtada + Khabar (Nakirah) + Sifat", analysis: "Mubtada + Khabar (Nakirah) + Sifat" },
          { ar: "سَكَبَ الْعَصِيرَ فِي الْكُوبِ", translation: "Dia menuangkan jus ke dalam gelas", grammarNote: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_6_c15",
        wordAr: "لَبَنٌ",
        translation: "Susu/Yoghurt",
        category: "Minuman",
        description: "Susu atau yoghurt (tergantung dialek).",
        logicBox: "Isim Nakirah. Ma'rifah: اللَّبَنُ (Al Syamsiyyah).",
        examples: [
          { ar: "لَبَنٌ طَازَجٌ", translation: "Susu/Yoghurt segar", grammarNote: "Nakirah + Sifat", analysis: "Nakirah + Sifat" },
          { ar: "أَشْرَبُ اللَّبَنَ", translation: "Saya meminum susu itu", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih (Ma'rifah)", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih (Ma'rifah)" },
          { ar: "هَذَا لَبَنٌ بَارِدٌ", translation: "Ini yoghurt yang dingin", grammarNote: "Mubtada + Khabar (Nakirah) + Sifat", analysis: "Mubtada + Khabar (Nakirah) + Sifat" },
          { ar: "اللَّبَنُ مُفِيدٌ لِلْمَعِدَةِ", translation: "Yoghurt bermanfaat untuk perut", grammarNote: "Mubtada + Khabar + Syibhul Jumlah", analysis: "Mubtada + Khabar + Syibhul Jumlah" },
          { ar: "طَلَبْتُ كُوبَ لَبَنٍ", translation: "Saya memesan segelas yoghurt", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih (idhafah)", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih (idhafah)" },
          { ar: "لَبَنٌ بِالنَّعْنَاعِ", translation: "Yoghurt dengan mint (minuman khas)", grammarNote: "Nakirah + Syibhul Jumlah", analysis: "Nakirah + Syibhul Jumlah" },
          { ar: "الْتَقَيْنَا عَلَى كُوبِ لَبَنٍ", translation: "Kami bertemu sambil minum segelas susu", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "اللَّبَنُ جَاهِزٌ", translation: "Susu sudah siap", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "أُحِبُّ اللَّبَنَ فِي الصَّبَاحِ", translation: "Saya suka susu di pagi hari", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "اِشْتَرَى زُجَاجَةَ لَبَنٍ", translation: "Dia membeli sebotol susu", grammarNote: "Fi'il Madhi + Maf'ul bih (idhafah)", analysis: "Fi'il Madhi + Maf'ul bih (idhafah)" }
        ]
      },
      {
        id: "l1_6_c16",
        wordAr: "مَطْعَمٌ",
        translation: "Restoran",
        category: "Di Restoran",
        description: "Tempat makan. Isim makan dari أَكَلَ (asal wazan طَعِمَ).",
        logicBox: "Isim Nakirah. Ma'rifah: الْمَطْعَمُ (Al Qamariyyah). Jamaknya مَطَاعِمُ.",
        examples: [
          { ar: "نَذْهَبُ إِلَى مَطْعَمٍ", translation: "Kami pergi ke sebuah restoran", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah (Nakirah)", analysis: "Fi'il-Fa'il + Syibhul Jumlah (Nakirah)" },
          { ar: "الْمَطْعَمُ مَفْتُوحٌ", translation: "Restoran itu buka", grammarNote: "Mubtada (Ma'rifah) + Khabar", analysis: "Mubtada (Ma'rifah) + Khabar" },
          { ar: "هَذَا مَطْعَمٌ كَبِيرٌ", translation: "Ini restoran yang besar", grammarNote: "Mubtada + Khabar (Nakirah) + Sifat", analysis: "Mubtada + Khabar (Nakirah) + Sifat" },
          { ar: "مَطْعَمُ الْجَامِعَةِ", translation: "Kantin universitas", grammarNote: "Mudhaf + Mudhaf ilayh (Ma'rifah)", analysis: "Mudhaf + Mudhaf ilayh (Ma'rifah)" },
          { ar: "تَنَاوَلْنَا الْعَشَاءَ فِي الْمَطْعَمِ", translation: "Kami makan malam di restoran", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "الْمَطَاعِمُ مُزْدَحِمَةٌ", translation: "Restoran-restoran sedang ramai", grammarNote: "Mubtada (Jamak) + Khabar (Mufrad Muannats)", analysis: "Mubtada (Jamak) + Khabar (Mufrad Muannats)" },
          { ar: "مَطْعَمٌ شَعْبِيٌّ", translation: "Restoran tradisional/rakyat", grammarNote: "Nakirah + Sifat", analysis: "Nakirah + Sifat" },
          { ar: "أَيْنَ أَقْرَبُ مَطْعَمٍ؟", translation: "Di mana restoran terdekat?", grammarNote: "Tanya + Khabar Muqaddam + Mubtada (idhafah)", analysis: "Tanya + Khabar Muqaddam + Mubtada (idhafah)" },
          { ar: "صَاحِبُ الْمَطْعَمِ مُحْتَرَمٌ", translation: "Pemilik restoran itu terhormat", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "اِفْتَتَحَ مَطْعَمًا جَدِيدًا", translation: "Dia membuka restoran baru", grammarNote: "Fi'il Madhi + Maf'ul bih (Nakirah) + Sifat", analysis: "Fi'il Madhi + Maf'ul bih (Nakirah) + Sifat" }
        ]
      },
      {
        id: "l1_6_c17",
        wordAr: "مَائِدَةٌ",
        translation: "Meja Makan",
        category: "Di Restoran",
        description: "Meja yang di atasnya ada makanan.",
        logicBox: "Isim Nakirah, Muannats. Ma'rifah: الْمَائِدَةُ. Jamaknya مَوَائِدُ.",
        examples: [
          { ar: "جَلَسْنَا حَوْلَ مَائِدَةٍ", translation: "Kami duduk di sekitar sebuah meja makan", grammarNote: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh (Nakirah)", analysis: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh (Nakirah)" },
          { ar: "الْمَائِدَةُ جَاهِزَةٌ", translation: "Meja makan sudah siap", grammarNote: "Mubtada (Ma'rifah) + Khabar", analysis: "Mubtada (Ma'rifah) + Khabar" },
          { ar: "عَلَى الْمَائِدَةِ طَعَامٌ", translation: "Di atas meja makan itu ada makanan", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar", analysis: "Khabar Muqaddam + Mubtada Muakhkhar" },
          { ar: "مَائِدَةُ الطَّعَامِ", translation: "Meja makan", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "رَتَّبَتِ الْمَائِدَةَ", translation: "Dia (pr) menata meja makan", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" },
          { ar: "مَائِدَةٌ كَبِيرَةٌ", translation: "Meja makan yang besar", grammarNote: "Nakirah + Sifat", analysis: "Nakirah + Sifat" },
          { ar: "وَضَعْتُ الْأَطْبَاقَ عَلَى الْمَائِدَةِ", translation: "Saya meletakkan piring-piring di atas meja makan", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "مَائِدَةُ الرَّحْمَنِ", translation: "Meja makan Ar-Rahman (berbuka puasa bersama)", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "هَلِ الْمَائِدَةُ مَحْجُوزَةٌ؟", translation: "Apakah meja makan ini dipesan/reservasi?", grammarNote: "Tanya + Mubtada + Khabar", analysis: "Tanya + Mubtada + Khabar" },
          { ar: "اِنْزِلْ عَلَيْنَا مَائِدَةً مِنَ السَّمَاءِ", translation: "Turunkanlah kepada kami hidangan dari langit", grammarNote: "Fi'il Amr + Syibhul Jumlah + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Amr + Syibhul Jumlah + Maf'ul bih + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_6_c18",
        wordAr: "طَبَقٌ",
        translation: "Piring",
        category: "Di Restoran",
        description: "Piring makanan atau hidangan.",
        logicBox: "Isim Nakirah. Ma'rifah: الطَّبَقُ (Al Syamsiyyah). Jamaknya أَطْبَاقٌ.",
        examples: [
          { ar: "هَاتِ طَبَقًا نَظِيفًا", translation: "Berikan piring yang bersih", grammarNote: "Fi'il Amr + Maf'ul bih (Nakirah) + Sifat", analysis: "Fi'il Amr + Maf'ul bih (Nakirah) + Sifat" },
          { ar: "الطَّبَقُ فَارِغٌ", translation: "Piring itu kosong", grammarNote: "Mubtada (Ma'rifah) + Khabar", analysis: "Mubtada (Ma'rifah) + Khabar" },
          { ar: "طَبَقُ الْيَوْمِ", translation: "Hidangan hari ini (Menu spesial)", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "غَسَلْتُ الْأَطْبَاقَ", translation: "Saya telah mencuci piring-piring", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih (Jamak)", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih (Jamak)" },
          { ar: "وَضَعَ اللَّحْمَ فِي الطَّبَقِ", translation: "Dia meletakkan daging di piring", grammarNote: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah" },
          { ar: "طَبَقٌ جَمِيلٌ", translation: "Piring yang indah", grammarNote: "Nakirah + Sifat", analysis: "Nakirah + Sifat" },
          { ar: "طَبَقُ الْحَسَاءِ", translation: "Piring sup", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "أَكَلْنَا مِنْ طَبَقٍ وَاحِدٍ", translation: "Kami makan dari satu piring", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Sifat", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Sifat" },
          { ar: "كَسَرَ طَبَقًا", translation: "Dia memecahkan sebuah piring", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" },
          { ar: "هَذَا الطَّبَقُ لَذِيذٌ", translation: "Hidangan ini lezat", grammarNote: "Mubtada (Isim Isyarah + Badal) + Khabar", analysis: "Mubtada (Isim Isyarah + Badal) + Khabar" }
        ]
      },
      {
        id: "l1_6_c19",
        wordAr: "كُوبٌ",
        translation: "Gelas",
        category: "Di Restoran",
        description: "Gelas/Cangkir tanpa pegangan atau gelas air.",
        logicBox: "Isim Nakirah. Ma'rifah: الْكُوبُ. Jamaknya أَكْوَابٌ.",
        examples: [
          { ar: "كُوبُ مَاءٍ مِنْ فَضْلِكَ", translation: "Segelas air tolong", grammarNote: "Mudhaf + Mudhaf ilayh (Nakirah) + Syibhul Jumlah", analysis: "Mudhaf + Mudhaf ilayh (Nakirah) + Syibhul Jumlah" },
          { ar: "الْكُوبُ مَمْلُوءٌ", translation: "Gelas itu penuh", grammarNote: "Mubtada (Ma'rifah) + Khabar", analysis: "Mubtada (Ma'rifah) + Khabar" },
          { ar: "شَرِبْتُ كُوبًا مِنَ الْحَلِيبِ", translation: "Saya meminum segelas susu", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "أَكْوَابٌ زُجَاجِيَّةٌ", translation: "Gelas-gelas kaca", grammarNote: "Mubtada + Sifat", analysis: "Mubtada + Sifat" },
          { ar: "انْكَسَرَ الْكُوبُ", translation: "Gelas itu pecah", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "هَاتِ كُوبًا آخَرَ", translation: "Bawakan gelas yang lain", grammarNote: "Fi'il Amr + Maf'ul bih + Sifat", analysis: "Fi'il Amr + Maf'ul bih + Sifat" },
          { ar: "سَكَبَ الْعَصِيرَ فِي الْكُوبِ", translation: "Dia menuangkan jus ke dalam gelas", grammarNote: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah" },
          { ar: "وَأَكْوَابٌ مَوْضُوعَةٌ", translation: "Dan gelas-gelas yang tersedia", grammarNote: "Mubtada + Sifat", analysis: "Mubtada + Sifat" },
          { ar: "كُوبٌ فَارِغٌ", translation: "Gelas yang kosong", grammarNote: "Nakirah + Sifat", analysis: "Nakirah + Sifat" },
          { ar: "غَسَلَتِ الْأَكْوَابَ", translation: "Dia (pr) mencuci gelas-gelas", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" }
        ]
      },
      {
        id: "l1_6_c20",
        wordAr: "مِلْعَقَةٌ",
        translation: "Sendok",
        category: "Di Restoran",
        description: "Alat makan. Dari kata لَعِقَ (menjilat).",
        logicBox: "Isim Nakirah, Muannats. Ma'rifah: الْمِلْعَقَةُ. Jamaknya مَلَاعِقُ.",
        examples: [
          { ar: "أَكَلْتُ الْأَرُزَّ بِمِلْعَقَةٍ", translation: "Saya makan nasi dengan sebuah sendok", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah (Nakirah)", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah (Nakirah)" },
          { ar: "الْمِلْعَقَةُ عَلَى الْمَائِدَةِ", translation: "Sendok itu di atas meja makan", grammarNote: "Mubtada (Ma'rifah) + Khabar (Syibhul Jumlah)", analysis: "Mubtada (Ma'rifah) + Khabar (Syibhul Jumlah)" },
          { ar: "هَاتِ مِلْعَقَةً مِنْ فَضْلِكَ", translation: "Bawakan sendok tolong", grammarNote: "Fi'il Amr + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Amr + Maf'ul bih + Syibhul Jumlah" },
          { ar: "مِلْعَقَةٌ صَغِيرَةٌ", translation: "Sendok kecil", grammarNote: "Nakirah + Sifat", analysis: "Nakirah + Sifat" },
          { ar: "مِلْعَقَةُ سُكَّرٍ", translation: "Satu sendok gula", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "اغْسِلِ الْمِلْعَقَةَ", translation: "Cucilah sendok itu", grammarNote: "Fi'il Amr + Maf'ul bih", analysis: "Fi'il Amr + Maf'ul bih" },
          { ar: "وَقَعَتِ الْمِلْعَقَةُ", translation: "Sendok itu jatuh", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "شَوْكَةٌ وَمِلْعَقَةٌ", translation: "Garpu dan sendok", grammarNote: "Ma'thuf alayh + Ma'thuf", analysis: "Ma'thuf alayh + Ma'thuf" },
          { ar: "مَلَاعِقُ خَشَبِيَّةٌ", translation: "Sendok-sendok kayu", grammarNote: "Jamak + Sifat", analysis: "Jamak + Sifat" },
          { ar: "تَنَاوَلَ الدَّوَاءَ بِمِلْعَقَةٍ", translation: "Dia meminum obat dengan sendok", grammarNote: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_6_c21",
        wordAr: "لَذِيذٌ",
        translation: "Enak/Lezat",
        category: "Rasa & Sifat",
        description: "Sifat makanan/minuman yang rasanya enak.",
        logicBox: "Sifat. Mengikuti mau'shufnya (berubah sesuai jenis kelamin & jumlah). Muannats: لَذِيذَةٌ.",
        examples: [
          { ar: "هَذَا طَعَامٌ لَذِيذٌ", translation: "Ini makanan lezat", grammarNote: "Mubtada + Khabar + Sifat (Mudzakkar Nakirah)", analysis: "Mubtada + Khabar + Sifat (Mudzakkar Nakirah)" },
          { ar: "الطَّعَامُ لَذِيذٌ", translation: "Makanan itu lezat", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "هَذِهِ فَاكِهَةٌ لَذِيذَةٌ", translation: "Ini buah yang lezat", grammarNote: "Mubtada + Khabar + Sifat (Muannats)", analysis: "Mubtada + Khabar + Sifat (Muannats)" },
          { ar: "أَكَلْتُ وَجْبَةً لَذِيذَةً", translation: "Saya makan hidangan yang lezat", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Sifat", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Sifat" },
          { ar: "هَلِ الْخُبْزُ لَذِيذٌ؟", translation: "Apakah roti itu lezat?", grammarNote: "Tanya + Mubtada + Khabar", analysis: "Tanya + Mubtada + Khabar" },
          { ar: "عَصِيرٌ لَذِيذٌ جِدًّا", translation: "Jus yang sangat lezat", grammarNote: "Mausuf + Sifat + Maf'ul muthlaq", analysis: "Mausuf + Sifat + Maf'ul muthlaq" },
          { ar: "الشَّايُ لَذِيذٌ", translation: "Teh itu nikmat", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "لَحْمٌ مَشْوِيٌّ لَذِيذٌ", translation: "Daging bakar yang lezat", grammarNote: "Mausuf + Sifat 1 + Sifat 2", analysis: "Mausuf + Sifat 1 + Sifat 2" },
          { ar: "طَعْمُهُ لَذِيذٌ", translation: "Rasanya enak", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "أَطْبَاقٌ لَذِيذَةٌ", translation: "Hidangan-hidangan lezat", grammarNote: "Jamak + Sifat (Mufrad Muannats)", analysis: "Jamak + Sifat (Mufrad Muannats)" }
        ]
      },
      {
        id: "l1_6_c22",
        wordAr: "حُلْوٌ",
        translation: "Manis",
        category: "Rasa & Sifat",
        description: "Rasa manis.",
        logicBox: "Sifat. Muannats: حُلْوَةٌ. Jamaknya: حَلْوَى (manisan/kue).",
        examples: [
          { ar: "هَذَا شَايٌ حُلْوٌ", translation: "Ini teh yang manis", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "الْعَصِيرُ حُلْوٌ جِدًّا", translation: "Jus itu sangat manis", grammarNote: "Mubtada + Khabar + Keterangan", analysis: "Mubtada + Khabar + Keterangan" },
          { ar: "أُحِبُّ الطَّعَامَ الْحُلْوَ", translation: "Saya suka makanan yang manis", grammarNote: "Fi'il-Fa'il + Maf'ul bih (Ma'rifah) + Sifat (Ma'rifah)", analysis: "Fi'il-Fa'il + Maf'ul bih (Ma'rifah) + Sifat (Ma'rifah)" },
          { ar: "فَاكِهَةٌ حُلْوَةٌ", translation: "Buah yang manis", grammarNote: "Mausuf (Muannats) + Sifat (Muannats)", analysis: "Mausuf (Muannats) + Sifat (Muannats)" },
          { ar: "طَعْمُهُ حُلْوٌ كَالْعَسَلِ", translation: "Rasanya manis seperti madu", grammarNote: "Mubtada (idhafah) + Khabar + Syibhul Jumlah", analysis: "Mubtada (idhafah) + Khabar + Syibhul Jumlah" },
          { ar: "لَا أُحِبُّ الْحُلْوَ", translation: "Saya tidak suka yang manis", grammarNote: "Nafi + Fi'il-Fa'il + Maf'ul bih", analysis: "Nafi + Fi'il-Fa'il + Maf'ul bih" },
          { ar: "هَلِ الْقَهْوَةُ حُلْوَةٌ؟", translation: "Apakah kopi itu manis?", grammarNote: "Tanya + Mubtada + Khabar", analysis: "Tanya + Mubtada + Khabar" },
          { ar: "كَلَامٌ حُلْوٌ", translation: "Perkataan yang manis", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "الْحَلْوَى لَذِيذَةٌ", translation: "Kue/manisan itu lezat", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "بِطِّيخٌ حُلْوٌ", translation: "Semangka yang manis", grammarNote: "Mubtada + Sifat", analysis: "Mubtada + Sifat" }
        ]
      },
      {
        id: "l1_6_c23",
        wordAr: "مَالِحٌ",
        translation: "Asin",
        category: "Rasa & Sifat",
        description: "Rasa asin.",
        logicBox: "Sifat. Muannats: مَالِحَةٌ. Terkait dengan مِلْحٌ (garam).",
        examples: [
          { ar: "هَذَا حَسَاءٌ مَالِحٌ", translation: "Ini sup yang asin", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "الطَّعَامُ مَالِحٌ جِدًّا", translation: "Makanan ini terlalu asin", grammarNote: "Mubtada + Khabar + Keterangan", analysis: "Mubtada + Khabar + Keterangan" },
          { ar: "سَمَكٌ مَالِحٌ", translation: "Ikan asin", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "لَا أُحِبُّ الْأَكْلَ الْمَالِحَ", translation: "Saya tidak suka makanan asin", grammarNote: "Nafi + Fi'il-Fa'il + Maf'ul bih + Sifat", analysis: "Nafi + Fi'il-Fa'il + Maf'ul bih + Sifat" },
          { ar: "الْمَاءُ مَالِحٌ", translation: "Air itu asin", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "طَعْمٌ مَالِحٌ وَحَامِضٌ", translation: "Rasa asin dan asam", grammarNote: "Mubtada + Khabar + Ma'thuf", analysis: "Mubtada + Khabar + Ma'thuf" },
          { ar: "زَادَ الْمِلْحَ فَصَارَ مَالِحًا", translation: "Dia menambah garam maka jadilah asin", grammarNote: "Fi'il-Fa'il-Maf'ul bih + Fi'il Naqis-Khabar", analysis: "Fi'il-Fa'il-Maf'ul bih + Fi'il Naqis-Khabar" },
          { ar: "جُبْنَةٌ مَالِحَةٌ", translation: "Keju yang asin", grammarNote: "Mausuf (Muannats) + Sifat (Muannats)", analysis: "Mausuf (Muannats) + Sifat (Muannats)" },
          { ar: "هَلِ اللَّحْمُ مَالِحٌ؟", translation: "Apakah daging itu asin?", grammarNote: "Tanya + Mubtada + Khabar", analysis: "Tanya + Mubtada + Khabar" },
          { ar: "بَحْرٌ مَالِحٌ", translation: "Laut yang asin", grammarNote: "Mubtada + Sifat", analysis: "Mubtada + Sifat" }
        ]
      },
      {
        id: "l1_6_c24",
        wordAr: "حَارٌّ",
        translation: "Panas/Pedas",
        category: "Rasa & Sifat",
        description: "Berarti suhu panas atau rasa pedas.",
        logicBox: "Sifat. Muannats: حَارَّةٌ.",
        examples: [
          { ar: "الشَّايُ حَارٌّ", translation: "Teh itu panas", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "الْجَوُّ حَارٌّ", translation: "Cuaca panas", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "طَعَامٌ حَارٌّ", translation: "Makanan pedas", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "أُحِبُّ اللَّحْمَ الْحَارَّ", translation: "Saya suka daging pedas", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Sifat", analysis: "Fi'il-Fa'il + Maf'ul bih + Sifat" },
          { ar: "هَلِ الْحَسَاءُ حَارٌّ؟", translation: "Apakah sup itu panas?", grammarNote: "Tanya + Mubtada + Khabar", analysis: "Tanya + Mubtada + Khabar" },
          { ar: "شَرِبْتُ قَهْوَةً حَارَّةً", translation: "Saya meminum kopi yang panas", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih (Muannats) + Sifat", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih (Muannats) + Sifat" },
          { ar: "صَوْصَةٌ حَارَّةٌ", translation: "Saus yang pedas", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "لَا تَشْرَبِ الْمَاءَ الْحَارَّ", translation: "Jangan meminum air yang panas", grammarNote: "La Nahiyah + Fi'il Mudhari + Maf'ul bih + Sifat", analysis: "La Nahiyah + Fi'il Mudhari + Maf'ul bih + Sifat" },
          { ar: "اِحْذَرْ، الطَّبَقُ حَارٌّ", translation: "Hati-hati, piring itu panas", grammarNote: "Fi'il Amr + Mubtada + Khabar", analysis: "Fi'il Amr + Mubtada + Khabar" },
          { ar: "فُلْفُلٌ حَارٌّ", translation: "Lada/cabai yang pedas", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" }
        ]
      },
      {
        id: "l1_6_c25",
        wordAr: "بَارِدٌ",
        translation: "Dingin",
        category: "Rasa & Sifat",
        description: "Suhu dingin. Lawan dari حَارٌّ.",
        logicBox: "Sifat. Muannats: بَارِدَةٌ.",
        examples: [
          { ar: "مَاءٌ بَارِدٌ", translation: "Air yang dingin", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "أُرِيدُ عَصِيرًا بَارِدًا", translation: "Saya ingin jus yang dingin", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Sifat", analysis: "Fi'il-Fa'il + Maf'ul bih + Sifat" },
          { ar: "الْخُبْزُ بَارِدٌ", translation: "Roti itu dingin", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "لَبَنٌ بَارِدٌ مَعَ التَّمْرِ", translation: "Susu dingin bersama kurma", grammarNote: "Mausuf + Sifat + Syibhul Jumlah", analysis: "Mausuf + Sifat + Syibhul Jumlah" },
          { ar: "هَلْ تُحِبُّ الشَّايَ الْبَارِدَ؟", translation: "Apakah kamu suka es teh (teh dingin)?", grammarNote: "Tanya + Fi'il-Fa'il + Maf'ul bih + Sifat", analysis: "Tanya + Fi'il-Fa'il + Maf'ul bih + Sifat" },
          { ar: "الْجَوُّ بَارِدٌ الْيَوْمَ", translation: "Cuaca dingin hari ini", grammarNote: "Mubtada + Khabar + Zharaf", analysis: "Mubtada + Khabar + Zharaf" },
          { ar: "شَرِبْتُ مَاءً بَارِدًا", translation: "Saya meminum air dingin", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Sifat", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Sifat" },
          { ar: "سَلَطَةٌ بَارِدَةٌ", translation: "Salad dingin", grammarNote: "Mausuf (Muannats) + Sifat (Muannats)", analysis: "Mausuf (Muannats) + Sifat (Muannats)" },
          { ar: "قَهْوَةٌ بَارِدَةٌ لَا تُعْجِبُنِي", translation: "Kopi dingin tidak membuatku suka", grammarNote: "Mubtada + Sifat + Jumlah Fi'liyyah (Khabar)", analysis: "Mubtada + Sifat + Jumlah Fi'liyyah (Khabar)" },
          { ar: "فِي يَوْمٍ بَارِدٍ", translation: "Pada hari yang dingin", grammarNote: "Syibhul Jumlah + Sifat", analysis: "Syibhul Jumlah + Sifat" }
        ]
      },
      {
        id: "l1_6_c26",
        wordAr: "أَكَلَ",
        translation: "Makan",
        category: "Kata Kerja Makan",
        description: "Kata kerja madhi. Mudharinya: يَأْكُلُ.",
        logicBox: "Fi'il madhi, butuh fa'il dan maf'ul bih (transitif). Masdarnya: أَكْلٌ.",
        examples: [
          { ar: "أَكَلَ الطَّعَامَ", translation: "Dia (lk) memakan makanan", grammarNote: "Fi'il Madhi + Fa'il (Mustatir) + Maf'ul bih", analysis: "Fi'il Madhi + Fa'il (Mustatir) + Maf'ul bih" },
          { ar: "أَكَلْتُ التُّفَّاحَةَ", translation: "Saya telah memakan apel itu", grammarNote: "Fi'il Madhi-Fa'il (tu) + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il (tu) + Maf'ul bih" },
          { ar: "يَأْكُلُ الْوَلَدُ أَرُزًّا", translation: "Anak laki-laki itu memakan nasi", grammarNote: "Fi'il Mudhari + Fa'il + Maf'ul bih", analysis: "Fi'il Mudhari + Fa'il + Maf'ul bih" },
          { ar: "نَأْكُلُ فِي الْمَطْعَمِ", translation: "Kami makan di restoran", grammarNote: "Fi'il Mudhari-Fa'il + Syibhul Jumlah", analysis: "Fi'il Mudhari-Fa'il + Syibhul Jumlah" },
          { ar: "هَلْ أَكَلْتَ؟", translation: "Apakah kamu sudah makan?", grammarNote: "Tanya + Fi'il Madhi-Fa'il", analysis: "Tanya + Fi'il Madhi-Fa'il" },
          { ar: "كُلْ بِيَمِينِكَ", translation: "Makanlah dengan tangan kananmu", grammarNote: "Fi'il Amr + Syibhul Jumlah", analysis: "Fi'il Amr + Syibhul Jumlah" },
          { ar: "الْأَكْلُ لَذِيذٌ", translation: "Makanan (kegiatan makan) itu lezat", grammarNote: "Mubtada (Mashdar) + Khabar", analysis: "Mubtada (Mashdar) + Khabar" },
          { ar: "أَكَلُوا جَمِيعًا", translation: "Mereka semua telah makan", grammarNote: "Fi'il Madhi-Fa'il + Hal", analysis: "Fi'il Madhi-Fa'il + Hal" },
          { ar: "مَاذَا أَكَلْتَ الْيَوْمَ؟", translation: "Apa yang kamu makan hari ini?", grammarNote: "Tanya + Fi'il Madhi-Fa'il + Zharaf Zaman", analysis: "Tanya + Fi'il Madhi-Fa'il + Zharaf Zaman" },
          { ar: "تَأْكُلُ الْبِنْتُ كَعْكَةً", translation: "Gadis itu memakan sebuah kue", grammarNote: "Fi'il Mudhari + Fa'il + Maf'ul bih", analysis: "Fi'il Mudhari + Fa'il + Maf'ul bih" }
        ]
      },
      {
        id: "l1_6_c27",
        wordAr: "شَرِبَ",
        translation: "Minum",
        category: "Kata Kerja Makan",
        description: "Kata kerja madhi. Mudharinya: يَشْرَبُ.",
        logicBox: "Fi'il madhi, transitif (butuh maf'ul bih). Masdarnya: شُرْبٌ.",
        examples: [
          { ar: "شَرِبَ الْمَاءَ", translation: "Dia meminum air", grammarNote: "Fi'il Madhi + Fa'il (Mustatir) + Maf'ul bih", analysis: "Fi'il Madhi + Fa'il (Mustatir) + Maf'ul bih" },
          { ar: "أَشْرَبُ الشَّايَ صَبَاحًا", translation: "Saya meminum teh di pagi hari", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih + Zharaf", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih + Zharaf" },
          { ar: "شَرِبْنَا الْقَهْوَةَ مَعًا", translation: "Kami meminum kopi bersama", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Hal", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Hal" },
          { ar: "مَاذَا تَشْرَبُ؟", translation: "Apa yang kamu minum?", grammarNote: "Tanya + Fi'il Mudhari-Fa'il", analysis: "Tanya + Fi'il Mudhari-Fa'il" },
          { ar: "اِشْرَبْ حَلِيبًا!", translation: "Minumlah susu!", grammarNote: "Fi'il Amr + Maf'ul bih", analysis: "Fi'il Amr + Maf'ul bih" },
          { ar: "لَمْ أَشْرَبْ شَيْئًا", translation: "Saya tidak/belum minum apapun", grammarNote: "Nafi + Fi'il Mudhari majzum + Maf'ul bih", analysis: "Nafi + Fi'il Mudhari majzum + Maf'ul bih" },
          { ar: "تَشْرَبُ الْعَصِيرَ", translation: "Dia (pr) meminum jus", grammarNote: "Fi'il Mudhari + Fa'il (Mustatir) + Maf'ul bih", analysis: "Fi'il Mudhari + Fa'il (Mustatir) + Maf'ul bih" },
          { ar: "يَشْرَبُونَ اللَّبَنَ", translation: "Mereka meminum susu/yoghurt", grammarNote: "Fi'il Mudhari + Fa'il (Jamak) + Maf'ul bih", analysis: "Fi'il Mudhari + Fa'il (Jamak) + Maf'ul bih" },
          { ar: "هَلْ شَرِبْتِ الدَّوَاءَ؟", translation: "Apakah kamu (pr) sudah minum obat?", grammarNote: "Tanya + Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Tanya + Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "شُرْبُ الْمَاءِ مُهِمٌّ", translation: "Minum air itu penting", grammarNote: "Mubtada (Mashdar Idhafi) + Khabar", analysis: "Mubtada (Mashdar Idhafi) + Khabar" }
        ]
      },
      {
        id: "l1_6_c28",
        wordAr: "طَبَخَ",
        translation: "Memasak",
        category: "Kata Kerja Makan",
        description: "Kata kerja madhi. Mudharinya: يَطْبُخُ.",
        logicBox: "Fi'il madhi. Pelakunya (Fa'il) disebut طَبَّاخٌ (koki).",
        examples: [
          { ar: "طَبَخَتْ أُمِّي الطَّعَامَ", translation: "Ibuku memasak makanan", grammarNote: "Fi'il Madhi + Fa'il + Maf'ul bih", analysis: "Fi'il Madhi + Fa'il + Maf'ul bih" },
          { ar: "أَطْبُخُ الْعَشَاءَ", translation: "Saya sedang memasak makan malam", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih" },
          { ar: "مَاذَا تَطْبُخِينَ؟", translation: "Apa yang sedang kamu (pr) masak?", grammarNote: "Tanya + Fi'il Mudhari-Fa'il", analysis: "Tanya + Fi'il Mudhari-Fa'il" },
          { ar: "الطَّبَّاخُ يَطْبُخُ اللَّحْمَ", translation: "Koki sedang memasak daging", grammarNote: "Mubtada + Jumlah Fi'liyyah (Khabar)", analysis: "Mubtada + Jumlah Fi'liyyah (Khabar)" },
          { ar: "طَبَخْنَا أَرُزًّا", translation: "Kami telah memasak nasi", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "مَنْ طَبَخَ هَذَا؟", translation: "Siapa yang memasak ini?", grammarNote: "Tanya + Fi'il Madhi + Maf'ul bih", analysis: "Tanya + Fi'il Madhi + Maf'ul bih" },
          { ar: "تُحِبُّ الطَّبْخَ", translation: "Dia (pr) suka memasak", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih (Mashdar)", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih (Mashdar)" },
          { ar: "هَلْ تَعْرِفُ أَنْ تَطْبُخَ؟", translation: "Apakah kamu tahu cara memasak?", grammarNote: "Tanya + Fi'il-Fa'il + Mashdar Muawwal", analysis: "Tanya + Fi'il-Fa'il + Mashdar Muawwal" },
          { ar: "طَبَخَ الدَّجَاجَ فِي الْفُرْنِ", translation: "Dia memasak ayam di oven", grammarNote: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah" },
          { ar: "طَعَامٌ مَطْبُوخٌ", translation: "Makanan yang dimasak", grammarNote: "Mausuf + Sifat (Isim Maf'ul)", analysis: "Mausuf + Sifat (Isim Maf'ul)" }
        ]
      },
      {
        id: "l1_6_c29",
        wordAr: "اِشْتَرَى",
        translation: "Membeli",
        category: "Kata Kerja Makan",
        description: "Kata kerja madhi. Mudharinya: يَشْتَرِي.",
        logicBox: "Fi'il madhi mazid (wazan ifta'ala). Berakhiran alif maqshurah. Masdarnya: شِرَاءٌ.",
        examples: [
          { ar: "اِشْتَرَيْتُ خُبْزًا", translation: "Saya membeli sepotong roti", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "يَشْتَرِي السَّمَكَ مِنَ السُّوقِ", translation: "Dia membeli ikan dari pasar", grammarNote: "Fi'il Mudhari + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Mudhari + Maf'ul bih + Syibhul Jumlah" },
          { ar: "مَاذَا اِشْتَرَيْتَ؟", translation: "Apa yang telah kamu beli?", grammarNote: "Tanya + Fi'il Madhi-Fa'il", analysis: "Tanya + Fi'il Madhi-Fa'il" },
          { ar: "أُرِيدُ أَنْ أَشْتَرِيَ فَاكِهَةً", translation: "Saya ingin membeli buah", grammarNote: "Fi'il-Fa'il + Mashdar Muawwal (Fi'il + Maf'ul bih)", analysis: "Fi'il-Fa'il + Mashdar Muawwal (Fi'il + Maf'ul bih)" },
          { ar: "اِشْتَرَيْنَا طَعَامَ الْعَشَاءِ", translation: "Kami membeli makanan makan malam", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih (idhafah)", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih (idhafah)" },
          { ar: "هَلِ اشْتَرَتِ الْحَلِيبَ؟", translation: "Apakah dia (pr) telah membeli susu?", grammarNote: "Tanya + Fi'il Madhi + Maf'ul bih", analysis: "Tanya + Fi'il Madhi + Maf'ul bih" },
          { ar: "سَأَشْتَرِي بَيْضًا الْيَوْمَ", translation: "Saya akan membeli telur hari ini", grammarNote: "Fi'il Mudhari + Maf'ul bih + Zharaf", analysis: "Fi'il Mudhari + Maf'ul bih + Zharaf" },
          { ar: "يَشْتَرُونَ الْمُعَلَّبَاتِ", translation: "Mereka membeli makanan kaleng", grammarNote: "Fi'il Mudhari-Fa'il (Jamak) + Maf'ul bih", analysis: "Fi'il Mudhari-Fa'il (Jamak) + Maf'ul bih" },
          { ar: "مِنْ أَيْنَ اشْتَرَيْتَ هَذَا؟", translation: "Dari mana kamu membeli ini?", grammarNote: "Tanya + Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Tanya + Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "اِشْتَرِ لِي قَهْوَةً", translation: "Belikan saya kopi (perintah)", grammarNote: "Fi'il Amr + Syibhul Jumlah + Maf'ul bih", analysis: "Fi'il Amr + Syibhul Jumlah + Maf'ul bih" }
        ]
      },
      {
        id: "l1_6_c30",
        wordAr: "جَاعَ",
        translation: "Lapar",
        category: "Kata Kerja Makan",
        description: "Kata kerja madhi. Mudharinya: يَجُوعُ. Kata sifat lapar: جَوْعَانُ.",
        logicBox: "Fi'il madhi lazim (tidak butuh objek). Masdarnya: جُوعٌ.",
        examples: [
          { ar: "أَنَا جَوْعَانُ", translation: "Saya lapar (lk)", grammarNote: "Mubtada + Khabar (Isim Sifat)", analysis: "Mubtada + Khabar (Isim Sifat)" },
          { ar: "أَنَا جَوْعَى", translation: "Saya lapar (pr)", grammarNote: "Mubtada + Khabar (Isim Sifat)", analysis: "Mubtada + Khabar (Isim Sifat)" },
          { ar: "جُعْتُ كَثِيرًا", translation: "Saya sangat lapar (telah lapar)", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul muthlaq", analysis: "Fi'il Madhi-Fa'il + Maf'ul muthlaq" },
          { ar: "الطِّفْلُ يَجُوعُ بِسُرْعَةٍ", translation: "Anak itu cepat lapar", grammarNote: "Mubtada + Jumlah Fi'liyyah + Syibhul Jumlah", analysis: "Mubtada + Jumlah Fi'liyyah + Syibhul Jumlah" },
          { ar: "هَلْ أَنْتَ جَوْعَانُ؟", translation: "Apakah kamu lapar?", grammarNote: "Tanya + Mubtada + Khabar", analysis: "Tanya + Mubtada + Khabar" },
          { ar: "شَعَرْتُ بِالْجُوعِ", translation: "Saya merasa lapar (dengan kelaparan)", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "لَا تَجُوعُ هُنَا", translation: "Kamu tidak akan lapar di sini", grammarNote: "Nafi + Fi'il Mudhari + Zharaf", analysis: "Nafi + Fi'il Mudhari + Zharaf" },
          { ar: "عِنْدَمَا أَجُوعُ، آكُلُ", translation: "Ketika saya lapar, saya makan", grammarNote: "Zharaf + Fi'il Mudhari + Fi'il Mudhari", analysis: "Zharaf + Fi'il Mudhari + Fi'il Mudhari" },
          { ar: "مَاتَ مِنَ الْجُوعِ", translation: "Dia mati karena kelaparan", grammarNote: "Fi'il Madhi + Syibhul Jumlah", analysis: "Fi'il Madhi + Syibhul Jumlah" },
          { ar: "إِطْعَامُ الْجَائِعِ", translation: "Memberi makan orang yang lapar", grammarNote: "Mudhaf + Mudhaf ilayh (Isim Fa'il)", analysis: "Mudhaf + Mudhaf ilayh (Isim Fa'il)" }
        ]
      }
    ],
    grammarSection: {
      title: "Isim Nakirah & Ma'rifah (Definit & Indefinit)",
      explanation: "Semua kata benda Arab punya dua kondisi:\n\nNAKIRAH (tidak tentu/indefinit):\n- Tidak pakai AL\n- Ada tanwin (ـٌ ـٍ ـً)\n- Artinya: 'sebuah/suatu'\nContoh: طَعَامٌ = sebuah makanan\n\nMA'RIFAH (tentu/definit):\n- Pakai AL (الـ)\n- Tidak ada tanwin\n- Artinya: 'makanan itu/si'\nContoh: الطَّعَامُ = makanan itu\n\nKAPAN PAKAI MA'RIFAH?\n1. Sudah disebut sebelumnya\n2. Diketahui kedua pihak\n3. Satu-satunya (matahari, dll)\n4. Nama diri\n\nHURUF SYAMSIAH & QAMARIAH:\nHuruf syamsiah: ت ث د ذ ر ز س ش ص ض ط ظ ل ن\n→ AL-nya lebur: الشَّمْسُ (bukan alsy-syams)\n\nHuruf qamariah: ا ب ج ح خ ع غ ف ق ك م هـ و ي\n→ AL-nya jelas terbaca: الْقَمَرُ",
      examples: [
        { ar: "كِتَابٌ", translation: "Sebuah buku", type: "nakirah" },
        { ar: "الْكِتَابُ", translation: "Buku itu", type: "marifah" },
        { ar: "شَايٌ", translation: "Segelas teh (tidak spesifik)", type: "nakirah" },
        { ar: "الشَّايُ", translation: "Teh itu (spesifik/syamsiah)", type: "marifah" },
        { ar: "وَلَدٌ", translation: "Seorang anak laki-laki", type: "nakirah" },
        { ar: "الْوَلَدُ", translation: "Anak laki-laki itu (qamariah)", type: "marifah" },
        { ar: "رَجُلٌ أَمَامَ بَابٍ", translation: "Seorang pria di depan sebuah pintu", type: "nakirah" },
        { ar: "الرَّجُلُ أَمَامَ الْبَابِ", translation: "Pria itu di depan pintu itu", type: "marifah" }
      ],
      commonErrors: [
        {
          error: "Menggabungkan AL dan Tanwin bersamaan (الْكِتَابٌ).",
          correction: "Pilih salah satu: الْكِتَابُ (Ma'rifah) atau كِتَابٌ (Nakirah)."
        },
        {
          error: "Membaca huruf syamsiah dengan 'L' yang jelas (Al-Syams).",
          correction: "Huruf 'L' dilebur ke huruf setelahnya (Asy-Syams)."
        },
        {
          error: "Tidak menyesuaikan sifat (Na'at) dengan mausufnya.",
          correction: "Jika kata bendanya Ma'rifah, sifatnya harus Ma'rifah (الطَّعَامُ اللَّذِيذُ). Jika Nakirah, sifatnya juga Nakirah (طَعَامٌ لَذِيذٌ)."
        }
      ]
    },
    dialog: {
      context: "Makan malam bersama keluarga Arab, membahas menu dan etika makan Islam.",
      characters: [
        { id: "A", name: "Ahmed", avatar: "👨", role: "Tuan Rumah" },
        { id: "B", name: "Budi", avatar: "👤", role: "Tamu" }
      ],
      lines: [
        { characterId: "A", ar: "أَهْلًا وَسَهْلًا، تَفَضَّلْ إِلَى الْمَائِدَةِ.", translation: "Selamat datang, silakan ke meja makan." },
        { characterId: "B", ar: "شُكْرًا، مَاشَاءَ اللهُ! هَذَا طَعَامٌ كَثِيرٌ.", translation: "Terima kasih, Masya Allah! Ini makanan yang banyak." },
        { characterId: "A", ar: "الْيَوْمَ عِنْدَنَا أَرُزٌّ وَلَحْمٌ وَدَجَاجٌ مَشْوِيٌّ.", translation: "Hari ini kita punya nasi, daging, dan ayam bakar." },
        { characterId: "B", ar: "أَنَا أُحِبُّ الدَّجَاجَ جِدًّا. الرَّائِحَةُ لَذِيذَةٌ.", translation: "Saya sangat suka ayam. Aromanya lezat." },
        { characterId: "A", ar: "بِسْمِ اللهِ، نَبْدَأُ الْأَكْلَ.", translation: "Bismillah, mari kita mulai makan." },
        { characterId: "B", ar: "بِسْمِ اللهِ. الدَّجَاجُ حَارٌّ قَلِيلًا، لَكِنْ لَذِيذٌ.", translation: "Bismillah. Ayam ini sedikit pedas, tapi lezat." },
        { characterId: "A", ar: "هَلْ تُرِيدُ مَاءً أَمْ عَصِيرًا بَارِدًا؟", translation: "Apakah kamu mau air atau jus dingin?" },
        { characterId: "B", ar: "كُوبَ مَاءٍ مِنْ فَضْلِكَ.", translation: "Segelas air tolong." },
        { characterId: "A", ar: "تَفَضَّلِ الْمَاءَ. هَلْ تُرِيدُ الْمَزِيدَ مِنَ الْأَرُزِّ؟", translation: "Silakan airnya. Apakah kamu mau tambah nasi?" },
        { characterId: "B", ar: "لَا، شُكْرًا. أَنَا شَبِعْتُ، الْحَمْدُ لِلهِ.", translation: "Tidak, terima kasih. Saya sudah kenyang, Alhamdulillah." },
        { characterId: "A", ar: "بَعْدَ قَلِيلٍ نَشْرَبُ الشَّايَ الْحُلْوَ مَعًا.", translation: "Sebentar lagi kita minum teh manis bersama." },
        { characterId: "B", ar: "فِكْرَةٌ مُمْتَازَةٌ. جَزَاكَ اللهُ خَيْرًا عَلَى الضِّيَافَةِ.", translation: "Ide yang sangat bagus. Semoga Allah membalasmu kebaikan atas jamuan ini." }
      ]
    },
    quiz: [
      {
        id: "q_l1_6_1", type: "multiple-choice",
        question: "Apa arti dari 'طَعَامٌ'?",
        options: ["Makanan", "Minuman", "Roti", "Nasi"],
        correctAnswer: "Makanan",
        explanation: "'طَعَامٌ' berarti makanan secara umum."
      },
      {
        id: "q_l1_6_2", type: "multiple-choice",
        question: "Bentuk ma'rifah (definit) dari 'خُبْزٌ' adalah?",
        options: ["الْخُبْزُ", "الْخُبْزٌ", "خُبْزُ", "أَخْبَازٌ"],
        correctAnswer: "الْخُبْزُ",
        explanation: "Tambahkan AL di awal dan buang tanwin di akhir."
      },
      {
        id: "q_l1_6_3", type: "multiple-choice",
        question: "Apa arti 'لَحْمٌ'?",
        options: ["Daging", "Ikan", "Ayam", "Telur"],
        correctAnswer: "Daging",
        explanation: "'لَحْمٌ' berarti daging."
      },
      {
        id: "q_l1_6_4", type: "multiple-choice",
        question: "Manakah kata yang berarti 'Ikan'?",
        options: ["سَمَكٌ", "دَجَاجٌ", "لَحْمٌ", "خُبْزٌ"],
        correctAnswer: "سَمَكٌ",
        explanation: "'سَمَكٌ' berarti ikan."
      },
      {
        id: "q_l1_6_5", type: "multiple-choice",
        question: "Apa arti dari kalimat 'هَلْ تُحِبُّ الدَّجَاجَ؟'?",
        options: ["Apakah kamu suka ayam?", "Apakah kamu makan ayam?", "Apakah kamu suka daging?", "Apakah ayam itu enak?"],
        correctAnswer: "Apakah kamu suka ayam?",
        explanation: "'هَلْ' (apakah) + 'تُحِبُّ' (kamu suka) + 'الدَّجَاجَ' (ayam)."
      },
      {
        id: "q_l1_6_6", type: "multiple-choice",
        question: "Kata bahasa Arab untuk 'Telur' adalah?",
        options: ["بَيْضٌ", "أَرُزٌّ", "فَاكِهَةٌ", "خُضْرَةٌ"],
        correctAnswer: "بَيْضٌ",
        explanation: "'بَيْضٌ' berarti telur."
      },
      {
        id: "q_l1_6_7", type: "multiple-choice",
        question: "Manakah kalimat yang menggunakan isim Nakirah?",
        options: ["عِنْدِي طَعَامٌ", "أَكَلْتُ الطَّعَامَ", "هَذَا هُوَ الطَّعَامُ", "الطَّعَامُ لَذِيذٌ"],
        correctAnswer: "عِنْدِي طَعَامٌ",
        explanation: "'طَعَامٌ' tidak menggunakan AL dan berakhiran tanwin, sehingga ia adalah Nakirah."
      },
      {
        id: "q_l1_6_8", type: "multiple-choice",
        question: "Apa arti 'مَاءٌ'?",
        options: ["Air", "Teh", "Kopi", "Susu"],
        correctAnswer: "Air",
        explanation: "'مَاءٌ' berarti air."
      },
      {
        id: "q_l1_6_9", type: "multiple-choice",
        question: "Kata untuk 'Jus' dalam bahasa Arab adalah?",
        options: ["عَصِيرٌ", "لَبَنٌ", "شَايٌ", "قَهْوَةٌ"],
        correctAnswer: "عَصِيرٌ",
        explanation: "'عَصِيرٌ' berarti jus."
      },
      {
        id: "q_l1_6_10", type: "multiple-choice",
        question: "Apa arti dari kalimat 'الْقَهْوَةُ مُرَّةٌ'?",
        options: ["Kopi itu pahit", "Kopi itu manis", "Kopi itu panas", "Kopi itu enak"],
        correctAnswer: "Kopi itu pahit",
        explanation: "'مُرَّةٌ' berarti pahit, sifat untuk 'الْقَهْوَةُ' yang muannats."
      },
      {
        id: "q_l1_6_11", type: "multiple-choice",
        question: "Di mana kita makan makanan (Restoran) dalam bahasa Arab?",
        options: ["مَطْعَمٌ", "مَائِدَةٌ", "مَكْتَبٌ", "مَلْعَبٌ"],
        correctAnswer: "مَطْعَمٌ",
        explanation: "'مَطْعَمٌ' berarti restoran (tempat makan)."
      },
      {
        id: "q_l1_6_12", type: "fill-blank",
        question: "Lengkapi kalimat: الشَّايُ حَارٌّ وَالْعَصِيرُ _____ (dingin).",
        options: ["بَارِدٌ", "حُلْوٌ", "لَذِيذٌ", "مَالِحٌ"],
        correctAnswer: "بَارِدٌ",
        explanation: "'بَارِدٌ' berarti dingin."
      },
      {
        id: "q_l1_6_13", type: "multiple-choice",
        question: "Apa arti kata 'طَبَقٌ'?",
        options: ["Piring", "Gelas", "Sendok", "Meja"],
        correctAnswer: "Piring",
        explanation: "'طَبَقٌ' berarti piring."
      },
      {
        id: "q_l1_6_14", type: "multiple-choice",
        question: "Alat untuk makan berupa 'Sendok' adalah?",
        options: ["مِلْعَقَةٌ", "كُوبٌ", "مَائِدَةٌ", "طَبَقٌ"],
        correctAnswer: "مِلْعَقَةٌ",
        explanation: "'مِلْعَقَةٌ' berarti sendok."
      },
      {
        id: "q_l1_6_15", type: "multiple-choice",
        question: "Jika ingin mengatakan 'Makanan ini lezat', bahasa Arabnya?",
        options: ["هَذَا طَعَامٌ لَذِيذٌ", "هَذَا طَعَامٌ حُلْوٌ", "هَذَا طَعَامٌ حَارٌّ", "هَذَا طَعَامٌ مَالِحٌ"],
        correctAnswer: "هَذَا طَعَامٌ لَذِيذٌ",
        explanation: "'لَذِيذٌ' berarti lezat/enak."
      },
      {
        id: "q_l1_6_16", type: "multiple-choice",
        question: "Apa bahasa Arab untuk 'Manis'?",
        options: ["حُلْوٌ", "مَالِحٌ", "حَارٌّ", "بَارِدٌ"],
        correctAnswer: "حُلْوٌ",
        explanation: "'حُلْوٌ' berarti manis."
      },
      {
        id: "q_l1_6_17", type: "multiple-choice",
        question: "Kata kerja untuk 'Makan' adalah?",
        options: ["أَكَلَ", "شَرِبَ", "طَبَخَ", "اِشْتَرَى"],
        correctAnswer: "أَكَلَ",
        explanation: "'أَكَلَ' berarti memakan."
      },
      {
        id: "q_l1_6_18", type: "multiple-choice",
        question: "Apa arti dari 'شَرِبَ الْمَاءَ'?",
        options: ["Dia telah meminum air", "Dia telah memakan air", "Dia telah memasak air", "Dia telah membeli air"],
        correctAnswer: "Dia telah meminum air",
        explanation: "'شَرِبَ' berarti minum, 'الْمَاءَ' berarti air."
      },
      {
        id: "q_l1_6_19", type: "multiple-choice",
        question: "Huruf 'ش' (Syin) dalam kata 'الشَّايُ' termasuk huruf?",
        options: ["Syamsiah", "Qamariah", "Konsonan", "Vokal"],
        correctAnswer: "Syamsiah",
        explanation: "Huruf Syin adalah huruf Syamsiah, sehingga huruf Lam pada AL melebur dan tidak dibaca."
      },
      {
        id: "q_l1_6_20", type: "multiple-choice",
        question: "Huruf 'م' (Mim) dalam kata 'الْمَاءُ' termasuk huruf?",
        options: ["Qamariah", "Syamsiah", "Konsonan", "Vokal"],
        correctAnswer: "Qamariah",
        explanation: "Huruf Mim adalah huruf Qamariah, sehingga huruf Lam pada AL terbaca jelas."
      },
      {
        id: "q_l1_6_21", type: "fill-blank",
        question: "أُرِيدُ كُوبًا مِنَ _____ (Susu).",
        options: ["الْحَلِيبِ", "الْمَاءِ", "الْعَصِيرِ", "الشَّايِ"],
        correctAnswer: "الْحَلِيبِ",
        explanation: "'الْحَلِيبِ' berarti susu."
      },
      {
        id: "q_l1_6_22", type: "multiple-choice",
        question: "Apa arti dari 'جَاعَ'?",
        options: ["Lapar", "Kenyang", "Haus", "Makan"],
        correctAnswer: "Lapar",
        explanation: "'جَاعَ' berarti lapar."
      },
      {
        id: "q_l1_6_23", type: "multiple-choice",
        question: "Mana susunan yang benar untuk mengatakan 'Buah yang manis' (Sifat-Mausuf)?",
        options: ["فَاكِهَةٌ حُلْوَةٌ", "فَاكِهَةٌ حُلْوٌ", "الْفَاكِهَةُ حُلْوَةٌ", "فَاكِهَةٌ الْحُلْوَةُ"],
        correctAnswer: "فَاكِهَةٌ حُلْوَةٌ",
        explanation: "Keduanya harus sama-sama muannats (berakhiran ta marbuthah) dan sama-sama nakirah (tanpa AL)."
      },
      {
        id: "q_l1_6_24", type: "multiple-choice",
        question: "Kata untuk 'Kopi' dalam bahasa Arab adalah?",
        options: ["قَهْوَةٌ", "شَايٌ", "عَصِيرٌ", "مَاءٌ"],
        correctAnswer: "قَهْوَةٌ",
        explanation: "'قَهْوَةٌ' berarti kopi."
      },
      {
        id: "q_l1_6_25", type: "multiple-choice",
        question: "Apa arti 'مَالِحٌ'?",
        options: ["Asin", "Pedas", "Manis", "Dingin"],
        correctAnswer: "Asin",
        explanation: "'مَالِحٌ' berarti asin."
      },
      {
        id: "q_l1_6_26", type: "multiple-choice",
        question: "Kata untuk 'Meja makan' dalam bahasa Arab adalah?",
        options: ["مَائِدَةٌ", "طَبَقٌ", "مَطْعَمٌ", "كُوبٌ"],
        correctAnswer: "مَائِدَةٌ",
        explanation: "'مَائِدَةٌ' berarti meja makan/hidangan."
      },
      {
        id: "q_l1_6_27", type: "multiple-choice",
        question: "Apa arti kata kerja 'اِشْتَرَى'?",
        options: ["Membeli", "Memasak", "Makan", "Menjual"],
        correctAnswer: "Membeli",
        explanation: "'اِشْتَرَى' berarti membeli."
      },
      {
        id: "q_l1_6_28", type: "multiple-choice",
        question: "Kata untuk 'Sayuran' dalam bahasa Arab adalah?",
        options: ["خُضْرَةٌ", "فَاكِهَةٌ", "دَجَاجٌ", "أَرُزٌّ"],
        correctAnswer: "خُضْرَةٌ",
        explanation: "'خُضْرَةٌ' berarti sayuran."
      },
      {
        id: "q_l1_6_29", type: "multiple-choice",
        question: "Manakah kata benda Ma'rifah (definit)?",
        options: ["الطَّعَامُ", "طَعَامٌ", "طَبَقٌ", "مَطْعَمٌ"],
        correctAnswer: "الطَّعَامُ",
        explanation: "'الطَّعَامُ' memiliki 'AL' di awalnya, sehingga ia adalah kata benda Ma'rifah."
      },
      {
        id: "q_l1_6_30", type: "multiple-choice",
        question: "Apa bahasa Arab untuk 'Panas/Pedas'?",
        options: ["حَارٌّ", "بَارِدٌ", "لَذِيذٌ", "حُلْوٌ"],
        correctAnswer: "حَارٌّ",
        explanation: "'حَارٌّ' berarti panas (suhu) atau pedas (rasa)."
      }
    ]
  }
};
