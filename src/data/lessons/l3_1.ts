import { Lesson } from "../../types";

export const l3_1: Lesson = {
  id: "l3_1",
  title: "BAB 1: AN-NAHWU AL-MAHIR (Nahwu Mahir - I'rab)",
  titleAr: "النَّحْوُ الْمَاهِرُ",
  description: "Mahkota Gramatika: Menyingkap Ruh Ilmu Nahwu melalui konsep I'rab.",
  xpReward: 60,
  isCompleted: false,
  isLocked: false,
  type: "grammar",
  content: {
    introduction: "Selamat datang di gerbang agung Level 3 Al-Mutaqaddim! Anda kini berada di wilayah para penuntut ilmu sejati. Di bab pembuka ini, kita tidak lagi sekadar menghafal kosakata atau menerjemahkan kalimat secara mentah-mentah. Kita akan mempelajari 'Ruh' dari tata bahasa Arab, yaitu Ilmu Nahwu melalui pemahaman konsep I'rab—sebuah sistem penandaan harakat akhir yang menentukan fungsi dan kedudukan setiap kata dalam kalimat.",
    introTitle: "Mahkota Gramatika: Menyingkap Ruh Ilmu Nahwu",
    introVerse: {
      ar: "وَمَنْ يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا",
      translation: "Dan barangsiapa yang dianugerahi hikmah, ia benar-benar telah dianugerahi karunia yang banyak. (QS. Al-Baqarah: 269)"
    },
    introBadges: [
      { icon: "⚙️", text: "MASTER I'RAB (Kuasai perubahan harakat akhir kalimat)" },
      { icon: "💎", text: "ANALIS JITU (Mampu membedah fungsi kata secara presisi)" }
    ],
    totalSentencesDisplay: "100 Kalimat Analisis I'rab",
    cards: [
      {
        id: "l3_1_c1",
        wordAr: "مَرْفُوعٌ",
        translation: "Kedudukan Rafa' (Nominatif)",
        description: "Status kata sebagai subjek (Fa'il) atau pokok kalimat (Mubtada).",
        category: "Dasar I'rab",
        examples: [
          { ar: "جَاءَ الْمُعَلِّمُ", translation: "Guru itu telah datang.", analysis: "Al-Mu'allimu: Marfu' (Fa'il)." },
          { ar: "اللَّهُ غَفُورٌ", translation: "Allah Maha Pengampun.", analysis: "Allahu: Marfu' (Mubtada)." }
        ]
      },
      {
        id: "l3_1_c2",
        wordAr: "مَنْصُوبٌ",
        translation: "Kedudukan Nashab (Akusatif)",
        description: "Status kata sebagai objek (Maf'ul bih) atau keterangan.",
        category: "Dasar I'rab",
        examples: [
          { ar: "رَأَيْتُ الْمُعَلِّمَ", translation: "Saya melihat guru itu.", analysis: "Al-Mu'allima: Mansub (Maf'ul bih)." },
          { ar: "قَرَأْتُ كِتَابًا", translation: "Saya membaca buku.", analysis: "Kitaaban: Mansub." }
        ]
      },
      {
        id: "l3_1_c3",
        wordAr: "مَجْرُورٌ",
        translation: "Kedudukan Jar (Genitif)",
        description: "Status kata setelah huruf jar atau sebagai pemilik (Mudhaf Ilaih).",
        category: "Dasar I'rab",
        examples: [
          { ar: "ذَهَبْتُ إِلَى الْمَدْرَسَةِ", translation: "Saya pergi ke sekolah.", analysis: "Al-Madrasati: Majrur (Huruf Jar)." },
          { ar: "كِتَابُ الطَّالِبِ", translation: "Buku siswa itu.", analysis: "At-Thalibi: Majrur (Mudhaf Ilaih)." }
        ]
      },
      {
        id: "l3_1_c4",
        wordAr: "مَجْزُومٌ",
        translation: "Kedudukan Jazm (Jussive)",
        description: "Status khusus untuk kata kerja (Fi'il Mudhari') setelah alat penjazm.",
        category: "Dasar I'rab",
        examples: [
          { ar: "لَمْ يَذْهَبْ", translation: "Dia tidak pergi.", analysis: "Yadzhab: Majzum (Lam)." },
          { ar: "لَا تَفْعَلْ", translation: "Jangan lakukan!", analysis: "Taf'al: Majzum (La Nahiyah)." }
        ]
      },
      {
        id: "l3_1_c5",
        wordAr: "الضَّمَّةُ",
        translation: "Dhammah",
        description: "Tanda asli (utama) untuk kedudukan Rafa'.",
        category: "Tanda I'rab",
        examples: [
          { ar: "مُحَمَّدٌ رَسُولُ اللَّهِ", translation: "Muhammad adalah utusan Allah.", analysis: "Muhammadun: Rafa' dengan Dhammah." }
        ]
      },
      {
        id: "l3_1_c6",
        wordAr: "الْفَتْحَةُ",
        translation: "Fathah",
        description: "Tanda asli untuk kedudukan Nashab.",
        category: "Tanda I'rab",
        examples: [
          { ar: "نَصَرَ اللَّهُ الْمُؤْمِنِينَ", translation: "Allah menolong orang-orang mukmin.", analysis: "Allahu (Rafa'), Al-Mu'minina (Nashab)." }
        ]
      },
      {
        id: "l3_1_c7",
        wordAr: "الْكَسْرَةُ",
        translation: "Kasrah",
        description: "Tanda asli untuk kedudukan Jar.",
        category: "Tanda I'rab",
        examples: [
          { ar: "فِي الْبَيْتِ رَجُلٌ", translation: "Di dalam rumah ada seorang laki-laki.", analysis: "Al-Baiti: Jar dengan Kasrah." }
        ]
      },
      {
        id: "l3_1_c8",
        wordAr: "السُّكُونُ",
        translation: "Sukun",
        description: "Tanda asli untuk kedudukan Jazm pada Fi'il.",
        category: "Tanda I'rab",
        examples: [
          { ar: "لَمْ يَقْرَأْ", translation: "Dia belum membaca.", analysis: "Yaqra': Jazm dengan Sukun." }
        ]
      },
      {
        id: "l3_1_c9",
        wordAr: "الْأَلِفُ",
        translation: "Alif",
        description: "Tanda pengganti (Far'i) untuk Rafa' pada Muthanna (Dual).",
        category: "Tanda Far'i",
        examples: [
          { ar: "جَاءَ الرَّجُلَانِ", translation: "Dua laki-laki itu telah datang.", analysis: "Ar-Rajulaani: Rafa' dengan Alif." }
        ]
      },
      {
        id: "l3_1_c10",
        wordAr: "الْوَاوُ",
        translation: "Wawu",
        description: "Tanda pengganti untuk Rafa' pada Jamak Mudzakkar Salim.",
        category: "Tanda Far'i",
        examples: [
          { ar: "الْمُسْلِمُونَ صَادِقُونَ", translation: "Orang-orang muslim itu jujur.", analysis: "Al-Muslimuuna: Rafa' dengan Wawu." }
        ]
      },
      {
        id: "l3_1_c11",
        wordAr: "الْيَاءُ",
        translation: "Ya'",
        description: "Tanda pengganti untuk Nashab dan Jar pada Dual dan Jamak.",
        category: "Tanda Far'i",
        examples: [
          { ar: "سَلَّمْتُ عَلَى الْمُسْلِمِينَ", translation: "Saya memberi salam kepada orang-orang muslim.", analysis: "Al-Muslimiina: Jar dengan Ya'." }
        ]
      },
      {
        id: "l3_1_c12",
        wordAr: "ثُبُوتُ النُّونِ",
        translation: "Tetapnya Nun",
        description: "Tanda Rafa' untuk Al-Af'al al-Khamsah (5 Fi'il Istimewa).",
        category: "Tanda Fi'il",
        examples: [
          { ar: "هُمْ يَفْعَلُونَ", translation: "Mereka (sedang) melakukan.", analysis: "Yaf'aluuna: Rafa' dengan Nun." }
        ]
      },
      {
        id: "l3_1_c13",
        wordAr: "حَذْفُ النُّونِ",
        translation: "Pembuangan Nun",
        description: "Tanda Nashab/Jazm untuk Al-Af'al al-Khamsah.",
        category: "Tanda Fi'il",
        examples: [
          { ar: "لَمْ يَفْعَلُوا", translation: "Mereka tidak melakukan.", analysis: "Yaf'aluu: Jazm dengan buang Nun." }
        ]
      },
      {
        id: "l3_1_c14",
        wordAr: "حَذْفُ الْحَرْفِ",
        translation: "Pembuangan Huruf Illah",
        description: "Tanda Jazm untuk Fi'il Mu'tal (berakhir huruf penyakit).",
        category: "Tanda Fi'il",
        examples: [
          { ar: "لَا تَرْمِ", translation: "Jangan melempar!", analysis: "Tarmi: Jazm dengan buang Ya'." }
        ]
      },
      {
        id: "l3_1_c15",
        wordAr: "الْأَسْمَاءُ الْخَمْسَةُ",
        translation: "5 Isim Istimewa",
        description: "Isim yang i'rabnya unik (Abu, Akhu, Hamu, Fu, Dzu).",
        category: "Isim Khusus",
        examples: [
          { ar: "جَاءَ أَبُوكَ", translation: "Ayahmu telah datang.", analysis: "Abuuka: Rafa' dengan Wawu." },
          { ar: "رَأَيْتُ أَبَاكَ", translation: "Saya melihat ayahmu.", analysis: "Abaaka: Nashab dengan Alif." }
        ]
      },
      {
        id: "l3_1_c16",
        wordAr: "الْمُعْرَبُ",
        translation: "Kata yang Fleksibel",
        description: "Kata yang harakat akhirnya bisa berubah sesuai posisi.",
        category: "Konsep",
        examples: [
          { ar: "زَيْدٌ، زَيْدًا، زَيْدٍ", translation: "Zaid (Rafa'), Zaid (Nashab), Zaid (Jar).", analysis: "Isim Mu'rab." }
        ]
      },
      {
        id: "l3_1_c17",
        wordAr: "الْمَبْنِيُّ",
        translation: "Kata yang Tetap (Rigid)",
        description: "Kata yang harakat akhirnya tidak pernah berubah.",
        category: "Konsep",
        examples: [
          { ar: "هَؤُلَاءِ الرِّجَالُ", translation: "Laki-laki ini.", analysis: "Ha'ulaa'i: Mabni (Tetap Kasrah)." }
        ]
      },
      {
        id: "l3_1_c18",
        wordAr: "الْفَاعِلُ",
        translation: "Subjek (Pelaku)",
        description: "Status I'rabnya selalu Marfu'.",
        category: "Jabatan Kata",
        examples: [
          { ar: "قَالَ اللَّهُ", translation: "Allah berfirman.", analysis: "Allahu: Fa'il (Marfu')." }
        ]
      },
      {
        id: "l3_1_c19",
        wordAr: "الْمَفْعُولُ بِهِ",
        translation: "Objek",
        description: "Status I'rabnya selalu Mansub.",
        category: "Jabatan Kata",
        examples: [
          { ar: "خَلَقَ اللَّهُ الْأَرْضَ", translation: "Allah menciptakan bumi.", analysis: "Al-Ardha: Maf'ul bih (Mansub)." }
        ]
      },
      {
        id: "l3_1_c20",
        wordAr: "الْمُبْتَدَأُ",
        translation: "Pokok Kalimat",
        description: "Isim di awal kalimat, statusnya Marfu'.",
        category: "Jabatan Kata",
        examples: [
          { ar: "الْعِلْمُ نُورٌ", translation: "Ilmu itu cahaya.", analysis: "Al-'Ilmu: Mubtada (Marfu')." }
        ]
      },
      {
        id: "l3_1_c21",
        wordAr: "الْخَبَرُ",
        translation: "Predikat",
        description: "Penjelas Mubtada, statusnya Marfu'.",
        category: "Jabatan Kata",
        examples: [
          { ar: "الْقَمَرُ جَمِيلٌ", translation: "Bulan itu indah.", analysis: "Jamiilun: Khabar (Marfu')." }
        ]
      },
      {
        id: "l3_1_c22",
        wordAr: "الْمُضَافُ إِلَيْهِ",
        translation: "Kata Kedua (Pemilik)",
        description: "Status I'rabnya selalu Majrur.",
        category: "Jabatan Kata",
        examples: [
          { ar: "دِينُ الْإِسْلَامِ", translation: "Agama Islam.", analysis: "Al-Islaami: Majrur (Mudhaf Ilaih)." }
        ]
      },
      {
        id: "l3_1_c23",
        wordAr: "النَّعْتُ",
        translation: "Sifat (Adjektiva)",
        description: "Mengikuti I'rab kata yang disifatinya.",
        category: "Pengikut (Tawabi')",
        examples: [
          { ar: "الرَّجُلُ الصَّالِحُ", translation: "Laki-laki yang shalih.", analysis: "As-Shalihu: Marfu' (Ikut Man'ut)." }
        ]
      },
      {
        id: "l3_1_c24",
        wordAr: "الْعَطْفُ",
        translation: "Kata Sambung",
        description: "Menghubungkan dua kata dengan harakat sama.",
        category: "Pengikut (Tawabi')",
        examples: [
          { ar: "جَاءَ أَحْمَدُ وَعَلِيٌّ", translation: "Ahmad dan Ali telah datang.", analysis: "Aliyun: Marfu' (Ikut Ma'thuf)." }
        ]
      },
      {
        id: "l3_1_c25",
        wordAr: "التَّوْكِيدُ",
        translation: "Penegasan",
        description: "Kata penguat yang mengikuti I'rab sebelumnya.",
        category: "Pengikut (Tawabi')",
        examples: [
          { ar: "جَاءَ الْقَوْمُ كُلُّهُمْ", translation: "Kaum itu telah datang semuanya.", analysis: "Kulluhum: Marfu' (Penegasan)." }
        ]
      },
      {
        id: "l3_1_c26",
        wordAr: "الْبَدَلُ",
        translation: "Pengganti",
        description: "Kata yang menggantikan posisi kata sebelumnya.",
        category: "Pengikut (Tawabi')",
        examples: [
          { ar: "قَالَ الْإِمَامُ أَحْمَدُ", translation: "Imam Ahmad berkata.", analysis: "Ahmadu: Marfu' (Badal dari Imam)." }
        ]
      },
      {
        id: "l3_1_c27",
        wordAr: "الْمَمْنُوعُ مِنَ الصَّرْفِ",
        translation: "Isim Tak Bertanwin",
        description: "Isim yang tidak boleh tanwin dan jar dengan fathah.",
        category: "Isim Khusus",
        examples: [
          { ar: "صَلَّيْتُ فِي مَسَاجِدَ", translation: "Saya shalat di masjid-masjid.", analysis: "Masaajida: Majrur dengan Fathah." }
        ]
      },
      {
        id: "l3_1_c28",
        wordAr: "تَقْدِيرِيٌّ",
        translation: "Estimasi (Tersirat)",
        description: "I'rab yang harakatnya tidak nampak (pada Isim Maqshur/Manqush).",
        category: "Konsep",
        examples: [
          { ar: "جَاءَ الْفَتَى", translation: "Pemuda itu telah datang.", analysis: "Al-Fata: Marfu' dengan Dhammah Muqaddarah." }
        ]
      },
      {
        id: "l3_1_c29",
        wordAr: "لَفْظِيٌّ",
        translation: "Lafadz (Nampak)",
        description: "I'rab yang harakatnya nampak jelas di lisan.",
        category: "Konsep",
        examples: [
          { ar: "جَاءَ زَيْدٌ", translation: "Zaid telah datang.", analysis: "Zaidun: Dhammah Zhahirah." }
        ]
      },
      {
        id: "l3_1_c30",
        wordAr: "الْعَامِلُ",
        translation: "Pengaruh (Amil)",
        description: "Kata atau posisi yang menyebabkan I'rab berubah.",
        category: "Konsep",
        examples: [
          { ar: "فِي، لَمْ، أَنْ", translation: "Di, Belum, Bahwa.", analysis: "Contoh-contoh Amil." }
        ]
      }
    ],
    grammarSection: {
      title: "Ruh Bahasa Arab: Memahami Sistem I'rab",
      introduction: "I'rab adalah sistem navigasi makna dalam bahasa Arab. Tanpa I'rab, kita tidak tahu siapa yang memukul dan siapa yang dipukul.",
      rules: [
        {
          title: "1. Empat Status I'rab",
          description: "Seluruh kata dalam bahasa Arab (Isim dan Fi'il) hanya bisa memiliki 4 status:",
          examples: [
            { ar: "رَفْعٌ (Rafa')", translation: "Status Subjek/Utama (Tanda: Dhammah)" },
            { ar: "نَصْبٌ (Nashab)", translation: "Status Objek/Keterangan (Tanda: Fathah)" },
            { ar: "جَرٌّ (Jar)", translation: "Status Kepemilikan/Tempat (Tanda: Kasrah) - Hanya Isim" },
            { ar: "جَزْمٌ (Jazm)", translation: "Status Jussive (Tanda: Sukun) - Hanya Fi'il Mudhari'" }
          ]
        },
        {
          title: "2. Tanda Asli vs Tanda Far'i",
          description: "Tanda asli adalah harakat (A-I-U), sedangkan tanda far'i adalah huruf (Alif, Wawu, Ya').",
          examples: [
            { ar: "الرَّجُلُ (Harakat)", translation: "Tanda Asli (Dhammah)" },
            { ar: "الرَّجُلَانِ (Huruf)", translation: "Tanda Far'i (Alif untuk Dual)" }
          ]
        },
        {
          title: "3. Konsep Mabni (Rigid)",
          description: "Ada kata-kata yang 'kebal' I'rab, harakatnya tidak akan pernah berubah apapun posisinya.",
          examples: [
            { ar: "هُوَ (Dia)", translation: "Mabni di atas Fathah" },
            { ar: "مَنْ (Siapa)", translation: "Mabni di atas Sukun" }
          ]
        }
      ],
      tips: "I'rab bukan sekadar hiasan suara, tapi kunci untuk menjaga kemurnian makna Al-Quran. Salah harakat bisa mengubah 'Allah menciptakan' menjadi sebaliknya!"
    },
    dialogueSection: {
      title: "Dialog: Diskusi I'rab di Perpustakaan",
      introduction: "Yusuf dan Ali sedang membedah sebuah ayat Al-Quran menggunakan pisau bedah Nahwu.",
      dialogues: [
        {
          speaker: "Yusuf",
          ar: "يَا عَلِيُّ، لِمَاذَا كَلِمَةُ 'اللَّهُ' فِي هَذِهِ الْآيَةِ مَرْفُوعَةٌ؟",
          en: "O Ali, why is the word 'Allah' in this verse Marfu' (with Dhammah)?",
          tr: "Wahai Ali, kenapa kata 'Allah' di ayat ini Marfu' (pakai Dhammah)?"
        },
        {
          speaker: "Ali",
          ar: "لِأَنَّهَا وَقَعَتْ فَاعِلًا، وَالْفَاعِلُ دَائِمًا مَرْفُوعٌ يَا صَدِيقِي.",
          en: "Because it is positioned as the Subject (Fa'il), and the Subject is always Marfu', my friend.",
          tr: "Karena posisinya sebagai Pelaku (Fa'il), dan Pelaku itu selalu Marfu', kawanku."
        },
        {
          speaker: "Yusuf",
          ar: "فَهِمْتُ الْآنَ! وَكَيْفَ نَعْرِفُ عَلَامَةَ النَّصْبِ فِي جَمْعِ الْمُذَكَّرِ السَّالِمِ؟",
          en: "I understand now! And how do we know the sign of Nashab in Sound Masculine Plural?",
          tr: "Paham sekarang! Lalu bagaimana kita tahu tanda Nashab pada Jamak Mudzakkar Salim?"
        },
        {
          speaker: "Ali",
          ar: "عَلَامَتُهُ الْيَاءُ بَدَلًا مِنَ الْفَتْحَةِ، مِثْلُ: 'رَأَيْتُ الْمُؤْمِنِينَ'.",
          en: "Its sign is the letter 'Ya' instead of Fathah, like: 'I saw the believers'.",
          tr: "Tandanya adalah huruf 'Ya' sebagai pengganti Fathah, contoh: 'Saya melihat orang mukmin'."
        }
      ]
    },
    quiz: [
      {
        id: "l3_1_q1",
        question: "Apa tanda asli untuk kedudukan Rafa'?",
        options: ["Fathah", "Kasrah", "Dhammah", "Sukun"],
        correctAnswer: "Dhammah",
        explanation: "Dhammah adalah tanda utama/asli untuk status Marfu'.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q2",
        question: "Status I'rab manakah yang HANYA dimiliki oleh Isim (Kata Benda)?",
        options: ["Rafa'", "Nashab", "Jar", "Jazm"],
        correctAnswer: "Jar",
        explanation: "Jar (Kasrah) adalah kekhususan Isim, sedangkan Jazm (Sukun) kekhususan Fi'il Mudhari'.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q3",
        question: "Manakah di bawah ini yang merupakan tanda I'rab Far'i (Pengganti)?",
        options: ["Dhammah", "Alif", "Fathah", "Kasrah"],
        correctAnswer: "Alif",
        explanation: "Alif adalah tanda far'i untuk Rafa' pada Muthanna (Dual).",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q4",
        question: "Apa status I'rab bagi objek (Maf'ul bih)?",
        options: ["Marfu'", "Mansub", "Majrur", "Majzum"],
        correctAnswer: "Mansub",
        explanation: "Objek dalam bahasa Arab selalu berkedudukan Mansub.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q5",
        question: "Apa arti dari istilah 'Mabni'?",
        options: ["Kata yang harakatnya fleksibel", "Kata yang harakat akhirnya tetap/tidak berubah", "Kata kerja masa lalu", "Kata benda jamak"],
        correctAnswer: "Kata yang harakat akhirnya tetap/tidak berubah",
        explanation: "Mabni berarti tegak/tetap, tidak terpengaruh amil.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q6",
        question: "Tanda Rafa' bagi Jamak Mudzakkar Salim adalah...",
        options: ["Alif", "Wawu", "Ya'", "Dhammah"],
        correctAnswer: "Wawu",
        explanation: "Jamak Mudzakkar Salim menggunakan Wawu saat Rafa' (Contoh: Muslimuuna).",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q7",
        question: "Pada kalimat 'رَأَيْتُ الْمُعَلِّمِينَ', kata Al-Mu'allimiina berkedudukan...",
        options: ["Marfu'", "Mansub", "Majrur", "Majzum"],
        correctAnswer: "Mansub",
        explanation: "Ia adalah objek (Maf'ul bih) dari perbuatan melihat.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q8",
        question: "Manakah yang merupakan tanda asli Jazm?",
        options: ["Dhammah", "Fathah", "Sukun", "Kasrah"],
        correctAnswer: "Sukun",
        explanation: "Sukun adalah tanda utama status Majzum.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q9",
        question: "Isim yang mengikuti harakat kata sebelumnya disebut...",
        options: ["Mubtada", "Khabar", "Tawabi' (Pengikut)", "Fa'il"],
        correctAnswer: "Tawabi' (Pengikut)",
        explanation: "Tawabi' seperti Sifat, Atf, Badal, dan Taukid mengikuti I'rab kata sebelumnya.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q10",
        question: "Apa tanda Rafa' untuk Al-Af'al al-Khamsah (5 Fi'il Istimewa)?",
        options: ["Dhammah", "Wawu", "Tsubutun Nun (Tetapnya Nun)", "Alif"],
        correctAnswer: "Tsubutun Nun (Tetapnya Nun)",
        explanation: "Fi'il seperti Yaf'aluuna marfu' dengan adanya huruf Nun di akhir.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q11",
        question: "Kata 'أَبُوكَ' (Ayahmu) saat berkedudukan Nashab berubah menjadi...",
        options: ["أَبُوكَ", "أَبَاكَ", "أَبِيكَ", "أَبٌ"],
        correctAnswer: "أَبَاكَ",
        explanation: "Asmaul Khamsah menggunakan Alif saat status Nashab.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q12",
        question: "Siapakah yang selalu berkedudukan Marfu'?",
        options: ["Maf'ul bih", "Fa'il (Pelaku)", "Isim setelah huruf Jar", "Fi'il setelah Lam"],
        correctAnswer: "Fa'il (Pelaku)",
        explanation: "Pelaku (Subjek) dalam jumlah fi'liyah selalu Marfu'.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q13",
        question: "Apa I'rab dari 'Masajid' (مَسَاجِد) saat kemasukan huruf Jar?",
        options: ["Kasrah", "Tanwin", "Fathah", "Sukun"],
        correctAnswer: "Fathah",
        explanation: "Ia adalah Isim Mamnu' minas Sharf (tidak boleh tanwin) yang jar dengan fathah.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q14",
        question: "I'rab yang harakatnya tidak nampak disebut...",
        options: ["Lafzhi", "Taqdiri", "Zhahiri", "Mabni"],
        correctAnswer: "Taqdiri",
        explanation: "Taqdiri artinya diperkirakan/tersirat karena sulit diucapkan.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q15",
        question: "Apa I'rab dari 'Al-Fata' (الْفَتَى) saat menjadi subjek?",
        options: ["Dhammah Zhahirah", "Dhammah Muqaddarah", "Fathah", "Kasrah"],
        correctAnswer: "Dhammah Muqaddarah",
        explanation: "Karena berakhiran Alif Maqshurah, harakatnya tidak nampak (Muqaddarah).",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q16",
        question: "Manakah tanda Nashab untuk Dual (Muthanna)?",
        options: ["Alif", "Wawu", "Ya'", "Nun"],
        correctAnswer: "Ya'",
        explanation: "Dual menggunakan Ya' saat Nashab dan Jar (Contoh: Rajulaini).",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q17",
        question: "Penyebab perubahan I'rab disebut...",
        options: ["Ma'mul", "Amil", "I'rab", "Bina'"],
        correctAnswer: "Amil",
        explanation: "Amil adalah faktor yang mempengaruhi perubahan harakat akhir.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q18",
        question: "Apa status I'rab Mubtada dan Khabar?",
        options: ["Mansub", "Majrur", "Marfu'", "Majzum"],
        correctAnswer: "Marfu'",
        explanation: "Kedua komponen utama kalimat Ismiyah ini selalu Marfu'.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q19",
        question: "Huruf 'Lam' (لَمْ) menyebabkan fi'il mudhari' berstatus...",
        options: ["Marfu'", "Mansub", "Majrur", "Majzum"],
        correctAnswer: "Majzum",
        explanation: "Lam adalah salah satu alat penjazm (pengubah ke sukun).",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q20",
        question: "Manakah jabatan kata yang statusnya Majrur?",
        options: ["Fa'il", "Maf'ul bih", "Mudhaf Ilaih", "Mubtada"],
        correctAnswer: "Mudhaf Ilaih",
        explanation: "Kata kedua dalam frasa kepemilikan selalu Majrur.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q21",
        question: "Apa tanda Rafa' untuk 5 Isim (Asmaul Khamsah)?",
        options: ["Dhammah", "Alif", "Wawu", "Ya'"],
        correctAnswer: "Wawu",
        explanation: "Contoh: Abuuka, Akhuuka (menggunakan Wawu).",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q22",
        question: "Kalimat 'Zaidun Qaimun'. Zaidun adalah...",
        options: ["Fa'il", "Mubtada", "Khabar", "Maf'ul"],
        correctAnswer: "Mubtada",
        explanation: "Isim marfu' di awal kalimat adalah Mubtada.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q23",
        question: "Apa tanda Nashab untuk Jamak Muannats Salim?",
        options: ["Fathah", "Kasrah", "Alif", "Ya'"],
        correctAnswer: "Kasrah",
        explanation: "Keunikan Jamak Muannats Salim (akhiran -aat) adalah Nashab dengan Kasrah.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q24",
        question: "Mana yang termasuk 'Tawabi'' (Pengikut)?",
        options: ["Zharf", "Na'at (Sifat)", "Hal", "Tamyiz"],
        correctAnswer: "Na'at (Sifat)",
        explanation: "Sifat selalu mengikuti I'rab yang disifatinya.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q25",
        question: "Apa arti 'Jazm' secara bahasa?",
        options: ["Mengangkat", "Memutus/Memotong", "Menegakkan", "Menarik"],
        correctAnswer: "Memutus/Memotong",
        explanation: "Jazm artinya memutus bunyi (menjadi sukun).",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q26",
        question: "Isim 'Dzu' (Pemilik) saat Majrur menjadi...",
        options: ["Dza", "Dzu", "Dzi", "Dzat"],
        correctAnswer: "Dzi",
        explanation: "Dzi adalah bentuk Majrur dari Dzu.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q27",
        question: "Apa I'rab dari kata 'Muslimaatun'?",
        options: ["Rafa'", "Nashab", "Jar", "Jazm"],
        correctAnswer: "Rafa'",
        explanation: "Akhiran -un menunjukkan status Marfu'.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q28",
        question: "Berapakah jumlah tanda asli I'rab?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
        explanation: "Dhammah, Fathah, Kasrah, dan Sukun.",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q29",
        question: "Mana yang merupakan tanda Nashab Far'i?",
        options: ["Alif (pada Asmaul Khamsah)", "Dhammah", "Kasrah (pada Mufrad)", "Sukun"],
        correctAnswer: "Alif (pada Asmaul Khamsah)",
        explanation: "Contoh: Abaaka (Alif menggantikan Fathah).",
        type: "multiple-choice"
      },
      {
        id: "l3_1_q30",
        question: "Kenapa kita harus belajar I'rab?",
        options: ["Biar keren", "Agar tidak salah memahami makna Al-Quran", "Supaya bisa tinggal di Arab", "Hanya untuk ujian"],
        correctAnswer: "Agar tidak salah memahami makna Al-Quran",
        explanation: "I'rab menjaga struktur makna dalam kalimat agar tidak tertukar antara pelaku dan objek.",
        type: "multiple-choice"
      }
    ]
  }
};
