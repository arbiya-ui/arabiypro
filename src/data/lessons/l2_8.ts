import { Lesson } from "../../types";

export const l2_8: Lesson = {
  id: "l2_8",
  title: "BAB 8: AS-SIHHAH WA AT-THIBB (Kesehatan & Kedokteran)",
  titleAr: "الصِّحَّةُ وَالطِّبُّ",
  description: "Pelajari cara berkonsultasi ke dokter, mengeluhkan penyakit, membeli obat di apotek, dan mendoakan kesembuhan dalam bahasa Arab.",
  type: "conversation",
  xpReward: 40,
  
  isCompleted: false,
  isLocked: false,
  content: {
    introduction: "Kesehatan adalah aset termahal manusia, dan bahasa Arab memberikan kita kosakata yang sangat fungsional untuk menjaganya. Selamat datang di Bab 8: As-Sihhah wa At-Thibb. Ingatlah pelajaran anggota tubuh di Level 1; sekarang kita akan menggunakannya untuk menjelaskan kondisi medis dan berkonsultasi dengan dokter. Belajar itu mudah karena ilmu ini sangat aplikatif dalam kehidupan sehari-hari.\n\nDi bab ini, kita akan membekali Anda dengan kosakata tentang gejala penyakit, rumah sakit, dan pola 'Isim Maf'ul' untuk mendeskripsikan kondisi kesehatan. Anda akan merasa lebih tenang dan percaya diri saat harus berkomunikasi dalam situasi medis. Jangan menyerah sekarang, ini adalah bab materi terakhir sebelum ujian besar. Mari kita kumpulkan seluruh energi untuk menghadapi evaluasi akhir di bab pamungkas!",
    introTitle: "Kesehatan & Kedokteran",
    introBadges: [
      { icon: "🏥", text: "MEDIS PRAKTIS (Mahir berkomunikasi di RS)" },
      { icon: "🩹", text: "DOA KESEMBUHAN (Mendoakan sesama)" }
    ],
  grammar: {
    title: "Uslub Keluhan Sakit & Isim Maf'ul",
    logicExplanation: "Dalam bahasa Arab, ada dua pola utama untuk menyatakan keluhan rasa sakit.\n\n1. **عِنْدِي (Indii)** yang berarti 'Saya menderita/memiliki', diikuti oleh kata benda jenis penyakitnya, seperti 'عِنْدِي صُدَاعٌ' (Saya menderita sakit kepala).\n2. **أَشْعُرُ بِـ (Asy'uru bi-)** yang berarti 'Saya merasakan', diikuti oleh harf jar بِـ dan gejala yang dirasakan, seperti 'أَشْعُرُ بِأَلَمٍ' (Saya merasakan nyeri).\n\nSelain itu, ada **Isim Maf'ul** (Pola مَفْعُول - Maf'uul) yang berarti objek atau yang dikenai perbuatan. Contoh: dari كَسَرَ (patah) menjadi مَكْسُور (yang patah).\n\n**Logika Muannats:** Untuk anggota tubuh yang berpasangan (mata, telinga, tangan, kaki), mereka dianggap Muannats (perempuan). Oleh karena itu, Isim Maf'ul yang mensifatinya wajib menggunakan Ta' Marbuthah (ـَة). Contoh: Tangan patah = يَدٌ مَكْسُورَةٌ (Yadun Maksuuratun), bukan maksuurun.",
    examples: [
      {
        ar: "عِنْدِي حُمَّى شَدِيدَةٌ",
        translation: "Saya menderita demam tinggi.",
        grammarNote: "Logika: 'Indii' (saya memiliki) + kata benda penyakit (Hummaa)."
      },
      {
        ar: "أَشْعُرُ بِأَلَمٍ فِي الْبَطْنِ",
        translation: "Saya merasakan sakit di perut.",
        grammarNote: "Logika: 'Asy'uru' (saya merasa) + bi (dengan) + alamin (rasa sakit/gejala)."
      },
      {
        ar: "رِجْلِي مَجْرُوحَةٌ",
        translation: "Kakiku terluka.",
        grammarNote: "Logika: 'Rijlun' (kaki) berpasangan (Muannats), jadi Isim Maf'ulnya 'Majruuhatun', bukan 'Majruuhun'."
      },
      {
        ar: "يَدِي مَكْسُورَةٌ",
        translation: "Tanganku patah.",
        grammarNote: "Logika: 'Yadun' (tangan) berpasangan (Muannats), jadi Isim Maf'ul 'Maksuuratun'."
      },
      {
        ar: "عِنْدَهُ سُعَالٌ مُزْمِنٌ",
        translation: "Dia menderita batuk kronis.",
        grammarNote: "Logika: 'Indahu' (dia memiliki) + kata benda penyakit (Su'aalun)."
      },
      {
        ar: "تَشْعُرُ الْمَرِيضَةُ بِالدُّوَارِ",
        translation: "Pasien (Pr) merasa pusing berputar.",
        grammarNote: "Logika: 'Tasy'uru' (merasa) karena fa'il (Mariidhah) adalah Muannats, lalu + bi + duwaari."
      }
    ],
    commonMistakes: [
      "❌ Tertukar antara عِنْدِي dan أَشْعُرُ بِـ. Tidak tepat bilang 'عِنْدِي بِأَلَمٍ' (Saya memiliki dengan sakit). Harusnya 'عِنْدِي أَلَمٌ' atau 'أَشْعُرُ بِأَلَمٍ'.",
      "❌ Lupa menambahkan Ta' Marbuthah pada Isim Maf'ul untuk anggota tubuh yang berpasangan. Sering salah: 'يَدِي مَكْسُور' (Salah) -> 'يَدِي مَكْسُورَةٌ' (Benar).",
      "❌ Tidak menghafal bentuk Isim Maf'ul. Polanya selalu berwazan مَفْعُولٌ (Maf'uulun). كَسَرَ -> مَكْسُورٌ (Maksuurun).",
      "❌ Lupa memberikan kasrah setelah huruf بِـ. Sering salah: 'أَشْعُرُ بِأَلَمٌ' (Salah) -> 'أَشْعُرُ بِأَلَمٍ' (Benar, Majrur)."
    ],
    tashrif: [
      {
        title: "Pola Isim Maf'ul Medis (مَفْعُولٌ)",
        rows: [
          { dhamir: "كَسَرَ (Patah)", dhamirMeaning: "Mematahkan", fiil: "مَكْسُورٌ (Maksuurun)", akhiran: "مَكْسُورَةٌ (Maksuuratun)", contoh: "يَدِي مَكْسُورَةٌ (Tanganku patah)" },
          { dhamir: "جَرَحَ (Luka)", dhamirMeaning: "Melukai", fiil: "مَجْرُوحٌ (Majruuhun)", akhiran: "مَجْرُوحَةٌ (Majruuhatun)", contoh: "رِجْلِي مَجْرُوحَةٌ (Kakiku terluka)" },
          { dhamir: "قَطَعَ (Potong)", dhamirMeaning: "Memotong", fiil: "مَقْطُوعٌ (Maqthuu'un)", akhiran: "مَقْطُوعَةٌ (Maqthuu'atun)", contoh: "أُصْبُعِي مَقْطُوعَةٌ (Jariku terpotong)" },
          { dhamir: "فَتَحَ (Buka)", dhamirMeaning: "Membuka", fiil: "مَفْتُوحٌ (Maftuuhun)", akhiran: "مَفْتُوحَةٌ (Maftuuhatun)", contoh: "الْعِيَادَةُ مَفْتُوحَةٌ (Klinik terbuka)" }
        ]
      }
    ]
  },

    cards: [
    {
        "id": "l2_8_c1",
        "wordAr": "شَعَرَ بِـ",
        "translation": "Merasakan",
        "description": "Kata kerja untuk menyatakan keluhan kesehatan (Fi'il Madhi).",
        "category": "Gejala",
        "examples": [
            {
                "ar": "عِنْدِي شَعَرَ بِـ شَدِيدٌ (مِثَال 1)",
                "translation": "Saya menderita Merasakan yang parah (contoh 1).",
                "grammarNote": "Logika: Menggunakan 'Indii' (saya memiliki) diikuti nama penyakit/gejala."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِـ شَعَرَ بِـ هُنَا",
                "translation": "Pasien merasakan Merasakan di sini.",
                "grammarNote": "Logika: Menggunakan 'Yasy'uru' (merasakan) diikuti harf jar 'bi'."
            },
            {
                "ar": "هَلْ هَذَا شَعَرَ بِـ مُزْمِنٌ؟",
                "translation": "Apakah Merasakan ini kronis?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Hal' (Apakah)."
            },
            {
                "ar": "يَدِي مَكْسُورَةٌ بِسَبَبِ شَعَرَ بِـ",
                "translation": "Tanganku patah karena Merasakan.",
                "grammarNote": "Logika: 'Yadii' (tanganku) adalah muannats, sehingga isim maf'ulnya 'maksuuratun'."
            },
            {
                "ar": "الطَّبِيبُ يَتَأَلَّمُ مِنْ شَعَرَ بِـ",
                "translation": "Dokter itu kesakitan karena Merasakan.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ شَعَرَ بِـ",
                "translation": "Ayahku kesakitan karena Merasakan.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أُمِّي يَتَأَلَّمُ مِنْ شَعَرَ بِـ",
                "translation": "Ibuku kesakitan karena Merasakan.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "صَدِيقِي يَتَأَلَّمُ مِنْ شَعَرَ بِـ",
                "translation": "Temanku kesakitan karena Merasakan.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الطِّفْلُ يَتَأَلَّمُ مِنْ شَعَرَ بِـ",
                "translation": "Anak itu kesakitan karena Merasakan.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الرَّجُلُ يَتَأَلَّمُ مِنْ شَعَرَ بِـ",
                "translation": "Pria itu kesakitan karena Merasakan.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            }
        ]
    },
    {
        "id": "l2_8_c2",
        "wordAr": "أَصَابَ",
        "translation": "Menimpa / Mengenai",
        "description": "Kata kerja untuk menyatakan terkena penyakit.",
        "category": "Gejala",
        "examples": [
            {
                "ar": "عِنْدِي أَصَابَ شَدِيدٌ (مِثَال 1)",
                "translation": "Saya menderita Menimpa / Mengenai yang parah (contoh 1).",
                "grammarNote": "Logika: Menggunakan 'Indii' (saya memiliki) diikuti nama penyakit/gejala."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِـ أَصَابَ هُنَا",
                "translation": "Pasien merasakan Menimpa / Mengenai di sini.",
                "grammarNote": "Logika: Menggunakan 'Yasy'uru' (merasakan) diikuti harf jar 'bi'."
            },
            {
                "ar": "هَلْ هَذَا أَصَابَ مُزْمِنٌ؟",
                "translation": "Apakah Menimpa / Mengenai ini kronis?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Hal' (Apakah)."
            },
            {
                "ar": "يَدِي مَكْسُورَةٌ بِسَبَبِ أَصَابَ",
                "translation": "Tanganku patah karena Menimpa / Mengenai.",
                "grammarNote": "Logika: 'Yadii' (tanganku) adalah muannats, sehingga isim maf'ulnya 'maksuuratun'."
            },
            {
                "ar": "الطَّبِيبُ يَتَأَلَّمُ مِنْ أَصَابَ",
                "translation": "Dokter itu kesakitan karena Menimpa / Mengenai.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ أَصَابَ",
                "translation": "Ayahku kesakitan karena Menimpa / Mengenai.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أُمِّي يَتَأَلَّمُ مِنْ أَصَابَ",
                "translation": "Ibuku kesakitan karena Menimpa / Mengenai.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "صَدِيقِي يَتَأَلَّمُ مِنْ أَصَابَ",
                "translation": "Temanku kesakitan karena Menimpa / Mengenai.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الطِّفْلُ يَتَأَلَّمُ مِنْ أَصَابَ",
                "translation": "Anak itu kesakitan karena Menimpa / Mengenai.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الرَّجُلُ يَتَأَلَّمُ مِنْ أَصَابَ",
                "translation": "Pria itu kesakitan karena Menimpa / Mengenai.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            }
        ]
    },
    {
        "id": "l2_8_c3",
        "wordAr": "أَلَمٌ",
        "translation": "Rasa Sakit / Nyeri",
        "description": "Kata benda untuk keluhan fisik (Jamak: آلَامٌ).",
        "category": "Gejala",
        "examples": [
            {
                "ar": "عِنْدِي أَلَمٌ شَدِيدٌ (مِثَال 1)",
                "translation": "Saya menderita Rasa Sakit / Nyeri yang parah (contoh 1).",
                "grammarNote": "Logika: Menggunakan 'Indii' (saya memiliki) diikuti nama penyakit/gejala."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِـ أَلَمٌ هُنَا",
                "translation": "Pasien merasakan Rasa Sakit / Nyeri di sini.",
                "grammarNote": "Logika: Menggunakan 'Yasy'uru' (merasakan) diikuti harf jar 'bi'."
            },
            {
                "ar": "هَلْ هَذَا أَلَمٌ مُزْمِنٌ؟",
                "translation": "Apakah Rasa Sakit / Nyeri ini kronis?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Hal' (Apakah)."
            },
            {
                "ar": "يَدِي مَكْسُورَةٌ بِسَبَبِ أَلَمٌ",
                "translation": "Tanganku patah karena Rasa Sakit / Nyeri.",
                "grammarNote": "Logika: 'Yadii' (tanganku) adalah muannats, sehingga isim maf'ulnya 'maksuuratun'."
            },
            {
                "ar": "الطَّبِيبُ يَتَأَلَّمُ مِنْ أَلَمٌ",
                "translation": "Dokter itu kesakitan karena Rasa Sakit / Nyeri.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ أَلَمٌ",
                "translation": "Ayahku kesakitan karena Rasa Sakit / Nyeri.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أُمِّي يَتَأَلَّمُ مِنْ أَلَمٌ",
                "translation": "Ibuku kesakitan karena Rasa Sakit / Nyeri.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "صَدِيقِي يَتَأَلَّمُ مِنْ أَلَمٌ",
                "translation": "Temanku kesakitan karena Rasa Sakit / Nyeri.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الطِّفْلُ يَتَأَلَّمُ مِنْ أَلَمٌ",
                "translation": "Anak itu kesakitan karena Rasa Sakit / Nyeri.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الرَّجُلُ يَتَأَلَّمُ مِنْ أَلَمٌ",
                "translation": "Pria itu kesakitan karena Rasa Sakit / Nyeri.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            }
        ]
    },
    {
        "id": "l2_8_c4",
        "wordAr": "وَجَعٌ",
        "translation": "Nyeri / Sakit",
        "description": "Sinonim dari alam, sering untuk bagian tubuh tertentu (Jamak: أَوْجَاعٌ).",
        "category": "Gejala",
        "examples": [
            {
                "ar": "عِنْدِي وَجَعٌ شَدِيدٌ (مِثَال 1)",
                "translation": "Saya menderita Nyeri / Sakit yang parah (contoh 1).",
                "grammarNote": "Logika: Menggunakan 'Indii' (saya memiliki) diikuti nama penyakit/gejala."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِـ وَجَعٌ هُنَا",
                "translation": "Pasien merasakan Nyeri / Sakit di sini.",
                "grammarNote": "Logika: Menggunakan 'Yasy'uru' (merasakan) diikuti harf jar 'bi'."
            },
            {
                "ar": "هَلْ هَذَا وَجَعٌ مُزْمِنٌ؟",
                "translation": "Apakah Nyeri / Sakit ini kronis?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Hal' (Apakah)."
            },
            {
                "ar": "يَدِي مَكْسُورَةٌ بِسَبَبِ وَجَعٌ",
                "translation": "Tanganku patah karena Nyeri / Sakit.",
                "grammarNote": "Logika: 'Yadii' (tanganku) adalah muannats, sehingga isim maf'ulnya 'maksuuratun'."
            },
            {
                "ar": "الطَّبِيبُ يَتَأَلَّمُ مِنْ وَجَعٌ",
                "translation": "Dokter itu kesakitan karena Nyeri / Sakit.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ وَجَعٌ",
                "translation": "Ayahku kesakitan karena Nyeri / Sakit.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أُمِّي يَتَأَلَّمُ مِنْ وَجَعٌ",
                "translation": "Ibuku kesakitan karena Nyeri / Sakit.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "صَدِيقِي يَتَأَلَّمُ مِنْ وَجَعٌ",
                "translation": "Temanku kesakitan karena Nyeri / Sakit.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الطِّفْلُ يَتَأَلَّمُ مِنْ وَجَعٌ",
                "translation": "Anak itu kesakitan karena Nyeri / Sakit.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الرَّجُلُ يَتَأَلَّمُ مِنْ وَجَعٌ",
                "translation": "Pria itu kesakitan karena Nyeri / Sakit.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            }
        ]
    },
    {
        "id": "l2_8_c5",
        "wordAr": "عَانَى مِنْ",
        "translation": "Menderita (dari)",
        "description": "Kata kerja yang menyatakan penyakit kronis/lama (Fi'il Madhi).",
        "category": "Gejala",
        "examples": [
            {
                "ar": "عِنْدِي عَانَى مِنْ شَدِيدٌ (مِثَال 1)",
                "translation": "Saya menderita Menderita (dari) yang parah (contoh 1).",
                "grammarNote": "Logika: Menggunakan 'Indii' (saya memiliki) diikuti nama penyakit/gejala."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِـ عَانَى مِنْ هُنَا",
                "translation": "Pasien merasakan Menderita (dari) di sini.",
                "grammarNote": "Logika: Menggunakan 'Yasy'uru' (merasakan) diikuti harf jar 'bi'."
            },
            {
                "ar": "هَلْ هَذَا عَانَى مِنْ مُزْمِنٌ؟",
                "translation": "Apakah Menderita (dari) ini kronis?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Hal' (Apakah)."
            },
            {
                "ar": "يَدِي مَكْسُورَةٌ بِسَبَبِ عَانَى مِنْ",
                "translation": "Tanganku patah karena Menderita (dari).",
                "grammarNote": "Logika: 'Yadii' (tanganku) adalah muannats, sehingga isim maf'ulnya 'maksuuratun'."
            },
            {
                "ar": "الطَّبِيبُ يَتَأَلَّمُ مِنْ عَانَى مِنْ",
                "translation": "Dokter itu kesakitan karena Menderita (dari).",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ عَانَى مِنْ",
                "translation": "Ayahku kesakitan karena Menderita (dari).",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أُمِّي يَتَأَلَّمُ مِنْ عَانَى مِنْ",
                "translation": "Ibuku kesakitan karena Menderita (dari).",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "صَدِيقِي يَتَأَلَّمُ مِنْ عَانَى مِنْ",
                "translation": "Temanku kesakitan karena Menderita (dari).",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الطِّفْلُ يَتَأَلَّمُ مِنْ عَانَى مِنْ",
                "translation": "Anak itu kesakitan karena Menderita (dari).",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الرَّجُلُ يَتَأَلَّمُ مِنْ عَانَى مِنْ",
                "translation": "Pria itu kesakitan karena Menderita (dari).",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            }
        ]
    },
    {
        "id": "l2_8_c6",
        "wordAr": "صُدَاعٌ",
        "translation": "Sakit Kepala / Pusing",
        "description": "Rasa nyeri di area kepala.",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي صُدَاعٌ شَدِيدٌ (مِثَال 1)",
                "translation": "Saya menderita Sakit Kepala / Pusing yang parah (contoh 1).",
                "grammarNote": "Logika: Menggunakan 'Indii' (saya memiliki) diikuti nama penyakit/gejala."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِـ صُدَاعٌ هُنَا",
                "translation": "Pasien merasakan Sakit Kepala / Pusing di sini.",
                "grammarNote": "Logika: Menggunakan 'Yasy'uru' (merasakan) diikuti harf jar 'bi'."
            },
            {
                "ar": "هَلْ هَذَا صُدَاعٌ مُزْمِنٌ؟",
                "translation": "Apakah Sakit Kepala / Pusing ini kronis?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Hal' (Apakah)."
            },
            {
                "ar": "يَدِي مَكْسُورَةٌ بِسَبَبِ صُدَاعٌ",
                "translation": "Tanganku patah karena Sakit Kepala / Pusing.",
                "grammarNote": "Logika: 'Yadii' (tanganku) adalah muannats, sehingga isim maf'ulnya 'maksuuratun'."
            },
            {
                "ar": "الطَّبِيبُ يَتَأَلَّمُ مِنْ صُدَاعٌ",
                "translation": "Dokter itu kesakitan karena Sakit Kepala / Pusing.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ صُدَاعٌ",
                "translation": "Ayahku kesakitan karena Sakit Kepala / Pusing.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أُمِّي يَتَأَلَّمُ مِنْ صُدَاعٌ",
                "translation": "Ibuku kesakitan karena Sakit Kepala / Pusing.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "صَدِيقِي يَتَأَلَّمُ مِنْ صُدَاعٌ",
                "translation": "Temanku kesakitan karena Sakit Kepala / Pusing.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الطِّفْلُ يَتَأَلَّمُ مِنْ صُدَاعٌ",
                "translation": "Anak itu kesakitan karena Sakit Kepala / Pusing.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الرَّجُلُ يَتَأَلَّمُ مِنْ صُدَاعٌ",
                "translation": "Pria itu kesakitan karena Sakit Kepala / Pusing.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            }
        ]
    },
    {
        "id": "l2_8_c7",
        "wordAr": "حُمَّى",
        "translation": "Demam",
        "description": "Suhu tubuh yang meninggi (Kata Muannats maqsur).",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي حُمَّى شَدِيدٌ (مِثَال 1)",
                "translation": "Saya menderita Demam yang parah (contoh 1).",
                "grammarNote": "Logika: Menggunakan 'Indii' (saya memiliki) diikuti nama penyakit/gejala."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِـ حُمَّى هُنَا",
                "translation": "Pasien merasakan Demam di sini.",
                "grammarNote": "Logika: Menggunakan 'Yasy'uru' (merasakan) diikuti harf jar 'bi'."
            },
            {
                "ar": "هَلْ هَذَا حُمَّى مُزْمِنٌ؟",
                "translation": "Apakah Demam ini kronis?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Hal' (Apakah)."
            },
            {
                "ar": "يَدِي مَكْسُورَةٌ بِسَبَبِ حُمَّى",
                "translation": "Tanganku patah karena Demam.",
                "grammarNote": "Logika: 'Yadii' (tanganku) adalah muannats, sehingga isim maf'ulnya 'maksuuratun'."
            },
            {
                "ar": "الطَّبِيبُ يَتَأَلَّمُ مِنْ حُمَّى",
                "translation": "Dokter itu kesakitan karena Demam.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ حُمَّى",
                "translation": "Ayahku kesakitan karena Demam.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أُمِّي يَتَأَلَّمُ مِنْ حُمَّى",
                "translation": "Ibuku kesakitan karena Demam.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "صَدِيقِي يَتَأَلَّمُ مِنْ حُمَّى",
                "translation": "Temanku kesakitan karena Demam.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الطِّفْلُ يَتَأَلَّمُ مِنْ حُمَّى",
                "translation": "Anak itu kesakitan karena Demam.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الرَّجُلُ يَتَأَلَّمُ مِنْ حُمَّى",
                "translation": "Pria itu kesakitan karena Demam.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            }
        ]
    },
    {
        "id": "l2_8_c8",
        "wordAr": "زُكَامٌ",
        "translation": "Selesma / Pilek",
        "description": "Penyakit ringan saluran pernapasan.",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي زُكَامٌ شَدِيدٌ (مِثَال 1)",
                "translation": "Saya menderita Selesma / Pilek yang parah (contoh 1).",
                "grammarNote": "Logika: Menggunakan 'Indii' (saya memiliki) diikuti nama penyakit/gejala."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِـ زُكَامٌ هُنَا",
                "translation": "Pasien merasakan Selesma / Pilek di sini.",
                "grammarNote": "Logika: Menggunakan 'Yasy'uru' (merasakan) diikuti harf jar 'bi'."
            },
            {
                "ar": "هَلْ هَذَا زُكَامٌ مُزْمِنٌ؟",
                "translation": "Apakah Selesma / Pilek ini kronis?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Hal' (Apakah)."
            },
            {
                "ar": "يَدِي مَكْسُورَةٌ بِسَبَبِ زُكَامٌ",
                "translation": "Tanganku patah karena Selesma / Pilek.",
                "grammarNote": "Logika: 'Yadii' (tanganku) adalah muannats, sehingga isim maf'ulnya 'maksuuratun'."
            },
            {
                "ar": "الطَّبِيبُ يَتَأَلَّمُ مِنْ زُكَامٌ",
                "translation": "Dokter itu kesakitan karena Selesma / Pilek.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ زُكَامٌ",
                "translation": "Ayahku kesakitan karena Selesma / Pilek.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أُمِّي يَتَأَلَّمُ مِنْ زُكَامٌ",
                "translation": "Ibuku kesakitan karena Selesma / Pilek.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "صَدِيقِي يَتَأَلَّمُ مِنْ زُكَامٌ",
                "translation": "Temanku kesakitan karena Selesma / Pilek.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الطِّفْلُ يَتَأَلَّمُ مِنْ زُكَامٌ",
                "translation": "Anak itu kesakitan karena Selesma / Pilek.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الرَّجُلُ يَتَأَلَّمُ مِنْ زُكَامٌ",
                "translation": "Pria itu kesakitan karena Selesma / Pilek.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            }
        ]
    },
    {
        "id": "l2_8_c9",
        "wordAr": "سُعَالٌ",
        "translation": "Batuk",
        "description": "Respons tubuh mengeluarkan udara dari paru.",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي سُعَالٌ شَدِيدٌ (مِثَال 1)",
                "translation": "Saya menderita Batuk yang parah (contoh 1).",
                "grammarNote": "Logika: Menggunakan 'Indii' (saya memiliki) diikuti nama penyakit/gejala."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِـ سُعَالٌ هُنَا",
                "translation": "Pasien merasakan Batuk di sini.",
                "grammarNote": "Logika: Menggunakan 'Yasy'uru' (merasakan) diikuti harf jar 'bi'."
            },
            {
                "ar": "هَلْ هَذَا سُعَالٌ مُزْمِنٌ؟",
                "translation": "Apakah Batuk ini kronis?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Hal' (Apakah)."
            },
            {
                "ar": "يَدِي مَكْسُورَةٌ بِسَبَبِ سُعَالٌ",
                "translation": "Tanganku patah karena Batuk.",
                "grammarNote": "Logika: 'Yadii' (tanganku) adalah muannats, sehingga isim maf'ulnya 'maksuuratun'."
            },
            {
                "ar": "الطَّبِيبُ يَتَأَلَّمُ مِنْ سُعَالٌ",
                "translation": "Dokter itu kesakitan karena Batuk.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ سُعَالٌ",
                "translation": "Ayahku kesakitan karena Batuk.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أُمِّي يَتَأَلَّمُ مِنْ سُعَالٌ",
                "translation": "Ibuku kesakitan karena Batuk.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "صَدِيقِي يَتَأَلَّمُ مِنْ سُعَالٌ",
                "translation": "Temanku kesakitan karena Batuk.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الطِّفْلُ يَتَأَلَّمُ مِنْ سُعَالٌ",
                "translation": "Anak itu kesakitan karena Batuk.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الرَّجُلُ يَتَأَلَّمُ مِنْ سُعَالٌ",
                "translation": "Pria itu kesakitan karena Batuk.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            }
        ]
    },
    {
        "id": "l2_8_c10",
        "wordAr": "إِسْهَالٌ",
        "translation": "Diare",
        "description": "Gangguan pencernaan perut.",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي إِسْهَالٌ شَدِيدٌ (مِثَال 1)",
                "translation": "Saya menderita Diare yang parah (contoh 1).",
                "grammarNote": "Logika: Menggunakan 'Indii' (saya memiliki) diikuti nama penyakit/gejala."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِـ إِسْهَالٌ هُنَا",
                "translation": "Pasien merasakan Diare di sini.",
                "grammarNote": "Logika: Menggunakan 'Yasy'uru' (merasakan) diikuti harf jar 'bi'."
            },
            {
                "ar": "هَلْ هَذَا إِسْهَالٌ مُزْمِنٌ؟",
                "translation": "Apakah Diare ini kronis?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Hal' (Apakah)."
            },
            {
                "ar": "يَدِي مَكْسُورَةٌ بِسَبَبِ إِسْهَالٌ",
                "translation": "Tanganku patah karena Diare.",
                "grammarNote": "Logika: 'Yadii' (tanganku) adalah muannats, sehingga isim maf'ulnya 'maksuuratun'."
            },
            {
                "ar": "الطَّبِيبُ يَتَأَلَّمُ مِنْ إِسْهَالٌ",
                "translation": "Dokter itu kesakitan karena Diare.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ إِسْهَالٌ",
                "translation": "Ayahku kesakitan karena Diare.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أُمِّي يَتَأَلَّمُ مِنْ إِسْهَالٌ",
                "translation": "Ibuku kesakitan karena Diare.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "صَدِيقِي يَتَأَلَّمُ مِنْ إِسْهَالٌ",
                "translation": "Temanku kesakitan karena Diare.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الطِّفْلُ يَتَأَلَّمُ مِنْ إِسْهَالٌ",
                "translation": "Anak itu kesakitan karena Diare.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الرَّجُلُ يَتَأَلَّمُ مِنْ إِسْهَالٌ",
                "translation": "Pria itu kesakitan karena Diare.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            }
        ]
    },
    {
        "id": "l2_8_c11",
        "wordAr": "قَيْءٌ",
        "translation": "Muntah",
        "description": "Isi perut yang keluar (Fi'il: تَقَيَّأَ).",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي قَيْءٌ شَدِيدٌ (مِثَال 1)",
                "translation": "Saya menderita Muntah yang parah (contoh 1).",
                "grammarNote": "Logika: Menggunakan 'Indii' (saya memiliki) diikuti nama penyakit/gejala."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِـ قَيْءٌ هُنَا",
                "translation": "Pasien merasakan Muntah di sini.",
                "grammarNote": "Logika: Menggunakan 'Yasy'uru' (merasakan) diikuti harf jar 'bi'."
            },
            {
                "ar": "هَلْ هَذَا قَيْءٌ مُزْمِنٌ؟",
                "translation": "Apakah Muntah ini kronis?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Hal' (Apakah)."
            },
            {
                "ar": "يَدِي مَكْسُورَةٌ بِسَبَبِ قَيْءٌ",
                "translation": "Tanganku patah karena Muntah.",
                "grammarNote": "Logika: 'Yadii' (tanganku) adalah muannats, sehingga isim maf'ulnya 'maksuuratun'."
            },
            {
                "ar": "الطَّبِيبُ يَتَأَلَّمُ مِنْ قَيْءٌ",
                "translation": "Dokter itu kesakitan karena Muntah.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ قَيْءٌ",
                "translation": "Ayahku kesakitan karena Muntah.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أُمِّي يَتَأَلَّمُ مِنْ قَيْءٌ",
                "translation": "Ibuku kesakitan karena Muntah.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "صَدِيقِي يَتَأَلَّمُ مِنْ قَيْءٌ",
                "translation": "Temanku kesakitan karena Muntah.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الطِّفْلُ يَتَأَلَّمُ مِنْ قَيْءٌ",
                "translation": "Anak itu kesakitan karena Muntah.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الرَّجُلُ يَتَأَلَّمُ مِنْ قَيْءٌ",
                "translation": "Pria itu kesakitan karena Muntah.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            }
        ]
    },
    {
        "id": "l2_8_c12",
        "wordAr": "حَسَاسِيَّةٌ",
        "translation": "Alergi",
        "description": "Reaksi tubuh terhadap zat tertentu.",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي حَسَاسِيَّةٌ شَدِيدٌ (مِثَال 1)",
                "translation": "Saya menderita Alergi yang parah (contoh 1).",
                "grammarNote": "Logika: Menggunakan 'Indii' (saya memiliki) diikuti nama penyakit/gejala."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِـ حَسَاسِيَّةٌ هُنَا",
                "translation": "Pasien merasakan Alergi di sini.",
                "grammarNote": "Logika: Menggunakan 'Yasy'uru' (merasakan) diikuti harf jar 'bi'."
            },
            {
                "ar": "هَلْ هَذَا حَسَاسِيَّةٌ مُزْمِنٌ؟",
                "translation": "Apakah Alergi ini kronis?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Hal' (Apakah)."
            },
            {
                "ar": "يَدِي مَكْسُورَةٌ بِسَبَبِ حَسَاسِيَّةٌ",
                "translation": "Tanganku patah karena Alergi.",
                "grammarNote": "Logika: 'Yadii' (tanganku) adalah muannats, sehingga isim maf'ulnya 'maksuuratun'."
            },
            {
                "ar": "الطَّبِيبُ يَتَأَلَّمُ مِنْ حَسَاسِيَّةٌ",
                "translation": "Dokter itu kesakitan karena Alergi.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ حَسَاسِيَّةٌ",
                "translation": "Ayahku kesakitan karena Alergi.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أُمِّي يَتَأَلَّمُ مِنْ حَسَاسِيَّةٌ",
                "translation": "Ibuku kesakitan karena Alergi.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "صَدِيقِي يَتَأَلَّمُ مِنْ حَسَاسِيَّةٌ",
                "translation": "Temanku kesakitan karena Alergi.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الطِّفْلُ يَتَأَلَّمُ مِنْ حَسَاسِيَّةٌ",
                "translation": "Anak itu kesakitan karena Alergi.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الرَّجُلُ يَتَأَلَّمُ مِنْ حَسَاسِيَّةٌ",
                "translation": "Pria itu kesakitan karena Alergi.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            }
        ]
    },
    {
        "id": "l2_8_c13",
        "wordAr": "مَغَصٌ",
        "translation": "Mulas / Kram Perut",
        "description": "Nyeri tajam di daerah perut.",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي مَغَصٌ شَدِيدٌ (مِثَال 1)",
                "translation": "Saya menderita Mulas / Kram Perut yang parah (contoh 1).",
                "grammarNote": "Logika: Menggunakan 'Indii' (saya memiliki) diikuti nama penyakit/gejala."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِـ مَغَصٌ هُنَا",
                "translation": "Pasien merasakan Mulas / Kram Perut di sini.",
                "grammarNote": "Logika: Menggunakan 'Yasy'uru' (merasakan) diikuti harf jar 'bi'."
            },
            {
                "ar": "هَلْ هَذَا مَغَصٌ مُزْمِنٌ؟",
                "translation": "Apakah Mulas / Kram Perut ini kronis?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Hal' (Apakah)."
            },
            {
                "ar": "يَدِي مَكْسُورَةٌ بِسَبَبِ مَغَصٌ",
                "translation": "Tanganku patah karena Mulas / Kram Perut.",
                "grammarNote": "Logika: 'Yadii' (tanganku) adalah muannats, sehingga isim maf'ulnya 'maksuuratun'."
            },
            {
                "ar": "الطَّبِيبُ يَتَأَلَّمُ مِنْ مَغَصٌ",
                "translation": "Dokter itu kesakitan karena Mulas / Kram Perut.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ مَغَصٌ",
                "translation": "Ayahku kesakitan karena Mulas / Kram Perut.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أُمِّي يَتَأَلَّمُ مِنْ مَغَصٌ",
                "translation": "Ibuku kesakitan karena Mulas / Kram Perut.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "صَدِيقِي يَتَأَلَّمُ مِنْ مَغَصٌ",
                "translation": "Temanku kesakitan karena Mulas / Kram Perut.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الطِّفْلُ يَتَأَلَّمُ مِنْ مَغَصٌ",
                "translation": "Anak itu kesakitan karena Mulas / Kram Perut.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الرَّجُلُ يَتَأَلَّمُ مِنْ مَغَصٌ",
                "translation": "Pria itu kesakitan karena Mulas / Kram Perut.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            }
        ]
    },
    {
        "id": "l2_8_c14",
        "wordAr": "ضَغْطُ الدَّمِ",
        "translation": "Tekanan Darah",
        "description": "Ukuran medis (Tensi).",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي ضَغْطُ الدَّمِ شَدِيدٌ (مِثَال 1)",
                "translation": "Saya menderita Tekanan Darah yang parah (contoh 1).",
                "grammarNote": "Logika: Menggunakan 'Indii' (saya memiliki) diikuti nama penyakit/gejala."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِـ ضَغْطُ الدَّمِ هُنَا",
                "translation": "Pasien merasakan Tekanan Darah di sini.",
                "grammarNote": "Logika: Menggunakan 'Yasy'uru' (merasakan) diikuti harf jar 'bi'."
            },
            {
                "ar": "هَلْ هَذَا ضَغْطُ الدَّمِ مُزْمِنٌ؟",
                "translation": "Apakah Tekanan Darah ini kronis?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Hal' (Apakah)."
            },
            {
                "ar": "يَدِي مَكْسُورَةٌ بِسَبَبِ ضَغْطُ الدَّمِ",
                "translation": "Tanganku patah karena Tekanan Darah.",
                "grammarNote": "Logika: 'Yadii' (tanganku) adalah muannats, sehingga isim maf'ulnya 'maksuuratun'."
            },
            {
                "ar": "الطَّبِيبُ يَتَأَلَّمُ مِنْ ضَغْطُ الدَّمِ",
                "translation": "Dokter itu kesakitan karena Tekanan Darah.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ ضَغْطُ الدَّمِ",
                "translation": "Ayahku kesakitan karena Tekanan Darah.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أُمِّي يَتَأَلَّمُ مِنْ ضَغْطُ الدَّمِ",
                "translation": "Ibuku kesakitan karena Tekanan Darah.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "صَدِيقِي يَتَأَلَّمُ مِنْ ضَغْطُ الدَّمِ",
                "translation": "Temanku kesakitan karena Tekanan Darah.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الطِّفْلُ يَتَأَلَّمُ مِنْ ضَغْطُ الدَّمِ",
                "translation": "Anak itu kesakitan karena Tekanan Darah.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الرَّجُلُ يَتَأَلَّمُ مِنْ ضَغْطُ الدَّمِ",
                "translation": "Pria itu kesakitan karena Tekanan Darah.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            }
        ]
    },
    {
        "id": "l2_8_c15",
        "wordAr": "سُكَّرِيٌّ",
        "translation": "Diabetes",
        "description": "Penyakit gula.",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي سُكَّرِيٌّ شَدِيدٌ (مِثَال 1)",
                "translation": "Saya menderita Diabetes yang parah (contoh 1).",
                "grammarNote": "Logika: Menggunakan 'Indii' (saya memiliki) diikuti nama penyakit/gejala."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِـ سُكَّرِيٌّ هُنَا",
                "translation": "Pasien merasakan Diabetes di sini.",
                "grammarNote": "Logika: Menggunakan 'Yasy'uru' (merasakan) diikuti harf jar 'bi'."
            },
            {
                "ar": "هَلْ هَذَا سُكَّرِيٌّ مُزْمِنٌ؟",
                "translation": "Apakah Diabetes ini kronis?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Hal' (Apakah)."
            },
            {
                "ar": "يَدِي مَكْسُورَةٌ بِسَبَبِ سُكَّرِيٌّ",
                "translation": "Tanganku patah karena Diabetes.",
                "grammarNote": "Logika: 'Yadii' (tanganku) adalah muannats, sehingga isim maf'ulnya 'maksuuratun'."
            },
            {
                "ar": "الطَّبِيبُ يَتَأَلَّمُ مِنْ سُكَّرِيٌّ",
                "translation": "Dokter itu kesakitan karena Diabetes.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ سُكَّرِيٌّ",
                "translation": "Ayahku kesakitan karena Diabetes.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "أُمِّي يَتَأَلَّمُ مِنْ سُكَّرِيٌّ",
                "translation": "Ibuku kesakitan karena Diabetes.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "صَدِيقِي يَتَأَلَّمُ مِنْ سُكَّرِيٌّ",
                "translation": "Temanku kesakitan karena Diabetes.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الطِّفْلُ يَتَأَلَّمُ مِنْ سُكَّرِيٌّ",
                "translation": "Anak itu kesakitan karena Diabetes.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            },
            {
                "ar": "الرَّجُلُ يَتَأَلَّمُ مِنْ سُكَّرِيٌّ",
                "translation": "Pria itu kesakitan karena Diabetes.",
                "grammarNote": "Logika: Harf jar 'min' (dari/karena) digunakan untuk menunjukkan penyebab."
            }
        ]
    },
    {
        "id": "l2_8_c16",
        "wordAr": "طَبِيبٌ",
        "translation": "Dokter",
        "description": "Pakar medis profesional (Jamak: أَطِبَّاءُ).",
        "category": "Rumah Sakit",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى طَبِيبٌ",
                "translation": "Saya pergi ke Dokter.",
                "grammarNote": "Logika: Harf jar 'ila' (ke) membuat kata setelahnya menjadi majrur (kasrah)."
            },
            {
                "ar": "هَذَا طَبِيبٌ جَدِيدٌ",
                "translation": "Ini adalah Dokter yang baru.",
                "grammarNote": "Logika: Mubtada' dan Khabar dalam jumlah ismiyyah."
            },
            {
                "ar": "أَيْنَ طَبِيبٌ؟",
                "translation": "Di mana Dokter?",
                "grammarNote": "Logika: Kata tanya 'Ayna' (Di mana)."
            },
            {
                "ar": "رِجْلِي مَجْرُوحَةٌ فَذَهَبْتُ إِلَى طَبِيبٌ",
                "translation": "Kakiku terluka maka aku pergi ke Dokter.",
                "grammarNote": "Logika: 'Rijl' (kaki) muannats, isim maf'ulnya 'majruuhatun'."
            },
            {
                "ar": "الطَّبِيبُ يَحْتَاجُ إِلَى طَبِيبٌ",
                "translation": "Dokter itu membutuhkan Dokter.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أَبِي يَحْتَاجُ إِلَى طَبِيبٌ",
                "translation": "Ayahku membutuhkan Dokter.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أُمِّي يَحْتَاجُ إِلَى طَبِيبٌ",
                "translation": "Ibuku membutuhkan Dokter.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "صَدِيقِي يَحْتَاجُ إِلَى طَبِيبٌ",
                "translation": "Temanku membutuhkan Dokter.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الطِّفْلُ يَحْتَاجُ إِلَى طَبِيبٌ",
                "translation": "Anak itu membutuhkan Dokter.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الرَّجُلُ يَحْتَاجُ إِلَى طَبِيبٌ",
                "translation": "Pria itu membutuhkan Dokter.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            }
        ]
    },
    {
        "id": "l2_8_c17",
        "wordAr": "مُسْتَشْفَى",
        "translation": "Rumah Sakit",
        "description": "Instalasi kesehatan besar (Muannats maqsur).",
        "category": "Rumah Sakit",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى مُسْتَشْفَى",
                "translation": "Saya pergi ke Rumah Sakit.",
                "grammarNote": "Logika: Harf jar 'ila' (ke) membuat kata setelahnya menjadi majrur (kasrah)."
            },
            {
                "ar": "هَذَا مُسْتَشْفَى جَدِيدٌ",
                "translation": "Ini adalah Rumah Sakit yang baru.",
                "grammarNote": "Logika: Mubtada' dan Khabar dalam jumlah ismiyyah."
            },
            {
                "ar": "أَيْنَ مُسْتَشْفَى؟",
                "translation": "Di mana Rumah Sakit?",
                "grammarNote": "Logika: Kata tanya 'Ayna' (Di mana)."
            },
            {
                "ar": "رِجْلِي مَجْرُوحَةٌ فَذَهَبْتُ إِلَى مُسْتَشْفَى",
                "translation": "Kakiku terluka maka aku pergi ke Rumah Sakit.",
                "grammarNote": "Logika: 'Rijl' (kaki) muannats, isim maf'ulnya 'majruuhatun'."
            },
            {
                "ar": "الطَّبِيبُ يَحْتَاجُ إِلَى مُسْتَشْفَى",
                "translation": "Dokter itu membutuhkan Rumah Sakit.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أَبِي يَحْتَاجُ إِلَى مُسْتَشْفَى",
                "translation": "Ayahku membutuhkan Rumah Sakit.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أُمِّي يَحْتَاجُ إِلَى مُسْتَشْفَى",
                "translation": "Ibuku membutuhkan Rumah Sakit.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "صَدِيقِي يَحْتَاجُ إِلَى مُسْتَشْفَى",
                "translation": "Temanku membutuhkan Rumah Sakit.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الطِّفْلُ يَحْتَاجُ إِلَى مُسْتَشْفَى",
                "translation": "Anak itu membutuhkan Rumah Sakit.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الرَّجُلُ يَحْتَاجُ إِلَى مُسْتَشْفَى",
                "translation": "Pria itu membutuhkan Rumah Sakit.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            }
        ]
    },
    {
        "id": "l2_8_c18",
        "wordAr": "عِيَادَةٌ",
        "translation": "Klinik / Ruang Praktek",
        "description": "Tempat pemeriksaan dokter.",
        "category": "Rumah Sakit",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى عِيَادَةٌ",
                "translation": "Saya pergi ke Klinik / Ruang Praktek.",
                "grammarNote": "Logika: Harf jar 'ila' (ke) membuat kata setelahnya menjadi majrur (kasrah)."
            },
            {
                "ar": "هَذَا عِيَادَةٌ جَدِيدٌ",
                "translation": "Ini adalah Klinik / Ruang Praktek yang baru.",
                "grammarNote": "Logika: Mubtada' dan Khabar dalam jumlah ismiyyah."
            },
            {
                "ar": "أَيْنَ عِيَادَةٌ؟",
                "translation": "Di mana Klinik / Ruang Praktek?",
                "grammarNote": "Logika: Kata tanya 'Ayna' (Di mana)."
            },
            {
                "ar": "رِجْلِي مَجْرُوحَةٌ فَذَهَبْتُ إِلَى عِيَادَةٌ",
                "translation": "Kakiku terluka maka aku pergi ke Klinik / Ruang Praktek.",
                "grammarNote": "Logika: 'Rijl' (kaki) muannats, isim maf'ulnya 'majruuhatun'."
            },
            {
                "ar": "الطَّبِيبُ يَحْتَاجُ إِلَى عِيَادَةٌ",
                "translation": "Dokter itu membutuhkan Klinik / Ruang Praktek.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أَبِي يَحْتَاجُ إِلَى عِيَادَةٌ",
                "translation": "Ayahku membutuhkan Klinik / Ruang Praktek.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أُمِّي يَحْتَاجُ إِلَى عِيَادَةٌ",
                "translation": "Ibuku membutuhkan Klinik / Ruang Praktek.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "صَدِيقِي يَحْتَاجُ إِلَى عِيَادَةٌ",
                "translation": "Temanku membutuhkan Klinik / Ruang Praktek.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الطِّفْلُ يَحْتَاجُ إِلَى عِيَادَةٌ",
                "translation": "Anak itu membutuhkan Klinik / Ruang Praktek.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الرَّجُلُ يَحْتَاجُ إِلَى عِيَادَةٌ",
                "translation": "Pria itu membutuhkan Klinik / Ruang Praktek.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            }
        ]
    },
    {
        "id": "l2_8_c19",
        "wordAr": "صَيْدَلِيَّةٌ",
        "translation": "Apotek",
        "description": "Tempat membeli obat.",
        "category": "Rumah Sakit",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى صَيْدَلِيَّةٌ",
                "translation": "Saya pergi ke Apotek.",
                "grammarNote": "Logika: Harf jar 'ila' (ke) membuat kata setelahnya menjadi majrur (kasrah)."
            },
            {
                "ar": "هَذَا صَيْدَلِيَّةٌ جَدِيدٌ",
                "translation": "Ini adalah Apotek yang baru.",
                "grammarNote": "Logika: Mubtada' dan Khabar dalam jumlah ismiyyah."
            },
            {
                "ar": "أَيْنَ صَيْدَلِيَّةٌ؟",
                "translation": "Di mana Apotek?",
                "grammarNote": "Logika: Kata tanya 'Ayna' (Di mana)."
            },
            {
                "ar": "رِجْلِي مَجْرُوحَةٌ فَذَهَبْتُ إِلَى صَيْدَلِيَّةٌ",
                "translation": "Kakiku terluka maka aku pergi ke Apotek.",
                "grammarNote": "Logika: 'Rijl' (kaki) muannats, isim maf'ulnya 'majruuhatun'."
            },
            {
                "ar": "الطَّبِيبُ يَحْتَاجُ إِلَى صَيْدَلِيَّةٌ",
                "translation": "Dokter itu membutuhkan Apotek.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أَبِي يَحْتَاجُ إِلَى صَيْدَلِيَّةٌ",
                "translation": "Ayahku membutuhkan Apotek.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أُمِّي يَحْتَاجُ إِلَى صَيْدَلِيَّةٌ",
                "translation": "Ibuku membutuhkan Apotek.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "صَدِيقِي يَحْتَاجُ إِلَى صَيْدَلِيَّةٌ",
                "translation": "Temanku membutuhkan Apotek.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الطِّفْلُ يَحْتَاجُ إِلَى صَيْدَلِيَّةٌ",
                "translation": "Anak itu membutuhkan Apotek.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الرَّجُلُ يَحْتَاجُ إِلَى صَيْدَلِيَّةٌ",
                "translation": "Pria itu membutuhkan Apotek.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            }
        ]
    },
    {
        "id": "l2_8_c20",
        "wordAr": "مُمَرِّضَةٌ",
        "translation": "Perawat (Pr)",
        "description": "Tenaga medis yang membantu dokter.",
        "category": "Rumah Sakit",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى مُمَرِّضَةٌ",
                "translation": "Saya pergi ke Perawat (Pr).",
                "grammarNote": "Logika: Harf jar 'ila' (ke) membuat kata setelahnya menjadi majrur (kasrah)."
            },
            {
                "ar": "هَذَا مُمَرِّضَةٌ جَدِيدٌ",
                "translation": "Ini adalah Perawat (Pr) yang baru.",
                "grammarNote": "Logika: Mubtada' dan Khabar dalam jumlah ismiyyah."
            },
            {
                "ar": "أَيْنَ مُمَرِّضَةٌ؟",
                "translation": "Di mana Perawat (Pr)?",
                "grammarNote": "Logika: Kata tanya 'Ayna' (Di mana)."
            },
            {
                "ar": "رِجْلِي مَجْرُوحَةٌ فَذَهَبْتُ إِلَى مُمَرِّضَةٌ",
                "translation": "Kakiku terluka maka aku pergi ke Perawat (Pr).",
                "grammarNote": "Logika: 'Rijl' (kaki) muannats, isim maf'ulnya 'majruuhatun'."
            },
            {
                "ar": "الطَّبِيبُ يَحْتَاجُ إِلَى مُمَرِّضَةٌ",
                "translation": "Dokter itu membutuhkan Perawat (Pr).",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أَبِي يَحْتَاجُ إِلَى مُمَرِّضَةٌ",
                "translation": "Ayahku membutuhkan Perawat (Pr).",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أُمِّي يَحْتَاجُ إِلَى مُمَرِّضَةٌ",
                "translation": "Ibuku membutuhkan Perawat (Pr).",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "صَدِيقِي يَحْتَاجُ إِلَى مُمَرِّضَةٌ",
                "translation": "Temanku membutuhkan Perawat (Pr).",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الطِّفْلُ يَحْتَاجُ إِلَى مُمَرِّضَةٌ",
                "translation": "Anak itu membutuhkan Perawat (Pr).",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الرَّجُلُ يَحْتَاجُ إِلَى مُمَرِّضَةٌ",
                "translation": "Pria itu membutuhkan Perawat (Pr).",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            }
        ]
    },
    {
        "id": "l2_8_c21",
        "wordAr": "فَحْصٌ",
        "translation": "Pemeriksaan / Check-up",
        "description": "Proses memeriksa kondisi pasien.",
        "category": "Rumah Sakit",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى فَحْصٌ",
                "translation": "Saya pergi ke Pemeriksaan / Check-up.",
                "grammarNote": "Logika: Harf jar 'ila' (ke) membuat kata setelahnya menjadi majrur (kasrah)."
            },
            {
                "ar": "هَذَا فَحْصٌ جَدِيدٌ",
                "translation": "Ini adalah Pemeriksaan / Check-up yang baru.",
                "grammarNote": "Logika: Mubtada' dan Khabar dalam jumlah ismiyyah."
            },
            {
                "ar": "أَيْنَ فَحْصٌ؟",
                "translation": "Di mana Pemeriksaan / Check-up?",
                "grammarNote": "Logika: Kata tanya 'Ayna' (Di mana)."
            },
            {
                "ar": "رِجْلِي مَجْرُوحَةٌ فَذَهَبْتُ إِلَى فَحْصٌ",
                "translation": "Kakiku terluka maka aku pergi ke Pemeriksaan / Check-up.",
                "grammarNote": "Logika: 'Rijl' (kaki) muannats, isim maf'ulnya 'majruuhatun'."
            },
            {
                "ar": "الطَّبِيبُ يَحْتَاجُ إِلَى فَحْصٌ",
                "translation": "Dokter itu membutuhkan Pemeriksaan / Check-up.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أَبِي يَحْتَاجُ إِلَى فَحْصٌ",
                "translation": "Ayahku membutuhkan Pemeriksaan / Check-up.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أُمِّي يَحْتَاجُ إِلَى فَحْصٌ",
                "translation": "Ibuku membutuhkan Pemeriksaan / Check-up.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "صَدِيقِي يَحْتَاجُ إِلَى فَحْصٌ",
                "translation": "Temanku membutuhkan Pemeriksaan / Check-up.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الطِّفْلُ يَحْتَاجُ إِلَى فَحْصٌ",
                "translation": "Anak itu membutuhkan Pemeriksaan / Check-up.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الرَّجُلُ يَحْتَاجُ إِلَى فَحْصٌ",
                "translation": "Pria itu membutuhkan Pemeriksaan / Check-up.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            }
        ]
    },
    {
        "id": "l2_8_c22",
        "wordAr": "وَصْفَةٌ طِبِّيَّةٌ",
        "translation": "Resep Dokter",
        "description": "Formulasi obat tertulis dari dokter.",
        "category": "Rumah Sakit",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى وَصْفَةٌ طِبِّيَّةٌ",
                "translation": "Saya pergi ke Resep Dokter.",
                "grammarNote": "Logika: Harf jar 'ila' (ke) membuat kata setelahnya menjadi majrur (kasrah)."
            },
            {
                "ar": "هَذَا وَصْفَةٌ طِبِّيَّةٌ جَدِيدٌ",
                "translation": "Ini adalah Resep Dokter yang baru.",
                "grammarNote": "Logika: Mubtada' dan Khabar dalam jumlah ismiyyah."
            },
            {
                "ar": "أَيْنَ وَصْفَةٌ طِبِّيَّةٌ؟",
                "translation": "Di mana Resep Dokter?",
                "grammarNote": "Logika: Kata tanya 'Ayna' (Di mana)."
            },
            {
                "ar": "رِجْلِي مَجْرُوحَةٌ فَذَهَبْتُ إِلَى وَصْفَةٌ طِبِّيَّةٌ",
                "translation": "Kakiku terluka maka aku pergi ke Resep Dokter.",
                "grammarNote": "Logika: 'Rijl' (kaki) muannats, isim maf'ulnya 'majruuhatun'."
            },
            {
                "ar": "الطَّبِيبُ يَحْتَاجُ إِلَى وَصْفَةٌ طِبِّيَّةٌ",
                "translation": "Dokter itu membutuhkan Resep Dokter.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أَبِي يَحْتَاجُ إِلَى وَصْفَةٌ طِبِّيَّةٌ",
                "translation": "Ayahku membutuhkan Resep Dokter.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أُمِّي يَحْتَاجُ إِلَى وَصْفَةٌ طِبِّيَّةٌ",
                "translation": "Ibuku membutuhkan Resep Dokter.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "صَدِيقِي يَحْتَاجُ إِلَى وَصْفَةٌ طِبِّيَّةٌ",
                "translation": "Temanku membutuhkan Resep Dokter.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الطِّفْلُ يَحْتَاجُ إِلَى وَصْفَةٌ طِبِّيَّةٌ",
                "translation": "Anak itu membutuhkan Resep Dokter.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الرَّجُلُ يَحْتَاجُ إِلَى وَصْفَةٌ طِبِّيَّةٌ",
                "translation": "Pria itu membutuhkan Resep Dokter.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            }
        ]
    },
    {
        "id": "l2_8_c23",
        "wordAr": "إِسْعَافٌ",
        "translation": "Ambulans / Pertolongan",
        "description": "Kendaraan untuk keadaan darurat.",
        "category": "Rumah Sakit",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى إِسْعَافٌ",
                "translation": "Saya pergi ke Ambulans / Pertolongan.",
                "grammarNote": "Logika: Harf jar 'ila' (ke) membuat kata setelahnya menjadi majrur (kasrah)."
            },
            {
                "ar": "هَذَا إِسْعَافٌ جَدِيدٌ",
                "translation": "Ini adalah Ambulans / Pertolongan yang baru.",
                "grammarNote": "Logika: Mubtada' dan Khabar dalam jumlah ismiyyah."
            },
            {
                "ar": "أَيْنَ إِسْعَافٌ؟",
                "translation": "Di mana Ambulans / Pertolongan?",
                "grammarNote": "Logika: Kata tanya 'Ayna' (Di mana)."
            },
            {
                "ar": "رِجْلِي مَجْرُوحَةٌ فَذَهَبْتُ إِلَى إِسْعَافٌ",
                "translation": "Kakiku terluka maka aku pergi ke Ambulans / Pertolongan.",
                "grammarNote": "Logika: 'Rijl' (kaki) muannats, isim maf'ulnya 'majruuhatun'."
            },
            {
                "ar": "الطَّبِيبُ يَحْتَاجُ إِلَى إِسْعَافٌ",
                "translation": "Dokter itu membutuhkan Ambulans / Pertolongan.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أَبِي يَحْتَاجُ إِلَى إِسْعَافٌ",
                "translation": "Ayahku membutuhkan Ambulans / Pertolongan.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أُمِّي يَحْتَاجُ إِلَى إِسْعَافٌ",
                "translation": "Ibuku membutuhkan Ambulans / Pertolongan.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "صَدِيقِي يَحْتَاجُ إِلَى إِسْعَافٌ",
                "translation": "Temanku membutuhkan Ambulans / Pertolongan.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الطِّفْلُ يَحْتَاجُ إِلَى إِسْعَافٌ",
                "translation": "Anak itu membutuhkan Ambulans / Pertolongan.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الرَّجُلُ يَحْتَاجُ إِلَى إِسْعَافٌ",
                "translation": "Pria itu membutuhkan Ambulans / Pertolongan.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            }
        ]
    },
    {
        "id": "l2_8_c24",
        "wordAr": "دَوَاءٌ",
        "translation": "Obat",
        "description": "Zat untuk terapi kesembuhan penyakit (Jamak: أَدْوِيَةٌ).",
        "category": "Obat",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى دَوَاءٌ",
                "translation": "Saya pergi ke Obat.",
                "grammarNote": "Logika: Harf jar 'ila' (ke) membuat kata setelahnya menjadi majrur (kasrah)."
            },
            {
                "ar": "هَذَا دَوَاءٌ جَدِيدٌ",
                "translation": "Ini adalah Obat yang baru.",
                "grammarNote": "Logika: Mubtada' dan Khabar dalam jumlah ismiyyah."
            },
            {
                "ar": "أَيْنَ دَوَاءٌ؟",
                "translation": "Di mana Obat?",
                "grammarNote": "Logika: Kata tanya 'Ayna' (Di mana)."
            },
            {
                "ar": "رِجْلِي مَجْرُوحَةٌ فَذَهَبْتُ إِلَى دَوَاءٌ",
                "translation": "Kakiku terluka maka aku pergi ke Obat.",
                "grammarNote": "Logika: 'Rijl' (kaki) muannats, isim maf'ulnya 'majruuhatun'."
            },
            {
                "ar": "الطَّبِيبُ يَحْتَاجُ إِلَى دَوَاءٌ",
                "translation": "Dokter itu membutuhkan Obat.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أَبِي يَحْتَاجُ إِلَى دَوَاءٌ",
                "translation": "Ayahku membutuhkan Obat.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أُمِّي يَحْتَاجُ إِلَى دَوَاءٌ",
                "translation": "Ibuku membutuhkan Obat.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "صَدِيقِي يَحْتَاجُ إِلَى دَوَاءٌ",
                "translation": "Temanku membutuhkan Obat.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الطِّفْلُ يَحْتَاجُ إِلَى دَوَاءٌ",
                "translation": "Anak itu membutuhkan Obat.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الرَّجُلُ يَحْتَاجُ إِلَى دَوَاءٌ",
                "translation": "Pria itu membutuhkan Obat.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            }
        ]
    },
    {
        "id": "l2_8_c25",
        "wordAr": "حَبَّةٌ",
        "translation": "Pil / Tablet",
        "description": "Bentuk obat butiran (Jamak: حُبُوبٌ).",
        "category": "Obat",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى حَبَّةٌ",
                "translation": "Saya pergi ke Pil / Tablet.",
                "grammarNote": "Logika: Harf jar 'ila' (ke) membuat kata setelahnya menjadi majrur (kasrah)."
            },
            {
                "ar": "هَذَا حَبَّةٌ جَدِيدٌ",
                "translation": "Ini adalah Pil / Tablet yang baru.",
                "grammarNote": "Logika: Mubtada' dan Khabar dalam jumlah ismiyyah."
            },
            {
                "ar": "أَيْنَ حَبَّةٌ؟",
                "translation": "Di mana Pil / Tablet?",
                "grammarNote": "Logika: Kata tanya 'Ayna' (Di mana)."
            },
            {
                "ar": "رِجْلِي مَجْرُوحَةٌ فَذَهَبْتُ إِلَى حَبَّةٌ",
                "translation": "Kakiku terluka maka aku pergi ke Pil / Tablet.",
                "grammarNote": "Logika: 'Rijl' (kaki) muannats, isim maf'ulnya 'majruuhatun'."
            },
            {
                "ar": "الطَّبِيبُ يَحْتَاجُ إِلَى حَبَّةٌ",
                "translation": "Dokter itu membutuhkan Pil / Tablet.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أَبِي يَحْتَاجُ إِلَى حَبَّةٌ",
                "translation": "Ayahku membutuhkan Pil / Tablet.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أُمِّي يَحْتَاجُ إِلَى حَبَّةٌ",
                "translation": "Ibuku membutuhkan Pil / Tablet.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "صَدِيقِي يَحْتَاجُ إِلَى حَبَّةٌ",
                "translation": "Temanku membutuhkan Pil / Tablet.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الطِّفْلُ يَحْتَاجُ إِلَى حَبَّةٌ",
                "translation": "Anak itu membutuhkan Pil / Tablet.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الرَّجُلُ يَحْتَاجُ إِلَى حَبَّةٌ",
                "translation": "Pria itu membutuhkan Pil / Tablet.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            }
        ]
    },
    {
        "id": "l2_8_c26",
        "wordAr": "حُقْنَةٌ",
        "translation": "Suntikan / Injeksi",
        "description": "Pemberian obat melalui jarum.",
        "category": "Obat",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى حُقْنَةٌ",
                "translation": "Saya pergi ke Suntikan / Injeksi.",
                "grammarNote": "Logika: Harf jar 'ila' (ke) membuat kata setelahnya menjadi majrur (kasrah)."
            },
            {
                "ar": "هَذَا حُقْنَةٌ جَدِيدٌ",
                "translation": "Ini adalah Suntikan / Injeksi yang baru.",
                "grammarNote": "Logika: Mubtada' dan Khabar dalam jumlah ismiyyah."
            },
            {
                "ar": "أَيْنَ حُقْنَةٌ؟",
                "translation": "Di mana Suntikan / Injeksi?",
                "grammarNote": "Logika: Kata tanya 'Ayna' (Di mana)."
            },
            {
                "ar": "رِجْلِي مَجْرُوحَةٌ فَذَهَبْتُ إِلَى حُقْنَةٌ",
                "translation": "Kakiku terluka maka aku pergi ke Suntikan / Injeksi.",
                "grammarNote": "Logika: 'Rijl' (kaki) muannats, isim maf'ulnya 'majruuhatun'."
            },
            {
                "ar": "الطَّبِيبُ يَحْتَاجُ إِلَى حُقْنَةٌ",
                "translation": "Dokter itu membutuhkan Suntikan / Injeksi.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أَبِي يَحْتَاجُ إِلَى حُقْنَةٌ",
                "translation": "Ayahku membutuhkan Suntikan / Injeksi.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أُمِّي يَحْتَاجُ إِلَى حُقْنَةٌ",
                "translation": "Ibuku membutuhkan Suntikan / Injeksi.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "صَدِيقِي يَحْتَاجُ إِلَى حُقْنَةٌ",
                "translation": "Temanku membutuhkan Suntikan / Injeksi.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الطِّفْلُ يَحْتَاجُ إِلَى حُقْنَةٌ",
                "translation": "Anak itu membutuhkan Suntikan / Injeksi.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "الرَّجُلُ يَحْتَاجُ إِلَى حُقْنَةٌ",
                "translation": "Pria itu membutuhkan Suntikan / Injeksi.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            }
        ]
    },
    {
        "id": "l2_8_c27",
        "wordAr": "شِفَاءٌ",
        "translation": "Kesembuhan",
        "description": "Kondisi sehat kembali setelah sakit.",
        "category": "Kesembuhan",
        "examples": [
            {
                "ar": "نَرْجُو لَكَ شِفَاءٌ",
                "translation": "Kami mengharapkan Kesembuhan untukmu.",
                "grammarNote": "Logika: Penggunaan kata dalam konteks doa."
            },
            {
                "ar": "شِفَاءٌ قَرِيبٌ إِنْ شَاءَ اللَّهُ",
                "translation": "Kesembuhan itu dekat insya Allah.",
                "grammarNote": "Logika: Kalimat harapan dan doa."
            },
            {
                "ar": "نَرْجُو لَكَ شِفَاءٌ",
                "translation": "Kami mengharapkan Kesembuhan untukmu.",
                "grammarNote": "Logika: Penggunaan kata dalam konteks doa."
            },
            {
                "ar": "الْبَابُ مَفْتُوحٌ لِـ شِفَاءٌ",
                "translation": "Pintu terbuka untuk Kesembuhan.",
                "grammarNote": "Logika: 'Baab' mudzakkar, maka isim maf'ulnya 'maftuuhun'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: شِفَاءٌ",
                "translation": "Dokter berkata: Kesembuhan.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: شِفَاءٌ",
                "translation": "Dokter berkata: Kesembuhan.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: شِفَاءٌ",
                "translation": "Dokter berkata: Kesembuhan.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: شِفَاءٌ",
                "translation": "Dokter berkata: Kesembuhan.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: شِفَاءٌ",
                "translation": "Dokter berkata: Kesembuhan.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: شِفَاءٌ",
                "translation": "Dokter berkata: Kesembuhan.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            }
        ]
    },
    {
        "id": "l2_8_c28",
        "wordAr": "مَرِيضٌ",
        "translation": "Orang Sakit / Pasien",
        "description": "Sifat (Isim Fai'il) untuk orang yang sakit.",
        "category": "Kesembuhan",
        "examples": [
            {
                "ar": "نَرْجُو لَكَ مَرِيضٌ",
                "translation": "Kami mengharapkan Orang Sakit / Pasien untukmu.",
                "grammarNote": "Logika: Penggunaan kata dalam konteks doa."
            },
            {
                "ar": "مَرِيضٌ قَرِيبٌ إِنْ شَاءَ اللَّهُ",
                "translation": "Orang Sakit / Pasien itu dekat insya Allah.",
                "grammarNote": "Logika: Kalimat harapan dan doa."
            },
            {
                "ar": "نَرْجُو لَكَ مَرِيضٌ",
                "translation": "Kami mengharapkan Orang Sakit / Pasien untukmu.",
                "grammarNote": "Logika: Penggunaan kata dalam konteks doa."
            },
            {
                "ar": "الْبَابُ مَفْتُوحٌ لِـ مَرِيضٌ",
                "translation": "Pintu terbuka untuk Orang Sakit / Pasien.",
                "grammarNote": "Logika: 'Baab' mudzakkar, maka isim maf'ulnya 'maftuuhun'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: مَرِيضٌ",
                "translation": "Dokter berkata: Orang Sakit / Pasien.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: مَرِيضٌ",
                "translation": "Dokter berkata: Orang Sakit / Pasien.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: مَرِيضٌ",
                "translation": "Dokter berkata: Orang Sakit / Pasien.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: مَرِيضٌ",
                "translation": "Dokter berkata: Orang Sakit / Pasien.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: مَرِيضٌ",
                "translation": "Dokter berkata: Orang Sakit / Pasien.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: مَرِيضٌ",
                "translation": "Dokter berkata: Orang Sakit / Pasien.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            }
        ]
    },
    {
        "id": "l2_8_c29",
        "wordAr": "طَهُورٌ",
        "translation": "Pembersih",
        "description": "Dalam konteks sakit berarti penghapus dosa.",
        "category": "Kesembuhan",
        "examples": [
            {
                "ar": "نَرْجُو لَكَ طَهُورٌ",
                "translation": "Kami mengharapkan Pembersih untukmu.",
                "grammarNote": "Logika: Penggunaan kata dalam konteks doa."
            },
            {
                "ar": "طَهُورٌ قَرِيبٌ إِنْ شَاءَ اللَّهُ",
                "translation": "Pembersih itu dekat insya Allah.",
                "grammarNote": "Logika: Kalimat harapan dan doa."
            },
            {
                "ar": "نَرْجُو لَكَ طَهُورٌ",
                "translation": "Kami mengharapkan Pembersih untukmu.",
                "grammarNote": "Logika: Penggunaan kata dalam konteks doa."
            },
            {
                "ar": "الْبَابُ مَفْتُوحٌ لِـ طَهُورٌ",
                "translation": "Pintu terbuka untuk Pembersih.",
                "grammarNote": "Logika: 'Baab' mudzakkar, maka isim maf'ulnya 'maftuuhun'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: طَهُورٌ",
                "translation": "Dokter berkata: Pembersih.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: طَهُورٌ",
                "translation": "Dokter berkata: Pembersih.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: طَهُورٌ",
                "translation": "Dokter berkata: Pembersih.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: طَهُورٌ",
                "translation": "Dokter berkata: Pembersih.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: طَهُورٌ",
                "translation": "Dokter berkata: Pembersih.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: طَهُورٌ",
                "translation": "Dokter berkata: Pembersih.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            }
        ]
    },
    {
        "id": "l2_8_c30",
        "wordAr": "سَلَامَتُكَ",
        "translation": "Semoga lekas sembuh",
        "description": "Ucapan simpati standar mendoakan keselamatan.",
        "category": "Kesembuhan",
        "examples": [
            {
                "ar": "نَرْجُو لَكَ سَلَامَتُكَ",
                "translation": "Kami mengharapkan Semoga lekas sembuh untukmu.",
                "grammarNote": "Logika: Penggunaan kata dalam konteks doa."
            },
            {
                "ar": "سَلَامَتُكَ قَرِيبٌ إِنْ شَاءَ اللَّهُ",
                "translation": "Semoga lekas sembuh itu dekat insya Allah.",
                "grammarNote": "Logika: Kalimat harapan dan doa."
            },
            {
                "ar": "نَرْجُو لَكَ سَلَامَتُكَ",
                "translation": "Kami mengharapkan Semoga lekas sembuh untukmu.",
                "grammarNote": "Logika: Penggunaan kata dalam konteks doa."
            },
            {
                "ar": "الْبَابُ مَفْتُوحٌ لِـ سَلَامَتُكَ",
                "translation": "Pintu terbuka untuk Semoga lekas sembuh.",
                "grammarNote": "Logika: 'Baab' mudzakkar, maka isim maf'ulnya 'maftuuhun'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: سَلَامَتُكَ",
                "translation": "Dokter berkata: Semoga lekas sembuh.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: سَلَامَتُكَ",
                "translation": "Dokter berkata: Semoga lekas sembuh.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: سَلَامَتُكَ",
                "translation": "Dokter berkata: Semoga lekas sembuh.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: سَلَامَتُكَ",
                "translation": "Dokter berkata: Semoga lekas sembuh.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: سَلَامَتُكَ",
                "translation": "Dokter berkata: Semoga lekas sembuh.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            },
            {
                "ar": "قَالَ الطَّبِيبُ: سَلَامَتُكَ",
                "translation": "Dokter berkata: Semoga lekas sembuh.",
                "grammarNote": "Logika: Kutipan langsung setelah fi'il 'qaala'."
            }
        ]
    }
],
  
  dialog: [
    {
      speaker: "الطَّبِيبُ",
      arabic: "تَفَضَّلْ، اجْلِسْ. مِمَّ تَشْكُو يَا أَخِي؟",
      translation: "Silakan duduk. Apa yang Anda keluhkan, saudaraku?",
      note: "Mimma = Min + Maa (Dari apa). Tasjkuu = Kamu mengeluh."
    },
    {
      speaker: "الْمَرِيضُ",
      arabic: "أَشْعُرُ بِأَلَمٍ شَدِيدٍ فِي بَطْنِي مُنْذُ الْبَارِحَةِ.",
      translation: "Saya merasakan nyeri hebat di perut saya sejak kemarin.",
      note: "Asy'uru bi = Saya merasa."
    },
    {
      speaker: "الطَّبِيبُ",
      arabic: "هَلْ عِنْدَكَ حُمَّى أَوْ قَيْءٌ؟",
      translation: "Apakah Anda menderita demam atau muntah?",
      note: "Indaka = Kamu menderita (memiliki)."
    },
    {
      speaker: "الْمَرِيضُ",
      arabic: "نَعَمْ، عِنْدِي حُمَّى وَإِسْهَالٌ أَيْضًا.",
      translation: "Ya, saya menderita demam dan diare juga.",
      note: "Indii = Saya menderita (memiliki)."
    },
    {
      speaker: "الطَّبِيبُ",
      arabic: "افْتَحْ فَمَكَ... خُذْ نَفَسًا عَمِيقًا. هَذَا تَسَمُّمٌ غِذَائِيٌّ بَسِيطٌ.",
      translation: "Buka mulut Anda... tarik napas dalam. Ini keracunan makanan ringan.",
      note: "Iftah = Buka (Fi'il Amar)."
    },
    {
      speaker: "الْمَرِيضُ",
      arabic: "هَلِ الْأَمْرُ خَطِيرٌ يَا دُكْتُور؟",
      translation: "Apakah hal ini berbahaya, Dok?",
      note: "Khatiir = Berbahaya."
    },
    {
      speaker: "الطَّبِيبُ",
      arabic: "لَا، لَا تَقْلَقْ. سَأَكْتُبُ لَكَ وَصْفَةً طِبِّيَّةً.",
      translation: "Tidak, jangan khawatir. Saya akan menuliskan resep obat untuk Anda.",
      note: "Laa taqlaq = Jangan khawatir."
    },
    {
      speaker: "الْمَرِيضُ",
      arabic: "أَيْنَ أَصْرِفُ هَذِهِ الْوَصْفَةَ؟",
      translation: "Di mana saya menebus resep ini?",
      note: "Ashrifu = Saya menukar/menebus."
    },
    {
      speaker: "الطَّبِيبُ",
      arabic: "فِي الصَّيْدَلِيَّةِ الْمُجَاوِرَةِ. خُذْ حَبَّةً وَاحِدَةً بَعْدَ الْأَكْلِ ثَلَاثَ مَرَّاتٍ.",
      translation: "Di apotek sebelah. Minum satu pil setelah makan tiga kali.",
      note: "Khudz = Ambil/Minum (Fi'il Amar)."
    },
    {
      speaker: "الْمَرِيضُ",
      arabic: "شُكْرًا جَزِيلًا يَا دُكْتُور.",
      translation: "Terima kasih banyak, Dok.",
      note: "Ucapan terima kasih standar."
    },
    {
      speaker: "الطَّبِيبُ",
      arabic: "عَفْوًا، لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ.",
      translation: "Sama-sama, tidak mengapa, (sakit ini) pembersih (dosa) insya Allah.",
      note: "Doa nabi ketika menjenguk orang sakit."
    },
    {
      speaker: "الْمَرِيضُ",
      arabic: "آمِين، جَزَاكَ اللَّهُ خَيْرًا.",
      translation: "Aamiin, semoga Allah membalasmu dengan kebaikan.",
      note: "Balasan doa."
    }
  ],

    quiz: [
    {
      id: "q2_8_1",

        "question": "Apa arti dari kata \"شَعَرَ بِـ\"?",
        "options": [
            "Merasakan",
            "Menimpa / Mengenai",
            "Rasa Sakit / Nyeri",
            "Nyeri / Sakit"
        ],
        "correctAnswer": "Merasakan",
        "explanation": "Terjemahan yang tepat untuk \"شَعَرَ بِـ\" adalah Merasakan.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_2",

        "question": "Apa arti dari kata \"أَصَابَ\"?",
        "options": [
            "Menimpa / Mengenai",
            "Rasa Sakit / Nyeri",
            "Nyeri / Sakit",
            "Menderita (dari)"
        ],
        "correctAnswer": "Menimpa / Mengenai",
        "explanation": "Terjemahan yang tepat untuk \"أَصَابَ\" adalah Menimpa / Mengenai.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_3",

        "question": "Apa arti dari kata \"أَلَمٌ\"?",
        "options": [
            "Rasa Sakit / Nyeri",
            "Nyeri / Sakit",
            "Menderita (dari)",
            "Sakit Kepala / Pusing"
        ],
        "correctAnswer": "Rasa Sakit / Nyeri",
        "explanation": "Terjemahan yang tepat untuk \"أَلَمٌ\" adalah Rasa Sakit / Nyeri.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_4",

        "question": "Apa arti dari kata \"وَجَعٌ\"?",
        "options": [
            "Nyeri / Sakit",
            "Menderita (dari)",
            "Sakit Kepala / Pusing",
            "Demam"
        ],
        "correctAnswer": "Nyeri / Sakit",
        "explanation": "Terjemahan yang tepat untuk \"وَجَعٌ\" adalah Nyeri / Sakit.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_5",

        "question": "Apa arti dari kata \"عَانَى مِنْ\"?",
        "options": [
            "Menderita (dari)",
            "Sakit Kepala / Pusing",
            "Demam",
            "Selesma / Pilek"
        ],
        "correctAnswer": "Menderita (dari)",
        "explanation": "Terjemahan yang tepat untuk \"عَانَى مِنْ\" adalah Menderita (dari).",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_6",

        "question": "Apa arti dari kata \"صُدَاعٌ\"?",
        "options": [
            "Sakit Kepala / Pusing",
            "Demam",
            "Selesma / Pilek",
            "Batuk"
        ],
        "correctAnswer": "Sakit Kepala / Pusing",
        "explanation": "Terjemahan yang tepat untuk \"صُدَاعٌ\" adalah Sakit Kepala / Pusing.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_7",

        "question": "Apa arti dari kata \"حُمَّى\"?",
        "options": [
            "Demam",
            "Selesma / Pilek",
            "Batuk",
            "Diare"
        ],
        "correctAnswer": "Demam",
        "explanation": "Terjemahan yang tepat untuk \"حُمَّى\" adalah Demam.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_8",

        "question": "Apa arti dari kata \"زُكَامٌ\"?",
        "options": [
            "Selesma / Pilek",
            "Batuk",
            "Diare",
            "Muntah"
        ],
        "correctAnswer": "Selesma / Pilek",
        "explanation": "Terjemahan yang tepat untuk \"زُكَامٌ\" adalah Selesma / Pilek.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_9",

        "question": "Apa arti dari kata \"سُعَالٌ\"?",
        "options": [
            "Batuk",
            "Diare",
            "Muntah",
            "Alergi"
        ],
        "correctAnswer": "Batuk",
        "explanation": "Terjemahan yang tepat untuk \"سُعَالٌ\" adalah Batuk.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_10",

        "question": "Apa arti dari kata \"إِسْهَالٌ\"?",
        "options": [
            "Diare",
            "Muntah",
            "Alergi",
            "Mulas / Kram Perut"
        ],
        "correctAnswer": "Diare",
        "explanation": "Terjemahan yang tepat untuk \"إِسْهَالٌ\" adalah Diare.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_11",

        "question": "Manakah struktur kalimat yang BENAR?",
        "options": [
            "أَشْعُرُ بِأَلَمٍ",
            "أَشْعُرُ أَلَمٌ",
            "عِنْدِي بِأَلَمٍ",
            "Semua salah"
        ],
        "correctAnswer": "أَشْعُرُ بِأَلَمٍ",
        "explanation": "Struktur yang benar adalah Asy'uru bi-alamin (merasakan sakit) atau 'Indii hummaa (menderita demam). Tidak boleh dicampur.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_12",

        "question": "Manakah struktur kalimat yang BENAR?",
        "options": [
            "عِنْدِي حُمَّى",
            "عِنْدِي بِحُمَّى",
            "أَشْعُرُ حُمَّى",
            "Semua salah"
        ],
        "correctAnswer": "عِنْدِي حُمَّى",
        "explanation": "Struktur yang benar adalah Asy'uru bi-alamin (merasakan sakit) atau 'Indii hummaa (menderita demam). Tidak boleh dicampur.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_13",

        "question": "Manakah struktur kalimat yang BENAR?",
        "options": [
            "أَشْعُرُ بِأَلَمٍ",
            "أَشْعُرُ أَلَمٌ",
            "عِنْدِي بِأَلَمٍ",
            "Semua salah"
        ],
        "correctAnswer": "أَشْعُرُ بِأَلَمٍ",
        "explanation": "Struktur yang benar adalah Asy'uru bi-alamin (merasakan sakit) atau 'Indii hummaa (menderita demam). Tidak boleh dicampur.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_14",

        "question": "Manakah struktur kalimat yang BENAR?",
        "options": [
            "عِنْدِي حُمَّى",
            "عِنْدِي بِحُمَّى",
            "أَشْعُرُ حُمَّى",
            "Semua salah"
        ],
        "correctAnswer": "عِنْدِي حُمَّى",
        "explanation": "Struktur yang benar adalah Asy'uru bi-alamin (merasakan sakit) atau 'Indii hummaa (menderita demam). Tidak boleh dicampur.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_15",

        "question": "Manakah struktur kalimat yang BENAR?",
        "options": [
            "أَشْعُرُ بِأَلَمٍ",
            "أَشْعُرُ أَلَمٌ",
            "عِنْدِي بِأَلَمٍ",
            "Semua salah"
        ],
        "correctAnswer": "أَشْعُرُ بِأَلَمٍ",
        "explanation": "Struktur yang benar adalah Asy'uru bi-alamin (merasakan sakit) atau 'Indii hummaa (menderita demam). Tidak boleh dicampur.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_16",

        "question": "Manakah struktur kalimat yang BENAR?",
        "options": [
            "عِنْدِي حُمَّى",
            "عِنْدِي بِحُمَّى",
            "أَشْعُرُ حُمَّى",
            "Semua salah"
        ],
        "correctAnswer": "عِنْدِي حُمَّى",
        "explanation": "Struktur yang benar adalah Asy'uru bi-alamin (merasakan sakit) atau 'Indii hummaa (menderita demam). Tidak boleh dicampur.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_17",

        "question": "Manakah struktur kalimat yang BENAR?",
        "options": [
            "أَشْعُرُ بِأَلَمٍ",
            "أَشْعُرُ أَلَمٌ",
            "عِنْدِي بِأَلَمٍ",
            "Semua salah"
        ],
        "correctAnswer": "أَشْعُرُ بِأَلَمٍ",
        "explanation": "Struktur yang benar adalah Asy'uru bi-alamin (merasakan sakit) atau 'Indii hummaa (menderita demam). Tidak boleh dicampur.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_18",

        "question": "Manakah struktur kalimat yang BENAR?",
        "options": [
            "عِنْدِي حُمَّى",
            "عِنْدِي بِحُمَّى",
            "أَشْعُرُ حُمَّى",
            "Semua salah"
        ],
        "correctAnswer": "عِنْدِي حُمَّى",
        "explanation": "Struktur yang benar adalah Asy'uru bi-alamin (merasakan sakit) atau 'Indii hummaa (menderita demam). Tidak boleh dicampur.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_19",

        "question": "Manakah struktur kalimat yang BENAR?",
        "options": [
            "أَشْعُرُ بِأَلَمٍ",
            "أَشْعُرُ أَلَمٌ",
            "عِنْدِي بِأَلَمٍ",
            "Semua salah"
        ],
        "correctAnswer": "أَشْعُرُ بِأَلَمٍ",
        "explanation": "Struktur yang benar adalah Asy'uru bi-alamin (merasakan sakit) atau 'Indii hummaa (menderita demam). Tidak boleh dicampur.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_20",

        "question": "Manakah struktur kalimat yang BENAR?",
        "options": [
            "عِنْدِي حُمَّى",
            "عِنْدِي بِحُمَّى",
            "أَشْعُرُ حُمَّى",
            "Semua salah"
        ],
        "correctAnswer": "عِنْدِي حُمَّى",
        "explanation": "Struktur yang benar adalah Asy'uru bi-alamin (merasakan sakit) atau 'Indii hummaa (menderita demam). Tidak boleh dicampur.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_21",

        "question": "Lengkapi kalimat ini: يَدِي (Tanganku) ..... (patah)",
        "options": [
            "مَكْسُورَةٌ",
            "مَكْسُورٌ",
            "مَكْسُورَاتٌ",
            "مَكْسُورِينَ"
        ],
        "correctAnswer": "مَكْسُورَةٌ",
        "explanation": "Yadun (Tangan) adalah muannats karena berpasangan, jadi pakai Ta' Marbuthah.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_22",

        "question": "Lengkapi kalimat ini: ظَهْرِي (Punggungku) ..... (patah)",
        "options": [
            "مَكْسُورٌ",
            "مَكْسُورَةٌ",
            "مَكْسُورَاتٌ",
            "مَكْسُورِينَ"
        ],
        "correctAnswer": "مَكْسُورٌ",
        "explanation": "Zhahr (Punggung) tidak berpasangan, jadi mudzakkar.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_23",

        "question": "Lengkapi kalimat ini: يَدِي (Tanganku) ..... (patah)",
        "options": [
            "مَكْسُورَةٌ",
            "مَكْسُورٌ",
            "مَكْسُورَاتٌ",
            "مَكْسُورِينَ"
        ],
        "correctAnswer": "مَكْسُورَةٌ",
        "explanation": "Yadun (Tangan) adalah muannats karena berpasangan, jadi pakai Ta' Marbuthah.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_24",

        "question": "Lengkapi kalimat ini: ظَهْرِي (Punggungku) ..... (patah)",
        "options": [
            "مَكْسُورٌ",
            "مَكْسُورَةٌ",
            "مَكْسُورَاتٌ",
            "مَكْسُورِينَ"
        ],
        "correctAnswer": "مَكْسُورٌ",
        "explanation": "Zhahr (Punggung) tidak berpasangan, jadi mudzakkar.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_25",

        "question": "Lengkapi kalimat ini: يَدِي (Tanganku) ..... (patah)",
        "options": [
            "مَكْسُورَةٌ",
            "مَكْسُورٌ",
            "مَكْسُورَاتٌ",
            "مَكْسُورِينَ"
        ],
        "correctAnswer": "مَكْسُورَةٌ",
        "explanation": "Yadun (Tangan) adalah muannats karena berpasangan, jadi pakai Ta' Marbuthah.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_26",

        "question": "Lengkapi kalimat ini: ظَهْرِي (Punggungku) ..... (patah)",
        "options": [
            "مَكْسُورٌ",
            "مَكْسُورَةٌ",
            "مَكْسُورَاتٌ",
            "مَكْسُورِينَ"
        ],
        "correctAnswer": "مَكْسُورٌ",
        "explanation": "Zhahr (Punggung) tidak berpasangan, jadi mudzakkar.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_27",

        "question": "Lengkapi kalimat ini: يَدِي (Tanganku) ..... (patah)",
        "options": [
            "مَكْسُورَةٌ",
            "مَكْسُورٌ",
            "مَكْسُورَاتٌ",
            "مَكْسُورِينَ"
        ],
        "correctAnswer": "مَكْسُورَةٌ",
        "explanation": "Yadun (Tangan) adalah muannats karena berpasangan, jadi pakai Ta' Marbuthah.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_28",

        "question": "Lengkapi kalimat ini: ظَهْرِي (Punggungku) ..... (patah)",
        "options": [
            "مَكْسُورٌ",
            "مَكْسُورَةٌ",
            "مَكْسُورَاتٌ",
            "مَكْسُورِينَ"
        ],
        "correctAnswer": "مَكْسُورٌ",
        "explanation": "Zhahr (Punggung) tidak berpasangan, jadi mudzakkar.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_29",

        "question": "Lengkapi kalimat ini: يَدِي (Tanganku) ..... (patah)",
        "options": [
            "مَكْسُورَةٌ",
            "مَكْسُورٌ",
            "مَكْسُورَاتٌ",
            "مَكْسُورِينَ"
        ],
        "correctAnswer": "مَكْسُورَةٌ",
        "explanation": "Yadun (Tangan) adalah muannats karena berpasangan, jadi pakai Ta' Marbuthah.",
        "type": "multiple-choice"
    },
    {
      id: "q2_8_30",

        "question": "Lengkapi kalimat ini: ظَهْرِي (Punggungku) ..... (patah)",
        "options": [
            "مَكْسُورٌ",
            "مَكْسُورَةٌ",
            "مَكْسُورَاتٌ",
            "مَكْسُورِينَ"
        ],
        "correctAnswer": "مَكْسُورٌ",
        "explanation": "Zhahr (Punggung) tidak berpasangan, jadi mudzakkar.",
        "type": "multiple-choice"
    }
]
  }
};