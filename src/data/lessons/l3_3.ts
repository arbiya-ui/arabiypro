import { Lesson } from "../../types";

export const l3_3: Lesson = {
  id: "l3_3",
  title: "BAB 3: ASH-SHARF AL-ASASI (Shorof Dasar)",
  titleAr: "الصَّرْفُ الْأَسَاسِيُّ",
  description: "Wazan Fi'il Tsulatsi Mazid, Bab Af'ala, Fa''ala, Faa'ala, Isim Fa'il & Maf'ul.",
  xpReward: 50,
  isCompleted: false,
  isLocked: false,
  type: "comprehensive",
  content: {
    introduction: "Shorof adalah 'ilmu morfologi' — ilmu perubahan bentuk kata.\n\nBayangkan akar kata Arab seperti DNA: سلم (3 huruf akar). Dengan menambah 'protein' berbeda, DNA yang sama menghasilkan makhluk berbeda! SATU AKAR → 8+ makna berbeda! Ini keajaiban bahasa Arab!\n\nDi bab ini kita akan mempelajari Wazan Fi'il Mazid (kata kerja tambahan) yang merupakan 'Pabrik Kata' dalam Bahasa Arab. Kita akan fokus pada tiga bab pertama: Af'ala, Fa''ala, dan Faa'ala.",
    introTitle: "Shorof Dasar: Keajaiban Perubahan Kata",
    introVerse: {
      ar: "عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ",
      translation: "Dia mengajarkan manusia apa yang tidak diketahuinya. (QS. Al-'Alaq: 5)"
    },
    introBadges: [
      { icon: "🧬", text: "AHLI MORFOLOGI (Menguasai Akar Kata)" },
      { icon: "🏭", text: "PABRIK KATA (Menguasai Fi'il Mazid)" }
    ],
    totalSentencesDisplay: "300 Kalimat Perubahan Makna",
    cards: [
      // KELOMPOK 1 — BAB 2 (فَعَّلَ)
      {
        id: "l3_3_c1",
        wordAr: "عَلَّمَ",
        translation: "Mengajar",
        description: "Bab 2 (Fa''ala): Mengubah 'Tahu' menjadi 'Memberitahu/Mengajar'.",
        category: "Bab 2",
        examples: [
          { ar: "عَلِمَ الطَّالِبُ الدَّرْسَ", translation: "Siswa itu tahu/paham pelajaran itu.", analysis: "Mujarrad: Mengetahui." },
          { ar: "عَلَّمَ الْأُسْتَاذُ الطَّالِبَ", translation: "Guru itu mengajar siswa itu.", analysis: "Mazid: Menjadikan tahu (Mengajar)." },
          { ar: "عَلَّمَ اللَّهُ الْإِنْسَانَ", translation: "Allah mengajar manusia.", analysis: "Al-Quran context." },
          { ar: "يُعَلِّمُ النَّاسَ الْخَيْرَ", translation: "Dia mengajarkan kebaikan kepada manusia.", analysis: "Fi'il Mudhari'." },
          { ar: "تَعْلِيمُ اللُّغَةِ الْعَرَبِيَّةِ", translation: "Pengajaran Bahasa Arab.", analysis: "Masdar: Ta'liim." },
          { ar: "هُوَ مُعَلِّمٌ مَاهِرٌ", translation: "Dia adalah pengajar yang mahir.", analysis: "Isim Fa'il: Mu'allim." },
          { ar: "الْقُرْآنُ مُعَلَّمٌ لِلنَّاسِ", translation: "Al-Quran diajarkan kepada manusia.", analysis: "Isim Maf'ul: Mu'allam." },
          { ar: "عَلَّمْتُ أَخِي الرِّيَاضَةَ", translation: "Saya mengajari adikku olahraga.", analysis: "Fi'il Madhi." },
          { ar: "عَلِّمْنِي مِمَّا عُلِّمْتَ", translation: "Ajarilah aku dari apa yang kau diajarkan.", analysis: "Fi'il Amar." },
          { ar: "عَلَّمْنَا رَسُولُ اللَّهِ", translation: "Rasulullah telah mengajari kami.", analysis: "Pujian." }
        ]
      },
      {
        id: "l3_3_c2",
        wordAr: "كَلَّمَ",
        translation: "Berbicara dengan",
        description: "Bab 2: Intensitas atau arah pembicaraan kepada pihak lain.",
        category: "Bab 2",
        examples: [
          { ar: "كَلَّمَ أَحْمَدُ صَدِيقَهُ", translation: "Ahmad berbicara dengan temannya.", analysis: "Mazid: Berbicara langsung." },
          { ar: "وَكَلَّمَ اللَّهُ مُوسَى تَكْلِيمًا", translation: "Dan Allah berbicara kepada Musa secara langsung.", analysis: "Al-Quran context." },
          { ar: "يُكَلِّمُ الْمُدِيرُ الْمُوَظَّفِينَ", translation: "Manajer berbicara dengan para karyawan.", analysis: "Fi'il Mudhari'." },
          { ar: "تَكْلِيمُ النَّاسِ صَعْبٌ", translation: "Berbicara dengan orang-orang itu sulit.", analysis: "Masdar: Takliim." },
          { ar: "هُوَ مُكَلِّمٌ جَيِّدٌ", translation: "Dia adalah pembicara yang baik.", analysis: "Isim Fa'il." },
          { ar: "الْمُكَلَّمُ هُنَا هُوَ الطَّالِبُ", translation: "Yang diajak bicara di sini adalah siswa.", analysis: "Isim Maf'ul." },
          { ar: "لَا تُكَلِّمْنِي الْآنَ", translation: "Jangan bicara denganku sekarang!", analysis: "Larangan." },
          { ar: "كَلَّمْتُهُ بِالْهَاتِفِ", translation: "Saya berbicara dengannya lewat telepon.", analysis: "Fi'il Madhi." },
          { ar: "هَلْ كَلَّمْتَ الْمُعَلِّمَ؟", translation: "Apakah kamu sudah bicara dengan guru?", analysis: "Pertanyaan." },
          { ar: "سَيُكَلِّمُكَ غَدًا", translation: "Dia akan bicaramu besok.", analysis: "Future tense." }
        ]
      },
      {
        id: "l3_3_c3",
        wordAr: "قَدَّمَ",
        translation: "Mempersembahkan/Mendahulukan",
        description: "Bab 2: Dari 'Maju' menjadi 'Memajukan/Mempersembahkan'.",
        category: "Bab 2",
        examples: [
          { ar: "قَدِمَ الْمُسَافِرُ", translation: "Musafir itu telah datang/sampai.", analysis: "Mujarrad: Datang." },
          { ar: "قَدَّمَ الطَّالِبُ الْبَحْثَ", translation: "Siswa itu mempersembahkan/mengumpulkan riset.", analysis: "Mazid: Mempersembahkan." },
          { ar: "قَدَّمَ لَنَا هَدِيَّةً", translation: "Dia memberikan/mempersembahkan hadiah untuk kami.", analysis: "Fi'il Madhi." },
          { ar: "تَقْدِيمُ الطَّعَامِ", translation: "Penyajian/pemberian makanan.", analysis: "Masdar: Taqdiim." },
          { ar: "هُوَ مُقَدِّمُ الْحَفْلِ", translation: "Dia adalah pembawa acara (yang menyajikan).", analysis: "Isim Fa'il." },
          { ar: "الْمَشْرُوعُ مُقَدَّمٌ لِلْمُدِيرِ", translation: "Proyek itu dipersembahkan kepada manajer.", analysis: "Isim Maf'ul." },
          { ar: "قَدِّمْ نَفْسَكَ لِلنَّاسِ", translation: "Perkenalkanlah dirimu kepada orang-orang!", analysis: "Fi'il Amar." },
          { ar: "يُقَدِّمُ الْمُسْلِمُ الزَّكَاةَ", translation: "Muslim itu menunaikan/memberikan zakat.", analysis: "Fi'il Mudhari'." },
          { ar: "قَدَّمُوا مَا عِنْدَهُمْ", translation: "Mereka memberikan apa yang mereka miliki.", analysis: "Jamak Madhi." },
          { ar: "مَا تُقَدِّمُوا لِأَنْفُسِكُمْ", translation: "Apa yang kalian dahulukan untuk diri kalian.", analysis: "Al-Quran context." }
        ]
      },
      {
        id: "l3_3_c4",
        wordAr: "طَوَّرَ",
        translation: "Mengembangkan",
        description: "Bab 2: Dari 'Fase' menjadi 'Mengembangkan melalui fase-fase'.",
        category: "Bab 2",
        examples: [
          { ar: "طَوَّرَ الْعَالِمُ الدَّوَاءَ", translation: "Ilmuwan itu mengembangkan obat itu.", analysis: "Mazid: Mengembangkan." },
          { ar: "تَطْوِيرُ الْمَهَارَاتِ", translation: "Pengembangan keterampilan.", analysis: "Masdar: Tathwiir." },
          { ar: "نُطَوِّرُ هَذَا التَّطْبِيقَ", translation: "Kami mengembangkan aplikasi ini.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُطَوِّرُ بَرَامِجَ", translation: "Dia adalah pengembang software (developer).", analysis: "Isim Fa'il." },
          { ar: "الْبَرْنَامَجُ مُطَوَّرٌ جِدًّا", translation: "Program itu sangat dikembangkan (canggih).", analysis: "Isim Maf'ul." },
          { ar: "طَوَّرْتُ لُغETِي الْعَرَبِيَّةَ", translation: "Saya mengembangkan bahasa Arab saya.", analysis: "Pengalaman pribadi." },
          { ar: "يَجِبُ أَنْ تُطَوِّرَ نَفْسَكَ", translation: "Kamu harus mengembangkan dirimu.", analysis: "Nasehat." },
          { ar: "طَوَّرْنَا الْمَدْرَسَةَ", translation: "Kami telah mengembangkan sekolah ini.", analysis: "Fi'il Madhi." },
          { ar: "طَوِّرْ عَقْلَكَ بِالْقِرَاءَةِ", translation: "Kembangkanlah akalmu dengan membaca!", analysis: "Fi'il Amar." },
          { ar: "سَنُطَوِّرُ الْبِلَادَ", translation: "Kami akan mengembangkan negara.", analysis: "Visi." }
        ]
      },
      {
        id: "l3_3_c5",
        wordAr: "دَرَّبَ",
        translation: "Melatih",
        description: "Bab 2: Dari 'Terbiasa' menjadi 'Membiasakan/Melatih'.",
        category: "Bab 2",
        examples: [
          { ar: "دَرَّبَ الْمُدَرِّبُ الْفَرِيقَ", translation: "Pelatih itu melatih tim tersebut.", analysis: "Mazid: Melatih." },
          { ar: "تَدْرِيبُ الْمُوَظَّفِينَ", translation: "Pelatihan para karyawan.", analysis: "Masdar: Tadriib." },
          { ar: "يُدَرِّبُ الْأَبُ ابْنَهُ", translation: "Ayah melatih anaknya.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُدَرِّبٌ مَشْهُورٌ", translation: "Dia adalah pelatih yang terkenal.", analysis: "Isim Fa'il." },
          { ar: "الْجَيْشُ مُدَرَّبٌ جَيِّدًا", translation: "Pasukan itu terlatih dengan baik.", analysis: "Isim Maf'ul." },
          { ar: "دَرَّبْتُ نَفْسِي عَلَى الصَّبْرِ", translation: "Saya melatih diriku untuk bersabar.", analysis: "Refleksi." },
          { ar: "دَرِّبْ عَقْلَكَ عَلَى التَّفْكِيرِ", translation: "Latihlah akalmu untuk berpikir!", analysis: "Fi'il Amar." },
          { ar: "يُدَرِّبُونَ الْخَيْلَ", translation: "Mereka melatih kuda.", analysis: "Aktivitas." },
          { ar: "سَوْفَ نُدَرِّبُكُمُ الْيَوْMَ", translation: "Kami akan melatih kalian hari ini.", analysis: "Future." },
          { ar: "التَّدْرِيبُ يُؤَدِّي إِلَى الْإِتْقَانِ", translation: "Latihan membawa kepada kesempurnaan.", analysis: "Pepatah." }
        ]
      },
      {
        id: "l3_3_c6",
        wordAr: "وَسَّعَ",
        translation: "Memperluas",
        description: "Bab 2: Dari 'Luas' menjadi 'Meluaskan/Memperluas'.",
        category: "Bab 2",
        examples: [
          { ar: "وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ", translation: "Kursi-Nya meliputi (luasnya) langit.", analysis: "Mujarrad: Luas/Meliputi." },
          { ar: "وَسَّعَ التَّاجِرُ مَحَلَّهُ", translation: "Pedagang itu memperluas tokonya.", analysis: "Mazid: Memperluas." },
          { ar: "تَوْسِيعُ الطَّرِيقِ", translation: "Pelebaran/perluasan jalan.", analysis: "Masdar: Tawsi'." },
          { ar: "يُوَسِّعُ اللَّهُ الرِّزْقَ", translation: "Allah meluaskan rezeki.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُوَسِّعُ الْمَشْرُوعِ", translation: "Dia adalah orang yang memperluas proyek.", analysis: "Isim Fa'il." },
          { ar: "الْمَسْجِدُ مُوَسَّعٌ جِدًّا", translation: "Masjid itu sangat diperluas.", analysis: "Isim Maf'ul." },
          { ar: "وَسَّعْتُ مَعْلُومَاتِي", translation: "Saya memperluas wawasan saya.", analysis: "Kiasan." },
          { ar: "وَسِّعْ بَيْتَكَ لِلضُّيُوفِ", translation: "Luaskanlah rumahmu untuk tamu!", analysis: "Saran." },
          { ar: "وَسَّعْنَا النِّطَاقَ", translation: "Kami telah memperluas jangkauan.", analysis: "Bisnis." },
          { ar: "سَيُوَسِّعُ الْحُدُودَ", translation: "Dia akan memperluas perbatasan.", analysis: "Politik." }
        ]
      },
      {
        id: "l3_3_c7",
        wordAr: "حَسَّنَ",
        translation: "Memperbaiki/Memperindah",
        description: "Bab 2: Dari 'Baik' menjadi 'Memperbaiki'.",
        category: "Bab 2",
        examples: [
          { ar: "حَسُنَ خُلُقُهُ", translation: "Akhlaknya baik.", analysis: "Mujarrad: Baik." },
          { ar: "حَسَّنَ الطَّالِبُ خَطَّهُ", translation: "Siswa itu memperbaiki tulisannya.", analysis: "Mazid: Memperbaiki." },
          { ar: "تَحْسِينُ الْأَدَاءِ", translation: "Perbaikan/peningkatan performa.", analysis: "Masdar: Tahsiin." },
          { ar: "يُحَسِّنُ اللَّهُ أَحْوَالَنَا", translation: "Allah memperbaiki keadaan kita.", analysis: "Doa." },
          { ar: "هُوَ مُحَسِّنُ الصُّورَةِ", translation: "Dia adalah orang yang memperindah gambar.", analysis: "Isim Fa'il." },
          { ar: "الْمَكَانُ مُحَسَّنٌ", translation: "Tempat itu telah diperbaiki/diperindah.", analysis: "Isim Maf'ul." },
          { ar: "حَسِّنْ أَخْلَاقَكَ", translation: "Perbaikilah akhlakmu!", analysis: "Fi'il Amar." },
          { ar: "حَسَّنْتُ نُطْقِي", translation: "Saya memperbaiki pengucapan saya.", analysis: "Belajar." },
          { ar: "يُحَسِّنُونَ الْإِنْتَاجَ", translation: "Mereka meningkatkan/memperbaiki produksi.", analysis: "Industri." },
          { ar: "تَحْسِينُ الْمُسْتَوَى", translation: "Peningkatan level.", analysis: "Pendidikan." }
        ]
      },
      {
        id: "l3_3_c8",
        wordAr: "قَرَّرَ",
        translation: "Memutuskan",
        description: "Bab 2: Dari 'Menetap' menjadi 'Menetapkan/Memutuskan'.",
        category: "Bab 2",
        examples: [
          { ar: "قَرَّرَ الْمُدِيرُ الْقَرَارَ", translation: "Manajer telah memutuskan keputusan itu.", analysis: "Mazid: Memutuskan." },
          { ar: "تَقْرِيرُ اللَّجْنَةِ", translation: "Laporan/ketetapan komite.", analysis: "Masdar: Taqriir." },
          { ar: "يُقَرِّرُ الطَّالِبُ التَّخَصُّصَ", translation: "Siswa memutuskan jurusan.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُقَرِّرُ الْجَلْسَةِ", translation: "Dia adalah pelapor/notulis (yang menetapkan).", analysis: "Isim Fa'il." },
          { ar: "الْيَوْمُ مُقَرَّرٌ لِلِاجْتِمَاعِ", translation: "Hari ini ditetapkan untuk rapat.", analysis: "Isim Maf'ul." },
          { ar: "قَرَّرْتُ السَّفَرَ", translation: "Saya memutuskan untuk bepergian.", analysis: "Fi'il Madhi." },
          { ar: "قَرِّرْ مَاذَا تُرِيدُ", translation: "Putuskanlah apa yang kamu mau!", analysis: "Fi'il Amar." },
          { ar: "قَرَّرْنَا الْبَدْءَ", translation: "Kami memutuskan untuk memulai.", analysis: "Tim." },
          { ar: "سَيُقَرِّرُ غَدًا", translation: "Dia akan memutuskan besok.", analysis: "Future." },
          { ar: "التَّقْرِيرُ السَّنَوِيُّ", translation: "Laporan tahunan.", analysis: "Bisnis." }
        ]
      },
      {
        id: "l3_3_c9",
        wordAr: "أَكَّدَ",
        translation: "Menegaskan/Memastikan",
        description: "Bab 2: Memberikan penekanan atau kepastian.",
        category: "Bab 2",
        examples: [
          { ar: "أَكَّدَ الرَّئِيسُ الْخَبَرَ", translation: "Presiden menegaskan berita itu.", analysis: "Mazid: Menegaskan." },
          { ar: "تَأْكِيدُ الْحَجْزِ", translation: "Konfirmasi/penegasan reservasi.", analysis: "Masdar: Ta'kiid." },
          { ar: "يُؤَكِّدُ الشَّاهِدُ الْحَقِيقَةَ", translation: "Saksi itu menegaskan kebenaran.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُؤَكِّدٌ لِقَوْلِي", translation: "Dia adalah orang yang menegaskan perkataanku.", analysis: "Isim Fa'il." },
          { ar: "الْمَوْعِدُ مُؤَكَّدٌ", translation: "Janji/jadwal itu sudah dikonfirmasi.", analysis: "Isim Maf'ul." },
          { ar: "أَكَّدْتُ لَهُ الصِّدْقَ", translation: "Saya menegaskan kepadanya kejujuran itu.", analysis: "Fi'il Madhi." },
          { ar: "أَكِّدْ حُضُورَكَ", translation: "Pastikan kehadiranmu!", analysis: "Fi'il Amar." },
          { ar: "أَكَّدْنَا الِاتِّفَاقَ", translation: "Kami telah menegaskan kesepakatan.", analysis: "Hukum." },
          { ar: "سَوْفَ نُؤَكِّدُ غَدًا", translation: "Kami akan memastikan besok.", analysis: "Future." },
          { ar: "تَأْكِيدُ الْمَعْلُومَاتِ", translation: "Verifikasi informasi.", analysis: "Teknis." }
        ]
      },
      {
        id: "l3_3_c10",
        wordAr: "نَظَّمَ",
        translation: "Mengorganisasi/Mengatur",
        description: "Bab 2: Dari 'Berurutan' menjadi 'Mengatur secara teratur'.",
        category: "Bab 2",
        examples: [
          { ar: "نَظَّمَ الْوَلَدُ كُتُبَهُ", translation: "Anak itu mengatur buku-bukunya.", analysis: "Mazid: Mengatur." },
          { ar: "تَنْظِيمُ الْوَقْتِ", translation: "Manajemen/pengaturan waktu.", analysis: "Masdar: Tanzhiim." },
          { ar: "يُنَظِّمُ الْمُرُورَ", translation: "Dia mengatur lalu lintas.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُنَظِّمُ الْحَفْلِ", translation: "Dia adalah penyelenggara acara.", analysis: "Isim Fa'il." },
          { ar: "الْمَكْتَبُ مُنَظَّمٌ", translation: "Meja itu tertata rapi.", analysis: "Isim Maf'ul." },
          { ar: "نَظَّمْتُ حَيَاتِي", translation: "Saya mengatur hidup saya.", analysis: "Refleksi." },
          { ar: "نَظِّمْ غُرْفَتَكَ", translation: "Aturlah kamarmu!", analysis: "Fi'il Amar." },
          { ar: "نَظَّمْنَا رِحْلَةً", translation: "Kami mengorganisir sebuah perjalanan.", analysis: "Fi'il Madhi." },
          { ar: "تَنْظِيمُ الدَّوْلَةِ", translation: "Organisasi negara.", analysis: "Politik." },
          { ar: "سَيُنَظِّمُ السُّوقَ", translation: "Dia akan mengatur pasar.", analysis: "Ekonomi." }
        ]
      },

      // KELOMPOK 2 — BAB 3 (فَاعَلَ)
      {
        id: "l3_3_c11",
        wordAr: "شَارَكَ",
        translation: "Berpartisipasi",
        description: "Bab 3 (Faa'ala): Melakukan bersama orang lain.",
        category: "Bab 3",
        examples: [
          { ar: "شَرَكَ فِي الْأَمْرِ", translation: "Dia bersekutu dalam urusan itu.", analysis: "Mujarrad: Bersekutu." },
          { ar: "شَارَكَ الطَّالِبُ فِي الْمُسَابَقَةِ", translation: "Siswa itu berpartisipasi dalam lomba.", analysis: "Mazid: Berpartisipasi." },
          { ar: "مُشَارَكَةُ الْجَمِيعِ", translation: "Partisipasi semua orang.", analysis: "Masdar: Musyaarakah." },
          { ar: "يُشَارِكُ فِي الْعَمَلِ", translation: "Dia ikut serta dalam pekerjaan.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُشَارِكٌ فِي الرِّحْلَةِ", translation: "Dia adalah peserta perjalanan.", analysis: "Isim Fa'il." },
          { ar: "الْمَشْرُوعُ مُشَارَكٌ بَيْنَنَا", translation: "Proyek itu dibagi/dipartisipasikan di antara kita.", analysis: "Isim Maf'ul." },
          { ar: "شَارِكْ بِمَا تَمْلِكُ", translation: "Berpartisipasilah dengan apa yang kau miliki!", analysis: "Fi'il Amar." },
          { ar: "شَارَكْتُهُ فِي التِّجَارَةِ", translation: "Saya bermitra dengannya dalam bisnis.", analysis: "Hubungan timbal balik." },
          { ar: "هَلْ تُشَارِكُ الْآنَ؟", translation: "Apakah kamu ikut serta sekarang?", analysis: "Pertanyaan." },
          { ar: "سَنُشَارِكُ فِي الْمُؤْتَمَرِ", translation: "Kami akan berpartisipasi dalam konferensi.", analysis: "Future." }
        ]
      },
      {
        id: "l3_3_c12",
        wordAr: "قَاتَلَ",
        translation: "Memerangi",
        description: "Bab 3: Dari 'Membunuh' menjadi 'Saling Memerangi'.",
        category: "Bab 3",
        examples: [
          { ar: "قَتَلَ الرَّجُلُ الْعَدُوَّ", translation: "Lelaki itu membunuh musuh.", analysis: "Mujarrad: Membunuh." },
          { ar: "قَاتَلَ الْجَيْشُ الْعَدُوَّ", translation: "Pasukan itu memerangi musuh.", analysis: "Mazid: Memerangi (saling serang)." },
          { ar: "وَقَاتِلُوهُمْ حَتَّى لَا تَكُونَ فِتْنَةٌ", translation: "Dan perangilah mereka sampai tidak ada fitnah.", analysis: "Al-Quran context." },
          { ar: "الْمُقَاتَلَةُ فِي سَبِيلِ اللَّهِ", translation: "Berperang di jalan Allah.", analysis: "Masdar: Muqaatalah." },
          { ar: "هُوَ مُقَاتِلٌ شُجَاعٌ", translation: "Dia adalah pejuang yang berani.", analysis: "Isim Fa'il." },
          { ar: "يُقَاتِلُونَ مِن أَجْلِ الْحُرِّيَّةِ", translation: "Mereka berperang demi kebebasan.", analysis: "Fi'il Mudhari'." },
          { ar: "قَاتِلْ نَفْسَكَ وَشَيْطَانَكَ", translation: "Perangilah nafsumu dan setanmu!", analysis: "Kiasan." },
          { ar: "الْقِتَالُ شَدِيدٌ", translation: "Peperangan itu sengit.", analysis: "Masdar: Qitaal." },
          { ar: "قَاتَلُوا بِصِدْقٍ", translation: "Mereka berperang dengan jujur/sungguh-sungguh.", analysis: "Fi'il Madhi." },
          { ar: "سَنُقَاتِلُ حَتَّى النَّصْرِ", translation: "Kami akan berperang sampai menang.", analysis: "Semangat." }
        ]
      },
      {
        id: "l3_3_c13",
        wordAr: "سَاعَدَ",
        translation: "Membantu",
        description: "Bab 3: Memberikan bantuan kepada pihak lain.",
        category: "Bab 3",
        examples: [
          { ar: "سَاعَدَ الْوَلَدُ أُمَّهُ", translation: "Anak itu membantu ibunya.", analysis: "Mazid: Membantu." },
          { ar: "مُسَاعَدَةُ الْفُقَرَاءِ", translation: "Membantu orang-orang miskin.", analysis: "Masdar: Musaa'adah." },
          { ar: "يُسَاعِدُ الصَّدِيقُ صَدِيقَهُ", translation: "Teman membantu temannya.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُسَاعِدٌ جَيِّدٌ", translation: "Dia adalah asisten/pembantu yang baik.", analysis: "Isim Fa'il." },
          { ar: "هَذَا الْعَمَلُ مُسَاعَدٌ لَنَا", translation: "Pekerjaan ini membantu bagi kami.", analysis: "Isim Maf'ul." },
          { ar: "سَاعِدْنِي مِنْ فَضْلِكَ", translation: "Tolonglah aku!", analysis: "Permohonan." },
          { ar: "سَاعَدْتُهُ فِي الدِّرَاسَةِ", translation: "Saya membantunya dalam belajar.", analysis: "Fi'il Madhi." },
          { ar: "هَلْ تُرِيدُ مُسَاعَدَةً؟", translation: "Apakah kamu butuh bantuan?", analysis: "Tawaran." },
          { ar: "سَوْفَ نُسَاعِدُكُمْ", translation: "Kami akan membantu kalian.", analysis: "Janji." },
          { ar: "الْمُسَاعَدَةُ الْإِنْسَانِيَّةُ", translation: "Bantuan kemanusiaan.", analysis: "Istilah." }
        ]
      },
      {
        id: "l3_3_c14",
        wordAr: "عَامَلَ",
        translation: "Memperlakukan",
        description: "Bab 3: Dari 'Bekerja' menjadi 'Berinteraksi/Memperlakukan'.",
        category: "Bab 3",
        examples: [
          { ar: "عَمِلَ الرَّجُلُ الصَّالِحَاتِ", translation: "Lelaki itu mengerjakan amal shalih.", analysis: "Mujarrad: Bekerja/Beramal." },
          { ar: "عَامَلَ النَّاسَ بِأَدَبٍ", translation: "Dia memperlakukan manusia dengan sopan.", analysis: "Mazid: Memperlakukan." },
          { ar: "الْمُعَامَلَةُ الْحَسَنَةُ", translation: "Perlakuan yang baik.", analysis: "Masdar: Mu'aamalah." },
          { ar: "يُعَامِلُ الْمُدِيرُ الْمُوَظَّفِينَ بِعَدْلٍ", translation: "Manajer memperlakukan karyawan dengan adil.", analysis: "Fi'il Mudhari'." },
          { ar: "الدِّينُ الْمُعَامَلَةُ", translation: "Agama adalah muamalah (interaksi).", analysis: "Pepatah." },
          { ar: "هُوَ مُعَامِلٌ مَاهِرٌ", translation: "Dia adalah orang yang pandai berinteraksi.", analysis: "Isim Fa'il." },
          { ar: "عَامِلِ النَّاسَ كَمَا تُحِبُّ", translation: "Perlakukanlah manusia sebagaimana kau ingin diperlakukan!", analysis: "Nasehat." },
          { ar: "عَامَلْتُهُ بِصِدْقٍ", translation: "Saya memperlakukannya dengan jujur.", analysis: "Fi'il Madhi." },
          { ar: "سَيُعَامِلُكَ جَيِّدًا", translation: "Dia akan memperlakukanmu dengan baik.", analysis: "Future." },
          { ar: "مُعَامَلَاتٌ مَالِيَّةٌ", translation: "Transaksi/perlakuan keuangan.", analysis: "Istilah." }
        ]
      },
      {
        id: "l3_3_c15",
        wordAr: "حَاوَلَ",
        translation: "Mencoba/Berusaha",
        description: "Bab 3: Melakukan upaya berulang atau serius.",
        category: "Bab 3",
        examples: [
          { ar: "حَاوَلَ الطَّالِبُ حَلَّ الْمَسْأَلَةِ", translation: "Siswa itu mencoba menyelesaikan soal itu.", analysis: "Mazid: Mencoba." },
          { ar: "مُحَاوَلَةُ النَّجَاحِ", translation: "Upaya untuk sukses.", analysis: "Masdar: Muhaawalah." },
          { ar: "يُحَاوِلُ الْقِفْزَ", translation: "Dia mencoba melompat.", analysis: "Fi'il Mudhari'." },
          { ar: "أَنَا مُحَاوِلٌ حَتَّى النِّهَايَةِ", translation: "Saya akan mencoba sampai akhir.", analysis: "Isim Fa'il." },
          { ar: "حَاوِلْ مَرَّةً أُخْرَى", translation: "Cobalah sekali lagi!", analysis: "Motivasi." },
          { ar: "حَاوَلْتُ كَثِيرًا", translation: "Saya sudah mencoba berkali-kali.", analysis: "Fi'il Madhi." },
          { ar: "لَا تُحَاوِلِ الْهَرَبَ", translation: "Jangan coba melarikan diri!", analysis: "Peringatan." },
          { ar: "حَاوَلُوا دُخُولَ الْمَكَانِ", translation: "Mereka mencoba masuk ke tempat itu.", analysis: "Jamak Madhi." },
          { ar: "سَأُحَاوِلُ غَدًا", translation: "Saya akan mencoba besok.", analysis: "Future." },
          { ar: "الْمُحَاوَلَةُ الْأُولَى", translation: "Percobaan pertama.", analysis: "Konteks." }
        ]
      },
      {
        id: "l3_3_c16",
        wordAr: "جَادَلَ",
        translation: "Berdebat",
        description: "Bab 3: Saling memberikan argumen.",
        category: "Bab 3",
        examples: [
          { ar: "جَادَلَ الرَّجُلُ خَصْمَهُ", translation: "Lelaki itu berdebat dengan lawannya.", analysis: "Mazid: Berdebat." },
          { ar: "وَجَادِلْهُمْ بِالَّتِي هِيَ أَحْسَنُ", translation: "Dan berdebatlah dengan mereka dengan cara yang terbaik.", analysis: "Al-Quran context." },
          { ar: "الْمُجَادَلَةُ الْعِلْمِيَّةُ", translation: "Perdebatan ilmiah.", analysis: "Masdar: Mujaadalah." },
          { ar: "يُجَادِلُ فِي كُلِّ شَيْءٍ", translation: "Dia mendebat segala sesuatu.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُجَادِلٌ قَوِيٌّ", translation: "Dia adalah pendebat yang kuat.", analysis: "Isim Fa'il." },
          { ar: "جِدَالٌ عَقِيمٌ", translation: "Debat kusir (sia-sia).", analysis: "Masdar: Jidaal." },
          { ar: "لَا تُجَادِلْ بِلَا عِلْمٍ", translation: "Jangan mendebat tanpa ilmu!", analysis: "Larangan." },
          { ar: "جَادَلْتُهُ طَوِيلًا", translation: "Saya mendebatnya lama sekali.", analysis: "Fi'il Madhi." },
          { ar: "هَلْ تُجَادِلُ الْحَقَّ؟", translation: "Apakah kamu mendebat kebenaran?", analysis: "Pertanyaan." },
          { ar: "سَيُجَادِلُكَ فِي السِّعْرِ", translation: "Dia akan mendebatmu soal harga.", analysis: "Future." }
        ]
      },
      {
        id: "l3_3_c17",
        wordAr: "نَاقَشَ",
        translation: "Mendiskusikan",
        description: "Bab 3: Membahas masalah bersama.",
        category: "Bab 3",
        examples: [
          { ar: "نَاقَشَ الطُّلَّابُ الْمَوْضُوعَ", translation: "Para siswa mendiskusikan topik itu.", analysis: "Mazid: Mendiskusikan." },
          { ar: "مُنَاقَشَةُ الرِّسَالَةِ", translation: "Sidang/diskusi skripsi.", analysis: "Masdar: Munaaqasyah." },
          { ar: "يُنَاقِشُ الْمُدِيرُ الْخُطَّةَ", translation: "Manajer mendiskusikan rencana.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُنَاقِشٌ هَادِئٌ", translation: "Dia adalah pendiskusi yang tenang.", analysis: "Isim Fa'il." },
          { ar: "الْمَوْضُوعُ مُنَاقَشٌ", translation: "Topik itu sudah didiskusikan.", analysis: "Isim Maf'ul." },
          { ar: "نَاقِشْ أَفْكَارَكَ مَعَنَا", translation: "Diskusikanlah ide-idemu bersama kami!", analysis: "Fi'il Amar." },
          { ar: "نَاقَشْتُ الْقَضِيَّةَ", translation: "Saya telah mendiskusikan kasus tersebut.", analysis: "Fi'il Madhi." },
          { ar: "هَلْ نُنَاقِشُ الْآنَ؟", translation: "Apakah kita berdiskusi sekarang?", analysis: "Pertanyaan." },
          { ar: "سَنُنَاقِشُ التَّفَاصِيلَ", translation: "Kami akan mendiskusikan rinciannya.", analysis: "Future." },
          { ar: "مُنَاقَشَةٌ مَفْتُوحَةٌ", translation: "Diskusi terbuka.", analysis: "Istilah." }
        ]
      },
      {
        id: "l3_3_c18",
        wordAr: "بَارَكَ",
        translation: "Memberkati",
        description: "Bab 3: Memberikan keberkahan atau selamat.",
        category: "Bab 3",
        examples: [
          { ar: "بَارَكَ اللَّهُ فِيكَ", translation: "Semoga Allah memberkatimu.", analysis: "Doa umum." },
          { ar: "بَارَكَ اللَّهُ لَكَ فِي مَالِكَ", translation: "Semoga Allah memberkati hartamu.", analysis: "Doa." },
          { ar: "مُبَارَكَةُ الْعِيدِ", translation: "Ucapan selamat Idul Fitri.", analysis: "Masdar: Mubaarakah." },
          { ar: "يُبَارِكُ اللَّهُ لِلْمُحْسِنِينَ", translation: "Allah memberkati orang-orang yang berbuat baik.", analysis: "Fi'il Mudhari'." },
          { ar: "عِيدٌ مُبَارَكٌ", translation: "Hari raya yang diberkati (Selamat Id).", analysis: "Isim Maf'ul." },
          { ar: "بَارَكَ اللَّهُ لَكُمَا", translation: "Semoga Allah memberkati kalian berdua (pernikahan).", analysis: "Doa nikah." },
          { ar: "بَارِكْ لَنَا فِيمَا رَزَقْتَنَا", translation: "Berkatilah kami pada apa yang Kau rezekikan.", analysis: "Doa makan." },
          { ar: "بَارَكَ النَّاسُ لِلنَّاجِحِ", translation: "Orang-orang memberi selamat kepada yang sukses.", analysis: "Fi'il Madhi." },
          { ar: "سَنُبَارِكُ لَهُ غَدًا", translation: "Kami akan memberinya selamat besok.", analysis: "Future." },
          { ar: "خُطْوَةٌ مُبَارَكَةٌ", translation: "Langkah yang diberkati.", analysis: "Pujian." }
        ]
      },
      {
        id: "l3_3_c19",
        wordAr: "طَالَبَ",
        translation: "Menuntut",
        description: "Bab 3: Dari 'Mencari' menjadi 'Menuntut hak/sesuatu'.",
        category: "Bab 3",
        examples: [
          { ar: "طَلَبَ الطَّالِبُ الْعِلْمَ", translation: "Siswa itu menuntut/mencari ilmu.", analysis: "Mujarrad: Mencari/Meminta." },
          { ar: "طَالَبَ الْعُمَّالُ بِحُقُوقِهِمْ", translation: "Para buruh menuntut hak-hak mereka.", analysis: "Mazid: Menuntut." },
          { ar: "مُطَالَبَةُ التَّعْوِيضِ", translation: "Tuntutan ganti rugi.", analysis: "Masdar: Muthaalabah." },
          { ar: "يُطَالِبُ بِالْعَدَالَةِ", translation: "Dia menuntut keadilan.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُطَالِبٌ بِالْحَقِّ", translation: "Dia adalah orang yang menuntut hak.", analysis: "Isim Fa'il." },
          { ar: "الْمُوَظَّفُ مُطَالَبٌ بِالْعَمَلِ", translation: "Karyawan itu dituntut untuk bekerja.", analysis: "Isim Maf'ul." },
          { ar: "طَالِبْ بِحَقِّكَ دَائِمًا", translation: "Tuntutlah hakmu selalu!", analysis: "Fi'il Amar." },
          { ar: "طَالَبْنَا بِتَحْسِينِ الْخِدْمَةِ", translation: "Kami menuntut perbaikan layanan.", analysis: "Fi'il Madhi." },
          { ar: "سَيُطَالِبُونَ بِتَفْسِيرٍ", translation: "Mereka akan menuntut penjelasan.", analysis: "Future." },
          { ar: "مُطَالَبَةٌ قَانُونِيَّةٌ", translation: "Tuntutan hukum.", analysis: "Istilah." }
        ]
      },
      {
        id: "l3_3_c20",
        wordAr: "كَاتَبَ",
        translation: "Berkorespondensi/Saling menulis",
        description: "Bab 3: Dari 'Menulis' menjadi 'Saling menulis/surat-menyurat'.",
        category: "Bab 3",
        examples: [
          { ar: "كَتَبَ الرَّسُولُ الرِّسَالَةَ", translation: "Utusan itu menulis surat.", analysis: "Mujarrad: Menulis." },
          { ar: "كَاتَبَ الصَّدِيقُ صَدِيقَهُ", translation: "Teman itu saling berkirim surat dengan temannya.", analysis: "Mazid: Saling menulis." },
          { ar: "مُكَاتَبَةُ التُّجَّارِ", translation: "Korespondensi antar pedagang.", analysis: "Masdar: Mukaatabah." },
          { ar: "يُكَاتِبُ الْعَالِمُ تَلَامِيذَهُ", translation: "Ilmuwan itu saling berkirim surat dengan muridnya.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُكَاتِبٌ مَشْهُورٌ", translation: "Dia adalah koresponden yang terkenal.", analysis: "Isim Fa'il." },
          { ar: "كَاتِبْ مَنْ تُحِبُّ", translation: "Suratilah orang yang kau cintai!", analysis: "Fi'il Amar." },
          { ar: "كَاتَبْتُهُ سَنَوَاتٍ", translation: "Saya saling bersurat dengannya selama bertahun-tahun.", analysis: "Fi'il Madhi." },
          { ar: "كِتَابٌ (Kitaab)", translation: "Surat menyurat/buku.", analysis: "Masdar pola Fii'aal." },
          { ar: "سَنُكَاتِبُ الشَّرِكَةَ", translation: "Kami akan berkorespondensi dengan perusahaan.", analysis: "Future." },
          { ar: "مُكَATبَاتٌ رَسْمِيَّةٌ", translation: "Korespondensi resmi.", analysis: "Istilah." }
        ]
      },

      // KELOMPOK 3 — BAB 4 (أَفْعَلَ)
      {
        id: "l3_3_c21",
        wordAr: "أَعْلَنَ",
        translation: "Mengumumkan",
        description: "Bab 4 (Af'ala): Dari 'Terang/Nyata' menjadi 'Menyatakan/Mengumumkan'.",
        category: "Bab 4",
        examples: [
          { ar: "عَلَنَ الْأَمْرُ", translation: "Urusan itu menjadi nyata/terang.", analysis: "Mujarrad: Terang." },
          { ar: "أَعْلَنَ الْمُدِيرُ النَّتِيجَةَ", translation: "Manajer mengumumkan hasilnya.", analysis: "Mazid: Mengumumkan." },
          { ar: "إِعْلَانُ الْوَظِيفَةِ", translation: "Iklan/pengumuman lowongan kerja.", analysis: "Masdar: I'laan." },
          { ar: "يُعْلِنُ الشَّابُّ خُطُوبَتَهُ", translation: "Pemuda itu mengumumkan pertunangannya.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُعْلِنٌ جَيِّدٌ", translation: "Dia adalah orang yang pandai mengumumkan (pemberita).", analysis: "Isim Fa'il: Mu'lin." },
          { ar: "الْخَبَرُ مُعْلَنٌ لِلْجَمِيعِ", translation: "Berita itu diumumkan untuk semua orang.", analysis: "Isim Maf'ul: Mu'lan." },
          { ar: "أَعْلِنْ رَأْيَكَ بِصَرَاحَةٍ", translation: "Umumkanlah pendapatmu dengan jujur!", analysis: "Fi'il Amar." },
          { ar: "أَعْلَنْتُ التَّوْبَةَ", translation: "Saya menyatakan/mengumumkan tobat.", analysis: "Fi'il Madhi." },
          { ar: "سَيُعْلِنُونَ غَدًا", translation: "Mereka akan mengumumkan besok.", analysis: "Future." },
          { ar: "إِعْلَانَاتٌ تِجَارِيَّةٌ", translation: "Iklan-iklan komersial.", analysis: "Jamak Masdar." }
        ]
      },
      {
        id: "l3_3_c22",
        wordAr: "أَرْسَلَ",
        translation: "Mengirim",
        description: "Bab 4: Menyebabkan sesuatu pergi (Mengirim).",
        category: "Bab 4",
        examples: [
          { ar: "أَرْسَلَ اللَّهُ رَسُولًا", translation: "Allah mengutus seorang rasul.", analysis: "Mazid: Mengutus/Mengirim." },
          { ar: "إِرْسَالُ الرِّسَالَةِ", translation: "Pengiriman surat.", analysis: "Masdar: Irsaal." },
          { ar: "يُرْسِلُ الْوَلَدُ بَرِيدًا", translation: "Anak itu mengirim email/pos.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُرْسِلُ الطَّرْدِ", translation: "Dia adalah pengirim paket.", analysis: "Isim Fa'il: Mursil." },
          { ar: "الْخَبَرُ مُرْسَلٌ مِنَ الْمَدِينَةِ", translation: "Berita itu dikirim dari kota.", analysis: "Isim Maf'ul: Mursal." },
          { ar: "أَرْسِلْ لِي مَوْقِعَكَ", translation: "Kirimkanlah lokasi mu kepadaku!", analysis: "Fi'il Amar." },
          { ar: "أَرْسَلْنَا لَهُمْ مَعُونَةً", translation: "Kami mengirim bantuan untuk mereka.", analysis: "Fi'il Madhi." },
          { ar: "هَلْ أَرْسَلْتَ الْمَلَفَّ؟", translation: "Apakah kau sudah mengirim filenya?", analysis: "Pertanyaan." },
          { ar: "سَنُرْسِلُ غَدًا", translation: "Kami akan mengirim besok.", analysis: "Future." },
          { ar: "الْمُرْسَلُ إِلَيْهِ", translation: "Penerima (yang dikirim kepadanya).", analysis: "Istilah." }
        ]
      },
      {
        id: "l3_3_c23",
        wordAr: "أَكْرَمَ",
        translation: "Memuliakan",
        description: "Bab 4: Dari 'Mulia' menjadi 'Menjadikan mulia/Menghormati'.",
        category: "Bab 4",
        examples: [
          { ar: "كَرُمَ الرَّجُلُ", translation: "Lelaki itu (aslinya) mulia.", analysis: "Mujarrad: Mulia." },
          { ar: "أَكْرَمَ الْمُضِيفُ الضَّيْفَ", translation: "Tuan rumah menghormati/memuliakan tamu.", analysis: "Mazid: Memuliakan." },
          { ar: "إِكْرَامُ الضَّيْفِ مِنَ الْإِيمَانِ", translation: "Memuliakan tamu adalah bagian dari iman.", analysis: "Masdar: Ikraam." },
          { ar: "يُكْرِمُ اللَّهُ الْمُتَّقِينَ", translation: "Allah memuliakan orang-orang bertakwa.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُكْرِمٌ لِأَهْلِهِ", translation: "Dia memuliakan keluarganya.", analysis: "Isim Fa'il." },
          { ar: "الْعَالِمُ مُكْرَمٌ فِي بَلَدِهِ", translation: "Ulama itu dimuliakan di negaranya.", analysis: "Isim Maf'ul." },
          { ar: "أَكْرِمْ أَبَاكَ وَأُمَّكَ", translation: "Muliakanlah ayahmu dan ibumu!", analysis: "Fi'il Amar." },
          { ar: "أَكْرَمْنَا بِمَجِيئِكَ", translation: "Kau memuliakan kami dengan kedatanganmu.", analysis: "Ungkapan sopan." },
          { ar: "سَيُكْرِمُونَ السُّيَّاحَ", translation: "Mereka akan memuliakan para turis.", analysis: "Future." },
          { ar: "لَقَدْ أَكْرَمْتَنِي", translation: "Sungguh kau telah memuliakanku.", analysis: "Fi'il Madhi." }
        ]
      },
      {
        id: "l3_3_c24",
        wordAr: "أَسْلَمَ",
        translation: "Masuk Islam/Berserah diri",
        description: "Bab 4: Dari 'Selamat' menjadi 'Menyerahkan diri/Masuk Islam'.",
        category: "Bab 4",
        examples: [
          { ar: "سَلِمَ الرَّجُلُ", translation: "Lelaki itu selamat.", analysis: "Mujarrad." },
          { ar: "أَسْلَمَ الرَّجُلُ لِلَّهِ", translation: "Lelaki itu berserah diri kepada Allah.", analysis: "Mazid: Berserah diri." },
          { ar: "إِسْلَامُ الْوَجْهِ لِلَّهِ", translation: "Penyerahan wajah (diri) kepada Allah.", analysis: "Masdar: Islaam." },
          { ar: "يُسْلِمُ الشَّخْصُ بَعْدَ الْبَحْثِ", translation: "Seseorang masuk Islam setelah riset.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُسْلِمٌ صَادِقٌ", translation: "Dia adalah seorang muslim yang jujur.", analysis: "Isim Fa'il: Muslim." },
          { ar: "أَسْلِمْ تَسْلَمْ", translation: "Masuk Islamlah, niscaya kau selamat!", analysis: "Fi'il Amar." },
          { ar: "أَسْلَمْتُ قَلْبِي لِلَّهِ", translation: "Saya menyerahkan hatiku kepada Allah.", analysis: "Refleksi." },
          { ar: "هَلْ أَسْلَمَ صَدِيقُكَ؟", translation: "Apakah temanmu sudah masuk Islam?", analysis: "Pertanyaan." },
          { ar: "سَيُسْلِمُ قَرِيبًا", translation: "Dia akan masuk Islam segera.", analysis: "Harapan." },
          { ar: "الْإِسْلَامُ دِينُ الْيُسْرِ", translation: "Islam adalah agama kemudahan.", analysis: "Istilah." }
        ]
      },
      {
        id: "l3_3_c25",
        wordAr: "أَحْسَنَ",
        translation: "Berbuat Baik",
        description: "Bab 4: Dari 'Baik' menjadi 'Berbuat baik kepada pihak lain'.",
        category: "Bab 4",
        examples: [
          { ar: "حَسُنَ الْمَنْظَرُ", translation: "Pemandangan itu baik/indah.", analysis: "Mujarrad." },
          { ar: "أَحْسَنَ الرَّجُلُ إِلَى جَارِهِ", translation: "Lelaki itu berbuat baik kepada tetangganya.", analysis: "Mazid: Berbuat baik." },
          { ar: "إِحْسَانُ الْعَمَلِ", translation: "Berbuat baik dalam pekerjaan.", analysis: "Masdar: Ihsaan." },
          { ar: "إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ", translation: "Sesungguhnya Allah menyukai orang-orang yang berbuat baik.", analysis: "Al-Quran context." },
          { ar: "هُوَ مُحْسِنٌ لِلْغُرَبَاءِ", translation: "Dia berbuat baik kepada orang asing.", analysis: "Isim Fa'il: Muhsin." },
          { ar: "أَحْسِنْ كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ", translation: "Berbuat baiklah sebagaimana Allah berbuat baik kepadamu!", analysis: "Fi'il Amar." },
          { ar: "أَحْسَنْتَ يَا طَالِبُ", translation: "Kau telah berbuat baik (Bagus!), wahai siswa.", analysis: "Pujian." },
          { ar: "يُحْسِنُونَ الظَّنَّ بِاللَّهِ", translation: "Mereka berprasangka baik kepada Allah.", analysis: "Fi'il Mudhari'." },
          { ar: "سَنُحْسِنُ إِلَيْكُمْ", translation: "Kami akan berbuat baik kepada kalian.", analysis: "Janji." },
          { ar: "الْإِحْسَانُ أَنْ تَعْبُدَ اللَّهَ", translation: "Ihsan adalah kau menyembah Allah...", analysis: "Hadits." }
        ]
      },
      {
        id: "l3_3_c26",
        wordAr: "أَصْلَحَ",
        translation: "Memperbaiki",
        description: "Bab 4: Dari 'Shalih/Layak' menjadi 'Memperbaiki'.",
        category: "Bab 4",
        examples: [
          { ar: "صَلُحَ الطَّعَامُ", translation: "Makanan itu (masih) baik/layak.", analysis: "Mujarrad." },
          { ar: "أَصْلَحَ الْمِيكَانِيكِيُّ السَّيَّارَةَ", translation: "Mekanik itu memperbaiki mobil itu.", analysis: "Mazid: Memperbaiki." },
          { ar: "إِصْلَاحُ ذَاتِ الْبَيْنِ", translation: "Mendamaikan (memperbaiki) perselisihan.", analysis: "Masdar: Ishlaah." },
          { ar: "يُصْلِحُ لَكُمْ أَعْمَالَكُمْ", translation: "Dia memperbaiki untukmu amal-amalmu.", analysis: "Al-Quran context." },
          { ar: "هُوَ مُصْلِحٌ فِي الْمُجْتَمَعِ", translation: "Dia adalah pembaharu/penghubung di masyarakat.", analysis: "Isim Fa'il: Mushlih." },
          { ar: "الْبَيْتُ مُصْلَحٌ جَيِّدًا", translation: "Rumah itu sudah diperbaiki dengan baik.", analysis: "Isim Maf'ul: Mushlah." },
          { ar: "أَصْلِحْ بَيْنَ أَخَوَيْكَ", translation: "Damaikanlah antara kedua saudaramu!", analysis: "Fi'il Amar." },
          { ar: "أَصْلَحْتُ الْحَاسُوبَ", translation: "Saya memperbaiki komputer itu.", analysis: "Fi'il Madhi." },
          { ar: "سَيُصْلِحُ اللَّهُ حَالَكَ", translation: "Allah akan memperbaiki keadaanmu.", analysis: "Doa." },
          { ar: "حَرَكَةٌ إِصْلَاحِيَّةٌ", translation: "Gerakan perbaikan (reformasi).", analysis: "Istilah." }
        ]
      },
      {
        id: "l3_3_c27",
        wordAr: "أَفْسَدَ",
        translation: "Merusak",
        description: "Bab 4: Dari 'Rusak' menjadi 'Merusak'.",
        category: "Bab 4",
        examples: [
          { ar: "فَسَدَ الطَّعَامُ", translation: "Makanan itu telah rusak/basi.", analysis: "Mujarrad." },
          { ar: "أَفْسَدَ الظَّالِمُ الْأَرْضَ", translation: "Orang zhalim itu merusak bumi.", analysis: "Mazid: Merusak." },
          { ar: "إِفْسَادُ الْقُلُوبِ", translation: "Perusakan hati.", analysis: "Masdar: Ifsaad." },
          { ar: "وَلَا تُفْسِدُوا فِي الْأَرْضِ", translation: "Dan janganlah kalian berbuat kerusakan di bumi.", analysis: "Larangan." },
          { ar: "هُوَ مُفْسِدٌ لِلْأَخْلَاقِ", translation: "Dia perusak akhlak.", analysis: "Isim Fa'il: Mufsid." },
          { ar: "الْعَقْلُ مُفْسَدٌ بِالْمُخَدِّرَاتِ", translation: "Akal dirusak oleh narkoba.", analysis: "Isim Maf'ul: Mufsad." },
          { ar: "لَا تُفْسِدْ صَلَاتَكَ بِالْكَلامِ", translation: "Jangan rusak shalatmu dengan bicara!", analysis: "Peringatan." },
          { ar: "أَفْسَدْتُ الْجِهَازَ بِالْخَطَإِ", translation: "Saya merusak alat itu secara tidak sengaja.", analysis: "Fi'il Madhi." },
          { ar: "سَيُفْسِدُ الْجَوَّ", translation: "Dia akan merusak suasana.", analysis: "Future." },
          { ar: "إِفْسَادُ الْبِيئَةِ", translation: "Pencemaran/perusakan lingkungan.", analysis: "Istilah." }
        ]
      },
      {
        id: "l3_3_c28",
        wordAr: "أَنْزَلَ",
        translation: "Menurunkan",
        description: "Bab 4: Dari 'Turun' menjadi 'Menurunkan'.",
        category: "Bab 4",
        examples: [
          { ar: "نَزَلَ الْمَطَرُ", translation: "Hujan telah turun.", analysis: "Mujarrad: Turun." },
          { ar: "أَنْزَلَ اللَّهُ الْقُرْآنَ", translation: "Allah menurunkan Al-Quran.", analysis: "Mazid: Menurunkan." },
          { ar: "إِنْزَالُ الْوَحْيِ", translation: "Penurunan wahyu.", analysis: "Masdar: Inzaal." },
          { ar: "يُنْزِلُ اللَّهُ الْبَرَكَةَ", translation: "Allah menurunkan keberkahan.", analysis: "Fi'il Mudhari'." },
          { ar: "هُوَ مُنْزِلُ الْكِتَابِ", translation: "Dia adalah Penurun Kitab.", analysis: "Isim Fa'il." },
          { ar: "الْمَطَرُ مُنْزَلٌ مِنَ السَّمَاءِ", translation: "Hujan diturunkan dari langit.", analysis: "Isim Maf'ul." },
          { ar: "أَنْزِلْ لَنَا مَائِدَةً", translation: "Turunkanlah hidangan untuk kami!", analysis: "Fi'il Amar." },
          { ar: "أَنْزَلْتُ الدَّلْوَ فِي الْبِئْرِ", translation: "Saya menurunkan ember ke sumur.", analysis: "Fi'il Madhi." },
          { ar: "سَيُنْزِلُ اللَّهُ النَّصْرَ", translation: "Allah akan menurunkan kemenangan.", analysis: "Future." },
          { ar: "أَنْزَلْنَا إِلَيْكَ الْكِتَابَ", translation: "Kami menurunkan kepadamu Kitab.", analysis: "Al-Quran context." }
        ]
      },
      {
        id: "l3_3_c29",
        wordAr: "أَدْخَلَ",
        translation: "Memasukkan",
        description: "Bab 4: Dari 'Masuk' menjadi 'Memasukkan'.",
        category: "Bab 4",
        examples: [
          { ar: "دَخَلَ الرَّجُلُ الْبَيْتَ", translation: "Lelaki itu masuk rumah.", analysis: "Mujarrad." },
          { ar: "أَدْخَلَ الرَّجُلُ السَّيَّارَةَ فِي الْمِرْآبِ", translation: "Lelaki itu memasukkan mobil ke garasi.", analysis: "Mazid: Memasukkan." },
          { ar: "إِدْخَالُ الْبَيَانَاتِ", translation: "Input data.", analysis: "Masdar: Idkhaal." },
          { ar: "يُدْخِلُ اللَّهُ الْمُؤْمِنِينَ الْجَنَّةَ", translation: "Allah memasukkan orang mukmin ke surga.", analysis: "Al-Quran context." },
          { ar: "هُوَ مُدْخِلُ السُّرُورِ عَلَى الْقَلْبِ", translation: "Dia adalah orang yang memasukkan kegembiraan ke hati.", analysis: "Isim Fa'il." },
          { ar: "الرَّجُلُ مُدْخَلٌ فِي السِّجْنِ", translation: "Lelaki itu dimasukkan ke penjara.", analysis: "Isim Maf'ul." },
          { ar: "أَدْخِلْ كَلِمَةَ السِّرِّ", translation: "Masukkanlah kata sandi!", analysis: "Fi'il Amar." },
          { ar: "أَدْخَلْتُ الْوَرَقَةَ فِي الدُّولَابِ", translation: "Saya memasukkan kertas ke laci.", analysis: "Fi'il Madhi." },
          { ar: "هَلْ أَدْخَلْتَ الْمَعْلُومَاتِ؟", translation: "Apakah kau sudah menginput informasi?", analysis: "Pertanyaan." },
          { ar: "سَيُدْخِلُ التَّغْيِيرَاتِ", translation: "Dia akan memasukkan perubahan-perubahan.", analysis: "Future." }
        ]
      },
      {
        id: "l3_3_c30",
        wordAr: "أَخْرَجَ",
        translation: "Mengeluarkan",
        description: "Bab 4: Dari 'Keluar' menjadi 'Mengeluarkan'.",
        category: "Bab 4",
        examples: [
          { ar: "خَرَجَ النَّاسُ مِنَ الْمَسْجِدِ", translation: "Orang-orang keluar dari masjid.", analysis: "Mujarrad." },
          { ar: "أَخْرَجَ الْمُسْلِمُ الزَّكَاةَ", translation: "Muslim itu mengeluarkan zakat.", analysis: "Mazid: Mengeluarkan." },
          { ar: "إِخْرَاجُ فِيلْمٍ", translation: "Penyutradaraan/pengeluaran film.", analysis: "Masdar: Ikhraaj." },
          { ar: "يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ", translation: "Dia mengeluarkan yang hidup dari yang mati.", analysis: "Al-Quran context." },
          { ar: "هُوَ مُخْرِجُ الصَّدَقَةِ", translation: "Dia adalah orang yang mengeluarkan sedekah.", analysis: "Isim Fa'il." },
          { ar: "أَخْرِجِ الْقُمَامَةَ", translation: "Keluarkanlah sampah!", analysis: "Fi'il Amar." },
          { ar: "أَخْرَجْتُ الْمِفْتَاحَ مِنْ جَيْبِي", translation: "Saya mengeluarkan kunci dari saku.", analysis: "Fi'il Madhi." },
          { ar: "هَلْ أَخْرَجْتَ كِتَابَكَ؟", translation: "Apakah kau sudah mengeluarkan bukumu?", analysis: "Pertanyaan." },
          { ar: "سَيُخْرِجُ لَنَا نَبَاتًا", translation: "Dia akan mengeluarkan untuk kita tumbuh-tumbuhan.", analysis: "Janji Allah." },
          { ar: "إِخْرَاجٌ فَنِّيٌّ", translation: "Produksi seni.", analysis: "Istilah." }
        ]
      }
    ],
    grammarSection: {
      title: "Ilmu Shorof: Membedah Pabrik Kata",
      introduction: "Jika Nahwu adalah Ilmu Tata Kalimat, maka Shorof adalah Ilmu Tata Kata. Di sini kita belajar bagaimana satu akar (3 huruf) bisa berubah menjadi ribuan kata dengan makna yang presisi.",
      rules: [
        {
          title: "1. Fi'il Tsulatsi Mazid (Tambah 1 Huruf)",
          description: "Kata kerja dasar 3 huruf yang ditambah 1 huruf. Ada 3 pola utama:",
          examples: [
            { ar: "أَفْعَلَ (Af'ala)", translation: "Menjadikan... (Contoh: Akrama = Memuliakan)" },
            { ar: "فَعَّلَ (Fa''ala)", translation: "Melakukan dengan intens/Menjadikan... (Contoh: 'Allama = Mengajar)" },
            { ar: "فَاعَلَ (Faa'ala)", translation: "Saling... / Bersama... (Contoh: Syaa-raka = Berpartisipasi)" }
          ]
        },
        {
          title: "2. Isim Fa'il & Isim Maf'ul",
          description: "Cara membuat Pelaku dan Objek dari Fi'il Mazid sangat mudah: Ganti huruf pertama dengan 'Mu'.",
          examples: [
            { ar: "مُـ (Mu...) + Kasrah di akhir", translation: "Isim Fa'il (Pelaku). Contoh: Mu'allim = Pengajar." },
            { ar: "مُـ (Mu...) + Fathah di akhir", translation: "Isim Maf'ul (Objek). Contoh: Mu'allam = Yang diajarkan." }
          ]
        },
        {
          title: "3. Masdar (Kata Benda)",
          description: "Setiap bab punya pola Masdar yang tetap (Simai/Qiyasi).",
          examples: [
            { ar: "إِفْعَال (If'aal)", translation: "Untuk Bab Af'ala. Contoh: Islaam, Ikraam." },
            { ar: "تَفْعِيل (Taf'iil)", translation: "Untuk Bab Fa''ala. Contoh: Ta'liim, Tadriib." },
            { ar: "مُفَاعَلَة (Mufaa'alah)", translation: "Untuk Bab Faa'ala. Contoh: Musyaa-rakah, Musaa-'adah." }
          ]
        }
      ],
      tips: "Ingat! Perubahan harakat (A-I-U) di tengah kata Arab bukan sekadar variasi bunyi, tapi PERUBAHAN MAKNA yang drastis."
    },
    dialogueSection: {
      title: "Dialog: Di Pabrik Kata (Ilmu Shorof)",
      introduction: "Mari kita lihat bagaimana kata-kata Mazid ini digunakan dalam percakapan nyata.",
      dialogues: [
        {
          speaker: "Ustadz Ahmad",
          ar: "هَلْ عَلَّمْتَ أَخَاكَ الصَّغِيرَ كَيْفَ يُسَلِّمُ؟",
          en: "Have you taught your little brother how to give greetings?",
          tr: "Apakah kamu sudah mengajari adik kecilmu cara memberi salam?"
        },
        {
          speaker: "Yusuf",
          ar: "نَعَمْ، دَرَّبْتُهُ كَثِيرًا حَتَّى أَسْلَمَ قَلْبُهُ لِلأَدَبِ.",
          en: "Yes, I have trained him a lot until his heart submitted to manners.",
          tr: "Ya, saya sudah melatihnya banyak sampai hatinya tunduk pada adab."
        },
        {
          speaker: "Ustadz Ahmad",
          ar: "بَارَكَ اللَّهُ فِيكَ! هَلْ شَارَكَ فِي مُسَابَقَةِ الْقُرْآنِ؟",
          en: "May Allah bless you! Did he participate in the Quran competition?",
          tr: "Barakallahu fik! Apakah dia ikut serta dalam lomba Al-Quran?"
        },
        {
          speaker: "Yusuf",
          ar: "يُحَاوِلُ ذَلِكَ، وَنَحْنُ نُسَاعِدُهُ فِي تَحْسِينِ نُطْقِهِ.",
          en: "He is trying that, and we are helping him in improving his pronunciation.",
          tr: "Dia sedang mencoba hal itu, dan kami membantunya dalam memperbaiki pengucapannya."
        }
      ]
    },
    quiz: [
      {
        id: "l3_3_q1",
        question: "Apa arti dari wazan 'Af'ala' secara umum?",
        options: ["Saling melakukan", "Menjadikan (Kausatif)", "Melakukan sendiri", "Membatalkan"],
        correctAnswer: "Menjadikan (Kausatif)",
        explanation: "Wazan Af'ala biasanya mengubah fi'il lazim (intransitif) menjadi muta'addi (transitif), contoh: Nazala (turun) -> Anzala (menurunkan).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q2",
        question: "Manakah yang merupakan Isim Fa'il dari 'Allama (عَلَّمَ)?",
        options: ["Mu'allim", "Mu'allam", "Ta'liim", "Ma'luum"],
        correctAnswer: "Mu'allim",
        explanation: "Isim Fa'il dari Bab Fa''ala adalah Mu-fa''il, jadi Mu'allim.",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q3",
        question: "Apa wazan dari kata 'Syaa-raka' (شَارَكَ)?",
        options: ["Af'ala", "Fa''ala", "Faa'ala", "Tafa''ala"],
        correctAnswer: "Faa'ala",
        explanation: "Syaa-raka memiliki alif tambahan setelah huruf pertama, mengikuti pola Faa'ala.",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q4",
        question: "Apa arti 'Anzala' (أَنْزَلَ)?",
        options: ["Turun", "Menurunkan", "Tempat turun", "Pendaki"],
        correctAnswer: "Menurunkan",
        explanation: "Anzala adalah bentuk Mazid dari Nazala (Turun).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q5",
        question: "Apa Masdar dari 'Aslama' (أَسْلَمَ)?",
        options: ["Saliim", "Tasliim", "Islaam", "Musallam"],
        correctAnswer: "Islaam",
        explanation: "Masdar dari Bab Af'ala adalah If'aal, jadi Aslama -> Islaam.",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q6",
        question: "Apa arti 'Saa-'ada' (سَاعَدَ)?",
        options: ["Beruntung", "Membantu", "Jam tangan", "Senang"],
        correctAnswer: "Membantu",
        explanation: "Saa-'ada adalah kata kerja Bab 3 yang berarti membantu.",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q7",
        question: "Kata 'Mubaarak' (مُبَارَك) adalah jenis kata...",
        options: ["Fi'il Madhi", "Isim Fa'il", "Isim Maf'ul", "Masdar"],
        correctAnswer: "Isim Maf'ul",
        explanation: "Mubaarak (yang diberkati) adalah Isim Maf'ul dari Baaraka.",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q8",
        question: "Apa arti 'Tathwiir' (تَطْوِير)?",
        options: ["Fase", "Pengembangan", "Burung", "Terbang"],
        correctAnswer: "Pengembangan",
        explanation: "Tathwiir adalah Masdar dari Thawwara (Mengembangkan).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q9",
        question: "Wazan 'Fa''ala' sering menunjukkan makna...",
        options: ["Intensitas/Kausatif", "Saling melakukan", "Ketidaksengajaan", "Waktu"],
        correctAnswer: "Intensitas/Kausatif",
        explanation: "Bab Fa''ala sering bermakna 'Li At-Taktsir' (intensitas) atau 'Li At-Ta'diyah' (kausatif).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q10",
        question: "Manakah contoh wazan 'Faa'ala' di bawah ini?",
        options: ["Akrama", "Kabbara", "Jaadala", "Ibtasama"],
        correctAnswer: "Jaadala",
        explanation: "Jaadala (mendebat) mengikuti pola Faa'ala.",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q11",
        question: "Terjemahkan: 'Guru mengajar siswa'",
        options: ["عَلِمَ الأستاذ الطالب", "عَلَّمَ الأستاذ الطالب", "تعلّم الأستاذ الطالب", "مُعَلِّم الأستاذ الطالب"],
        correctAnswer: "عَلَّمَ الأستاذ الطالب",
        explanation: "'Allama berarti mengajar (menjadikan tahu).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q12",
        question: "Apa arti 'Ikhraaj' (إِخْرَاج)?",
        options: ["Keluar", "Mengeluarkan", "Pintu keluar", "Tempat keluar"],
        correctAnswer: "Mengeluarkan",
        explanation: "Ikhraaj adalah Masdar dari Akhraja (Mengeluarkan).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q13",
        question: "Pola Isim Maf'ul untuk Bab 'Af'ala' adalah...",
        options: ["Muf'il", "Muf'al", "Mufa''il", "Ma'fuul"],
        correctAnswer: "Muf'al",
        explanation: "Isim Maf'ul Bab Af'ala adalah Mu-f'al, contoh: Mursal (yang dikirim).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q14",
        question: "Apa arti 'Muhaawalah' (مُحَاوَلَة)?",
        options: ["Sekitar", "Kekuatan", "Upaya/Percobaan", "Perubahan"],
        correctAnswer: "Upaya/Percobaan",
        explanation: "Muhaawalah adalah Masdar dari Haawala (Mencoba).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q15",
        question: "Apa lawan kata dari 'As-shalah' (Perbaikan) dalam Bab 4?",
        options: ["Al-Ikraam", "Al-Ifsaad", "Al-Irsaal", "Al-Ihsaan"],
        correctAnswer: "Al-Ifsaad",
        explanation: "Al-Ifsaad (Perusakan) adalah lawan dari Al-Ishlaah (Perbaikan).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q16",
        question: "Apa arti 'Mushlih' (مُصْلِح)?",
        options: ["Perusak", "Pembaharu/Orang yang memperbaiki", "Shalih", "Shalat"],
        correctAnswer: "Pembaharu/Orang yang memperbaiki",
        explanation: "Mushlih adalah Isim Fa'il dari Ashlaha (Memperbaiki).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q17",
        question: "Wazan 'Faa'ala' dalam kata 'Qaatalu' (قَاتَلُوا) berarti...",
        options: ["Mereka membunuh", "Mereka berperang (saling serang)", "Mereka mati", "Mereka bersembunyi"],
        correctAnswer: "Mereka berperang (saling serang)",
        explanation: "Qaatala (Bab 3) bermakna saling memerangi, berbeda dengan Qatala (Membunuh).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q18",
        question: "Apa arti 'Taqdiim' (تَقْدِيم)?",
        options: ["Maju", "Penyajian/Mempersembahkan", "Kuno", "Kaki"],
        correctAnswer: "Penyajian/Mempersembahkan",
        explanation: "Taqdiim adalah Masdar dari Qaddama (Mempersembahkan).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q19",
        question: "Manakah yang merupakan Fi'il Amar dari 'Aslama'?",
        options: ["Aslim", "Sallim", "Saalim", "Taslam"],
        correctAnswer: "Aslim",
        explanation: "Fi'il Amar Bab Af'ala adalah Af'il, jadi Aslim.",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q20",
        question: "Apa arti 'Mu'aamalah' (مُعَامَلَة)?",
        options: ["Pekerjaan", "Perlakuan/Interaksi", "Amal", "Ilmu"],
        correctAnswer: "Perlakuan/Interaksi",
        explanation: "Mu'aamalah adalah Masdar dari 'Aamala (Memperlakukan).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q21",
        question: "Apa Masdar dari 'Nazhzhama' (نَظَّمَ)?",
        options: ["Nazhaam", "Munazh-zham", "Tanzhiim", "Intizhaam"],
        correctAnswer: "Tanzhiim",
        explanation: "Masdar Bab Fa''ala adalah Taf'iil, jadi Tanzhiim.",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q22",
        question: "Apa arti 'I'laan' (إِعْلَان)?",
        options: ["Tahu", "Mengumumkan/Iklan", "Tinggi", "Keluarga"],
        correctAnswer: "Mengumumkan/Iklan",
        explanation: "I'laan adalah Masdar dari A'lana (Mengumumkan).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q23",
        question: "Kata 'Mursil' (مُرْسِل) berarti...",
        options: ["Utusan", "Pengirim", "Penerima", "Surat"],
        correctAnswer: "Pengirim",
        explanation: "Mursil (Isim Fa'il) berarti pengirim, sedangkan Mursal (Isim Maf'ul) berarti yang dikirim/utusan.",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q24",
        question: "Apa arti 'Tadriib' (تَدْرِيب)?",
        options: ["Jalan", "Pelatihan", "Pintu", "Pelajaran"],
        correctAnswer: "Pelatihan",
        explanation: "Tadriib adalah Masdar dari Darraba (Melatih).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q25",
        question: "Apa wazan dari 'Baaraka' (بَارَكَ)?",
        options: ["Af'ala", "Fa''ala", "Faa'ala", "Infa'ala"],
        correctAnswer: "Faa'ala",
        explanation: "Baaraka memiliki alif setelah huruf pertama, mengikuti pola Faa'ala.",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q26",
        question: "Apa arti 'Taqriir' (تَقْرِير)?",
        options: ["Laporan/Ketetapan", "Desa", "Dingin", "Membaca"],
        correctAnswer: "Laporan/Ketetapan",
        explanation: "Taqriir adalah Masdar dari Qarrara (Memutuskan/Menetapkan).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q27",
        question: "Apa arti 'Ikraam' (إِكْرَام)?",
        options: ["Banyak", "Memuliakan", "Mulut", "Bekerja"],
        correctAnswer: "Memuliakan",
        explanation: "Ikraam adalah Masdar dari Akrama (Memuliakan).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q28",
        question: "Kata 'Musyaarakah' (مُشَارَكَة) berarti...",
        options: ["Syirik", "Partisipasi", "Perusahaan", "Pasar"],
        correctAnswer: "Partisipasi",
        explanation: "Musyaarakah adalah Masdar dari Syaaraka (Berpartisipasi).",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q29",
        question: "Terjemahkan: 'Allah memberkatimu'",
        options: ["بَارَكَ اللَّهُ فِيكَ", "سَاعَدَ اللَّهُ فِيكَ", "أَكْرَمَ اللَّهُ فِيكَ", "أَسْلَمَ اللَّهُ فِيكَ"],
        correctAnswer: "بَارَكَ اللَّهُ فِيكَ",
        explanation: "Baaraka berarti memberkati.",
        type: "multiple-choice"
      },
      {
        id: "l3_3_q30",
        question: "Apa fungsi utama Shorof?",
        options: ["Mengetahui harakat akhir kalimat", "Mengetahui perubahan bentuk kata", "Mengetahui sejarah Arab", "Mengetahui letak kota"],
        correctAnswer: "Mengetahui perubahan bentuk kata",
        explanation: "Shorof (Morfologi) mempelajari perubahan internal kata untuk menghasilkan makna baru.",
        type: "multiple-choice"
      }
    ]
  }
};
