import { Lesson } from "../../types";

export const l1_1: Lesson = {
  id: "l1_1",
  title: "Bab 1: Al-Asasiyyat (Fondasi & Kata Tunjuk)",
  titleAr: "الأساسيات",
  description:
    "Menghancurkan Mitos bahwa Bahasa Arab itu Susah. Menguasai 10 Kosakata Dasar & Kata Tunjuk dengan pendekatan logika sederhana.",
  xpReward: 200,
  isCompleted: false,
  isLocked: false,
  type: "comprehensive",
  content: {
    introduction: "Selamat datang di ArabiyPro, petualangan intelektual Anda dimulai di sini! 🚀\n\nBanyak orang mengira bahasa Arab adalah labirin yang membingungkan, tetapi mari kita hancurkan mitos itu bersama. Bahasa Arab adalah bahasa yang dibangun di atas logika arsitektural yang paling indah, matematis, dan presisi di dunia. Mempelajarinya sungguh jauh lebih mudah dari yang Anda bayangkan! Setiap huruf, setiap harakat, dan setiap pola adalah kepingan puzzle yang, jika Anda pahami logikanya, akan menyatu menjadi struktur pemahaman yang megah dengan sangat cepat. Anda tidak hanya belajar bahasa, Anda sedang mengasah ketajaman berpikir Anda tanpa harus merasa kesulitan.\n\nDalam Bab 1 ini, kita akan menaklukkan fondasi absolut: Isim Isyarah dan konsep Gender dalam bahasa Arab. Mungkin terasa aneh pada awalnya, namun di sinilah letak keindahannya; ini adalah kunci harmoni tata bunyi yang membuat bahasa ini begitu berirama dan sangat logis untuk diingat. Begitu Anda menguasai kunci 'Harmoni Gender' yang luar biasa sederhana ini, Anda telah membuka pintu gerbang untuk merangkai ribuan kalimat dengan percaya diri. Jangan hanya membacanya, rasakan kemudahannya, nikmati prosesnya, dan mari kita rayakan kemenangan dari setiap kalimat sempurna yang Anda susun pertama kali!",
    introTitle: "Meletakkan Fondasi: Logika, Rima, dan Kemenangan Instan",
    introVerse: {
      ar: "إِنَّا أَنْزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَعَلَّكُمْ تَعْقِلُونَ",
      translation: "Sesungguhnya Kami menurunkannya berupa Al-Quran dengan berbahasa Arab, agar kamu memahaminya. (QS. Yusuf: 2)"
    },
    introBadges: [
      { icon: "🧱", text: "FONDASI KOKOH (Menguasai struktur logika kata tunjuk dasar)" },
      { icon: "✨", text: "KEMENANGAN INSTAN (Mampu merangkai kalimat sempurna pertama)" }
    ],
    totalSentencesDisplay: "300 Kalimat Progresif",
    tips: [
      {
        title: "Rahasia Isyarah",
        content: "'Hadza' (ini) digunakan untuk laki-laki, sedangkan 'Hadzihi' (ini) untuk perempuan. Kuncinya, perhatikan apakah kata bendanya diakhiri Ta Marbuthah (ة) atau tidak!"
      },
      {
        title: "Jarak Dekat vs Jauh",
        content: "Gunakan 'Hadza' untuk benda yang bisa Anda sentuh (dekat), dan gunakan 'Dzalika' (itu) untuk benda yang hanya bisa ditunjuk oleh mata (jauh)."
      },
      {
        title: "Keajaiban Harakat Dhammah",
        content: "Harakat Dhammah ( ُ ) atau Tanwin Dhammah ( ٌ ) di akhir kata benda menunjukkan kondisi normal (Marfu'), yang merupakan fondasi utama dalam membangun kalimat."
      }
    ],
    cards: [
      {
        id: "l1_1_c1",
        wordAr: "هَذَا",
        translation: "Ini (Maskulin)",
        description: "Kata Tunjuk Dekat (Untuk benda/orang Maskulin).",
        examples: [
          { ar: "هَذَا بَيْتٌ", translation: "Ini rumah.", analysis: "Penggabungan dasar." },
          { ar: "هَذَا كِتَابٌ", translation: "Ini buku.", analysis: "Buku itu maskulin." },
          { ar: "هَذَا قَلَمٌ", translation: "Ini pulpen.", analysis: "Pulpen maskulin." },
          { ar: "هَذَا مَسْجِدٌ", translation: "Ini masjid.", analysis: "Masjid itu maskulin." },
          { ar: "هَذَا مَكْتَبٌ", translation: "Ini meja.", analysis: "Meja itu maskulin." },
          { ar: "هَذَا كُرْسِيٌّ", translation: "Ini kursi.", analysis: "Kursi itu maskulin." },
          { ar: "هَذَا بَابٌ", translation: "Ini pintu.", analysis: "Pintu itu maskulin." },
          { ar: "هَذَا طَالِبٌ", translation: "Ini siswa.", analysis: "Siswa itu maskulin." },
          { ar: "هَذَا عِلْمٌ", translation: "Ini ilmu.", analysis: "Ilmu itu maskulin." },
          { ar: "هَذَا نُورٌ", translation: "Ini cahaya.", analysis: "Cahaya itu maskulin." },
          { ar: "هَذَا بَيْتٌ جَدِيدٌ", translation: "Ini rumah baru.", analysis: "Rumah dan baru maskulin." },
          { ar: "هَذَا كِتَابٌ كَبِيرٌ", translation: "Ini buku besar.", analysis: "Buku dan besar maskulin." },
          { ar: "هَذَا قَلَمٌ جَمِيلٌ", translation: "Ini pulpen indah.", analysis: "Pulpen dan indah maskulin." },
          { ar: "هَذَا مَسْجِدٌ قَرِيبٌ", translation: "Ini masjid dekat.", analysis: "Masjid dan dekat maskulin." },
          { ar: "هَذَا مَكْتَبٌ نَظِيفٌ", translation: "Ini meja bersih.", analysis: "Meja dan bersih maskulin." },
          { ar: "هَذَا كُرْسِيٌّ مُرِيحٌ", translation: "Ini kursi nyaman.", analysis: "Kursi dan nyaman maskulin." },
          { ar: "هَذَا بَابٌ مَفْتُوحٌ", translation: "Ini pintu terbuka.", analysis: "Pintu dan terbuka maskulin." },
          { ar: "هَذَا طَالِبٌ ذَكِيٌّ", translation: "Ini siswa cerdas.", analysis: "Siswa dan cerdas maskulin." },
          { ar: "هَذَا عِلْمٌ نَافِعٌ", translation: "Ini ilmu bermanfaat.", analysis: "Ilmu dan bermanfaat maskulin." },
          { ar: "هَذَا نُورٌ سَاطِعٌ", translation: "Ini cahaya terang.", analysis: "Cahaya dan terang maskulin." },
          { ar: "هَذَا هُوَ بَيْتِي", translation: "Ini adalah rumahku.", analysis: "Menekankan rumah milikku." },
          { ar: "هَذَا هُوَ كِتَابِي", translation: "Ini adalah bukuku.", analysis: "Menekankan buku milikku." },
          { ar: "هَذَا هُوَ قَلَمِي", translation: "Ini adalah pulpenku.", analysis: "Menekankan pulpen milikku." },
          { ar: "هَذَا هُوَ مَسْجِدِي", translation: "Ini adalah masjidku.", analysis: "Menekankan masjid milikku." },
          { ar: "هَذَا هُوَ مَكْتَبِي", translation: "Ini adalah mejaku.", analysis: "Menekankan meja milikku." },
          { ar: "هَذَا هُوَ كُرْسِيِّي", translation: "Ini adalah kursiku.", analysis: "Menekankan kursi milikku." },
          { ar: "هَذَا هُوَ بَابِي", translation: "Ini adalah pintuku.", analysis: "Menekankan pintu milikku." },
          { ar: "هَذَا هُوَ طَالِبِي", translation: "Ini adalah siswaku.", analysis: "Menekankan siswa milikku." },
          { ar: "هَذَا هُوَ عِلْمِي", translation: "Ini adalah ilmuku.", analysis: "Menekankan ilmu milikku." },
          { ar: "هَذَا هُوَ نُورِي", translation: "Ini adalah cahayaku.", analysis: "Menekankan cahaya milikku." }
        ],
      },
      {
        id: "l1_1_c2",
        wordAr: "كِتَابٌ",
        translation: "Buku",
        description: "Benda Maskulin (Mudzakkar).",
        examples: [
          {
            ar: "كِتَابٌ",
            translation: "Sebuah buku.",
            analysis:
              "Kata dasar dengan tanwin (un) menandakan bendanya masih umum (sebuah).",
          },
          {
            ar: "هَذَا كِتَابٌ",
            translation: "Ini adalah buku.",
            analysis:
              "Menunjuk buku menggunakan Hadza karena dia kategori Maskulin.",
          },
          {
            ar: "كِتَابُكَ",
            translation: "Bukumumu (Laki-laki).",
            analysis: "Kata buku ditempel dengan 'ka' (milikmu).",
          },
          {
            ar: "هَذَا كِتَابٌ جَدِيدٌ",
            translation: "Ini buku baru.",
            analysis: "Kata sifat 'baru' (jadiidun) mengikuti gendernya.",
          },
          {
            ar: "الْكِتَابُ جَدِيدٌ",
            translation: "Buku itu baru.",
            analysis: "Tambahan 'Al' membuat bukunya jadi spesifik (itu).",
          },
          {
            ar: "أَيْنَ الْكِتَابُ؟",
            translation: "Di mana buku itu?",
            analysis: "Bertanya lokasi benda.",
          },
          {
            ar: "لَيْسَ هَذَا كِتَابًا",
            translation: "Ini bukan buku.",
            analysis:
              "Sangkalan menggunakan 'Laysa'. Perhatikan kata kitaaban berubah akhirannya (aturan khusus sangkalan).",
          },
          {
            ar: "أَهَذَا كِتَابٌ أَمْ قَلَمٌ؟",
            translation: "Apakah ini buku atau pulpen?",
            analysis: "Bertanya pilihan menggunakan 'am' (atau).",
          },
          {
            ar: "أَقْرَأُ كِتَابًا فِي الْمَكْتَبَةِ",
            translation: "Saya sedang membaca buku di perpustakaan.",
            analysis:
              "Kalimat kerja formal, posisi buku jadi objek (kitaaban).",
          },
          {
            ar: "هَذَا الْكِتَابُ مُفِيدٌ جِدًّا لِلْقِرَاءَةِ",
            translation: "Buku ini sangat bermanfaat untuk dibaca.",
            analysis: "Kalimat percakapan level tinggi, sangat natural.",
          },
        ],
      },
            {
        id: "l1_1_c3",
        wordAr: "بَيْتٌ",
        translation: "Rumah",
        description: "Kata benda MUDZAKKAR (maskulin) — tidak ada ta marbuthah (ة) di akhir kata. Gunakan kata tunjuk dekat هَذَا atau kata tunjuk jauh ذَلِكَ.",
        audioWord: "",
        category: "Benda • Rumah",
        examples: [
          {
            ar: "هَذَا بَيْتٌ كَبِيرٌ",
            translation: "Ini adalah rumah yang besar",
            grammarNote: "هَذَا mudzakkar selaras dengan بَيْتٌ yang tidak ada ة. كَبِيرٌ sebagai sifat juga bergender mudzakkar mengikuti isimnya.",
            analysis: "هَذَا mudzakkar selaras dengan بَيْتٌ yang tidak ada ة. كَبِيرٌ sebagai sifat juga bergender mudzakkar mengikuti isimnya."
          },
          {
            ar: "الْبَيْتُ نَظِيفٌ وَجَمِيلٌ",
            translation: "Rumah itu bersih dan indah",
            grammarNote: "الْبَيْتُ di awal kalimat sebagai mubtada dengan tanda dhammah. نَظِيفٌ sebagai khabar yang menerangkannya.",
            analysis: "الْبَيْتُ di awal kalimat sebagai mubtada dengan tanda dhammah. نَظِيفٌ sebagai khabar yang menerangkannya."
          },
          {
            ar: "أَنَا فِي الْبَيْتِ",
            translation: "Saya berada di dalam rumah",
            grammarNote: "فِي adalah huruf jar (kata depan), sehingga kata setelahnya الْبَيْتِ berharakat akhir kasrah (majrur).",
            analysis: "فِي adalah huruf jar (kata depan), sehingga kata setelahnya الْبَيْتِ berharakat akhir kasrah (majrur)."
          },
          {
            ar: "هَذَا بَيْتُ أُسْتَاذِي",
            translation: "Ini adalah rumah guruku",
            grammarNote: "Susunan idhafah (kepemilikan): بَيْتُ (mudhaf, tanpa tanwin) dan أُسْتَاذِي (mudhaf ilaih, majrur).",
            analysis: "Susunan idhafah (kepemilikan): بَيْتُ (mudhaf, tanpa tanwin) dan أُسْتَاذِي (mudhaf ilaih, majrur)."
          },
          {
            ar: "الْبَيْتُ الْجَدِيدُ جَمِيلٌ",
            translation: "Rumah baru itu indah",
            grammarNote: "الْجَدِيدُ adalah sifat yang mengikuti الْبَيْتُ dalam hal ma'rifah (pakai AL), gender (mudzakkar), dan harakat (dhammah).",
            analysis: "الْجَدِيدُ adalah sifat yang mengikuti الْبَيْتُ dalam hal ma'rifah (pakai AL), gender (mudzakkar), dan harakat (dhammah)."
          },
          {
            ar: "أَذْهَبُ إِلَى الْبَيْتِ",
            translation: "Saya pergi ke rumah",
            grammarNote: "إِلَى adalah harf jar, menyebabkan kata setelahnya الْبَيْتِ berharakat kasrah.",
            analysis: "إِلَى adalah harf jar, menyebabkan kata setelahnya الْبَيْتِ berharakat kasrah."
          },
          {
            ar: "ذَلِكَ بَيْتٌ صَغِيرٌ",
            translation: "Itu adalah rumah yang kecil",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. صَغِيرٌ adalah sifat mudzakkar yang selaras dengan بَيْتٌ.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. صَغِيرٌ adalah sifat mudzakkar yang selaras dengan بَيْتٌ."
          },
          {
            ar: "بَيْتِي قَرِيبٌ مِنَ الْمَسْجِدِ",
            translation: "Rumahku dekat dari masjid",
            grammarNote: "بَيْتِي terdiri dari kata بَيْتٌ dan ya mutakallim (kepemilikan saya). قَرِيبٌ khabar mudzakkar.",
            analysis: "بَيْتِي terdiri dari kata بَيْتٌ dan ya mutakallim (kepemilikan saya). قَرِيبٌ khabar mudzakkar."
          },
          {
            ar: "مَنْ فِي الْبَيْتِ؟",
            translation: "Siapa yang ada di dalam rumah?",
            grammarNote: "مَنْ adalah isim istifham (kata tanya). فِي الْبَيْتِ adalah syibhul jumlah (frasa preposisi) sebagai khabar.",
            analysis: "مَنْ adalah isim istifham (kata tanya). فِي الْبَيْتِ adalah syibhul jumlah (frasa preposisi) sebagai khabar."
          },
          {
            ar: "أَشْتَرِي بَيْتًا جَدِيدًا",
            translation: "Saya membeli rumah baru",
            grammarNote: "بَيْتًا sebagai objek (maf'ul bih) berharakat fathah tanwin. جَدِيدًا adalah sifat yang mengikutinya.",
            analysis: "بَيْتًا sebagai objek (maf'ul bih) berharakat fathah tanwin. جَدِيدًا adalah sifat yang mengikutinya."
          }
        ]
      },
      {
        id: "l1_1_c4",
        wordAr: "بَابٌ",
        translation: "Pintu",
        description: "Kata benda MUDZAKKAR (maskulin) — tidak ada akhiran ta marbuthah (ة). Gunakan kata tunjuk dekat هَذَا atau jauh ذَلِكَ.",
        audioWord: "",
        category: "Benda • Rumah",
        examples: [
          {
            ar: "هَذَا بَابٌ",
            translation: "Ini adalah pintu",
            grammarNote: "هَذَا kata tunjuk mudzakkar yang sesuai dengan بَابٌ karena tidak berakhiran ة.",
            analysis: "هَذَا kata tunjuk mudzakkar yang sesuai dengan بَابٌ karena tidak berakhiran ة."
          },
          {
            ar: "الْبَابُ مَفْتُوحٌ",
            translation: "Pintu itu terbuka",
            grammarNote: "الْبَابُ sebagai mubtada (ma'rifah, dhammah). مَفْتُوحٌ sebagai khabar (nakirah, dhammah) menerangkan keadaan pintu.",
            analysis: "الْبَابُ sebagai mubtada (ma'rifah, dhammah). مَفْتُوحٌ sebagai khabar (nakirah, dhammah) menerangkan keadaan pintu."
          },
          {
            ar: "الْبَابُ مُغْلَقٌ",
            translation: "Pintu itu tertutup",
            grammarNote: "الْبَابُ mubtada mudzakkar. مُغْلَقٌ khabar mudzakkar yang menerangkan keadaan tertutup.",
            analysis: "الْبَابُ mubtada mudzakkar. مُغْلَقٌ khabar mudzakkar yang menerangkan keadaan tertutup."
          },
          {
            ar: "هَذَا بَابُ الْمَسْجِدِ",
            translation: "Ini adalah pintu masjid",
            grammarNote: "Susunan idhafah: بَابُ sebagai mudhaf (tanpa AL/tanwin) dan الْمَسْجِدِ sebagai mudhaf ilaih (kasrah).",
            analysis: "Susunan idhafah: بَابُ sebagai mudhaf (tanpa AL/tanwin) dan الْمَسْجِدِ sebagai mudhaf ilaih (kasrah)."
          },
          {
            ar: "أَفْتَحُ الْبَابَ",
            translation: "Saya membuka pintu",
            grammarNote: "الْبَابَ berharakat fathah karena berposisi sebagai objek (maf'ul bih) dari kata kerja أَفْتَحُ.",
            analysis: "الْبَابَ berharakat fathah karena berposisi sebagai objek (maf'ul bih) dari kata kerja أَفْتَحُ."
          },
          {
            ar: "الْبَابُ الْكَبِيرُ جَمِيلٌ",
            translation: "Pintu yang besar itu indah",
            grammarNote: "الْكَبِيرُ adalah sifat yang menyelaraskan diri dengan الْبَابُ dalam gender mudzakkar dan AL.",
            analysis: "الْكَبِيرُ adalah sifat yang menyelaraskan diri dengan الْبَابُ dalam gender mudzakkar dan AL."
          },
          {
            ar: "ذَلِكَ بَابٌ خَشَبِيٌّ",
            translation: "Itu adalah pintu kayu",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. خَشَبِيٌّ adalah sifat yang berarti terbuat dari kayu, selaras bergender mudzakkar.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. خَشَبِيٌّ adalah sifat yang berarti terbuat dari kayu, selaras bergender mudzakkar."
          },
          {
            ar: "أَجْلِسُ قُرْبَ الْبَابِ",
            translation: "Saya duduk di dekat pintu",
            grammarNote: "قُرْبَ adalah zharaf (keterangan). الْبَابِ majrur (kasrah) karena berposisi sebagai mudhaf ilaih setelah zharaf.",
            analysis: "قُرْبَ adalah zharaf (keterangan). الْبَابِ majrur (kasrah) karena berposisi sebagai mudhaf ilaih setelah zharaf."
          },
          {
            ar: "هَذَا بَابٌ صَغِيرٌ",
            translation: "Ini adalah pintu yang kecil",
            grammarNote: "هَذَا mudzakkar. صَغِيرٌ sifat mudzakkar yang mengikuti status harakat dan gender kata بَابٌ.",
            analysis: "هَذَا mudzakkar. صَغِيرٌ sifat mudzakkar yang mengikuti status harakat dan gender kata بَابٌ."
          },
          {
            ar: "أُغْلِقُ الْبَابَ فِي اللَّيْلِ",
            translation: "Saya menutup pintu di malam hari",
            grammarNote: "الْبَابَ objek berharakat fathah. فِي اللَّيْلِ keterangan waktu majrur berharakat kasrah.",
            analysis: "الْبَابَ objek berharakat fathah. فِي اللَّيْلِ keterangan waktu majrur berharakat kasrah."
          }
        ]
      },
      {
        id: "l1_1_c5",
        wordAr: "نَافِذَةٌ",
        translation: "Jendela",
        description: "Kata benda MUANNATS (feminin) — ditandai oleh adanya ta marbuthah (ة) di akhir kata. Gunakan kata tunjuk dekat هَذِهِ atau jauh تِلْكَ.",
        audioWord: "",
        category: "Benda • Rumah",
        examples: [
          {
            ar: "هَذِهِ نَافِذَةٌ",
            translation: "Ini adalah jendela",
            grammarNote: "Gunakan هَذِهِ karena نَافِذَةٌ bergender muannats yang ditandai dengan ta marbuthah (ة) di akhirnya.",
            analysis: "Gunakan هَذِهِ karena نَافِذَةٌ bergender muannats yang ditandai dengan ta marbuthah (ة) di akhirnya."
          },
          {
            ar: "النَّافِذَةُ مَفْتُوحَةٌ",
            translation: "Jendela itu terbuka",
            grammarNote: "النَّافِذَةُ mubtada muannats, sehingga khabarnya مَفْتُوحَةٌ juga harus muannats (menggunakan ة).",
            analysis: "النَّافِذَةُ mubtada muannats, sehingga khabarnya مَفْتُوحَةٌ juga harus muannats (menggunakan ة)."
          },
          {
            ar: "النَّافِذَةُ مُغْلَقَةٌ",
            translation: "Jendela itu tertutup",
            grammarNote: "Khabar مُغْلَقَةٌ diselaraskan dalam gender muannats dengan mubtada النَّافِذَةُ.",
            analysis: "Khabar مُغْلَقَةٌ diselaraskan dalam gender muannats dengan mubtada النَّافِذَةُ."
          },
          {
            ar: "هَذِهِ نَافِذَةٌ كَبِيرَةٌ",
            translation: "Ini adalah jendela yang besar",
            grammarNote: "كَبِيرَةٌ adalah kata sifat muannats yang mengikuti kata benda نَافِذَةٌ dalam hal gender dan harakat.",
            analysis: "كَبِيرَةٌ adalah kata sifat muannats yang mengikuti kata benda نَافِذَةٌ dalam hal gender dan harakat."
          },
          {
            ar: "أَنْظُرُ مِنَ النَّافِذَةِ",
            translation: "Saya melihat dari jendela",
            grammarNote: "مِنَ adalah huruf jar, membuat kata النَّافِذَةِ berakhiran kasrah.",
            analysis: "مِنَ adalah huruf jar, membuat kata النَّافِذَةِ berakhiran kasrah."
          },
          {
            ar: "النَّافِذَةُ نَظِيفَةٌ",
            translation: "Jendela itu bersih",
            grammarNote: "نَظِيفَةٌ khabar muannats berharakat dhammah tanwin selaras dengan mubtada النَّافِذَةُ.",
            analysis: "نَظِيفَةٌ khabar muannats berharakat dhammah tanwin selaras dengan mubtada النَّافِذَةُ."
          },
          {
            ar: "أَفْتَحُ النَّافِذَةَ",
            translation: "Saya membuka jendela",
            grammarNote: "النَّافِذَةَ berharakat fathah karena bertindak sebagai objek langsung (maf'ul bih).",
            analysis: "النَّافِذَةَ berharakat fathah karena bertindak sebagai objek langsung (maf'ul bih)."
          },
          {
            ar: "تِلْكَ نَافِذَةٌ صَغِيرَةٌ",
            translation: "Itu adalah jendela yang kecil",
            grammarNote: "تِلْكَ kata tunjuk jauh muannats. صَغِيرَةٌ kata sifat muannats mengikuti نَافِذَةٌ.",
            analysis: "تِلْكَ kata tunjuk jauh muannats. صَغِيرَةٌ kata sifat muannats mengikuti نَافِذَةٌ."
          },
          {
            ar: "هَذِهِ نَافِذَةُ الْغُرْفَةِ",
            translation: "Ini adalah jendela kamar",
            grammarNote: "Susunan idhafah: نَافِذَةُ sebagai mudhaf (tanpa AL) dan الْغُرْفَةِ sebagai mudhaf ilaih (kasrah).",
            analysis: "Susunan idhafah: نَافِذَةُ sebagai mudhaf (tanpa AL) dan الْغُرْفَةِ sebagai mudhaf ilaih (kasrah)."
          },
          {
            ar: "الْهَوَاءُ يَدْخُلُ مِنَ النَّافِذَةِ",
            translation: "Udara masuk melalui jendela",
            grammarNote: "مِنَ النَّافِذَةِ adalah keterangan tempat (majrur, kasrah) setelah preposisi مِنَ.",
            analysis: "مِنَ النَّافِذَةِ adalah keterangan tempat (majrur, kasrah) setelah preposisi مِنَ."
          }
        ]
      },
      {
        id: "l1_1_c6",
        wordAr: "غُرْفَةٌ",
        translation: "Kamar",
        description: "Kata benda MUANNATS (feminin) — ditandai dengan ta marbuthah (ة) di akhir kata. Gunakan kata tunjuk dekat هَذِهِ atau jauh تِلْكَ.",
        audioWord: "",
        category: "Benda • Rumah",
        examples: [
          {
            ar: "هَذِهِ غُرْفَةٌ",
            translation: "Ini adalah kamar",
            grammarNote: "Gunakan هَذِهِ karena غُرْفَةٌ berakhiran ta marbuthah (ة) yang menunjukkan gender muannats.",
            analysis: "Gunakan هَذِهِ karena غُرْفَةٌ berakhiran ta marbuthah (ة) yang menunjukkan gender muannats."
          },
          {
            ar: "الْغُرْفَةُ وَاسِعَةٌ",
            translation: "Kamar itu luas",
            grammarNote: "الْغُرْفَةُ mubtada muannats, maka khabar وَاسِعَةٌ harus setara muannats (memiliki ة).",
            analysis: "الْغُرْفَةُ mubtada muannats, maka khabar وَاسِعَةٌ harus setara muannats (memiliki ة)."
          },
          {
            ar: "الْغُرْفَةُ نَظِيفَةٌ",
            translation: "Kamar itu bersih",
            grammarNote: "نَظِيفَةٌ khabar muannats berharakat dhammah tanwin selaras dengan mubtada الْغُرْفَةُ.",
            analysis: "نَظِيفَةٌ khabar muannats berharakat dhammah tanwin selaras dengan mubtada الْغُرْفَةُ."
          },
          {
            ar: "أَنَا فِي الْغُرْفَةِ",
            translation: "Saya berada di dalam kamar",
            grammarNote: "فِي adalah huruf jar, sehingga kata الْغُرْفَةِ berakhiran kasrah.",
            analysis: "فِي adalah huruf jar, sehingga kata الْغُرْفَةِ berakhiran kasrah."
          },
          {
            ar: "هَذِهِ غُرْفَتِي",
            translation: "Ini adalah kamarku",
            grammarNote: "غُرْفَتِي adalah gabungan غُرْفَةٌ dan ya mutakallim (milikku). Huruf ta marbuthah berubah menjadi ta biasa (ت) saat digabung.",
            analysis: "غُرْفَتِي adalah gabungan غُرْفَةٌ dan ya mutakallim (milikku). Huruf ta marbuthah berubah menjadi ta biasa (ت) saat digabung."
          },
          {
            ar: "الْغُرْفَةُ الْجَمِيلَةُ مُرِيحَةٌ",
            translation: "Kamar yang indah itu nyaman",
            grammarNote: "الْجَمِيلَةُ sifat muannats yang mengikuti الْغُرْفَةُ. مُرِيحَةٌ sebagai khabar muannats.",
            analysis: "الْجَمِيلَةُ sifat muannats yang mengikuti الْغُرْفَةُ. مُرِيحَةٌ sebagai khabar muannats."
          },
          {
            ar: "أَدْخُلُ إِلَى الْغُرْفَةِ",
            translation: "Saya masuk ke dalam kamar",
            grammarNote: "إِلَى adalah kata depan jar, mengubah harakat akhir الْغُرْفَةِ menjadi kasrah.",
            analysis: "إِلَى adalah kata depan jar, mengubah harakat akhir الْغُرْفَةِ menjadi kasrah."
          },
          {
            ar: "تِلْكَ غُرْفَةٌ صَغِيرَةٌ",
            translation: "Itu adalah kamar yang kecil",
            grammarNote: "تِلْكَ kata tunjuk jauh feminin. صَغِيرَةٌ kata sifat muannats mengikuti kata benda yang disifatinya.",
            analysis: "تِلْكَ kata tunjuk jauh feminin. صَغِيرَةٌ kata sifat muannats mengikuti kata benda yang disifatinya."
          },
          {
            ar: "هَذِهِ غُرْفَةُ النَّوْمِ",
            translation: "Ini adalah kamar tidur",
            grammarNote: "Idhafah khusus: غُرْفَةُ sebagai mudhaf dan النَّوْمِ sebagai mudhaf ilaih (kasrah).",
            analysis: "Idhafah khusus: غُرْفَةُ sebagai mudhaf dan النَّوْمِ sebagai mudhaf ilaih (kasrah)."
          },
          {
            ar: "أُنَظِّفُ الْغُرْفَةَ كُلَّ يَوْمٍ",
            translation: "Saya membersihkan kamar setiap hari",
            grammarNote: "الْغُرْفَةَ adalah objek (maf'ul bih) berharakat fathah. كُلَّ يَوْمٍ keterangan waktu.",
            analysis: "الْغُرْفَةَ adalah objek (maf'ul bih) berharakat fathah. كُلَّ يَوْمٍ keterangan waktu."
          }
        ]
      },
      {
        id: "l1_1_c7",
        wordAr: "مَكْتَبٌ",
        translation: "Meja/Kantor",
        description: "Kata benda MUDZAKKAR (maskulin) — tidak ada akhiran ta marbuthah (ة). Memiliki makna ganda tergantung konteks: 'meja tulis' atau 'kantor'. Gunakan هَذَا/ذَلِكَ.",
        audioWord: "",
        category: "Benda • Kantor",
        examples: [
          {
            ar: "هَذَا مَكْتَبٌ",
            translation: "Ini adalah meja / kantor",
            grammarNote: "مَكْتَبٌ adalah mudzakkar (tanpa ة), maka kata tunjuk dekat yang tepat adalah هَذَا.",
            analysis: "مَكْتَبٌ adalah mudzakkar (tanpa ة), maka kata tunjuk dekat yang tepat adalah هَذَا."
          },
          {
            ar: "الْمَكْتَبُ كَبِيرٌ",
            translation: "Meja itu besar",
            grammarNote: "الْمَكْتَبُ mubtada mudzakkar dhammah. كَبِيرٌ khabar mudzakkar dhammah tanwin.",
            analysis: "الْمَكْتَبُ mubtada mudzakkar dhammah. كَبِيرٌ khabar mudzakkar dhammah tanwin."
          },
          {
            ar: "الْقَلَمُ عَلَى الْمَكْتَبِ",
            translation: "Pena itu di atas meja",
            grammarNote: "عَلَى adalah huruf jar, membuat kata الْمَكْتَبِ majrur dengan harakat akhir kasrah.",
            analysis: "عَلَى adalah huruf jar, membuat kata الْمَكْتَبِ majrur dengan harakat akhir kasrah."
          },
          {
            ar: "أَذْهَبُ إِلَى الْمَكْتَبِ",
            translation: "Saya pergi ke kantor",
            grammarNote: "Di sini مَكْتَبٌ berarti kantor. Kata ini kasrah karena didahului harf jar إِلَى.",
            analysis: "Di sini مَكْتَبٌ berarti kantor. Kata ini kasrah karena didahului harf jar إِلَى."
          },
          {
            ar: "هَذَا مَكْتَبُ الْمُدِيرِ",
            translation: "Ini adalah meja/kantor direktur",
            grammarNote: "Idhafah kepemilikan: مَكْتَبُ (mudhaf, dhammah) dan الْمُدِيرِ (mudhaf ilaih, kasrah).",
            analysis: "Idhafah kepemilikan: مَكْتَبُ (mudhaf, dhammah) dan الْمُدِيرِ (mudhaf ilaih, kasrah)."
          },
          {
            ar: "الْمَكْتَبُ نَظِيفٌ جِدًّا",
            translation: "Meja/kantor itu sangat bersih",
            grammarNote: "نَظِيفٌ khabar mudzakkar. جِدًّا adalah keterangan tambahan untuk menguatkan arti (sangat).",
            analysis: "نَظِيفٌ khabar mudzakkar. جِدًّا adalah keterangan tambahan untuk menguatkan arti (sangat)."
          },
          {
            ar: "ذَلِكَ مَكْتَبٌ جَدِيدٌ",
            translation: "Itu adalah meja baru",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. جَدِيدٌ sifat mudzakkar mengikuti مَكْتَبٌ.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. جَدِيدٌ sifat mudzakkar mengikuti مَكْتَبٌ."
          },
          {
            ar: "أَجْلِسُ أَمَامَ الْمَكْتَبِ",
            translation: "Saya duduk di depan meja",
            grammarNote: "أَمَامَ adalah zharaf makan. الْمَكْتَبِ majrur (kasrah) berposisi sebagai mudhaf ilaih setelah zharaf.",
            analysis: "أَمَامَ adalah zharaf makan. الْمَكْتَبِ majrur (kasrah) berposisi sebagai mudhaf ilaih setelah zharaf."
          },
          {
            ar: "مَكْتَبِي فِي الطَّابِقِ الثَّانِي",
            translation: "Kantorku di lantai dua",
            grammarNote: "مَكْتَبِي terdiri dari مَكْتَبٌ + ya kepemilikan. فِي الطَّابِقِ keterangan tempat majrur.",
            analysis: "مَكْتَبِي terdiri dari مَكْتَبٌ + ya kepemilikan. فِي الطَّابِقِ keterangan tempat majrur."
          },
          {
            ar: "أَشْتَرِي مَكْتَبًا خَشَبِيًّا",
            translation: "Saya membeli meja kayu",
            grammarNote: "مَكْتَبًا objek berharakat fathah tanwin. خَشَبِيًّا sifat mudzakkar mengikuti harakat maf'ul bih.",
            analysis: "مَكْتَبًا objek berharakat fathah tanwin. خَشَبِيًّا sifat mudzakkar mengikuti harakat maf'ul bih."
          }
        ]
      },
      {
        id: "l1_1_c8",
        wordAr: "كُرْسِيٌّ",
        translation: "Kursi",
        description: "Kata benda MUDZAKKAR (maskulin) — tidak ada ta marbuthah (ة). Gunakan kata tunjuk dekat هَذَا atau jauh ذَلِكَ.",
        audioWord: "",
        category: "Benda • Rumah",
        examples: [
          {
            ar: "هَذَا كُرْسِيٌّ",
            translation: "Ini adalah kursi",
            grammarNote: "هَذَا kata tunjuk mudzakkar yang sesuai untuk menunjuk كُرْسِيٌّ.",
            analysis: "هَذَا kata tunjuk mudzakkar yang sesuai untuk menunjuk كُرْسِيٌّ."
          },
          {
            ar: "الْكُرْسِيُّ مُرِيحٌ",
            translation: "Kursi itu nyaman",
            grammarNote: "الْكُرْسِيُّ mubtada mudzakkar. مُرِيحٌ khabar mudzakkar berharakat dhammah tanwin.",
            analysis: "الْكُرْسِيُّ mubtada mudzakkar. مُرِيحٌ khabar mudzakkar berharakat dhammah tanwin."
          },
          {
            ar: "أَجْلِسُ عَلَى الْكُرْسِيِّ",
            translation: "Saya duduk di atas kursi",
            grammarNote: "عَلَى adalah preposisi jar, memaksa kata الْكُرْسِيِّ berharakat akhir kasrah.",
            analysis: "عَلَى adalah preposisi jar, memaksa kata الْكُرْسِيِّ berharakat akhir kasrah."
          },
          {
            ar: "هَذَا كُرْسِيُّ الْأُسْتَاذِ",
            translation: "Ini adalah kursi guru",
            grammarNote: "Idhafah: كُرْسِيُّ bertindak sebagai mudhaf dan الْأُسْتَاذِ sebagai mudhaf ilaih (kasrah).",
            analysis: "Idhafah: كُرْسِيُّ bertindak sebagai mudhaf dan الْأُسْتَاذِ sebagai mudhaf ilaih (kasrah)."
          },
          {
            ar: "الْكُرْسِيُّ جَدِيدٌ",
            translation: "Kursi itu baru",
            grammarNote: "جَدِيدٌ khabar mudzakkar menerangkan kata benda الْكُرْسِيُّ.",
            analysis: "جَدِيدٌ khabar mudzakkar menerangkan kata benda الْكُرْسِيُّ."
          },
          {
            ar: "ذَلِكَ كُرْسِيٌّ مَكْسُورٌ",
            translation: "Itu adalah kursi yang patah",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. مَكْسُورٌ sifat mudzakkar menerangkan kondisi kursi.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. مَكْسُورٌ sifat mudzakkar menerangkan kondisi kursi."
          },
          {
            ar: "أَضَعُ الْحَقِيبَةَ عَلَى الْكُرْسِيِّ",
            translation: "Saya meletakkan tas di atas kursi",
            grammarNote: "عَلَى الْكُرْسِيِّ susunan jar-majrur sebagai keterangan tempat diletakkannya objek.",
            analysis: "عَلَى الْكُرْسِيِّ susunan jar-majrur sebagai keterangan tempat diletakkannya objek."
          },
          {
            ar: "الْكُرْسِيُّ الْخَشَبِيُّ قَوِيٌّ",
            translation: "Kursi kayu itu kuat",
            grammarNote: "الْخَشَبِيُّ sifat mudzakkar dengan AL mengikuti الْكُرْسِيُّ. قَوِيٌّ sebagai khabar.",
            analysis: "الْخَشَبِيُّ sifat mudzakkar dengan AL mengikuti الْكُرْسِيُّ. قَوِيٌّ sebagai khabar."
          },
          {
            ar: "هَذَا كُرْسِيِّي",
            translation: "Ini adalah kursiku",
            grammarNote: "كُرْسِيِّي kata كُرْسِيٌّ yang diakhiri ya mutakallim kepemilikan orang pertama tunggal.",
            analysis: "كُرْسِيِّي kata كُرْسِيٌّ yang diakhiri ya mutakallim kepemilikan orang pertama tunggal."
          },
          {
            ar: "أُرِيدُ كُرْسِيًّا صَغِيرًا",
            translation: "Saya ingin kursi yang kecil",
            grammarNote: "كُرْسِيًّا objek (maf'ul bih) berharakat fathah tanwin. صَغِيرًا sifat mudzakkar mengikuti harakat objek.",
            analysis: "كُرْسِيًّا objek (maf'ul bih) berharakat fathah tanwin. صَغِيرًا sifat mudzakkar mengikuti harakat objek."
          }
        ]
      },
      {
        id: "l1_1_c9",
        wordAr: "طَاوِلَةٌ",
        translation: "Meja Makan",
        description: "Kata benda MUANNATS (feminin) — ditandai oleh ta marbuthah (ة) di akhirnya. Digunakan secara spesifik untuk meja yang biasanya lebar atau meja makan. Gunakan هَذِهِ/تِلْكَ.",
        audioWord: "",
        category: "Benda • Rumah",
        examples: [
          {
            ar: "هَذِهِ طَاوِلَةٌ",
            translation: "Ini adalah meja",
            grammarNote: "هَذِهِ kata tunjuk dekat muannats selaras dengan طَاوِلَةٌ yang berakhiran ة.",
            analysis: "هَذِهِ kata tunjuk dekat muannats selaras dengan طَاوِلَةٌ yang berakhiran ة."
          },
          {
            ar: "الطَّاوِلَةُ كَبِيرَةٌ",
            translation: "Meja itu besar",
            grammarNote: "الطَّاوِلَةُ mubtada muannats, maka khabarnya كَبِيرَةٌ wajib muannats dengan ta marbuthah.",
            analysis: "الطَّاوِلَةُ mubtada muannats, maka khabarnya كَبِيرَةٌ wajib muannats dengan ta marbuthah."
          },
          {
            ar: "الطَّعَامُ عَلَى الطَّاوِلَةِ",
            translation: "Makanan itu di atas meja",
            grammarNote: "عَلَى adalah kata depan jar, menyebabkan kata الطَّاوِلَةِ berharakat akhir kasrah.",
            analysis: "عَلَى adalah kata depan jar, menyebabkan kata الطَّاوِلَةِ berharakat akhir kasrah."
          },
          {
            ar: "هَذِهِ طَاوِلَةُ الطَّعَامِ",
            translation: "Ini adalah meja makan",
            grammarNote: "Idhafah: طَاوِلَةُ sebagai mudhaf (tanpa tanwin) dan الطَّعَامِ sebagai mudhaf ilaih (kasrah).",
            analysis: "Idhafah: طَاوِلَةُ sebagai mudhaf (tanpa tanwin) dan الطَّعَامِ sebagai mudhaf ilaih (kasrah)."
          },
          {
            ar: "الطَّاوِلَةُ نَظِيفَةٌ",
            translation: "Meja itu bersih",
            grammarNote: "نَظِيفَةٌ khabar muannats berharakat dhammah tanwin selaras dengan mubtada الطَّاوِلَةُ.",
            analysis: "نَظِيفَةٌ khabar muannats berharakat dhammah tanwin selaras dengan mubtada الطَّاوِلَةُ."
          },
          {
            ar: "أَجْلِسُ حَوْلَ الطَّاوِلَةِ",
            translation: "Saya duduk di sekeliling meja",
            grammarNote: "حَوْلَ adalah zharaf makan (sekeliling). الطَّاوِلَةِ majrur kasrah sebagai mudhaf ilaih.",
            analysis: "حَوْلَ adalah zharaf makan (sekeliling). الطَّاوِلَةِ majrur kasrah sebagai mudhaf ilaih."
          },
          {
            ar: "تِلْكَ طَاوِلَةٌ جَمِيلَةٌ",
            translation: "Itu adalah meja yang indah",
            grammarNote: "تِلْكَ kata tunjuk jauh muannats. جَمِيلَةٌ sifat muannats yang menyelaraskan gender benda.",
            analysis: "تِلْكَ kata tunjuk jauh muannats. جَمِيلَةٌ sifat muannats yang menyelaraskan gender benda."
          },
          {
            ar: "أَضَعُ الْكِتَابَ عَلَى الطَّاوِلَةِ",
            translation: "Saya meletakkan buku di atas meja",
            grammarNote: "الْكِتَابَ objek berharakat fathah. عَلَى الطَّاوِلَةِ keterangan tempat jar-majrur.",
            analysis: "الْكِتَابَ objek berharakat fathah. عَلَى الطَّاوِلَةِ keterangan tempat jar-majrur."
          },
          {
            ar: "هَذِهِ طَاوِلَتِي",
            translation: "Ini adalah mejaku",
            grammarNote: "طَاوِلَتِي terdiri dari طَاوِلَةٌ dan ya mutakallim. Perhatikan ta marbuthah berubah menjadi ta biasa.",
            analysis: "طَاوِلَتِي terdiri dari طَاوِلَةٌ dan ya mutakallim. Perhatikan ta marbuthah berubah menjadi ta biasa."
          },
          {
            ar: "أَشْتَرِي طَاوِلَةً جَدِيدَةً",
            translation: "Saya membeli meja baru",
            grammarNote: "طَاوِلَةً objek berharakat fathah tanwin. جَدِيدَةً sifat muannats yang menyelaraskan harakat objek.",
            analysis: "طَاوِلَةً objek berharakat fathah tanwin. جَدِيدَةً sifat muannats yang menyelaraskan harakat objek."
          }
        ]
      },
      {
        id: "l1_1_c10",
        wordAr: "مِصْبَاحٌ",
        translation: "Lampu",
        description: "Kata benda MUDZAKKAR (maskulin) — tidak ada akhiran ta marbuthah (ة). Gunakan kata tunjuk dekat هَذَا atau jauh ذَلِكَ.",
        audioWord: "",
        category: "Benda • Rumah",
        examples: [
          {
            ar: "هَذَا مِصْبَاحٌ",
            translation: "Ini adalah lampu",
            grammarNote: "هَذَا kata tunjuk mudzakkar dekat, sesuai untuk مِصْبَاحٌ yang tidak memiliki ة.",
            analysis: "هَذَا kata tunjuk mudzakkar dekat, sesuai untuk مِصْبَاحٌ yang tidak memiliki ة."
          },
          {
            ar: "الْمِصْبَاحُ جَمِيلٌ",
            translation: "Lampu itu indah",
            grammarNote: "الْمِصْبَاحُ mubtada mudzakkar. جَمِيلٌ khabar mudzakkar berharakat dhammah tanwin.",
            analysis: "الْمِصْبَاحُ mubtada mudzakkar. جَمِيلٌ khabar mudzakkar berharakat dhammah tanwin."
          },
          {
            ar: "الْمِصْبَاحُ مُضِيءٌ",
            translation: "Lampu itu terang",
            grammarNote: "الْمِصْبَاحُ mubtada. مُضِيءٌ khabar mudzakkar yang berarti bersinar atau terang.",
            analysis: "الْمِصْبَاحُ mubtada. مُضِيءٌ khabar mudzakkar yang berarti bersinar atau terang."
          },
          {
            ar: "هَذَا مِصْبَاحُ الْغُرْفَةِ",
            translation: "Ini adalah lampu kamar",
            grammarNote: "Susunan idhafah: مِصْبَاحُ (mudhaf, dhammah) dan الْغُرْفَةِ (mudhaf ilaih, kasrah).",
            analysis: "Susunan idhafah: مِصْبَاحُ (mudhaf, dhammah) dan الْغُرْفَةِ (mudhaf ilaih, kasrah)."
          },
          {
            ar: "أُشْعِلُ الْمِصْبَاحَ",
            translation: "Saya menyalakan lampu",
            grammarNote: "الْمِصْبَاحَ berposisi sebagai objek (maf'ul bih) sehingga berharakat fathah di akhirnya.",
            analysis: "الْمِصْبَاحَ berposisi sebagai objek (maf'ul bih) sehingga berharakat fathah di akhirnya."
          },
          {
            ar: "الْمِصْبَاحُ عَلَى الْمَكْتَبِ",
            translation: "Lampu itu di atas meja",
            grammarNote: "عَلَى الْمَكْتَبِ merupakan keterangan tempat jar-majrur yang menjelaskan posisi lampu.",
            analysis: "عَلَى الْمَكْتَبِ merupakan keterangan tempat jar-majrur yang menjelaskan posisi lampu."
          },
          {
            ar: "أُطْفِئُ الْمِصْبَاحَ فِي اللَّيْلِ",
            translation: "Saya mematikan lampu di malam hari",
            grammarNote: "الْمِصْبَاحَ objek berharakat fathah. فِي اللَّيْلِ keterangan waktu majrur.",
            analysis: "الْمِصْبَاحَ objek berharakat fathah. فِي اللَّيْلِ keterangan waktu majrur."
          },
          {
            ar: "ذَلِكَ مِصْبَاحٌ قَدِيمٌ",
            translation: "Itu adalah lampu tua/lama",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. قَدِيمٌ sifat mudzakkar mengikuti مِصْبَاحٌ.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. قَدِيمٌ sifat mudzakkar mengikuti مِصْبَاحٌ."
          },
          {
            ar: "هَذَا مِصْبَاحِي",
            translation: "Ini adalah lampuku",
            grammarNote: "مِصْبَاحِي gabungan kata مِصْبَاحٌ dan ya mutakallim sebagai tanda kepemilikan.",
            analysis: "مِصْبَاحِي gabungan kata مِصْبَاحٌ dan ya mutakallim sebagai tanda kepemilikan."
          },
          {
            ar: "نُورُ الْمِصْبَاحِ قَوِيٌّ",
            translation: "Cahaya lampu itu kuat",
            grammarNote: "نُورُ mubtada. الْمِصْبَاحِ mudhaf ilaih (kasrah). قَوِيٌّ khabar mudzakkar.",
            analysis: "نُورُ mubtada. الْمِصْبَاحِ mudhaf ilaih (kasrah). قَوِيٌّ khabar mudzakkar."
          }
        ]
      },
      {
        id: "l1_1_c11",
        wordAr: "كِتَابٌ",
        translation: "Buku",
        description: "Kata benda MUDZAKKAR (maskulin) — tidak ada akhiran ta marbuthah (ة). Sangat penting sebagai dasar ilmu belajar. Gunakan هَذَا/ذَلِكَ.",
        audioWord: "",
        category: "Benda • Sekolah",
        examples: [
          {
            ar: "هَذَا كِتَابٌ",
            translation: "Ini adalah buku",
            grammarNote: "Gunakan هَذَا karena كِتَابٌ tidak memiliki ta marbuthah ة (mudzakkar).",
            analysis: "Gunakan هَذَا karena كِتَابٌ tidak memiliki ta marbuthah ة (mudzakkar)."
          },
          {
            ar: "الْكِتَابُ جَدِيدٌ",
            translation: "Buku itu baru",
            grammarNote: "الْكِتَابُ (dhammah, pakai AL) berfungsi sebagai mubtada. جَدِيدٌ khabar mudzakkar.",
            analysis: "الْكِتَابُ (dhammah, pakai AL) berfungsi sebagai mubtada. جَدِيدٌ khabar mudzakkar."
          },
          {
            ar: "أَقْرَأُ كِتَابًا",
            translation: "Saya membaca buku",
            grammarNote: "كِتَابًا berposisi sebagai maf'ul bih (objek) sehingga harakat akhirnya fathatain.",
            analysis: "كِتَابًا berposisi sebagai maf'ul bih (objek) sehingga harakat akhirnya fathatain."
          },
          {
            ar: "هَذَا كِتَابُ اللَّهِ",
            translation: "Ini adalah kitab Allah",
            grammarNote: "Kombinasi idhafah: كِتَابُ sebagai mudhaf dan اللَّهِ sebagai mudhaf ilaih yang majrur.",
            analysis: "Kombinasi idhafah: كِتَابُ sebagai mudhaf dan اللَّهِ sebagai mudhaf ilaih yang majrur."
          },
          {
            ar: "الْقَلَمُ فِي الْكِتَابِ",
            translation: "Pena itu di dalam buku",
            grammarNote: "الْكِتَابِ berharakat kasrah karena terletak setelah huruf jar فِي.",
            analysis: "الْكِتَابِ berharakat kasrah karena terletak setelah huruf jar فِي."
          },
          {
            ar: "ذَلِكَ كِتَابٌ مُفِيدٌ",
            translation: "Itu adalah buku yang bermanfaat",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. مُفِيدٌ sifat yang mengikuti kata benda mudzakkar كِتَابٌ.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. مُفِيدٌ sifat yang mengikuti kata benda mudzakkar كِتَابٌ."
          },
          {
            ar: "هَذَا كِتَابِي الْجَمِيلُ",
            translation: "Ini adalah bukuku yang indah",
            grammarNote: "كِتَابِي adalah gabungan كِتَابٌ dan ya mutakallim. الْجَمِيلُ sifatnya (dhammah).",
            analysis: "كِتَابِي adalah gabungan كِتَابٌ dan ya mutakallim. الْجَمِيلُ sifatnya (dhammah)."
          },
          {
            ar: "أَبْحَثُ عَنِ الْكِتَابِ",
            translation: "Saya mencari buku itu",
            grammarNote: "عَنِ adalah huruf jar, membuat kata الْكِتَابِ berakhiran kasrah.",
            analysis: "عَنِ adalah huruf jar, membuat kata الْكِتَابِ berakhiran kasrah."
          },
          {
            ar: "أَشْتَرِي كِتَابًا جَدِيدًا",
            translation: "Saya membeli buku baru",
            grammarNote: "كِتَابًا objek berharakat fathatain. جَدِيدًا sifat yang berharakat fathatain mengikuti objek.",
            analysis: "كِتَابًا objek berharakat fathatain. جَدِيدًا sifat yang berharakat fathatain mengikuti objek."
          },
          {
            ar: "الْكِتَابُ عَلَى الْمَكْتَبِ",
            translation: "Buku itu di atas meja",
            grammarNote: "عَلَى الْمَكْتَبِ merupakan keterangan tempat jar-majrur yang menerangkan letak buku.",
            analysis: "عَلَى الْمَكْتَبِ merupakan keterangan tempat jar-majrur yang menerangkan letak buku."
          }
        ]
      },
      {
        id: "l1_1_c12",
        wordAr: "قَلَمٌ",
        translation: "Pena",
        description: "Kata benda MUDZAKKAR (maskulin) — tidak ada akhiran ta marbuthah (ة). Merupakan alat utama dalam menulis. Gunakan kata tunjuk dekat هَذَا atau jauh ذَلِكَ.",
        audioWord: "",
        category: "Benda • Sekolah",
        examples: [
          {
            ar: "هَذَا قَلَمٌ",
            translation: "Ini adalah pena",
            grammarNote: "هَذَا kata tunjuk dekat mudzakkar yang selaras dengan kata قَلَمٌ.",
            analysis: "هَذَا kata tunjuk dekat mudzakkar yang selaras dengan kata قَلَمٌ."
          },
          {
            ar: "الْقَلَمُ أَزْرَقُ",
            translation: "Pena itu berwarna biru",
            grammarNote: "الْقَلَمُ mubtada (dhammah). أَزْرَقُ adalah khabar berupa isim ghairu munsharif (tidak menerima tanwin).",
            analysis: "الْقَلَمُ mubtada (dhammah). أَزْرَقُ adalah khabar berupa isim ghairu munsharif (tidak menerima tanwin)."
          },
          {
            ar: "أَكْتُبُ بِالْقَلَمِ",
            translation: "Saya menulis dengan pena",
            grammarNote: "بِ adalah huruf jar (dengan), membuat kata الْقَلَمِ majrur dengan kasrah.",
            analysis: "بِ adalah huruf jar (dengan), membuat kata الْقَلَمِ majrur dengan kasrah."
          },
          {
            ar: "هَذَا قَلَمُ الْأُسْتَاذِ",
            translation: "Ini adalah pena guru",
            grammarNote: "Susunan idhafah: قَلَمُ sebagai mudhaf (tanpa tanwin) dan الْأُسْتَاذِ sebagai mudhaf ilaih (kasrah).",
            analysis: "Susunan idhafah: قَلَمُ sebagai mudhaf (tanpa tanwin) dan الْأُسْتَاذِ sebagai mudhaf ilaih (kasrah)."
          },
          {
            ar: "أَيْنَ الْقَلَمُ؟",
            translation: "Di mana pena itu?",
            grammarNote: "أَيْنَ adalah kata tanya tempat, الْقَلَمُ di sini berstatus mubtada muakhkhar (dhammah).",
            analysis: "أَيْنَ adalah kata tanya tempat, الْقَلَمُ di sini berstatus mubtada muakhkhar (dhammah)."
          },
          {
            ar: "الْقَلَمُ عَلَى الْكِتَابِ",
            translation: "Pena itu di atas buku",
            grammarNote: "عَلَى الْكِتَابِ susunan jar-majrur berfungsi sebagai keterangan posisi pena.",
            analysis: "عَلَى الْكِتَابِ susunan jar-majrur berfungsi sebagai keterangan posisi pena."
          },
          {
            ar: "ذَلِكَ قَلَمٌ جَمِيلٌ",
            translation: "Itu adalah pena yang indah",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. جَمِيلٌ sifat mudzakkar mengikuti قَلَمٌ.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. جَمِيلٌ sifat mudzakkar mengikuti قَلَمٌ."
          },
          {
            ar: "أَشْتَرِي قَلَمًا جَدِيدًا",
            translation: "Saya membeli pena baru",
            grammarNote: "قَلَمًا objek (maf'ul bih) fathatain. جَدِيدًا sifat yang setara fathatain mengikuti objek.",
            analysis: "قَلَمًا objek (maf'ul bih) fathatain. جَدِيدًا sifat yang setara fathatain mengikuti objek."
          },
          {
            ar: "هَذَا قَلَمِي",
            translation: "Ini adalah penaku",
            grammarNote: "قَلَمِي terdiri dari kata قَلَمٌ dan ya mutakallim (saya) sebagai penunjuk kepemilikan.",
            analysis: "قَلَمِي terdiri dari kata قَلَمٌ dan ya mutakallim (saya) sebagai penunjuk kepemilikan."
          },
          {
            ar: "الْقَلَمُ فِي الْحَقِيبَةِ",
            translation: "Pena itu di dalam tas",
            grammarNote: "الْحَقِيبَةِ berharakat kasrah karena didahului oleh huruf jar فِي.",
            analysis: "الْحَقِيبَةِ berharakat kasrah karena didahului oleh huruf jar فِي."
          }
        ]
      },
      {
        id: "l1_1_c13",
        wordAr: "دَفْتَرٌ",
        translation: "Buku Tulis",
        description: "Kata benda MUDZAKKAR (maskulin) — tidak ada akhiran ta marbuthah (ة). Digunakan untuk mencatat materi pelajaran. Gunakan هَذَا/ذَلِكَ.",
        audioWord: "",
        category: "Benda • Sekolah",
        examples: [
          {
            ar: "هَذَا دَفْتَرٌ",
            translation: "Ini adalah buku tulis",
            grammarNote: "هَذَا kata tunjuk dekat mudzakkar, sesuai untuk دَفْتَرٌ.",
            analysis: "هَذَا kata tunjuk dekat mudzakkar, sesuai untuk دَفْتَرٌ."
          },
          {
            ar: "الدَّفْتَرُ جَمِيلٌ",
            translation: "Buku tulis itu bagus",
            grammarNote: "الدَّفْتَرُ mubtada mudzakkar. جَمِيلٌ khabar mudzakkar berharakat dhammah tanwin.",
            analysis: "الدَّفْتَرُ mubtada mudzakkar. جَمِيلٌ khabar mudzakkar berharakat dhammah tanwin."
          },
          {
            ar: "أَكْتُبُ فِي الدَّفْتَرِ",
            translation: "Saya menulis di buku tulis",
            grammarNote: "فِي adalah huruf jar, memaksa kata الدَّفْتَرِ berharakat akhir kasrah.",
            analysis: "فِي adalah huruf jar, memaksa kata الدَّفْتَرِ berharakat akhir kasrah."
          },
          {
            ar: "هَذَا دَفْتَرُ الرِّيَاضِيَّاتِ",
            translation: "Ini adalah buku tulis matematika",
            grammarNote: "Idhafah: دَفْتَرُ sebagai mudhaf dan الرِّيَاضِيَّاتِ sebagai mudhaf ilaih yang majrur dengan kasrah.",
            analysis: "Idhafah: دَفْتَرُ sebagai mudhaf dan الرِّيَاضِيَّاتِ sebagai mudhaf ilaih yang majrur dengan kasrah."
          },
          {
            ar: "الدَّفْتَرُ عَلَى الطَّاوِلَةِ",
            translation: "Buku tulis itu di atas meja",
            grammarNote: "Keterangan tempat berupa preposisi عَلَى diikuti kata الطَّاوِلَةِ yang kasrah.",
            analysis: "Keterangan tempat berupa preposisi عَلَى diikuti kata الطَّاوِلَةِ yang kasrah."
          },
          {
            ar: "ذَلِكَ دَفْتَرٌ كَبِيرٌ",
            translation: "Itu adalah buku tulis yang besar",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. كَبِيرٌ kata sifat mudzakkar mengikuti دَفْتَرٌ.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. كَبِيرٌ kata sifat mudzakkar mengikuti دَفْتَرٌ."
          },
          {
            ar: "أَشْتَرِي دَفْتَرًا جَدِيدًا",
            translation: "Saya membeli buku tulis baru",
            grammarNote: "دَفْتَرًا objek (maf'ul bih) fathatain. جَدِيدًا sifat yang setara fathatain mengikuti objek.",
            analysis: "دَفْتَرًا objek (maf'ul bih) fathatain. جَدِيدًا sifat yang setara fathatain mengikuti objek."
          },
          {
            ar: "هَذَا دَفْتَرِي",
            translation: "Ini adalah buku tulisku",
            grammarNote: "دَفْتَرِي gabungan kata دَفْتَرٌ dan ya mutakallim kepemilikan saya.",
            analysis: "دَفْتَرِي gabungan kata دَفْتَرٌ dan ya mutakallim kepemilikan saya."
          },
          {
            ar: "أَفْتَحُ الدَّفْتَرَ",
            translation: "Saya membuka buku tulis itu",
            grammarNote: "الدَّفْتَرَ objek langsung (maf'ul bih) berharakat fathah di akhirnya.",
            analysis: "الدَّفْتَرَ objek langsung (maf'ul bih) berharakat fathah di akhirnya."
          },
          {
            ar: "الدَّفْتَرُ فِي الْحَقِيبَةِ",
            translation: "Buku tulis itu di dalam tas",
            grammarNote: "فِي الْحَقِيبَةِ susunan jar-majrur sebagai keterangan letak buku tulis.",
            analysis: "فِي الْحَقِيبَةِ susunan jar-majrur sebagai keterangan letak buku tulis."
          }
        ]
      },
      {
        id: "l1_1_c14",
        wordAr: "مَدْرَسَةٌ",
        translation: "Sekolah",
        description: "Kata benda MUANNATS (feminin) — memiliki akhiran ta marbuthah (ة). Tempat menuntut ilmu. Gunakan kata tunjuk dekat هَذِهِ atau jauh تِلْكَ.",
        audioWord: "",
        category: "Benda • Sekolah",
        examples: [
          {
            ar: "هَذِهِ مَدْرَسَةٌ",
            translation: "Ini adalah sekolah",
            grammarNote: "Gunakan هَذِهِ karena مَدْرَسَةٌ bergender muannats (berakhiran ta marbuthah ة).",
            analysis: "Gunakan هَذِهِ karena مَدْرَسَةٌ bergender muannats (berakhiran ta marbuthah ة)."
          },
          {
            ar: "الْمَدْرَسَةُ كَبِيرَةٌ",
            translation: "Sekolah itu besar",
            grammarNote: "الْمَدْرَسَةُ mubtada muannats, maka khabarnya كَبِيرَةٌ harus muannats dengan ة.",
            analysis: "الْمَدْرَسَةُ mubtada muannats, maka khabarnya كَبِيرَةٌ harus muannats dengan ة."
          },
          {
            ar: "أَذْهَبُ إِلَى الْمَدْرَسَةِ",
            translation: "Saya pergi ke sekolah",
            grammarNote: "الْمَدْرَسَةِ berharakat kasrah karena didahului oleh kata depan (huruf jar) إِلَى.",
            analysis: "الْمَدْرَسَةِ berharakat kasrah karena didahului oleh kata depan (huruf jar) إِلَى."
          },
          {
            ar: "تِلْكَ مَدْرَسَةٌ جَمِيلَةٌ",
            translation: "Itu adalah sekolah yang indah",
            grammarNote: "تِلْكَ kata tunjuk jauh muannats. جَمِيلَةٌ sifat muannats yang mengikuti kata benda مَدْرَسَةٌ.",
            analysis: "تِلْكَ kata tunjuk jauh muannats. جَمِيلَةٌ sifat muannats yang mengikuti kata benda مَدْرَسَةٌ."
          },
          {
            ar: "الْمَدْرَسَةُ قَرِيبَةٌ مِنَ الْبَيْتِ",
            translation: "Sekolah itu dekat dari rumah",
            grammarNote: "قَرِيبَةٌ khabar muannats karena menyesuaikan subjek (الْمَدْرَسَةُ) yang muannats.",
            analysis: "قَرِيبَةٌ khabar muannats karena menyesuaikan subjek (الْمَدْرَسَةُ) yang muannats."
          },
          {
            ar: "أَنَا فِي الْمَدْرَسَةِ",
            translation: "Saya berada di sekolah",
            grammarNote: "فِي الْمَدْرَسَةِ susunan preposisional yang terdiri dari huruf jar فِي dan isim majrur.",
            analysis: "فِي الْمَدْرَسَةِ susunan preposisional yang terdiri dari huruf jar فِي dan isim majrur."
          },
          {
            ar: "هَذِهِ مَدْرَسَتِي",
            translation: "Ini adalah sekolahku",
            grammarNote: "مَدْرَسَتِي terdiri dari مَدْرَسَةٌ dan ya mutakallim (saya). Ta marbuthah berubah bentuk menjadi ta biasa (ت).",
            analysis: "مَدْرَسَتِي terdiri dari مَدْرَسَةٌ dan ya mutakallim (saya). Ta marbuthah berubah bentuk menjadi ta biasa (ت)."
          },
          {
            ar: "الْمَدْرَسَةُ نَظِيفَةٌ وَوَاسِعَةٌ",
            translation: "Sekolah itu bersih dan luas",
            grammarNote: "Dua sifat muannats (نَظِيفَةٌ dan وَاسِعَةٌ) dihubungkan dengan huruf athaf وَ.",
            analysis: "Dua sifat muannats (نَظِيفَةٌ dan وَاسِعَةٌ) dihubungkan dengan huruf athaf وَ."
          },
          {
            ar: "يَدْخُلُ الطَّالِبُ إِلَى الْمَدْرَسَةِ",
            translation: "Siswa itu masuk ke dalam sekolah",
            grammarNote: "إلَى الْمَدْرَسَةِ menunjukkan arah tujuan masuk, diakhiri dengan harakat kasrah.",
            analysis: "إلَى الْمَدْرَسَةِ menunjukkan arah tujuan masuk, diakhiri dengan harakat kasrah."
          },
          {
            ar: "الْمَدْرَسَةُ مَفْتُوحَةٌ الْيَوْمَ",
            translation: "Sekolah itu buka hari ini",
            grammarNote: "مَفْتُوحَةٌ khabar muannats. الْيَوْمَ adalah keterangan waktu (zharaf zaman) berharakat fathah.",
            analysis: "مَفْتُوحَةٌ khabar muannats. الْيَوْمَ adalah keterangan waktu (zharaf zaman) berharakat fathah."
          }
        ]
      },
      {
        id: "l1_1_c15",
        wordAr: "فَصْلٌ",
        translation: "Kelas",
        description: "Kata benda MUDZAKKAR (maskulin) — tidak ada akhiran ta marbuthah (ة). Merujuk pada ruangan tempat belajar-mengajar. Gunakan هَذَا/ذَلِكَ.",
        audioWord: "",
        category: "Benda • Sekolah",
        examples: [
          {
            ar: "هَذَا فَصْلٌ",
            translation: "Ini adalah kelas",
            grammarNote: "Gunakan هَذَا karena kata فَصْلٌ bergender mudzakkar (tanpa ة).",
            analysis: "Gunakan هَذَا karena kata فَصْلٌ bergender mudzakkar (tanpa ة)."
          },
          {
            ar: "الْفَصْلُ وَاسِعٌ",
            translation: "Kelas itu luas",
            grammarNote: "الْفَصْلُ mubtada mudzakkar. وَاسِعٌ khabar mudzakkar berharakat dhammah tanwin.",
            analysis: "الْفَصْلُ mubtada mudzakkar. وَاسِعٌ khabar mudzakkar berharakat dhammah tanwin."
          },
          {
            ar: "أَنَا فِي الْفَصْلِ",
            translation: "Saya berada di dalam kelas",
            grammarNote: "الْفَصْلِ berharakat kasrah karena berada setelah preposisi jar فِي.",
            analysis: "الْفَصْلِ berharakat kasrah karena berada setelah preposisi jar فِي."
          },
          {
            ar: "هَذَا فَصْلُ اللُّغَةِ الْعَرَبِيَّةِ",
            translation: "Ini adalah kelas bahasa Arab",
            grammarNote: "Idhafah majemuk: فَصْلُ (mudhaf), اللُّغَةِ (mudhaf ilaih), الْعَرَبِيَّةِ (sifat dari lLanguage, kasrah).",
            analysis: "Idhafah majemuk: فَصْلُ (mudhaf), اللُّغَةِ (mudhaf ilaih), الْعَرَبِيَّةِ (sifat dari lLanguage, kasrah)."
          },
          {
            ar: "الْفَصْلُ نَظِيفٌ جِدًّا",
            translation: "Kelas itu sangat bersih",
            grammarNote: "الْفَصْلُ mubtada. نَظِيفٌ khabar mudzakkar. جِدًّا kata penguat arti (sangat).",
            analysis: "الْفَصْلُ mubtada. نَظِيفٌ khabar mudzakkar. جِدًّا kata penguat arti (sangat)."
          },
          {
            ar: "ذَلِكَ فَصْلٌ صَغِيرٌ",
            translation: "Itu adalah kelas yang kecil",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. صَغِيرٌ sifat mudzakkar mengikuti فَصْلٌ.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. صَغِيرٌ sifat mudzakkar mengikuti فَصْلٌ."
          },
          {
            ar: "الْأُسْتَاذُ فِي الْفَصْلِ",
            translation: "Guru itu ada di dalam kelas",
            grammarNote: "الْأُسْتَاذُ mubtada (dhammah). فِي الْفَصْلِ khabar berupa syibhul jumlah (jar-majrur).",
            analysis: "الْأُسْتَاذُ mubtada (dhammah). فِي الْفَصْلِ khabar berupa syibhul jumlah (jar-majrur)."
          },
          {
            ar: "أَدْخُلُ إِلَى الْفَصْلِ",
            translation: "Saya masuk ke dalam kelas",
            grammarNote: "إِلَى adalah huruf jar, membuat kata الْفَصْلِ berakhiran kasrah.",
            analysis: "إِلَى adalah huruf jar, membuat kata الْفَصْلِ berakhiran kasrah."
          },
          {
            ar: "هَذَا فَصْلِي",
            translation: "Ini adalah kelas saya",
            grammarNote: "فَصْلِي gabungan kata فَصْلٌ dan ya mutakallim kepemilikan orang pertama.",
            analysis: "فَصْلِي gabungan kata فَصْلٌ dan ya mutakallim kepemilikan orang pertama."
          },
          {
            ar: "أُنَظِّفُ الْفَصْلَ مَعَ أَصْدِقَائِي",
            translation: "Saya membersihkan kelas bersama teman-temanku",
            grammarNote: "الْفَصْلَ objek (maf'ul bih) berharakat fathah. مَعَ adalah zharaf kebersamaan.",
            analysis: "الْفَصْلَ objek (maf'ul bih) berharakat fathah. مَعَ adalah zharaf kebersamaan."
          }
        ]
      },
      {
        id: "l1_1_c16",
        wordAr: "حَقِيبَةٌ",
        translation: "Tas",
        description: "Kata benda MUANNATS (feminin) — ditandai dengan ta marbuthah (ة) di akhir kata. Berfungsi untuk membawa buku dan peralatan. Gunakan هَذِهِ/تِلْكَ.",
        audioWord: "",
        category: "Benda • Sekolah",
        examples: [
          {
            ar: "هَذِهِ حَقِيبَةٌ",
            translation: "Ini adalah tas",
            grammarNote: "هَذِهِ kata tunjuk dekat muannats, sesuai untuk حَقِيبَةٌ yang memiliki ta marbuthah (ة).",
            analysis: "هَذِهِ kata tunjuk dekat muannats, sesuai untuk حَقِيبَةٌ yang memiliki ta marbuthah (ة)."
          },
          {
            ar: "الْحَقِيبَةُ كَبِيرَةٌ",
            translation: "Tas itu besar",
            grammarNote: "الْحَقِيبَةُ mubtada muannats. كَبِيرَةٌ khabar muannats berharakat dhammah tanwin.",
            analysis: "الْحَقِيبَةُ mubtada muannats. كَبِيرَةٌ khabar muannats berharakat dhammah tanwin."
          },
          {
            ar: "الْكِتَابُ فِي الْحَقِيبَةِ",
            translation: "Buku itu di dalam tas",
            grammarNote: "الْحَقِيبَةِ berharakat kasrah karena berada setelah preposisi jar فِي.",
            analysis: "الْحَقِيبَةِ berharakat kasrah karena berada setelah preposisi jar فِي."
          },
          {
            ar: "هَذِهِ حَقِيبَةُ الطَّالِبِ",
            translation: "Ini adalah tas siswa",
            grammarNote: "Idhafah: حَقِيبَةُ sebagai mudhaf (tanpa tanwin) dan الطَّالِبِ sebagai mudhaf ilaih (kasrah).",
            analysis: "Idhafah: حَقِيبَةُ sebagai mudhaf (tanpa tanwin) dan الطَّالِبِ sebagai mudhaf ilaih (kasrah)."
          },
          {
            ar: "الْحَقِيبَةُ جَمِيلَةٌ جِدًّا",
            translation: "Tas itu sangat indah/bagus",
            grammarNote: "جَمِيلَةٌ khabar muannats yang menerangkan subjek الْحَقِيبَةُ.",
            analysis: "جَمِيلَةٌ khabar muannats yang menerangkan subjek الْحَقِيبَةُ."
          },
          {
            ar: "أَحْمِلُ الْحَقِيبَةَ",
            translation: "Saya membawa tas itu",
            grammarNote: "الْحَقِيبَةَ objek langsung (maf'ul bih) sehingga berharakat fathah di akhirnya.",
            analysis: "الْحَقِيبَةَ objek langsung (maf'ul bih) sehingga berharakat fathah di akhirnya."
          },
          {
            ar: "تِلْكَ حَقِيبَةٌ جَدِيدَةٌ",
            translation: "Itu adalah tas baru",
            grammarNote: "تِلْكَ kata tunjuk jauh muannats. جَدِيدَةٌ sifat muannats yang mengikuti gender kata benda yang disifatini.",
            analysis: "تِلْكَ kata tunjuk jauh muannats. جَدِيدَةٌ sifat muannats yang mengikuti gender kata benda yang disifatini."
          },
          {
            ar: "أَضَعُ الْقَلَمَ فِي الْحَقِيبَةِ",
            translation: "Saya meletakkan pena di dalam tas",
            grammarNote: "فِي الْحَقِيبَةِ keterangan tempat jar-majrur yang membuat akhir kata kasrah.",
            analysis: "فِي الْحَقِيبَةِ keterangan tempat jar-majrur yang membuat akhir kata kasrah."
          },
          {
            ar: "هَذِهِ حَقِيبَتِي",
            translation: "Ini adalah tasku",
            grammarNote: "حَقِيبَتِي terdiri dari حَقِيبَةٌ dan ya mutakallim. Ta marbuthah berubah menjadi ta biasa.",
            analysis: "حَقِيبَتِي terdiri dari حَقِيبَةٌ dan ya mutakallim. Ta marbuthah berubah menjadi ta biasa."
          },
          {
            ar: "أَشْتَرِي حَقِيبَةً صَغِيرَةً",
            translation: "Saya membeli tas kecil",
            grammarNote: "حَقِيبَةً objek fathatain. صَغِيرَةً sifat muannats mengikuti harakat dan gender objek.",
            analysis: "حَقِيبَةً objek fathatain. صَغِيرَةً sifat muannats mengikuti harakat dan gender objek."
          }
        ]
      },
      {
        id: "l1_1_c17",
        wordAr: "أُسْتَاذٌ",
        translation: "Guru Laki-laki",
        description: "Kata benda MUDZAKKAR (maskulin) — merujuk pada pendidik laki-laki secara biologis dan gramatikal. Gunakan kata tunjuk dekat هَذَا atau jauh ذَلِكَ.",
        audioWord: "",
        category: "Orang • Sekolah",
        examples: [
          {
            ar: "هَذَا أُسْتَاذٌ",
            translation: "Ini adalah seorang guru laki-laki",
            grammarNote: "Gunakan هَذَا karena أُسْتَاذٌ adalah orang laki-laki secara biologis dan gramatikal.",
            analysis: "Gunakan هَذَا karena أُسْتَاذٌ adalah orang laki-laki secara biologis dan gramatikal."
          },
          {
            ar: "الْأُسْتَاذُ مَاهِرٌ",
            translation: "Guru laki-laki itu terampil / mahir",
            grammarNote: "الْأُسْتَاذُ mubtada mudzakkar. مَاهِرٌ khabar mudzakkar berharakat dhammah tanwin.",
            analysis: "الْأُسْتَاذُ mubtada mudzakkar. مَاهِرٌ khabar mudzakkar berharakat dhammah tanwin."
          },
          {
            ar: "أَسْتَمِعُ إِلَى الْأُسْتَاذِ",
            translation: "Saya mendengarkan guru laki-laki itu",
            grammarNote: "الْأُسْتَاذِ berharakat kasrah karena berada setelah preposisi jar (kata depan) إِلَى.",
            analysis: "الْأُسْتَاذِ berharakat kasrah karena berada setelah preposisi jar (kata depan) إِلَى."
          },
          {
            ar: "هَذَا كِتَابُ الْأُسْتَاذِ",
            translation: "Ini adalah buku guru laki-laki itu",
            grammarNote: "Kombinasi idhafah: كِتَابُ sebagai mudhaf dan الْأُسْتَاذِ sebagai mudhaf ilaih yang majrur.",
            analysis: "Kombinasi idhafah: كِتَابُ sebagai mudhaf dan الْأُسْتَاذِ sebagai mudhaf ilaih yang majrur."
          },
          {
            ar: "الْأُسْتَاذُ فِي الْفَصْلِ",
            translation: "Guru laki-laki itu berada di kelas",
            grammarNote: "فِي الْفَصْلِ merupakan keterangan tempat jar-majrur yang menerangkan keberadaan subjek.",
            analysis: "فِي الْفَصْلِ merupakan keterangan tempat jar-majrur yang menerangkan keberadaan subjek."
          },
          {
            ar: "ذَلِكَ أُسْتَاذٌ كَرِيمٌ",
            translation: "Itu adalah guru yang mulia/baik hati",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. كَرِيمٌ sifat mudzakkar mengikuti kata benda أُسْتَاذٌ.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. كَرِيمٌ sifat mudzakkar mengikuti kata benda أُسْتَاذٌ."
          },
          {
            ar: "هَذَا هُوَ أُسْتَاذِي",
            translation: "Ini adalah guruku",
            grammarNote: "أُسْتَاذِي terdiri dari kata أُسْتَاذٌ dan ya mutakallim kepemilikan orang pertama.",
            analysis: "أُسْتَاذِي terdiri dari kata أُسْتَاذٌ dan ya mutakallim kepemilikan orang pertama."
          },
          {
            ar: "يَشْرَحُ الْأُسْتَاذُ الدَّرْسَ",
            translation: "Guru laki-laki itu sedang menjelaskan pelajaran",
            grammarNote: "يَشْرَحُ kata kerja mudzakkar setara dengan pelaku subjek (الْأُسْتَاذُ) yang mudzakkar.",
            analysis: "يَشْرَحُ kata kerja mudzakkar setara dengan pelaku subjek (الْأُسْتَاذُ) yang mudzakkar."
          },
          {
            ar: "أُحِبُّ أُسْتَاذِي",
            translation: "Saya mencintai guruku",
            grammarNote: "أُسْتَاذِي objek langsung (maf'ul bih) dari kata kerja أُحِبُّ.",
            analysis: "أُسْتَاذِي objek langsung (maf'ul bih) dari kata kerja أُحِبُّ."
          },
          {
            ar: "السَّلَامُ عَلَيْكُمْ يَا أُسْتَاذُ",
            translation: "Semoga keselamatan tercurah kepadamu wahai ustadz",
            grammarNote: "يَا adalah huruf nida (panggilan), kata setelahnya أُسْتَاذُ dibaca dhammah tanpa tanwin.",
            analysis: "يَا adalah huruf nida (panggilan), kata setelahnya أُسْتَاذُ dibaca dhammah tanpa tanwin."
          }
        ]
      },
      {
        id: "l1_1_c18",
        wordAr: "أُسْتَاذَةٌ",
        translation: "Guru Perempuan",
        description: "Kata benda MUANNATS (feminin) — merujuk pada pendidik perempuan secara biologis dan gramatikal (memiliki ta marbuthah ة). Gunakan هَذِهِ/تِلْكَ.",
        audioWord: "",
        category: "Orang • Sekolah",
        examples: [
          {
            ar: "هَذِهِ أُسْتَاذَةٌ",
            translation: "Ini adalah seorang guru perempuan",
            grammarNote: "Gunakan هَذِهِ karena أُسْتَاذَةٌ berakhiran ta marbuthah (ة) dan berjenis kelamin perempuan.",
            analysis: "Gunakan هَذِهِ karena أُسْتَاذَةٌ berakhiran ta marbuthah (ة) dan berjenis kelamin perempuan."
          },
          {
            ar: "الْأُسْتَاذَةُ مَاهِرَةٌ",
            translation: "Guru perempuan itu terampil / mahir",
            grammarNote: "الْأُسْتَاذَةُ mubtada muannats, maka khabar مَاهِرَةٌ wajib muannats dengan akhiran ta marbuthah.",
            analysis: "الْأُسْتَاذَةُ mubtada muannats, maka khabar مَاهِرَةٌ wajib muannats dengan akhiran ta marbuthah."
          },
          {
            ar: "أَسْتَمِعُ إِلَى الْأُسْتَاذَةِ",
            translation: "Saya mendengarkan guru perempuan itu",
            grammarNote: "الْأُسْتَاذَةِ berharakat kasrah karena berada setelah preposisi jar إِلَى.",
            analysis: "الْأُسْتَاذَةِ berharakat kasrah karena berada setelah preposisi jar إِلَى."
          },
          {
            ar: "هَذَا كِتَابُ الْأُسْتَاذَةِ",
            translation: "Ini adalah buku guru perempuan itu",
            grammarNote: "Idhafah: كِتَابُ sebagai mudhaf dan الْأُسْتَاذَةِ sebagai mudhaf ilaih yang majrur (kasrah).",
            analysis: "Idhafah: كِتَابُ sebagai mudhaf dan الْأُسْتَاذَةِ sebagai mudhaf ilaih yang majrur (kasrah)."
          },
          {
            ar: "الْأُسْتَاذَةُ فِي الْفَصْلِ",
            translation: "Guru perempuan itu berada di kelas",
            grammarNote: "الْأُسْتَاذَةُ mubtada muannats. فِي الْفَصْلِ keterangan tempat jar-majrur.",
            analysis: "الْأُسْتَاذَةُ mubtada muannats. فِي الْفَصْلِ keterangan tempat jar-majrur."
          },
          {
            ar: "تِلْكَ أُسْتَاذَةٌ كَرِيمَةٌ",
            translation: "Itu adalah guru perempuan yang mulia",
            grammarNote: "تِلْكَ kata tunjuk jauh muannats. كَرِيمَةٌ sifat muannats mengikuti kata benda أُسْتَاذَةٌ.",
            analysis: "تِلْكَ kata tunjuk jauh muannats. كَرِيمَةٌ sifat muannats mengikuti kata benda أُسْتَاذَةٌ."
          },
          {
            ar: "هَذِهِ هِيَ أُسْتَاذَتِي",
            translation: "Ini adalah guruku (perempuan)",
            grammarNote: "أُسْتَاذَتِي terdiri dari أُسْتَاذَةٌ dan ya mutakallim. Ta marbuthah berubah menjadi ta biasa.",
            analysis: "أُسْتَاذَتِي terdiri dari أُسْتَاذَةٌ dan ya mutakallim. Ta marbuthah berubah menjadi ta biasa."
          },
          {
            ar: "تَشْرَحُ الْأُسْتَاذَةُ الدَّرْسَ",
            translation: "Guru perempuan itu sedang menjelaskan pelajaran",
            grammarNote: "Kata kerja تَشْرَحُ berawalan huruf ta karena subjek pelaku (الْأُسْتَاذَةُ) bergender muannats.",
            analysis: "Kata kerja تَشْرَحُ berawalan huruf ta karena subjek pelaku (الْأُسْتَاذَةُ) bergender muannats."
          },
          {
            ar: "أُسَاعِدُ أُسْتَاذَتِي",
            translation: "Saya membantu guruku (perempuan)",
            grammarNote: "أُسْتَاذَتِي berposisi sebagai objek langsung (maf'ul bih) dari kata kerja أُسَاعِدُ.",
            analysis: "أُسْتَاذَتِي berposisi sebagai objek langsung (maf'ul bih) dari kata kerja أُسَاعِدُ."
          },
          {
            ar: "السَّلَامُ عَلَيْكُمَا يَا أُسْتَاذَةُ",
            translation: "Semoga keselamatan tercurah kepadamu wahai ustadzah",
            grammarNote: "يَا adalah kata seru nida. أُسْتَاذَةُ dibaca dhammah tunggal tanpa tanwin.",
            analysis: "يَا adalah kata seru nida. أُسْتَاذَةُ dibaca dhammah tunggal tanpa tanwin."
          }
        ]
      },
      {
        id: "l1_1_c19",
        wordAr: "مَكْتَبَةٌ",
        translation: "Perpustakaan",
        description: "Kata benda MUANNATS (feminin) — ditandai oleh akhiran ta marbuthah (ة). Tempat menyimpan buku-buku. Gunakan هَذِهِ/تِلْكَ.",
        audioWord: "",
        category: "Benda • Sekolah",
        examples: [
          {
            ar: "هَذِهِ مَكْتَبَةٌ",
            translation: "Ini adalah perpustakaan",
            grammarNote: "Gunakan هَذِهِ karena مَكْتَبَةٌ berakhiran ta marbuthah (ة) yang menandakan gender muannats.",
            analysis: "Gunakan هَذِهِ karena مَكْتَبَةٌ berakhiran ta marbuthah (ة) yang menandakan gender muannats."
          },
          {
            ar: "الْمَكْتَبَةُ كَبِيرَةٌ",
            translation: "Perpustakaan itu besar",
            grammarNote: "الْمَكْتَبَةُ mubtada muannats. كَبِيرَةٌ khabar muannats berharakat dhammah tanwin.",
            analysis: "الْمَكْتَبَةُ mubtada muannats. كَبِيرَةٌ khabar muannats berharakat dhammah tanwin."
          },
          {
            ar: "الْكُتُبُ فِي الْمَكْتَبَةِ",
            translation: "Buku-buku itu di dalam perpustakaan",
            grammarNote: "الْمَكْتَبَةِ berharakat kasrah karena berada setelah preposisi jar فِي.",
            analysis: "الْمَكْتَبَةِ berharakat kasrah karena berada setelah preposisi jar فِي."
          },
          {
            ar: "أَذْهَبُ إِلَى الْمَكْتَبَةِ",
            translation: "Saya pergi ke perpustakaan",
            grammarNote: "إِلَى adalah huruf jar, membuat kata الْمَكْتَبَةِ berakhiran kasrah.",
            analysis: "إِلَى adalah huruf jar, membuat kata الْمَكْتَبَةِ berakhiran kasrah."
          },
          {
            ar: "الْمَكْتَبَةُ هَادِئَةٌ",
            translation: "Perpustakaan itu tenang",
            grammarNote: "هَادِئَةٌ khabar muannats yang menerangkan sifat ketenangan perpustakaan.",
            analysis: "هَادِئَةٌ khabar muannats yang menerangkan sifat ketenangan perpustakaan."
          },
          {
            ar: "تِلْكَ مَكْتَبَةُ الْمَدْرَسَةِ",
            translation: "Itu adalah perpustakaan sekolah",
            grammarNote: "Idhafah: مَكْتَبَةُ sebagai mudhaf (tanpa tanwin) dan الْمَدْرَسَةِ sebagai mudhaf ilaih (kasrah).",
            analysis: "Idhafah: مَكْتَبَةُ sebagai mudhaf (tanpa tanwin) dan الْمَدْرَسَةِ sebagai mudhaf ilaih (kasrah)."
          },
          {
            ar: "أَقْرَأُ كِتَابًا فِي الْمَكْتَبَةِ",
            translation: "Saya membaca buku di perpustakaan",
            grammarNote: "فِي الْمَكْتَبَةِ susunan preposisi keterangan tempat membaca buku.",
            analysis: "فِي الْمَكْتَبَةِ susunan preposisi keterangan tempat membaca buku."
          },
          {
            ar: "هَذِهِ مَكْتَبَتِي",
            translation: "Ini adalah perpustakaanku",
            grammarNote: "مَكْتَبَتِي gabungan مَكْتَبَةٌ dan ya mutakallim. Ta marbuthah berubah menjadi ta biasa.",
            analysis: "مَكْتَبَتِي gabungan مَكْتَبَةٌ dan ya mutakallim. Ta marbuthah berubah menjadi ta biasa."
          },
          {
            ar: "الْمَكْتَبَةُ مَفْتُوحَةٌ الْآنَ",
            translation: "Perpustakaan itu buka sekarang",
            grammarNote: "مَفْتُوحَةٌ khabar muannats. الْآنَ adalah kata keterangan waktu sekarang.",
            analysis: "مَفْتُوحَةٌ khabar muannats. الْآنَ adalah kata keterangan waktu sekarang."
          },
          {
            ar: "أُحِبُّ الذَّهَابَ إِلَى الْمَكْتَبَةِ",
            translation: "Saya suka pergi ke perpustakaan",
            grammarNote: "إِلَى الْمَكْتَبَةِ keterangan tujuan tempat, majrur dengan kasrah.",
            analysis: "إِلَى الْمَكْتَبَةِ keterangan tujuan tempat, majrur dengan kasrah."
          }
        ]
      },
      {
        id: "l1_1_c20",
        wordAr: "لَوْحٌ",
        translation: "Papan Tulis",
        description: "Kata benda MUDZAKKAR (maskulin) — tidak ada akhiran ta marbuthah (ة). Berfungsi untuk menuliskan materi di kelas. Gunakan هَذَا/ذَلِكَ.",
        audioWord: "",
        category: "Benda • Sekolah",
        examples: [
          {
            ar: "هَذَا لَوْحٌ",
            translation: "Ini adalah papan tulis",
            grammarNote: "Gunakan هَذَا karena لَوْحٌ bergender mudzakkar (tanpa ta marbuthah ة).",
            analysis: "Gunakan هَذَا karena لَوْحٌ bergender mudzakkar (tanpa ta marbuthah ة)."
          },
          {
            ar: "اللَّوْحُ نَظِيفٌ",
            translation: "Papan tulis itu bersih",
            grammarNote: "اللَّوْحُ mubtada mudzakkar. نَظِيفٌ khabar mudzakkar berharakat dhammah tanwin.",
            analysis: "اللَّوْحُ mubtada mudzakkar. نَظِيفٌ khabar mudzakkar berharakat dhammah tanwin."
          },
          {
            ar: "أَكْتُبُ عَلَى اللَّوْحِ",
            translation: "Saya menulis di atas papan tulis",
            grammarNote: "عَلَى adalah huruf jar, membuat kata اللَّوْحِ majrur berharakat kasrah.",
            analysis: "عَلَى adalah huruf jar, membuat kata اللَّوْحِ majrur berharakat kasrah."
          },
          {
            ar: "اللَّوْحُ فِي الْفَصْلِ",
            translation: "Papan tulis itu di dalam kelas",
            grammarNote: "فِي الْفَصْلِ keterangan tempat berupa susunan preposisi jar-majrur.",
            analysis: "فِي الْفَصْلِ keterangan tempat berupa susunan preposisi jar-majrur."
          },
          {
            ar: "هَذَا لَوْحٌ كَبِيرٌ",
            translation: "Ini adalah papan tulis yang besar",
            grammarNote: "كَبِيرٌ sifat mudzakkar yang selaras dengan kata benda لَوْحٌ.",
            analysis: "كَبِيرٌ sifat mudzakkar yang selaras dengan kata benda لَوْحٌ."
          },
          {
            ar: "أَمْسَحُ اللَّوْحَ",
            translation: "Saya menghapus papan tulis itu",
            grammarNote: "اللَّوْحَ objek (maf'ul bih) langsung, sehingga berharakat akhir fathah.",
            analysis: "اللَّوْحَ objek (maf'ul bih) langsung, sehingga berharakat akhir fathah."
          },
          {
            ar: "ذَلِكَ لَوْحٌ أَبْيَضُ",
            translation: "Itu adalah papan tulis putih",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. أَبْيَضُ sifat berupa kata warna mudzakkar ghairu munsharif.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. أَبْيَضُ sifat berupa kata warna mudzakkar ghairu munsharif."
          },
          {
            ar: "يَنْظُرُ الطَّالِبُ إِلَى اللَّوْحِ",
            translation: "Siswa itu melihat ke papan tulis",
            grammarNote: "إِلَى adalah huruf jar, memaksa kata اللَّوْحِ berharakat kasrah.",
            analysis: "إِلَى adalah huruf jar, memaksa kata اللَّوْحِ berharakat kasrah."
          },
          {
            ar: "اللَّوْحُ أَمَامَ التَّلَامِيذِ",
            translation: "Papan tulis itu di depan para murid",
            grammarNote: "أَمَامَ zharaf makan. التَّلَامِيذِ mudhaf ilaih (kasrah) berupa jamak taksir dari تِلْمِيذٌ.",
            analysis: "أَمَامَ zharaf makan. التَّلَامِيذِ mudhaf ilaih (kasrah) berupa jamak taksir dari تِلْمِيذٌ."
          },
          {
            ar: "أَشْتَرِي لَوْحًا جَدِيدًا",
            translation: "Saya membeli papan tulis baru",
            grammarNote: "لَوْحًا objek (maf'ul bih) fathatain. جَدِيدًا sifat mengikuti harakat objek.",
            analysis: "لَوْحًا objek (maf'ul bih) fathatain. جَدِيدًا sifat mengikuti harakat objek."
          }
        ]
      },
      {
        id: "l1_1_c21",
        wordAr: "شَمْسٌ",
        translation: "Matahari",
        description: "Kata benda MUANNATS SIMA'I (feminin secara adat) — meskipun tidak memiliki akhiran ta marbuthah (ة), orang Arab menggolongkannya sebagai feminin. Gunakan kata tunjuk dekat هَذِهِ atau jauh تِلْكَ.",
        audioWord: "",
        category: "Alam • Langit",
        examples: [
          {
            ar: "هَذِهِ شَمْسٌ",
            translation: "Ini adalah matahari",
            grammarNote: "Gunakan هَذِهِ karena شَمْسٌ adalah isim muannats sima'i (feminin berdasarkan kebiasaan tutur kata Arab).",
            analysis: "Gunakan هَذِهِ karena شَمْسٌ adalah isim muannats sima'i (feminin berdasarkan kebiasaan tutur kata Arab)."
          },
          {
            ar: "الشَّمْسُ طَالِعَةٌ",
            translation: "Matahari itu sedang terbit",
            grammarNote: "الشَّمْسُ berfungsi sebagai mubtada muannats, maka khabar طَالِعَةٌ harus berakhiran ta marbuthah ة.",
            analysis: "الشَّمْسُ berfungsi sebagai mubtada muannats, maka khabar طَالِعَةٌ harus berakhiran ta marbuthah ة."
          },
          {
            ar: "الشَّمْسُ حَارَّةٌ",
            translation: "Matahari itu panas",
            grammarNote: "حَارَّةٌ khabar muannats berharakat dhammah tanwin selaras dengan mubtada الشَّمْسُ.",
            analysis: "حَارَّةٌ khabar muannats berharakat dhammah tanwin selaras dengan mubtada الشَّمْسُ."
          },
          {
            ar: "أَرَى الشَّمْسَ فِي السَّمَاءِ",
            translation: "Saya melihat matahari di langit",
            grammarNote: "الشَّمْسَ berposisi sebagai objek (maf'ul bih) berharakat fathah. فِي السَّمَاءِ keterangan tempat.",
            analysis: "الشَّمْسَ berposisi sebagai objek (maf'ul bih) berharakat fathah. فِي السَّمَاءِ keterangan tempat."
          },
          {
            ar: "تِلْكَ شَمْسٌ مُشْرِقَةٌ",
            translation: "Itu adalah matahari yang bersinar terang",
            grammarNote: "تِلْكَ kata tunjuk jauh muannats. مُشْرِقَةٌ sifat muannats mengikuti kata benda شَمْسٌ.",
            analysis: "تِلْكَ kata tunjuk jauh muannats. مُشْرِقَةٌ sifat muannats mengikuti kata benda شَمْسٌ."
          },
          {
            ar: "نُورُ الشَّمْسِ قَوِيٌّ",
            translation: "Cahaya matahari itu kuat",
            grammarNote: "نُورُ mubtada mudzakkar. الشَّمْسِ mudhaf ilaih (kasrah). قَوِيٌّ khabar mudzakkar mengikuti gender mubtada نُورُ.",
            analysis: "نُورُ mubtada mudzakkar. الشَّمْسِ mudhaf ilaih (kasrah). قَوِيٌّ khabar mudzakkar mengikuti gender mubtada نُورُ."
          },
          {
            ar: "تَغْرُبُ الشَّمْسُ فِي الْمَسَاءِ",
            translation: "Matahari terbenam di sore hari",
            grammarNote: "Kata kerja تَغْرُبُ diawali huruf ta karena subjek pelakunya (الشَّمْسُ) bergender muannats.",
            analysis: "Kata kerja تَغْرُبُ diawali huruf ta karena subjek pelakunya (الشَّمْسُ) bergender muannats."
          },
          {
            ar: "الشَّمْسُ أَكْبَرُ مِنَ الْأَرْضِ",
            translation: "Matahari lebih besar daripada bumi",
            grammarNote: "أَكْبَرُ isim tafdhil (komparatif) tidak menerima tanwin. الْأَرْضِ majrur setelah preposisi مِنَ.",
            analysis: "أَكْبَرُ isim tafdhil (komparatif) tidak menerima tanwin. الْأَرْضِ majrur setelah preposisi مِنَ."
          },
          {
            ar: "الْأَرْضُ تَدُورُ حَوْلَ الشَّمْسِ",
            translation: "Bumi berputar mengelilingi matahari",
            grammarNote: "الشَّمْسِ majrur (kasrah) karena terletak setelah kata keterangan tempat (zharaf) حَوْلَ.",
            analysis: "الشَّمْسِ majrur (kasrah) karena terletak setelah kata keterangan tempat (zharaf) حَوْلَ."
          },
          {
            ar: "الْجَلُوسُ تَحْتَ الشَّمْسِ صَعْبٌ",
            translation: "Duduk di bawah matahari itu sulit",
            grammarNote: "الشَّمْسِ majrur berharakat kasrah berposisi sebagai mudhaf ilaih setelah zharaf تَحْتَ.",
            analysis: "الشَّمْسِ majrur berharakat kasrah berposisi sebagai mudhaf ilaih setelah zharaf تَحْتَ."
          }
        ]
      },
      {
        id: "l1_1_c22",
        wordAr: "قَمَرٌ",
        translation: "Bulan",
        description: "Kata benda MUDZAKKAR (maskulin) — tidak memiliki akhiran ta marbuthah (ة). Benda langit pemancar cahaya malam. Gunakan هَذَا/ذَلِكَ.",
        audioWord: "",
        category: "Alam • Langit",
        examples: [
          {
            ar: "هَذَا قَمَرٌ",
            translation: "Ini adalah bulan",
            grammarNote: "Gunakan هَذَا karena قَمَرٌ bergender mudzakkar (tanpa ta marbuthah ة).",
            analysis: "Gunakan هَذَا karena قَمَرٌ bergender mudzakkar (tanpa ta marbuthah ة)."
          },
          {
            ar: "الْقَمَرُ جَمِيلٌ",
            translation: "Bulan itu indah",
            grammarNote: "الْقَمَرُ mubtada mudzakkar. جَمِيلٌ khabar mudzakkar berharakat dhammah tanwin.",
            analysis: "الْقَمَرُ mubtada mudzakkar. جَمِيلٌ khabar mudzakkar berharakat dhammah tanwin."
          },
          {
            ar: "الْقَمَرُ مُنِيرٌ",
            translation: "Bulan itu bersinar terang",
            grammarNote: "مُنِيرٌ khabar mudzakkar berharakat dhammah tanwin selaras dengan mubtada الْقَمَرُ.",
            analysis: "مُنِيرٌ khabar mudzakkar berharakat dhammah tanwin selaras dengan mubtada الْقَمَرُ."
          },
          {
            ar: "أَرَى الْقَمَرَ فِي اللَّيْلِ",
            translation: "Saya melihat bulan di malam hari",
            grammarNote: "الْقَمَرَ objek (maf'ul bih) berharakat fathah. فِي اللَّيْلِ keterangan waktu majrur.",
            analysis: "الْقَمَرَ objek (maf'ul bih) berharakat fathah. فِي اللَّيْلِ keterangan waktu majrur."
          },
          {
            ar: "ذَلِكَ قَمَرٌ كَامِلٌ",
            translation: "Itu adalah bulan purnama (sempurna)",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. كَامِلٌ sifat mudzakkar mengikuti kata benda قَمَرٌ.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. كَامِلٌ sifat mudzakkar mengikuti kata benda قَمَرٌ."
          },
          {
            ar: "نُورُ الْقَمَرِ هَادِئٌ",
            translation: "Cahaya bulan itu tenang",
            grammarNote: "نُورُ mubtada mudzakkar. الْقَمَرِ mudhaf ilaih (kasrah). هَادِئٌ khabar mudzakkar mengikuti نُورُ.",
            analysis: "نُورُ mubtada mudzakkar. الْقَمَرِ mudhaf ilaih (kasrah). هَادِئٌ khabar mudzakkar mengikuti نُورُ."
          },
          {
            ar: "يَظْهَرُ الْقَمَرُ فِي السَّمَاءِ",
            translation: "Bulan muncul di langit",
            grammarNote: "Kata kerja يَظْهَرُ diawali huruf ya karena subjek pelakunya (الْقَمَرُ) bergender mudzakkar.",
            analysis: "Kata kerja يَظْهَرُ diawali huruf ya karena subjek pelakunya (الْقَمَرُ) bergender mudzakkar."
          },
          {
            ar: "الْقَمَرُ أَصْغَرُ مِنَ الْأَرْضِ",
            translation: "Bulan lebih kecil daripada bumi",
            grammarNote: "أَصْغَرُ isim tafdhil (komparatif) berharakat dhammah tunggal tanpa tanwin.",
            analysis: "أَصْغَرُ isim tafdhil (komparatif) berharakat dhammah tunggal tanpa tanwin."
          },
          {
            ar: "هَذَا هُوَ قَمَرُنَا",
            translation: "Ini adalah bulan kami",
            grammarNote: "قَمَرُنَا terdiri dari قَمَرٌ dan na kepemilikan orang pertama jamak (kami/kita).",
            analysis: "قَمَرُنَا terdiri dari قَمَرٌ dan na kepemilikan orang pertama jamak (kami/kita)."
          },
          {
            ar: "يَدُورُ الْقَمَرُ حَوْلَ الْأَرْضِ",
            translation: "Bulan berputar mengelilingi bumi",
            grammarNote: "يَدُورُ kata kerja mudzakkar yang selaras dengan pelaku subjek الْقَمَرُ.",
            analysis: "يَدُورُ kata kerja mudzakkar yang selaras dengan pelaku subjek الْقَمَرُ."
          }
        ]
      },
      {
        id: "l1_1_c23",
        wordAr: "مَاءٌ",
        translation: "Air",
        description: "Kata benda MUDZAKKAR (maskulin) — tidak ada akhiran ta marbuthah (ة). Zat cair sumber kehidupan makhluk hidup. Gunakan kata tunjuk dekat هَذَا atau jauh ذَلِكَ.",
        audioWord: "",
        category: "Alam • Cairan",
        examples: [
          {
            ar: "هَذَا مَاءٌ",
            translation: "Ini adalah air",
            grammarNote: "Gunakan هَذَا karena مَاءٌ bergender mudzakkar (tidak ada ta marbuthah ة).",
            analysis: "Gunakan هَذَا karena مَاءٌ bergender mudzakkar (tidak ada ta marbuthah ة)."
          },
          {
            ar: "الْمَاءُ بَارِدٌ",
            translation: "Air itu dingin",
            grammarNote: "الْمَاءُ mubtada mudzakkar. بَارِدٌ khabar mudzakkar berharakat dhammah tanwin.",
            analysis: "الْمَاءُ mubtada mudzakkar. بَارِدٌ khabar mudzakkar berharakat dhammah tanwin."
          },
          {
            ar: "الْمَاءُ حَارٌّ",
            translation: "Air itu panas",
            grammarNote: "حَارٌّ khabar mudzakkar berharakat dhammah tanwin selaras dengan mubtada الْمَاءُ.",
            analysis: "حَارٌّ khabar mudzakkar berharakat dhammah tanwin selaras dengan mubtada الْمَاءُ."
          },
          {
            ar: "أَشْرَبُ الْمَاءَ",
            translation: "Saya meminum air",
            grammarNote: "الْمَاءَ berposisi sebagai objek (maf'ul bih) sehingga berharakat fathah di akhirnya.",
            analysis: "الْمَاءَ berposisi sebagai objek (maf'ul bih) sehingga berharakat fathah di akhirnya."
          },
          {
            ar: "الْمَاءُ فِي الْكَأْسِ",
            translation: "Air itu di dalam gelas",
            grammarNote: "فِي الْكَأْسِ keterangan tempat jar-majrur yang menerangkan letak air.",
            analysis: "فِي الْكَأْسِ keterangan tempat jar-majrur yang menerangkan letak air."
          },
          {
            ar: "ذَلِكَ مَاءٌ عَذْبٌ",
            translation: "Itu adalah air yang tawar/segar",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. عَذْبٌ sifat mudzakkar mengikuti kata benda مَاءٌ.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. عَذْبٌ sifat mudzakkar mengikuti kata benda مَاءٌ."
          },
          {
            ar: "الْمَاءُ نَافِعٌ لِلْحَيَاةِ",
            translation: "Air itu bermanfaat bagi kehidupan",
            grammarNote: "نَافِعٌ khabar mudzakkar. لِلْحَيَاةِ susunan huruf jar لِ dan isim majrur.",
            analysis: "نَافِعٌ khabar mudzakkar. لِلْحَيَاةِ susunan huruf jar لِ dan isim majrur."
          },
          {
            ar: "أَغْسِلُ الْيَدَ بِالْمَاءِ",
            translation: "Saya mencuci tangan dengan air",
            grammarNote: "بِالْمَاءِ susunan huruf jar بِ (dengan) dan الْمَاءِ yang majrur dengan kasrah.",
            analysis: "بِالْمَاءِ susunan huruf jar بِ (dengan) dan الْمَاءِ yang majrur dengan kasrah."
          },
          {
            ar: "هَذَا مَاؤُنَا",
            translation: "Ini adalah air kami",
            grammarNote: "مَاؤُنَا terdiri dari مَاءٌ dan na kepemilikan. Perhatikan penulisan hamzah di atas wawu karena ber-dhammah.",
            analysis: "مَاؤُنَا terdiri dari مَاءٌ dan na kepemilikan. Perhatikan penulisan hamzah di atas wawu karena ber-dhammah."
          },
          {
            ar: "أُرِيدُ مَاءً نَقِيًّا",
            translation: "Saya ingin air yang murni/bersih",
            grammarNote: "مَاءً objek fathatain. نَقِيًّا sifat mengikuti harakat dan gender objek.",
            analysis: "مَاءً objek fathatain. نَقِيًّا sifat mengikuti harakat dan gender objek."
          }
        ]
      },
      {
        id: "l1_1_c24",
        wordAr: "يَوْمٌ",
        translation: "Hari",
        description: "Kata benda MUDZAKKAR (maskulin) — menunjukkan satuan waktu siang hari atau satu siklus 24 jam. Gunakan kata tunjuk dekat هَذَا atau jauh ذَلِكَ.",
        audioWord: "",
        category: "Waktu",
        examples: [
          {
            ar: "هَذَا يَوْمٌ جَمِيلٌ",
            translation: "Ini adalah hari yang indah",
            grammarNote: "هَذَا kata tunjuk dekat mudzakkar. يَوْمٌ mudzakkar. جَمِيلٌ sifat mudzakkar yang selaras.",
            analysis: "هَذَا kata tunjuk dekat mudzakkar. يَوْمٌ mudzakkar. جَمِيلٌ sifat mudzakkar yang selaras."
          },
          {
            ar: "الْيَوْمُ طَوِيلٌ",
            translation: "Hari ini panjang/lama",
            grammarNote: "الْيَوْمُ mubtada mudzakkar. طَوِيلٌ khabar mudzakkar berharakat dhammah tanwin.",
            analysis: "الْيَوْمُ mubtada mudzakkar. طَوِيلٌ khabar mudzakkar berharakat dhammah tanwin."
          },
          {
            ar: "أَعْمَلُ كُلَّ يَوْمٍ",
            translation: "Saya bekerja setiap hari",
            grammarNote: "يَوْمٍ berharakat kasrah karena terletak setelah kata كُلَّ (setiap) sebagai mudhaf ilaih.",
            analysis: "يَوْمٍ berharakat kasrah karena terletak setelah kata كُلَّ (setiap) sebagai mudhaf ilaih."
          },
          {
            ar: "هَذَا يَوْمُ الْعِيدِ",
            translation: "Ini adalah hari raya",
            grammarNote: "Idhafah: يَوْمُ bertindak sebagai mudhaf dan الْعِيدِ sebagai mudhaf ilaih yang majrur dengan kasrah.",
            analysis: "Idhafah: يَوْمُ bertindak sebagai mudhaf dan الْعِيدِ sebagai mudhaf ilaih yang majrur dengan kasrah."
          },
          {
            ar: "فِي هَذَا الْيَوْمِ نَحْنُ سُعَدَاءُ",
            translation: "Di hari ini kami bahagia",
            grammarNote: "الْيَوْمِ berharakat kasrah sebagai badal (pengganti) dari kata tunjuk هَذَا yang didahului huruf jar فِي.",
            analysis: "الْيَوْمِ berharakat kasrah sebagai badal (pengganti) dari kata tunjuk هَذَا yang didahului huruf jar فِي."
          },
          {
            ar: "ذَلِكَ يَوْمٌ عِظِيمٌ",
            translation: "Itu adalah hari yang agung/besar",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. عِظِيمٌ sifat mudzakkar mengikuti kata benda يَوْمٌ.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. عِظِيمٌ sifat mudzakkar mengikuti kata benda يَوْمٌ."
          },
          {
            ar: "الْيَوْمُ هُوَ يَوْمُ الْأَحَدِ",
            translation: "Hari ini adalah hari Minggu",
            grammarNote: "الْأَحَدِ mudhaf ilaih berharakat kasrah yang menentukan nama hari.",
            analysis: "الْأَحَدِ mudhaf ilaih berharakat kasrah yang menentukan nama hari."
          },
          {
            ar: "أَسْتَرِيحُ فِي يَوْمِ الْعُطْلَةِ",
            translation: "Saya beristirahat di hari libur",
            grammarNote: "فِي يَوْمِ susunan jar-majrur. الْعُطْلَةِ mudhaf ilaih berharakat kasrah.",
            analysis: "فِي يَوْمِ susunan jar-majrur. الْعُطْلَةِ mudhaf ilaih berharakat kasrah."
          },
          {
            ar: "هَذَا هُوَ يَوْمِي الْمُفَضَّلُ",
            translation: "Ini adalah hari favoritku",
            grammarNote: "يَوْمِي terdiri dari يَوْمٌ dan ya mutakallim. الْمُفَضَّلُ sifatnya berharakat dhammah.",
            analysis: "يَوْمِي terdiri dari يَوْمٌ dan ya mutakallim. الْمُفَضَّلُ sifatnya berharakat dhammah."
          },
          {
            ar: "سَأُسَافِرُ بَعْدَ يَوْمٍ",
            translation: "Saya akan bepergian setelah satu hari",
            grammarNote: "يَوْمٍ majrur berharakat kasrah tanwin setelah zharaf waktu بَعْدَ (setelah).",
            analysis: "يَوْمٍ majrur berharakat kasrah tanwin setelah zharaf waktu بَعْدَ (setelah)."
          }
        ]
      },
      {
        id: "l1_1_c25",
        wordAr: "لَيْلٌ",
        translation: "Malam",
        description: "Kata benda MUDZAKKAR (maskulin) — menunjukkan waktu setelah matahari terbenam. Gunakan kata tunjuk dekat هَذَا atau jauh ذَلِكَ.",
        audioWord: "",
        category: "Waktu",
        examples: [
          {
            ar: "هَذَا لَيْلٌ بَارِدٌ",
            translation: "Ini adalah malam yang dingin",
            grammarNote: "Gunakan هَذَا karena لَيْلٌ bergender mudzakkar. بَارِدٌ sifat mudzakkar yang selaras.",
            analysis: "Gunakan هَذَا karena لَيْلٌ bergender mudzakkar. بَارِدٌ sifat mudzakkar yang selaras."
          },
          {
            ar: "اللَّيْلُ هَادِئٌ",
            translation: "Malam itu tenang",
            grammarNote: "اللَّيْلُ mubtada mudzakkar. هَادِئٌ khabar mudzakkar berharakat dhammah tanwin.",
            analysis: "اللَّيْلُ mubtada mudzakkar. هَادِئٌ khabar mudzakkar berharakat dhammah tanwin."
          },
          {
            ar: "أَنَامُ فِي اللَّيْلِ",
            translation: "Saya tidur di malam hari",
            grammarNote: "اللَّيْلِ berharakat kasrah karena berada setelah preposisi jar فِي.",
            analysis: "اللَّيْلِ berharakat kasrah karena berada setelah preposisi jar فِي."
          },
          {
            ar: "هَذَا لَيْلُ الشِّتَاءِ",
            translation: "Ini adalah malam musim dingin",
            grammarNote: "Idhafah: لَيْلُ sebagai mudhaf dan الشِّتَاءِ sebagai mudhaf ilaih yang majrur dengan kasrah.",
            analysis: "Idhafah: لَيْلُ sebagai mudhaf dan الشِّتَاءِ sebagai mudhaf ilaih yang majrur dengan kasrah."
          },
          {
            ar: "اللَّيْلُ طَوِيلٌ فِي الشِّتَاءِ",
            translation: "Malam itu panjang di musim dingin",
            grammarNote: "طَوِيلٌ khabar mudzakkar. فِي الشِّتَاءِ keterangan waktu jar-majrur.",
            analysis: "طَوِيلٌ khabar mudzakkar. فِي الشِّتَاءِ keterangan waktu jar-majrur."
          },
          {
            ar: "ذَلِكَ لَيْلٌ مُظْلِمٌ",
            translation: "Itu adalah malam yang gelap",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. مُظْلِمٌ sifat mudzakkar mengikuti kata benda لَيْلٌ.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. مُظْلِمٌ sifat mudzakkar mengikuti kata benda لَيْلٌ."
          },
          {
            ar: "نُورُ الْقَمَرِ جَمِيلٌ فِي اللَّيْلِ",
            translation: "Cahaya bulan indah di malam hari",
            grammarNote: "فِي اللَّيْلِ merupakan keterangan waktu yang menjelaskan kapan keindahan cahaya itu terjadi.",
            analysis: "فِي اللَّيْلِ merupakan keterangan waktu yang menjelaskan kapan keindahan cahaya itu terjadi."
          },
          {
            ar: "أَعْمَلُ فِي اللَّيْلِ أَيْضًا",
            translation: "Saya bekerja di malam hari juga",
            grammarNote: "اللَّيْلِ majrur kasrah setelah huruf jar. أَيْضًا kata keterangan tambahan (juga).",
            analysis: "اللَّيْلِ majrur kasrah setelah huruf jar. أَيْضًا kata keterangan tambahan (juga)."
          },
          {
            ar: "هَذَا لَيْلِي الْأَخِيرُ هُنَا",
            translation: "Ini adalah malam terakhirku di sini",
            grammarNote: "لَيْلِي terdiri dari لَيْلٌ dan ya mutakallim. الْأَخِيرُ sifatnya berharakat dhammah.",
            analysis: "لَيْلِي terdiri dari لَيْلٌ dan ya mutakallim. الْأَخِيرُ sifatnya berharakat dhammah."
          },
          {
            ar: "يَظْهَرُ الْنُّجُومُ فِي اللَّيْلِ",
            translation: "Bintang-bintang muncul di malam hari",
            grammarNote: "يَظْهَرُ kata kerja mudzakkar. فِي اللَّيْلِ keterangan waktu majrur.",
            analysis: "يَظْهَرُ kata kerja mudzakkar. فِي اللَّيْلِ keterangan waktu majrur."
          }
        ]
      },
      {
        id: "l1_1_c26",
        wordAr: "مَسْجِدٌ",
        translation: "Masjid",
        description: "Kata benda MUDZAKKAR (maskulin) — tempat suci untuk beribadah umat Islam. Tidak berakhiran ta marbuthah. Gunakan kata tunjuk dekat هَذَا atau jauh ذَلِكَ.",
        audioWord: "",
        category: "Tempat • Ibadah",
        examples: [
          {
            ar: "هَذَا مَسْجِدٌ",
            translation: "Ini adalah masjid",
            grammarNote: "Gunakan هَذَا karena مَسْجِدٌ bergender mudzakkar (tidak ada ta marbuthah ة).",
            analysis: "Gunakan هَذَا karena مَسْجِدٌ bergender mudzakkar (tidak ada ta marbuthah ة)."
          },
          {
            ar: "الْمَسْجِدُ كَبِيرٌ",
            translation: "Masjid itu besar",
            grammarNote: "الْمَسْجِدُ mubtada mudzakkar. كَبِيرٌ khabar mudzakkar berharakat dhammah tanwin.",
            analysis: "الْمَسْجِدُ mubtada mudzakkar. كَبِيرٌ khabar mudzakkar berharakat dhammah tanwin."
          },
          {
            ar: "أُصَلِّي فِي الْمَسْجِدِ",
            translation: "Saya shalat di dalam masjid",
            grammarNote: "الْمَسْجِدِ berharakat kasrah karena berada setelah preposisi jar فِي.",
            analysis: "الْمَسْجِدِ berharakat kasrah karena berada setelah preposisi jar فِي."
          },
          {
            ar: "هَذَا مَسْجِدُ الْمَدِينَةِ",
            translation: "Ini adalah masjid kota",
            grammarNote: "Kombinasi idhafah: مَسْجِدُ sebagai mudhaf dan الْمَدِينَةِ sebagai mudhaf ilaih yang majrur.",
            analysis: "Kombinasi idhafah: مَسْجِدُ sebagai mudhaf dan الْمَدِينَةِ sebagai mudhaf ilaih yang majrur."
          },
          {
            ar: "أَذْهَبُ إِلَى الْمَسْجِدِ",
            translation: "Saya pergi ke masjid",
            grammarNote: "إِلَى adalah huruf jar, membuat kata الْمَسْجِدِ berakhiran kasrah.",
            analysis: "إِلَى adalah huruf jar, membuat kata الْمَسْجِدِ berakhiran kasrah."
          },
          {
            ar: "ذَلِكَ مَسْجِدٌ جَمِيلٌ",
            translation: "Itu adalah masjid yang indah",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. جَمِيلٌ sifat mudzakkar mengikuti kata benda مَسْجِدٌ.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. جَمِيلٌ sifat mudzakkar mengikuti kata benda مَسْجِدٌ."
          },
          {
            ar: "الْمَسْجِدُ قَرِيبٌ مِنَ الْبَيْتِ",
            translation: "Masjid itu dekat dari rumah",
            grammarNote: "قَرِيبٌ khabar mudzakkar menyesuaikan subjek (الْمَسْجِدُ) yang mudzakkar.",
            analysis: "قَرِيبٌ khabar mudzakkar menyesuaikan subjek (الْمَسْجِدُ) yang mudzakkar."
          },
          {
            ar: "مَسْجِدُنَا نَظِيفٌ وَوَاسِعٌ",
            translation: "Masjid kami bersih dan luas",
            grammarNote: "مَسْجِدُنَا terdiri dari مَسْجِدٌ dan na kepemilikan. نَظِيفٌ khabar mudzakkar.",
            analysis: "مَسْجِدُنَا terdiri dari مَسْجِدٌ dan na kepemilikan. نَظِيفٌ khabar mudzakkar."
          },
          {
            ar: "بَنَى الرَّجُلُ مَسْجِدًا صَغِيرًا",
            translation: "Laki-laki itu membangun masjid kecil",
            grammarNote: "مَسْجِدًا objek (maf'ul bih) fathatain. صَغِيرًا sifat mengikuti harakat objek.",
            analysis: "مَسْجِدًا objek (maf'ul bih) fathatain. صَغِيرًا sifat mengikuti harakat objek."
          },
          {
            ar: "أَسْتَمِعُ إِلَى الْأَذَانِ فِي الْمَسْجِدِ",
            translation: "Saya mendengarkan adzan di masjid",
            grammarNote: "فِي الْمَسْجِدِ keterangan tempat jar-majrur yang membuat akhir kata kasrah.",
            analysis: "فِي الْمَسْجِدِ keterangan tempat jar-majrur yang membuat akhir kata kasrah."
          }
        ]
      },
      {
        id: "l1_1_c27",
        wordAr: "صَلَاةٌ",
        translation: "Shalat",
        description: "Kata benda MUANNATS (feminin) — ditandai dengan akhiran ta marbuthah (ة). Merupakan ibadah utama umat Islam. Gunakan kata tunjuk dekat هَذِهِ atau jauh تِلْكَ.",
        audioWord: "",
        category: "Ibadah",
        examples: [
          {
            ar: "هَذِهِ صَلَاةٌ",
            translation: "Ini adalah shalat",
            grammarNote: "Gunakan هَذِهِ karena صَلَاةٌ berakhiran ta marbuthah (ة) yang menunjukkan gender muannats.",
            analysis: "Gunakan هَذِهِ karena صَلَاةٌ berakhiran ta marbuthah (ة) yang menunjukkan gender muannats."
          },
          {
            ar: "الصَّلَاةُ مُفِيدَةٌ",
            translation: "Shalat itu bermanfaat",
            grammarNote: "الصَّلَاةُ mubtada muannats, maka khabar مُفِيدَةٌ wajib muannats dengan ta marbuthah.",
            analysis: "الصَّلَاةُ mubtada muannats, maka khabar مُفِيدَةٌ wajib muannats dengan ta marbuthah."
          },
          {
            ar: "الصَّلَاةُ فِي الْمَسْجِدِ جَمِيلَةٌ",
            translation: "Shalat di masjid itu indah",
            grammarNote: "جَمِيلَةٌ khabar muannats yang menerangkan keindahan ibadah shalat.",
            analysis: "جَمِيلَةٌ khabar muannats yang menerangkan keindahan ibadah shalat."
          },
          {
            ar: "هَذِهِ صَلَاةُ الْفَجْرِ",
            translation: "Ini adalah shalat Fajar",
            grammarNote: "Idhafah: صَلَاةُ sebagai mudhaf dan الْفَجْرِ sebagai mudhaf ilaih yang majrur dengan kasrah.",
            analysis: "Idhafah: صَلَاةُ sebagai mudhaf dan الْفَجْرِ sebagai mudhaf ilaih yang majrur dengan kasrah."
          },
          {
            ar: "أُحَافِظُ عَلَى الصَّلَاةِ",
            translation: "Saya menjaga shalat",
            grammarNote: "عَلَى adalah huruf jar, membuat kata الصَّلَاةِ berakhiran kasrah.",
            analysis: "عَلَى adalah huruf jar, membuat kata الصَّلَاةِ berakhiran kasrah."
          },
          {
            ar: "تِلْكَ صَلَاةٌ جَمَاعِيَّةٌ",
            translation: "Itu adalah shalat berjamaah",
            grammarNote: "تِلْكَ kata tunjuk jauh muannats. جَمَاعِيَّةٌ sifat muannats mengikuti kata benda صَلَاةٌ.",
            analysis: "تِلْكَ kata tunjuk jauh muannats. جَمَاعِيَّةٌ sifat muannats mengikuti kata benda صَلَاةٌ."
          },
          {
            ar: "الصَّلَاةُ نُورٌ لِلْمُؤْمِنِ",
            translation: "Shalat itu cahaya bagi orang mukmin",
            grammarNote: "الصَّلَاةُ mubtada muannats. نُورٌ khabar mudzakkar (jenis rujukan makna umum).",
            analysis: "الصَّلَاةُ mubtada muannats. نُورٌ khabar mudzakkar (jenis rujukan makna umum)."
          },
          {
            ar: "هَذِهِ هِيَ صَلَاتِي",
            translation: "Ini adalah shalatku",
            grammarNote: "صَلَاتِي terdiri dari صَلَاةٌ dan ya mutakallim. Ta marbuthah berubah menjadi ta biasa.",
            analysis: "صَلَاتِي terdiri dari صَلَاةٌ dan ya mutakallim. Ta marbuthah berubah menjadi ta biasa."
          },
          {
            ar: "أَسْتَعِدُّ لِلصَّلَاةِ",
            translation: "Saya bersiap untuk shalat",
            grammarNote: "لِ adalah huruf jar, membuat kata الصَّلَاةِ majrur berharakat kasrah.",
            analysis: "لِ adalah huruf jar, membuat kata الصَّلَاةِ majrur berharakat kasrah."
          },
          {
            ar: "أَقُومُ إِلَى الصَّلَاةِ بِخُشُوعٍ",
            translation: "Saya mendirikan shalat dengan khusyuk",
            grammarNote: "إِلَى adalah huruf jar, memaksa kata الصَّلَاةِ berakhiran kasrah.",
            analysis: "إِلَى adalah huruf jar, memaksa kata الصَّلَاةِ berakhiran kasrah."
          }
        ]
      },
      {
        id: "l1_1_c28",
        wordAr: "قُرْآنٌ",
        translation: "Al-Quran",
        description: "Kata benda MUDZAKKAR (maskulin) — kitab suci pedoman hidup umat Islam. Tidak berakhiran ta marbuthah. Gunakan kata tunjuk dekat هَذَا atau jauh ذَلِكَ.",
        audioWord: "",
        category: "Kitab • Ibadah",
        examples: [
          {
            ar: "هَذَا قُرْآنٌ",
            translation: "Ini adalah Al-Quran",
            grammarNote: "هَذَا kata tunjuk mudzakkar yang selaras dengan kata قُرْآنٌ.",
            analysis: "هَذَا kata tunjuk mudzakkar yang selaras dengan kata قُرْآنٌ."
          },
          {
            ar: "الْقُرْآنُ نُورٌ",
            translation: "Al-Quran itu cahaya",
            grammarNote: "الْقُرْآنُ mubtada mudzakkar. نُورٌ khabar mudzakkar berharakat dhammah tanwin.",
            analysis: "الْقُرْآنُ mubtada mudzakkar. نُورٌ khabar mudzakkar berharakat dhammah tanwin."
          },
          {
            ar: "أَقْرَأُ الْقُرْآنَ",
            translation: "Saya membaca Al-Quran",
            grammarNote: "الْقُرْآنَ berposisi sebagai objek (maf'ul bih) sehingga berharakat fathah di akhirnya.",
            analysis: "الْقُرْآنَ berposisi sebagai objek (maf'ul bih) sehingga berharakat fathah di akhirnya."
          },
          {
            ar: "هَذَا قُرْآنُ كَرِيمٌ",
            translation: "Ini adalah Al-Quran yang mulia",
            grammarNote: "كَرِيمٌ sifat mudzakkar yang selaras dengan kata benda mudzakkar قُرْآنٌ.",
            analysis: "كَرِيمٌ sifat mudzakkar yang selaras dengan kata benda mudzakkar قُرْآنٌ."
          },
          {
            ar: "أَسْتَمِعُ إِلَى الْقُرْآنِ",
            translation: "Saya mendengarkan Al-Quran",
            grammarNote: "الْقُرْآنِ berharakat kasrah karena berada setelah preposisi jar إِلَى.",
            analysis: "الْقُرْآنِ berharakat kasrah karena berada setelah preposisi jar إِلَى."
          },
          {
            ar: "ذَلِكَ قُرْآنٌ مَجِيدٌ",
            translation: "Itu adalah Al-Quran yang mulia",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. مَجِيدٌ sifat mudzakkar mengikuti kata benda قُرْآنٌ.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. مَجِيدٌ sifat mudzakkar mengikuti kata benda قُرْآنٌ."
          },
          {
            ar: "الْقُرْآنُ هُدًى لِلنَّاسِ",
            translation: "Al-Quran itu petunjuk bagi manusia",
            grammarNote: "الْقُرْآنُ mubtada. هُدًى khabar berupa isim maqshur (harakat tersembunyi).",
            analysis: "الْقُرْآنُ mubtada. هُدًى khabar berupa isim maqshur (harakat tersembunyi)."
          },
          {
            ar: "هَذَا قُرْآنُنَا",
            translation: "Ini adalah Al-Quran kami",
            grammarNote: "قُرْآنُنَا terdiri dari قُرْآنٌ dan na kepemilikan. Hamzah ditulis di atas garis.",
            analysis: "قُرْآنُنَا terdiri dari قُرْآنٌ dan na kepemilikan. Hamzah ditulis di atas garis."
          },
          {
            ar: "أَحْفَظُ آيَةً مِنَ الْقُرْآنِ",
            translation: "Saya menghafal satu ayat dari Al-Quran",
            grammarNote: "آيَةً objek (maf'ul bih) fathatain. مِنَ الْقُرْآنِ susunan jar-majrur.",
            analysis: "آيَةً objek (maf'ul bih) fathatain. مِنَ الْقُرْآنِ susunan jar-majrur."
          },
          {
            ar: "تَعَلَّمْتُ الْقُرْآنَ فِي الْمَسْجِدِ",
            translation: "Saya belajar Al-Quran di masjid",
            grammarNote: "الْقُرْآنَ objek berharakat fathah. فِي الْمَسْجِدِ keterangan tempat majrur.",
            analysis: "الْقُرْآنَ objek berharakat fathah. فِي الْمَسْجِدِ keterangan tempat majrur."
          }
        ]
      },
      {
        id: "l1_1_c29",
        wordAr: "رَجُلٌ",
        translation: "Laki-laki",
        description: "Kata benda MUDZAKKAR (maskulin) — merujuk pada pria dewasa secara biologis dan gramatikal. Gunakan kata tunjuk dekat هَذَا atau jauh ذَلِكَ.",
        audioWord: "",
        category: "Orang • Sosial",
        examples: [
          {
            ar: "هَذَا رَجُلٌ",
            translation: "Ini adalah seorang laki-laki",
            grammarNote: "Gunakan هَذَا karena رَجُلٌ secara biologis dan gramatikal bergender mudzakkar.",
            analysis: "Gunakan هَذَا karena رَجُلٌ secara biologis dan gramatikal bergender mudzakkar."
          },
          {
            ar: "الرَّجُلُ صَالِحٌ",
            translation: "Laki-laki itu saleh",
            grammarNote: "الرَّجُلُ mubtada mudzakkar. صَالِحٌ khabar mudzakkar berharakat dhammah tanwin.",
            analysis: "الرَّجُلُ mubtada mudzakkar. صَالِحٌ khabar mudzakkar berharakat dhammah tanwin."
          },
          {
            ar: "أَتَكَلَّمُ مَعَ الرَّجُلِ",
            translation: "Saya berbicara dengan laki-laki itu",
            grammarNote: "الرَّجُلِ berharakat kasrah karena berada setelah kata keterangan (zharaf) مَعَ.",
            analysis: "الرَّجُلِ berharakat kasrah karena berada setelah kata keterangan (zharaf) مَعَ."
          },
          {
            ar: "هَذَا بَيْتُ الرَّجُلِ",
            translation: "Ini adalah rumah laki-laki itu",
            grammarNote: "Idhafah: بَيْتُ sebagai mudhaf dan الرَّجُلِ sebagai mudhaf ilaih yang majrur (kasrah).",
            analysis: "Idhafah: بَيْتُ sebagai mudhaf dan الرَّجُلِ sebagai mudhaf ilaih yang majrur (kasrah)."
          },
          {
            ar: "الرَّجُلُ فِي الْمَسْجِدِ",
            translation: "Laki-laki itu ada di dalam masjid",
            grammarNote: "الرَّجُلُ mubtada. فِي الْمَسْجِدِ keterangan tempat jar-majrur.",
            analysis: "الرَّجُلُ mubtada. فِي الْمَسْجِدِ keterangan tempat jar-majrur."
          },
          {
            ar: "ذَلِكَ رَجُلٌ كَرِيمٌ",
            translation: "Itu adalah laki-laki yang mulia/dermawan",
            grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. كَرِيمٌ sifat mudzakkar mengikuti kata benda رَجُلٌ.",
            analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. كَرِيمٌ sifat mudzakkar mengikuti kata benda رَجُلٌ."
          },
          {
            ar: "هَذَا هُوَ أَبِي، هُوَ رَجُلٌ طَيِّبٌ",
            translation: "Ini adalah ayahku, dia laki-laki yang baik",
            grammarNote: "أَبِي terdiri dari أَبٌ dan ya mutakallim. طَيِّبٌ sifat mudzakkar mengikuti رَجُلٌ.",
            analysis: "أَبِي terdiri dari أَبٌ dan ya mutakallim. طَيِّبٌ sifat mudzakkar mengikuti رَجُلٌ."
          },
          {
            ar: "يَعْمَلُ الرَّجُلُ فِي الْمَكْتَبِ",
            translation: "Laki-laki itu bekerja di kantor",
            grammarNote: "Kata kerja يَعْمَلُ diawali huruf ya karena pelakunya (الرَّجُلُ) bergender mudzakkar.",
            analysis: "Kata kerja يَعْمَلُ diawali huruf ya karena pelakunya (الرَّجُلُ) bergender mudzakkar."
          },
          {
            ar: "أُسَاعِدُ الرَّجُلَ الْكَبِيرَ",
            translation: "Saya membantu laki-laki tua itu",
            grammarNote: "الرَّجُلَ objek (maf'ul bih) fathah. الْكَبِيرَ sifat berharakat fathah mengikuti objek.",
            analysis: "الرَّجُلَ objek (maf'ul bih) fathah. الْكَبِيرَ sifat berharakat fathah mengikuti objek."
          },
          {
            ar: "جَاءَ رَجُلٌ إِلَى الْمَدْرَسَةِ",
            translation: "Seorang laki-laki datang ke sekolah",
            grammarNote: "رَجُلٌ di sini berstatus sebagai pelaku (fa'il) berharakat dhammah tanwin.",
            analysis: "رَجُلٌ di sini berstatus sebagai pelaku (fa'il) berharakat dhammah tanwin."
          }
        ]
      },
      {
        id: "l1_1_c30",
        wordAr: "اِمْرَأَةٌ",
        translation: "Perempuan",
        description: "Kata benda MUANNATS (feminin) — merujuk pada wanita dewasa secara biologis dan gramatikal (ditandai ta marbuthah ة). Gunakan kata tunjuk dekat هَذِهِ atau jauh تِلْكَ.",
        audioWord: "",
        category: "Orang • Sosial",
        examples: [
          {
            ar: "هَذِهِ امْرَأَةٌ",
            translation: "Ini adalah seorang perempuan",
            grammarNote: "Gunakan هَذِهِ karena امْرَأَةٌ secara biologis dan gramatikal bergender muannats (ada ة).",
            analysis: "Gunakan هَذِهِ karena امْرَأَةٌ secara biologis dan gramatikal bergender muannats (ada ة)."
          },
          {
            ar: "الْمَرْأَةُ صَالِحَةٌ",
            translation: "Perempuan itu saleha",
            grammarNote: "الْمَرْأَةُ (bentuk ma'rifah dari امْرَأَةٌ) sebagai mubtada. صَالِحَةٌ khabar muannats dengan ة.",
            analysis: "الْمَرْأَةُ (bentuk ma'rifah dari امْرَأَةٌ) sebagai mubtada. صَالِحَةٌ khabar muannats dengan ة."
          },
          {
            ar: "أَتَكَلَّمُ مَعَ الْمَرْأَةِ",
            translation: "Saya berbicara dengan perempuan itu",
            grammarNote: "الْمَرْأَةِ berharakat kasrah karena terletak setelah zharaf مَعَ (bersama/dengan).",
            analysis: "الْمَرْأَةِ berharakat kasrah karena terletak setelah zharaf مَعَ (bersama/dengan)."
          },
          {
            ar: "هَذَا بَيْتُ الْمَرْأَةِ",
            translation: "Ini adalah rumah perempuan itu",
            grammarNote: "Idhafah: بَيْتُ sebagai mudhaf dan الْمَرْأَةِ sebagai mudhaf ilaih yang majrur (kasrah).",
            analysis: "Idhafah: بَيْتُ sebagai mudhaf dan الْمَرْأَةِ sebagai mudhaf ilaih yang majrur (kasrah)."
          },
          {
            ar: "الْمَرْأَةُ فِي الْبَيْتِ",
            translation: "Perempuan itu ada di dalam rumah",
            grammarNote: "الْمَرْأَةُ mubtada. فِي الْبَيْتِ keterangan tempat jar-majrur.",
            analysis: "الْمَرْأَةُ mubtada. فِي الْبَيْتِ keterangan tempat jar-majrur."
          },
          {
            ar: "تِلْكَ امْرَأَةٌ كَرِيمَةٌ",
            translation: "Itu adalah perempuan yang mulia/dermawan",
            grammarNote: "تِلْكَ kata tunjuk jauh muannats. كَرِيمَةٌ sifat muannats mengikuti kata benda امْرَأَةٌ.",
            analysis: "تِلْكَ kata tunjuk jauh muannats. كَرِيمَةٌ sifat muannats mengikuti kata benda امْرَأَةٌ."
          },
          {
            ar: "هَذِهِ هِيَ أُمِّي، هِيَ امْرَأَةٌ طَيِّبَةٌ",
            translation: "Ini adalah ibuku, dia perempuan yang baik",
            grammarNote: "أُمِّي terdiri dari أُمٌّ dan ya mutakallim. طَيِّبَةٌ sifat muannats mengikuti امْرَأَةٌ.",
            analysis: "أُمِّي terdiri dari أُمٌّ dan ya mutakallim. طَيِّبَةٌ sifat muannats mengikuti امْرَأَةٌ."
          },
          {
            ar: "تَعْمَلُ الْمَرْأَةُ فِي الْمَدْرَسَةِ",
            translation: "Perempuan itu bekerja di sekolah",
            grammarNote: "Kata kerja تَعْمَلُ diawali huruf ta karena pelaku subjek (الْمَرْأَةُ) bergender muannats.",
            analysis: "Kata kerja تَعْمَلُ diawali huruf ta karena pelaku subjek (الْمَرْأَةُ) bergender muannats."
          },
          {
            ar: "أُسَاعِدُ الْمَرْأَةَ الْكَبِيرَةَ",
            translation: "Saya membantu perempuan tua itu",
            grammarNote: "الْمَرْأَةَ objek (maf'ul bih) fathah. الْكَبِيرَةَ sifat muannats berharakat fathah mengikuti objek.",
            analysis: "الْمَرْأَةَ objek (maf'ul bih) fathah. الْكَبِيرَةَ sifat muannats berharakat fathah mengikuti objek."
          },
          {
            ar: "جَاءَتِ امْرَأَةٌ إِلَى الْمَكْتَبَةِ",
            translation: "Seorang perempuan datang ke perpustakaan",
            grammarNote: "امْرَأَةٌ pelaku (fa'il) dhammah tanwin. Kata kerja جَاءَتْ diakhiri ta taknis sakinah.",
            analysis: "امْرَأَةٌ pelaku (fa'il) dhammah tanwin. Kata kerja جَاءَتْ diakhiri ta taknis sakinah."
          }
        ]
      }
      ],
    grammarSection: {
      title: "Mudzakkar, Muannats & Kata Tunjuk (هَذَا / هَذِهِ)",
      explanation: "Bahasa Arab membagi semua kata benda menjadi dua gender: MUDZAKKAR (laki-laki) dan MUANNATS (perempuan).\n\nIni bukan tentang jenis kelamin biologis saja — ini adalah klasifikasi gramatikal. Benda mati pun memiliki gender!\n\nRUMUS MUDAH:\n- MUDZAKKAR: Tidak ada Ta Marbuthah (ة) di akhir kata. Menggunakan kata tunjuk هَذَا (ini) atau ذَلِكَ (itu). Contoh: بَيْتٌ (rumah), كِتَابٌ (buku), قَلَمٌ (pena).\n- MUANNATS: Berakhiran Ta Marbuthah (ة) di akhir kata. Menggunakan kata tunjuk هَذِهِ (ini) atau تِلْكَ (itu). Contoh: نَافِذَةٌ (jendela), غُرْفَةٌ (kamar), مَدْرَسَةٌ (sekolah).",
      examples: [
        {
          ar: "هَذَا كِتَابٌ جَدِيدٌ",
          translation: "Ini buku baru",
          grammarNote: "هَذَا kata tunjuk dekat mudzakkar. كِتَابٌ khabar bergender mudzakkar karena tidak berakhiran ta marbuthah. جَدِيدٌ na'at (sifat) mengikuti gender man'ut (كِتَابٌ) yaitu mudzakkar.",
          analysis: "هَذَا kata tunjuk dekat mudzakkar. كِتَابٌ khabar bergender mudzakkar karena tidak berakhiran ta marbuthah. جَدِيدٌ na'at (sifat) mengikuti gender man'ut (كِتَابٌ) yaitu mudzakkar."
        },
        {
          ar: "هَذِهِ مَدْرَسَةٌ كَبِيرَةٌ",
          translation: "Ini sekolah yang besar",
          grammarNote: "هَذِهِ kata tunjuk dekat muannats. مَدْرَسَةٌ khabar bergender muannats karena berakhiran ta marbuthah (ة). كَبِيرَةٌ na'at (sifat) wajib muannats mengikuti madrasah.",
          analysis: "هَذِهِ kata tunjuk dekat muannats. مَدْرَسَةٌ khabar bergender muannats karena berakhiran ta marbuthah (ة). كَبِيرَةٌ na'at (sifat) wajib muannats mengikuti madrasah."
        },
        {
          ar: "ذَلِكَ قَلَمٌ جَمِيلٌ",
          translation: "Itu pena yang indah",
          grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. قَلَمٌ khabar bergender mudzakkar. جَمِيلٌ na'at yang juga mudzakkar marfu' dengan dhammah tanwin.",
          analysis: "ذَلِكَ kata tunjuk jauh mudzakkar. قَلَمٌ khabar bergender mudzakkar. جَمِيلٌ na'at yang juga mudzakkar marfu' dengan dhammah tanwin."
        },
        {
          ar: "تِلْكَ غُرْفَةٌ نَظِيفَةٌ",
          translation: "Itu kamar yang bersih",
          grammarNote: "تِلْكَ kata tunjuk jauh muannats. غُرْفَةٌ khabar muannats berakhiran ta marbuthah. نَظِيفَةٌ sifat muannats yang mengikuti ghurfah.",
          analysis: "تِلْكَ kata tunjuk jauh muannats. غُرْفَةٌ khabar muannats berakhiran ta marbuthah. نَظِيفَةٌ sifat muannats yang mengikuti ghurfah."
        },
        {
          ar: "هَذَا بَابٌ مَفْتُوحٌ",
          translation: "Ini pintu yang terbuka",
          grammarNote: "هَذَا kata tunjuk dekat mudzakkar. بَابٌ khabar mudzakkar. مَفْتُوحٌ sifat (isim maf'ul) bergender mudzakkar mengikuti baabun.",
          analysis: "هَذَا kata tunjuk dekat mudzakkar. بَابٌ khabar mudzakkar. مَفْتُوحٌ sifat (isim maf'ul) bergender mudzakkar mengikuti baabun."
        }
      ],
      commonMistakes: [
        {
          wrong: "هَذَا مَدْرَسَةٌ (Haadza madrasatun)",
          correct: "هَذِهِ مَدْرَسَةٌ (Haadihi madrasatun)",
          reason: "Madrasatun berakhiran Ta Marbuthah (ة), wajib menggunakan kata tunjuk feminin."
        },
        {
          wrong: "ذَلِكَ حَقِيبَةٌ (Dzalika haqiibatun)",
          correct: "تِلْكَ حَقِيبَةٌ (Tilka haqiibatun)",
          reason: "Haqiibatun adalah feminin, maka untuk jarak jauh wajib menggunakan Tilka."
        }
      ],
      comparisonWithIndonesian: "Berbeda dengan bahasa Indonesia yang menggunakan kata 'Ini' dan 'Itu' secara universal, bahasa Arab mewajibkan pemilihan kata tunjuk berdasarkan jenis kelamin benda. Jika bendanya 'cewek' (ada ة), maka 'Ini' berubah jadi Haadihi dan 'Itu' berubah jadi Tilka.",
      rules: [
        {
          title: "ISIM ISYARAH (KATA TUNJUK)",
          content: "Gunakan Haadza/Haadihi untuk jarak dekat, dan Dzalika/Tilka untuk jarak jauh.",
          examples: [
          ]
        }
      ],
      editorialBox: {
        title: "TIPS: MENGENALI GENDER",
        content: "Cara termudah mengenali benda feminin (perempuan) adalah dengan melihat apakah ada Ta Marbuthah (ة) di akhir katanya. Jika ada, gunakan Haadihi atau Tilka!"
      }
    },
    readingSection: {
      title: "Analisis Kalimat Utuh (Qira'ah)",
      sentences: [
        {
          ar: "هَذَا بَيْتٌ جَمِيلٌ وَهَذَا بَابٌ مَفْتُوحٌ",
          translation: "Ini rumah yang indah dan ini pintu yang terbuka",
          grammarNote: "هَذَا kata tunjuk dekat mudzakkar. بَيْتٌ khabar mudzakkar. جَمِيلٌ sifat mudzakkar. بَابٌ khabar mudzakkar kedua yang dihubungkan kata sambung (wawu 'athaf). مَفْتُوحٌ sifat mudzakkar."
        },
        {
          ar: "تِلْكَ نَافِذَةٌ صَغِيرَةٌ فِي غُرْفَةٍ كَبِيرَةٍ",
          translation: "Itu jendela kecil di dalam kamar yang besar",
          grammarNote: "تِلْكَ kata tunjuk jauh muannats. نَافِذَةٌ khabar muannats. صَغِيرَةٌ sifat muannats. فِي huruf jarr membuat غُرْفَةٍ majrur (kasrah tanwin) bergender muannats. كَبِيرَةٍ sifat muannats majrur mengikuti ghurfah."
        },
        {
          ar: "هَذَا مَكْتَبٌ جَدِيدٌ وَعَلَيْهِ كِتَابٌ وَقَلَمٌ",
          translation: "Ini meja baru dan di atasnya ada buku dan pena",
          grammarNote: "هَذَا kata tunjuk dekat mudzakkar. مَكْتَبٌ khabar mudzakkar. جَدِيدٌ sifat mudzakkar. عَلَيْهِ jarr majrur (khabar muqaddam). كِتَابٌ mubtada muakhkhar mudzakkar."
        },
        {
          ar: "هَذِهِ طَاوِلَةٌ كَبِيرَةٌ وَعَلَيْهَا مِصْبَاحٌ جَمِيلٌ",
          translation: "Ini meja makan yang besar dan di atasnya ada lampu yang indah",
          grammarNote: "هَذِهِ kata tunjuk dekat muannats. طَاوِلَةٌ khabar muannats. كَبِيرَةٌ sifat muannats. عَلَيْهَا jarr majrur dengan dhamir haa (perempuan) merujuk ke thawilah. مِصْبَاحٌ mubtada muakhkhar mudzakkar. جَمِيلٌ sifat mudzakkar."
        },
        {
          ar: "ذَلِكَ كُرْسِيٌّ مَكْسُورٌ وَتِلْكَ سَبُّورَةٌ نَظِيفَةٌ",
          translation: "Itu kursi yang patah dan itu papan tulis yang bersih",
          grammarNote: "ذَلِكَ kata tunjuk jauh mudzakkar. كُرْسِيٌّ khabar mudzakkar. مَكْسُورٌ sifat mudzakkar. تِلْكَ kata tunjuk jauh muannats. سَبُّورَةٌ khabar muannats. نَظِيفَةٌ sifat muannats."
        }
      ]
    },
    dialogueSection: {
      title: "Pertemuan Pertama Ahmad dan Khalid",
      context: "Ahmad dan Khalid bertemu pertama kali di masjid setelah shalat.",
      lines: [
        {
          speaker: "Ahmad",
          ar: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ",
          translation: "Semoga keselamatan, rahmat Allah, dan berkah-Nya tercurah kepadamu",
          meaning: "Semoga keselamatan, rahmat Allah, dan berkah-Nya tercurah kepadamu"
        },
        {
          speaker: "Khalid",
          ar: "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ",
          translation: "Dan semoga keselamatan, rahmat Allah, dan berkah-Nya juga tercurah kepadamu",
          meaning: "Dan semoga keselamatan, rahmat Allah, dan berkah-Nya juga tercurah kepadamu"
        },
        {
          speaker: "Ahmad",
          ar: "صَبَاحُ الْخَيْرِ يَا أَخِي، كَيْفَ حَالُكَ؟",
          translation: "Selamat pagi wahai saudaraku, bagaimana kabarmu?",
          meaning: "Selamat pagi wahai saudaraku, bagaimana kabarmu?"
        },
        {
          speaker: "Khalid",
          ar: "صَبَاحُ النُّورِ، أَنَا بِخَيْرٍ وَالْحَمْدُ لِلَّهِ. وَأَنْتَ؟",
          translation: "Selamat pagi juga, saya baik-baik saja alhamdulillah. Dan kamu?",
          meaning: "Selamat pagi juga, saya baik-baik saja alhamdulillah. Dan kamu?"
        },
        {
          speaker: "Ahmad",
          ar: "أَنَا بِخَيْرٍ أَيْضًا، شُكْرًا. مَا اسْمُكَ الْكَرِيمُ؟",
          translation: "Saya juga baik-baik saja, terima kasih. Siapa namamu yang mulia?",
          meaning: "Saya juga baik-baik saja, terima kasih. Siapa namamu yang mulia?"
        },
        {
          speaker: "Khalid",
          ar: "اِسْمِي خَالِدٌ. وَمَا اسْمُكَ أَنْتَ؟",
          translation: "Nama saya Khalid. Dan siapa namamu?",
          meaning: "Nama saya Khalid. Dan siapa namamu?"
        },
        {
          speaker: "Ahmad",
          ar: "اِسْمِي أَحْمَدُ. هَلْ أَنْتَ طَالِبٌ جَدِيدٌ هُنَا؟",
          translation: "Nama saya Ahmad. Apakah kamu siswa baru di sini?",
          meaning: "Nama saya Ahmad. Apakah kamu siswa baru di sini?"
        },
        {
          speaker: "Khalid",
          ar: "نَعَمْ، أَنَا طَالِبٌ فِي هَذِهِ الْمَدْرَسَةِ الرَّائِعَةِ",
          translation: "Ya, saya siswa di sekolah yang luar biasa ini",
          meaning: "Ya, saya siswa di sekolah yang luar biasa ini"
        },
        {
          speaker: "Ahmad",
          ar: "مَاشَاءَ اللَّهُ! أَهْلًا وَسَهْلًا بِكَ يَا خَالِدُ",
          translation: "Masya Allah! Selamat datang wahai Khalid",
          meaning: "Masya Allah! Selamat datang wahai Khalid"
        },
        {
          speaker: "Khalid",
          ar: "أَهْلًا بِكَ يَا أَحْمَدُ، أَنَا سَعِيدٌ بِلِقَائِكَ",
          translation: "Selamat datang kembali wahai Ahmad, saya senang bertemu denganmu",
          meaning: "Selamat datang kembali wahai Ahmad, saya senang bertemu denganmu"
        },
        {
          speaker: "Ahmad",
          ar: "وَأَنَا سَعِيدٌ جِدًّا أَيْضًا. هَيَّا بِنَا نَدْخُلُ الصَّفَّ",
          translation: "Dan saya juga sangat senang. Ayo kita masuk kelas",
          meaning: "Dan saya juga sangat senang. Ayo kita masuk kelas"
        },
        {
          speaker: "Khalid",
          ar: "هَيَّا بِنَا! بِسْمِ اللَّهِ التَّوْفِيقُ",
          translation: "Ayo! Dengan menyebut nama Allah semoga diberi kesuksesan",
          meaning: "Ayo! Dengan menyebut nama Allah semoga diberi kesuksesan"
        }
      ]
    },
    quiz: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Kamu menunjuk sebuah TAS (حَقِيبَةٌ) yang terletak jauh di seberang ruangan. Apa kalimat yang paling tepat secara gramatikal?",
        questionAr: "____ حَقِيبَةٌ",
        options: [
          "ذَلِكَ حَقِيبَةٌ (Dzalika haqiibatun)",
          "تِلْكَ حَقِيبَةٌ (Tilka haqiibatun)",
          "هَذَا حَقِيبَةٌ (Hadza haqiibatun)",
          "هَذِهِ حَقِيبَةٌ (Hadzihi haqiibatun)"
        ],
        correctAnswer: "تِلْكَ حَقِيبَةٌ (Tilka haqiibatun)",
        explanation: "Haqiibatun (حَقِيبَةٌ) memiliki huruf Ta Marbuthah (ة) di akhir kata, menandakan gender muannats. Karena bendanya jauh, maka kata tunjuk jauh yang tepat adalah Tilka (تِلْكَ)."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Manakah pasangan kata benda (isim) dan kata sifat (na'at) yang menunjukkan keselarasan gender yang sempurna?",
        options: [
          "مَسْجِدٌ جَدِيدَةٌ (Masjidun jadiidatun)",
          "سَيَّارَةٌ كَبِيرَةٌ (Sayyaaratun kabiiratun)",
          "كِتَابٌ كَبِيرَةٌ (Kitaabun kabiiratun)",
          "نَافِذَةٌ جَمِيلٌ (Naafidzatun jamiilun)"
        ],
        correctAnswer: "سَيَّارَةٌ كَبِيرَةٌ (Sayyaaratun kabiiratun)",
        explanation: "Sempurna! Sayyaaratun (mobil) adalah muannats (feminin) karena berakhiran Ta Marbuthah, dipasangkan dengan kata sifat Kabiiratun (besar) yang juga muannats. Keduanya selaras menggunakan akhiran Ta Marbuthah."
      },
      {
        id: "q3",
        type: "fill-blank",
        question: "Lengkapi kalimat berikut: 'Itu rumah (jauh) dan ini jendela (dekat)'.",
        questionAr: "___ بَيْتٌ وَ ___ نَافِذَةٌ",
        options: [
          "ذَلِكَ - هَذِهِ (Dzalika - Hadzihi)",
          "تِلْكَ - هَذَا (Tilka - Hadza)",
          "ذَلِكَ - هَذَا (Dzalika - Hadza)",
          "تِلْكَ - هَذِهِ (Tilka - Hadzihi)"
        ],
        correctAnswer: "ذَلِكَ - هَذِهِ (Dzalika - Hadzihi)",
        explanation: "Rumah (بَيْتٌ) adalah mudzakkar (maskulin), maka kata tunjuk jauhnya adalah ذَلِكَ (Dzalika). Jendela (نَافِذَةٌ) adalah muannats (feminin), maka kata tunjuk dekatnya adalah هَذِهِ (Hadzihi)."
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "Ketika kita menggunakan huruf Jarr 'فِي' (di dalam), harakat akhir kata benda yang mengikutinya berubah menjadi apa?",
        options: [
          "Fathah (a / tanwin an)",
          "Dhammah (u / tanwin un)",
          "Kasrah (i / tanwin in)",
          "Sukun (mati)"
        ],
        correctAnswer: "Kasrah (i / tanwin in)",
        explanation: "Huruf Jarr seperti 'fii' (فِي) berfungsi membuat kata benda setelahnya berstatus majrur, yang tanda dasarnya adalah harakat Kasrah (i). Contoh: فِي بَيْتٍ (fii baitin)."
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "Seseorang bertanya padamu: 'Apakah ini pulpen?' (أَهَذَا قَلَمٌ؟). Padahal yang kamu pegang adalah KUNCI (مِفْتَاحٌ). Bagaimana bantahan yang selaras secara gramatikal?",
        options: [
          "نَعَمْ، هَذَا قَلَمٌ (Na'am, hadza qalamun)",
          "لَا، هَذِهِ مِفْتَاحٌ (Laa, hadzihi miftaahun)",
          "لَا، هَذَا مِفْتَاحٌ (Laa, hadza miftaahun)",
          "نَعَمْ، هَذِهِ مِفْتَاحٌ (Na'am, hadzihi miftaahun)"
        ],
        correctAnswer: "لَا، هَذَا مِفْتَاحٌ (Laa, hadza miftaahun)",
        explanation: "Bantahan diawali dengan 'Laa' (Tidak). Karena Kunci (مِفْتَاحٌ) adalah mudzakkar (maskulin) tanpa Ta Marbuthah, kata tunjuk dekat yang tepat adalah هَذَا (Hadza)."
      },
      {
        id: "q6",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'بَابٌ'?",
        options: [
          "Kamar",
          "Pintu",
          "Meja",
          "Papan Tulis"
        ],
        correctAnswer: "Pintu",
        explanation: "بَابٌ (Baabun) berarti pintu. Kata ini bergender mudzakkar (maskulin)."
      },
      {
        id: "q7",
        type: "multiple-choice",
        question: "Apakah gender dari kata 'غُرْفَةٌ' (kamar)?",
        options: [
          "Mudzakkar (Maskulin)",
          "Muannats (Feminin)",
          "Netral",
          "Ganda"
        ],
        correctAnswer: "Muannats (Feminin)",
        explanation: "غُرْفَةٌ (Ghurfatun) bergender muannats karena berakhiran Ta Marbuthah (ة) di akhir katanya."
      },
      {
        id: "q8",
        type: "multiple-choice",
        question: "Manakah kata tunjuk (Isim Isyarah) dekat untuk benda bergender Mudzakkar?",
        options: [
          "هَذَا (Hadza)",
          "هَذِهِ (Hadzihi)",
          "ذَلِكَ (Dzalika)",
          "تِلْكَ (Tilka)"
        ],
        correctAnswer: "هَذَا (Hadza)",
        explanation: "هَذَا (Hadza) digunakan untuk menunjuk benda bergender Mudzakkar (maskulin) dalam jarak dekat (artinya: Ini)."
      },
      {
        id: "q9",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'مِصْبَاحٌ'?",
        options: [
          "Kunci",
          "Lampu",
          "Pena",
          "Sepatu"
        ],
        correctAnswer: "Lampu",
        explanation: "مِصْبَاحٌ (Mishbaahun) berarti lampu. Kata ini tidak memiliki Ta Marbuthah, sehingga bergender mudzakkar."
      },
      {
        id: "q10",
        type: "multiple-choice",
        question: "Bagaimana cara menunjukkan sebuah SEPEDAH (دَرَّاجَةٌ) yang berada di kejauhan (jauh)?",
        questionAr: "____ دَرَّاجَةٌ",
        options: [
          "ذَلِكَ دَرَّاجَةٌ (Dzalika darraajatun)",
          "تِلْكَ دَرَّاجَةٌ (Tilka darraajatun)",
          "هَذَا دَرَّاجَةٌ (Hadza darraajatun)",
          "هَذِهِ دَرَّاجَةٌ (Hadzihi darraajatun)"
        ],
        correctAnswer: "تِلْكَ دَرَّاجَةٌ (Tilka darraajatun)",
        explanation: "Darraajatun (دَرَّاجَةٌ) berakhiran Ta Marbuthah (ة), maka ia adalah muannats. Untuk menunjuknya di tempat yang jauh, kita wajib menggunakan تِلْكَ (Tilka)."
      },
      {
        id: "q11",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'مِسْطَرَةٌ'?",
        options: [
          "Tas",
          "Penggaris",
          "Kacamata",
          "Papan Tulis"
        ],
        correctAnswer: "Penggaris",
        explanation: "مِسْطَرَةٌ (Mishtharatun) berarti penggaris. Bergender muannats karena diakhiri Ta Marbuthah (ة)."
      },
      {
        id: "q12",
        type: "multiple-choice",
        question: "Mengapa kata 'مَسْجِدٌ' (masjid) dikategorikan sebagai Mudzakkar?",
        options: [
          "Karena bangunan masjid biasanya besar",
          "Karena tidak berakhiran Ta Marbuthah (ة)",
          "Karena memiliki kubah",
          "Karena selalu berharakat dhommah"
        ],
        correctAnswer: "Karena tidak berakhiran Ta Marbuthah (ة)",
        explanation: "Dalam kaidah gramatikal bahasa Arab, benda mati dikategorikan sebagai mudzakkar jika tidak memiliki tanda muannats, salah satunya adalah tidak berakhiran Ta Marbuthah (ة)."
      },
      {
        id: "q13",
        type: "multiple-choice",
        question: "Manakah kata tunjuk dekat yang tepat untuk kata 'سَاعَةٌ' (jam)?",
        questionAr: "____ سَاعَةٌ",
        options: [
          "هَذَا سَاعَةٌ (Hadza saa'atun)",
          "هَذِهِ سَاعَةٌ (Hadzihi saa'atun)",
          "ذَلِكَ سَاعَةٌ (Dzalika saa'atun)",
          "تِلْكَ سَاعَةٌ (Tilka saa'atun)"
        ],
        correctAnswer: "هَذِهِ سَاعَةٌ (Hadzihi saa'atun)",
        explanation: "Saa'atun (سَاعَةٌ) berakhiran Ta Marbuthah (ة) (muannats). Kata tunjuk dekat yang selaras adalah هَذِهِ (Hadzihi)."
      },
      {
        id: "q14",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'جَوَّالٌ'?",
        options: [
          "Kunci",
          "Handphone",
          "Kacamata",
          "Sepatu"
        ],
        correctAnswer: "Handphone",
        explanation: "جَوَّالٌ (Jawwaalun) berarti handphone/telepon genggam. Kata ini bergender mudzakkar."
      },
      {
        id: "q15",
        type: "multiple-choice",
        question: "Bagaimana cara menyebut 'siswi/pelajar perempuan' dalam bahasa Arab?",
        options: [
          "طَالِبٌ (Thaalibun)",
          "طَالِبَةٌ (Thaalibatun)",
          "أُسْتَاذٌ (Ustadzun)",
          "أُسْتَاذَةٌ (Ustadzatun)"
        ],
        correctAnswer: "طَالِبَةٌ (Thaalibatun)",
        explanation: "Siswa laki-laki adalah طَالِبٌ (Thaalibun). Untuk mengubah profesi atau status menjadi perempuan (muannats), kita menambahkan Ta Marbuthah (ة) di akhir kata, menjadi طَالِبَةٌ (Thaalibatun)."
      },
      {
        id: "q16",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'نَظَّارَةٌ'?",
        options: [
          "Sepatu",
          "Kacamata",
          "Jam Tangan",
          "Tas"
        ],
        correctAnswer: "Kacamata",
        explanation: "نَظَّارَةٌ (Nazh-zhaaratun) berarti kacamata. Bergender muannats karena diakhiri Ta Marbuthah (ة)."
      },
      {
        id: "q17",
        type: "multiple-choice",
        question: "Manakah pasangan kata tunjuk dekat dan benda mati yang TEPAT?",
        options: [
          "هَذَا نَافِذَةٌ (Hadza naafidzatun)",
          "هَذِهِ بَابٌ (Hadzihi baabun)",
          "هَذِهِ غُرْفَةٌ (Hadzihi ghurfatun)",
          "هَذَا طَاوِلَةٌ (Hadza thaawilatun)"
        ],
        correctAnswer: "هَذِهِ غُرْفَةٌ (Hadzihi ghurfatun)",
        explanation: "Ghurfatun (غُرْفَةٌ) bergender muannats karena berakhiran Ta Marbuthah (ة). Oleh karena itu, kata tunjuk dekat yang selaras adalah هَذِهِ (Hadzihi)."
      },
      {
        id: "q18",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'كُرْسِيٌّ'?",
        options: [
          "Meja",
          "Pintu",
          "Kursi",
          "Lampu"
        ],
        correctAnswer: "Kursi",
        explanation: "كُرْسِيٌّ (Kursiyyun) berarti kursi. Kata ini bergender mudzakkar."
      },
      {
        id: "q19",
        type: "multiple-choice",
        question: "Manakah kata tunjuk jauh yang tepat untuk menunjuk sebuah SEPATU (حِذَاءٌ)?",
        questionAr: "____ حِذَاءٌ",
        options: [
          "ذَلِكَ (Dzalika)",
          "تِلْكَ (Tilka)",
          "هَذَا (Hadza)",
          "هَذِهِ (Hadzihi)"
        ],
        correctAnswer: "ذَلِكَ (Dzalika)",
        explanation: "Sepatu (حِذَاءٌ) adalah mudzakkar karena tidak berakhiran Ta Marbuthah. Untuk jarak jauh, kita menggunakan kata tunjuk ذَلِكَ (Dzalika)."
      },
      {
        id: "q20",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'طَاوِلَةٌ'?",
        options: [
          "Kursi",
          "Meja Makan",
          "Jendela",
          "Kamar"
        ],
        correctAnswer: "Meja Makan",
        explanation: "طَاوِلَةٌ (Thaawilatun) berarti meja makan. Kata ini bergender muannats."
      },
      {
        id: "q21",
        type: "multiple-choice",
        question: "Apakah arti dan gender dari kata 'اِمْرَأَةٌ'?",
        options: [
          "Laki-laki, Mudzakkar",
          "Perempuan, Muannats",
          "Siswa, Mudzakkar",
          "Guru, Muannats"
        ],
        correctAnswer: "Perempuan, Muannats",
        explanation: "اِمْرَأَةٌ (Imra'atun) berarti seorang perempuan, secara hakiki dan gramatikal bergender muannats."
      },
      {
        id: "q22",
        type: "multiple-choice",
        question: "Manakah kalimat yang tepat untuk menyatakan 'Ini kunci yang baru'?",
        options: [
          "هَذَا مِفْتَاحٌ جَدِيدٌ (Hadza miftaahun jadiidun)",
          "هَذِهِ مِفْتَاحٌ جَدِيدَةٌ (Hadzihi miftaahun jadiidatun)",
          "هَذَا مِفْتَاحٌ جَدِيدَةٌ (Hadza miftaahun jadiidatun)",
          "هَذِهِ مِفْتَاحٌ جَدِيدٌ (Hadzihi miftaahun jadiidun)"
        ],
        correctAnswer: "هَذَا مِفْتَاحٌ جَدِيدٌ (Hadza miftaahun jadiidun)",
        explanation: "Miftaah (kunci) adalah mudzakkar, maka menggunakan kata tunjuk dekat هَذَا (Hadza) dan kata sifat جَدِيدٌ (jadiidun) yang sama-sama bergender mudzakkar."
      },
      {
        id: "q23",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'مَكْتَبٌ'?",
        options: [
          "Sekolah",
          "Perpustakaan",
          "Meja / Kantor",
          "Rumah"
        ],
        correctAnswer: "Meja / Kantor",
        explanation: "مَكْتَبٌ (Maktabun) berarti meja atau kantor. Bergender mudzakkar."
      },
      {
        id: "q24",
        type: "multiple-choice",
        question: "Manakah kalimat yang tepat untuk menyatakan 'Itu mobil yang indah (jauh)'?",
        options: [
          "ذَلِكَ سَيَّارَةٌ جَمِيلٌ (Dzalika sayyaaratun jamiilun)",
          "تِلْكَ سَيَّارَةٌ جَمِيلَةٌ (Tilka sayyaaratun jamiilatun)",
          "ذَلِكَ سَيَّارَةٌ جَمِيلَةٌ (Dzalika sayyaaratun jamiilatun)",
          "تِلْكَ سَيَّارَةٌ جَمِيلٌ (Tilka sayyaaratun jamiilun)"
        ],
        correctAnswer: "تِلْكَ سَيَّارَةٌ جَمِيلَةٌ (Tilka sayyaaratun jamiilatun)",
        explanation: "Mobil (سَيَّارَةٌ) adalah muannats, sehingga menggunakan kata tunjuk jauh تِلْكَ (Tilka) dan kata sifat جَمِيلَةٌ (jamiilatun) yang bergender muannats."
      },
      {
        id: "q25",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'سَبُّورَةٌ'?",
        options: [
          "Penggaris",
          "Papan Tulis",
          "Buku",
          "Meja"
        ],
        correctAnswer: "Papan Tulis",
        explanation: "سَبُّورَةٌ (Sabbuuratun) berarti papan tulis. Bergender muannats."
      },
      {
        id: "q26",
        type: "multiple-choice",
        question: "Apakah arti dan gender dari kata 'رَجُلٌ'?",
        options: [
          "Laki-laki, Mudzakkar",
          "Perempuan, Muannats",
          "Guru, Muannats",
          "Siswa, Mudzakkar"
        ],
        correctAnswer: "Laki-laki, Mudzakkar",
        explanation: "رَجُلٌ (Rajulun) berarti seorang laki-laki dewasa, secara hakiki dan gramatikal bergender mudzakkar."
      },
      {
        id: "q27",
        type: "multiple-choice",
        question: "Manakah di antara kata benda berikut yang bergender MUANNATS (Feminin)?",
        options: [
          "بَيْتٌ (Baytun)",
          "مِفْتَاحٌ (Miftaahun)",
          "سَاعَةٌ (Saa'atun)",
          "قَلَمٌ (Qalamun)"
        ],
        correctAnswer: "سَاعَةٌ (Saa'atun)",
        explanation: "Saa'atun (jam) bergender muannats karena memiliki Ta Marbuthah (ة) di akhirnya, sedangkan kata yang lain tidak memilikinya."
      },
      {
        id: "q28",
        type: "multiple-choice",
        question: "Bagaimana cara memperkenalkan guru perempuan kita di jarak dekat?",
        questionAr: "____ أُسْتَاذَتِي",
        options: [
          "هَذَا أُسْتَاذَتِي (Hadza ustaadzatii)",
          "هَذِهِ أُسْتَاذَتِي (Hadzihi ustaadzatii)",
          "ذَلِكَ أُسْتَاذَتِي (Dzalika ustaadzatii)",
          "تِلْكَ أُسْتَاذَتِي (Tilka ustaadzatii)"
        ],
        correctAnswer: "هَذِهِ أُسْتَاذَتِي (Hadzihi ustaadzatii)",
        explanation: "Guru perempuan saya (أُسْتَاذَتِي) adalah muannats. Untuk jarak dekat (ini), kita menggunakan kata tunjuk dekat muannats yaitu هَذِهِ (Hadzihi)."
      },
      {
        id: "q29",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'نَافِذَةٌ'?",
        options: [
          "Pintu",
          "Kamar",
          "Meja",
          "Jendela"
        ],
        correctAnswer: "Jendela",
        explanation: "نَافِذَةٌ (Naafidzatun) berarti jendela. Bergender muannats."
      },
      {
        id: "q30",
        type: "multiple-choice",
        question: "Apakah tanda gramatikal utama yang paling umum digunakan untuk membedakan kata benda Muannats dari Mudzakkar?",
        options: [
          "Harakat Kasrah di awal kata",
          "Adanya huruf Ta Marbuthah (ة) di akhir kata",
          "Panjang pendeknya bacaan",
          "Harakat Tanwin di akhir kata"
        ],
        correctAnswer: "Adanya huruf Ta Marbuthah (ة) di akhir kata",
        explanation: "Luar biasa! Tanda muannats yang paling utama dan umum pada kata benda/kata sifat dalam bahasa Arab adalah adanya huruf Ta Marbuthah (ة) di akhir kata."
      },
      {
        id: "q31",
        type: "multiple-choice",
        question: "Apa bahasa Arab dari 'PR (Pekerjaan Rumah)'?",
        options: [
          "دِرَاسَةٌ",
          "وَاجِبٌ مَنْزِلِيٌّ",
          "اِمْتِحَانٌ",
          "بَحْثٌ"
        ],
        correctAnswer: "وَاجِبٌ مَنْزِلِيٌّ",
        explanation: "وَاجِبٌ مَنْزِلِيٌّ (Waajibun manziliyyun) secara harfiah berarti kewajiban rumah atau PR."
      },
      {
        id: "q32",
        type: "multiple-choice",
        question: "Manakah yang berarti 'Kecerdasan Buatan (AI)'?",
        options: [
          "تَطْبِيقٌ ذَكِيٌّ",
          "ذَكَاءٌ اِصْطِنَاعِيٌّ",
          "شَبَكَةٌ عَالَمِيَّةٌ",
          "بَرِيدٌ إِلِكْتُرُونِيٌّ"
        ],
        correctAnswer: "ذَكَاءٌ اِصْطِنَاعِيٌّ",
        explanation: "ذَكَاءٌ اِصْطِنَاعِيٌّ (Dzakaa'un isthinaa'iyyun) adalah istilah Arab untuk Artificial Intelligence (AI)."
      },
      {
        id: "q33",
        type: "multiple-choice",
        question: "Apa arti dari 'شَاشَةٌ'?",
        options: [
          "Keyboard",
          "Layar",
          "Mouse",
          "Kamera"
        ],
        correctAnswer: "Layar",
        explanation: "شَاشَةٌ (Syaasyatun) berarti layar (monitor/screen)."
      },
      {
        id: "q34",
        type: "multiple-choice",
        question: "Apa arti dari 'مَوْقِعٌ' dalam konteks teknologi?",
        options: [
          "Tempat Parkir",
          "Situs Web",
          "Aplikasi",
          "Jaringan"
        ],
        correctAnswer: "Situs Web",
        explanation: "مَوْقِعٌ (Mauqi'un) dalam konteks internet berarti website atau situs web."
      },
      {
        id: "q35",
        type: "multiple-choice",
        question: "Apa bahasa Arab dari 'Laboratorium'?",
        options: [
          "مَكْتَبٌ",
          "مَعْمَلٌ",
          "فَصْلٌ",
          "قَاعَةٌ"
        ],
        correctAnswer: "مَعْمَلٌ",
        explanation: "مَعْمَلٌ (Ma'malun) berarti laboratorium atau tempat praktik/kerja."
      },
      {
        id: "q36",
        type: "multiple-choice",
        question: "Kata 'بَحْثٌ' berarti...",
        options: [
          "Ujian",
          "Penelitian/Riset",
          "Hasil Nilai",
          "Kurikulum"
        ],
        correctAnswer: "Penelitian/Riset",
        explanation: "بَحْثٌ (Bahtsun) berarti riset, penelitian, atau pembahasan ilmiah."
      },
      {
        id: "q37",
        type: "multiple-choice",
        question: "Manakah yang berarti 'Kata Sandi'?",
        options: [
          "كَلِمَةُ الْمُرُورِ",
          "اِسْمُ الْمُسْتَخْدِمِ",
          "رَقْمُ الْهَاتِفِ",
          "عُنْوَانُ الْبَرِيدِ"
        ],
        correctAnswer: "كَلِمَةُ الْمُرُورِ",
        explanation: "كَلِمَةُ الْمُرُورِ (Kalimatul muruur) adalah istilah untuk password atau kata sandi."
      },
      {
        id: "q38",
        type: "multiple-choice",
        question: "Apa arti dari 'نَتِيجَةٌ'?",
        options: [
          "Ujian",
          "Hasil / Nilai",
          "Sekolah",
          "Siswa"
        ],
        correctAnswer: "Hasil / Nilai",
        explanation: "نَتِيجَةٌ (Natiijatun) berarti hasil atau nilai (score/result)."
      },
      {
        id: "q39",
        type: "multiple-choice",
        question: "Apa bahasa Arab dari 'E-mail'?",
        options: [
          "رِسَالَةٌ وَرَقِيَّةٌ",
          "بَرِيدٌ إِلِكْتُرُونِيٌّ",
          "هَاتِفٌ ذَكِيٌّ",
          "حَاسُوبٌ"
        ],
        correctAnswer: "بَرِيدٌ إِلِكْتُرُونِيٌّ",
        explanation: "بَرِيدٌ إِلِكْتُرُونِيٌّ (Bariidun ilikturuuniyyun) berarti surat elektronik atau e-mail."
      },
      {
        id: "q40",
        type: "multiple-choice",
        question: "Manakah yang merupakan 'Ijazah / Sertifikat'?",
        options: [
          "كِتَابٌ",
          "شَهَادَةٌ",
          "وَرَقَةٌ",
          "قَلَمٌ"
        ],
        correctAnswer: "شَهَادَةٌ",
        explanation: "شَهَادَةٌ (Syahaadatun) selain berarti kesaksian, juga berarti ijazah atau sertifikat kelulusan."
      }
    ],
  },
};
