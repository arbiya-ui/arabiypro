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
        "wordAr": "شُعُورٌ",
        "translation": "Perasaan / Rasa",
        "description": "Isim masdar untuk menyatakan apa yang dirasakan tubuh.",
        "category": "Gejala",
        "examples": [
            {
                "ar": "عِنْدِي شُعُورٌ بِالتَّعَبِ الشَّدِيدِ",
                "translation": "Saya merasa sangat lelah.",
                "grammarNote": "Logika: 'Indii' + Isim 'Shu'uur' + bi (jar) + isim majrur."
            },
            {
                "ar": "هَلْ عِنْدَكَ شُعُورٌ بِالْبَرْدِ؟",
                "translation": "Apakah kamu merasa kedinginan?",
                "grammarNote": "Logika: Pertanyaan menggunakan 'Indaka' untuk menanyakan kondisi."
            },
            {
                "ar": "أُمِّي عِنْدَهَا شُعُورٌ بِالدُّوَارِ",
                "translation": "Ibuku merasa pusing pening.",
                "grammarNote": "Logika: 'Indahaa' (khabar) kembali ke 'Ummi' (mubtada muannats)."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِشُعُورٍ غَرِيبٍ",
                "translation": "Pasien itu merasakan perasaan yang aneh.",
                "grammarNote": "Logika: Fi'il 'Yasy'uru' + bi + isim majrur 'shu'uurin'."
            },
            {
                "ar": "تَشْعُرُ الطَّالِبَةُ بِشُعُورٍ جَيِّدٍ الْآنَ",
                "translation": "Siswi itu merasa baikan sekarang.",
                "grammarNote": "Logika: Fi'il 'Tasy'uru' diawali Ta karena subjeknya perempuan."
            },
            {
                "ar": "الرَّجُلُ يَشْعُرُ بِشُعُورٍ بِالْخَوْفِ",
                "translation": "Pria itu merasakan perasaan takut.",
                "grammarNote": "Logika: Kesesuaian gender fi'il mudhari (Ya untuk laki-laki)."
            },
            {
                "ar": "لَيْسَ عِنْدِي شُعُورٌ بِالْجُوعِ",
                "translation": "Saya tidak merasa lapar.",
                "grammarNote": "Logika: Kalimat negatif menggunakan 'Laisa' untuk meniadakan kondisi."
            },
            {
                "ar": "كَيْفَ شُعُورُكَ بَعْدَ تَنَاوُلِ الدَّوَاءِ؟",
                "translation": "Bagaimana perasaanmu setelah minum obat?",
                "grammarNote": "Logika: Kata tanya 'Kaifa' untuk menanyakan keadaan."
            },
            {
                "ar": "هَذَا شُعُورٌ مُؤْلِمٌ جِدًّا",
                "translation": "Ini adalah rasa yang sangat menyakitkan.",
                "grammarNote": "Logika: 'Shu'uur' (mudzakkar) disifati oleh 'mu'limun'."
            },
            {
                "ar": "عِنْدَنَا شُعُورٌ بِالسَّعَادَةِ لِشِفَائِكَ",
                "translation": "Kami merasa bahagia atas kesembuhanmu.",
                "grammarNote": "Logika: 'Indanaa' (kami memiliki) menunjukkan perasaan kolektif."
            }
        ]
    },
    {
        "id": "l2_8_c2",
        "wordAr": "إِصَابَةٌ",
        "translation": "Infeksi / Cedera",
        "description": "Isim untuk menyatakan kondisi terkena penyakit atau luka.",
        "category": "Gejala",
        "examples": [
            {
                "ar": "عِنْدِي إِصَابَةٌ فِي الرُّكْبَةِ",
                "translation": "Saya mengalami cedera di lutut.",
                "grammarNote": "Logika: 'Indii' diikuti isim 'Isyaabah' sebagai keluhan."
            },
            {
                "ar": "أُخْتِي عِنْدَهَا إِصَابَةٌ بِالزُّكَامِ",
                "translation": "Saudariku terkena infeksi flu.",
                "grammarNote": "Logika: 'Indahaa' digunakan karena subjeknya muannats."
            },
            {
                "ar": "هَلْ هَذِهِ إِصَابَةٌ خَطِيرَةٌ؟",
                "translation": "Apakah ini cedera yang berbahaya?",
                "grammarNote": "Logika: 'Isyaabah' adalah muannats, maka sifatnya 'khatiirah'."
            },
            {
                "ar": "تَعَرَّضَ الْقَائِدُ لِإِصَابَةٍ بَسِيطَةٍ",
                "translation": "Pemimpin itu mengalami cedera ringan.",
                "grammarNote": "Logika: 'Li' (jar) membuat 'isyaabatin' menjadi majrur."
            },
            {
                "ar": "أَخِي يَتَأَلَّمُ مِنْ إِصَابَةٍ قَدِيمَةٍ",
                "translation": "Saudaraku kesakitan karena cedera lama.",
                "grammarNote": "Logika: 'Min' (jar) diikuti isim majrur 'isyaabatin'."
            },
            {
                "ar": "تَشْعُرُ الْمُمَرِّضَةُ بِإِصَابَةٍ فِي يَدِهَا",
                "translation": "Perawat (Pr) itu merasakan luka di tangannya.",
                "grammarNote": "Logika: Fi'il 'Tasy'uru' (Ta) karena perawatnya perempuan."
            },
            {
                "ar": "الْإِصَابَةُ بِالْفَيْرُوسِ سَرِيعَةٌ",
                "translation": "Infeksi virus itu sangat cepat.",
                "grammarNote": "Logika: Mubtada 'Al-Isyaabah' disifati oleh khabar 'sarii'ah'."
            },
            {
                "ar": "مَتَى حَدَثَتْ هَذِهِ الْإِصَابَةُ؟",
                "translation": "Kapan cedera ini terjadi?",
                "grammarNote": "Logika: Fi'il 'hadatsat' (Muannats) karena fa'ilnya 'isyaabah'."
            },
            {
                "ar": "عِنْدَهُ إِصَابَةٌ بَكْتِيرِيَّةٌ",
                "translation": "Dia mengalami infeksi bakteri.",
                "grammarNote": "Logika: Isim mudzakkar 'Indahu' diikuti isim muannats 'isyaabah'."
            },
            {
                "ar": "يَحْتَاجُ الْمَرِيضُ عِلَاجًا لِلْإِصَابَةِ",
                "translation": "Pasien membutuhkan pengobatan untuk cederanya.",
                "grammarNote": "Logika: 'Lil-isyaabati' (Li + Al) menunjukkan tujuan."
            }
        ]
    },
    {
        "id": "l2_8_c3",
        "wordAr": "أَلَمٌ",
        "translation": "Rasa Sakit / Nyeri",
        "description": "Kata benda paling umum untuk keluhan fisik.",
        "category": "Gejala",
        "examples": [
            {
                "ar": "أَشْعُرُ بِأَلَمٍ فِي الظَّهْرِ",
                "translation": "Saya merasakan nyeri di punggung.",
                "grammarNote": "Logika: Huruf jar 'bi' membuat 'alamin' menjadi majrur (kasratain)."
            },
            {
                "ar": "هَلْ عِنْدَكِ أَلَمٌ فِي الْأُذُنِ؟",
                "translation": "Apakah kamu (Pr) merasa sakit di telinga?",
                "grammarNote": "Logika: 'Indaki' digunakan untuk menyapa perempuan."
            },
            {
                "ar": "أُمِّي تَتَأَلَّمُ مِنْ أَلَمٍ فِي الرَّأْسِ",
                "translation": "Ibuku kesakitan karena nyeri di kepala.",
                "grammarNote": "Logika: Fi'il 'Tata'allamu' (Ta) karena subjeknya perempuan."
            },
            {
                "ar": "يَشْعُرُ الطِّفْلُ بِأَلَمٍ بَسِيطٍ",
                "translation": "Anak itu merasakan nyeri ringan.",
                "grammarNote": "Logika: Fi'il 'Yasy'uru' (Ya) karena subjeknya laki-laki."
            },
            {
                "ar": "هَذَا أَلَمٌ مُزْمِنٌ مُنْذُ سَنَوَاتٍ",
                "translation": "Ini adalah nyeri kronis sejak bertahun-tahun.",
                "grammarNote": "Logika: 'Alam' (mudzakkar) disifati oleh 'muzmin'."
            },
            {
                "ar": "عِنْدِي أَلَمٌ شَدِيدٌ فِي الْمَعِدَةِ",
                "translation": "Saya menderita sakit perut yang hebat.",
                "grammarNote": "Logika: 'Indii' diikuti isim 'alamun' sebagai mubtada muakhkhar."
            },
            {
                "ar": "تَشْعُرُ الْمَرِيضَةُ بِأَلَمٍ عِنْدَ النَّفَسِ",
                "translation": "Pasien (Pr) merasa sakit saat bernapas.",
                "grammarNote": "Logika: Kesesuaian gender antara fi'il dan fa'il muannats."
            },
            {
                "ar": "أَيْنَ مَوْقِعُ الْأَلَمِ تَمَامًا؟",
                "translation": "Di mana lokasi nyerinya tepatnya?",
                "grammarNote": "Logika: 'Al-alam' sebagai mudhafun ilaih yang majrur."
            },
            {
                "ar": "أَبِي يَشْكُو مِنْ أَلَمٍ فِي الصَّدْرِ",
                "translation": "Ayahku mengeluh nyeri di dada.",
                "grammarNote": "Logika: Fi'il 'Yasykuu' (Ya) untuk subjek laki-laki."
            },
            {
                "ar": "لَا أَشْعُرُ بِأَيِّ أَلَمٍ الْآنَ",
                "translation": "Saya tidak merasakan sakit apa pun sekarang.",
                "grammarNote": "Logika: 'Bi-ayyi alamin' (majrur setelah jar dan mudhaf)."
            }
        ]
    },
    {
        "id": "l2_8_c4",
        "wordAr": "وَجَعٌ",
        "translation": "Sakit / Nyeri",
        "description": "Sinonim dari alam, sering digunakan untuk area tubuh tertentu.",
        "category": "Gejala",
        "examples": [
            {
                "ar": "عِنْدِي وَجَعٌ فِي الْأَسْنَانِ",
                "translation": "Saya sakit gigi.",
                "grammarNote": "Logika: 'Indii' + 'Waja'un' (mubtada muakhkhar)."
            },
            {
                "ar": "أَشْعُرُ بِوَجَعٍ فِي عَيْنِي",
                "translation": "Saya merasa sakit di mataku.",
                "grammarNote": "Logika: 'Bi' + 'Waja'in' (majrur/kasratain)."
            },
            {
                "ar": "هَلْ تَشْعُرِينَ بِوَجَعٍ هُنَا؟",
                "translation": "Apakah kamu (Pr) merasa sakit di sini?",
                "grammarNote": "Logika: Fi'il 'Tasy'uriina' untuk mukhatabah muannats."
            },
            {
                "ar": "أَخِي يَتَأَلَّمُ مِنْ وَجَعِ الرِّجْلِ",
                "translation": "Saudaraku kesakitan karena sakit kaki.",
                "grammarNote": "Logika: Fi'il 'Yata'allamu' (Ya) untuk mudzakkar."
            },
            {
                "ar": "تَشْعُرُ الْبِنْتُ بِوَجَعٍ فِي الْحَلْقِ",
                "translation": "Anak perempuan itu merasa sakit tenggorokan.",
                "grammarNote": "Logika: Fi'il 'Tasy'uru' (Ta) untuk muannats."
            },
            {
                "ar": "هَذَا وَجَعٌ لَا يُحْتَمَلُ",
                "translation": "Ini adalah rasa sakit yang tak tertahankan.",
                "grammarNote": "Logika: 'Waja'un' sebagai isim mudzakkar."
            },
            {
                "ar": "عِنْدَهَا وَجَعٌ خَفِيفٌ بَعْدَ الْأَكْلِ",
                "translation": "Dia (Pr) merasa nyeri ringan setelah makan.",
                "grammarNote": "Logika: 'Indahaa' (khabar) + 'waja'un' (mubtada)."
            },
            {
                "ar": "الْوَجَعُ يَزْدَادُ فِي اللَّيْلِ",
                "translation": "Rasa sakitnya bertambah di malam hari.",
                "grammarNote": "Logika: Alif lam pada 'Al-waja'u' menjadikannya ma'rifah."
            },
            {
                "ar": "نَحْنُ نَشْعُرُ بِوَجَعٍ فِي الْعَضَلَاتِ",
                "translation": "Kami merasa nyeri di otot.",
                "grammarNote": "Logika: 'Nash'uru' untuk dhamir 'Nahnu'."
            },
            {
                "ar": "هَلْ خَفَّ الْوَجَعُ بَعْدَ الرَّاحَةِ؟",
                "translation": "Apakah rasa sakitnya berkurang setelah istirahat?",
                "grammarNote": "Logika: Fi'il madhi 'khaffa' (berkurang/ringan)."
            }
        ]
    },
    {
        "id": "l2_8_c5",
        "wordAr": "مُعَانَاةٌ",
        "translation": "Penderitaan / Keluhan",
        "description": "Isim masdar untuk menyatakan kondisi menderita sesuatu yang lama.",
        "category": "Gejala",
        "examples": [
            {
                "ar": "عِنْدِي مُعَانَاةٌ مَعَ السُّعَالِ",
                "translation": "Saya menderita karena batuk (yang lama).",
                "grammarNote": "Logika: 'Indii' diikuti isim 'mu'aanaahatun'."
            },
            {
                "ar": "تَشْعُرُ الْمَرِيضَةُ بِمُعَانَاةٍ كَبِيرَةٍ",
                "translation": "Pasien (Pr) itu merasakan penderitaan yang besar.",
                "grammarNote": "Logika: 'Bi' + 'mu'aanaahatin' (majrur muannats)."
            },
            {
                "ar": "أَبِي عِنْدَهُ مُعَانَاةٌ مِنَ الْأَرَقِ",
                "translation": "Ayahku menderita susah tidur (insomnia).",
                "grammarNote": "Logika: 'Indahu' kembali ke 'Abi'."
            },
            {
                "ar": "هَذِهِ مُعَانَاةٌ طَوِيلَةٌ لِلْغَايَةِ",
                "translation": "Ini adalah penderitaan yang sangat panjang.",
                "grammarNote": "Logika: 'Mu'aanaah' adalah muannats, sifatnya 'thawiilah'."
            },
            {
                "ar": "يَشْعُرُ الرَّجُلُ بِمُعَانَاةٍ فِي التَّنَفُسِ",
                "translation": "Pria itu menderita sesak napas.",
                "grammarNote": "Logika: Fi'il 'Yasy'uru' (Ya) untuk mudzakkar."
            },
            {
                "ar": "أُمِّي تَتَأَلَّمُ مِنْ مُعَانَاةِ الْمَفَاصِلِ",
                "translation": "Ibuku menderita sakit sendi.",
                "grammarNote": "Logika: Fi'il 'Tata'allamu' (Ta) untuk muannats."
            },
            {
                "ar": "هَلْ عِنْدَكَ مُعَانَاةٌ مَعَ الْحَسَاسِيَّةِ؟",
                "translation": "Apakah kamu menderita alergi?",
                "grammarNote": "Logika: 'Mu'aanaah' sebagai kata benda abstrak untuk keluhan."
            },
            {
                "ar": "الْمُعَانَاةُ تَنْتَهِي بِالْعِلَاجِ الصَّحِيحِ",
                "translation": "Penderitaan berakhir dengan pengobatan yang benar.",
                "grammarNote": "Logika: Fi'il 'tantahii' (Ta) karena subjeknya 'Al-mu'aanaah'."
            },
            {
                "ar": "نَحْنُ نَفْهَمُ مُعَانَاةَ الْمَرْضَى",
                "translation": "Kami memahami penderitaan para pasien.",
                "grammarNote": "Logika: 'Mu'aanaata' sebagai maf'ul bihi (manshub)."
            },
            {
                "ar": "لَيْسَ هُنَاكَ مُعَانَاةٌ بَعْدَ الْآنَ",
                "translation": "Tidak ada lagi penderitaan setelah sekarang.",
                "grammarNote": "Logika: 'Laisa hunaka' untuk meniadakan keberadaan sesuatu."
            }
        ]
    },
    {
        "id": "l2_8_c6",
        "wordAr": "صُدَاعٌ",
        "translation": "Sakit Kepala / Pusing",
        "description": "Rasa nyeri di area kepala (Mudzakkar).",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي صُدَاعٌ نِصْفِيٌّ",
                "translation": "Saya menderita migrain (sakit kepala sebelah).",
                "grammarNote": "Logika: 'Indii' + 'Shudaa'un' (mubtada muakhkhar)."
            },
            {
                "ar": "أَشْعُرُ بِصُدَاعٍ قَوِيٍّ",
                "translation": "Saya merasakan sakit kepala yang kuat.",
                "grammarNote": "Logika: 'Bi' + 'shudaa'in' (majrur/kasratain)."
            },
            {
                "ar": "هَلْ عِنْدَكَ صُدَاعٌ الْآنَ؟",
                "translation": "Apakah kamu sedang sakit kepala sekarang?",
                "grammarNote": "Logika: 'Indaka' untuk menanyakan kondisi fisik."
            },
            {
                "ar": "أُمِّي تَتَأَلَّمُ مِنْ صُدَاعٍ شَدِيدٍ",
                "translation": "Ibuku kesakitan karena sakit kepala yang hebat.",
                "grammarNote": "Logika: Fi'il 'Tata'allamu' (Ta) untuk subjek perempuan."
            },
            {
                "ar": "يَشْعُرُ الْمُدِيرُ بِصُدَاعٍ بِسَبَبِ الْعَمَلِ",
                "translation": "Direktur itu pusing karena pekerjaan.",
                "grammarNote": "Logika: Fi'il 'Yasy'uru' (Ya) untuk subjek laki-laki."
            },
            {
                "ar": "تَشْعُرُ الْبِنْتُ بِصُدَاعٍ خَفِيفٍ",
                "translation": "Anak perempuan itu merasa pusing ringan.",
                "grammarNote": "Logika: Fi'il 'Tasy'uru' (Ta) untuk muannats."
            },
            {
                "ar": "هَذَا الصُّدَاعُ لَا يَنْقَطِعُ",
                "translation": "Sakit kepala ini tidak berhenti.",
                "grammarNote": "Logika: 'Shudaa'u' mudzakkar, maka fi'ilnya 'yanqathi'u'."
            },
            {
                "ar": "عِنْدَهُ صُدَاعٌ مُسْتَمِرٌّ",
                "translation": "Dia menderita sakit kepala terus-menerus.",
                "grammarNote": "Logika: 'Shudaa'un' disifati oleh 'mustamirrun'."
            },
            {
                "ar": "يَحْتَاجُ الطَّالِبُ رَاحَةً لِلصُّدَاعِ",
                "translation": "Siswa itu butuh istirahat untuk sakit kepalanya.",
                "grammarNote": "Logika: 'Lish-shudaa'i' (Li + Al + Majrur)."
            },
            {
                "ar": "شَرِبْتُ دَوَاءً لِلصُّدَاعِ",
                "translation": "Saya minum obat untuk sakit kepala.",
                "grammarNote": "Logika: 'Dawaa'an' sebagai maf'ul bihi."
            }
        ]
    },
    {
        "id": "l2_8_c7",
        "wordAr": "حُمَّى",
        "translation": "Demam",
        "description": "Suhu tubuh tinggi (Muannats Maqsur).",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي حُمَّى عَالِيَةٌ",
                "translation": "Saya demam tinggi.",
                "grammarNote": "Logika: 'Hummaa' adalah muannats, maka sifatnya 'aalitah'."
            },
            {
                "ar": "أَشْعُرُ بِحُمَّى فِي جِسْمِي",
                "translation": "Saya merasakan panas demam di tubuhku.",
                "grammarNote": "Logika: 'Bi-hummaa' (majrur, harakat tidak tampak karena maqsur)."
            },
            {
                "ar": "هَلْ عِنْدَكَ حُمَّى مُنْذُ الصَّبَاحِ؟",
                "translation": "Apakah kamu demam sejak pagi?",
                "grammarNote": "Logika: Kata keterangan waktu 'mundzu' (sejak)."
            },
            {
                "ar": "أُخْتِي تَتَأَلَّمُ مِنْ حُمَّى شَدِيدَةٍ",
                "translation": "Saudariku kesakitan karena demam yang parah.",
                "grammarNote": "Logika: Fi'il 'Tata'allamu' (Ta) untuk subjek perempuan."
            },
            {
                "ar": "يَشْعُرُ الطِّفْلُ بِحُمَّى خَفِيفَةٍ",
                "translation": "Anak itu merasa demam ringan.",
                "grammarNote": "Logika: 'Hummaa' disifati oleh 'khafiifah' (muannats)."
            },
            {
                "ar": "تَشْعُرُ الْمَرِيضَةُ بِحُمَّى دَاخِلِيَّةٍ",
                "translation": "Pasien (Pr) itu merasa panas dalam.",
                "grammarNote": "Logika: Fi'il 'Tasy'uru' (Ta) untuk fa'il muannats."
            },
            {
                "ar": "الْحُمَّى تَنْزِلُ بَعْدَ الدَّوَاءِ",
                "translation": "Demamnya turun setelah minum obat.",
                "grammarNote": "Logika: Fi'il 'tanzilu' (Ta) karena subjeknya 'Al-hummaa'."
            },
            {
                "ar": "عِنْدَهَا حُمَّى وَرِعْشَةٌ",
                "translation": "Dia (Pr) demam dan menggigil.",
                "grammarNote": "Logika: 'Indahaa' menunjukkan kepemilikan kondisi."
            },
            {
                "ar": "لَا نَعْرِفُ سَبَبَ الْحُمَّى",
                "translation": "Kami tidak tahu penyebab demamnya.",
                "grammarNote": "Logika: 'Al-hummaa' sebagai mudhafun ilaih."
            },
            {
                "ar": "يَجِبُ قِيَاسُ الْحُمَّى بِالْمِيزَانِ",
                "translation": "Harus mengukur suhu demam dengan termometer.",
                "grammarNote": "Logika: 'Qiyaasu' (mengukur) isim masdar."
            }
        ]
    },
    {
        "id": "l2_8_c8",
        "wordAr": "زُكَامٌ",
        "translation": "Flu / Pilek / Selesma",
        "description": "Gangguan saluran napas ringan (Mudzakkar).",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي زُكَامٌ وَسُعَالٌ",
                "translation": "Saya sedang flu dan batuk.",
                "grammarNote": "Logika: 'Indii' + 'Zukaamun' (mubtada muakhkhar)."
            },
            {
                "ar": "أَشْعُرُ بِزُكَامٍ بَسِيطٍ",
                "translation": "Saya merasa pilek ringan.",
                "grammarNote": "Logika: 'Bi' + 'zukaamin' (majrur/kasratain)."
            },
            {
                "ar": "هَلْ عِنْدَكِ زُكَامٌ يَا فَاطِمَةُ؟",
                "translation": "Apakah kamu sedang flu wahai Fatimah?",
                "grammarNote": "Logika: 'Indaki' untuk menyapa perempuan."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ زُكَامٍ حَادٍّ",
                "translation": "Ayahku kesakitan karena flu yang akut.",
                "grammarNote": "Logika: Fi'il 'Yata'allamu' (Ya) untuk subjek laki-laki."
            },
            {
                "ar": "يَشْعُرُ الْوَلَدُ بِزُكَامٍ فِي الشِّتَاءِ",
                "translation": "Anak laki-laki itu merasa pilek di musim dingin.",
                "grammarNote": "Logika: Fi'il 'Yasy'uru' (Ya) untuk mudzakkar."
            },
            {
                "ar": "تَشْعُرُ الْأُمُّ بِزُكَامٍ مُنْذُ أَيَّامٍ",
                "translation": "Ibu merasa flu sejak beberapa hari.",
                "grammarNote": "Logika: Fi'il 'Tasy'uru' (Ta) untuk muannats."
            },
            {
                "ar": "هَذَا الزُّكَامُ يَنْتَقِلُ بِالْعَدْوَى",
                "translation": "Flu ini menular melalui infeksi.",
                "grammarNote": "Logika: 'Zukaam' mudzakkar, fi'ilnya 'yantaqilu'."
            },
            {
                "ar": "عِنْدَهُ زُكَامٌ يُتْعِبُهُ جِدًّا",
                "translation": "Dia sedang flu yang sangat melelahkannya.",
                "grammarNote": "Logika: 'Zukaamun' disifati oleh jumlah fi'liyah."
            },
            {
                "ar": "الزُّكَامُ يَحْتَاجُ إِلَى فِيتَامِين سِي",
                "translation": "Flu membutuhkan vitamin C.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "شُفِيَ الْمَرِيضُ مِنَ الزُّكَامِ",
                "translation": "Pasien telah sembuh dari flu.",
                "grammarNote": "Logika: Fi'il majhul 'syufiya' (telah disembuhkan)."
            }
        ]
    },
    {
        "id": "l2_8_c9",
        "wordAr": "سُعَالٌ",
        "translation": "Batuk",
        "description": "Kondisi mengeluarkan udara secara paksa (Mudzakkar).",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي سُعَالٌ جَافٌّ",
                "translation": "Saya batuk kering.",
                "grammarNote": "Logika: 'Indii' + 'Su'aalun' (mubtada muakhkhar)."
            },
            {
                "ar": "أَشْعُرُ بِسُعَالٍ مُزْعِجٍ",
                "translation": "Saya merasa batuk yang mengganggu.",
                "grammarNote": "Logika: 'Bi' + 'su'aalin' (majrur/kasratain)."
            },
            {
                "ar": "هَلْ عِنْدَكَ سُعَالٌ مَعَ بَلْغَمٍ؟",
                "translation": "Apakah kamu batuk berdahak?",
                "grammarNote": "Logika: 'Ma'a balghamin' (dengan dahak)."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ سُعَالٍ مُزْمِنٍ",
                "translation": "Ayahku kesakitan karena batuk kronis.",
                "grammarNote": "Logika: 'Su'aalun' disifati oleh 'muzminun'."
            },
            {
                "ar": "يَشْعُرُ الطَّبِيبُ بِسُعَالٍ الْيَوْمَ",
                "translation": "Dokter itu merasa batuk hari ini.",
                "grammarNote": "Logika: Fi'il 'Yasy'uru' (Ya) untuk mudzakkar."
            },
            {
                "ar": "تَشْعُرُ الطِّفْلَةُ بِسُعَالٍ فِي اللَّيْلِ",
                "translation": "Anak perempuan itu merasa batuk di malam hari.",
                "grammarNote": "Logika: Fi'il 'Tasy'uru' (Ta) untuk muannats."
            },
            {
                "ar": "هَذَا السُّعَالُ مُزْمِنٌ لِلْغَايَةِ",
                "translation": "Batuk ini sangat kronis.",
                "grammarNote": "Logika: 'Al-Su'aal' mudzakkar, sifatnya 'muzminun'."
            },
            {
                "ar": "عِنْدَهُ سُعَالٌ يَحْتَاجُ عِلَاجًا",
                "translation": "Dia batuk yang butuh pengobatan.",
                "grammarNote": "Logika: 'Su'aalun' sebagai mubtada muakhkhar."
            },
            {
                "ar": "الْمَرِيضُ يَشْكُو مِنْ سُعَالٍ فِي الصَّدْرِ",
                "translation": "Pasien mengeluh batuk di dada.",
                "grammarNote": "Logika: 'Min su'aalin' (jar + majrur)."
            },
            {
                "ar": "شَرِبْتُ دَوَاءً لِلسُّعَالِ الْيَوْمَ",
                "translation": "Saya minum obat batuk hari ini.",
                "grammarNote": "Logika: 'Dawaa-an' (maf'ul bihi) + 'lis-su'aali' (Li + majrur)."
            }
        ]
    },
    {
        "id": "l2_8_c10",
        "wordAr": "عِطَاسٌ",
        "translation": "Bersin",
        "description": "Keluarnya udara secara tiba-tiba dari hidung.",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي عِطَاسٌ كَثِيرٌ",
                "translation": "Saya sering bersin-bersin.",
                "grammarNote": "Logika: 'Indii' + 'Ithaasun' (mubtada muakhkhar)."
            },
            {
                "ar": "أَشْعُرُ بِعِطَاسٍ شَدِيدٍ",
                "translation": "Saya merasa bersin yang hebat.",
                "grammarNote": "Logika: 'Bi' + 'ithaasin' (majrur/kasratain)."
            },
            {
                "ar": "هَلْ عِنْدَكَ عِطَاسٌ بَعْدَ الْأَكْلِ؟",
                "translation": "Apakah kamu bersin setelah makan?",
                "grammarNote": "Logika: 'Ba'dal akli' (setelah makan)."
            },
            {
                "ar": "أَخِي يَتَأَلَّمُ مِنْ عِطَاسٍ مُسْتَمِرٍّ",
                "translation": "Saudaraku kesakitan karena bersin terus menerus.",
                "grammarNote": "Logika: 'Ithaas' disifati oleh 'mustamirrun'."
            },
            {
                "ar": "يَشْعُرُ الْوَلَدُ بِعِطَاسٍ فِي الشَّمْسِ",
                "translation": "Anak itu bersin di bawah sinar matahari.",
                "grammarNote": "Logika: Fi'il 'Yasy'uru' (Ya) untuk mudzakkar."
            },
            {
                "ar": "تَشْعُرُ الْبِنْتُ بِعِطَاسٍ مِنَ الْغُبَارِ",
                "translation": "Anak perempuan itu bersin karena debu.",
                "grammarNote": "Logika: Fi'il 'Tasy'uru' (Ta) untuk muannats."
            },
            {
                "ar": "هَذَا الْعِطَاسُ هُوَ رَدُّ فِعْلٍ",
                "translation": "Bersin ini adalah sebuah reaksi.",
                "grammarNote": "Logika: 'Ithaas' mudzakkar, kata gantinya 'huwa'."
            },
            {
                "ar": "عِنْدَهَا عِطَاسٌ وَحَسَاسِيَّةٌ",
                "translation": "Dia (Pr) bersin dan alergi.",
                "grammarNote": "Logika: 'Indahaa' menunjukkan kepemilikan kondisi."
            },
            {
                "ar": "الْعِطَاسُ يُنَظِّفُ الْأَنْفَ",
                "translation": "Bersin itu membersihkan hidung.",
                "grammarNote": "Logika: Fi'il 'yunazhzhifu' (Ya) untuk subjek mudzakkar."
            },
            {
                "ar": "قُلْ 'الْحَمْدُ لِلَّهِ' بَعْدَ الْعِطَاسِ",
                "translation": "Ucapkan 'Alhamdulillah' setelah bersin.",
                "grammarNote": "Logika: 'Ba'dal ithaasi' (mudhafun ilaih)."
            }
        ]
    },
    {
        "id": "l2_8_c11",
        "wordAr": "قَيْءٌ",
        "translation": "Muntah / Ekspulsi Perut",
        "description": "Isim untuk menyatakan kondisi keluarnya isi perut (Mudzakkar).",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي قَيْءٌ مُسْتَمِرٌّ",
                "translation": "Saya muntah terus-menerus.",
                "grammarNote": "Logika: 'Indii' + 'Qay-un' (mubtada muakhkhar)."
            },
            {
                "ar": "أَشْعُرُ بِقَيْءٍ وَغَثَيَانٍ",
                "translation": "Saya merasa ingin muntah dan mual.",
                "grammarNote": "Logika: 'Bi' + 'qay-in' (majrur/kasratain)."
            },
            {
                "ar": "هَلْ عِنْدَكَ قَيْءٌ مُنْذُ اللَّيْلِ؟",
                "translation": "Apakah kamu muntah-muntah sejak semalam?",
                "grammarNote": "Logika: Pertanyaan tentang durasi gejala."
            },
            {
                "ar": "أَخِي يَتَأَلَّمُ مِنْ قَيْءٍ شَدِيدٍ",
                "translation": "Saudaraku kesakitan karena muntah yang hebat.",
                "grammarNote": "Logika: Fi'il 'Yata'allamu' (Ya) untuk mudzakkar."
            },
            {
                "ar": "يَشْعُرُ الطِّفْلُ بِقَيْءٍ بَعْدَ الْأَكْلِ",
                "translation": "Anak itu muntah setelah makan.",
                "grammarNote": "Logika: Fi'il 'Yasy'uru' (Ya) untuk mudzakkar."
            },
            {
                "ar": "تَشْعُرُ الطِّفْلَةُ بِقَيْءٍ خَفِيفٍ",
                "translation": "Anak perempuan itu merasa mual muntah ringan.",
                "grammarNote": "Logika: Fi'il 'Tasy'uru' (Ta) untuk muannats."
            },
            {
                "ar": "هَذَا الْقَيْءُ سَبَبُهُ التَّسَمُّمُ",
                "translation": "Muntah ini penyebabnya adalah keracunan.",
                "grammarNote": "Logika: 'Qay-' mudzakkar, mubtada kedua 'sababuhu'."
            },
            {
                "ar": "عِنْدَهُ قَيْءٌ مَعَ دَمٍ",
                "translation": "Dia muntah darah.",
                "grammarNote": "Logika: 'Ma'a damin' (bersama darah)."
            },
            {
                "ar": "الْقَيْءُ يُتْعِبُ الْمَعِدَةَ",
                "translation": "Muntah itu melelahkan perut.",
                "grammarNote": "Logika: Fi'il 'yut'ibu' (Ya) untuk subjek mudzakkar."
            },
            {
                "ar": "يَحْتَاجُ الْمَرِيضُ دَوَاءً لِلْقَيْءِ",
                "translation": "Pasien butuh obat untuk muntah.",
                "grammarNote": "Logika: 'Lil-qay-i' (Li + Al + Majrur)."
            }
        ]
    },
    {
        "id": "l2_8_c12",
        "wordAr": "حَسَاسِيَّةٌ",
        "translation": "Alergi",
        "description": "Reaksi tubuh terhadap zat tertentu (Muannats).",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي حَسَاسِيَّةٌ مِنَ السَّمَكِ",
                "translation": "Saya alergi ikan.",
                "grammarNote": "Logika: 'Indii' + 'Hasaasiyyah' (mubtada muakhkhar)."
            },
            {
                "ar": "أَشْعُرُ بِحَسَاسِيَّةٍ فِي جِلْدِي",
                "translation": "Saya merasakan alergi di kulitku.",
                "grammarNote": "Logika: 'Bi' + 'hasaasiyyatin' (majrur/kasratain)."
            },
            {
                "ar": "هَلْ عِنْدَكَ حَسَاسِيَّةٌ مُزْمِنَةٌ؟",
                "translation": "Apakah kamu menderita alergi kronis?",
                "grammarNote": "Logika: 'Hasaasiyyah' muannats, sifatnya 'muzminah'."
            },
            {
                "ar": "أُخْتِي تَتَأَلَّمُ مِنْ حَسَاسِيَّةِ الْغُبَارِ",
                "translation": "Saudariku menderita alergi debu.",
                "grammarNote": "Logika: 'Hasaasiyyat' sebagai mudhaf (majrur)."
            },
            {
                "ar": "يَشْعُرُ الْوَلَدُ بِحَسَاسِيَّةٍ صَدْرِيَّةٍ",
                "translation": "Anak laki-laki itu menderita alergi dada (asma).",
                "grammarNote": "Logika: Fi'il 'Yasy'uru' (Ya) untuk mudzakkar."
            },
            {
                "ar": "تَشْعُرُ الْبِنْتُ بِحَسَاسِيَّةٍ حَادَّةٍ",
                "translation": "Anak perempuan itu menderita alergi akut.",
                "grammarNote": "Logika: Fi'il 'Tasy'uru' (Ta) untuk muannats."
            },
            {
                "ar": "هَذِهِ الْحَسَاسِيَّةُ تَظْهَرُ فِي الصَّيْفِ",
                "translation": "Alergi ini muncul di musim panas.",
                "grammarNote": "Logika: Fi'il 'tazh-haru' (Ta) untuk subjek muannats."
            },
            {
                "ar": "عِنْدَهُ حَسَاسِيَّةٌ ضِدَّ الْبِنِسِلِين",
                "translation": "Dia alergi terhadap penisilin.",
                "grammarNote": "Logika: 'Dhidda' (terhadap/melawan) + Mudhafun ilaih."
            },
            {
                "ar": "الْحَسَاسِيَّةُ تُسَبِّبُ الْحِكَّةَ",
                "translation": "Alergi menyebabkan gatal-gatal.",
                "grammarNote": "Logika: Fi'il 'tusabbibu' (Ta) untuk subjek muannats."
            },
            {
                "ar": "يَحْتَاجُ الْمَرِيضُ حُقْنَةً لِلْحَسَاسِيَّةِ",
                "translation": "Pasien butuh suntikan untuk alergi.",
                "grammarNote": "Logika: 'Lil-hasaasiyyati' (Li + Al + Majrur)."
            }
        ]
    },
    {
        "id": "l2_8_c13",
        "wordAr": "مَغَصٌ",
        "translation": "Mulas / Kram / Kolik",
        "description": "Nyeri tajam di perut (Mudzakkar).",
        "category": "Gejala",
        "examples": [
            {
                "ar": "عِنْدِي مَغَصٌ فِي الْمَعِدَةِ",
                "translation": "Saya mulas di lambung.",
                "grammarNote": "Logika: 'Indii' + 'Maghashun' (mubtada muakhkhar)."
            },
            {
                "ar": "أَشْعُرُ بِمَغَصٍ بَعْدَ الْأَكْلِ",
                "translation": "Saya merasa mulas setelah makan.",
                "grammarNote": "Logika: 'Bi' + 'maghashin' (majrur/kasratain)."
            },
            {
                "ar": "هَلْ عِنْدَكِ مَغَصٌ كُلَّ يَوْمٍ؟",
                "translation": "Apakah kamu (Pr) mulas setiap hari?",
                "grammarNote": "Logika: 'Indaki' untuk menyapa perempuan."
            },
            {
                "ar": "أَخِي يَتَأَلَّمُ مِنْ مَغَصٍ كَلَوِيٍّ",
                "translation": "Saudaraku menderita kolik ginjal.",
                "grammarNote": "Logika: Fi'il 'Yata'allamu' (Ya) untuk mudzakkar."
            },
            {
                "ar": "يَشْعُرُ الرَّجُلُ بِمَغَصٍ شَدِيدٍ",
                "translation": "Pria itu merasakan mulas yang parah.",
                "grammarNote": "Logika: 'Maghash' mudzakkar, sifatnya 'syadiid'."
            },
            {
                "ar": "تَشْعُرُ الطِّفْلَةُ بِمَغَصٍ فِي الْبَطْنِ",
                "translation": "Anak perempuan itu merasa mulas di perut.",
                "grammarNote": "Logika: Fi'il 'Tasy'uru' (Ta) untuk muannats."
            },
            {
                "ar": "هَذَا الْمَغَصُ سَبَبُهُ الْبَرْدُ",
                "translation": "Mulas ini penyebabnya adalah udara dingin.",
                "grammarNote": "Logika: 'Maghash' mudzakkar, isim isyarah 'haadzaa'."
            },
            {
                "ar": "عِنْدَهُ مَغَصٌ وَإِسْهَالٌ",
                "translation": "Dia mulas dan diare.",
                "grammarNote": "Logika: Penggabungan dua gejala dengan 'waw' athaf."
            },
            {
                "ar": "الْمَغَصُ يَزْدَادُ مَعَ الْحَرَكَةِ",
                "translation": "Mulasnya bertambah saat bergerak.",
                "grammarNote": "Logika: Fi'il 'yazdaadu' (Ya) untuk subjek mudzakkar."
            },
            {
                "ar": "خُذْ مَاءً دَافِئًا لِلْمَغَصِ",
                "translation": "Minumlah air hangat untuk mulas.",
                "grammarNote": "Logika: 'Lil-maghashi' (Li + Al + Majrur)."
            }
        ]
    },
    {
        "id": "l2_8_c14",
        "wordAr": "ضَغْطُ الدَّمِ",
        "translation": "Tekanan Darah / Tensi",
        "description": "Ukuran sirkulasi darah (Mudhafun Ilaih).",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي ضَغْطُ الدَّمِ الْمُرْتَفِعُ",
                "translation": "Saya menderita tekanan darah tinggi.",
                "grammarNote": "Logika: 'Indii' + Isim 'Dhaghtu' (Mudhaf) + 'Ad-dami' (Mudhaf ilaih)."
            },
            {
                "ar": "أَشْعُرُ بِضَغْطِ الدَّمِ فِي رَأْسِي",
                "translation": "Saya merasakan tekanan darah di kepalaku.",
                "grammarNote": "Logika: 'Bi' + 'Dhaghti' (majrur) + 'Ad-dami' (mudhafun ilaih)."
            },
            {
                "ar": "هَلْ عِنْدَكَ ضَغْطُ الدَّمِ الْمُنْخَفِضُ؟",
                "translation": "Apakah kamu menderita tekanan darah rendah?",
                "grammarNote": "Logika: 'Al-munkhafidhu' sebagai sifat untuk 'Dhaghtu'."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ ضَغْطِ الدَّمِ",
                "translation": "Ayahku menderita penyakit darah tinggi.",
                "grammarNote": "Logika: Fi'il 'Yata'allamu' (Ya) untuk mudzakkar."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِضَغْطٍ فِي الصَّدْرِ",
                "translation": "Pasien merasakan tekanan di dada.",
                "grammarNote": "Logika: Fi'il 'Yasy'uru' (Ya) untuk subjek laki-laki."
            },
            {
                "ar": "تَشْعُرُ أُمِّي بِضَغْطٍ عَالٍ الْيَوْمَ",
                "translation": "Ibuku merasa tensinya tinggi hari ini.",
                "grammarNote": "Logika: Fi'il 'Tasy'uru' (Ta) untuk subjek perempuan."
            },
            {
                "ar": "هَذَا ضَغْطٌ طَبِيعِيٌّ لِسِنِّكَ",
                "translation": "Ini adalah tensi yang normal untuk usiamu.",
                "grammarNote": "Logika: 'Dhaghtun' mudzakkar, sifatnya 'thabii'iyyun'."
            },
            {
                "ar": "عِنْدَهُ ضَغْطُ الدَّمِ مُنْذُ زَمَنٍ",
                "translation": "Dia menderita darah tinggi sejak lama.",
                "grammarNote": "Logika: 'Indahu' (khabar) + 'Dhaghtu' (mubtada)."
            },
            {
                "ar": "ضَغْطُ الدَّمِ يَحْتَاجُ إِلَى فُحُوصَاتٍ",
                "translation": "Tekanan darah membutuhkan pemeriksaan.",
                "grammarNote": "Logika: Isim mudzakkar 'Dhaghtu', maka fi'ilnya 'yahtaaju'."
            },
            {
                "ar": "نَحْنُ نَقِيسُ ضَغْطَ الدَّمِ كُلَّ يَوْمٍ",
                "translation": "Kami mengukur tekanan darah setiap hari.",
                "grammarNote": "Logika: 'Dhaghta' sebagai maf'ul bihi (manshub)."
            }
        ]
    },
    {
        "id": "l2_8_c15",
        "wordAr": "سُكَّرِيٌّ",
        "translation": "Diabetes / Penyakit Gula",
        "description": "Kondisi kadar gula darah tinggi (Mudzakkar).",
        "category": "Penyakit",
        "examples": [
            {
                "ar": "عِنْدِي مَرَضُ السُّكَّرِيِّ",
                "translation": "Saya menderita penyakit diabetes.",
                "grammarNote": "Logika: 'Indii' + 'Maradhu' (Mudhaf) + 'As-sukkariyyi' (Mudhaf ilaih)."
            },
            {
                "ar": "أَشْعُرُ بِأَعْرَاضِ السُّكَّرِيِّ",
                "translation": "Saya merasakan gejala diabetes.",
                "grammarNote": "Logika: 'Bi' + 'a'raadhi' (majrur) + 'as-sukkariyyi' (mudhafun ilaih)."
            },
            {
                "ar": "هَلْ عِنْدَكَ سُكَّرِيٌّ وِرَاثِيٌّ؟",
                "translation": "Apakah kamu menderita diabetes keturunan?",
                "grammarNote": "Logika: 'Sukkariyyun' disifati oleh 'wiraatsiyyun'."
            },
            {
                "ar": "أَبِي يَتَأَلَّمُ مِنْ مَرَضِ السُّكَّرِيِّ",
                "translation": "Ayahku menderita karena penyakit diabetes.",
                "grammarNote": "Logika: Fi'il 'Yata'allamu' (Ya) untuk mudzakkar."
            },
            {
                "ar": "يَشْعُرُ الْمَرِيضُ بِارْتِفَاعِ السُّكَّرِ",
                "translation": "Pasien merasakan kenaikan kadar gula.",
                "grammarNote": "Logika: Fi'il 'Yasy'uru' (Ya) untuk subjek laki-laki."
            },
            {
                "ar": "تَشْعُرُ الْمَرِيضَةُ بِانْخِفَاضِ السُّكَّرِ",
                "translation": "Pasien (Pr) merasakan penurunan kadar gula.",
                "grammarNote": "Logika: Fi'il 'Tasy'uru' (Ta) untuk muannats."
            },
            {
                "ar": "هَذَا السُّكَّرِيُّ صَعْبٌ جِدًّا",
                "translation": "Penyakit gula ini sangat sulit.",
                "grammarNote": "Logika: 'Sukkariyy' mudzakkar, khabarnya 'sha'bun'."
            },
            {
                "ar": "عِنْدَهُ سُكَّرِيٌّ مُنْذُ الطُّفُولَةِ",
                "translation": "Dia menderita diabetes sejak kecil.",
                "grammarNote": "Logika: 'Indahu' (khabar) + 'sukkariyyun' (mubtada)."
            },
            {
                "ar": "السُّكَّرِيُّ يَحْتَاجُ إِلَى نِظَامٍ غِذَائِيٍّ",
                "translation": "Diabetes membutuhkan pola makan yang teratur.",
                "grammarNote": "Logika: Isim mudzakkar 'As-sukkariyyu', maka fi'ilnya 'yahtaaju'."
            },
            {
                "ar": "نَحْنُ نَفْحَصُ السُّكَّرَ بِالْجِهَازِ",
                "translation": "Kami memeriksa kadar gula dengan alat.",
                "grammarNote": "Logika: 'As-sukkara' sebagai maf'ul bihi (manshub)."
            }
        ]
    },
    {
        "id": "l2_8_c16",
        "wordAr": "طَبِيبٌ",
        "translation": "Dokter",
        "description": "Profesional medis yang mengobati pasien (Mudzakkar).",
        "category": "Rumah Sakit",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى الطَّبِيبِ الْيَوْمَ",
                "translation": "Saya pergi ke dokter hari ini.",
                "grammarNote": "Logika: 'Ila' + 'At-thabiibi' (majrur/kasrah)."
            },
            {
                "ar": "هَذَا طَبِيبٌ مَاهِرٌ جِدًّا",
                "translation": "Ini adalah dokter yang sangat mahir.",
                "grammarNote": "Logika: 'Thabiib' mudzakkar, sifatnya 'maahir'."
            },
            {
                "ar": "أَيْنَ الطَّبِيبُ الْمَنَاوِبُ؟",
                "translation": "Di mana dokter yang bertugas?",
                "grammarNote": "Logika: 'Ayna' kata tanya lokasi."
            },
            {
                "ar": "أُمِّي تَحْتَاجُ إِلَى طَبِيبَةٍ",
                "translation": "Ibuku butuh dokter perempuan.",
                "grammarNote": "Logika: Fi'il 'Tahtaaju' (Ta) karena subjeknya muannats."
            },
            {
                "ar": "يَفْحَصُ الطَّبِيبُ عَيْنَ الْمَرِيضِ",
                "translation": "Dokter memeriksa mata pasien.",
                "grammarNote": "Logika: Fi'il 'Yafhashu' (Ya) untuk subjek mudzakkar."
            },
            {
                "ar": "تَسْأَلُ الطَّبِيبَةُ عَنِ الْأَلَمِ",
                "translation": "Dokter (Pr) bertanya tentang rasa sakitnya.",
                "grammarNote": "Logika: Fi'il 'Tas-alu' (Ta) untuk subjek muannats."
            },
            {
                "ar": "هَذَا طَبِيبُ الْقَلْبِ الْمَعْرُوفُ",
                "translation": "Ini adalah dokter jantung yang terkenal.",
                "grammarNote": "Logika: 'Thabiibu' (Mudhaf) + 'Al-qalbi' (Mudhaf ilaih)."
            },
            {
                "ar": "عِنْدَنَا طَبِيبٌ فِي الْعَائِلَةِ",
                "translation": "Kami punya dokter di keluarga.",
                "grammarNote": "Logika: 'Indanaa' menunjukkan kepemilikan."
            },
            {
                "ar": "الطَّبِيبُ يَنْصَحُ بِالرَّاحَةِ",
                "translation": "Dokter menyarankan untuk istirahat.",
                "grammarNote": "Logika: Fi'il 'Yanshahu' (Ya) untuk mudzakkar."
            },
            {
                "ar": "نَحْنُ نَحْتَرِمُ الطَّبِيبَ كَثِيرًا",
                "translation": "Kami sangat menghormati dokter.",
                "grammarNote": "Logika: 'At-thabiiba' sebagai maf'ul bihi (manshub)."
            }
        ]
    },
    {
        "id": "l2_8_c17",
        "wordAr": "مُسْتَشْفَى",
        "translation": "Rumah Sakit",
        "description": "Tempat pengobatan medis lengkap (Mudzakkar Maqsur).",
        "category": "Rumah Sakit",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى الْمُسْتَشْفَى الْكَبِيرِ",
                "translation": "Saya pergi ke rumah sakit yang besar.",
                "grammarNote": "Logika: 'Ila' + 'Al-mustasyfa' (majrur, harakat tersembunyi)."
            },
            {
                "ar": "هَذَا مُسْتَشْفَى حُكُومِيٌّ",
                "translation": "Ini adalah rumah sakit pemerintah.",
                "grammarNote": "Logika: 'Mustasyfa' mudzakkar, sifatnya 'hukuumiyyun'."
            },
            {
                "ar": "أَيْنَ أَقْرَبُ مُسْتَشْفَى هُنَا؟",
                "translation": "Di mana rumah sakit terdekat di sini?",
                "grammarNote": "Logika: 'Aqrabu' (paling dekat) isim tafdhil."
            },
            {
                "ar": "أَبِي يَعْمَلُ فِي الْمُسْتَشْفَى",
                "translation": "Ayahku bekerja di rumah sakit.",
                "grammarNote": "Logika: Fi'il 'Ya'malu' (Ya) untuk mudzakkar."
            },
            {
                "ar": "يَنْتَظِرُ الْمَرِيضُ فِي الْمُسْتَشْفَى",
                "translation": "Pasien menunggu di rumah sakit.",
                "grammarNote": "Logika: Fi'il 'Yantadhiru' (Ya) untuk subjek mudzakkar."
            },
            {
                "ar": "تَذْهَبُ الْمُمَرِّضَةُ إِلَى الْمُسْتَشْفَى",
                "translation": "Perawat (Pr) pergi ke rumah sakit.",
                "grammarNote": "Logika: Fi'il 'Tadz-habu' (Ta) untuk subjek muannats."
            },
            {
                "ar": "الْمُسْتَشْفَى مَلِيءٌ بِالْمَرْضَى",
                "translation": "Rumah sakit penuh dengan pasien.",
                "grammarNote": "Logika: 'Al-mustasyfa' mudzakkar, khabarnya 'mali-un'."
            },
            {
                "ar": "عِنْدِي مَوْعِدٌ فِي الْمُسْتَشْفَى",
                "translation": "Saya punya janji temu di rumah sakit.",
                "grammarNote": "Logika: 'Mau'idun' (janji temu) mubtada muakhkhar."
            },
            {
                "ar": "الْمُسْتَشْفَى بَعِيدٌ عَنِ الْبَيْتِ",
                "translation": "Rumah sakit jauh dari rumah.",
                "grammarNote": "Logika: Isim mudzakkar 'Al-mustasyfa', khabarnya 'ba'iidun'."
            },
            {
                "ar": "نَحْنُ نَزُورُ الصَّدِيقَ فِي الْمُسْتَشْفَى",
                "translation": "Kami menjenguk teman di rumah sakit.",
                "grammarNote": "Logika: Fi'il 'Nazuuru' untuk dhamir 'Nahnu'."
            }
        ]
    },
    {
        "id": "l2_8_c18",
        "wordAr": "عِيَادَةٌ",
        "translation": "Klinik / Praktek",
        "description": "Tempat pemeriksaan dokter yang lebih kecil (Muannats).",
        "category": "Rumah Sakit",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى عِيَادَةِ الْأَسْنَانِ",
                "translation": "Saya pergi ke klinik gigi.",
                "grammarNote": "Logika: 'Ila' + 'Iyaadati' (majrur) + 'Al-asnaani' (mudhafun ilaih)."
            },
            {
                "ar": "هَذِهِ عِيَادَةٌ نَظِيفَةٌ جِدًّا",
                "translation": "Ini adalah klinik yang sangat bersih.",
                "grammarNote": "Logika: 'Iyaadah' muannats, sifatnya 'nadhiifah'."
            },
            {
                "ar": "أَيْنَ عِيَادَةُ الدُّكْتُورِ أَحْمَد؟",
                "translation": "Di mana klinik Dokter Ahmad?",
                "grammarNote": "Logika: 'Iyaadatu' (Mudhaf) + 'Ad-duktuuri' (Mudhaf ilaih)."
            },
            {
                "ar": "أُخْتِي تَعْمَلُ فِي عِيَادَةٍ خَاصَّةٍ",
                "translation": "Saudariku bekerja di klinik swasta.",
                "grammarNote": "Logika: Fi'il 'Ta'malu' (Ta) untuk subjek muannats."
            },
            {
                "ar": "يَفْتَحُ الطَّبِيبُ عِيَادَتَهُ كُلَّ يَوْمٍ",
                "translation": "Dokter membuka kliniknya setiap hari.",
                "grammarNote": "Logika: Fi'il 'Yaftahu' (Ya) untuk mudzakkar."
            },
            {
                "ar": "تَنْتَظِرُ الْمَرِيضَةُ فِي الْعِيَادَةِ",
                "translation": "Pasien (Pr) menunggu di klinik.",
                "grammarNote": "Logika: Fi'il 'Yantadhiru' (Ta) untuk subjek muannats."
            },
            {
                "ar": "الْعِيَادَةُ قَرِيبَةٌ مِنَ السُّوقِ",
                "translation": "Kliniknya dekat dari pasar.",
                "grammarNote": "Logika: 'Al-iyaadah' muannats, khabarnya 'qariibatun'."
            },
            {
                "ar": "عِنْدِي مَوْعِدٌ فِي الْعِيَادَةِ غَدًا",
                "translation": "Saya punya janji temu di klinik besok.",
                "grammarNote": "Logika: 'Mau'idun' mubtada muakhkhar."
            },
            {
                "ar": "الْعِيَادَةُ لَا تَفْتَحُ فِي الْعُطْلَةِ",
                "translation": "Klinik tidak buka di hari libur.",
                "grammarNote": "Logika: Fi'il 'taftahu' (Ta) untuk subjek muannats."
            },
            {
                "ar": "نَحْنُ نَذْهَبُ إِلَى عِيَادَةِ الْأَطْفَالِ",
                "translation": "Kami pergi ke klinik anak.",
                "grammarNote": "Logika: 'Iyaadati' majrur karena didahului 'Ila'."
            }
        ]
    },
    {
        "id": "l2_8_c19",
        "wordAr": "صَيْدَلِيَّةٌ",
        "translation": "Apotek",
        "description": "Tempat membeli obat-obatan (Muannats).",
        "category": "Rumah Sakit",
        "examples": [
            {
                "ar": "اشْتَرَيْتُ الدَّوَاءَ مِنَ الصَّيْدَلِيَّةِ",
                "translation": "Saya membeli obat dari apotek.",
                "grammarNote": "Logika: 'Min' + 'As-shaidaliyyati' (majrur/kasrah)."
            },
            {
                "ar": "هَذِهِ صَيْدَلِيَّةٌ كَبِيرَةٌ",
                "translation": "Ini adalah apotek yang besar.",
                "grammarNote": "Logika: 'Shaidaliyyah' muannats, sifatnya 'kabiirah'."
            },
            {
                "ar": "أَيْنَ الصَّيْدَلِيَّةُ الْمَنَاوِبَةُ؟",
                "translation": "Di mana apotek yang buka 24 jam?",
                "grammarNote": "Logika: 'Al-manaawibah' (yang bertugas/piket)."
            },
            {
                "ar": "أَخِي يَعْمَلُ فِي صَيْدَلِيَّةٍ جَدِيدَةٍ",
                "translation": "Saudaraku bekerja di apotek baru.",
                "grammarNote": "Logika: Fi'il 'Ya'malu' (Ya) untuk mudzakkar."
            },
            {
                "ar": "يَبِيعُ الصَّيْدَلِيُّ الدَّوَاءَ",
                "translation": "Apoteker menjual obat.",
                "grammarNote": "Logika: 'As-shaidaliyyu' (Apoteker laki-laki)."
            },
            {
                "ar": "تَعْمَلُ الصَّيْدَلِيَّةُ لَيْلًا وَنَهَارًا",
                "translation": "Apotek itu beroperasi siang dan malam.",
                "grammarNote": "Logika: Fi'il 'Ta'malu' (Ta) untuk subjek muannats."
            },
            {
                "ar": "الصَّيْدَلِيَّةُ بَجِوَارِ الْمُسْتَشْفَى",
                "translation": "Apoteknya di samping rumah sakit.",
                "grammarNote": "Logika: 'Bijiwaari' (di samping) + Mudhafun ilaih."
            },
            {
                "ar": "عِنْدِي وَصْفَةٌ لِلصَّيْدَلِيَّةِ",
                "translation": "Saya punya resep untuk ke apotek.",
                "grammarNote": "Logika: 'Wasyfatun' (resep) muannats."
            },
            {
                "ar": "الصَّيْدَلِيَّةُ مَفْتُوحَةٌ الْآنَ",
                "translation": "Apoteknya buka sekarang.",
                "grammarNote": "Logika: 'As-shaidaliyyah' muannats, khabarnya 'maftuuhatun'."
            },
            {
                "ar": "نَحْنُ نَحْتَاجُ إِلَى الصَّيْدَلِيَّةِ",
                "translation": "Kami butuh ke apotek.",
                "grammarNote": "Logika: Fi'il 'Nahtaaju' untuk dhamir 'Nahnu'."
            }
        ]
    },
    {
        "id": "l2_8_c20",
        "wordAr": "مُمَرِّضَةٌ",
        "translation": "Perawat (Pr)",
        "description": "Petugas kesehatan yang membantu dokter (Muannats).",
        "category": "Rumah Sakit",
        "examples": [
            {
                "ar": "تُسَاعِدُ الْمُمَرِّضَةُ الطَّبِيبَ",
                "translation": "Perawat (Pr) itu membantu dokter.",
                "grammarNote": "Logika: Fi'il 'Tusa'idu' (Ta) untuk subjek muannats."
            },
            {
                "ar": "هَذِهِ مُمَرِّضَةٌ رَحِيمَةٌ جِدًّا",
                "translation": "Ini adalah perawat yang sangat penyayang.",
                "grammarNote": "Logika: 'Mumarridhah' muannats, sifatnya 'rahiimah'."
            },
            {
                "ar": "أَيْنَ الْمُمَرِّضَةُ الْمَسْؤُولَةُ؟",
                "translation": "Di mana perawat penanggung jawabnya?",
                "grammarNote": "Logika: 'Ayna' kata tanya lokasi."
            },
            {
                "ar": "أُمِّي تَتَحَدَّثُ مَعَ الْمُمَرِّضَةِ",
                "translation": "Ibuku sedang berbicara dengan perawat.",
                "grammarNote": "Logika: Fi'il 'Tata-haddatsu' (Ta) untuk subjek perempuan."
            },
            {
                "ar": "يَعْمَلُ الْمُمَرِّضُ فِي قِسْمِ الطَّوَارِئِ",
                "translation": "Perawat (Lk) bekerja di bagian darurat.",
                "grammarNote": "Logika: 'Al-mumarridhu' (Perawat laki-laki)."
            },
            {
                "ar": "تَقِيسُ الْمُمَرِّضَةُ حَرَارَةَ الْمَرِيضِ",
                "translation": "Perawat mengukur suhu tubuh pasien.",
                "grammarNote": "Logika: Fi'il 'Taqiisu' (Ta) untuk subjek muannats."
            },
            {
                "ar": "الْمُمَرِّضَةُ لَبِسَتْ مَلَابِسَ بَيْضَاءَ",
                "translation": "Perawat mengenakan pakaian putih.",
                "grammarNote": "Logika: Fi'il madhi 'labisat' (dia perempuan memakai)."
            },
            {
                "ar": "عِنْدَنَا مُمَرِّضَةٌ فِي الْمَدْرَسَةِ",
                "translation": "Kami punya perawat di sekolah.",
                "grammarNote": "Logika: 'Indanaa' menunjukkan kepemilikan."
            },
            {
                "ar": "الْمُمَرِّضَةُ تَعْتَنِي بِالْمَرْضَى",
                "translation": "Perawat merawat para pasien.",
                "grammarNote": "Logika: Fi'il 'Ta'tanii' (Ta) untuk subjek muannats."
            },
            {
                "ar": "نَحْنُ نَشْكُرُ الْمُمَرِّضَةَ عَلَى خِدْمَتِهَا",
                "translation": "Kami berterima kasih kepada perawat atas jasanya.",
                "grammarNote": "Logika: 'Al-mumarridhata' sebagai maf'ul bihi (manshub)."
            }
        ]
    },
    {
        "id": "l2_8_c18",
        "wordAr": "عِيَادَةٌ",
        "translation": "Klinik / Ruang Praktek",
        "description": "Tempat pemeriksaan dokter (Muannats).",
        "category": "Rumah Sakit",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى عِيَادَةٍ",
                "translation": "Saya pergi ke klinik.",
                "grammarNote": "Logika: 'Ila' + 'Iyaadatin' (majrur)."
            },
            {
                "ar": "هَذِهِ عِيَادَةٌ قَرِيبَةٌ",
                "translation": "Ini adalah klinik yang dekat.",
                "grammarNote": "Logika: 'Iyaadah' muannats, sifatnya 'qariibah'."
            },
            {
                "ar": "عِنْدِي مَوْعِدٌ فِي الْعِيَادَةِ",
                "translation": "Saya punya janji di klinik.",
                "grammarNote": "Logika: 'Al-iyaadah' (ma'rifah) setelah harf jar."
            },
            {
                "ar": "تَعْمَلُ الطَّبِيبَةُ فِي عِيَادَتِهَا",
                "translation": "Dokter (Pr) bekerja di kliniknya.",
                "grammarNote": "Logika: Dhamir 'haa' kembali ke dokter perempuan."
            },
            {
                "ar": "أَبِي يَحْتَاجُ إِلَى عِيَادَةٍ",
                "translation": "Ayahku membutuhkan klinik.",
                "grammarNote": "Logika: Fi'il 'yahtaaju' diikuti harf jar 'ila'."
            },
            {
                "ar": "أُمِّي تَحْتَاجُ إِلَى عِيَادَةٍ",
                "translation": "Ibuku membutuhkan klinik.",
                "grammarNote": "Logika: Fi'il 'tahtaaju' (Ta) untuk muannats."
            },
            {
                "ar": "صَدِيقِي يَحْتَاجُ إِلَى عِيَادَةٍ",
                "translation": "Temanku membutuhkan klinik.",
                "grammarNote": "Logika: 'Shadiiqii' mudzakkar, fi'ilnya 'yahtaaju'."
            },
            {
                "ar": "الطِّفْلُ يَحْتَاجُ إِلَى عِيَادَةٍ",
                "translation": "Anak itu membutuhkan klinik.",
                "grammarNote": "Logika: Subjek mudzakkar."
            },
            {
                "ar": "الرَّجُلُ يَحْتَاجُ إِلَى عِيَادَةٍ",
                "translation": "Pria itu membutuhkan klinik.",
                "grammarNote": "Logika: Kesesuaian fi'il dan fa'il."
            },
            {
                "ar": "الْعِيَادَةُ مَفْتُوحَةٌ الْآنَ",
                "translation": "Klinik itu buka sekarang.",
                "grammarNote": "Logika: Mubtada muannats, khabarnya 'maftuuhah'."
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