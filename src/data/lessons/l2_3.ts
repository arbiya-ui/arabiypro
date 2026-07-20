import { Lesson } from "../../types";

export const l2_3: Lesson = {
  id: "l2_3",
  level: 2,
  bab: 3,
  title: "BAB 3: AT-TASAWWUQ (Belanja)",
  titleAr: "التَّسَوُّقُ",
  description: "Pelajari seni transaksi di pasar, menawar harga, dan menguasai aturan bilangan (Adad wa Ma'dud) untuk jumlah barang.",
  xpReward: 40,
  isCompleted: false,
  isLocked: false,
  type: "conversation",
  content: {
    introduction: "Langkah Anda semakin mantap! Setelah bisa menggerakkan kalimat dengan kata kerja dan mewarnainya dengan kata sifat, kini saatnya kita terjun ke lapangan di Bab 3: At-Tasawwuq (Belanja). Ingatlah betapa sederhananya Anda menyebutkan benda-benda di Level 1; kini kita akan belajar bagaimana melakukan transaksi nyata, menawar harga, dan mengelola angka dengan fasih. Belajar bahasa Arab itu mudah karena ia sangat praktis dan ada di setiap sudut pasar.\n\nDi bab ini, kita akan mempelajari seni 'Adad wa Ma'dud'—sebuah rahasia unik dalam menyebutkan jumlah barang. Anda akan merasa bangga saat bisa membeli barang favorit Anda sambil bercakap-cakap dengan penjual menggunakan bahasa Arab yang rapi. Semangat! Karena setelah mahir bertransaksi, kita akan belajar cara menempuh perjalanan jauh di bab selanjutnya!",
    introTitle: "Seni Bertransaksi dan Rahasia Bilangan di Pasar",
    introVerse: {
      ar: "وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا",
      translation: "...Padahal Allah telah menghalalkan jual beli dan mengharamkan riba... (QS. Al-Baqarah: 275)"
    },
    introBadges: [
      { icon: "💰", text: "MASTER TRANSAKSI (Mahir Jual Beli & Tawar Menawar)" },
      { icon: "🔢", text: "AHLI BILANGAN (Menguasai Aturan Angka 1-10)" }
    ],
    totalSentencesDisplay: "285 Kalimat Transaksi",
    cards: [
      // KELOMPOK 1 — KATA BENDA & SATUAN (1-15)
      {
        id: "l2_3_c1",
        wordAr: "ثَمَنٌ",
        translation: "Harga",
        description: "Nilai tukar yang ditetapkan untuk suatu barang.",
        category: "Istilah Bisnis",
        examples: [
          { ar: "كَمِ الثَّمَنُ لِهَذَا الْقَمِيصِ؟", translation: "Berapa harga kemeja ini?", grammarNote: "Logika: Bertanya harga menggunakan 'Kam'." },
          { ar: "الثَّمَنُ غَالٍ جِدًّا", translation: "Harganya sangat mahal.", grammarNote: "Logika: Sifat Ghaalin (Mahal) mengikuti benda mudzakkar." },
          { ar: "هَلْ هَذَا ثَمَنٌ رَخِيصٌ؟", translation: "Apakah ini harga yang murah?", grammarNote: "Logika: Na'at-Man'ut nakirah mudzakkar." },
          { ar: "دَفَعْتُ ثَمَنًا مُنَاسِبًا", translation: "Saya membayar harga yang sesuai.", grammarNote: "Logika: Sifat mengikuti harakat nashab." },
          { ar: "الثَّمَنُ مَكْتُوبٌ عَلَى الْوَرَقَةِ", translation: "Harganya tertulis di kertas.", grammarNote: "Logika: Deskripsi posisi informasi." },
          { ar: "نَزَلَ الثَّمَنُ الْيَوْمَ", translation: "Harganya turun hari ini.", grammarNote: "Logika: Keterangan waktu dalam transaksi." },
          { ar: "أُرِيدُ ثَمَنًا أَقَلَّ", translation: "Saya ingin harga yang lebih rendah.", grammarNote: "Logika: Isim Tafdhil 'Aqalla' untuk perbandingan harga." },
          { ar: "الثَّمَنُ ثَابِتٌ لَا فِيهِ تَخْفِيضٌ", translation: "Harganya pas, tidak ada diskon.", grammarNote: "Logika: Penegasan harga tetap." },
          { ar: "ارْتَفَعَ الثَّمَنُ كَثِيرًا", translation: "Harganya naik banyak.", grammarNote: "Logika: Dinamika pasar." },
          { ar: "أَعْطِنِي الثَّمَنَ النِّهَائِيَّ", translation: "Berikan saya harga akhirnya.", grammarNote: "Logika: Na'at ma'rifah mudzakkar." }
        ]
      },
      {
        id: "l2_3_c2",
        wordAr: "نُقُودٌ",
        translation: "Uang",
        description: "Alat tukar resmi dalam transaksi (jamak dari Naqd).",
        category: "Istilah Bisnis",
        examples: [
          { ar: "مَعِي نُقُودٌ كَثِيرَةٌ", translation: "Saya membawa uang banyak.", grammarNote: "Logika: Jamak taksir benda mati dianggap muannats, maka sifatnya 'Katsirah'." },
          { ar: "أَيْنَ النُّقُودُ؟", translation: "Di mana uangnya?", grammarNote: "Logika: Bertanya keberadaan benda." },
          { ar: "هَذِهِ نُقُودٌ وَرَقِيَّةٌ", translation: "Ini adalah uang kertas.", grammarNote: "Logika: Sifat muannats untuk jamak benda." },
          { ar: "ضَاعَتِ النُّقُودُ فِي السُّوقِ", translation: "Uangnya hilang di pasar.", grammarNote: "Logika: Fi'il muannats mengikuti subjek jamak taksir." },
          { ar: "أَحْتَاجُ إِلَى نُقُودٍ مَعْدَنِيَّةٍ", translation: "Saya butuh uang koin (logam).", grammarNote: "Logika: Sifat muannats mengikuti i'rab majrur." },
          { ar: "هَلْ عِنْدَكَ نُقُودٌ؟", translation: "Apakah kamu punya uang?", grammarNote: "Logika: Menggunakan 'Indaka' untuk kepemilikan sementara." },
          { ar: "دَفَعْتُ النُّقُودَ لِلْبَائِعِ", translation: "Saya memberikan uang kepada penjual.", grammarNote: "Logika: Objek transaksi (maf'ul bih)." },
          { ar: "النُّقُودُ فِي الْمِحْفَظَةِ", translation: "Uangnya ada di dalam dompet.", grammarNote: "Logika: Keterangan tempat." },
          { ar: "صَرَفْتُ النُّقُودَ", translation: "Saya menukarkan uang.", grammarNote: "Logika: Kata kerja khusus penukaran." },
          { ar: "لَا تَلْعَبْ بِالنُّقُودِ", translation: "Jangan bermain dengan uang.", grammarNote: "Logika: Larangan penggunaan salah." }
        ]
      },
      {
        id: "l2_3_c3",
        wordAr: "بَاقِي",
        translation: "Kembalian / Sisa",
        description: "Sisa uang setelah pembayaran.",
        category: "Istilah Bisnis",
        examples: [
          { ar: "خُذِ الْبَاقِيَ يَا سَيِّدِي", translation: "Ambil kembaliannya wahai tuan.", grammarNote: "Logika: Pemberian sisa uang." },
          { ar: "أَيْنَ الْبَاقِي؟", translation: "Di mana kembaliannya?", grammarNote: "Logika: Menanyakan hak pembeli." },
          { ar: "الْبَاقِي خَمْسَةُ آلَافِ رُوبِيَّةٍ", translation: "Sisa kembaliannya lima ribu rupiah.", grammarNote: "Logika: Menyebutkan jumlah sisa." },
          { ar: "نَسِيَ الْبَائِعُ الْبَاقِيَ", translation: "Penjual lupa memberikan kembalian.", grammarNote: "Logika: Kejadian dalam pasar." },
          { ar: "هَذَا بَاقِي النُّقُودِ", translation: "Ini sisa uangnya.", grammarNote: "Logika: Idhafah (Mudhaf-Mudhaf Ilaihi)." },
          { ar: "لَا يُوجَدُ بَاقِي", translation: "Tidak ada kembalian (uang pas).", grammarNote: "Logika: Kondisi transaksi." },
          { ar: "أَعْطِنِي الْبَاقِي مِنْ فَضْلِكَ", translation: "Tolong berikan kembalian saya.", grammarNote: "Logika: Permintaan sopan." },
          { ar: "الْبَاقِي لَكَ", translation: "Sisa/kembaliannya untukmu (sedekah/tips).", grammarNote: "Logika: Pemberian sukarela." },
          { ar: "كَمِ الْبَاقِي؟", translation: "Berapa kembaliannya?", grammarNote: "Logika: Menanyakan nilai sisa." },
          { ar: "حَسَبْتُ الْبَاقِيَ جَيِّدًا", translation: "Saya menghitung kembaliannya dengan baik.", grammarNote: "Logika: Ketelitian transaksi." }
        ]
      },
      {
        id: "l2_3_c4",
        wordAr: "تَخْفِيضٌ",
        translation: "Diskon / Potongan Harga",
        description: "Pengurangan harga dari nilai asli.",
        category: "Istilah Bisnis",
        examples: [
          { ar: "هَلْ هُنَاكَ تَخْفِيضٌ؟", translation: "Apakah ada diskon?", grammarNote: "Logika: Pertanyaan favorit pembeli." },
          { ar: "أُرِيدُ تَخْفِيضًا كَبِيرًا", translation: "Saya ingin diskon besar.", grammarNote: "Logika: Na'at-Man'ut nakirah mudzakkar." },
          { ar: "التَّخْفِيضُ خَمْسُونَ بِالْمِائَةِ", translation: "Diskonnya lima puluh persen.", grammarNote: "Logika: Menyebutkan persentase." },
          { ar: "هَذَا التَّخْفِيضُ لِلْمَلَابِسِ", translation: "Diskon ini untuk pakaian.", grammarNote: "Logika: Pengkhususan barang." },
          { ar: "مَوْسِمُ التَّخْفِيضَاتِ", translation: "Musim diskon/obral.", grammarNote: "Logika: Idhafah jamak." },
          { ar: "لَا يُوجَدُ تَخْفِيضٌ لِهَذَا", translation: "Tidak ada diskon untuk barang ini.", grammarNote: "Logika: Negasi ketersediaan." },
          { ar: "بَعْدَ التَّخْفِيضِ يَصِيرُ السِّعْرُ رَخِيصًا", translation: "Setelah diskon, harganya jadi murah.", grammarNote: "Logika: Dampak potongan harga." },
          { ar: "التَّخْفِيضُ يَنْتَهِي غَدًا", translation: "Diskonnya berakhir besok.", grammarNote: "Logika: Keterangan waktu." },
          { ar: "تَخْفِيضٌ خَاصٌّ لَكَ", translation: "Diskon khusus untukmu.", grammarNote: "Logika: Na'at nakirah." },
          { ar: "كَمْ نِسْبَةُ التَّخْفِيضِ؟", translation: "Berapa persentase diskonnya?", grammarNote: "Logika: Pertanyaan detail." }
        ]
      },
      {
        id: "l2_3_c5",
        wordAr: "كَاشِير",
        translation: "Kasir",
        description: "Tempat atau orang yang melayani pembayaran.",
        category: "Lokasi",
        examples: [
          { ar: "أَيْنَ الْكَاشِيرُ؟", translation: "Di mana kasirnya?", grammarNote: "Logika: Mencari tempat bayar." },
          { ar: "ادْفَعِ النُّقُودَ عِنْدَ الْكَاشِيرِ", translation: "Bayarlah uangnya di kasir.", grammarNote: "Logika: Instruksi pembayaran." },
          { ar: "طَابُورٌ طَوِيلٌ أَمَامَ الْكَاشِيرِ", translation: "Antrean panjang di depan kasir.", grammarNote: "Logika: Kondisi toko." },
          { ar: "الْكَاشِيرُ مُغْلَقٌ", translation: "Kasirnya tutup.", grammarNote: "Logika: Status layanan." },
          { ar: "يَعْمَلُ أَخِي كَاشِيرًا", translation: "Saudaraku bekerja sebagai kasir.", grammarNote: "Logika: Profesi (Haal/Maf'ul)." },
          { ar: "الْكَاشِيرُ نَشِيطٌ", translation: "Kasirnya rajin.", grammarNote: "Logika: Sifat orang mudzakkar." },
          { ar: "اذْهَبْ إِلَى الْكَاشِيرِ", translation: "Pergilah ke kasir.", grammarNote: "Logika: Perintah arah." },
          { ar: "جَلَسَ الْكَاشِيرُ عَلَى الْكُرْسِيِّ", translation: "Kasir duduk di atas kursi.", grammarNote: "Logika: Deskripsi posisi." },
          { ar: "سَأَلْتُ الْكَاشِيرَ عَنِ الثَّمَنِ", translation: "Saya bertanya pada kasir tentang harganya.", grammarNote: "Logika: Interaksi pembeli." },
          { ar: "الْكَاشِيرُ أَمِينٌ", translation: "Kasirnya jujur/amanah.", grammarNote: "Logika: Kualitas profesi." }
        ]
      },
      {
        id: "l2_3_c6",
        wordAr: "كِيلُو",
        translation: "Kilo",
        description: "Satuan berat standar internasional (Kilogram).",
        category: "Satuan",
        examples: [
          { ar: "أُرِيدُ كِيلُو مِنَ التُّفَّاحِ", translation: "Saya ingin satu kilo apel.", grammarNote: "Logika: Satuan berat tunggal." },
          { ar: "بِكَمِ الْكِيلُو؟", translation: "Berapa (harga) per kilonya?", grammarNote: "Logika: Menanyakan harga per satuan." },
          { ar: "اشْتَرَيْتُ ثَلَاثَةَ كِيلُوجْرَامٍ", translation: "Saya membeli tiga kilogram.", grammarNote: "Logika: Angka 3-10, 'Adad berlawanan gender (Kilu dianggap mudzakkar, maka angka pakai ta marbutah)." },
          { ar: "هَذَا كِيلُو نَاقِصٌ", translation: "Kiloan ini kurang.", grammarNote: "Logika: Ketidakjujuran timbangan." },
          { ar: "زِنْ لِي كِيلُو بَصَلٍ", translation: "Timbangkan untukku sekilo bawang.", grammarNote: "Logika: Perintah timbang." },
          { ar: "كِيلُو وَاحِدٌ فَقَطْ", translation: "Satu kilo saja.", grammarNote: "Logika: Angka 1 mengikuti gender benda." },
          { ar: "الْكِيلُو بِخَمْسَةِ آلَافٍ", translation: "Sekilo seharga lima ribu.", grammarNote: "Logika: Struktur harga." },
          { ar: "أَعْطِنِي نِصْفَ كِيلُو", translation: "Berikan saya setengah kilo.", grammarNote: "Logika: Pecahan satuan." },
          { ar: "هَلْ هَذَا كِيلُو كَامِلٌ؟", translation: "Apakah ini sekilo penuh?", grammarNote: "Logika: Verifikasi timbangan." },
          { ar: "كِيلُو مِنَ السُّكَّرِ", translation: "Sekilo gula.", grammarNote: "Logika: Idhafah/Min satuan." }
        ]
      },
      {
        id: "l2_3_c7",
        wordAr: "مِتْرٌ",
        translation: "Meter",
        description: "Satuan panjang untuk kain atau bahan.",
        category: "Satuan",
        examples: [
          { ar: "أُرِيدُ مِتْرًا مِنَ الْقُمَاشِ", translation: "Saya ingin semeter kain.", grammarNote: "Logika: Satuan panjang tunggal." },
          { ar: "كَمْ مِتْرًا تَحْتَاجُ؟", translation: "Berapa meter yang kamu butuhkan?", grammarNote: "Logika: Tamyiz untuk 'Kam'." },
          { ar: "اشْتَرَيْتُ خَمْسَةَ أَمْتَارٍ", translation: "Saya membeli lima meter.", grammarNote: "Logika: Angka 3-10, Ma'dud harus jamak (Amtaar) dan 'Adad berlawanan gender (Mitr mudzakkar -> Khamsata)." },
          { ar: "الْمِتْرُ بِعَشَرَةِ آلَافٍ", translation: "Semeter seharga sepuluh ribu.", grammarNote: "Logika: Struktur harga panjang." },
          { ar: "هَذَا مِتْرٌ طَوِيلٌ", translation: "Ini satu meter yang panjang (lebih).", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "أَعْطِنِي مِتْرَيْنِ", translation: "Berikan saya dua meter.", grammarNote: "Logika: Tasniyah (dua) untuk satuan." },
          { ar: "قِسْ لِي مِتْرًا", translation: "Ukurlah untukku semeter.", grammarNote: "Logika: Perintah ukur." },
          { ar: "عَشَرَةُ أَمْتَارٍ مِنَ الْحَرِيرِ", translation: "Sepuluh meter sutra.", grammarNote: "Logika: 'Adad-Ma'dud batas maksimal 10." },
          { ar: "الْمِتْرُ الْوَاحِدُ يَكْفِي", translation: "Satu meter saja cukup.", grammarNote: "Logika: Angka 1 mengikuti gender." },
          { ar: "هَذَا الْمِتْرُ قَصِيرٌ", translation: "Meteran ini pendek (kurang).", grammarNote: "Logika: Keluhan ukuran." }
        ]
      },
      {
        id: "l2_3_c8",
        wordAr: "حَبَّةٌ",
        translation: "Buah / Butir / Biji",
        description: "Satuan untuk barang kecil atau buah secara satuan.",
        category: "Satuan",
        examples: [
          { ar: "أُرِيدُ حَبَّةً مِنَ الْبُرْتُقَالِ", translation: "Saya ingin sebuah jeruk.", grammarNote: "Logika: Satuan tunggal muannats." },
          { ar: "كَمْ حَبَّةً تُرِيدُ؟", translation: "Berapa butir yang kamu mau?", grammarNote: "Logika: Tamyiz untuk 'Kam'." },
          { ar: "اشْتَرَيْتُ أَرْبَعَ حَبَّاتٍ", translation: "Saya membeli empat butir.", grammarNote: "Logika: Angka 3-10, 'Adad berlawanan gender (Habbah muannats -> Arba'a mudzakkar)." },
          { ar: "الْحَبَّةُ بِأَلْفٍ", translation: "Satu butirnya seribu.", grammarNote: "Logika: Harga per butir." },
          { ar: "أَعْطِنِي حَبَّةً وَاحِدَةً", translation: "Berikan saya satu butir saja.", grammarNote: "Logika: Angka 1 mengikuti gender muannats." },
          { ar: "ثَلَاثُ حَبَّاتٍ مِنَ الْبَيْضِ", translation: "Tiga butir telur.", grammarNote: "Logika: 'Adad mudzakkar untuk ma'dud muannats." },
          { ar: "هَذِهِ حَبَّةٌ كَبِيرَةٌ", translation: "Ini butiran/buah yang besar.", grammarNote: "Logika: Na'at muannats." },
          { ar: "سِتُّ حَبَّاتٍ فَقَطْ", translation: "Enam butir saja.", grammarNote: "Logika: Angka 6 mudzakkar." },
          { ar: "الْحَبَّةُ الثَّانِيَةُ مَجَّانًا", translation: "Butir kedua gratis.", grammarNote: "Logika: Angka bertingkat (Tartibi)." },
          { ar: "عَشَرُ حَبَّاتٍ", translation: "Sepuluh butir.", grammarNote: "Logika: Angka 10 mudzakkar (Asyru) untuk muannats." }
        ]
      },
      {
        id: "l2_3_c9",
        wordAr: "رَبْطَةٌ",
        translation: "Ikat",
        description: "Satuan untuk sayuran atau barang yang diikat.",
        category: "Satuan",
        examples: [
          { ar: "أُرِيدُ رَبْطَةً مِنَ الْبَقْدُونِسِ", translation: "Saya ingin seikat seledri.", grammarNote: "Logika: Satuan ikat tunggal muannats." },
          { ar: "بِكَمِ الرَّبْطَةُ؟", translation: "Berapa seikatnya?", grammarNote: "Logika: Menanyakan harga per ikat." },
          { ar: "اشْتَرَيْتُ ثَلَاثَ رَبَطَاتٍ", translation: "Saya membeli tiga ikat.", grammarNote: "Logika: Angka 3-10, 'Adad berlawanan gender (Rabthah muannats -> Tsalaatsa mudzakkar)." },
          { ar: "رَبْطَةٌ وَاحِدَةٌ تَكْفِي", translation: "Seikat saja cukup.", grammarNote: "Logika: Angka 1 muannats." },
          { ar: "هَذِهِ رَبْطَةٌ صَغِيرَةٌ", translation: "Ini ikatan yang kecil.", grammarNote: "Logika: Na'at muannats." },
          { ar: "خَمْسُ رَبَطَاتٍ مِنَ الْخُضْرَاوَاتِ", translation: "Lima ikat sayur-sayuran.", grammarNote: "Logika: Angka 5 mudzakkar." },
          { ar: "أَعْطِنِي رَبْطَتَيْنِ", translation: "Berikan saya dua ikat.", grammarNote: "Logika: Tasniyah untuk muannats." },
          { ar: "رَبْطَةٌ طَازَجَةٌ", translation: "Ikatan (sayur) yang segar.", grammarNote: "Logika: Sifat muannats." },
          { ar: "الرَّبْطَةُ بِأَلْفَيْنِ", translation: "Seikat dua ribu.", grammarNote: "Logika: Struktur harga." },
          { ar: "سَبْعُ رَبَطَاتٍ", translation: "Tujuh ikat.", grammarNote: "Logika: Angka 7 mudzakkar." }
        ]
      },
      {
        id: "l2_3_c10",
        wordAr: "سُوقٌ",
        translation: "Pasar",
        description: "Tempat berkumpulnya penjual dan pembeli.",
        category: "Lokasi",
        examples: [
          { ar: "أَذْهَبُ إِلَى السُّوقِ", translation: "Saya pergi ke pasar.", grammarNote: "Logika: Tujuan perjalanan." },
          { ar: "هَذَا سُوقٌ كَبِيرٌ", translation: "Ini adalah pasar yang besar.", grammarNote: "Logika: Suuq bisa mudzakkar/muannats." },
          { ar: "السُّوقُ مَزْدَحِمٌ جِدًّا", translation: "Pasarnya sangat ramai.", grammarNote: "Logika: Sifat kondisi tempat." },
          { ar: "أَشْتَرِي الْفَوَاكِهَ فِي السُّوقِ", translation: "Saya membeli buah-buahan di pasar.", grammarNote: "Logika: Keterangan tempat aktivitas." },
          { ar: "سُوقُ الْخُضْرَاوَاتِ بَعِيدٌ", translation: "Pasar sayur itu jauh.", grammarNote: "Logika: Idhafah (Pasar sayur)." },
          { ar: "فِي السُّوقِ بَائِعُونَ كَثِيرُونَ", translation: "Di pasar ada banyak penjual.", grammarNote: "Logika: Jamak mudzakkar untuk manusia." },
          { ar: "السُّوقُ مَفْتُوحٌ", translation: "Pasarnya buka.", grammarNote: "Logika: Status operasional." },
          { ar: "سُوقٌ تَقْلِيدِيٌّ", translation: "Pasar tradisional.", grammarNote: "Logika: Sifat klasifikasi." },
          { ar: "مَتَى تَذْهَبُ إِلَى السُّوقِ؟", translation: "Kapan kamu pergi ke pasar?", grammarNote: "Logika: Pertanyaan waktu." },
          { ar: "السُّوقُ قَرِيبٌ مِنْ بَيْتِي", translation: "Pasarnya dekat dari rumahku.", grammarNote: "Logika: Hubungan jarak." }
        ]
      },
      {
        id: "l2_3_c11",
        wordAr: "مَتْجَرٌ",
        translation: "Toko / Swalayan",
        description: "Tempat berdagang yang lebih modern atau permanen.",
        category: "Lokasi",
        examples: [
          { ar: "الْمَتْجَرُ نَظِيفٌ", translation: "Tokonya bersih.", grammarNote: "Logika: Sifat kondisi mudzakkar." },
          { ar: "هَذَا مَتْجَرٌ حَدِيثٌ", translation: "Ini adalah toko yang modern.", grammarNote: "Logika: Na'at mudzakkar nakirah." },
          { ar: "أَعْمَلُ فِي مَتْجَرِ الْمَلَابِسِ", translation: "Saya bekerja di toko pakaian.", grammarNote: "Logika: Idhafah spesifik." },
          { ar: "الْمَتْجَرُ الْكَبِيرُ مُغْلَقٌ", translation: "Toko besar itu tutup.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "أَشْتَرِي الْخُبْزَ مِنَ الْمَتْجَرِ", translation: "Saya membeli roti dari toko.", grammarNote: "Logika: Sumber barang." },
          { ar: "فِي الْمَتْجَرِ بَضَائِعُ كَثِيرَةٌ", translation: "Di toko ada banyak barang dagangan.", grammarNote: "Logika: Subjek jamak taksir -> sifat muannats." },
          { ar: "مَتْجَرٌ رَخِيصٌ", translation: "Toko yang murah.", grammarNote: "Logika: Klasifikasi harga." },
          { ar: "أَيْنَ أَقْرَبُ مَتْجَرٍ؟", translation: "Di mana toko terdekat?", grammarNote: "Logika: Isim Tafdhil 'Aqrabu'." },
          { ar: "الْمَتْجَرُ مَفْتُوحٌ لَيْلًا", translation: "Tokonya buka malam hari.", grammarNote: "Logika: Waktu operasional." },
          { ar: "دَخَلْتُ الْمَتْجَرَ", translation: "Saya masuk ke toko.", grammarNote: "Logika: Kata kerja arah." }
        ]
      },
      {
        id: "l2_3_c12",
        wordAr: "بَائِعٌ",
        translation: "Penjual",
        description: "Orang yang menawarkan barang dagangan.",
        category: "Orang",
        examples: [
          { ar: "الْبَائِعُ أَمِينٌ", translation: "Penjual itu jujur.", grammarNote: "Logika: Sifat terpuji mudzakkar." },
          { ar: "سَأَلْتُ الْبَائِعَ", translation: "Saya bertanya pada penjual.", grammarNote: "Logika: Objek percakapan." },
          { ar: "هَذَا بَائِعُ الْفَوَاكِهـِ", translation: "Ini penjual buah.", grammarNote: "Logika: Idhafah profesi." },
          { ar: "الْبَائِعُ الْكَرِيمُ يُعْطِي تَخْفِيضًا", translation: "Penjual yang dermawan memberikan diskon.", grammarNote: "Logika: Sifat perilaku." },
          { ar: "يَا بَائِعُ، بِكَمْ هَذَا؟", translation: "Wahai penjual, berapa ini?", grammarNote: "Logika: Panggilan (Nida)." },
          { ar: "الْبَائِعُ نَشِيطٌ فِي السُّوقِ", translation: "Penjual itu rajin di pasar.", grammarNote: "Logika: Deskripsi aktivitas." },
          { ar: "بَائِعٌ جَدِيدٌ", translation: "Penjual baru.", grammarNote: "Logika: Sifat temporal." },
          { ar: "الْبَائِعَةُ صَادِقَةٌ", translation: "Penjual (perempuan) itu jujur.", grammarNote: "Logika: Perubahan gender muannats." },
          { ar: "هُمْ بَائِعُونَ طَيِّبُونَ", translation: "Mereka para penjual yang baik.", grammarNote: "Logika: Jamak mudzakkar salim." },
          { ar: "انْتَظَرْتُ الْبَائِعَ", translation: "Saya menunggu penjual.", grammarNote: "Logika: Interaksi pembeli." }
        ]
      },
      {
        id: "l2_3_c13",
        wordAr: "مُشْتَرٍ",
        translation: "Pembeli",
        description: "Orang yang menukarkan uang dengan barang.",
        category: "Orang",
        examples: [
          { ar: "الْمُشْتَرِي يَخْتَارُ الْبِضَاعَةَ", translation: "Pembeli memilih barang dagangan.", grammarNote: "Logika: Aktivitas konsumen." },
          { ar: "أَنَا مُشْتَرٍ جَدِيدٌ", translation: "Saya pembeli baru.", grammarNote: "Logika: Identitas diri." },
          { ar: "الْمُشْتَرِي الذَّكِيُّ يُسَاوِمُ", translation: "Pembeli yang cerdas menawar harga.", grammarNote: "Logika: Sifat kemampuan." },
          { ar: "فِي الْمَتْجَرِ مُشْتَرُونَ كَثِيرُونَ", translation: "Di toko ada banyak pembeli.", grammarNote: "Logika: Jamak konsumen." },
          { ar: "الْمُشْتَرِي يَدْفَعُ النُّقُودَ", translation: "Pembeli membayar uang.", grammarNote: "Logika: Kewajiban transaksi." },
          { ar: "أَيُّهَا الْمُشْتَرِي، تَفَضَّلْ", translation: "Wahai pembeli, silakan.", grammarNote: "Logika: Sambutan penjual." },
          { ar: "الْمُشْتَرِيَةُ مَسْرُورَةٌ بِالتَّخْفِيضِ", translation: "Pembeli (perempuan) senang dengan diskonnya.", grammarNote: "Logika: Emosi konsumen muannats." },
          { ar: "هَلْ أَنْتَ مُشْتَرٍ؟", translation: "Apakah kamu pembeli?", grammarNote: "Logika: Verifikasi peran." },
          { ar: "الْمُشْتَرِي يُرِيدُ جَوْدَةً عَالِيَةً", translation: "Pembeli ingin kualitas tinggi.", grammarNote: "Logika: Harapan konsumen." },
          { ar: "رَأَيْتُ مُشْتَرِيًا حَزِينًا", translation: "Saya melihat pembeli yang sedih.", grammarNote: "Logika: Sifat mengikuti nashab." }
        ]
      },
      {
        id: "l2_3_c14",
        wordAr: "بِضَاعَةٌ",
        translation: "Barang Dagangan",
        description: "Komoditas yang ditawarkan untuk dijual.",
        category: "Istilah Bisnis",
        examples: [
          { ar: "هَذِهِ بِضَاعَةٌ جَيِّدَةٌ", translation: "Ini barang dagangan yang bagus.", grammarNote: "Logika: Kualitas produk muannats." },
          { ar: "الْبِضَاعَةُ غَالِيَةٌ", translation: "Barang dagangannya mahal.", grammarNote: "Logika: Deskripsi harga muannats." },
          { ar: "عِنْدِي بِضَاعَةٌ جَدِيدَةٌ", translation: "Saya punya barang dagangan baru.", grammarNote: "Logika: Inventaris penjual." },
          { ar: "الْبِضَاعَةُ مَوْجُودَةٌ فِي الْمَخْزَنِ", translation: "Barangnya ada di gudang.", grammarNote: "Logika: Keterangan tempat." },
          { ar: "بِضَاعَةٌ رَخِيصَةٌ وَلَكِنْ قَوِيَّةٌ", translation: "Barang murah tapi kuat.", grammarNote: "Logika: Kombinasi sifat." },
          { ar: "أَيْنَ الْبِضَاعَةُ الثَّمِينَةُ؟", translation: "Di mana barang dagangan yang berharga?", grammarNote: "Logika: Na'at ma'rifah muannats." },
          { ar: "هَذِهِ الْبِضَاعَةُ مِنَ الْخَارِجِ", translation: "Barang ini dari luar negeri (impor).", grammarNote: "Logika: Sumber produk." },
          { ar: "نَحْنُ نَبِيعُ بِضَاعَةً طَازَجَةً", translation: "Kami menjual barang dagangan yang segar.", grammarNote: "Logika: Sifat mengikuti nashab." },
          { ar: "بِضَاعَةٌ مُتَنَوِّعَةٌ", translation: "Barang dagangan yang bermacam-macam.", grammarNote: "Logika: Keragaman produk." },
          { ar: "انْتَهَتِ الْبِضَاعَةُ", translation: "Barangnya sudah habis.", grammarNote: "Logika: Fi'il muannats untuk subjek muannats." }
        ]
      },
      {
        id: "l2_3_c15",
        wordAr: "قَائِمَةٌ",
        translation: "Daftar / List",
        description: "Catatan barang yang ingin dibeli.",
        category: "Alat Bantu",
        examples: [
          { ar: "أَيْنَ قَائِمَةُ التَّسَوُّقِ؟", translation: "Di mana daftar belanjanya?", grammarNote: "Logika: Idhafah spesifik." },
          { ar: "كَتَبْتُ قَائِمَةً طَوِيلَةً", translation: "Saya menulis daftar yang panjang.", grammarNote: "Logika: Sifat muannats mengikuti nashab." },
          { ar: "انْظُرْ إِلَى قَائِمَةِ الْأَسْعَارِ", translation: "Lihatlah daftar harga.", grammarNote: "Logika: Informasi toko." },
          { ar: "الْقَائِمَةُ فِي جَيْبِي", translation: "Daftarnya ada di kantongku.", grammarNote: "Logika: Keterangan tempat." },
          { ar: "هَلْ نَسِيتَ الْقَائِمَةَ؟", translation: "Apakah kamu lupa daftarnya?", grammarNote: "Logika: Pertanyaan aktivitas." },
          { ar: "قَائِمَةٌ جَدِيدَةٌ", translation: "Daftar baru.", grammarNote: "Logika: Sifat temporal muannats." },
          { ar: "فِي الْقَائِمَةِ عَشَرَةُ أَشْيَاءَ", translation: "Di dalam daftar ada sepuluh hal.", grammarNote: "Logika: 'Adad-Ma'dud (Syai' mudzakkar -> Asyarata)." },
          { ar: "الْقَائِمَةُ مُهِمَّةٌ جِدًّا", translation: "Daftar itu sangat penting.", grammarNote: "Logika: Sifat kualitas muannats." },
          { ar: "قَرَأْتُ الْقَائِمَةَ مَرَّتَيْنِ", translation: "Saya membaca daftarnya dua kali.", grammarNote: "Logika: Keterangan frekuensi." },
          { ar: "امْسَحْ هَذَا مِنَ الْقَائِمَةِ", translation: "Hapus ini dari daftar.", grammarNote: "Logika: Perubahan data." }
        ]
      },
      // KELOMPOK 2 — KATA KERJA & AKTIVITAS (16-30)
      {
        id: "l2_3_c16",
        wordAr: "يَشْتَرِي",
        translation: "Membeli",
        description: "Aktivitas menukar uang dengan barang.",
        category: "Aktivitas",
        examples: [
          { ar: "أَنَا أَشْتَرِي الْفَوَاكِهـَ", translation: "Saya membeli buah-buahan.", grammarNote: "Logika: Fi'il mudhari' subjek 'Ana'." },
          { ar: "مَاذَا تَشْتَرِي؟", translation: "Apa yang kamu beli?", grammarNote: "Logika: Pertanyaan objek." },
          { ar: "اشْتَرَيْتُ قَمِيصًا جَدِيدًا", translation: "Saya telah membeli kemeja baru.", grammarNote: "Logika: Fi'il madi subjek 'Ana'." },
          { ar: "هُوَ يُرِيدُ أَنْ يَشْتَرِيَ لَحْمًا", translation: "Dia ingin membeli daging.", grammarNote: "Logika: Fi'il manshub setelah 'An'." },
          { ar: "نَحْنُ نَشْتَرِي السُّكَّرَ", translation: "Kami membeli gula.", grammarNote: "Logika: Fi'il mudhari' subjek 'Nahnu'." },
          { ar: "اشْتَرِ هَذَا!", translation: "Belilah ini!", grammarNote: "Logika: Fi'il amar (perintah)." },
          { ar: "هَلْ تَشْتَرِي هَذِهِ الْبِضَاعَةَ؟", translation: "Apakah kamu membeli barang ini?", grammarNote: "Logika: Verifikasi aksi." },
          { ar: "اشْتَرَيْتُ ثَلَاثَةَ كُتُبٍ", translation: "Saya membeli tiga buku.", grammarNote: "Logika: 'Adad-Ma'dud (Kitab mudzakkar -> Tsalaatsata)." },
          { ar: "لَا تَشْتَرِ الْبِضَاعَةَ الْغَالِيَةَ", translation: "Jangan beli barang yang mahal.", grammarNote: "Logika: Larangan (Laa nahiyah)." },
          { ar: "أُحِبُّ أَنْ أَشْتَرِيَ فِي السُّوقِ", translation: "Saya suka membeli (belanja) di pasar.", grammarNote: "Logika: Preferensi aktivitas." }
        ]
      },
      {
        id: "l2_3_c17",
        wordAr: "يَبِيعُ",
        translation: "Menjual",
        description: "Aktivitas menawarkan barang untuk mendapatkan uang.",
        category: "Aktivitas",
        examples: [
          { ar: "الْبَائِعُ يَبِيعُ السَّمَكَ", translation: "Penjual itu menjual ikan.", grammarNote: "Logika: Aktivitas profesi mudzakkar." },
          { ar: "مَاذَا تَبِيعُ؟", translation: "Apa yang kamu jual?", grammarNote: "Logika: Pertanyaan profesi/dagangan." },
          { ar: "بِعْتُ سَيَّارَتِي الْقَدِيمَةَ", translation: "Saya telah menjual mobil lama saya.", grammarNote: "Logika: Fi'il madi subjek 'Ana'." },
          { ar: "هُوَ يَبِيعُ بِثَمَنٍ رَخِيصٍ", translation: "Dia menjual dengan harga murah.", grammarNote: "Logika: Strategi bisnis." },
          { ar: "نَحْنُ نَبِيعُ الْخُضْرَاوَاتِ", translation: "Kami menjual sayur-sayuran.", grammarNote: "Logika: Komoditas dagang." },
          { ar: "بِعْ لِي هَذَا!", translation: "Juallah ini padaku!", grammarNote: "Logika: Fi'il amar (perintah)." },
          { ar: "هَلْ تَبِيعُ هَذَا الْكِتَابَ؟", translation: "Apakah kamu menjual buku ini?", grammarNote: "Logika: Verifikasi dagangan." },
          { ar: "يَبِيعُ التَّاجِرُ بَضَائِعَ كَثِيرَةً", translation: "Pedagang itu menjual banyak barang.", grammarNote: "Logika: Skala bisnis." },
          { ar: "لَا تَبِعْ بِدُونِ رِبْحٍ", translation: "Jangan menjual tanpa untung.", grammarNote: "Logika: Larangan bisnis." },
          { ar: "أُحِبُّ أَنْ أَبِيعَ فِي الْمَتْجَرِ", translation: "Saya suka menjual di toko.", grammarNote: "Logika: Preferensi profesi." }
        ]
      },
      {
        id: "l2_3_c18",
        wordAr: "يُسَاوِمُ",
        translation: "Menawar",
        description: "Bernegosiasi untuk mendapatkan harga yang lebih murah.",
        category: "Aktivitas",
        examples: [
          { ar: "الْمُشْتَرِي يُسَاوِمُ الثَّمَنَ", translation: "Pembeli menawar harganya.", grammarNote: "Logika: Seni belanja." },
          { ar: "هَلْ يُمْكِنُنِي أَنْ أُسَاوِمَ؟", translation: "Apakah saya boleh menawar?", grammarNote: "Logika: Permintaan izin." },
          { ar: "سَاوَمْتُ الْبَائِعَ كَثِيرًا", translation: "Saya menawar penjual itu berkalikali.", grammarNote: "Logika: Usaha pembeli." },
          { ar: "الْبَائِعُ لَا يُرِيدُ الْمُسَاوَمَةَ", translation: "Penjual tidak mau tawar-menawar.", grammarNote: "Logika: Harga pas (fixed price)." },
          { ar: "نَحْنُ نُسَاوِمُ لِلْحُصُولِ عَلَى تَخْفِيضٍ", translation: "Kami menawar untuk mendapatkan diskon.", grammarNote: "Logika: Tujuan negosiasi." },
          { ar: "سَاوِمْ جَيِّدًا!", translation: "Tawarlah dengan baik!", grammarNote: "Logika: Perintah taktik." },
          { ar: "الْمُسَاوَمَةُ مَوْجُودَةٌ فِي السُّوقِ", translation: "Tawar-menawar ada di pasar.", grammarNote: "Logika: Budaya pasar." },
          { ar: "يَجِبُ أَنْ تُسَاوِمَ بِرِفْقٍ", translation: "Kamu harus menawar dengan lembut.", grammarNote: "Logika: Etika negosiasi." },
          { ar: "بَعْدَ الْمُسَاوَمَةِ، الثَّمَنُ رَخِيصٌ", translation: "Setelah menawar, harganya jadi murah.", grammarNote: "Logika: Hasil negosiasi." },
          { ar: "أَنَا لَا أُحِبُّ أَنْ أُسَاوِمَ", translation: "Saya tidak suka menawar.", grammarNote: "Logika: Preferensi belanja." }
        ]
      },
      {
        id: "l2_3_c19",
        wordAr: "يَدْفَعُ",
        translation: "Membayar / Mendorong",
        description: "Memberikan uang sebagai pemenuhan kewajiban.",
        category: "Aktivitas",
        examples: [
          { ar: "أَدْفَعُ النُّقُودَ لِلْكَاشِيرِ", translation: "Saya membayar uang ke kasir.", grammarNote: "Logika: Tahap akhir belanja." },
          { ar: "كَمْ تَدْفَعُ؟", translation: "Berapa kamu bayar?", grammarNote: "Logika: Pertanyaan nilai." },
          { ar: "دَفَعْتُ عَشَرَةَ آلَافٍ", translation: "Saya telah membayar sepuluh ribu.", grammarNote: "Logika: Nilai pembayaran." },
          { ar: "هُوَ يَدْفَعُ بِالنُّقُودِ الْوَرَقِيَّةِ", translation: "Dia membayar dengan uang kertas.", grammarNote: "Logika: Metode bayar." },
          { ar: "نَحْنُ نَدْفَعُ الْآنَ", translation: "Kami membayar sekarang.", grammarNote: "Logika: Keterangan waktu." },
          { ar: "ادْفَعْ هُنَا!", translation: "Bayarlah di sini!", grammarNote: "Logika: Instruksi tempat." },
          { ar: "هَلْ دَفَعْتَ الثَّمَنَ؟", translation: "Apakah kamu sudah bayar harganya?", grammarNote: "Logika: Verifikasi transaksi." },
          { ar: "يَجِبُ أَنْ تَدْفَعَ الثَّمَنَ الْكَامِلَ", translation: "Kamu harus membayar harga penuh.", grammarNote: "Logika: Kewajiban bayar." },
          { ar: "دَفَعَ الْمُشْتَرِي بِسُرْعَةٍ", translation: "Pembeli membayar dengan cepat.", grammarNote: "Logika: Keterangan cara." },
          { ar: "لَا تَدْفَعْ قَبْلَ الِاسْتِلَامِ", translation: "Jangan bayar sebelum menerima (barang).", grammarNote: "Logika: Tips keamanan." }
        ]
      },
      {
        id: "l2_3_c20",
        wordAr: "غَالٍ",
        translation: "Mahal",
        description: "Sifat untuk barang yang harganya tinggi.",
        category: "Kualitas",
        examples: [
          { ar: "هَذَا الثَّمَنُ غَالٍ", translation: "Harga ini mahal.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "الْبِضَاعَةُ غَالِيَةٌ جِدًّا", translation: "Barangnya sangat mahal.", grammarNote: "Logika: Perubahan muannats (Ghaaliyah)." },
          { ar: "لَا أَشْتَرِي الْغَالِيَ", translation: "Saya tidak membeli yang mahal.", grammarNote: "Logika: Kata sifat sebagai objek." },
          { ar: "السُّكَّرُ غَالٍ الْيَوْمَ", translation: "Gula mahal hari ini.", grammarNote: "Logika: Kondisi harga pasar." },
          { ar: "لِمَاذَا هُوَ غَالٍ؟", translation: "Kenapa dia mahal?", grammarNote: "Logika: Pertanyaan alasan." },
          { ar: "أُرِيدُ شَيْئًا غَيْرَ غَالٍ", translation: "Saya ingin sesuatu yang tidak mahal.", grammarNote: "Logika: Modifikasi negasi." },
          { ar: "الذَّهَبُ مَعْدَنٌ غَالٍ", translation: "Emas adalah logam yang mahal.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "الْمَلَابِسُ الْغَالِيَةُ جَمِيلَةٌ", translation: "Pakaian yang mahal itu bagus.", grammarNote: "Logika: Na'at ma'rifah muannats." },
          { ar: "ثَمَنٌ غَالٍ جِدًّا", translation: "Harga yang sangat mahal.", grammarNote: "Logika: Penguatan makna." },
          { ar: "لَيْسَ غَالِيًا", translation: "Tidak mahal (Laysa).", grammarNote: "Logika: Negasi kondisi." }
        ]
      },
      {
        id: "l2_3_c21",
        wordAr: "رَخِيصٌ",
        translation: "Murah",
        description: "Sifat untuk barang yang harganya terjangkau.",
        category: "Kualitas",
        examples: [
          { ar: "هَذَا الثَّمَنُ رَخِيصٌ", translation: "Harga ini murah.", grammarNote: "Logika: Sifat mudzakkar." },
          { ar: "الْبِضَاعَةُ رَخِيصَةٌ الْآنَ", translation: "Barang-barangnya murah sekarang.", grammarNote: "Logika: Sifat muannats." },
          { ar: "أَبْحَثُ عَنْ مَتْجَرٍ رَخِيصٍ", translation: "Saya mencari toko yang murah.", grammarNote: "Logika: Sifat mengikuti i'rab majrur." },
          { ar: "الْخُبْزُ رَخِيصٌ جِدًّا", translation: "Rotinya sangat murah.", grammarNote: "Logika: Deskripsi kebutuhan pokok." },
          { ar: "هَلْ هَذَا رَخِيصٌ؟", translation: "Apakah ini murah?", grammarNote: "Logika: Verifikasi harga." },
          { ar: "أُرِيدُ بِضَاعَةً رَخِيصَةً", translation: "Saya ingin barang yang murah.", grammarNote: "Logika: Sifat mengikuti nashab." },
          { ar: "السُّوقُ التَّقْلِيدِيُّ رَخِيصٌ", translation: "Pasar tradisional itu murah.", grammarNote: "Logika: Sifat tempat." },
          { ar: "الْبِضَاعَةُ الرَّخِيصَةُ لَيْسَتْ جَيِّدَةً", translation: "Barang yang murah (biasanya) tidak bagus.", grammarNote: "Logika: Skeptisisme kualitas." },
          { ar: "رَخِيصٌ وَجَمِيلٌ", translation: "Murah dan bagus.", grammarNote: "Logika: Kombinasi sifat positif." },
          { ar: "أَصْبَحَ الثَّمَنُ رَخِيصًا", translation: "Harganya menjadi murah.", grammarNote: "Logika: Perubahan kondisi." }
        ]
      },
      {
        id: "l2_3_c22",
        wordAr: "طَازَجٌ",
        translation: "Segar",
        description: "Kualitas barang (biasanya makanan) yang baru dipanen/dibuat.",
        category: "Kualitas",
        examples: [
          { ar: "الْخُضْرَاوَاتُ طَازَجَةٌ", translation: "Sayur-sayurannya segar.", grammarNote: "Logika: Sifat muannats." },
          { ar: "أُرِيدُ لَحْمًا طَازَجًا", translation: "Saya ingin daging segar.", grammarNote: "Logika: Sifat mengikuti nashab." },
          { ar: "هَذَا سَمَكٌ طَازَجٌ", translation: "Ini ikan yang segar.", grammarNote: "Logika: Na'at mudzakkar nakirah." },
          { ar: "الْحَلِيبُ الطَّازَجُ مُفِيدٌ", translation: "Susu segar itu bermanfaat.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "هَلِ الْفَوَاكِهـُ طَازَجَةٌ؟", translation: "Apakah buah-buahannya segar?", grammarNote: "Logika: Verifikasi kualitas." },
          { ar: "بَيْضٌ طَازَجٌ", translation: "Telur segar.", grammarNote: "Logika: Deskripsi bahan makanan." },
          { ar: "فِي الصَّبَاحِ الْخُبْزُ طَازَجٌ", translation: "Di pagi hari rotinya segar.", grammarNote: "Logika: Hubungan waktu." },
          { ar: "اشْتَرِ التُّفَّاحَ الطَّازَجَ", translation: "Belilah apel yang segar itu.", grammarNote: "Logika: Na'at ma'rifah." },
          { ar: "رَائِحَةٌ طَازَجَةٌ", translation: "Aroma yang segar.", grammarNote: "Logika: Sifat indra." },
          { ar: "طَازَجٌ جِدًّا", translation: "Sangat segar.", grammarNote: "Logika: Penguatan kualitas." }
        ]
      },
      {
        id: "l2_3_c23",
        wordAr: "تُفَّاحٌ",
        translation: "Apel",
        description: "Nama buah populer.",
        category: "Barang Dagangan",
        examples: [
          { ar: "أَشْتَرِي التُّفَّاحَ", translation: "Saya membeli apel.", grammarNote: "Logika: Objek transaksi." },
          { ar: "تُفَّاحٌ أَحْمَرُ", translation: "Apel merah.", grammarNote: "Logika: Sifat warna." },
          { ar: "كِيلُو تُفَّاحٍ", translation: "Sekilo apel.", grammarNote: "Logika: Idhafah satuan." },
          { ar: "تُفَّاحٌ لَذِيذٌ", translation: "Apel lezat.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "ثَلَاثُ حَبَّاتِ تُفَّاحٍ", translation: "Tiga butir apel.", grammarNote: "Logika: 'Adad-Ma'dud." },
          { ar: "تُفَّاحٌ أَخْضَرُ", translation: "Apel hijau.", grammarNote: "Logika: Warna mudzakkar." },
          { ar: "أُرِيدُ تُفَّاحًا", translation: "Saya ingin apel.", grammarNote: "Logika: Objek nashab." },
          { ar: "التُّفَّاحَةُ فِي الْيَدِ", translation: "Apel itu di tangan.", grammarNote: "Logika: Mufradah." },
          { ar: "هَلْ هَذَا تُفَّاحٌ؟", translation: "Apakah ini apel?", grammarNote: "Logika: Verifikasi benda." },
          { ar: "التُّفَّاحُ غَالٍ", translation: "Apelnya mahal.", grammarNote: "Logika: Deskripsi harga." }
        ]
      },
      {
        id: "l2_3_c24",
        wordAr: "بُرْتُقَالٌ",
        translation: "Jeruk",
        description: "Buah sitrus sumber vitamin C.",
        category: "Barang Dagangan",
        examples: [
          { ar: "الْبُرْتُقَالُ حُلْوٌ", translation: "Jeruknya manis.", grammarNote: "Logika: Sifat rasa." },
          { ar: "أُرِيدُ بُرْتُقَالًا", translation: "Saya ingin jeruk.", grammarNote: "Logika: Objek nashab." },
          { ar: "بُرْتُقَالٌ حَامِضٌ", translation: "Jeruk asam.", grammarNote: "Logika: Klasifikasi rasa." },
          { ar: "كِيلُو بُرْتُقَالٍ", translation: "Sekilo jeruk.", grammarNote: "Logika: Satuan berat." },
          { ar: "خَمْسُ حَبَّاتِ بُرْتُقَالٍ", translation: "Lima butir jeruk.", grammarNote: "Logika: 'Adad-Ma'dud." },
          { ar: "عَصِيرُ الْبُرْتُقَالِ", translation: "Jus jeruk.", grammarNote: "Logika: Idhafah." },
          { ar: "الْبُرْتُقَالُ طَازَجٌ", translation: "Jeruknya segar.", grammarNote: "Logika: Sifat kondisi." },
          { ar: "بُرْتُقَالَةٌ وَاحِدَةٌ", translation: "Sebutir jeruk.", grammarNote: "Logika: Angka 1 muannats." },
          { ar: "هَذَا بُرْتُقَالٌ كَبِيرٌ", translation: "Ini jeruk besar.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "اشْتَرِ الْبُرْتُقَالَ", translation: "Belilah jeruk.", grammarNote: "Logika: Perintah." }
        ]
      },
      {
        id: "l2_3_c25",
        wordAr: "مَوْزٌ",
        translation: "Pisang",
        description: "Buah tropis kuning.",
        category: "Barang Dagangan",
        examples: [
          { ar: "الْمَوْزُ لَذِيذٌ", translation: "Pisangnya lezat.", grammarNote: "Logika: Sifat rasa." },
          { ar: "رَبْطَةُ مَوْزٍ", translation: "Seikat pisang.", grammarNote: "Logika: Satuan ikat." },
          { ar: "مَوْزٌ أَصْفَرُ", translation: "Pisang kuning.", grammarNote: "Logika: Warna mudzakkar." },
          { ar: "كِيلُو مَوْزٍ", translation: "Sekilo pisang.", grammarNote: "Logika: Satuan berat." },
          { ar: "أَرْبَعُ حَبَّاتِ مَوْزٍ", translation: "Empat butir pisang.", grammarNote: "Logika: 'Adad-Ma'dud." },
          { ar: "أُحِبُّ الْمَوْزَ", translation: "Saya suka pisang.", grammarNote: "Logika: Preferensi." },
          { ar: "مَوْزٌ طَازَجٌ", translation: "Pisang segar.", grammarNote: "Logika: Na'at mudzakkar." },
          { ar: "مَوْزَةٌ وَاحِدَةٌ", translation: "Sebutir pisang.", grammarNote: "Logika: Mufradah." },
          { ar: "بِكَمِ الْمَوْزُ؟", translation: "Berapa pisangnya?", grammarNote: "Logika: Pertanyaan harga." },
          { ar: "اشْتَرَيْتُ مَوْزًا", translation: "Saya membeli pisang.", grammarNote: "Logika: Madi." }
        ]
      },
      {
        id: "l2_3_c26",
        wordAr: "خُبْزٌ",
        translation: "Roti",
        description: "Makanan pokok.",
        category: "Barang Dagangan",
        examples: [
          { ar: "خُبْزٌ سَاخِنٌ", translation: "Roti panas.", grammarNote: "Logika: Kondisi fisik." },
          { ar: "أَشْتَرِي الْخُبْزَ", translation: "Saya membeli roti.", grammarNote: "Logika: Objek." },
          { ar: "خُبْزٌ أَبْيَضُ", translation: "Roti putih.", grammarNote: "Logika: Warna." },
          { ar: "خَمْسُ خُبْزَاتٍ", translation: "Lima roti.", grammarNote: "Logika: 'Adad-Ma'dud." },
          { ar: "خُبْزٌ لَذِيذٌ", translation: "Roti lezat.", grammarNote: "Logika: Rasa." },
          { ar: "رَائِحَةُ الْخُبْزِ", translation: "Aroma roti.", grammarNote: "Logika: Idhafah." },
          { ar: "خُبْزٌ طَازَجٌ", translation: "Roti segar.", grammarNote: "Logika: Kondisi." },
          { ar: "أُرِيدُ خُبْزًا", translation: "Saya ingin roti.", grammarNote: "Logika: Nashab." },
          { ar: "الْخُبْزُ رَخِيصٌ", translation: "Rotinya murah.", grammarNote: "Logika: Harga." },
          { ar: "كُلِ الْخُبْزَ", translation: "Makanlah roti.", grammarNote: "Logika: Perintah." }
        ]
      },
      {
        id: "l2_3_c27",
        wordAr: "لَحْمٌ",
        translation: "Daging",
        description: "Sumber protein.",
        category: "Barang Dagangan",
        examples: [
          { ar: "كِيلُو لَحْمٍ", translation: "Sekilo daging.", grammarNote: "Logika: Satuan berat." },
          { ar: "لَحْمٌ طَازَجٌ", translation: "Daging segar.", grammarNote: "Logika: Kondisi." },
          { ar: "اللَّحْمُ غَالٍ", translation: "Dagingnya mahal.", grammarNote: "Logika: Harga." },
          { ar: "لَحْمُ بَقَرٍ", translation: "Daging sapi.", grammarNote: "Logika: Idhafah." },
          { ar: "أُرِيدُ لَحْمًا", translation: "Saya ingin daging.", grammarNote: "Logika: Nashab." },
          { ar: "اللَّحْمُ لَذِيذٌ", translation: "Dagingnya lezat.", grammarNote: "Logika: Rasa." },
          { ar: "طَبَخْتُ اللَّحْمَ", translation: "Saya memasak daging.", grammarNote: "Logika: Madi." },
          { ar: "لَحْمٌ مَشْوِيٌّ", translation: "Daging panggang.", grammarNote: "Logika: Sifat." },
          { ar: "بِكَمِ اللَّحْمُ؟", translation: "Berapa dagingnya?", grammarNote: "Logika: Harga." },
          { ar: "لَا آكُلُ اللَّحْمَ", translation: "Saya tidak makan daging.", grammarNote: "Logika: Negasi." }
        ]
      },
      {
        id: "l2_3_c28",
        wordAr: "مَلَابِسُ",
        translation: "Pakaian",
        description: "Sandang.",
        category: "Barang Dagangan",
        examples: [
          { ar: "مَلَابِسُ جَدِيدَةٌ", translation: "Pakaian baru.", grammarNote: "Logika: Sifat muannats." },
          { ar: "أَشْتَرِي مَلَابِسَ", translation: "Saya membeli pakaian.", grammarNote: "Logika: Objek." },
          { ar: "مَلَابِسُ جَمِيلَةٌ", translation: "Pakaian bagus.", grammarNote: "Logika: Estetika." },
          { ar: "مَحَلُّ مَلَابِسَ", translation: "Toko pakaian.", grammarNote: "Logika: Idhafah." },
          { ar: "مَلَابِسُ غَالِيَةٌ", translation: "Pakaian mahal.", grammarNote: "Logika: Harga." },
          { ar: "لَبِسْتُ الْمَلَابِسَ", translation: "Saya memakai pakaian.", grammarNote: "Logika: Madi." },
          { ar: "مَلَابِسُ نَظِيفَةٌ", translation: "Pakaian bersih.", grammarNote: "Logika: Kondisi." },
          { ar: "أُرِيدُ مَلَابِسَ", translation: "Saya ingin pakaian.", grammarNote: "Logika: Nashab." },
          { ar: "الْمَلَابِسُ هُنَا", translation: "Pakaiannya di sini.", grammarNote: "Logika: Lokasi." },
          { ar: "مَلَابِسُ رَخِيصَةٌ", translation: "Pakaian murah.", grammarNote: "Logika: Harga." }
        ]
      },
      {
        id: "l2_3_c29",
        wordAr: "مِيـزَانٌ",
        translation: "Timbangan",
        description: "Alat ukur berat.",
        category: "Alat Bantu",
        examples: [
          { ar: "الْمِيـزَانُ دَقِيقٌ", translation: "Timbangannya teliti.", grammarNote: "Logika: Kualitas." },
          { ar: "أَيْنَ الْمِيـزَانُ؟", translation: "Di mana timbangannya?", grammarNote: "Logika: Lokasi." },
          { ar: "هَذَا مِيـزَانٌ", translation: "Ini timbangan.", grammarNote: "Logika: Isim isyarah." },
          { ar: "مِيـزَانٌ جَدِيدٌ", translation: "Timbangan baru.", grammarNote: "Logika: Sifat." },
          { ar: "ضَعْ عَلَى الْمِيـزَانِ", translation: "Letakkan di timbangan.", grammarNote: "Logika: Perintah." },
          { ar: "الْمِيـزَانُ ثَقِيلٌ", translation: "Timbangannya berat.", grammarNote: "Logika: Fisik." },
          { ar: "مِيـزَانُ السُّوقِ", translation: "Timbangan pasar.", grammarNote: "Logika: Idhafah." },
          { ar: "اسْتَخْدِمِ الْمِيـزَانَ", translation: "Gunakan timbangan.", grammarNote: "Logika: Perintah." },
          { ar: "الْمِيـزَانُ هُنَاكَ", translation: "Timbangannya di sana.", grammarNote: "Logika: Lokasi." },
          { ar: "مِيـزَانٌ صَغِيرٌ", translation: "Timbangan kecil.", grammarNote: "Logika: Sifat." }
        ]
      },
      {
        id: "l2_3_c30",
        wordAr: "أَكْيَاسٌ",
        translation: "Plastik / Kantong",
        description: "Wadah barang.",
        category: "Alat Bantu",
        examples: [
          { ar: "خَمْسَةُ أَكْيَاسٍ", translation: "Lima plastik.", grammarNote: "Logika: 'Adad-Ma'dud." },
          { ar: "أَحْتَاجُ أَكْيَاسًا", translation: "Saya butuh plastik.", grammarNote: "Logika: Objek." },
          { ar: "أَكْيَاسٌ قَوِيَّةٌ", translation: "Plastik kuat.", grammarNote: "Logika: Sifat." },
          { ar: "كِيسٌ وَاحِدٌ", translation: "Satu plastik.", grammarNote: "Logika: Angka 1." },
          { ar: "أَكْيَاسٌ وَرَقِيَّةٌ", translation: "Kantong kertas.", grammarNote: "Logika: Sifat." },
          { ar: "ضَعْ فِي الْأَكْيَاسِ", translation: "Letakkan di plastik.", grammarNote: "Logika: Perintah." },
          { ar: "أَيْنَ الْأَكْيَاسُ؟", translation: "Di mana plastiknya?", grammarNote: "Logika: Lokasi." },
          { ar: "أَكْيَاسٌ كَثِيرَةٌ", translation: "Banyak plastik.", grammarNote: "Logika: Sifat." },
          { ar: "اشْتَرَيْتُ أَكْيَاسًا", translation: "Saya membeli plastik.", grammarNote: "Logika: Madi." },
          { ar: "هَذِهِ أَكْيَاسٌ", translation: "Ini plastik.", grammarNote: "Logika: Isyarah." }
        ]
      }
    ],
    grammar: {
      title: "Adad wa Ma'dud (Bilangan 1-10)",
      note: "Aturan keselarasan antara Angka (Adad) dan Benda yang dihitung (Ma'dud).",
      logicExplanation: "Belajar angka dalam bahasa Arab itu seperti permainan puzzle gender! 🧩\n\n1. **Angka 1-2**: Angkanya terletak SETELAH benda. Gendernya harus SAMA. Jika bendanya Mudzakkar, angkanya Mudzakkar. Jika bendanya Muannats, angkanya Muannats.\n   *Contoh: Kitabun Waahidun (1 Buku), Majallatun Waahidatun (1 Majalah).*\n\n2. **Angka 3-10**: Di sinilah keunikannya! Angka terletak SEBELUM benda. Gendernya harus BERLAWANAN dengan bentuk TUNGGAL bendanya.\n   * Jika benda tunggalnya Laki-laki (Mudzakkar), maka angkanya harus Perempuan (pakai Ta Marbutah).\n   * Jika benda tunggalnya Perempuan (Muannats), maka angkanya harus Laki-laki (tanpa Ta Marbutah).\n\n3. **Bentuk Benda (Ma'dud)**: Untuk angka 3-10, bendanya harus dalam bentuk JAMAK dan berharakat KASRAH (sebagai Mudhaf Ilaihi).",
      rules: [
        "Angka 1-2: Keselarasan Gender (Benda + Angka)",
        "Angka 3-10: Perlawanan Gender (Angka + Benda Jamak Majrur)",
        "Gunakan bentuk tunggal benda untuk menentukan gender angka 3-10"
      ],
      examples: [
        { ar: "اشْتَرَيْتُ كِتَابًا وَاحِدًا", translation: "Saya membeli satu buku.", grammarNote: "Logika: Angka 1 (Waahidan) mengikuti Kitab (Mudzakkar)." },
        { ar: "عِنْدِي ثَلَاثَةُ أَقْلَامٍ", translation: "Saya punya tiga pulpen.", grammarNote: "Logika: Qalam (M) -> Angka 3 (F)." },
        { ar: "أُرِيدُ خَمْسَ مَجَلَّاتٍ", translation: "Saya ingin lima majalah.", grammarNote: "Logika: Majallah (F) -> Angka 5 (M)." },
        { ar: "فِي السَّلَّةِ عَشَرُ تُفَّاحَاتٍ", translation: "Di keranjang ada sepuluh apel.", grammarNote: "Logika: Tuffahah (F) -> Angka 10 (M)." },
        { ar: "أَعْطِنِي سَبْعَةَ كِيلُوجْرَامَاتٍ", translation: "Berikan saya tujuh kilogram.", grammarNote: "Logika: Kilu (M) -> Angka 7 (F)." },
        { ar: "اشْتَرَيْتُ أَرْبَعَ حَبَّاتِ بُرْتُقَالٍ", translation: "Saya membeli empat butir jeruk.", grammarNote: "Logika: Habbah (F) -> Angka 4 (M)." }
      ],
      commonMistakes: [
        { wrong: "ثَلَاثَةُ مَجَلَّاتٍ", correct: "ثَلَاثُ مَجَلَّاتٍ", explanation: "Lupa membalik jenis: Majalah itu muannats, maka angka 3 harus mudzakkar." },
        { wrong: "خَمْسَةُ كِتَابٌ", correct: "خَمْسَةُ كُتُبٍ", explanation: "Salah bentuk benda: Setelah angka 3-10, benda harus JAMAK dan MAJRUR." },
        { wrong: "وَاحِدٌ كِتَابٌ", correct: "كِتَابٌ وَاحِدٌ", explanation: "Salah urutan: Untuk angka 1 dan 2, angka harus diletakkan SETELAH bendanya." },
        { wrong: "سَبْعَةُ أَيَّامٌ", correct: "سَبْعَةُ أَيَّامٍ", explanation: "Harakat salah: Benda harus majrur (kasrah) setelah angka 3-10." }
      ],
      tashrif: {
        title: "Tabel Bilangan 1-10 (Mudzakkar vs Muannats)",
        rows: [
          { dhamir: "1", dhaminMeaning: "Satu", fiil: "وَاحِدٌ (Waahid)", akhiran: "وَاحِدَةٌ (Waahidah)", contoh: "كِتَابٌ وَاحِدٌ / قِصَّةٌ وَاحِدَةٌ" },
          { dhamir: "2", dhaminMeaning: "Dua", fiil: "اِثْنَانِ (Itsnaan)", akhiran: "اِثْنَتَانِ (Itsnataani)", contoh: "كِتَابَانِ اثْنَانِ / قِصَّتَانِ اثْنَتَانِ" },
          { dhamir: "3", dhaminMeaning: "Tiga", fiil: "ثَلَاثٌ (Tsalaats)", akhiran: "ثَلَاثَةٌ (Tsalaatsah)", contoh: "ثَلَاثُ قِصَصٍ / ثَلَاثَةُ كُتُبٍ" },
          { dhamir: "4", dhaminMeaning: "Empat", fiil: "أَرْبَعٌ (Arba')", akhiran: "أَرْبَعَةٌ (Arba'ah)", contoh: "أَرْبَعُ قِصَصٍ / أَرْبَعَةُ كُتُبٍ" },
          { dhamir: "5", dhaminMeaning: "Lima", fiil: "خَمْسٌ (Khams)", akhiran: "خَمْسَةٌ (Khamsah)", contoh: "خَمْسُ قِصَصٍ / خَمْسَةُ كُتُبٍ" },
          { dhamir: "6", dhaminMeaning: "Enam", fiil: "سِتٌّ (Sitt)", akhiran: "سِتَّةٌ (Sittah)", contoh: "سِتُّ قِصَصٍ / سِتَّةُ كُتُبٍ" },
          { dhamir: "7", dhaminMeaning: "Tujuh", fiil: "سَبْعٌ (Sab')", akhiran: "سَبْعَةٌ (Sab'ah)", contoh: "سَبْعُ قِصَصٍ / سَبْعَةُ كُتُبٍ" },
          { dhamir: "8", dhaminMeaning: "Delapan", fiil: "ثَمَانٍ (Tsamaan)", akhiran: "ثَمَانِيَةٌ (Tsamaaniyah)", contoh: "ثَمَانِي قِصَصٍ / ثَمَانِيَةُ كُتُبٍ" },
          { dhamir: "9", dhaminMeaning: "Sembilan", fiil: "تِسْعٌ (Tis')", akhiran: "تِسْعَةٌ (Tis'ah)", contoh: "تِسْعُ قِصَصٍ / تِسْعَةُ كُتُبٍ" },
          { dhamir: "10", dhaminMeaning: "Sepuluh", fiil: "عَشْرٌ ('Asyr)", akhiran: "عَشَرَةٌ ('Asyarah)", contoh: "عَشْرُ قِصَصٍ / عَشَرَةُ كُتُبٍ" }
        ]
      }
    },
    dialog: {
      title: "Hiwar: Di Pasar Buah",
      speakerA: "PEMBELI",
      speakerB: "PENJUAL",
      lines: [
        { speaker: "PEMBELI", arabic: "السَّلَامُ عَلَيْكُمْ، هَلْ عِنْدَكَ فَوَاكِهـٌ طَازَجَةٌ؟", translation: "Assalamu'alaikum, apakah kamu punya buah-buahan segar?", note: "Tanya kualitas." },
        { speaker: "PENJUAL", arabic: "وَعَلَيْكُمُ السَّلَامُ، نَعَمْ يَا سَيِّدِي، عِنْدِي تُفَّاحٌ وَبُرْتُقَالٌ وَمَوْزٌ.", translation: "Wa'alaikumussalam, iya tuan, saya punya apel, jeruk, dan pisang.", note: "Inventaris barang." },
        { speaker: "PEMBELI", arabic: "بِكَمْ كِيلُو التُّفَّاحِ الْيَوْمَ؟", translation: "Berapa sekilo apel hari ini?", note: "Tanya harga." },
        { speaker: "PENJUAL", arabic: "الْكِيلُو بِعَشَرَةِ آلَافِ رُوبِيَّةٍ فَقَطْ.", translation: "Sekilo hanya sepuluh ribu rupiah saja.", note: "Harga murah." },
        { speaker: "PEMBELI", arabic: "هَذَا غَالٍ! هَلْ هُنَاكَ تَخْفِيضٌ؟", translation: "Ini mahal! Apakah ada diskon?", note: "Menawar." },
        { speaker: "PENJUAL", arabic: "طَيِّبٌ، إِذَا اشْتَرَيْتَ ثَلَاثَةَ كِيلُوجْرَامٍ، الثَّمَنُ خَمْسَةٌ وَعِشْرُونَ أَلْفًا.", translation: "Baiklah, jika kamu beli tiga kilo, harganya dua puluh lima ribu.", note: "Diskon paket." },
        { speaker: "PEMBELI", arabic: "مُنَاسِبٌ. أُرِيدُ ثَلَاثَةَ كِيلُوجْرَامٍ مِنَ التُّفَّاحِ وَأَرْبَعَ حَبَّاتِ بُرْتُقَالٍ.", translation: "Cocok. Saya mau tiga kilo apel dan empat butir jeruk.", note: "Penerapan angka." },
        { speaker: "PENJUAL", arabic: "هَلْ تُرِيدُ شَيْئًا آخَرَ؟ عِنْدِي مَوْزٌ لَذِيذٌ.", translation: "Apakah kamu mau yang lain? Saya punya pisang lezat.", note: "Upselling." },
        { speaker: "PEMBELI", arabic: "نَعَمْ، أَعْطِنِي رَبْطَةً وَاحِدَةً مِنَ الْمَوْزِ.", translation: "Iya, berikan saya seikat pisang saja.", note: "Satuan ikat." },
        { speaker: "PENJUAL", arabic: "تَفَضَّلْ، هَذِهِ بِضَاعَتُكَ. الْمَجْمُوعُ ثَلَاثُونَ أَلْفًا.", translation: "Silakan, ini barangmu. Totalnya tiga puluh ribu.", note: "Penyerahan barang." },
        { speaker: "PEMBELI", arabic: "تَفَضَّلْ، هَذِهِ خَمْسُونَ أَلْفًا. أَيْنَ الْبَاقِي؟", translation: "Silakan, ini lima puluh ribu. Mana kembaliannya?", note: "Pembayaran." },
        { speaker: "PENJUAL", arabic: "هَذَا الْبَاقِي، عِشْرُونَ أَلْفًا. شُكْرًا لَكَ!", translation: "Ini kembaliannya, dua puluh ribu. Terima kasih!", note: "Kembalian." },
        { speaker: "PEMBELI", arabic: "عَفْوًا، مَعَ السَّلَامَةِ.", translation: "Sama-sama, sampai jumpa.", note: "Penutup." }
      ]
    },
    quiz: [
      {
        id: "l2_3_q1",
        type: "multiple-choice",
        question: "Apa arti dari 'ثَمَنٌ' (Thaman)?",
        options: ["Uang", "Harga", "Pasar", "Toko"],
        correctAnswer: "Harga",
        explanation: "Thaman berarti harga."
      },
      {
        id: "l2_3_q2",
        type: "multiple-choice",
        question: "Manakah kata yang berarti 'Penjual'?",
        options: ["مُشْتَرٍ", "كَاشِير", "بَائِعٌ", "تَاجِرٌ"],
        correctAnswer: "بَائِعٌ",
        explanation: "Baa'i' adalah orang yang menjual."
      },
      {
        id: "l2_3_q3",
        type: "multiple-choice",
        question: "Jika kamu ingin 'Menawar' harga, kata apa yang digunakan?",
        options: ["يَشْتَرِي", "يَدْفَعُ", "يُسَاوِمُ", "يَبِيعُ"],
        correctAnswer: "يُسَاوِمُ",
        explanation: "Yusawimu berarti menawar."
      },
      {
        id: "l2_3_q4",
        type: "multiple-choice",
        question: "Apa arti dari 'بَاقِي' (Baaqi)?",
        options: ["Diskon", "Uang Pas", "Kembalian", "Total"],
        correctAnswer: "Kembalian",
        explanation: "Baaqi berarti kembalian."
      },
      {
        id: "l2_3_q5",
        type: "multiple-choice",
        question: "Satuan untuk sayuran yang diikat adalah...",
        options: ["كِيلُو", "مِتْرٌ", "حَبَّةٌ", "رَبْطَةٌ"],
        correctAnswer: "رَبْطَةٌ",
        explanation: "Rabthah berarti ikatan."
      },
      {
        id: "l2_3_q6",
        type: "multiple-choice",
        question: "Lawan kata 'غَالٍ' (Mahal) adalah...",
        options: ["جَمِيلٌ", "رَخِيصٌ", "طَازَجٌ", "وَاسِعٌ"],
        correctAnswer: "رَخِيصٌ",
        explanation: "Rakhiis berarti murah."
      },
      {
        id: "l2_3_q7",
        type: "multiple-choice",
        question: "Apa bahasa Arab dari 'Toko'?",
        options: ["سُوقٌ", "مَتْجَرٌ", "مَطْعَمٌ", "بَيْتٌ"],
        correctAnswer: "مَتْجَرٌ",
        explanation: "Matjar berarti toko."
      },
      {
        id: "l2_3_q8",
        type: "multiple-choice",
        question: "Apa arti 'طَازَجٌ' (Thazaj)?",
        options: ["Enak", "Segar", "Manis", "Besar"],
        correctAnswer: "Segar",
        explanation: "Thazaj berarti segar."
      },
      {
        id: "l2_3_q9",
        type: "multiple-choice",
        question: "Di mana pembeli biasanya membayar?",
        options: ["فِي السُّوقِ", "عِنْدَ الْكَاشِيرِ", "فِي الْمَخْزَنِ", "فِي الْبَيْتِ"],
        correctAnswer: "عِنْدَ الْكَاشِيرِ",
        explanation: "Pembayaran di kasir."
      },
      {
        id: "l2_3_q10",
        type: "multiple-choice",
        question: "Apa arti 'تَخْفِيضٌ'?",
        options: ["Kenaikan", "Harga Pas", "Diskon", "Uang Muka"],
        correctAnswer: "Diskon",
        explanation: "Takhfiidh berarti diskon."
      },
      {
        id: "l2_3_q11",
        type: "multiple-choice",
        question: "Bagaimana cara mengatakan 'Tiga Pulpen'? (Qalam = M)",
        options: ["ثَلَاثُ أَقْلَامٍ", "ثَلَاثَةُ أَقْلَامٍ", "أَقْلَامٌ ثَلَاثَةُ", "ثَلَاثَةُ قَلَمٌ"],
        correctAnswer: "ثَلَاثَةُ أَقْلَامٍ",
        explanation: "Qalam (M) -> Angka 3 (F) + Jamak Majrur."
      },
      {
        id: "l2_3_q12",
        type: "multiple-choice",
        question: "Pilihlah: 'Lima Majalah' (Majallah = F)",
        options: ["خَمْسَةُ مَجَلَّاتٍ", "خَمْسُ مَجَلَّاتٍ", "خَمْسَةُ مَجَلَّةٌ", "مَجَلَّاتٌ خَمْسٌ"],
        correctAnswer: "خَمْسُ مَجَلَّاتٍ",
        explanation: "Majallah (F) -> Angka 5 (M)."
      },
      {
        id: "l2_3_q13",
        type: "multiple-choice",
        question: "Cara menyebut 'Satu Buku' (Kitab = M) adalah...",
        options: ["وَاحِدٌ كِتَابٌ", "كِتَابٌ وَاحِدٌ", "ثَلَاثَةُ كُتُبٍ", "كِتَابٌ وَاحِدَةٌ"],
        correctAnswer: "كِتَابٌ وَاحِدٌ",
        explanation: "Angka 1 mengikuti gender benda."
      },
      {
        id: "l2_3_q14",
        type: "multiple-choice",
        question: "Bagaimana menyebut 'Sepuluh Siswa' (Thaalib = M)?",
        options: ["عَشْرُ طُلَّابٍ", "عَشَرَةُ طُلَّابٍ", "عَشَرَةُ طَالِبٍ", "طُلَّابٌ عَشَرَةٌ"],
        correctAnswer: "عَشَرَةُ طُلَّابٍ",
        explanation: "Thaalib (M) -> Angka 10 (F)."
      },
      {
        id: "l2_3_q15",
        type: "multiple-choice",
        question: "Pilihlah: 'Empat Butir' (Habbah = F)",
        options: ["أَرْبَعَةُ حَبَّاتٍ", "أَرْبَعُ حَبَّاتٍ", "أَرْبَعَةُ حَبَّةٍ", "حَبَّاتٌ أَرْبَعُ"],
        correctAnswer: "أَرْبَعُ حَبَّاتٍ",
        explanation: "Habbah (F) -> Angka 4 (M)."
      },
      {
        id: "l2_3_q16",
        type: "multiple-choice",
        question: "Manakah yang BENAR untuk angka 2?",
        options: ["كِتَابَانِ اثْنَتَانِ", "كِتَابَانِ اثْنَانِ", "اثْنَانِ كِتَابَانِ", "كِتَابٌ اثْنَانِ"],
        correctAnswer: "كِتَابَانِ اثْنَانِ",
        explanation: "Itsnaan mengikuti Kitab (M)."
      },
      {
        id: "l2_3_q17",
        type: "multiple-choice",
        question: "Bagaimana menyebut 'Enam Hari' (Yaum = M)?",
        options: ["سِتُّ أَيَّامٍ", "سِتَّةُ أَيَّامٍ", "سِتَّةُ يَوْمٍ", "أَيَّامٌ سِتَّةٌ"],
        correctAnswer: "سِتَّةُ أَيَّامٍ",
        explanation: "Yaum (M) -> Angka 6 (F)."
      },
      {
        id: "l2_3_q18",
        type: "multiple-choice",
        question: "Pilihlah: 'Satu Jam' (Saa'ah = F)",
        options: ["سَاعَةٌ وَاحِدٌ", "سَاعَةٌ وَاحِدَةٌ", "وَاحِدَةٌ سَاعَةٌ", "ثَلَاثُ سَاعَاتٍ"],
        correctAnswer: "سَاعَةٌ وَاحِدَةٌ",
        explanation: "Waahidah mengikuti Saa'ah (F)."
      },
      {
        id: "l2_3_q19",
        type: "multiple-choice",
        question: "Bagaimana menyebut 'Tujuh Ribu' (Alf = M)?",
        options: ["سَبْعُ آلَافٍ", "سَبْعَةُ آلَافٍ", "سَبْعَةُ أَلْفٍ", "آلَافٌ سَبْعَةٌ"],
        correctAnswer: "سَبْعَةُ آلَافٍ",
        explanation: "Alf (M) -> Angka 7 (F)."
      },
      {
        id: "l2_3_q20",
        type: "multiple-choice",
        question: "Apa bentuk jamak dari 'Bait' (Rumah)?",
        options: ["بَيْتَاتٌ", "بُيُوتٍ", "أَبْيَاتٍ", "بُيُوتًا"],
        correctAnswer: "بُيُوتٍ",
        explanation: "Jamaknya Buyuut."
      },
      {
        id: "l2_3_q21",
        type: "multiple-choice",
        question: "Bagaimana menyebut 'Dua Majalah' (Majallah = F)?",
        options: ["مَجَلَّتَانِ اثْنَانِ", "مَجَلَّتَانِ اثْنَتَانِ", "اثْنَتَانِ مَجَلَّتَانِ", "مَجَلَّتَانِ مَجَلَّتَانِ"],
        correctAnswer: "مَجَلَّتَانِ اثْنَتَانِ",
        explanation: "Itsnataani mengikuti muannats."
      },
      {
        id: "l2_3_q22",
        type: "multiple-choice",
        question: "Manakah yang SALAH untuk angka 3-10?",
        options: ["Angka berlawanan gender", "Benda harus tunggal", "Benda harus jamak", "Benda harus majrur"],
        correctAnswer: "Benda harus tunggal",
        explanation: "Ma'dud harus jamak."
      },
      {
        id: "l2_3_q23",
        type: "multiple-choice",
        question: "Bagaimana menyebut 'Sembilan Pohon' (Syajarah = F)?",
        options: ["تِسْعَةُ أَشْجَارٍ", "تِسْعُ أَشْجَارٍ", "تِسْعُ شَجَرَةٍ", "أَشْجَارٌ تِسْعَةٌ"],
        correctAnswer: "تِسْعُ أَشْجَارٍ",
        explanation: "Syajarah (F) -> Angka 9 (M)."
      },
      {
        id: "l2_3_q24",
        type: "multiple-choice",
        question: "Apa bahasa Arab dari 'Delapan Siswi' (Thaalibah = F)?",
        options: ["ثَمَانِيَةُ طَالِبَاتٍ", "ثَمَانِي طَالِبَاتٍ", "ثَمَانِيَةُ طَالِبَةٍ", "طَالِبَاتٌ ثَمَانِيَةٌ"],
        correctAnswer: "ثَمَانِي طَالِبَاتٍ",
        explanation: "Thaalibah (F) -> Angka 8 (M)."
      },
      {
        id: "l2_3_q25",
        type: "multiple-choice",
        question: "Manakah yang benar untuk 'Empat Kilo' (Kilu = M)?",
        options: ["أَرْبَعُ كِيلُوجْرَامٍ", "أَرْبَعَةُ كِيلُوجْرَامٍ", "أَرْبَعَةُ كِيلُو", "كِيلُو أَرْبَعَةٌ"],
        correctAnswer: "أَرْبَعَةُ كِيلُوجْرَامٍ",
        explanation: "Kilu (M) -> Angka 4 (F)."
      },
      {
        id: "l2_3_q26",
        type: "multiple-choice",
        question: "Bagaimana menyebut 'Lima Meter' (Mitr = M)?",
        options: ["خَمْسُ أَمْتَارٍ", "خَمْسَةُ أَمْتَارٍ", "خَمْسَةُ مِتْرٍ", "أَمْتَارٌ خَمْسَةٌ"],
        correctAnswer: "خَمْسَةُ أَمْتَارٍ",
        explanation: "Mitr (M) -> Angka 5 (F)."
      },
      {
        id: "l2_3_q27",
        type: "multiple-choice",
        question: "Pilihlah: 'Satu Jeruk' (Burtuqalah = F)",
        options: ["بُرْتُقَالٌ وَاحِدٌ", "بُرْتُقَالَةٌ وَاحِدَةٌ", "وَاحِدَةٌ بُرْتُقَالَةٌ", "بُرْتُقَالَةٌ وَاحِدٌ"],
        correctAnswer: "بُرْتُقَالَةٌ وَاحِدَةٌ",
        explanation: "Keselarasan muannats."
      },
      {
        id: "l2_3_q28",
        type: "multiple-choice",
        question: "Bagaimana menyebut 'Tiga Ikat' (Rabthah = F)?",
        options: ["ثَلَاثَةُ رَبَطَاتٍ", "ثَلَاثُ رَبَطَاتٍ", "ثَلَاثُ رَبْطَةٍ", "رَبَطَاتٌ ثَلَاثٌ"],
        correctAnswer: "ثَلَاثُ رَبَطَاتٍ",
        explanation: "Rabthah (F) -> Angka 3 (M)."
      },
      {
        id: "l2_3_q29",
        type: "multiple-choice",
        question: "Angka 10 untuk benda Mudzakkar adalah...",
        options: ["عَشْرٌ", "عَشَرَةٌ", "عَشَرٌ", "عَشَرَةً"],
        correctAnswer: "عَشَرَةٌ",
        explanation: "Asyarah berlawanan gender."
      },
      {
        id: "l2_3_q30",
        type: "multiple-choice",
        question: "Bentuk tunggal 'Kutub' (Buku) adalah...",
        options: ["كِتَابَةٌ", "كَتَبَ", "كِتَابٌ", "مَكْتَبٌ"],
        correctAnswer: "كِتَابٌ",
        explanation: "Kitab (M) adalah bentuk tunggalnya."
      }
    ]
  }
};
