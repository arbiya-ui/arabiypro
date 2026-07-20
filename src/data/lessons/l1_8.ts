import { Lesson } from "../../types";

export const l1_8: Lesson = {
  id: "l1_8",
  title: "Bab 8: Al-Amakin (Tempat & Navigasi)",
  titleAr: "الْأَمَاكِنُ",
  description: "Belajar tentang nama-nama tempat di kota, arah navigasi, transportasi, dan preposisi penting.",
  xpReward: 1200,
  isCompleted: false,
  isLocked: false,
  type: "comprehensive",
  content: {
    introduction: "Mampu bertanya dan menunjukkan arah adalah salah satu kemampuan bertahan hidup yang paling penting, sekaligus topik yang paling sering digunakan sehari-hari. Dalam bab 'Al-Amakin' (Tempat) ini, Anda akan dibekali dengan kosakata navigasi kota. Banyak pemula takut dengan grammar, tapi di bab ini Anda akan menyadari betapa sederhananya aturan penunjuk arah dan tempat dalam bahasa Arab!\n\nInti tata bahasa dari bab ini adalah 'Preposisi' (Huruf Jar) dan 'Keterangan Tempat' (Zharaf Makan). Keduanya adalah kunci merangkai kalimat arah. Aturan emasnya luar biasa gampang: 'Kata benda yang jatuh setelah preposisi atau keterangan tempat selalu diakhiri harakat Kasrah (garis bawah)'. Ya, hanya dengan satu aturan mutlak ini, struktur kalimat Anda dijamin 100% benar layaknya orang Arab asli!\n\nMari kita mulai perjalanan ini. Dengan pola yang begitu mudah ditebak dan aturan yang super simpel ini, dipastikan Anda tidak akan pernah tersesat lagi di jalanan Timur Tengah maupun dalam menyusun kalimat bahasa Arab!",
    introTitle: "Navigasi Kota dan Aturan Jar-Majrur",
    introVerse: {
      ar: "وَجَعَلْنَا فِي الْأَرْضِ رَوَاسِيَ أَنْ تَمِيدَ بِهِمْ وَجَعَلْنَا فِيهَا فِجَاجًا سُبُلًا لَعَلَّهُمْ يَهْتَدُونَ",
      translation: "Dan telah Kami jadikan di bumi ini gunung-gunung yang kokoh supaya bumi itu (tidak) goncang bersama mereka dan telah Kami jadikan (pula) di bumi itu jalan-jalan yang luas, agar mereka mendapat petunjuk. (QS. Al-Anbiya': 31)"
    },
    introBadges: [
      { icon: "📍", text: "NAVIGASI KOTA (Kosakata tempat, arah, dan transportasi)" },
      { icon: "🧭", text: "ZHARAF & JAR (Menguasai preposisi dan keterangan tempat)" }
    ],
    totalSentencesDisplay: "300 Kalimat Progresif",
    tips: [
      {
        title: "Kekuatan Huruf Jar",
        content: "Kata preposisi seperti 'Fi' (di dalam), 'Ala' (di atas), atau 'Min' (dari) akan menarik harakat kata setelahnya menjadi Kasrah (Majrur). Ini hukum mutlak!"
      },
      {
        title: "Logika Keterangan Tempat",
        content: "Kata keterangan (Zharaf) seperti 'Amama' (di depan) atau 'Wara'a' (di belakang) juga mewajibkan kata benda setelahnya berharakat Kasrah. Perhatikan akhiran katanya!"
      },
      {
        title: "Peleburan Alif Lam",
        content: "Saat 'AL' bertemu huruf Syamsiyah (seperti Sin atau Dal), bunyi 'L' akan melebur (Idgham). Contoh: Al-Madinah (jelas) vs As-Suuq (lebur)."
      }
    ],
    cards: [
      {
        id: "l1_8_c1", wordAr: "مَدِينَةٌ", translation: "Kota", category: "Tempat Kota",
        description: "Sebuah kota besar atau wilayah perkotaan.", logicBox: "Isim Muannats. Jamaknya مُدُنٌ.",
        examples: [
          { ar: "هَذِهِ مَدِينَةٌ كَبِيرَةٌ", translation: "Ini kota yang besar", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "أَسْكُنُ فِي مَدِينَةِ جَاكَرْتَا", translation: "Saya tinggal di kota Jakarta", grammarNote: "Fi'il Mudhari-Fa'il + Syibhul Jumlah (idhafah)", analysis: "Fi'il Mudhari-Fa'il + Syibhul Jumlah (idhafah)" },
          { ar: "الْمَدِينَةُ مُزْدَحِمَةٌ", translation: "Kota itu padat/ramai", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "شَوَارِعُ الْمَدِينَةِ وَاسِعَةٌ", translation: "Jalan-jalan kota itu luas", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "ذَهَبْتُ إِلَى الْمَدِينَةِ", translation: "Saya pergi ke kota", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "مَدِينَةُ الْمُسْتَقْبَلِ", translation: "Kota masa depan", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "فِي الْمَدِينَةِ مَصَانِعُ كَثِيرَةٌ", translation: "Di kota ada banyak pabrik", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar + Sifat", analysis: "Khabar Muqaddam + Mubtada Muakhkhar + Sifat" },
          { ar: "مَرْكَزُ الْمَدِينَةِ", translation: "Pusat kota", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "تُعْجِبُنِي هَذِهِ الْمَدِينَةُ", translation: "Kota ini mengagumkanku", grammarNote: "Fi'il Mudhari-Maf'ul bih + Fa'il (Badal)", analysis: "Fi'il Mudhari-Maf'ul bih + Fa'il (Badal)" },
          { ar: "سُكَّانُ الْمَدِينَةِ", translation: "Penduduk kota", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_8_c2", wordAr: "شَارِعٌ", translation: "Jalan", category: "Tempat Kota",
        description: "Jalan raya atau jalanan di kota.", logicBox: "Isim Mudzakkar. Jamaknya شَوَارِعُ.",
        examples: [
          { ar: "الشَّارِعُ وَاسِعٌ", translation: "Jalan itu luas", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "يَمْشِي فِي الشَّارِعِ", translation: "Dia berjalan di jalan", grammarNote: "Fi'il Mudhari + Syibhul Jumlah", analysis: "Fi'il Mudhari + Syibhul Jumlah" },
          { ar: "هَذَا شَارِعٌ مُزْدَحِمٌ", translation: "Ini jalan yang padat", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "اِعْبُرِ الشَّارِعَ بِحَذَرٍ", translation: "Menyeberanglah jalan dengan hati-hati", grammarNote: "Fi'il Amr-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Amr-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "فِي الشَّارِعِ سَيَّارَاتٌ", translation: "Di jalan ada mobil-mobil", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar", analysis: "Khabar Muqaddam + Mubtada Muakhkhar" },
          { ar: "نَظَّفَ الْعُمَّالُ الشَّارِعَ", translation: "Para pekerja membersihkan jalan itu", grammarNote: "Fi'il Madhi + Fa'il + Maf'ul bih", analysis: "Fi'il Madhi + Fa'il + Maf'ul bih" },
          { ar: "شَارِعُ الْمَدِينَةِ", translation: "Jalan kota", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "شَوَارِعُ قَرِيبَةٌ", translation: "Jalan-jalan yang dekat", grammarNote: "Mausuf (Jamak) + Sifat (Mufrad Muannats)", analysis: "Mausuf (Jamak) + Sifat (Mufrad Muannats)" },
          { ar: "بَيْتِي عَلَى هَذَا الشَّارِعِ", translation: "Rumahku di jalan ini", grammarNote: "Mubtada + Syibhul Jumlah", analysis: "Mubtada + Syibhul Jumlah" },
          { ar: "الضَّوْءُ فِي الشَّارِعِ مُنِيرٌ", translation: "Lampu di jalan itu menerangi", grammarNote: "Mubtada + Syibhul Jumlah + Khabar", analysis: "Mubtada + Syibhul Jumlah + Khabar" }
        ]
      },
      {
        id: "l1_8_c3", wordAr: "حَيٌّ", translation: "Kawasan/Komplek", category: "Tempat Kota",
        description: "Kawasan perumahan, distrik, atau lingkungan.", logicBox: "Isim Mudzakkar. Jamaknya أَحْيَاءٌ.",
        examples: [
          { ar: "أَسْكُنُ فِي حَيٍّ هَادِئٍ", translation: "Saya tinggal di kawasan yang tenang", grammarNote: "Fi'il Mudhari-Fa'il + Syibhul Jumlah + Sifat", analysis: "Fi'il Mudhari-Fa'il + Syibhul Jumlah + Sifat" },
          { ar: "حَيُّ الْجَامِعَةِ", translation: "Kawasan kampus", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "الْحَيُّ نَظِيفٌ", translation: "Kawasan itu bersih", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "أَحْيَاءُ الْمَدِينَةِ جَمِيلَةٌ", translation: "Kawasan-kawasan kota itu indah", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "بَنَوْا مَسْجِدًا فِي الْحَيِّ", translation: "Mereka membangun masjid di kawasan ini", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "سُكَّانُ الْحَيِّ لُطَفَاءُ", translation: "Penduduk kawasan ini ramah-ramah", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "انْتَقَلْنَا إِلَى حَيٍّ جَدِيدٍ", translation: "Kami pindah ke kawasan baru", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah + Sifat", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah + Sifat" },
          { ar: "أَطْفَالُ الْحَيِّ يَلْعَبُونَ", translation: "Anak-anak komplek sedang bermain", grammarNote: "Mubtada (idhafah) + Jumlah Fi'liyyah", analysis: "Mubtada (idhafah) + Jumlah Fi'liyyah" },
          { ar: "هَلْ هَذَا الْحَيُّ أَمِينٌ؟", translation: "Apakah kawasan ini aman?", grammarNote: "Tanya + Mubtada (Badal) + Khabar", analysis: "Tanya + Mubtada (Badal) + Khabar" },
          { ar: "حَيٌّ سَكَنِيٌّ", translation: "Kawasan perumahan", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" }
        ]
      },
      {
        id: "l1_8_c4", wordAr: "مَيْدَانٌ", translation: "Lapangan/Alun-alun", category: "Tempat Kota",
        description: "Lapangan, alun-alun, atau bundaran.", logicBox: "Isim Mudzakkar. Jamaknya مَيَادِينُ.",
        examples: [
          { ar: "مَيْدَانُ التَّحْرِيرِ", translation: "Alun-alun Tahrir", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "اِجْتَمَعَ النَّاسُ فِي الْمَيْدَانِ", translation: "Orang-orang berkumpul di alun-alun", grammarNote: "Fi'il Madhi + Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi + Fa'il + Syibhul Jumlah" },
          { ar: "الْمَيْدَانُ وَاسِعٌ", translation: "Lapangan itu luas", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "يَلْعَبُونَ كُرَةَ الْقَدَمِ فِي الْمَيْدَانِ", translation: "Mereka bermain sepak bola di lapangan", grammarNote: "Fi'il Mudhari-Fa'il + Maf'ul bih (idhafah) + Syibhul Jumlah", analysis: "Fi'il Mudhari-Fa'il + Maf'ul bih (idhafah) + Syibhul Jumlah" },
          { ar: "نُصْبٌ تِذْكَارِيٌّ فِي الْمَيْدَانِ", translation: "Monumen peringatan di alun-alun", grammarNote: "Mubtada + Sifat + Syibhul Jumlah", analysis: "Mubtada + Sifat + Syibhul Jumlah" },
          { ar: "مَيَادِينُ كَبِيرَةٌ", translation: "Lapangan-lapangan besar", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "وَقَفَ وَسَطَ الْمَيْدَانِ", translation: "Dia berdiri di tengah alun-alun", grammarNote: "Fi'il Madhi + Zharaf + Mudhaf ilayh", analysis: "Fi'il Madhi + Zharaf + Mudhaf ilayh" },
          { ar: "هَذَا مَيْدَانٌ رَئِيسِيٌّ", translation: "Ini alun-alun utama", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "مِنَ الْمَيْدَانِ إِلَى السُّوقِ", translation: "Dari lapangan ke pasar", grammarNote: "Syibhul Jumlah + Syibhul Jumlah", analysis: "Syibhul Jumlah + Syibhul Jumlah" },
          { ar: "شَاهَدْتُ احْتِفَالًا فِي الْمَيْدَانِ", translation: "Saya menyaksikan perayaan di alun-alun", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_8_c5", wordAr: "حَدِيقَةٌ", translation: "Taman", category: "Tempat Kota",
        description: "Taman atau kebun.", logicBox: "Isim Muannats. Jamaknya حَدَائِقُ.",
        examples: [
          { ar: "الْحَدِيقَةُ جَمِيلَةٌ", translation: "Taman itu indah", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "ذَهَبْنَا إِلَى الْحَدِيقَةِ", translation: "Kami pergi ke taman", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "فِي الْحَدِيقَةِ أَزْهَارٌ", translation: "Di taman ada bunga-bunga", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar", analysis: "Khabar Muqaddam + Mubtada Muakhkhar" },
          { ar: "نَلْعَبُ فِي الْحَدِيقَةِ", translation: "Kami bermain di taman", grammarNote: "Fi'il Mudhari-Fa'il + Syibhul Jumlah", analysis: "Fi'il Mudhari-Fa'il + Syibhul Jumlah" },
          { ar: "حَدِيقَةُ الْحَيَوَانَاتِ", translation: "Kebun binatang", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "حَدِيقَةٌ عَامَّةٌ", translation: "Taman umum", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "أَشْجَارُ الْحَدِيقَةِ عَالِيَةٌ", translation: "Pohon-pohon taman itu tinggi", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "جَلَسْتُ فِي حَدِيقَةِ الْبَيْتِ", translation: "Saya duduk di kebun rumah", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah (idhafah)", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah (idhafah)" },
          { ar: "حَدَائِقُ خَضْرَاءُ", translation: "Taman-taman yang hijau", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "هَذِهِ حَدِيقَتِي", translation: "Ini tamanku", grammarNote: "Mubtada + Khabar (idhafah)", analysis: "Mubtada + Khabar (idhafah)" }
        ]
      },
      {
        id: "l1_8_c6", wordAr: "سُوقٌ", translation: "Pasar", category: "Tempat Kota",
        description: "Pasar atau tempat belanja.", logicBox: "Muannats Majazi (biasanya) atau Mudzakkar. Jamaknya أَسْوَاقٌ.",
        examples: [
          { ar: "ذَهَبْتُ إِلَى السُّوقِ", translation: "Saya pergi ke pasar", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "السُّوقُ مُزْدَحِمَةٌ الْيَوْمَ", translation: "Pasar padat hari ini", grammarNote: "Mubtada + Khabar (Muannats) + Zharaf", analysis: "Mubtada + Khabar (Muannats) + Zharaf" },
          { ar: "اشْتَرَيْتُ خُضْرَوَاتٍ مِنَ السُّوقِ", translation: "Saya membeli sayuran dari pasar", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "هَذَا سُوقٌ كَبِيرٌ", translation: "Ini pasar yang besar", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "السُّوقُ الشَّعْبِيُّ", translation: "Pasar tradisional", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "فِي السُّوقِ دَكَاكِينُ", translation: "Di pasar ada toko-toko", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar", analysis: "Khabar Muqaddam + Mubtada Muakhkhar" },
          { ar: "بَائِعٌ فِي السُّوقِ", translation: "Penjual di pasar", grammarNote: "Mubtada (Nakirah) + Syibhul Jumlah", analysis: "Mubtada (Nakirah) + Syibhul Jumlah" },
          { ar: "السُّوقُ مَرْكَزِيٌّ", translation: "Pasar pusat", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "هَلِ السُّوقُ قَرِيبَةٌ؟", translation: "Apakah pasar dekat?", grammarNote: "Tanya + Mubtada + Khabar", analysis: "Tanya + Mubtada + Khabar" },
          { ar: "عُدْتُ مِنَ السُّوقِ", translation: "Saya kembali dari pasar", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_8_c7", wordAr: "مُسْتَشْفَى", translation: "Rumah Sakit", category: "Tempat Kota",
        description: "Rumah sakit.", logicBox: "Isim Maqshur (berakhiran alif maqshurah). Isim Mudzakkar. Jamaknya مُسْتَشْفَيَاتٌ.",
        examples: [
          { ar: "الْمُسْتَشْفَى قَرِيبٌ", translation: "Rumah sakit itu dekat", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "ذَهَبَ إِلَى الْمُسْتَشْفَى", translation: "Dia pergi ke rumah sakit", grammarNote: "Fi'il Madhi + Syibhul Jumlah", analysis: "Fi'il Madhi + Syibhul Jumlah" },
          { ar: "عَمِلْتُ فِي الْمُسْتَشْفَى", translation: "Saya bekerja di rumah sakit", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "هَذَا مُسْتَشْفَى جَدِيدٌ", translation: "Ini rumah sakit baru", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "مُسْتَشْفَى حُكُومِيٌّ", translation: "Rumah sakit pemerintah", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "الطَّبِيبُ فِي الْمُسْتَشْفَى", translation: "Dokter ada di rumah sakit", grammarNote: "Mubtada + Syibhul Jumlah", analysis: "Mubtada + Syibhul Jumlah" },
          { ar: "زُرْتُ الْمَرِيضَ فِي الْمُسْتَشْفَى", translation: "Saya menjenguk orang sakit di rumah sakit", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "مُسْتَشْفَيَاتُ الْمَدِينَةِ", translation: "Rumah sakit-rumah sakit kota", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "نُقِلَ إِلَى الْمُسْتَشْفَى", translation: "Dia dipindahkan ke rumah sakit", grammarNote: "Fi'il Majhul + Syibhul Jumlah", analysis: "Fi'il Majhul + Syibhul Jumlah" },
          { ar: "بَابُ الْمُسْتَشْفَى", translation: "Pintu rumah sakit", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_8_c8", wordAr: "صَيْدَلِيَّةٌ", translation: "Apotek", category: "Tempat Kota",
        description: "Apotek/toko obat.", logicBox: "Isim Muannats. Jamaknya صَيْدَلِيَّاتٌ.",
        examples: [
          { ar: "الصَّيْدَلِيَّةُ مَفْتُوحَةٌ", translation: "Apotek itu buka", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "اشْتَرَيْتُ الدَّوَاءَ مِنَ الصَّيْدَلِيَّةِ", translation: "Saya membeli obat dari apotek", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "صَيْدَلِيَّةُ الْمُسْتَشْفَى", translation: "Apotek rumah sakit", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "أَيْنَ أَقْرَبُ صَيْدَلِيَّةٍ؟", translation: "Di mana apotek terdekat?", grammarNote: "Isim Istifham + Mubtada (idhafah)", analysis: "Isim Istifham + Mubtada (idhafah)" },
          { ar: "فِي الصَّيْدَلِيَّةِ أَدْوِيَةٌ", translation: "Di apotek ada obat-obatan", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar", analysis: "Khabar Muqaddam + Mubtada Muakhkhar" },
          { ar: "هَذِهِ صَيْدَلِيَّةٌ كَبِيرَةٌ", translation: "Ini apotek yang besar", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "عَمَلُ الصَّيْدَلِيِّ فِي الصَّيْدَلِيَّةِ", translation: "Pekerjaan apoteker di apotek", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah", analysis: "Mubtada (idhafah) + Syibhul Jumlah" },
          { ar: "أَغْلَقَتِ الصَّيْدَلِيَّةُ", translation: "Apotek telah tutup", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "أُرِيدُ الذَّهَابَ إِلَى الصَّيْدَلِيَّةِ", translation: "Saya ingin pergi ke apotek", grammarNote: "Fi'il Mudhari + Maf'ul bih (Mashdar) + Syibhul Jumlah", analysis: "Fi'il Mudhari + Maf'ul bih (Mashdar) + Syibhul Jumlah" },
          { ar: "صَيْدَلِيَّةٌ مُنَاوِبَةٌ", translation: "Apotek jaga (24 jam)", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" }
        ]
      },
      {
        id: "l1_8_c9", wordAr: "بَنْكٌ", translation: "Bank", category: "Tempat Kota",
        description: "Bank atau tempat transaksi keuangan.", logicBox: "Isim Mudzakkar. Jamaknya بُنُوكٌ. Sinonimnya: مَصْرِفٌ.",
        examples: [
          { ar: "الْبَنْكُ مُغْلَقٌ الْيَوْمَ", translation: "Bank tutup hari ini", grammarNote: "Mubtada + Khabar + Zharaf", analysis: "Mubtada + Khabar + Zharaf" },
          { ar: "سَحَبْتُ نُقُودًا مِنَ الْبَنْكِ", translation: "Saya menarik uang dari bank", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "هَذَا بَنْكٌ إِسْلَامِيٌّ", translation: "Ini bank syariah/islam", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "ذَهَبَ إِلَى الْبَنْكِ", translation: "Dia pergi ke bank", grammarNote: "Fi'il Madhi + Syibhul Jumlah", analysis: "Fi'il Madhi + Syibhul Jumlah" },
          { ar: "حِسَابٌ فِي الْبَنْكِ", translation: "Rekening di bank", grammarNote: "Mubtada (Nakirah) + Syibhul Jumlah", analysis: "Mubtada (Nakirah) + Syibhul Jumlah" },
          { ar: "فَرْعُ الْبَنْكِ", translation: "Cabang bank", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "بُنُوكٌ مَحَلِّيَّةٌ", translation: "Bank-bank lokal", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "أَوْدَعْتُ الْمَبْلَغَ فِي الْبَنْكِ", translation: "Saya menyetor jumlah itu di bank", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "أَيْنَ يَقَعُ الْبَنْكُ؟", translation: "Di mana letak bank?", grammarNote: "Isim Istifham + Fi'il Mudhari + Fa'il", analysis: "Isim Istifham + Fi'il Mudhari + Fa'il" },
          { ar: "بِطَاقَةُ الْبَنْكِ", translation: "Kartu bank (ATM)", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_8_c10", wordAr: "فُنْدُقٌ", translation: "Hotel", category: "Tempat Kota",
        description: "Hotel atau penginapan.", logicBox: "Isim Mudzakkar. Jamaknya فَنَادِقُ.",
        examples: [
          { ar: "الْفُنْدُقُ فَخْمٌ", translation: "Hotel itu mewah", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "نَزَلْنَا فِي فُنْدُقٍ قَرِيبٍ", translation: "Kami menginap di hotel yang dekat", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah + Sifat", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah + Sifat" },
          { ar: "فُنْدُقٌ خَمْسُ نُجُومٍ", translation: "Hotel bintang lima", grammarNote: "Mubtada + Khabar (idhafah)", analysis: "Mubtada + Khabar (idhafah)" },
          { ar: "غُرْفَةٌ فِي الْفُنْدُقِ", translation: "Kamar di hotel", grammarNote: "Mubtada + Syibhul Jumlah", analysis: "Mubtada + Syibhul Jumlah" },
          { ar: "أَيْنَ الْفُنْدُقُ؟", translation: "Di mana hotelnya?", grammarNote: "Isim Istifham + Mubtada", analysis: "Isim Istifham + Mubtada" },
          { ar: "هَذَا فُنْدُقٌ رَخِيصٌ", translation: "Ini hotel yang murah", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "مُوَظَّفُ الْفُنْدُقِ", translation: "Pegawai hotel", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "فَنَادِقُ السِّيَاحَةِ", translation: "Hotel-hotel pariwisata", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "حَجَزْتُ غُرْفَةً فِي فُنْدُقٍ", translation: "Saya memesan kamar di sebuah hotel", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "الْفُنْدُقُ مُطِلٌّ عَلَى الْبَحْرِ", translation: "Hotel itu menghadap ke laut", grammarNote: "Mubtada + Khabar + Syibhul Jumlah", analysis: "Mubtada + Khabar + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_8_c11", wordAr: "يَمِينٌ", translation: "Kanan", category: "Arah",
        description: "Arah kanan.", logicBox: "Zharaf Makan (manshub: يَمِينَ) atau Isim Majrur (عَلَى الْيَمِينِ).",
        examples: [
          { ar: "عَلَى يَمِينِكَ", translation: "Di sebelah kananmu", grammarNote: "Huruf Jar + Isim Majrur (idhafah)", analysis: "Huruf Jar + Isim Majrur (idhafah)" },
          { ar: "خُذْ جِهَةَ الْيَمِينِ", translation: "Ambillah arah kanan", grammarNote: "Fi'il Amr + Maf'ul bih (idhafah)", analysis: "Fi'il Amr + Maf'ul bih (idhafah)" },
          { ar: "الْمَسْجِدُ يَمِينَ الشَّارِعِ", translation: "Masjid di sebelah kanan jalan", grammarNote: "Mubtada + Zharaf Makan + Mudhaf ilayh", analysis: "Mubtada + Zharaf Makan + Mudhaf ilayh" },
          { ar: "نَأْكُلُ بِالْيَدِ الْيُمْنَى", translation: "Kita makan dengan tangan kanan (muannats dari yamin)", grammarNote: "Fi'il Mudhari + Syibhul Jumlah + Sifat", analysis: "Fi'il Mudhari + Syibhul Jumlah + Sifat" },
          { ar: "اِلْتَفِتْ يَمِينًا", translation: "Menolehlah ke kanan", grammarNote: "Fi'il Amr + Zharaf (Maf'ul fih)", analysis: "Fi'il Amr + Zharaf (Maf'ul fih)" },
          { ar: "هُوَ عَلَى الْيَمِينِ", translation: "Dia di sebelah kanan", grammarNote: "Mubtada + Syibhul Jumlah", analysis: "Mubtada + Syibhul Jumlah" },
          { ar: "يَمِينًا وَيَسَارًا", translation: "Ke kanan dan ke kiri", grammarNote: "Zharaf + Ma'thuf", analysis: "Zharaf + Ma'thuf" },
          { ar: "أَصْحَابُ الْيَمِينِ", translation: "Golongan kanan", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "غُرْفَتِي ذَاتُ الْيَمِينِ", translation: "Kamarku di arah kanan", grammarNote: "Mubtada + Khabar (idhafah)", analysis: "Mubtada + Khabar (idhafah)" },
          { ar: "الْبَابُ عَنْ يَمِينِكَ", translation: "Pintu ada di sebelah kananmu", grammarNote: "Mubtada + Syibhul Jumlah (idhafah)", analysis: "Mubtada + Syibhul Jumlah (idhafah)" }
        ]
      },
      {
        id: "l1_8_c12", wordAr: "يَسَارٌ", translation: "Kiri", category: "Arah",
        description: "Arah kiri.", logicBox: "Zharaf Makan (manshub: يَسَارَ) atau Isim Majrur (عَلَى الْيَسَارِ).",
        examples: [
          { ar: "عَلَى يَسَارِكَ", translation: "Di sebelah kirimu", grammarNote: "Huruf Jar + Isim Majrur (idhafah)", analysis: "Huruf Jar + Isim Majrur (idhafah)" },
          { ar: "اِتَّجِهْ إِلَى الْيَسَارِ", translation: "Arahkan ke kiri", grammarNote: "Fi'il Amr + Syibhul Jumlah", analysis: "Fi'il Amr + Syibhul Jumlah" },
          { ar: "الْبَنْكُ يَسَارَ السُّوقِ", translation: "Bank di sebelah kiri pasar", grammarNote: "Mubtada + Zharaf Makan + Mudhaf ilayh", analysis: "Mubtada + Zharaf Makan + Mudhaf ilayh" },
          { ar: "لَا تَأْكُلْ بِالْيَدِ الْيُسْرَى", translation: "Jangan makan dengan tangan kiri (muannats dari yasar)", grammarNote: "La Nahiyah + Fi'il Mudhari + Syibhul Jumlah + Sifat", analysis: "La Nahiyah + Fi'il Mudhari + Syibhul Jumlah + Sifat" },
          { ar: "اِلْتَفِتْ يَسَارًا", translation: "Menolehlah ke kiri", grammarNote: "Fi'il Amr + Zharaf (Maf'ul fih)", analysis: "Fi'il Amr + Zharaf (Maf'ul fih)" },
          { ar: "هِيَ عَلَى الْيَسَارِ", translation: "Dia (pr) di sebelah kiri", grammarNote: "Mubtada + Syibhul Jumlah", analysis: "Mubtada + Syibhul Jumlah" },
          { ar: "يَسَارُ الشَّارِعِ مُغْلَقٌ", translation: "Sisi kiri jalan ditutup", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "أَصْحَابُ الشِّمَالِ", translation: "Golongan kiri (sinonim yasar)", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "وَقَفَ عَنْ يَسَارِهِ", translation: "Dia berdiri di sebelah kirinya", grammarNote: "Fi'il Madhi + Syibhul Jumlah (idhafah)", analysis: "Fi'il Madhi + Syibhul Jumlah (idhafah)" },
          { ar: "انْظُرْ يَسَارًا", translation: "Lihatlah ke kiri", grammarNote: "Fi'il Amr + Zharaf", analysis: "Fi'il Amr + Zharaf" }
        ]
      },
      {
        id: "l1_8_c13", wordAr: "أَمَامَ", translation: "Di depan", category: "Arah",
        description: "Di hadapan atau di depan.", logicBox: "Zharaf Makan. Selalu manshub (fathah) dan menjadi mudhaf.",
        examples: [
          { ar: "أَمَامَ الْمَسْجِدِ", translation: "Di depan masjid", grammarNote: "Zharaf + Mudhaf ilayh", analysis: "Zharaf + Mudhaf ilayh" },
          { ar: "وَقَفْتُ أَمَامَ الْبَيْتِ", translation: "Saya berdiri di depan rumah", grammarNote: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh", analysis: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh" },
          { ar: "الْمُدَرِّسُ أَمَامَ التَّلَامِيذِ", translation: "Guru di depan murid-murid", grammarNote: "Mubtada + Khabar (Zharaf)", analysis: "Mubtada + Khabar (Zharaf)" },
          { ar: "اِمْشِ أَمَامِي", translation: "Berjalanlah di depanku", grammarNote: "Fi'il Amr + Zharaf + Mudhaf ilayh (Dhamir)", analysis: "Fi'il Amr + Zharaf + Mudhaf ilayh (Dhamir)" },
          { ar: "أَمَامَكَ فُرْصَةٌ", translation: "Di depanmu ada kesempatan", grammarNote: "Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar", analysis: "Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar" },
          { ar: "نَظَرَ أَمَامَهُ", translation: "Dia melihat ke depannya", grammarNote: "Fi'il Madhi + Zharaf + Mudhaf ilayh", analysis: "Fi'il Madhi + Zharaf + Mudhaf ilayh" },
          { ar: "السَّيَّارَةُ أَمَامَ الْبَابِ", translation: "Mobil itu di depan pintu", grammarNote: "Mubtada + Zharaf + Mudhaf ilayh", analysis: "Mubtada + Zharaf + Mudhaf ilayh" },
          { ar: "تَقَدَّمْ إِلَى الْأَمَامِ", translation: "Majulah ke depan", grammarNote: "Fi'il Amr + Syibhul Jumlah", analysis: "Fi'il Amr + Syibhul Jumlah" },
          { ar: "يَجْلِسُ أَمَامَ الْحَاسُوبِ", translation: "Dia duduk di depan komputer", grammarNote: "Fi'il Mudhari + Zharaf + Mudhaf ilayh", analysis: "Fi'il Mudhari + Zharaf + Mudhaf ilayh" },
          { ar: "لَيْسَ أَمَامَنَا خِيَارٌ", translation: "Tidak ada pilihan di depan kita", grammarNote: "Laisa + Khabar Laisa (Zharaf) + Isim Laisa", analysis: "Laisa + Khabar Laisa (Zharaf) + Isim Laisa" }
        ]
      },
      {
        id: "l1_8_c14", wordAr: "خَلْفَ", translation: "Di belakang", category: "Arah",
        description: "Di balik atau di belakang.", logicBox: "Zharaf Makan. Selalu manshub (fathah) dan menjadi mudhaf. Sinonim: وَرَاءَ.",
        examples: [
          { ar: "خَلْفَ الْبَيْتِ حَدِيقَةٌ", translation: "Di belakang rumah ada taman", grammarNote: "Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar", analysis: "Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar" },
          { ar: "مَشَيْتُ خَلْفَهُ", translation: "Saya berjalan di belakangnya", grammarNote: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh", analysis: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh" },
          { ar: "مَنْ خَلْفَ الْبَابِ؟", translation: "Siapa di balik pintu?", grammarNote: "Isim Istifham + Zharaf + Mudhaf ilayh", analysis: "Isim Istifham + Zharaf + Mudhaf ilayh" },
          { ar: "الصَّفُّ خَلْفَ الْإِمَامِ", translation: "Barisan (shaf) di belakang imam", grammarNote: "Mubtada + Khabar (Zharaf)", analysis: "Mubtada + Khabar (Zharaf)" },
          { ar: "السَّيَّارَةُ خَلْفَ الْحَافِلَةِ", translation: "Mobil itu di belakang bus", grammarNote: "Mubtada + Zharaf + Mudhaf ilayh", analysis: "Mubtada + Zharaf + Mudhaf ilayh" },
          { ar: "تَرَكْتُهُ خَلْفِي", translation: "Saya meninggalkannya di belakangku", grammarNote: "Fi'il Madhi-Fa'il-Maf'ul bih + Zharaf", analysis: "Fi'il Madhi-Fa'il-Maf'ul bih + Zharaf" },
          { ar: "خَلْفَ الْجَبَلِ", translation: "Di balik gunung", grammarNote: "Zharaf + Mudhaf ilayh", analysis: "Zharaf + Mudhaf ilayh" },
          { ar: "اِرْجِعْ إِلَى الْخَلْفِ", translation: "Mundurlah ke belakang", grammarNote: "Fi'il Amr + Syibhul Jumlah", analysis: "Fi'il Amr + Syibhul Jumlah" },
          { ar: "وَقَفَ خَلْفَ الشَّجَرَةِ", translation: "Dia berdiri di belakang pohon", grammarNote: "Fi'il Madhi + Zharaf + Mudhaf ilayh", analysis: "Fi'il Madhi + Zharaf + Mudhaf ilayh" },
          { ar: "خَلْفَ السِّتَارِ", translation: "Di balik tirai", grammarNote: "Zharaf + Mudhaf ilayh", analysis: "Zharaf + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_8_c15", wordAr: "فَوْقَ", translation: "Di atas", category: "Arah",
        description: "Di atas (tidak menempel/melayang). Beda dengan عَلَى (menempel).", logicBox: "Zharaf Makan. Selalu manshub (fathah) dan menjadi mudhaf.",
        examples: [
          { ar: "فَوْقَ الشَّجَرَةِ طَائِرٌ", translation: "Di atas pohon ada burung", grammarNote: "Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar", analysis: "Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar" },
          { ar: "السَّحَابُ فَوْقَنَا", translation: "Awan ada di atas kita", grammarNote: "Mubtada + Zharaf + Mudhaf ilayh", analysis: "Mubtada + Zharaf + Mudhaf ilayh" },
          { ar: "تَطِيرُ الطَّائِرَةُ فَوْقَ الْمَدِينَةِ", translation: "Pesawat terbang di atas kota", grammarNote: "Fi'il Mudhari + Fa'il + Zharaf + Mudhaf ilayh", analysis: "Fi'il Mudhari + Fa'il + Zharaf + Mudhaf ilayh" },
          { ar: "الْمِصْبَاحُ فَوْقَ الْمَكْتَبِ", translation: "Lampu (menggantung) di atas meja", grammarNote: "Mubtada + Zharaf + Mudhaf ilayh", analysis: "Mubtada + Zharaf + Mudhaf ilayh" },
          { ar: "رَفَعَ يَدَهُ فَوْقَ رَأْسِهِ", translation: "Dia mengangkat tangannya di atas kepalanya", grammarNote: "Fi'il Madhi + Maf'ul bih + Zharaf + Mudhaf ilayh", analysis: "Fi'il Madhi + Maf'ul bih + Zharaf + Mudhaf ilayh" },
          { ar: "فَوْقَ السَّمَاءِ", translation: "Di atas langit", grammarNote: "Zharaf + Mudhaf ilayh", analysis: "Zharaf + Mudhaf ilayh" },
          { ar: "الْجَنَّةُ فَوْقَ كُلِّ شَيْءٍ", translation: "Surga di atas segalanya", grammarNote: "Mubtada + Zharaf + Mudhaf ilayh", analysis: "Mubtada + Zharaf + Mudhaf ilayh" },
          { ar: "مَا فَوْقَ الْأَرْضِ", translation: "Apa yang ada di atas bumi", grammarNote: "Isim Mausul + Zharaf + Mudhaf ilayh", analysis: "Isim Mausul + Zharaf + Mudhaf ilayh" },
          { ar: "نَظَرَ إِلَى فَوْقُ", translation: "Dia melihat ke atas (mabni dhummah jika terputus dari idhafah)", grammarNote: "Fi'il Madhi + Syibhul Jumlah", analysis: "Fi'il Madhi + Syibhul Jumlah" },
          { ar: "فَوْقَ الْمُسْتَوَى", translation: "Di atas rata-rata", grammarNote: "Zharaf + Mudhaf ilayh", analysis: "Zharaf + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_8_c16", wordAr: "تَحْتَ", translation: "Di bawah", category: "Arah",
        description: "Di bawah.", logicBox: "Zharaf Makan. Selalu manshub (fathah) dan menjadi mudhaf.",
        examples: [
          { ar: "تَحْتَ الشَّجَرَةِ ظِلٌّ", translation: "Di bawah pohon ada bayangan", grammarNote: "Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar", analysis: "Khabar Muqaddam (Zharaf) + Mubtada Muakhkhar" },
          { ar: "الْقِطَّةُ تَحْتَ السَّرِيرِ", translation: "Kucing ada di bawah kasur", grammarNote: "Mubtada + Zharaf + Mudhaf ilayh", analysis: "Mubtada + Zharaf + Mudhaf ilayh" },
          { ar: "وَجَدْتُهُ تَحْتَ الْمَكْتَبِ", translation: "Saya menemukannya di bawah meja", grammarNote: "Fi'il Madhi-Fa'il-Maf'ul bih + Zharaf + Mudhaf ilayh", analysis: "Fi'il Madhi-Fa'il-Maf'ul bih + Zharaf + Mudhaf ilayh" },
          { ar: "الْمَاءُ تَحْتَ الْأَرْضِ", translation: "Air di bawah tanah", grammarNote: "Mubtada + Zharaf + Mudhaf ilayh", analysis: "Mubtada + Zharaf + Mudhaf ilayh" },
          { ar: "أَنْهَارٌ تَجْرِي مِنْ تَحْتِهَا", translation: "Sungai-sungai mengalir dari bawahnya", grammarNote: "Mubtada + Fi'il + Huruf Jar + Isim Majrur (Zharaf)", analysis: "Mubtada + Fi'il + Huruf Jar + Isim Majrur (Zharaf)" },
          { ar: "نَامَ تَحْتَ السَّقْفِ", translation: "Dia tidur di bawah atap", grammarNote: "Fi'il Madhi + Zharaf + Mudhaf ilayh", analysis: "Fi'il Madhi + Zharaf + Mudhaf ilayh" },
          { ar: "مَا تَحْتَ الشَّمْسِ", translation: "Apa yang ada di bawah matahari", grammarNote: "Isim Mausul + Zharaf + Mudhaf ilayh", analysis: "Isim Mausul + Zharaf + Mudhaf ilayh" },
          { ar: "تَحْتَ الصِّفْرِ", translation: "Di bawah nol (suhu)", grammarNote: "Zharaf + Mudhaf ilayh", analysis: "Zharaf + Mudhaf ilayh" },
          { ar: "جَلَسْنَا تَحْتَ الْمِظَلَّةِ", translation: "Kami duduk di bawah payung", grammarNote: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh", analysis: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh" },
          { ar: "اُنْظُرْ تَحْتَ قَدَمِكَ", translation: "Lihat di bawah kakimu", grammarNote: "Fi'il Amr + Zharaf + Mudhaf ilayh", analysis: "Fi'il Amr + Zharaf + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_8_c17", wordAr: "بَيْنَ", translation: "Di antara", category: "Arah",
        description: "Di antara (dua hal atau lebih).", logicBox: "Zharaf Makan. Selalu manshub (fathah) dan menjadi mudhaf.",
        examples: [
          { ar: "بَيْنَ السَّمَاءِ وَالْأَرْضِ", translation: "Di antara langit dan bumi", grammarNote: "Zharaf + Mudhaf ilayh + Ma'thuf", analysis: "Zharaf + Mudhaf ilayh + Ma'thuf" },
          { ar: "جَلَسْتُ بَيْنَ خَالِدٍ وَزَيْدٍ", translation: "Saya duduk di antara Khalid dan Zaid", grammarNote: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh + Ma'thuf", analysis: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh + Ma'thuf" },
          { ar: "الْمَسْجِدُ بَيْنَ الْمَدْرَسَةِ وَالْبَيْتِ", translation: "Masjid di antara sekolah dan rumah", grammarNote: "Mubtada + Zharaf + Mudhaf ilayh + Ma'thuf", analysis: "Mubtada + Zharaf + Mudhaf ilayh + Ma'thuf" },
          { ar: "مَا بَيْنَنَا", translation: "Apa yang ada di antara kita", grammarNote: "Isim Mausul + Zharaf + Mudhaf ilayh", analysis: "Isim Mausul + Zharaf + Mudhaf ilayh" },
          { ar: "بَيْنَ الْأَشْجَارِ", translation: "Di antara pohon-pohon", grammarNote: "Zharaf + Mudhaf ilayh", analysis: "Zharaf + Mudhaf ilayh" },
          { ar: "فَرْقٌ بَيْنَ هَذَا وَذَاكَ", translation: "Perbedaan antara ini dan itu", grammarNote: "Mubtada + Zharaf + Isim Isyarah + Ma'thuf", analysis: "Mubtada + Zharaf + Isim Isyarah + Ma'thuf" },
          { ar: "بَيْنَ يَدَيْهِ", translation: "Di hadapannya (harfiah: di antara dua tangannya)", grammarNote: "Zharaf + Mudhaf ilayh", analysis: "Zharaf + Mudhaf ilayh" },
          { ar: "بَيْنَهُمَا", translation: "Di antara keduanya", grammarNote: "Zharaf + Mudhaf ilayh (Dhamir)", analysis: "Zharaf + Mudhaf ilayh (Dhamir)" },
          { ar: "الْخِيَارُ بَيْنَ أَمْرَيْنِ", translation: "Pilihan di antara dua hal", grammarNote: "Mubtada + Zharaf + Mudhaf ilayh", analysis: "Mubtada + Zharaf + Mudhaf ilayh" },
          { ar: "بَيْنَ الْحَقِّ وَالْبَاطِلِ", translation: "Antara yang haq dan yang bathil", grammarNote: "Zharaf + Mudhaf ilayh + Ma'thuf", analysis: "Zharaf + Mudhaf ilayh + Ma'thuf" }
        ]
      },
      {
        id: "l1_8_c18", wordAr: "بِجَانِبِ", translation: "Di samping", category: "Arah",
        description: "Di sisi atau di samping.", logicBox: "Huruf Jar (بِـ) + Isim Majrur (جَانِبِ) + Mudhaf ilayh.",
        examples: [
          { ar: "بِجَانِبِ الْمَسْجِدِ", translation: "Di samping masjid", grammarNote: "Syibhul Jumlah + Mudhaf ilayh", analysis: "Syibhul Jumlah + Mudhaf ilayh" },
          { ar: "جَلَسَ بِجَانِبِي", translation: "Dia duduk di sampingku", grammarNote: "Fi'il Madhi + Syibhul Jumlah + Mudhaf ilayh", analysis: "Fi'il Madhi + Syibhul Jumlah + Mudhaf ilayh" },
          { ar: "الْمَكْتَبَةُ بِجَانِبِ الْبَنْكِ", translation: "Perpustakaan di samping bank", grammarNote: "Mubtada + Syibhul Jumlah + Mudhaf ilayh", analysis: "Mubtada + Syibhul Jumlah + Mudhaf ilayh" },
          { ar: "وَقَفَ بِجَانِبِ السَّيَّارَةِ", translation: "Dia berdiri di samping mobil", grammarNote: "Fi'il Madhi + Syibhul Jumlah + Mudhaf ilayh", analysis: "Fi'il Madhi + Syibhul Jumlah + Mudhaf ilayh" },
          { ar: "مَنْ بِجَانِبِكَ؟", translation: "Siapa di sampingmu?", grammarNote: "Isim Istifham + Syibhul Jumlah + Mudhaf ilayh", analysis: "Isim Istifham + Syibhul Jumlah + Mudhaf ilayh" },
          { ar: "الْبَيْتُ بِجَانِبِ الشَّارِعِ", translation: "Rumah itu di samping jalan", grammarNote: "Mubtada + Syibhul Jumlah + Mudhaf ilayh", analysis: "Mubtada + Syibhul Jumlah + Mudhaf ilayh" },
          { ar: "نَمْشِي جَنْبًا إِلَى جَنْبٍ", translation: "Kita berjalan berdampingan", grammarNote: "Fi'il Mudhari + Hal + Syibhul Jumlah", analysis: "Fi'il Mudhari + Hal + Syibhul Jumlah" },
          { ar: "بِجَانِبِ السَّرِيرِ طَاوِلَةٌ", translation: "Di samping kasur ada meja", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar", analysis: "Khabar Muqaddam + Mubtada Muakhkhar" },
          { ar: "صُورَةٌ بِجَانِبِ الْجِدَارِ", translation: "Gambar di samping dinding", grammarNote: "Mubtada + Syibhul Jumlah + Mudhaf ilayh", analysis: "Mubtada + Syibhul Jumlah + Mudhaf ilayh" },
          { ar: "تَعَالَ بِجَانِبِي", translation: "Kemarilah di sampingku", grammarNote: "Fi'il Amr + Syibhul Jumlah + Mudhaf ilayh", analysis: "Fi'il Amr + Syibhul Jumlah + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_8_c19", wordAr: "قَرِيبٌ", translation: "Dekat", category: "Arah/Sifat",
        description: "Dekat jaraknya atau waktunya. Sering diikuti min (مِنْ).", logicBox: "Isim Sifat. Muannats: قَرِيبَةٌ.",
        examples: [
          { ar: "الْمَسْجِدُ قَرِيبٌ", translation: "Masjid itu dekat", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "هُوَ قَرِيبٌ مِنِّي", translation: "Dia dekat dariku", grammarNote: "Mubtada + Khabar + Syibhul Jumlah", analysis: "Mubtada + Khabar + Syibhul Jumlah" },
          { ar: "هَلِ الْمَدْرَسَةُ قَرِيبَةٌ؟", translation: "Apakah sekolah itu dekat?", grammarNote: "Tanya + Mubtada + Khabar (Muannats)", analysis: "Tanya + Mubtada + Khabar (Muannats)" },
          { ar: "نَحْنُ مِنْ مَكَانٍ قَرِيبٍ", translation: "Kami dari tempat yang dekat", grammarNote: "Mubtada + Syibhul Jumlah + Sifat", analysis: "Mubtada + Syibhul Jumlah + Sifat" },
          { ar: "السُّوقُ قَرِيبَةٌ مِنَ الْبَيْتِ", translation: "Pasar dekat dari rumah", grammarNote: "Mubtada + Khabar + Syibhul Jumlah", analysis: "Mubtada + Khabar + Syibhul Jumlah" },
          { ar: "عَنْ قَرِيبٍ", translation: "Dalam waktu dekat / segera", grammarNote: "Huruf Jar + Isim Majrur", analysis: "Huruf Jar + Isim Majrur" },
          { ar: "صَدِيقٌ قَرِيبٌ", translation: "Teman dekat", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "مُسْتَشْفَى قَرِيبٌ", translation: "Rumah sakit yang dekat", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "الْفَرَجُ قَرِيبٌ", translation: "Kelapangan/solusi itu dekat", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "رَأَيْتُهُ مِنْ قَرِيبٍ", translation: "Saya melihatnya dari dekat", grammarNote: "Fi'il Madhi-Fa'il-Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il-Maf'ul bih + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_8_c20", wordAr: "بَعِيدٌ", translation: "Jauh", category: "Arah/Sifat",
        description: "Jauh jaraknya atau waktunya. Sering diikuti 'an (عَنْ).", logicBox: "Isim Sifat. Muannats: بَعِيدَةٌ.",
        examples: [
          { ar: "الْمَطَارُ بَعِيدٌ", translation: "Bandara itu jauh", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "بَيْتِي بَعِيدٌ عَنِ الْمَدْرَسَةِ", translation: "Rumahku jauh dari sekolah", grammarNote: "Mubtada + Khabar + Syibhul Jumlah", analysis: "Mubtada + Khabar + Syibhul Jumlah" },
          { ar: "مَدِينَةٌ بَعِيدَةٌ", translation: "Kota yang jauh", grammarNote: "Mausuf + Sifat (Muannats)", analysis: "Mausuf + Sifat (Muannats)" },
          { ar: "سَافَرْتُ إِلَى بَلَدٍ بَعِيدٍ", translation: "Saya bepergian ke negara yang jauh", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah + Sifat", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah + Sifat" },
          { ar: "الْمَكَانُ بَعِيدٌ جِدًّا", translation: "Tempatnya sangat jauh", grammarNote: "Mubtada + Khabar + Maf'ul muthlaq", analysis: "Mubtada + Khabar + Maf'ul muthlaq" },
          { ar: "مِنْ بَعِيدٍ", translation: "Dari jauh", grammarNote: "Huruf Jar + Isim Majrur", analysis: "Huruf Jar + Isim Majrur" },
          { ar: "هَلِ الْفُنْدُقُ بَعِيدٌ؟", translation: "Apakah hotelnya jauh?", grammarNote: "Tanya + Mubtada + Khabar", analysis: "Tanya + Mubtada + Khabar" },
          { ar: "سَمِعْتُ صَوْتًا مِنْ بَعِيدٍ", translation: "Saya mendengar suara dari jauh", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "بَعِيدٌ عَنِ الْعَيْنِ", translation: "Jauh dari mata (tak terlihat)", grammarNote: "Khabar + Syibhul Jumlah", analysis: "Khabar + Syibhul Jumlah" },
          { ar: "تَارِيخٌ بَعِيدٌ", translation: "Sejarah yang jauh/lama", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" }
        ]
      },
      {
        id: "l1_8_c21", wordAr: "سَيَّارَةٌ", translation: "Mobil", category: "Transportasi",
        description: "Mobil (kendaraan roda empat).", logicBox: "Isim Muannats. Jamaknya سَيَّارَاتٌ.",
        examples: [
          { ar: "سَيَّارَةٌ جَدِيدَةٌ", translation: "Mobil baru", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "رَكِبْتُ السَّيَّارَةَ", translation: "Saya naik mobil", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "سَيَّارَتِي سَرِيعَةٌ", translation: "Mobilku cepat", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "سَافَرْنَا بِالسَّيَّارَةِ", translation: "Kami bepergian dengan mobil", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "السَّيَّارَةُ فِي الشَّارِعِ", translation: "Mobil ada di jalan", grammarNote: "Mubtada + Syibhul Jumlah", analysis: "Mubtada + Syibhul Jumlah" },
          { ar: "سَيَّارَةُ أُجْرَةٍ", translation: "Mobil sewaan / Taksi", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "مِفْتَاحُ السَّيَّارَةِ", translation: "Kunci mobil", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "تَوَقَّفَتِ السَّيَّارَةُ", translation: "Mobil itu berhenti", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "سَاقَ السَّيَّارَةَ", translation: "Dia menyetir mobil", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" },
          { ar: "غَسَلْتُ السَّيَّارَةَ", translation: "Saya mencuci mobil", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" }
        ]
      },
      {
        id: "l1_8_c22", wordAr: "حَافِلَةٌ", translation: "Bus", category: "Transportasi",
        description: "Bus (kendaraan umum).", logicBox: "Isim Muannats. Jamaknya حَافِلَاتٌ.",
        examples: [
          { ar: "حَافِلَةُ الْمَدْرَسَةِ", translation: "Bus sekolah", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "انْتَظَرْتُ الْحَافِلَةَ", translation: "Saya menunggu bus", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "الْحَافِلَةُ كَبِيرَةٌ", translation: "Bus itu besar", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "صَعِدْنَا الْحَافِلَةَ", translation: "Kami naik bus", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "مَحَطَّةُ الْحَافِلَاتِ", translation: "Terminal/stasiun bus", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "الْحَافِلَةُ مُزْدَحِمَةٌ", translation: "Bus itu padat", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "ذَهَبْتُ بِالْحَافِلَةِ إِلَى الْعَمَلِ", translation: "Saya pergi dengan bus ke tempat kerja", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah + Syibhul Jumlah" },
          { ar: "تَأَخَّرَتِ الْحَافِلَةُ", translation: "Bus itu terlambat", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "سَائِقُ الْحَافِلَةِ", translation: "Sopir bus", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "نَزَلْتُ مِنَ الْحَافِلَةِ", translation: "Saya turun dari bus", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_8_c23", wordAr: "قِطَارٌ", translation: "Kereta", category: "Transportasi",
        description: "Kereta api.", logicBox: "Isim Mudzakkar. Jamaknya قِطَارَاتٌ.",
        examples: [
          { ar: "سَافَرْتُ بِالْقِطَارِ", translation: "Saya bepergian dengan kereta", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "الْقِطَارُ سَرِيعٌ", translation: "Kereta itu cepat", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "مَحَطَّةُ الْقِطَارِ", translation: "Stasiun kereta", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "وَصَلَ الْقِطَارُ", translation: "Kereta telah tiba", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "رَكِبْنَا قِطَارَ اللَّيْلِ", translation: "Kami naik kereta malam", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih (idhafah)", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih (idhafah)" },
          { ar: "تَذْكَرَةُ الْقِطَارِ", translation: "Tiket kereta", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "الْقِطَارُ السَّرِيعُ", translation: "Kereta cepat", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "فَاتَنِي الْقِطَارُ", translation: "Saya ketinggalan kereta", grammarNote: "Fi'il Madhi-Maf'ul bih + Fa'il", analysis: "Fi'il Madhi-Maf'ul bih + Fa'il" },
          { ar: "يَقِفُ الْقِطَارُ هُنَا", translation: "Kereta berhenti di sini", grammarNote: "Fi'il Mudhari + Fa'il + Zharaf", analysis: "Fi'il Mudhari + Fa'il + Zharaf" },
          { ar: "نَوَافِذُ الْقِطَارِ", translation: "Jendela-jendela kereta", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_8_c24", wordAr: "طَائِرَةٌ", translation: "Pesawat", category: "Transportasi",
        description: "Pesawat terbang.", logicBox: "Isim Muannats. Jamaknya طَائِرَاتٌ.",
        examples: [
          { ar: "الطَّائِرَةُ فِي السَّمَاءِ", translation: "Pesawat di langit", grammarNote: "Mubtada + Syibhul Jumlah", analysis: "Mubtada + Syibhul Jumlah" },
          { ar: "سَافَرْتُ بِالطَّائِرَةِ إِلَى مَكَّةَ", translation: "Saya bepergian dengan pesawat ke Makkah", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah + Syibhul Jumlah" },
          { ar: "هَبَطَتِ الطَّائِرَةُ", translation: "Pesawat telah mendarat", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "أَقْلَعَتِ الطَّائِرَةُ", translation: "Pesawat telah lepas landas (take off)", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "تَذْكَرَةُ الطَّائِرَةِ غَالِيَةٌ", translation: "Tiket pesawat itu mahal", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "طَائِرَةٌ ضَخْمَةٌ", translation: "Pesawat yang sangat besar", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "قَائِدُ الطَّائِرَةِ (طَيَّارٌ)", translation: "Kapten pesawat (Pilot)", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "رِحْلَةُ الطَّائِرَةِ مُمْتِعَةٌ", translation: "Penerbangan pesawat itu menyenangkan", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "طَائِرَةٌ مَدَنِيَّةٌ", translation: "Pesawat sipil", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "نَظَرْتُ إِلَى الطَّائِرَةِ", translation: "Saya melihat ke pesawat", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_8_c25", wordAr: "مَطَارٌ", translation: "Bandara", category: "Transportasi",
        description: "Bandar udara.", logicBox: "Isim Mudzakkar. Jamaknya مَطَارَاتٌ.",
        examples: [
          { ar: "ذَهَبْتُ إِلَى الْمَطَارِ", translation: "Saya pergi ke bandara", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "الْمَطَارُ كَبِيرٌ", translation: "Bandara itu besar", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "مَطَارُ الدَّوْلِيِّ", translation: "Bandara internasional", grammarNote: "Mausuf + Sifat", analysis: "Mausuf + Sifat" },
          { ar: "وَصَلْتُ إِلَى الْمَطَارِ مُبَكِّرًا", translation: "Saya tiba di bandara pagi-pagi/awal", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah + Hal", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah + Hal" },
          { ar: "انْتَظَرْتُهُ فِي الْمَطَارِ", translation: "Saya menunggunya di bandara", grammarNote: "Fi'il Madhi-Fa'il-Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il-Maf'ul bih + Syibhul Jumlah" },
          { ar: "مِنَ الْمَطَارِ إِلَى الْفُنْدُقِ", translation: "Dari bandara ke hotel", grammarNote: "Syibhul Jumlah + Syibhul Jumlah", analysis: "Syibhul Jumlah + Syibhul Jumlah" },
          { ar: "طَرِيقُ الْمَطَارِ", translation: "Jalan (menuju) bandara", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "مَطَارُ جَاكَرْتَا", translation: "Bandara Jakarta", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "فِي الْمَطَارِ طَائِرَاتٌ", translation: "Di bandara ada pesawat-pesawat", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar", analysis: "Khabar Muqaddam + Mubtada Muakhkhar" },
          { ar: "خَرَجْنَا مِنَ الْمَطَارِ", translation: "Kami keluar dari bandara", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_8_c26", wordAr: "ذَهَبَ", translation: "Pergi", category: "Kata Kerja Navigasi",
        description: "Pergi (fi'il madhi). Mudharinya: يَذْهَبُ. Mashdar: ذَهَابٌ.", logicBox: "Fi'il lazim (tidak butuh maf'ul bih). Butuh preposisi إِلَى (ke).",
        examples: [
          { ar: "ذَهَبَ إِلَى الْمَدْرَسَةِ", translation: "Dia (lk) pergi ke sekolah", grammarNote: "Fi'il Madhi + Syibhul Jumlah", analysis: "Fi'il Madhi + Syibhul Jumlah" },
          { ar: "ذَهَبْتُ إِلَى السُّوقِ", translation: "Saya pergi ke pasar", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "ذَهَبْنَا إِلَى الْمَسْجِدِ", translation: "Kami pergi ke masjid", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "يَذْهَبُ كُلَّ يَوْمٍ", translation: "Dia pergi setiap hari", grammarNote: "Fi'il Mudhari + Zharaf + Mudhaf ilayh", analysis: "Fi'il Mudhari + Zharaf + Mudhaf ilayh" },
          { ar: "أَيْنَ ذَهَبْتَ؟", translation: "Ke mana kamu (lk) pergi?", grammarNote: "Isim Istifham + Fi'il Madhi-Fa'il", analysis: "Isim Istifham + Fi'il Madhi-Fa'il" },
          { ar: "لِمَاذَا ذَهَبَتْ؟", translation: "Mengapa dia (pr) pergi?", grammarNote: "Isim Istifham + Fi'il Madhi", analysis: "Isim Istifham + Fi'il Madhi" },
          { ar: "سَأَذْهَبُ غَدًا", translation: "Saya akan pergi besok", grammarNote: "Sin + Fi'il Mudhari + Zharaf", analysis: "Sin + Fi'il Mudhari + Zharaf" },
          { ar: "اِذْهَبْ إِلَى بَيْتِكَ", translation: "Pergilah ke rumahmu", grammarNote: "Fi'il Amr + Syibhul Jumlah (idhafah)", analysis: "Fi'il Amr + Syibhul Jumlah (idhafah)" },
          { ar: "لَا تَذْهَبْ بَعِيدًا", translation: "Jangan pergi jauh", grammarNote: "La Nahiyah + Fi'il Mudhari + Zharaf", analysis: "La Nahiyah + Fi'il Mudhari + Zharaf" },
          { ar: "ذَهَبَ وَلَمْ يَعُدْ", translation: "Dia pergi dan belum kembali", grammarNote: "Fi'il + Harf + Nafi-Fi'il", analysis: "Fi'il + Harf + Nafi-Fi'il" }
        ]
      },
      {
        id: "l1_8_c27", wordAr: "جَاءَ", translation: "Datang", category: "Kata Kerja Navigasi",
        description: "Datang (fi'il madhi). Mudharinya: يَجِيءُ. Mashdar: مَجِيءٌ. Sinonim: أَتَى.", logicBox: "Butuh preposisi مِنْ (dari) atau إِلَى (ke).",
        examples: [
          { ar: "جَاءَ مِنَ الْبَيْتِ", translation: "Dia (lk) datang dari rumah", grammarNote: "Fi'il Madhi + Syibhul Jumlah", analysis: "Fi'il Madhi + Syibhul Jumlah" },
          { ar: "جِئْتُ مُبَكِّرًا", translation: "Saya datang lebih awal", grammarNote: "Fi'il Madhi-Fa'il + Hal", analysis: "Fi'il Madhi-Fa'il + Hal" },
          { ar: "جَاءَتْ إِلَى الْمَدْرَسَةِ", translation: "Dia (pr) datang ke sekolah", grammarNote: "Fi'il Madhi + Syibhul Jumlah", analysis: "Fi'il Madhi + Syibhul Jumlah" },
          { ar: "مَتَى تَجِيءُ؟", translation: "Kapan kamu datang?", grammarNote: "Isim Istifham + Fi'il Mudhari", analysis: "Isim Istifham + Fi'il Mudhari" },
          { ar: "جَاءَ صَدِيقِي", translation: "Temanku datang", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "جَاءَ بِكِتَابٍ", translation: "Dia datang membawa buku (datang dengan buku)", grammarNote: "Fi'il Madhi + Syibhul Jumlah", analysis: "Fi'il Madhi + Syibhul Jumlah" },
          { ar: "الَّذِي جَاءَ", translation: "Orang yang datang", grammarNote: "Isim Mausul + Fi'il", analysis: "Isim Mausul + Fi'il" },
          { ar: "هَلْ جِئْتَ وَحْدَكَ؟", translation: "Apakah kamu datang sendirian?", grammarNote: "Tanya + Fi'il Madhi-Fa'il + Hal", analysis: "Tanya + Fi'il Madhi-Fa'il + Hal" },
          { ar: "أُرِيدُ أَنْ تَجِيءَ", translation: "Saya ingin kamu datang", grammarNote: "Fi'il Mudhari + Mashdar Muawwal", analysis: "Fi'il Mudhari + Mashdar Muawwal" },
          { ar: "جَاءَ الْحَقُّ", translation: "Telah datang kebenaran", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" }
        ]
      },
      {
        id: "l1_8_c28", wordAr: "وَصَلَ", translation: "Tiba/Sampai", category: "Kata Kerja Navigasi",
        description: "Tiba (fi'il madhi). Mudharinya: يَصِلُ. Mashdar: وُصُولٌ.", logicBox: "Biasanya butuh preposisi إِلَى (ke/di).",
        examples: [
          { ar: "وَصَلَ إِلَى الْمَطَارِ", translation: "Dia tiba di bandara", grammarNote: "Fi'il Madhi + Syibhul Jumlah", analysis: "Fi'il Madhi + Syibhul Jumlah" },
          { ar: "وَصَلْتُ مُتَأَخِّرًا", translation: "Saya tiba terlambat", grammarNote: "Fi'il Madhi-Fa'il + Hal", analysis: "Fi'il Madhi-Fa'il + Hal" },
          { ar: "مَتَى وَصَلْتُمْ؟", translation: "Kapan kalian (lk) tiba?", grammarNote: "Isim Istifham + Fi'il Madhi-Fa'il", analysis: "Isim Istifham + Fi'il Madhi-Fa'il" },
          { ar: "وَصَلَتِ الرِّسَالَةُ", translation: "Surat itu telah tiba", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "لَمْ يَصِلْ بَعْدُ", translation: "Dia belum tiba", grammarNote: "Nafi + Fi'il Mudhari + Zharaf", analysis: "Nafi + Fi'il Mudhari + Zharaf" },
          { ar: "سَأَصِلُ غَدًا", translation: "Saya akan tiba besok", grammarNote: "Sin + Fi'il Mudhari + Zharaf", analysis: "Sin + Fi'il Mudhari + Zharaf" },
          { ar: "الْقِطَارُ يَصِلُ الْآنَ", translation: "Kereta tiba sekarang", grammarNote: "Mubtada + Fi'il Mudhari + Zharaf", analysis: "Mubtada + Fi'il Mudhari + Zharaf" },
          { ar: "وَصَلْنَا بِسَلَامٍ", translation: "Kami tiba dengan selamat", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "وُصُولُ الضَّيْفِ", translation: "Kedatangan tamu", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "وَصَلَ إِلَى الْهَدَفِ", translation: "Dia mencapai tujuan", grammarNote: "Fi'il Madhi + Syibhul Jumlah", analysis: "Fi'il Madhi + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_8_c29", wordAr: "دَخَلَ", translation: "Masuk", category: "Kata Kerja Navigasi",
        description: "Masuk (fi'il madhi). Mudharinya: يَدْخُلُ. Mashdar: دُخُولٌ.", logicBox: "Bisa butuh فِي (ke dalam) atau langsung (maf'ul bih).",
        examples: [
          { ar: "دَخَلَ الْفَصْلَ", translation: "Dia masuk kelas", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" },
          { ar: "دَخَلْتُ فِي الْبَيْتِ", translation: "Saya masuk ke dalam rumah", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "يَدْخُلُ النَّاسُ فِي دِينِ اللهِ", translation: "Manusia masuk ke dalam agama Allah", grammarNote: "Fi'il Mudhari + Fa'il + Syibhul Jumlah (idhafah)", analysis: "Fi'il Mudhari + Fa'il + Syibhul Jumlah (idhafah)" },
          { ar: "دَخَلْنَا الْمَسْجِدَ", translation: "Kami masuk masjid", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "اُدْخُلْ بِسَلَامٍ", translation: "Masuklah dengan damai", grammarNote: "Fi'il Amr + Syibhul Jumlah", analysis: "Fi'il Amr + Syibhul Jumlah" },
          { ar: "مَمْنُوعُ الدُّخُولِ", translation: "Dilarang masuk", grammarNote: "Mubtada (idhafah)", analysis: "Mubtada (idhafah)" },
          { ar: "دَخَلَتِ الْغُرْفَةَ", translation: "Dia (pr) masuk kamar", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" },
          { ar: "لَا تَدْخُلْ قَبْلَ الِاسْتِئْذَانِ", translation: "Jangan masuk sebelum minta izin", grammarNote: "La Nahiyah + Fi'il Mudhari + Zharaf + Mudhaf ilayh", analysis: "La Nahiyah + Fi'il Mudhari + Zharaf + Mudhaf ilayh" },
          { ar: "دَخَلَ الْبَنْكَ", translation: "Dia masuk bank", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" },
          { ar: "دَخَلَ عَلَيْهِ", translation: "Dia masuk (menemui)nya", grammarNote: "Fi'il Madhi + Syibhul Jumlah", analysis: "Fi'il Madhi + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_8_c30", wordAr: "خَرَجَ", translation: "Keluar", category: "Kata Kerja Navigasi",
        description: "Keluar (fi'il madhi). Mudharinya: يَخْرُجُ. Mashdar: خُرُوجٌ.", logicBox: "Butuh preposisi مِنْ (dari).",
        examples: [
          { ar: "خَرَجَ مِنَ الْبَيْتِ", translation: "Dia keluar dari rumah", grammarNote: "Fi'il Madhi + Syibhul Jumlah", analysis: "Fi'il Madhi + Syibhul Jumlah" },
          { ar: "خَرَجْتُ مِنَ الْمُسْتَشْفَى", translation: "Saya keluar dari rumah sakit", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "يَخْرُجُ النَّاسُ مِنَ السُّوقِ", translation: "Orang-orang keluar dari pasar", grammarNote: "Fi'il Mudhari + Fa'il + Syibhul Jumlah", analysis: "Fi'il Mudhari + Fa'il + Syibhul Jumlah" },
          { ar: "اُخْرُجْ مِنْ هُنَا", translation: "Keluarlah dari sini", grammarNote: "Fi'il Amr + Syibhul Jumlah", analysis: "Fi'il Amr + Syibhul Jumlah" },
          { ar: "لِمَاذَا خَرَجْتَ؟", translation: "Mengapa kamu (lk) keluar?", grammarNote: "Isim Istifham + Fi'il Madhi-Fa'il", analysis: "Isim Istifham + Fi'il Madhi-Fa'il" },
          { ar: "بَابُ الْخُرُوجِ", translation: "Pintu keluar", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "خَرَجَتِ الشَّمْسُ", translation: "Matahari telah terbit (keluar)", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "لَمْ أَخْرُجِ الْيَوْمَ", translation: "Saya tidak keluar hari ini", grammarNote: "Nafi + Fi'il Mudhari + Zharaf", analysis: "Nafi + Fi'il Mudhari + Zharaf" },
          { ar: "خَرَجْنَا مَعًا", translation: "Kami keluar bersama-sama", grammarNote: "Fi'il Madhi-Fa'il + Hal", analysis: "Fi'il Madhi-Fa'il + Hal" },
          { ar: "سَأَخْرُجُ بَعْدَ قَلِيلٍ", translation: "Saya akan keluar sebentar lagi", grammarNote: "Sin + Fi'il Mudhari + Zharaf", analysis: "Sin + Fi'il Mudhari + Zharaf" }
        ]
      }
    ],
    grammarSection: {
      title: "Keterangan Tempat (Zharaf Makan) & Preposisi (Jar-Majrur)",
      explanation: "PREPOSISI (Huruf Jar) Arab yang paling sering:\nفِي = di dalam\nعَلَى = di atas (menempel)\nمِنْ = dari\nإِلَى = ke/menuju\nعَنْ = dari/tentang\nمَعَ = bersama\nبِـ = dengan/di\nلِـ = untuk/milik\nكَـ = seperti\n\nATURAN WAJIB:\nKata benda setelah preposisi SELALU diakhiri dengan baris kasrah (jika mufrad). Status ini disebut MAJRUR (ditarik ke bawah).\nContoh: ذَهَبْتُ إِلَى الْمَسْجِدِ (al-masjidi kasrah karena ada 'ilaa').\n\nKETERANGAN TEMPAT (ZHARAF MAKAN):\nKata penunjuk tempat/posisi. Selalu dibaca manshub (fathah).\nأَمَامَ = di depan, خَلْفَ = di belakang, فَوْقَ = di atas (tidak menempel), تَحْتَ = di bawah, يَمِينَ = di kanan, يَسَارَ = di kiri, بَيْنَ = di antara, وَسَطَ = di tengah.\n\nATURAN ZHARAF:\nZharaf berfungsi seperti Mudhaf, maka kata benda setelahnya adalah Mudhaf ilayh, yang juga SELALU KASRAH.\nContoh: أَمَامَ الْمَسْجِدِ (Amaama fathah sebagai zharaf, al-masjidi kasrah sebagai mudhaf ilayh).",
      examples: [
        { ar: "ذَهَبَ إِلَى السُّوقِ", translation: "Dia pergi ke pasar (Majrur dgn Kasrah)", type: "marifah" },
        { ar: "فِي الْبَيْتِ", translation: "Di dalam rumah (Majrur dgn Kasrah)", type: "marifah" },
        { ar: "خَرَجَ مِنَ الْمَدِينَةِ", translation: "Keluar dari kota (Majrur dgn Kasrah)", type: "marifah" },
        { ar: "تَحْتَ الشَّجَرَةِ", translation: "Di bawah pohon (Zharaf Fathah + Mudhaf ilayh Kasrah)", type: "marifah" },
        { ar: "أَمَامَ الْبَابِ", translation: "Di depan pintu (Zharaf Fathah + Mudhaf ilayh Kasrah)", type: "marifah" },
        { ar: "بَيْنَ السَّمَاءِ وَالْأَرْضِ", translation: "Di antara langit dan bumi", type: "marifah" },
        { ar: "الْكِتَابُ عَلَى الْمَكْتَبِ", translation: "Buku di atas meja", type: "marifah" },
        { ar: "جَلَسَ بِجَانِبِي", translation: "Duduk di sampingku", type: "marifah" }
      ],
      commonErrors: [
        {
          error: "Menggunakan dhummah setelah huruf jar: فِي الْمَسْجِدُ",
          correction: "Kata setelah huruf jar HARUS kasrah. Yang benar: فِي الْمَسْجِدِ."
        },
        {
          error: "Mengkasrahkan zharaf-nya: أَمَامِ الْمَسْجِدِ",
          correction: "Zharaf (keterangan) selalu fathah (manshub), yang kasrah hanya kata setelahnya. Yang benar: أَمَامَ الْمَسْجِدِ."
        },
        {
          error: "Tertukar fungsi عَلَى (menempel) dan فَوْقَ (melayang)",
          correction: "Gunakan 'alaa untuk hal yang bersentuhan (gelas di atas meja), gunakan fawqa untuk hal yang tidak bersentuhan (lampu menggantung di atas meja, atau awan di atas)."
        }
      ]
    },
    dialog: {
      context: "Seorang turis Muslim bertanya arah ke Masjid Nabawi kepada penduduk Madinah.",
      characters: ["السَّائِحُ (Turis)", "الْمُوَاطِنُ (Penduduk)"],
      lines: [
        { speaker: "السَّائِحُ", ar: "السَّلَامُ عَلَيْكُمْ يَا أَخِي، عَفْوًا، أَيْنَ الْمَسْجِدُ النَّبَوِيُّ؟", translation: "Assalamu'alaikum saudaraku, permisi, di mana Masjid Nabawi?" },
        { speaker: "الْمُوَاطِنُ", ar: "وَعَلَيْكُمُ السَّلَامُ. الْمَسْجِدُ النَّبَوِيُّ قَرِيبٌ مِنْ هُنَا.", translation: "Wa'alaikumussalam. Masjid Nabawi dekat dari sini." },
        { speaker: "السَّائِحُ", ar: "كَيْفَ أَذْهَبُ إِلَيْهِ؟", translation: "Bagaimana saya pergi ke sana?" },
        { speaker: "الْمُوَاطِنُ", ar: "اِمْشِ إِلَى الْأَمَامِ فِي هَذَا الشَّارِعِ.", translation: "Berjalanlah lurus ke depan di jalan ini." },
        { speaker: "السَّائِحُ", ar: "ثُمَّ مَاذَا؟", translation: "Lalu apa?" },
        { speaker: "الْمُوَاطِنُ", ar: "بَعْدَ فُنْدُقِ الْمَدِينَةِ، اِتَّجِهْ يَمِينًا.", translation: "Setelah Hotel Madinah, beloklah ke kanan." },
        { speaker: "السَّائِحُ", ar: "هَلْ هُوَ بَعِيدٌ؟ هَلْ أَحْتَاجُ إِلَى حَافِلَةٍ؟", translation: "Apakah ia jauh? Apakah saya butuh bus?" },
        { speaker: "الْمُوَاطِنُ", ar: "لَا، لَيْسَ بَعِيدًا. يُمْكِنُكَ الذَّهَابُ مَشْيًا.", translation: "Tidak, tidak jauh. Anda bisa pergi dengan berjalan kaki." },
        { speaker: "السَّائِحُ", ar: "وَأَيْنَ أَجِدُ الصَّيْدَلِيَّةَ؟", translation: "Dan di mana saya bisa menemukan apotek?" },
        { speaker: "الْمُوَاطِنُ", ar: "هُنَاكَ صَيْدَلِيَّةٌ أَمَامَ الْمَسْجِدِ تَمَامًا.", translation: "Ada apotek tepat di depan masjid." },
        { speaker: "السَّائِحُ", ar: "شُكْرًا جَزِيلًا يَا أَخِي. بَارَكَ اللهُ فِيكَ.", translation: "Terima kasih banyak saudaraku. Semoga Allah memberkahimu." },
        { speaker: "الْمُوَاطِنُ", ar: "عَفْوًا، وَفِيكَ بَارَكَ اللهُ. رِحْلَةً سَعِيدَةً.", translation: "Sama-sama, semoga Allah juga memberkahimu. Semoga perjalananmu menyenangkan." }
      ]
    },
    quiz: [
      {
        id: "q_l1_8_1", type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Kota'?",
        options: ["مَدِينَةٌ", "شَارِعٌ", "حَيٌّ", "سُوقٌ"],
        correctAnswer: "مَدِينَةٌ",
        explanation: "Madinah berarti kota."
      },
      {
        id: "q_l1_8_2", type: "multiple-choice",
        question: "Apa arti 'شَارِعٌ'?",
        options: ["Jalan", "Kota", "Taman", "Pasar"],
        correctAnswer: "Jalan",
        explanation: "Syari' berarti jalan."
      },
      {
        id: "q_l1_8_3", type: "multiple-choice",
        question: "Manakah yang berarti 'Rumah Sakit'?",
        options: ["مُسْتَشْفَى", "صَيْدَلِيَّةٌ", "بَنْكٌ", "فُنْدُقٌ"],
        correctAnswer: "مُسْتَشْفَى",
        explanation: "Mustasyfa berarti rumah sakit."
      },
      {
        id: "q_l1_8_4", type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Hotel'?",
        options: ["فُنْدُقٌ", "بَنْكٌ", "حَدِيقَةٌ", "مَيْدَانٌ"],
        correctAnswer: "فُنْدُقٌ",
        explanation: "Funduq berarti hotel."
      },
      {
        id: "q_l1_8_5", type: "multiple-choice",
        question: "Apa arti 'سُوقٌ'?",
        options: ["Pasar", "Jalan", "Apotek", "Bank"],
        correctAnswer: "Pasar",
        explanation: "Suuq berarti pasar."
      },
      {
        id: "q_l1_8_6", type: "multiple-choice",
        question: "Manakah yang berarti 'Kanan'?",
        options: ["يَمِينٌ", "يَسَارٌ", "أَمَامَ", "خَلْفَ"],
        correctAnswer: "يَمِينٌ",
        explanation: "Yamiin berarti kanan."
      },
      {
        id: "q_l1_8_7", type: "multiple-choice",
        question: "Lawan kata dari أَمَامَ (Di depan) adalah:",
        options: ["خَلْفَ", "فَوْقَ", "تَحْتَ", "بَيْنَ"],
        correctAnswer: "خَلْفَ",
        explanation: "Khalf berarti di belakang."
      },
      {
        id: "q_l1_8_8", type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Di atas' (tidak menempel)?",
        options: ["فَوْقَ", "تَحْتَ", "عَلَى", "فِي"],
        correctAnswer: "فَوْقَ",
        explanation: "Fawqa berarti di atas."
      },
      {
        id: "q_l1_8_9", type: "multiple-choice",
        question: "Manakah yang berarti 'Mobil'?",
        options: ["سَيَّارَةٌ", "حَافِلَةٌ", "قِطَارٌ", "طَائِرَةٌ"],
        correctAnswer: "سَيَّارَةٌ",
        explanation: "Sayyaarah berarti mobil."
      },
      {
        id: "q_l1_8_10", type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Pesawat'?",
        options: ["طَائِرَةٌ", "قِطَارٌ", "سَيَّارَةٌ", "مَطَارٌ"],
        correctAnswer: "طَائِرَةٌ",
        explanation: "Thaa'irah berarti pesawat."
      },
      {
        id: "q_l1_8_11", type: "multiple-choice",
        question: "Apa arti 'مَطَارٌ'?",
        options: ["Bandara", "Pesawat", "Stasiun", "Terminal"],
        correctAnswer: "Bandara",
        explanation: "Mathaar berarti bandara."
      },
      {
        id: "q_l1_8_12", type: "multiple-choice",
        question: "Apa arti fi'il 'ذَهَبَ'?",
        options: ["Pergi", "Datang", "Keluar", "Masuk"],
        correctAnswer: "Pergi",
        explanation: "Dzahaba berarti dia telah pergi."
      },
      {
        id: "q_l1_8_13", type: "multiple-choice",
        question: "Lawan kata dari دَخَلَ (Masuk) adalah:",
        options: ["خَرَجَ", "ذَهَبَ", "وَصَلَ", "جَاءَ"],
        correctAnswer: "خَرَجَ",
        explanation: "Kharaja berarti keluar."
      },
      {
        id: "q_l1_8_14", type: "multiple-choice",
        question: "Kata yang tepat untuk 'Saya pergi ___ pasar':",
        options: ["إِلَى", "فِي", "مِنْ", "عَلَى"],
        correctAnswer: "إِلَى",
        explanation: "Dzahabtu ILAA (ke) as-suuq."
      },
      {
        id: "q_l1_8_15", type: "multiple-choice",
        question: "Kata yang tepat untuk 'Keluar ___ rumah':",
        options: ["مِنْ", "إِلَى", "عَنْ", "بِـ"],
        correctAnswer: "مِنْ",
        explanation: "Kharaja MIN (dari) al-bayt."
      },
      {
        id: "q_l1_8_16", type: "multiple-choice",
        question: "Kata setelah huruf jar (seperti فِي, إِلَى) harakat terakhirnya harus:",
        options: ["Kasrah", "Fathah", "Dhummah", "Sukun"],
        correctAnswer: "Kasrah",
        explanation: "Isim Majrur selalu kasrah (jika mufrad)."
      },
      {
        id: "q_l1_8_17", type: "multiple-choice",
        question: "Kalimat yang benar:",
        options: ["فِي الْمَسْجِدِ", "فِي الْمَسْجِدُ", "فِي الْمَسْجِدَ", "فِي الْمَسْجِدٌ"],
        correctAnswer: "فِي الْمَسْجِدِ",
        explanation: "Fii al-masjidi (kasrah karena ada Fii)."
      },
      {
        id: "q_l1_8_18", type: "multiple-choice",
        question: "Kalimat 'السَّيَّارَةُ أَمَامَ الْبَيْتِ' berarti:",
        options: ["Mobil di depan rumah", "Mobil di belakang rumah", "Mobil di samping rumah", "Mobil di dalam rumah"],
        correctAnswer: "Mobil di depan rumah",
        explanation: "Amaama = di depan."
      },
      {
        id: "q_l1_8_19", type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Di antara'? ",
        options: ["بَيْنَ", "تَحْتَ", "فَوْقَ", "خَلْفَ"],
        correctAnswer: "بَيْنَ",
        explanation: "Bayna berarti di antara."
      },
      {
        id: "q_l1_8_20", type: "multiple-choice",
        question: "Apa arti 'قَرِيبٌ'?",
        options: ["Dekat", "Jauh", "Cepat", "Lambat"],
        correctAnswer: "Dekat",
        explanation: "Qariib berarti dekat."
      },
      {
        id: "q_l1_8_21", type: "multiple-choice",
        question: "Manakah yang berarti 'Jauh'?",
        options: ["بَعِيدٌ", "قَرِيبٌ", "كَبِيرٌ", "صَغِيرٌ"],
        correctAnswer: "بَعِيدٌ",
        explanation: "Ba'iid berarti jauh."
      },
      {
        id: "q_l1_8_22", type: "multiple-choice",
        question: "Apa arti 'حَدِيقَةٌ'?",
        options: ["Taman", "Lapangan", "Kawasan", "Apotek"],
        correctAnswer: "Taman",
        explanation: "Hadiqah berarti taman/kebun."
      },
      {
        id: "q_l1_8_23", type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Apotek'?",
        options: ["صَيْدَلِيَّةٌ", "مُسْتَشْفَى", "بَنْكٌ", "فُنْدُقٌ"],
        correctAnswer: "صَيْدَلِيَّةٌ",
        explanation: "Shaydaliyyah berarti apotek."
      },
      {
        id: "q_l1_8_24", type: "multiple-choice",
        question: "Manakah yang berarti 'Kereta'?",
        options: ["قِطَارٌ", "حَافِلَةٌ", "سَيَّارَةٌ", "طَائِرَةٌ"],
        correctAnswer: "قِطَارٌ",
        explanation: "Qithaar berarti kereta."
      },
      {
        id: "q_l1_8_25", type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Bus'?",
        options: ["حَافِلَةٌ", "سَيَّارَةٌ", "قِطَارٌ", "مَطَارٌ"],
        correctAnswer: "حَافِلَةٌ",
        explanation: "Haafilah berarti bus."
      },
      {
        id: "q_l1_8_26", type: "multiple-choice",
        question: "Kalimat 'وَصَلَ إِلَى الْمَطَارِ' berarti:",
        options: ["Tiba di bandara", "Keluar dari bandara", "Pergi ke bandara", "Datang dari bandara"],
        correctAnswer: "Tiba di bandara",
        explanation: "Washala = tiba, Mathaar = bandara."
      },
      {
        id: "q_l1_8_27", type: "multiple-choice",
        question: "Kalimat 'أَمَامَ الْمَسْجِدِ' adalah contoh penggunaan:",
        options: ["Zharaf Makan", "Huruf Jar", "Mubtada Khabar", "Na'at Man'ut"],
        correctAnswer: "Zharaf Makan",
        explanation: "Amaama adalah Zharaf Makan (keterangan tempat)."
      },
      {
        id: "q_l1_8_28", type: "multiple-choice",
        question: "Kata setelah Zharaf Makan (seperti أَمَامَ, خَلْفَ) disebut:",
        options: ["Mudhaf ilayh (Kasrah)", "Mubtada (Dhummah)", "Fa'il (Dhummah)", "Maf'ul bih (Fathah)"],
        correctAnswer: "Mudhaf ilayh (Kasrah)",
        explanation: "Zharaf berfungsi sebagai mudhaf, kata setelahnya mudhaf ilayh (kasrah)."
      },
      {
        id: "q_l1_8_29", type: "multiple-choice",
        question: "Apa arti 'يَسَارٌ'?",
        options: ["Kiri", "Kanan", "Depan", "Belakang"],
        correctAnswer: "Kiri",
        explanation: "Yasaar berarti kiri."
      },
      {
        id: "q_l1_8_30", type: "multiple-choice",
        question: "Kalimat yang benar (Di atas meja):",
        options: ["فَوْقَ الْمَكْتَبِ", "فَوْقُ الْمَكْتَبِ", "فَوْقِ الْمَكْتَبِ", "فَوْقَ الْمَكْتَبَ"],
        correctAnswer: "فَوْقَ الْمَكْتَبِ",
        explanation: "Zharaf (Fawqa) fathah + Mudhaf ilayh (al-Maktabi) kasrah."
      }
    ]
  }
};
