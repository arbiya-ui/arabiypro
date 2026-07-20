import { Lesson } from '../../types';

export const l2_6: Lesson = {
  id: "l2_6",
  title: "Al-Akhbar (Berita & Media)",
  titleAr: "الْأَخْبَارُ",
  description: "Pelajari bahasa media, jurnalistik Arab, serta memahami struktur Jumlah Fi'liyyah yang mendominasi teks berita.",
  xpReward: 40,
  isCompleted: false,
  isLocked: false,
  type: "quran",
  content: {
    introduction: "Selamat datang di jendela dunia, Bab 6: Al-Akhbar (Berita & Media). Setelah membekali diri dengan kosakata praktis dan profesional, kini saatnya Anda belajar memahami teks yang lebih kompleks dari media massa. Ingatlah betapa sulitnya dulu Anda membaca satu kata di Level 1; sekarang lihatlah betapa jauhnya Anda telah berkembang menjadi pembelajar yang kritis dan berwawasan luas.\n\nBab 6 akan membiasakan Anda dengan struktur berita, pengumuman, dan informasi terkini. Belajar itu mudah jika kita terus memperbarui informasi kita setiap hari. Kekuatan Anda terletak pada ketajaman analisis Anda. Tetaplah bersemangat, karena setelah mahir memahami berita dunia, kita akan menyelami kedalaman spiritualitas di bab berikutnya!",
    introTitle: "Jendela Dunia: Jurnalistik dan Kalimat Verbal",
    introVerse: {
      ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا",
      translation: "Hai orang-orang yang beriman, jika datang kepadamu orang fasik membawa suatu berita, maka periksalah dengan teliti (tabayyun). (QS. Al-Hujurat: 6)"
    },
    introBadges: [
      { icon: "📰", text: "ANALIS BERITA (Mampu membaca berita utama berbahasa Arab)" },
      { icon: "🗣️", text: "AHLI STRUKTUR (Kuasai Jumlah Fi'liyyah V-S-O)" }
    ],
    grammar: {
    "title": "Jumlah Fi'liyyah (Kalimat Verbal Berita)",
    "logicExplanation": "Berbeda dengan bahasa Indonesia yang hampir selalu berpola S-P-O (Subjek dulu, baru Predikat/Kata Kerja), bahasa Arab jurnalistik dan berita didominasi oleh **Jumlah Fi'liyyah** yang berpola P-S-O (Fi'il + Fa'il + Maf'ul Bih). Kalimat ini DIAWALI dengan Kata Kerja (Fi'il).\n\n**Kenapa Fi'il di Depan?**\nDalam teks berita Arab, menaruh aksi (verb) di awal bertujuan untuk langsung menarik perhatian pembaca pada 'kejadian' (Aksi) sebelum menyebutkan 'siapa pelakunya'. Ini membuat kalimat terasa dinamis dan aktif.\n\n**Logika Emas Jumlah Fi'liyyah:**\n1. **Fi'il Harus Tunggal (Mufrad)**: Kata kerja di awal kalimat SELALU berbentuk mufrad (tunggal), *meskipun* pelakunya (Fa'il) berjumlah dua orang atau jamak (banyak). \n   *(Salah: نَاقَشُوا الْوُزَرَاءُ - Para menteri mendiskusikan. Benar: نَاقَشَ الْوُزَرَاءُ)*.\n2. **Kesesuaian Gender**: Fi'il harus cocok dengan Fa'il dalam hal Mudzakkar (Laki-laki) atau Muannats (Perempuan).\n   *(Contoh: أَعْلَنَ الرَّئِيسُ - Presiden mengumumkan. VS أَعْلَنَتِ الْحُكُومَةُ - Pemerintah mengumumkan)*.\n3. **Harokat Akhir (I'rab)**: Fa'il (Pelaku) selalu Marfu' (berharakat dammah di akhir). Sedangkan Maf'ul Bih (Objek) selalu Manshub (berharakat fathah di akhir).",
    "examples": [
        {
            "ar": "أَعْلَنَتِ الْحُكُومَةُ قَرَارًا جَدِيدًا",
            "translation": "Pemerintah telah mengumumkan keputusan baru.",
            "grammarNote": "Logika: Fi'il (A'lanat) muannats karena Fa'il (Hukuumatu) muannats. Maf'ul bih (Qaraaran) berharakat fathah."
        },
        {
            "ar": "نَقَلَ الْمُرَاسِلُونَ أَخْبَارَ الِانْتِخَابَاتِ",
            "translation": "Para reporter melaporkan berita pemilu.",
            "grammarNote": "Logika: Fi'il di awal tetap mufrad (Naqala) MATAUPUN fa'ilnya jamak (Al-Muraasiluuna)."
        },
        {
            "ar": "شَهِدَتِ الْبِلَادُ أَزْمَةً اقْتِصَادِيَّةً",
            "translation": "Negara-negara mengalami krisis ekonomi.",
            "grammarNote": "Logika: Jamak taksir tidak berakal (Bilaad) dianggap sebagai muannats mufrad, sehingga fi'ilnya (Syahidat)."
        },
        {
            "ar": "يَبُثُّ التِّلْفَازُ بَرْنَامَجًا حِوَارِيًّا",
            "translation": "TV menyiarkan program talkshow.",
            "grammarNote": "Logika: Yabutstsu (Fi'il Mudhari' sedang/akan terjadi) + At-Tilfaazu (Fa'il marfu') + Barnamajan (Maf'ul bih manshub)."
        },
        {
            "ar": "رَفَضَ الْمَصْدَرُ ذِكْرَ التَّفَاصِيلِ",
            "translation": "Sumber (berita) menolak menyebutkan rincian.",
            "grammarNote": "Logika: Rafadha (Fi'il) + Al-Masdaru (Fa'il) + Dzikra (Maf'ul bih mudhaf)."
        },
        {
            "ar": "صَرَّحَ وَزِيرُ الصِّحَّةِ لِلصَّحَافَةِ",
            "translation": "Menteri kesehatan menyatakan kepada pers.",
            "grammarNote": "Logika: V + S + Keterangan (tanpa objek langsung). Waziiru sebagai Fa'il."
        }
    ],
    "commonMistakes": [
        "**1. Menjamakkan Fi'il di awal kalimat.**\nSiswa sering menulis: *نَشَرُوا الصُّحُفُ* (Koran-koran menerbitkan). \nBenar: *نَشَرَتِ الصُّحُفُ* (Fi'il harus tunggal).",
        "**2. Menukar harakat Subjek (Fa'il) dan Objek (Maf'ul Bih).**\nSiswa membaca: *نَقَلَ الْمُرَاسِلَ الْخَبَرُ* (Berita melaporkan reporter).\nBenar: *نَقَلَ الْمُرَاسِلُ الْخَبَرَ* (MuraasilU sebagai pelaku/dammah, KhabarA sebagai objek/fathah).",
        "**3. Salah jenis kelamin (Gender) Fi'il.**\nSiswa menulis: *قَالَ الصَّحِيفَةُ* (Koran berkata).\nBenar: *قَالَتِ الصَّحِيفَةُ* (Koran itu muannats, harus memakai ta' ta'nits).",
        "**4. Memaksakan pola S-P-O di teks berita Arab.**\nSiswa selalu memaksakan *الرَّئِيسُ أَعْلَنَ* padahal gaya bahasa berita Arab sejati lebih natural menggunakan V-S-O *أَعْلَنَ الرَّئِيسُ*."
    ],
    "tashrif": {
        "title": "Kata Kerja Laporan Jurnalistik (Madhi & Mudhari')",
        "rows": [
            {
                "dhamir": "هُوَ (Dia Lk / Instansi M)",
                "dhamirMeaning": "Pemerintah, Direktur, dll",
                "fiil": "صَرَّحَ",
                "akhiran": "يُصَرِّحُ",
                "contoh": "صَرَّحَ الْمُتَحَدِّثُ (Juru bicara menyatakan)"
            },
            {
                "dhamir": "هِيَ (Dia Pr / Instansi F)",
                "dhamirMeaning": "Koran, Stasiun TV, dll",
                "fiil": "صَرَّحَتْ",
                "akhiran": "تُصَرِّحُ",
                "contoh": "صَرَّحَتِ الصَّحِيفَةُ (Koran menyatakan)"
            },
            {
                "dhamir": "هُوَ (Dia Lk / Instansi M)",
                "dhamirMeaning": "Reporter Laki-laki",
                "fiil": "نَقَلَ",
                "akhiran": "يَنْقُلُ",
                "contoh": "نَقَلَ الْمُرَاسِلُ (Reporter melaporkan)"
            },
            {
                "dhamir": "هِيَ (Dia Pr / Instansi F)",
                "dhamirMeaning": "Saluran TV",
                "fiil": "نَقَلَتْ",
                "akhiran": "تَنْقُلُ",
                "contoh": "نَقَلَتِ الْقَنَاةُ (Channel melaporkan)"
            },
            {
                "dhamir": "هُوَ (Dia Lk / Kejadian M)",
                "dhamirMeaning": "Kecelakaan, Pertemuan",
                "fiil": "وَقَعَ",
                "akhiran": "يَقَعُ",
                "contoh": "وَقَعَ حَادِثٌ (Terjadi kecelakaan)"
            },
            {
                "dhamir": "هِيَ (Dia Pr / Kejadian F)",
                "dhamirMeaning": "Krisis, Bencana",
                "fiil": "وَقَعَتْ",
                "akhiran": "تَقَعُ",
                "contoh": "وَقَعَتْ أَزْمَةٌ (Terjadi krisis)"
            }
        ]
    }
},
    cards: [
    {
        "id": "l2_6_c1",
        "wordAr": "خَبَرٌ",
        "translation": "Berita",
        "description": "Informasi mengenai suatu kejadian (Jamak: أَخْبَارٌ).",
        "category": "Media",
        "examples": [
            {
                "ar": "قَرَأْتُ خَبَرًا عَاجِلًا",
                "translation": "Saya membaca berita sela (breaking news).",
                "grammarNote": "Logika: Jumlah Fi'liyyah. 'Qara'tu' (Fi'il+Fa'il), 'Khabaran' (Maf'ul Bih)."
            },
            {
                "ar": "نَشَرَتِ الصَّحِيفَةُ خَبَرًا",
                "translation": "Koran itu menerbitkan sebuah berita.",
                "grammarNote": "Logika: Fi'il 'Nasarat' muannats karena fa'il 'As-Sahiifah' muannats."
            },
            {
                "ar": "هَذَا خَبَرٌ مُفْرِحٌ",
                "translation": "Ini berita yang menggembirakan.",
                "grammarNote": "Logika: Jumlah Ismiyyah. Na'at (sifat) mengikuti man'ut."
            },
            {
                "ar": "مَا هُوَ أَهَمُّ خَبَرٍ الْيَوْمَ؟",
                "translation": "Apa berita terpenting hari ini?",
                "grammarNote": "Logika: Idhafah (Ahammu khabarin)."
            },
            {
                "ar": "أَذَاعَ الرَّادْيُو خَبَرًا سَيِّئًا",
                "translation": "Radio menyiarkan berita buruk.",
                "grammarNote": "Logika: Fi'il (Adzaa'a) - Fa'il (Radio) - Maf'ul Bih (Khabaran)."
            },
            {
                "ar": "انْتَشَرَ الْخَبَرُ بِسُرْعَةٍ",
                "translation": "Berita itu tersebar dengan cepat.",
                "grammarNote": "Logika: Fa'il 'Al-Khabaru' marfu' (dhammah)."
            },
            {
                "ar": "لَمْ أَسْمَعْ هَذَا الْخَبَرَ",
                "translation": "Saya belum mendengar berita ini.",
                "grammarNote": "Logika: 'Lam' me-majzum-kan fi'il mudhari'."
            },
            {
                "ar": "الْخَبَرُ الرَّئِيسِيُّ",
                "translation": "Berita utama / Headline.",
                "grammarNote": "Logika: Sifat mengikuti kata benda definit (Al-Khabaru)."
            },
            {
                "ar": "صِحَّةُ الْخَبَرِ",
                "translation": "Kebenaran berita tersebut.",
                "grammarNote": "Logika: Susunan Idhafah (Mudhaf - Mudhaf Ilaihi)."
            },
            {
                "ar": "نَقَلَ الْمُرَاسِلُ الْخَبَرَ",
                "translation": "Reporter melaporkan berita itu.",
                "grammarNote": "Logika: Jumlah Fi'liyyah standar (V-S-O)."
            }
        ]
    },
    {
        "id": "l2_6_c2",
        "wordAr": "صَحِيفَةٌ",
        "translation": "Surat Kabar / Koran",
        "description": "Media cetak berkala.",
        "category": "Media",
        "examples": [
            {
                "ar": "صَدَرَتِ الصَّحِيفَةُ الصَّبَاحِيَّةُ",
                "translation": "Koran pagi telah terbit.",
                "grammarNote": "Logika: Jumlah Fi'liyyah dengan Fa'il muannats (Ash-Shahiifah)."
            },
            {
                "ar": "قَرَأْتُ الْمَقَالَ فِي الصَّحِيفَةِ",
                "translation": "Saya membaca artikel di koran itu.",
                "grammarNote": "Logika: 'Fii' mengkasrahkan kata setelahnya (majrur)."
            },
            {
                "ar": "صَحِيفَةٌ مَحَلِّيَّةٌ",
                "translation": "Koran lokal.",
                "grammarNote": "Logika: Na'at (sifat) muannats."
            },
            {
                "ar": "صَحِيفَةٌ يَوْمِيَّةٌ",
                "translation": "Koran harian.",
                "grammarNote": "Logika: Sifat waktu."
            },
            {
                "ar": "تَصْدُرُ الصَّحِيفَةُ كُلَّ يَوْمٍ",
                "translation": "Koran itu terbit setiap hari.",
                "grammarNote": "Logika: Fi'il mudhari 'Tasduru' muannats."
            },
            {
                "ar": "رَئِيسُ تَحْرِيرِ الصَّحِيفَةِ",
                "translation": "Pemimpin redaksi koran.",
                "grammarNote": "Logika: Idhafah bersusun (Pemimpin - Redaksi - Koran)."
            },
            {
                "ar": "صَحَافَةٌ حُرَّةٌ",
                "translation": "Pers yang bebas.",
                "grammarNote": "Logika: 'Sahaafah' (pers/jurnalisme) berbeda dengan 'Sahiifah' (koran)."
            },
            {
                "ar": "صَحِيفَةٌ رَسْمِيَّةٌ",
                "translation": "Surat kabar resmi (berita negara).",
                "grammarNote": "Logika: Sifat muannats."
            },
            {
                "ar": "طَبَعَتِ الْمَطْبَعَةُ الصَّحِيفَةَ",
                "translation": "Percetakan itu mencetak koran.",
                "grammarNote": "Logika: 'Ash-Shahiifata' berharakat fathah sebagai Maf'ul Bih."
            },
            {
                "ar": "عَنَاوِينُ الصُّحُفِ",
                "translation": "Headline koran-koran (jamak).",
                "grammarNote": "Logika: Suhuuf adalah jamak taksir dari Sahiifah."
            }
        ]
    },
    {
        "id": "l2_6_c3",
        "wordAr": "صَحَفِيٌّ",
        "translation": "Wartawan / Jurnalis",
        "description": "Orang yang bekerja mencari dan menyusun berita.",
        "category": "Profesi",
        "examples": [
            {
                "ar": "طَرَحَ الصَّحَفِيُّ سُؤَالًا",
                "translation": "Wartawan itu mengajukan pertanyaan.",
                "grammarNote": "Logika: Fa'il (pelaku) berharakat dhammah, Maf'ul bih (objek) fathatain."
            },
            {
                "ar": "تَحَدَّثَ الرَّئِيسُ إِلَى الصَّحَفِيِّينَ",
                "translation": "Presiden berbicara kepada para wartawan.",
                "grammarNote": "Logika: 'Ila' memajrurkan jamak mudzakkar salim (menjadi Ya-Nun)."
            },
            {
                "ar": "صَحَفِيٌّ مَشْهُورٌ",
                "translation": "Wartawan terkenal.",
                "grammarNote": "Logika: Sifat mengikuti isim mudzakkar."
            },
            {
                "ar": "عَمَلُ الصَّحَفِيِّ شَاقٌّ",
                "translation": "Pekerjaan wartawan itu berat.",
                "grammarNote": "Logika: Mudhaf ilaihi selalu majrur (kasrah)."
            },
            {
                "ar": "مُؤْتَمَرٌ صَحَفِيٌّ",
                "translation": "Konferensi pers.",
                "grammarNote": "Logika: Na'at (sifat) yang menunjukkan kaitan dengan jurnalisme."
            },
            {
                "ar": "الصَّحَفِيَّةُ تُسَجِّلُ الصَّوْتَ",
                "translation": "Wartawati itu merekam suara.",
                "grammarNote": "Logika: Jumlah Ismiyyah. Khobarnya berupa Jumlah Fi'liyyah."
            },
            {
                "ar": "تَقْرِيرٌ صَحَفِيٌّ",
                "translation": "Laporan jurnalistik.",
                "grammarNote": "Logika: Nisbah (kata sifat dengan ya bertasydid)."
            },
            {
                "ar": "صَحَفِيٌّ حُرٌّ",
                "translation": "Wartawan lepas (Freelance).",
                "grammarNote": "Logika: Sifat mudzakkar."
            },
            {
                "ar": "اِعْتَقَلَتِ الشُّرْطَةُ صَحَفِيًّا",
                "translation": "Polisi menangkap seorang wartawan.",
                "grammarNote": "Logika: 'Sahafiyyan' fathatain karena sebagai objek."
            },
            {
                "ar": "نَقَابَةُ الصَّحَفِيِّينَ",
                "translation": "Persatuan/Serikat Wartawan.",
                "grammarNote": "Logika: Idhafah ke jamak majrur."
            }
        ]
    },
    {
        "id": "l2_6_c4",
        "wordAr": "إِعْلَانٌ",
        "translation": "Pengumuman / Iklan",
        "description": "Pernyataan publik (Masdar dari A'lana).",
        "category": "Konteks",
        "examples": [
            {
                "ar": "أَصْدَرَتِ الْحُكُومَةُ إِعْلَانًا رَسْمِيًّا",
                "translation": "Pemerintah mengeluarkan pengumuman resmi.",
                "grammarNote": "Logika: Fi'il (Asdarat) - Fa'il (Hukuumatu) - Maf'ul Bih (I'laanan)."
            },
            {
                "ar": "قَرَأْتُ الْإِعْلَانَ فِي الصَّحِيفَةِ",
                "translation": "Saya membaca iklan/pengumuman di koran.",
                "grammarNote": "Logika: Objek definit (fathah 1)."
            },
            {
                "ar": "إِعْلَانٌ هَامٌّ",
                "translation": "Pengumuman penting.",
                "grammarNote": "Logika: Na'at mudzakkar."
            },
            {
                "ar": "إِعْلَانٌ تِجَارِيٌّ",
                "translation": "Iklan komersial.",
                "grammarNote": "Logika: Sifat bidang bisnis."
            },
            {
                "ar": "نَشَرَ الْمُدِيرُ الْإِعْلَانَ",
                "translation": "Manajer mempublikasikan pengumuman.",
                "grammarNote": "Logika: V-S-O standar."
            },
            {
                "ar": "لَوْحَةُ الْإِعْلَانَاتِ",
                "translation": "Papan pengumuman/iklan (billboard).",
                "grammarNote": "Logika: Jamak muannats salim (I'laanaat)."
            },
            {
                "ar": "انْتَهَى الْإِعْلَانُ",
                "translation": "Pengumuman telah selesai.",
                "grammarNote": "Logika: Fa'il dari fi'il intransitif (dhammah)."
            },
            {
                "ar": "بِانْتِظَارِ الْإِعْلَانِ الرَّسْمِيِّ",
                "translation": "Menunggu pengumuman resmi.",
                "grammarNote": "Logika: Majrur setelah preposisi."
            },
            {
                "ar": "إِعْلَانُ النَّتَائِجِ",
                "translation": "Pengumuman hasil.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "شَاهَدْتُ إِعْلَانًا فِي التِّلْفَازِ",
                "translation": "Saya melihat iklan di TV.",
                "grammarNote": "Logika: Objek tak tentu."
            }
        ]
    },
    {
        "id": "l2_6_c5",
        "wordAr": "تَقْرِيرٌ",
        "translation": "Laporan / Reportase",
        "description": "Masdar dari Qarrara, tulisan/liputan detail.",
        "category": "Media",
        "examples": [
            {
                "ar": "كَتَبَ الصَّحَفِيُّ تَقْرِيرًا مُفَصَّلًا",
                "translation": "Wartawan itu menulis laporan yang terperinci.",
                "grammarNote": "Logika: Objek (Taqriiran) dan Sifatnya (Mufasshalan) sama-sama manshub."
            },
            {
                "ar": "قَدَّمَ الْمُرَاسِلُ تَقْرِيرَهُ",
                "translation": "Reporter menyajikan laporannya.",
                "grammarNote": "Logika: Objek bersambung dengan dhamir kepemilikan."
            },
            {
                "ar": "تَقْرِيرٌ مَيْدَانِيٌّ",
                "translation": "Laporan lapangan.",
                "grammarNote": "Logika: Nisbah tempat."
            },
            {
                "ar": "نَشَرَتِ الْقَنَاةُ تَقْرِيرًا عَنِ الْأَزْمَةِ",
                "translation": "Saluran TV mempublikasikan laporan tentang krisis.",
                "grammarNote": "Logika: Fa'il muannats (Qanaah) membuat fi'il (Nasarat) muannats."
            },
            {
                "ar": "حَسَبَ التَّقْرِيرِ الْأَخِيرِ",
                "translation": "Menurut laporan terakhir.",
                "grammarNote": "Logika: 'Hasaba' membuat kata setelahnya menjadi majrur (mudhaf ilaihi)."
            },
            {
                "ar": "تَقْرِيرٌ خَاصٌّ",
                "translation": "Laporan khusus.",
                "grammarNote": "Logika: Sifat eksklusif."
            },
            {
                "ar": "قَرَأْتُ تَقْرِيرًا رَائِعًا",
                "translation": "Saya membaca laporan yang luar biasa.",
                "grammarNote": "Logika: V-O."
            },
            {
                "ar": "بَثَّ التِّلْفَازُ تَقْرِيرًا حَيًّا",
                "translation": "TV menyiarkan laporan langsung.",
                "grammarNote": "Logika: 'Hayyan' berarti hidup/langsung (live)."
            },
            {
                "ar": "تَقْرِيرُ الْجَوِّ",
                "translation": "Laporan cuaca.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "التَّقْرِيرُ يُؤَكِّدُ الْحَادِثَ",
                "translation": "Laporan itu mengkonfirmasi kejadian tersebut.",
                "grammarNote": "Logika: Jumlah Ismiyyah. Khobarnya Jumlah Fi'liyyah."
            }
        ]
    },
    {
        "id": "l2_6_c6",
        "wordAr": "إِذَاعَةٌ",
        "translation": "Siaran / Stasiun Radio",
        "description": "Masdar dari Adzaa'a (Menyiarkan).",
        "category": "Media",
        "examples": [
            {
                "ar": "اسْتَمَعْتُ إِلَى الْإِذَاعَةِ",
                "translation": "Saya mendengarkan siaran (radio).",
                "grammarNote": "Logika: 'Istama'tu ila' adalah padanan baku untuk mendengarkan."
            },
            {
                "ar": "إِذَاعَةٌ مَحَلِّيَّةٌ",
                "translation": "Stasiun radio lokal.",
                "grammarNote": "Logika: Sifat muannats."
            },
            {
                "ar": "بَدَأَتِ الْإِذَاعَةُ بَرْنَامَجَهَا",
                "translation": "Radio memulai programnya.",
                "grammarNote": "Logika: Fi'il muannats (Bada'at) karena Fa'il (Idzaa'ah) muannats."
            },
            {
                "ar": "إِذَاعَةُ الْأَخْبَارِ",
                "translation": "Siaran berita.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "قَطَعَتِ الْإِذَاعَةُ بَثَّهَا",
                "translation": "Radio memutus siarannya.",
                "grammarNote": "Logika: Fa'il dan Objek."
            },
            {
                "ar": "إِذَاعَةٌ حَيَّةٌ",
                "translation": "Siaran langsung (Live broadcast).",
                "grammarNote": "Logika: Sifat muannats."
            },
            {
                "ar": "عَبْرَ الْإِذَاعَةِ",
                "translation": "Melalui siaran (radio).",
                "grammarNote": "Logika: Keterangan cara."
            },
            {
                "ar": "مُذِيعُ الْإِذَاعَةِ",
                "translation": "Penyiar radio.",
                "grammarNote": "Logika: Isim Fa'il (Mudzi') disandarkan ke Masdar."
            },
            {
                "ar": "إِذَاعَةُ الْقُرْآنِ الْكَرِيمِ",
                "translation": "Radio Al-Quran Al-Karim.",
                "grammarNote": "Logika: Nama instansi."
            },
            {
                "ar": "بَرْنَامَجٌ فِي الْإِذَاعَةِ",
                "translation": "Program di radio.",
                "grammarNote": "Logika: Keterangan tempat/media."
            }
        ]
    },
    {
        "id": "l2_6_c7",
        "wordAr": "قَنَاةٌ",
        "translation": "Saluran (Channel)",
        "description": "Saluran televisi atau media (Jamak: قَنَوَاتٌ).",
        "category": "Media",
        "examples": [
            {
                "ar": "شَاهَدْتُ الْخَبَرَ عَلَى قَنَاةِ الْجَزِيرَةِ",
                "translation": "Saya menonton berita di channel Al-Jazeera.",
                "grammarNote": "Logika: Idhafah nama saluran."
            },
            {
                "ar": "قَنَاةٌ إِخْبَارِيَّةٌ",
                "translation": "Saluran berita.",
                "grammarNote": "Logika: Nisbah (sifat) dari Akhbaar."
            },
            {
                "ar": "بَثَّتِ الْقَنَاةُ الْمُقَابَلَةَ",
                "translation": "Saluran itu menyiarkan wawancara.",
                "grammarNote": "Logika: Fi'il (Baththat) - Fa'il (Qanaatu) - Maf'ul Bih (Muqaabalata)."
            },
            {
                "ar": "مَا هِيَ قَنَاتُكَ الْمُفَضَّلَةُ؟",
                "translation": "Apa saluran favoritmu?",
                "grammarNote": "Logika: Isim tanya + Mubtada + Sifat."
            },
            {
                "ar": "غَيَّرْتُ الْقَنَاةَ",
                "translation": "Saya mengganti channel.",
                "grammarNote": "Logika: V-O."
            },
            {
                "ar": "قَنَوَاتٌ تِلِيفِزْيُونِيَّةٌ",
                "translation": "Saluran-saluran televisi (jamak).",
                "grammarNote": "Logika: Jamak muannats salim + sifat muannats."
            },
            {
                "ar": "قَنَاةٌ رِيَاضِيَّةٌ",
                "translation": "Channel olahraga.",
                "grammarNote": "Logika: Sifat bidang."
            },
            {
                "ar": "مُرَاسِلُ الْقَنَاةِ",
                "translation": "Reporter saluran (TV).",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "تَوَقَّفَ بَثُّ الْقَنَاةِ",
                "translation": "Siaran saluran itu berhenti.",
                "grammarNote": "Logika: Fa'il (Baththu) + Mudhaf ilaihi."
            },
            {
                "ar": "قَنَاةٌ رَسْمِيَّةٌ",
                "translation": "Saluran resmi.",
                "grammarNote": "Logika: Sifat formal."
            }
        ]
    },
    {
        "id": "l2_6_c8",
        "wordAr": "مَقَالٌ",
        "translation": "Artikel",
        "description": "Tulisan di koran, majalah, atau web (Jamak: مَقَالَاتٌ).",
        "category": "Media",
        "examples": [
            {
                "ar": "نَشَرَ الْكَاتِبُ مَقَالًا رَائِعًا",
                "translation": "Penulis itu mempublikasikan artikel yang luar biasa.",
                "grammarNote": "Logika: Fa'il (Kaatibu) dan Maf'ul Bih (Maqaalan)."
            },
            {
                "ar": "قَرَأْتُ مَقَالًا عَنِ الِاقْتِصَادِ",
                "translation": "Saya membaca artikel tentang ekonomi.",
                "grammarNote": "Logika: Penjelasan topik dengan 'An."
            },
            {
                "ar": "مَقَالٌ صَحَفِيٌّ",
                "translation": "Artikel jurnalistik.",
                "grammarNote": "Logika: Sifat."
            },
            {
                "ar": "عُنْوَانُ الْمَقَالِ جَذَّابٌ",
                "translation": "Judul artikel itu menarik.",
                "grammarNote": "Logika: Idhafah + Khabar (Jadz-dzaabun)."
            },
            {
                "ar": "كَتَبْتُ مَقَالًا قَصِيرًا",
                "translation": "Saya menulis artikel pendek.",
                "grammarNote": "Logika: Na'at (sifat) menyesuaikan objek."
            },
            {
                "ar": "مَقَالُ الرَّأْيِ",
                "translation": "Artikel opini / Tajuk rencana.",
                "grammarNote": "Logika: Idhafah kategori artikel."
            },
            {
                "ar": "تَرْجَمْتُ الْمَقَالَ",
                "translation": "Saya menerjemahkan artikel itu.",
                "grammarNote": "Logika: V-O."
            },
            {
                "ar": "مَقَالَاتٌ كَثِيرَةٌ",
                "translation": "Banyak artikel (jamak).",
                "grammarNote": "Logika: Jamak tak berakal disifati dengan isim muannats mufrad."
            },
            {
                "ar": "مَوْضُوعُ الْمَقَالِ",
                "translation": "Topik artikel.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "نُشِرَ الْمَقَالُ فِي الصَّفْحَةِ الْأُولَى",
                "translation": "Artikel itu diterbitkan di halaman pertama.",
                "grammarNote": "Logika: Fi'il majhul (pasif) + Naibul Fa'il (marfu')."
            }
        ]
    },
    {
        "id": "l2_6_c9",
        "wordAr": "عُنْوَانٌ",
        "translation": "Judul / Headline",
        "description": "Juga berarti Alamat (Jamak: عَنَاوِينُ).",
        "category": "Teks",
        "examples": [
            {
                "ar": "تَصَدَّرَ الْخَبَرُ عَنَاوِينَ الصُّحُفِ",
                "translation": "Berita itu memuncaki headline koran-koran.",
                "grammarNote": "Logika: 'Tasad-dara' (menjadi yang terdepan)."
            },
            {
                "ar": "عُنْوَانٌ بَارِزٌ",
                "translation": "Headline yang menonjol/besar.",
                "grammarNote": "Logika: Na'at mudzakkar."
            },
            {
                "ar": "عُنْوَانُ الْمَقَالِ",
                "translation": "Judul artikel.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "قَرَأْتُ الْعُنْوَانَ فَقَطْ",
                "translation": "Saya membaca judulnya saja.",
                "grammarNote": "Logika: Maf'ul bih definit."
            },
            {
                "ar": "الْعَنَاوِينُ الرَّئِيسِيَّةُ",
                "translation": "Headline utama (jamak).",
                "grammarNote": "Logika: Jamak taksir tidak berakal + sifat muannats."
            },
            {
                "ar": "عُنْوَانٌ جَذَّابٌ",
                "translation": "Judul yang menarik (clickbait).",
                "grammarNote": "Logika: Sifat mudzakkar."
            },
            {
                "ar": "كَتَبَ الْمُحَرِّرُ عُنْوَانًا كَبِيرًا",
                "translation": "Editor menulis judul yang besar.",
                "grammarNote": "Logika: V-S-O."
            },
            {
                "ar": "تَغْيِيرُ الْعُنْوَانِ",
                "translation": "Perubahan judul.",
                "grammarNote": "Logika: Masdar + Mudhaf ilaihi."
            },
            {
                "ar": "لَفَتَ الْعُنْوَانُ انْتِبَاهِي",
                "translation": "Judul itu menarik perhatianku.",
                "grammarNote": "Logika: Fa'il (Al-'Unwaanu) melakukan aksi 'Lafata' (menarik)."
            },
            {
                "ar": "عُنْوَانُ الْأَخْبَارِ",
                "translation": "Headline berita.",
                "grammarNote": "Logika: Idhafah ke jamak."
            }
        ]
    },
    {
        "id": "l2_6_c10",
        "wordAr": "مَصْدَرٌ",
        "translation": "Sumber (Berita)",
        "description": "Juga berarti tempat asal. (Jamak: مَصَادِرُ).",
        "category": "Media",
        "examples": [
            {
                "ar": "قَالَ مَصْدَرٌ مَسْؤُولٌ",
                "translation": "Seorang sumber yang bertanggung jawab (resmi) berkata.",
                "grammarNote": "Logika: Jumlah Fi'liyyah. 'Qaala' (Fi'il) + 'Masdarun' (Fa'il)."
            },
            {
                "ar": "حَسَبَ مَصْدَرٍ مَوْثُوقٍ",
                "translation": "Menurut sumber yang terpercaya.",
                "grammarNote": "Logika: 'Hasaba' membuat kata setelahnya majrur."
            },
            {
                "ar": "أَكَّدَتْ مَصَادِرُ طِبِّيَّةٌ الْخَبَرَ",
                "translation": "Sumber-sumber medis mengkonfirmasi berita itu.",
                "grammarNote": "Logika: Fa'il jamak tidak berakal (Masaadiru) membuat fi'il (Akkadat) menjadi muannats."
            },
            {
                "ar": "مَصْدَرُ الْخَبَرِ",
                "translation": "Sumber berita.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "نَفَتْ مَصَادِرُ رَسْمِيَّةٌ الشَّائِعَةَ",
                "translation": "Sumber-sumber resmi membantah rumor tersebut.",
                "grammarNote": "Logika: 'Nafat' (Membantah/Menegasikan)."
            },
            {
                "ar": "رَفَضَ الْمَصْدَرُ ذِكْرَ اسْمِهِ",
                "translation": "Sumber itu menolak disebutkan namanya.",
                "grammarNote": "Logika: Fi'il - Fa'il - Maf'ul Bih (Dzikra)."
            },
            {
                "ar": "مَصَادِرُ خَاصَّةٌ",
                "translation": "Sumber eksklusif/khusus.",
                "grammarNote": "Logika: Sifat muannats (karena Masaadir jamak taksir)."
            },
            {
                "ar": "صَرَّحَ مَصْدَرٌ أَمْنِيٌّ",
                "translation": "Seorang sumber keamanan menyatakan.",
                "grammarNote": "Logika: Nisbah (Amn - Amniyyun)."
            },
            {
                "ar": "تَعَدُّدُ الْمَصَادِرِ",
                "translation": "Keberagaman sumber.",
                "grammarNote": "Logika: Masdar wazan Tafa'ul."
            },
            {
                "ar": "مَصْدَرٌ مَجْهُولٌ",
                "translation": "Sumber anonim (tidak dikenal).",
                "grammarNote": "Logika: Isim Maf'ul."
            }
        ]
    },
    {
        "id": "l2_6_c11",
        "wordAr": "وَكَالَةُ أَنْبَاءٍ",
        "translation": "Kantor Berita / News Agency",
        "description": "Organisasi yang mengumpulkan laporan berita.",
        "category": "Media",
        "examples": [
            {
                "ar": "نَقَلَتْ وَكَالَةُ الْأَنْبَاءِ الْخَبَرَ",
                "translation": "Kantor berita itu melaporkan berita tersebut.",
                "grammarNote": "Logika: Fa'il adalah 'Wakaalatu' (muannats), sehingga fi'ilnya 'Naqalat'."
            },
            {
                "ar": "وَكَالَةُ أَنْبَاءٍ مَحَلِّيَّةٌ",
                "translation": "Kantor berita lokal.",
                "grammarNote": "Logika: Sifat mengikuti mudhaf (Wakaalah) yang muannats."
            },
            {
                "ar": "أَفَادَتْ وَكَالَةُ الْأَنْبَاءِ",
                "translation": "Kantor berita menginformasikan.",
                "grammarNote": "Logika: Fi'il 'Afaadat' (muannats)."
            },
            {
                "ar": "تَعْمَلُ فِي وَكَالَةِ أَنْبَاءٍ",
                "translation": "Dia (perempuan) bekerja di kantor berita.",
                "grammarNote": "Logika: Majrur dengan 'Fi'."
            },
            {
                "ar": "وَكَالَةُ أَنْبَاءٍ رَسْمِيَّةٌ",
                "translation": "Kantor berita resmi (negara).",
                "grammarNote": "Logika: Sifat resmi."
            },
            {
                "ar": "مُرَاسِلُ وَكَالَةِ الْأَنْبَاءِ",
                "translation": "Koresponden kantor berita.",
                "grammarNote": "Logika: Idhafah bersusun."
            },
            {
                "ar": "بَثَّتْ وَكَالَةُ رُويْتَرْز صُوَرًا",
                "translation": "Kantor berita Reuters menyiarkan foto-foto.",
                "grammarNote": "Logika: Penggabungan nama asing."
            },
            {
                "ar": "وَكَالَةُ أَنْبَاءٍ دَوْلِيَّةٌ",
                "translation": "Kantor berita internasional.",
                "grammarNote": "Logika: Sifat skala."
            },
            {
                "ar": "تَصْرِيحٌ لِوَكَالَةِ الْأَنْبَاءِ",
                "translation": "Pernyataan kepada kantor berita.",
                "grammarNote": "Logika: Preposisi 'Li' membuat kasrah."
            },
            {
                "ar": "تَقْرِيرُ وَكَالَةِ الْأَنْبَاءِ",
                "translation": "Laporan kantor berita.",
                "grammarNote": "Logika: Idhafah."
            }
        ]
    },
    {
        "id": "l2_6_c12",
        "wordAr": "حَادِثٌ",
        "translation": "Insiden / Kecelakaan / Kejadian",
        "description": "Peristiwa tidak terduga atau berita kriminal.",
        "category": "Peristiwa",
        "examples": [
            {
                "ar": "وَقَعَ حَادِثٌ مُرُورِيٌّ",
                "translation": "Telah terjadi kecelakaan lalu lintas.",
                "grammarNote": "Logika: Fi'il (Waqa'a) + Fa'il (Haaditsun) + Na'at (Muruuriyyun)."
            },
            {
                "ar": "تَغْطِيَةُ الْحَادِثِ",
                "translation": "Peliputan kejadian itu.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "شَهِدْتُ الْحَادِثَ بِنَفْسِي",
                "translation": "Saya menyaksikan kejadian itu sendiri.",
                "grammarNote": "Logika: V-S-O. 'Binafsii' untuk penegasan."
            },
            {
                "ar": "حَادِثٌ مَأْسَاوِيٌّ",
                "translation": "Insiden yang tragis.",
                "grammarNote": "Logika: Na'at."
            },
            {
                "ar": "تَحْقِيقٌ فِي الْحَادِثِ",
                "translation": "Penyelidikan atas insiden tersebut.",
                "grammarNote": "Logika: Preposisi 'Fi' digunakan untuk topik investigasi."
            },
            {
                "ar": "مَكَانُ الْحَادِثِ",
                "translation": "Tempat kejadian perkara (TKP).",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "حَوَادِثُ السَّيَّارَاتِ",
                "translation": "Kecelakaan mobil (jamak).",
                "grammarNote": "Logika: Hawaadits adalah jamak taksir dari Haadits."
            },
            {
                "ar": "أَسْبَابُ الْحَادِثِ مَجْهُولَةٌ",
                "translation": "Penyebab kejadian masih belum diketahui.",
                "grammarNote": "Logika: Mubtada jamak tak berakal + Khabar muannats mufrad."
            },
            {
                "ar": "نَقَلَ التِّلْفَازُ صُوَرَ الْحَادِثِ",
                "translation": "TV menyiarkan foto-foto kejadian.",
                "grammarNote": "Logika: V-S-O."
            },
            {
                "ar": "نَجَا مِنَ الْحَادِثِ",
                "translation": "Dia selamat dari kecelakaan.",
                "grammarNote": "Logika: Preposisi 'Min'."
            }
        ]
    },
    {
        "id": "l2_6_c13",
        "wordAr": "سِيَاسَةٌ",
        "translation": "Politik / Kebijakan",
        "description": "Topik pemerintahan dan kebijakan.",
        "category": "Topik",
        "examples": [
            {
                "ar": "خَبَرٌ فِي قِسْمِ السِّيَاسَةِ",
                "translation": "Berita di rubrik politik.",
                "grammarNote": "Logika: Majrur setelah Idhafah."
            },
            {
                "ar": "السِّيَاسَةُ الْخَارِجِيَّةُ",
                "translation": "Politik luar negeri (Foreign policy).",
                "grammarNote": "Logika: Na'at (sifat) muannats."
            },
            {
                "ar": "مُحَلِّلٌ سِيَاسِيٌّ",
                "translation": "Analis politik.",
                "grammarNote": "Logika: Nisbah (kata sifat keilmuan)."
            },
            {
                "ar": "أَزْمَةٌ سِيَاسِيَّةٌ",
                "translation": "Krisis politik.",
                "grammarNote": "Logika: Sifat mengikuti krisis (muannats)."
            },
            {
                "ar": "قَرَارٌ سِيَاسِيٌّ هَامٌّ",
                "translation": "Keputusan politik yang penting.",
                "grammarNote": "Logika: Dua kata sifat berurutan."
            },
            {
                "ar": "سِيَاسَةُ الْحُكُومَةِ جَدِيدَةٌ",
                "translation": "Kebijakan pemerintah itu baru.",
                "grammarNote": "Logika: Mubtada (Idhafah) + Khabar."
            },
            {
                "ar": "أَخْبَارُ السِّيَاسَةِ",
                "translation": "Berita-berita politik.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "تَطَوُّرَاتٌ سِيَاسِيَّةٌ",
                "translation": "Perkembangan politik (jamak).",
                "grammarNote": "Logika: Jamak muannats salim."
            },
            {
                "ar": "لَا أَهْتَمُّ بِالسِّيَاسَةِ",
                "translation": "Saya tidak peduli dengan politik.",
                "grammarNote": "Logika: 'Ihtamma bi' (peduli dengan)."
            },
            {
                "ar": "حِوَارٌ سِيَاسِيٌّ",
                "translation": "Dialog politik.",
                "grammarNote": "Logika: Sifat."
            }
        ]
    },
    {
        "id": "l2_6_c14",
        "wordAr": "اقْتِصَادٌ",
        "translation": "Ekonomi",
        "description": "Masdar Istif'aal (Iqtisad). Topik bisnis/keuangan.",
        "category": "Topik",
        "examples": [
            {
                "ar": "نَمَا الِاقْتِصَادُ الْوَطَنِيُّ",
                "translation": "Ekonomi nasional telah tumbuh.",
                "grammarNote": "Logika: Fi'il (Namaa) + Fa'il marfu'."
            },
            {
                "ar": "أَخْبَارُ الِاقْتِصَادِ",
                "translation": "Berita ekonomi.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "أَزْمَةٌ اقْتِصَادِيَّةٌ",
                "translation": "Krisis ekonomi.",
                "grammarNote": "Logika: Nisbah muannats."
            },
            {
                "ar": "النُّمُوُّ الِاقْتِصَادِيُّ",
                "translation": "Pertumbuhan ekonomi.",
                "grammarNote": "Logika: Na'at (sifat) mudzakkar."
            },
            {
                "ar": "خَبِيرٌ اقْتِصَادِيٌّ",
                "translation": "Pakar ekonomi.",
                "grammarNote": "Logika: Sifat."
            },
            {
                "ar": "تَقْرِيرٌ عَنِ الِاقْتِصَادِ",
                "translation": "Laporan tentang ekonomi.",
                "grammarNote": "Logika: Preposisi 'An'."
            },
            {
                "ar": "وَزِيرُ الِاقْتِصَادِ",
                "translation": "Menteri Ekonomi.",
                "grammarNote": "Logika: Gelar jabatan."
            },
            {
                "ar": "تَحَسَّنَ الِاقْتِصَادُ هَذَا الْعَامَ",
                "translation": "Ekonomi membaik tahun ini.",
                "grammarNote": "Logika: Fa'il dari fi'il 'Tahassana'."
            },
            {
                "ar": "عُقُوبَاتٌ اقْتِصَادِيَّةٌ",
                "translation": "Sanksi ekonomi.",
                "grammarNote": "Logika: Jamak."
            },
            {
                "ar": "وِزَارَةُ الِاقْتِصَادِ",
                "translation": "Kementerian Ekonomi.",
                "grammarNote": "Logika: Nama instansi."
            }
        ]
    },
    {
        "id": "l2_6_c15",
        "wordAr": "رِيَاضَةٌ",
        "translation": "Olahraga",
        "description": "Topik olahraga di media.",
        "category": "Topik",
        "examples": [
            {
                "ar": "شَاهَدْتُ الْأَخْبَارَ الرِّيَاضِيَّةَ",
                "translation": "Saya menonton berita olahraga.",
                "grammarNote": "Logika: Maf'ul bih jamak taksir + Sifat muannats."
            },
            {
                "ar": "صَفْحَةُ الرِّيَاضَةِ",
                "translation": "Halaman olahraga (di koran).",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "بَرْنَامَجٌ رِيَاضِيٌّ",
                "translation": "Program olahraga.",
                "grammarNote": "Logika: Nisbah."
            },
            {
                "ar": "قَنَاةٌ رِيَاضِيَّةٌ",
                "translation": "Channel olahraga.",
                "grammarNote": "Logika: Sifat muannats."
            },
            {
                "ar": "فَرِيقٌ رِيَاضِيٌّ",
                "translation": "Tim olahraga.",
                "grammarNote": "Logika: Na'at."
            },
            {
                "ar": "مُعَلِّقٌ رِيَاضِيٌّ",
                "translation": "Komentator olahraga.",
                "grammarNote": "Logika: Profesi media."
            },
            {
                "ar": "أَحْدَاثٌ رِيَاضِيَّةٌ",
                "translation": "Acara/Peristiwa olahraga.",
                "grammarNote": "Logika: Jamak taksir."
            },
            {
                "ar": "مَلْعَبٌ رِيَاضِيٌّ",
                "translation": "Stadion olahraga.",
                "grammarNote": "Logika: Isim makan."
            },
            {
                "ar": "تَغْطِيَةٌ رِيَاضِيَّةٌ",
                "translation": "Peliputan olahraga.",
                "grammarNote": "Logika: Jurnalisme."
            },
            {
                "ar": "فَازَ فِي مُسَابَقَةِ الرِّيَاضَةِ",
                "translation": "Dia menang dalam kompetisi olahraga.",
                "grammarNote": "Logika: Majrur idhafah."
            }
        ]
    },
    {
        "id": "l2_6_c16",
        "wordAr": "طَقْسٌ",
        "translation": "Cuaca",
        "description": "Kondisi atmosfer harian.",
        "category": "Topik",
        "examples": [
            {
                "ar": "أَعْلَنَتِ الْقَنَاةُ حَالَةَ الطَّقْسِ",
                "translation": "Channel itu mengumumkan kondisi cuaca.",
                "grammarNote": "Logika: Fi'il (A'lanat) + Maf'ul Bih (Haalata)."
            },
            {
                "ar": "النَّشْرَةُ الْجَوِّيَّةُ",
                "translation": "Prakiraan cuaca (Istilah formal).",
                "grammarNote": "Logika: Na'at."
            },
            {
                "ar": "الطَّقْسُ بَارِدٌ الْيَوْمَ",
                "translation": "Cuaca hari ini dingin.",
                "grammarNote": "Logika: Jumlah Ismiyyah."
            },
            {
                "ar": "سُوءُ الطَّقْسِ",
                "translation": "Cuaca buruk.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "تَوَقُّعَاتُ الطَّقْسِ",
                "translation": "Prakiraan cuaca (Prediksi).",
                "grammarNote": "Logika: Jamak muannats salim."
            },
            {
                "ar": "بِسَبَبِ الطَّقْسِ",
                "translation": "Karena cuaca.",
                "grammarNote": "Logika: Majrur."
            },
            {
                "ar": "طَقْسٌ حَارٌّ",
                "translation": "Cuaca panas.",
                "grammarNote": "Logika: Na'at."
            },
            {
                "ar": "تَغَيُّرُ الطَّقْسِ",
                "translation": "Perubahan cuaca.",
                "grammarNote": "Logika: Masdar tafa'ul."
            },
            {
                "ar": "أَخْبَارُ الطَّقْسِ مُهِمَّةٌ",
                "translation": "Berita cuaca itu penting.",
                "grammarNote": "Logika: Mubtada jamak + Khabar mufrad muannats."
            },
            {
                "ar": "حَذَّرَتِ الْحُكُومَةُ مِنَ الطَّقْسِ",
                "translation": "Pemerintah memperingatkan tentang cuaca.",
                "grammarNote": "Logika: 'Hadzdza min' (memperingatkan dari)."
            }
        ]
    },
    {
        "id": "l2_6_c17",
        "wordAr": "أَزْمَةٌ",
        "translation": "Krisis / Masa Sulit",
        "description": "Kondisi darurat ekonomi/politik (Jamak: أَزَمَاتٌ).",
        "category": "Peristiwa",
        "examples": [
            {
                "ar": "انْدَلَعَتْ أَزْمَةٌ سِيَاسِيَّةٌ",
                "translation": "Telah meletus krisis politik.",
                "grammarNote": "Logika: Fi'il (Indala'at) + Fa'il muannats (Azmatun)."
            },
            {
                "ar": "حَلُّ الْأَزْمَةِ",
                "translation": "Penyelesaian krisis.",
                "grammarNote": "Logika: Idhafah masdar."
            },
            {
                "ar": "أَزْمَةٌ اقْتِصَادِيَّةٌ طَاحِنَةٌ",
                "translation": "Krisis ekonomi yang parah.",
                "grammarNote": "Logika: Sifat berantai."
            },
            {
                "ar": "نَاقَشَ الْوُزَرَاءُ الْأَزْمَةَ",
                "translation": "Para menteri mendiskusikan krisis itu.",
                "grammarNote": "Logika: V-S-O. Fi'il tetap mufrad (Naaqasya) meski Fa'il jamak (Al-Wuzaraau)."
            },
            {
                "ar": "الْخُرُوجُ مِنَ الْأَزْمَةِ",
                "translation": "Keluar dari krisis.",
                "grammarNote": "Logika: Majrur."
            },
            {
                "ar": "إِدَارَةُ الْأَزَمَاتِ",
                "translation": "Manajemen krisis (jamak).",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "أَزْمَةٌ عَالَمِيَّةٌ",
                "translation": "Krisis global.",
                "grammarNote": "Logika: Nisbah tempat."
            },
            {
                "ar": "عُقِدَ مُؤْتَمَرٌ حَوْلَ الْأَزْمَةِ",
                "translation": "Digelar konferensi seputar krisis tersebut.",
                "grammarNote": "Logika: Fi'il majhul ('Uqida)."
            },
            {
                "ar": "أَزْمَةٌ مَالِيَّةٌ",
                "translation": "Krisis keuangan.",
                "grammarNote": "Logika: Sifat."
            },
            {
                "ar": "تَفَاقَمَتِ الْأَزْمَةُ",
                "translation": "Krisisnya memburuk.",
                "grammarNote": "Logika: Fi'il Tafa'ala (saling/semakin besar)."
            }
        ]
    },
    {
        "id": "l2_6_c18",
        "wordAr": "انْتِخَابَاتٌ",
        "translation": "Pemilihan Umum (Pemilu)",
        "description": "Jamak dari Intikhaab (Pemilihan).",
        "category": "Topik",
        "examples": [
            {
                "ar": "أُجْرِيَتِ الِانْتِخَابَاتُ أَمْسِ",
                "translation": "Pemilu diselenggarakan kemarin.",
                "grammarNote": "Logika: Fi'il majhul ('Ujriyat) + Naibul Fa'il jamak muannats salim."
            },
            {
                "ar": "انْتِخَابَاتٌ رِئَاسِيَّةٌ",
                "translation": "Pemilu presiden.",
                "grammarNote": "Logika: Nisbah sifat."
            },
            {
                "ar": "فَازَ فِي الِانْتِخَابَاتِ",
                "translation": "Dia menang dalam pemilu.",
                "grammarNote": "Logika: Preposisi 'Fi'."
            },
            {
                "ar": "نَتَائِجُ الِانْتِخَابَاتِ",
                "translation": "Hasil pemilu.",
                "grammarNote": "Logika: Idhafah jamak ke jamak."
            },
            {
                "ar": "لَجْنَةُ الِانْتِخَابَاتِ",
                "translation": "Komisi pemilihan (KPU).",
                "grammarNote": "Logika: Nama lembaga."
            },
            {
                "ar": "شَارَكَ الشَّعْبُ فِي الِانْتِخَابَاتِ",
                "translation": "Rakyat berpartisipasi dalam pemilu.",
                "grammarNote": "Logika: V-S-O/Ket."
            },
            {
                "ar": "مَوْسِمُ الِانْتِخَابَاتِ",
                "translation": "Musim pemilu.",
                "grammarNote": "Logika: Waktu."
            },
            {
                "ar": "تَأْجِيلُ الِانْتِخَابَاتِ",
                "translation": "Penundaan pemilu.",
                "grammarNote": "Logika: Masdar."
            },
            {
                "ar": "حَمْلَةُ الِانْتِخَابَاتِ",
                "translation": "Kampanye pemilu.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "مُرَاقَبَةُ الِانْتِخَابَاتِ",
                "translation": "Pengawasan pemilu.",
                "grammarNote": "Logika: Jurnalisme."
            }
        ]
    },
    {
        "id": "l2_6_c19",
        "wordAr": "مُؤْتَمَرٌ صَحَفِيٌّ",
        "translation": "Konferensi Pers",
        "description": "Acara jumpa pers resmi.",
        "category": "Media",
        "examples": [
            {
                "ar": "عَقَدَ الْوَزِيرُ مُؤْتَمَرًا صَحَفِيًّا",
                "translation": "Menteri mengadakan konferensi pers.",
                "grammarNote": "Logika: Fi'il ('Aqada) + Fa'il + Maf'ul Bih berserta sifatnya (fathatain)."
            },
            {
                "ar": "حَضَرْتُ الْمُؤْتَمَرَ الصَّحَفِيَّ",
                "translation": "Saya menghadiri konferensi pers.",
                "grammarNote": "Logika: Objek definit (fathah 1)."
            },
            {
                "ar": "بَثَّتِ الْقَنَاةُ الْمُؤْتَمَرَ",
                "translation": "Channel itu menyiarkan konferensi tersebut.",
                "grammarNote": "Logika: V-S-O."
            },
            {
                "ar": "فِي خِتَامِ الْمُؤْتَمَرِ الصَّحَفِيِّ",
                "translation": "Di akhir konferensi pers.",
                "grammarNote": "Logika: Majrur karena idhafah + sifatnya juga majrur."
            },
            {
                "ar": "مُؤْتَمَرٌ صَحَفِيٌّ عَاجِلٌ",
                "translation": "Konferensi pers darurat.",
                "grammarNote": "Logika: Dua sifat."
            },
            {
                "ar": "أَعْلَنَ ذَلِكَ فِي مُؤْتَمَرٍ صَحَفِيٍّ",
                "translation": "Dia mengumumkan hal itu dalam konferensi pers.",
                "grammarNote": "Logika: Majrur (kasratain)."
            },
            {
                "ar": "انْتَهَى الْمُؤْتَمَرُ الصَّحَفِيُّ",
                "translation": "Konferensi pers telah berakhir.",
                "grammarNote": "Logika: Fa'il marfu' (dhammah)."
            },
            {
                "ar": "دَعْوَةٌ لِمُؤْتَمَرٍ صَحَفِيٍّ",
                "translation": "Undangan untuk konferensi pers.",
                "grammarNote": "Logika: Preposisi 'Li'."
            },
            {
                "ar": "تَغْطِيَةُ الْمُؤْتَمَرِ الصَّحَفِيِّ",
                "translation": "Peliputan konferensi pers.",
                "grammarNote": "Logika: Jurnalisme."
            },
            {
                "ar": "أَجَابَ الرَّئِيسُ فِي الْمُؤْتَمَرِ",
                "translation": "Presiden menjawab (pertanyaan) di konferensi itu.",
                "grammarNote": "Logika: V-S-Ket."
            }
        ]
    },
    {
        "id": "l2_6_c20",
        "wordAr": "حِوَارٌ",
        "translation": "Dialog / Talkshow",
        "description": "Percakapan dua arah atau program wicara.",
        "category": "Media",
        "examples": [
            {
                "ar": "أَجْرَى الصَّحَفِيُّ حِوَارًا مَعَ الْوَزِيرِ",
                "translation": "Wartawan melakukan wawancara/dialog dengan menteri.",
                "grammarNote": "Logika: 'Ajraa' (Melakukan) + Maf'ul Bih."
            },
            {
                "ar": "بَرْنَامَجٌ حِوَارِيٌّ",
                "translation": "Program talkshow.",
                "grammarNote": "Logika: Nisbah."
            },
            {
                "ar": "شَاهَدْتُ حِوَارًا تِلِيفِزْيُونِيًّا",
                "translation": "Saya menonton dialog televisi.",
                "grammarNote": "Logika: V-O + Sifat."
            },
            {
                "ar": "حِوَارٌ حَصْرِيٌّ",
                "translation": "Dialog/Wawancara eksklusif.",
                "grammarNote": "Logika: Sifat (Hasriyyun)."
            },
            {
                "ar": "دَعَا لِحِوَارٍ وَطَنِيٍّ",
                "translation": "Dia menyerukan dialog nasional.",
                "grammarNote": "Logika: Majrur dengan 'Li'."
            },
            {
                "ar": "فِي حِوَارِهِ مَعَ الصَّحِيفَةِ",
                "translation": "Dalam wawancaranya dengan koran itu.",
                "grammarNote": "Logika: Idhafah dengan dhamir."
            },
            {
                "ar": "أَدَارَ الْمُذِيعُ الْحِوَارَ جَيِّدًا",
                "translation": "Penyiar memandu dialog dengan baik.",
                "grammarNote": "Logika: V-S-O + Hal."
            },
            {
                "ar": "حِوَارٌ مُبَاشِرٌ",
                "translation": "Dialog langsung (Live).",
                "grammarNote": "Logika: Sifat."
            },
            {
                "ar": "ضَيْفُ الْحِوَارِ",
                "translation": "Bintang tamu dialog.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "حِوَارٌ صَرِيحٌ",
                "translation": "Dialog yang terus terang/terbuka.",
                "grammarNote": "Logika: Sifat kepribadian."
            }
        ]
    },
    {
        "id": "l2_6_c21",
        "wordAr": "صَرَّحَ / يُصَرِّحُ",
        "translation": "Menyatakan (Statement resmi)",
        "description": "Kata kerja untuk pernyataan publik (Wazan Fa'ala).",
        "category": "Kata Kerja",
        "examples": [
            {
                "ar": "صَرَّحَ الْمُتَحَدِّثُ الرَّسْمِيُّ بِأَنَّ...",
                "translation": "Juru bicara resmi menyatakan bahwa...",
                "grammarNote": "Logika: Jumlah Fi'liyyah. 'Sarraha' diikuti preposisi 'Bi' dan 'Anna'."
            },
            {
                "ar": "يُصَرِّحُ الْوَزِيرُ لِلصَّحَافَةِ",
                "translation": "Menteri memberikan pernyataan kepada pers.",
                "grammarNote": "Logika: Fi'il Mudhari' + Fa'il + Preposisi."
            },
            {
                "ar": "لَمْ يُصَرِّحْ بِشَيْءٍ",
                "translation": "Dia belum menyatakan apapun.",
                "grammarNote": "Logika: 'Lam' + Fi'il majzum (sukun)."
            },
            {
                "ar": "صَرَّحَتِ الشُّرْطَةُ عَنِ الْحَادِثِ",
                "translation": "Polisi memberi keterangan tentang kejadian.",
                "grammarNote": "Logika: Fa'il 'Syurthah' muannats."
            },
            {
                "ar": "تَصْرِيحٌ صَحَفِيٌّ",
                "translation": "Pernyataan pers (Masdar dari Sarraha).",
                "grammarNote": "Logika: Penggunaan Masdar."
            },
            {
                "ar": "لِمَاذَا صَرَّحْتَ بِهَذَا؟",
                "translation": "Mengapa kamu menyatakan ini?",
                "grammarNote": "Logika: Fi'il Madhi Mukhathab (Anta)."
            },
            {
                "ar": "رَفَضَ أَنْ يُصَرِّحَ",
                "translation": "Dia menolak untuk memberikan pernyataan.",
                "grammarNote": "Logika: 'An' + Fi'il manshub (fathah)."
            },
            {
                "ar": "صَرَّحَ الْمُدِيرُ مُؤَخَّرًا",
                "translation": "Direktur menyatakan baru-baru ini.",
                "grammarNote": "Logika: Ket. waktu."
            },
            {
                "ar": "بِمَاذَا صَرَّحَ الرَّئِيسُ؟",
                "translation": "Apa yang dinyatakan presiden?",
                "grammarNote": "Logika: Tanya + Jumlah Fi'liyyah."
            },
            {
                "ar": "يُصَرِّحُونَ لِوَسَائِلِ الْإِعْلَامِ",
                "translation": "Mereka menyatakan kepada media massa.",
                "grammarNote": "Logika: Fi'il Mudhari' jamak (Wawu Nun)."
            }
        ]
    },
    {
        "id": "l2_6_c22",
        "wordAr": "أَعْلَنَ / يُعْلِنُ",
        "translation": "Mengumumkan",
        "description": "Menginformasikan ke publik secara luas (Wazan Af'ala).",
        "category": "Kata Kerja",
        "examples": [
            {
                "ar": "أَعْلَنَتِ الشَّرِكَةُ إِفْلَاسَهَا",
                "translation": "Perusahaan mengumumkan kebangkrutannya.",
                "grammarNote": "Logika: Jumlah Fi'liyyah. Fi'il muannats (A'lanat) karena Fa'il muannats."
            },
            {
                "ar": "يُعْلِنُ الرَّئِيسُ حَالَةَ الطَّوَارِئِ",
                "translation": "Presiden mengumumkan keadaan darurat.",
                "grammarNote": "Logika: Fi'il Mudhari' + Maf'ul Bih (Haalata - fathah)."
            },
            {
                "ar": "مَتَى أَعْلَنُوا الْخَبَرَ؟",
                "translation": "Kapan mereka mengumumkan berita itu?",
                "grammarNote": "Logika: Fi'il Madhi jamak (A'lanuu)."
            },
            {
                "ar": "أَعْلَنْتُ عَنِ الْمُسَابَقَةِ",
                "translation": "Saya telah mengumumkan tentang kompetisi itu.",
                "grammarNote": "Logika: 'A'lan' sering memakai preposisi 'An'."
            },
            {
                "ar": "سَيُعْلِنُ الْوَزِيرُ الْقَرَارَ غَدًا",
                "translation": "Menteri akan mengumumkan keputusan besok.",
                "grammarNote": "Logika: 'Sa' penanda masa depan."
            },
            {
                "ar": "أُعْلِنَ عَنِ الْهُدْنَةِ",
                "translation": "Telah diumumkan tentang gencatan senjata.",
                "grammarNote": "Logika: Fi'il Madhi Majhul (Pasif - U'lina)."
            },
            {
                "ar": "نُعْلِنُ أَنَّ...",
                "translation": "Kami mengumumkan bahwa...",
                "grammarNote": "Logika: Fi'il Mudhari' Mutakallim Jamak (Nahnu)."
            },
            {
                "ar": "لَا تُعْلِنِ السِّرَّ",
                "translation": "Jangan mengumumkan rahasia.",
                "grammarNote": "Logika: Laa Nahiyah + Fi'il majzum (kasrah untuk hindari dua sukun)."
            },
            {
                "ar": "أَعْلَنَ اسْتِقَالَتَهُ",
                "translation": "Dia mengumumkan pengunduran dirinya.",
                "grammarNote": "Logika: Maf'ul bih (Istiqaalata) + dhamir."
            },
            {
                "ar": "يُعْلِنُونَ النَّتَائِجَ",
                "translation": "Mereka mengumumkan hasil-hasil.",
                "grammarNote": "Logika: Fi'il + Fa'il + Maf'ul bih (Nataa-ija)."
            }
        ]
    },
    {
        "id": "l2_6_c23",
        "wordAr": "نَقَلَ / يَنْقُلُ",
        "translation": "Melaporkan / Menyampaikan (juga Memindah)",
        "description": "Kata kerja dasar menceritakan kejadian.",
        "category": "Kata Kerja",
        "examples": [
            {
                "ar": "نَقَلَ الْمُرَاسِلُ الْأَحْدَاثَ بِدِقَّةٍ",
                "translation": "Reporter melaporkan peristiwa-peristiwa dengan akurat.",
                "grammarNote": "Logika: Fi'il Madhi (Naqala)."
            },
            {
                "ar": "تَنْقُلُ الْقَنَاةُ الْمُبَارَاةَ",
                "translation": "Channel itu menyiarkan/menyampaikan pertandingan.",
                "grammarNote": "Logika: Fi'il Mudhari' muannats (Tanqulu)."
            },
            {
                "ar": "نُقِلَ عَنْ مَصْدَرٍ مَوْثُوقٍ",
                "translation": "Dilaporkan dari sumber terpercaya.",
                "grammarNote": "Logika: Fi'il pasif (Nuqila)."
            },
            {
                "ar": "مَنْ نَقَلَ هَذَا الْخَبَرَ؟",
                "translation": "Siapa yang melaporkan berita ini?",
                "grammarNote": "Logika: Isim tanya subjek."
            },
            {
                "ar": "تَنْقُلُ الصُّحُفُ الْأَخْبَارَ كُلَّ صَبَاحٍ",
                "translation": "Koran-koran menyampaikan berita setiap pagi.",
                "grammarNote": "Logika: Fa'il jamak tak berakal mengambil fi'il muannats mufrad."
            },
            {
                "ar": "سَأَنْقُلُ لَكُمُ التَّفَاصِيلَ",
                "translation": "Saya akan melaporkan rinciannya kepada kalian.",
                "grammarNote": "Logika: 'Sa' + 'Anqulu'."
            },
            {
                "ar": "نَقَلُوا التَّقْرِيرَ لِلْمُدِيرِ",
                "translation": "Mereka menyampaikan laporan kepada direktur.",
                "grammarNote": "Logika: Fa'il jamak Wawu."
            },
            {
                "ar": "لَا تَنْقُلِ الشَّائِعَاتِ",
                "translation": "Jangan menyampaikan rumor.",
                "grammarNote": "Logika: Maf'ul bih jamak muannats salim dengan kasrah."
            },
            {
                "ar": "تَمَّ نَقْلُ الْخَبَرِ",
                "translation": "Berita telah dilaporkan.",
                "grammarNote": "Logika: Penggunaan 'Tamma' + Masdar (Naqlu)."
            },
            {
                "ar": "يَنْقُلُونَ الصُّورَةَ الْحَيَّةَ",
                "translation": "Mereka menyiarkan gambar langsung.",
                "grammarNote": "Logika: V-O."
            }
        ]
    },
    {
        "id": "l2_6_c24",
        "wordAr": "نَشَرَ / يَنْشُرُ",
        "translation": "Menerbitkan / Menyebarkan",
        "description": "Biasa untuk artikel atau koran.",
        "category": "Kata Kerja",
        "examples": [
            {
                "ar": "نَشَرَتِ الصَّحِيفَةُ مَقَالًا هَامًّا",
                "translation": "Koran menerbitkan artikel penting.",
                "grammarNote": "Logika: Fi'il muannats."
            },
            {
                "ar": "يَنْشُرُ الصَّحَفِيُّ تَحْقِيقَهُ",
                "translation": "Wartawan menerbitkan investigasinya.",
                "grammarNote": "Logika: Mudhari'."
            },
            {
                "ar": "أَيْنَ نُشِرَ الْخَبَرُ؟",
                "translation": "Di mana berita itu diterbitkan?",
                "grammarNote": "Logika: Fi'il Majhul (Nusyira)."
            },
            {
                "ar": "سَنَنْشُرُ التَّفَاصِيلَ لَاحِقًا",
                "translation": "Kami akan menerbitkan detailnya nanti.",
                "grammarNote": "Logika: 'Sa' + Mutakallim Jamak (Nahnu)."
            },
            {
                "ar": "لَمْ تَنْشُرِ الْمَجَلَّةُ شَيْئًا",
                "translation": "Majalah belum menerbitkan apapun.",
                "grammarNote": "Logika: Majzum dengan kasrah elision."
            },
            {
                "ar": "نَشَرُوا بَيَانًا رَسْمِيًّا",
                "translation": "Mereka menerbitkan pernyataan resmi.",
                "grammarNote": "Logika: Fa'il jamak."
            },
            {
                "ar": "يَنْشُرُونَ الْوَعْيَ السِّيَاسِيَّ",
                "translation": "Mereka menyebarkan kesadaran politik.",
                "grammarNote": "Logika: Makna metafora menyebarkan."
            },
            {
                "ar": "نَشْرُ الْأَخْبَارِ الْكَاذِبَةِ",
                "translation": "Penyebaran berita palsu (Hoax).",
                "grammarNote": "Logika: Penggunaan Masdar."
            },
            {
                "ar": "أُرِيدُ أَنْ أَنْشُرَ كِتَابِي",
                "translation": "Saya ingin menerbitkan buku saya.",
                "grammarNote": "Logika: 'An' + Manshub."
            },
            {
                "ar": "نَشَرَتْ وِزَارَةُ الصِّحَّةِ التَّقْرِيرَ",
                "translation": "Kementerian Kesehatan menerbitkan laporan.",
                "grammarNote": "Logika: Fa'il (Wizaaratu)."
            }
        ]
    },
    {
        "id": "l2_6_c25",
        "wordAr": "حَدَثَ / يَحْدُثُ",
        "translation": "Terjadi",
        "description": "Kata kerja intransitif untuk peristiwa.",
        "category": "Kata Kerja",
        "examples": [
            {
                "ar": "مَاذَا حَدَثَ أَمْسِ؟",
                "translation": "Apa yang terjadi kemarin?",
                "grammarNote": "Logika: Pertanyaan dasar kejadian."
            },
            {
                "ar": "يَحْدُثُ هَذَا دَائِمًا",
                "translation": "Ini terjadi selalu.",
                "grammarNote": "Logika: 'Haadzaa' adalah Fa'il (subjek pelaku)."
            },
            {
                "ar": "حَدَثَ حَادِثٌ مُرُوعٌ",
                "translation": "Telah terjadi kecelakaan mengerikan.",
                "grammarNote": "Logika: Fi'il (Hadata) dan Fa'il (Haadits) dari akar yang sama."
            },
            {
                "ar": "أَيْنَ حَدَثَتِ الْأَزْمَةُ؟",
                "translation": "Di mana krisis itu terjadi?",
                "grammarNote": "Logika: Fi'il muannats (Hadatsat)."
            },
            {
                "ar": "لَمْ يَحْدُثْ شَيْءٌ",
                "translation": "Tidak ada sesuatu pun yang terjadi.",
                "grammarNote": "Logika: 'Lam' + majzum (sukun)."
            },
            {
                "ar": "كَيْفَ حَدَثَ الِانْفِجَارُ؟",
                "translation": "Bagaimana ledakan itu terjadi?",
                "grammarNote": "Logika: Fa'il definit marfu'."
            },
            {
                "ar": "سَيَحْدُثُ تَغْيِيرٌ كَبِيرٌ",
                "translation": "Akan terjadi perubahan besar.",
                "grammarNote": "Logika: 'Sa' masa depan."
            },
            {
                "ar": "يَحْدُثُ الْآنَ مَشْهَدٌ تَارِيخِيٌّ",
                "translation": "Sedang terjadi sekarang peristiwa bersejarah.",
                "grammarNote": "Logika: Fi'il mudhari' menunjukkan sekarang."
            },
            {
                "ar": "كُلُّ مَا حَدَثَ حَقِيقَةٌ",
                "translation": "Semua yang terjadi adalah kebenaran.",
                "grammarNote": "Logika: Klausa relatif (Maa)."
            },
            {
                "ar": "إِنَّ مَا يَحْدُثُ غَرِيبٌ",
                "translation": "Sesungguhnya apa yang terjadi itu aneh.",
                "grammarNote": "Logika: 'Inna' + Isim 'Maa'."
            }
        ]
    },
    {
        "id": "l2_6_c26",
        "wordAr": "شَهِدَ / يَشْهَدُ",
        "translation": "Menyaksikan / Mengalami (Zaman)",
        "description": "Bisa berarti orang yang melihat, atau masa/tempat yang mengalami peristiwa.",
        "category": "Kata Kerja",
        "examples": [
            {
                "ar": "شَهِدَتِ الْبِلَادُ تَطَوُّرًا سَرِيعًا",
                "translation": "Negara itu mengalami/menyaksikan perkembangan yang cepat.",
                "grammarNote": "Logika: Fa'il 'Bilaad' muannats, sehingga 'Syahidat'."
            },
            {
                "ar": "يَشْهَدُ الْعَالَمُ أَزْمَةً مَالِيَّةً",
                "translation": "Dunia sedang menyaksikan krisis keuangan.",
                "grammarNote": "Logika: V-S-O."
            },
            {
                "ar": "شَهِدْتُ الْحَادِثَ بِأُمِّ عَيْنِي",
                "translation": "Saya menyaksikan kejadian itu dengan mata kepala sendiri.",
                "grammarNote": "Logika: Fi'il Madhi Mutakallim."
            },
            {
                "ar": "الْعَاصِمَةُ تَشْهَدُ مُظَاهَرَاتٍ",
                "translation": "Ibu kota menyaksikan demonstrasi.",
                "grammarNote": "Logika: Jumlah Ismiyyah dengan khabar Fi'liyyah."
            },
            {
                "ar": "لَمْ يَشْهَدِ التَّارِيخُ مِثْلَهُ",
                "translation": "Sejarah belum pernah menyaksikan sepertinya.",
                "grammarNote": "Logika: Majzum dengan kasrah."
            },
            {
                "ar": "شَهِدُوا وُقُوعَ الْجَرِيمَةِ",
                "translation": "Mereka menyaksikan terjadinya kejahatan.",
                "grammarNote": "Logika: Fa'il jamak (Wawu)."
            },
            {
                "ar": "سَنَشْهَدُ نُمُوًّا اقْتِصَادِيًّا",
                "translation": "Kita akan menyaksikan pertumbuhan ekonomi.",
                "grammarNote": "Logika: 'Sa' + Nahnu."
            },
            {
                "ar": "مَنْ شَهِدَ هَذَا الْمَوْقِفَ؟",
                "translation": "Siapa yang menyaksikan situasi ini?",
                "grammarNote": "Logika: Isim tanya."
            },
            {
                "ar": "شَاهِدُ عِيَانٍ",
                "translation": "Saksi mata (Isim Fa'il dari Syahida).",
                "grammarNote": "Logika: Kata benda profesi/status."
            },
            {
                "ar": "شَهِدَ الِاقْتِصَادُ انْتِعَاشًا",
                "translation": "Ekonomi mengalami pemulihan.",
                "grammarNote": "Logika: Metafora bahasa jurnalistik."
            }
        ]
    },
    {
        "id": "l2_6_c27",
        "wordAr": "وَقَعَ / يَقَعُ",
        "translation": "Terjadi / Jatuh (Lokasi/Kejadian)",
        "description": "Kata kerja untuk kejadian negatif (gempa, kecelakaan) atau letak.",
        "category": "Kata Kerja",
        "examples": [
            {
                "ar": "وَقَعَ زِلْزَالٌ قَوِيٌّ فِي الشَّمَالِ",
                "translation": "Telah terjadi gempa bumi kuat di utara.",
                "grammarNote": "Logika: Fi'il (Waqa'a) sering untuk musibah."
            },
            {
                "ar": "أَيْنَ وَقَعَ الْحَادِثُ؟",
                "translation": "Di mana kejadian itu terjadi?",
                "grammarNote": "Logika: V-S."
            },
            {
                "ar": "يَقَعُ الِانْفِجَارُ قُرْبَ الْمَحَطَّةِ",
                "translation": "Ledakan terjadi di dekat stasiun.",
                "grammarNote": "Logika: Mudhari' + Keterangan tempat."
            },
            {
                "ar": "وَقَعَتْ أَزْمَةٌ جَدِيدَةٌ",
                "translation": "Terjadi krisis baru.",
                "grammarNote": "Logika: Fi'il muannats (Waqa'at)."
            },
            {
                "ar": "لَمْ يَقَعْ أَيُّ ضَرَرٍ",
                "translation": "Tidak terjadi kerusakan apapun.",
                "grammarNote": "Logika: Majzum."
            },
            {
                "ar": "يُتَوَقَّعُ أَنْ يَقَعَ اشْتِبَاكٌ",
                "translation": "Diperkirakan akan terjadi bentrokan.",
                "grammarNote": "Logika: 'An' + Manshub (Yaqa'a)."
            },
            {
                "ar": "مَتَى وَقَعَتِ الْجَرِيمَةُ؟",
                "translation": "Kapan kejahatan itu terjadi?",
                "grammarNote": "Logika: Isim tanya waktu."
            },
            {
                "ar": "وَقَعُوا فِي خَطَأٍ كَبِيرٍ",
                "translation": "Mereka jatuh ke dalam kesalahan besar.",
                "grammarNote": "Logika: Fa'il jamak."
            },
            {
                "ar": "مَوْقِعُ الْحَادِثِ",
                "translation": "Tempat kejadian (Isim Makan dari Waqa'a).",
                "grammarNote": "Logika: Derivasi tempat."
            },
            {
                "ar": "تَقَعُ الْعَاصِمَةُ فِي الْوَسَطِ",
                "translation": "Ibukota terletak di tengah (Makna Lokasi).",
                "grammarNote": "Logika: Makna sekunder 'terletak'."
            }
        ]
    },
    {
        "id": "l2_6_c28",
        "wordAr": "أَفَادَ / يُفِيدُ",
        "translation": "Menginformasikan / Melaporkan (Reported)",
        "description": "Sangat umum dalam berita (Wazan Af'ala).",
        "category": "Kata Kerja",
        "examples": [
            {
                "ar": "أَفَادَتِ الْوَكَالَةُ بِأَنَّ...",
                "translation": "Kantor berita menginformasikan bahwa...",
                "grammarNote": "Logika: 'Afaada' sering diikuti preposisi 'Bi' dan 'Anna'."
            },
            {
                "ar": "يُفِيدُ التَّقْرِيرُ بِارْتِفَاعِ الْأَسْعَارِ",
                "translation": "Laporan menginformasikan kenaikan harga.",
                "grammarNote": "Logika: Fi'il Mudhari' + Fa'il + Preposisi."
            },
            {
                "ar": "أَفَادَ مَصْدَرٌ مَسْؤُولٌ بِوُقُوعِ...",
                "translation": "Seorang sumber resmi melaporkan terjadinya...",
                "grammarNote": "Logika: V-S-O (dengan huruf Jar)."
            },
            {
                "ar": "لَمْ تُفِدِ الشُّرْطَةُ بِالتَّفَاصِيلِ",
                "translation": "Polisi belum menginformasikan rinciannya.",
                "grammarNote": "Logika: Majzum dengan sukun (huruf ya dibuang jadi Tufid)."
            },
            {
                "ar": "مَاذَا أَفَادَ الْمُرَاسِلُ؟",
                "translation": "Apa yang dilaporkan reporter?",
                "grammarNote": "Logika: Tanya."
            },
            {
                "ar": "تُفِيدُ الْأَنْبَاءُ الْأَخِيرَةُ...",
                "translation": "Berita-berita terbaru melaporkan...",
                "grammarNote": "Logika: Fa'il jamak tak berakal (Anbaa')."
            },
            {
                "ar": "أَفَادُوا بِتَأْجِيلِ الِاجْتِمَاعِ",
                "translation": "Mereka menginformasikan penundaan rapat.",
                "grammarNote": "Logika: Fa'il jamak (Wawu)."
            },
            {
                "ar": "أُفِيدُكُمْ عِلْمًا بِأَنَّ...",
                "translation": "Saya beritahukan kepada Anda sekalian bahwa...",
                "grammarNote": "Logika: Gaya surat resmi."
            },
            {
                "ar": "الْبَيَانُ لَمْ يُفِدْ شَيْئًا",
                "translation": "Pernyataan itu tidak memberikan informasi apa-apa.",
                "grammarNote": "Logika: Makna dasar (memberi faidah/info)."
            },
            {
                "ar": "كَمَا أَفَادَتْ مَصَادِرُ عَسْكَرِيَّةٌ",
                "translation": "Sebagaimana dilaporkan sumber militer.",
                "grammarNote": "Logika: Klausul tambahan."
            }
        ]
    },
    {
        "id": "l2_6_c29",
        "wordAr": "بَثَّ / يَبُثُّ",
        "translation": "Menyiarkan (Broadcast)",
        "description": "Biasa untuk TV dan Radio.",
        "category": "Kata Kerja",
        "examples": [
            {
                "ar": "بَثَّتِ الْقَنَاةُ خِطَابَ الرَّئِيسِ",
                "translation": "Channel TV menyiarkan pidato presiden.",
                "grammarNote": "Logika: Fi'il (Baththat) + Maf'ul Bih bersusun."
            },
            {
                "ar": "يَبُثُّ التِّلْفَازُ الْمُبَارَاةَ مُبَاشَرَةً",
                "translation": "TV menyiarkan pertandingan secara langsung.",
                "grammarNote": "Logika: 'Mubaasyaratan' sebagai Hal (keterangan keadaan)."
            },
            {
                "ar": "مَتَى تَبُثُّونَ الْبَرْنَامَجَ؟",
                "translation": "Kapan kalian menyiarkan program itu?",
                "grammarNote": "Logika: Mudhari' jamak Mukhathab (Antum)."
            },
            {
                "ar": "لَمْ يَبُثُّوا التَّقْرِيرَ أَمْسِ",
                "translation": "Mereka tidak menyiarkan laporan kemarin.",
                "grammarNote": "Logika: Majzum menghilangkan Nun (Yabutstsuu)."
            },
            {
                "ar": "تَبُثُّ الْإِذَاعَةُ أُغْنِيَةً جَدِيدَةً",
                "translation": "Radio menyiarkan lagu baru.",
                "grammarNote": "Logika: Fa'il muannats (Idzaa'ah)."
            },
            {
                "ar": "يُبَثُّ الْحِوَارُ اللَّيْلَةَ",
                "translation": "Dialog itu disiarkan malam ini.",
                "grammarNote": "Logika: Fi'il Majhul (Yubatstsu) + Naibul Fa'il."
            },
            {
                "ar": "سَنَبُثُّ الْخَبَرَ الْعَاجِلَ",
                "translation": "Kami akan menyiarkan berita sela.",
                "grammarNote": "Logika: 'Sa' + Nahnu."
            },
            {
                "ar": "أَوْقَفُوا بَثَّ الْبَرْنَامَجِ",
                "translation": "Mereka menghentikan siaran program.",
                "grammarNote": "Logika: Penggunaan Masdar (Batstsu)."
            },
            {
                "ar": "يَبُثُّ الشَّائِعَاتِ",
                "translation": "Dia menyebarkan rumor.",
                "grammarNote": "Logika: Makna metafora (menyebarkan)."
            },
            {
                "ar": "قَنَاةٌ تَبُثُّ عَلَى مَدَارِ السَّاعَةِ",
                "translation": "Channel yang menyiarkan 24 jam.",
                "grammarNote": "Logika: 'Alaa madaari as-saa'ah (sepanjang jam)."
            }
        ]
    },
    {
        "id": "l2_6_c30",
        "wordAr": "حَسَبَ",
        "translation": "Menurut / Berdasarkan (According to)",
        "description": "Preposisi kuat dalam teks berita.",
        "category": "Partikel",
        "examples": [
            {
                "ar": "حَسَبَ الْمَصَادِرِ الرَّسْمِيَّةِ",
                "translation": "Menurut sumber-sumber resmi.",
                "grammarNote": "Logika: 'Hasaba' membuat kata setelahnya majrur (Al-Masaadiri)."
            },
            {
                "ar": "حَسَبَ تَقْرِيرِ وِزَارَةِ الصِّحَّةِ",
                "translation": "Berdasarkan laporan kementerian kesehatan.",
                "grammarNote": "Logika: Idhafah berantai setelah Hasaba."
            },
            {
                "ar": "الْأَسْعَارُ تَرْتَفِعُ حَسَبَ السُّوقِ",
                "translation": "Harga-harga naik sesuai dengan pasar.",
                "grammarNote": "Logika: Menjelaskan kondisi."
            },
            {
                "ar": "حَسَبَ الْقَانُونِ",
                "translation": "Menurut hukum.",
                "grammarNote": "Logika: Frasa administratif."
            },
            {
                "ar": "حَسَبَ مَا أَعْلَنَتْهُ الْحُكُومَةُ",
                "translation": "Berdasarkan apa yang diumumkan pemerintah.",
                "grammarNote": "Logika: 'Hasaba maa' (berdasarkan apa yang)."
            },
            {
                "ar": "حَسَبَ وَكَالَةِ الْأَنْبَاءِ",
                "translation": "Menurut kantor berita.",
                "grammarNote": "Logika: 'Hasaba' + instansi."
            },
            {
                "ar": "التَّقْسِيمُ حَسَبَ الْعُمْرِ",
                "translation": "Pembagian berdasarkan usia.",
                "grammarNote": "Logika: 'Hasaba' sebagai klasifikasi."
            },
            {
                "ar": "حَسَبَ التَّوَقُّعَاتِ",
                "translation": "Sesuai prediksi.",
                "grammarNote": "Logika: Frasa cuaca/ekonomi."
            },
            {
                "ar": "سَنَعْمَلُ حَسَبَ الْخُطَّةِ",
                "translation": "Kami akan bekerja sesuai rencana.",
                "grammarNote": "Logika: V-S-Keterangan."
            },
            {
                "ar": "حَسَبَ الشُّرُوطِ",
                "translation": "Sesuai syarat-syarat.",
                "grammarNote": "Logika: Kontrak/Aturan."
            }
        ]
    }
],
    dialog: [
    {
        "speaker": "أَحْمَد",
        "textAr": "هَلْ سَمِعْتَ الْأَخْبَارَ الْيَوْمَ يَا خَالِد؟",
        "translation": "Apakah kamu sudah mendengar berita hari ini, wahai Khalid?"
    },
    {
        "speaker": "خَالِد",
        "textAr": "لَا، لَمْ أُشَاهِدِ التِّلْفَازَ. مَاذَا حَدَثَ؟",
        "translation": "Belum, saya belum menonton TV. Apa yang terjadi?"
    },
    {
        "speaker": "أَحْمَد",
        "textAr": "أَعْلَنَتِ الْحُكُومَةُ قَرَارًا جَدِيدًا بِشَأْنِ الِاقْتِصَادِ.",
        "translation": "Pemerintah mengumumkan keputusan baru mengenai ekonomi."
    },
    {
        "speaker": "خَالِد",
        "textAr": "حَقًّا؟ وَمَاذَا صَرَّحَ وَزِيرُ الِاقْتِصَادِ؟",
        "translation": "Benarkah? Dan apa yang dinyatakan oleh menteri ekonomi?"
    },
    {
        "speaker": "أَحْمَد",
        "textAr": "أَفَادَ بِأَنَّ النُّمُوَّ الِاقْتِصَادِيَّ سَيَرْتَفِعُ هَذَا الْعَامَ.",
        "translation": "Beliau menginformasikan bahwa pertumbuhan ekonomi akan naik tahun ini."
    },
    {
        "speaker": "خَالِد",
        "textAr": "هَذَا خَبَرٌ مُفْرِحٌ. هَلْ نَشَرَتِ الصُّحُفُ هَذَا التَّقْرِيرَ؟",
        "translation": "Itu berita yang menggembirakan. Apakah koran-koran telah menerbitkan laporan ini?"
    },
    {
        "speaker": "أَحْمَد",
        "textAr": "نَعَمْ، قَرَأْتُ الْمَقَالَ فِي الصَّحِيفَةِ الصَّبَاحِيَّةِ.",
        "translation": "Ya, saya membaca artikelnya di koran pagi."
    },
    {
        "speaker": "خَالِد",
        "textAr": "وَمَا هُوَ الْعُنْوَانُ الرَّئِيسِيُّ لِلصَّحِيفَةِ؟",
        "translation": "Dan apa judul utama (headline) koran tersebut?"
    },
    {
        "speaker": "أَحْمَد",
        "textAr": "عُنْوَانُهُ: 'نِهَايَةُ الْأَزْمَةِ الْمَالِيَّةِ قَرِيبًا'.",
        "translation": "Judulnya: 'Akhir dari Krisis Keuangan Sudah Dekat'."
    },
    {
        "speaker": "خَالِد",
        "textAr": "حَسَبَ الْمَصَادِرِ أَمْ هُوَ تَوَقُّعَاتٌ فَقَطْ؟",
        "translation": "Berdasarkan sumber-sumber, ataukah hanya prediksi saja?"
    },
    {
        "speaker": "أَحْمَد",
        "textAr": "نَقَلَتْ وَكَالَةُ الْأَنْبَاءِ التَّقْرِيرَ عَنْ مَصَادِرَ رَسْمِيَّةٍ.",
        "translation": "Kantor berita melaporkan laporan tersebut dari sumber-sumber resmi."
    },
    {
        "speaker": "خَالِد",
        "textAr": "الْحَمْدُ لِلَّهِ، أَرْجُو أَنْ تَكُونَ الْأَخْبَارُ صَحِيحَةً.",
        "translation": "Alhamdulillah, saya harap berita-berita itu benar."
    },
    {
        "speaker": "أَحْمَد",
        "textAr": "سَنُتَابِعُ الْقَنَاةَ الْإِخْبَارِيَّةَ اللَّيْلَةَ لِمَعْرِفَةِ الْمَزِيدِ.",
        "translation": "Kita akan mengikuti channel berita malam ini untuk mengetahui lebih lanjut."
    },
    {
        "speaker": "خَالِد",
        "textAr": "فِكْرَةٌ مُمْتَازَةٌ، نَلْتَقِي مَسَاءً إِنْ شَاءَ اللَّهُ.",
        "translation": "Ide yang bagus, kita bertemu sore/malam ini insyaAllah."
    }
],
    quiz: [
    {
        "id": "q2_6_g1",
        "type": "multiple-choice",
        "question": "Apa arti dari kata 'صَحِيفَةٌ'?",
        "options": [
            "Wartawan",
            "Berita",
            "Surat Kabar (Koran)",
            "Majalah"
        ],
        "correctAnswer": "Surat Kabar (Koran)",
        "explanation": "صَحِيفَةٌ (Shahiifah) berarti koran atau surat kabar cetak."
    },
    {
        "id": "q2_6_g2",
        "type": "multiple-choice",
        "question": "Kata bahasa Arab untuk 'Wartawan / Jurnalis' adalah...",
        "options": [
            "مُدِيرٌ",
            "صَحَفِيٌّ",
            "مُعَلِّقٌ",
            "خَبِيرٌ"
        ],
        "correctAnswer": "صَحَفِيٌّ",
        "explanation": "صَحَفِيٌّ (Sahafiyyun) berarti wartawan atau jurnalis."
    },
    {
        "id": "q2_6_g3",
        "type": "multiple-choice",
        "question": "Susunan manakah yang benar untuk Jumlah Fi'liyyah (Kalimat Verbal) standar?",
        "options": [
            "Fa'il (Subjek) + Fi'il (Predikat) + Maf'ul Bih (Objek)",
            "Maf'ul Bih (Objek) + Fa'il (Subjek) + Fi'il (Predikat)",
            "Fi'il (Predikat) + Fa'il (Subjek) + Maf'ul Bih (Objek)",
            "Mubtada + Khabar"
        ],
        "correctAnswer": "Fi'il (Predikat) + Fa'il (Subjek) + Maf'ul Bih (Objek)",
        "explanation": "Jumlah Fi'liyyah yang baku diawali oleh Fi'il (Kata Kerja), lalu diikuti Fa'il (Pelaku/Subjek), dan Maf'ul Bih (Objek Penderita)."
    },
    {
        "id": "q2_6_tf100",
        "type": "multiple-choice",
        "question": "Dalam Jumlah Fi'liyyah, jika Fa'il (Subjek) berupa kata jamak (seperti para menteri), maka Fi'il (Kata Kerja) di awal kalimat HARUS ikut dijamakkan (misal: 'نَاقَشُوا الْوُزَرَاءُ').",
        "options": [
            "Benar",
            "Salah"
        ],
        "correctAnswer": "Salah",
        "explanation": "SALAH. Aturan emas Jumlah Fi'liyyah: Fi'il di awal kalimat SELALU berbentuk mufrad (tunggal), meskipun Fa'ilnya mutsanna (dua) atau jamak (banyak). Yang benar adalah 'نَاقَشَ الْوُزَرَاءُ' (Menteri-menteri itu mendiskusikan)."
    },
    {
        "id": "q2_6_g4",
        "type": "multiple-choice",
        "question": "Terjemahkan ke bahasa Arab: 'Pemerintah telah mengumumkan...'",
        "options": [
            "أَعْلَنَ الْحُكُومَةُ...",
            "أَعْلَنَتِ الْحُكُومَةُ...",
            "أَعْلَنُوا الْحُكُومَةُ...",
            "يُعْلِنُونَ الْحُكُومَةُ..."
        ],
        "correctAnswer": "أَعْلَنَتِ الْحُكُومَةُ...",
        "explanation": "الْحُكُومَةُ (Al-Hukuumatu) adalah muannats (perempuan), sehingga fi'il harus muannats 'أَعْلَنَتْ' (A'lanat)."
    },
    {
        "id": "q2_6_g5",
        "type": "multiple-choice",
        "question": "Apa arti dari 'وَكَالَةُ أَنْبَاءٍ'?",
        "options": [
            "Saluran Televisi",
            "Kantor Berita (News Agency)",
            "Konferensi Pers",
            "Departemen Luar Negeri"
        ],
        "correctAnswer": "Kantor Berita (News Agency)",
        "explanation": "وَكَالَةُ (Wakaalah) berarti agen/kantor. أَنْبَاءٍ (Anbaa') berarti berita-berita. Sehingga artinya Kantor Berita."
    },
    {
        "id": "q2_6_g6",
        "type": "multiple-choice",
        "question": "Pilih kalimat yang benar secara tata bahasa (Jumlah Fi'liyyah):",
        "options": [
            "قَرَأَ الطُّلَّابُ الْخَبَرَ",
            "قَرَأُوا الطُّلَّابُ الْخَبَرَ",
            "الطُّلَّابُ قَرَأَ الْخَبَرَ",
            "قَرَأَتِ الطُّلَّابُ الْخَبَرَ"
        ],
        "correctAnswer": "قَرَأَ الطُّلَّابُ الْخَبَرَ",
        "explanation": "'Qara'a' (Tunggal Mudzakkar) + 'At-Thullaabu' (Fa'il Jamak Mudzakkar) + 'Al-Khabara' (Maf'ul Bih). Fi'il di awal kalimat tidak boleh dijamakkan."
    },
    {
        "id": "q2_6_g7",
        "type": "multiple-choice",
        "question": "Kata 'مَصْدَرٌ' (Mashdar) dalam konteks jurnalistik paling sering diartikan sebagai...",
        "options": [
            "Kata Kerja",
            "Sumber (Berita)",
            "Alamat",
            "Reporter"
        ],
        "correctAnswer": "Sumber (Berita)",
        "explanation": "Dalam berita, 'Mashdar' merujuk kepada sumber informasi (Source)."
    },
    {
        "id": "q2_6_g8",
        "type": "multiple-choice",
        "question": "Terjemahkan: 'Konferensi Pers'",
        "options": [
            "مُقَابَلَةٌ صَحَفِيَّةٌ",
            "مُؤْتَمَرٌ صَحَفِيٌّ",
            "تَقْرِيرٌ صَحَفِيٌّ",
            "بَيَانٌ صَحَفِيٌّ"
        ],
        "correctAnswer": "مُؤْتَمَرٌ صَحَفِيٌّ",
        "explanation": "مُؤْتَمَرٌ (Mu'tamar) berarti konferensi, dan صَحَفِيٌّ (Sahafiyyun) berarti jurnalistik/pers."
    },
    {
        "id": "q2_6_g9",
        "type": "multiple-choice",
        "question": "Lengkapi kalimat berita berikut: '... الْوَكَالَةُ بِأَنَّ الْأَزْمَةَ انْتَهَتْ' (Kantor berita menginformasikan bahwa krisis telah berakhir)",
        "options": [
            "أَعْلَنَ",
            "صَرَّحَ",
            "أَفَادَتِ",
            "بَثَّتِ"
        ],
        "correctAnswer": "أَفَادَتِ",
        "explanation": "'أَفَادَتِ' (Afaadat) sering digandengkan dengan 'بِأَنَّ' (Bi anna) yang berarti 'menginformasikan bahwa'."
    },
    {
        "id": "q2_6_g10",
        "type": "multiple-choice",
        "question": "Apa arti kata 'عُنْوَانٌ' di koran?",
        "options": [
            "Halaman Akhir",
            "Gambar",
            "Judul / Headline",
            "Harga Koran"
        ],
        "correctAnswer": "Judul / Headline",
        "explanation": "عُنْوَانٌ ('Unwaan) di media berarti judul artikel atau headline."
    },
    {
        "id": "q2_6_g11",
        "type": "multiple-choice",
        "question": "Fi'il yang paling tepat untuk 'Televisi menyiarkan pertandingan' adalah...",
        "options": [
            "نَشَرَ (Menerbitkan)",
            "بَثَّ (Menyiarkan)",
            "صَرَّحَ (Menyatakan)",
            "وَقَعَ (Terjadi)"
        ],
        "correctAnswer": "بَثَّ (Menyiarkan)",
        "explanation": "بَثَّ (Bath-tha) khusus digunakan untuk siaran audio/video (Broadcast)."
    },
    {
        "id": "q2_6_g12",
        "type": "multiple-choice",
        "question": "Kata 'اقْتِصَادٌ' (Iqtishaad) membahas tentang topik...",
        "options": [
            "Olahraga",
            "Ekonomi",
            "Kriminalitas",
            "Cuaca"
        ],
        "correctAnswer": "Ekonomi",
        "explanation": "اقْتِصَادٌ (Iqtishaad) adalah ilmu ekonomi."
    },
    {
        "id": "q2_6_g13",
        "type": "multiple-choice",
        "question": "Kata 'حَسَبَ' (Hasaba) dalam berita digunakan untuk mengatakan...",
        "options": [
            "Segera",
            "Menurut / Berdasarkan",
            "Meskipun",
            "Karena"
        ],
        "correctAnswer": "Menurut / Berdasarkan",
        "explanation": "Contoh: 'Hasaba masdarin rasmiyyin' (Menurut sumber resmi)."
    },
    {
        "id": "q2_6_g14",
        "type": "multiple-choice",
        "question": "Lengkapi Jumlah Fi'liyyah: 'نَقَلَ ... الْخَبَرَ' (Reporter melaporkan berita)",
        "options": [
            "الْمُرَاسِلُ (Marfu')",
            "الْمُرَاسِلَ (Manshub)",
            "الْمُرَاسِلِ (Majrur)",
            "الْمُرَاسِلُونَ (Marfu' Jamak)"
        ],
        "correctAnswer": "الْمُرَاسِلُ (Marfu')",
        "explanation": "Fa'il (Subjek pelaku) harus berharakat akhir Dhammah (Marfu')."
    },
    {
        "id": "q2_6_g15",
        "type": "multiple-choice",
        "question": "Lengkapi Jumlah Fi'liyyah: 'قَرَأْتُ ... هَامًّا' (Saya membaca artikel penting)",
        "options": [
            "مَقَالٌ (Marfu')",
            "مَقَالًا (Manshub)",
            "مَقَالٍ (Majrur)",
            "الْمَقَالُ (Marfu' Definit)"
        ],
        "correctAnswer": "مَقَالًا (Manshub)",
        "explanation": "Maf'ul Bih (Objek) harus berharakat Fathah/Fathatain (Manshub). Karena 'haamman' fathatain, maka 'maqaalan'."
    },
    {
        "id": "q2_6_g16",
        "type": "multiple-choice",
        "question": "Kata 'أَزْمَةٌ' berarti...",
        "options": [
            "Kemajuan",
            "Krisis / Masa sulit",
            "Stadion",
            "Pemilihan Umum"
        ],
        "correctAnswer": "Krisis / Masa sulit",
        "explanation": "أَزْمَةٌ (Azmah) adalah krisis (ekonomi/politik)."
    },
    {
        "id": "q2_6_tf101",
        "type": "multiple-choice",
        "question": "Susunan 'الْقَنَاةُ بَثَّتْ' adalah contoh dari Jumlah Fi'liyyah.",
        "options": [
            "Benar",
            "Salah"
        ],
        "correctAnswer": "Salah",
        "explanation": "SALAH. Itu adalah Jumlah Ismiyyah karena diawali oleh Isim (Al-Qanaatu). Jumlah Fi'liyyah harus diawali oleh Fi'il: 'بَثَّتِ الْقَنَاةُ'."
    },
    {
        "id": "q2_6_g17",
        "type": "multiple-choice",
        "question": "Apa bentuk jamak dari 'حَادِثٌ' (Kejadian)?",
        "options": [
            "حَادِثُونَ",
            "حَادِثَاتٌ",
            "حَوَادِثُ",
            "أَحْدَاثٌ"
        ],
        "correctAnswer": "حَوَادِثُ",
        "explanation": "Bentuk jamak taksirnya adalah حَوَادِثُ (Hawaadits)."
    },
    {
        "id": "q2_6_g18",
        "type": "multiple-choice",
        "question": "Terjemahkan: 'Pemilihan Umum (Pemilu)'",
        "options": [
            "انْتِخَابَاتٌ",
            "مُفَاوَضَاتٌ",
            "مُقَابَلَاتٌ",
            "مُظَاهَرَاتٌ"
        ],
        "correctAnswer": "انْتِخَابَاتٌ",
        "explanation": "انْتِخَابَاتٌ (Intikhaabaat) berarti pemilu atau pemilihan."
    },
    {
        "id": "q2_6_g19",
        "type": "multiple-choice",
        "question": "Kata 'طَقْسٌ' berhubungan dengan...",
        "options": [
            "Uang",
            "Hujan dan Suhu",
            "Olahraga",
            "Kebijakan Negara"
        ],
        "correctAnswer": "Hujan dan Suhu",
        "explanation": "طَقْسٌ (Thaqs) berarti Cuaca."
    },
    {
        "id": "q2_6_g20",
        "type": "multiple-choice",
        "question": "Dalam teks 'شَهِدَتِ الْبِلَادُ تَطَوُّرًا' (Negara itu menyaksikan perkembangan), mengapa dipakai 'شَهِدَتْ' (muannats)?",
        "options": [
            "Karena 'Tatowwuran' muannats",
            "Karena subjek 'Al-Bilaad' dianggap jamak tidak berakal (muannats)",
            "Karena ada Ta Marbuthah di akhirnya",
            "Karena Fi'il selalu muannats"
        ],
        "correctAnswer": "Karena subjek 'Al-Bilaad' dianggap jamak tidak berakal (muannats)",
        "explanation": "الْبِلَادُ (Al-Bilaad / Negara-negara) adalah jamak taksir tak berakal, yang hukumnya adalah muannats mufrad."
    },
    {
        "id": "q2_6_g21",
        "type": "multiple-choice",
        "question": "Apa arti 'سِيَاسَةٌ'?",
        "options": [
            "Kesehatan",
            "Politik / Kebijakan",
            "Seni",
            "Agama"
        ],
        "correctAnswer": "Politik / Kebijakan",
        "explanation": "سِيَاسَةٌ (Siyaasah) merujuk pada politik atau tata pemerintahan."
    },
    {
        "id": "q2_6_g22",
        "type": "multiple-choice",
        "question": "Fi'il yang tepat untuk 'Terjadi ledakan' adalah...",
        "options": [
            "أَعْلَنَ",
            "نَشَرَ",
            "وَقَعَ / حَدَثَ",
            "صَرَّحَ"
        ],
        "correctAnswer": "وَقَعَ / حَدَثَ",
        "explanation": "وَقَعَ (Waqa'a) dan حَدَثَ (Hadatsa) sama-sama berarti terjadi."
    },
    {
        "id": "q2_6_g23",
        "type": "multiple-choice",
        "question": "Susun kata berikut menjadi kalimat berita yang benar: الْجَزِيرَةِ - قَنَاةُ - بَثَّتْ - الْمُقَابَلَةَ",
        "options": [
            "الْمُقَابَلَةَ قَنَاةُ بَثَّتْ الْجَزِيرَةِ",
            "بَثَّتْ قَنَاةُ الْجَزِيرَةِ الْمُقَابَلَةَ",
            "الْجَزِيرَةِ بَثَّتْ قَنَاةُ الْمُقَابَلَةَ",
            "قَنَاةُ بَثَّتْ الْمُقَابَلَةَ الْجَزِيرَةِ"
        ],
        "correctAnswer": "بَثَّتْ قَنَاةُ الْجَزِيرَةِ الْمُقَابَلَةَ",
        "explanation": "Fi'il (Bath-that) + Fa'il Idhafah (Qanaatu Al-Jazeerati) + Maf'ul Bih (Al-Muqaabalata)."
    },
    {
        "id": "q2_6_g24",
        "type": "multiple-choice",
        "question": "Terjemahkan kata 'رِيَاضَةٌ' (Riyaadhah).",
        "options": [
            "Ilmu Pasti",
            "Olahraga",
            "Ekonomi",
            "Sejarah"
        ],
        "correctAnswer": "Olahraga",
        "explanation": "رِيَاضَةٌ (Riyaadhah) adalah Olahraga."
    },
    {
        "id": "q2_6_g25",
        "type": "multiple-choice",
        "question": "Lengkapi: '... الْمُتَحَدِّثُ الرَّسْمِيُّ بِأَنَّ...' (Juru bicara resmi MENYATAKAN bahwa...)",
        "options": [
            "صَرَّحَ",
            "سَأَلَ",
            "سَمِعَ",
            "فَهِمَ"
        ],
        "correctAnswer": "صَرَّحَ",
        "explanation": "صَرَّحَ (Sarraha) digunakan untuk menyatakan statement resmi kepada publik."
    },
    {
        "id": "q2_6_g26",
        "type": "multiple-choice",
        "question": "Mengapa kalimat 'الْمُعَلِّقُونَ تَحَدَّثُوا' (Para komentator telah berbicara) BUKAN disebut Jumlah Fi'liyyah?",
        "options": [
            "Karena menggunakan bentuk jamak",
            "Karena tidak ada Maf'ul bih",
            "Karena diawali dengan Isim (Al-Mu'alliquuna) bukan Fi'il",
            "Itu adalah Jumlah Fi'liyyah"
        ],
        "correctAnswer": "Karena diawali dengan Isim (Al-Mu'alliquuna) bukan Fi'il",
        "explanation": "Syarat mutlak Jumlah Fi'liyyah adalah kata PERTAMANYA harus berupa Fi'il."
    },
    {
        "id": "q2_6_g27",
        "type": "multiple-choice",
        "question": "Apa itu 'إِذَاعَةٌ'?",
        "options": [
            "Majalah",
            "Siaran / Stasiun Radio",
            "Televisi",
            "Internet"
        ],
        "correctAnswer": "Siaran / Stasiun Radio",
        "explanation": "إِذَاعَةٌ (Idzaa'ah) adalah stasiun radio atau proses penyiaran suara."
    },
    {
        "id": "q2_6_g28",
        "type": "multiple-choice",
        "question": "Susun kata berikut: الْحَادِثِ - نَشَرَتْ - صُوَرَ - الصَّحِيفَةُ",
        "options": [
            "نَشَرَتْ الصَّحِيفَةُ صُوَرَ الْحَادِثِ",
            "الصَّحِيفَةُ نَشَرَتْ صُوَرَ الْحَادِثِ",
            "صُوَرَ نَشَرَتْ الصَّحِيفَةُ الْحَادِثِ",
            "الْحَادِثِ صُوَرَ نَشَرَتْ الصَّحِيفَةُ"
        ],
        "correctAnswer": "نَشَرَتْ الصَّحِيفَةُ صُوَرَ الْحَادِثِ",
        "explanation": "Fi'il (Nasyarat) + Fa'il (Ash-Shahiifatu) + Maf'ul Bih berupa Idhafah (Suwara Al-Haaditsi)."
    }
    ]
  }
};
