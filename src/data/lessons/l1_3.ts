import { Lesson } from "../../types";

export const l1_3: Lesson = {
  id: "l1_3",
  title: "Bab 3: Al-Usrah (Keluarga)",
  titleAr: "الْأُسْرَةُ",
  description: "Mengenal anggota keluarga, hubungan kekerabatan, dan konsep kepemilikan (Idhafah) dalam Bahasa Arab.",
  xpReward: 1200,
  isCompleted: false,
  isLocked: false,
  type: "comprehensive",
  content: {
    introduction: "Membangun ikatan dan silsilah (الْأُسْرَةُ) adalah fondasi terkuat dalam masyarakat Arab. Di Bab 3 ini, Anda tidak sekadar menghafal nama-nama kerabat, melainkan sedang menyelami struktur sosial dan emosional yang membentuk inti peradaban. Banyak yang mengira merangkai kata kepemilikan itu rumit, padahal bahasa Arab menawarkannya dengan cara yang jauh lebih mudah dan ringkas dibandingkan bahasa lain.\n\nLebih dari sekadar kosakata, bab ini akan menyingkap salah satu rahasia arsitektur bahasa Arab yang paling elegan dan praktis: Idhafah (Frasa Kepemilikan). Ini adalah seni menyatukan dua entitas menjadi satu kesatuan makna yang utuh dan presisi, tanpa memerlukan kata penghubung tambahan yang bertele-tele. Menguasai Idhafah berarti Anda mulai berpikir efisien layaknya penutur asli, dan Anda akan menyadari betapa mudahnya aturan ini diaplikasikan. Bersiaplah merangkai struktur kata yang memukau dengan sangat gampang, karena setiap anggota keluarga yang Anda kenal kini akan terikat oleh kaidah tata bahasa yang sekuat ikatan darah itu sendiri.",
    introTitle: "Pilar Ikatan: Keluarga dan Seni Kepemilikan (Idhafah)",
    introVerse: {
      ar: "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً",
      translation: "Hai sekalian manusia, bertakwalah kepada Tuhan-mu yang telah menciptakan kamu dari seorang diri, dan dari padanya Allah menciptakan isterinya... (QS. An-Nisa: 1)"
    },
    introBadges: [
      { icon: "👨‍👩‍👧‍👦", text: "KOSAKATA KELUARGA (Mengenal nama-nama kerabat)" },
      { icon: "🔗", text: "IDHAFAH (Menguasai frasa kepemilikan)" }
    ],
    totalSentencesDisplay: "300 Kalimat Progresif",
    tips: [
      {
        title: "Rumus Kepemilikan (Idhafah)",
        content: "Gabungkan dua kata benda untuk menunjukkan kepemilikan. Kata kedua HARUS berharakat Kasrah (Majrur). Contoh: Baitun (rumah) + Aliyyun -> Baitu Aliyin (Rumah Ali)."
      },
      {
        title: "Tanwin yang Dilarang",
        content: "Kata pertama dalam hubungan kepemilikan (Mudhaf) dilarang keras menggunakan 'AL' dan dilarang menggunakan 'Tanwin'. Dia harus tampil ringkas!"
      },
      {
        title: "Panggilan Akrab 'Ya'",
        content: "Saat Anda memanggil seseorang dengan 'Ya' (Wahai), tanwin pada namanya akan hilang. Contoh: Muhammadun menjadi 'Ya Muhammadu!' (Wahai Muhammad)."
      }
    ],
    cards: [
      {
        id: "l1_3_c1",
        wordAr: "أَبٌ",
        translation: "Ayah",
        category: "Keluarga Inti",
        description: "Orang tua laki-laki.",
        logicBox: "Kata benda mudzakkar. Bentuk idhafah dengan dhamir 'ya' (ayahku) menjadi أَبِي. Perhatikan bahwa kata ini termasuk Asma'ul Khamsah jika disandarkan pada selain dhamir 'ya', contoh: أَبُوكَ (ayahmu).",
        examples: [
          { ar: "هَذَا أَبِي", translation: "Ini ayahku", grammarNote: "Mubtada + Khabar (idhafah dengan dhamir).", analysis: "Mubtada + Khabar (idhafah dengan dhamir)." },
          { ar: "أَبِي طَبِيبٌ", translation: "Ayahku seorang dokter", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "أَيْنَ أَبُوكَ؟", translation: "Di mana ayahmu? (L)", grammarNote: "Tanya + Mubtada (Asma'ul Khamsah marfu' bil waw).", analysis: "Tanya + Mubtada (Asma'ul Khamsah marfu' bil waw)." },
          { ar: "أَبُوهُ مُهَنْدِسٌ", translation: "Ayahnya adalah insinyur", grammarNote: "Mubtada (Asma'ul Khamsah) + Khabar.", analysis: "Mubtada (Asma'ul Khamsah) + Khabar." },
          { ar: "ذَهَبْتُ إِلَى الْأَبِ", translation: "Aku pergi kepada ayah", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah (majrur).", analysis: "Fi'il-Fa'il + Syibhul Jumlah (majrur)." },
          { ar: "رَأَيْتُ أَبَاكَ", translation: "Aku melihat ayahmu", grammarNote: "Fi'il-Fa'il + Maf'ul bih (Asma'ul Khamsah manshub bil alif).", analysis: "Fi'il-Fa'il + Maf'ul bih (Asma'ul Khamsah manshub bil alif)." },
          { ar: "سَلَّمْتُ عَلَى أَبِيكَ", translation: "Aku memberi salam pada ayahmu", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah (Asma'ul Khamsah majrur bil ya).", analysis: "Fi'il-Fa'il + Syibhul Jumlah (Asma'ul Khamsah majrur bil ya)." },
          { ar: "هَلْ أَبُوكِ مُعَلِّمٌ؟", translation: "Apakah ayahmu (P) seorang guru?", grammarNote: "Tanya + Mubtada + Khabar.", analysis: "Tanya + Mubtada + Khabar." },
          { ar: "أَبُونَا فِي الْمَسْجِدِ", translation: "Ayah kami ada di masjid", grammarNote: "Mubtada (Asma'ul Khamsah) + Syibhul Jumlah.", analysis: "Mubtada (Asma'ul Khamsah) + Syibhul Jumlah." },
          { ar: "أَبُوهَا رَجُلٌ صَالِحٌ", translation: "Ayahnya (P) adalah pria yang saleh", grammarNote: "Mubtada + Khabar + Sifat.", analysis: "Mubtada + Khabar + Sifat." }
        ]
      },
      {
        id: "l1_3_c2",
        wordAr: "أُمٌّ",
        translation: "Ibu",
        category: "Keluarga Inti",
        description: "Orang tua perempuan.",
        logicBox: "Kata benda muannats maknawi (meski tanpa ta marbuthah). Bentuk idhafah 'ibuku' adalah أُمِّي.",
        examples: [
          { ar: "هَذِهِ أُمِّي", translation: "Ini ibuku", grammarNote: "Mubtada muannats + Khabar (idhafah).", analysis: "Mubtada muannats + Khabar (idhafah)." },
          { ar: "أُمِّي مُعَلِّمَةٌ", translation: "Ibuku seorang guru", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "أَيْنَ أُمُّكَ؟", translation: "Di mana ibumu?", grammarNote: "Tanya + Mubtada (idhafah).", analysis: "Tanya + Mubtada (idhafah)." },
          { ar: "أُمُّهُ طَبِيبَةٌ", translation: "Ibunya adalah dokter (P)", grammarNote: "Mubtada + Khabar muannats.", analysis: "Mubtada + Khabar muannats." },
          { ar: "الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ", translation: "Surga di bawah telapak kaki para ibu", grammarNote: "Mubtada + Syibhul Jumlah (zharaf + mudhaf ilayh).", analysis: "Mubtada + Syibhul Jumlah (zharaf + mudhaf ilayh)." },
          { ar: "أُحِبُّ أُمِّي كَثِيرًا", translation: "Aku sangat mencintai ibuku", grammarNote: "Fi'il-Fa'il + Maf'ul bih (idhafah) + Keterangan.", analysis: "Fi'il-Fa'il + Maf'ul bih (idhafah) + Keterangan." },
          { ar: "ذَهَبَتِ الْأُمُّ إِلَى السُّوقِ", translation: "Ibu itu telah pergi ke pasar", grammarNote: "Fi'il muannats + Fa'il + Syibhul Jumlah.", analysis: "Fi'il muannats + Fa'il + Syibhul Jumlah." },
          { ar: "أُمُّنَا فِي الْبَيْتِ", translation: "Ibu kami ada di rumah", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah.", analysis: "Mubtada (idhafah) + Syibhul Jumlah." },
          { ar: "هَلْ أُمُّكِ مَرِيضَةٌ؟", translation: "Apakah ibumu (P) sakit?", grammarNote: "Tanya + Mubtada (idhafah) + Khabar muannats.", analysis: "Tanya + Mubtada (idhafah) + Khabar muannats." },
          { ar: "سَاعَدْتُ أُمِّي فِي الْمَطْبَخِ", translation: "Aku membantu ibuku di dapur", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_3_c3",
        wordAr: "أَخٌ",
        translation: "Saudara Laki-laki",
        category: "Keluarga Inti",
        description: "Saudara kandung atau saudara laki-laki.",
        logicBox: "Kata benda mudzakkar. Termasuk Asma'ul Khamsah jika di-idhafah-kan, misal أَخُوكَ (saudaramu).",
        examples: [
          { ar: "هَذَا أَخِي", translation: "Ini saudara laki-lakiku", grammarNote: "Mubtada + Khabar (idhafah).", analysis: "Mubtada + Khabar (idhafah)." },
          { ar: "أَخِي طَالِبٌ", translation: "Saudaraku seorang siswa", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "أَيْنَ أَخُوكَ؟", translation: "Di mana saudaramu? (L)", grammarNote: "Tanya + Mubtada (Asma'ul Khamsah marfu' bil waw).", analysis: "Tanya + Mubtada (Asma'ul Khamsah marfu' bil waw)." },
          { ar: "أَخُوهُ كَبِيرٌ", translation: "Saudaranya besar/tua", grammarNote: "Mubtada (Asma'ul Khamsah) + Khabar.", analysis: "Mubtada (Asma'ul Khamsah) + Khabar." },
          { ar: "رَأَيْتُ أَخَاكَ", translation: "Aku melihat saudaramu", grammarNote: "Fi'il-Fa'il + Maf'ul bih (Asma'ul Khamsah manshub bil alif).", analysis: "Fi'il-Fa'il + Maf'ul bih (Asma'ul Khamsah manshub bil alif)." },
          { ar: "مَرَرْتُ بِأَخِيكَ", translation: "Aku berpapasan dengan saudaramu", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah (Asma'ul Khamsah majrur bil ya).", analysis: "Fi'il-Fa'il + Syibhul Jumlah (Asma'ul Khamsah majrur bil ya)." },
          { ar: "أَخُوهَا مُوَظَّفٌ", translation: "Saudaranya (P) adalah pegawai", grammarNote: "Mubtada (Asma'ul Khamsah) + Khabar.", analysis: "Mubtada (Asma'ul Khamsah) + Khabar." },
          { ar: "لِي أَخٌ وَاحِدٌ", translation: "Aku punya satu saudara laki-laki", grammarNote: "Khabar muqaddam + Mubtada muakhkhar + Sifat.", analysis: "Khabar muqaddam + Mubtada muakhkhar + Sifat." },
          { ar: "أَخُونَا طَبِيبٌ", translation: "Saudara kami adalah dokter", grammarNote: "Mubtada (Asma'ul Khamsah) + Khabar.", analysis: "Mubtada (Asma'ul Khamsah) + Khabar." },
          { ar: "هَلْ أَخُوكِ هُنَا؟", translation: "Apakah saudaramu (P) ada di sini?", grammarNote: "Tanya + Mubtada + Keterangan tempat.", analysis: "Tanya + Mubtada + Keterangan tempat." }
        ]
      },
      {
        id: "l1_3_c4",
        wordAr: "أُخْتٌ",
        translation: "Saudara Perempuan",
        category: "Keluarga Inti",
        description: "Saudara kandung atau saudari.",
        logicBox: "Kata benda muannats. Jamaknya adalah أَخَوَاتٌ.",
        examples: [
          { ar: "هَذِهِ أُخْتِي", translation: "Ini saudariku", grammarNote: "Mubtada muannats + Khabar (idhafah).", analysis: "Mubtada muannats + Khabar (idhafah)." },
          { ar: "أُخْتِي طَالِبَةٌ", translation: "Saudariku seorang siswi", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "أَيْنَ أُخْتُكَ؟", translation: "Di mana saudarimu?", grammarNote: "Tanya + Mubtada (idhafah).", analysis: "Tanya + Mubtada (idhafah)." },
          { ar: "أُخْتُهُ صَغِيرَةٌ", translation: "Saudarinya masih kecil", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "رَأَيْتُ أُخْتَكَ", translation: "Aku melihat saudarimu", grammarNote: "Fi'il-Fa'il + Maf'ul bih (manshub bil fathah).", analysis: "Fi'il-Fa'il + Maf'ul bih (manshub bil fathah)." },
          { ar: "سَلَّمْتُ عَلَى أُخْتِكَ", translation: "Aku memberi salam pada saudarimu", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Syibhul Jumlah." },
          { ar: "أُخْتُهَا مُهَنْدِسَةٌ", translation: "Saudarinya (P) adalah insinyur", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "لِي أُخْتٌ وَاحِدَةٌ", translation: "Aku punya satu saudari", grammarNote: "Khabar muqaddam + Mubtada muakhkhar + Sifat muannats.", analysis: "Khabar muqaddam + Mubtada muakhkhar + Sifat muannats." },
          { ar: "أُخْتُنَا فِي الْمَدْرَسَةِ", translation: "Saudari kami ada di sekolah", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah.", analysis: "Mubtada (idhafah) + Syibhul Jumlah." },
          { ar: "هَلْ أُخْتُكِ مَرِيضَةٌ؟", translation: "Apakah saudarimu (P) sakit?", grammarNote: "Tanya + Mubtada + Khabar muannats.", analysis: "Tanya + Mubtada + Khabar muannats." }
        ]
      },
      {
        id: "l1_3_c5",
        wordAr: "اِبْنٌ",
        translation: "Anak Laki-laki",
        category: "Keluarga Inti",
        description: "Anak kandung laki-laki.",
        logicBox: "Kata benda mudzakkar. Hamzah pada kata ini adalah hamzah washal (tidak dibaca jika di tengah kalimat).",
        examples: [
          { ar: "هَذَا اِبْنِي", translation: "Ini anak laki-lakiku", grammarNote: "Mubtada + Khabar (idhafah).", analysis: "Mubtada + Khabar (idhafah)." },
          { ar: "اِبْنِي طَالِبٌ", translation: "Anak laki-lakiku seorang pelajar", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "كَمْ اِبْنًا لَكَ؟", translation: "Berapa anak laki-laki yang kamu punya?", grammarNote: "Tanya 'Kam' + Tamyiz manshub + Syibhul Jumlah.", analysis: "Tanya 'Kam' + Tamyiz manshub + Syibhul Jumlah." },
          { ar: "اِبْنُهُ ذَكِيٌّ", translation: "Anaknya (L) cerdas", grammarNote: "Mubtada (idhafah) + Khabar.", analysis: "Mubtada (idhafah) + Khabar." },
          { ar: "اِبْنُهَا فِي الْجَامِعَةِ", translation: "Anaknya (P) di universitas", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah.", analysis: "Mubtada (idhafah) + Syibhul Jumlah." },
          { ar: "رَأَيْتُ اِبْنَ الْمُعَلِّمِ", translation: "Aku melihat anak guru itu", grammarNote: "Fi'il-Fa'il + Maf'ul bih (mudhaf) + Mudhaf ilayh.", analysis: "Fi'il-Fa'il + Maf'ul bih (mudhaf) + Mudhaf ilayh." },
          { ar: "لَعِبْتُ مَعَ اِبْنِكَ", translation: "Aku bermain dengan anakmu", grammarNote: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh.", analysis: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh." },
          { ar: "اِبْنُ أَخِي جَمِيلٌ", translation: "Anak laki-laki saudaraku tampan", grammarNote: "Mubtada (idhafah) + Mudhaf ilayh (idhafah) + Khabar.", analysis: "Mubtada (idhafah) + Mudhaf ilayh (idhafah) + Khabar." },
          { ar: "هَذَا اِبْنُ عَمِّي", translation: "Ini anak pamanku", grammarNote: "Mubtada + Khabar (idhafah bersusun).", analysis: "Mubtada + Khabar (idhafah bersusun)." },
          { ar: "اِبْنُنَا يَدْرُسُ فِي الْخَارِجِ", translation: "Anak kami belajar di luar negeri", grammarNote: "Mubtada (idhafah) + Khabar kalimat fi'liyyah.", analysis: "Mubtada (idhafah) + Khabar kalimat fi'liyyah." }
        ]
      },
      {
        id: "l1_3_c6",
        wordAr: "بِنْتٌ",
        translation: "Anak Perempuan / Gadis",
        category: "Keluarga Inti",
        description: "Anak kandung perempuan.",
        logicBox: "Kata benda muannats. Jamaknya adalah بَنَاتٌ.",
        examples: [
          { ar: "هَذِهِ بِنْتِي", translation: "Ini anak perempuanku", grammarNote: "Mubtada muannats + Khabar (idhafah).", analysis: "Mubtada muannats + Khabar (idhafah)." },
          { ar: "بِنْتِي طَالِبَةٌ", translation: "Anak perempuanku seorang siswi", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "كَمْ بِنْتًا لَكَ؟", translation: "Berapa anak perempuan yang kamu punya?", grammarNote: "Tanya 'Kam' + Tamyiz manshub + Syibhul Jumlah.", analysis: "Tanya 'Kam' + Tamyiz manshub + Syibhul Jumlah." },
          { ar: "بِنْتُهُ صَغِيرَةٌ", translation: "Anak perempuannya masih kecil", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "بِنْتُهَا جَمِيلَةٌ", translation: "Anak perempuannya (P) cantik", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "رَأَيْتُ بِنْتَ الْمُدِيرِ", translation: "Aku melihat anak direktur", grammarNote: "Fi'il-Fa'il + Maf'ul bih (mudhaf) + Mudhaf ilayh.", analysis: "Fi'il-Fa'il + Maf'ul bih (mudhaf) + Mudhaf ilayh." },
          { ar: "سَلَّمْتُ عَلَى بِنْتِكَ", translation: "Aku memberi salam pada anak perempuanmu", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Syibhul Jumlah." },
          { ar: "هَذِهِ الْبِنْتُ نَشِيطَةٌ", translation: "Anak perempuan ini aktif", grammarNote: "Mubtada + Badal + Khabar muannats.", analysis: "Mubtada + Badal + Khabar muannats." },
          { ar: "بِنْتُ أَخِي مَرِيضَةٌ", translation: "Anak perempuan saudaraku sakit", grammarNote: "Mubtada (idhafah bersusun) + Khabar muannats.", analysis: "Mubtada (idhafah bersusun) + Khabar muannats." },
          { ar: "بِنْتُنَا فِي الْمَدْرَسَةِ", translation: "Anak perempuan kami ada di sekolah", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah.", analysis: "Mubtada (idhafah) + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_3_c7",
        wordAr: "زَوْجٌ",
        translation: "Suami",
        category: "Keluarga Inti",
        description: "Pasangan hidup laki-laki.",
        logicBox: "Kata benda mudzakkar.",
        examples: [
          { ar: "هَذَا زَوْجِي", translation: "Ini suamiku", grammarNote: "Mubtada + Khabar (idhafah).", analysis: "Mubtada + Khabar (idhafah)." },
          { ar: "زَوْجِي مُهَنْدِسٌ", translation: "Suamiku seorang insinyur", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "أَيْنَ زَوْجُكِ؟", translation: "Di mana suamimu? (P)", grammarNote: "Tanya + Mubtada (idhafah).", analysis: "Tanya + Mubtada (idhafah)." },
          { ar: "زَوْجُهَا رَجُلٌ صَالِحٌ", translation: "Suaminya adalah pria yang saleh", grammarNote: "Mubtada (idhafah) + Khabar + Sifat.", analysis: "Mubtada (idhafah) + Khabar + Sifat." },
          { ar: "رَأَيْتُ زَوْجَكِ", translation: "Aku melihat suamimu (P)", grammarNote: "Fi'il-Fa'il + Maf'ul bih (idhafah).", analysis: "Fi'il-Fa'il + Maf'ul bih (idhafah)." },
          { ar: "سَلَّمْتُ عَلَى زَوْجِهَا", translation: "Aku memberi salam pada suaminya", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah (idhafah).", analysis: "Fi'il-Fa'il + Syibhul Jumlah (idhafah)." },
          { ar: "هَلْ هَذَا زَوْجُ الْمُعَلِّمَةِ؟", translation: "Apakah ini suami guru perempuan itu?", grammarNote: "Tanya + Mubtada + Khabar (mudhaf) + Mudhaf ilayh.", analysis: "Tanya + Mubtada + Khabar (mudhaf) + Mudhaf ilayh." },
          { ar: "زَوْجُ أُخْتِي طَبِيبٌ", translation: "Suami saudariku adalah dokter", grammarNote: "Mubtada (idhafah bersusun) + Khabar.", analysis: "Mubtada (idhafah bersusun) + Khabar." },
          { ar: "الزَّوْجُ الصَّالِحُ نِعْمَةٌ", translation: "Suami yang saleh adalah nikmat", grammarNote: "Mubtada + Sifat + Khabar muannats (karena ni'mah).", analysis: "Mubtada + Sifat + Khabar muannats (karena ni'mah)." },
          { ar: "خَرَجَ الزَّوْجُ مِنَ الْبَيْتِ", translation: "Suami itu keluar dari rumah", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_3_c8",
        wordAr: "زَوْجَةٌ",
        translation: "Istri",
        category: "Keluarga Inti",
        description: "Pasangan hidup perempuan.",
        logicBox: "Bentuk muannats dari زَوْجٌ, diakhiri dengan ta marbuthah.",
        examples: [
          { ar: "هَذِهِ زَوْجَتِي", translation: "Ini istriku", grammarNote: "Mubtada muannats + Khabar (idhafah).", analysis: "Mubtada muannats + Khabar (idhafah)." },
          { ar: "زَوْجَتِي مُعَلِّمَةٌ", translation: "Istriku seorang guru", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "أَيْنَ زَوْجَتُكَ؟", translation: "Di mana istrimu?", grammarNote: "Tanya + Mubtada (idhafah).", analysis: "Tanya + Mubtada (idhafah)." },
          { ar: "زَوْجَتُهُ طَبِيبَةٌ", translation: "Istrinya adalah dokter (P)", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "رَأَيْتُ زَوْجَتَكَ", translation: "Aku melihat istrimu", grammarNote: "Fi'il-Fa'il + Maf'ul bih (idhafah).", analysis: "Fi'il-Fa'il + Maf'ul bih (idhafah)." },
          { ar: "سَلَّمْتُ عَلَى زَوْجَتِهِ", translation: "Aku memberi salam pada istrinya", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah (idhafah).", analysis: "Fi'il-Fa'il + Syibhul Jumlah (idhafah)." },
          { ar: "هَلْ هَذِهِ زَوْجَةُ الْمُدِيرِ؟", translation: "Apakah ini istri direktur?", grammarNote: "Tanya + Mubtada + Khabar (mudhaf) + Mudhaf ilayh.", analysis: "Tanya + Mubtada + Khabar (mudhaf) + Mudhaf ilayh." },
          { ar: "زَوْجَةُ أَخِي جَمِيلَةٌ", translation: "Istri saudaraku cantik", grammarNote: "Mubtada (idhafah bersusun) + Khabar muannats.", analysis: "Mubtada (idhafah bersusun) + Khabar muannats." },
          { ar: "الزَّوْجَةُ الصَّالِحَةُ نِعْمَةٌ", translation: "Istri yang saleha adalah nikmat", grammarNote: "Mubtada + Sifat muannats + Khabar muannats.", analysis: "Mubtada + Sifat muannats + Khabar muannats." },
          { ar: "طَبَخَتِ الزَّوْجَةُ الطَّعَامَ", translation: "Istri itu memasak makanan", grammarNote: "Fi'il muannats + Fa'il + Maf'ul bih.", analysis: "Fi'il muannats + Fa'il + Maf'ul bih." }
        ]
      },
      {
        id: "l1_3_c9",
        wordAr: "أُسْرَةٌ",
        translation: "Keluarga",
        category: "Keluarga Inti",
        description: "Unit terkecil dari masyarakat, keluarga.",
        logicBox: "Kata benda muannats karena berakhiran ta marbuthah.",
        examples: [
          { ar: "هَذِهِ أُسْرَتِي", translation: "Ini keluargaku", grammarNote: "Mubtada muannats + Khabar (idhafah).", analysis: "Mubtada muannats + Khabar (idhafah)." },
          { ar: "أُسْرَتِي كَبِيرَةٌ", translation: "Keluargaku besar", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "أَيْنَ أُسْرَتُكَ؟", translation: "Di mana keluargamu?", grammarNote: "Tanya + Mubtada (idhafah).", analysis: "Tanya + Mubtada (idhafah)." },
          { ar: "أُسْرَتُهُ صَغِيرَةٌ", translation: "Keluarganya kecil", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "أُسْرَتُهَا سَعِيدَةٌ", translation: "Keluarganya (P) bahagia", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "أُحِبُّ أُسْرَتِي", translation: "Aku mencintai keluargaku", grammarNote: "Fi'il-Fa'il + Maf'ul bih (idhafah).", analysis: "Fi'il-Fa'il + Maf'ul bih (idhafah)." },
          { ar: "هَذِهِ صُورَةُ أُسْرَتِي", translation: "Ini foto keluargaku", grammarNote: "Mubtada + Khabar (mudhaf) + Mudhaf ilayh (idhafah).", analysis: "Mubtada + Khabar (mudhaf) + Mudhaf ilayh (idhafah)." },
          { ar: "الْأُسْرَةُ مُهِمَّةٌ جِدًّا", translation: "Keluarga itu sangat penting", grammarNote: "Mubtada + Khabar muannats + Keterangan.", analysis: "Mubtada + Khabar muannats + Keterangan." },
          { ar: "أُسْرَةُ أَحْمَدَ غَنِيَّةٌ", translation: "Keluarga Ahmad kaya", grammarNote: "Mubtada (mudhaf) + Mudhaf ilayh (ghairu munsharif) + Khabar muannats.", analysis: "Mubtada (mudhaf) + Mudhaf ilayh (ghairu munsharif) + Khabar muannats." },
          { ar: "أَعِيشُ مَعَ أُسْرَتِي", translation: "Aku hidup bersama keluargaku", grammarNote: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh (idhafah).", analysis: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh (idhafah)." }
        ]
      },
      {
        id: "l1_3_c10",
        wordAr: "بَيْتٌ",
        translation: "Rumah/Keluarga",
        category: "Keluarga Inti",
        description: "Tempat tinggal keluarga atau kiasan untuk anggota rumah.",
        logicBox: "Kata benda mudzakkar.",
        examples: [
          { ar: "هَذَا بَيْتِي", translation: "Ini rumahku", grammarNote: "Mubtada + Khabar (idhafah).", analysis: "Mubtada + Khabar (idhafah)." },
          { ar: "بَيْتِي كَبِيرٌ", translation: "Rumahku besar", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "أَيْنَ بَيْتُكَ؟", translation: "Di mana rumahmu?", grammarNote: "Tanya + Mubtada (idhafah).", analysis: "Tanya + Mubtada (idhafah)." },
          { ar: "بَيْتُهُ بَعِيدٌ", translation: "Rumahnya jauh", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "بَيْتُهَا جَمِيلٌ", translation: "Rumahnya (P) indah", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "أَنَا فِي الْبَيْتِ", translation: "Saya di rumah", grammarNote: "Mubtada + Syibhul Jumlah.", analysis: "Mubtada + Syibhul Jumlah." },
          { ar: "رَجَعْتُ إِلَى الْبَيْتِ", translation: "Aku pulang ke rumah", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Syibhul Jumlah." },
          { ar: "هَذَا بَيْتُ خَالِدٍ", translation: "Ini rumah Khalid", grammarNote: "Mubtada + Khabar (mudhaf) + Mudhaf ilayh.", analysis: "Mubtada + Khabar (mudhaf) + Mudhaf ilayh." },
          { ar: "بَيْتُ الْمُعَلِّمِ قَرِيبٌ", translation: "Rumah guru itu dekat", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "اِشْتَرَيْتُ بَيْتًا جَدِيدًا", translation: "Aku membeli rumah baru", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Sifat.", analysis: "Fi'il-Fa'il + Maf'ul bih + Sifat." }
        ]
      }
      ,
      {
        id: "l1_3_c11",
        wordAr: "جَدٌّ",
        translation: "Kakek",
        category: "Keluarga Besar",
        description: "Ayah dari ayah atau ibu.",
        logicBox: "Kata benda mudzakkar.",
        examples: [
          { ar: "هَذَا جَدِّي", translation: "Ini kakekku", grammarNote: "Mubtada + Khabar (idhafah).", analysis: "Mubtada + Khabar (idhafah)." },
          { ar: "جَدِّي كَبِيرٌ", translation: "Kakekku besar/tua", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "أَيْنَ جَدُّكَ؟", translation: "Di mana kakekmu?", grammarNote: "Tanya + Mubtada (idhafah).", analysis: "Tanya + Mubtada (idhafah)." },
          { ar: "جَدُّهُ مَرِيضٌ", translation: "Kakeknya sakit", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "جَدُّهَا فِي الْمُسْتَشْفَى", translation: "Kakeknya (P) di rumah sakit", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah.", analysis: "Mubtada (idhafah) + Syibhul Jumlah." },
          { ar: "زُرْتُ جَدِّي", translation: "Aku mengunjungi kakekku", grammarNote: "Fi'il-Fa'il + Maf'ul bih (idhafah).", analysis: "Fi'il-Fa'il + Maf'ul bih (idhafah)." },
          { ar: "جَلَسْتُ مَعَ جَدِّي", translation: "Aku duduk bersama kakekku", grammarNote: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh (idhafah).", analysis: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh (idhafah)." },
          { ar: "جَدِّي رَجُلٌ حَكِيمٌ", translation: "Kakekku pria yang bijaksana", grammarNote: "Mubtada + Khabar + Sifat mudzakkar.", analysis: "Mubtada + Khabar + Sifat mudzakkar." },
          { ar: "هَلْ جَدُّكَ هُنَا؟", translation: "Apakah kakekmu ada di sini?", grammarNote: "Tanya + Mubtada + Keterangan tempat.", analysis: "Tanya + Mubtada + Keterangan tempat." },
          { ar: "أُحِبُّ جَدِّي كَثِيرًا", translation: "Aku sangat mencintai kakekku", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Keterangan.", analysis: "Fi'il-Fa'il + Maf'ul bih + Keterangan." }
        ]
      },
      {
        id: "l1_3_c12",
        wordAr: "جَدَّةٌ",
        translation: "Nenek",
        category: "Keluarga Besar",
        description: "Ibu dari ayah atau ibu.",
        logicBox: "Bentuk muannats dari جَدٌّ.",
        examples: [
          { ar: "هَذِهِ جَدَّتِي", translation: "Ini nenekku", grammarNote: "Mubtada muannats + Khabar (idhafah).", analysis: "Mubtada muannats + Khabar (idhafah)." },
          { ar: "جَدَّتِي كَبِيرَةٌ", translation: "Nenekku besar/tua", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "أَيْنَ جَدَّتُكَ؟", translation: "Di mana nenekmu?", grammarNote: "Tanya + Mubtada (idhafah).", analysis: "Tanya + Mubtada (idhafah)." },
          { ar: "جَدَّتُهُ مَرِيضَةٌ", translation: "Neneknya sakit", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "جَدَّتُهَا فِي الْبَيْتِ", translation: "Neneknya (P) di rumah", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah.", analysis: "Mubtada (idhafah) + Syibhul Jumlah." },
          { ar: "زُرْتُ جَدَّتِي", translation: "Aku mengunjungi nenekku", grammarNote: "Fi'il-Fa'il + Maf'ul bih (idhafah).", analysis: "Fi'il-Fa'il + Maf'ul bih (idhafah)." },
          { ar: "جَلَسْتُ مَعَ جَدَّتِي", translation: "Aku duduk bersama nenekku", grammarNote: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh.", analysis: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh." },
          { ar: "جَدَّتِي اِمْرَأَةٌ طَيِّبَةٌ", translation: "Nenekku wanita yang baik", grammarNote: "Mubtada + Khabar + Sifat muannats.", analysis: "Mubtada + Khabar + Sifat muannats." },
          { ar: "هَلْ جَدَّتُكِ هُنَا؟", translation: "Apakah nenekmu (P) ada di sini?", grammarNote: "Tanya + Mubtada + Keterangan tempat.", analysis: "Tanya + Mubtada + Keterangan tempat." },
          { ar: "أُحِبُّ جَدَّتِي كَثِيرًا", translation: "Aku sangat mencintai nenekku", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Keterangan.", analysis: "Fi'il-Fa'il + Maf'ul bih + Keterangan." }
        ]
      },
      {
        id: "l1_3_c13",
        wordAr: "عَمٌّ",
        translation: "Paman (dari ayah)",
        category: "Keluarga Besar",
        description: "Saudara laki-laki dari ayah.",
        logicBox: "Kata benda mudzakkar.",
        examples: [
          { ar: "هَذَا عَمِّي", translation: "Ini pamanku (dari ayah)", grammarNote: "Mubtada + Khabar (idhafah).", analysis: "Mubtada + Khabar (idhafah)." },
          { ar: "عَمِّي مُدَرِّسٌ", translation: "Pamanku seorang guru", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "أَيْنَ عَمُّكَ؟", translation: "Di mana pamanmu?", grammarNote: "Tanya + Mubtada (idhafah).", analysis: "Tanya + Mubtada (idhafah)." },
          { ar: "عَمُّهُ غَنِيٌّ", translation: "Pamannya kaya", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "عَمُّهَا فِي السُّوقِ", translation: "Pamannya (P) di pasar", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah.", analysis: "Mubtada (idhafah) + Syibhul Jumlah." },
          { ar: "ذَهَبْتُ إِلَى بَيْتِ عَمِّي", translation: "Aku pergi ke rumah pamanku", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah (idhafah bersusun).", analysis: "Fi'il-Fa'il + Syibhul Jumlah (idhafah bersusun)." },
          { ar: "عَمِّي رَجُلٌ قَوِيٌّ", translation: "Pamanku pria yang kuat", grammarNote: "Mubtada + Khabar + Sifat.", analysis: "Mubtada + Khabar + Sifat." },
          { ar: "أَعْمَلُ مَعَ عَمِّي", translation: "Aku bekerja bersama pamanku", grammarNote: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh.", analysis: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh." },
          { ar: "هَلْ هَذَا عَمُّكَ؟", translation: "Apakah ini pamanmu?", grammarNote: "Tanya + Mubtada + Khabar (idhafah).", analysis: "Tanya + Mubtada + Khabar (idhafah)." },
          { ar: "عَمِّي يُحِبُّ الْقِرَاءَةَ", translation: "Pamanku suka membaca", grammarNote: "Mubtada + Khabar kalimat fi'liyyah.", analysis: "Mubtada + Khabar kalimat fi'liyyah." }
        ]
      },
      {
        id: "l1_3_c14",
        wordAr: "عَمَّةٌ",
        translation: "Bibi (dari ayah)",
        category: "Keluarga Besar",
        description: "Saudara perempuan dari ayah.",
        logicBox: "Bentuk muannats dari عَمٌّ.",
        examples: [
          { ar: "هَذِهِ عَمَّتِي", translation: "Ini bibiku (dari ayah)", grammarNote: "Mubtada muannats + Khabar (idhafah).", analysis: "Mubtada muannats + Khabar (idhafah)." },
          { ar: "عَمَّتِي مُدَرِّسَةٌ", translation: "Bibiku seorang guru", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "أَيْنَ عَمَّتُكَ؟", translation: "Di mana bibimu?", grammarNote: "Tanya + Mubtada (idhafah).", analysis: "Tanya + Mubtada (idhafah)." },
          { ar: "عَمَّتُهُ غَنِيَّةٌ", translation: "Bibinya kaya", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "عَمَّتُهَا فِي الْبَيْتِ", translation: "Bibinya (P) di rumah", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah.", analysis: "Mubtada (idhafah) + Syibhul Jumlah." },
          { ar: "ذَهَبْتُ إِلَى بَيْتِ عَمَّتِي", translation: "Aku pergi ke rumah bibiku", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah (idhafah bersusun).", analysis: "Fi'il-Fa'il + Syibhul Jumlah (idhafah bersusun)." },
          { ar: "عَمَّتِي اِمْرَأَةٌ طَيِّبَةٌ", translation: "Bibiku wanita yang baik", grammarNote: "Mubtada + Khabar + Sifat muannats.", analysis: "Mubtada + Khabar + Sifat muannats." },
          { ar: "أَتَكَلَّمُ مَعَ عَمَّتِي", translation: "Aku berbicara dengan bibiku", grammarNote: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh.", analysis: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh." },
          { ar: "هَلْ هَذِهِ عَمَّتُكِ؟", translation: "Apakah ini bibimu (P)?", grammarNote: "Tanya + Mubtada + Khabar (idhafah).", analysis: "Tanya + Mubtada + Khabar (idhafah)." },
          { ar: "عَمَّتِي تُحِبُّ الطَّبْخَ", translation: "Bibiku suka memasak", grammarNote: "Mubtada + Khabar kalimat fi'liyyah.", analysis: "Mubtada + Khabar kalimat fi'liyyah." }
        ]
      },
      {
        id: "l1_3_c15",
        wordAr: "خَالٌ",
        translation: "Paman (dari ibu)",
        category: "Keluarga Besar",
        description: "Saudara laki-laki dari ibu.",
        logicBox: "Kata benda mudzakkar.",
        examples: [
          { ar: "هَذَا خَالِي", translation: "Ini pamanku (dari ibu)", grammarNote: "Mubtada + Khabar (idhafah).", analysis: "Mubtada + Khabar (idhafah)." },
          { ar: "خَالِي تَاجِرٌ", translation: "Pamanku seorang pedagang", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "أَيْنَ خَالُكَ؟", translation: "Di mana pamanmu?", grammarNote: "Tanya + Mubtada (idhafah).", analysis: "Tanya + Mubtada (idhafah)." },
          { ar: "خَالُهُ فَقِيرٌ", translation: "Pamannya miskin", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "خَالُهَا فِي السَّفَرِ", translation: "Pamannya (P) sedang bepergian", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah.", analysis: "Mubtada (idhafah) + Syibhul Jumlah." },
          { ar: "رَأَيْتُ خَالِي", translation: "Aku melihat pamanku", grammarNote: "Fi'il-Fa'il + Maf'ul bih (idhafah).", analysis: "Fi'il-Fa'il + Maf'ul bih (idhafah)." },
          { ar: "خَالِي رَجُلٌ طَوِيلٌ", translation: "Pamanku pria yang tinggi", grammarNote: "Mubtada + Khabar + Sifat.", analysis: "Mubtada + Khabar + Sifat." },
          { ar: "أَلْعَبُ مَعَ خَالِي", translation: "Aku bermain bersama pamanku", grammarNote: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh.", analysis: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh." },
          { ar: "هَلْ هَذَا خَالُكَ؟", translation: "Apakah ini pamanmu?", grammarNote: "Tanya + Mubtada + Khabar (idhafah).", analysis: "Tanya + Mubtada + Khabar (idhafah)." },
          { ar: "خَالِي يُحِبُّ السَّفَرَ", translation: "Pamanku suka bepergian", grammarNote: "Mubtada + Khabar kalimat fi'liyyah.", analysis: "Mubtada + Khabar kalimat fi'liyyah." }
        ]
      },
      {
        id: "l1_3_c16",
        wordAr: "خَالَةٌ",
        translation: "Bibi (dari ibu)",
        category: "Keluarga Besar",
        description: "Saudara perempuan dari ibu.",
        logicBox: "Bentuk muannats dari خَالٌ.",
        examples: [
          { ar: "هَذِهِ خَالَتِي", translation: "Ini bibiku (dari ibu)", grammarNote: "Mubtada muannats + Khabar (idhafah).", analysis: "Mubtada muannats + Khabar (idhafah)." },
          { ar: "خَالَتِي طَبِيبَةٌ", translation: "Bibiku seorang dokter", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "أَيْنَ خَالَتُكَ؟", translation: "Di mana bibimu?", grammarNote: "Tanya + Mubtada (idhafah).", analysis: "Tanya + Mubtada (idhafah)." },
          { ar: "خَالَتُهُ كَرِيمَةٌ", translation: "Bibinya dermawan", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "خَالَتُهَا فِي الْمُسْتَشْفَى", translation: "Bibinya (P) di rumah sakit", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah.", analysis: "Mubtada (idhafah) + Syibhul Jumlah." },
          { ar: "رَأَيْتُ خَالَتِي", translation: "Aku melihat bibiku", grammarNote: "Fi'il-Fa'il + Maf'ul bih (idhafah).", analysis: "Fi'il-Fa'il + Maf'ul bih (idhafah)." },
          { ar: "خَالَتِي اِمْرَأَةٌ قَصِيرَةٌ", translation: "Bibiku wanita yang pendek", grammarNote: "Mubtada + Khabar + Sifat muannats.", analysis: "Mubtada + Khabar + Sifat muannats." },
          { ar: "أَجْلِسُ مَعَ خَالَتِي", translation: "Aku duduk bersama bibiku", grammarNote: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh.", analysis: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh." },
          { ar: "هَلْ هَذِهِ خَالَتُكِ؟", translation: "Apakah ini bibimu (P)?", grammarNote: "Tanya + Mubtada + Khabar (idhafah).", analysis: "Tanya + Mubtada + Khabar (idhafah)." },
          { ar: "خَالَتِي تُحِبُّ الْقِرَاءَةَ", translation: "Bibiku suka membaca", grammarNote: "Mubtada + Khabar kalimat fi'liyyah.", analysis: "Mubtada + Khabar kalimat fi'liyyah." }
        ]
      },
      {
        id: "l1_3_c17",
        wordAr: "اِبْنُ الْعَمِّ",
        translation: "Sepupu laki-laki (anak paman dari ayah)",
        category: "Keluarga Besar",
        description: "Anak laki-laki dari saudara laki-laki ayah.",
        logicBox: "Frasa idhafah (Mudhaf + Mudhaf Ilayh).",
        examples: [
          { ar: "هَذَا اِبْنُ عَمِّي", translation: "Ini sepupuku (anak pamanku)", grammarNote: "Mubtada + Khabar (idhafah bersusun).", analysis: "Mubtada + Khabar (idhafah bersusun)." },
          { ar: "اِبْنُ عَمِّي طَالِبٌ", translation: "Sepupuku seorang pelajar", grammarNote: "Mubtada (idhafah bersusun) + Khabar mudzakkar.", analysis: "Mubtada (idhafah bersusun) + Khabar mudzakkar." },
          { ar: "أَيْنَ اِبْنُ عَمِّكَ؟", translation: "Di mana sepupumu?", grammarNote: "Tanya + Mubtada.", analysis: "Tanya + Mubtada." },
          { ar: "اِبْنُ عَمِّهِ ذَكِيٌّ", translation: "Sepupunya cerdas", grammarNote: "Mubtada + Khabar mudzakkar.", analysis: "Mubtada + Khabar mudzakkar." },
          { ar: "لَعِبْتُ مَعَ اِبْنِ عَمِّي", translation: "Aku bermain dengan sepupuku", grammarNote: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh.", analysis: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh." },
          { ar: "رَأَيْتُ اِبْنَ عَمِّي", translation: "Aku melihat sepupuku", grammarNote: "Fi'il-Fa'il + Maf'ul bih.", analysis: "Fi'il-Fa'il + Maf'ul bih." },
          { ar: "اِبْنُ عَمِّي صَدِيقِي", translation: "Sepupuku adalah temanku", grammarNote: "Mubtada + Khabar (idhafah).", analysis: "Mubtada + Khabar (idhafah)." },
          { ar: "هَلْ هَذَا اِبْنُ عَمِّهَا؟", translation: "Apakah ini sepupunya (P)?", grammarNote: "Tanya + Mubtada + Khabar.", analysis: "Tanya + Mubtada + Khabar." },
          { ar: "سَلَّمْتُ عَلَى اِبْنِ عَمِّي", translation: "Aku memberi salam pada sepupuku", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Syibhul Jumlah." },
          { ar: "اِبْنُ الْعَمِّ بِمَنْزِلَةِ الْأَخِ", translation: "Sepupu laki-laki kedudukannya seperti saudara laki-laki", grammarNote: "Mubtada + Syibhul Jumlah.", analysis: "Mubtada + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_3_c18",
        wordAr: "حَفِيدٌ",
        translation: "Cucu Laki-laki",
        category: "Keluarga Besar",
        description: "Anak laki-laki dari anak laki-laki atau anak perempuan.",
        logicBox: "Kata benda mudzakkar.",
        examples: [
          { ar: "هَذَا حَفِيدِي", translation: "Ini cucu laki-lakiku", grammarNote: "Mubtada + Khabar (idhafah).", analysis: "Mubtada + Khabar (idhafah)." },
          { ar: "حَفِيدِي صَغِيرٌ", translation: "Cucuku masih kecil", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "أَيْنَ حَفِيدُكَ؟", translation: "Di mana cucumu?", grammarNote: "Tanya + Mubtada (idhafah).", analysis: "Tanya + Mubtada (idhafah)." },
          { ar: "حَفِيدُهُ نَشِيطٌ", translation: "Cucunya aktif", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "حَفِيدُهَا فِي الْمَدْرَسَةِ", translation: "Cucunya (P) di sekolah", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah.", analysis: "Mubtada (idhafah) + Syibhul Jumlah." },
          { ar: "أَلْعَبُ مَعَ حَفِيدِي", translation: "Aku bermain dengan cucuku", grammarNote: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh.", analysis: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh." },
          { ar: "رَأَيْتُ حَفِيدَكَ", translation: "Aku melihat cucumu", grammarNote: "Fi'il-Fa'il + Maf'ul bih.", analysis: "Fi'il-Fa'il + Maf'ul bih." },
          { ar: "حَفِيدِي يُحِبُّ الْحَلْوَى", translation: "Cucuku suka manisan", grammarNote: "Mubtada + Khabar kalimat fi'liyyah.", analysis: "Mubtada + Khabar kalimat fi'liyyah." },
          { ar: "هَلْ هَذَا حَفِيدُ الْجَدِّ؟", translation: "Apakah ini cucu kakek itu?", grammarNote: "Tanya + Mubtada + Khabar (idhafah).", analysis: "Tanya + Mubtada + Khabar (idhafah)." },
          { ar: "قَبَّلْتُ حَفِيدِي", translation: "Aku mencium cucuku", grammarNote: "Fi'il-Fa'il + Maf'ul bih.", analysis: "Fi'il-Fa'il + Maf'ul bih." }
        ]
      },
      {
        id: "l1_3_c19",
        wordAr: "حَفِيدَةٌ",
        translation: "Cucu Perempuan",
        category: "Keluarga Besar",
        description: "Anak perempuan dari anak laki-laki atau anak perempuan.",
        logicBox: "Bentuk muannats dari حَفِيدٌ.",
        examples: [
          { ar: "هَذِهِ حَفِيدَتِي", translation: "Ini cucu perempuanku", grammarNote: "Mubtada muannats + Khabar (idhafah).", analysis: "Mubtada muannats + Khabar (idhafah)." },
          { ar: "حَفِيدَتِي صَغِيرَةٌ", translation: "Cucuku (P) masih kecil", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "أَيْنَ حَفِيدَتُكَ؟", translation: "Di mana cucu perempuanmu?", grammarNote: "Tanya + Mubtada (idhafah).", analysis: "Tanya + Mubtada (idhafah)." },
          { ar: "حَفِيدَتُهُ جَمِيلَةٌ", translation: "Cucunya cantik", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "حَفِيدَتُهَا تَلْعَبُ", translation: "Cucunya (P) sedang bermain", grammarNote: "Mubtada (idhafah) + Khabar kalimat fi'liyyah.", analysis: "Mubtada (idhafah) + Khabar kalimat fi'liyyah." },
          { ar: "أَلْعَبُ مَعَ حَفِيدَتِي", translation: "Aku bermain dengan cucuku", grammarNote: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh.", analysis: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh." },
          { ar: "رَأَيْتُ حَفِيدَتَكَ", translation: "Aku melihat cucumu", grammarNote: "Fi'il-Fa'il + Maf'ul bih.", analysis: "Fi'il-Fa'il + Maf'ul bih." },
          { ar: "حَفِيدَتِي تُحِبُّ الْحَلْوَى", translation: "Cucuku suka manisan", grammarNote: "Mubtada + Khabar kalimat fi'liyyah.", analysis: "Mubtada + Khabar kalimat fi'liyyah." },
          { ar: "هَلْ هَذِهِ حَفِيدَةُ الْجَدَّةِ؟", translation: "Apakah ini cucu nenek itu?", grammarNote: "Tanya + Mubtada + Khabar (idhafah).", analysis: "Tanya + Mubtada + Khabar (idhafah)." },
          { ar: "قَبَّلْتُ حَفِيدَتِي", translation: "Aku mencium cucuku (P)", grammarNote: "Fi'il-Fa'il + Maf'ul bih.", analysis: "Fi'il-Fa'il + Maf'ul bih." }
        ]
      },
      {
        id: "l1_3_c20",
        wordAr: "قَرِيبٌ",
        translation: "Kerabat",
        category: "Keluarga Besar",
        description: "Anggota keluarga atau kerabat dekat.",
        logicBox: "Kata benda mudzakkar, dapat juga berarti 'dekat'. Jamaknya adalah أَقَارِبُ.",
        examples: [
          { ar: "هَذَا قَرِيبِي", translation: "Ini kerabatku", grammarNote: "Mubtada + Khabar (idhafah).", analysis: "Mubtada + Khabar (idhafah)." },
          { ar: "قَرِيبِي طَبِيبٌ", translation: "Kerabatku seorang dokter", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "أَيْنَ قَرِيبُكَ؟", translation: "Di mana kerabatmu?", grammarNote: "Tanya + Mubtada (idhafah).", analysis: "Tanya + Mubtada (idhafah)." },
          { ar: "قَرِيبُهُ مِنْ مِصْرَ", translation: "Kerabatnya dari Mesir", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah.", analysis: "Mubtada (idhafah) + Syibhul Jumlah." },
          { ar: "زُرْتُ قَرِيبِي فِي الْمُسْتَشْفَى", translation: "Aku mengunjungi kerabatku di rumah sakit", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah." },
          { ar: "هَلْ لَكَ أَقَارِبُ هُنَا؟", translation: "Apakah kamu punya kerabat (jamak) di sini?", grammarNote: "Tanya + Syibhul Jumlah (khabar muqaddam) + Mubtada muakhkhar.", analysis: "Tanya + Syibhul Jumlah (khabar muqaddam) + Mubtada muakhkhar." },
          { ar: "قَرِيبِي رَجُلٌ صَالِحٌ", translation: "Kerabatku pria yang saleh", grammarNote: "Mubtada + Khabar + Sifat.", analysis: "Mubtada + Khabar + Sifat." },
          { ar: "صِلَةُ الْأَقَارِبِ مُهِمَّةٌ", translation: "Silaturahmi kerabat itu penting", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "أَحَبُّ النَّاسِ إِلَيَّ أَقَارِبِي", translation: "Orang yang paling aku cintai adalah kerabatku", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah + Khabar.", analysis: "Mubtada (idhafah) + Syibhul Jumlah + Khabar." },
          { ar: "قَرِيبُنَا يَعْمَلُ فِي الشَّرِكَةِ", translation: "Kerabat kami bekerja di perusahaan", grammarNote: "Mubtada (idhafah) + Khabar kalimat fi'liyyah.", analysis: "Mubtada (idhafah) + Khabar kalimat fi'liyyah." }
        ]
      }
      ,
      {
        id: "l1_3_c21",
        wordAr: "كَبِيرٌ",
        translation: "Besar/Tua",
        category: "Sifat Keluarga",
        description: "Digunakan untuk ukuran (besar) atau usia (tua/kakak).",
        logicBox: "Kata sifat mudzakkar. Bentuk muannatsnya adalah كَبِيرَةٌ.",
        examples: [
          { ar: "أَخِي كَبِيرٌ", translation: "Saudaraku sudah besar/tua", grammarNote: "Mubtada + Khabar mudzakkar.", analysis: "Mubtada + Khabar mudzakkar." },
          { ar: "هَذَا بَيْتٌ كَبِيرٌ", translation: "Ini rumah yang besar", grammarNote: "Mubtada + Khabar + Sifat mudzakkar.", analysis: "Mubtada + Khabar + Sifat mudzakkar." },
          { ar: "عَمِّي رَجُلٌ كَبِيرٌ", translation: "Pamanku adalah pria tua", grammarNote: "Mubtada + Khabar + Sifat mudzakkar.", analysis: "Mubtada + Khabar + Sifat mudzakkar." },
          { ar: "أُسْرَتِي كَبِيرَةٌ", translation: "Keluargaku besar", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "أُخْتِي كَبِيرَةٌ", translation: "Saudariku sudah besar (kakak)", grammarNote: "Mubtada + Khabar muannats.", analysis: "Mubtada + Khabar muannats." },
          { ar: "جَدِّي كَبِيرٌ فِي السِّنِّ", translation: "Kakekku lanjut usia", grammarNote: "Mubtada + Khabar + Syibhul Jumlah.", analysis: "Mubtada + Khabar + Syibhul Jumlah." },
          { ar: "أَخُوهُ الْأَكْبَرُ هُنَا", translation: "Kakak laki-lakinya ada di sini", grammarNote: "Mubtada (idhafah) + Sifat (isim tafdhil) + Keterangan.", analysis: "Mubtada (idhafah) + Sifat (isim tafdhil) + Keterangan." },
          { ar: "أُخْتُهَا الْكُبْرَى مُدَرِّسَةٌ", translation: "Kakak perempuannya adalah guru", grammarNote: "Mubtada (idhafah) + Sifat muannats (isim tafdhil) + Khabar.", analysis: "Mubtada (idhafah) + Sifat muannats (isim tafdhil) + Khabar." },
          { ar: "هَلْ هَذَا أَخُوكَ الْكَبِيرُ؟", translation: "Apakah ini kakak laki-lakimu?", grammarNote: "Tanya + Mubtada + Khabar + Sifat.", analysis: "Tanya + Mubtada + Khabar + Sifat." },
          { ar: "رَأَيْتُ الرَّجُلَ الْكَبِيرَ", translation: "Aku melihat pria tua itu", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Sifat.", analysis: "Fi'il-Fa'il + Maf'ul bih + Sifat." }
        ]
      },
      {
        id: "l1_3_c22",
        wordAr: "صَغِيرٌ",
        translation: "Kecil/Muda",
        category: "Sifat Keluarga",
        description: "Digunakan untuk ukuran (kecil) atau usia (muda/adik).",
        logicBox: "Kata sifat mudzakkar. Bentuk muannatsnya adalah صَغِيرَةٌ.",
        examples: [
          { ar: "أَخِي صَغِيرٌ", translation: "Saudaraku masih kecil (adik)", grammarNote: "Mubtada + Khabar mudzakkar.", analysis: "Mubtada + Khabar mudzakkar." },
          { ar: "هَذَا بَيْتٌ صَغِيرٌ", translation: "Ini rumah yang kecil", grammarNote: "Mubtada + Khabar + Sifat mudzakkar.", analysis: "Mubtada + Khabar + Sifat mudzakkar." },
          { ar: "اِبْنِي وَلَدٌ صَغِيرٌ", translation: "Anakku adalah bocah kecil", grammarNote: "Mubtada + Khabar + Sifat mudzakkar.", analysis: "Mubtada + Khabar + Sifat mudzakkar." },
          { ar: "أُسْرَتُهُ صَغِيرَةٌ", translation: "Keluarganya kecil", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "أُخْتِي صَغِيرَةٌ", translation: "Saudariku masih kecil (adik)", grammarNote: "Mubtada + Khabar muannats.", analysis: "Mubtada + Khabar muannats." },
          { ar: "حَفِيدِي صَغِيرٌ جِدًّا", translation: "Cucuku sangat kecil", grammarNote: "Mubtada + Khabar + Keterangan.", analysis: "Mubtada + Khabar + Keterangan." },
          { ar: "أَخُوهُ الْأَصْغَرُ هُنَا", translation: "Adik laki-lakinya ada di sini", grammarNote: "Mubtada (idhafah) + Sifat (isim tafdhil) + Keterangan.", analysis: "Mubtada (idhafah) + Sifat (isim tafdhil) + Keterangan." },
          { ar: "أُخْتُهَا الصُّغْرَى طَالِبَةٌ", translation: "Adik perempuannya adalah siswi", grammarNote: "Mubtada (idhafah) + Sifat muannats (isim tafdhil) + Khabar.", analysis: "Mubtada (idhafah) + Sifat muannats (isim tafdhil) + Khabar." },
          { ar: "هَلْ هَذَا أَخُوكَ الصَّغِيرُ؟", translation: "Apakah ini adik laki-lakimu?", grammarNote: "Tanya + Mubtada + Khabar + Sifat.", analysis: "Tanya + Mubtada + Khabar + Sifat." },
          { ar: "لَعِبْتُ مَعَ الطِّفْلِ الصَّغِيرِ", translation: "Aku bermain dengan anak kecil itu", grammarNote: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh + Sifat.", analysis: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh + Sifat." }
        ]
      },
      {
        id: "l1_3_c23",
        wordAr: "طَوِيلٌ",
        translation: "Tinggi",
        category: "Sifat Keluarga",
        description: "Sifat tinggi untuk mendeskripsikan perawakan.",
        logicBox: "Kata sifat mudzakkar. Bentuk muannatsnya adalah طَوِيلَةٌ.",
        examples: [
          { ar: "أَخِي طَوِيلٌ", translation: "Saudaraku tinggi", grammarNote: "Mubtada + Khabar mudzakkar.", analysis: "Mubtada + Khabar mudzakkar." },
          { ar: "أَبِي رَجُلٌ طَوِيلٌ", translation: "Ayahku pria yang tinggi", grammarNote: "Mubtada + Khabar + Sifat mudzakkar.", analysis: "Mubtada + Khabar + Sifat mudzakkar." },
          { ar: "عَمِّي طَوِيلٌ جِدًّا", translation: "Pamanku sangat tinggi", grammarNote: "Mubtada + Khabar + Keterangan.", analysis: "Mubtada + Khabar + Keterangan." },
          { ar: "أُخْتِي طَوِيلَةٌ", translation: "Saudariku tinggi", grammarNote: "Mubtada + Khabar muannats.", analysis: "Mubtada + Khabar muannats." },
          { ar: "أُمِّي اِمْرَأَةٌ طَوِيلَةٌ", translation: "Ibuku wanita yang tinggi", grammarNote: "Mubtada + Khabar + Sifat muannats.", analysis: "Mubtada + Khabar + Sifat muannats." },
          { ar: "هَلْ أَخُوكَ طَوِيلٌ؟", translation: "Apakah saudaramu tinggi?", grammarNote: "Tanya + Mubtada + Khabar.", analysis: "Tanya + Mubtada + Khabar." },
          { ar: "اِبْنُهُ طَوِيلٌ أَيْضًا", translation: "Anaknya tinggi juga", grammarNote: "Mubtada + Khabar + Keterangan.", analysis: "Mubtada + Khabar + Keterangan." },
          { ar: "بِنْتُهَا لَيْسَتْ طَوِيلَةً", translation: "Anak perempuannya tidak tinggi", grammarNote: "Mubtada + Fi'il naqis + Khabar Laysa (manshub).", analysis: "Mubtada + Fi'il naqis + Khabar Laysa (manshub)." },
          { ar: "أَنَا أَطْوَلُ مِنْ أَخِي", translation: "Aku lebih tinggi dari saudaraku", grammarNote: "Mubtada + Khabar (isim tafdhil) + Syibhul Jumlah.", analysis: "Mubtada + Khabar (isim tafdhil) + Syibhul Jumlah." },
          { ar: "رَأَيْتُ وَلَدًا طَوِيلًا", translation: "Aku melihat anak laki-laki yang tinggi", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Sifat.", analysis: "Fi'il-Fa'il + Maf'ul bih + Sifat." }
        ]
      },
      {
        id: "l1_3_c24",
        wordAr: "قَصِيرٌ",
        translation: "Pendek",
        category: "Sifat Keluarga",
        description: "Sifat pendek untuk mendeskripsikan perawakan.",
        logicBox: "Kata sifat mudzakkar. Bentuk muannatsnya adalah قَصِيرَةٌ.",
        examples: [
          { ar: "أَخِي قَصِيرٌ", translation: "Saudaraku pendek", grammarNote: "Mubtada + Khabar mudzakkar.", analysis: "Mubtada + Khabar mudzakkar." },
          { ar: "جَدِّي رَجُلٌ قَصِيرٌ", translation: "Kakekku pria yang pendek", grammarNote: "Mubtada + Khabar + Sifat mudzakkar.", analysis: "Mubtada + Khabar + Sifat mudzakkar." },
          { ar: "خَالِي قَصِيرٌ جِدًّا", translation: "Pamanku sangat pendek", grammarNote: "Mubtada + Khabar + Keterangan.", analysis: "Mubtada + Khabar + Keterangan." },
          { ar: "أُخْتِي قَصِيرَةٌ", translation: "Saudariku pendek", grammarNote: "Mubtada + Khabar muannats.", analysis: "Mubtada + Khabar muannats." },
          { ar: "جَدَّتِي اِمْرَأَةٌ قَصِيرَةٌ", translation: "Nenekku wanita yang pendek", grammarNote: "Mubtada + Khabar + Sifat muannats.", analysis: "Mubtada + Khabar + Sifat muannats." },
          { ar: "هَلْ أَخُوكَ قَصِيرٌ؟", translation: "Apakah saudaramu pendek?", grammarNote: "Tanya + Mubtada + Khabar.", analysis: "Tanya + Mubtada + Khabar." },
          { ar: "اِبْنُهُ قَصِيرٌ أَيْضًا", translation: "Anaknya pendek juga", grammarNote: "Mubtada + Khabar + Keterangan.", analysis: "Mubtada + Khabar + Keterangan." },
          { ar: "بِنْتُهَا لَيْسَتْ قَصِيرَةً", translation: "Anak perempuannya tidak pendek", grammarNote: "Mubtada + Fi'il naqis + Khabar Laysa (manshub).", analysis: "Mubtada + Fi'il naqis + Khabar Laysa (manshub)." },
          { ar: "أَنَا أَقْصَرُ مِنْ أَبِي", translation: "Aku lebih pendek dari ayahku", grammarNote: "Mubtada + Khabar (isim tafdhil) + Syibhul Jumlah.", analysis: "Mubtada + Khabar (isim tafdhil) + Syibhul Jumlah." },
          { ar: "رَأَيْتُ وَلَدًا قَصِيرًا", translation: "Aku melihat anak laki-laki yang pendek", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Sifat.", analysis: "Fi'il-Fa'il + Maf'ul bih + Sifat." }
        ]
      },
      {
        id: "l1_3_c25",
        wordAr: "جَمِيلٌ",
        translation: "Tampan/Cantik/Indah",
        category: "Sifat Keluarga",
        description: "Sifat untuk keindahan fisik atau rupa.",
        logicBox: "Kata sifat mudzakkar. Untuk muannats (cantik) adalah جَمِيلَةٌ.",
        examples: [
          { ar: "أَخِي جَمِيلٌ", translation: "Saudaraku tampan", grammarNote: "Mubtada + Khabar mudzakkar.", analysis: "Mubtada + Khabar mudzakkar." },
          { ar: "اِبْنِي وَلَدٌ جَمِيلٌ", translation: "Anakku bocah yang tampan", grammarNote: "Mubtada + Khabar + Sifat mudzakkar.", analysis: "Mubtada + Khabar + Sifat mudzakkar." },
          { ar: "هَذَا بَيْتٌ جَمِيلٌ", translation: "Ini rumah yang indah", grammarNote: "Mubtada + Khabar + Sifat mudzakkar.", analysis: "Mubtada + Khabar + Sifat mudzakkar." },
          { ar: "أُخْتِي جَمِيلَةٌ", translation: "Saudariku cantik", grammarNote: "Mubtada + Khabar muannats.", analysis: "Mubtada + Khabar muannats." },
          { ar: "أُمِّي اِمْرَأَةٌ جَمِيلَةٌ", translation: "Ibuku wanita yang cantik", grammarNote: "Mubtada + Khabar + Sifat muannats.", analysis: "Mubtada + Khabar + Sifat muannats." },
          { ar: "زَوْجَتُهُ جَمِيلَةٌ جِدًّا", translation: "Istrinya sangat cantik", grammarNote: "Mubtada + Khabar + Keterangan.", analysis: "Mubtada + Khabar + Keterangan." },
          { ar: "هَلْ بِنْتُكَ جَمِيلَةٌ؟", translation: "Apakah anak perempuanmu cantik?", grammarNote: "Tanya + Mubtada + Khabar.", analysis: "Tanya + Mubtada + Khabar." },
          { ar: "لِي أُسْرَةٌ جَمِيلَةٌ", translation: "Aku punya keluarga yang indah/baik", grammarNote: "Khabar muqaddam + Mubtada muakhkhar + Sifat.", analysis: "Khabar muqaddam + Mubtada muakhkhar + Sifat." },
          { ar: "أَنْتِ أَجْمَلُ مِنْهَا", translation: "Kamu (P) lebih cantik darinya", grammarNote: "Mubtada + Khabar (isim tafdhil) + Syibhul Jumlah.", analysis: "Mubtada + Khabar (isim tafdhil) + Syibhul Jumlah." },
          { ar: "رَأَيْتُ طِفْلَةً جَمِيلَةً", translation: "Aku melihat anak perempuan yang cantik", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Sifat.", analysis: "Fi'il-Fa'il + Maf'ul bih + Sifat." }
        ]
      },
      {
        id: "l1_3_c26",
        wordAr: "أَحَبَّ",
        translation: "Mencintai",
        category: "Kata Kerja Keluarga",
        description: "Fi'il madhi untuk mengungkapkan cinta kasih.",
        logicBox: "Bentuk mudhari-nya adalah يُحِبُّ. Untuk dhamir Ana (saya) menjadi أُحِبُّ.",
        examples: [
          { ar: "أُحِبُّ أَبِي وَأُمِّي", translation: "Aku mencintai ayah dan ibuku", grammarNote: "Fi'il mudhari + Fa'il (dhamir mustatir) + Maf'ul bih + Ma'thuf.", analysis: "Fi'il mudhari + Fa'il (dhamir mustatir) + Maf'ul bih + Ma'thuf." },
          { ar: "أُحِبُّ أُسْرَتِي كَثِيرًا", translation: "Aku sangat mencintai keluargaku", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Keterangan.", analysis: "Fi'il-Fa'il + Maf'ul bih + Keterangan." },
          { ar: "هَلْ تُحِبُّ أَخَاكَ؟", translation: "Apakah kamu (L) mencintai saudaramu?", grammarNote: "Tanya + Fi'il mudhari + Fa'il + Maf'ul bih (manshub bil alif).", analysis: "Tanya + Fi'il mudhari + Fa'il + Maf'ul bih (manshub bil alif)." },
          { ar: "هِيَ تُحِبُّ زَوْجَهَا", translation: "Dia (P) mencintai suaminya", grammarNote: "Mubtada + Fi'il mudhari + Fa'il + Maf'ul bih.", analysis: "Mubtada + Fi'il mudhari + Fa'il + Maf'ul bih." },
          { ar: "هُوَ يُحِبُّ زَوْجَتَهُ", translation: "Dia (L) mencintai istrinya", grammarNote: "Mubtada + Fi'il mudhari + Fa'il + Maf'ul bih.", analysis: "Mubtada + Fi'il mudhari + Fa'il + Maf'ul bih." },
          { ar: "أَحَبَّ الْأَبُ اِبْنَهُ", translation: "Ayah itu mencintai anaknya", grammarNote: "Fi'il madhi + Fa'il + Maf'ul bih.", analysis: "Fi'il madhi + Fa'il + Maf'ul bih." },
          { ar: "الْأُمُّ تُحِبُّ أَوْلَادَهَا", translation: "Ibu mencintai anak-anaknya", grammarNote: "Mubtada + Fi'il mudhari + Fa'il + Maf'ul bih.", analysis: "Mubtada + Fi'il mudhari + Fa'il + Maf'ul bih." },
          { ar: "أُحِبُّ جَدِّي وَجَدَّتِي", translation: "Aku mencintai kakek dan nenekku", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Ma'thuf.", analysis: "Fi'il-Fa'il + Maf'ul bih + Ma'thuf." },
          { ar: "نَحْنُ نُحِبُّ بَعْضَنَا", translation: "Kami saling mencintai (satu sama lain)", grammarNote: "Mubtada + Fi'il-Fa'il + Maf'ul bih.", analysis: "Mubtada + Fi'il-Fa'il + Maf'ul bih." },
          { ar: "الْحُبُّ فِي الْأُسْرَةِ مُهِمٌّ", translation: "Cinta di dalam keluarga itu penting", grammarNote: "Mubtada + Syibhul Jumlah + Khabar.", analysis: "Mubtada + Syibhul Jumlah + Khabar." }
        ]
      },
      {
        id: "l1_3_c27",
        wordAr: "سَكَنَ",
        translation: "Tinggal",
        category: "Kata Kerja Keluarga",
        description: "Menetap atau bertempat tinggal di suatu tempat.",
        logicBox: "Bentuk mudhari-nya adalah يَسْكُنُ. Biasanya diikuti huruf jar فِي.",
        examples: [
          { ar: "أَسْكُنُ فِي هَذَا الْبَيْتِ", translation: "Aku tinggal di rumah ini", grammarNote: "Fi'il mudhari + Fa'il + Syibhul Jumlah.", analysis: "Fi'il mudhari + Fa'il + Syibhul Jumlah." },
          { ar: "أَسْكُنُ مَعَ أُسْرَتِي", translation: "Aku tinggal bersama keluargaku", grammarNote: "Fi'il mudhari + Fa'il + Zharaf + Mudhaf ilayh.", analysis: "Fi'il mudhari + Fa'il + Zharaf + Mudhaf ilayh." },
          { ar: "أَيْنَ تَسْكُنُ؟", translation: "Di mana kamu (L) tinggal?", grammarNote: "Tanya + Fi'il mudhari.", analysis: "Tanya + Fi'il mudhari." },
          { ar: "أَيْنَ تَسْكُنِينَ؟", translation: "Di mana kamu (P) tinggal?", grammarNote: "Tanya + Fi'il mudhari (dengan ya mukhathabah).", analysis: "Tanya + Fi'il mudhari (dengan ya mukhathabah)." },
          { ar: "يَسْكُنُ أَخِي فِي مَكَّةَ", translation: "Saudaraku tinggal di Mekkah", grammarNote: "Fi'il mudhari + Fa'il + Syibhul Jumlah (ghairu munsharif).", analysis: "Fi'il mudhari + Fa'il + Syibhul Jumlah (ghairu munsharif)." },
          { ar: "تَسْكُنُ أُخْتِي فِي الْقَاهِرَةِ", translation: "Saudariku tinggal di Kairo", grammarNote: "Fi'il mudhari (muannats) + Fa'il + Syibhul Jumlah.", analysis: "Fi'il mudhari (muannats) + Fa'il + Syibhul Jumlah." },
          { ar: "عَمِّي يَسْكُنُ قَرِيبًا", translation: "Pamanku tinggal dekat sini", grammarNote: "Mubtada + Fi'il mudhari + Keterangan.", analysis: "Mubtada + Fi'il mudhari + Keterangan." },
          { ar: "نَحْنُ نَسْكُنُ فِي الْمَدِينَةِ", translation: "Kami tinggal di kota", grammarNote: "Mubtada + Fi'il mudhari + Syibhul Jumlah.", analysis: "Mubtada + Fi'il mudhari + Syibhul Jumlah." },
          { ar: "هَلْ سَكَنْتَ هُنَا طَوِيلًا؟", translation: "Apakah kamu tinggal di sini lama?", grammarNote: "Tanya + Fi'il madhi-Fa'il + Keterangan tempat + Keterangan waktu.", analysis: "Tanya + Fi'il madhi-Fa'il + Keterangan tempat + Keterangan waktu." },
          { ar: "السَّكَنُ مَعَ الْعَائِلَةِ جَمِيلٌ", translation: "Tinggal bersama keluarga itu indah", grammarNote: "Mubtada + Syibhul Jumlah + Khabar.", analysis: "Mubtada + Syibhul Jumlah + Khabar." }
        ]
      },
      {
        id: "l1_3_c28",
        wordAr: "تَزَوَّجَ",
        translation: "Menikah",
        category: "Kata Kerja Keluarga",
        description: "Membentuk ikatan rumah tangga.",
        logicBox: "Bentuk mudhari-nya adalah يَتَزَوَّجُ. Bentuk subjek/pelakunya مُتَزَوِّجٌ (sudah menikah).",
        examples: [
          { ar: "أَنَا مُتَزَوِّجٌ", translation: "Saya sudah menikah (L)", grammarNote: "Mubtada + Khabar (isim fa'il).", analysis: "Mubtada + Khabar (isim fa'il)." },
          { ar: "أَنَا مُتَزَوِّجَةٌ", translation: "Saya sudah menikah (P)", grammarNote: "Mubtada + Khabar (isim fa'il muannats).", analysis: "Mubtada + Khabar (isim fa'il muannats)." },
          { ar: "تَزَوَّجَ أَخِي أَمْسِ", translation: "Saudaraku menikah kemarin", grammarNote: "Fi'il madhi + Fa'il + Keterangan waktu.", analysis: "Fi'il madhi + Fa'il + Keterangan waktu." },
          { ar: "تَزَوَّجَتْ أُخْتِي فِي الصَّيْفِ", translation: "Saudariku menikah di musim panas", grammarNote: "Fi'il madhi muannats + Fa'il + Syibhul Jumlah.", analysis: "Fi'il madhi muannats + Fa'il + Syibhul Jumlah." },
          { ar: "هَلْ أَنْتَ مُتَزَوِّجٌ؟", translation: "Apakah kamu sudah menikah?", grammarNote: "Tanya + Mubtada + Khabar.", analysis: "Tanya + Mubtada + Khabar." },
          { ar: "يَتَزَوَّجُ اِبْنِي غَدًا", translation: "Anakku menikah besok", grammarNote: "Fi'il mudhari + Fa'il + Keterangan waktu.", analysis: "Fi'il mudhari + Fa'il + Keterangan waktu." },
          { ar: "تَزَوَّجَ مِنْ اِمْرَأَةٍ صَالِحَةٍ", translation: "Dia menikah dengan wanita yang saleh", grammarNote: "Fi'il madhi + Syibhul Jumlah + Sifat.", analysis: "Fi'il madhi + Syibhul Jumlah + Sifat." },
          { ar: "أُرِيدُ أَنْ أَتَزَوَّجَ", translation: "Aku ingin menikah", grammarNote: "Fi'il mudhari + Mashdar muawwal (Fi'il manshub).", analysis: "Fi'il mudhari + Mashdar muawwal (Fi'il manshub)." },
          { ar: "الزَّوَاجُ نِصْفُ الدِّينِ", translation: "Menikah adalah separuh agama", grammarNote: "Mubtada + Khabar (mudhaf) + Mudhaf ilayh.", analysis: "Mubtada + Khabar (mudhaf) + Mudhaf ilayh." },
          { ar: "تَزَوَّجَا وَرُزِقَا بِنْتًا", translation: "Mereka berdua menikah dan dikaruniai anak perempuan", grammarNote: "Fi'il madhi mutsanna + Ma'thuf (majhul) + Maf'ul bih.", analysis: "Fi'il madhi mutsanna + Ma'thuf (majhul) + Maf'ul bih." }
        ]
      },
      {
        id: "l1_3_c29",
        wordAr: "وَلَدَ",
        translation: "Melahirkan",
        category: "Kata Kerja Keluarga",
        description: "Proses kelahiran anak.",
        logicBox: "Bentuk mudhari-nya adalah يَلِدُ. Untuk ibu menjadi تَلِدُ. Bentuk pasif (dilahirkan) adalah وُلِدَ.",
        examples: [
          { ar: "وَلَدَتْ أُمِّي طِفْلًا", translation: "Ibuku melahirkan seorang bayi", grammarNote: "Fi'il madhi muannats + Fa'il + Maf'ul bih.", analysis: "Fi'il madhi muannats + Fa'il + Maf'ul bih." },
          { ar: "تَلِدُ زَوْجَتِي قَرِيبًا", translation: "Istriku akan melahirkan dalam waktu dekat", grammarNote: "Fi'il mudhari muannats + Fa'il + Keterangan waktu.", analysis: "Fi'il mudhari muannats + Fa'il + Keterangan waktu." },
          { ar: "وُلِدْتُ فِي جَاكَرْتَا", translation: "Aku dilahirkan di Jakarta", grammarNote: "Fi'il madhi majhul + Na'ibul Fa'il + Syibhul Jumlah.", analysis: "Fi'il madhi majhul + Na'ibul Fa'il + Syibhul Jumlah." },
          { ar: "أَيْنَ وُلِدْتَ؟", translation: "Di mana kamu (L) dilahirkan?", grammarNote: "Tanya + Fi'il madhi majhul.", analysis: "Tanya + Fi'il madhi majhul." },
          { ar: "وُلِدَ أَخِي فِي مَايُو", translation: "Saudaraku lahir di bulan Mei", grammarNote: "Fi'il madhi majhul + Na'ibul fa'il + Syibhul Jumlah.", analysis: "Fi'il madhi majhul + Na'ibul fa'il + Syibhul Jumlah." },
          { ar: "هِيَ لَمْ تَلِدْ", translation: "Dia (P) belum/tidak melahirkan", grammarNote: "Mubtada + Huruf jazam + Fi'il mudhari majzum.", analysis: "Mubtada + Huruf jazam + Fi'il mudhari majzum." },
          { ar: "وَلَدَتْ بِنْتًا جَمِيلَةً", translation: "Dia telah melahirkan bayi perempuan yang cantik", grammarNote: "Fi'il madhi muannats + Maf'ul bih + Sifat.", analysis: "Fi'il madhi muannats + Maf'ul bih + Sifat." },
          { ar: "تَارِيخُ الْوِلَادَةِ", translation: "Tanggal kelahiran", grammarNote: "Mudhaf + Mudhaf ilayh.", analysis: "Mudhaf + Mudhaf ilayh." },
          { ar: "وُلِدَ النَّبِيُّ فِي مَكَّةَ", translation: "Nabi dilahirkan di Mekkah", grammarNote: "Fi'il madhi majhul + Na'ibul Fa'il + Syibhul Jumlah.", analysis: "Fi'il madhi majhul + Na'ibul Fa'il + Syibhul Jumlah." },
          { ar: "لَمْ يَلِدْ وَلَمْ يُولَدْ", translation: "Dia tiada beranak dan tidak pula diperanakkan", grammarNote: "Jazam + Fi'il ma'lum + Ma'thuf + Fi'il majhul.", analysis: "Jazam + Fi'il ma'lum + Ma'thuf + Fi'il majhul." }
        ]
      },
      {
        id: "l1_3_c30",
        wordAr: "رَبَّى",
        translation: "Mendidik/Membesarkan",
        category: "Kata Kerja Keluarga",
        description: "Merawat, mendidik, dan membesarkan anak dalam keluarga.",
        logicBox: "Bentuk mudhari-nya adalah يُرَبِّي.",
        examples: [
          { ar: "يُرَبِّي الْأَبُ أَبْنَاءَهُ", translation: "Ayah mendidik anak-anaknya", grammarNote: "Fi'il mudhari + Fa'il + Maf'ul bih.", analysis: "Fi'il mudhari + Fa'il + Maf'ul bih." },
          { ar: "تُرَبِّي الْأُمُّ بِنْتَهَا", translation: "Ibu membesarkan anak perempuannya", grammarNote: "Fi'il mudhari muannats + Fa'il + Maf'ul bih.", analysis: "Fi'il mudhari muannats + Fa'il + Maf'ul bih." },
          { ar: "رَبَّانِي أَبِي بِحُبٍّ", translation: "Ayahku mendidikku dengan cinta", grammarNote: "Fi'il madhi + Maf'ul bih (nun wiqayah+ya) + Fa'il + Syibhul Jumlah.", analysis: "Fi'il madhi + Maf'ul bih (nun wiqayah+ya) + Fa'il + Syibhul Jumlah." },
          { ar: "تَرْبِيَةُ الْأَوْلَادِ صَعْبَةٌ", translation: "Mendidik anak-anak itu sulit", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "رَبَّتْهُ جَدَّتُهُ", translation: "Neneknya membesarkannya", grammarNote: "Fi'il madhi muannats + Maf'ul bih + Fa'il.", analysis: "Fi'il madhi muannats + Maf'ul bih + Fa'il." },
          { ar: "يُرَبِّيَانِ أَطْفَالَهُمَا جَيِّدًا", translation: "Mereka berdua mendidik anak-anaknya dengan baik", grammarNote: "Fi'il mudhari mutsanna + Maf'ul bih + Keterangan.", analysis: "Fi'il mudhari mutsanna + Maf'ul bih + Keterangan." },
          { ar: "الْأُسْرَةُ تُرَبِّي الْأَجْيَالَ", translation: "Keluarga mendidik generasi-generasi", grammarNote: "Mubtada + Fi'il mudhari + Maf'ul bih.", analysis: "Mubtada + Fi'il mudhari + Maf'ul bih." },
          { ar: "رَبِّ اِرْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا", translation: "Ya Tuhanku, sayangilah keduanya sebagaimana mereka berdua mendidikku waktu kecil", grammarNote: "Doa Al-Quran (Surat Al-Isra).", analysis: "Doa Al-Quran (Surat Al-Isra)." },
          { ar: "تُرَبِّي أُمِّي أَخِي الصَّغِيرَ", translation: "Ibuku membesarkan adikku", grammarNote: "Fi'il mudhari + Fa'il + Maf'ul bih + Sifat.", analysis: "Fi'il mudhari + Fa'il + Maf'ul bih + Sifat." },
          { ar: "حُسْنُ التَّرْبِيَةِ وَاجِبٌ", translation: "Mendidik dengan baik adalah wajib", grammarNote: "Mubtada (idhafah) + Khabar.", analysis: "Mubtada (idhafah) + Khabar." }
        ]
      }
    ],
    grammarSection: {
      title: "Idhafah (Frasa Kepemilikan) & Kesesuaian Gender",
      description: "Dalam bahasa Arab, untuk menyatakan kepemilikan (seperti 'buku saya', 'rumah ayah'), kita menggunakan struktur Idhafah (الْإِضَافَةُ). Struktur ini terdiri dari dua bagian: Mudhaf (yang dimiliki) dan Mudhaf Ilayh (pemilik).",
      rules: [
        {
          rule: "Mudhaf (Yang Dimiliki)",
          explanation: "Kata pertama tidak boleh menggunakan 'Al' (ال) dan tidak boleh bertanwin."
        },
        {
          rule: "Mudhaf Ilayh (Pemilik)",
          explanation: "Kata kedua biasanya memiliki 'Al' (ال) (jika bukan nama orang/kata ganti) dan berharakat akhir kasrah (Majrur)."
        },
        {
          rule: "Idhafah dengan Dhamir (Kata Ganti)",
          explanation: "Jika pemiliknya adalah kata ganti (ku, mu, nya), dhamir tersebut langsung disambung di akhir kata (contoh: بَيْتٌ + ي = بَيْتِي)."
        },
        {
          rule: "Mudzakkar & Muannats",
          explanation: "Kata sifat (seperti كَبِيرٌ / كَبِيرَةٌ) harus menyesuaikan jenis kelamin (gender) dari kata benda yang disifatinya, bukan jenis kelamin pemiliknya."
        }
      ],
      examples: [
        {
          ar: "بَيْتُ الْجَدِّ",
          translation: "Rumah kakek",
          explanation: "بَيْتُ (Mudhaf, tanpa Al/tanwin) + الْجَدِّ (Mudhaf Ilayh, pakai Al dan kasrah)."
        },
        {
          ar: "أُسْرَتِي",
          translation: "Keluargaku",
          explanation: "أُسْرَة (Mudhaf) + ي (Dhamir muttashil 'ku')."
        },
        {
          ar: "أَخُوكَ",
          translation: "Saudara laki-lakimu (L)",
          explanation: "أَخُو (Mudhaf) + كَ (Dhamir muttashil 'mu L'). Perhatikan ada tambahan 'wawu' khusus untuk kata akhun/abun."
        },
        {
          ar: "عَمِّي كَبِيرٌ",
          translation: "Pamanku besar/tua",
          explanation: "عَمّ (mudzakkar) dipasangkan dengan كَبِيرٌ (sifat mudzakkar)."
        },
        {
          ar: "عَمَّتِي كَبِيرَةٌ",
          translation: "Bibiku besar/tua",
          explanation: "عَمَّة (muannats) dipasangkan dengan كَبِيرَةٌ (sifat muannats)."
        }
      ]
    },
    dialogueSection: {
      context: "Ahmad memperkenalkan keluarganya kepada Khalid saat mereka melihat album foto.",
      characters: ["Ahmad", "Khalid"],
      lines: [
        {
          speaker: "Khalid",
          ar: "مَنْ فِي هَذِهِ الصُّورَةِ يَا أَحْمَدُ؟",
          translation: "Siapa yang ada di foto ini wahai Ahmad?"
        },
        {
          speaker: "Ahmad",
          ar: "هَذِهِ أُسْرَتِي. هَذَا أَبِي، وَهَذِهِ أُمِّي.",
          translation: "Ini keluargaku. Ini ayahku, dan ini ibuku."
        },
        {
          speaker: "Khalid",
          ar: "مَا شَاءَ اللَّهُ. هَلْ هَذَا أَخُوكَ؟",
          translation: "Masya Allah. Apakah ini saudara laki-lakimu?"
        },
        {
          speaker: "Ahmad",
          ar: "نَعَمْ، هَذَا أَخِي الْكَبِيرُ. هُوَ مُدَرِّسٌ.",
          translation: "Ya, ini kakak laki-lakiku. Dia seorang guru."
        },
        {
          speaker: "Khalid",
          ar: "وَمَنْ هَذِهِ الْبِنْتُ الصَّغِيرَةُ؟",
          translation: "Dan siapa anak perempuan kecil ini?"
        },
        {
          speaker: "Ahmad",
          ar: "هَذِهِ أُخْتِي الصَّغِيرَةُ، هِيَ طَالِبَةٌ.",
          translation: "Ini adik perempuanku, dia seorang siswi."
        },
        {
          speaker: "Khalid",
          ar: "وَأَيْنَ جَدُّكَ وَجَدَّتُكَ؟",
          translation: "Dan di mana kakek dan nenekmu?"
        },
        {
          speaker: "Ahmad",
          ar: "هُمَا فِي هَذِهِ الصُّورَةِ مَعَ عَمِّي.",
          translation: "Mereka berdua di foto ini bersama pamanku."
        },
        {
          speaker: "Khalid",
          ar: "هَلْ عَمُّكَ يَسْكُنُ مَعَكُمْ؟",
          translation: "Apakah pamanmu tinggal bersama kalian?"
        },
        {
          speaker: "Ahmad",
          ar: "لَا، هُوَ مُتَزَوِّجٌ وَيَسْكُنُ فِي بَيْتِهِ.",
          translation: "Tidak, dia sudah menikah dan tinggal di rumahnya."
        },
        {
          speaker: "Khalid",
          ar: "أُسْرَةٌ جَمِيلَةٌ! بَارَكَ اللَّهُ فِيهَا.",
          translation: "Keluarga yang indah! Semoga Allah memberkahinya."
        },
        {
          speaker: "Ahmad",
          ar: "شُكْرًا يَا صَدِيقِي.",
          translation: "Terima kasih wahai temanku."
        }
      ]
    },
    quiz: [
      {
        id: "l1_3_q1",
        type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Ayah'?",
        options: ["أُمٌّ", "أَبٌ", "أَخٌ", "جَدٌّ"],
        correctAnswer: "أَبٌ",
        explanation: "أَبٌ berarti Ayah."
      },
      {
        id: "l1_3_q2",
        type: "multiple-choice",
        question: "Apa arti dari 'أُمٌّ'?",
        options: ["Ibu", "Nenek", "Saudara Perempuan", "Bibi"],
        correctAnswer: "Ibu",
        explanation: "أُمٌّ berarti Ibu."
      },
      {
        id: "l1_3_q3",
        type: "multiple-choice",
        question: "Kata manakah yang berarti 'Saudara Laki-laki'?",
        options: ["أُخْتٌ", "أَبٌ", "أَخٌ", "عَمٌّ"],
        correctAnswer: "أَخٌ",
        explanation: "أَخٌ berarti Saudara Laki-laki."
      },
      {
        id: "l1_3_q4",
        type: "multiple-choice",
        question: "Apa arti dari 'أُخْتٌ'?",
        options: ["Ibu", "Saudara Perempuan", "Anak Perempuan", "Bibi"],
        correctAnswer: "Saudara Perempuan",
        explanation: "أُخْتٌ berarti Saudara Perempuan."
      },
      {
        id: "l1_3_q5",
        type: "multiple-choice",
        question: "Bahasa Arab untuk 'Anak Laki-laki' adalah:",
        options: ["بِنْتٌ", "اِبْنٌ", "أَخٌ", "حَفِيدٌ"],
        correctAnswer: "اِبْنٌ",
        explanation: "اِبْنٌ berarti Anak Laki-laki."
      },
      {
        id: "l1_3_q6",
        type: "multiple-choice",
        question: "Apa arti dari kata 'بِنْتٌ'?",
        options: ["Ibu", "Istri", "Anak Perempuan", "Cucu Perempuan"],
        correctAnswer: "Anak Perempuan",
        explanation: "بِنْتٌ berarti Anak Perempuan atau Gadis."
      },
      {
        id: "l1_3_q7",
        type: "multiple-choice",
        question: "Kata 'زَوْجٌ' berarti...",
        options: ["Ayah", "Paman", "Kakek", "Suami"],
        correctAnswer: "Suami",
        explanation: "زَوْجٌ berarti Suami."
      },
      {
        id: "l1_3_q8",
        type: "multiple-choice",
        question: "Bahasa Arab untuk 'Istri' adalah:",
        options: ["أُمٌّ", "زَوْجَةٌ", "أُخْتٌ", "خَالَةٌ"],
        correctAnswer: "زَوْجَةٌ",
        explanation: "زَوْجَةٌ berarti Istri."
      },
      {
        id: "l1_3_q9",
        type: "multiple-choice",
        question: "Apa arti dari 'أُسْرَةٌ'?",
        options: ["Rumah", "Keluarga", "Desa", "Kota"],
        correctAnswer: "Keluarga",
        explanation: "أُسْرَةٌ berarti Keluarga."
      },
      {
        id: "l1_3_q10",
        type: "multiple-choice",
        question: "Kata manakah yang berarti 'Kakek'?",
        options: ["جَدٌّ", "عَمٌّ", "خَالٌ", "أَبٌ"],
        correctAnswer: "جَدٌّ",
        explanation: "جَدٌّ berarti Kakek."
      },
      {
        id: "l1_3_q11",
        type: "multiple-choice",
        question: "Apa arti dari 'جَدَّةٌ'?",
        options: ["Bibi", "Ibu", "Nenek", "Saudara Perempuan"],
        correctAnswer: "Nenek",
        explanation: "جَدَّةٌ berarti Nenek."
      },
      {
        id: "l1_3_q12",
        type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Paman (dari pihak ayah)'?",
        options: ["خَالٌ", "عَمٌّ", "أَخٌ", "جَدٌّ"],
        correctAnswer: "عَمٌّ",
        explanation: "عَمٌّ adalah paman dari pihak ayah."
      },
      {
        id: "l1_3_q13",
        type: "multiple-choice",
        question: "Kata 'خَالَةٌ' berarti...",
        options: ["Bibi (dari ayah)", "Bibi (dari ibu)", "Nenek", "Ibu"],
        correctAnswer: "Bibi (dari ibu)",
        explanation: "خَالَةٌ adalah saudara perempuan ibu (Bibi dari ibu)."
      },
      {
        id: "l1_3_q14",
        type: "multiple-choice",
        question: "Apa arti dari 'اِبْنُ الْعَمِّ'?",
        options: ["Cucu", "Paman", "Sepupu laki-laki (anak paman)", "Saudara laki-laki"],
        correctAnswer: "Sepupu laki-laki (anak paman)",
        explanation: "اِبْنُ الْعَمِّ secara harfiah berarti anak paman (sepupu)."
      },
      {
        id: "l1_3_q15",
        type: "multiple-choice",
        question: "Kata yang tepat untuk mendeskripsikan seseorang yang 'Tinggi' adalah:",
        options: ["قَصِيرٌ", "كَبِيرٌ", "طَوِيلٌ", "جَمِيلٌ"],
        correctAnswer: "طَوِيلٌ",
        explanation: "طَوِيلٌ berarti Tinggi."
      },
      {
        id: "l1_3_q16",
        type: "multiple-choice",
        question: "Lawan kata dari 'طَوِيلٌ' (Tinggi) adalah:",
        options: ["كَبِيرٌ", "صَغِيرٌ", "قَصِيرٌ", "جَمِيلٌ"],
        correctAnswer: "قَصِيرٌ",
        explanation: "قَصِيرٌ berarti Pendek."
      },
      {
        id: "l1_3_q17",
        type: "multiple-choice",
        question: "Kata sifat 'صَغِيرٌ' dapat diterjemahkan sebagai:",
        options: ["Besar", "Kecil/Muda", "Tinggi", "Tua"],
        correctAnswer: "Kecil/Muda",
        explanation: "صَغِيرٌ berarti Kecil atau Muda (adik)."
      },
      {
        id: "l1_3_q18",
        type: "multiple-choice",
        question: "Apa arti dari 'كَبِيرٌ'?",
        options: ["Kecil", "Besar/Tua", "Cantik", "Pendek"],
        correctAnswer: "Besar/Tua",
        explanation: "كَبِيرٌ berarti Besar atau Tua (kakak)."
      },
      {
        id: "l1_3_q19",
        type: "multiple-choice",
        question: "Kata kerja (fi'il) 'سَكَنَ' berarti:",
        options: ["Mencintai", "Menikah", "Melahirkan", "Tinggal"],
        correctAnswer: "Tinggal",
        explanation: "سَكَنَ (sakana) berarti tinggal atau menetap."
      },
      {
        id: "l1_3_q20",
        type: "multiple-choice",
        question: "Terjemahan dari kalimat 'أُحِبُّ أُسْرَتِي' adalah:",
        options: ["Aku tinggal di rumah", "Aku mencintai keluargaku", "Keluargaku besar", "Ini adalah keluargaku"],
        correctAnswer: "Aku mencintai keluargaku",
        explanation: "أُحِبُّ (aku mencintai) + أُسْرَتِي (keluargaku)."
      },
      {
        id: "l1_3_q21",
        type: "translate",
        question: "Terjemahkan ke bahasa Arab: 'Ini ayahku'",
        options: ["هَذَا أَخِي", "هَذِهِ أُمِّي", "هَذَا أَبِي", "هَذَا جَدِّي"],
        correctAnswer: "هَذَا أَبِي",
        explanation: "هَذَا (Ini - L) + أَبِي (ayahku)."
      },
      {
        id: "l1_3_q22",
        type: "translate",
        question: "Terjemahkan ke bahasa Indonesia: 'هَذِهِ أُمِّي'",
        options: ["Ini ayahku", "Ini nenekku", "Ini bibiku", "Ini ibuku"],
        correctAnswer: "Ini ibuku",
        explanation: "هَذِهِ (Ini - P) + أُمِّي (ibuku)."
      },
      {
        id: "l1_3_q23",
        type: "multiple-choice",
        question: "Manakah struktur Idhafah yang BENAR untuk 'Rumah Kakek'?",
        options: ["اَلْبَيْتُ الْجَدِّ", "بَيْتٌ جَدٌّ", "بَيْتُ الْجَدِّ", "اَلْبَيْتٌ الْجَدِّ"],
        correctAnswer: "بَيْتُ الْجَدِّ",
        explanation: "Mudhaf (بَيْتُ) tidak boleh beralif-lam/tanwin, dan Mudhaf Ilayh (الْجَدِّ) menggunakan alif-lam dan berharakat kasrah."
      },
      {
        id: "l1_3_q24",
        type: "multiple-choice",
        question: "Jika ingin mengatakan 'Saudara perempuanku', kata 'أُخْت' disambung dengan dhamir apa?",
        options: ["كَ", "هُ", "ي", "هَا"],
        correctAnswer: "ي",
        explanation: "Dhamir 'ي' (ya mutakallim) digunakan untuk menyatakan kepemilikan 'ku/saya', sehingga menjadi أُخْتِي."
      },
      {
        id: "l1_3_q25",
        type: "multiple-choice",
        question: "Kalimat manakah yang benar secara gramatikal?",
        options: ["عَمِّي كَبِيرَةٌ", "عَمَّتِي كَبِيرٌ", "عَمِّي كَبِيرٌ", "عَمِّي جَمِيلَةٌ"],
        correctAnswer: "عَمِّي كَبِيرٌ",
        explanation: "Kata benda mudzakkar (عَمِّي) harus diikuti kata sifat mudzakkar (كَبِيرٌ)."
      },
      {
        id: "l1_3_q26",
        type: "multiple-choice",
        question: "Kalimat manakah yang benar secara gramatikal untuk muannats?",
        options: ["أُخْتِي قَصِيرٌ", "جَدَّتِي صَغِيرَةٌ", "أُمِّي طَوِيلٌ", "بِنْتِي كَبِيرٌ"],
        correctAnswer: "جَدَّتِي صَغِيرَةٌ",
        explanation: "جَدَّتِي (muannats) harus dipasangkan dengan kata sifat muannats صَغِيرَةٌ."
      },
      {
        id: "l1_3_q27",
        type: "translate",
        question: "Berdasarkan dialog, apa pekerjaan kakak laki-laki Ahmad (أَخِي الْكَبِيرُ)?",
        options: ["طَالِبٌ (Pelajar)", "مُدَرِّسٌ (Guru)", "طَبِيبٌ (Dokter)", "تَاجِرٌ (Pedagang)"],
        correctAnswer: "مُدَرِّسٌ (Guru)",
        explanation: "Dalam dialog, Ahmad mengatakan 'هُوَ مُدَرِّسٌ' (Dia seorang guru)."
      },
      {
        id: "l1_3_q28",
        type: "translate",
        question: "Terjemahkan: 'هَلْ هَذَا أَخُوكَ؟'",
        options: ["Apakah ini ayahmu?", "Apakah ini pamanmu?", "Apakah ini temanmu?", "Apakah ini saudara laki-lakimu?"],
        correctAnswer: "Apakah ini saudara laki-lakimu?",
        explanation: "هَلْ (Apakah) + هَذَا (ini) + أَخُوكَ (saudara laki-lakimu)."
      },
      {
        id: "l1_3_q29",
        type: "multiple-choice",
        question: "Apa bentuk jamak dari 'أُسْرَةٌ' (Keluarga)? (Pengetahuan tambahan)",
        options: ["أُسَرَاتٌ", "أُسَرٌ", "أَسَارِيرُ", "أَسْرَى"],
        correctAnswer: "أُسَرٌ",
        explanation: "Jamak dari أُسْرَةٌ adalah أُسَرٌ."
      },
      {
        id: "l1_3_q30",
        type: "multiple-choice",
        question: "Lengkapi kalimat berikut: '_____ أَسْكُنُ مَعَ أُسْرَتِي' (Saya tinggal bersama keluargaku).",
        options: ["أَنْتَ", "هُوَ", "أَنَا", "هِيَ"],
        correctAnswer: "أَنَا",
        explanation: "أَنَا (Saya) adalah dhamir yang tepat untuk fi'il أَسْكُنُ yang diawali huruf alif/hamzah."
      }
    ]
  }
};
