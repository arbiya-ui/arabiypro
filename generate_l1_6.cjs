const fs = require('fs');

const cardsData = [
  {
    id: "l1_6_c1", wordAr: "طَعَامٌ", translation: "Makanan", category: "Makanan Pokok",
    description: "Makanan secara umum.", logicBox: "Isim Nakirah. Jika Ma'rifah menjadi الطَّعَامُ (dengan AL, tanpa tanwin). Jamaknya أَطْعِمَةٌ.",
    examples: [
      ["هَذَا طَعَامٌ لَذِيذٌ", "Ini makanan yang lezat", "Mubtada + Khabar + Sifat"],
      ["أَكَلْتُ الطَّعَامَ", "Saya telah memakan makanan itu", "Fi'il Madhi-Fa'il + Maf'ul bih (Ma'rifah)"],
      ["أَيْنَ الطَّعَامُ؟", "Di mana makanan itu?", "Tanya + Mubtada"],
      ["طَعَامُ الْعَشَاءِ", "Makanan malam (Makan malam)", "Mudhaf + Mudhaf ilayh"],
      ["نَحْتَاجُ إِلَى طَعَامٍ", "Kami membutuhkan makanan", "Fi'il-Fa'il + Huruf Jar + Isim Majrur (Nakirah)"],
      ["هَلْ طَبَخْتِ الطَّعَامَ؟", "Apakah kamu (pr) telah memasak makanan itu?", "Tanya + Fi'il Madhi-Fa'il + Maf'ul bih"],
      ["الطَّعَامُ جَاهِزٌ", "Makanan itu sudah siap", "Mubtada + Khabar"],
      ["يُحِبُّ الطَّعَامَ الْحَارَّ", "Dia menyukai makanan yang pedas", "Fi'il-Fa'il + Maf'ul bih + Sifat"],
      ["طَعَامٌ كَثِيرٌ", "Makanan yang banyak", "Mubtada/Khabar + Sifat"],
      ["شُكْرًا عَلَى الطَّعَامِ", "Terima kasih atas makanannya", "Maf'ul muthlaq + Syibhul Jumlah"]
    ]
  },
  {
    id: "l1_6_c2", wordAr: "خُبْزٌ", translation: "Roti", category: "Makanan Pokok",
    description: "Makanan pokok dari tepung.", logicBox: "Isim Nakirah. Ma'rifah: الْخُبْزُ (Al Qamariyyah). Jamaknya أَخْبَازٌ.",
    examples: [
      ["آكُلُ خُبْزًا", "Saya makan roti (sebuah roti/tidak tentu)", "Fi'il Mudhari-Fa'il + Maf'ul bih (Nakirah)"],
      ["الْخُبْزُ طَازَجٌ", "Roti itu segar", "Mubtada (Ma'rifah) + Khabar"],
      ["اِشْتَرَيْتُ الْخُبْزَ", "Saya telah membeli roti itu", "Fi'il Madhi-Fa'il + Maf'ul bih"],
      ["أَيْنَ أَبِيعُ الْخُبْزَ؟", "Di mana saya menjual roti?", "Tanya + Fi'il-Fa'il + Maf'ul bih"],
      ["خُبْزٌ بَارِدٌ", "Roti yang dingin", "Nakirah + Sifat"],
      ["أُرِيدُ خُبْزًا مِنْ فَضْلِكَ", "Saya ingin roti tolong", "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah"],
      ["قَطَعَ الْخُبْزَ بِالسِّكِّينِ", "Dia memotong roti dengan pisau", "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah"],
      ["صَنَعَتْ أُمِّي الْخُبْزَ", "Ibuku membuat roti itu", "Fi'il Madhi + Fa'il + Maf'ul bih"],
      ["ثَمَنُ الْخُبْزِ رَخِيصٌ", "Harga roti itu murah", "Mubtada (idhafah) + Khabar"],
      ["خُبْزٌ بِالزُّبْدَةِ", "Roti dengan mentega", "Isim Nakirah + Syibhul Jumlah"]
    ]
  },
  {
    id: "l1_6_c3", wordAr: "أَرُزٌّ", translation: "Nasi/Beras", category: "Makanan Pokok",
    description: "Makanan pokok Asia.", logicBox: "Isim Nakirah. Ma'rifah: الْأَرُزُّ (Al Qamariyyah).",
    examples: [
      ["نَأْكُلُ الْأَرُزَّ كُلَّ يَوْمٍ", "Kami makan nasi setiap hari", "Fi'il-Fa'il + Maf'ul bih + Zharaf"],
      ["أَرُزٌّ مَطْبُوخٌ", "Nasi yang dimasak", "Nakirah + Sifat"],
      ["الْأَرُزُّ أَبْيَضُ", "Beras itu putih", "Mubtada (Ma'rifah) + Khabar"],
      ["طَبَخْتُ الْأَرُزَّ", "Saya memasak nasi", "Fi'il Madhi-Fa'il + Maf'ul bih"],
      ["هَلْ تُرِيدُ أَرُزًّا؟", "Apakah kamu mau nasi?", "Tanya + Fi'il-Fa'il + Maf'ul bih (Nakirah)"],
      ["أَرُزٌّ مَعَ اللَّحْمِ", "Nasi bersama daging", "Isim + Zharaf + Mudhaf ilayh"],
      ["صَحْنُ الْأَرُزِّ", "Sepiring nasi", "Mudhaf + Mudhaf ilayh (Ma'rifah)"],
      ["زَرَعَ الْفَلَّاحُ الْأَرُزَّ", "Petani menanam padi/beras", "Fi'il Madhi + Fa'il + Maf'ul bih"],
      ["الْأَرُزُّ لَذِيذٌ جِدًّا", "Nasi itu sangat enak", "Mubtada + Khabar + Maf'ul muthlaq"],
      ["كِيلُو أَرُزٍّ", "Satu kilo beras", "Mudhaf + Mudhaf ilayh (Nakirah)"]
    ]
  },
  {
    id: "l1_6_c4", wordAr: "لَحْمٌ", translation: "Daging", category: "Makanan Pokok",
    description: "Daging merah.", logicBox: "Isim Nakirah. Ma'rifah: اللَّحْمُ (Al Syamsiyyah). Jamaknya لُحُومٌ.",
    examples: [
      ["أُحِبُّ اللَّحْمَ الْمَشْوِيَّ", "Saya suka daging bakar itu", "Fi'il-Fa'il + Maf'ul bih (Ma'rifah) + Sifat"],
      ["هَذَا لَحْمٌ حَلَالٌ", "Ini daging halal", "Mubtada + Khabar (Nakirah) + Sifat"],
      ["لَحْمُ الْبَقَرِ غَالٍ", "Daging sapi itu mahal", "Mubtada (idhafah) + Khabar"],
      ["لَا آكُلُ اللَّحْمَ", "Saya tidak makan daging", "Nafi + Fi'il-Fa'il + Maf'ul bih"],
      ["قَطَّعَ اللَّحْمَ بِسُرْعَةٍ", "Dia memotong daging dengan cepat", "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah"],
      ["أُرِيدُ كِيلُو لَحْمٍ", "Saya mau sekilo daging", "Fi'il-Fa'il + Maf'ul bih (Mudhaf) + Mudhaf ilayh"],
      ["اللَّحْمُ طَازَجٌ", "Daging itu segar", "Mubtada (Ma'rifah) + Khabar"],
      ["طَبَخْنَا لَحْمًا مُبَهَّرًا", "Kami memasak daging berbumbu", "Fi'il Madhi-Fa'il + Maf'ul bih (Nakirah) + Sifat"],
      ["حَسَاءُ اللَّحْمِ لَذِيذٌ", "Sup daging itu lezat", "Mubtada (idhafah) + Khabar"],
      ["سِعْرُ اللَّحْمِ مُرْتَفِعٌ", "Harga daging itu tinggi", "Mubtada (idhafah) + Khabar"]
    ]
  },
  {
    id: "l1_6_c5", wordAr: "سَمَكٌ", translation: "Ikan", category: "Makanan Pokok",
    description: "Ikan. Daging ikan laut atau tawar.", logicBox: "Isim Nakirah. Ma'rifah: السَّمَكُ (Al Syamsiyyah). Jamaknya أَسْمَاكٌ.",
    examples: [
      ["أَكَلْتُ سَمَكًا", "Saya makan seekor ikan (tidak tentu)", "Fi'il Madhi-Fa'il + Maf'ul bih (Nakirah)"],
      ["السَّمَكُ مُفِيدٌ", "Ikan itu bermanfaat", "Mubtada (Ma'rifah) + Khabar"],
      ["اِصْطَادَ السَّمَكَةَ", "Dia memancing ikan itu (muannats)", "Fi'il Madhi + Maf'ul bih (Ma'rifah)"],
      ["أُحِبُّ السَّمَكَ الْمَقْلِيَّ", "Saya suka ikan goreng", "Fi'il-Fa'il + Maf'ul bih + Sifat"],
      ["هَلْ هَذَا سَمَكٌ؟", "Apakah ini ikan?", "Tanya + Mubtada + Khabar (Nakirah)"],
      ["اِشْتَرَيْتُ السَّمَكَ مِنَ السُّوقِ", "Saya membeli ikan dari pasar", "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah"],
      ["سَمَكَةٌ كَبِيرَةٌ", "Seekor ikan yang besar", "Nakirah + Sifat"],
      ["سَمَكُ الْبَحْرِ مَالِحٌ", "Ikan laut itu asin", "Mubtada (idhafah) + Khabar"],
      ["نَتَنَاوَلُ السَّمَكَ غَدًا", "Kami menyantap ikan besok", "Fi'il Mudhari-Fa'il + Maf'ul bih + Zharaf Zaman"],
      ["لَحْمُ السَّمَكِ أَبْيَضُ", "Daging ikan itu putih", "Mubtada (idhafah) + Khabar"]
    ]
  },
  {
    id: "l1_6_c6", wordAr: "دَجَاجٌ", translation: "Ayam", category: "Makanan Pokok",
    description: "Daging ayam.", logicBox: "Isim Nakirah. Ma'rifah: الدَّجَاجُ (Al Syamsiyyah). Bentuk mufrad muannats: دَجَاجَةٌ (ayam betina/seekor ayam).",
    examples: [
      ["طَبَخَتْ أُمِّي دَجَاجَةً", "Ibuku memasak seekor ayam", "Fi'il Madhi + Fa'il + Maf'ul bih (Nakirah)"],
      ["الدَّجَاجُ غَالٍ الْيَوْمَ", "Ayam mahal hari ini", "Mubtada (Ma'rifah) + Khabar + Zharaf Zaman"],
      ["أُرِيدُ دَجَاجًا مَشْوِيًّا", "Saya ingin ayam bakar", "Fi'il-Fa'il + Maf'ul bih (Nakirah) + Sifat"],
      ["هَذَا لَحْمُ دَجَاجٍ", "Ini daging ayam", "Mubtada + Khabar (idhafah)"],
      ["أَكَلْتُ الدَّجَاجَ", "Saya makan ayam itu", "Fi'il Madhi-Fa'il + Maf'ul bih (Ma'rifah)"],
      ["شُورْبَةُ الدَّجَاجِ", "Sup ayam", "Mudhaf + Mudhaf ilayh (Ma'rifah)"],
      ["دَجَاجَةٌ صَغِيرَةٌ", "Seekor ayam kecil", "Nakirah + Sifat"],
      ["هَلْ تُحِبُّ الدَّجَاجَ؟", "Apakah kamu suka ayam?", "Tanya + Fi'il-Fa'il + Maf'ul bih"],
      ["اِشْتَرَى دَجَاجًا مِنَ السُّوقِ", "Dia membeli ayam dari pasar", "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah"],
      ["الدَّجَاجُ الْمَقْلِيُّ لَذِيذٌ", "Ayam goreng itu lezat", "Mubtada + Sifat + Khabar"]
    ]
  },
  {
    id: "l1_6_c7", wordAr: "بَيْضٌ", translation: "Telur", category: "Makanan Pokok",
    description: "Telur.", logicBox: "Isim Nakirah. Ma'rifah: الْبَيْضُ (Al Qamariyyah). Mufradnya: بَيْضَةٌ (sebutir telur).",
    examples: [
      ["أَفْطَرْتُ بِالْبَيْضِ", "Saya sarapan dengan telur", "Fi'il Madhi-Fa'il + Syibhul Jumlah (Ma'rifah)"],
      ["هَذِهِ بَيْضَةٌ كَبِيرَةٌ", "Ini sebutir telur yang besar", "Mubtada + Khabar (Nakirah) + Sifat"],
      ["أَكَلْتُ بَيْضَتَيْنِ", "Saya makan dua butir telur", "Fi'il Madhi-Fa'il + Maf'ul bih (Mutsanna)"],
      ["الْبَيْضُ مُفِيدٌ", "Telur itu bermanfaat", "Mubtada (Ma'rifah) + Khabar"],
      ["أُرِيدُ بَيْضًا مَقْلِيًّا", "Saya mau telur dadar/ceplok", "Fi'il-Fa'il + Maf'ul bih (Nakirah) + Sifat"],
      ["سَلَقَتِ الْبَيْضَ", "Dia (pr) merebus telur", "Fi'il Madhi + Maf'ul bih (Ma'rifah)"],
      ["بَيْضَةٌ مَسْلُوقَةٌ", "Telur rebus", "Nakirah + Sifat"],
      ["كَمْ بَيْضَةً فِي الثَّلَّاجَةِ؟", "Berapa telur di kulkas?", "Tanya + Tamyiz + Syibhul Jumlah"],
      ["سِعْرُ الْبَيْضِ مُرْتَفِعٌ", "Harga telur naik", "Mubtada (idhafah) + Khabar"],
      ["خَلَطَ الدَّقِيقَ وَالْبَيْضَ", "Dia mencampur tepung dan telur", "Fi'il Madhi + Maf'ul bih + Ma'thuf"]
    ]
  },
  {
    id: "l1_6_c8", wordAr: "خُضْرَةٌ", translation: "Sayuran", category: "Makanan Pokok",
    description: "Sayur-mayur hijau.", logicBox: "Isim Nakirah. Ma'rifah: الْخُضْرَةُ. Jamaknya خُضْرَوَاتٌ.",
    examples: [
      ["أُحِبُّ الْخُضْرَوَاتِ", "Saya suka sayuran", "Fi'il-Fa'il + Maf'ul bih (Jamak Muannats Salim)"],
      ["الْخُضْرَةُ طَازَجَةٌ", "Sayuran itu segar", "Mubtada + Khabar"],
      ["طَبَخَتْ حَسَاءَ الْخُضْرَةِ", "Dia (pr) memasak sup sayuran", "Fi'il Madhi + Maf'ul bih (idhafah)"],
      ["هَذِهِ خُضْرَةٌ مُفِيدَةٌ", "Ini sayuran yang bermanfaat", "Mubtada + Khabar (Nakirah) + Sifat"],
      ["نَأْكُلُ خُضْرَوَاتٍ كَثِيرَةً", "Kami makan banyak sayuran", "Fi'il-Fa'il + Maf'ul bih (Nakirah) + Sifat"],
      ["السَّلَطَةُ مِنَ الْخُضْرَوَاتِ", "Salad terbuat dari sayur-sayuran", "Mubtada + Syibhul Jumlah"],
      ["اِشْتَرَيْتُ خُضْرَةً مِنَ السُّوقِ", "Saya membeli sayuran dari pasar", "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah"],
      ["الْخُضْرَوَاتُ رَخِيصَةٌ الْيَوْمَ", "Sayuran murah hari ini", "Mubtada (Ma'rifah) + Khabar + Zharaf Zaman"],
      ["طَعَامٌ مَلِيءٌ بِالْخُضْرَةِ", "Makanan yang penuh dengan sayuran", "Nakirah + Sifat + Syibhul Jumlah"],
      ["يَجِبُ غَسْلُ الْخُضْرَوَاتِ", "Wajib mencuci sayuran", "Fi'il Mudhari + Fa'il (idhafah)"]
    ]
  },
  {
    id: "l1_6_c9", wordAr: "فَاكِهَةٌ", translation: "Buah-buahan", category: "Makanan Pokok",
    description: "Buah-buahan segar.", logicBox: "Isim Nakirah, Muannats. Ma'rifah: الْفَاكِهَةُ. Jamaknya فَوَاكِهُ (ghairu munsharif).",
    examples: [
      ["هَذِهِ فَاكِهَةٌ لَذِيذَةٌ", "Ini buah yang lezat", "Mubtada + Khabar (Nakirah) + Sifat"],
      ["الْفَوَاكِهُ مُفِيدَةٌ لِلْجِسْمِ", "Buah-buahan bermanfaat untuk tubuh", "Mubtada (Ma'rifah) + Khabar + Syibhul Jumlah"],
      ["أَكَلْتُ فَاكِهَةً بَعْدَ الطَّعَامِ", "Saya makan sebuah buah setelah makan", "Fi'il Madhi-Fa'il + Maf'ul bih + Zharaf"],
      ["أُحِبُّ الْفَوَاكِهَ جَمِيعًا", "Saya menyukai semua buah-buahan", "Fi'il-Fa'il + Maf'ul bih + Hal"],
      ["مَا هِيَ فَاكِهَتُكَ الْمُفَضَّلَةُ؟", "Apa buah kesukaanmu?", "Tanya + Mubtada + Khabar (idhafah) + Sifat"],
      ["عَصِيرُ الْفَوَاكِهِ الطَّازَجَةِ", "Jus buah-buahan segar", "Mudhaf + Mudhaf ilayh + Sifat"],
      ["فِي الْحَدِيقَةِ أَشْجَارُ فَاكِهَةٍ", "Di taman ada pohon-pohon buah", "Khabar Muqaddam + Mubtada Muakhkhar (idhafah Nakirah)"],
      ["الْفَاكِهَةُ نَاضِجَةٌ", "Buah itu matang", "Mubtada + Khabar"],
      ["تَشْتَرِي الْفَاكِهَةَ مِنَ السُّوقِ", "Dia (pr) membeli buah dari pasar", "Fi'il Mudhari + Maf'ul bih + Syibhul Jumlah"],
      ["تُفَّاحَةٌ فَاكِهَةٌ جَمِيلَةٌ", "Apel adalah buah yang indah", "Mubtada + Khabar + Sifat"]
    ]
  },
  {
    id: "l1_6_c10", wordAr: "حَلِيبٌ", translation: "Susu", category: "Makanan Pokok",
    description: "Susu murni.", logicBox: "Isim Nakirah. Ma'rifah: الْحَلِيبُ. Sering dianggap sama dengan لَبَنٌ di beberapa dialek, tapi حَلِيبٌ pasti susu segar.",
    examples: [
      ["أَشْرَبُ حَلِيبًا", "Saya minum susu (segas susu/tidak tentu)", "Fi'il Mudhari-Fa'il + Maf'ul bih (Nakirah)"],
      ["الْحَلِيبُ سَاخِنٌ", "Susu itu panas", "Mubtada (Ma'rifah) + Khabar"],
      ["شَرِبَ الطِّفْلُ الْحَلِيبَ", "Anak itu telah meminum susu", "Fi'il Madhi + Fa'il + Maf'ul bih (Ma'rifah)"],
      ["كُوبٌ مِنْ حَلِيبٍ", "Segelas susu", "Nakirah + Syibhul Jumlah (Keterangan)"],
      ["هَلْ هَذَا حَلِيبُ بَقَرٍ؟", "Apakah ini susu sapi?", "Tanya + Mubtada + Khabar (idhafah Nakirah)"],
      ["حَلِيبٌ طَازَجٌ", "Susu segar", "Nakirah + Sifat"],
      ["أُضِيفُ الْحَلِيبَ إِلَى الْقَهْوَةِ", "Saya menambahkan susu ke dalam kopi", "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah"],
      ["يَشْرَبُونَ الْحَلِيبَ كُلَّ صَبَاحٍ", "Mereka meminum susu setiap pagi", "Fi'il-Fa'il + Maf'ul bih + Zharaf"],
      ["الْحَلِيبُ مَلِيءٌ بِالْكَالْسِيُومِ", "Susu penuh dengan kalsium", "Mubtada + Khabar + Syibhul Jumlah"],
      ["هَاتِ كُوبَ الْحَلِيبِ", "Berikan segelas susu itu", "Fi'il Amr + Maf'ul bih (idhafah)"]
    ]
  },
  {
    id: "l1_6_c11", wordAr: "مَاءٌ", translation: "Air", category: "Minuman",
    description: "Air putih/mineral.", logicBox: "Isim Nakirah. Ma'rifah: الْمَاءُ (Al Qamariyyah). Jamaknya مِيَاهٌ.",
    examples: [
      ["أُرِيدُ مَاءً بَارِدًا", "Saya ingin air dingin", "Fi'il-Fa'il + Maf'ul bih (Nakirah) + Sifat"],
      ["الْمَاءُ صَافٍ", "Air itu jernih", "Mubtada (Ma'rifah) + Khabar"],
      ["شَرِبْتُ الْمَاءَ", "Saya telah meminum air itu", "Fi'il Madhi-Fa'il + Maf'ul bih (Ma'rifah)"],
      ["الْمَاءُ سِرُّ الْحَيَاةِ", "Air adalah rahasia kehidupan", "Mubtada + Khabar (idhafah)"],
      ["هَلْ عِنْدَكَ مَاءٌ؟", "Apakah kamu punya air?", "Tanya + Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar"],
      ["كَأْسُ مَاءٍ مِنْ فَضْلِكَ", "Segelas air tolong", "Mudhaf + Mudhaf ilayh (Nakirah) + Syibhul Jumlah"],
      ["الْمَاءُ يَغْلِي", "Air itu mendidih", "Mubtada + Jumlah Fi'liyyah (Khabar)"],
      ["نَحْرِصُ عَلَى الْمِيَاهِ النَّظِيفَةِ", "Kami menjaga air yang bersih", "Fi'il-Fa'il + Syibhul Jumlah + Sifat"],
      ["مَاءُ الْبَحْرِ مَالِحٌ", "Air laut itu asin", "Mubtada (idhafah) + Khabar"],
      ["اسْقِنِي مَاءً", "Berilah aku minum air", "Fi'il Amr-Maf'ul bih 1 + Maf'ul bih 2"]
    ]
  },
  {
    id: "l1_6_c12", wordAr: "شَايٌ", translation: "Teh", category: "Minuman",
    description: "Minuman teh.", logicBox: "Isim Nakirah. Ma'rifah: الشَّايُ (Al Syamsiyyah).",
    examples: [
      ["أُحِبُّ الشَّايَ", "Saya suka teh", "Fi'il-Fa'il + Maf'ul bih (Ma'rifah)"],
      ["الشَّايُ حَارٌّ", "Teh itu panas", "Mubtada (Ma'rifah) + Khabar"],
      ["هَلْ تَشْرَبُ شَايًا؟", "Apakah kamu minum (segelas) teh?", "Tanya + Fi'il-Fa'il + Maf'ul bih (Nakirah)"],
      ["شَايٌ بِالنَّعْنَاعِ", "Teh dengan mint", "Nakirah + Syibhul Jumlah"],
      ["أَعْدَدْتُ الشَّايَ لِلضُّيُوفِ", "Saya menyiapkan teh untuk tamu", "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah"],
      ["الشَّايُ الْأَخْضَرُ مُفِيدٌ", "Teh hijau bermanfaat", "Mubtada + Sifat + Khabar"],
      ["أُرِيدُ كُوبَ شَايٍ", "Saya ingin secangkir teh", "Fi'il-Fa'il + Maf'ul bih (idhafah Nakirah)"],
      ["يَشْرَبُ الشَّايَ بَعْدَ الْعَصْرِ", "Dia meminum teh setelah ashar", "Fi'il-Fa'il + Maf'ul bih + Zharaf"],
      ["الشَّايُ حُلْوٌ جِدًّا", "Teh ini manis sekali", "Mubtada + Khabar + Maf'ul muthlaq"],
      ["طَلَبْتُ شَايًا مُثَلَّجًا", "Saya memesan teh es", "Fi'il Madhi-Fa'il + Maf'ul bih + Sifat"]
    ]
  },
  {
    id: "l1_6_c13", wordAr: "قَهْوَةٌ", translation: "Kopi", category: "Minuman",
    description: "Minuman kopi.", logicBox: "Isim Nakirah, Muannats. Ma'rifah: الْقَهْوَةُ. Jamaknya قَهَوَاتٌ.",
    examples: [
      ["أَشْرَبُ قَهْوَةً فِي الصَّبَاحِ", "Saya minum secangkir kopi di pagi hari", "Fi'il Mudhari-Fa'il + Maf'ul bih (Nakirah) + Syibhul Jumlah"],
      ["الْقَهْوَةُ مُرَّةٌ", "Kopi itu pahit", "Mubtada (Ma'rifah) + Khabar"],
      ["فِنْجَانُ قَهْوَةٍ مِنْ فَضْلِكَ", "Secangkir kopi tolong", "Mudhaf + Mudhaf ilayh (Nakirah) + Syibhul Jumlah"],
      ["هَلْ تُحِبُّ الْقَهْوَةَ؟", "Apakah kamu suka kopi?", "Tanya + Fi'il-Fa'il + Maf'ul bih"],
      ["قَهْوَةٌ بِالْحَلِيبِ", "Kopi dengan susu", "Nakirah + Syibhul Jumlah"],
      ["صَنَعَتِ الْقَهْوَةَ الْعَرَبِيَّةَ", "Dia (pr) membuat kopi Arab", "Fi'il Madhi + Maf'ul bih + Sifat"],
      ["الْقَهْوَةُ جَاهِزَةٌ", "Kopi sudah siap", "Mubtada + Khabar"],
      ["رَائِحَةُ الْقَهْوَةِ جَمِيلَةٌ", "Aroma kopi itu enak", "Mubtada (idhafah) + Khabar"],
      ["شَرِبْتُ قَهْوَةً سَاخِنَةً", "Saya minum kopi panas", "Fi'il Madhi-Fa'il + Maf'ul bih + Sifat"],
      ["الْقَهْوَةُ السَّوْدَاءُ مُنَبِّهَةٌ", "Kopi hitam menyegarkan", "Mubtada + Sifat + Khabar"]
    ]
  },
  {
    id: "l1_6_c14", wordAr: "عَصِيرٌ", translation: "Jus", category: "Minuman",
    description: "Jus buah-buahan.", logicBox: "Isim Nakirah. Ma'rifah: الْعَصِيرُ. Jamaknya عَصَائِرُ.",
    examples: [
      ["عَصِيرُ بُرْتُقَالٍ", "Jus jeruk", "Mudhaf + Mudhaf ilayh (Nakirah)"],
      ["الْعَصِيرُ بَارِدٌ", "Jus itu dingin", "Mubtada (Ma'rifah) + Khabar"],
      ["طَلَبْتُ عَصِيرًا", "Saya memesan segelas jus", "Fi'il Madhi-Fa'il + Maf'ul bih (Nakirah)"],
      ["هَلْ عِنْدَكُمْ عَصِيرُ تُفَّاحٍ؟", "Apakah kalian punya jus apel?", "Tanya + Khabar Muqaddam + Mubtada (idhafah)"],
      ["أَشْرَبُ الْعَصِيرَ مَعَ الطَّعَامِ", "Saya minum jus bersama makanan", "Fi'il Mudhari-Fa'il + Maf'ul bih + Zharaf"],
      ["عَصِيرٌ طَازَجٌ", "Jus segar", "Nakirah + Sifat"],
      ["الْعَصِيرُ حُلْوٌ جِدًّا", "Jus itu sangat manis", "Mubtada + Khabar + Maf'ul muthlaq"],
      ["أُفَضِّلُ عَصِيرَ الْمَانْجُو", "Saya lebih suka jus mangga", "Fi'il Mudhari-Fa'il + Maf'ul bih (idhafah)"],
      ["هَذَا عَصِيرٌ لَذِيذٌ", "Ini jus yang lezat", "Mubtada + Khabar (Nakirah) + Sifat"],
      ["سَكَبَ الْعَصِيرَ فِي الْكُوبِ", "Dia menuangkan jus ke dalam gelas", "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah"]
    ]
  },
  {
    id: "l1_6_c15", wordAr: "لَبَنٌ", translation: "Susu/Yoghurt", category: "Minuman",
    description: "Susu atau yoghurt (tergantung dialek).", logicBox: "Isim Nakirah. Ma'rifah: اللَّبَنُ (Al Syamsiyyah).",
    examples: [
      ["لَبَنٌ طَازَجٌ", "Susu/Yoghurt segar", "Nakirah + Sifat"],
      ["أَشْرَبُ اللَّبَنَ", "Saya meminum susu itu", "Fi'il Mudhari-Fa'il + Maf'ul bih (Ma'rifah)"],
      ["هَذَا لَبَنٌ بَارِدٌ", "Ini yoghurt yang dingin", "Mubtada + Khabar (Nakirah) + Sifat"],
      ["اللَّبَنُ مُفِيدٌ لِلْمَعِدَةِ", "Yoghurt bermanfaat untuk perut", "Mubtada + Khabar + Syibhul Jumlah"],
      ["طَلَبْتُ كُوبَ لَبَنٍ", "Saya memesan segelas yoghurt", "Fi'il Madhi-Fa'il + Maf'ul bih (idhafah)"],
      ["لَبَنٌ بِالنَّعْنَاعِ", "Yoghurt dengan mint (minuman khas)", "Nakirah + Syibhul Jumlah"],
      ["الْتَقَيْنَا عَلَى كُوبِ لَبَنٍ", "Kami bertemu sambil minum segelas susu", "Fi'il Madhi-Fa'il + Syibhul Jumlah"],
      ["اللَّبَنُ جَاهِزٌ", "Susu sudah siap", "Mubtada + Khabar"],
      ["أُحِبُّ اللَّبَنَ فِي الصَّبَاحِ", "Saya suka susu di pagi hari", "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah"],
      ["اِشْتَرَى زُجَاجَةَ لَبَنٍ", "Dia membeli sebotol susu", "Fi'il Madhi + Maf'ul bih (idhafah)"]
    ]
  },
  {
    id: "l1_6_c16", wordAr: "مَطْعَمٌ", translation: "Restoran", category: "Di Restoran",
    description: "Tempat makan. Isim makan dari أَكَلَ (asal wazan طَعِمَ).", logicBox: "Isim Nakirah. Ma'rifah: الْمَطْعَمُ (Al Qamariyyah). Jamaknya مَطَاعِمُ.",
    examples: [
      ["نَذْهَبُ إِلَى مَطْعَمٍ", "Kami pergi ke sebuah restoran", "Fi'il-Fa'il + Syibhul Jumlah (Nakirah)"],
      ["الْمَطْعَمُ مَفْتُوحٌ", "Restoran itu buka", "Mubtada (Ma'rifah) + Khabar"],
      ["هَذَا مَطْعَمٌ كَبِيرٌ", "Ini restoran yang besar", "Mubtada + Khabar (Nakirah) + Sifat"],
      ["مَطْعَمُ الْجَامِعَةِ", "Kantin universitas", "Mudhaf + Mudhaf ilayh (Ma'rifah)"],
      ["تَنَاوَلْنَا الْعَشَاءَ فِي الْمَطْعَمِ", "Kami makan malam di restoran", "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah"],
      ["الْمَطَاعِمُ مُزْدَحِمَةٌ", "Restoran-restoran sedang ramai", "Mubtada (Jamak) + Khabar (Mufrad Muannats)"],
      ["مَطْعَمٌ شَعْبِيٌّ", "Restoran tradisional/rakyat", "Nakirah + Sifat"],
      ["أَيْنَ أَقْرَبُ مَطْعَمٍ؟", "Di mana restoran terdekat?", "Tanya + Khabar Muqaddam + Mubtada (idhafah)"],
      ["صَاحِبُ الْمَطْعَمِ مُحْتَرَمٌ", "Pemilik restoran itu terhormat", "Mubtada (idhafah) + Khabar"],
      ["اِفْتَتَحَ مَطْعَمًا جَدِيدًا", "Dia membuka restoran baru", "Fi'il Madhi + Maf'ul bih (Nakirah) + Sifat"]
    ]
  },
  {
    id: "l1_6_c17", wordAr: "مَائِدَةٌ", translation: "Meja Makan", category: "Di Restoran",
    description: "Meja yang di atasnya ada makanan.", logicBox: "Isim Nakirah, Muannats. Ma'rifah: الْمَائِدَةُ. Jamaknya مَوَائِدُ.",
    examples: [
      ["جَلَسْنَا حَوْلَ مَائِدَةٍ", "Kami duduk di sekitar sebuah meja makan", "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh (Nakirah)"],
      ["الْمَائِدَةُ جَاهِزَةٌ", "Meja makan sudah siap", "Mubtada (Ma'rifah) + Khabar"],
      ["عَلَى الْمَائِدَةِ طَعَامٌ", "Di atas meja makan itu ada makanan", "Khabar Muqaddam + Mubtada Muakhkhar"],
      ["مَائِدَةُ الطَّعَامِ", "Meja makan", "Mudhaf + Mudhaf ilayh"],
      ["رَتَّبَتِ الْمَائِدَةَ", "Dia (pr) menata meja makan", "Fi'il Madhi + Maf'ul bih"],
      ["مَائِدَةٌ كَبِيرَةٌ", "Meja makan yang besar", "Nakirah + Sifat"],
      ["وَضَعْتُ الْأَطْبَاقَ عَلَى الْمَائِدَةِ", "Saya meletakkan piring-piring di atas meja makan", "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah"],
      ["مَائِدَةُ الرَّحْمَنِ", "Meja makan Ar-Rahman (berbuka puasa bersama)", "Mudhaf + Mudhaf ilayh"],
      ["هَلِ الْمَائِدَةُ مَحْجُوزَةٌ؟", "Apakah meja makan ini dipesan/reservasi?", "Tanya + Mubtada + Khabar"],
      ["اِنْزِلْ عَلَيْنَا مَائِدَةً مِنَ السَّمَاءِ", "Turunkanlah kepada kami hidangan dari langit", "Fi'il Amr + Syibhul Jumlah + Maf'ul bih + Syibhul Jumlah"]
    ]
  },
  {
    id: "l1_6_c18", wordAr: "طَبَقٌ", translation: "Piring", category: "Di Restoran",
    description: "Piring makanan atau hidangan.", logicBox: "Isim Nakirah. Ma'rifah: الطَّبَقُ (Al Syamsiyyah). Jamaknya أَطْبَاقٌ.",
    examples: [
      ["هَاتِ طَبَقًا نَظِيفًا", "Berikan piring yang bersih", "Fi'il Amr + Maf'ul bih (Nakirah) + Sifat"],
      ["الطَّبَقُ فَارِغٌ", "Piring itu kosong", "Mubtada (Ma'rifah) + Khabar"],
      ["طَبَقُ الْيَوْمِ", "Hidangan hari ini (Menu spesial)", "Mudhaf + Mudhaf ilayh"],
      ["غَسَلْتُ الْأَطْبَاقَ", "Saya telah mencuci piring-piring", "Fi'il Madhi-Fa'il + Maf'ul bih (Jamak)"],
      ["وَضَعَ اللَّحْمَ فِي الطَّبَقِ", "Dia meletakkan daging di piring", "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah"],
      ["طَبَقٌ جَمِيلٌ", "Piring yang indah", "Nakirah + Sifat"],
      ["طَبَقُ الْحَسَاءِ", "Piring sup", "Mudhaf + Mudhaf ilayh"],
      ["أَكَلْنَا مِنْ طَبَقٍ وَاحِدٍ", "Kami makan dari satu piring", "Fi'il-Fa'il + Syibhul Jumlah + Sifat"],
      ["كَسَرَ طَبَقًا", "Dia memecahkan sebuah piring", "Fi'il Madhi + Maf'ul bih"],
      ["هَذَا الطَّبَقُ لَذِيذٌ", "Hidangan ini lezat", "Mubtada (Isim Isyarah + Badal) + Khabar"]
    ]
  },
  {
    id: "l1_6_c19", wordAr: "كُوبٌ", translation: "Gelas", category: "Di Restoran",
    description: "Gelas/Cangkir tanpa pegangan atau gelas air.", logicBox: "Isim Nakirah. Ma'rifah: الْكُوبُ. Jamaknya أَكْوَابٌ.",
    examples: [
      ["كُوبُ مَاءٍ مِنْ فَضْلِكَ", "Segelas air tolong", "Mudhaf + Mudhaf ilayh (Nakirah) + Syibhul Jumlah"],
      ["الْكُوبُ مَمْلُوءٌ", "Gelas itu penuh", "Mubtada (Ma'rifah) + Khabar"],
      ["شَرِبْتُ كُوبًا مِنَ الْحَلِيبِ", "Saya meminum segelas susu", "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah"],
      ["أَكْوَابٌ زُجَاجِيَّةٌ", "Gelas-gelas kaca", "Mubtada + Sifat"],
      ["انْكَسَرَ الْكُوبُ", "Gelas itu pecah", "Fi'il Madhi + Fa'il"],
      ["هَاتِ كُوبًا آخَرَ", "Bawakan gelas yang lain", "Fi'il Amr + Maf'ul bih + Sifat"],
      ["سَكَبَ الْعَصِيرَ فِي الْكُوبِ", "Dia menuangkan jus ke dalam gelas", "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah"],
      ["وَأَكْوَابٌ مَوْضُوعَةٌ", "Dan gelas-gelas yang tersedia", "Mubtada + Sifat"],
      ["كُوبٌ فَارِغٌ", "Gelas yang kosong", "Nakirah + Sifat"],
      ["غَسَلَتِ الْأَكْوَابَ", "Dia (pr) mencuci gelas-gelas", "Fi'il Madhi + Maf'ul bih"]
    ]
  },
  {
    id: "l1_6_c20", wordAr: "مِلْعَقَةٌ", translation: "Sendok", category: "Di Restoran",
    description: "Alat makan. Dari kata لَعِقَ (menjilat).", logicBox: "Isim Nakirah, Muannats. Ma'rifah: الْمِلْعَقَةُ. Jamaknya مَلَاعِقُ.",
    examples: [
      ["أَكَلْتُ الْأَرُزَّ بِمِلْعَقَةٍ", "Saya makan nasi dengan sebuah sendok", "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah (Nakirah)"],
      ["الْمِلْعَقَةُ عَلَى الْمَائِدَةِ", "Sendok itu di atas meja makan", "Mubtada (Ma'rifah) + Khabar (Syibhul Jumlah)"],
      ["هَاتِ مِلْعَقَةً مِنْ فَضْلِكَ", "Bawakan sendok tolong", "Fi'il Amr + Maf'ul bih + Syibhul Jumlah"],
      ["مِلْعَقَةٌ صَغِيرَةٌ", "Sendok kecil", "Nakirah + Sifat"],
      ["مِلْعَقَةُ سُكَّرٍ", "Satu sendok gula", "Mudhaf + Mudhaf ilayh"],
      ["اغْسِلِ الْمِلْعَقَةَ", "Cucilah sendok itu", "Fi'il Amr + Maf'ul bih"],
      ["وَقَعَتِ الْمِلْعَقَةُ", "Sendok itu jatuh", "Fi'il Madhi + Fa'il"],
      ["شَوْكَةٌ وَمِلْعَقَةٌ", "Garpu dan sendok", "Ma'thuf alayh + Ma'thuf"],
      ["مَلَاعِقُ خَشَبِيَّةٌ", "Sendok-sendok kayu", "Jamak + Sifat"],
      ["تَنَاوَلَ الدَّوَاءَ بِمِلْعَقَةٍ", "Dia meminum obat dengan sendok", "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah"]
    ]
  },
  {
    id: "l1_6_c21", wordAr: "لَذِيذٌ", translation: "Enak/Lezat", category: "Rasa & Sifat",
    description: "Sifat makanan/minuman yang rasanya enak.", logicBox: "Sifat. Mengikuti mau'shufnya (berubah sesuai jenis kelamin & jumlah). Muannats: لَذِيذَةٌ.",
    examples: [
      ["هَذَا طَعَامٌ لَذِيذٌ", "Ini makanan lezat", "Mubtada + Khabar + Sifat (Mudzakkar Nakirah)"],
      ["الطَّعَامُ لَذِيذٌ", "Makanan itu lezat", "Mubtada + Khabar"],
      ["هَذِهِ فَاكِهَةٌ لَذِيذَةٌ", "Ini buah yang lezat", "Mubtada + Khabar + Sifat (Muannats)"],
      ["أَكَلْتُ وَجْبَةً لَذِيذَةً", "Saya makan hidangan yang lezat", "Fi'il Madhi-Fa'il + Maf'ul bih + Sifat"],
      ["هَلِ الْخُبْزُ لَذِيذٌ؟", "Apakah roti itu lezat?", "Tanya + Mubtada + Khabar"],
      ["عَصِيرٌ لَذِيذٌ جِدًّا", "Jus yang sangat lezat", "Mausuf + Sifat + Maf'ul muthlaq"],
      ["الشَّايُ لَذِيذٌ", "Teh itu nikmat", "Mubtada + Khabar"],
      ["لَحْمٌ مَشْوِيٌّ لَذِيذٌ", "Daging bakar yang lezat", "Mausuf + Sifat 1 + Sifat 2"],
      ["طَعْمُهُ لَذِيذٌ", "Rasanya enak", "Mubtada (idhafah) + Khabar"],
      ["أَطْبَاقٌ لَذِيذَةٌ", "Hidangan-hidangan lezat", "Jamak + Sifat (Mufrad Muannats)"]
    ]
  },
  {
    id: "l1_6_c22", wordAr: "حُلْوٌ", translation: "Manis", category: "Rasa & Sifat",
    description: "Rasa manis.", logicBox: "Sifat. Muannats: حُلْوَةٌ. Jamaknya: حَلْوَى (manisan/kue).",
    examples: [
      ["هَذَا شَايٌ حُلْوٌ", "Ini teh yang manis", "Mubtada + Khabar + Sifat"],
      ["الْعَصِيرُ حُلْوٌ جِدًّا", "Jus itu sangat manis", "Mubtada + Khabar + Keterangan"],
      ["أُحِبُّ الطَّعَامَ الْحُلْوَ", "Saya suka makanan yang manis", "Fi'il-Fa'il + Maf'ul bih (Ma'rifah) + Sifat (Ma'rifah)"],
      ["فَاكِهَةٌ حُلْوَةٌ", "Buah yang manis", "Mausuf (Muannats) + Sifat (Muannats)"],
      ["طَعْمُهُ حُلْوٌ كَالْعَسَلِ", "Rasanya manis seperti madu", "Mubtada (idhafah) + Khabar + Syibhul Jumlah"],
      ["لَا أُحِبُّ الْحُلْوَ", "Saya tidak suka yang manis", "Nafi + Fi'il-Fa'il + Maf'ul bih"],
      ["هَلِ الْقَهْوَةُ حُلْوَةٌ؟", "Apakah kopi itu manis?", "Tanya + Mubtada + Khabar"],
      ["كَلَامٌ حُلْوٌ", "Perkataan yang manis", "Mausuf + Sifat"],
      ["الْحَلْوَى لَذِيذَةٌ", "Kue/manisan itu lezat", "Mubtada + Khabar"],
      ["بِطِّيخٌ حُلْوٌ", "Semangka yang manis", "Mubtada + Sifat"]
    ]
  },
  {
    id: "l1_6_c23", wordAr: "مَالِحٌ", translation: "Asin", category: "Rasa & Sifat",
    description: "Rasa asin.", logicBox: "Sifat. Muannats: مَالِحَةٌ. Terkait dengan مِلْحٌ (garam).",
    examples: [
      ["هَذَا حَسَاءٌ مَالِحٌ", "Ini sup yang asin", "Mubtada + Khabar + Sifat"],
      ["الطَّعَامُ مَالِحٌ جِدًّا", "Makanan ini terlalu asin", "Mubtada + Khabar + Keterangan"],
      ["سَمَكٌ مَالِحٌ", "Ikan asin", "Mausuf + Sifat"],
      ["لَا أُحِبُّ الْأَكْلَ الْمَالِحَ", "Saya tidak suka makanan asin", "Nafi + Fi'il-Fa'il + Maf'ul bih + Sifat"],
      ["الْمَاءُ مَالِحٌ", "Air itu asin", "Mubtada + Khabar"],
      ["طَعْمٌ مَالِحٌ وَحَامِضٌ", "Rasa asin dan asam", "Mubtada + Khabar + Ma'thuf"],
      ["زَادَ الْمِلْحَ فَصَارَ مَالِحًا", "Dia menambah garam maka jadilah asin", "Fi'il-Fa'il-Maf'ul bih + Fi'il Naqis-Khabar"],
      ["جُبْنَةٌ مَالِحَةٌ", "Keju yang asin", "Mausuf (Muannats) + Sifat (Muannats)"],
      ["هَلِ اللَّحْمُ مَالِحٌ؟", "Apakah daging itu asin?", "Tanya + Mubtada + Khabar"],
      ["بَحْرٌ مَالِحٌ", "Laut yang asin", "Mubtada + Sifat"]
    ]
  },
  {
    id: "l1_6_c24", wordAr: "حَارٌّ", translation: "Panas/Pedas", category: "Rasa & Sifat",
    description: "Berarti suhu panas atau rasa pedas.", logicBox: "Sifat. Muannats: حَارَّةٌ.",
    examples: [
      ["الشَّايُ حَارٌّ", "Teh itu panas", "Mubtada + Khabar"],
      ["الْجَوُّ حَارٌّ", "Cuaca panas", "Mubtada + Khabar"],
      ["طَعَامٌ حَارٌّ", "Makanan pedas", "Mausuf + Sifat"],
      ["أُحِبُّ اللَّحْمَ الْحَارَّ", "Saya suka daging pedas", "Fi'il-Fa'il + Maf'ul bih + Sifat"],
      ["هَلِ الْحَسَاءُ حَارٌّ؟", "Apakah sup itu panas?", "Tanya + Mubtada + Khabar"],
      ["شَرِبْتُ قَهْوَةً حَارَّةً", "Saya meminum kopi yang panas", "Fi'il Madhi-Fa'il + Maf'ul bih (Muannats) + Sifat"],
      ["صَوْصَةٌ حَارَّةٌ", "Saus yang pedas", "Mausuf + Sifat"],
      ["لَا تَشْرَبِ الْمَاءَ الْحَارَّ", "Jangan meminum air yang panas", "La Nahiyah + Fi'il Mudhari + Maf'ul bih + Sifat"],
      ["اِحْذَرْ، الطَّبَقُ حَارٌّ", "Hati-hati, piring itu panas", "Fi'il Amr + Mubtada + Khabar"],
      ["فُلْفُلٌ حَارٌّ", "Lada/cabai yang pedas", "Mausuf + Sifat"]
    ]
  },
  {
    id: "l1_6_c25", wordAr: "بَارِدٌ", translation: "Dingin", category: "Rasa & Sifat",
    description: "Suhu dingin. Lawan dari حَارٌّ.", logicBox: "Sifat. Muannats: بَارِدَةٌ.",
    examples: [
      ["مَاءٌ بَارِدٌ", "Air yang dingin", "Mausuf + Sifat"],
      ["أُرِيدُ عَصِيرًا بَارِدًا", "Saya ingin jus yang dingin", "Fi'il-Fa'il + Maf'ul bih + Sifat"],
      ["الْخُبْزُ بَارِدٌ", "Roti itu dingin", "Mubtada + Khabar"],
      ["لَبَنٌ بَارِدٌ مَعَ التَّمْرِ", "Susu dingin bersama kurma", "Mausuf + Sifat + Syibhul Jumlah"],
      ["هَلْ تُحِبُّ الشَّايَ الْبَارِدَ؟", "Apakah kamu suka es teh (teh dingin)?", "Tanya + Fi'il-Fa'il + Maf'ul bih + Sifat"],
      ["الْجَوُّ بَارِدٌ الْيَوْمَ", "Cuaca dingin hari ini", "Mubtada + Khabar + Zharaf"],
      ["شَرِبْتُ مَاءً بَارِدًا", "Saya meminum air dingin", "Fi'il Madhi-Fa'il + Maf'ul bih + Sifat"],
      ["سَلَطَةٌ بَارِدَةٌ", "Salad dingin", "Mausuf (Muannats) + Sifat (Muannats)"],
      ["قَهْوَةٌ بَارِدَةٌ لَا تُعْجِبُنِي", "Kopi dingin tidak membuatku suka", "Mubtada + Sifat + Jumlah Fi'liyyah (Khabar)"],
      ["فِي يَوْمٍ بَارِدٍ", "Pada hari yang dingin", "Syibhul Jumlah + Sifat"]
    ]
  },
  {
    id: "l1_6_c26", wordAr: "أَكَلَ", translation: "Makan", category: "Kata Kerja Makan",
    description: "Kata kerja madhi. Mudharinya: يَأْكُلُ.", logicBox: "Fi'il madhi, butuh fa'il dan maf'ul bih (transitif). Masdarnya: أَكْلٌ.",
    examples: [
      ["أَكَلَ الطَّعَامَ", "Dia (lk) memakan makanan", "Fi'il Madhi + Fa'il (Mustatir) + Maf'ul bih"],
      ["أَكَلْتُ التُّفَّاحَةَ", "Saya telah memakan apel itu", "Fi'il Madhi-Fa'il (tu) + Maf'ul bih"],
      ["يَأْكُلُ الْوَلَدُ أَرُزًّا", "Anak laki-laki itu memakan nasi", "Fi'il Mudhari + Fa'il + Maf'ul bih"],
      ["نَأْكُلُ فِي الْمَطْعَمِ", "Kami makan di restoran", "Fi'il Mudhari-Fa'il + Syibhul Jumlah"],
      ["هَلْ أَكَلْتَ؟", "Apakah kamu sudah makan?", "Tanya + Fi'il Madhi-Fa'il"],
      ["كُلْ بِيَمِينِكَ", "Makanlah dengan tangan kananmu", "Fi'il Amr + Syibhul Jumlah"],
      ["الْأَكْلُ لَذِيذٌ", "Makanan (kegiatan makan) itu lezat", "Mubtada (Mashdar) + Khabar"],
      ["أَكَلُوا جَمِيعًا", "Mereka semua telah makan", "Fi'il Madhi-Fa'il + Hal"],
      ["مَاذَا أَكَلْتَ الْيَوْمَ؟", "Apa yang kamu makan hari ini?", "Tanya + Fi'il Madhi-Fa'il + Zharaf Zaman"],
      ["تَأْكُلُ الْبِنْتُ كَعْكَةً", "Gadis itu memakan sebuah kue", "Fi'il Mudhari + Fa'il + Maf'ul bih"]
    ]
  },
  {
    id: "l1_6_c27", wordAr: "شَرِبَ", translation: "Minum", category: "Kata Kerja Makan",
    description: "Kata kerja madhi. Mudharinya: يَشْرَبُ.", logicBox: "Fi'il madhi, transitif (butuh maf'ul bih). Masdarnya: شُرْبٌ.",
    examples: [
      ["شَرِبَ الْمَاءَ", "Dia meminum air", "Fi'il Madhi + Fa'il (Mustatir) + Maf'ul bih"],
      ["أَشْرَبُ الشَّايَ صَبَاحًا", "Saya meminum teh di pagi hari", "Fi'il Mudhari-Fa'il + Maf'ul bih + Zharaf"],
      ["شَرِبْنَا الْقَهْوَةَ مَعًا", "Kami meminum kopi bersama", "Fi'il Madhi-Fa'il + Maf'ul bih + Hal"],
      ["مَاذَا تَشْرَبُ؟", "Apa yang kamu minum?", "Tanya + Fi'il Mudhari-Fa'il"],
      ["اِشْرَبْ حَلِيبًا!", "Minumlah susu!", "Fi'il Amr + Maf'ul bih"],
      ["لَمْ أَشْرَبْ شَيْئًا", "Saya tidak/belum minum apapun", "Nafi + Fi'il Mudhari majzum + Maf'ul bih"],
      ["تَشْرَبُ الْعَصِيرَ", "Dia (pr) meminum jus", "Fi'il Mudhari + Fa'il (Mustatir) + Maf'ul bih"],
      ["يَشْرَبُونَ اللَّبَنَ", "Mereka meminum susu/yoghurt", "Fi'il Mudhari + Fa'il (Jamak) + Maf'ul bih"],
      ["هَلْ شَرِبْتِ الدَّوَاءَ؟", "Apakah kamu (pr) sudah minum obat?", "Tanya + Fi'il Madhi-Fa'il + Maf'ul bih"],
      ["شُرْبُ الْمَاءِ مُهِمٌّ", "Minum air itu penting", "Mubtada (Mashdar Idhafi) + Khabar"]
    ]
  },
  {
    id: "l1_6_c28", wordAr: "طَبَخَ", translation: "Memasak", category: "Kata Kerja Makan",
    description: "Kata kerja madhi. Mudharinya: يَطْبُخُ.", logicBox: "Fi'il madhi. Pelakunya (Fa'il) disebut طَبَّاخٌ (koki).",
    examples: [
      ["طَبَخَتْ أُمِّي الطَّعَامَ", "Ibuku memasak makanan", "Fi'il Madhi + Fa'il + Maf'ul bih"],
      ["أَطْبُخُ الْعَشَاءَ", "Saya sedang memasak makan malam", "Fi'il Mudhari-Fa'il + Maf'ul bih"],
      ["مَاذَا تَطْبُخِينَ؟", "Apa yang sedang kamu (pr) masak?", "Tanya + Fi'il Mudhari-Fa'il"],
      ["الطَّبَّاخُ يَطْبُخُ اللَّحْمَ", "Koki sedang memasak daging", "Mubtada + Jumlah Fi'liyyah (Khabar)"],
      ["طَبَخْنَا أَرُزًّا", "Kami telah memasak nasi", "Fi'il Madhi-Fa'il + Maf'ul bih"],
      ["مَنْ طَبَخَ هَذَا؟", "Siapa yang memasak ini?", "Tanya + Fi'il Madhi + Maf'ul bih"],
      ["تُحِبُّ الطَّبْخَ", "Dia (pr) suka memasak", "Fi'il Mudhari-Fa'il + Maf'ul bih (Mashdar)"],
      ["هَلْ تَعْرِفُ أَنْ تَطْبُخَ؟", "Apakah kamu tahu cara memasak?", "Tanya + Fi'il-Fa'il + Mashdar Muawwal"],
      ["طَبَخَ الدَّجَاجَ فِي الْفُرْنِ", "Dia memasak ayam di oven", "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah"],
      ["طَعَامٌ مَطْبُوخٌ", "Makanan yang dimasak", "Mausuf + Sifat (Isim Maf'ul)"]
    ]
  },
  {
    id: "l1_6_c29", wordAr: "اِشْتَرَى", translation: "Membeli", category: "Kata Kerja Makan",
    description: "Kata kerja madhi. Mudharinya: يَشْتَرِي.", logicBox: "Fi'il madhi mazid (wazan ifta'ala). Berakhiran alif maqshurah. Masdarnya: شِرَاءٌ.",
    examples: [
      ["اِشْتَرَيْتُ خُبْزًا", "Saya membeli sepotong roti", "Fi'il Madhi-Fa'il + Maf'ul bih"],
      ["يَشْتَرِي السَّمَكَ مِنَ السُّوقِ", "Dia membeli ikan dari pasar", "Fi'il Mudhari + Maf'ul bih + Syibhul Jumlah"],
      ["مَاذَا اِشْتَرَيْتَ؟", "Apa yang telah kamu beli?", "Tanya + Fi'il Madhi-Fa'il"],
      ["أُرِيدُ أَنْ أَشْتَرِيَ فَاكِهَةً", "Saya ingin membeli buah", "Fi'il-Fa'il + Mashdar Muawwal (Fi'il + Maf'ul bih)"],
      ["اِشْتَرَيْنَا طَعَامَ الْعَشَاءِ", "Kami membeli makanan makan malam", "Fi'il Madhi-Fa'il + Maf'ul bih (idhafah)"],
      ["هَلِ اشْتَرَتِ الْحَلِيبَ؟", "Apakah dia (pr) telah membeli susu?", "Tanya + Fi'il Madhi + Maf'ul bih"],
      ["سَأَشْتَرِي بَيْضًا الْيَوْمَ", "Saya akan membeli telur hari ini", "Fi'il Mudhari + Maf'ul bih + Zharaf"],
      ["يَشْتَرُونَ الْمُعَلَّبَاتِ", "Mereka membeli makanan kaleng", "Fi'il Mudhari-Fa'il (Jamak) + Maf'ul bih"],
      ["مِنْ أَيْنَ اشْتَرَيْتَ هَذَا؟", "Dari mana kamu membeli ini?", "Tanya + Fi'il Madhi-Fa'il + Maf'ul bih"],
      ["اِشْتَرِ لِي قَهْوَةً", "Belikan saya kopi (perintah)", "Fi'il Amr + Syibhul Jumlah + Maf'ul bih"]
    ]
  },
  {
    id: "l1_6_c30", wordAr: "جَاعَ", translation: "Lapar", category: "Kata Kerja Makan",
    description: "Kata kerja madhi. Mudharinya: يَجُوعُ. Kata sifat lapar: جَوْعَانُ.", logicBox: "Fi'il madhi lazim (tidak butuh objek). Masdarnya: جُوعٌ.",
    examples: [
      ["أَنَا جَوْعَانُ", "Saya lapar (lk)", "Mubtada + Khabar (Isim Sifat)"],
      ["أَنَا جَوْعَى", "Saya lapar (pr)", "Mubtada + Khabar (Isim Sifat)"],
      ["جُعْتُ كَثِيرًا", "Saya sangat lapar (telah lapar)", "Fi'il Madhi-Fa'il + Maf'ul muthlaq"],
      ["الطِّفْلُ يَجُوعُ بِسُرْعَةٍ", "Anak itu cepat lapar", "Mubtada + Jumlah Fi'liyyah + Syibhul Jumlah"],
      ["هَلْ أَنْتَ جَوْعَانُ؟", "Apakah kamu lapar?", "Tanya + Mubtada + Khabar"],
      ["شَعَرْتُ بِالْجُوعِ", "Saya merasa lapar (dengan kelaparan)", "Fi'il Madhi-Fa'il + Syibhul Jumlah"],
      ["لَا تَجُوعُ هُنَا", "Kamu tidak akan lapar di sini", "Nafi + Fi'il Mudhari + Zharaf"],
      ["عِنْدَمَا أَجُوعُ، آكُلُ", "Ketika saya lapar, saya makan", "Zharaf + Fi'il Mudhari + Fi'il Mudhari"],
      ["مَاتَ مِنَ الْجُوعِ", "Dia mati karena kelaparan", "Fi'il Madhi + Syibhul Jumlah"],
      ["إِطْعَامُ الْجَائِعِ", "Memberi makan orang yang lapar", "Mudhaf + Mudhaf ilayh (Isim Fa'il)"]
    ]
  }
];

const fileContent = `import { Lesson } from "../../types";

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
    introduction: "Makanan dan minuman bukan sekadar kebutuhan fisik, melainkan anugerah yang patut disyukuri. Dalam tradisi Arab dan Islam, tata krama makan, adab menjamu tamu, dan menghargai rezeki adalah cerminan dari akhlak yang mulia. Bab ini akan membuka pintu bagi Anda untuk menyelami kelezatan kosakata kuliner Arab, membekali Anda dengan kemampuan untuk memesan makanan, mengekspresikan rasa, dan berinteraksi dalam suasana jamuan yang hangat.\\n\\nMelalui 30 kosakata progresif yang mencakup bahan makanan pokok, ragam minuman, situasi di restoran, dan kata kerja esensial, Anda akan belajar lebih dari sekadar nama-nama hidangan. Anda akan memahami konsep vital dalam bahasa Arab: Isim Nakirah dan Ma'rifah (Indefinit dan Definit). Ini adalah rahasia untuk membedakan antara menyebut 'sebuah roti' yang tidak spesifik, dengan 'roti itu' yang ada di hadapan Anda, membangun logika kalimat yang tajam dan akurat.\\n\\nSetiap suapan ilmu yang Anda dapatkan di sini adalah persiapan untuk percakapan nyata. Baik saat Anda memesan kopi di kafe Kairo, menyantap nasi di jamuan Dubai, atau sekadar berbincang tentang menu makan malam. Mari masuki bab ini dengan rasa lapar akan ilmu, kuasai setiap strukturnya, dan rasakan kepuasan saat Anda mampu berkomunikasi dengan presisi. Bismillah, mari kita mulai hidangan bahasa ini!",
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
    cards: [
${cardsData.map(c => `      {
        id: "${c.id}",
        wordAr: "${c.wordAr}",
        translation: "${c.translation}",
        category: "${c.category}",
        description: "${c.description}",
        logicBox: "${c.logicBox}",
        examples: [
${c.examples.map(ex => `          { ar: "${ex[0]}", translation: "${ex[1]}", grammarNote: "${ex[2]}", analysis: "${ex[2]}" }`).join(",\n")}
        ]
      }`).join(",\n")}
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
    dialogue: {
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
`;

fs.writeFileSync('src/data/lessons/l1_6.ts', fileContent);
console.log('Successfully wrote src/data/lessons/l1_6.ts');
