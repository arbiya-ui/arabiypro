import { Lesson } from "../../types";

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
    introduction: "Alam semesta adalah lembaran ayat-ayat Allah yang tak tertulis, di mana setiap gunung yang menjulang dan burung yang beterbangan membawa pesan kebesaran-Nya. Mempelajari kosakata alam (الطَّبِيعَةُ) dalam bahasa Arab akan membawa Anda pada kepekaan luar biasa terhadap ciptaan-Nya. Dan tahukah Anda? Menyebutkan nama-nama keindahan alam ini sangatlah ringan di lisan dan mudah diingat!\n\nDi bab ke-7 ini, keistimewaan luar biasa menanti Anda: 'Palet Warna Bahasa Arab'. Anda akan mempelajari satu rumus ajaib (وَزْنُ أَفْعَلَ - فَعْلَاءُ) yang mengatur hampir seluruh kata sifat warna dan fisik. Hanya dengan memahami satu pola sederhana ini, Anda langsung bisa menguasai semua kosakata warna tanpa harus menghafal mati! Bahasa Arab terbukti memiliki pola matematis yang membuat belajar menjadi berkali-kali lipat lebih mudah.\n\nKuasailah pola cerdas ini, maka Anda tidak hanya bisa mengatakan 'langit', tapi Anda bisa melukisnya dengan indah: 'Langit yang biru' (السَّمَاءُ الزَّرْقَاءُ). Mari kita bertadabbur alam melalui kacamata bahasa Arab, nikmati kemudahan polanya, dan jadikan setiap kosakata baru sebagai bentuk tasbih yang mengalir lancar dari lisan kita. Selamat mengeksplorasi!",
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
    tips: [
      {
        title: "Pola Warna yang Unik",
        content: "Warna memiliki pola (Wazan) yang berbeda antara laki-laki (Ahmar) dan perempuan (Hamra'). Ini adalah pola khas keindahan bahasa Arab dalam mensifati alam."
      },
      {
        title: "Warna Tanpa Tanwin",
        content: "Banyak kata warna dalam bahasa Arab bersifat 'Mamnu' minash Sharf', artinya mereka tidak boleh diakhiri dengan tanwin ( ٌ ). Cukup harakat Dhammah biasa ( ُ )."
      },
      {
        title: "Alam itu Hidup",
        content: "Kata-kata alam seperti matahari (Syams) dianggap muannats oleh orang Arab, meskipun tidak ada Ta Marbuthah. Mereka adalah kata yang memiliki gender bawaan dari sejarah."
      }
    ],
    cards: [
      {
        id: "l1_7_c1", wordAr: "سَمَاءٌ", translation: "Langit", category: "Fenomena Alam",
        description: "Langit di atas kita.", logicBox: "Muannats majazi (dianggap muannats meskipun tidak ada ta marbuthah). Jamaknya سَمَاوَاتٌ.",
        examples: [
          { ar: "السَّمَاءُ صَافِيَةٌ", translation: "Langit itu cerah", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "فِي السَّمَاءِ سَحَابٌ", translation: "Di langit ada awan", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar", analysis: "Khabar Muqaddam + Mubtada Muakhkhar" },
          { ar: "السَّمَاءُ زَرْقَاءُ", translation: "Langit itu biru", grammarNote: "Mubtada + Khabar (Wazan fa'la')", analysis: "Mubtada + Khabar (Wazan fa'la')" },
          { ar: "يَنْزِلُ الْمَطَرُ مِنَ السَّمَاءِ", translation: "Hujan turun dari langit", grammarNote: "Fi'il Mudhari + Fa'il + Syibhul Jumlah", analysis: "Fi'il Mudhari + Fa'il + Syibhul Jumlah" },
          { ar: "نَظَرْتُ إِلَى السَّمَاءِ", translation: "Saya melihat ke langit", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "سَمَاءٌ مُرْصَعَةٌ بِالنُّجُومِ", translation: "Langit yang dihiasi bintang-bintang", grammarNote: "Mausuf + Sifat + Syibhul Jumlah", analysis: "Mausuf + Sifat + Syibhul Jumlah" },
          { ar: "خَلَقَ اللهُ السَّمَاوَاتِ", translation: "Allah menciptakan langit-langit", grammarNote: "Fi'il Madhi + Fa'il + Maf'ul bih", analysis: "Fi'il Madhi + Fa'il + Maf'ul bih" },
          { ar: "مَا أَجْمَلَ السَّمَاءَ!", translation: "Betapa indahnya langit!", grammarNote: "Ta'ajjub", analysis: "Ta'ajjub" },
          { ar: "رَفَعَ السَّمَاءَ بِغَيْرِ عَمَدٍ", translation: "Dia meninggikan langit tanpa tiang", grammarNote: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah" },
          { ar: "السَّمَاءُ تُمْطِرُ الآنَ", translation: "Langit sedang hujan sekarang", grammarNote: "Mubtada + Jumlah Fi'liyyah + Zharaf", analysis: "Mubtada + Jumlah Fi'liyyah + Zharaf" }
        ]
      },
      {
        id: "l1_7_c2", wordAr: "أَرْضٌ", translation: "Bumi/Tanah", category: "Fenomena Alam",
        description: "Bumi atau permukaan tanah.", logicBox: "Muannats majazi. Jamaknya أَرَاضٍ.",
        examples: [
          { ar: "الْأَرْضُ وَاسِعَةٌ", translation: "Bumi itu luas", grammarNote: "Mubtada + Khabar (Muannats)", analysis: "Mubtada + Khabar (Muannats)" },
          { ar: "يَمْشِي عَلَى الْأَرْضِ", translation: "Dia berjalan di atas tanah/bumi", grammarNote: "Fi'il Mudhari + Syibhul Jumlah", analysis: "Fi'il Mudhari + Syibhul Jumlah" },
          { ar: "زَرَعْنَا الْأَرْضَ", translation: "Kami menanami tanah itu", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "فِي الْأَرْضِ جِبَالٌ", translation: "Di bumi ada gunung-gunung", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar", analysis: "Khabar Muqaddam + Mubtada Muakhkhar" },
          { ar: "الْأَرْضُ تَدُورُ حَوْلَ الشَّمْسِ", translation: "Bumi berputar mengelilingi matahari", grammarNote: "Mubtada + Jumlah Fi'liyyah + Zharaf", analysis: "Mubtada + Jumlah Fi'liyyah + Zharaf" },
          { ar: "سَقَطَ عَلَى الْأَرْضِ", translation: "Dia jatuh ke tanah", grammarNote: "Fi'il Madhi + Syibhul Jumlah", analysis: "Fi'il Madhi + Syibhul Jumlah" },
          { ar: "أَرْضٌ خَضْرَاءُ", translation: "Bumi/tanah yang hijau", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "رَبُّ السَّمَاوَاتِ وَالْأَرْضِ", translation: "Tuhan langit dan bumi", grammarNote: "Mudhaf + Mudhaf ilayh + Ma'thuf", analysis: "Mudhaf + Mudhaf ilayh + Ma'thuf" },
          { ar: "هَذِهِ أَرْضٌ طَيِّبَةٌ", translation: "Ini tanah yang baik", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "الْأَرْضُ كُرَوِيَّةٌ", translation: "Bumi itu bulat", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" }
        ]
      },
      {
        id: "l1_7_c3", wordAr: "بَحْرٌ", translation: "Laut", category: "Fenomena Alam",
        description: "Laut atau samudra.", logicBox: "Isim Mudzakkar. Jamaknya بِحَارٌ.",
        examples: [
          { ar: "الْبَحْرُ عَمِيقٌ", translation: "Laut itu dalam", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "مَاءُ الْبَحْرِ مَالِحٌ", translation: "Air laut itu asin", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "ذَهَبْنَا إِلَى الْبَحْرِ", translation: "Kami pergi ke laut", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "فِي الْبَحْرِ أَسْمَاكٌ كَثِيرَةٌ", translation: "Di laut ada banyak ikan", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar + Sifat", analysis: "Khabar Muqaddam + Mubtada Muakhkhar + Sifat" },
          { ar: "الْبَحْرُ هَادِئٌ الْيَوْمَ", translation: "Laut tenang hari ini", grammarNote: "Mubtada + Khabar + Zharaf", analysis: "Mubtada + Khabar + Zharaf" },
          { ar: "أُحِبُّ الْبَحْرَ", translation: "Saya suka laut", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih" },
          { ar: "أَمْوَاجُ الْبَحْرِ عَالِيَةٌ", translation: "Ombak laut tinggi", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "سَفِينَةٌ فِي الْبَحْرِ", translation: "Sebuah kapal di laut", grammarNote: "Mubtada (Nakirah) + Syibhul Jumlah", analysis: "Mubtada (Nakirah) + Syibhul Jumlah" },
          { ar: "الْبَحْرُ الْأَحْمَرُ", translation: "Laut Merah", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "يَسْبَحُ فِي الْبَحْرِ", translation: "Dia berenang di laut", grammarNote: "Fi'il Mudhari + Syibhul Jumlah", analysis: "Fi'il Mudhari + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_7_c4", wordAr: "نَهْرٌ", translation: "Sungai", category: "Fenomena Alam",
        description: "Sungai.", logicBox: "Isim Mudzakkar. Jamaknya أَنْهَارٌ.",
        examples: [
          { ar: "النَّهْرُ طَوِيلٌ", translation: "Sungai itu panjang", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "مَاءُ النَّهْرِ عَذْبٌ", translation: "Air sungai itu tawar", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "نَهْرُ النِّيلِ فِي مِصْرَ", translation: "Sungai Nil ada di Mesir", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah", analysis: "Mubtada (idhafah) + Syibhul Jumlah" },
          { ar: "يَجْرِي النَّهْرُ بِسُرْعَةٍ", translation: "Sungai mengalir dengan cepat", grammarNote: "Fi'il Mudhari + Fa'il + Syibhul Jumlah", analysis: "Fi'il Mudhari + Fa'il + Syibhul Jumlah" },
          { ar: "سَبَحْنَا فِي النَّهْرِ", translation: "Kami berenang di sungai", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "عَلَى ضِفَّتَيِ النَّهْرِ أَشْجَارٌ", translation: "Di kedua tepi sungai ada pohon-pohon", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar", analysis: "Khabar Muqaddam + Mubtada Muakhkhar" },
          { ar: "جَنَّاتٌ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ", translation: "Surga yang mengalir di bawahnya sungai-sungai", grammarNote: "Mausuf + Jumlah Sifat", analysis: "Mausuf + Jumlah Sifat" },
          { ar: "هَذَا نَهْرٌ كَبِيرٌ", translation: "Ini sungai yang besar", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "جَفَّ النَّهْرُ", translation: "Sungai itu mengering", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "عَبَرَ النَّهْرَ", translation: "Dia menyeberangi sungai", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" }
        ]
      },
      {
        id: "l1_7_c5", wordAr: "جَبَلٌ", translation: "Gunung", category: "Fenomena Alam",
        description: "Gunung.", logicBox: "Isim Mudzakkar. Jamaknya جِبَالٌ.",
        examples: [
          { ar: "الْجَبَلُ مُرْتَفِعٌ", translation: "Gunung itu tinggi", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "تَسَلَّقْنَا الْجَبَلَ", translation: "Kami mendaki gunung", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "قِمَّةُ الْجَبَلِ بَارِدَةٌ", translation: "Puncak gunung itu dingin", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "الْجِبَالُ رَوَاسِي", translation: "Gunung-gunung itu pasak/kokoh", grammarNote: "Mubtada (Jamak) + Khabar", analysis: "Mubtada (Jamak) + Khabar" },
          { ar: "جَبَلُ أُحُدٍ جَبَلٌ يُحِبُّنَا وَنُحِبُّهُ", translation: "Gunung Uhud adalah gunung yang mencintai kami dan kami mencintainya", grammarNote: "Mubtada + Khabar + Sifat (Jumlah)", analysis: "Mubtada + Khabar + Sifat (Jumlah)" },
          { ar: "نَظَرْتُ إِلَى الْجَبَلِ", translation: "Saya melihat ke arah gunung", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "خَلْفَ الْجَبَلِ قَرْيَةٌ", translation: "Di balik gunung ada desa", grammarNote: "Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar", analysis: "Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar" },
          { ar: "هَذَا جَبَلٌ عَظِيمٌ", translation: "Ini gunung yang agung", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "الْجَبَلُ أَخْضَرُ", translation: "Gunung itu hijau", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "جِبَالٌ عَالِيَةٌ", translation: "Gunung-gunung yang tinggi", grammarNote: "Mausuf (Jamak) + Sifat (Mufrad Muannats)", analysis: "Mausuf (Jamak) + Sifat (Mufrad Muannats)" }
        ]
      },
      {
        id: "l1_7_c6", wordAr: "شَجَرَةٌ", translation: "Pohon", category: "Fenomena Alam",
        description: "Pohon tunggal.", logicBox: "Isim Muannats (ada ta marbuthah). Jamaknya أَشْجَارٌ (jamak taksir) atau شَجَرٌ (isim jins jam'i).",
        examples: [
          { ar: "الشَّجَرَةُ مُثْمِرَةٌ", translation: "Pohon itu berbuah", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "هَذِهِ شَجَرَةٌ كَبِيرَةٌ", translation: "Ini pohon yang besar", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "زَرَعْتُ شَجَرَةً فِي الْحَدِيقَةِ", translation: "Saya menanam sebuah pohon di taman", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "تَحْتَ الشَّجَرَةِ ظِلٌّ", translation: "Di bawah pohon itu ada bayangan/naungan", grammarNote: "Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar", analysis: "Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar" },
          { ar: "أَوْرَاقُ الشَّجَرَةِ خَضْرَاءُ", translation: "Daun-daun pohon itu hijau", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "الشَّجَرَةُ الطَّيِّبَةُ", translation: "Pohon yang baik", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "قَطَعَ الشَّجَرَةَ", translation: "Dia menebang pohon itu", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" },
          { ar: "تَسَلَّقَ الطِّفْلُ الشَّجَرَةَ", translation: "Anak itu memanjat pohon", grammarNote: "Fi'il Madhi + Fa'il + Maf'ul bih", analysis: "Fi'il Madhi + Fa'il + Maf'ul bih" },
          { ar: "شَجَرَةُ التُّفَّاحِ", translation: "Pohon apel", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "أَشْجَارُ الْغَابَةِ", translation: "Pohon-pohon hutan", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_7_c7", wordAr: "زَهْرَةٌ", translation: "Bunga", category: "Fenomena Alam",
        description: "Bunga tunggal.", logicBox: "Isim Muannats. Jamaknya أَزْهَارٌ.",
        examples: [
          { ar: "الزَّهْرَةُ جَمِيلَةٌ", translation: "Bunga itu indah", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "قَطَفْتُ زَهْرَةً", translation: "Saya memetik sekuntum bunga", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "هَذِهِ زَهْرَةٌ حَمْرَاءُ", translation: "Ini bunga merah", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "رَائِحَةُ الزَّهْرَةِ طَيِّبَةٌ", translation: "Aroma bunga itu wangi", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "فِي الْحَدِيقَةِ أَزْهَارٌ مُخْتَلِفَةٌ", translation: "Di taman ada bunga-bunga yang berbeda", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar + Sifat", analysis: "Khabar Muqaddam + Mubtada Muakhkhar + Sifat" },
          { ar: "أَعْطَيْتُهَا زَهْرَةً", translation: "Saya memberinya sekuntum bunga", grammarNote: "Fi'il Madhi-Fa'il-Maf'ul bih 1 + Maf'ul bih 2", analysis: "Fi'il Madhi-Fa'il-Maf'ul bih 1 + Maf'ul bih 2" },
          { ar: "الزَّهْرَةُ تَتَفَتَّحُ", translation: "Bunga itu mekar", grammarNote: "Mubtada + Jumlah Fi'liyyah", analysis: "Mubtada + Jumlah Fi'liyyah" },
          { ar: "زَهْرَةُ اللُّوتَسِ", translation: "Bunga lotus", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "أَزْهَارُ الرَّبِيعِ", translation: "Bunga-bunga musim semi", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "هَلْ تُحِبُّ الزُّهُورَ؟", translation: "Apakah kamu suka bunga-bunga?", grammarNote: "Tanya + Fi'il-Fa'il + Maf'ul bih", analysis: "Tanya + Fi'il-Fa'il + Maf'ul bih" }
        ]
      },
      {
        id: "l1_7_c8", wordAr: "عُشْبٌ", translation: "Rumput", category: "Fenomena Alam",
        description: "Rumput.", logicBox: "Isim Mudzakkar. Jamaknya أَعْشَابٌ.",
        examples: [
          { ar: "الْعُشْبُ أَخْضَرُ", translation: "Rumput itu hijau", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "جَلَسْنَا عَلَى الْعُشْبِ", translation: "Kami duduk di atas rumput", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "يَأْكُلُ الْخَرُوفُ الْعُشْبَ", translation: "Domba memakan rumput", grammarNote: "Fi'il Mudhari + Fa'il + Maf'ul bih", analysis: "Fi'il Mudhari + Fa'il + Maf'ul bih" },
          { ar: "نَمَا الْعُشْبُ بَعْدَ الْمَطَرِ", translation: "Rumput tumbuh setelah hujan", grammarNote: "Fi'il Madhi + Fa'il + Zharaf", analysis: "Fi'il Madhi + Fa'il + Zharaf" },
          { ar: "عُشْبٌ طَوِيلٌ", translation: "Rumput yang panjang", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "قَصَّ الْعُشْبَ", translation: "Dia memotong rumput", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" },
          { ar: "مَلْعَبٌ مَلِيءٌ بِالْعُشْبِ", translation: "Lapangan yang penuh dengan rumput", grammarNote: "Mubtada/Khabar + Sifat + Syibhul Jumlah", analysis: "Mubtada/Khabar + Sifat + Syibhul Jumlah" },
          { ar: "أَعْشَابٌ طِبِّيَّةٌ", translation: "Rerumputan (herbal) medis", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "الْعُشْبُ مُبَلَّلٌ", translation: "Rumput itu basah", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "فِي الْحَدِيقَةِ عُشْبٌ نَاعِمٌ", translation: "Di taman ada rumput yang lembut", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar + Sifat", analysis: "Khabar Muqaddam + Mubtada Muakhkhar + Sifat" }
        ]
      },
      {
        id: "l1_7_c9", wordAr: "رَمْلٌ", translation: "Pasir", category: "Fenomena Alam",
        description: "Pasir.", logicBox: "Isim Mudzakkar. Jamaknya رِمَالٌ.",
        examples: [
          { ar: "رَمْلُ الْبَحْرِ", translation: "Pasir laut", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "مَشَيْنَا عَلَى الرَّمْلِ", translation: "Kami berjalan di atas pasir", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "الرِّمَالُ ذَهَبِيَّةٌ", translation: "Pasir-pasir itu (berwarna) keemasan", grammarNote: "Mubtada (Jamak) + Khabar", analysis: "Mubtada (Jamak) + Khabar" },
          { ar: "يَلْعَبُ الْأَطْفَالُ فِي الرَّمْلِ", translation: "Anak-anak bermain di pasir", grammarNote: "Fi'il Mudhari + Fa'il + Syibhul Jumlah", analysis: "Fi'il Mudhari + Fa'il + Syibhul Jumlah" },
          { ar: "الرَّمْلُ نَاعِمٌ", translation: "Pasir itu halus", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "قَلْعَةٌ مِنَ الرَّمْلِ", translation: "Kastil/istana dari pasir", grammarNote: "Mubtada + Syibhul Jumlah", analysis: "Mubtada + Syibhul Jumlah" },
          { ar: "رِمَالُ الصَّحْرَاءِ", translation: "Pasir-pasir gurun", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "دَخَلَ الرَّمْلُ فِي حِذَائِي", translation: "Pasir masuk ke sepatuku", grammarNote: "Fi'il Madhi + Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi + Fa'il + Syibhul Jumlah" },
          { ar: "الرَّمْلُ حَارٌّ", translation: "Pasir itu panas", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "جَمَعَ رَمْلًا", translation: "Dia mengumpulkan pasir", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" }
        ]
      },
      {
        id: "l1_7_c10", wordAr: "حَجَرٌ", translation: "Batu", category: "Fenomena Alam",
        description: "Batu.", logicBox: "Isim Mudzakkar. Jamaknya أَحْجَارٌ.",
        examples: [
          { ar: "الْحَجَرُ قَاسٍ", translation: "Batu itu keras", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "رَمَى الْوَلَدُ حَجَرًا", translation: "Anak itu melempar sebuah batu", grammarNote: "Fi'il Madhi + Fa'il + Maf'ul bih", analysis: "Fi'il Madhi + Fa'il + Maf'ul bih" },
          { ar: "هَذَا حَجَرٌ ثَقِيلٌ", translation: "Ini batu yang berat", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "الْحَجَرُ الْأَسْوَدُ", translation: "Batu hitam (Hajar Aswad)", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "بَنَى الْبَيْتَ بِالْحَجَرِ", translation: "Dia membangun rumah dengan batu", grammarNote: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah" },
          { ar: "أَحْجَارٌ كَرِيمَةٌ", translation: "Batu-batu mulia (permata)", grammarNote: "Mausuf (Jamak) + Sifat (Muannats)", analysis: "Mausuf (Jamak) + Sifat (Muannats)" },
          { ar: "تَعَثَّرَ بِحَجَرٍ", translation: "Dia tersandung batu", grammarNote: "Fi'il Madhi + Syibhul Jumlah", analysis: "Fi'il Madhi + Syibhul Jumlah" },
          { ar: "كَالْحَجَرِ", translation: "Seperti batu", grammarNote: "Huruf Jar + Isim Majrur", analysis: "Huruf Jar + Isim Majrur" },
          { ar: "ضَرَبَهُ بِحَجَرٍ", translation: "Dia memukulnya dengan batu", grammarNote: "Fi'il Madhi-Maf'ul bih 1 + Syibhul Jumlah", analysis: "Fi'il Madhi-Maf'ul bih 1 + Syibhul Jumlah" },
          { ar: "جَمَعْنَا الْأَحْجَارَ", translation: "Kami mengumpulkan batu-batu", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" }
        ]
      },
      {
        id: "l1_7_c11", wordAr: "مَطَرٌ", translation: "Hujan", category: "Cuaca",
        description: "Hujan.", logicBox: "Isim Mudzakkar. Jamaknya أَمْطَارٌ.",
        examples: [
          { ar: "الْمَطَرُ غَزِيرٌ", translation: "Hujan itu lebat", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "يَنْزِلُ الْمَطَرُ", translation: "Hujan turun", grammarNote: "Fi'il Mudhari + Fa'il", analysis: "Fi'il Mudhari + Fa'il" },
          { ar: "نُحِبُّ الْمَطَرَ", translation: "Kami menyukai hujan", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih" },
          { ar: "دَعَوْتُ وَقْتَ الْمَطَرِ", translation: "Saya berdoa ketika hujan", grammarNote: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh", analysis: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh" },
          { ar: "مَاءُ الْمَطَرِ طَاهِرٌ", translation: "Air hujan itu suci", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "تَوَقَّفَ الْمَطَرُ", translation: "Hujan berhenti", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "صَوْتُ الْمَطَرِ", translation: "Suara hujan", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "مَطَرٌ خَفِيفٌ", translation: "Hujan ringan", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "اِبْتَلَّتْ مَلَابِسِي بِالْمَطَرِ", translation: "Pakaianku basah karena hujan", grammarNote: "Fi'il Madhi + Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi + Fa'il + Syibhul Jumlah" },
          { ar: "مَوْسِمُ الْأَمْطَارِ", translation: "Musim hujan", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_7_c12", wordAr: "رِيحٌ", translation: "Angin", category: "Cuaca",
        description: "Angin.", logicBox: "Muannats majazi (biasanya). Jamaknya رِيَاحٌ.",
        examples: [
          { ar: "الرِّيحُ شَدِيدَةٌ", translation: "Angin itu kencang", grammarNote: "Mubtada + Khabar (Muannats)", analysis: "Mubtada + Khabar (Muannats)" },
          { ar: "تَهُبُّ الرِّيحُ", translation: "Angin berhembus", grammarNote: "Fi'il Mudhari + Fa'il", analysis: "Fi'il Mudhari + Fa'il" },
          { ar: "صَوْتُ الرِّيحِ مُخِيفٌ", translation: "Suara angin menakutkan", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "الرِّيَاحُ بَارِدَةٌ الْيَوْمَ", translation: "Angin dingin hari ini", grammarNote: "Mubtada (Jamak) + Khabar (Muannats) + Zharaf", analysis: "Mubtada (Jamak) + Khabar (Muannats) + Zharaf" },
          { ar: "أَرْسَلَ الرِّيَاحَ مُبَشِّرَاتٍ", translation: "Dia mengutus angin sebagai pembawa kabar gembira", grammarNote: "Fi'il Madhi + Maf'ul bih + Hal", analysis: "Fi'il Madhi + Maf'ul bih + Hal" },
          { ar: "وَقَفْنَا فِي وَجْهِ الرِّيحِ", translation: "Kami berdiri menghadap angin", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "رِيحٌ صَرْصَرٌ", translation: "Angin yang sangat kencang dan dingin", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "هَدَأَتِ الرِّيحُ", translation: "Angin telah mereda", grammarNote: "Fi'il Madhi (Muannats) + Fa'il", analysis: "Fi'il Madhi (Muannats) + Fa'il" },
          { ar: "الرِّيحُ تَحْمِلُ السَّحَابَ", translation: "Angin membawa awan", grammarNote: "Mubtada + Jumlah Fi'liyyah", analysis: "Mubtada + Jumlah Fi'liyyah" },
          { ar: "رِيحُ الشَّمَالِ", translation: "Angin utara", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_7_c13", wordAr: "ثَلْجٌ", translation: "Salju", category: "Cuaca",
        description: "Salju atau es.", logicBox: "Isim Mudzakkar. Jamaknya ثُلُوجٌ.",
        examples: [
          { ar: "الثَّلْجُ أَبْيَضُ", translation: "Salju itu putih", grammarNote: "Mubtada + Khabar (Wazan Af'alu)", analysis: "Mubtada + Khabar (Wazan Af'alu)" },
          { ar: "يَسْقُطُ الثَّلْجُ فِي الشِّتَاءِ", translation: "Salju turun di musim dingin", grammarNote: "Fi'il Mudhari + Fa'il + Syibhul Jumlah", analysis: "Fi'il Mudhari + Fa'il + Syibhul Jumlah" },
          { ar: "الثَّلْجُ بَارِدٌ جِدًّا", translation: "Salju sangat dingin", grammarNote: "Mubtada + Khabar + Maf'ul muthlaq", analysis: "Mubtada + Khabar + Maf'ul muthlaq" },
          { ar: "لَعِبْنَا بِالثَّلْجِ", translation: "Kami bermain dengan salju", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "رَجُلُ الثَّلْجِ", translation: "Manusia salju", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "ذَابَ الثَّلْجُ", translation: "Salju telah mencair", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "الْجَبَلُ مُغَطَّى بِالثَّلْجِ", translation: "Gunung itu tertutupi salju", grammarNote: "Mubtada + Khabar + Syibhul Jumlah", analysis: "Mubtada + Khabar + Syibhul Jumlah" },
          { ar: "مَاءٌ مُثَلَّجٌ", translation: "Air es (didinginkan dengan es)", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "عَاصِفَةٌ ثَلْجِيَّةٌ", translation: "Badai salju", grammarNote: "Mausuf + Sifat (Nisbah)", analysis: "Mausuf + Sifat (Nisbah)" },
          { ar: "مَنْظَرُ الثَّلْجِ جَمِيلٌ", translation: "Pemandangan salju itu indah", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" }
        ]
      },
      {
        id: "l1_7_c14", wordAr: "سَحَابٌ", translation: "Awan", category: "Cuaca",
        description: "Awan. Kata benda kolektif.", logicBox: "Isim Mudzakkar. Jamaknya سُحُبٌ. Mufrad untuk satu awan: سَحَابَةٌ.",
        examples: [
          { ar: "السَّحَابُ أَبْيَضُ", translation: "Awan itu putih", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "السَّحَابُ يُغَطِّي الشَّمْسَ", translation: "Awan menutupi matahari", grammarNote: "Mubtada + Jumlah Fi'liyyah", analysis: "Mubtada + Jumlah Fi'liyyah" },
          { ar: "سَحَابَةٌ سَوْدَاءُ", translation: "Satu awan hitam", grammarNote: "Mausuf (Muannats) + Sifat (Muannats)", analysis: "Mausuf (Muannats) + Sifat (Muannats)" },
          { ar: "الرِّيحُ تَسُوقُ السَّحَابَ", translation: "Angin menggiring awan", grammarNote: "Mubtada + Jumlah Fi'liyyah", analysis: "Mubtada + Jumlah Fi'liyyah" },
          { ar: "تَجَمَّعَتِ السُّحُبُ", translation: "Awan-awan telah berkumpul", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "سَحَابٌ مُمْطِرٌ", translation: "Awan yang membawa hujan", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "نَظَرْتُ إِلَى السَّحَابِ", translation: "Saya melihat ke arah awan", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "فِي السَّمَاءِ سَحَابٌ قَلِيلٌ", translation: "Di langit ada sedikit awan", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar + Sifat", analysis: "Khabar Muqaddam + Mubtada Muakhkhar + Sifat" },
          { ar: "تَشَكَّلَ السَّحَابُ", translation: "Awan telah terbentuk", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "السَّحَابُ يَمْشِي", translation: "Awan berjalan", grammarNote: "Mubtada + Jumlah Fi'liyyah", analysis: "Mubtada + Jumlah Fi'liyyah" }
        ]
      },
      {
        id: "l1_7_c15", wordAr: "حَرٌّ", translation: "Panas", category: "Cuaca",
        description: "Suhu atau cuaca panas (noun). Berbeda dengan حَارٌّ (adjective).", logicBox: "Masdar/Isim. Tidak digunakan sebagai sifat secara langsung.",
        examples: [
          { ar: "الْحَرُّ شَدِيدٌ", translation: "Panasnya sangat menyengat", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "لَا أُطِيقُ الْحَرَّ", translation: "Saya tidak tahan panas", grammarNote: "Nafi + Fi'il Mudhari-Fa'il + Maf'ul bih", analysis: "Nafi + Fi'il Mudhari-Fa'il + Maf'ul bih" },
          { ar: "فِي الصَّيْفِ يَكْثُرُ الْحَرُّ", translation: "Di musim panas, panas merajalela", grammarNote: "Syibhul Jumlah + Fi'il Mudhari + Fa'il", analysis: "Syibhul Jumlah + Fi'il Mudhari + Fa'il" },
          { ar: "مَوْجَةُ حَرٍّ", translation: "Gelombang panas", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "شَعَرْتُ بِالْحَرِّ", translation: "Saya merasa kepanasan", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "الْحَرُّ مُتْعِبٌ", translation: "Panas itu melelahkan", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "هَرَبْنَا مِنَ الْحَرِّ", translation: "Kami lari dari kepanasan", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "خَفَّ الْحَرُّ", translation: "Panasnya telah berkurang", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "فِي هَذَا الْحَرِّ", translation: "Dalam cuaca panas ini", grammarNote: "Syibhul Jumlah (Badal)", analysis: "Syibhul Jumlah (Badal)" },
          { ar: "يَقِينَا مِنَ الْحَرِّ", translation: "Melindungi kita dari kepanasan", grammarNote: "Fi'il Mudhari-Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Mudhari-Maf'ul bih + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_7_c16", wordAr: "بَرْدٌ", translation: "Dingin", category: "Cuaca",
        description: "Suhu atau cuaca dingin (noun).", logicBox: "Isim Mudzakkar. Sifatnya بَارِدٌ.",
        examples: [
          { ar: "الْبَرْدُ قَارِسٌ", translation: "Dinginnya menusuk tulang", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "أَشْعُرُ بِالْبَرْدِ", translation: "Saya merasa kedinginan", grammarNote: "Fi'il Mudhari-Fa'il + Syibhul Jumlah", analysis: "Fi'il Mudhari-Fa'il + Syibhul Jumlah" },
          { ar: "مَرِضَ مِنَ الْبَرْدِ", translation: "Dia sakit karena kedinginan", grammarNote: "Fi'il Madhi + Syibhul Jumlah", analysis: "Fi'il Madhi + Syibhul Jumlah" },
          { ar: "فَصْلُ الشِّتَاءِ بَرْدٌ شَدِيدٌ", translation: "Musim dingin adalah dingin yang sangat", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "قَارِسُ الْبَرْدِ", translation: "Sangat dingin", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "هَلْ تَشْعُرُ بِالْبَرْدِ؟", translation: "Apakah kamu merasa kedinginan?", grammarNote: "Tanya + Fi'il Mudhari-Fa'il + Syibhul Jumlah", analysis: "Tanya + Fi'il Mudhari-Fa'il + Syibhul Jumlah" },
          { ar: "اِحْمِ نَفْسَكَ مِنَ الْبَرْدِ", translation: "Lindungi dirimu dari rasa dingin", grammarNote: "Fi'il Amr + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Amr + Maf'ul bih + Syibhul Jumlah" },
          { ar: "الْبَرْدُ هُنَا خَفِيفٌ", translation: "Kedinginan di sini ringan", grammarNote: "Mubtada + Zharaf + Khabar", analysis: "Mubtada + Zharaf + Khabar" },
          { ar: "لَا أُحِبُّ الْبَرْدَ", translation: "Saya tidak suka kedinginan", grammarNote: "Nafi + Fi'il Mudhari-Fa'il + Maf'ul bih", analysis: "Nafi + Fi'il Mudhari-Fa'il + Maf'ul bih" },
          { ar: "مَلَابِسُ تُدْفِئُ مِنَ الْبَرْدِ", translation: "Pakaian yang menghangatkan dari rasa dingin", grammarNote: "Mubtada + Jumlah Fi'liyyah", analysis: "Mubtada + Jumlah Fi'liyyah" }
        ]
      },
      {
        id: "l1_7_c17", wordAr: "رَعْدٌ", translation: "Guntur", category: "Cuaca",
        description: "Suara guntur di langit.", logicBox: "Isim Mudzakkar. Jamaknya رُعُودٌ.",
        examples: [
          { ar: "صَوْتُ الرَّعْدِ", translation: "Suara guntur", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "سَمِعْتُ رَعْدًا", translation: "Saya mendengar guntur", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "الرَّعْدُ قَوِيٌّ", translation: "Guntur itu kuat", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "خَافَ الطِّفْلُ مِنَ الرَّعْدِ", translation: "Anak itu takut dari guntur", grammarNote: "Fi'il Madhi + Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi + Fa'il + Syibhul Jumlah" },
          { ar: "يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ", translation: "Guntur bertasbih memuji-Nya", grammarNote: "Fi'il Mudhari + Fa'il + Syibhul Jumlah", analysis: "Fi'il Mudhari + Fa'il + Syibhul Jumlah" },
          { ar: "الرَّعْدُ وَالْبَرْقُ", translation: "Guntur dan kilat", grammarNote: "Ma'thuf alayh + Ma'thuf", analysis: "Ma'thuf alayh + Ma'thuf" },
          { ar: "رَعْدٌ مُدَوٍّ", translation: "Guntur yang menggelegar", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "بَعْدَ الرَّعْدِ يَنْزِلُ الْمَطَرُ", translation: "Setelah guntur, hujan turun", grammarNote: "Zharaf + Fi'il Mudhari + Fa'il", analysis: "Zharaf + Fi'il Mudhari + Fa'il" },
          { ar: "هَلْ سَمِعْتَ الرَّعْدَ؟", translation: "Apakah kamu mendengar guntur?", grammarNote: "Tanya + Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Tanya + Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "الرَّعْدُ مُخِيفٌ", translation: "Guntur itu menakutkan", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" }
        ]
      },
      {
        id: "l1_7_c18", wordAr: "بَرْقٌ", translation: "Kilat", category: "Cuaca",
        description: "Cahaya kilat/petir.", logicBox: "Isim Mudzakkar. Jamaknya بُرُوقٌ.",
        examples: [
          { ar: "رَأَيْتُ الْبَرْقَ", translation: "Saya melihat kilat", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "الْبَرْقُ يَسْبِقُ الرَّعْدَ", translation: "Kilat mendahului guntur", grammarNote: "Mubtada + Jumlah Fi'liyyah", analysis: "Mubtada + Jumlah Fi'liyyah" },
          { ar: "أَضَاءَ الْبَرْقُ السَّمَاءَ", translation: "Kilat menerangi langit", grammarNote: "Fi'il Madhi + Fa'il + Maf'ul bih", analysis: "Fi'il Madhi + Fa'il + Maf'ul bih" },
          { ar: "بَرْقٌ لَامِعٌ", translation: "Kilat yang bersinar", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "لَمَعَ الْبَرْقُ", translation: "Kilat menyambar", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "سُرْعَةُ الْبَرْقِ", translation: "Kecepatan kilat", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "مِثْلُ الْبَرْقِ", translation: "Seperti kilat (sangat cepat)", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "خَطَفَ الْبَرْقُ أَبْصَارَهُمْ", translation: "Kilat menyambar penglihatan mereka", grammarNote: "Fi'il Madhi + Fa'il + Maf'ul bih", analysis: "Fi'il Madhi + Fa'il + Maf'ul bih" },
          { ar: "الْبَرْقُ مُخِيفٌ", translation: "Kilat itu menakutkan", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "هَلْ رَأَيْتَ الْبَرْقَ اللَّيْلَةَ؟", translation: "Apakah kamu melihat kilat malam ini?", grammarNote: "Tanya + Fi'il Madhi-Fa'il + Maf'ul bih + Zharaf", analysis: "Tanya + Fi'il Madhi-Fa'il + Maf'ul bih + Zharaf" }
        ]
      },
      {
        id: "l1_7_c19", wordAr: "ضَبَابٌ", translation: "Kabut", category: "Cuaca",
        description: "Kabut.", logicBox: "Isim Mudzakkar.",
        examples: [
          { ar: "الضَّبَابُ كَثِيفٌ", translation: "Kabut itu tebal", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "لَا أَرَى بِسَبَبِ الضَّبَابِ", translation: "Saya tidak melihat karena kabut", grammarNote: "Nafi + Fi'il Mudhari + Syibhul Jumlah", analysis: "Nafi + Fi'il Mudhari + Syibhul Jumlah" },
          { ar: "يَظْهَرُ الضَّبَابُ فِي الصَّبَاحِ", translation: "Kabut muncul di pagi hari", grammarNote: "Fi'il Mudhari + Fa'il + Syibhul Jumlah", analysis: "Fi'il Mudhari + Fa'il + Syibhul Jumlah" },
          { ar: "قِيَادَةُ السَّيَّارَةِ صَعْبَةٌ فِي الضَّبَابِ", translation: "Mengendarai mobil sulit saat kabut", grammarNote: "Mubtada + Khabar + Syibhul Jumlah", analysis: "Mubtada + Khabar + Syibhul Jumlah" },
          { ar: "اِنْقَشَعَ الضَّبَابُ", translation: "Kabut telah menyingkir", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "ضَبَابٌ خَفِيفٌ", translation: "Kabut tipis", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "غَطَّى الضَّبَابُ الْمَدِينَةَ", translation: "Kabut menutupi kota", grammarNote: "Fi'il Madhi + Fa'il + Maf'ul bih", analysis: "Fi'il Madhi + Fa'il + Maf'ul bih" },
          { ar: "يَوْمٌ ضَبَابِيٌّ", translation: "Hari berkabut", grammarNote: "Mausuf + Sifat (Nisbah)", analysis: "Mausuf + Sifat (Nisbah)" },
          { ar: "الرُّؤْيَةُ سَيِّئَةٌ بِالضَّبَابِ", translation: "Jarak pandang buruk karena kabut", grammarNote: "Mubtada + Khabar + Syibhul Jumlah", analysis: "Mubtada + Khabar + Syibhul Jumlah" },
          { ar: "ضَبَابُ لَنْدَنَ", translation: "Kabut London", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_7_c20", wordAr: "قَوْسُ قُزَحَ", translation: "Pelangi", category: "Cuaca",
        description: "Pelangi.", logicBox: "Frasa idhafah. قَوْسُ (busur) قُزَحَ (nama).",
        examples: [
          { ar: "ظَهَرَ قَوْسُ قُزَحَ", translation: "Pelangi telah muncul", grammarNote: "Fi'il Madhi + Fa'il (idhafah)", analysis: "Fi'il Madhi + Fa'il (idhafah)" },
          { ar: "قَوْسُ قُزَحَ جَمِيلٌ", translation: "Pelangi itu indah", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "أَلْوَانُ قَوْسِ قُزَحَ", translation: "Warna-warna pelangi", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "أَرَى قَوْسَ قُزَحَ", translation: "Saya melihat pelangi", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih (idhafah)", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih (idhafah)" },
          { ar: "قَوْسُ قُزَحَ بَعْدَ الْمَطَرِ", translation: "Pelangi muncul setelah hujan", grammarNote: "Mubtada + Zharaf", analysis: "Mubtada + Zharaf" },
          { ar: "مَا أَجْمَلَ قَوْسَ قُزَحَ!", translation: "Betapa indahnya pelangi!", grammarNote: "Ta'ajjub", analysis: "Ta'ajjub" },
          { ar: "قَوْسُ قُزَحَ فِيهِ سَبْعَةُ أَلْوَانٍ", translation: "Pelangi di dalamnya ada tujuh warna", grammarNote: "Mubtada + Jumlah Ismiyyah", analysis: "Mubtada + Jumlah Ismiyyah" },
          { ar: "أُحِبُّ رُؤْيَةَ قَوْسِ قُزَحَ", translation: "Saya suka melihat pelangi", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih (idhafah)", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih (idhafah)" },
          { ar: "اِخْتَفَى قَوْسُ قُزَحَ", translation: "Pelangi telah menghilang", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "صَوَّرْتُ قَوْسَ قُزَحَ", translation: "Saya memotret pelangi", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" }
        ]
      },
      {
        id: "l1_7_c21", wordAr: "أَسَدٌ", translation: "Singa", category: "Hewan",
        description: "Singa. Simbol keberanian.", logicBox: "Isim Mudzakkar. Jamaknya أُسُودٌ.",
        examples: [
          { ar: "الْأَسَدُ مَلِكُ الْغَابَةِ", translation: "Singa adalah raja hutan", grammarNote: "Mubtada + Khabar (idhafah)", analysis: "Mubtada + Khabar (idhafah)" },
          { ar: "رَأَيْتُ أَسَدًا", translation: "Saya melihat seekor singa", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "زَأَرَ الْأَسَدُ", translation: "Singa itu mengaum", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "الْأَسَدُ حَيَوَانٌ مُفْتَرِسٌ", translation: "Singa adalah hewan buas", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "هُوَ شُجَاعٌ كَالْأَسَدِ", translation: "Dia berani seperti singa", grammarNote: "Mubtada + Khabar + Syibhul Jumlah", analysis: "Mubtada + Khabar + Syibhul Jumlah" },
          { ar: "أُسُودُ إِفْرِيقِيَا", translation: "Singa-singa Afrika", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "هَلْ تَخَافُ مِنَ الْأَسَدِ؟", translation: "Apakah kamu takut pada singa?", grammarNote: "Tanya + Fi'il Mudhari-Fa'il + Syibhul Jumlah", analysis: "Tanya + Fi'il Mudhari-Fa'il + Syibhul Jumlah" },
          { ar: "شِبْلُ الْأَسَدِ", translation: "Anak singa", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "أَسَدٌ جَائِعٌ", translation: "Singa yang lapar", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "حَدِيقَةُ الْأُسُودِ", translation: "Taman/kandang singa", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_7_c22", wordAr: "فَرَسٌ", translation: "Kuda", category: "Hewan",
        description: "Kuda. Bisa untuk jantan/betina.", logicBox: "Muannats majazi (biasanya) atau mudzakkar. Sinonimnya حِصَانٌ.",
        examples: [
          { ar: "هَذَا فَرَسٌ سَرِيعٌ", translation: "Ini kuda yang cepat", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "رَكِبْتُ الْفَرَسَ", translation: "Saya menunggang kuda", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "الْفَرَسُ الْعَرَبِيُّ أَصِيلٌ", translation: "Kuda Arab itu murni/asli", grammarNote: "Mubtada + Sifat + Khabar", analysis: "Mubtada + Sifat + Khabar" },
          { ar: "سِبَاقُ الْأَفْرَاسِ", translation: "Balapan kuda-kuda", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "فَرَسٌ أَبْيَضُ", translation: "Kuda putih", grammarNote: "Mausuf + Sifat (Wazan Af'alu)", analysis: "Mausuf + Sifat (Wazan Af'alu)" },
          { ar: "أَطْعَمْتُ الْفَرَسَ", translation: "Saya memberi makan kuda", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "يَرْكُضُ الْفَرَسُ", translation: "Kuda itu berlari", grammarNote: "Fi'il Mudhari + Fa'il", analysis: "Fi'il Mudhari + Fa'il" },
          { ar: "فَرَسُ النَّبِيِّ", translation: "Kuda nabi", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "شَعْرُ الْفَرَسِ جَمِيلٌ", translation: "Rambut kuda itu indah", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "اِشْتَرَى فَرَسًا", translation: "Dia membeli seekor kuda", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" }
        ]
      },
      {
        id: "l1_7_c23", wordAr: "كَلْبٌ", translation: "Anjing", category: "Hewan",
        description: "Anjing.", logicBox: "Isim Mudzakkar. Jamaknya كِلَابٌ.",
        examples: [
          { ar: "كَلْبُ الْحِرَاسَةِ", translation: "Anjing penjaga", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "الْكَلْبُ يَنْبَحُ", translation: "Anjing itu menggonggong", grammarNote: "Mubtada + Jumlah Fi'liyyah", analysis: "Mubtada + Jumlah Fi'liyyah" },
          { ar: "هَذَا كَلْبٌ وَفِيٌّ", translation: "Ini anjing yang setia", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "لَا تُدْخِلِ الْكَلْبَ الْبَيْتَ", translation: "Jangan masukkan anjing ke rumah", grammarNote: "La Nahiyah + Fi'il Mudhari + Maf'ul bih 1 + Maf'ul bih 2", analysis: "La Nahiyah + Fi'il Mudhari + Maf'ul bih 1 + Maf'ul bih 2" },
          { ar: "كَلْبٌ صَغِيرٌ", translation: "Anjing kecil", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "أَطْعَمْتُ الْكَلْبَ الْجَائِعَ", translation: "Saya memberi makan anjing yang lapar", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Sifat", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Sifat" },
          { ar: "عَضَّهُ الْكَلْبُ", translation: "Anjing menggigitnya", grammarNote: "Fi'il Madhi-Maf'ul bih + Fa'il", analysis: "Fi'il Madhi-Maf'ul bih + Fa'il" },
          { ar: "كَلْبُ الصَّيْدِ", translation: "Anjing pemburu", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "هَرَبَ الْكَلْبُ", translation: "Anjing itu lari", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "الْكَلْبُ نَائِمٌ", translation: "Anjing itu tidur", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" }
        ]
      },
      {
        id: "l1_7_c24", wordAr: "قِطٌّ", translation: "Kucing", category: "Hewan",
        description: "Kucing.", logicBox: "Isim Mudzakkar. Muannatsnya: قِطَّةٌ. Jamaknya قِطَطٌ.",
        examples: [
          { ar: "الْقِطَّةُ تَلْعَبُ", translation: "Kucing (pr) itu sedang bermain", grammarNote: "Mubtada + Jumlah Fi'liyyah", analysis: "Mubtada + Jumlah Fi'liyyah" },
          { ar: "عِنْدِي قِطٌّ جَمِيلٌ", translation: "Saya punya kucing (lk) yang cantik", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar + Sifat", analysis: "Khabar Muqaddam + Mubtada Muakhkhar + Sifat" },
          { ar: "قِطٌّ أَسْوَدُ", translation: "Kucing hitam", grammarNote: "Mausuf + Sifat (Wazan Af'alu)", analysis: "Mausuf + Sifat (Wazan Af'alu)" },
          { ar: "أُطْعِمُ الْقِطَّةَ", translation: "Saya memberi makan kucing (pr)", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih" },
          { ar: "مُوَاءُ الْقِطِّ", translation: "Suara (meong) kucing", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "الْقِطَّةُ نَائِمَةٌ عَلَى السَّرِيرِ", translation: "Kucing tidur di atas kasur", grammarNote: "Mubtada + Khabar + Syibhul Jumlah", analysis: "Mubtada + Khabar + Syibhul Jumlah" },
          { ar: "أُحِبُّ الْقِطَطَ", translation: "Saya suka kucing-kucing", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih" },
          { ar: "قِطَّةٌ صَغِيرَةٌ", translation: "Kucing kecil (anak kucing)", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "يَخَافُ الْفَأْرُ مِنَ الْقِطِّ", translation: "Tikus takut pada kucing", grammarNote: "Fi'il Mudhari + Fa'il + Syibhul Jumlah", analysis: "Fi'il Mudhari + Fa'il + Syibhul Jumlah" },
          { ar: "هَلْ عِنْدَكَ قِطٌّ؟", translation: "Apakah kamu punya kucing?", grammarNote: "Tanya + Khabar Muqaddam + Mubtada Muakhkhar", analysis: "Tanya + Khabar Muqaddam + Mubtada Muakhkhar" }
        ]
      },
      {
        id: "l1_7_c25", wordAr: "طَائِرٌ", translation: "Burung", category: "Hewan",
        description: "Burung.", logicBox: "Isim Fa'il. Jamaknya طُيُورٌ.",
        examples: [
          { ar: "الطَّائِرُ يَطِيرُ فِي السَّمَاءِ", translation: "Burung itu terbang di langit", grammarNote: "Mubtada + Jumlah Fi'liyyah + Syibhul Jumlah", analysis: "Mubtada + Jumlah Fi'liyyah + Syibhul Jumlah" },
          { ar: "سَمِعْتُ صَوْتَ طَائِرٍ", translation: "Saya mendengar suara burung", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih (idhafah)", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih (idhafah)" },
          { ar: "طَائِرٌ جَمِيلٌ", translation: "Burung yang indah", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "فِي الْقَفَصِ طَائِرٌ", translation: "Di dalam sangkar ada burung", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar", analysis: "Khabar Muqaddam + Mubtada Muakhkhar" },
          { ar: "أَطْعَمْتُ الطُّيُورَ", translation: "Saya memberi makan burung-burung", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "هَذَا طَائِرٌ غَرِيبٌ", translation: "Ini burung yang aneh", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "الطُّيُورُ تُهَاجِرُ", translation: "Burung-burung bermigrasi", grammarNote: "Mubtada + Jumlah Fi'liyyah", analysis: "Mubtada + Jumlah Fi'liyyah" },
          { ar: "رِيشُ الطَّائِرِ مُلَوَّنٌ", translation: "Bulu burung itu berwarna-warni", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "أُحِبُّ مُشَاهَدَةَ الطُّيُورِ", translation: "Saya suka mengamati burung", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih (idhafah)", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih (idhafah)" },
          { ar: "غَرَّدَ الطَّائِرُ عَلَى الشَّجَرَةِ", translation: "Burung itu berkicau di atas pohon", grammarNote: "Fi'il Madhi + Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi + Fa'il + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_7_c26", wordAr: "كَبِيرٌ", translation: "Besar", category: "Sifat Alam",
        description: "Besar (ukuran atau usia).", logicBox: "Isim Sifat. Muannats: كَبِيرَةٌ. Jamaknya: كِبَارٌ.",
        examples: [
          { ar: "جَبَلٌ كَبِيرٌ", translation: "Gunung yang besar", grammarNote: "Mausuf + Sifat (Mudzakkar)", analysis: "Mausuf + Sifat (Mudzakkar)" },
          { ar: "شَجَرَةٌ كَبِيرَةٌ", translation: "Pohon yang besar", grammarNote: "Mausuf + Sifat (Muannats)", analysis: "Mausuf + Sifat (Muannats)" },
          { ar: "هَذَا بَحْرٌ كَبِيرٌ", translation: "Ini laut yang besar", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "الْبَيْتُ كَبِيرٌ", translation: "Rumah itu besar", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "هُوَ أَكْبَرُ مِنِّي", translation: "Dia lebih besar dari saya", grammarNote: "Mubtada + Isim Tafdhil + Syibhul Jumlah", analysis: "Mubtada + Isim Tafdhil + Syibhul Jumlah" },
          { ar: "حَجَرٌ كَبِيرٌ", translation: "Batu besar", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "نَهْرٌ كَبِيرٌ يَجْرِي", translation: "Sungai besar yang mengalir", grammarNote: "Mausuf + Sifat + Sifat (Jumlah)", analysis: "Mausuf + Sifat + Sifat (Jumlah)" },
          { ar: "الْمَدِينَةُ الْكَبِيرَةُ", translation: "Kota yang besar", grammarNote: "Mausuf (Ma'rifah) + Sifat (Ma'rifah)", analysis: "Mausuf (Ma'rifah) + Sifat (Ma'rifah)" },
          { ar: "الْكَبِيرُ يَعْطِفُ عَلَى الصَّغِيرِ", translation: "Yang besar (tua) menyayangi yang kecil (muda)", grammarNote: "Mubtada + Jumlah Fi'liyyah", analysis: "Mubtada + Jumlah Fi'liyyah" },
          { ar: "عَالَمٌ كَبِيرٌ", translation: "Dunia yang besar", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" }
        ]
      },
      {
        id: "l1_7_c27", wordAr: "جَمِيلٌ", translation: "Indah", category: "Sifat Alam",
        description: "Indah/cantik.", logicBox: "Isim Sifat. Muannats: جَمِيلَةٌ.",
        examples: [
          { ar: "مَنْظَرٌ جَمِيلٌ", translation: "Pemandangan yang indah", grammarNote: "Mausuf + Sifat (Mudzakkar)", analysis: "Mausuf + Sifat (Mudzakkar)" },
          { ar: "زَهْرَةٌ جَمِيلَةٌ", translation: "Bunga yang cantik", grammarNote: "Mausuf + Sifat (Muannats)", analysis: "Mausuf + Sifat (Muannats)" },
          { ar: "الطَّبِيعَةُ جَمِيلَةٌ", translation: "Alam itu indah", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "هَذَا طَائِرٌ جَمِيلٌ", translation: "Ini burung yang indah", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "السَّمَاءُ جَمِيلَةٌ الْيَوْمَ", translation: "Langit indah hari ini", grammarNote: "Mubtada + Khabar + Zharaf", analysis: "Mubtada + Khabar + Zharaf" },
          { ar: "بَحْرٌ جَمِيلٌ صَافٍ", translation: "Laut yang indah nan jernih", grammarNote: "Mausuf + Sifat 1 + Sifat 2", analysis: "Mausuf + Sifat 1 + Sifat 2" },
          { ar: "الْخَطُّ الْجَمِيلُ", translation: "Tulisan yang indah", grammarNote: "Mausuf (Ma'rifah) + Sifat (Ma'rifah)", analysis: "Mausuf (Ma'rifah) + Sifat (Ma'rifah)" },
          { ar: "أَخْلَاقٌ جَمِيلَةٌ", translation: "Akhlak yang indah (jamak ghairu aqil)", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "صَوْتُ الطَّائِرِ جَمِيلٌ", translation: "Suara burung itu indah", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "مَا أَجْمَلَ هَذَا الْبُسْتَانَ!", translation: "Betapa indahnya kebun ini!", grammarNote: "Ta'ajjub", analysis: "Ta'ajjub" }
        ]
      },
      {
        id: "l1_7_c28", wordAr: "خَضْرَاءُ", translation: "Hijau (muannats)", category: "Sifat Alam",
        description: "Warna hijau untuk benda muannats.", logicBox: "Bentuk muannats dari أَخْضَرُ. Tidak boleh ditanwin.",
        examples: [
          { ar: "شَجَرَةٌ خَضْرَاءُ", translation: "Pohon yang hijau", grammarNote: "Mausuf (Muannats) + Sifat (Fa'la')", analysis: "Mausuf (Muannats) + Sifat (Fa'la')" },
          { ar: "أَرْضٌ خَضْرَاءُ", translation: "Bumi yang hijau", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "عُشْبٌ أَخْضَرُ", translation: "Rumput yang hijau (mudzakkar)", grammarNote: "Mausuf (Mudzakkar) + Sifat (Af'alu)", analysis: "Mausuf (Mudzakkar) + Sifat (Af'alu)" },
          { ar: "وَرَقَةٌ خَضْرَاءُ", translation: "Daun yang hijau", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "السَّيَّارَةُ الْخَضْرَاءُ", translation: "Mobil hijau itu", grammarNote: "Mausuf (Ma'rifah) + Sifat (Ma'rifah)", analysis: "Mausuf (Ma'rifah) + Sifat (Ma'rifah)" },
          { ar: "حَدِيقَةٌ خَضْرَاءُ جَمِيلَةٌ", translation: "Taman hijau yang indah", grammarNote: "Mausuf + Sifat 1 + Sifat 2", analysis: "Mausuf + Sifat 1 + Sifat 2" },
          { ar: "الْخُضْرَوَاتُ خَضْرَاءُ", translation: "Sayuran itu berwarna hijau", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "عَيْنَانِ خَضْرَاوَانِ", translation: "Dua mata yang hijau", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "الْقُبَّةُ الْخَضْرَاءُ", translation: "Kubah hijau (Masjid Nabawi)", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "جِبَالٌ خَضْرَاءُ", translation: "Gunung-gunung yang hijau", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" }
        ]
      },
      {
        id: "l1_7_c29", wordAr: "زَرْقَاءُ", translation: "Biru (muannats)", category: "Sifat Alam",
        description: "Warna biru untuk benda muannats.", logicBox: "Bentuk muannats dari أَزْرَقُ. Tidak ditanwin.",
        examples: [
          { ar: "السَّمَاءُ زَرْقَاءُ", translation: "Langit itu biru", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "زَهْرَةٌ زَرْقَاءُ", translation: "Bunga yang biru", grammarNote: "Mausuf (Muannats) + Sifat (Fa'la')", analysis: "Mausuf (Muannats) + Sifat (Fa'la')" },
          { ar: "بَحْرٌ أَزْرَقُ", translation: "Laut yang biru (mudzakkar)", grammarNote: "Mausuf (Mudzakkar) + Sifat (Af'alu)", analysis: "Mausuf (Mudzakkar) + Sifat (Af'alu)" },
          { ar: "سَيَّارَةٌ زَرْقَاءُ", translation: "Mobil biru", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "عَيْنَانِ زَرْقَاوَانِ", translation: "Dua mata yang biru", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "مِيَاهٌ زَرْقَاءُ", translation: "Air-air (perairan) yang biru", grammarNote: "Mausuf (Jamak) + Sifat (Mufrad Muannats)", analysis: "Mausuf (Jamak) + Sifat (Mufrad Muannats)" },
          { ar: "الْحَقِيبَةُ الزَّرْقَاءُ", translation: "Tas biru itu", grammarNote: "Mausuf (Ma'rifah) + Sifat (Ma'rifah)", analysis: "Mausuf (Ma'rifah) + Sifat (Ma'rifah)" },
          { ar: "لَوْنُهَا أَزْرَقُ", translation: "Warnanya biru (kembali ke mudzakkar 'warna')", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "طَائِرٌ أَزْرَقُ", translation: "Burung biru", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "غُرْفَةٌ زَرْقَاءُ", translation: "Kamar biru", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" }
        ]
      },
      {
        id: "l1_7_c30", wordAr: "نَظِيفٌ", translation: "Bersih", category: "Sifat Alam",
        description: "Bersih/suci.", logicBox: "Isim Sifat. Muannats: نَظِيفَةٌ.",
        examples: [
          { ar: "بَحْرٌ نَظِيفٌ", translation: "Laut yang bersih", grammarNote: "Mausuf (Mudzakkar) + Sifat", analysis: "Mausuf (Mudzakkar) + Sifat" },
          { ar: "أَرْضٌ نَظِيفَةٌ", translation: "Tanah yang bersih", grammarNote: "Mausuf (Muannats) + Sifat (Muannats)", analysis: "Mausuf (Muannats) + Sifat (Muannats)" },
          { ar: "الْجَوُّ نَظِيفٌ", translation: "Cuaca/udara bersih", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "هَذَا الشَّارِعُ نَظِيفٌ", translation: "Jalan ini bersih", grammarNote: "Mubtada (Badal) + Khabar", analysis: "Mubtada (Badal) + Khabar" },
          { ar: "الْمَاءُ النَّظِيفُ مُفِيدٌ", translation: "Air yang bersih itu bermanfaat", grammarNote: "Mausuf + Sifat + Khabar", analysis: "Mausuf + Sifat + Khabar" },
          { ar: "الْبِيئَةُ النَّظِيفَةُ", translation: "Lingkungan yang bersih", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "غُرْفَةٌ نَظِيفَةٌ جِدًّا", translation: "Kamar yang sangat bersih", grammarNote: "Mausuf + Sifat + Maf'ul muthlaq", analysis: "Mausuf + Sifat + Maf'ul muthlaq" },
          { ar: "مَلَابِسُ نَظِيفَةٌ", translation: "Pakaian yang bersih", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "يَجِبُ أَنْ نُحَافِظَ عَلَى مَكَانٍ نَظِيفٍ", translation: "Kita wajib menjaga tempat yang bersih", grammarNote: "Fi'il + Mashdar Muawwal + Syibhul Jumlah + Sifat", analysis: "Fi'il + Mashdar Muawwal + Syibhul Jumlah + Sifat" },
          { ar: "قَلْبٌ نَظِيفٌ", translation: "Hati yang bersih", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" }
        ]
      }
    ],
    grammarSection: {
      title: "Kata Sifat Warna & Cacat Fisik (وَزْنُ أَفْعَلَ - فَعْلَاءُ)",
      explanation: "Sifat WARNA dan CACAT FISIK punya wazan (pola) khusus:\n\nMUDZAKKAR: أَفْعَلُ\n(Tidak boleh bertanwin, tidak boleh AL kecuali idhafah/na'at)\nأَحْمَرُ = merah\nأَخْضَرُ = hijau\nأَزْرَقُ = biru\nأَبْيَضُ = putih\nأَسْوَدُ = hitam\n\nMUANNATS: فَعْلَاءُ\n(Juga tidak boleh bertanwin)\nحَمْرَاءُ = merah\nخَضْرَاءُ = hijau\nزَرْقَاءُ = biru\nبَيْضَاءُ = putih\nسَوْدَاءُ = hitam\n\nATURAN PENTING:\n1. Tidak pakai tanwin (أَحْمَرٌ itu SALAH, yang benar أَحْمَرُ).\n2. Mengikuti jenis kelamin benda yang disifati (Na'at-Man'ut).\n3. Jika benda tersebut jamak ghairu aqil (benda mati/hewan jamak), gunakan sifat mufrad muannats (contoh: جِبَالٌ خَضْرَاءُ - gunung-gunung yang hijau).",
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
      {
        id: "q_l1_7_1", type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Langit'?",
        options: ["سَمَاءٌ", "أَرْضٌ", "بَحْرٌ", "نَهْرٌ"],
        correctAnswer: "سَمَاءٌ",
        explanation: "Langit adalah سَمَاءٌ (Samaa')."
      },
      {
        id: "q_l1_7_2", type: "multiple-choice",
        question: "Apa arti 'بَحْرٌ'?",
        options: ["Laut", "Gunung", "Sungai", "Pasir"],
        correctAnswer: "Laut",
        explanation: "Bahr berarti laut."
      },
      {
        id: "q_l1_7_3", type: "multiple-choice",
        question: "Manakah yang berarti 'Gunung'?",
        options: ["جَبَلٌ", "حَجَرٌ", "رَمْلٌ", "عُشْبٌ"],
        correctAnswer: "جَبَلٌ",
        explanation: "Jabal berarti gunung."
      },
      {
        id: "q_l1_7_4", type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Bunga'?",
        options: ["زَهْرَةٌ", "شَجَرَةٌ", "عُشْبٌ", "حَجَرٌ"],
        correctAnswer: "زَهْرَةٌ",
        explanation: "Zahrah berarti bunga."
      },
      {
        id: "q_l1_7_5", type: "multiple-choice",
        question: "Apa arti 'مَطَرٌ'?",
        options: ["Hujan", "Angin", "Salju", "Awan"],
        correctAnswer: "Hujan",
        explanation: "Mathar berarti hujan."
      },
      {
        id: "q_l1_7_6", type: "multiple-choice",
        question: "Manakah yang berarti 'Awan'?",
        options: ["سَحَابٌ", "رِيحٌ", "ضَبَابٌ", "بَرْقٌ"],
        correctAnswer: "سَحَابٌ",
        explanation: "Sahaab berarti awan."
      },
      {
        id: "q_l1_7_7", type: "multiple-choice",
        question: "Lawan kata dari حَرٌّ (Panas) adalah:",
        options: ["بَرْدٌ", "ثَلْجٌ", "مَطَرٌ", "رِيحٌ"],
        correctAnswer: "بَرْدٌ",
        explanation: "Bard adalah dingin."
      },
      {
        id: "q_l1_7_8", type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Pelangi'?",
        options: ["قَوْسُ قُزَحَ", "رَعْدٌ", "بَرْقٌ", "سَحَابٌ"],
        correctAnswer: "قَوْسُ قُزَحَ",
        explanation: "Qawsu Quzah berarti pelangi."
      },
      {
        id: "q_l1_7_9", type: "multiple-choice",
        question: "Manakah yang berarti 'Singa'?",
        options: ["أَسَدٌ", "كَلْبٌ", "قِطٌّ", "فَرَسٌ"],
        correctAnswer: "أَسَدٌ",
        explanation: "Asad berarti singa."
      },
      {
        id: "q_l1_7_10", type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Burung'?",
        options: ["طَائِرٌ", "فَرَسٌ", "كَلْبٌ", "قِطٌّ"],
        correctAnswer: "طَائِرٌ",
        explanation: "Thaa'ir berarti burung."
      },
      {
        id: "q_l1_7_11", type: "multiple-choice",
        question: "Kata sifat yang berarti 'Besar' adalah:",
        options: ["كَبِيرٌ", "جَمِيلٌ", "نَظِيفٌ", "حَارٌّ"],
        correctAnswer: "كَبِيرٌ",
        explanation: "Kabiir berarti besar."
      },
      {
        id: "q_l1_7_12", type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Hijau' untuk benda muannats?",
        options: ["خَضْرَاءُ", "أَخْضَرُ", "حَمْرَاءُ", "أَحْمَرُ"],
        correctAnswer: "خَضْرَاءُ",
        explanation: "Khadhraa' adalah muannats dari Akhdhar."
      },
      {
        id: "q_l1_7_13", type: "multiple-choice",
        question: "Bentuk mudzakkar dari 'زَرْقَاءُ' (Biru) adalah:",
        options: ["أَزْرَقُ", "أَحْمَرُ", "أَبْيَضُ", "أَسْوَدُ"],
        correctAnswer: "أَزْرَقُ",
        explanation: "Azraqu adalah mudzakkar dari Zarqaa'."
      },
      {
        id: "q_l1_7_14", type: "multiple-choice",
        question: "Kalimat yang benar (kucing hitam):",
        options: ["قِطٌّ أَسْوَدُ", "قِطٌّ أَسْوَدٌ", "قِطَّةٌ أَسْوَدُ", "قِطٌّ سَوْدَاءُ"],
        correctAnswer: "قِطٌّ أَسْوَدُ",
        explanation: "Qithth (mudzakkar) + Aswadu (wazan af'alu, tanpa tanwin)."
      },
      {
        id: "q_l1_7_15", type: "multiple-choice",
        question: "Kalimat yang benar (pohon yang indah):",
        options: ["شَجَرَةٌ جَمِيلَةٌ", "شَجَرَةٌ جَمِيلٌ", "شَجَرَةٌ كَبِيرٌ", "شَجَرَةُ جَمِيلَةُ"],
        correctAnswer: "شَجَرَةٌ جَمِيلَةٌ",
        explanation: "Sifat harus mengikuti mausuf dalam gender dan harakat (muannats + muannats)."
      },
      {
        id: "q_l1_7_16", type: "multiple-choice",
        question: "Manakah kata yang TIDAK boleh bertanwin (mamnu minas sharf)?",
        options: ["أَحْمَرُ", "كَبِيرٌ", "جَمِيلٌ", "نَظِيفٌ"],
        correctAnswer: "أَحْمَرُ",
        explanation: "Kata sifat warna berwazan Af'alu dilarang bertanwin."
      },
      {
        id: "q_l1_7_17", type: "multiple-choice",
        question: "Apa arti 'أَرْضٌ'?",
        options: ["Bumi/Tanah", "Langit", "Laut", "Sungai"],
        correctAnswer: "Bumi/Tanah",
        explanation: "Ardh berarti bumi."
      },
      {
        id: "q_l1_7_18", type: "multiple-choice",
        question: "Apa arti 'رَمْلٌ'?",
        options: ["Pasir", "Batu", "Rumput", "Tanah"],
        correctAnswer: "Pasir",
        explanation: "Raml berarti pasir."
      },
      {
        id: "q_l1_7_19", type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Batu'?",
        options: ["حَجَرٌ", "رَمْلٌ", "عُشْبٌ", "جَبَلٌ"],
        correctAnswer: "حَجَرٌ",
        explanation: "Hajar berarti batu."
      },
      {
        id: "q_l1_7_20", type: "multiple-choice",
        question: "Apa arti 'رِيحٌ'?",
        options: ["Angin", "Hujan", "Awan", "Guntur"],
        correctAnswer: "Angin",
        explanation: "Riih berarti angin."
      },
      {
        id: "q_l1_7_21", type: "multiple-choice",
        question: "Manakah yang berarti 'Guntur'?",
        options: ["رَعْدٌ", "بَرْقٌ", "مَطَرٌ", "سَحَابٌ"],
        correctAnswer: "رَعْدٌ",
        explanation: "Ra'd berarti guntur."
      },
      {
        id: "q_l1_7_22", type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Kilat'?",
        options: ["بَرْقٌ", "رَعْدٌ", "ضَبَابٌ", "مَطَرٌ"],
        correctAnswer: "بَرْقٌ",
        explanation: "Barq berarti kilat."
      },
      {
        id: "q_l1_7_23", type: "multiple-choice",
        question: "Apa arti 'ضَبَابٌ'?",
        options: ["Kabut", "Salju", "Angin", "Awan"],
        correctAnswer: "Kabut",
        explanation: "Dhabaab berarti kabut."
      },
      {
        id: "q_l1_7_24", type: "multiple-choice",
        question: "Manakah yang berarti 'Kuda'?",
        options: ["فَرَسٌ", "كَلْبٌ", "أَسَدٌ", "طَائِرٌ"],
        correctAnswer: "فَرَسٌ",
        explanation: "Faras berarti kuda."
      },
      {
        id: "q_l1_7_25", type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Anjing'?",
        options: ["كَلْبٌ", "قِطٌّ", "فَرَسٌ", "أَسَدٌ"],
        correctAnswer: "كَلْبٌ",
        explanation: "Kalb berarti anjing."
      },
      {
        id: "q_l1_7_26", type: "multiple-choice",
        question: "Kata sifat yang berarti 'Bersih' adalah:",
        options: ["نَظِيفٌ", "جَمِيلٌ", "كَبِيرٌ", "حَارٌّ"],
        correctAnswer: "نَظِيفٌ",
        explanation: "Nazhiif berarti bersih."
      },
      {
        id: "q_l1_7_27", type: "multiple-choice",
        question: "Kalimat yang benar (langit biru):",
        options: ["السَّمَاءُ الزَّرْقَاءُ", "السَّمَاءُ أَزْرَقُ", "السَّمَاءُ زَرْقَاءٌ", "سَمَاءٌ أَزْرَقُ"],
        correctAnswer: "السَّمَاءُ الزَّرْقَاءُ",
        explanation: "Sama' (muannats majazi) + sifatnya wazan Fa'la' (Zarqaa')."
      },
      {
        id: "q_l1_7_28", type: "multiple-choice",
        question: "Kalimat 'بَحْرٌ أَزْرَقُ' berarti:",
        options: ["Laut biru", "Langit biru", "Sungai biru", "Air biru"],
        correctAnswer: "Laut biru",
        explanation: "Bahr (laut) + Azraqu (biru)."
      },
      {
        id: "q_l1_7_29", type: "multiple-choice",
        question: "Kalimat 'وَرَقَةٌ خَضْرَاءُ' berarti:",
        options: ["Daun hijau", "Pohon hijau", "Rumput hijau", "Bunga hijau"],
        correctAnswer: "Daun hijau",
        explanation: "Waraqah (daun/kertas) + Khadhraa' (hijau)."
      },
      {
        id: "q_l1_7_30", type: "multiple-choice",
        question: "Mengapa kita tidak mengatakan 'أَحْمَرٌ' (dengan tanwin)?",
        options: ["Karena ia adalah warna wazan Af'alu (Mamnu Minas Sharf)", "Karena ia adalah isim ma'rifah", "Karena ia adalah fi'il", "Karena ia di akhir kalimat"],
        correctAnswer: "Karena ia adalah warna wazan Af'alu (Mamnu Minas Sharf)",
        explanation: "Wazan af'alu untuk warna dan cacat dilarang tanwin."
      }
    ]
  }
};
