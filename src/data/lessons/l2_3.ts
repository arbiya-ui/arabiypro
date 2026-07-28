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
    totalSentencesDisplay: "300+ Kalimat Transaksi",
    cards: [
      // KELOMPOK 1 — KATA BENDA & SATUAN (1-15)
      {
        id: "l2_3_c1",
        wordAr: "ثَمَنٌ",
        translation: "Harga",
        description: "Nilai tukar yang ditetapkan untuk suatu barang.",
        category: "Istilah Bisnis",
        examples: [
          { ar: "ثَمَنٌ وَاحِدٌ", translation: "Satu harga.", grammarNote: "Logika: Angka 1 (Waahid) mengikuti Thaman (Mudzakkar)." },
          { ar: "ثَمَنَانِ اثْنَانِ", translation: "Dua harga.", grammarNote: "Logika: Tasniyah (dua) mengikuti gender mudzakkar." },
          { ar: "ثَلَاثَةُ أَثْمَانٍ", translation: "Tiga harga.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ أَثْمَانٍ", translation: "Empat harga.", grammarNote: "Logika: Ma'dud jamak majrur (Athmaan)." },
          { ar: "خَمْسَةُ أَثْمَانٍ", translation: "Lima harga.", grammarNote: "Logika: Angka 5 muannats (Khamsah)." },
          { ar: "سِتَّةُ أَثْمَانٍ", translation: "Enam harga.", grammarNote: "Logika: Angka 6 muannats (Sittah)." },
          { ar: "سَبْعَةُ أَثْمَانٍ", translation: "Tujuh harga.", grammarNote: "Logika: Angka 7 muannats (Sab'ah)." },
          { ar: "ثَمَانِيَةُ أَثْمَانٍ", translation: "Delapan harga.", grammarNote: "Logika: Angka 8 muannats (Tsamaaniyah)." },
          { ar: "تِسْعَةُ أَثْمَانٍ", translation: "Sembilan harga.", grammarNote: "Logika: Angka 9 muannats (Tis'ah)." },
          { ar: "عَشَرَةُ أَثْمَانٍ", translation: "Sepuluh harga.", grammarNote: "Logika: Angka 10 muannats (Asyarah)." }
        ]
      },
      {
        id: "l2_3_c2",
        wordAr: "نُقُودٌ",
        translation: "Uang",
        description: "Alat tukar resmi dalam transaksi (jamak dari Naqd).",
        category: "Istilah Bisnis",
        examples: [
          { ar: "نُقُودٌ وَاحِدَةٌ", translation: "Satu (keping/lembar) uang.", grammarNote: "Logika: Nuqud dianggap muannats (jamak benda mati)." },
          { ar: "نُقُودَانِ اثْنَتَانِ", translation: "Dua (keping/lembar) uang.", grammarNote: "Logika: Tasniyah muannats." },
          { ar: "ثَلَاثُ نُقُودٍ", translation: "Tiga (keping/lembar) uang.", grammarNote: "Logika: Angka 3-10, 'Adad (M) berlawanan gender dengan Ma'dud (F)." },
          { ar: "أَرْبَعُ نُقُودٍ", translation: "Empat (keping/lembar) uang.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسُ نُقُودٍ", translation: "Lima (keping/lembar) uang.", grammarNote: "Logika: Angka 5 mudzakkar (Khams)." },
          { ar: "سِتُّ نُقُودٍ", translation: "Enam (keping/lembar) uang.", grammarNote: "Logika: Angka 6 mudzakkar (Sitt)." },
          { ar: "سَبْعُ نُقُودٍ", translation: "Tujuh (keping/lembar) uang.", grammarNote: "Logika: Angka 7 mudzakkar (Sab')." },
          { ar: "ثَمَانِي نُقُودٍ", translation: "Delapan (keping/lembar) uang.", grammarNote: "Logika: Angka 8 mudzakkar (Tsamaani)." },
          { ar: "تِسْعُ نُقُودٍ", translation: "Sembilan (keping/lembar) uang.", grammarNote: "Logika: Angka 9 mudzakkar (Tis')." },
          { ar: "عَشَرُ نُقُودٍ", translation: "Sepuluh (keping/lembar) uang.", grammarNote: "Logika: Angka 10 mudzakkar (Asyr)." }
        ]
      },
      {
        id: "l2_3_c3",
        wordAr: "بَاقِي",
        translation: "Kembalian / Sisa",
        description: "Sisa uang setelah pembayaran.",
        category: "Istilah Bisnis",
        examples: [
          { ar: "بَاقٍ وَاحِدٌ", translation: "Satu kembalian.", grammarNote: "Logika: Baaqin (M) -> Waahid (M)." },
          { ar: "بَاقِيَانِ اثْنَانِ", translation: "Dua kembalian.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ بَوَاقٍ", translation: "Tiga kembalian.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ بَوَاقٍ", translation: "Empat kembalian.", grammarNote: "Logika: Ma'dud jamak majrur (Bawaaqin)." },
          { ar: "خَمْسَةُ بَوَاقٍ", translation: "Lima kembalian.", grammarNote: "Logika: Angka 5 muannats (Khamsah)." },
          { ar: "سِتَّةُ بَوَاقٍ", translation: "Enam kembalian.", grammarNote: "Logika: Angka 6 muannats (Sittah)." },
          { ar: "سَبْعَةُ بَوَاقٍ", translation: "Tujuh kembalian.", grammarNote: "Logika: Angka 7 muannats (Sab'ah)." },
          { ar: "ثَمَانِيَةُ بَوَاقٍ", translation: "Delapan kembalian.", grammarNote: "Logika: Angka 8 muannats (Tsamaaniyah)." },
          { ar: "تِسْعَةُ بَوَاقٍ", translation: "Sembilan kembalian.", grammarNote: "Logika: Angka 9 muannats (Tis'ah)." },
          { ar: "عَشَرَةُ بَوَاقٍ", translation: "Sepuluh kembalian.", grammarNote: "Logika: Angka 10 muannats (Asyarah)." }
        ]
      },
      {
        id: "l2_3_c4",
        wordAr: "تَخْفِيضٌ",
        translation: "Diskon / Potongan Harga",
        description: "Pengurangan harga dari nilai asli.",
        category: "Istilah Bisnis",
        examples: [
          { ar: "تَخْفِيضٌ وَاحِدٌ", translation: "Satu diskon.", grammarNote: "Logika: Takhfiidh (M) -> Waahid (M)." },
          { ar: "تَخْفِيضَانِ اثْنَانِ", translation: "Dua diskon.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ تَخْفِيضَاتٍ", translation: "Tiga diskon.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ تَخْفِيضَاتٍ", translation: "Empat diskon.", grammarNote: "Logika: Ma'dud jamak majrur (Takhfiidhaat)." },
          { ar: "خَمْسَةُ تَخْفِيضَاتٍ", translation: "Lima diskon.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ تَخْفِيضَاتٍ", translation: "Enam diskon.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ تَخْفِيضَاتٍ", translation: "Tujuh diskon.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ تَخْفِيضَاتٍ", translation: "Delapan diskon.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ تَخْفِيضَاتٍ", translation: "Sembilan diskon.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ تَخْفِيضَاتٍ", translation: "Sepuluh diskon.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c5",
        wordAr: "كَاشِير",
        translation: "Kasir",
        description: "Tempat atau orang yang melayani pembayaran.",
        category: "Lokasi",
        examples: [
          { ar: "كَاشِيرٌ وَاحِدٌ", translation: "Satu kasir.", grammarNote: "Logika: Kashiir (M) -> Waahid (M)." },
          { ar: "كَاشِيرَانِ اثْنَانِ", translation: "Dua kasir.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ كَاشِيرِينَ", translation: "Tiga kasir.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ كَاشِيرِينَ", translation: "Empat kasir.", grammarNote: "Logika: Ma'dud jamak majrur (Kashiiriin)." },
          { ar: "خَمْسَةُ كَاشِيرِينَ", translation: "Lima kasir.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ كَاشِيرِينَ", translation: "Enam kasir.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ كَاشِيرِينَ", translation: "Tujuh kasir.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ كَاشِيرِينَ", translation: "Delapan kasir.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ كَاشِيرِينَ", translation: "Sembilan kasir.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ كَاشِيرِينَ", translation: "Sepuluh kasir.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c6",
        wordAr: "كِيلُو",
        translation: "Kilo",
        description: "Satuan berat standar internasional (Kilogram).",
        category: "Satuan",
        examples: [
          { ar: "كِيلُوجْرَامٌ وَاحِدٌ", translation: "Satu kilogram.", grammarNote: "Logika: Kilu (M) -> Waahid (M)." },
          { ar: "كِيلُوجْرَامَانِ اثْنَانِ", translation: "Dua kilogram.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ كِيلُوجْرَامَاتٍ", translation: "Tiga kilogram.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ كِيلُوجْرَامَاتٍ", translation: "Empat kilogram.", grammarNote: "Logika: Ma'dud jamak majrur (Kiluujraamaat)." },
          { ar: "خَمْسَةُ كِيلُوجْرَامَاتٍ", translation: "Lima kilogram.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ كِيلُوجْرَامَاتٍ", translation: "Enam kilogram.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ كِيلُوجْرَامَاتٍ", translation: "Tujuh kilogram.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ كِيلُوجْرَامَاتٍ", translation: "Delapan kilogram.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ كِيلُوجْرَامَاتٍ", translation: "Sembilan kilogram.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ كِيلُوجْرَامَاتٍ", translation: "Sepuluh kilogram.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c7",
        wordAr: "مِتْرٌ",
        translation: "Meter",
        description: "Satuan panjang untuk kain atau bahan.",
        category: "Satuan",
        examples: [
          { ar: "مِتْرٌ وَاحِدٌ", translation: "Satu meter.", grammarNote: "Logika: Mitr (M) -> Waahid (M)." },
          { ar: "مِتْرَانِ اثْنَانِ", translation: "Dua meter.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ أَمْتَارٍ", translation: "Tiga meter.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ أَمْتَارٍ", translation: "Empat meter.", grammarNote: "Logika: Ma'dud jamak majrur (Amtaar)." },
          { ar: "خَمْسَةُ أَمْتَارٍ", translation: "Lima meter.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ أَمْتَارٍ", translation: "Enam meter.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ أَمْتَارٍ", translation: "Tujuh meter.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ أَمْتَارٍ", translation: "Delapan meter.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ أَمْتَارٍ", translation: "Sembilan meter.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ أَمْتَارٍ", translation: "Sepuluh meter.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c8",
        wordAr: "حَبَّةٌ",
        translation: "Buah / Butir / Biji",
        description: "Satuan untuk barang kecil atau buah secara satuan.",
        category: "Satuan",
        examples: [
          { ar: "حَبَّةٌ وَاحِدَةٌ", translation: "Satu butir.", grammarNote: "Logika: Habbah (F) -> Waahidah (F)." },
          { ar: "حَبَّتَانِ اثْنَتَانِ", translation: "Dua butir.", grammarNote: "Logika: Tasniyah muannats." },
          { ar: "ثَلَاثُ حَبَّاتٍ", translation: "Tiga butir.", grammarNote: "Logika: Angka 3-10, 'Adad (M) berlawanan gender dengan Ma'dud (F)." },
          { ar: "أَرْبَعُ حَبَّاتٍ", translation: "Empat butir.", grammarNote: "Logika: Ma'dud jamak majrur (Habbaat)." },
          { ar: "خَمْسُ حَبَّاتٍ", translation: "Lima butir.", grammarNote: "Logika: Angka 5 mudzakkar." },
          { ar: "سِتُّ حَبَّاتٍ", translation: "Enam butir.", grammarNote: "Logika: Angka 6 mudzakkar." },
          { ar: "سَبْعُ حَبَّاتٍ", translation: "Tujuh butir.", grammarNote: "Logika: Angka 7 mudzakkar." },
          { ar: "ثَمَانِي حَبَّاتٍ", translation: "Delapan butir.", grammarNote: "Logika: Angka 8 mudzakkar." },
          { ar: "تِسْعُ حَبَّاتٍ", translation: "Sembilan butir.", grammarNote: "Logika: Angka 9 mudzakkar." },
          { ar: "عَشَرُ حَبَّاتٍ", translation: "Sepuluh butir.", grammarNote: "Logika: Angka 10 mudzakkar." }
        ]
      },
      {
        id: "l2_3_c9",
        wordAr: "رَبْطَةٌ",
        translation: "Ikat",
        description: "Satuan untuk sayuran atau barang yang diikat.",
        category: "Satuan",
        examples: [
          { ar: "رَبْطَةٌ وَاحِدَةٌ", translation: "Satu ikat.", grammarNote: "Logika: Rabthah (F) -> Waahidah (F)." },
          { ar: "رَبْطَتَانِ اثْنَتَانِ", translation: "Dua ikat.", grammarNote: "Logika: Tasniyah muannats." },
          { ar: "ثَلَاثُ رَبَطَاتٍ", translation: "Tiga ikat.", grammarNote: "Logika: Angka 3-10, 'Adad (M) berlawanan gender dengan Ma'dud (F)." },
          { ar: "أَرْبَعُ رَبَطَاتٍ", translation: "Empat ikat.", grammarNote: "Logika: Ma'dud jamak majrur (Rabathaat)." },
          { ar: "خَمْسُ رَبَطَاتٍ", translation: "Lima ikat.", grammarNote: "Logika: Angka 5 mudzakkar." },
          { ar: "سِتُّ رَبَطَاتٍ", translation: "Enam ikat.", grammarNote: "Logika: Angka 6 mudzakkar." },
          { ar: "سَبْعُ رَبَطَاتٍ", translation: "Tujuh ikat.", grammarNote: "Logika: Angka 7 mudzakkar." },
          { ar: "ثَمَانِي رَبَطَاتٍ", translation: "Delapan ikat.", grammarNote: "Logika: Angka 8 mudzakkar." },
          { ar: "تِسْعُ رَبَطَاتٍ", translation: "Sembilan ikat.", grammarNote: "Logika: Angka 9 mudzakkar." },
          { ar: "عَشَرُ رَبَطَاتٍ", translation: "Sepuluh ikat.", grammarNote: "Logika: Angka 10 mudzakkar." }
        ]
      },
      {
        id: "l2_3_c10",
        wordAr: "سُوقٌ",
        translation: "Pasar",
        description: "Tempat berkumpulnya penjual dan pembeli.",
        category: "Lokasi",
        examples: [
          { ar: "سُوقٌ وَاحِدٌ", translation: "Satu pasar.", grammarNote: "Logika: Suuq (M) -> Waahid (M)." },
          { ar: "سُوقَانِ اثْنَانِ", translation: "Dua pasar.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ أَسْوَاقٍ", translation: "Tiga pasar.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ أَسْوَاقٍ", translation: "Empat pasar.", grammarNote: "Logika: Ma'dud jamak majrur (Aswaaq)." },
          { ar: "خَمْسَةُ أَسْوَاقٍ", translation: "Lima pasar.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ أَسْوَاقٍ", translation: "Enam pasar.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ أَسْوَاقٍ", translation: "Tujuh pasar.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ أَسْوَاقٍ", translation: "Delapan pasar.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ أَسْوَاقٍ", translation: "Sembilan pasar.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ أَسْوَاقٍ", translation: "Sepuluh pasar.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c11",
        wordAr: "مَتْجَرٌ",
        translation: "Toko / Swalayan",
        description: "Tempat berdagang yang lebih modern atau permanen.",
        category: "Lokasi",
        examples: [
          { ar: "مَتْجَرٌ وَاحِدٌ", translation: "Satu toko.", grammarNote: "Logika: Matjar (M) -> Waahid (M)." },
          { ar: "مَتْجَرَانِ اثْنَانِ", translation: "Dua toko.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ مَتَاجِرَ", translation: "Tiga toko.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ مَتَاجِرَ", translation: "Empat toko.", grammarNote: "Logika: Ma'dud jamak majrur (Mataajir - Diptote)." },
          { ar: "خَمْسَةُ مَتَاجِرَ", translation: "Lima toko.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ مَتَاجِرَ", translation: "Enam toko.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ مَتَاجِرَ", translation: "Tujuh toko.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ مَتَاجِرَ", translation: "Delapan toko.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ مَتَاجِرَ", translation: "Sembilan toko.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ مَتَاجِرَ", translation: "Sepuluh toko.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c12",
        wordAr: "بَائِعٌ",
        translation: "Penjual",
        description: "Orang yang menawarkan barang dagangan.",
        category: "Orang",
        examples: [
          { ar: "بَائِعٌ وَاحِدٌ", translation: "Satu penjual.", grammarNote: "Logika: Baa'i' (M) -> Waahid (M)." },
          { ar: "بَائِعَانِ اثْنَانِ", translation: "Dua penjual.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ بَائِعِينَ", translation: "Tiga penjual.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ بَائِعِينَ", translation: "Empat penjual.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسَةُ بَائِعِينَ", translation: "Lima penjual.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ بَائِعِينَ", translation: "Enam penjual.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ بَائِعِينَ", translation: "Tujuh penjual.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ بَائِعِينَ", translation: "Delapan penjual.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ بَائِعِينَ", translation: "Sembilan penjual.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ بَائِعِينَ", translation: "Sepuluh penjual.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c13",
        wordAr: "مُشْتَرٍ",
        translation: "Pembeli",
        description: "Orang yang menukarkan uang dengan barang.",
        category: "Orang",
        examples: [
          { ar: "مُشْتَرٍ وَاحِدٌ", translation: "Satu pembeli.", grammarNote: "Logika: Musytarin (M) -> Waahid (M)." },
          { ar: "مُشْتَرِيَانِ اثْنَانِ", translation: "Dua pembeli.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ مُشْتَرِينَ", translation: "Tiga pembeli.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ مُشْتَرِينَ", translation: "Empat pembeli.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسَةُ مُشْتَرِينَ", translation: "Lima pembeli.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ مُشْتَرِينَ", translation: "Enam pembeli.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ مُشْتَرِينَ", translation: "Tujuh pembeli.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ مُشْتَرِينَ", translation: "Delapan pembeli.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ مُشْتَرِينَ", translation: "Sembilan pembeli.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ مُشْتَرِينَ", translation: "Sepuluh pembeli.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c14",
        wordAr: "بِضَاعَةٌ",
        translation: "Barang Dagangan",
        description: "Komoditas yang ditawarkan untuk dijual.",
        category: "Istilah Bisnis",
        examples: [
          { ar: "بِضَاعَةٌ وَاحِدَةٌ", translation: "Satu barang.", grammarNote: "Logika: Bidha'ah (F) -> Waahidah (F)." },
          { ar: "بِضَاعَتَانِ اثْنَتَانِ", translation: "Dua barang.", grammarNote: "Logika: Tasniyah muannats." },
          { ar: "ثَلَاثُ بَضَائِعَ", translation: "Tiga barang.", grammarNote: "Logika: Angka 3-10, 'Adad (M) berlawanan gender dengan Ma'dud (F)." },
          { ar: "أَرْبَعُ بَضَائِعَ", translation: "Empat barang.", grammarNote: "Logika: Ma'dud jamak majrur (Badha'i' - Diptote)." },
          { ar: "خَمْسُ بَضَائِعَ", translation: "Lima barang.", grammarNote: "Logika: Angka 5 mudzakkar." },
          { ar: "سِتُّ بَضَائِعَ", translation: "Enam barang.", grammarNote: "Logika: Angka 6 mudzakkar." },
          { ar: "سَبْعُ بَضَائِعَ", translation: "Tujuh barang.", grammarNote: "Logika: Angka 7 mudzakkar." },
          { ar: "ثَمَانِي بَضَائِعَ", translation: "Delapan barang.", grammarNote: "Logika: Angka 8 mudzakkar." },
          { ar: "تِسْعُ بَضَائِعَ", translation: "Sembilan barang.", grammarNote: "Logika: Angka 9 mudzakkar." },
          { ar: "عَشَرُ بَضَائِعَ", translation: "Sepuluh barang.", grammarNote: "Logika: Angka 10 mudzakkar." }
        ]
      },
      {
        id: "l2_3_c15",
        wordAr: "قَائِمَةٌ",
        translation: "Daftar / List",
        description: "Catatan barang yang ingin dibeli.",
        category: "Alat Bantu",
        examples: [
          { ar: "قَائِمَةٌ وَاحِدَةٌ", translation: "Satu daftar.", grammarNote: "Logika: Qa'imah (F) -> Waahidah (F)." },
          { ar: "قَائِمَتَانِ اثْنَتَانِ", translation: "Dua daftar.", grammarNote: "Logika: Tasniyah muannats." },
          { ar: "ثَلَاثُ قَوَائِمَ", translation: "Tiga daftar.", grammarNote: "Logika: Angka 3-10, 'Adad (M) berlawanan gender dengan Ma'dud (F)." },
          { ar: "أَرْبَعُ قَوَائِمَ", translation: "Empat daftar.", grammarNote: "Logika: Ma'dud jamak majrur (Qawa'im - Diptote)." },
          { ar: "خَمْسُ قَوَائِمَ", translation: "Lima daftar.", grammarNote: "Logika: Angka 5 mudzakkar." },
          { ar: "سِتُّ قَوَائِمَ", translation: "Enam daftar.", grammarNote: "Logika: Angka 6 mudzakkar." },
          { ar: "سَبْعُ قَوَائِمَ", translation: "Tujuh daftar.", grammarNote: "Logika: Angka 7 mudzakkar." },
          { ar: "ثَمَانِي قَوَائِمَ", translation: "Delapan daftar.", grammarNote: "Logika: Angka 8 mudzakkar." },
          { ar: "تِسْعُ قَوَائِمَ", translation: "Sembilan daftar.", grammarNote: "Logika: Angka 9 mudzakkar." },
          { ar: "عَشَرُ قَوَائِمَ", translation: "Sepuluh daftar.", grammarNote: "Logika: Angka 10 mudzakkar." }
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
          { ar: "اشْتِرَاءٌ وَاحِدٌ", translation: "Satu pembelian.", grammarNote: "Logika: Isytira' (M) -> Waahid (M)." },
          { ar: "اشْتِرَاءَانِ اثْنَانِ", translation: "Dua pembelian.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ اشْتِرَاءَاتٍ", translation: "Tiga pembelian.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ اشْتِرَاءَاتٍ", translation: "Empat pembelian.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسَةُ اشْتِرَاءَاتٍ", translation: "Lima pembelian.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ اشْتِرَاءَاتٍ", translation: "Enam pembelian.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ اشْتِرَاءَاتٍ", translation: "Tujuh pembelian.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ اشْتِرَاءَاتٍ", translation: "Delapan pembelian.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ اشْتِرَاءَاتٍ", translation: "Sembilan pembelian.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ اشْتِرَاءَاتٍ", translation: "Sepuluh pembelian.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c17",
        wordAr: "يَبِيعُ",
        translation: "Menjual",
        description: "Aktivitas menawarkan barang untuk mendapatkan uang.",
        category: "Aktivitas",
        examples: [
          { ar: "بَيْعٌ وَاحِدٌ", translation: "Satu penjualan.", grammarNote: "Logika: Bay' (M) -> Waahid (M)." },
          { ar: "بَيْعَانِ اثْنَانِ", translation: "Dua penjualan.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ مَبِيعَاتٍ", translation: "Tiga penjualan.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ مَبِيعَاتٍ", translation: "Empat penjualan.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسَةُ مَبِيعَاتٍ", translation: "Lima penjualan.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ مَبِيعَاتٍ", translation: "Enam penjualan.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ مَبِيعَاتٍ", translation: "Tujuh penjualan.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ مَبِيعَاتٍ", translation: "Delapan penjualan.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ مَبِيعَاتٍ", translation: "Sembilan penjualan.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ مَبِيعَاتٍ", translation: "Sepuluh penjualan.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c18",
        wordAr: "يُسَاوِمُ",
        translation: "Menawar",
        description: "Bernegosiasi untuk mendapatkan harga yang lebih murah.",
        category: "Aktivitas",
        examples: [
          { ar: "مُسَاوَمَةٌ وَاحِدَةٌ", translation: "Satu tawar-menawar.", grammarNote: "Logika: Musawamah (F) -> Waahidah (F)." },
          { ar: "مُسَاوَمَتَانِ اثْنَتَانِ", translation: "Dua tawar-menawar.", grammarNote: "Logika: Tasniyah muannats." },
          { ar: "ثَلَاثُ مُسَاوَمَاتٍ", translation: "Tiga tawar-menawar.", grammarNote: "Logika: Angka 3-10, 'Adad (M) berlawanan gender dengan Ma'dud (F)." },
          { ar: "أَرْبَعُ مُسَاوَمَاتٍ", translation: "Empat tawar-menawar.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسُ مُسَاوَمَاتٍ", translation: "Lima tawar-menawar.", grammarNote: "Logika: Angka 5 mudzakkar." },
          { ar: "سِتُّ مُسَاوَمَاتٍ", translation: "Enam tawar-menawar.", grammarNote: "Logika: Angka 6 mudzakkar." },
          { ar: "سَبْعُ مُسَاوَمَاتٍ", translation: "Tujuh tawar-menawar.", grammarNote: "Logika: Angka 7 mudzakkar." },
          { ar: "ثَمَانِي مُسَاوَمَاتٍ", translation: "Delapan tawar-menawar.", grammarNote: "Logika: Angka 8 mudzakkar." },
          { ar: "تِسْعُ مُسَاوَمَاتٍ", translation: "Sembilan tawar-menawar.", grammarNote: "Logika: Angka 9 mudzakkar." },
          { ar: "عَشَرُ مُسَاوَمَاتٍ", translation: "Sepuluh tawar-menawar.", grammarNote: "Logika: Angka 10 mudzakkar." }
        ]
      },
      {
        id: "l2_3_c19",
        wordAr: "يَدْفَعُ",
        translation: "Membayar / Mendorong",
        description: "Memberikan uang sebagai pemenuhan kewajiban.",
        category: "Aktivitas",
        examples: [
          { ar: "دَفْعَةٌ وَاحِدَةٌ", translation: "Satu pembayaran.", grammarNote: "Logika: Daf'ah (F) -> Waahidah (F)." },
          { ar: "دَفْعَتَانِ اثْنَتَانِ", translation: "Dua pembayaran.", grammarNote: "Logika: Tasniyah muannats." },
          { ar: "ثَلَاثُ دَفَعَاتٍ", translation: "Tiga pembayaran.", grammarNote: "Logika: Angka 3-10, 'Adad (M) berlawanan gender dengan Ma'dud (F)." },
          { ar: "أَرْبَعُ دَفَعَاتٍ", translation: "Empat pembayaran.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسُ دَفَعَاتٍ", translation: "Lima pembayaran.", grammarNote: "Logika: Angka 5 mudzakkar." },
          { ar: "سِتُّ دَفَعَاتٍ", translation: "Enam pembayaran.", grammarNote: "Logika: Angka 6 mudzakkar." },
          { ar: "سَبْعُ دَفَعَاتٍ", translation: "Tujuh pembayaran.", grammarNote: "Logika: Angka 7 mudzakkar." },
          { ar: "ثَمَانِي دَفَعَاتٍ", translation: "Delapan pembayaran.", grammarNote: "Logika: Angka 8 mudzakkar." },
          { ar: "تِسْعُ دَفَعَاتٍ", translation: "Sembilan pembayaran.", grammarNote: "Logika: Angka 9 mudzakkar." },
          { ar: "عَشَرُ دَفَعَاتٍ", translation: "Sepuluh pembayaran.", grammarNote: "Logika: Angka 10 mudzakkar." }
        ]
      },
      {
        id: "l2_3_c20",
        wordAr: "غَالٍ",
        translation: "Mahal",
        description: "Sifat untuk barang yang harganya tinggi.",
        category: "Kualitas",
        examples: [
          { ar: "ثَمَنٌ غَالٍ وَاحِدٌ", translation: "Satu harga mahal.", grammarNote: "Logika: Thaman (M) -> Waahid (M)." },
          { ar: "ثَمَنَانِ غَالِيَانِ اثْنَانِ", translation: "Dua harga mahal.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ أَثْمَانٍ غَالِيَةٍ", translation: "Tiga harga mahal.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ أَثْمَانٍ غَالِيَةٍ", translation: "Empat harga mahal.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسَةُ أَثْمَانٍ غَالِيَةٍ", translation: "Lima harga mahal.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ أَثْمَانٍ غَالِيَةٍ", translation: "Enam harga mahal.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ أَثْمَانٍ غَالِيَةٍ", translation: "Tujuh harga mahal.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ أَثْمَانٍ غَالِيَةٍ", translation: "Delapan harga mahal.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ أَثْمَانٍ غَالِيَةٍ", translation: "Sembilan harga mahal.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ أَثْمَانٍ غَالِيَةٍ", translation: "Sepuluh harga mahal.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c21",
        wordAr: "رَخِيصٌ",
        translation: "Murah",
        description: "Sifat untuk barang yang harganya terjangkau.",
        category: "Kualitas",
        examples: [
          { ar: "ثَمَنٌ رَخِيصٌ وَاحِدٌ", translation: "Satu harga murah.", grammarNote: "Logika: Thaman (M) -> Waahid (M)." },
          { ar: "ثَمَنَانِ رَخِيصَانِ اثْنَانِ", translation: "Dua harga murah.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ أَثْمَانٍ رَخِيصَةٍ", translation: "Tiga harga murah.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ أَثْمَانٍ رَخِيصَةٍ", translation: "Empat harga murah.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسَةُ أَثْمَانٍ رَخِيصَةٍ", translation: "Lima harga murah.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ أَثْمَانٍ رَخِيصَةٍ", translation: "Enam harga murah.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ أَثْمَانٍ رَخِيصَةٍ", translation: "Tujuh harga murah.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ أَثْمَانٍ رَخِيصَةٍ", translation: "Delapan harga murah.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ أَثْمَانٍ رَخِيصَةٍ", translation: "Sembilan harga murah.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ أَثْمَانٍ رَخِيصَةٍ", translation: "Sepuluh harga murah.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c22",
        wordAr: "طَازَجٌ",
        translation: "Segar",
        description: "Kualitas barang (biasanya makanan) yang baru dipanen/dibuat.",
        category: "Kualitas",
        examples: [
          { ar: "طَعَامٌ طَازَجٌ وَاحِدٌ", translation: "Satu makanan segar.", grammarNote: "Logika: Tha'aam (M) -> Waahid (M)." },
          { ar: "طَعَامَانِ طَازَجَانِ اثْنَانِ", translation: "Dua makanan segar.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ أَطْعِمَةٍ طَازَجَةٍ", translation: "Tiga makanan segar.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ أَطْعِمَةٍ طَازَجَةٍ", translation: "Empat makanan segar.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسَةُ أَطْعِمَةٍ طَازَجَةٍ", translation: "Lima makanan segar.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ أَطْعِمَةٍ طَازَجَةٍ", translation: "Enam makanan segar.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ أَطْعِمَةٍ طَازَجَةٍ", translation: "Tujuh makanan segar.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ أَطْعِمَةٍ طَازَجَةٍ", translation: "Delapan makanan segar.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ أَطْعِمَةٍ طَازَجَةٍ", translation: "Sembilan makanan segar.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ أَطْعِمَةٍ طَازَجَةٍ", translation: "Sepuluh makanan segar.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c23",
        wordAr: "تُفَّاحٌ",
        translation: "Apel",
        description: "Nama buah populer.",
        category: "Barang Dagangan",
        examples: [
          { ar: "تُفَّاحَةٌ وَاحِدَةٌ", translation: "Satu apel.", grammarNote: "Logika: Tuffaahah (F) -> Waahidah (F)." },
          { ar: "تُفَّاحَتَانِ اثْنَتَانِ", translation: "Dua apel.", grammarNote: "Logika: Tasniyah muannats." },
          { ar: "ثَلَاثُ تُفَّاحَاتٍ", translation: "Tiga apel.", grammarNote: "Logika: Angka 3-10, 'Adad (M) berlawanan gender dengan Ma'dud (F)." },
          { ar: "أَرْبَعُ تُفَّاحَاتٍ", translation: "Empat apel.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسُ تُفَّاحَاتٍ", translation: "Lima apel.", grammarNote: "Logika: Angka 5 mudzakkar." },
          { ar: "سِتُّ تُفَّاحَاتٍ", translation: "Enam apel.", grammarNote: "Logika: Angka 6 mudzakkar." },
          { ar: "سَبْعُ تُفَّاحَاتٍ", translation: "Tujuh apel.", grammarNote: "Logika: Angka 7 mudzakkar." },
          { ar: "ثَمَانِي تُفَّاحَاتٍ", translation: "Delapan apel.", grammarNote: "Logika: Angka 8 mudzakkar." },
          { ar: "تِسْعُ تُفَّاحَاتٍ", translation: "Sembilan apel.", grammarNote: "Logika: Angka 9 mudzakkar." },
          { ar: "عَشَرُ تُفَّاحَاتٍ", translation: "Sepuluh apel.", grammarNote: "Logika: Angka 10 mudzakkar." }
        ]
      },
      {
        id: "l2_3_c24",
        wordAr: "بُرْتُقَالٌ",
        translation: "Jeruk",
        description: "Buah sitrus sumber vitamin C.",
        category: "Barang Dagangan",
        examples: [
          { ar: "بُرْتُقَالَةٌ وَاحِدَةٌ", translation: "Satu jeruk.", grammarNote: "Logika: Burtuqaalah (F) -> Waahidah (F)." },
          { ar: "بُرْتُقَالَتَانِ اثْنَتَانِ", translation: "Dua jeruk.", grammarNote: "Logika: Tasniyah muannats." },
          { ar: "ثَلَاثُ بُرْتُقَالَاتٍ", translation: "Tiga jeruk.", grammarNote: "Logika: Angka 3-10, 'Adad (M) berlawanan gender dengan Ma'dud (F)." },
          { ar: "أَرْبَعُ بُرْتُقَالَاتٍ", translation: "Empat jeruk.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسُ بُرْتُقَالَاتٍ", translation: "Lima jeruk.", grammarNote: "Logika: Angka 5 mudzakkar." },
          { ar: "سِتُّ بُرْتُقَالَاتٍ", translation: "Enam jeruk.", grammarNote: "Logika: Angka 6 mudzakkar." },
          { ar: "سَبْعُ بُرْتُقَالَاتٍ", translation: "Tujuh jeruk.", grammarNote: "Logika: Angka 7 mudzakkar." },
          { ar: "ثَمَانِي بُرْتُقَالَاتٍ", translation: "Delapan jeruk.", grammarNote: "Logika: Angka 8 mudzakkar." },
          { ar: "تِسْعُ بُرْتُقَالَاتٍ", translation: "Sembilan jeruk.", grammarNote: "Logika: Angka 9 mudzakkar." },
          { ar: "عَشَرُ بُرْتُقَالَاتٍ", translation: "Sepuluh jeruk.", grammarNote: "Logika: Angka 10 mudzakkar." }
        ]
      },
      {
        id: "l2_3_c25",
        wordAr: "مَوْزٌ",
        translation: "Pisang",
        description: "Buah tropis kuning.",
        category: "Barang Dagangan",
        examples: [
          { ar: "مَوْزَةٌ وَاحِدَةٌ", translation: "Satu pisang.", grammarNote: "Logika: Mawzah (F) -> Waahidah (F)." },
          { ar: "مَوْزَتَانِ اثْنَتَانِ", translation: "Dua pisang.", grammarNote: "Logika: Tasniyah muannats." },
          { ar: "ثَلَاثُ مَوْزَاتٍ", translation: "Tiga pisang.", grammarNote: "Logika: Angka 3-10, 'Adad (M) berlawanan gender dengan Ma'dud (F)." },
          { ar: "أَرْبَعُ مَوْزَاتٍ", translation: "Empat pisang.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسُ مَوْزَاتٍ", translation: "Lima pisang.", grammarNote: "Logika: Angka 5 mudzakkar." },
          { ar: "سِتُّ مَوْزَاتٍ", translation: "Enam pisang.", grammarNote: "Logika: Angka 6 mudzakkar." },
          { ar: "سَبْعُ مَوْزَاتٍ", translation: "Tujuh pisang.", grammarNote: "Logika: Angka 7 mudzakkar." },
          { ar: "ثَمَانِي مَوْزَاتٍ", translation: "Delapan pisang.", grammarNote: "Logika: Angka 8 mudzakkar." },
          { ar: "تِسْعُ مَوْزَاتٍ", translation: "Sembilan pisang.", grammarNote: "Logika: Angka 9 mudzakkar." },
          { ar: "عَشَرُ مَوْزَاتٍ", translation: "Sepuluh pisang.", grammarNote: "Logika: Angka 10 mudzakkar." }
        ]
      },
      {
        id: "l2_3_c26",
        wordAr: "خُبْزٌ",
        translation: "Roti",
        description: "Makanan pokok.",
        category: "Barang Dagangan",
        examples: [
          { ar: "خُبْزَةٌ وَاحِدَةٌ", translation: "Satu roti.", grammarNote: "Logika: Khubzah (F) -> Waahidah (F)." },
          { ar: "خُبْزَتَانِ اثْنَتَانِ", translation: "Dua roti.", grammarNote: "Logika: Tasniyah muannats." },
          { ar: "ثَلَاثُ خُبْزَاتٍ", translation: "Tiga roti.", grammarNote: "Logika: Angka 3-10, 'Adad (M) berlawanan gender dengan Ma'dud (F)." },
          { ar: "أَرْبَعُ خُبْزَاتٍ", translation: "Empat roti.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسُ خُبْزَاتٍ", translation: "Lima roti.", grammarNote: "Logika: Angka 5 mudzakkar." },
          { ar: "سِتُّ خُبْزَاتٍ", translation: "Enam roti.", grammarNote: "Logika: Angka 6 mudzakkar." },
          { ar: "سَبْعُ خُبْزَاتٍ", translation: "Tujuh roti.", grammarNote: "Logika: Angka 7 mudzakkar." },
          { ar: "ثَمَانِي خُبْزَاتٍ", translation: "Delapan roti.", grammarNote: "Logika: Angka 8 mudzakkar." },
          { ar: "تِسْعُ خُبْزَاتٍ", translation: "Sembilan roti.", grammarNote: "Logika: Angka 9 mudzakkar." },
          { ar: "عَشَرُ خُبْزَاتٍ", translation: "Sepuluh roti.", grammarNote: "Logika: Angka 10 mudzakkar." }
        ]
      },
      {
        id: "l2_3_c27",
        wordAr: "لَحْمٌ",
        translation: "Daging",
        description: "Sumber protein.",
        category: "Barang Dagangan",
        examples: [
          { ar: "كِيلُو لَحْمٍ وَاحِدٌ", translation: "Satu kilo daging.", grammarNote: "Logika: Kiiluu (M) -> Waahid (M)." },
          { ar: "كِيلُو لَحْمٍ اثْنَانِ", translation: "Dua kilo daging.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ كِيلُوجْرَامَاتِ لَحْمٍ", translation: "Tiga kilo daging.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M - Kiiluugraam)." },
          { ar: "أَرْبَعَةُ كِيلُوجْرَامَاتِ لَحْمٍ", translation: "Empat kilo daging.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسَةُ كِيلُوجْرَامَاتِ لَحْمٍ", translation: "Lima kilo daging.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ كِيلُوجْرَامَاتِ لَحْمٍ", translation: "Enam kilo daging.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ كِيلُوجْرَامَاتِ لَحْمٍ", translation: "Tujuh kilo daging.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ كِيلُوجْرَامَاتِ لَحْمٍ", translation: "Delapan kilo daging.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ كِيلُوجْرَامَاتِ لَحْمٍ", translation: "Sembilan kilo daging.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ كِيلُوجْرَامَاتِ لَحْمٍ", translation: "Sepuluh kilo daging.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c28",
        wordAr: "مَلَابِسُ",
        translation: "Pakaian",
        description: "Sandang.",
        category: "Barang Dagangan",
        examples: [
          { ar: "ثَوْبٌ وَاحِدٌ", translation: "Satu baju.", grammarNote: "Logika: Thawb (M) -> Waahid (M)." },
          { ar: "ثَوْبَانِ اثْنَانِ", translation: "Dua baju.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ أَثْوَابٍ", translation: "Tiga baju.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ أَثْوَابٍ", translation: "Empat baju.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسَةُ أَثْوَابٍ", translation: "Lima baju.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ أَثْوَابٍ", translation: "Enam baju.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ أَثْوَابٍ", translation: "Tujuh baju.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ أَثْوَابٍ", translation: "Delapan baju.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ أَثْوَابٍ", translation: "Sembilan baju.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ أَثْوَابٍ", translation: "Sepuluh baju.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c29",
        wordAr: "مِيـزَانٌ",
        translation: "Timbangan",
        description: "Alat ukur berat.",
        category: "Alat Bantu",
        examples: [
          { ar: "مِيـزَانٌ وَاحِدٌ", translation: "Satu timbangan.", grammarNote: "Logika: Miizaan (M) -> Waahid (M)." },
          { ar: "مِيـزَانَانِ اثْنَانِ", translation: "Dua timbangan.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ مَوَازِينَ", translation: "Tiga timbangan.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ مَوَازِينَ", translation: "Empat timbangan.", grammarNote: "Logika: Ma'dud jamak majrur (Mawaaziin - Diptote)." },
          { ar: "خَمْسَةُ مَوَازِينَ", translation: "Lima timbangan.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ مَوَازِينَ", translation: "Enam timbangan.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ مَوَازِينَ", translation: "Tujuh timbangan.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ مَوَازِينَ", translation: "Delapan timbangan.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ مَوَازِينَ", translation: "Sembilan timbangan.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ مَوَازِينَ", translation: "Sepuluh timbangan.", grammarNote: "Logika: Angka 10 muannats." }
        ]
      },
      {
        id: "l2_3_c30",
        wordAr: "أَكْيَاسٌ",
        translation: "Plastik / Kantong",
        description: "Wadah barang.",
        category: "Alat Bantu",
        examples: [
          { ar: "كِيسٌ وَاحِدٌ", translation: "Satu plastik.", grammarNote: "Logika: Kiis (M) -> Waahid (M)." },
          { ar: "كِيسَانِ اثْنَانِ", translation: "Dua plastik.", grammarNote: "Logika: Tasniyah mudzakkar." },
          { ar: "ثَلَاثَةُ أَكْيَاسٍ", translation: "Tiga plastik.", grammarNote: "Logika: Angka 3-10, 'Adad (F) berlawanan gender dengan Ma'dud (M)." },
          { ar: "أَرْبَعَةُ أَكْيَاسٍ", translation: "Empat plastik.", grammarNote: "Logika: Ma'dud jamak majrur." },
          { ar: "خَمْسَةُ أَكْيَاسٍ", translation: "Lima plastik.", grammarNote: "Logika: Angka 5 muannats." },
          { ar: "سِتَّةُ أَكْيَاسٍ", translation: "Enam plastik.", grammarNote: "Logika: Angka 6 muannats." },
          { ar: "سَبْعَةُ أَكْيَاسٍ", translation: "Tujuh plastik.", grammarNote: "Logika: Angka 7 muannats." },
          { ar: "ثَمَانِيَةُ أَكْيَاسٍ", translation: "Delapan plastik.", grammarNote: "Logika: Angka 8 muannats." },
          { ar: "تِسْعَةُ أَكْيَاسٍ", translation: "Sembilan plastik.", grammarNote: "Logika: Angka 9 muannats." },
          { ar: "عَشَرَةُ أَكْيَاسٍ", translation: "Sepuluh plastik.", grammarNote: "Logika: Angka 10 muannats." }
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
        { speaker: "PENJUAL", arabic: "طَيِّبٌ، إِذَا اشْتَرَيْتَ ثَلَاثَةَ كِيلُوجْرَامَاتٍ، الثَّمَنُ خَمْسَةٌ وَعِشْرُونَ أَلْفًا.", translation: "Baiklah, jika kamu beli tiga kilo, harganya dua puluh lima ribu.", note: "Diskon paket." },
        { speaker: "PEMBELI", arabic: "مُنَاسِبٌ. أُرِيدُ ثَلَاثَةَ كِيلُوجْرَامَاتٍ مِنَ التُّفَّاحِ وَأَرْبَعَ حَبَّاتِ بُرْتُقَالٍ.", translation: "Cocok. Saya mau tiga kilo apel dan empat butir jeruk.", note: "Penerapan angka." },
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
