import { Lesson } from "../../types";

export const l2_4: Lesson = {
  id: "l2_4",
  level: 2,
  bab: 4,
  title: "As-Safar (Perjalanan)",
  titleAr: "السَّفَرُ",
  description: "Pelajari Isim Makan (Tempat) dan Isim Zaman (Waktu) dalam konteks perjalanan, bandara, dan hotel.",
  xpReward: 40,
  isCompleted: false,
  isLocked: false,
  type: "vocabulary",
  content: {
    introduction: "Alhamdulillah, Anda telah sampai di Bab 4! Ingatlah saat di Level 1 Anda belajar arah mata angin dan posisi sederhana; kini kita akan memperluas cakrawala tersebut dalam tema As-Safar (Perjalanan). Bahasa Arab adalah kunci yang akan menuntun Anda menjelajahi dunia, mulai dari memesan tiket hingga menginap di hotel. Belajar itu mudah karena setiap kata baru adalah tiket Anda menuju petualangan baru.\n\nBab 4 ini akan fokus pada kosakata bandara, hotel, dan transportasi antar kota. Anda akan mempelajari 'Isim Makan' dan 'Isim Zaman'—cara menyebutkan tempat dan waktu terjadinya suatu peristiwa secara sistematis. Semangat Anda adalah kompas utama dalam perjalanan ini. Persiapkan diri Anda, karena setelah mahir berkeliling dunia, kita akan belajar bagaimana membangun karir profesional di bab berikutnya!",
    introTitle: "Menjelajahi Tempat dan Waktu dalam Bahasa Arab",
    introVerse: {
      ar: "سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ",
      translation: "Berjalanlah di (muka) bumi, maka perhatikanlah bagaimana Allah menciptakan (manusia) dari permulaannya. (QS. Al-Ankabut: 20)"
    },
    introBadges: [
      { icon: "📍", text: "ISIM MAKAN (Mengenal pola pembentukan tempat)" },
      { icon: "⏰", text: "ISIM ZAMAN (Memahami penanda waktu dalam isim)" }
    ],
    totalSentencesDisplay: "300 Kalimat Perjalanan",
    grammar: {
      title: "Isim Makan & Isim Zaman",
      logicExplanation: "Isim Makan (tempat) dan Isim Zaman (waktu) adalah kata benda yang diderivasi (musytaq) dari Fi'il (kata kerja) untuk menunjukkan lokasi atau waktu terjadinya suatu perbuatan. \n\nLogika Pembentukan:\n1. **Wazan مَفْعَل (Maf'al)**: Digunakan jika Fi'il Mudhari'-nya berharakat Fathah atau Dhammah pada huruf tengahnya (Ain Fi'il). \n   *Contoh: كَتَبَ-يَكْتُبُ (Dhammah) -> مَكْتَب (Maktab = Meja/Kantor).* \n   *Contoh: لَعِبَ-يَلْعَبُ (Fathah) -> مَلْعَب (Mal'ab = Lapangan).*\n\n2. **Wazan مَفْعِل (Maf'il)**: Digunakan jika Fi'il Mudhari'-nya berharakat Kasrah pada huruf tengahnya. \n   *Contoh: جَلَسَ-يَجْلِسُ (Kasrah) -> مَجْلِس (Majlis = Ruang Duduk).*\n\n3. **Fi'il Mi'tal (Lemah)**: Jika huruf pertama Fi'il adalah Wawu (Mithal), biasanya menggunakan Maf'il. \n   *Contoh: وَقَفَ-يَقِفُ -> مَوْقِف (Mawqif = Halte/Parkir).*",
      examples: [
        { ar: "مَطَارٌ", translation: "Bandara (dari Thara = Terbang)", grammarNote: "Logika: Tempat untuk terbang, menggunakan pola Maf'al." },
        { ar: "مَوْعِدٌ", translation: "Waktu/Janji temu (dari Wa'ada)", grammarNote: "Logika: Isim Zaman menggunakan pola Maf'il karena asal katanya Mithal (huruf Wawu di depan)." },
        { ar: "مَطْعَمٌ", translation: "Restoran (dari Ath'ama = Makan)", grammarNote: "Logika: Tempat makan, menggunakan pola Maf'al." },
        { ar: "مَدْخَلٌ", translation: "Pintu Masuk (dari Dakhala = Masuk)", grammarNote: "Logika: Tempat masuk, menggunakan pola Maf'al (Yadkhulu)." },
        { ar: "مَخْرَجٌ", translation: "Pintu Keluar (dari Kharaja = Keluar)", grammarNote: "Logika: Tempat keluar, menggunakan pola Maf'al (Yakhruju)." },
        { ar: "مَصْعَدٌ", translation: "Lift (dari Sha'ada = Naik)", grammarNote: "Logika: Tempat untuk naik, pola Maf'al." }
      ],
      commonMistakes: [
        { wrong: "مَطْعِمٌ", correct: "مَطْعَمٌ", explanation: "Salah wazan: Akar kata 'Ath'ama-Yath'amu' berharakat fathah, maka harus Maf'al (Math'am)." },
        { wrong: "مَسْجَدٌ", correct: "مَسْجِدٌ", explanation: "Pengecualian (Sama'i): Secara aturan Yadkhulu harus Maf'al, tapi orang Arab menggunakan Masjid (Maf'il)." },
        { wrong: "مَوْقَفٌ", correct: "مَوْقِفٌ", explanation: "Akar kata Mithal (huruf Wawu di awal) seperti Waqafa harus menggunakan pola Maf'il (Mawqif)." },
        { wrong: "مَلْعِبٌ", correct: "مَلْعَبٌ", explanation: "Mudhari'nya Yall'abu (Fathah), maka tempatnya harus Maf'al (Mal'ab)." }
      ],
      tashrif: {
        title: "Tabel Derivasi Isim Makan/Zaman",
        rows: [
          { dhamir: "كَتَبَ", dhaminMeaning: "Menulis", fiil: "يَكْتُبُ (Dhammah)", akhiran: "مَكْتَبٌ", contoh: "الْكِتَابُ عَلَى الْمَكْتَبِ" },
          { dhamir: "لَعِبَ", dhaminMeaning: "Bermain", fiil: "يَلْعَبُ (Fathah)", akhiran: "مَلْعَبٌ", contoh: "الْمَلْعَبُ وَاسِعٌ" },
          { dhamir: "جَلَسَ", dhaminMeaning: "Duduk", fiil: "يَجْلِسُ (Kasrah)", akhiran: "مَجْلِسٌ", contoh: "أَجْلِسُ فِي الْمَجْلِسِ" },
          { dhamir: "وَقَفَ", dhaminMeaning: "Berhenti", fiil: "يَقِفُ (Mithal)", akhiran: "مَوْقِفٌ", contoh: "أَنَا فِي مَوْقِفِ الْحَافِلَةِ" },
          { dhamir: "وَعَدَ", dhaminMeaning: "Janji", fiil: "يَعِدُ (Mithal)", akhiran: "مَوْعِدٌ", contoh: "الْمَوْعِدُ غَدًا" }
        ]
      }
    },
    cards: [
      {
        id: "l2_4_c1",
        wordAr: "جَوَازُ السَّفَرِ",
        translation: "Paspor",
        description: "Dokumen resmi untuk izin perjalanan antar negara.",
        category: "Dokumen",
        examples: [
          { ar: "أَيْنَ جَوَازُ سَفَرِكَ؟", translation: "Di mana paspormu?", grammarNote: "Logika: Idhafah (M). Paspor milikmu." },
          { ar: "هَذَا جَوَازُ سَفَرِي", translation: "Ini paspor saya.", grammarNote: "Logika: Ya Mutakallim menunjukkan kepemilikan." },
          { ar: "أَحْتَاجُ إِلَى جَوَازِ السَّفَرِ", translation: "Saya butuh paspor.", grammarNote: "Logika: Majrur setelah huruf 'Ila'." },
          { ar: "جَوَازُ السَّفَرِ جَدِيدٌ", translation: "Paspornya baru.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "ضَاعَ جَوَازُ سَفَرِي", translation: "Paspor saya hilang.", grammarNote: "Logika: Fi'il madi 'Dhaa'a'." },
          { ar: "خُذْ جَوَازَ السَّفَرِ", translation: "Ambil paspornya.", grammarNote: "Logika: Maf'ul bih (objek) berharakat fathah." },
          { ar: "جَوَازُ السَّفَرِ فِي الْحَقِيبَةِ", translation: "Paspor ada di dalam tas.", grammarNote: "Logika: Keterangan tempat." },
          { ar: "هَلْ عِنْدَكَ جَوَازُ سَفَرٍ؟", translation: "Apakah kamu punya paspor?", grammarNote: "Logika: Pertanyaan kepemilikan." },
          { ar: "جَوَازُ سَفَرٍ أَخْضَرُ", translation: "Paspor hijau.", grammarNote: "Logika: Warna mudzakkar." },
          { ar: "صُورَةٌ فِي جَوَازِ السَّفَرِ", translation: "Foto di dalam paspor.", grammarNote: "Logika: Struktur jar-majrur." }
        ]
      },
      {
        id: "l2_4_c2",
        wordAr: "تَذْكِرَةٌ",
        translation: "Tiket",
        description: "Bukti pembayaran untuk perjalanan.",
        category: "Dokumen",
        examples: [
          { ar: "تَذْكِرَةُ الطَّائِرَةِ غَالِيَةٌ", translation: "Tiket pesawat itu mahal.", grammarNote: "Logika: Mubtada (F) + Khabar (F)." },
          { ar: "أَيْنَ التَّذْكِرَةُ؟", translation: "Di mana tiketnya?", grammarNote: "Logika: Bertanya benda muannats." },
          { ar: "هَذِهِ تَذْكِرَةٌ وَاحِدَةٌ", translation: "Ini satu tiket.", grammarNote: "Logika: Keselarasan angka 1 (F)." },
          { ar: "اشْتَرَيْتُ التَّذْكِرَةَ", translation: "Saya telah membeli tiket.", grammarNote: "Logika: Objek muannats (fathah)." },
          { ar: "أُرِيدُ تَذْكِرَةَ الْعَوْدَةِ", translation: "Saya ingin tiket pulang.", grammarNote: "Logika: Idhafah muannats." },
          { ar: "التَّذْكِرَةُ مَعِي", translation: "Tiketnya ada pada saya.", grammarNote: "Logika: Preposisi 'Ma'a'." },
          { ar: "تَذْكِرَةٌ رَخِيصَةٌ", translation: "Tiket yang murah.", grammarNote: "Logika: Na'at muannats." },
          { ar: "أَعْطِنِي التَّذْكِرَةَ", translation: "Berikan saya tiketnya.", grammarNote: "Logika: Fi'il amar." },
          { ar: "تَذْكِرَةُ الْقِطَارِ", translation: "Tiket kereta.", grammarNote: "Logika: Idhafah." },
          { ar: "رَقْمُ التَّذْكِرَةِ", translation: "Nomor tiket.", grammarNote: "Logika: Mudhaf-Mudhaf Ilaihi." }
        ]
      },
      {
        id: "l2_4_c3",
        wordAr: "مَطَارٌ",
        translation: "Bandara",
        description: "Tempat pesawat lepas landas dan mendarat (Pola Maf'al).",
        category: "Tempat",
        examples: [
          { ar: "الْمَطَارُ كَبِيرٌ", translation: "Bandaranya besar.", grammarNote: "Logika: Isim Makan pola Maf'al." },
          { ar: "أَنَا فِي الْمَطَارِ", translation: "Saya di bandara.", grammarNote: "Logika: Keterangan tempat." },
          { ar: "نَذْهَبُ إِلَى الْمَطَارِ", translation: "Kita pergi ke bandara.", grammarNote: "Logika: Arah tujuan." },
          { ar: "الْمَطَارُ بَعِيدٌ جِدًّا", translation: "Bandaranya sangat jauh.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "مَطَارُ جَاكَرْتَا", translation: "Bandara Jakarta.", grammarNote: "Logika: Idhafah nama tempat." },
          { ar: "هَلْ هَذَا مَطَارٌ؟", translation: "Apakah ini bandara?", grammarNote: "Logika: Isim isyarah." },
          { ar: "وَصَلْتُ إِلَى الْمَطَارِ", translation: "Saya tiba di bandara.", grammarNote: "Logika: Fi'il madi." },
          { ar: "الْمَطَارُ مَزْدَحِمٌ", translation: "Bandaranya macet/ramai.", grammarNote: "Logika: Kondisi tempat." },
          { ar: "بَابُ الْمَطَارِ", translation: "Pintu bandara.", grammarNote: "Logika: Struktur kepemilikan." },
          { ar: "مَطَارٌ دَوْلِيٌّ", translation: "Bandara internasional.", grammarNote: "Logika: Na'at mudzakkar." }
        ]
      },
      {
        id: "l2_4_c4",
        wordAr: "طَائِرَةٌ",
        translation: "Pesawat",
        description: "Kendaraan udara untuk bepergian jauh.",
        category: "Transportasi",
        examples: [
          { ar: "الطَّائِرَةُ فِي السَّمَاءِ", translation: "Pesawat ada di langit.", grammarNote: "Logika: Muannats karena Ta Marbutah." },
          { ar: "سَافَرْتُ بِالطَّائِرَةِ", translation: "Saya bepergian dengan pesawat.", grammarNote: "Logika: Huruf Jar 'Bi'." },
          { ar: "الطَّائِرَةُ سَرِيعَةٌ", translation: "Pesawatnya cepat.", grammarNote: "Logika: Sifat muannats." },
          { ar: "أُرِيدُ رُكُوبَ الطَّائِرَةِ", translation: "Saya ingin naik pesawat.", grammarNote: "Logika: Idhafah." },
          { ar: "الطَّائِرَةُ كَبِيرَةٌ", translation: "Pesawatnya besar.", grammarNote: "Logika: Na'at muannats." },
          { ar: "مَوْعِدُ الطَّائِرَةِ", translation: "Jadwal pesawat.", grammarNote: "Logika: Isim Zaman + Benda." },
          { ar: "الطَّائِرَةُ تَهْبِطُ الآنَ", translation: "Pesawat sedang mendarat sekarang.", grammarNote: "Logika: Fi'il mudhari muannats." },
          { ar: "هَذِهِ طَائِرَةٌ جَمِيلَةٌ", translation: "Ini pesawat yang bagus.", grammarNote: "Logika: Isim isyarah (F)." },
          { ar: "نَحْنُ فِي الطَّائِرَةِ", translation: "Kami di dalam pesawat.", grammarNote: "Logika: Keterangan posisi." },
          { ar: "لَوْنُ الطَّائِرَةِ أَبْيَضُ", translation: "Warna pesawat itu putih.", grammarNote: "Logika: Deskripsi warna." }
        ]
      },
      {
        id: "l2_4_c5",
        wordAr: "حَقِيبَةٌ",
        translation: "Tas / Koper",
        description: "Wadah barang bawaan perjalanan.",
        category: "Barang",
        examples: [
          { ar: "حَقِيبَتِي ثَقِيلَةٌ", translation: "Tas saya berat.", grammarNote: "Logika: Mubtada muannats + Khabar muannats." },
          { ar: "أَيْنَ الْحَقِيبَةُ؟", translation: "Di mana tasnya?", grammarNote: "Logika: Tanya benda (F)." },
          { ar: "هَذِهِ حَقِيبَةٌ كَبِيرَةٌ", translation: "Ini koper yang besar.", grammarNote: "Logika: Na'at muannats." },
          { ar: "اشْتَرَيْتُ حَقِيبَةً جَدِيدَةً", translation: "Saya membeli tas baru.", grammarNote: "Logika: Objek (nashab)." },
          { ar: "الْحَقِيبَةُ تَحْتَ الْمَكْتَبِ", translation: "Tasnya di bawah meja.", grammarNote: "Logika: Zharaf makan." },
          { ar: "أَحْمِلُ حَقِيبَةً سَوْدَاءَ", translation: "Saya membawa tas hitam.", grammarNote: "Logika: Warna muannats." },
          { ar: "حَقِيبَةُ السَّفَرِ", translation: "Tas perjalanan (Koper).", grammarNote: "Logika: Idhafah." },
          { ar: "افْتَحِ الْحَقِيبَةَ", translation: "Bukalah tasnya.", grammarNote: "Logika: Fi'il amar." },
          { ar: "حَقِيبَةٌ صَغِيرَةٌ", translation: "Tas kecil.", grammarNote: "Logika: Sifat muannats." },
          { ar: "كَمْ حَقِيبَةً عِنْدَكَ؟", translation: "Berapa tas yang kamu punya?", grammarNote: "Logika: Tamyiz untuk 'Kam'." }
        ]
      },
      {
        id: "l2_4_c6",
        wordAr: "فُنْدُقٌ",
        translation: "Hotel",
        description: "Tempat menginap bagi para pendatang.",
        category: "Tempat",
        examples: [
          { ar: "الْفُنْدُقُ قَرِيبٌ", translation: "Hotelnya dekat.", grammarNote: "Logika: Mubtada mudzakkar." },
          { ar: "أَسْكُنُ فِي فُنْدُقٍ", translation: "Saya tinggal di hotel.", grammarNote: "Logika: Jar-majrur." },
          { ar: "هَذَا فُنْدُقٌ غَالٍ", translation: "Ini hotel yang mahal.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "أُرِيدُ فُنْدُقًا رَخِيصًا", translation: "Saya ingin hotel yang murah.", grammarNote: "Logika: Objek (nashab)." },
          { ar: "الْفُنْدُقُ نَظِيفٌ جِدًّا", translation: "Hotelnya sangat bersih.", grammarNote: "Logika: Sifat kondisi." },
          { ar: "مَدْخَلُ الْفُنْدُقِ", translation: "Pintu masuk hotel.", grammarNote: "Logika: Isim makan + Idhafah." },
          { ar: "فُنْدُقٌ خَمْسُ نُجُومٍ", translation: "Hotel bintang lima.", grammarNote: "Logika: Angka (5)." },
          { ar: "أَيْنَ أَقْرَبُ فُنْدُقٍ؟", translation: "Di mana hotel terdekat?", grammarNote: "Logika: Isim Tafdhil 'Aqrabu'." },
          { ar: "نَحْنُ أَمَامَ الْفُنْدُقِ", translation: "Kami di depan hotel.", grammarNote: "Logika: Zharaf makan." },
          { ar: "فُنْدُقٌ كَبِيرٌ", translation: "Hotel besar.", grammarNote: "Logika: Sifat mudzakkar." }
        ]
      },
      {
        id: "l2_4_c7",
        wordAr: "غُرْفَةٌ",
        translation: "Kamar",
        description: "Ruangan pribadi di hotel atau rumah.",
        category: "Hotel",
        examples: [
          { ar: "غُرْفَتِي نَظِيفَةٌ", translation: "Kamar saya bersih.", grammarNote: "Logika: Mubtada (F) + Khabar (F)." },
          { ar: "أُرِيدُ غُرْفَةً لِشَخْصٍ", translation: "Saya ingin kamar untuk satu orang.", grammarNote: "Logika: Permintaan layanan." },
          { ar: "هَلِ الْغُرْفَةُ مَوْجُودَةٌ؟", translation: "Apakah kamarnya ada?", grammarNote: "Logika: Pertanyaan ketersediaan." },
          { ar: "غُرْفَةٌ وَاسِعَةٌ", translation: "Kamar yang luas.", grammarNote: "Logika: Na'at muannats." },
          { ar: "رَقْمُ الْغُرْفَةِ", translation: "Nomor kamar.", grammarNote: "Logika: Idhafah." },
          { ar: "أَنَا فِي الْغُرْفَةِ", translation: "Saya di dalam kamar.", grammarNote: "Logika: Keterangan posisi." },
          { ar: "غُرْفَةٌ مُطِلَّةٌ عَلَى الْبَحْرِ", translation: "Kamar yang menghadap laut.", grammarNote: "Logika: Deskripsi fasilitas." },
          { ar: "مِفْتَاحُ الْغُرْفَةِ", translation: "Kunci kamar.", grammarNote: "Logika: Kepemilikan benda." },
          { ar: "ادْخُلِ الْغُرْفَةَ", translation: "Masuklah ke kamar.", grammarNote: "Logika: Fi'il amar." },
          { ar: "هَذِهِ غُرْفَةٌ هَادِئَةٌ", translation: "Ini kamar yang tenang.", grammarNote: "Logika: Sifat muannats." }
        ]
      },
      {
        id: "l2_4_c8",
        wordAr: "مِفْتَاحٌ",
        translation: "Kunci",
        description: "Alat untuk membuka pintu (Isim Alat, tapi sering dibahas di bab hotel).",
        category: "Barang",
        examples: [
          { ar: "أَيْنَ مِفْتَاحِي؟", translation: "Di mana kunci saya?", grammarNote: "Logika: Ya mutakallim." },
          { ar: "هَذَا مِفْتَاحُ الْغُرْفَةِ", translation: "Ini kunci kamar.", grammarNote: "Logika: Idhafah." },
          { ar: "أَعْطِنِي الْمِفْتَاحَ", translation: "Berikan saya kuncinya.", grammarNote: "Logika: Objek (nashab)." },
          { ar: "الْمِفْتَاحُ عَلَى الطَّاوِلَةِ", translation: "Kuncinya di atas meja.", grammarNote: "Logika: Keterangan tempat." },
          { ar: "مِفْتَاحٌ صَغِيرٌ", translation: "Kunci kecil.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "ضَاعَ الْمِفْتَاحُ", translation: "Kuncinya hilang.", grammarNote: "Logika: Fi'il madi." },
          { ar: "مِفْتَاحُ السَّيَّارَةِ", translation: "Kunci mobil.", grammarNote: "Logika: Struktur kepemilikan." },
          { ar: "خُذِ الْمِفْتَاحَ", translation: "Ambil kuncinya.", grammarNote: "Logika: Fi'il amar." },
          { ar: "هَلْ هَذَا مِفْتَاحُكَ؟", translation: "Apakah ini kuncimu?", grammarNote: "Logika: Kaff mukhatab." },
          { ar: "مِفْتَاحٌ مِنْ حَدِيدٍ", translation: "Kunci dari besi.", grammarNote: "Logika: Bahan benda." }
        ]
      },
      {
        id: "l2_4_c9",
        wordAr: "مَوْعِدٌ",
        translation: "Waktu / Jadwal / Janji",
        description: "Isim Zaman dari Wa'ada (Berjanji). Pola Maf'il.",
        category: "Waktu",
        examples: [
          { ar: "مَوْعِدُ الرِّحْلَةِ الْآنَ", translation: "Jadwal keberangkatan sekarang.", grammarNote: "Logika: Isim Zaman pola Maf'il." },
          { ar: "أَيْنَ مَوْعِدُ السَّفَرِ؟", translation: "Kapan jadwal perjalanannya?", grammarNote: "Logika: Menanyakan waktu." },
          { ar: "لَدَيَّ مَوْعِدٌ مَعَ الطَّبِيبِ", translation: "Saya punya janji dengan dokter.", grammarNote: "Logika: Makna janji temu." },
          { ar: "الْمَوْعِدُ غَدًا", translation: "Jadwalnya besok.", grammarNote: "Logika: Keterangan waktu." },
          { ar: "مَوْعِدٌ قَرِيبٌ", translation: "Waktu yang dekat.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "هَلِ الْمَوْعِدُ مُنَاسِبٌ؟", translation: "Apakah waktunya sesuai?", grammarNote: "Logika: Pertanyaan kondisi." },
          { ar: "تَأَخَّرَ الْمَوْعِدُ", translation: "Waktunya terlambat.", grammarNote: "Logika: Fi'il madi." },
          { ar: "مَوْعِدُ الْفَطُورِ", translation: "Waktu sarapan.", grammarNote: "Logika: Idhafah waktu." },
          { ar: "نَسِيتُ الْمَوْعِدَ", translation: "Saya lupa jadwalnya.", grammarNote: "Logika: Objek (nashab)." },
          { ar: "مَوْعِدٌ هَامٌّ", translation: "Janji yang penting.", grammarNote: "Logika: Na'at mudzakkar." }
        ]
      },
      {
        id: "l2_4_c10",
        wordAr: "مَدْخَلٌ",
        translation: "Pintu Masuk",
        description: "Isim Makan dari Dakhala (Masuk). Pola Maf'al.",
        category: "Tempat",
        examples: [
          { ar: "الْمَدْخَلُ عَلَى الْيَمِينِ", translation: "Pintu masuknya di sebelah kanan.", grammarNote: "Logika: Isim Makan pola Maf'al." },
          { ar: "أَيْنَ مَدْخَلُ الْفُنْدُقِ؟", translation: "Di mana pintu masuk hotel?", grammarNote: "Logika: Menanyakan lokasi." },
          { ar: "هَذَا مَدْخَلٌ وَاسِعٌ", translation: "Ini pintu masuk yang luas.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "نَحْنُ عِنْدَ الْمَدْخَلِ", translation: "Kami ada di pintu masuk.", grammarNote: "Logika: Preposisi 'Inda'." },
          { ar: "الْمَدْخَلُ مُغْلَقٌ", translation: "Pintu masuknya tutup.", grammarNote: "Logika: Khabar mudzakkar." },
          { ar: "ادْخُلْ مِنَ الْمَدْخَلِ", translation: "Masuklah dari pintu masuk.", grammarNote: "Logika: Instruksi arah." },
          { ar: "مَدْخَلٌ نَظِيفٌ", translation: "Pintu masuk yang bersih.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "الْمَدْخَلُ الرَّئِيسِيُّ", translation: "Pintu masuk utama.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "مَدْخَلُ الطَّوَارِئِ", translation: "Pintu masuk darurat.", grammarNote: "Logika: Idhafah." },
          { ar: "رَأَيْتُهُ عِنْدَ الْمَدْخَلِ", translation: "Saya melihatnya di pintu masuk.", grammarNote: "Logika: Keterangan tempat." }
        ]
      },
      {
        id: "l2_4_c11",
        wordAr: "مَخْرَجٌ",
        translation: "Pintu Keluar",
        description: "Isim Makan dari Kharaja (Keluar). Pola Maf'al.",
        category: "Tempat",
        examples: [
          { ar: "الْمَخْرَجُ عَلَى الْيَسَارِ", translation: "Pintu keluarnya di sebelah kiri.", grammarNote: "Logika: Isim Makan pola Maf'al." },
          { ar: "أَيْنَ مَخْرَجُ الطَّوَارِئِ؟", translation: "Di mana pintu keluar darurat?", grammarNote: "Logika: Idhafah darurat." },
          { ar: "هَذَا مَخْرَجٌ ضَيِّقٌ", translation: "Ini pintu keluar yang sempit.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "نَخْرُجُ مِنَ الْمَخْرَجِ", translation: "Kita keluar dari pintu keluar.", grammarNote: "Logika: Arah gerakan." },
          { ar: "الْمَخْرَجُ بَعِيدٌ", translation: "Pintu keluarnya jauh.", grammarNote: "Logika: Keterangan posisi." },
          { ar: "هَلْ هَذَا مَخْرَجٌ؟", translation: "Apakah ini pintu keluar?", grammarNote: "Logika: Isim isyarah." },
          { ar: "مَخْرَجٌ نَظِيفٌ", translation: "Pintu keluar yang bersih.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "الْمَخْرَجُ مَفْتُوحٌ", translation: "Pintu keluarnya buka.", grammarNote: "Logika: Kondisi tempat." },
          { ar: "عِنْدَ الْمَخْرَجِ", translation: "Di dekat pintu keluar.", grammarNote: "Logika: Zharaf." },
          { ar: "مَخْرَجُ السَّيَّارَاتِ", translation: "Pintu keluar mobil.", grammarNote: "Logika: Idhafah spesifik." }
        ]
      },
      {
        id: "l2_4_c12",
        wordAr: "مَطْعَمٌ",
        translation: "Restoran / Ruang Makan",
        description: "Isim Makan dari Ath'ama (Makan). Pola Maf'al.",
        category: "Tempat",
        examples: [
          { ar: "نَأْكُلُ فِي الْمَطْعَمِ", translation: "Kita makan di restoran.", grammarNote: "Logika: Isim Makan pola Maf'al." },
          { ar: "الْمَطْعَمُ بَعِيدٌ", translation: "Restorannya jauh.", grammarNote: "Logika: Keterangan posisi." },
          { ar: "أَيْنَ مَطْعَمُ الْفُنْدُقِ؟", translation: "Di mana restoran hotelnya?", grammarNote: "Logika: Idhafah." },
          { ar: "هَذَا مَطْعَمٌ لَذِيذٌ", translation: "Ini restoran yang enak.", grammarNote: "Logika: Sifat (kualitas makanan)." },
          { ar: "الْمَطْعَمُ مَفْتُوحٌ الآنَ", translation: "Restorannya buka sekarang.", grammarNote: "Logika: Waktu operasional." },
          { ar: "أُرِيدُ الذَّهَابَ إِلَى الْمَطْعَمِ", translation: "Saya ingin pergi ke restoran.", grammarNote: "Logika: Tujuan arah." },
          { ar: "مَطْعَمٌ رَخِيصٌ", translation: "Restoran yang murah.", grammarNote: "Logika: Klasifikasi harga." },
          { ar: "نَحْنُ فِي الْمَطْعَمِ", translation: "Kami ada di restoran.", grammarNote: "Logika: Keterangan tempat." },
          { ar: "مَطْعَمٌ كَبِيرٌ", translation: "Restoran besar.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "طَعَامُ الْمَطْعَمِ طَيِّبٌ", translation: "Makanan restoran itu enak.", grammarNote: "Logika: Idhafah + Sifat." }
        ]
      },
      {
        id: "l2_4_c13",
        wordAr: "مَوْقِفٌ",
        translation: "Halte / Parkiran / Sikap",
        description: "Isim Makan dari Waqafa (Berhenti). Pola Maf'il.",
        category: "Tempat",
        examples: [
          { ar: "أَنَا فِي مَوْقِفِ الْحَافِلَةِ", translation: "Saya di halte bus.", grammarNote: "Logika: Isim Makan pola Maf'il." },
          { ar: "أَيْنَ مَوْقِفُ السَّيَّارَاتِ؟", translation: "Di mana parkiran mobil?", grammarNote: "Logika: Idhafah jamak." },
          { ar: "الْمَوْقِفُ مَزْدَحِمٌ", translation: "Haltenya ramai.", grammarNote: "Logika: Kondisi tempat." },
          { ar: "انْتَظِرْنِي فِي الْمَوْقِفِ", translation: "Tunggu saya di halte.", grammarNote: "Logika: Instruksi pertemuan." },
          { ar: "مَوْقِفٌ بَعِيدٌ", translation: "Parkiran yang jauh.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "هَذَا مَوْقِفُ التَّاكْسِي", translation: "Ini pangkalan taksi.", grammarNote: "Logika: Idhafah." },
          { ar: "الْمَوْقِفُ مَجَّانِيٌّ", translation: "Parkirannya gratis.", grammarNote: "Logika: Informasi layanan." },
          { ar: "رَكِبْتُ مِنَ الْمَوْقِفِ", translation: "Saya naik dari halte.", grammarNote: "Logika: Asal gerakan." },
          { ar: "مَوْقِفٌ وَاسِعٌ", translation: "Parkiran yang luas.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "لَا تَقِفْ فِي الْمَوْقِفِ", translation: "Jangan berhenti di halte (tanpa alasan).", grammarNote: "Logika: Larangan." }
        ]
      },
      {
        id: "l2_4_c14",
        wordAr: "مَطْبَخٌ",
        translation: "Dapur",
        description: "Isim Makan dari Thabakha (Memasak). Pola Maf'al.",
        category: "Tempat",
        examples: [
          { ar: "أُمِّي فِي الْمَطْبَخِ", translation: "Ibu saya di dapur.", grammarNote: "Logika: Isim Makan pola Maf'al." },
          { ar: "الْمَطْبَخُ نَظِيفٌ", translation: "Dapurnya bersih.", grammarNote: "Logika: Sifat kondisi." },
          { ar: "أَيْنَ مَطْبَخُ الْبَيْتِ؟", translation: "Di mana dapur rumahnya?", grammarNote: "Logika: Idhafah." },
          { ar: "هَذَا مَطْبَخٌ كَبِيرٌ", translation: "Ini dapur yang besar.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "أَطْبُخُ فِي الْمَطْبَخِ", translation: "Saya memasak di dapur.", grammarNote: "Logika: Aktivitas rutin." },
          { ar: "الْمَطْبَخُ بَعِيدٌ عَنِ الْغُرْفَةِ", translation: "Dapurnya jauh dari kamar.", grammarNote: "Logika: Hubungan jarak." },
          { ar: "مَطْبَخٌ حَدِيثٌ", translation: "Dapur modern.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "دَخَلْتُ الْمَطْبَخَ", translation: "Saya masuk ke dapur.", grammarNote: "Logika: Kata kerja arah." },
          { ar: "أَدَوَاتُ الْمَطْبَخِ", translation: "Alat-alat dapur.", grammarNote: "Logika: Kepemilikan benda." },
          { ar: "مَطْبَخٌ صَغِيرٌ", translation: "Dapur kecil.", grammarNote: "Logika: Na'at nakirah." }
        ]
      },
      {
        id: "l2_4_c15",
        wordAr: "مَكْتَبٌ",
        translation: "Meja / Kantor",
        description: "Isim Makan dari Kataba (Menulis). Pola Maf'al.",
        category: "Tempat",
        examples: [
          { ar: "الْكِتَابُ عَلَى الْمَكْتَبِ", translation: "Buku itu di atas meja.", grammarNote: "Logika: Isim Makan pola Maf'al." },
          { ar: "أَعْمَلُ فِي الْمَكْتَبِ", translation: "Saya bekerja di kantor.", grammarNote: "Logika: Lokasi profesi." },
          { ar: "مَكْتَبُ الْمُدِيرِ", translation: "Kantor direktur.", grammarNote: "Logika: Idhafah." },
          { ar: "هَذَا مَكْتَبٌ نَظِيفٌ", translation: "Ini meja yang bersih.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "أَيْنَ مَكْتَبُكَ؟", translation: "Di mana kantormu?", grammarNote: "Logika: Kaff mukhatab." },
          { ar: "الْمَكْتَبُ أَمَامَ السَّرِيرِ", translation: "Mejanya di depan tempat tidur.", grammarNote: "Logika: Zharaf makan." },
          { ar: "مَكْتَبُ السِّفَارَةِ", translation: "Kantor kedutaan.", grammarNote: "Logika: Struktur resmi." },
          { ar: "اشْتَرَيْتُ مَكْتَبًا جَدِيدًا", translation: "Saya membeli meja baru.", grammarNote: "Logika: Objek (nashab)." },
          { ar: "مَكْتَبٌ كَبِيرٌ", translation: "Meja besar.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "الْأَقْلَامُ فِي الْمَكْتَبِ", translation: "Pulpen-pulpen ada di dalam meja/laci.", grammarNote: "Logika: Keterangan tempat." }
        ]
      },
      {
        id: "l2_4_c16",
        wordAr: "مَلْعَبٌ",
        translation: "Lapangan / Stadion",
        description: "Isim Makan dari La'iba (Bermain). Pola Maf'al.",
        category: "Tempat",
        examples: [
          { ar: "نَلْعَبُ فِي الْمَلْعَبِ", translation: "Kita bermain di lapangan.", grammarNote: "Logika: Isim Makan pola Maf'al." },
          { ar: "الْمَلْعَبُ وَاسِعٌ", translation: "Lapangannya luas.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "أَيْنَ مَلْعَبُ الْمَدْرَسَةِ؟", translation: "Di mana lapangan sekolah?", grammarNote: "Logika: Idhafah." },
          { ar: "هَذَا مَلْعَبٌ كَبِيرٌ", translation: "Ini stadion yang besar.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "نَذْهَبُ إِلَى الْمَلْعَبِ", translation: "Kita pergi ke lapangan.", grammarNote: "Logika: Tujuan arah." },
          { ar: "الْمَلْعَبُ مَمْلُوءٌ بِالنَّاسِ", translation: "Lapangannya penuh dengan orang.", grammarNote: "Logika: Kondisi tempat." },
          { ar: "مَلْعَبُ كُرَةِ الْقَدَمِ", translation: "Lapangan sepak bola.", grammarNote: "Logika: Idhafah majemuk." },
          { ar: "رَأَيْتُهُ فِي الْمَلْعَبِ", translation: "Saya melihatnya di lapangan.", grammarNote: "Logika: Keterangan tempat." },
          { ar: "مَلْعَبٌ جَدِيدٌ", translation: "Lapangan baru.", grammarNote: "Logika: Na'at nakirah." },
          { ar: "الْمَلْعَبُ قَرِيبٌ", translation: "Lapangannya dekat.", grammarNote: "Logika: Keterangan posisi." }
        ]
      },
      {
        id: "l2_4_c17",
        wordAr: "مَجْلِسٌ",
        translation: "Majlis / Ruang Duduk",
        description: "Isim Makan dari Jalasa (Duduk). Pola Maf'il.",
        category: "Tempat",
        examples: [
          { ar: "أَجْلِسُ فِي الْمَجْلِسِ", translation: "Saya duduk di ruang tamu.", grammarNote: "Logika: Isim Makan pola Maf'il." },
          { ar: "الْمَجْلِسُ وَاسِعٌ", translation: "Ruang majlisnya luas.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "أَيْنَ مَجْلِسُ الْبَيْتِ؟", translation: "Di mana ruang tamu rumah?", grammarNote: "Logika: Idhafah." },
          { ar: "هَذَا مَجْلِسٌ نَظِيفٌ", translation: "Ini ruang duduk yang bersih.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "الْمَجْلِسُ مَمْلُوءٌ بِالضُّيُوفِ", translation: "Ruang tamunya penuh dengan tamu.", grammarNote: "Logika: Kondisi sosial." },
          { ar: "ادْخُلِ الْمَجْلِسَ", translation: "Masuklah ke ruang tamu.", grammarNote: "Logika: Fi'il amar." },
          { ar: "مَجْلِسٌ هَادِئٌ", translation: "Ruang duduk yang tenang.", grammarNote: "Logika: Sifat kondisi." },
          { ar: "شَرِبْتُ الشَّايَ فِي الْمَجْلِسِ", translation: "Saya minum teh di ruang tamu.", grammarNote: "Logika: Aktivitas rutin." },
          { ar: "مَجْلِسُ الْعِلْمِ", translation: "Majlis ilmu.", grammarNote: "Logika: Idhafah maknawi." },
          { ar: "مَجْلِسٌ كَبِيرٌ", translation: "Ruang duduk besar.", grammarNote: "Logika: Na'at mudzakkar." }
        ]
      },
      {
        id: "l2_4_c18",
        wordAr: "مَسْجِدٌ",
        translation: "Masjid",
        description: "Isim Makan dari Sajada (Sujud). Pola Maf'il (Pengecualian).",
        category: "Tempat",
        examples: [
          { ar: "أُصَلِّي فِي الْمَسْجِدِ", translation: "Saya shalat di masjid.", grammarNote: "Logika: Pengecualian pola Maf'il." },
          { ar: "الْمَسْجِدُ قَرِيبٌ", translation: "Masjidnya dekat.", grammarNote: "Logika: Mubtada mudzakkar." },
          { ar: "هَذَا مَسْجِدٌ جَمِيلٌ", translation: "Ini masjid yang indah.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "نَذْهَبُ إِلَى الْمَسْجِدِ", translation: "Kita pergi ke masjid.", grammarNote: "Logika: Tujuan ibadah." },
          { ar: "مَسْجِدٌ كَبِيرٌ", translation: "Masjid besar.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "بَابُ الْمَسْجِدِ", translation: "Pintu masjid.", grammarNote: "Logika: Struktur kepemilikan." },
          { ar: "الْمَسْجِدُ مَفْتُوحٌ", translation: "Masjidnya buka.", grammarNote: "Logika: Status operasional." },
          { ar: "نَحْنُ أَمَامَ الْمَسْجِدِ", translation: "Kami di depan masjid.", grammarNote: "Logika: Zharaf makan." },
          { ar: "مَسْجِدُ الْمَدِينَةِ", translation: "Masjid kota.", grammarNote: "Logika: Idhafah." },
          { ar: "أُحِبُّ الْمَسْجِدَ", translation: "Saya mencintai masjid.", grammarNote: "Logika: Objek (nashab)." }
        ]
      },
      {
        id: "l2_4_c19",
        wordAr: "مَشْرِقٌ",
        translation: "Timur / Tempat Terbit",
        description: "Isim Makan/Zaman dari Syaraqa (Terbit). Pola Maf'il.",
        category: "Arah",
        examples: [
          { ar: "الشَّمْسُ تَطْلُعُ مِنَ الْمَشْرِقِ", translation: "Matahari terbit dari timur.", grammarNote: "Logika: Isim Makan pola Maf'il." },
          { ar: "أَيْنَ الْمَشْرِقُ؟", translation: "Di mana arah timur?", grammarNote: "Logika: Menanyakan arah." },
          { ar: "بِلَادُ الْمَشْرِقِ", translation: "Negara-negara timur.", grammarNote: "Logika: Idhafah wilayah." },
          { ar: "الْمَشْرِقُ بَعِيدٌ", translation: "Timur itu jauh.", grammarNote: "Logika: Keterangan posisi." },
          { ar: "مِنَ الْمَشْرِقِ إِلَى الْمَغْرِبِ", translation: "Dari timur ke barat.", grammarNote: "Logika: Pasangan antonim." },
          { ar: "هَذَا مَشْرِقُ الشَّمْسِ", translation: "Ini tempat terbit matahari.", grammarNote: "Logika: Idhafah." },
          { ar: "الْمَشْرِقُ الْعَرَبِيُّ", translation: "Masyriq Arab.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "أَنْظُرُ إِلَى الْمَشْرِقِ", translation: "Saya melihat ke arah timur.", grammarNote: "Logika: Arah pandang." },
          { ar: "مَشْرِقٌ جَمِيلٌ", translation: "Timur yang indah.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "الْمَشْرِقُ نُورٌ", translation: "Timur adalah cahaya.", grammarNote: "Logika: Metafora." }
        ]
      },
      {
        id: "l2_4_c20",
        wordAr: "مَغْرِبٌ",
        translation: "Barat / Waktu Maghrib",
        description: "Isim Makan/Zaman dari Gharaba (Terbenam). Pola Maf'il.",
        category: "Arah/Waktu",
        examples: [
          { ar: "أُصَلِّي الْمَغْرِبَ", translation: "Saya shalat maghrib.", grammarNote: "Logika: Isim Zaman pola Maf'il." },
          { ar: "الشَّمْسُ تَغْرُبُ فِي الْمَغْرِبِ", translation: "Matahari terbenam di barat.", grammarNote: "Logika: Isim Makan." },
          { ar: "بِلَادُ الْمَغْرِبِ", translation: "Negara Maroko/Barat.", grammarNote: "Logika: Nama geografis." },
          { ar: "الْمَوْعِدُ عِنْدَ الْمَغْرِبِ", translation: "Janjinya waktu maghrib.", grammarNote: "Logika: Keterangan waktu." },
          { ar: "أَيْنَ الْمَغْرِبُ؟", translation: "Di mana arah barat?", grammarNote: "Logika: Menanyakan arah." },
          { ar: "مَغْرِبٌ بَعِيدٌ", translation: "Barat yang jauh.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "صَلَاةُ الْمَغْرِبِ", translation: "Shalat maghrib.", grammarNote: "Logika: Idhafah ibadah." },
          { ar: "الْمَغْرِبُ جَمِيلٌ", translation: "Waktu maghrib itu indah.", grammarNote: "Logika: Sifat kondisi." },
          { ar: "رَأَيْتُ الشَّمْسَ فِي الْمَغْرِبِ", translation: "Saya melihat matahari di barat.", grammarNote: "Logika: Keterangan tempat." },
          { ar: "وَقْتُ الْمَغْرِبِ", translation: "Waktu maghrib.", grammarNote: "Logika: Penegasan waktu." }
        ]
      },
      {
        id: "l2_4_c21",
        wordAr: "سَفَرٌ",
        translation: "Perjalanan / Bepergian",
        description: "Aktivitas bepergian dari satu tempat ke tempat lain.",
        category: "Perjalanan",
        examples: [
          { ar: "السَّفَرُ مُفِيدٌ", translation: "Perjalanan itu bermanfaat.", grammarNote: "Logika: Isim masdar." },
          { ar: "أُحِبُّ السَّفَرَ", translation: "Saya suka bepergian.", grammarNote: "Logika: Objek hobi." },
          { ar: "دُعَاءُ السَّفَرِ", translation: "Doa perjalanan.", grammarNote: "Logika: Idhafah." },
          { ar: "سَفَرٌ طَوِيلٌ", translation: "Perjalanan yang lama.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "مَوْعِدُ السَّفَرِ", translation: "Jadwal keberangkatan.", grammarNote: "Logika: Isim Zaman + Benda." },
          { ar: "أَنَا مُسْتَعِدٌّ لِلسَّفَرِ", translation: "Saya siap untuk bepergian.", grammarNote: "Logika: Preposisi 'Li'." },
          { ar: "السَّفَرُ بِالطَّائِرَةِ", translation: "Bepergian dengan pesawat.", grammarNote: "Logika: Metode transpor." },
          { ar: "سَفَرٌ سَعِيدٌ", translation: "Selamat jalan (perjalanan bahagia).", grammarNote: "Logika: Ucapan selamat." },
          { ar: "كِتَابُ السَّفَرِ", translation: "Buku perjalanan.", grammarNote: "Logika: Struktur kepemilikan." },
          { ar: "السَّفَرُ لَيْلًا", translation: "Bepergian di malam hari.", grammarNote: "Logika: Zharaf zaman." }
        ]
      },
      {
        id: "l2_4_c22",
        wordAr: "مُسَافِرٌ",
        translation: "Penumpang / Traveler",
        description: "Orang yang sedang melakukan perjalanan.",
        category: "Orang",
        examples: [
          { ar: "الْمُسَافِرُ تَعْبَانٌ", translation: "Penumpang itu lelah.", grammarNote: "Logika: Isim Fa'il mudzakkar." },
          { ar: "أَنَا مُسَافِرٌ إِلَى مَكَّةَ", translation: "Saya sedang bepergian ke Mekkah.", grammarNote: "Logika: Identitas diri." },
          { ar: "هَلْ أَنْتَ مُسَافِرٌ؟", translation: "Apakah kamu seorang musafir?", grammarNote: "Logika: Kata tanya identitas." },
          { ar: "الْمُسَافِرُونَ فِي الصَّالَةِ", translation: "Para penumpang di lounge.", grammarNote: "Logika: Jamak mudzakkar salim." },
          { ar: "سَاعَدْتُ الْمُسَافِرَ", translation: "Saya membantu penumpang itu.", grammarNote: "Logika: Objek (nashab)." },
          { ar: "مُسَافِرٌ كَرِيمٌ", translation: "Traveler yang mulia/baik.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "دُعَاءُ الْمُسَافِرِ مُسْتَجَابٌ", translation: "Doa musafir itu dikabulkan.", grammarNote: "Logika: Konteks religius." },
          { ar: "الْمُسَافِرَةُ تَحْمِلُ حَقِيبَةً", translation: "Penumpang (P) membawa tas.", grammarNote: "Logika: Gender muannats." },
          { ar: "تَذْكِرَةُ الْمُسَافِرِ", translation: "Tiket penumpang.", grammarNote: "Logika: Idhafah." },
          { ar: "الْمُسَافِرُ جَالِسٌ", translation: "Penumpang itu sedang duduk.", grammarNote: "Logika: Khabar isim fa'il." }
        ]
      },
      {
        id: "l2_4_c23",
        wordAr: "سَائِقٌ",
        translation: "Sopir",
        description: "Orang yang mengendarai kendaraan.",
        category: "Orang",
        examples: [
          { ar: "السَّائِقُ يَنْتَظِرُ", translation: "Sopirnya sedang menunggu.", grammarNote: "Logika: Mubtada mudzakkar." },
          { ar: "أَيْنَ السَّائِقُ؟", translation: "Di mana sopirnya?", grammarNote: "Logika: Menanyakan orang." },
          { ar: "تَكَلَّمْتُ مَعَ السَّائِقِ", translation: "Saya berbicara dengan sopir.", grammarNote: "Logika: Preposisi 'Ma'a'." },
          { ar: "سَائِقُ التَّاكْسِي", translation: "Sopir taksi.", grammarNote: "Logika: Idhafah profesi." },
          { ar: "السَّائِقُ مَاهِرٌ", translation: "Sopirnya mahir.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "سَائِقٌ جَدِيدٌ", translation: "Sopir baru.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "نَادِ السَّائِقَ", translation: "Panggillah sopirnya.", grammarNote: "Logika: Fi'il amar." },
          { ar: "السَّائِقُ أَمَامَ السَّيَّارَةِ", translation: "Sopir ada di depan mobil.", grammarNote: "Logika: Zharaf makan." },
          { ar: "سَائِقٌ طَيِّبٌ", translation: "Sopir yang baik.", grammarNote: "Logika: Sifat moral." },
          { ar: "اسْمُ السَّائِقِ خَالِدٌ", translation: "Nama sopir itu Khalid.", grammarNote: "Logika: Struktur identitas." }
        ]
      },
      {
        id: "l2_4_c24",
        wordAr: "سَيَّارَةُ الْأُجْرَةِ",
        translation: "Taksi",
        description: "Mobil sewaan untuk transportasi publik.",
        category: "Transportasi",
        examples: [
          { ar: "أُرِيدُ سَيَّارَةَ أُجْرَةٍ", translation: "Saya ingin taksi.", grammarNote: "Logika: Idhafah (M). Taksi sewaan." },
          { ar: "أَيْنَ سَيَّارَةُ الْأُجْرَةِ؟", translation: "Di mana taksinya?", grammarNote: "Logika: Menanyakan kendaraan." },
          { ar: "رَكِبْتُ سَيَّارَةَ الْأُجْرَةِ", translation: "Saya naik taksi.", grammarNote: "Logika: Fi'il madi + Objek." },
          { ar: "سَيَّارَةُ الْأُجْرَةِ غَالِيَةٌ", translation: "Taksi itu mahal.", grammarNote: "Logika: Sifat muannats (Sayyarah)." },
          { ar: "طَلَبْتُ سَيَّارَةَ أُجْرَةٍ", translation: "Saya memesan taksi.", grammarNote: "Logika: Aktivitas layanan." },
          { ar: "سَيَّارَةُ أُجْرَةٍ بَيْضَاءُ", translation: "Taksi putih.", grammarNote: "Logika: Warna muannats." },
          { ar: "نَحْنُ فِي سَيَّارَةِ الْأُجْرَةِ", translation: "Kami di dalam taksi.", grammarNote: "Logika: Keterangan posisi." },
          { ar: "سَائِقُ سَيَّارَةِ الْأُجْرَةِ", translation: "Sopir taksi.", grammarNote: "Logika: Idhafah bertingkat." },
          { ar: "سَيَّارَةُ أُجْرَةٍ سَرِيعَةٌ", translation: "Taksi yang cepat.", grammarNote: "Logika: Na'at muannats." },
          { ar: "هَذِهِ سَيَّارَةُ أُجْرَةٍ", translation: "Ini adalah taksi.", grammarNote: "Logika: Isim isyarah (F)." }
        ]
      },
      {
        id: "l2_4_c25",
        wordAr: "رِحْلَةٌ",
        translation: "Perjalanan / Liburan",
        description: "Kegiatan bepergian dengan tujuan tertentu.",
        category: "Perjalanan",
        examples: [
          { ar: "رِحْلَةٌ سَعِيدَةٌ", translation: "Semoga perjalanan menyenangkan.", grammarNote: "Logika: Sifat muannats (ucapan)." },
          { ar: "كَانَتِ الرِّحْلَةُ جَمِيلَةً", translation: "Perjalanannya dulu menyenangkan.", grammarNote: "Logika: Isim 'Kaana' muannats." },
          { ar: "أَيْنَ الرِّحْلَةُ؟", translation: "Di mana (ke mana) perjalanannya?", grammarNote: "Logika: Menanyakan tujuan." },
          { ar: "رِحْلَةُ السَّفَرِ", translation: "Perjalanan safar.", grammarNote: "Logika: Idhafah." },
          { ar: "نَحْنُ فِي رِحْلَةٍ", translation: "Kami sedang dalam perjalanan.", grammarNote: "Logika: Keterangan aktivitas." },
          { ar: "رِحْلَةٌ طَوِيلَةٌ", translation: "Perjalanan yang panjang.", grammarNote: "Logika: Na'at muannats." },
          { ar: "مَوْعِدُ الرِّحْلَةِ", translation: "Jadwal perjalanan.", grammarNote: "Logika: Isim Zaman." },
          { ar: "رِحْلَةٌ إِلَى الْقَرْيَةِ", translation: "Perjalanan ke desa.", grammarNote: "Logika: Keterangan arah." },
          { ar: "تَذْكِرَةُ الرِّحْلَةِ", translation: "Tiket perjalanan.", grammarNote: "Logika: Kepemilikan dokumen." },
          { ar: "رِحْلَةٌ مُمْتِعَةٌ", translation: "Liburan yang asyik.", grammarNote: "Logika: Sifat (kualitas)." }
        ]
      },
      {
        id: "l2_4_c26",
        wordAr: "مَحَطَّةٌ",
        translation: "Stasiun / Halte / Terminal",
        description: "Tempat pemberhentian kendaraan umum.",
        category: "Tempat",
        examples: [
          { ar: "أَنَا فِي الْمَحَطَّةِ", translation: "Saya di stasiun.", grammarNote: "Logika: Keterangan tempat." },
          { ar: "مَحَطَّةُ الْقِطَارِ", translation: "Stasiun kereta api.", grammarNote: "Logika: Idhafah." },
          { ar: "مَحَطَّةُ الْحَافِلَاتِ", translation: "Terminal bus.", grammarNote: "Logika: Idhafah jamak." },
          { ar: "أَيْنَ الْمَحَطَّةُ؟", translation: "Di mana stasiunnya?", grammarNote: "Logika: Kata tanya lokasi." },
          { ar: "الْمَحَطَّةُ بَعِيدَةٌ", translation: "Stasiunnya jauh.", grammarNote: "Logika: Sifat muannats." },
          { ar: "نَذْهَبُ إِلَى الْمَحَطَّةِ", translation: "Kita pergi ke stasiun.", grammarNote: "Logika: Tujuan arah." },
          { ar: "مَحَطَّةٌ كَبِيرَةٌ", translation: "Stasiun besar.", grammarNote: "Logika: Na'at muannats." },
          { ar: "وَصَلْتُ إِلَى الْمَحَطَّةِ", translation: "Saya tiba di stasiun.", grammarNote: "Logika: Fi'il madi." },
          { ar: "مَحَطَّةُ بَنْزِينٍ", translation: "Pom bensin.", grammarNote: "Logika: Isim tempat bahan bakar." },
          { ar: "الْمَحَطَّةُ مَزْدَحِمَةٌ", translation: "Stasiunnya ramai.", grammarNote: "Logika: Kondisi tempat." }
        ]
      },
      {
        id: "l2_4_c27",
        wordAr: "شَارِعٌ",
        translation: "Jalan",
        description: "Jalan raya tempat melintasnya kendaraan.",
        category: "Transportasi",
        examples: [
          { ar: "أَسْكُنُ فِي هَذَا الشَّارِعِ", translation: "Saya tinggal di jalan ini.", grammarNote: "Logika: Isim isyarah mudzakkar." },
          { ar: "الشَّارِعُ وَاسِعٌ", translation: "Jalannya luas.", grammarNote: "Logika: Mubtada mudzakkar." },
          { ar: "أَيْنَ الشَّارِعُ الرَّئِيسِيُّ؟", translation: "Di mana jalan utamanya?", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "شَارِعٌ طَوِيلٌ", translation: "Jalan yang panjang.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "الْفُنْدُقُ فِي الشَّارِعِ", translation: "Hotel ada di jalan (raya).", grammarNote: "Logika: Keterangan tempat." },
          { ar: "شَارِعٌ مَزْدَحِمٌ", translation: "Jalan macet.", grammarNote: "Logika: Kondisi lalu lintas." },
          { ar: "امْشِ فِي الشَّارِعِ", translation: "Berjalanlah di jalan.", grammarNote: "Logika: Fi'il amar." },
          { ar: "اسْمُ الشَّارِعِ", translation: "Nama jalan.", grammarNote: "Logika: Idhafah." },
          { ar: "شَارِعٌ نَظِيفٌ", translation: "Jalan yang bersih.", grammarNote: "Logika: Na'at nakirah." },
          { ar: "الْبَيْتُ قَرِيبٌ مِنَ الشَّارِعِ", translation: "Rumahnya dekat dari jalan.", grammarNote: "Logika: Hubungan jarak." }
        ]
      },
      {
        id: "l2_4_c28",
        wordAr: "بَوَّابَةٌ",
        translation: "Gerbang / Gate",
        description: "Pintu besar di bandara atau gedung.",
        category: "Bangunan",
        examples: [
          { ar: "بَوَّابَةُ الرَّقْمِ خَمْسَةٌ", translation: "Gerbang nomor lima.", grammarNote: "Logika: Identifikasi lokasi." },
          { ar: "أَيْنَ الْبَوَّابَةُ؟", translation: "Di mana gerbangnya?", grammarNote: "Logika: Tanya benda (F)." },
          { ar: "الْبَوَّابَةُ مَفْتُوحَةٌ", translation: "Gerbangnya terbuka.", grammarNote: "Logika: Khabar muannats." },
          { ar: "اذْهَبْ إِلَى الْبَوَّابَةِ", translation: "Pergilah ke gerbang.", grammarNote: "Logika: Instruksi arah." },
          { ar: "بَوَّابَةٌ كَبِيرَةٌ", translation: "Gerbang besar.", grammarNote: "Logika: Na'at muannats." },
          { ar: "نَحْنُ عِنْدَ الْبَوَّابَةِ", translation: "Kami di dekat gerbang.", grammarNote: "Logika: Zharaf." },
          { ar: "بَوَّابَةُ الْخُرُوجِ", translation: "Gerbang keluar.", grammarNote: "Logika: Idhafah (fungsi)." },
          { ar: "بَوَّابَةُ الدُّخُولِ", translation: "Gerbang masuk.", grammarNote: "Logika: Idhafah (fungsi)." },
          { ar: "هَذِهِ بَوَّابَةٌ جَدِيدَةٌ", translation: "Ini gerbang baru.", grammarNote: "Logika: Isim isyarah (F)." },
          { ar: "انْتَظِرْ عِنْدَ الْبَوَّابَةِ", translation: "Tunggulah di dekat gerbang.", grammarNote: "Logika: Fi'il amar." }
        ]
      },
      {
        id: "l2_4_c29",
        wordAr: "تَأْشِيرَةٌ",
        translation: "Visa",
        description: "Izin masuk ke sebuah negara.",
        category: "Dokumen",
        examples: [
          { ar: "أَحْتَاجُ إِلَى تَأْشِيرَةٍ", translation: "Saya butuh visa.", grammarNote: "Logika: Jar-majrur muannats." },
          { ar: "تَأْشِيرَةُ الزِّيَارَةِ", translation: "Visa kunjungan.", grammarNote: "Logika: Idhafah jenis visa." },
          { ar: "أَيْنَ التَّأْشِيرَةُ؟", translation: "Di mana visanya?", grammarNote: "Logika: Tanya dokumen (F)." },
          { ar: "تَأْشِيرَةٌ جَدِيدَةٌ", translation: "Visa baru.", grammarNote: "Logika: Sifat muannats." },
          { ar: "هَلْ عِنْدَكَ تَأْشِيرَةٌ؟", translation: "Apakah kamu punya visa?", grammarNote: "Logika: Pertanyaan kepemilikan." },
          { ar: "تَأْشِيرَةٌ طَوِيلَةُ الْمَدَى", translation: "Visa jangka panjang.", grammarNote: "Logika: Deskripsi durasi." },
          { ar: "دَفَعْتُ ثَمَنَ التَّأْشِيرَةِ", translation: "Saya membayar harga visa.", grammarNote: "Logika: Objek transaksi." },
          { ar: "تَأْشِيرَةٌ صَعْبَةٌ", translation: "Visa yang sulit (didapat).", grammarNote: "Logika: Na'at muannats." },
          { ar: "خُذِ التَّأْشِيرَةَ", translation: "Ambil visanya.", grammarNote: "Logika: Fi'il amar." },
          { ar: "تَأْشِيرَةُ الْعَمَلِ", translation: "Visa kerja.", grammarNote: "Logika: Idhafah kategori." }
        ]
      },
      {
        id: "l2_4_c30",
        wordAr: "رَسْمِيٌّ",
        translation: "Resmi / Formal",
        description: "Sifat untuk hal-hal yang berkaitan dengan otoritas atau aturan.",
        category: "Kualitas",
        examples: [
          { ar: "هَذَا جَوَازٌ رَسْمِيٌّ", translation: "Ini paspor resmi.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "مَوْعِدٌ رَسْمِيٌّ", translation: "Jadwal resmi.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "أوراقٌ رَسْمِيَّةٌ", translation: "Dokumen-dokumen resmi.", grammarNote: "Logika: Sifat muannats (jamak taksir)." },
          { ar: "هَلْ هَذَا رَسْمِيٌّ؟", translation: "Apakah ini resmi?", grammarNote: "Logika: Verifikasi status." },
          { ar: "تَكَلَّمْ بِكَلَامٍ رَسْمِيٍّ", translation: "Bicaralah dengan bahasa resmi.", grammarNote: "Logika: Sifat mengikuti majrur." },
          { ar: "زِيٌّ رَسْمِيٌّ", translation: "Seragam resmi.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "خِطَابٌ رَسْمِيٌّ", translation: "Surat resmi.", grammarNote: "Logika: Struktur dokumen." },
          { ar: "لَيْسَ رَسْمِيًّا", translation: "Bukan resmi.", grammarNote: "Logika: Negasi kondisi." },
          { ar: "قَرَارٌ رَسْمِيٌّ", translation: "Keputusan resmi.", grammarNote: "Logika: Sifat hukum." },
          { ar: "مَدْخَلٌ رَسْمِيٌّ", translation: "Pintu masuk resmi.", grammarNote: "Logika: Isim makan + Sifat." }
        ]
      }
    ],
    dialog: {
      title: "Hiwar: Di Resepsionis Hotel",
      speakerA: "RESEPSIONIS",
      speakerB: "TAMU",
      lines: [
        { speaker: "RESEPSIONIS", arabic: "أَهْلًا وَسَهْلًا بِكَ فِي فُنْدُقِنَا. كَيْفَ أُسَاعِدُكَ؟", translation: "Selamat datang di hotel kami. Ada yang bisa saya bantu?", note: "Penyambutan." },
        { speaker: "TAMU", arabic: "أُرِيدُ غُرْفَةً لِشَخْصٍ وَاحِدٍ، مِنْ فَضْلِكَ.", translation: "Saya ingin kamar untuk satu orang, tolong.", note: "Pemesanan kamar." },
        { speaker: "RESEPSIONIS", arabic: "هَلْ لَدَيْكَ مَوْعِدٌ (حَجْزٌ) سَابِقٌ؟", translation: "Apakah Anda memiliki janji (pesanan) sebelumnya?", note: "Tanya Isim Zaman." },
        { speaker: "TAMU", arabic: "نَعَمْ، هَذَا جَوَازُ سَفَرِي وَالتَّذْكِرَةُ.", translation: "Ya, ini paspor dan tiket saya.", note: "Menyerahkan dokumen." },
        { speaker: "RESEPSIONIS", arabic: "تَفَضَّلِ الْمِفْتَاحَ. غُرْفَتُكَ فِي الطَّابِقِ الثَّانِي.", translation: "Silakan kuncinya. Kamar Anda di lantai dua.", note: "Pemberian kunci." },
        { speaker: "TAMU", arabic: "شُكْرًا لَكَ. أَيْنَ مَطْعَمُ الْفُنْدُقِ؟", translation: "Terima kasih. Di mana restoran hotelnya?", note: "Tanya Isim Makan." },
        { speaker: "RESEPSIONIS", arabic: "الْمَطْعَمُ بِجَانِبِ الْمَدْخَلِ الرَّئِيسِيِّ.", translation: "Restoran ada di samping pintu masuk utama.", note: "Arah Isim Makan." },
        { speaker: "TAMU", arabic: "وَمَتَى مَوْعِدُ الْفَطُورِ غَدًا؟", translation: "Dan kapan waktu sarapan besok?", note: "Tanya Isim Zaman." },
        { speaker: "RESEPSIONIS", arabic: "الْمَوْعِدُ فِي السَّاعَةِ السَّادِسَةِ صَبَاحًا.", translation: "Waktunya jam enam pagi.", note: "Jawaban waktu." },
        { speaker: "TAMU", arabic: "مُمْتَازٌ. هَلْ يُوجَدُ مَصْعَدٌ قَرِيبٌ؟", translation: "Luar biasa. Apakah ada lift terdekat?", note: "Tanya fasilitas." },
        { speaker: "RESEPSIONIS", arabic: "نَعَمْ، الْمَصْعَدُ أَمَامَ الْمَكْتَبِ مُبَاشِرَةً.", translation: "Iya, liftnya tepat di depan meja/kantor ini.", note: "Posisi Isim Makan." },
        { speaker: "TAMU", arabic: "شُكْرًا جَزِيلًا عَلَى مُسَاعَدَتِكَ.", translation: "Terima kasih banyak atas bantuan Anda.", note: "Ungkapan syukur." },
        { speaker: "RESEPSIONIS", arabic: "عَفْوًا، رِحْلَةً سَعِيدَةً وَإِقَامَةً طَيِّبَةً.", translation: "Sama-sama, semoga perjalanan menyenangkan dan betah menginap.", note: "Doa penutup." }
      ]
    },
    quiz: [
      {
        id: "l2_4_q1",
        type: "multiple-choice",
        question: "Apa arti dari 'مَطَارٌ' (Mathaar)?",
        options: ["Restoran", "Bandara", "Hotel", "Kantor"],
        correctAnswer: "Bandara",
        explanation: "Mathaar adalah Isim Makan dari Thara (Terbang), yang berarti Bandara."
      },
      {
        id: "l2_4_q2",
        type: "multiple-choice",
        question: "Manakah wazan (pola) untuk Isim Makan dari kata 'Kataba-Yaktubu'?",
        options: ["مَفْعَلٌ", "مَفْعِلٌ", "فَاعِلٌ", "مَفْعُولٌ"],
        correctAnswer: "مَفْعَلٌ",
        explanation: "Karena Ain Fi'il Mudharinya Dhamma (Yaktubu), maka polanya Maf'al (Maktab)."
      },
      {
        id: "l2_4_q3",
        type: "multiple-choice",
        question: "Apa bahasa Arab dari 'Paspor'?",
        options: ["تَذْكِرَةٌ", "حَقِيبَةٌ", "جَوَازُ السَّفَرِ", "تَأْشِيرَةٌ"],
        correctAnswer: "جَوَازُ السَّفَرِ",
        explanation: "Jawaazus Safar berarti Paspor."
      },
      {
        id: "l2_4_q4",
        type: "multiple-choice",
        question: "Apa arti dari 'مَوْعِدٌ' (Maw'id)?",
        options: ["Tempat Berhenti", "Waktu / Janji temu", "Pintu Masuk", "Kamar"],
        correctAnswer: "Waktu / Janji temu",
        explanation: "Maw'id adalah Isim Zaman yang berarti waktu atau janji temu."
      },
      {
        id: "l2_4_q5",
        type: "multiple-choice",
        question: "Lengkapi kalimat: 'أَنَا أَشْتَرِي .... الطَّائِرَةِ' (Saya membeli tiket pesawat).",
        options: ["مِفْتَاحَ", "تَذْكِرَةَ", "حَقِيبَةَ", "جَوَازَ"],
        correctAnswer: "تَذْكِرَةَ",
        explanation: "Tadzkirah berarti tiket."
      },
      {
        id: "l2_4_q6",
        type: "multiple-choice",
        question: "Isim Makan dari 'Jalasa-Yajlisu' adalah...",
        options: ["مَجْلَسٌ", "مَجْلِسٌ", "جَالِسٌ", "مَجَالِسُ"],
        correctAnswer: "مَجْلِسٌ",
        explanation: "Karena Mudharinya Kasrah (Yajlisu), maka polanya Maf'il (Majlis)."
      },
      {
        id: "l2_4_q7",
        type: "multiple-choice",
        question: "Apa arti dari 'مَوْقِفُ السَّيَّارَاتِ'?",
        options: ["Pangkalan Taksi", "Terminal Bus", "Parkiran Mobil", "Jalan Raya"],
        correctAnswer: "Parkiran Mobil",
        explanation: "Mawqifus Sayyaraat berarti tempat parkir mobil."
      },
      {
        id: "l2_4_q8",
        type: "multiple-choice",
        question: "Manakah yang merupakan Isim Makan untuk 'Pintu Keluar'?",
        options: ["مَدْخَلٌ", "مَطْعَمٌ", "مَخْرَجٌ", "مَلْعَبٌ"],
        correctAnswer: "مَخْرَجٌ",
        explanation: "Makhraj (dari Kharaja) berarti pintu keluar."
      },
      {
        id: "l2_4_q9",
        type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Hotel'?",
        options: ["بَيْتٌ", "مَدْرَسَةٌ", "فُنْدُقٌ", "مَطَارٌ"],
        correctAnswer: "فُنْدُقٌ",
        explanation: "Funduq berarti hotel."
      },
      {
        id: "l2_4_q10",
        type: "multiple-choice",
        question: "Apa arti 'رِحْلَةٌ سَعِيدَةٌ'?",
        options: ["Selamat Datang", "Selamat Pagi", "Selamat Jalan / Perjalanan Menyenangkan", "Selamat Belajar"],
        correctAnswer: "Selamat Jalan / Perjalanan Menyenangkan",
        explanation: "Rihlah Sa'idah adalah ucapan untuk orang yang bepergian."
      },
      {
        id: "l2_4_q11",
        type: "multiple-choice",
        question: "Isim Makan dari 'Waqafa' (Berhenti) adalah 'Mawqif' karena...",
        options: ["Fi'il Mudharinya Fathah", "Fi'il asalnya Mithal (Wawu di depan)", "Fi'il Mudharinya Dhamma", "Bentuknya jamak"],
        correctAnswer: "Fi'il asalnya Mithal (Wawu di depan)",
        explanation: "Fi'il Mithal Wawi (huruf Wawu di awal) diderivasi menggunakan pola Maf'il (Mawqif)."
      },
      {
        id: "l2_4_q12",
        type: "multiple-choice",
        question: "Apa arti 'مَطْعَمٌ'?",
        options: ["Dapur", "Restoran", "Pasar", "Toko"],
        correctAnswer: "Restoran",
        explanation: "Math'am adalah tempat makan atau restoran."
      },
      {
        id: "l2_4_q13",
        type: "multiple-choice",
        question: "Lengkapi: 'أَيْنَ .... الْفُنْدُقِ؟' (Di mana kunci hotel?)",
        options: ["تَذْكِرَةُ", "مِفْتَاحُ", "جَوَازُ", "مَطَارُ"],
        correctAnswer: "مِفْتَاحُ",
        explanation: "Miftaah berarti kunci."
      },
      {
        id: "l2_4_q14",
        type: "multiple-choice",
        question: "Apa arti 'مُسَافِرٌ'?",
        options: ["Sopir", "Petugas", "Penumpang / Traveler", "Pelayan"],
        correctAnswer: "Penumpang / Traveler",
        explanation: "Musafir adalah orang yang bepergian."
      },
      {
        id: "l2_4_q15",
        type: "multiple-choice",
        question: "Isim Makan dari 'Dakhala' (Masuk) adalah...",
        options: ["مَدْخَلٌ", "مَدْخِلٌ", "دَاخِلٌ", "مُدْخَلٌ"],
        correctAnswer: "مَدْخَلٌ",
        explanation: "Dakhala-Yadkhulu (Dhamma) -> Maf'al (Madkhal)."
      },
      {
        id: "l2_4_q16",
        type: "multiple-choice",
        question: "Apa arti 'مَشْرِقٌ'?",
        options: ["Barat", "Timur", "Utara", "Selatan"],
        correctAnswer: "Timur",
        explanation: "Masyriq adalah arah timur (tempat terbit matahari)."
      },
      {
        id: "l2_4_q17",
        type: "multiple-choice",
        question: "Apa bahasa Arabnya 'Sopir'?",
        options: ["مُوَظَّفٌ", "سَائِقٌ", "طَبِيبٌ", "مُدَرِّسٌ"],
        correctAnswer: "سَائِقٌ",
        explanation: "Saa'iq berarti sopir."
      },
      {
        id: "l2_4_q18",
        type: "multiple-choice",
        question: "Lengkapi: 'أَنَا فِي .... الْقِطَارِ' (Saya di stasiun kereta).",
        options: ["مَطَارِ", "مَحَطَّةِ", "مَطْعَمِ", "مَكْتَبِ"],
        correctAnswer: "مَحَطَّةِ",
        explanation: "Mahathah berarti stasiun."
      },
      {
        id: "l2_4_q19",
        type: "multiple-choice",
        question: "Apa arti 'مَغْرِبٌ' sebagai Isim Zaman?",
        options: ["Arah Barat", "Waktu Matahari Terbenam", "Pagi Hari", "Tengah Malam"],
        correctAnswer: "Waktu Matahari Terbenam",
        explanation: "Maghrib sebagai Isim Zaman merujuk pada waktu terbenamnya matahari."
      },
      {
        id: "l2_4_q20",
        type: "multiple-choice",
        question: "Manakah Isim Makan dari 'Sajada' (Sujud) yang merupakan pengecualian?",
        options: ["مَسْجَدٌ", "مَسْجِدٌ", "مُسَجَّدٌ", "مَسَاجِدُ"],
        correctAnswer: "مَسْجِدٌ",
        explanation: "Secara aturan harusnya Masjad, tapi orang Arab menggunakan Masjid (pengecualian)."
      },
      {
        id: "l2_4_q21",
        type: "multiple-choice",
        question: "Apa arti 'تَأْشِيرَةٌ'?",
        options: ["Paspor", "Visa", "Tiket", "KTP"],
        correctAnswer: "Visa",
        explanation: "Ta'syirah berarti visa."
      },
      {
        id: "l2_4_q22",
        type: "multiple-choice",
        question: "Lengkapi: 'هَذِهِ .... ثَقِيلَةٌ' (Koper ini berat).",
        options: ["مَحَطَّةٌ", "حَقِيبَةٌ", "طَائِرَةٌ", "غُرْفَةٌ"],
        correctAnswer: "حَقِيبَةٌ",
        explanation: "Haqibah berarti tas atau koper."
      },
      {
        id: "l2_4_q23",
        type: "multiple-choice",
        question: "Isim Makan dari 'La'iba-Yall'abu' (Bermain) adalah...",
        options: ["مَلْعَبٌ", "مَلْعِبٌ", "لَاعِبٌ", "مُلَعَّبٌ"],
        correctAnswer: "مَلْعَبٌ",
        explanation: "Karena Mudharinya Fathah (Yall'abu), maka Maf'al (Mal'ab)."
      },
      {
        id: "l2_4_q24",
        type: "multiple-choice",
        question: "Apa arti 'مَكْتَبٌ'?",
        options: ["Buku", "Meja / Kantor", "Sekolah", "Perpustakaan"],
        correctAnswer: "Meja / Kantor",
        explanation: "Maktab berarti meja atau kantor."
      },
      {
        id: "l2_4_q25",
        type: "multiple-choice",
        question: "Pilih kata yang berarti 'Lift':",
        options: ["مَصْعَدٌ", "مِفْتَاحٌ", "مَوْقِفٌ", "مَدْخَلٌ"],
        correctAnswer: "مَصْعَدٌ",
        explanation: "Mash'ad (Isim Makan dari naik) berarti lift."
      },
      {
        id: "l2_4_q26",
        type: "multiple-choice",
        question: "Apa arti 'رَسْمِيٌّ'?",
        options: ["Bebas", "Resmi / Formal", "Kuno", "Cepat"],
        correctAnswer: "Resmi / Formal",
        explanation: "Rasmiyyun berarti resmi."
      },
      {
        id: "l2_4_q27",
        type: "multiple-choice",
        question: "Manakah yang merupakan Isim Makan untuk 'Tempat Memasak'?",
        options: ["مَطْبَخٌ", "مَطْبِخٌ", "طَبَّاخٌ", "مَطَارٌ"],
        correctAnswer: "مَطْبَخٌ",
        explanation: "Mathbakh (pola Maf'al) berarti dapur."
      },
      {
        id: "l2_4_q28",
        type: "multiple-choice",
        question: "Lengkapi: 'سَيَّارَةُ ....' (Taksi)",
        options: ["السَّفَرِ", "الْأُجْرَةِ", "الْمَطَارِ", "الْفُنْدُقِ"],
        correctAnswer: "الْأُجْرَةِ",
        explanation: "Sayyaaratul Ujrah berarti taksi."
      },
      {
        id: "l2_4_q29",
        type: "multiple-choice",
        question: "Pola 'Maf'al' digunakan jika Ain Fi'il Mudhari berharakat...",
        options: ["Kasrah", "Fathah atau Dhammah", "Sukun", "Tanwin"],
        correctAnswer: "Fathah atau Dhammah",
        explanation: "Maf'al digunakan untuk Fi'il yang Mudharinya berakhiran Fathah atau Dhammah pada Ain Fi'ilnya."
      },
      {
        id: "l2_4_q30",
        type: "multiple-choice",
        question: "Apa arti 'مَوْقِفُ الْحَافِلَةِ'?",
        options: ["Parkiran Mobil", "Halte Bus", "Stasiun Kereta", "Landasan Pesawat"],
        correctAnswer: "Halte Bus",
        explanation: "Mawqiful Haafilah berarti pemberhentian bus atau halte."
      }
    ]
  }
};
