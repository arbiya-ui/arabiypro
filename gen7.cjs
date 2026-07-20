const fs = require('fs');

const words = [
  ["l1_7_c1", "سَمَاءٌ", "Langit", "Fenomena Alam", "Langit di atas kita.", "Muannats majazi (dianggap muannats meskipun tidak ada ta marbuthah). Jamaknya سَمَاوَاتٌ.", [
    ["السَّمَاءُ صَافِيَةٌ", "Langit itu cerah", "Mubtada + Khabar"],
    ["فِي السَّمَاءِ سَحَابٌ", "Di langit ada awan", "Khabar Muqaddam + Mubtada Muakhkhar"],
    ["السَّمَاءُ زَرْقَاءُ", "Langit itu biru", "Mubtada + Khabar (Wazan fa'la')"],
    ["يَنْزِلُ الْمَطَرُ مِنَ السَّمَاءِ", "Hujan turun dari langit", "Fi'il Mudhari + Fa'il + Syibhul Jumlah"],
    ["نَظَرْتُ إِلَى السَّمَاءِ", "Saya melihat ke langit", "Fi'il Madhi-Fa'il + Syibhul Jumlah"],
    ["سَمَاءٌ مُرْصَعَةٌ بِالنُّجُومِ", "Langit yang dihiasi bintang-bintang", "Mausuf + Sifat + Syibhul Jumlah"],
    ["خَلَقَ اللهُ السَّمَاوَاتِ", "Allah menciptakan langit-langit", "Fi'il Madhi + Fa'il + Maf'ul bih"],
    ["مَا أَجْمَلَ السَّمَاءَ!", "Betapa indahnya langit!", "Ta'ajjub"],
    ["رَفَعَ السَّمَاءَ بِغَيْرِ عَمَدٍ", "Dia meninggikan langit tanpa tiang", "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah"],
    ["السَّمَاءُ تُمْطِرُ الآنَ", "Langit sedang hujan sekarang", "Mubtada + Jumlah Fi'liyyah + Zharaf"]
  ]],
  ["l1_7_c2", "أَرْضٌ", "Bumi/Tanah", "Fenomena Alam", "Bumi atau permukaan tanah.", "Muannats majazi. Jamaknya أَرَاضٍ.", [
    ["الْأَرْضُ وَاسِعَةٌ", "Bumi itu luas", "Mubtada + Khabar (Muannats)"],
    ["يَمْشِي عَلَى الْأَرْضِ", "Dia berjalan di atas tanah/bumi", "Fi'il Mudhari + Syibhul Jumlah"],
    ["زَرَعْنَا الْأَرْضَ", "Kami menanami tanah itu", "Fi'il Madhi-Fa'il + Maf'ul bih"],
    ["فِي الْأَرْضِ جِبَالٌ", "Di bumi ada gunung-gunung", "Khabar Muqaddam + Mubtada Muakhkhar"],
    ["الْأَرْضُ تَدُورُ حَوْلَ الشَّمْسِ", "Bumi berputar mengelilingi matahari", "Mubtada + Jumlah Fi'liyyah + Zharaf"],
    ["سَقَطَ عَلَى الْأَرْضِ", "Dia jatuh ke tanah", "Fi'il Madhi + Syibhul Jumlah"],
    ["أَرْضٌ خَضْرَاءُ", "Bumi/tanah yang hijau", "Mausuf + Sifat"],
    ["رَبُّ السَّمَاوَاتِ وَالْأَرْضِ", "Tuhan langit dan bumi", "Mudhaf + Mudhaf ilayh + Ma'thuf"],
    ["هَذِهِ أَرْضٌ طَيِّبَةٌ", "Ini tanah yang baik", "Mubtada + Khabar + Sifat"],
    ["الْأَرْضُ كُرَوِيَّةٌ", "Bumi itu bulat", "Mubtada + Khabar"]
  ]],
  ["l1_7_c3", "بَحْرٌ", "Laut", "Fenomena Alam", "Laut atau samudra.", "Isim Mudzakkar. Jamaknya بِحَارٌ.", [
    ["الْبَحْرُ عَمِيقٌ", "Laut itu dalam", "Mubtada + Khabar"],
    ["مَاءُ الْبَحْرِ مَالِحٌ", "Air laut itu asin", "Mubtada (idhafah) + Khabar"],
    ["ذَهَبْنَا إِلَى الْبَحْرِ", "Kami pergi ke laut", "Fi'il Madhi-Fa'il + Syibhul Jumlah"],
    ["فِي الْبَحْرِ أَسْمَاكٌ كَثِيرَةٌ", "Di laut ada banyak ikan", "Khabar Muqaddam + Mubtada Muakhkhar + Sifat"],
    ["الْبَحْرُ هَادِئٌ الْيَوْمَ", "Laut tenang hari ini", "Mubtada + Khabar + Zharaf"],
    ["أُحِبُّ الْبَحْرَ", "Saya suka laut", "Fi'il Mudhari-Fa'il + Maf'ul bih"],
    ["أَمْوَاجُ الْبَحْرِ عَالِيَةٌ", "Ombak laut tinggi", "Mubtada (idhafah) + Khabar"],
    ["سَفِينَةٌ فِي الْبَحْرِ", "Sebuah kapal di laut", "Mubtada (Nakirah) + Syibhul Jumlah"],
    ["الْبَحْرُ الْأَحْمَرُ", "Laut Merah", "Mausuf + Sifat"],
    ["يَسْبَحُ فِي الْبَحْرِ", "Dia berenang di laut", "Fi'il Mudhari + Syibhul Jumlah"]
  ]],
  ["l1_7_c4", "نَهْرٌ", "Sungai", "Fenomena Alam", "Sungai.", "Isim Mudzakkar. Jamaknya أَنْهَارٌ.", [
    ["النَّهْرُ طَوِيلٌ", "Sungai itu panjang", "Mubtada + Khabar"],
    ["مَاءُ النَّهْرِ عَذْبٌ", "Air sungai itu tawar", "Mubtada (idhafah) + Khabar"],
    ["نَهْرُ النِّيلِ فِي مِصْرَ", "Sungai Nil ada di Mesir", "Mubtada (idhafah) + Syibhul Jumlah"],
    ["يَجْرِي النَّهْرُ بِسُرْعَةٍ", "Sungai mengalir dengan cepat", "Fi'il Mudhari + Fa'il + Syibhul Jumlah"],
    ["سَبَحْنَا فِي النَّهْرِ", "Kami berenang di sungai", "Fi'il Madhi-Fa'il + Syibhul Jumlah"],
    ["عَلَى ضِفَّتَيِ النَّهْرِ أَشْجَارٌ", "Di kedua tepi sungai ada pohon-pohon", "Khabar Muqaddam + Mubtada Muakhkhar"],
    ["جَنَّاتٌ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ", "Surga yang mengalir di bawahnya sungai-sungai", "Mausuf + Jumlah Sifat"],
    ["هَذَا نَهْرٌ كَبِيرٌ", "Ini sungai yang besar", "Mubtada + Khabar + Sifat"],
    ["جَفَّ النَّهْرُ", "Sungai itu mengering", "Fi'il Madhi + Fa'il"],
    ["عَبَرَ النَّهْرَ", "Dia menyeberangi sungai", "Fi'il Madhi + Maf'ul bih"]
  ]],
  ["l1_7_c5", "جَبَلٌ", "Gunung", "Fenomena Alam", "Gunung.", "Isim Mudzakkar. Jamaknya جِبَالٌ.", [
    ["الْجَبَلُ مُرْتَفِعٌ", "Gunung itu tinggi", "Mubtada + Khabar"],
    ["تَسَلَّقْنَا الْجَبَلَ", "Kami mendaki gunung", "Fi'il Madhi-Fa'il + Maf'ul bih"],
    ["قِمَّةُ الْجَبَلِ بَارِدَةٌ", "Puncak gunung itu dingin", "Mubtada (idhafah) + Khabar"],
    ["الْجِبَالُ رَوَاسِي", "Gunung-gunung itu pasak/kokoh", "Mubtada (Jamak) + Khabar"],
    ["جَبَلُ أُحُدٍ جَبَلٌ يُحِبُّنَا وَنُحِبُّهُ", "Gunung Uhud adalah gunung yang mencintai kami dan kami mencintainya", "Mubtada + Khabar + Sifat (Jumlah)"],
    ["نَظَرْتُ إِلَى الْجَبَلِ", "Saya melihat ke arah gunung", "Fi'il Madhi-Fa'il + Syibhul Jumlah"],
    ["خَلْفَ الْجَبَلِ قَرْيَةٌ", "Di balik gunung ada desa", "Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar"],
    ["هَذَا جَبَلٌ عَظِيمٌ", "Ini gunung yang agung", "Mubtada + Khabar + Sifat"],
    ["الْجَبَلُ أَخْضَرُ", "Gunung itu hijau", "Mubtada + Khabar"],
    ["جِبَالٌ عَالِيَةٌ", "Gunung-gunung yang tinggi", "Mausuf (Jamak) + Sifat (Mufrad Muannats)"]
  ]],
  ["l1_7_c6", "شَجَرَةٌ", "Pohon", "Fenomena Alam", "Pohon tunggal.", "Isim Muannats (ada ta marbuthah). Jamaknya أَشْجَارٌ (jamak taksir) atau شَجَرٌ (isim jins jam'i).", [
    ["الشَّجَرَةُ مُثْمِرَةٌ", "Pohon itu berbuah", "Mubtada + Khabar"],
    ["هَذِهِ شَجَرَةٌ كَبِيرَةٌ", "Ini pohon yang besar", "Mubtada + Khabar + Sifat"],
    ["زَرَعْتُ شَجَرَةً فِي الْحَدِيقَةِ", "Saya menanam sebuah pohon di taman", "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah"],
    ["تَحْتَ الشَّجَرَةِ ظِلٌّ", "Di bawah pohon itu ada bayangan/naungan", "Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar"],
    ["أَوْرَاقُ الشَّجَرَةِ خَضْرَاءُ", "Daun-daun pohon itu hijau", "Mubtada (idhafah) + Khabar"],
    ["الشَّجَرَةُ الطَّيِّبَةُ", "Pohon yang baik", "Mausuf + Sifat"],
    ["قَطَعَ الشَّجَرَةَ", "Dia menebang pohon itu", "Fi'il Madhi + Maf'ul bih"],
    ["تَسَلَّقَ الطِّفْلُ الشَّجَرَةَ", "Anak itu memanjat pohon", "Fi'il Madhi + Fa'il + Maf'ul bih"],
    ["شَجَرَةُ التُّفَّاحِ", "Pohon apel", "Mudhaf + Mudhaf ilayh"],
    ["أَشْجَارُ الْغَابَةِ", "Pohon-pohon hutan", "Mudhaf + Mudhaf ilayh"]
  ]],
  ["l1_7_c7", "زَهْرَةٌ", "Bunga", "Fenomena Alam", "Bunga tunggal.", "Isim Muannats. Jamaknya أَزْهَارٌ.", [
    ["الزَّهْرَةُ جَمِيلَةٌ", "Bunga itu indah", "Mubtada + Khabar"],
    ["قَطَفْتُ زَهْرَةً", "Saya memetik sekuntum bunga", "Fi'il Madhi-Fa'il + Maf'ul bih"],
    ["هَذِهِ زَهْرَةٌ حَمْرَاءُ", "Ini bunga merah", "Mubtada + Khabar + Sifat"],
    ["رَائِحَةُ الزَّهْرَةِ طَيِّبَةٌ", "Aroma bunga itu wangi", "Mubtada (idhafah) + Khabar"],
    ["فِي الْحَدِيقَةِ أَزْهَارٌ مُخْتَلِفَةٌ", "Di taman ada bunga-bunga yang berbeda", "Khabar Muqaddam + Mubtada Muakhkhar + Sifat"],
    ["أَعْطَيْتُهَا زَهْرَةً", "Saya memberinya sekuntum bunga", "Fi'il Madhi-Fa'il-Maf'ul bih 1 + Maf'ul bih 2"],
    ["الزَّهْرَةُ تَتَفَتَّحُ", "Bunga itu mekar", "Mubtada + Jumlah Fi'liyyah"],
    ["زَهْرَةُ اللُّوتَسِ", "Bunga lotus", "Mudhaf + Mudhaf ilayh"],
    ["أَزْهَارُ الرَّبِيعِ", "Bunga-bunga musim semi", "Mudhaf + Mudhaf ilayh"],
    ["هَلْ تُحِبُّ الزُّهُورَ؟", "Apakah kamu suka bunga-bunga?", "Tanya + Fi'il-Fa'il + Maf'ul bih"]
  ]],
  ["l1_7_c8", "عُشْبٌ", "Rumput", "Fenomena Alam", "Rumput.", "Isim Mudzakkar. Jamaknya أَعْشَابٌ.", [
    ["الْعُشْبُ أَخْضَرُ", "Rumput itu hijau", "Mubtada + Khabar"],
    ["جَلَسْنَا عَلَى الْعُشْبِ", "Kami duduk di atas rumput", "Fi'il Madhi-Fa'il + Syibhul Jumlah"],
    ["يَأْكُلُ الْخَرُوفُ الْعُشْبَ", "Domba memakan rumput", "Fi'il Mudhari + Fa'il + Maf'ul bih"],
    ["نَمَا الْعُشْبُ بَعْدَ الْمَطَرِ", "Rumput tumbuh setelah hujan", "Fi'il Madhi + Fa'il + Zharaf"],
    ["عُشْبٌ طَوِيلٌ", "Rumput yang panjang", "Mausuf + Sifat"],
    ["قَصَّ الْعُشْبَ", "Dia memotong rumput", "Fi'il Madhi + Maf'ul bih"],
    ["مَلْعَبٌ مَلِيءٌ بِالْعُشْبِ", "Lapangan yang penuh dengan rumput", "Mubtada/Khabar + Sifat + Syibhul Jumlah"],
    ["أَعْشَابٌ طِبِّيَّةٌ", "Rerumputan (herbal) medis", "Mausuf + Sifat"],
    ["الْعُشْبُ مُبَلَّلٌ", "Rumput itu basah", "Mubtada + Khabar"],
    ["فِي الْحَدِيقَةِ عُشْبٌ نَاعِمٌ", "Di taman ada rumput yang lembut", "Khabar Muqaddam + Mubtada Muakhkhar + Sifat"]
  ]],
  ["l1_7_c9", "رَمْلٌ", "Pasir", "Fenomena Alam", "Pasir.", "Isim Mudzakkar. Jamaknya رِمَالٌ.", [
    ["رَمْلُ الْبَحْرِ", "Pasir laut", "Mudhaf + Mudhaf ilayh"],
    ["مَشَيْنَا عَلَى الرَّمْلِ", "Kami berjalan di atas pasir", "Fi'il Madhi-Fa'il + Syibhul Jumlah"],
    ["الرِّمَالُ ذَهَبِيَّةٌ", "Pasir-pasir itu (berwarna) keemasan", "Mubtada (Jamak) + Khabar"],
    ["يَلْعَبُ الْأَطْفَالُ فِي الرَّمْلِ", "Anak-anak bermain di pasir", "Fi'il Mudhari + Fa'il + Syibhul Jumlah"],
    ["الرَّمْلُ نَاعِمٌ", "Pasir itu halus", "Mubtada + Khabar"],
    ["قَلْعَةٌ مِنَ الرَّمْلِ", "Kastil/istana dari pasir", "Mubtada + Syibhul Jumlah"],
    ["رِمَالُ الصَّحْرَاءِ", "Pasir-pasir gurun", "Mudhaf + Mudhaf ilayh"],
    ["دَخَلَ الرَّمْلُ فِي حِذَائِي", "Pasir masuk ke sepatuku", "Fi'il Madhi + Fa'il + Syibhul Jumlah"],
    ["الرَّمْلُ حَارٌّ", "Pasir itu panas", "Mubtada + Khabar"],
    ["جَمَعَ رَمْلًا", "Dia mengumpulkan pasir", "Fi'il Madhi + Maf'ul bih"]
  ]],
  ["l1_7_c10", "حَجَرٌ", "Batu", "Fenomena Alam", "Batu.", "Isim Mudzakkar. Jamaknya أَحْجَارٌ.", [
    ["الْحَجَرُ قَاسٍ", "Batu itu keras", "Mubtada + Khabar"],
    ["رَمَى الْوَلَدُ حَجَرًا", "Anak itu melempar sebuah batu", "Fi'il Madhi + Fa'il + Maf'ul bih"],
    ["هَذَا حَجَرٌ ثَقِيلٌ", "Ini batu yang berat", "Mubtada + Khabar + Sifat"],
    ["الْحَجَرُ الْأَسْوَدُ", "Batu hitam (Hajar Aswad)", "Mausuf + Sifat"],
    ["بَنَى الْبَيْتَ بِالْحَجَرِ", "Dia membangun rumah dengan batu", "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah"],
    ["أَحْجَارٌ كَرِيمَةٌ", "Batu-batu mulia (permata)", "Mausuf (Jamak) + Sifat (Muannats)"],
    ["تَعَثَّرَ بِحَجَرٍ", "Dia tersandung batu", "Fi'il Madhi + Syibhul Jumlah"],
    ["كَالْحَجَرِ", "Seperti batu", "Huruf Jar + Isim Majrur"],
    ["ضَرَبَهُ بِحَجَرٍ", "Dia memukulnya dengan batu", "Fi'il Madhi-Maf'ul bih 1 + Syibhul Jumlah"],
    ["جَمَعْنَا الْأَحْجَارَ", "Kami mengumpulkan batu-batu", "Fi'il Madhi-Fa'il + Maf'ul bih"]
  ]],
  ["l1_7_c11", "مَطَرٌ", "Hujan", "Cuaca", "Hujan.", "Isim Mudzakkar. Jamaknya أَمْطَارٌ.", [
    ["الْمَطَرُ غَزِيرٌ", "Hujan itu lebat", "Mubtada + Khabar"],
    ["يَنْزِلُ الْمَطَرُ", "Hujan turun", "Fi'il Mudhari + Fa'il"],
    ["نُحِبُّ الْمَطَرَ", "Kami menyukai hujan", "Fi'il Mudhari-Fa'il + Maf'ul bih"],
    ["دَعَوْتُ وَقْتَ الْمَطَرِ", "Saya berdoa ketika hujan", "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh"],
    ["مَاءُ الْمَطَرِ طَاهِرٌ", "Air hujan itu suci", "Mubtada (idhafah) + Khabar"],
    ["تَوَقَّفَ الْمَطَرُ", "Hujan berhenti", "Fi'il Madhi + Fa'il"],
    ["صَوْتُ الْمَطَرِ", "Suara hujan", "Mudhaf + Mudhaf ilayh"],
    ["مَطَرٌ خَفِيفٌ", "Hujan ringan", "Mausuf + Sifat"],
    ["اِبْتَلَّتْ مَلَابِسِي بِالْمَطَرِ", "Pakaianku basah karena hujan", "Fi'il Madhi + Fa'il + Syibhul Jumlah"],
    ["مَوْسِمُ الْأَمْطَارِ", "Musim hujan", "Mudhaf + Mudhaf ilayh"]
  ]],
  ["l1_7_c12", "رِيحٌ", "Angin", "Cuaca", "Angin.", "Muannats majazi (biasanya). Jamaknya رِيَاحٌ.", [
    ["الرِّيحُ شَدِيدَةٌ", "Angin itu kencang", "Mubtada + Khabar (Muannats)"],
    ["تَهُبُّ الرِّيحُ", "Angin berhembus", "Fi'il Mudhari + Fa'il"],
    ["صَوْتُ الرِّيحِ مُخِيفٌ", "Suara angin menakutkan", "Mubtada (idhafah) + Khabar"],
    ["الرِّيَاحُ بَارِدَةٌ الْيَوْمَ", "Angin dingin hari ini", "Mubtada (Jamak) + Khabar (Muannats) + Zharaf"],
    ["أَرْسَلَ الرِّيَاحَ مُبَشِّرَاتٍ", "Dia mengutus angin sebagai pembawa kabar gembira", "Fi'il Madhi + Maf'ul bih + Hal"],
    ["وَقَفْنَا فِي وَجْهِ الرِّيحِ", "Kami berdiri menghadap angin", "Fi'il Madhi-Fa'il + Syibhul Jumlah"],
    ["رِيحٌ صَرْصَرٌ", "Angin yang sangat kencang dan dingin", "Mausuf + Sifat"],
    ["هَدَأَتِ الرِّيحُ", "Angin telah mereda", "Fi'il Madhi (Muannats) + Fa'il"],
    ["الرِّيحُ تَحْمِلُ السَّحَابَ", "Angin membawa awan", "Mubtada + Jumlah Fi'liyyah"],
    ["رِيحُ الشَّمَالِ", "Angin utara", "Mudhaf + Mudhaf ilayh"]
  ]],
  ["l1_7_c13", "ثَلْجٌ", "Salju", "Cuaca", "Salju atau es.", "Isim Mudzakkar. Jamaknya ثُلُوجٌ.", [
    ["الثَّلْجُ أَبْيَضُ", "Salju itu putih", "Mubtada + Khabar (Wazan Af'alu)"],
    ["يَسْقُطُ الثَّلْجُ فِي الشِّتَاءِ", "Salju turun di musim dingin", "Fi'il Mudhari + Fa'il + Syibhul Jumlah"],
    ["الثَّلْجُ بَارِدٌ جِدًّا", "Salju sangat dingin", "Mubtada + Khabar + Maf'ul muthlaq"],
    ["لَعِبْنَا بِالثَّلْجِ", "Kami bermain dengan salju", "Fi'il Madhi-Fa'il + Syibhul Jumlah"],
    ["رَجُلُ الثَّلْجِ", "Manusia salju", "Mudhaf + Mudhaf ilayh"],
    ["ذَابَ الثَّلْجُ", "Salju telah mencair", "Fi'il Madhi + Fa'il"],
    ["الْجَبَلُ مُغَطَّى بِالثَّلْجِ", "Gunung itu tertutupi salju", "Mubtada + Khabar + Syibhul Jumlah"],
    ["مَاءٌ مُثَلَّجٌ", "Air es (didinginkan dengan es)", "Mausuf + Sifat"],
    ["عَاصِفَةٌ ثَلْجِيَّةٌ", "Badai salju", "Mausuf + Sifat (Nisbah)"],
    ["مَنْظَرُ الثَّلْجِ جَمِيلٌ", "Pemandangan salju itu indah", "Mubtada (idhafah) + Khabar"]
  ]],
  ["l1_7_c14", "سَحَابٌ", "Awan", "Cuaca", "Awan. Kata benda kolektif.", "Isim Mudzakkar. Jamaknya سُحُبٌ. Mufrad untuk satu awan: سَحَابَةٌ.", [
    ["السَّحَابُ أَبْيَضُ", "Awan itu putih", "Mubtada + Khabar"],
    ["السَّحَابُ يُغَطِّي الشَّمْسَ", "Awan menutupi matahari", "Mubtada + Jumlah Fi'liyyah"],
    ["سَحَابَةٌ سَوْدَاءُ", "Satu awan hitam", "Mausuf (Muannats) + Sifat (Muannats)"],
    ["الرِّيحُ تَسُوقُ السَّحَابَ", "Angin menggiring awan", "Mubtada + Jumlah Fi'liyyah"],
    ["تَجَمَّعَتِ السُّحُبُ", "Awan-awan telah berkumpul", "Fi'il Madhi + Fa'il"],
    ["سَحَابٌ مُمْطِرٌ", "Awan yang membawa hujan", "Mausuf + Sifat"],
    ["نَظَرْتُ إِلَى السَّحَابِ", "Saya melihat ke arah awan", "Fi'il Madhi-Fa'il + Syibhul Jumlah"],
    ["فِي السَّمَاءِ سَحَابٌ قَلِيلٌ", "Di langit ada sedikit awan", "Khabar Muqaddam + Mubtada Muakhkhar + Sifat"],
    ["تَشَكَّلَ السَّحَابُ", "Awan telah terbentuk", "Fi'il Madhi + Fa'il"],
    ["السَّحَابُ يَمْشِي", "Awan berjalan", "Mubtada + Jumlah Fi'liyyah"]
  ]],
  ["l1_7_c15", "حَرٌّ", "Panas", "Cuaca", "Suhu atau cuaca panas (noun). Berbeda dengan حَارٌّ (adjective).", "Masdar/Isim. Tidak digunakan sebagai sifat secara langsung.", [
    ["الْحَرُّ شَدِيدٌ", "Panasnya sangat menyengat", "Mubtada + Khabar"],
    ["لَا أُطِيقُ الْحَرَّ", "Saya tidak tahan panas", "Nafi + Fi'il Mudhari-Fa'il + Maf'ul bih"],
    ["فِي الصَّيْفِ يَكْثُرُ الْحَرُّ", "Di musim panas, panas merajalela", "Syibhul Jumlah + Fi'il Mudhari + Fa'il"],
    ["مَوْجَةُ حَرٍّ", "Gelombang panas", "Mudhaf + Mudhaf ilayh"],
    ["شَعَرْتُ بِالْحَرِّ", "Saya merasa kepanasan", "Fi'il Madhi-Fa'il + Syibhul Jumlah"],
    ["الْحَرُّ مُتْعِبٌ", "Panas itu melelahkan", "Mubtada + Khabar"],
    ["هَرَبْنَا مِنَ الْحَرِّ", "Kami lari dari kepanasan", "Fi'il Madhi-Fa'il + Syibhul Jumlah"],
    ["خَفَّ الْحَرُّ", "Panasnya telah berkurang", "Fi'il Madhi + Fa'il"],
    ["فِي هَذَا الْحَرِّ", "Dalam cuaca panas ini", "Syibhul Jumlah (Badal)"],
    ["يَقِينَا مِنَ الْحَرِّ", "Melindungi kita dari kepanasan", "Fi'il Mudhari-Maf'ul bih + Syibhul Jumlah"]
  ]],
  ["l1_7_c16", "بَرْدٌ", "Dingin", "Cuaca", "Suhu atau cuaca dingin (noun).", "Isim Mudzakkar. Sifatnya بَارِدٌ.", [
    ["الْبَرْدُ قَارِسٌ", "Dinginnya menusuk tulang", "Mubtada + Khabar"],
    ["أَشْعُرُ بِالْبَرْدِ", "Saya merasa kedinginan", "Fi'il Mudhari-Fa'il + Syibhul Jumlah"],
    ["مَرِضَ مِنَ الْبَرْدِ", "Dia sakit karena kedinginan", "Fi'il Madhi + Syibhul Jumlah"],
    ["فَصْلُ الشِّتَاءِ بَرْدٌ شَدِيدٌ", "Musim dingin adalah dingin yang sangat", "Mubtada + Khabar + Sifat"],
    ["قَارِسُ الْبَرْدِ", "Sangat dingin", "Mudhaf + Mudhaf ilayh"],
    ["هَلْ تَشْعُرُ بِالْبَرْدِ؟", "Apakah kamu merasa kedinginan?", "Tanya + Fi'il Mudhari-Fa'il + Syibhul Jumlah"],
    ["اِحْمِ نَفْسَكَ مِنَ الْبَرْدِ", "Lindungi dirimu dari rasa dingin", "Fi'il Amr + Maf'ul bih + Syibhul Jumlah"],
    ["الْبَرْدُ هُنَا خَفِيفٌ", "Kedinginan di sini ringan", "Mubtada + Zharaf + Khabar"],
    ["لَا أُحِبُّ الْبَرْدَ", "Saya tidak suka kedinginan", "Nafi + Fi'il Mudhari-Fa'il + Maf'ul bih"],
    ["مَلَابِسُ تُدْفِئُ مِنَ الْبَرْدِ", "Pakaian yang menghangatkan dari rasa dingin", "Mubtada + Jumlah Fi'liyyah"]
  ]],
  ["l1_7_c17", "رَعْدٌ", "Guntur", "Cuaca", "Suara guntur di langit.", "Isim Mudzakkar. Jamaknya رُعُودٌ.", [
    ["صَوْتُ الرَّعْدِ", "Suara guntur", "Mudhaf + Mudhaf ilayh"],
    ["سَمِعْتُ رَعْدًا", "Saya mendengar guntur", "Fi'il Madhi-Fa'il + Maf'ul bih"],
    ["الرَّعْدُ قَوِيٌّ", "Guntur itu kuat", "Mubtada + Khabar"],
    ["خَافَ الطِّفْلُ مِنَ الرَّعْدِ", "Anak itu takut dari guntur", "Fi'il Madhi + Fa'il + Syibhul Jumlah"],
    ["يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ", "Guntur bertasbih memuji-Nya", "Fi'il Mudhari + Fa'il + Syibhul Jumlah"],
    ["الرَّعْدُ وَالْبَرْقُ", "Guntur dan kilat", "Ma'thuf alayh + Ma'thuf"],
    ["رَعْدٌ مُدَوٍّ", "Guntur yang menggelegar", "Mausuf + Sifat"],
    ["بَعْدَ الرَّعْدِ يَنْزِلُ الْمَطَرُ", "Setelah guntur, hujan turun", "Zharaf + Fi'il Mudhari + Fa'il"],
    ["هَلْ سَمِعْتَ الرَّعْدَ؟", "Apakah kamu mendengar guntur?", "Tanya + Fi'il Madhi-Fa'il + Maf'ul bih"],
    ["الرَّعْدُ مُخِيفٌ", "Guntur itu menakutkan", "Mubtada + Khabar"]
  ]],
  ["l1_7_c18", "بَرْقٌ", "Kilat", "Cuaca", "Cahaya kilat/petir.", "Isim Mudzakkar. Jamaknya بُرُوقٌ.", [
    ["رَأَيْتُ الْبَرْقَ", "Saya melihat kilat", "Fi'il Madhi-Fa'il + Maf'ul bih"],
    ["الْبَرْقُ يَسْبِقُ الرَّعْدَ", "Kilat mendahului guntur", "Mubtada + Jumlah Fi'liyyah"],
    ["أَضَاءَ الْبَرْقُ السَّمَاءَ", "Kilat menerangi langit", "Fi'il Madhi + Fa'il + Maf'ul bih"],
    ["بَرْقٌ لَامِعٌ", "Kilat yang bersinar", "Mausuf + Sifat"],
    ["لَمَعَ الْبَرْقُ", "Kilat menyambar", "Fi'il Madhi + Fa'il"],
    ["سُرْعَةُ الْبَرْقِ", "Kecepatan kilat", "Mudhaf + Mudhaf ilayh"],
    ["مِثْلُ الْبَرْقِ", "Seperti kilat (sangat cepat)", "Mudhaf + Mudhaf ilayh"],
    ["خَطَفَ الْبَرْقُ أَبْصَارَهُمْ", "Kilat menyambar penglihatan mereka", "Fi'il Madhi + Fa'il + Maf'ul bih"],
    ["الْبَرْقُ مُخِيفٌ", "Kilat itu menakutkan", "Mubtada + Khabar"],
    ["هَلْ رَأَيْتَ الْبَرْقَ اللَّيْلَةَ؟", "Apakah kamu melihat kilat malam ini?", "Tanya + Fi'il Madhi-Fa'il + Maf'ul bih + Zharaf"]
  ]],
  ["l1_7_c19", "ضَبَابٌ", "Kabut", "Cuaca", "Kabut.", "Isim Mudzakkar.", [
    ["الضَّبَابُ كَثِيفٌ", "Kabut itu tebal", "Mubtada + Khabar"],
    ["لَا أَرَى بِسَبَبِ الضَّبَابِ", "Saya tidak melihat karena kabut", "Nafi + Fi'il Mudhari + Syibhul Jumlah"],
    ["يَظْهَرُ الضَّبَابُ فِي الصَّبَاحِ", "Kabut muncul di pagi hari", "Fi'il Mudhari + Fa'il + Syibhul Jumlah"],
    ["قِيَادَةُ السَّيَّارَةِ صَعْبَةٌ فِي الضَّبَابِ", "Mengendarai mobil sulit saat kabut", "Mubtada + Khabar + Syibhul Jumlah"],
    ["اِنْقَشَعَ الضَّبَابُ", "Kabut telah menyingkir", "Fi'il Madhi + Fa'il"],
    ["ضَبَابٌ خَفِيفٌ", "Kabut tipis", "Mausuf + Sifat"],
    ["غَطَّى الضَّبَابُ الْمَدِينَةَ", "Kabut menutupi kota", "Fi'il Madhi + Fa'il + Maf'ul bih"],
    ["يَوْمٌ ضَبَابِيٌّ", "Hari berkabut", "Mausuf + Sifat (Nisbah)"],
    ["الرُّؤْيَةُ سَيِّئَةٌ بِالضَّبَابِ", "Jarak pandang buruk karena kabut", "Mubtada + Khabar + Syibhul Jumlah"],
    ["ضَبَابُ لَنْدَنَ", "Kabut London", "Mudhaf + Mudhaf ilayh"]
  ]],
  ["l1_7_c20", "قَوْسُ قُزَحَ", "Pelangi", "Cuaca", "Pelangi.", "Frasa idhafah. قَوْسُ (busur) قُزَحَ (nama).", [
    ["ظَهَرَ قَوْسُ قُزَحَ", "Pelangi telah muncul", "Fi'il Madhi + Fa'il (idhafah)"],
    ["قَوْسُ قُزَحَ جَمِيلٌ", "Pelangi itu indah", "Mubtada + Khabar"],
    ["أَلْوَانُ قَوْسِ قُزَحَ", "Warna-warna pelangi", "Mudhaf + Mudhaf ilayh"],
    ["أَرَى قَوْسَ قُزَحَ", "Saya melihat pelangi", "Fi'il Mudhari-Fa'il + Maf'ul bih (idhafah)"],
    ["قَوْسُ قُزَحَ بَعْدَ الْمَطَرِ", "Pelangi muncul setelah hujan", "Mubtada + Zharaf"],
    ["مَا أَجْمَلَ قَوْسَ قُزَحَ!", "Betapa indahnya pelangi!", "Ta'ajjub"],
    ["قَوْسُ قُزَحَ فِيهِ سَبْعَةُ أَلْوَانٍ", "Pelangi di dalamnya ada tujuh warna", "Mubtada + Jumlah Ismiyyah"],
    ["أُحِبُّ رُؤْيَةَ قَوْسِ قُزَحَ", "Saya suka melihat pelangi", "Fi'il Mudhari-Fa'il + Maf'ul bih (idhafah)"],
    ["اِخْتَفَى قَوْسُ قُزَحَ", "Pelangi telah menghilang", "Fi'il Madhi + Fa'il"],
    ["صَوَّرْتُ قَوْسَ قُزَحَ", "Saya memotret pelangi", "Fi'il Madhi-Fa'il + Maf'ul bih"]
  ]],
  ["l1_7_c21", "أَسَدٌ", "Singa", "Hewan", "Singa. Simbol keberanian.", "Isim Mudzakkar. Jamaknya أُسُودٌ.", [
    ["الْأَسَدُ مَلِكُ الْغَابَةِ", "Singa adalah raja hutan", "Mubtada + Khabar (idhafah)"],
    ["رَأَيْتُ أَسَدًا", "Saya melihat seekor singa", "Fi'il Madhi-Fa'il + Maf'ul bih"],
    ["زَأَرَ الْأَسَدُ", "Singa itu mengaum", "Fi'il Madhi + Fa'il"],
    ["الْأَسَدُ حَيَوَانٌ مُفْتَرِسٌ", "Singa adalah hewan buas", "Mubtada + Khabar + Sifat"],
    ["هُوَ شُجَاعٌ كَالْأَسَدِ", "Dia berani seperti singa", "Mubtada + Khabar + Syibhul Jumlah"],
    ["أُسُودُ إِفْرِيقِيَا", "Singa-singa Afrika", "Mudhaf + Mudhaf ilayh"],
    ["هَلْ تَخَافُ مِنَ الْأَسَدِ؟", "Apakah kamu takut pada singa?", "Tanya + Fi'il Mudhari-Fa'il + Syibhul Jumlah"],
    ["شِبْلُ الْأَسَدِ", "Anak singa", "Mudhaf + Mudhaf ilayh"],
    ["أَسَدٌ جَائِعٌ", "Singa yang lapar", "Mausuf + Sifat"],
    ["حَدِيقَةُ الْأُسُودِ", "Taman/kandang singa", "Mudhaf + Mudhaf ilayh"]
  ]],
  ["l1_7_c22", "فَرَسٌ", "Kuda", "Hewan", "Kuda. Bisa untuk jantan/betina.", "Muannats majazi (biasanya) atau mudzakkar. Sinonimnya حِصَانٌ.", [
    ["هَذَا فَرَسٌ سَرِيعٌ", "Ini kuda yang cepat", "Mubtada + Khabar + Sifat"],
    ["رَكِبْتُ الْفَرَسَ", "Saya menunggang kuda", "Fi'il Madhi-Fa'il + Maf'ul bih"],
    ["الْفَرَسُ الْعَرَبِيُّ أَصِيلٌ", "Kuda Arab itu murni/asli", "Mubtada + Sifat + Khabar"],
    ["سِبَاقُ الْأَفْرَاسِ", "Balapan kuda-kuda", "Mudhaf + Mudhaf ilayh"],
    ["فَرَسٌ أَبْيَضُ", "Kuda putih", "Mausuf + Sifat (Wazan Af'alu)"],
    ["أَطْعَمْتُ الْفَرَسَ", "Saya memberi makan kuda", "Fi'il Madhi-Fa'il + Maf'ul bih"],
    ["يَرْكُضُ الْفَرَسُ", "Kuda itu berlari", "Fi'il Mudhari + Fa'il"],
    ["فَرَسُ النَّبِيِّ", "Kuda nabi", "Mudhaf + Mudhaf ilayh"],
    ["شَعْرُ الْفَرَسِ جَمِيلٌ", "Rambut kuda itu indah", "Mubtada (idhafah) + Khabar"],
    ["اِشْتَرَى فَرَسًا", "Dia membeli seekor kuda", "Fi'il Madhi + Maf'ul bih"]
  ]],
  ["l1_7_c23", "كَلْبٌ", "Anjing", "Hewan", "Anjing.", "Isim Mudzakkar. Jamaknya كِلَابٌ.", [
    ["كَلْبُ الْحِرَاسَةِ", "Anjing penjaga", "Mudhaf + Mudhaf ilayh"],
    ["الْكَلْبُ يَنْبَحُ", "Anjing itu menggonggong", "Mubtada + Jumlah Fi'liyyah"],
    ["هَذَا كَلْبٌ وَفِيٌّ", "Ini anjing yang setia", "Mubtada + Khabar + Sifat"],
    ["لَا تُدْخِلِ الْكَلْبَ الْبَيْتَ", "Jangan masukkan anjing ke rumah", "La Nahiyah + Fi'il Mudhari + Maf'ul bih 1 + Maf'ul bih 2"],
    ["كَلْبٌ صَغِيرٌ", "Anjing kecil", "Mausuf + Sifat"],
    ["أَطْعَمْتُ الْكَلْبَ الْجَائِعَ", "Saya memberi makan anjing yang lapar", "Fi'il Madhi-Fa'il + Maf'ul bih + Sifat"],
    ["عَضَّهُ الْكَلْبُ", "Anjing menggigitnya", "Fi'il Madhi-Maf'ul bih + Fa'il"],
    ["كَلْبُ الصَّيْدِ", "Anjing pemburu", "Mudhaf + Mudhaf ilayh"],
    ["هَرَبَ الْكَلْبُ", "Anjing itu lari", "Fi'il Madhi + Fa'il"],
    ["الْكَلْبُ نَائِمٌ", "Anjing itu tidur", "Mubtada + Khabar"]
  ]],
  ["l1_7_c24", "قِطٌّ", "Kucing", "Hewan", "Kucing.", "Isim Mudzakkar. Muannatsnya: قِطَّةٌ. Jamaknya قِطَطٌ.", [
    ["الْقِطَّةُ تَلْعَبُ", "Kucing (pr) itu sedang bermain", "Mubtada + Jumlah Fi'liyyah"],
    ["عِنْدِي قِطٌّ جَمِيلٌ", "Saya punya kucing (lk) yang cantik", "Khabar Muqaddam + Mubtada Muakhkhar + Sifat"],
    ["قِطٌّ أَسْوَدُ", "Kucing hitam", "Mausuf + Sifat (Wazan Af'alu)"],
    ["أُطْعِمُ الْقِطَّةَ", "Saya memberi makan kucing (pr)", "Fi'il Mudhari-Fa'il + Maf'ul bih"],
    ["مُوَاءُ الْقِطِّ", "Suara (meong) kucing", "Mudhaf + Mudhaf ilayh"],
    ["الْقِطَّةُ نَائِمَةٌ عَلَى السَّرِيرِ", "Kucing tidur di atas kasur", "Mubtada + Khabar + Syibhul Jumlah"],
    ["أُحِبُّ الْقِطَطَ", "Saya suka kucing-kucing", "Fi'il Mudhari-Fa'il + Maf'ul bih"],
    ["قِطَّةٌ صَغِيرَةٌ", "Kucing kecil (anak kucing)", "Mausuf + Sifat"],
    ["يَخَافُ الْفَأْرُ مِنَ الْقِطِّ", "Tikus takut pada kucing", "Fi'il Mudhari + Fa'il + Syibhul Jumlah"],
    ["هَلْ عِنْدَكَ قِطٌّ؟", "Apakah kamu punya kucing?", "Tanya + Khabar Muqaddam + Mubtada Muakhkhar"]
  ]],
  ["l1_7_c25", "طَائِرٌ", "Burung", "Hewan", "Burung.", "Isim Fa'il. Jamaknya طُيُورٌ.", [
    ["الطَّائِرُ يَطِيرُ فِي السَّمَاءِ", "Burung itu terbang di langit", "Mubtada + Jumlah Fi'liyyah + Syibhul Jumlah"],
    ["سَمِعْتُ صَوْتَ طَائِرٍ", "Saya mendengar suara burung", "Fi'il Madhi-Fa'il + Maf'ul bih (idhafah)"],
    ["طَائِرٌ جَمِيلٌ", "Burung yang indah", "Mausuf + Sifat"],
    ["فِي الْقَفَصِ طَائِرٌ", "Di dalam sangkar ada burung", "Khabar Muqaddam + Mubtada Muakhkhar"],
    ["أَطْعَمْتُ الطُّيُورَ", "Saya memberi makan burung-burung", "Fi'il Madhi-Fa'il + Maf'ul bih"],
    ["هَذَا طَائِرٌ غَرِيبٌ", "Ini burung yang aneh", "Mubtada + Khabar + Sifat"],
    ["الطُّيُورُ تُهَاجِرُ", "Burung-burung bermigrasi", "Mubtada + Jumlah Fi'liyyah"],
    ["رِيشُ الطَّائِرِ مُلَوَّنٌ", "Bulu burung itu berwarna-warni", "Mubtada (idhafah) + Khabar"],
    ["أُحِبُّ مُشَاهَدَةَ الطُّيُورِ", "Saya suka mengamati burung", "Fi'il Mudhari-Fa'il + Maf'ul bih (idhafah)"],
    ["غَرَّدَ الطَّائِرُ عَلَى الشَّجَرَةِ", "Burung itu berkicau di atas pohon", "Fi'il Madhi + Fa'il + Syibhul Jumlah"]
  ]],
  ["l1_7_c26", "كَبِيرٌ", "Besar", "Sifat Alam", "Besar (ukuran atau usia).", "Isim Sifat. Muannats: كَبِيرَةٌ. Jamaknya: كِبَارٌ.", [
    ["جَبَلٌ كَبِيرٌ", "Gunung yang besar", "Mausuf + Sifat (Mudzakkar)"],
    ["شَجَرَةٌ كَبِيرَةٌ", "Pohon yang besar", "Mausuf + Sifat (Muannats)"],
    ["هَذَا بَحْرٌ كَبِيرٌ", "Ini laut yang besar", "Mubtada + Khabar + Sifat"],
    ["الْبَيْتُ كَبِيرٌ", "Rumah itu besar", "Mubtada + Khabar"],
    ["هُوَ أَكْبَرُ مِنِّي", "Dia lebih besar dari saya", "Mubtada + Isim Tafdhil + Syibhul Jumlah"],
    ["حَجَرٌ كَبِيرٌ", "Batu besar", "Mausuf + Sifat"],
    ["نَهْرٌ كَبِيرٌ يَجْرِي", "Sungai besar yang mengalir", "Mausuf + Sifat + Sifat (Jumlah)"],
    ["الْمَدِينَةُ الْكَبِيرَةُ", "Kota yang besar", "Mausuf (Ma'rifah) + Sifat (Ma'rifah)"],
    ["الْكَبِيرُ يَعْطِفُ عَلَى الصَّغِيرِ", "Yang besar (tua) menyayangi yang kecil (muda)", "Mubtada + Jumlah Fi'liyyah"],
    ["عَالَمٌ كَبِيرٌ", "Dunia yang besar", "Mausuf + Sifat"]
  ]],
  ["l1_7_c27", "جَمِيلٌ", "Indah", "Sifat Alam", "Indah/cantik.", "Isim Sifat. Muannats: جَمِيلَةٌ.", [
    ["مَنْظَرٌ جَمِيلٌ", "Pemandangan yang indah", "Mausuf + Sifat (Mudzakkar)"],
    ["زَهْرَةٌ جَمِيلَةٌ", "Bunga yang cantik", "Mausuf + Sifat (Muannats)"],
    ["الطَّبِيعَةُ جَمِيلَةٌ", "Alam itu indah", "Mubtada + Khabar"],
    ["هَذَا طَائِرٌ جَمِيلٌ", "Ini burung yang indah", "Mubtada + Khabar + Sifat"],
    ["السَّمَاءُ جَمِيلَةٌ الْيَوْمَ", "Langit indah hari ini", "Mubtada + Khabar + Zharaf"],
    ["بَحْرٌ جَمِيلٌ صَافٍ", "Laut yang indah nan jernih", "Mausuf + Sifat 1 + Sifat 2"],
    ["الْخَطُّ الْجَمِيلُ", "Tulisan yang indah", "Mausuf (Ma'rifah) + Sifat (Ma'rifah)"],
    ["أَخْلَاقٌ جَمِيلَةٌ", "Akhlak yang indah (jamak ghairu aqil)", "Mausuf + Sifat"],
    ["صَوْتُ الطَّائِرِ جَمِيلٌ", "Suara burung itu indah", "Mubtada (idhafah) + Khabar"],
    ["مَا أَجْمَلَ هَذَا الْبُسْتَانَ!", "Betapa indahnya kebun ini!", "Ta'ajjub"]
  ]],
  ["l1_7_c28", "خَضْرَاءُ", "Hijau (muannats)", "Sifat Alam", "Warna hijau untuk benda muannats.", "Bentuk muannats dari أَخْضَرُ. Tidak boleh ditanwin.", [
    ["شَجَرَةٌ خَضْرَاءُ", "Pohon yang hijau", "Mausuf (Muannats) + Sifat (Fa'la')"],
    ["أَرْضٌ خَضْرَاءُ", "Bumi yang hijau", "Mausuf + Sifat"],
    ["عُشْبٌ أَخْضَرُ", "Rumput yang hijau (mudzakkar)", "Mausuf (Mudzakkar) + Sifat (Af'alu)"],
    ["وَرَقَةٌ خَضْرَاءُ", "Daun yang hijau", "Mausuf + Sifat"],
    ["السَّيَّارَةُ الْخَضْرَاءُ", "Mobil hijau itu", "Mausuf (Ma'rifah) + Sifat (Ma'rifah)"],
    ["حَدِيقَةٌ خَضْرَاءُ جَمِيلَةٌ", "Taman hijau yang indah", "Mausuf + Sifat 1 + Sifat 2"],
    ["الْخُضْرَوَاتُ خَضْرَاءُ", "Sayuran itu berwarna hijau", "Mubtada + Khabar"],
    ["عَيْنَانِ خَضْرَاوَانِ", "Dua mata yang hijau", "Mausuf + Sifat"],
    ["الْقُبَّةُ الْخَضْرَاءُ", "Kubah hijau (Masjid Nabawi)", "Mausuf + Sifat"],
    ["جِبَالٌ خَضْرَاءُ", "Gunung-gunung yang hijau", "Mausuf + Sifat"]
  ]],
  ["l1_7_c29", "زَرْقَاءُ", "Biru (muannats)", "Sifat Alam", "Warna biru untuk benda muannats.", "Bentuk muannats dari أَزْرَقُ. Tidak ditanwin.", [
    ["السَّمَاءُ زَرْقَاءُ", "Langit itu biru", "Mubtada + Khabar"],
    ["زَهْرَةٌ زَرْقَاءُ", "Bunga yang biru", "Mausuf (Muannats) + Sifat (Fa'la')"],
    ["بَحْرٌ أَزْرَقُ", "Laut yang biru (mudzakkar)", "Mausuf (Mudzakkar) + Sifat (Af'alu)"],
    ["سَيَّارَةٌ زَرْقَاءُ", "Mobil biru", "Mausuf + Sifat"],
    ["عَيْنَانِ زَرْقَاوَانِ", "Dua mata yang biru", "Mausuf + Sifat"],
    ["مِيَاهٌ زَرْقَاءُ", "Air-air (perairan) yang biru", "Mausuf (Jamak) + Sifat (Mufrad Muannats)"],
    ["الْحَقِيبَةُ الزَّرْقَاءُ", "Tas biru itu", "Mausuf (Ma'rifah) + Sifat (Ma'rifah)"],
    ["لَوْنُهَا أَزْرَقُ", "Warnanya biru (kembali ke mudzakkar 'warna')", "Mubtada + Khabar"],
    ["طَائِرٌ أَزْرَقُ", "Burung biru", "Mausuf + Sifat"],
    ["غُرْفَةٌ زَرْقَاءُ", "Kamar biru", "Mausuf + Sifat"]
  ]],
  ["l1_7_c30", "نَظِيفٌ", "Bersih", "Sifat Alam", "Bersih/suci.", "Isim Sifat. Muannats: نَظِيفَةٌ.", [
    ["بَحْرٌ نَظِيفٌ", "Laut yang bersih", "Mausuf (Mudzakkar) + Sifat"],
    ["أَرْضٌ نَظِيفَةٌ", "Tanah yang bersih", "Mausuf (Muannats) + Sifat (Muannats)"],
    ["الْجَوُّ نَظِيفٌ", "Cuaca/udara bersih", "Mubtada + Khabar"],
    ["هَذَا الشَّارِعُ نَظِيفٌ", "Jalan ini bersih", "Mubtada (Badal) + Khabar"],
    ["الْمَاءُ النَّظِيفُ مُفِيدٌ", "Air yang bersih itu bermanfaat", "Mausuf + Sifat + Khabar"],
    ["الْبِيئَةُ النَّظِيفَةُ", "Lingkungan yang bersih", "Mausuf + Sifat"],
    ["غُرْفَةٌ نَظِيفَةٌ جِدًّا", "Kamar yang sangat bersih", "Mausuf + Sifat + Maf'ul muthlaq"],
    ["مَلَابِسُ نَظِيفَةٌ", "Pakaian yang bersih", "Mausuf + Sifat"],
    ["يَجِبُ أَنْ نُحَافِظَ عَلَى مَكَانٍ نَظِيفٍ", "Kita wajib menjaga tempat yang bersih", "Fi'il + Mashdar Muawwal + Syibhul Jumlah + Sifat"],
    ["قَلْبٌ نَظِيفٌ", "Hati yang bersih", "Mausuf + Sifat"]
  ]]
];

const cardsString = words.map(w => {
  const ex = w[6].map(e => `          { ar: "${e[0]}", translation: "${e[1]}", grammarNote: "${e[2]}", analysis: "${e[2]}" }`).join(',\n');
  return `      {
        id: "${w[0]}", wordAr: "${w[1]}", translation: "${w[2]}", category: "${w[3]}",
        description: "${w[4]}", logicBox: "${w[5]}",
        examples: [
${ex}
        ]
      }`;
}).join(',\n');

const quizzes = [
  ["q_l1_7_1", "Apa bahasa Arabnya 'Langit'?", ["سَمَاءٌ", "أَرْضٌ", "بَحْرٌ", "نَهْرٌ"], "سَمَاءٌ", "Langit adalah سَمَاءٌ (Samaa')."],
  ["q_l1_7_2", "Apa arti 'بَحْرٌ'?", ["Laut", "Gunung", "Sungai", "Pasir"], "Laut", "Bahr berarti laut."],
  ["q_l1_7_3", "Manakah yang berarti 'Gunung'?", ["جَبَلٌ", "حَجَرٌ", "رَمْلٌ", "عُشْبٌ"], "جَبَلٌ", "Jabal berarti gunung."],
  ["q_l1_7_4", "Apa bahasa Arabnya 'Bunga'?", ["زَهْرَةٌ", "شَجَرَةٌ", "عُشْبٌ", "حَجَرٌ"], "زَهْرَةٌ", "Zahrah berarti bunga."],
  ["q_l1_7_5", "Apa arti 'مَطَرٌ'?", ["Hujan", "Angin", "Salju", "Awan"], "Hujan", "Mathar berarti hujan."],
  ["q_l1_7_6", "Manakah yang berarti 'Awan'?", ["سَحَابٌ", "رِيحٌ", "ضَبَابٌ", "بَرْقٌ"], "سَحَابٌ", "Sahaab berarti awan."],
  ["q_l1_7_7", "Lawan kata dari حَرٌّ (Panas) adalah:", ["بَرْدٌ", "ثَلْجٌ", "مَطَرٌ", "رِيحٌ"], "بَرْدٌ", "Bard adalah dingin."],
  ["q_l1_7_8", "Apa bahasa Arabnya 'Pelangi'?", ["قَوْسُ قُزَحَ", "رَعْدٌ", "بَرْقٌ", "سَحَابٌ"], "قَوْسُ قُزَحَ", "Qawsu Quzah berarti pelangi."],
  ["q_l1_7_9", "Manakah yang berarti 'Singa'?", ["أَسَدٌ", "كَلْبٌ", "قِطٌّ", "فَرَسٌ"], "أَسَدٌ", "Asad berarti singa."],
  ["q_l1_7_10", "Apa bahasa Arabnya 'Burung'?", ["طَائِرٌ", "فَرَسٌ", "كَلْبٌ", "قِطٌّ"], "طَائِرٌ", "Thaa'ir berarti burung."],
  ["q_l1_7_11", "Kata sifat yang berarti 'Besar' adalah:", ["كَبِيرٌ", "جَمِيلٌ", "نَظِيفٌ", "حَارٌّ"], "كَبِيرٌ", "Kabiir berarti besar."],
  ["q_l1_7_12", "Apa bahasa Arabnya 'Hijau' untuk benda muannats?", ["خَضْرَاءُ", "أَخْضَرُ", "حَمْرَاءُ", "أَحْمَرُ"], "خَضْرَاءُ", "Khadhraa' adalah muannats dari Akhdhar."],
  ["q_l1_7_13", "Bentuk mudzakkar dari 'زَرْقَاءُ' (Biru) adalah:", ["أَزْرَقُ", "أَحْمَرُ", "أَبْيَضُ", "أَسْوَدُ"], "أَزْرَقُ", "Azraqu adalah mudzakkar dari Zarqaa'."],
  ["q_l1_7_14", "Kalimat yang benar (kucing hitam):", ["قِطٌّ أَسْوَدُ", "قِطٌّ أَسْوَدٌ", "قِطَّةٌ أَسْوَدُ", "قِطٌّ سَوْدَاءُ"], "قِطٌّ أَسْوَدُ", "Qithth (mudzakkar) + Aswadu (wazan af'alu, tanpa tanwin)."],
  ["q_l1_7_15", "Kalimat yang benar (pohon yang indah):", ["شَجَرَةٌ جَمِيلَةٌ", "شَجَرَةٌ جَمِيلٌ", "شَجَرَةٌ كَبِيرٌ", "شَجَرَةُ جَمِيلَةُ"], "شَجَرَةٌ جَمِيلَةٌ", "Sifat harus mengikuti mausuf dalam gender dan harakat (muannats + muannats)."],
  ["q_l1_7_16", "Manakah kata yang TIDAK boleh bertanwin (mamnu minas sharf)?", ["أَحْمَرُ", "كَبِيرٌ", "جَمِيلٌ", "نَظِيفٌ"], "أَحْمَرُ", "Kata sifat warna berwazan Af'alu dilarang bertanwin."],
  ["q_l1_7_17", "Apa arti 'أَرْضٌ'?", ["Bumi/Tanah", "Langit", "Laut", "Sungai"], "Bumi/Tanah", "Ardh berarti bumi."],
  ["q_l1_7_18", "Apa arti 'رَمْلٌ'?", ["Pasir", "Batu", "Rumput", "Tanah"], "Pasir", "Raml berarti pasir."],
  ["q_l1_7_19", "Apa bahasa Arabnya 'Batu'?", ["حَجَرٌ", "رَمْلٌ", "عُشْبٌ", "جَبَلٌ"], "حَجَرٌ", "Hajar berarti batu."],
  ["q_l1_7_20", "Apa arti 'رِيحٌ'?", ["Angin", "Hujan", "Awan", "Guntur"], "Angin", "Riih berarti angin."],
  ["q_l1_7_21", "Manakah yang berarti 'Guntur'?", ["رَعْدٌ", "بَرْقٌ", "مَطَرٌ", "سَحَابٌ"], "رَعْدٌ", "Ra'd berarti guntur."],
  ["q_l1_7_22", "Apa bahasa Arabnya 'Kilat'?", ["بَرْقٌ", "رَعْدٌ", "ضَبَابٌ", "مَطَرٌ"], "بَرْقٌ", "Barq berarti kilat."],
  ["q_l1_7_23", "Apa arti 'ضَبَابٌ'?", ["Kabut", "Salju", "Angin", "Awan"], "Kabut", "Dhabaab berarti kabut."],
  ["q_l1_7_24", "Manakah yang berarti 'Kuda'?", ["فَرَسٌ", "كَلْبٌ", "أَسَدٌ", "طَائِرٌ"], "فَرَسٌ", "Faras berarti kuda."],
  ["q_l1_7_25", "Apa bahasa Arabnya 'Anjing'?", ["كَلْبٌ", "قِطٌّ", "فَرَسٌ", "أَسَدٌ"], "كَلْبٌ", "Kalb berarti anjing."],
  ["q_l1_7_26", "Kata sifat yang berarti 'Bersih' adalah:", ["نَظِيفٌ", "جَمِيلٌ", "كَبِيرٌ", "حَارٌّ"], "نَظِيفٌ", "Nazhiif berarti bersih."],
  ["q_l1_7_27", "Kalimat yang benar (langit biru):", ["السَّمَاءُ الزَّرْقَاءُ", "السَّمَاءُ أَزْرَقُ", "السَّمَاءُ زَرْقَاءٌ", "سَمَاءٌ أَزْرَقُ"], "السَّمَاءُ الزَّرْقَاءُ", "Sama' (muannats majazi) + sifatnya wazan Fa'la' (Zarqaa')."],
  ["q_l1_7_28", "Kalimat 'بَحْرٌ أَزْرَقُ' berarti:", ["Laut biru", "Langit biru", "Sungai biru", "Air biru"], "Laut biru", "Bahr (laut) + Azraqu (biru)."],
  ["q_l1_7_29", "Kalimat 'وَرَقَةٌ خَضْرَاءُ' berarti:", ["Daun hijau", "Pohon hijau", "Rumput hijau", "Bunga hijau"], "Daun hijau", "Waraqah (daun/kertas) + Khadhraa' (hijau)."],
  ["q_l1_7_30", "Mengapa kita tidak mengatakan 'أَحْمَرٌ' (dengan tanwin)?", ["Karena ia adalah warna wazan Af'alu (Mamnu Minas Sharf)", "Karena ia adalah isim ma'rifah", "Karena ia adalah fi'il", "Karena ia di akhir kalimat"], "Karena ia adalah warna wazan Af'alu (Mamnu Minas Sharf)", "Wazan af'alu untuk warna dan cacat dilarang tanwin."]
];

const quizzesString = quizzes.map(q => {
  return `      {
        id: "${q[0]}", type: "multiple-choice",
        question: "${q[1]}",
        options: ["${q[2][0]}", "${q[2][1]}", "${q[2][2]}", "${q[2][3]}"],
        correctAnswer: "${q[3]}",
        explanation: "${q[4]}"
      }`;
}).join(',\n');

const fileContent = `import { Lesson } from "../../types";

export const l1_7: Lesson = {
  id: "l1_7",
  title: "Bab 7: Ath-Thabi'ah (Alam & Lingkungan)",
  titleAr: "الطَّبِيعَةُ",
  description: "Memahami kosakata alam semesta, cuaca, dan hewan, serta aturan khusus kata sifat warna.",
  xpReward: 1200,
  isCompleted: false,
  isLocked: false,
  type: "comprehensive",
  content: {
    introduction: "Alam semesta adalah lembaran ayat-ayat Allah yang tak tertulis, di mana setiap gunung yang menjulang, awan yang berarak, dan burung yang beterbangan membawa pesan kebesaran-Nya. Mempelajari bahasa Arab tentang alam bukan sekadar menghafal kosakata, melainkan mengasah kepekaan kita terhadap lingkungan dan keindahan ciptaan-Nya. Dalam bab ke-7 ini, kita akan melangkah ke luar ruang kelas dan menatap luasnya dunia (الطَّبِيعَةُ).\\n\\nMelalui 30 kosakata yang telah kami pilihkan, Anda akan mampu membicarakan fenomena alam, mengamati pergantian cuaca, dan menyebutkan hewan-hewan di sekitar kita. Namun, keistimewaan bab ini terletak pada 'Palet Warna Bahasa Arab'. Anda akan mempelajari rumus ajaib (وَزْنُ أَفْعَلَ - فَعْلَاءُ) yang mengatur kata sifat warna dan fisik. Aturan ini sangat unik, di mana warna seperti merah (أَحْمَرُ) dan hijau (أَخْضَرُ) tidak menerima tanwin, dan memiliki bentuk khusus untuk kata benda muannats.\\n\\nKuasailah bab ini, maka Anda tidak hanya bisa mengatakan 'langit', tapi Anda bisa melukisnya dengan kata-kata: 'Langit yang biru' (السَّمَاءُ الزَّرْقَاءُ). Mari kita bertadabbur alam melalui kacamata bahasa Arab, dan jadikan setiap kosakata baru sebagai bentuk tasbih kita kepada Sang Maha Pencipta. Selamat mengeksplorasi!",
    introTitle: "Tadabbur Alam Semesta dan Palet Warna Bahasa",
    introVerse: {
      ar: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِأُولِي الْأَلْبَابِ",
      translation: "Sesungguhnya dalam penciptaan langit dan bumi, dan silih bergantinya malam dan siang terdapat tanda-tanda bagi orang-orang yang berakal. (QS. Ali 'Imran: 190)"
    },
    introBadges: [
      { icon: "🌍", text: "KOSAKATA ALAM (Gunung, laut, hujan, hingga satwa darat dan udara)" },
      { icon: "🎨", text: "POLA WARNA (Menguasai wazan af'alu - fa'la' yang bebas tanwin)" }
    ],
    totalSentencesDisplay: "300 Kalimat Progresif",
    cards: [
${cardsString}
    ],
    grammarSection: {
      title: "Kata Sifat Warna & Cacat Fisik (وَزْنُ أَفْعَلَ - فَعْلَاءُ)",
      explanation: "Sifat WARNA dan CACAT FISIK punya wazan (pola) khusus:\\n\\nMUDZAKKAR: أَفْعَلُ\\n(Tidak boleh bertanwin, tidak boleh AL kecuali idhafah/na'at)\\nأَحْمَرُ = merah\\nأَخْضَرُ = hijau\\nأَزْرَقُ = biru\\nأَبْيَضُ = putih\\nأَسْوَدُ = hitam\\n\\nMUANNATS: فَعْلَاءُ\\n(Juga tidak boleh bertanwin)\\nحَمْرَاءُ = merah\\nخَضْرَاءُ = hijau\\nزَرْقَاءُ = biru\\nبَيْضَاءُ = putih\\nسَوْدَاءُ = hitam\\n\\nATURAN PENTING:\\n1. Tidak pakai tanwin (أَحْمَرٌ itu SALAH, yang benar أَحْمَرُ).\\n2. Mengikuti jenis kelamin benda yang disifati (Na'at-Man'ut).\\n3. Jika benda tersebut jamak ghairu aqil (benda mati/hewan jamak), gunakan sifat mufrad muannats (contoh: جِبَالٌ خَضْرَاءُ - gunung-gunung yang hijau).",
      examples: [
        { ar: "قَلَمٌ أَحْمَرُ", translation: "Pena merah (Mudzakkar)", type: "marifah" },
        { ar: "سَيَّارَةٌ حَمْرَاءُ", translation: "Mobil merah (Muannats)", type: "nakirah" },
        { ar: "ثَوْبٌ أَبْيَضُ", translation: "Baju putih", type: "marifah" },
        { ar: "وَرَقَةٌ بَيْضَاءُ", translation: "Kertas putih", type: "nakirah" },
        { ar: "شَعْرٌ أَسْوَدُ", translation: "Rambut hitam", type: "marifah" },
        { ar: "قِطَّةٌ سَوْدَاءُ", translation: "Kucing hitam", type: "nakirah" },
        { ar: "الْبَحْرُ الْأَزْرَقُ", translation: "Laut biru itu (keduanya pakai AL)", type: "marifah" },
        { ar: "السَّمَاءُ الزَّرْقَاءُ", translation: "Langit biru itu (keduanya pakai AL)", type: "marifah" }
      ],
      commonErrors: [
        {
          error: "Memberi tanwin pada warna: قَلَمٌ أَحْمَرٌ.",
          correction: "Warna wazan Af'alu adalah Mamnu Minas Sharf (dilarang tanwin). Harus: قَلَمٌ أَحْمَرُ."
        },
        {
          error: "Salah gender warna: سَيَّارَةٌ أَخْضَرُ.",
          correction: "Sayyarah itu muannats, warnanya harus wazan Fa'la'. Harus: سَيَّارَةٌ خَضْرَاءُ."
        },
        {
          error: "Menambah ta' marbuthah untuk muannats: أَحْمَرَةٌ.",
          correction: "Pola muannats warna bukan pakai ة, tapi alif mamdudah. Harus: حَمْرَاءُ."
        }
      ]
    },
    dialog: {
      context: "Dua sahabat berjalan di taman kota Madinah, mengagumi keindahan alam ciptaan Allah.",
      characters: ["عُمَر", "زَيْد"],
      lines: [
        { speaker: "عُمَر", ar: "اُنْظُرْ يَا زَيْدُ إِلَى هَذِهِ الطَّبِيعَةِ الْجَمِيلَةِ!", translation: "Lihatlah wahai Zaid pada alam yang indah ini!" },
        { speaker: "زَيْد", ar: "سُبْحَانَ اللهِ! السَّمَاءُ زَرْقَاءُ صَافِيَةٌ الْيَوْمَ.", translation: "Maha Suci Allah! Langit sangat biru dan cerah hari ini." },
        { speaker: "عُمَر", ar: "نَعَمْ، وَالْأَشْجَارُ خَضْرَاءُ وَالْهَوَاءُ نَقِيٌّ جِدًّا.", translation: "Ya, dan pohon-pohon menghijau serta udaranya sangat bersih." },
        { speaker: "زَيْد", ar: "هَلْ تَرَى ذَلِكَ الْجَبَلَ الْعَالِيَ هُنَاكَ؟", translation: "Apakah kamu melihat gunung tinggi di sana itu?" },
        { speaker: "عُمَر", ar: "نَعَمْ، إِنَّهُ جَبَلُ أُحُدٍ، جَبَلٌ عَظِيمٌ بِالْمَدِينَةِ.", translation: "Ya, itu Gunung Uhud, gunung yang agung di Madinah." },
        { speaker: "زَيْد", ar: "وَهَذِهِ الزُّهُورُ الْحَمْرَاءُ وَالْبَيْضَاءُ تُعْطِي مَنْظَرًا رَائِعًا.", translation: "Dan bunga-bunga merah dan putih ini memberikan pemandangan yang menakjubkan." },
        { speaker: "عُمَر", ar: "أَسْمَعُ صَوْتَ طَائِرٍ جَمِيلٍ يُغَرِّدُ عَلَى الشَّجَرَةِ.", translation: "Saya mendengar suara burung indah yang berkicau di pohon." },
        { speaker: "زَيْد", ar: "الطَّبِيعَةُ نِعْمَةٌ كَبِيرَةٌ مِنْ رَبِّ الْعَالَمِينَ.", translation: "Alam adalah nikmat yang besar dari Tuhan semesta alam." },
        { speaker: "عُمَر", ar: "يَجِبُ عَلَيْنَا أَنْ نُحَافِظَ عَلَى نَظَافَةِ هَذِهِ الْبِيئَةِ.", translation: "Kita wajib menjaga kebersihan lingkungan ini." },
        { speaker: "زَيْد", ar: "صَدَقْتَ يَا أَخِي. النَّظَافَةُ مِنَ الْإِيمَانِ.", translation: "Benar katamu saudaraku. Kebersihan adalah bagian dari iman." },
        { speaker: "عُمَر", ar: "لِنَجْلِسْ عَلَى هَذَا الْعُشْبِ الْأَخْضَرِ قَلِيلًا.", translation: "Mari kita duduk di atas rumput hijau ini sebentar." },
        { speaker: "زَيْد", ar: "فِكْرَةٌ طَيِّبَةٌ، الْجَوُّ هُنَا بَارِدٌ وَمُرِيحٌ.", translation: "Ide yang bagus, cuaca di sini sejuk (dingin) dan nyaman." }
      ]
    },
    quiz: [
${quizzesString}
    ]
  }
};
`;

fs.writeFileSync("src/data/lessons/l1_7.ts", fileContent);
console.log("Successfully wrote l1_7.ts!");
