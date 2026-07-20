import { Lesson } from "../../types";

export const l1_5: Lesson = {
  id: "l1_5",
  title: "Bab 5: At-Tahiyyah wa At-Ta'aruf",
  titleAr: "التَّحِيَّةُ وَالتَّعَارُفُ",
  description: "Belajar salam sapaan dan perkenalan (At-Tahiyyah wa At-Ta'aruf) beserta penggunaan kata tanya dasar.",
  xpReward: 1500,
  isCompleted: false,
  isLocked: false,
  type: "comprehensive",
  content: {
    introduction: "Pertemuan pertama adalah gerbang ukhuwah, sebuah titik awal di mana hati dan lisan bertaut merajut ikatan baru. Dalam peradaban Arab dan Islam, sapaan bukanlah sekadar basa-basi sosial, melainkan sebuah doa keselamatan, rahmat, dan keberkahan yang dilangitkan untuk sesama. Bab 5 ini akan menunjukkan betapa mudah dan alaminya membuka percakapan menggunakan bahasa Arab yang memikat hati.\n\nMenguasai sapaan (التَّحِيَّة) dan perkenalan (التَّعَارُف) berarti Anda memegang kunci utama untuk melebur ke dalam dunia penutur asli. Melalui kosakata pilihan yang meliputi salam, perkenalan, hingga kata tanya fundamental, Anda akan takjub betapa cepatnya Anda bisa membangun inisiatif percakapan bermakna tanpa harus menghafal aturan grammar yang berat. Semuanya tersusun secara logis dan sangat mudah diikuti, menjadi fondasi penting untuk menavigasi setiap dialog baru.\n\nSetiap kata yang Anda ucapkan adalah jembatan menuju hati pendengarnya. Mari kita masuki bab ini dengan antusiasme tinggi, pelajari struktur tanyanya yang praktis, dan buktikan sendiri bahwa berbicara bahasa Arab itu tidak sesulit yang dibayangkan. Percakapan hebat pertama Anda bermula dari langkah mudah di sini!",
    introTitle: "Membangun Jembatan Ukhuwah dengan Salam dan Sapaan",
    introVerse: {
      ar: "وَإِذَا حُيِّيتُمْ بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا",
      translation: "Apabila kamu dihormati dengan suatu penghormatan, maka balaslah penghormatan itu dengan yang lebih baik, atau balaslah (dengan yang serupa). (QS. An-Nisa: 86)"
    },
    introBadges: [
      { icon: "🤝", text: "KOMUNIKASI AWAL (Menyapa dan merespon dengan sopan santun)" },
      { icon: "❓", text: "INVESTIGASI DASAR (Menggunakan kata tanya secara presisi)" }
    ],
    totalSentencesDisplay: "300 Kalimat Progresif",
    tips: [
      {
        title: "Tanya Tanpa Rumus Rumit",
        content: "Cukup letakkan huruf 'Hal' (Apakah) di depan kalimat berita biasa untuk mengubahnya menjadi pertanyaan. Kalimat Arab sangat fleksibel dalam hal ini!"
      },
      {
        title: "Respon Cepat: Na'am & Laa",
        content: "'Na'am' untuk Ya, 'Laa' untuk Tidak. Hafalkan dua kata sakti ini dan Anda sudah bisa merespon hampir semua pertanyaan konfirmasi dengan percaya diri."
      },
      {
        title: "Adab Sapaan Islami",
        content: "Menjawab salam hukumnya wajib. Dalam tradisi Arab, menjawab dengan kalimat yang lebih panjang (Wabarakatuh) dianggap sebagai bentuk penghormatan yang tinggi."
      }
    ],
    cards: [
      {
        id: "l1_5_c1",
        wordAr: "سَلَامٌ",
        translation: "Salam/Damai",
        category: "Salam & Sapaan",
        description: "Ucapan salam, damai, kesejahteraan.",
        logicBox: "Sering digunakan dalam bentuk ma'rifah (السَّلَامُ عَلَيْكُمْ).",
        examples: [
          { ar: "سَلَامٌ عَلَيْكُمْ", translation: "Keselamatan atas kalian", grammarNote: "Mubtada + Syibhul Jumlah (Khabar)", analysis: "Mubtada + Syibhul Jumlah (Khabar)" },
          { ar: "عَلَيْكُمُ السَّلَامُ", translation: "Dan atas kalian keselamatan", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar", analysis: "Khabar Muqaddam + Mubtada Muakhkhar" },
          { ar: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ", translation: "Keselamatan dan rahmat Allah atas kalian", grammarNote: "Mubtada + Ma'thuf + Syibhul Jumlah", analysis: "Mubtada + Ma'thuf + Syibhul Jumlah" },
          { ar: "تَحِيَّتُهُمْ فِيهَا سَلَامٌ", translation: "Penghormatan mereka di dalamnya adalah salam", grammarNote: "Mubtada + Syibhul Jumlah + Khabar", analysis: "Mubtada + Syibhul Jumlah + Khabar" },
          { ar: "سَلَامٌ قَوْلًا مِنْ رَبٍّ رَحِيمٍ", translation: "Sebagai ucapan salam dari Tuhan Yang Maha Penyayang", grammarNote: "Mubtada + Maf'ul muthlaq + Syibhul Jumlah", analysis: "Mubtada + Maf'ul muthlaq + Syibhul Jumlah" },
          { ar: "يَقُولُونَ سَلَامًا", translation: "Mereka mengucapkan salam", grammarNote: "Fi'il-Fa'il + Maf'ul bih", analysis: "Fi'il-Fa'il + Maf'ul bih" },
          { ar: "أُفْشُوا السَّلَامَ", translation: "Sebarkanlah salam", grammarNote: "Fi'il Amr + Maf'ul bih", analysis: "Fi'il Amr + Maf'ul bih" },
          { ar: "رَدَّ السَّلَامَ", translation: "Dia membalas salam", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" },
          { ar: "دَارُ السَّلَامِ", translation: "Rumah kedamaian (Surga)", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "لَا يَسْمَعُونَ فِيهَا إِلَّا سَلَامًا", translation: "Mereka tidak mendengar di dalamnya kecuali ucapan salam", grammarNote: "Fi'il-Fa'il + Istitsna + Maf'ul bih", analysis: "Fi'il-Fa'il + Istitsna + Maf'ul bih" }
        ]
      },
      {
        id: "l1_5_c2",
        wordAr: "أَهْلًا",
        translation: "Halo/Selamat datang",
        category: "Salam & Sapaan",
        description: "Sapaan ramah untuk menyambut seseorang.",
        logicBox: "Sering disambung dengan وَسَهْلًا (أَهْلًا وَسَهْلًا). Asalnya manshub karena maf'ul bih (menjumpai keluarga).",
        examples: [
          { ar: "أَهْلًا بِكَ", translation: "Selamat datang (untukmu - laki-laki)", grammarNote: "Maf'ul bih + Syibhul Jumlah", analysis: "Maf'ul bih + Syibhul Jumlah" },
          { ar: "أَهْلًا بِكِ", translation: "Selamat datang (untukmu - perempuan)", grammarNote: "Maf'ul bih + Syibhul Jumlah", analysis: "Maf'ul bih + Syibhul Jumlah" },
          { ar: "أَهْلًا وَسَهْلًا", translation: "Selamat datang", grammarNote: "Maf'ul bih + Ma'thuf", analysis: "Maf'ul bih + Ma'thuf" },
          { ar: "أَهْلًا يَا صَدِيقِي", translation: "Halo wahai temanku", grammarNote: "Maf'ul bih + Nida + Munada", analysis: "Maf'ul bih + Nida + Munada" },
          { ar: "قَالَ أَهْلًا", translation: "Dia mengucapkan selamat datang", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" },
          { ar: "أَهْلًا بِالضَّيْفِ", translation: "Selamat datang tamu", grammarNote: "Maf'ul bih + Syibhul Jumlah", analysis: "Maf'ul bih + Syibhul Jumlah" },
          { ar: "رَحَّبَ بِقَوْلِهِ أَهْلًا", translation: "Dia menyambut dengan ucapan selamat datang", grammarNote: "Fi'il Madhi + Syibhul Jumlah + Maf'ul bih", analysis: "Fi'il Madhi + Syibhul Jumlah + Maf'ul bih" },
          { ar: "أَهْلًا بِكُمَا", translation: "Selamat datang untuk kalian berdua", grammarNote: "Maf'ul bih + Syibhul Jumlah", analysis: "Maf'ul bih + Syibhul Jumlah" },
          { ar: "أَهْلًا بِكُمْ", translation: "Selamat datang untuk kalian (jamak)", grammarNote: "Maf'ul bih + Syibhul Jumlah", analysis: "Maf'ul bih + Syibhul Jumlah" },
          { ar: "يَقُولُ أَهْلًا لِلْجَمِيعِ", translation: "Dia mengucapkan selamat datang kepada semuanya", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_5_c3",
        wordAr: "مَرْحَبًا",
        translation: "Selamat datang",
        category: "Salam & Sapaan",
        description: "Ungkapan sambutan yang berarti 'kelapangan'.",
        logicBox: "Sering diakhiri dengan بِـ (مَرْحَبًا بِكَ).",
        examples: [
          { ar: "مَرْحَبًا بِكَ", translation: "Selamat datang (laki-laki)", grammarNote: "Maf'ul bih (na'ib maf'ul muthlaq) + Syibhul Jumlah", analysis: "Maf'ul bih (na'ib maf'ul muthlaq) + Syibhul Jumlah" },
          { ar: "مَرْحَبًا يَا أَخِي", translation: "Selamat datang saudaraku", grammarNote: "Maf'ul bih + Nida + Munada", analysis: "Maf'ul bih + Nida + Munada" },
          { ar: "مَرْحَبًا بِكُمْ جَمِيعًا", translation: "Selamat datang kalian semua", grammarNote: "Maf'ul bih + Syibhul Jumlah + Hal", analysis: "Maf'ul bih + Syibhul Jumlah + Hal" },
          { ar: "قَالُوا مَرْحَبًا", translation: "Mereka berkata selamat datang", grammarNote: "Fi'il-Fa'il + Maf'ul bih", analysis: "Fi'il-Fa'il + Maf'ul bih" },
          { ar: "أَقُولُ مَرْحَبًا لِلضُّيُوفِ", translation: "Saya berkata selamat datang kepada para tamu", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "مَرْحَبًا فِي بَيْتِنَا", translation: "Selamat datang di rumah kami", grammarNote: "Maf'ul bih + Syibhul Jumlah", analysis: "Maf'ul bih + Syibhul Jumlah" },
          { ar: "مَرْحَبًا بِشَهْرِ رَمَضَانَ", translation: "Selamat datang bulan Ramadhan", grammarNote: "Maf'ul bih + Syibhul Jumlah (Mudhaf ilayh)", analysis: "Maf'ul bih + Syibhul Jumlah (Mudhaf ilayh)" },
          { ar: "يُرَحِّبُ بِهِ قَائِلًا مَرْحَبًا", translation: "Dia menyambutnya sambil berkata selamat datang", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Hal + Maf'ul bih", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Hal + Maf'ul bih" },
          { ar: "مَرْحَبًا أَيُّهَا الْمُعَلِّمُ", translation: "Selamat datang wahai guru", grammarNote: "Maf'ul bih + Nida + Munada", analysis: "Maf'ul bih + Nida + Munada" },
          { ar: "نَقُولُ مَرْحَبًا لِلْجَارِ جَدِيدٍ", translation: "Kami mengucapkan selamat datang kepada tetangga baru", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah + Sifat", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah + Sifat" }
        ]
      },
      {
        id: "l1_5_c4",
        wordAr: "صَبَاحُ الْخَيْرِ",
        translation: "Selamat pagi",
        category: "Salam & Sapaan",
        description: "Sapaan di pagi hari. Secara harfiah: pagi kebaikan.",
        logicBox: "Dijawab dengan صَبَاحُ النُّورِ (pagi cahaya). Tersusun dari mudhaf & mudhaf ilayh.",
        examples: [
          { ar: "صَبَاحُ الْخَيْرِ يَا أَبِي", translation: "Selamat pagi ayahku", grammarNote: "Mubtada (idhafah) + Nida", analysis: "Mubtada (idhafah) + Nida" },
          { ar: "صَبَاحُ النُّورِ يَا ابْنِي", translation: "Selamat pagi anakku (jawaban)", grammarNote: "Mubtada (idhafah) + Nida", analysis: "Mubtada (idhafah) + Nida" },
          { ar: "قَالَ: صَبَاحُ الْخَيْرِ", translation: "Dia berkata: selamat pagi", grammarNote: "Fi'il Madhi + Maqul Qaul (Mubtada)", analysis: "Fi'il Madhi + Maqul Qaul (Mubtada)" },
          { ar: "صَبَاحُ الْخَيْرِ لِلْجَمِيعِ", translation: "Selamat pagi untuk semuanya", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah (Khabar)", analysis: "Mubtada (idhafah) + Syibhul Jumlah (Khabar)" },
          { ar: "أُصْبِحُ وَأَقُولُ صَبَاحُ الْخَيْرِ", translation: "Saya bangun pagi dan berkata selamat pagi", grammarNote: "Fi'il-Fa'il + Ma'thuf + Maqul Qaul", analysis: "Fi'il-Fa'il + Ma'thuf + Maqul Qaul" },
          { ar: "صَبَاحُ الْخَيْرِ يَا زَمِيلِي", translation: "Selamat pagi rekan kerjaku", grammarNote: "Mubtada (idhafah) + Nida", analysis: "Mubtada (idhafah) + Nida" },
          { ar: "تَبَادَلُوا صَبَاحَ الْخَيْرِ", translation: "Mereka saling bertukar (ucapan) selamat pagi", grammarNote: "Fi'il-Fa'il + Maf'ul bih (idhafah)", analysis: "Fi'il-Fa'il + Maf'ul bih (idhafah)" },
          { ar: "رَدَّ عَلَيْهِ صَبَاحَ النُّورِ", translation: "Dia membalas kepadanya selamat pagi (bercahaya)", grammarNote: "Fi'il Madhi + Syibhul Jumlah + Maf'ul bih", analysis: "Fi'il Madhi + Syibhul Jumlah + Maf'ul bih" },
          { ar: "صَبَاحُ الْخَيْرِ يَا طُلَّابُ", translation: "Selamat pagi para siswa", grammarNote: "Mubtada (idhafah) + Nida", analysis: "Mubtada (idhafah) + Nida" },
          { ar: "نَبْدَأُ بـِ صَبَاحُ الْخَيْرِ", translation: "Kita mulai dengan (ucapan) selamat pagi", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah", analysis: "Fi'il-Fa'il + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_5_c5",
        wordAr: "مَسَاءُ الْخَيْرِ",
        translation: "Selamat sore",
        category: "Salam & Sapaan",
        description: "Sapaan di waktu petang/sore. Harfiah: sore kebaikan.",
        logicBox: "Dijawab dengan مَسَاءُ النُّورِ (sore cahaya).",
        examples: [
          { ar: "مَسَاءُ الْخَيْرِ يَا أُمِّي", translation: "Selamat sore ibuku", grammarNote: "Mubtada (idhafah) + Nida", analysis: "Mubtada (idhafah) + Nida" },
          { ar: "مَسَاءُ النُّورِ يَا بِنْتِي", translation: "Selamat sore anakku (perempuan - jawaban)", grammarNote: "Mubtada (idhafah) + Nida", analysis: "Mubtada (idhafah) + Nida" },
          { ar: "مَسَاءُ الْخَيْرِ لِلْحَاضِرِينَ", translation: "Selamat sore untuk para hadirin", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah (Khabar)", analysis: "Mubtada (idhafah) + Syibhul Jumlah (Khabar)" },
          { ar: "أَقُولُ لَهُ مَسَاءَ الْخَيْرِ", translation: "Saya berkata kepadanya selamat sore", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Maf'ul bih (idhafah)", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Maf'ul bih (idhafah)" },
          { ar: "مَسَاءُ الْخَيْرِ يَا صَدِيقِي", translation: "Selamat sore temanku", grammarNote: "Mubtada (idhafah) + Nida", analysis: "Mubtada (idhafah) + Nida" },
          { ar: "هَمَسَ مَسَاءَ الْخَيْرِ", translation: "Dia membisikkan selamat sore", grammarNote: "Fi'il Madhi + Maf'ul bih (idhafah)", analysis: "Fi'il Madhi + Maf'ul bih (idhafah)" },
          { ar: "مَسَاءُ الْخَيْرِ، كَيْفَ الْحَالُ؟", translation: "Selamat sore, apa kabar?", grammarNote: "Mubtada (idhafah) + Jumlah Istifham", analysis: "Mubtada (idhafah) + Jumlah Istifham" },
          { ar: "رَدَّ مُبْتَسِمًا: مَسَاءُ النُّورِ", translation: "Dia membalas sambil tersenyum: selamat sore", grammarNote: "Fi'il Madhi + Hal + Maqul Qaul", analysis: "Fi'il Madhi + Hal + Maqul Qaul" },
          { ar: "مَسَاءُ الْخَيْرِ يَا ضُيُوفُنَا", translation: "Selamat sore wahai tamu-tamu kami", grammarNote: "Mubtada (idhafah) + Nida + Mudhaf ilayh", analysis: "Mubtada (idhafah) + Nida + Mudhaf ilayh" },
          { ar: "تَحِيَّةُ الْمَسَاءِ مَسَاءُ الْخَيْرِ", translation: "Sapaan sore adalah selamat sore", grammarNote: "Mubtada (idhafah) + Khabar (idhafah)", analysis: "Mubtada (idhafah) + Khabar (idhafah)" }
        ]
      },
      {
        id: "l1_5_c6",
        wordAr: "كَيْفَ حَالُكَ",
        translation: "Apa kabarmu?",
        category: "Salam & Sapaan",
        description: "Pertanyaan keadaan. Harfiah: Bagaimana keadaanmu?",
        logicBox: "Untuk laki-laki كَيْفَ حَالُكَ. Untuk perempuan كَيْفَ حَالُكِ. Untuk jamak كَيْفَ حَالُكُمْ.",
        examples: [
          { ar: "كَيْفَ حَالُكَ يَا أَخِي؟", translation: "Bagaimana kabarmu saudaraku?", grammarNote: "Tanya + Mubtada (idhafah) + Nida", analysis: "Tanya + Mubtada (idhafah) + Nida" },
          { ar: "كَيْفَ حَالُكِ يَا أُخْتِي؟", translation: "Bagaimana kabarmu saudariku?", grammarNote: "Tanya + Mubtada (idhafah) + Nida", analysis: "Tanya + Mubtada (idhafah) + Nida" },
          { ar: "كَيْفَ حَالُكُمْ أَيُّهَا الطُّلَّابُ؟", translation: "Bagaimana kabar kalian para siswa?", grammarNote: "Tanya + Mubtada (idhafah) + Nida", analysis: "Tanya + Mubtada (idhafah) + Nida" },
          { ar: "أَسْأَلُكَ: كَيْفَ حَالُكَ؟", translation: "Saya bertanya padamu: bagaimana kabarmu?", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Maqul Qaul", analysis: "Fi'il-Fa'il + Maf'ul bih + Maqul Qaul" },
          { ar: "كَيْفَ حَالُكَ الْيَوْمَ؟", translation: "Bagaimana kabarmu hari ini?", grammarNote: "Tanya + Mubtada + Zharaf Zaman", analysis: "Tanya + Mubtada + Zharaf Zaman" },
          { ar: "أَهْلًا، كَيْفَ حَالُكَ؟", translation: "Halo, bagaimana kabarmu?", grammarNote: "Nida/Sapaan + Tanya + Mubtada", analysis: "Nida/Sapaan + Tanya + Mubtada" },
          { ar: "سَأَلَهُ الْمُعَلِّمُ: كَيْفَ حَالُكَ؟", translation: "Guru bertanya kepadanya: bagaimana kabarmu?", grammarNote: "Fi'il Madhi + Maf'ul bih + Fa'il + Maqul Qaul", analysis: "Fi'il Madhi + Maf'ul bih + Fa'il + Maqul Qaul" },
          { ar: "كَيْفَ الْحَالُ؟", translation: "Bagaimana keadaan?", grammarNote: "Tanya + Mubtada", analysis: "Tanya + Mubtada" },
          { ar: "كَيْفَ حَالُ عائِلَتِكَ؟", translation: "Bagaimana kabar keluargamu?", grammarNote: "Tanya + Mubtada (idhafah)", analysis: "Tanya + Mubtada (idhafah)" },
          { ar: "مَرْحَبًا كَيْفَ حَالُكَ؟", translation: "Selamat datang, apa kabarmu?", grammarNote: "Sapaan + Tanya + Mubtada", analysis: "Sapaan + Tanya + Mubtada" }
        ]
      },
      {
        id: "l1_5_c7",
        wordAr: "بِخَيْرٍ",
        translation: "Baik/Alhamdulillah",
        category: "Salam & Sapaan",
        description: "Jawaban standar untuk pertanyaan kabar. Harfiah: dengan kebaikan.",
        logicBox: "Terdiri dari huruf jar بـِ dan isim majrur خَيْرٍ. Sering diikuti Alhamdulillah.",
        examples: [
          { ar: "أَنَا بِخَيْرٍ", translation: "Saya baik-baik saja", grammarNote: "Mubtada + Syibhul Jumlah (Khabar)", analysis: "Mubtada + Syibhul Jumlah (Khabar)" },
          { ar: "بِخَيْرٍ وَالْحَمْدُ لِلهِ", translation: "Baik, segala puji bagi Allah", grammarNote: "Syibhul Jumlah (Khabar) + Ma'thuf + Jumlah Ismiyyah", analysis: "Syibhul Jumlah (Khabar) + Ma'thuf + Jumlah Ismiyyah" },
          { ar: "نَحْنُ بِخَيْرٍ شُكْرًا", translation: "Kami baik-baik saja, terima kasih", grammarNote: "Mubtada + Syibhul Jumlah + Maf'ul muthlaq", analysis: "Mubtada + Syibhul Jumlah + Maf'ul muthlaq" },
          { ar: "أَصْبَحْتُ بِخَيْرٍ", translation: "Saya berada di pagi hari dalam keadaan baik", grammarNote: "Fi'il Naqis (Isim Kana) + Syibhul Jumlah (Khabar Kana)", analysis: "Fi'il Naqis (Isim Kana) + Syibhul Jumlah (Khabar Kana)" },
          { ar: "أَمْسَيْتُ بِخَيْرٍ", translation: "Saya berada di sore hari dalam keadaan baik", grammarNote: "Fi'il Naqis (Isim Kana) + Syibhul Jumlah", analysis: "Fi'il Naqis (Isim Kana) + Syibhul Jumlah" },
          { ar: "الْأُسْرَةُ كُلُّهَا بِخَيْرٍ", translation: "Keluarga semuanya baik", grammarNote: "Mubtada + Taukid + Syibhul Jumlah (Khabar)", analysis: "Mubtada + Taukid + Syibhul Jumlah (Khabar)" },
          { ar: "أَرْجُو أَنْ تَكُونَ بِخَيْرٍ", translation: "Saya harap kamu baik-baik saja", grammarNote: "Fi'il-Fa'il + Mashdar Muawwal (Isim Kana + Syibhul Jumlah)", analysis: "Fi'il-Fa'il + Mashdar Muawwal (Isim Kana + Syibhul Jumlah)" },
          { ar: "هُوَ بِخَيْرٍ الْآنَ", translation: "Dia baik-baik saja sekarang", grammarNote: "Mubtada + Syibhul Jumlah + Zharaf Zaman", analysis: "Mubtada + Syibhul Jumlah + Zharaf Zaman" },
          { ar: "هَلْ أَنْتَ بِخَيْرٍ؟", translation: "Apakah kamu baik-baik saja?", grammarNote: "Tanya + Mubtada + Syibhul Jumlah", analysis: "Tanya + Mubtada + Syibhul Jumlah" },
          { ar: "عَادَ مِنَ السَّفَرِ بِخَيْرٍ", translation: "Dia kembali dari perjalanan dengan baik (selamat)", grammarNote: "Fi'il Madhi + Syibhul Jumlah + Hal (Syibhul Jumlah)", analysis: "Fi'il Madhi + Syibhul Jumlah + Hal (Syibhul Jumlah)" }
        ]
      },
      {
        id: "l1_5_c8",
        wordAr: "شُكْرًا",
        translation: "Terima kasih",
        category: "Salam & Sapaan",
        description: "Ucapan rasa terima kasih.",
        logicBox: "Bentuk manshub sebagai maf'ul muthlaq (seolah ada fi'il 'aku bersyukur'). Dijawab dengan عَفْوًا.",
        examples: [
          { ar: "شُكْرًا لَكَ", translation: "Terima kasih untukmu (laki)", grammarNote: "Maf'ul muthlaq + Syibhul Jumlah", analysis: "Maf'ul muthlaq + Syibhul Jumlah" },
          { ar: "شُكْرًا لَكِ", translation: "Terima kasih untukmu (perempuan)", grammarNote: "Maf'ul muthlaq + Syibhul Jumlah", analysis: "Maf'ul muthlaq + Syibhul Jumlah" },
          { ar: "شُكْرًا جَزِيلًا", translation: "Terima kasih banyak", grammarNote: "Maf'ul muthlaq + Sifat", analysis: "Maf'ul muthlaq + Sifat" },
          { ar: "أَقُولُ شُكْرًا", translation: "Saya mengucapkan terima kasih", grammarNote: "Fi'il-Fa'il + Maf'ul muthlaq (Maqul Qaul)", analysis: "Fi'il-Fa'il + Maf'ul muthlaq (Maqul Qaul)" },
          { ar: "شُكْرًا عَلَى مُسَاعَدَتِكَ", translation: "Terima kasih atas bantuanmu", grammarNote: "Maf'ul muthlaq + Syibhul Jumlah", analysis: "Maf'ul muthlaq + Syibhul Jumlah" },
          { ar: "شُكْرًا لِجُهُودِكُمْ", translation: "Terima kasih untuk usaha-usaha kalian", grammarNote: "Maf'ul muthlaq + Syibhul Jumlah", analysis: "Maf'ul muthlaq + Syibhul Jumlah" },
          { ar: "لَا شُكْرَ عَلَى وَاجِبٍ", translation: "Tidak ada ucapan terima kasih atas suatu kewajiban (Sama-sama)", grammarNote: "La Nafiyah lil Jins + Isim + Syibhul Jumlah (Khabar)", analysis: "La Nafiyah lil Jins + Isim + Syibhul Jumlah (Khabar)" },
          { ar: "شُكْرًا لِحُضُورِكَ", translation: "Terima kasih atas kehadiranmu", grammarNote: "Maf'ul muthlaq + Syibhul Jumlah", analysis: "Maf'ul muthlaq + Syibhul Jumlah" },
          { ar: "شُكْرًا كَثِيرًا", translation: "Terima kasih banyak", grammarNote: "Maf'ul muthlaq + Sifat", analysis: "Maf'ul muthlaq + Sifat" },
          { ar: "بَعَثَ رِسَالَةَ شُكْرٍ", translation: "Dia mengirimkan surat terima kasih", grammarNote: "Fi'il Madhi + Maf'ul bih + Mudhaf ilayh", analysis: "Fi'il Madhi + Maf'ul bih + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_5_c9",
        wordAr: "عَفْوًا",
        translation: "Sama-sama/Maaf",
        category: "Salam & Sapaan",
        description: "Bisa berarti 'sama-sama' (balasan syukran) atau 'permisi/maaf' (meminta perhatian).",
        logicBox: "Manshub sebagai maf'ul muthlaq. Arti tergantung konteks.",
        examples: [
          { ar: "عَفْوًا (رَدٌّ لِشُكْرًا)", translation: "Sama-sama (balasan untuk terima kasih)", grammarNote: "Maf'ul muthlaq", analysis: "Maf'ul muthlaq" },
          { ar: "عَفْوًا، أَيْنَ الْمَسْجِدُ؟", translation: "Permisi, di mana masjid?", grammarNote: "Maf'ul muthlaq + Tanya + Mubtada", analysis: "Maf'ul muthlaq + Tanya + Mubtada" },
          { ar: "أَطْلُبُ عَفْوًا", translation: "Saya memohon maaf", grammarNote: "Fi'il-Fa'il + Maf'ul bih", analysis: "Fi'il-Fa'il + Maf'ul bih" },
          { ar: "عَفْوًا عَنِ الْخَطَإِ", translation: "Maaf atas kesalahan", grammarNote: "Maf'ul muthlaq + Syibhul Jumlah", analysis: "Maf'ul muthlaq + Syibhul Jumlah" },
          { ar: "عَفْوًا، لَمْ أَسْمَعْكَ", translation: "Maaf, saya tidak mendengarmu", grammarNote: "Maf'ul muthlaq + Nafi + Fi'il-Fa'il + Maf'ul bih", analysis: "Maf'ul muthlaq + Nafi + Fi'il-Fa'il + Maf'ul bih" },
          { ar: "عَفْوًا يَا سَيِّدِي", translation: "Permisi tuan", grammarNote: "Maf'ul muthlaq + Nida", analysis: "Maf'ul muthlaq + Nida" },
          { ar: "شُكْرًا. عَفْوًا", translation: "Terima kasih. Sama-sama.", grammarNote: "Maf'ul muthlaq", analysis: "Maf'ul muthlaq" },
          { ar: "الْعَفْوَ", translation: "Maaf (bentuk ma'rifah)", grammarNote: "Maf'ul muthlaq", analysis: "Maf'ul muthlaq" },
          { ar: "عَفْوًا هَلْ هَذَا مَقْعَدُكَ؟", translation: "Permisi, apakah ini kursimu?", grammarNote: "Maf'ul muthlaq + Tanya + Mubtada + Khabar", analysis: "Maf'ul muthlaq + Tanya + Mubtada + Khabar" },
          { ar: "تَلَقَّى شُكْرَهُ بِعَفْوٍ", translation: "Dia menerima ucapan terima kasihnya dengan kata sama-sama", grammarNote: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_5_c10",
        wordAr: "مِنْ فَضْلِكَ",
        translation: "Tolong/Silakan",
        category: "Salam & Sapaan",
        description: "Ungkapan sopan saat meminta sesuatu. Harfiah: dari keutamaanmu.",
        logicBox: "Untuk perempuan مِنْ فَضْلِكِ. Untuk jamak مِنْ فَضْلِكُمْ.",
        examples: [
          { ar: "مِنْ فَضْلِكَ، سَاعِدْنِي", translation: "Tolong, bantu aku (untuk laki-laki)", grammarNote: "Syibhul Jumlah (Nida/Sopan) + Fi'il Amr + Maf'ul bih", analysis: "Syibhul Jumlah (Nida/Sopan) + Fi'il Amr + Maf'ul bih" },
          { ar: "مِنْ فَضْلِكِ، أَعْطِينِي الْقَلَمَ", translation: "Tolong, berikan saya pena (untuk perempuan)", grammarNote: "Syibhul Jumlah + Fi'il Amr + Maf'ul bih", analysis: "Syibhul Jumlah + Fi'il Amr + Maf'ul bih" },
          { ar: "اِفْتَحِ الْبَابَ مِنْ فَضْلِكَ", translation: "Buka pintunya tolong", grammarNote: "Fi'il Amr + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Amr + Maf'ul bih + Syibhul Jumlah" },
          { ar: "مِنْ فَضْلِكُمْ، اِجْلِسُوا", translation: "Tolong, duduklah kalian", grammarNote: "Syibhul Jumlah + Fi'il Amr", analysis: "Syibhul Jumlah + Fi'il Amr" },
          { ar: "كُوبُ مَاءٍ مِنْ فَضْلِكَ", translation: "Segelas air tolong", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah", analysis: "Mubtada (idhafah) + Syibhul Jumlah" },
          { ar: "مِنْ فَضْلِكَ دَقِيقَةً", translation: "Minta waktumu semenit tolong", grammarNote: "Syibhul Jumlah + Zharaf Zaman", analysis: "Syibhul Jumlah + Zharaf Zaman" },
          { ar: "أَعِدْ مِنْ فَضْلِكَ", translation: "Ulangi tolong", grammarNote: "Fi'il Amr + Syibhul Jumlah", analysis: "Fi'il Amr + Syibhul Jumlah" },
          { ar: "مِنْ فَضْلِكَ لَا تَتَكَلَّمْ", translation: "Tolong jangan bicara", grammarNote: "Syibhul Jumlah + La Nahiyah + Fi'il Mudhari مجزوم", analysis: "Syibhul Jumlah + La Nahiyah + Fi'il Mudhari مجزوم" },
          { ar: "اِقْرَأْ هَذَا مِنْ فَضْلِكَ", translation: "Bacalah ini tolong", grammarNote: "Fi'il Amr + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Amr + Maf'ul bih + Syibhul Jumlah" },
          { ar: "مِنْ فَضْلِكَ أَيْنَ الطَّرِيقُ؟", translation: "Permisi tolong, di mana jalannya?", grammarNote: "Syibhul Jumlah + Tanya + Mubtada", analysis: "Syibhul Jumlah + Tanya + Mubtada" }
        ]
      },
      {
        id: "l1_5_c11",
        wordAr: "تَعَارَفَ",
        translation: "Berkenalan",
        category: "Perkenalan",
        description: "Saling mengenal antara dua pihak atau lebih. (Fi'il Madhi).",
        logicBox: "Fi'il madhi tsulatsi mazid (wazan تَفَاعَلَ) yang menunjukkan makna saling (musyarakah).",
        examples: [
          { ar: "تَعَارَفَ الطَّالِبَانِ", translation: "Dua siswa itu saling berkenalan", grammarNote: "Fi'il Madhi + Fa'il (mutsanna)", analysis: "Fi'il Madhi + Fa'il (mutsanna)" },
          { ar: "تَعَارَفْنَا فِي الْمَدْرَسَةِ", translation: "Kami berkenalan di sekolah", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "أُرِيدُ أَنْ أَتَعَارَفَ مَعَكَ", translation: "Saya ingin berkenalan denganmu", grammarNote: "Fi'il-Fa'il + Mashdar Muawwal (Fi'il + Syibhul Jumlah)", analysis: "Fi'il-Fa'il + Mashdar Muawwal (Fi'il + Syibhul Jumlah)" },
          { ar: "تَعَارَفَ النَّاسُ", translation: "Orang-orang saling berkenalan", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "هَلْ تَعَارَفْتُمَا؟", translation: "Apakah kalian berdua sudah saling kenal?", grammarNote: "Tanya + Fi'il Madhi-Fa'il", analysis: "Tanya + Fi'il Madhi-Fa'il" },
          { ar: "وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا", translation: "Dan Kami jadikan kalian berbangsa-bangsa dan bersuku-suku agar kalian saling mengenal", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Ma'thuf + Lam Ta'lil-Fi'il", analysis: "Fi'il-Fa'il + Maf'ul bih + Ma'thuf + Lam Ta'lil-Fi'il" },
          { ar: "تَعَارَفَ الضُّيُوفُ", translation: "Para tamu saling berkenalan", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "تَعَارَفْنَا فِي الْحَفْلَةِ", translation: "Kami berkenalan di pesta", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "يَجِبُ أَنْ يَتَعَارَفَا", translation: "Mereka berdua wajib saling mengenal", grammarNote: "Fi'il-Fa'il + Mashdar Muawwal", analysis: "Fi'il-Fa'il + Mashdar Muawwal" },
          { ar: "لَقَدْ تَعَارَفْنَا أَمْسِ", translation: "Sungguh kami telah berkenalan kemarin", grammarNote: "Harf Tahqiq + Fi'il Madhi-Fa'il + Zharaf Zaman", analysis: "Harf Tahqiq + Fi'il Madhi-Fa'il + Zharaf Zaman" }
        ]
      },
      {
        id: "l1_5_c12",
        wordAr: "قَدَّمَ",
        translation: "Memperkenalkan/Menyajikan",
        category: "Perkenalan",
        description: "Menyajikan sesuatu atau memperkenalkan seseorang. (Fi'il Madhi).",
        logicBox: "Wazan فَعَّلَ. Butuh maf'ul bih (apa/siapa yang diperkenalkan).",
        examples: [
          { ar: "قَدَّمَ صَدِيقَهُ", translation: "Dia memperkenalkan temannya", grammarNote: "Fi'il Madhi + Maf'ul bih (idhafah)", analysis: "Fi'il Madhi + Maf'ul bih (idhafah)" },
          { ar: "أُقَدِّمُ لَكُمْ أَخِي", translation: "Saya memperkenalkan kepada kalian saudara laki-lakiku", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Maf'ul bih", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Maf'ul bih" },
          { ar: "قَدَّمْتُ نَفْسِي", translation: "Saya memperkenalkan diri saya", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "قَدَّمَ الْمُعَلِّمُ دَرْسًا", translation: "Guru menyajikan pelajaran", grammarNote: "Fi'il Madhi + Fa'il + Maf'ul bih", analysis: "Fi'il Madhi + Fa'il + Maf'ul bih" },
          { ar: "سَأُقَدِّمُ لَكَ ضَيْفِي", translation: "Saya akan memperkenalkan kepadamu tamuku", grammarNote: "Fi'il Mudhari + Syibhul Jumlah + Maf'ul bih", analysis: "Fi'il Mudhari + Syibhul Jumlah + Maf'ul bih" },
          { ar: "قَدَّمَ هَدِيَّةً", translation: "Dia memberikan hadiah", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" },
          { ar: "يُقَدِّمُ بَرْنَامَجًا", translation: "Dia menyajikan program/acara", grammarNote: "Fi'il Mudhari + Maf'ul bih", analysis: "Fi'il Mudhari + Maf'ul bih" },
          { ar: "قَدَّمَ اعْتِذَارَهُ", translation: "Dia mengajukan permintaan maafnya", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" },
          { ar: "قَدِّمْ نَفْسَكَ مِنْ فَضْلِكَ", translation: "Tolong perkenalkan dirimu", grammarNote: "Fi'il Amr + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Amr + Maf'ul bih + Syibhul Jumlah" },
          { ar: "قَدَّمَتِ الطَّعَامَ", translation: "Dia (perempuan) menyajikan makanan", grammarNote: "Fi'il Madhi + Maf'ul bih", analysis: "Fi'il Madhi + Maf'ul bih" }
        ]
      },
      {
        id: "l1_5_c13",
        wordAr: "صَدِيقٌ",
        translation: "Teman (laki)",
        category: "Perkenalan",
        description: "Sahabat atau kawan laki-laki.",
        logicBox: "Mudzakkar. Jamaknya أَصْدِقَاءُ (ghairu munsharif).",
        examples: [
          { ar: "هَذَا صَدِيقِي", translation: "Ini temanku", grammarNote: "Mubtada + Khabar (idhafah)", analysis: "Mubtada + Khabar (idhafah)" },
          { ar: "أَنْتَ صَدِيقٌ مُخْلِصٌ", translation: "Kamu teman yang tulus", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "عِنْدِي صَدِيقٌ جَدِيدٌ", translation: "Saya punya teman baru", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar + Sifat", analysis: "Khabar Muqaddam + Mubtada Muakhkhar + Sifat" },
          { ar: "أَلْتَقِي بِصَدِيقِي", translation: "Saya bertemu dengan temanku", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah", analysis: "Fi'il-Fa'il + Syibhul Jumlah" },
          { ar: "زَارَنِي صَدِيقِي", translation: "Temanku mengunjungiku", grammarNote: "Fi'il Madhi + Maf'ul bih + Fa'il", analysis: "Fi'il Madhi + Maf'ul bih + Fa'il" },
          { ar: "الصَّدِيقُ وَقْتَ الضِّيقِ", translation: "Teman sejati (terlihat) saat sempit/sulit", grammarNote: "Mubtada + Khabar (Zharaf + Mudhaf ilayh)", analysis: "Mubtada + Khabar (Zharaf + Mudhaf ilayh)" },
          { ar: "سَافَرْتُ مَعَ صَدِيقٍ", translation: "Saya bepergian bersama seorang teman", grammarNote: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh", analysis: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh" },
          { ar: "أَحَبُّ الْأَصْدِقَاءِ", translation: "Teman-teman yang paling dicintai", grammarNote: "Mubtada (idhafah)", analysis: "Mubtada (idhafah)" },
          { ar: "صَدِيقُ طُفُولَتِي", translation: "Teman masa kecilku", grammarNote: "Mudhaf + Mudhaf ilayh (idhafah)", analysis: "Mudhaf + Mudhaf ilayh (idhafah)" },
          { ar: "صَدِيقِي طَالِبٌ ذَكِيٌّ", translation: "Temanku murid yang cerdas", grammarNote: "Mubtada (idhafah) + Khabar + Sifat", analysis: "Mubtada (idhafah) + Khabar + Sifat" }
        ]
      },
      {
        id: "l1_5_c14",
        wordAr: "صَدِيقَةٌ",
        translation: "Teman (perempuan)",
        category: "Perkenalan",
        description: "Sahabat atau kawan perempuan.",
        logicBox: "Muannats. Jamaknya صَدِيقَاتٌ.",
        examples: [
          { ar: "هَذِهِ صَدِيقَتِي", translation: "Ini temanku (perempuan)", grammarNote: "Mubtada + Khabar (idhafah)", analysis: "Mubtada + Khabar (idhafah)" },
          { ar: "أَنْتِ صَدِيقَةٌ وَفِيَّةٌ", translation: "Kamu (perempuan) teman yang setia", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "عِنْدِي صَدِيقَةٌ", translation: "Saya punya seorang teman (perempuan)", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar", analysis: "Khabar Muqaddam + Mubtada Muakhkhar" },
          { ar: "جَاءَتْ صَدِيقَتِي", translation: "Telah datang temanku (perempuan)", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "ذَهَبْتُ مَعَ صَدِيقَتِي", translation: "Saya pergi bersama temanku (perempuan)", grammarNote: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh", analysis: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh" },
          { ar: "صَدِيقَتِي فِي الْجَامِعَةِ", translation: "Temanku di universitas", grammarNote: "Mubtada + Syibhul Jumlah", analysis: "Mubtada + Syibhul Jumlah" },
          { ar: "الصَّدِيقَاتُ مُجْتَمِعَاتٌ", translation: "Teman-teman perempuan itu sedang berkumpul", grammarNote: "Mubtada + Khabar (jamak muannats)", analysis: "Mubtada + Khabar (jamak muannats)" },
          { ar: "أُحِبُّ صَدِيقَتِي", translation: "Saya menyukai temanku (perempuan)", grammarNote: "Fi'il-Fa'il + Maf'ul bih", analysis: "Fi'il-Fa'il + Maf'ul bih" },
          { ar: "سَاعَدَتْنِي صَدِيقَتِي", translation: "Temanku (perempuan) membantuku", grammarNote: "Fi'il Madhi + Maf'ul bih + Fa'il", analysis: "Fi'il Madhi + Maf'ul bih + Fa'il" },
          { ar: "صَدِيقَةُ الْأُخْتِ", translation: "Teman dari saudara perempuan", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_5_c15",
        wordAr: "زَمِيلٌ",
        translation: "Rekan/Teman sekelas",
        category: "Perkenalan",
        description: "Teman satu pekerjaan atau satu kelas/sekolah.",
        logicBox: "Jamaknya زُمَلَاءُ. Untuk perempuan زَمِيلَةٌ.",
        examples: [
          { ar: "هَذَا زَمِيلِي فِي الْعَمَلِ", translation: "Ini rekanku di pekerjaan", grammarNote: "Mubtada + Khabar (idhafah) + Syibhul Jumlah", analysis: "Mubtada + Khabar (idhafah) + Syibhul Jumlah" },
          { ar: "زَمِيلِي فِي الْفَصْلِ", translation: "Teman sekelasku", grammarNote: "Mubtada + Syibhul Jumlah", analysis: "Mubtada + Syibhul Jumlah" },
          { ar: "الزُّمَلَاءُ يَتَعَاوَنُونَ", translation: "Rekan-rekan saling bekerja sama", grammarNote: "Mubtada + Jumlah Fi'liyyah (Khabar)", analysis: "Mubtada + Jumlah Fi'liyyah (Khabar)" },
          { ar: "أَحْتَرِمُ زَمِيلِي", translation: "Saya menghormati rekanku", grammarNote: "Fi'il-Fa'il + Maf'ul bih", analysis: "Fi'il-Fa'il + Maf'ul bih" },
          { ar: "تَشَارَكْتُ مَعَ الزَّمِيلِ", translation: "Saya berbagi bersama rekan", grammarNote: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh", analysis: "Fi'il Madhi-Fa'il + Zharaf + Mudhaf ilayh" },
          { ar: "زَمِيلُ الدِّرَاسَةِ", translation: "Rekan belajar", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "زَمِيلٌ نَشِيطٌ", translation: "Rekan yang rajin", grammarNote: "Mubtada + Sifat", analysis: "Mubtada + Sifat" },
          { ar: "الْتَقَيْتُ بِزَمِيلِي أَمْسِ", translation: "Saya bertemu dengan rekanku kemarin", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah + Zharaf Zaman", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah + Zharaf Zaman" },
          { ar: "سَأَلْتُ زَمِيلِي سُؤَالًا", translation: "Saya bertanya kepada rekanku sebuah pertanyaan", grammarNote: "Fi'il-Fa'il + Maf'ul bih 1 + Maf'ul bih 2", analysis: "Fi'il-Fa'il + Maf'ul bih 1 + Maf'ul bih 2" },
          { ar: "أَنْتَ زَمِيلٌ جَيِّدٌ", translation: "Kamu rekan yang baik", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" }
        ]
      },
      {
        id: "l1_5_c16",
        wordAr: "جَارٌ",
        translation: "Tetangga (laki)",
        category: "Perkenalan",
        description: "Orang yang tinggal berdekatan.",
        logicBox: "Jamaknya جِيرَانٌ. Untuk perempuan جَارَةٌ.",
        examples: [
          { ar: "جَارِي طَيِّبٌ", translation: "Tetanggaku baik", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "الْجَارُ قَبْلَ الدَّارِ", translation: "Tetangga sebelum (memilih) rumah", grammarNote: "Mubtada + Zharaf Zaman + Mudhaf ilayh", analysis: "Mubtada + Zharaf Zaman + Mudhaf ilayh" },
          { ar: "أُحِبُّ جَارِي", translation: "Saya menyukai tetanggaku", grammarNote: "Fi'il-Fa'il + Maf'ul bih", analysis: "Fi'il-Fa'il + Maf'ul bih" },
          { ar: "هَذَا جَارٌ جَدِيدٌ", translation: "Ini tetangga baru", grammarNote: "Mubtada + Khabar + Sifat", analysis: "Mubtada + Khabar + Sifat" },
          { ar: "حُقُوقُ الْجَارِ", translation: "Hak-hak tetangga", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "زُرْتُ جَارِي الْمَرِيضَ", translation: "Saya mengunjungi tetanggaku yang sakit", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Sifat", analysis: "Fi'il-Fa'il + Maf'ul bih + Sifat" },
          { ar: "تَكَلَّمْتُ مَعَ الْجَارِ", translation: "Saya berbicara dengan tetangga", grammarNote: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh", analysis: "Fi'il-Fa'il + Zharaf + Mudhaf ilayh" },
          { ar: "أَوْصَانِي بِالْجَارِ", translation: "Dia berwasiat kepadaku tentang tetangga", grammarNote: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah" },
          { ar: "الْجِيرَانُ كَرَامٌ", translation: "Tetangga-tetangga itu dermawan", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "بَيْتُ الْجَارِ قَرِيبٌ", translation: "Rumah tetangga itu dekat", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" }
        ]
      },
      {
        id: "l1_5_c17",
        wordAr: "جَارَةٌ",
        translation: "Tetangga (perempuan)",
        category: "Perkenalan",
        description: "Tetangga perempuan.",
        logicBox: "Muannats dari جَارٌ. Jamaknya جَارَاتٌ.",
        examples: [
          { ar: "جَارَتِي كَرِيمَةٌ", translation: "Tetanggaku (perempuan) dermawan", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "هَذِهِ جَارَتِي", translation: "Ini tetanggaku (perempuan)", grammarNote: "Mubtada + Khabar (idhafah)", analysis: "Mubtada + Khabar (idhafah)" },
          { ar: "سَلَّمْتُ عَلَى الْجَارَةِ", translation: "Saya memberi salam kepada tetangga perempuan", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "أَطْعَمَتْ جَارَتَهَا", translation: "Dia (perempuan) memberi makan tetangganya", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih" },
          { ar: "الْجَارَةُ الْجَدِيدَةُ", translation: "Tetangga perempuan yang baru", grammarNote: "Mubtada + Sifat", analysis: "Mubtada + Sifat" },
          { ar: "جَارَتِي طَبِيبَةٌ", translation: "Tetanggaku (perempuan) adalah dokter", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "تَزُورُنَا الْجَارَةُ", translation: "Tetangga perempuan mengunjungi kami", grammarNote: "Fi'il Mudhari + Maf'ul bih + Fa'il", analysis: "Fi'il Mudhari + Maf'ul bih + Fa'il" },
          { ar: "أُحِبُّ جَارَتِي", translation: "Saya menyukai tetanggaku (perempuan)", grammarNote: "Fi'il-Fa'il + Maf'ul bih", analysis: "Fi'il-Fa'il + Maf'ul bih" },
          { ar: "الْجَارَاتُ مُجْتَمِعَاتٌ", translation: "Tetangga-tetangga perempuan berkumpul", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "مُسَاعَدَةُ الْجَارَةِ ضَرُورِيَّةٌ", translation: "Membantu tetangga perempuan adalah keharusan", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" }
        ]
      },
      {
        id: "l1_5_c18",
        wordAr: "ضَيْفٌ",
        translation: "Tamu (laki)",
        category: "Perkenalan",
        description: "Orang yang datang berkunjung.",
        logicBox: "Jamaknya ضُيُوفٌ. Untuk perempuan ضَيْفَةٌ.",
        examples: [
          { ar: "الضَّيْفُ فِي غُرْفَةِ الْجُلُوسِ", translation: "Tamu di ruang tamu", grammarNote: "Mubtada + Syibhul Jumlah (idhafah)", analysis: "Mubtada + Syibhul Jumlah (idhafah)" },
          { ar: "إِكْرَامُ الضَّيْفِ وَاجِبٌ", translation: "Memuliakan tamu adalah wajib", grammarNote: "Mubtada (idhafah) + Khabar", analysis: "Mubtada (idhafah) + Khabar" },
          { ar: "جَاءَ ضَيْفٌ", translation: "Telah datang seorang tamu", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "عِنْدَنَا ضُيُوفٌ", translation: "Kami kedatangan tamu-tamu", grammarNote: "Khabar Muqaddam + Mubtada Muakhkhar", analysis: "Khabar Muqaddam + Mubtada Muakhkhar" },
          { ar: "نَسْتَقْبِلُ الضَّيْفَ", translation: "Kami menyambut tamu", grammarNote: "Fi'il-Fa'il + Maf'ul bih", analysis: "Fi'il-Fa'il + Maf'ul bih" },
          { ar: "ضَيْفٌ كَرِيمٌ", translation: "Tamu yang mulia", grammarNote: "Mubtada + Sifat", analysis: "Mubtada + Sifat" },
          { ar: "أَكَلَ الضَّيْفُ", translation: "Tamu itu telah makan", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "سَلَّمْتُ عَلَى الضَّيْفِ", translation: "Saya mengucapkan salam kepada tamu", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "غُرْفَةُ الضُّيُوفِ", translation: "Ruang tamu", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "هَذَا ضَيْفُنَا", translation: "Ini tamu kita", grammarNote: "Mubtada + Khabar (idhafah)", analysis: "Mubtada + Khabar (idhafah)" }
        ]
      },
      {
        id: "l1_5_c19",
        wordAr: "ضَيْفَةٌ",
        translation: "Tamu (perempuan)",
        category: "Perkenalan",
        description: "Tamu perempuan yang berkunjung.",
        logicBox: "Muannats dari ضَيْفٌ. Jamaknya ضَيْفَاتٌ.",
        examples: [
          { ar: "الضَّيْفَةُ قَادِمَةٌ", translation: "Tamu perempuan akan datang", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "هَذِهِ ضَيْفَتِي", translation: "Ini tamuku (perempuan)", grammarNote: "Mubtada + Khabar (idhafah)", analysis: "Mubtada + Khabar (idhafah)" },
          { ar: "جَاءَتْ ضَيْفَةٌ", translation: "Telah datang tamu perempuan", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "رَحَّبْنَا بِالضَّيْفَةِ", translation: "Kami menyambut tamu perempuan", grammarNote: "Fi'il Madhi-Fa'il + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Syibhul Jumlah" },
          { ar: "قَدَّمَتِ الشَّايَ لِلضَّيْفَةِ", translation: "Dia menyajikan teh untuk tamu perempuan", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih + Syibhul Jumlah" },
          { ar: "ضَيْفَةٌ مُهِمَّةٌ", translation: "Tamu perempuan yang penting", grammarNote: "Mubtada + Sifat", analysis: "Mubtada + Sifat" },
          { ar: "الضَّيْفَاتُ جَالِسَاتٌ", translation: "Para tamu perempuan sedang duduk", grammarNote: "Mubtada + Khabar", analysis: "Mubtada + Khabar" },
          { ar: "حَدِيثٌ مَعَ الضَّيْفَةِ", translation: "Percakapan dengan tamu perempuan", grammarNote: "Mubtada + Syibhul Jumlah", analysis: "Mubtada + Syibhul Jumlah" },
          { ar: "اِحْتِرَامُ الضَّيْفَةِ", translation: "Menghormati tamu perempuan", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "غَادَرَتِ الضَّيْفَةُ", translation: "Tamu perempuan telah pergi", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" }
        ]
      },
      {
        id: "l1_5_c20",
        wordAr: "لِقَاءٌ",
        translation: "Pertemuan",
        category: "Perkenalan",
        description: "Berjumpa atau pertemuan dengan seseorang.",
        logicBox: "Mashdar dari fi'il لَقِيَ. Sering dipakai di ucapan إِلَى اللِّقَاءِ (sampai jumpa).",
        examples: [
          { ar: "إِلَى اللِّقَاءِ", translation: "Sampai jumpa (pada pertemuan berikutnya)", grammarNote: "Huruf Jar + Isim Majrur", analysis: "Huruf Jar + Isim Majrur" },
          { ar: "لِقَاءٌ جَمِيلٌ", translation: "Pertemuan yang indah", grammarNote: "Mubtada + Sifat", analysis: "Mubtada + Sifat" },
          { ar: "هَذَا أَوَّلُ لِقَاءٍ", translation: "Ini pertemuan pertama", grammarNote: "Mubtada + Khabar (idhafah)", analysis: "Mubtada + Khabar (idhafah)" },
          { ar: "بَعْدَ اللِّقَاءِ", translation: "Setelah pertemuan", grammarNote: "Zharaf + Mudhaf ilayh", analysis: "Zharaf + Mudhaf ilayh" },
          { ar: "فِي لِقَاءٍ قَادِمٍ", translation: "Pada pertemuan mendatang", grammarNote: "Syibhul Jumlah + Sifat", analysis: "Syibhul Jumlah + Sifat" },
          { ar: "لِقَاءُ الْأَصْدِقَاءِ", translation: "Pertemuan teman-teman", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" },
          { ar: "تَمَّ اللِّقَاءُ", translation: "Pertemuan telah selesai/terjadi", grammarNote: "Fi'il Madhi + Fa'il", analysis: "Fi'il Madhi + Fa'il" },
          { ar: "حَدَّدْنَا مَوْعِدَ اللِّقَاءِ", translation: "Kami menentukan jadwal pertemuan", grammarNote: "Fi'il Madhi-Fa'il + Maf'ul bih (idhafah)", analysis: "Fi'il Madhi-Fa'il + Maf'ul bih (idhafah)" },
          { ar: "سَعِيدٌ بِهَذَا اللِّقَاءِ", translation: "Senang dengan pertemuan ini", grammarNote: "Khabar + Syibhul Jumlah + Badal", analysis: "Khabar + Syibhul Jumlah + Badal" },
          { ar: "مَكَانُ اللِّقَاءِ", translation: "Tempat pertemuan", grammarNote: "Mudhaf + Mudhaf ilayh", analysis: "Mudhaf + Mudhaf ilayh" }
        ]
      },
      {
        id: "l1_5_c21",
        wordAr: "بِسْمِ اللهِ",
        translation: "Bismillah",
        category: "Ungkapan Islami",
        description: "Dengan nama Allah (memulai sesuatu).",
        logicBox: "Singkatan dari بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ (Basmalah). Susunan Syibhul Jumlah (Jar Majrur) + Mudhaf ilayh.",
        examples: [
          { ar: "بِسْمِ اللهِ، نَبْدَأُ", translation: "Bismillah, kita mulai", grammarNote: "Syibhul Jumlah (idhafah) + Fi'il-Fa'il", analysis: "Syibhul Jumlah (idhafah) + Fi'il-Fa'il" },
          { ar: "قُلْ بِسْمِ اللهِ", translation: "Katakanlah Bismillah", grammarNote: "Fi'il Amr + Maqul Qaul", analysis: "Fi'il Amr + Maqul Qaul" },
          { ar: "أَكَلَ مُسَمِّيًا بِسْمِ اللهِ", translation: "Dia makan dengan menyebut Bismillah", grammarNote: "Fi'il Madhi + Hal + Maqul Qaul", analysis: "Fi'il Madhi + Hal + Maqul Qaul" },
          { ar: "بِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ", translation: "Dengan nama Allah saya bertawakkal kepada Allah", grammarNote: "Syibhul Jumlah + Fi'il-Fa'il + Syibhul Jumlah", analysis: "Syibhul Jumlah + Fi'il-Fa'il + Syibhul Jumlah" },
          { ar: "دَخَلَ بَيْتَهُ بِسْمِ اللهِ", translation: "Dia masuk rumahnya dengan (mengucap) Bismillah", grammarNote: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah", analysis: "Fi'il Madhi + Maf'ul bih + Syibhul Jumlah" },
          { ar: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ", translation: "Dengan nama Allah Yang Maha Pengasih Maha Penyayang", grammarNote: "Syibhul Jumlah + Mudhaf ilayh + Sifat 1 + Sifat 2", analysis: "Syibhul Jumlah + Mudhaf ilayh + Sifat 1 + Sifat 2" },
          { ar: "نَكْتُبُ بِسْمِ اللهِ", translation: "Kami menulis dengan (mengucap) Bismillah", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah", analysis: "Fi'il-Fa'il + Syibhul Jumlah" },
          { ar: "سُمِّيَ بِسْمِ اللهِ", translation: "Disebutkan dengan Bismillah", grammarNote: "Fi'il Majhul + Syibhul Jumlah", analysis: "Fi'il Majhul + Syibhul Jumlah" },
          { ar: "بِسْمِ اللهِ مَجْرَاهَا", translation: "Dengan nama Allah saat berlayarnya", grammarNote: "Syibhul Jumlah + Mubtada Muakhkhar", analysis: "Syibhul Jumlah + Mubtada Muakhkhar" },
          { ar: "اِقْرَأْ بِسْمِ رَبِّكَ", translation: "Bacalah dengan (menyebut) nama Tuhanmu", grammarNote: "Fi'il Amr + Syibhul Jumlah (idhafah)", analysis: "Fi'il Amr + Syibhul Jumlah (idhafah)" }
        ]
      },
      {
        id: "l1_5_c22",
        wordAr: "الْحَمْدُ لِلهِ",
        translation: "Alhamdulillah",
        category: "Ungkapan Islami",
        description: "Segala puji bagi Allah (ungkapan syukur).",
        logicBox: "Tersusun dari Mubtada (الْحَمْدُ) dan Syibhul Jumlah Khabar (لِلهِ).",
        examples: [
          { ar: "الْحَمْدُ لِلهِ رَبِّ الْعَالَمِينَ", translation: "Segala puji bagi Allah Tuhan semesta alam", grammarNote: "Mubtada + Syibhul Jumlah + Sifat (idhafah)", analysis: "Mubtada + Syibhul Jumlah + Sifat (idhafah)" },
          { ar: "كَيْفَ حَالُكَ؟ الْحَمْدُ لِلهِ", translation: "Apa kabar? Alhamdulillah", grammarNote: "Tanya + Mubtada & Jumlah Ismiyyah", analysis: "Tanya + Mubtada & Jumlah Ismiyyah" },
          { ar: "أَقُولُ الْحَمْدُ لِلهِ", translation: "Saya mengucapkan Alhamdulillah", grammarNote: "Fi'il-Fa'il + Maqul Qaul", analysis: "Fi'il-Fa'il + Maqul Qaul" },
          { ar: "الْحَمْدُ لِلهِ عَلَى كُلِّ حَالٍ", translation: "Alhamdulillah dalam segala keadaan", grammarNote: "Mubtada + Syibhul Jumlah 1 + Syibhul Jumlah 2", analysis: "Mubtada + Syibhul Jumlah 1 + Syibhul Jumlah 2" },
          { ar: "شَكَرَ رَبَّهُ قَائِلًا الْحَمْدُ لِلهِ", translation: "Dia bersyukur pada Tuhannya seraya berkata Alhamdulillah", grammarNote: "Fi'il Madhi + Maf'ul bih + Hal + Maqul Qaul", analysis: "Fi'il Madhi + Maf'ul bih + Hal + Maqul Qaul" },
          { ar: "الْحَمْدُ لِلهِ الَّذِي هَدَانَا", translation: "Segala puji bagi Allah yang memberi petunjuk pada kami", grammarNote: "Mubtada + Syibhul Jumlah + Isim Maushul + Silah", analysis: "Mubtada + Syibhul Jumlah + Isim Maushul + Silah" },
          { ar: "نَحْمَدُ اللهَ وَالْحَمْدُ لِلهِ", translation: "Kami memuji Allah dan Alhamdulillah", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Ma'thuf", analysis: "Fi'il-Fa'il + Maf'ul bih + Ma'thuf" },
          { ar: "الْحَمْدُ لِلهِ كَثِيرًا", translation: "Segala puji bagi Allah dengan banyak", grammarNote: "Mubtada + Syibhul Jumlah + Maf'ul muthlaq", analysis: "Mubtada + Syibhul Jumlah + Maf'ul muthlaq" },
          { ar: "عِنْدَ الشِّبَعِ نَقُولُ الْحَمْدُ لِلهِ", translation: "Saat kenyang kita mengucapkan Alhamdulillah", grammarNote: "Zharaf Zaman + Fi'il-Fa'il + Maqul Qaul", analysis: "Zharaf Zaman + Fi'il-Fa'il + Maqul Qaul" },
          { ar: "الْحَمْدُ لِلهِ عَلَى السَّلَامَةِ", translation: "Alhamdulillah atas keselamatan", grammarNote: "Mubtada + Syibhul Jumlah 1 + Syibhul Jumlah 2", analysis: "Mubtada + Syibhul Jumlah 1 + Syibhul Jumlah 2" }
        ]
      },
      {
        id: "l1_5_c23",
        wordAr: "إِنْ شَاءَ اللهُ",
        translation: "Insya Allah",
        category: "Ungkapan Islami",
        description: "Jika Allah menghendaki. Diucapkan saat merencanakan masa depan.",
        logicBox: "إِنْ (syarat) + شَاءَ (fi'il madhi) + اللهُ (fa'il). Sering ditulis bersambung tapi aslinya terpisah.",
        examples: [
          { ar: "سَأَزُورُكَ إِنْ شَاءَ اللهُ", translation: "Saya akan mengunjungimu, insya Allah", grammarNote: "Fi'il Mudhari + Maf'ul bih + Syarat + Fi'il-Fa'il", analysis: "Fi'il Mudhari + Maf'ul bih + Syarat + Fi'il-Fa'il" },
          { ar: "نَلْتَقِي غَدًا إِنْ شَاءَ اللهُ", translation: "Kita bertemu besok, insya Allah", grammarNote: "Fi'il-Fa'il + Zharaf Zaman + Jumlah Syarat", analysis: "Fi'il-Fa'il + Zharaf Zaman + Jumlah Syarat" },
          { ar: "إِنْ شَاءَ اللهُ أَنْجَحُ", translation: "Insya Allah saya lulus", grammarNote: "Jumlah Syarat + Jawab Syarat", analysis: "Jumlah Syarat + Jawab Syarat" },
          { ar: "قَالَ: إِنْ شَاءَ اللهُ", translation: "Dia berkata: Insya Allah", grammarNote: "Fi'il Madhi + Maqul Qaul", analysis: "Fi'il Madhi + Maqul Qaul" },
          { ar: "لَا تَقُلْ ذَلِكَ إِلَّا أَنْ تَقُولَ إِنْ شَاءَ اللهُ", translation: "Jangan berkata begitu kecuali mengucapkan insya Allah", grammarNote: "La Nahiyah + Fi'il Mudhari + Istitsna + Mashdar Muawwal", analysis: "La Nahiyah + Fi'il Mudhari + Istitsna + Mashdar Muawwal" },
          { ar: "إِنْ شَاءَ اللهُ تَتَحَسَّنُ", translation: "Insya Allah (keadaanmu) membaik", grammarNote: "Jumlah Syarat + Fi'il Mudhari", analysis: "Jumlah Syarat + Fi'il Mudhari" },
          { ar: "كُلُّ شَيْءٍ إِنْ شَاءَ اللهُ خَيْرٌ", translation: "Segala sesuatu jika Allah menghendaki adalah kebaikan", grammarNote: "Mubtada + Jumlah Syarat + Khabar", analysis: "Mubtada + Jumlah Syarat + Khabar" },
          { ar: "سَنَفْعَلُ هَذَا إِنْ شَاءَ اللهُ", translation: "Kami akan melakukan ini insya Allah", grammarNote: "Fi'il Mudhari + Maf'ul bih + Jumlah Syarat", analysis: "Fi'il Mudhari + Maf'ul bih + Jumlah Syarat" },
          { ar: "وَمَا نَحْنُ إِلَّا بَشَرٌ إِنْ شَاءَ اللهُ", translation: "Dan kami bukan apa-apa selain manusia (akan selamat) insya Allah", grammarNote: "Nafi + Mubtada + Istitsna + Khabar + Syarat", analysis: "Nafi + Mubtada + Istitsna + Khabar + Syarat" },
          { ar: "نَصِلُ بِالسَّلَامَةِ إِنْ شَاءَ اللهُ", translation: "Kita sampai dengan selamat, insya Allah", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Syarat", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Syarat" }
        ]
      },
      {
        id: "l1_5_c24",
        wordAr: "مَاشَاءَ اللهُ",
        translation: "Masya Allah",
        category: "Ungkapan Islami",
        description: "Apa yang dikehendaki Allah. Diucapkan saat kagum.",
        logicBox: "مَا (isim maushul) + شَاءَ (fi'il) + اللهُ (fa'il). Biasanya untuk kekaguman positif agar tidak kena 'ain.",
        examples: [
          { ar: "مَاشَاءَ اللهُ، جَمِيلٌ جِدًّا", translation: "Masya Allah, sangat indah", grammarNote: "Jumlah + Khabar + Maf'ul muthlaq", analysis: "Jumlah + Khabar + Maf'ul muthlaq" },
          { ar: "وَلَدٌ ذَكِيٌّ مَاشَاءَ اللهُ", translation: "Anak yang cerdas, Masya Allah", grammarNote: "Mubtada + Sifat + Jumlah Kekaguman", analysis: "Mubtada + Sifat + Jumlah Kekaguman" },
          { ar: "مَاشَاءَ اللهُ، بَيْتٌ كَبِيرٌ", translation: "Masya Allah, rumah yang besar", grammarNote: "Jumlah + Mubtada + Sifat", analysis: "Jumlah + Mubtada + Sifat" },
          { ar: "قَالَ مَاشَاءَ اللهُ عِنْدَمَا رَأَى الْحَدِيقَةَ", translation: "Dia berkata Masya Allah saat melihat taman", grammarNote: "Fi'il Madhi + Maqul Qaul + Zharaf + Fi'il + Maf'ul bih", analysis: "Fi'il Madhi + Maqul Qaul + Zharaf + Fi'il + Maf'ul bih" },
          { ar: "مَاشَاءَ اللهُ تَبَارَكَ اللهُ", translation: "Masya Allah, Maha Suci Allah", grammarNote: "Jumlah Kekaguman + Jumlah Fi'liyyah", analysis: "Jumlah Kekaguman + Jumlah Fi'liyyah" },
          { ar: "مَاشَاءَ اللهُ عَلَيْكَ", translation: "Masya Allah atasmu (pujian)", grammarNote: "Jumlah + Syibhul Jumlah", analysis: "Jumlah + Syibhul Jumlah" },
          { ar: "هَذَا مَاشَاءَ اللهُ", translation: "Ini adalah (seperti) apa yang dikehendaki Allah", grammarNote: "Mubtada + Khabar (Jumlah)", analysis: "Mubtada + Khabar (Jumlah)" },
          { ar: "سَيَّارَةٌ جَدِيدَةٌ، مَاشَاءَ اللهُ", translation: "Mobil baru, Masya Allah", grammarNote: "Mubtada + Sifat + Jumlah", analysis: "Mubtada + Sifat + Jumlah" },
          { ar: "صَوْتُكَ حُلْوٌ مَاشَاءَ اللهُ", translation: "Suaramu merdu, Masya Allah", grammarNote: "Mubtada + Khabar + Jumlah", analysis: "Mubtada + Khabar + Jumlah" },
          { ar: "نَقُولُ مَاشَاءَ اللهُ لِلْبَرَكَةِ", translation: "Kami berkata Masya Allah untuk keberkahan", grammarNote: "Fi'il-Fa'il + Maqul Qaul + Syibhul Jumlah", analysis: "Fi'il-Fa'il + Maqul Qaul + Syibhul Jumlah" }
        ]
      },
      {
        id: "l1_5_c25",
        wordAr: "جَزَاكَ اللهُ خَيْرًا",
        translation: "Jazakallah",
        category: "Ungkapan Islami",
        description: "Semoga Allah membalasmu dengan kebaikan (terima kasih Islami).",
        logicBox: "جَزَى (fi'il) + كَ (maf'ul bih 1) + اللهُ (fa'il) + خَيْرًا (maf'ul bih 2). Untuk perempuan جَزَاكِ, untuk jamak جَزَاكُمْ.",
        examples: [
          { ar: "جَزَاكَ اللهُ خَيْرًا يَا أَخِي", translation: "Semoga Allah membalasmu dengan kebaikan saudaraku (laki)", grammarNote: "Jumlah Fi'liyyah (Doa) + Nida", analysis: "Jumlah Fi'liyyah (Doa) + Nida" },
          { ar: "جَزَاكِ اللهُ خَيْرًا يَا أُخْتِي", translation: "Semoga Allah membalasmu dengan kebaikan saudariku", grammarNote: "Jumlah Fi'liyyah (Doa) + Nida", analysis: "Jumlah Fi'liyyah (Doa) + Nida" },
          { ar: "شُكْرًا، وَجَزَاكَ اللهُ خَيْرًا", translation: "Terima kasih, dan jazakallah", grammarNote: "Maf'ul muthlaq + Ma'thuf + Jumlah Doa", analysis: "Maf'ul muthlaq + Ma'thuf + Jumlah Doa" },
          { ar: "وَأَنْتُمْ جَزَاكُمُ اللهُ خَيْرًا", translation: "Dan kalian, jazakumullah (jawaban)", grammarNote: "Mubtada + Jumlah Fi'liyyah Khabar", analysis: "Mubtada + Jumlah Fi'liyyah Khabar" },
          { ar: "جَزَاكَ اللهُ خَيْرَ الْجَزَاءِ", translation: "Semoga Allah membalasmu sebaik-baik balasan", grammarNote: "Jumlah Fi'liyyah + Maf'ul muthlaq (idhafah)", analysis: "Jumlah Fi'liyyah + Maf'ul muthlaq (idhafah)" },
          { ar: "قَالَ لَهُ: جَزَاكَ اللهُ خَيْرًا", translation: "Dia berkata kepadanya: Jazakallah", grammarNote: "Fi'il Madhi + Syibhul Jumlah + Maqul Qaul", analysis: "Fi'il Madhi + Syibhul Jumlah + Maqul Qaul" },
          { ar: "جَزَاكُمُ اللهُ خَيْرًا كَثِيرًا", translation: "Semoga Allah membalas kalian kebaikan yang banyak", grammarNote: "Jumlah Fi'liyyah + Sifat", analysis: "Jumlah Fi'liyyah + Sifat" },
          { ar: "بَارَكَ اللهُ فِيكَ وَجَزَاكَ خَيْرًا", translation: "Semoga Allah memberkahimu dan membalasmu kebaikan", grammarNote: "Jumlah Doa 1 + Ma'thuf + Jumlah Doa 2", analysis: "Jumlah Doa 1 + Ma'thuf + Jumlah Doa 2" },
          { ar: "جَزَاكَ اللهُ خَيْرًا عَلَى مُسَاعَدَتِكَ", translation: "Jazakallah atas bantuanmu", grammarNote: "Jumlah Doa + Syibhul Jumlah", analysis: "Jumlah Doa + Syibhul Jumlah" },
          { ar: "أَقُولُ لِمَنْ يُسَاعِدُنِي جَزَاكَ اللهُ خَيْرًا", translation: "Saya katakan pada yang membantuku jazakallah", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Isim Maushul + Maqul Qaul", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Isim Maushul + Maqul Qaul" }
        ]
      },
      {
        id: "l1_5_c26",
        wordAr: "مَنْ",
        translation: "Siapa",
        category: "Kata Tanya",
        description: "Kata tanya untuk manusia/berakal.",
        logicBox: "Isim istifham mabni (tetap bentuknya). Selalu di awal kalimat.",
        examples: [
          { ar: "مَنْ أَنْتَ؟", translation: "Siapa kamu?", grammarNote: "Isim Istifham (Khabar Muqaddam) + Mubtada Muakhkhar", analysis: "Isim Istifham (Khabar Muqaddam) + Mubtada Muakhkhar" },
          { ar: "مَنْ هَذَا؟", translation: "Siapa ini?", grammarNote: "Isim Istifham + Isim Isyarah (Mubtada)", analysis: "Isim Istifham + Isim Isyarah (Mubtada)" },
          { ar: "مَنْ جَاءَ؟", translation: "Siapa yang datang?", grammarNote: "Isim Istifham (Mubtada) + Jumlah Fi'liyyah (Khabar)", analysis: "Isim Istifham (Mubtada) + Jumlah Fi'liyyah (Khabar)" },
          { ar: "مَعَ مَنْ ذَهَبْتَ؟", translation: "Bersama siapa kamu pergi?", grammarNote: "Zharaf + Isim Istifham + Fi'il Madhi", analysis: "Zharaf + Isim Istifham + Fi'il Madhi" },
          { ar: "لِمَنْ هَذَا الْقَلَمُ؟", translation: "Milik siapa pena ini?", grammarNote: "Huruf Jar + Isim Istifham + Mubtada + Badal", analysis: "Huruf Jar + Isim Istifham + Mubtada + Badal" },
          { ar: "مَنْ رَبُّكَ؟", translation: "Siapa Tuhanmu?", grammarNote: "Isim Istifham + Mubtada (idhafah)", analysis: "Isim Istifham + Mubtada (idhafah)" },
          { ar: "مَنْ فِي الْفَصْلِ؟", translation: "Siapa di kelas?", grammarNote: "Isim Istifham + Syibhul Jumlah (Khabar)", analysis: "Isim Istifham + Syibhul Jumlah (Khabar)" },
          { ar: "مَنْ سَاعَدَكَ؟", translation: "Siapa yang membantumu?", grammarNote: "Isim Istifham + Fi'il Madhi + Maf'ul bih", analysis: "Isim Istifham + Fi'il Madhi + Maf'ul bih" },
          { ar: "مَنْ أَنْتُمْ؟", translation: "Siapa kalian?", grammarNote: "Isim Istifham + Mubtada Muakhkhar", analysis: "Isim Istifham + Mubtada Muakhkhar" },
          { ar: "مَنْ تَلِمِيذُهُ؟", translation: "Siapa muridnya?", grammarNote: "Isim Istifham + Mubtada (idhafah)", analysis: "Isim Istifham + Mubtada (idhafah)" }
        ]
      },
      {
        id: "l1_5_c27",
        wordAr: "مَاذَا",
        translation: "Apa",
        category: "Kata Tanya",
        description: "Kata tanya untuk benda, hal, atau pekerjaan (tidak berakal). Sering dipakai bersama fi'il.",
        logicBox: "مَا juga berarti 'apa' (umumnya dengan isim). مَاذَا sering dengan fi'il.",
        examples: [
          { ar: "مَاذَا تَفْعَلُ؟", translation: "Apa yang sedang kamu lakukan?", grammarNote: "Isim Istifham (Maf'ul bih muqaddam) + Fi'il Mudhari", analysis: "Isim Istifham (Maf'ul bih muqaddam) + Fi'il Mudhari" },
          { ar: "مَاذَا تُرِيدُ؟", translation: "Apa yang kamu inginkan?", grammarNote: "Isim Istifham + Fi'il Mudhari", analysis: "Isim Istifham + Fi'il Mudhari" },
          { ar: "مَاذَا أَكَلْتَ؟", translation: "Apa yang telah kamu makan?", grammarNote: "Isim Istifham + Fi'il Madhi", analysis: "Isim Istifham + Fi'il Madhi" },
          { ar: "مَاذَا قُلْتَ؟", translation: "Apa yang kamu katakan?", grammarNote: "Isim Istifham + Fi'il Madhi", analysis: "Isim Istifham + Fi'il Madhi" },
          { ar: "مَاذَا فِي الْحَقِيبَةِ؟", translation: "Ada apa di dalam tas?", grammarNote: "Isim Istifham + Syibhul Jumlah (Khabar)", analysis: "Isim Istifham + Syibhul Jumlah (Khabar)" },
          { ar: "مَاذَا حَدَثَ؟", translation: "Apa yang terjadi?", grammarNote: "Isim Istifham + Fi'il Madhi", analysis: "Isim Istifham + Fi'il Madhi" },
          { ar: "مَاذَا تَكْتُبُ؟", translation: "Apa yang sedang kamu tulis?", grammarNote: "Isim Istifham + Fi'il Mudhari", analysis: "Isim Istifham + Fi'il Mudhari" },
          { ar: "بِمَاذَا تُفَكِّرُ؟", translation: "Tentang apa kamu berpikir?", grammarNote: "Huruf Jar + Isim Istifham + Fi'il Mudhari", analysis: "Huruf Jar + Isim Istifham + Fi'il Mudhari" },
          { ar: "مَاذَا تَشْرَبُ؟", translation: "Apa yang kamu minum?", grammarNote: "Isim Istifham + Fi'il Mudhari", analysis: "Isim Istifham + Fi'il Mudhari" },
          { ar: "مَاذَا قَرَأْتَ الْيَوْمَ؟", translation: "Apa yang kamu baca hari ini?", grammarNote: "Isim Istifham + Fi'il Madhi + Zharaf Zaman", analysis: "Isim Istifham + Fi'il Madhi + Zharaf Zaman" }
        ]
      },
      {
        id: "l1_5_c28",
        wordAr: "أَيْنَ",
        translation: "Di mana",
        category: "Kata Tanya",
        description: "Kata tanya menanyakan tempat.",
        logicBox: "Zharaf makan istifham. Mabni 'ala fath (akhiran selalu fathah).",
        examples: [
          { ar: "أَيْنَ أَنْتَ؟", translation: "Di mana kamu?", grammarNote: "Isim Istifham (Khabar Muqaddam) + Mubtada Muakhkhar", analysis: "Isim Istifham (Khabar Muqaddam) + Mubtada Muakhkhar" },
          { ar: "أَيْنَ الْكِتَابُ؟", translation: "Di mana buku itu?", grammarNote: "Isim Istifham + Mubtada", analysis: "Isim Istifham + Mubtada" },
          { ar: "أَيْنَ تَسْكُنُ؟", translation: "Di mana kamu tinggal?", grammarNote: "Isim Istifham + Fi'il Mudhari", analysis: "Isim Istifham + Fi'il Mudhari" },
          { ar: "مِنْ أَيْنَ أَنْتَ؟", translation: "Dari mana kamu (berasal)?", grammarNote: "Huruf Jar + Isim Istifham + Mubtada", analysis: "Huruf Jar + Isim Istifham + Mubtada" },
          { ar: "إِلَى أَيْنَ تَذْهَبُ؟", translation: "Ke mana kamu pergi?", grammarNote: "Huruf Jar + Isim Istifham + Fi'il Mudhari", analysis: "Huruf Jar + Isim Istifham + Fi'il Mudhari" },
          { ar: "أَيْنَ الْمَسْجِدُ؟", translation: "Di mana masjid?", grammarNote: "Isim Istifham + Mubtada", analysis: "Isim Istifham + Mubtada" },
          { ar: "أَيْنَ وَضَعْتَ الْقَلَمَ؟", translation: "Di mana kamu meletakkan pena?", grammarNote: "Isim Istifham + Fi'il Madhi + Maf'ul bih", analysis: "Isim Istifham + Fi'il Madhi + Maf'ul bih" },
          { ar: "أَيْنَ صَدِيقُكَ؟", translation: "Di mana temanmu?", grammarNote: "Isim Istifham + Mubtada (idhafah)", analysis: "Isim Istifham + Mubtada (idhafah)" },
          { ar: "أَيْنَ أَعْمَلُ؟", translation: "Di mana saya bekerja?", grammarNote: "Isim Istifham + Fi'il Mudhari", analysis: "Isim Istifham + Fi'il Mudhari" },
          { ar: "مِنْ أَيْنَ جِئْتَ؟", translation: "Dari mana kamu datang?", grammarNote: "Huruf Jar + Isim Istifham + Fi'il Madhi", analysis: "Huruf Jar + Isim Istifham + Fi'il Madhi" }
        ]
      },
      {
        id: "l1_5_c29",
        wordAr: "مَتَى",
        translation: "Kapan",
        category: "Kata Tanya",
        description: "Kata tanya menanyakan waktu.",
        logicBox: "Zharaf zaman istifham. Mabni 'ala sukun.",
        examples: [
          { ar: "مَتَى نَذْهَبُ؟", translation: "Kapan kita pergi?", grammarNote: "Isim Istifham + Fi'il Mudhari", analysis: "Isim Istifham + Fi'il Mudhari" },
          { ar: "مَتَى الِامْتِحَانُ؟", translation: "Kapan ujian?", grammarNote: "Isim Istifham (Khabar) + Mubtada", analysis: "Isim Istifham (Khabar) + Mubtada" },
          { ar: "مَتَى وَصَلْتَ؟", translation: "Kapan kamu tiba?", grammarNote: "Isim Istifham + Fi'il Madhi", analysis: "Isim Istifham + Fi'il Madhi" },
          { ar: "مَتَى تَسْتَيْقِظُ؟", translation: "Kapan kamu bangun?", grammarNote: "Isim Istifham + Fi'il Mudhari", analysis: "Isim Istifham + Fi'il Mudhari" },
          { ar: "مَتَى الصَّلَاةُ؟", translation: "Kapan shalat?", grammarNote: "Isim Istifham + Mubtada", analysis: "Isim Istifham + Mubtada" },
          { ar: "حَتَّى مَتَى؟", translation: "Sampai kapan?", grammarNote: "Huruf Jar + Isim Istifham", analysis: "Huruf Jar + Isim Istifham" },
          { ar: "مَتَى نَلْتَقِي؟", translation: "Kapan kita bertemu?", grammarNote: "Isim Istifham + Fi'il Mudhari", analysis: "Isim Istifham + Fi'il Mudhari" },
          { ar: "مَتَى تَرْجِعُ إِلَى الْبَيْتِ؟", translation: "Kapan kamu pulang ke rumah?", grammarNote: "Isim Istifham + Fi'il Mudhari + Syibhul Jumlah", analysis: "Isim Istifham + Fi'il Mudhari + Syibhul Jumlah" },
          { ar: "مَتَى يَبْدَأُ الدَّرْسُ؟", translation: "Kapan pelajaran dimulai?", grammarNote: "Isim Istifham + Fi'il Mudhari + Fa'il", analysis: "Isim Istifham + Fi'il Mudhari + Fa'il" },
          { ar: "مُنْذُ مَتَى أَنْتَ هُنَا؟", translation: "Sejak kapan kamu di sini?", grammarNote: "Huruf Jar + Isim Istifham + Mubtada + Khabar (Zharaf)", analysis: "Huruf Jar + Isim Istifham + Mubtada + Khabar (Zharaf)" }
        ]
      },
      {
        id: "l1_5_c30",
        wordAr: "كَيْفَ",
        translation: "Bagaimana",
        category: "Kata Tanya",
        description: "Kata tanya menanyakan keadaan, cara, atau kondisi.",
        logicBox: "Isim istifham mabni 'ala fath. Berposisi sebagai khabar muqaddam atau hal.",
        examples: [
          { ar: "كَيْفَ حَالُكَ؟", translation: "Bagaimana kabarmu?", grammarNote: "Isim Istifham (Khabar) + Mubtada", analysis: "Isim Istifham (Khabar) + Mubtada" },
          { ar: "كَيْفَ تَذْهَبُ إِلَى الْمَدْرَسَةِ؟", translation: "Bagaimana kamu pergi ke sekolah?", grammarNote: "Isim Istifham (Hal) + Fi'il Mudhari + Syibhul Jumlah", analysis: "Isim Istifham (Hal) + Fi'il Mudhari + Syibhul Jumlah" },
          { ar: "كَيْفَ صِحَّتُكَ؟", translation: "Bagaimana kesehatanmu?", grammarNote: "Isim Istifham + Mubtada", analysis: "Isim Istifham + Mubtada" },
          { ar: "كَيْفَ عَرَفْتَ ذَلِكَ؟", translation: "Bagaimana kamu mengetahui itu?", grammarNote: "Isim Istifham + Fi'il Madhi + Maf'ul bih", analysis: "Isim Istifham + Fi'il Madhi + Maf'ul bih" },
          { ar: "كَيْفَ نَفْعَلُ هَذَا؟", translation: "Bagaimana kita melakukan ini?", grammarNote: "Isim Istifham + Fi'il Mudhari + Maf'ul bih", analysis: "Isim Istifham + Fi'il Mudhari + Maf'ul bih" },
          { ar: "كَيْفَ الطَّقْسُ الْيَوْمَ؟", translation: "Bagaimana cuaca hari ini?", grammarNote: "Isim Istifham + Mubtada + Zharaf Zaman", analysis: "Isim Istifham + Mubtada + Zharaf Zaman" },
          { ar: "كَيْفَ أَصْبَحْتَ؟", translation: "Bagaimana keadaanmu pagi ini?", grammarNote: "Isim Istifham + Fi'il Naqis (Isim Kana)", analysis: "Isim Istifham + Fi'il Naqis (Isim Kana)" },
          { ar: "كَيْفَ أُسَاعِدُكَ؟", translation: "Bagaimana saya membantumu?", grammarNote: "Isim Istifham + Fi'il Mudhari + Maf'ul bih", analysis: "Isim Istifham + Fi'il Mudhari + Maf'ul bih" },
          { ar: "كَيْفَ كَانَ السَّفَرُ؟", translation: "Bagaimana perjalanannya?", grammarNote: "Isim Istifham (Khabar Kana) + Kana + Isim Kana", analysis: "Isim Istifham (Khabar Kana) + Kana + Isim Kana" },
          { ar: "كَيْفَ ذَلِكَ؟", translation: "Bagaimana hal itu bisa terjadi?", grammarNote: "Isim Istifham + Mubtada", analysis: "Isim Istifham + Mubtada" }
        ]
      }
    ],
    grammar: {
      title: "Kata Tanya (أَدَوَاتُ الِاسْتِفْهَامِ) dan Kalimat Tanya",
      explanation: "Bahasa Arab punya kata tanya yang spesifik untuk setiap situasi:\n\nمَنْ = siapa (untuk orang)\nمَا / مَاذَا = apa (untuk benda/hal)\nأَيْنَ = di mana (tempat)\nمَتَى = kapan (waktu)\nكَيْفَ = bagaimana (cara/keadaan)\nكَمْ = berapa (jumlah)\nلِمَاذَا = mengapa (alasan)\nهَلْ = apakah (ya/tidak)\n\nPOSISI: Kata tanya (Adawatul Istifham) memiliki hak di awal kalimat (صَدَارَةُ الْكَلَامِ), jadi selalu diletakkan di AWAL kalimat Arab.\n\nCONTOH:\nمَنْ أَنْتَ؟ = Siapa kamu?\nأَيْنَ تَسْكُنُ؟ = Di mana kamu tinggal?\nكَيْفَ حَالُكَ؟ = Bagaimana kabarmu?\nمَتَى وَصَلْتَ؟ = Kapan kamu tiba?\n\nهَلْ untuk ya/tidak:\nهَلْ أَنْتَ طَالِبٌ؟ = Apakah kamu pelajar?\nجَوَابٌ: نَعَمْ (ya) / لَا (tidak)",
      commonMistakes: [
        {
          wrong: "أَنْتَ مَنْ؟",
          correct: "مَنْ أَنْتَ؟",
          reason: "Kata tanya selalu di awal kalimat."
        },
        {
          wrong: "مَا أَنْتَ؟",
          correct: "مَنْ أَنْتَ؟",
          reason: "مَا digunakan untuk tidak berakal (apa), sedangkan untuk manusia menggunakan مَنْ (siapa)."
        },
        {
          wrong: "مَاذَا حَالُكَ؟",
          correct: "كَيْفَ حَالُكَ؟",
          reason: "Kabar ditanyakan dengan 'bagaimana' (كَيْفَ), bukan 'apa' (مَاذَا)."
        }
      ],
      practice: [
        { ar: "مَنْ هَذَا؟", translation: "Siapa ini?", explanation: "Menanyakan orang (laki-laki dekat)." },
        { ar: "مَا هَذَا؟", translation: "Apa ini?", explanation: "Menanyakan benda (dekat)." },
        { ar: "أَيْنَ الْمَدْرَسَةُ؟", translation: "Di mana sekolah?", explanation: "Menanyakan tempat." },
        { ar: "مَتَى الدَّرْسُ؟", translation: "Kapan pelajaran?", explanation: "Menanyakan waktu." },
        { ar: "كَيْفَ الطَّقْسُ؟", translation: "Bagaimana cuaca?", explanation: "Menanyakan keadaan." },
        { ar: "كَمْ عُمْرُكَ؟", translation: "Berapa umurmu?", explanation: "Menanyakan angka/jumlah." },
        { ar: "لِمَاذَا تَبْكِي؟", translation: "Mengapa kamu menangis?", explanation: "Menanyakan alasan." },
        { ar: "هَلْ أَنْتَ مُسْلِمٌ؟", translation: "Apakah kamu muslim?", explanation: "Meminta jawaban Ya/Tidak." }
      ]
    },
    dialog: {
      context: "Pertemuan di bandara antara dua jamaah haji dari Indonesia yang baru kenal.",
      characters: [
        { id: "A", name: "Ahmad", avatar: "🧔", role: "Jamaah" },
        { id: "B", name: "Budi", avatar: "👨", role: "Jamaah" }
      ],
      lines: [
        { characterId: "A", ar: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ.", translation: "Keselamatan dan rahmat Allah atasmu." },
        { characterId: "B", ar: "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ. أَهْلًا بِكَ.", translation: "Dan atasmu keselamatan dan rahmat Allah. Selamat datang." },
        { characterId: "A", ar: "كَيْفَ حَالُكَ يَا أَخِي؟", translation: "Bagaimana kabarmu saudaraku?" },
        { characterId: "B", ar: "بِخَيْرٍ وَالْحَمْدُ لِلهِ. وَكَيْفَ حَالُكَ أَنْتَ؟", translation: "Baik, alhamdulillah. Dan bagaimana kabarmu?" },
        { characterId: "A", ar: "الْحَمْدُ لِلهِ بِخَيْرٍ. أَنَا أَحْمَدُ مِنْ جَاكَرْتَا.", translation: "Alhamdulillah baik. Saya Ahmad dari Jakarta." },
        { characterId: "B", ar: "مَرْحَبًا يَا أَحْمَدُ. أَنَا بُودِي مِنْ سُورَابَايَا.", translation: "Selamat datang (salam kenal) Ahmad. Saya Budi dari Surabaya." },
        { characterId: "A", ar: "مَاشَاءَ اللهُ. هَلْ هَذَا أَوَّلُ حَجٍّ لَكَ؟", translation: "Masya Allah. Apakah ini haji pertamamu?" },
        { characterId: "B", ar: "نَعَمْ، هَذَا أَوَّلُ حَجٍّ. وَأَنْتَ؟", translation: "Ya, ini haji pertama. Dan kamu?" },
        { characterId: "A", ar: "أَنَا أَيْضًا. إِنْ شَاءَ اللهُ حَجٌّ مَبْرُورٌ.", translation: "Saya juga. Insya Allah haji mabrur." },
        { characterId: "B", ar: "آمِين. جَزَاكَ اللهُ خَيْرًا يَا أَحْمَدُ.", translation: "Amin. Semoga Allah membalasmu dengan kebaikan, Ahmad." },
        { characterId: "A", ar: "وَإِيَّاكَ يَا بُودِي. إِلَى اللِّقَاءِ فِي الْمَطَارِ.", translation: "Dan kepadamu juga Budi. Sampai jumpa di bandara (ruang tunggu)." },
        { characterId: "B", ar: "إِلَى اللِّقَاءِ، فِي أَمَانِ اللهِ.", translation: "Sampai jumpa, dalam lindungan Allah." }
      ]
    },
    quiz: [
      {
        id: "q_l1_5_1", type: "multiple-choice",
        question: "Apa jawaban yang tepat untuk 'صَبَاحُ الْخَيْرِ'?",
        options: ["مَسَاءُ النُّورِ", "صَبَاحُ النُّورِ", "مَرْحَبًا", "شُكْرًا"],
        correctAnswer: "صَبَاحُ النُّورِ", explanation: "Jawaban untuk selamat pagi adalah 'Shabah an-nuur'."
      },
      {
        id: "q_l1_5_2", type: "multiple-choice",
        question: "Arti dari 'عَفْوًا' adalah...",
        options: ["Sama-sama / Maaf", "Terima kasih", "Selamat datang", "Siapa kamu?"],
        correctAnswer: "Sama-sama / Maaf", explanation: "Afwan bisa berarti sama-sama (membalas syukran) atau maaf/permisi."
      },
      {
        id: "q_l1_5_3", type: "multiple-choice",
        question: "Kata tanya apa yang digunakan untuk menanyakan keadaan atau kabar?",
        options: ["مَنْ", "مَاذَا", "كَيْفَ", "مَتَى"],
        correctAnswer: "كَيْفَ", explanation: "'Kaifa' berarti 'bagaimana', cocok menanyakan keadaan (كَيْفَ حَالُكَ)."
      },
      {
        id: "q_l1_5_4", type: "multiple-choice",
        question: "Apa arti dari 'مِنْ فَضْلِكَ'?",
        options: ["Silakan / Tolong", "Terima kasih banyak", "Semoga Allah membalasmu", "Segala puji bagi Allah"],
        correctAnswer: "Silakan / Tolong", explanation: "'Min fadhlik' adalah ungkapan sopan saat meminta sesuatu."
      },
      {
        id: "q_l1_5_5", type: "multiple-choice",
        question: "Jika ingin menanyakan 'Kapan pelajaran dimulai?', kata tanya apa yang di awal?",
        options: ["أَيْنَ", "مَتَى", "مَاذَا", "هَلْ"],
        correctAnswer: "مَتَى", explanation: "'Mata' (مَتَى) berarti kapan (menanyakan waktu)."
      },
      {
        id: "q_l1_5_6", type: "multiple-choice",
        question: "Bagaimana membalas ucapan 'جَزَاكَ اللهُ خَيْرًا'?",
        options: ["الْحَمْدُ لِلهِ", "عَفْوًا", "وَإِيَّاكَ", "إِنْ شَاءَ اللهُ"],
        correctAnswer: "وَإِيَّاكَ", explanation: "'Wa iyyaka' artinya 'dan kepadamu juga' membalas doa jazakallah."
      },
      {
        id: "q_l1_5_7", type: "fill-blank",
        question: "_____ أَنْتَ؟ (Siapa kamu?)",
        options: ["مَنْ", "مَا", "كَيْفَ", "أَيْنَ"],
        correctAnswer: "مَنْ", explanation: "'Man' untuk menanyakan orang (siapa)."
      },
      {
        id: "q_l1_5_8", type: "multiple-choice",
        question: "Kata bahasa Arab untuk 'tetangga laki-laki' adalah...",
        options: ["صَدِيقٌ", "زَمِيلٌ", "جَارٌ", "ضَيْفٌ"],
        correctAnswer: "جَارٌ", explanation: "Jaar (جَارٌ) berarti tetangga laki-laki."
      },
      {
        id: "q_l1_5_9", type: "multiple-choice",
        question: "Tamu perempuan dalam bahasa Arab disebut...",
        options: ["ضَيْفَةٌ", "جَارَةٌ", "صَدِيقَةٌ", "زَمِيلَةٌ"],
        correctAnswer: "ضَيْفَةٌ", explanation: "Dhaifah (ضَيْفَةٌ) artinya tamu perempuan."
      },
      {
        id: "q_l1_5_10", type: "multiple-choice",
        question: "Cocokkan kata berikut dengan artinya!",
        options: ["مَاذَا", "أَيْنَ", "مَتَى", "مَنْ"],
        correctAnswer: "مَاذَا = Apa, أَيْنَ = Di mana, مَتَى = Kapan, مَنْ = Siapa", explanation: "Kosakata dasar kata tanya."
      },
      {
        id: "q_l1_5_11", type: "multiple-choice",
        question: "Bila teman memberitahu kabar gembira yang menakjubkan, kita ucapkan...",
        options: ["بِسْمِ اللهِ", "مَاشَاءَ اللهُ", "عَفْوًا", "مَنْ هَذَا"],
        correctAnswer: "مَاشَاءَ اللهُ", explanation: "Masya Allah diucapkan saat melihat/mendengar sesuatu yang mengagumkan."
      },
      {
        id: "q_l1_5_12", type: "multiple-choice",
        question: "Fi'il Madhi yang berarti 'berkenalan (saling mengenal)' adalah...",
        options: ["قَدَّمَ", "تَعَارَفَ", "سَلَّمَ", "شَكَرَ"],
        correctAnswer: "تَعَارَفَ", explanation: "Ta'arafa (تَعَارَفَ) dari kata ta'aruf yang berarti saling mengenal."
      },
      {
        id: "q_l1_5_13", type: "multiple-choice",
        question: "Untuk menanyakan tempat tinggal, kita menggunakan...",
        options: ["مَتَى تَسْكُنُ؟", "أَيْنَ تَسْكُنُ؟", "مَنْ تَسْكُنُ؟", "كَيْفَ تَسْكُنُ؟"],
        correctAnswer: "أَيْنَ تَسْكُنُ؟", explanation: "Aina (أَيْنَ) menanyakan tempat (di mana)."
      },
      {
        id: "q_l1_5_14", type: "multiple-choice",
        question: "Mana susunan yang benar?",
        options: ["أَنْتَ كَيْفَ؟", "حَالُكَ كَيْفَ؟", "كَيْفَ حَالُكَ؟", "أَنْتَ مَنْ؟"],
        correctAnswer: "كَيْفَ حَالُكَ؟", explanation: "Kata tanya (kaifa) harus di awal kalimat."
      },
      {
        id: "q_l1_5_15", type: "multiple-choice",
        question: "'Rekan' atau 'teman sekelas' dalam bahasa Arab adalah...",
        options: ["صَدِيقٌ", "زَمِيلٌ", "أَخٌ", "جَارٌ"],
        correctAnswer: "زَمِيلٌ", explanation: "Zamiil (زَمِيلٌ) adalah kolega, rekan, atau teman sekelas/kantor."
      },
      {
        id: "q_l1_5_16", type: "fill-blank",
        question: "إِلَى اللِّقَاءِ (Sampai _____ )",
        options: ["Bertemu", "Jumpa", "Malam", "Sore"],
        correctAnswer: "Jumpa", explanation: "Ila al-liqa' artinya sampai jumpa."
      },
      {
        id: "q_l1_5_17", type: "multiple-choice",
        question: "Ucapan untuk memulai sesuatu yang baik...",
        options: ["الْحَمْدُ لِلهِ", "بِسْمِ اللهِ", "مَاشَاءَ اللهُ", "إِنْ شَاءَ اللهُ"],
        correctAnswer: "بِسْمِ اللهِ", explanation: "Bismillah adalah ucapan memulai."
      },
      {
        id: "q_l1_5_18", type: "multiple-choice",
        question: "Ucapan saat merencanakan sesuatu untuk besok...",
        options: ["الْحَمْدُ لِلهِ", "بِسْمِ اللهِ", "مَاشَاءَ اللهُ", "إِنْ شَاءَ اللهُ"],
        correctAnswer: "إِنْ شَاءَ اللهُ", explanation: "Insya Allah (jika Allah menghendaki) digunakan untuk janji/rencana masa depan."
      },
      {
        id: "q_l1_5_19", type: "multiple-choice",
        question: "Ucapan selamat datang dalam bahasa Arab adalah...",
        options: ["أَهْلًا وَسَهْلًا / مَرْحَبًا", "صَبَاحُ الْخَيْرِ", "مَسَاءُ الْخَيْرِ", "كَيْفَ حَالُكَ"],
        correctAnswer: "أَهْلًا وَسَهْلًا / مَرْحَبًا", explanation: "Ahlan wa sahlan atau marhaban berarti selamat datang."
      },
      {
        id: "q_l1_5_20", type: "multiple-choice",
        question: "'مَاذَا' digunakan untuk menanyakan...",
        options: ["Manusia", "Tempat", "Waktu", "Benda/Perbuatan"],
        correctAnswer: "Benda/Perbuatan", explanation: "Madza (apa) untuk sesuatu yang tidak berakal."
      },
      {
        id: "q_l1_5_21", type: "fill-blank",
        question: "_____ قُلْتَ؟ (Apa yang kamu katakan?)",
        options: ["مَاذَا", "مَنْ", "أَيْنَ", "كَيْفَ"],
        correctAnswer: "مَاذَا", explanation: "Madza digunakan bersama kata kerja (qulta)."
      },
      {
        id: "q_l1_5_22", type: "multiple-choice",
        question: "'صَدِيقَةٌ' artinya...",
        options: ["Teman laki-laki", "Teman perempuan", "Tetangga perempuan", "Tamu perempuan"],
        correctAnswer: "Teman perempuan", explanation: "Shadiqah ada ta marbuthah menandakan muannats (perempuan)."
      },
      {
        id: "q_l1_5_23", type: "multiple-choice",
        question: "Bila ada yang bertanya 'هَلْ أَنْتَ بِخَيْرٍ؟', jawabannya...",
        options: ["نَعَمْ، أَنَا بِخَيْرٍ", "لَا، أَنَا أَحْمَدُ", "شُكْرًا", "عَفْوًا"],
        correctAnswer: "نَعَمْ، أَنَا بِخَيْرٍ", explanation: "Pertanyaan 'Hal' dijawab dengan 'Na'am' (Ya) atau 'La' (Tidak)."
      },
      {
        id: "q_l1_5_24", type: "multiple-choice",
        question: "Apa arti 'قَدَّمَ'?",
        options: ["Berkenalan", "Memperkenalkan/Menyajikan", "Berterima kasih", "Menyambut"],
        correctAnswer: "Memperkenalkan/Menyajikan", explanation: "Qaddama berarti memperkenalkan (seseorang) atau menyajikan (sesuatu)."
      },
      {
        id: "q_l1_5_25", type: "multiple-choice",
        question: "Jamak dari kata 'صَدِيقٌ' (teman) adalah...",
        options: ["صَدِيقَاتٌ", "أَصْدِقَاءُ", "صَادِقُونَ", "صُدُوقٌ"],
        correctAnswer: "أَصْدِقَاءُ", explanation: "Ashdiqa' adalah jamak taksir dari shadiq."
      },
      {
        id: "q_l1_5_26", type: "multiple-choice",
        question: "Lawan kata 'صَبَاحٌ' (pagi) dalam salam adalah...",
        options: ["نَهَارٌ", "مَسَاءٌ", "لَيْلٌ", "ظُهْرٌ"],
        correctAnswer: "مَسَاءٌ", explanation: "Shabah (pagi) berlawanan dengan Masa' (sore) pada salam."
      },
      {
        id: "q_l1_5_27", type: "multiple-choice",
        question: "Seseorang memberi kita hadiah, kita ucapkan...",
        options: ["جَزَاكَ اللهُ خَيْرًا / شُكْرًا", "أَهْلًا وَسَهْلًا", "بِسْمِ اللهِ", "عَفْوًا"],
        correctAnswer: "جَزَاكَ اللهُ خَيْرًا / شُكْرًا", explanation: "Terima kasih diucapkan bila menerima sesuatu."
      },
      {
        id: "q_l1_5_28", type: "fill-blank",
        question: "_____ عُمْرُكَ؟ (Berapa umurmu?)",
        options: ["كَمْ", "كَيْفَ", "مَتَى", "أَيْنَ"],
        correctAnswer: "كَمْ", explanation: "'Kam' (كَمْ) berarti berapa."
      },
      {
        id: "q_l1_5_29", type: "multiple-choice",
        question: "Arti dari 'لِقَاءٌ' adalah...",
        options: ["Perpisahan", "Pertemuan", "Perkenalan", "Sapaan"],
        correctAnswer: "Pertemuan", explanation: "Liqa' (لِقَاءٌ) berarti pertemuan (perjumpaan)."
      },
      {
        id: "q_l1_5_30", type: "multiple-choice",
        question: "Jika salah meletakkan kata tanya ('أَنْتَ مَنْ؟' alih-alih 'مَنْ أَنْتَ؟'), alasannya salah adalah...",
        options: ["Kata tanya tidak boleh untuk manusia", "Kata tanya selalu di awal kalimat", "Kata tanya harus pakai alif lam", "Kata tanya selalu fathah"],
        correctAnswer: "Kata tanya selalu di awal kalimat", explanation: "Dalam tata bahasa Arab, huruf/isim istifham harus berposisi di awal kalimat (Shadaratul Kalam)."
      }
    ]
  }
};
