import { Lesson } from "../../types";

export const l2_1: Lesson = {
  id: "l2_1",
  level: 2,
  bab: 1,
  title: "BAB 1: AL-FI'L AL-ASASI (Fondasi Kata Kerja)",
  titleAr: "الْفِعْلُ الْأَسَاسِيُّ",
  description: "Kuasai Fi'il Madhi, Mudhari, Amar lengkap serta tashrif 14 dhomir dan kata kerja umum.",
  xpReward: 40,
  isCompleted: false,
  isLocked: false,
  type: "comprehensive",
  content: {
    introduction: "Selamat datang di gerbang Level 2 Al-Mutawassit! Ingatlah betapa luar biasanya Anda telah menaklukkan Level 1 Al-Mubtadi. Jika di tingkat pertama Anda baru saja mengenal 'benda-benda' (Isim) di sekitar Anda, kini saatnya Anda meniupkan ruh kehidupan ke dalam bahasa tersebut. Belajar Bahasa Arab itu semudah bernapas; Anda hanya perlu memahami bagaimana setiap kata 'bergerak' melalui sistem Fi'il yang ajaib.\n\nDi bab pertama ini, kita akan mempelajari fondasi paling vital yaitu kata kerja masa lalu (Madhi), sekarang (Mudhari), dan perintah (Amar). Anda akan melihat betapa indahnya struktur bahasa ini yang begitu logis dan sistematis. Semangatlah, karena dengan menguasai bab ini, Anda sedang membangun fondasi emas untuk memahami percakapan sehari-hari yang akan kita perdalam di bab berikutnya!",
    introTitle: "Menghidupkan Kalimat: Dinamika Fi'il dan Keajaiban Waktu",
    introVerse: {
      ar: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
      translation: "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan. (QS. Al-Alaq: 1)"
    },
    introBadges: [
      { icon: "⚡", text: "DINAMIKA BAHASA (Menguasai sistem perubahan kata kerja)" },
      { icon: "⏳", text: "PENGUASA WAKTU (Membedakan Madhi, Mudhari, dan Amar)" }
    ],
    totalSentencesDisplay: "300 Kalimat Dinamis",
    cards: [
      // KELOMPOK 1 — FI'IL MADHI (1-10)
      {
        id: "l2_1_c1",
        wordAr: "كَتَبَ",
        translation: "Menulis (Telah)",
        description: "Fi'il Madhi (Lampau) untuk subjek 'Dia (Laki-laki)'. Akar kata dasar.",
        category: "Aktivitas Akademik",
        examples: [
          { ar: "كَتَبَ الطَّالِبُ الدَّرْسَ", translation: "Siswa itu telah menulis pelajaran.", analysis: "Kalimat Fi'liyyah dasar." },
          { ar: "كَتَبَ أَحْمَدُ رِسَالَةً", translation: "Ahmad telah menulis sepucuk surat.", analysis: "Ahmad sebagai subjek (Fa'il)." },
          { ar: "كَتَبْتُ بِالْقَلَمِ", translation: "Saya telah menulis dengan pena.", analysis: "Tashrif untuk subjek 'Saya' (Ana)." },
          { ar: "هَلْ كَتَبْتَ الْوَاجِبَ؟", translation: "Apakah kamu (L) sudah menulis PR?", analysis: "Kalimat tanya lampau." },
          { ar: "كَتَبْنَا عَلَى السَّبُّورَةِ", translation: "Kami telah menulis di papan tulis.", analysis: "Tashrif untuk 'Kami' (Nahnu)." },
          { ar: "كَتَبَتْ فَاطِمَةُ قِصَّةً", translation: "Fatimah telah menulis sebuah cerita.", analysis: "Tashrif muannats (perempuan)." },
          { ar: "كَتَبُوا أَسْمَاءَهُمْ", translation: "Mereka (L) telah menulis nama-nama mereka.", analysis: "Tashrif jamak mudzakkar." },
          { ar: "مَا كَتَبْتُ شَيْئًا", translation: "Saya tidak menulis apa pun.", analysis: "Negasi fi'il madhi menggunakan 'maa'." },
          { ar: "كَتَبْتِ الدَّرْسَ بِخَطٍّ جَمِيلٍ", translation: "Kamu (P) telah menulis pelajaran dengan tulisan indah.", analysis: "Tashrif muannats tunggal." },
          { ar: "كَتَبَا الدَّرْسَ مَعًا", translation: "Mereka berdua (L) telah menulis pelajaran bersama.", analysis: "Tashrif mutsanna (dual)." }
        ]
      },
      {
        id: "l2_1_c2",
        wordAr: "قَرَأَ",
        translation: "Membaca (Telah)",
        description: "Fi'il Madhi (Lampau) untuk subjek 'Dia (Laki-laki)'.",
        category: "Aktivitas Akademik",
        examples: [
          { ar: "قَرَأَ الْوَلَدُ الْقُرْآنَ", translation: "Anak itu telah membaca Al-Quran.", analysis: "Subjek mudzakkar." },
          { ar: "قَرَأْتُ كِتَابًا جَدِيدًا", translation: "Saya telah membaca buku baru.", analysis: "Tashrif 'Saya'." },
          { ar: "قَرَأَتْ هِنْدٌ مَجَلَّةً", translation: "Hindun telah membaca majalah.", analysis: "Subjek muannats." },
          { ar: "هَلْ قَرَأْتَ الْخَبَرَ؟", translation: "Apakah kamu (L) sudah membaca berita?", analysis: "Kata tanya." },
          { ar: "قَرَأْنَا الدَّرْسَ الْأَوَّلَ", translation: "Kami telah membaca pelajaran pertama.", analysis: "Tashrif 'Kami'." },
          { ar: "قَرَأُوا الْكُتُبَ فِي الْمَكْتَبَةِ", translation: "Mereka telah membaca buku-buku di perpustakaan.", analysis: "Subjek jamak." },
          { ar: "مَا قَرَأْتُ هَذِهِ الْقِصَّةَ", translation: "Saya belum membaca cerita ini.", analysis: "Negasi madhi." },
          { ar: "قَرَأْتِ بِصَوْتٍ عَالٍ", translation: "Kamu (P) telah membaca dengan suara keras.", analysis: "Tashrif muannats." },
          { ar: "قَرَأَ الطَّالِبَانِ الْبَيَانَ", translation: "Dua siswa itu telah membaca pernyataan.", analysis: "Subjek dual." },
          { ar: "قَرَأْنَ الْقَصَائِدَ الْعَرَبِيَّةَ", translation: "Mereka (P) telah membaca puisi-puisi Arab.", analysis: "Tashrif jamak muannats." }
        ]
      },
      {
        id: "l2_1_c3",
        wordAr: "ذَهَبَ",
        translation: "Pergi (Telah)",
        description: "Fi'il Madhi (Lampau) untuk subjek 'Dia (Laki-laki)'.",
        category: "Mobilitas",
        examples: [
          { ar: "ذَهَبَ أَبِي إِلَى الْعَمَلِ", translation: "Ayahku telah pergi bekerja.", analysis: "Penggunaan preposisi 'ila'." },
          { ar: "ذَهَبْتُ إِلَى الْمَسْجِدِ", translation: "Saya telah pergi ke masjid.", analysis: "Tashrif 'Saya'." },
          { ar: "ذَهَبَتِ الْأُمُّ إِلَى السُّوقِ", translation: "Ibu telah pergi ke pasar.", analysis: "Subjek muannats." },
          { ar: "أَيْنَ ذَهَبْتَ أَمْسِ؟", translation: "Ke mana kamu pergi kemarin?", analysis: "Keterangan waktu lampau (amsi)." },
          { ar: "ذَهَبْنَا إِلَى الْمَدْرَسَةِ مَشْيًا", translation: "Kami telah pergi ke sekolah dengan jalan kaki.", analysis: "Tashrif 'Kami'." },
          { ar: "ذَهَبُوا إِلَى الْمَلْعَبِ", translation: "Mereka telah pergi ke lapangan.", analysis: "Subjek jamak." },
          { ar: "مَا ذَهَبْتُ إِلَى أَيِّ مَكَانٍ", translation: "Saya tidak pergi ke mana pun.", analysis: "Negasi madhi." },
          { ar: "ذَهَبْتِ إِلَى بَيْتِ جَدَّتِكِ", translation: "Kamu (P) telah pergi ke rumah nenekmu.", analysis: "Tashrif muannats." },
          { ar: "ذَهَبَا إِلَى مَكَّةَ", translation: "Mereka berdua telah pergi ke Mekkah.", analysis: "Subjek dual." },
          { ar: "ذَهَبْنَ إِلَى الْجَامِعَةِ", translation: "Mereka (P) telah pergi ke universitas.", analysis: "Tashrif jamak muannats." }
        ]
      },
      {
        id: "l2_1_c4",
        wordAr: "جَلَسَ",
        translation: "Duduk (Telah)",
        description: "Fi'il Madhi (Lampau) untuk subjek 'Dia (Laki-laki)'.",
        category: "Posisi Tubuh",
        examples: [
          { ar: "جَلَسَ الرَّجُلُ عَلَى الْكُرْسِيِّ", translation: "Lelaki itu telah duduk di atas kursi.", analysis: "Penggunaan preposisi 'ala'." },
          { ar: "جَلَسْتُ فِي غُرْفَةِ الضُّيُوفِ", translation: "Saya telah duduk di ruang tamu.", analysis: "Tashrif 'Saya'." },
          { ar: "جَلَسَتِ الْبِنْتُ بِجَانِبِ أُمِّهَا", translation: "Anak perempuan itu telah duduk di samping ibunya.", analysis: "Subjek muannats." },
          { ar: "هَلْ جَلَسْتَ هُنَا؟", translation: "Apakah kamu sudah duduk di sini?", analysis: "Keterangan tempat (huna)." },
          { ar: "جَلَسْنَا تَحْتَ الشَّجَرَةِ", translation: "Kami telah duduk di bawah pohon.", analysis: "Zharaf makan (tahta)." },
          { ar: "جَلَسُوا حَوْلَ الطَّاوِلَةِ", translation: "Mereka telah duduk di sekeliling meja.", analysis: "Zharaf makan (hawla)." },
          { ar: "مَا جَلَسْتُ عَلَى هَذَا الْمَقْعَدِ", translation: "Saya tidak duduk di bangku ini.", analysis: "Negasi madhi." },
          { ar: "جَلَسْتِ مَعَ صَدِيقَتِكِ", translation: "Kamu (P) telah duduk bersama temanmu.", analysis: "Tashrif muannats." },
          { ar: "جَلَسَا هُنَاكَ", translation: "Mereka berdua telah duduk di sana.", analysis: "Keterangan tempat (hunaka)." },
          { ar: "جَلَسْنَ بِأَدَبٍ", translation: "Mereka (P) telah duduk dengan sopan.", analysis: "Tashrif jamak muannats." }
        ]
      },
      {
        id: "l2_1_c5",
        wordAr: "أَكَلَ",
        translation: "Makan (Telah)",
        description: "Fi'il Madhi (Lampau) untuk subjek 'Dia (Laki-laki)'.",
        category: "Kebutuhan Pokok",
        examples: [
          { ar: "أَكَلَ الطِّفْلُ التُّفَّاحَةَ", translation: "Anak kecil itu telah makan apel.", analysis: "Subjek mudzakkar." },
          { ar: "أَكَلْتُ الْخُبْزَ فِي الصَّبَاحِ", translation: "Saya telah makan roti di pagi hari.", analysis: "Tashrif 'Saya'." },
          { ar: "أَكَلَتْ فَاطِمَةُ الْأَرُزَّ", translation: "Fatimah telah makan nasi.", analysis: "Subjek muannats." },
          { ar: "مَاذَا أَكَلْتَ فِي الْغَدَاءِ؟", translation: "Apa yang kamu makan saat makan siang?", analysis: "Kata tanya (maadha)." },
          { ar: "أَكَلْنَا مَعًا فِي الْمَطْعَمِ", translation: "Kami telah makan bersama di restoran.", analysis: "Tashrif 'Kami'." },
          { ar: "أَكَلُوا التَّمْرَ", translation: "Mereka telah makan kurma.", analysis: "Subjek jamak." },
          { ar: "مَا أَكَلْتُ شَيْئًا مُنْذُ الصَّبَاحِ", translation: "Saya tidak makan apa pun sejak pagi.", analysis: "Negasi madhi." },
          { ar: "أَكَلْتِ بِيَدِكِ الْيُمْنَى", translation: "Kamu (P) telah makan dengan tangan kananmu.", analysis: "Tashrif muannats." },
          { ar: "أَكَلَا السَّمَكَ", translation: "Mereka berdua telah makan ikan.", analysis: "Subjek dual." },
          { ar: "أَكَلْنَ الْحَلْوَى", translation: "Mereka (P) telah makan manisan.", analysis: "Tashrif jamak muannats." }
        ]
      },
      {
        id: "l2_1_c6",
        wordAr: "شَرِبَ",
        translation: "Minum (Telah)",
        description: "Fi'il Madhi (Lampau) untuk subjek 'Dia (Laki-laki)'.",
        category: "Kebutuhan Pokok",
        examples: [
          { ar: "شَرِبَ الرَّجُلُ الْمَاءَ", translation: "Lelaki itu telah minum air.", analysis: "Subjek mudzakkar." },
          { ar: "شَرِبْتُ الشَّايَ", translation: "Saya telah minum teh.", analysis: "Tashrif 'Saya'." },
          { ar: "شَرِبَتِ الْبِنْتُ الْحَلِيبَ", translation: "Anak perempuan itu telah minum susu.", analysis: "Subjek muannats." },
          { ar: "هَلْ شَرِبْتَ الدَّوَاءَ؟", translation: "Apakah kamu sudah minum obat?", analysis: "Kata tanya." },
          { ar: "شَرِبْنَا الْقَهْوَةَ الْمُرَّةَ", translation: "Kami telah minum kopi pahit.", analysis: "Tashrif 'Kami'." },
          { ar: "شَرِبُوا الْعَصِيرَ", translation: "Mereka telah minum jus.", analysis: "Subjek jamak." },
          { ar: "مَا شَرِبْتُ الْبَارِدَ", translation: "Saya tidak minum (sesuatu yang) dingin.", analysis: "Negasi madhi." },
          { ar: "شَرِبْتِ بِلُطْفٍ", translation: "Kamu (P) telah minum dengan lembut.", analysis: "Tashrif muannats." },
          { ar: "شَرِبَا مِنَ الْبِئْرِ", translation: "Mereka berdua telah minum dari sumur.", analysis: "Subjek dual." },
          { ar: "شَرِبْنَ مَاءَ الزَّمْزَمِ", translation: "Mereka (P) telah minum air zamzam.", analysis: "Tashrif jamak muannats." }
        ]
      },
      {
        id: "l2_1_c7",
        wordAr: "نَامَ",
        translation: "Tidur (Telah)",
        description: "Fi'il Madhi (Lampau) untuk subjek 'Dia (Laki-laki)'.",
        category: "Istirahat",
        examples: [
          { ar: "نَامَ الطِّفْلُ مُبَكِّرًا", translation: "Anak itu telah tidur lebih awal.", analysis: "Subjek mudzakkar." },
          { ar: "نِمْتُ بَعْدَ الْعِشَاءِ", translation: "Saya telah tidur setelah Isya.", analysis: "Tashrif 'Saya' (Alif berubah jadi kasrah)." },
          { ar: "نَامَتِ الْأُخْتُ فِي غُرْفَتِهَا", translation: "Saudara perempuan itu telah tidur di kamarnya.", analysis: "Subjek muannats." },
          { ar: "هَلْ نِمْتَ جَيِّدًا؟", translation: "Apakah kamu sudah tidur dengan nyenyak?", analysis: "Kata tanya." },
          { ar: "نِمْنَا فِي الْخَيْمَةِ", translation: "Kami telah tidur di tenda.", analysis: "Tashrif 'Kami'." },
          { ar: "نَامُوا طَوِيلًا", translation: "Mereka telah tidur lama.", analysis: "Subjek jamak." },
          { ar: "مَا نِمْتُ كَثِيرًا أَمْسِ", translation: "Saya tidak tidur banyak kemarin.", analysis: "Negasi madhi." },
          { ar: "نِمْتِ عَلَى السَّرِيرِ", translation: "Kamu (P) telah tidur di atas kasur.", analysis: "Tashrif muannats." },
          { ar: "نَامَا فِي السَّيَّارَةِ", translation: "Mereka berdua telah tidur di mobil.", analysis: "Subjek dual." },
          { ar: "نِمْنَ بَعْدَ التَّعَبِ", translation: "Mereka (P) telah tidur setelah kelelahan.", analysis: "Tashrif jamak muannats." }
        ]
      },
      {
        id: "l2_1_c8",
        wordAr: "قَامَ",
        translation: "Berdiri/Bangun (Telah)",
        description: "Fi'il Madhi (Lampau) untuk subjek 'Dia (Laki-laki)'.",
        category: "Posisi Tubuh",
        examples: [
          { ar: "قَامَ الطَّالِبُ لِلْأُسْتَاذِ", translation: "Siswa itu telah berdiri untuk guru.", analysis: "Penghormatan." },
          { ar: "قُمْتُ مِنَ النَّوْمِ", translation: "Saya telah bangun dari tidur.", analysis: "Tashrif 'Saya' (Alif jadi dhommah)." },
          { ar: "قَامَتِ الْمَرْأَةُ بِوَاجِبِهَا", translation: "Perempuan itu telah menjalankan kewajibannya.", analysis: "Metafora (menjalankan)." },
          { ar: "هَلْ قُمْتَ مُبَكِّرًا؟", translation: "Apakah kamu sudah bangun pagi-pagi?", analysis: "Kata tanya." },
          { ar: "قُمْنَا لِلصَّلَاةِ", translation: "Kami telah berdiri untuk shalat.", analysis: "Tashrif 'Kami'." },
          { ar: "قَامُوا بِسُرْعَةٍ", translation: "Mereka telah berdiri dengan cepat.", analysis: "Subjek jamak." },
          { ar: "مَا قُمْتُ مِنَ الْكُرْسِيِّ", translation: "Saya tidak berdiri dari kursi.", analysis: "Negasi madhi." },
          { ar: "قُمْتِ بِالْعَمَلِ", translation: "Kamu (P) telah melakukan pekerjaan.", analysis: "Tashrif muannats." },
          { ar: "قَامَا مَعًا", translation: "Mereka berdua telah berdiri bersama.", analysis: "Subjek dual." },
          { ar: "قُمْنَ بِالتَّنْظِيفِ", translation: "Mereka (P) telah melakukan pembersihan.", analysis: "Tashrif jamak muannats." }
        ]
      },
      {
        id: "l2_1_c9",
        wordAr: "دَخَلَ",
        translation: "Masuk (Telah)",
        description: "Fi'il Madhi (Lampau) untuk subjek 'Dia (Laki-laki)'.",
        category: "Mobilitas",
        examples: [
          { ar: "دَخَلَ الْمُدَرِّسُ الْفَصْلَ", translation: "Guru itu telah masuk kelas.", analysis: "Subjek mudzakkar." },
          { ar: "دَخَلْتُ الْبَيْتَ بِسَلَامٍ", translation: "Saya telah masuk rumah dengan damai.", analysis: "Tashrif 'Saya'." },
          { ar: "دَخَلَتِ الْبِنْتُ الْمَكْتَبَةَ", translation: "Anak perempuan itu telah masuk perpustakaan.", analysis: "Subjek muannats." },
          { ar: "هَلْ دَخَلْتَ الْمَسْجِدَ؟", translation: "Apakah kamu sudah masuk masjid?", analysis: "Kata tanya." },
          { ar: "دَخَلْنَا الْمَطْعَمَ", translation: "Kami telah masuk restoran.", analysis: "Tashrif 'Kami'." },
          { ar: "دَخَلُوا الْقَاعَةَ", translation: "Mereka telah masuk aula.", analysis: "Subjek jamak." },
          { ar: "مَا دَخَلْتُ هَذَا الْمَكَانَ", translation: "Saya tidak masuk tempat ini.", analysis: "Negasi madhi." },
          { ar: "دَخَلْتِ بِالرِّجْلِ الْيُمْنَى", translation: "Kamu (P) telah masuk dengan kaki kanan.", analysis: "Tashrif muannats." },
          { ar: "دَخَلَا الْحَدِيقَةَ", translation: "Mereka berdua telah masuk taman.", analysis: "Subjek dual." },
          { ar: "دَخَلْنَ الْمَنْزِلَ", translation: "Mereka (P) telah masuk kediaman.", analysis: "Tashrif jamak muannats." }
        ]
      },
      {
        id: "l2_1_c10",
        wordAr: "خَرَجَ",
        translation: "Keluar (Telah)",
        description: "Fi'il Madhi (Lampau) untuk subjek 'Dia (Laki-laki)'.",
        category: "Mobilitas",
        examples: [
          { ar: "خَرَجَ الْمُوَظَّفُ مِنَ الْمَكْتَبِ", translation: "Karyawan itu telah keluar dari kantor.", analysis: "Subjek mudzakkar." },
          { ar: "خَرَجْتُ مِنَ الْبَيْتِ", translation: "Saya telah keluar dari rumah.", analysis: "Tashrif 'Saya'." },
          { ar: "خَرَجَتِ الطَّالِبَةُ مِنَ الْفَصْلِ", translation: "Siswi itu telah keluar dari kelas.", analysis: "Subjek muannats." },
          { ar: "مَتَى خَرَجْتَ؟", translation: "Kapan kamu keluar?", analysis: "Kata tanya waktu." },
          { ar: "خَرَجْنَا لِلنُّزْهَةِ", translation: "Kami telah keluar untuk tamasya.", analysis: "Tashrif 'Kami'." },
          { ar: "خَرَجُوا مَعًا", translation: "Mereka telah keluar bersama.", analysis: "Subjek jamak." },
          { ar: "مَا خَرَجْتُ الْيَوْمَ", translation: "Saya tidak keluar hari ini.", analysis: "Negasi madhi." },
          { ar: "خَرَجْتِ بِالرِّجْلِ الْيُسْرَى", translation: "Kamu (P) telah keluar dengan kaki kiri.", analysis: "Tashrif muannats." },
          { ar: "خَرَجَا مِنَ الْمَطَارِ", translation: "Mereka berdua telah keluar dari bandara.", analysis: "Subjek dual." },
          { ar: "خَرَجْنَ مِنَ الْمُسْتَشْفَى", translation: "Mereka (P) telah keluar dari rumah sakit.", analysis: "Tashrif jamak muannats." }
        ]
      },

      // KELOMPOK 2 — FI'IL MUDHARI (11-20)
      {
        id: "l2_1_c11",
        wordAr: "يَكْتُبُ",
        translation: "Menulis (Sedang/Akan)",
        description: "Fi'il Mudhari (Masa sekarang/akan) untuk subjek 'Dia (Laki-laki)'.",
        category: "Aktivitas Akademik",
        examples: [
          { ar: "يَكْتُبُ الطَّالِبُ الآنَ", translation: "Siswa itu sedang menulis sekarang.", analysis: "Mudhari dengan 'aan' (sekarang)." },
          { ar: "أَكْتُبُ رِسَالَةً لِأُمِّي", translation: "Saya sedang menulis surat untuk ibuku.", analysis: "Tashrif 'Saya' (Alif)." },
          { ar: "نَكْتُبُ الْوَاجِبَ", translation: "Kami sedang menulis PR.", analysis: "Tashrif 'Kami' (Nun)." },
          { ar: "هَلْ تَكْتُبُ الدَّرْسَ؟", translation: "Apakah kamu (L) sedang menulis pelajaran?", analysis: "Tashrif 'Kamu L' (Ta)." },
          { ar: "تَكْتُبُ فَاطِمَةُ فِي الدَّفْتَرِ", translation: "Fatimah sedang menulis di buku tulis.", analysis: "Tashrif 'Dia P' (Ta)." },
          { ar: "يَكْتُبُونَ كَثِيرًا", translation: "Mereka sedang menulis banyak.", analysis: "Subjek jamak." },
          { ar: "سَأَكْتُبُ غَدًا", translation: "Saya akan menulis besok.", analysis: "Awalan 'sa' menunjukkan masa depan." },
          { ar: "لَا أَكْتُبُ شَيْئًا", translation: "Saya tidak sedang menulis apa pun.", analysis: "Negasi mudhari menggunakan 'laa'." },
          { ar: "تَكْتُبِينَ بِسُرْعَةٍ", translation: "Kamu (P) sedang menulis dengan cepat.", analysis: "Tashrif 'Kamu P' (ina)." },
          { ar: "يَكْتُبَانِ الْمَقَالَةَ", translation: "Mereka berdua sedang menulis artikel.", analysis: "Subjek dual." }
        ]
      },
      {
        id: "l2_1_c12",
        wordAr: "يَقْرَأُ",
        translation: "Membaca (Sedang/Akan)",
        description: "Fi'il Mudhari (Masa sekarang/akan) untuk subjek 'Dia (Laki-laki)'.",
        category: "Aktivitas Akademik",
        examples: [
          { ar: "يَقْرَأُ الرَّجُلُ الْجَرِيدَةَ", translation: "Lelaki itu sedang membaca koran.", analysis: "Mudhari dasar." },
          { ar: "أَقْرَأُ الْقُرْآنَ كُلَّ يَوْمٍ", translation: "Saya membaca Al-Quran setiap hari.", analysis: "Kebiasaan (mudhari)." },
          { ar: "نَقْرَأُ الْكِتَابَ مَعًا", translation: "Kami sedang membaca buku bersama.", analysis: "Tashrif 'Kami'." },
          { ar: "مَاذَا تَقْرَأُ الآنَ؟", translation: "Apa yang sedang kamu (L) baca sekarang?", analysis: "Kata tanya." },
          { ar: "تَقْرَأُ الْبِنْتُ قِصَّةً", translation: "Anak perempuan itu sedang membaca cerita.", analysis: "Subjek muannats." },
          { ar: "يَقْرَأُونَ فِي الْمَكْتَبَةِ", translation: "Mereka sedang membaca di perpustakaan.", analysis: "Subjek jamak." },
          { ar: "سَوْفَ نَقْرَأُ غَدًا", translation: "Kami akan membaca besok.", analysis: "Penggunaan 'sawfa' (masa depan)." },
          { ar: "لَا أَقْرَأُ هَذَا الْخَبَرَ", translation: "Saya tidak membaca berita ini.", analysis: "Negasi mudhari." },
          { ar: "تَقْرَأِينَ بِهُدُوءٍ", translation: "Kamu (P) sedang membaca dengan tenang.", analysis: "Tashrif 'Kamu P'." },
          { ar: "يَقْرَأَانِ الدَّرْسَ", translation: "Mereka berdua sedang membaca pelajaran.", analysis: "Subjek dual." }
        ]
      },
      {
        id: "l2_1_c13",
        wordAr: "يَذْهَبُ",
        translation: "Pergi (Sedang/Akan)",
        description: "Fi'il Mudhari (Masa sekarang/akan) untuk subjek 'Dia (Laki-laki)'.",
        category: "Mobilitas",
        examples: [
          { ar: "يَذْهَبُ الطَّالِبُ إِلَى الْمَدْرَسَةِ", translation: "Siswa itu sedang pergi ke sekolah.", analysis: "Mudhari dasar." },
          { ar: "أَذْهَبُ إِلَى الْعَمَلِ كُلَّ صَبَاحٍ", translation: "Saya pergi bekerja setiap pagi.", analysis: "Tashrif 'Saya'." },
          { ar: "نَذْهَبُ إِلَى الْمَسْجِدِ لِلصَّلَاةِ", translation: "Kami pergi ke masjid untuk shalat.", analysis: "Tashrif 'Kami'." },
          { ar: "هَلْ تَذْهَبُ إِلَى السُّوقِ؟", translation: "Apakah kamu (L) sedang pergi ke pasar?", analysis: "Tashrif 'Kamu L'." },
          { ar: "تَذْهَبُ مَرْيَمُ إِلَى الْجَامِعَةِ", translation: "Maryam sedang pergi ke universitas.", analysis: "Subjek muannats." },
          { ar: "يَذْهَبُونَ إِلَى الْمَلْعَبِ", translation: "Mereka sedang pergi ke lapangan.", analysis: "Subjek jamak." },
          { ar: "سَأَذْهَبُ إِلَى بَيْتِي", translation: "Saya akan pergi ke rumahku.", analysis: "Masa depan." },
          { ar: "لَا أَذْهَبُ إِلَى هُنَاكَ", translation: "Saya tidak pergi ke sana.", analysis: "Negasi mudhari." },
          { ar: "تَذْهَبِينَ مَعَ أُمِّكِ", translation: "Kamu (P) sedang pergi bersama ibumu.", analysis: "Tashrif 'Kamu P'." },
          { ar: "يَذْهَبَانِ إِلَى الْحَدِيقَةِ", translation: "Mereka berdua sedang pergi ke taman.", analysis: "Subjek dual." }
        ]
      },
      {
        id: "l2_1_c14",
        wordAr: "يَجْلِسُ",
        translation: "Duduk (Sedang/Akan)",
        description: "Fi'il Mudhari (Masa sekarang/akan) untuk subjek 'Dia (Laki-laki)'.",
        category: "Posisi Tubuh",
        examples: [
          { ar: "يَجْلِسُ الطِّفْلُ هُنَا", translation: "Anak itu sedang duduk di sini.", analysis: "Mudhari dasar." },
          { ar: "أَجْلِسُ عَلَى الْكُرْسِيِّ", translation: "Saya sedang duduk di kursi.", analysis: "Tashrif 'Saya'." },
          { ar: "نَجْلِسُ فِي غُرْفَةِ الْأَكْلِ", translation: "Kami sedang duduk di ruang makan.", analysis: "Tashrif 'Kami'." },
          { ar: "أَيْنَ تَجْلِسُ؟", translation: "Di mana kamu (L) sedang duduk?", analysis: "Tashrif 'Kamu L'." },
          { ar: "تَجْلِسُ زَيْنَبُ أَمَامَ التِّلْفَازِ", translation: "Zainab sedang duduk di depan TV.", analysis: "Subjek muannats." },
          { ar: "يَجْلِسُونَ بِانْتِظَامٍ", translation: "Mereka sedang duduk dengan teratur.", analysis: "Subjek jamak." },
          { ar: "سَأَجْلِسُ بَعْدَ قَلِيلٍ", translation: "Saya akan duduk sebentar lagi.", analysis: "Masa depan." },
          { ar: "لَا أَجْلِسُ عَلَى الْأَرْضِ", translation: "Saya tidak duduk di tanah/lantai.", analysis: "Negasi mudhari." },
          { ar: "تَجْلِسِينَ بَيْنَ صَدِيقَاتِكِ", translation: "Kamu (P) sedang duduk di antara teman-temanmu.", analysis: "Tashrif 'Kamu P'." },
          { ar: "يَجْلِسَانِ فِي الصَّفِّ", translation: "Mereka berdua sedang duduk di kelas.", analysis: "Subjek dual." }
        ]
      },
      {
        id: "l2_1_c15",
        wordAr: "يَأْكُلُ",
        translation: "Makan (Sedang/Akan)",
        description: "Fi'il Mudhari (Masa sekarang/akan) untuk subjek 'Dia (Laki-laki)'.",
        category: "Kebutuhan Pokok",
        examples: [
          { ar: "يَأْكُلُ الرَّجُلُ الْخُبْزَ", translation: "Lelaki itu sedang makan roti.", analysis: "Mudhari dasar." },
          { ar: "أَكُلُ التُّفَّاحَةَ", translation: "Saya sedang makan apel.", analysis: "Tashrif 'Saya' (Hamzah + Alif jadi mad)." },
          { ar: "نَأْكُلُ الْغَدَاءَ الآنَ", translation: "Kami sedang makan siang sekarang.", analysis: "Tashrif 'Kami'." },
          { ar: "مَاذَا تَأْكُلُ؟", translation: "Apa yang sedang kamu (L) makan?", analysis: "Tashrif 'Kamu L'." },
          { ar: "تَأْكُلُ الْقِطَّةُ السَّمَكَ", translation: "Kucing itu sedang makan ikan.", analysis: "Subjek muannats." },
          { ar: "يَأْكُلُونَ بِشَهِيَّةٍ", translation: "Mereka sedang makan dengan lahap.", analysis: "Subjek jamak." },
          { ar: "سَآكُلُ فِي الْمَطْعEM", translation: "Saya akan makan di restoran.", analysis: "Masa depan." },
          { ar: "لَا آكُلُ الْحَلْوَى كَثِيرًا", translation: "Saya tidak makan banyak manisan.", analysis: "Negasi mudhari." },
          { ar: "تَأْكُلِينَ بِالْمِلْعَقَةِ", translation: "Kamu (P) sedang makan dengan sendok.", analysis: "Tashrif 'Kamu P'." },
          { ar: "يَأْكُلَانِ بَيْنَ الدُّرُوسِ", translation: "Mereka berdua sedang makan di antara pelajaran.", analysis: "Subjek dual." }
        ]
      },
      {
        id: "l2_1_c16",
        wordAr: "يَشْرَبُ",
        translation: "Minum (Sedang/Akan)",
        description: "Fi'il Mudhari (Masa sekarang/akan) untuk subjek 'Dia (Laki-laki)'.",
        category: "Kebutuhan Pokok",
        examples: [
          { ar: "يَشْرَبُ الطِّفْلُ اللَّبَنَ", translation: "Anak itu sedang minum susu.", analysis: "Mudhari dasar." },
          { ar: "أَشْرَبُ الْمَاءَ الْبَارِدَ", translation: "Saya sedang minum air dingin.", analysis: "Tashrif 'Saya'." },
          { ar: "نَشْرَبُ الشَّايَ فِي الْمَسَاءِ", translation: "Kami minum teh di sore hari.", analysis: "Tashrif 'Kami'." },
          { ar: "هَلْ تَشْرَبُ الْقَهْوَةَ؟", translation: "Apakah kamu (L) sedang minum kopi?", analysis: "Tashrif 'Kamu L'." },
          { ar: "تَشْرَبُ الطَّالِبَةُ الْعَصِيرَ", translation: "Siswi itu sedang minum jus.", analysis: "Subjek muannats." },
          { ar: "يَشْرَبُونَ بَعْدَ الطَّعَامِ", translation: "Mereka minum setelah makan.", analysis: "Subjek jamak." },
          { ar: "سَأَشْرَبُ الدَّوَاءَ", translation: "Saya akan minum obat.", analysis: "Masa depan." },
          { ar: "لَا أَشْرَبُ الْغَازِيَّاتِ", translation: "Saya tidak minum (minuman) bersoda.", analysis: "Negasi mudhari." },
          { ar: "تَشْرَبِينَ مَاءً كَثِيرًا", translation: "Kamu (P) sedang minum banyak air.", analysis: "Tashrif 'Kamu P'." },
          { ar: "يَشْرَبَانِ مِنَ الْكُوبِ", translation: "Mereka berdua sedang minum dari gelas.", analysis: "Subjek dual." }
        ]
      },
      {
        id: "l2_1_c17",
        wordAr: "يَنَامُ",
        translation: "Tidur (Sedang/Akan)",
        description: "Fi'il Mudhari (Masa sekarang/akan) untuk subjek 'Dia (Laki-laki)'.",
        category: "Istirahat",
        examples: [
          { ar: "يَنَامُ الطِّفْلُ فِي السَّرِيرِ", translation: "Anak itu sedang tidur di kasur.", analysis: "Mudhari dasar." },
          { ar: "أَنَامُ مُبَكِّرًا", translation: "Saya tidur awal.", analysis: "Tashrif 'Saya'." },
          { ar: "نَنَامُ ثَمَانِيَ سَاعَاتٍ", translation: "Kami tidur delapan jam.", analysis: "Tashrif 'Kami'." },
          { ar: "هَلْ تَنَامُ بَعْدَ الْعِشَاءِ؟", translation: "Apakah kamu (L) tidur setelah Isya?", analysis: "Tashrif 'Kamu L'." },
          { ar: "تَنَامُ الْأُمُّ الآنَ", translation: "Ibu sedang tidur sekarang.", analysis: "Subjek muannats." },
          { ar: "يَنَامُونَ فِي الْفُنْدُقِ", translation: "Mereka sedang tidur di hotel.", analysis: "Subjek jamak." },
          { ar: "سَأَنَامُ قَلِيلًا", translation: "Saya akan tidur sebentar.", analysis: "Masa depan." },
          { ar: "لَا أَنَامُ فِي النَّهَارِ", translation: "Saya tidak tidur di siang hari.", analysis: "Negasi mudhari." },
          { ar: "تَنَامِينَ جَيِّدًا", translation: "Kamu (P) sedang tidur dengan baik.", analysis: "Tashrif 'Kamu P'." },
          { ar: "يَنَامَانِ مَعًا", translation: "Mereka berdua sedang tidur bersama.", analysis: "Subjek dual." }
        ]
      },
      {
        id: "l2_1_c18",
        wordAr: "يَقُومُ",
        translation: "Berdiri/Bangun (Sedang/Akan)",
        description: "Fi'il Mudhari (Masa sekarang/akan) untuk subjek 'Dia (Laki-laki)'.",
        category: "Posisi Tubuh",
        examples: [
          { ar: "يَقُومُ الرَّجُلُ لِلصَّلَاةِ", translation: "Lelaki itu berdiri untuk shalat.", analysis: "Mudhari dasar." },
          { ar: "أَقُومُ مِنَ النَّوْمِ فِي الْفَجْرِ", translation: "Saya bangun tidur di waktu subuh.", analysis: "Tashrif 'Saya'." },
          { ar: "نَقُومُ لِلنَّشِيدِ الْوَطَنِيِّ", translation: "Kami berdiri untuk lagu kebangsaan.", analysis: "Tashrif 'Kami'." },
          { ar: "مَتَى تَقُومُ؟", translation: "Kapan kamu (L) bangun/berdiri?", analysis: "Tashrif 'Kamu L'." },
          { ar: "تَقُومُ الطَّالِبَةُ لِلْأُسْتَاذَةِ", translation: "Siswi itu berdiri untuk guru perempuan.", analysis: "Subjek muannats." },
          { ar: "يَقُومُونَ لِلْعَمَلِ", translation: "Mereka berdiri untuk bekerja.", analysis: "Subjek jamak." },
          { ar: "سَأَقُومُ بَعْدَ دَقِيقَةٍ", translation: "Saya akan berdiri setelah semenit.", analysis: "Masa depan." },
          { ar: "لَا أَقُومُ مِنَ الْمَكَانِ", translation: "Saya tidak berdiri dari tempat (ini).", analysis: "Negasi mudhari." },
          { ar: "تَقُومِينَ بِوَاجِبِكِ", translation: "Kamu (P) sedang menjalankan tugasmu.", analysis: "Tashrif 'Kamu P'." },
          { ar: "يَقُومَانِ بِسُرْعَةٍ", translation: "Mereka berdua berdiri dengan cepat.", analysis: "Subjek dual." }
        ]
      },
      {
        id: "l2_1_c19",
        wordAr: "يَدْخُلُ",
        translation: "Masuk (Sedang/Akan)",
        description: "Fi'il Mudhari (Masa sekarang/akan) untuk subjek 'Dia (Laki-laki)'.",
        category: "Mobilitas",
        examples: [
          { ar: "يَدْخُلُ الْأُسْتَاذُ الْفَصْلَ", translation: "Guru itu sedang masuk kelas.", analysis: "Mudhari dasar." },
          { ar: "أَدْخُلُ الْمَسْجِدَ الآنَ", translation: "Saya sedang masuk masjid sekarang.", analysis: "Tashrif 'Saya'." },
          { ar: "نَدْخُلُ الْبَيْتَ", translation: "Kami sedang masuk rumah.", analysis: "Tashrif 'Kami'." },
          { ar: "هَلْ تَدْخُلُ الْمَطْعَمَ؟", translation: "Apakah kamu (L) sedang masuk restoran?", analysis: "Tashrif 'Kamu L'." },
          { ar: "تَدْخُلُ الْبِنْتُ الْمَكْتَبَةَ", translation: "Anak perempuan itu sedang masuk perpustakaan.", analysis: "Subjek muannats." },
          { ar: "يَدْخُلُونَ الصَّفَّ", translation: "Mereka sedang masuk barisan/kelas.", analysis: "Subjek jamak." },
          { ar: "سَأَدْخُلُ بَعْدَكَ", translation: "Saya akan masuk setelahmu.", analysis: "Masa depan." },
          { ar: "لَا أَدْخُلُ هَذِهِ الْغُرْفَةَ", translation: "Saya tidak masuk kamar ini.", analysis: "Negasi mudhari." },
          { ar: "تَدْخُلِينَ بِأَدَبٍ", translation: "Kamu (P) masuk dengan sopan.", analysis: "Tashrif 'Kamu P'." },
          { ar: "يَدْخُلَانِ الْحَدِيقَةَ", translation: "Mereka berdua sedang masuk taman.", analysis: "Subjek dual." }
        ]
      },
      {
        id: "l2_1_c20",
        wordAr: "يَخْرُجُ",
        translation: "Keluar (Sedang/Akan)",
        description: "Fi'il Mudhari (Masa sekarang/akan) untuk subjek 'Dia (Laki-laki)'.",
        category: "Mobilitas",
        examples: [
          { ar: "يَخْرُجُ الرَّجُلُ مِنَ السَّيَّارَةِ", translation: "Lelaki itu sedang keluar dari mobil.", analysis: "Mudhari dasar." },
          { ar: "أَخْرُجُ مِنَ الْمَدْرَسَةِ ظُهْرًا", translation: "Saya keluar dari sekolah waktu dzuhur.", analysis: "Tashrif 'Saya'." },
          { ar: "نَخْرُجُ لِلْعِبَادَةِ", translation: "Kami keluar untuk ibadah.", analysis: "Tashrif 'Kami'." },
          { ar: "مَتَى تَخْرُجُ مِنَ الْعَمَلِ؟", translation: "Kapan kamu (L) keluar dari pekerjaan?", analysis: "Tashrif 'Kamu L'." },
          { ar: "تَخْرُجُ الطَّالِبَةُ مِنَ الْمَكْتَبَةِ", translation: "Siswi itu sedang keluar dari perpustakaan.", analysis: "Subjek muannats." },
          { ar: "يَخْرُجُونَ مِنَ الْمَسْجِدِ", translation: "Mereka sedang keluar dari masjid.", analysis: "Subjek jamak." },
          { ar: "سَأَخْرُجُ بَعْدَ قَلِيلٍ", translation: "Saya akan keluar sebentar lagi.", analysis: "Masa depan." },
          { ar: "لَا أَخْرُجُ فِي اللَّيْلِ", translation: "Saya tidak keluar di malam hari.", analysis: "Negasi mudhari." },
          { ar: "تَخْرُجِينَ مَعَ زَمِيلَاتِكِ", translation: "Kamu (P) sedang keluar bersama teman-temanmu.", analysis: "Tashrif 'Kamu P'." },
          { ar: "يَخْرُجَانِ مِنَ الْبَيْتِ", translation: "Mereka berdua sedang keluar dari rumah.", analysis: "Subjek dual." }
        ]
      },

      // KELOMPOK 3 — FI'IL AMAR (21-25)
      {
        id: "l2_1_c21",
        wordAr: "اُكْتُبْ",
        translation: "Tulislah! (Laki-laki)",
        description: "Fi'il Amar (Kata kerja perintah) untuk subjek 'Kamu (Laki-laki)'.",
        category: "Perintah",
        examples: [
          { ar: "يَا أَحْمَدُ، اُكْتُبِ الدَّرْسَ", translation: "Wahai Ahmad, tulislah pelajaran itu!", analysis: "Perintah untuk L tunggal." },
          { ar: "اُكْتُبِي يَا مَرْيَمُ", translation: "Tulislah wahai Maryam!", analysis: "Perintah untuk P tunggal (tambah ya)." },
          { ar: "اُكْتُبُوا أَسْمَاءَكُمْ", translation: "Tulislah nama-nama kalian!", analysis: "Perintah untuk L jamak (tambah wawu)." },
          { ar: "اُكْتُبَا هُنَا", translation: "Tulislah kalian berdua di sini!", analysis: "Perintah untuk dual (tambah alif)." },
          { ar: "اُكْتُبْنَ يَا بَنَاتُ", translation: "Tulislah wahai anak-anak perempuan!", analysis: "Perintah untuk P jamak (tambah nun)." },
          { ar: "اُكْتُبْ بِخَطٍّ وَاضِحٍ", translation: "Tulislah dengan tulisan yang jelas!", analysis: "Instruksi." },
          { ar: "اُكْتُبْ رِسَالَةً", translation: "Tulislah surat!", analysis: "Perintah dasar." },
          { ar: "اُكْتُبْ هَذِهِ الْكَلِمَةَ", translation: "Tulislah kata ini!", analysis: "Latihan." },
          { ar: "اُكْتُبْ فِي الدَّفْتَرِ", translation: "Tulislah di buku tulis!", analysis: "Instruksi kelas." },
          { ar: "اُكْتُبْ كُلَّ يَوْمٍ", translation: "Tulislah setiap hari!", analysis: "Saran/Perintah." }
        ]
      },
      {
        id: "l2_1_c22",
        wordAr: "اِقْرَأْ",
        translation: "Bacalah! (Laki-laki)",
        description: "Fi'il Amar (Kata kerja perintah) untuk subjek 'Kamu (Laki-laki)'.",
        category: "Perintah",
        examples: [
          { ar: "اِقْرَأْ بِاسْمِ رَبِّكَ", translation: "Bacalah dengan nama Tuhanmu!", analysis: "Ayat pertama Al-Quran." },
          { ar: "اِقْرَئِي الْكِتَابَ", translation: "Bacalah buku itu! (P)", analysis: "Perintah untuk P tunggal." },
          { ar: "اِقْرَأُوا الْقُرْآنَ", translation: "Bacalah kalian Al-Quran!", analysis: "Perintah untuk L jamak." },
          { ar: "اِقْرَأَا الْبَيَانَ", translation: "Bacalah kalian berdua pernyataan itu!", analysis: "Perintah untuk dual." },
          { ar: "اِقْرَأْنَ يَا طَالِبَاتُ", translation: "Bacalah wahai siswi-siswi!", analysis: "Perintah untuk P jamak." },
          { ar: "اِقْرَأْ هَذَا الْمَقَالَ", translation: "Bacalah artikel ini!", analysis: "Instruksi." },
          { ar: "اِقْرَأْ بِصَوْتٍ عَالٍ", translation: "Bacalah dengan suara keras!", analysis: "Instruksi membaca." },
          { ar: "اِقْرَأْ جَيِّدًا", translation: "Bacalah dengan baik!", analysis: "Saran." },
          { ar: "اِقْرَأْ هَذِهِ الصَّفْحَةَ", translation: "Bacalah halaman ini!", analysis: "Latihan." },
          { ar: "اِقْرَأْ فِي الْبَيْتِ", translation: "Bacalah di rumah!", analysis: "Tugas." }
        ]
      },
      {
        id: "l2_1_c23",
        wordAr: "اِذْهَبْ",
        translation: "Pergilah! (Laki-laki)",
        description: "Fi'il Amar (Kata kerja perintah) untuk subjek 'Kamu (Laki-laki)'.",
        category: "Perintah",
        examples: [
          { ar: "اِذْهَبْ إِلَى الْمَدْرَسَةِ", translation: "Pergilah ke sekolah!", analysis: "Perintah dasar." },
          { ar: "اِذْهَبِي إِلَى أُمِّكِ", translation: "Pergilah ke ibumu! (P)", analysis: "Perintah P tunggal." },
          { ar: "اِذْهَبُوا إِلَى الْمَسْجِدِ", translation: "Pergilah kalian ke masjid!", analysis: "Perintah L jamak." },
          { ar: "اِذْهَبَا إِلَى هُنَاكَ", translation: "Pergilah kalian berdua ke sana!", analysis: "Perintah dual." },
          { ar: "اِذْهَبْنَ إِلَى السُّوقِ", translation: "Pergilah kalian (P) ke pasar!", analysis: "Perintah P jamak." },
          { ar: "اِذْهَبْ بِسُرْعَةٍ", translation: "Pergilah dengan cepat!", analysis: "Perintah darurat." },
          { ar: "اِذْهَبْ مَعَ أَخِيكَ", translation: "Pergilah bersama saudaramu!", analysis: "Instruksi." },
          { ar: "اِذْهَبْ الآنَ", translation: "Pergilah sekarang!", analysis: "Ketegasan." },
          { ar: "اِذْهَبْ إِلَى الْعَمَلِ", translation: "Pergilah bekerja!", analysis: "Instruksi harian." },
          { ar: "اِذْهَبْ وَارْجِعْ", translation: "Pergilah dan kembalilah!", analysis: "Instruksi lengkap." }
        ]
      },
      {
        id: "l2_1_c24",
        wordAr: "اِجْلِسْ",
        translation: "Duduklah! (Laki-laki)",
        description: "Fi'il Amar (Kata kerja perintah) untuk subjek 'Kamu (Laki-laki)'.",
        category: "Perintah",
        examples: [
          { ar: "اِجْلِسْ عَلَى الْكُرْسِيِّ", translation: "Duduklah di kursi!", analysis: "Perintah dasar." },
          { ar: "اِجْلِسِي يَا بِنْتُ", translation: "Duduklah wahai anak perempuan!", analysis: "Perintah P tunggal." },
          { ar: "اِجْلِسُوا مَعًا", translation: "Duduklah kalian bersama!", analysis: "Perintah L jamak." },
          { ar: "اِجْلِسَا هُنَا", translation: "Duduklah kalian berdua di sini!", analysis: "Perintah dual." },
          { ar: "اِجْلِسْنَ بِأَدَبٍ", translation: "Duduklah kalian (P) dengan sopan!", analysis: "Perintah P jamak." },
          { ar: "اِجْلِسْ أَمَامِي", translation: "Duduklah di depanku!", analysis: "Instruksi posisi." },
          { ar: "اِجْلِسْ وَاسْتَرِحْ", translation: "Duduklah dan beristirahatlah!", analysis: "Saran ramah." },
          { ar: "اِجْلِسْ جَيِّدًا", translation: "Duduklah dengan baik!", analysis: "Instruksi sikap." },
          { ar: "اِجْلِسْ فِي مَكَانِكَ", translation: "Duduklah di tempatmu!", analysis: "Instruksi kelas." },
          { ar: "اِجْلِسْ هُنَا بَيْنَ صَدِيقَيْنِ", translation: "Duduklah di sini di antara dua teman!", analysis: "Instruksi posisi." }
        ]
      },
      {
        id: "l2_1_c25",
        wordAr: "كُلْ",
        translation: "Makanlah! (Laki-laki)",
        description: "Fi'il Amar (Kata kerja perintah) untuk subjek 'Kamu (Laki-laki)'. Akar kata أَكَلَ.",
        category: "Perintah",
        examples: [
          { ar: "كُلْ هَذَا التُّفَّاحَ", translation: "Makanlah apel ini!", analysis: "Perintah dasar." },
          { ar: "كُلِي بِيَمِينِكِ", translation: "Makanlah dengan tangan kananmu! (P)", analysis: "Adab makan (P)." },
          { ar: "كُلُوا هَنِيئًا", translation: "Makanlah kalian dengan nikmat!", analysis: "Ucapan ramah." },
          { ar: "كُلَا مَعًا", translation: "Makanlah kalian berdua bersama!", analysis: "Perintah dual." },
          { ar: "كُلْنَ مَا طَابَ لَكُنَّ", translation: "Makanlah kalian (P) apa yang baik bagi kalian!", analysis: "Perintah P jamak." },
          { ar: "كُلْ قَلِيلًا", translation: "Makanlah sedikit!", analysis: "Saran kesehatan." },
          { ar: "كُلْ مِنَ الْخُبْزِ", translation: "Makanlah dari roti itu!", analysis: "Penawaran." },
          { ar: "كُلْ بِبُطْءٍ", translation: "Makanlah dengan pelan!", analysis: "Saran." },
          { ar: "كُلْ فِي الْمَطْعَمِ", translation: "Makanlah di restoran!", analysis: "Saran tempat." },
          { ar: "كُلْ مَا تُحِبُّ", translation: "Makanlah apa yang kamu sukai!", analysis: "Kebebasan memilih." }
        ]
      },

      // KELOMPOK 4 — KATA KERJA IBADAH (26-30)
      {
        id: "l2_1_c26",
        wordAr: "صَلَّى",
        translation: "Shalat (Telah)",
        description: "Fi'il Madhi (Lampau) untuk ibadah shalat.",
        category: "Ibadah",
        examples: [
          { ar: "صَلَّى الرَّجُلُ فِي الْمَسْجِدِ", translation: "Lelaki itu telah shalat di masjid.", analysis: "Subjek mudzakkar." },
          { ar: "صَلَّيْتُ الْفَجْرَ مُبَكِّرًا", translation: "Saya telah shalat fajar pagi-pagi.", analysis: "Tashrif 'Saya'." },
          { ar: "نُصَلِّي خَمْسَ صَلَوَاتٍ", translation: "Kami shalat lima waktu.", analysis: "Tashrif 'Kami' (Mudhari)." },
          { ar: "هَلْ صَلَّيْتَ الظُّهْرَ؟", translation: "Apakah kamu sudah shalat dzuhur?", analysis: "Kata tanya." },
          { ar: "صَلَّتِ الْمَرْأَةُ فِي الْبَيْتِ", translation: "Perempuan itu telah shalat di rumah.", analysis: "Subjek muannats." },
          { ar: "صَلَّوْا جَمَاعَةً", translation: "Mereka telah shalat berjamaah.", analysis: "Subjek jamak." },
          { ar: "سَأُصَلِّي الْعَصْرَ الآنَ", translation: "Saya akan shalat ashar sekarang.", analysis: "Masa depan (Mudhari)." },
          { ar: "صَلِّ يَا أَخِي", translation: "Shalatlah wahai saudaraku!", analysis: "Perintah (Amar)." },
          { ar: "صَلَّيْنَا مَعَ الْإِمَامِ", translation: "Kami telah shalat bersama imam.", analysis: "Tashrif 'Kami' (Madhi)." },
          { ar: "يُصَلِّي الْمُسْلِمُونَ فِي كُلِّ مَكَانٍ", translation: "Umat Islam shalat di setiap tempat.", analysis: "Mudhari jamak." }
        ]
      },
      {
        id: "l2_1_c27",
        wordAr: "صَامَ",
        translation: "Berpuasa (Telah)",
        description: "Fi'il Madhi (Lampau) untuk ibadah puasa.",
        category: "Ibadah",
        examples: [
          { ar: "صَامَ الْمُسْلِمُ رَمَضَانَ", translation: "Muslim itu telah berpuasa Ramadhan.", analysis: "Subjek mudzakkar." },
          { ar: "صُمْتُ يَوْمَ الِاثْنَيْنِ", translation: "Saya telah berpuasa hari Senin.", analysis: "Tashrif 'Saya' (Alif jadi dhommah)." },
          { ar: "نَصُومُ شَهْرًا كَامِلًا", translation: "Kami berpuasa sebulan penuh.", analysis: "Tashrif 'Kami' (Mudhari)." },
          { ar: "هَلْ صُمْتَ أَمْسِ؟", translation: "Apakah kamu sudah puasa kemarin?", analysis: "Kata tanya." },
          { ar: "صَامَتِ الْبِنْتُ لِلَّهِ", translation: "Anak perempuan itu berpuasa karena Allah.", analysis: "Subjek muannats." },
          { ar: "صَامُوا تَطَوُّعًا", translation: "Mereka telah berpuasa sunnah.", analysis: "Subjek jamak." },
          { ar: "سَأَصُومُ غَدًا إِنْ شَاءَ اللَّهُ", translation: "Saya akan berpuasa besok insya Allah.", analysis: "Masa depan (Mudhari)." },
          { ar: "صُمْ لِتَصِحَّ", translation: "Berpuasalah agar kamu sehat!", analysis: "Perintah (Amar)." },
          { ar: "صُمْنَا فِي السَّفَرِ", translation: "Kami telah berpuasa dalam perjalanan.", analysis: "Tashrif 'Kami'." },
          { ar: "يَصُومُ النَّاسُ فِي كُلِّ الْعَالَمِ", translation: "Orang-orang berpuasa di seluruh dunia.", analysis: "Mudhari." }
        ]
      },
      {
        id: "l2_1_c28",
        wordAr: "دَعَا",
        translation: "Berdoa (Telah)",
        description: "Fi'il Madhi (Lampau) untuk berdoa kepada Allah.",
        category: "Ibadah",
        examples: [
          { ar: "دَعَا الْمُؤْمِنُ رَبَّهُ", translation: "Mukmin itu telah berdoa kepada Tuhannya.", analysis: "Subjek mudzakkar." },
          { ar: "دَعَوْتُ اللَّهَ كَثِيرًا", translation: "Saya telah berdoa kepada Allah dengan banyak.", analysis: "Tashrif 'Saya' (Alif jadi wawu)." },
          { ar: "نَدْعُو اللَّهَ بِالتَّوْفِيقِ", translation: "Kami berdoa kepada Allah demi kesuksesan.", analysis: "Tashrif 'Kami' (Mudhari)." },
          { ar: "هَلْ دَعَوْتَ لِي؟", translation: "Apakah kamu sudah mendoakanku?", analysis: "Tashrif 'Kamu'." },
          { ar: "دَعَتِ الْأُمُّ لِأَوْلَادِهَا", translation: "Ibu telah berdoa untuk anak-anaknya.", analysis: "Subjek muannats." },
          { ar: "دَعَوْا بِالْخَيْرِ", translation: "Mereka telah berdoa demi kebaikan.", analysis: "Subjek jamak." },
          { ar: "سَأَدْعُو لَكَ", translation: "Saya akan mendoakanmu.", analysis: "Masa depan." },
          { ar: "اُدْعُ اللَّهَ مُخْلِصًا", translation: "Berdoalah kepada Allah dengan ikhlas!", analysis: "Perintah (Amar)." },
          { ar: "دَعَوْنَا فِي السُّجُودِ", translation: "Kami telah berdoa di dalam sujud.", analysis: "Tashrif 'Kami'." },
          { ar: "يَدْعُو الْمُسْلِمُ بِالْمَغْفِرَةِ", translation: "Muslim itu berdoa meminta ampunan.", analysis: "Mudhari." }
        ]
      },
      {
        id: "l2_1_c29",
        wordAr: "تَابَ",
        translation: "Bertaubat (Telah)",
        description: "Fi'il Madhi (Lampau) untuk bertaubat kepada Allah.",
        category: "Ibadah",
        examples: [
          { ar: "تَابَ الْعَبْدُ إِلَى اللَّهِ", translation: "Hamba itu telah bertaubat kepada Allah.", analysis: "Subjek mudzakkar." },
          { ar: "تُبْتُ مِنْ ذُنُوبِي", translation: "Saya telah bertaubat dari dosa-dosaku.", analysis: "Tashrif 'Saya' (Alif jadi dhommah)." },
          { ar: "نَتُوبُ إِلَى اللَّهِ دَائِمًا", translation: "Kami bertaubat kepada Allah selamanya.", analysis: "Tashrif 'Kami' (Mudhari)." },
          { ar: "هَلْ تُبْتَ؟", translation: "Apakah kamu sudah bertaubat?", analysis: "Kata tanya." },
          { ar: "تَابَتِ الْمَرْأَةُ", translation: "Perempuan itu telah bertaubat.", analysis: "Subjek muannats." },
          { ar: "تَابُوا تَوْبَةً نَصُوحًا", translation: "Mereka telah bertaubat dengan taubat nasuha.", analysis: "Subjek jamak." },
          { ar: "سَأَتُوبُ إِلَيْهِ", translation: "Saya akan bertaubat kepada-Nya.", analysis: "Masa depan." },
          { ar: "تُبْ يَا أَخِي", translation: "Bertaubatlah wahai saudaraku!", analysis: "Perintah (Amar)." },
          { ar: "تُبْنَا مِنَ الْخَطِيئَةِ", translation: "Kami telah bertaubat dari kesalahan.", analysis: "Tashrif 'Kami'." },
          { ar: "يَتُوبُ اللَّهُ عَلَى مَنْ تَابَ", translation: "Allah menerima taubat orang yang bertaubat.", analysis: "Prinsip agama." }
        ]
      },
      {
        id: "l2_1_c30",
        wordAr: "شَكَرَ",
        translation: "Bersyukur (Telah)",
        description: "Fi'il Madhi (Lampau) untuk bersyukur atau berterima kasih.",
        category: "Ibadah",
        examples: [
          { ar: "شَكَرَ الْمُؤْمِنُ رَبَّهُ", translation: "Mukmin itu telah bersyukur kepada Tuhannya.", analysis: "Subjek mudzakkar." },
          { ar: "شَكَرْتُ اللَّهَ عَلَى النِّعْمَةِ", translation: "Saya telah bersyukur kepada Allah atas nikmat.", analysis: "Tashrif 'Saya'." },
          { ar: "نَشْكُرُ اللَّهَ دَائِمًا", translation: "Kami bersyukur kepada Allah selamanya.", analysis: "Tashrif 'Kami' (Mudhari)." },
          { ar: "هَلْ شَكَرْتَ صَدِيقَكَ؟", translation: "Apakah kamu sudah berterima kasih pada temanmu?", analysis: "Tashrif 'Kamu'." },
          { ar: "شَكَرَتِ الْبِنْتُ أَبَاهَا", translation: "Anak perempuan itu telah berterima kasih kepada ayahnya.", analysis: "Subjek muannats." },
          { ar: "شَكَرُوا بِقُلُوبِهِمْ", translation: "Mereka telah bersyukur dengan hati mereka.", analysis: "Subjek jamak." },
          { ar: "سَأَشْكُرُكَ غَدًا", translation: "Saya akan berterima kasih padamu besok.", analysis: "Masa depan." },
          { ar: "اُشْكُرْ رَبَّكَ", translation: "Bersyukurlah kepada Tuhanmu!", analysis: "Perintah (Amar)." },
          { ar: "شَكَرْنَا لِلطَّعَامِ", translation: "Kami telah bersyukur atas makanan.", analysis: "Tashrif 'Kami'." },
          { ar: "يَشْكُرُ النَّاسُ بَعْضُهُمْ بَعْضًا", translation: "Orang-orang saling berterima kasih satu sama lain.", analysis: "Mudhari." }
        ]
      }
    ],
    grammarSection: {
      title: "Sistem Fi'il Arab — Tashrif 14 Dhamir",
      explanation: "Fi'il Arab seperti mesin cetak yang berubah bentuk sesuai SIAPA yang melakukan aksi.\n\nANALOGI SEDERHANA:\nDalam bahasa Indonesia kita bilang 'saya pergi', 'kamu pergi', 'dia pergi' — kata 'pergi' tidak berubah.\n\nDalam bahasa Arab, kata kerjanya BERUBAH SENDIRI sesuai pelakunya!\nكَتَبَ (dia laki menulis)\nكَتَبَتْ (dia perempuan menulis)\nكَتَبْتُ (saya menulis)\n\nIni membuat kalimat Arab lebih ringkas — tidak perlu selalu menyebut kata ganti karena fi'ilnya sudah 'memberitahu' siapa yang melakukan!",
      tashrif: {
        title: "Tashrif Fi'il Madhi كَتَبَ",
        rows: [
          {
            dhamir: "هُوَ",
            dhaminMeaning: "Dia (laki)",
            fiil: "كَتَبَ",
            akhiran: "—",
            contoh: "كَتَبَ الطَّالِبُ"
          },
          {
            dhamir: "هِيَ",
            dhaminMeaning: "Dia (prp)",
            fiil: "كَتَبَتْ",
            akhiran: "تْ",
            contoh: "كَتَبَتِ الطَّالِبَةُ"
          },
          {
            dhamir: "هُمَا",
            dhaminMeaning: "Mereka berdua (lk)",
            fiil: "كَتَبَا",
            akhiran: "ا",
            contoh: "كَتَبَا الطَّالِبَانِ"
          },
          {
            dhamir: "هُمَا",
            dhaminMeaning: "Mereka berdua (prp)",
            fiil: "كَتَبَتَا",
            akhiran: "تَا",
            contoh: "كَتَبَتَا الطَّالِبَتَانِ"
          },
          {
            dhamir: "هُمْ",
            dhaminMeaning: "Mereka (laki)",
            fiil: "كَتَبُوا",
            akhiran: "وا",
            contoh: "كَتَبُوا الطُّلَّابُ"
          },
          {
            dhamir: "هُنَّ",
            dhaminMeaning: "Mereka (prp)",
            fiil: "كَتَبْنَ",
            akhiran: "نَ",
            contoh: "كَتَبْنَ الطَّالِبَاتُ"
          },
          {
            dhamir: "أَنْتَ",
            dhaminMeaning: "Kamu (laki)",
            fiil: "كَتَبْتَ",
            akhiran: "تَ",
            contoh: "كَتَبْتَ يَا أَحْمَدُ"
          },
          {
            dhamir: "أَنْتِ",
            dhaminMeaning: "Kamu (prp)",
            fiil: "كَتَبْتِ",
            akhiran: "تِ",
            contoh: "كَتَبْتِ يَا فَاطِمَةُ"
          },
          {
            dhamir: "أَنْتُمَا",
            dhaminMeaning: "Kalian berdua",
            fiil: "كَتَبْتُمَا",
            akhiran: "تُمَا",
            contoh: "كَتَبْتُمَا مَعًا"
          },
          {
            dhamir: "أَنْتُمْ",
            dhaminMeaning: "Kalian (laki)",
            fiil: "كَتَبْتُمْ",
            akhiran: "تُمْ",
            contoh: "كَتَبْتُمُ الْوَاجِبَ"
          },
          {
            dhamir: "أَنْتُنَّ",
            dhaminMeaning: "Kalian (prp)",
            fiil: "كَتَبْتُنَّ",
            akhiran: "تُنَّ",
            contoh: "كَتَبْتُنَّ الرِّسَالَةَ"
          },
          {
            dhamir: "أَنَا",
            dhaminMeaning: "Saya",
            fiil: "كَتَبْتُ",
            akhiran: "تُ",
            contoh: "كَتَبْتُ الدَّرْسَ"
          },
          {
            dhamir: "نَحْنُ",
            dhaminMeaning: "Kami/Kita",
            fiil: "كَتَبْنَا",
            akhiran: "نَا",
            contoh: "كَتَبْنَا مَعًا"
          }
        ]
      },
      tashrif_mudhari: {
        title: "Tashrif Fi'il Mudhari يَكْتُبُ",
        rows: [
          {
            dhamir: "هُوَ",
            dhaminMeaning: "Dia (laki)",
            fiil: "يَكْتُبُ",
            awalanCiri: "يـ",
            contoh: "يَكْتُبُ الطَّالِبُ"
          },
          {
            dhamir: "هِيَ",
            dhaminMeaning: "Dia (prp)",
            fiil: "تَكْتُبُ",
            awalanCiri: "تـ",
            contoh: "تَكْتُبُ الطَّالِبَةُ"
          },
          {
            dhamir: "هُمَا",
            dhaminMeaning: "Mereka berdua (lk)",
            fiil: "يَكْتُبَانِ",
            awalanCiri: "يـ + انِ",
            contoh: "يَكْتُبَانِ الدَّرْسَ"
          },
          {
            dhamir: "هُمَا",
            dhaminMeaning: "Mereka berdua (prp)",
            fiil: "تَكْتُبَانِ",
            awalanCiri: "تـ + انِ",
            contoh: "تَكْتُبَانِ الرِّسَالَةَ"
          },
          {
            dhamir: "هُمْ",
            dhaminMeaning: "Mereka (laki)",
            fiil: "يَكْتُبُونَ",
            awalanCiri: "يـ + ونَ",
            contoh: "يَكْتُبُونَ الْوَاجِبَ"
          },
          {
            dhamir: "هُنَّ",
            dhaminMeaning: "Mereka (prp)",
            fiil: "يَكْتُبْنَ",
            awalanCiri: "يـ + نَ",
            contoh: "يَكْتُبْنَ الرَّسَائِلَ"
          },
          {
            dhamir: "أَنْتَ",
            dhaminMeaning: "Kamu (laki)",
            fiil: "تَكْتُبُ",
            awalanCiri: "تـ",
            contoh: "تَكْتُبُ جَيِّدًا"
          },
          {
            dhamir: "أَنْتِ",
            dhaminMeaning: "Kamu (prp)",
            fiil: "تَكْتُبِينَ",
            awalanCiri: "تـ + ينَ",
            contoh: "تَكْتُبِينَ بِخَطٍّ جَمِيلٍ"
          },
          {
            dhamir: "أَنْتُمَا",
            dhaminMeaning: "Kalian berdua",
            fiil: "تَكْتُبَانِ",
            awalanCiri: "تـ + انِ",
            contoh: "تَكْتُبَانِ مَعًا"
          },
          {
            dhamir: "أَنْتُمْ",
            dhaminMeaning: "Kalian (laki)",
            fiil: "تَكْتُبُونَ",
            awalanCiri: "تـ + ونَ",
            contoh: "تَكْتُبُونَ الْإِجَابَاتِ"
          },
          {
            dhamir: "أَنْتُنَّ",
            dhaminMeaning: "Kalian (prp)",
            fiil: "تَكْتُبْنَ",
            awalanCiri: "تـ + نَ",
            contoh: "تَكْتُبْنَ بِسُرْعَةٍ"
          },
          {
            dhamir: "أَنَا",
            dhaminMeaning: "Saya",
            fiil: "أَكْتُبُ",
            awalanCiri: "أـ",
            contoh: "أَكْتُبُ كُلَّ يَوْمٍ"
          },
          {
            dhamir: "نَحْنُ",
            dhaminMeaning: "Kami/Kita",
            fiil: "نَكْتُبُ",
            awalanCiri: "نـ",
            contoh: "نَكْتُبُ بِالْعَرَبِيَّةِ"
          }
        ]
      },
      examples: [
        {
          wordAr: "كَتَبَ الطَّالِبُ الدَّرْسَ",
          translation: "Pelajar itu menulis pelajaran",
          analysis: "كَتَبَ madhi هو. الطَّالِبُ fa'il rafa'. الدَّرْسَ maf'ul nashab fathah"
        },
        {
          wordAr: "كَتَبَتِ الطَّالِبَةُ رِسَالَةً",
          translation: "Pelajar perempuan menulis surat",
          analysis: "كَتَبَتْ madhi هي — ada تْ karena fa'il muannats. رِسَالَةً nakirah nashab"
        },
        {
          wordAr: "يَكْتُبُ الْأُسْتَاذُ عَلَى السَّبُّورَةِ",
          translation: "Ustadz sedang menulis di papan tulis",
          analysis: "يَكْتُبُ mudhari هو. عَلَى السَّبُّورَةِ = jar majrur (keterangan tempat)"
        },
        {
          wordAr: "تَكْتُبُ الطَّالِبَاتُ فِي الدَّفَاتِرِ",
          translation: "Para pelajar perempuan menulis di buku",
          analysis: "تَكْتُبُ mudhari هن. Jamak muannats pakai awalan تـ"
        },
        {
          wordAr: "اُكْتُبْ اسْمَكَ هُنَا مِنْ فَضْلِكَ",
          translation: "Tulislah namamu di sini tolong",
          analysis: "اُكْتُبْ fi'il amar. اسْمَكَ maf'ul nashab. مِنْ فَضْلِكَ = ungkapan 'tolong'"
        },
        {
          wordAr: "كَتَبْنَا الْوَاجِبَ أَمْسِ",
          translation: "Kami menulis PR kemarin",
          analysis: "كَتَبْنَا madhi نحن — akhiran نَا. الْوَاجِبَ maf'ul. أَمْسِ zharaf zaman"
        },
        {
          wordAr: "هَلْ كَتَبْتَ رِسَالَةَ التَّقْدِيمِ؟",
          translation: "Apakah kamu sudah menulis surat lamaran?",
          analysis: "كَتَبْتَ madhi أنت — akhiran تَ. رِسَالَةَ التَّقْدِيمِ idhafah manshub"
        },
        {
          wordAr: "سَيَكْتُبُ الرَّئِيسُ الْقَرَارَ غَدًا",
          translation: "Presiden akan menulis keputusan besok",
          analysis: "سَ + يَكْتُبُ = akan menulis. سَ menunjukkan masa depan dekat"
        }
      ],
      commonMistakes: [
        {
          wrong: "كَتَبَ الطَّالِبَةُ",
          correct: "كَتَبَتِ الطَّالِبَةُ",
          explanation: "Fa'il muannats الطَّالِبَةُ → fi'il harus muannats dengan تْ di akhir"
        },
        {
          wrong: "يَكْتُبُونَ الطَّالِبَاتُ",
          correct: "يَكْتُبْنَ الطَّالِبَاتُ",
          explanation: "Jamak muannats الطَّالِبَاتُ → fi'il mudhari pakai يَفْعَلْنَ bukan يَفْعَلُونَ"
        },
        {
          wrong: "إِكْتُبْ الدَّرْسَ",
          correct: "اُكْتُبِ الدَّرْسَ",
          explanation: "Hamzah amar dari كَتَبَ adalah dhammah (اُ) bukan kasrah (اِ)"
        }
      ],
      comparisonWithIndonesian: "Berbeda dengan bahasa Indonesia yang statis, kata kerja Arab (Fi'il) berubah secara sistematis sesuai pelaku (dhomir) dan waktu (madhi/mudhari).",
      rules: [
        {
          title: "Tashrif Fi'il",
          content: "Perubahan bentuk kata kerja sesuai dengan dhomir pelakunya.",
          examples: []
        }
      ],
      editorialBox: {
        title: "TIPS BELAJAR",
        content: "Hafalkan pola akhiran untuk Fi'il Madhi dan pola awalan untuk Fi'il Mudhari untuk memudahkan identifikasi subjek."
      }
    },
    readingSection: {
      title: "Analisis Kalimat Fi'liyyah (Qira'ah)",
      sentences: [
        {
          wordAr: "ذَهَبَ الطَّالِبُ إِلَى الْمَدْرَسَةِ وَجَلَسَ فِي الْفَصْلِ",
          translation: "Pelajar itu pergi ke sekolah dan duduk di kelas",
          logicExplanation: "Logika: Dua fi'il madhi dihubungkan وَ. Fa'il الطَّالِبُ berlaku untuk keduanya. Urutan: fi'il dulu baru fa'il = jumlah fi'liyyah.\n\nBreakdown:\n- ذَهَبَ = madhi (dia laki pergi)\n- الطَّالِبُ = fa'il rafa' (dhammah)\n- إِلَى الْمَدْرَسَةِ = jar majrur\n- جَلَسَ = madhi kedua\n- فِي الْفَصْلِ = jar majrur tempat"
        },
        {
          wordAr: "يَقْرَأُ الْأُسْتَاذُ الْكِتَابَ وَيَشْرَحُ الدَّرْسَ",
          translation: "Ustadz membaca buku dan menjelaskan pelajaran",
          logicExplanation: "Logika: Dua fi'il mudhari = kegiatan yang sedang berlangsung bersamaan. Fa'il sama untuk keduanya.\n\nBreakdown:\n- يَقْرَأُ = mudhari هو\n- الْأُسْتَاذُ = fa'il rafa'\n- الْكِتَابَ = maf'ul nashab (fathah)\n- يَشْرَحُ = mudhari kedua\n- الدَّرْسَ = maf'ul kedua"
        },
        {
          wordAr: "اِجْلِسُوا وَاسْتَمِعُوا إِلَى الْأُسْتَاذِ",
          translation: "Duduklah kalian dan dengarkanlah ustadz",
          logicExplanation: "Logika: Fi'il amar jamak laki ditambah وا. Dua perintah berurutan dengan وَ.\n\nBreakdown:\n- اِجْلِسُوا = fi'il amar jamak laki (+ وا)\n- اسْتَمِعُوا = fi'il amar jamak kedua\n- إِلَى الْأُسْتَاذِ = jar majrur"
        },
        {
          wordAr: "صَلَّى النَّبِيُّ ﷺ وَدَعَا رَبَّهُ",
          translation: "Nabi ﷺ shalat dan berdoa kepada Tuhannya",
          logicExplanation: "Logika: Fi'il yang berakhir alif/ya' = fi'il mu'tall, perlu perhatian khusus tapi polanya sama.\n\nBreakdown:\n- صَلَّى = madhi fi'il mu'tall\n- النَّبِيُّ = fa'il rafa'\n- دَعَا = madhi mu'tall kedua\n- رَبَّهُ = maf'ul nashab + dhamir milik"
        },
        {
          wordAr: "شَكَرَ الْمُسْلِمُ رَبَّهُ وَتَابَ إِلَيْهِ كُلَّ يَوْمٍ",
          translation: "Muslim itu bersyukur kepada Tuhannya dan bertaubat setiap hari",
          logicExplanation: "Logika: Dua fi'il dengan satu fa'il. كُلَّ يَوْمٍ berlaku untuk kedua fi'il sekaligus.\n\nBreakdown:\n- شَكَرَ = madhi\n- الْمُسْلِمُ = fa'il rafa'\n- رَبَّهُ = maf'ul (nashab + dhamir هـ)\n- تَابَ إِلَيْهِ = taubat kepadaNya\n- كُلَّ يَوْمٍ = zharaf zaman"
        }
      ]
    },
    dialogueSection: {
      title: "Praktik Tashrif di Kelas",
      context: "Ustadz Ahmad sedang menguji murid-muridnya tentang penggunaan kata kerja dalam kalimat.",
      lines: [
        { speaker: "Ustadz", ar: "السَّلَامُ عَلَيْكُمْ يَا طُلَّابُ، هَلْ كَتَبْتُمُ الدَّرْسَ؟", translation: "Assalamu'alaikum wahai siswa, apakah kalian sudah menulis pelajaran?", meaning: "Menanyakan pekerjaan lampau (Madhi Jamak)." },
        { speaker: "Murid", ar: "وَعَلَيْكُمُ السَّلَامُ، نَعَمْ يَا أُسْتَاذُ، كَتَبْنَا كُلَّ شَيْءٍ", translation: "Wa'alaikumussalam, ya ustadz, kami telah menulis semuanya.", meaning: "Menjawab dengan Madhi Nahnu." },
        { speaker: "Ustadz", ar: "مَاذَا تَفْعَلُ الآنَ يَا خَالِدُ؟", translation: "Apa yang sedang kamu lakukan sekarang wahai Khalid?", meaning: "Menanyakan aktivitas sekarang (Mudhari Anta)." },
        { speaker: "Khalid", ar: "أَنَا أَقْرَأُ الْكِتَابَ الْجَدِيدَ", translation: "Saya sedang membaca buku baru.", meaning: "Menjawab dengan Mudhari Ana." },
        { speaker: "Ustadz", ar: "وَمَاذَا تَفْعَلُ فَاطِمَةُ؟", translation: "Dan apa yang sedang dilakukan Fatimah?", meaning: "Menanyakan pihak ketiga muannats." },
        { speaker: "Zainab", ar: "هِيَ تَكْتُبُ فِي دَفْتَرِهَا", translation: "Dia sedang menulis di buku tulisnya.", meaning: "Menjawab dengan Mudhari Hiya." },
        { speaker: "Ustadz", ar: "هَلْ ذَهَبْتُمْ إِلَى الْمَكْتَبَةِ أَمْسِ؟", translation: "Apakah kalian pergi ke perpustakaan kemarin?", meaning: "Menanyakan kejadian lampau." },
        { speaker: "Murid", ar: "لَا، مَا ذَهَبْنَا هُنَاكَ، بَلْ جَلَسْنَا فِي الْبَيْتِ", translation: "Tidak, kami tidak pergi ke sana, melainkan kami duduk di rumah.", meaning: "Negasi Madhi." },
        { speaker: "Ustadz", ar: "يَا عَلِيُّ، اِذْهَبْ إِلَى السَّبُّورَةِ وَاُكْتُبْ هَذِهِ الْكَلِمَةَ", translation: "Wahai Ali, pergilah ke papan tulis dan tulislah kata ini!", meaning: "Kalimat perintah (Amar)." },
        { speaker: "Ali", ar: "حَاضِرٌ يَا أُسْتَاذُ، سَأَكْتُبُ الآنَ", translation: "Hadir ustadz, saya akan menulis sekarang.", meaning: "Kepatuhan dan niat akan datang." },
        { speaker: "Ustadz", ar: "يَا لَيْلَى، اِقْرَئِي هَذِهِ الْجُمْلَةَ", translation: "Wahai Laila, bacalah kalimat ini!", meaning: "Perintah muannats (Amar P)." },
        { speaker: "Laila", ar: "بِسْمِ اللَّهِ... ذَهَبَ أَحْمَدُ إِلَى الْمَسْجِدِ", translation: "Bismillah... Ahmad telah pergi ke masjid.", meaning: "Membaca teks." },
        { speaker: "Ustadz", ar: "أَحْسَنْتِ! أَنْتُمْ طُلَّابٌ مَاهِرُونَ جِدًّا", translation: "Bagus sekali! Kalian adalah siswa-siswa yang sangat mahir.", meaning: "Pujian." },
        { speaker: "Murid", ar: "شُكْرًا يَا أُسْتَاذُ، نَحْنُ نُحِبُّ اللُّغَةَ الْعَرَبِيَّةَ", translation: "Terima kasih ustadz, kami mencintai bahasa Arab.", meaning: "Penutup ramah." }
      ]
    },
    quiz: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Manakah bentuk Fi'il Madhi yang tepat untuk subjek 'Saya' (Ana) dari akar kata ذَهَبَ?",
        questionAr: "أَنَا ____ إِلَى الْمَدْرَسَةِ",
        options: ["ذَهَبَ", "ذَهَبْتُ", "ذَهَبْتَ", "أَذْهَبُ"],
        correctAnswer: "ذَهَبْتُ",
        explanation: "Untuk subjek 'Saya' (Ana) dalam bentuk lampau (Madhi), akar kata ditambah akhiran 'tu'."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Ubah Fi'il Mudhari يَكْتُبُ agar selaras dengan subjek 'Fatimah' (Dia Perempuan).",
        questionAr: "فَاطِمَةُ ____ الرِّسَالَةَ",
        options: ["يَكْتُبُ", "أَكْتُبُ", "تَكْتُبُ", "نَكْتُبُ"],
        correctAnswer: "تَكْتُبُ",
        explanation: "Mudhari untuk 'Dia Perempuan' (Hiya) diawali dengan huruf Ta."
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Apa arti dari Fi'il Amar 'اِجْلِسْ'?",
        options: ["Dia sedang duduk", "Saya telah duduk", "Duduklah!", "Jangan duduk"],
        correctAnswer: "Duduklah!",
        explanation: "Ijlis adalah bentuk perintah (Amar) dari akar kata Jalasa (duduk)."
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "Lengkapi kalimat: 'Kami telah berpuasa Ramadhan'.",
        questionAr: "نَحْنُ ____ رَمَضَانَ",
        options: ["صَامَ", "صُمْتُ", "صُمْنَا", "نَصُومُ"],
        correctAnswer: "صُمْنَا",
        explanation: "Untuk 'Kami' (Nahnu) dalam bentuk lampau, akar kata ditambah akhiran 'naa'."
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "Manakah awalan yang menunjukkan subjek 'Kami' (Nahnu) dalam Fi'il Mudhari?",
        options: ["Alif (أ)", "Ta (ت)", "Ya (ي)", "Nun (ن)"],
        correctAnswer: "Nun (ن)",
        explanation: "Mudhari untuk Nahnu selalu diawali dengan huruf Nun. Contoh: Naktubu, Nadzhabu."
      },
      {
        id: "q6",
        type: "multiple-choice",
        question: "Terjemahkan: 'Dia (L) sedang minum air'.",
        options: ["شَرِبَ الْمَاءَ", "يَشْرَبُ الْمَاءَ", "تَشْرَبُ الْمَاءَ", "أَشْرَبُ الْمَاءَ"],
        correctAnswer: "يَشْرَبُ الْمَاءَ",
        explanation: "Sedang minum = Mudhari. Dia (L) = awalan Ya. Jadi: Yasyrobu."
      },
      {
        id: "q7",
        type: "multiple-choice",
        question: "Pilih bentuk perintah (Amar) untuk subjek Perempuan Tunggal (Kamu P).",
        options: ["اِقْرَأْ", "اِقْرَئِي", "اِقْرَأُوا", "قَرَأَتْ"],
        correctAnswer: "اِقْرَئِي",
        explanation: "Amar untuk perempuan tunggal ditambah akhiran ya sukun (Iqra'ii)."
      },
      {
        id: "q8",
        type: "multiple-choice",
        question: "Apa perbedaan utama antara Madhi dan Mudhari?",
        options: ["Madhi = Perintah, Mudhari = Larangan", "Madhi = Sekarang, Mudhari = Lampau", "Madhi = Lampau, Mudhari = Sekarang/Akan", "Tidak ada perbedaan"],
        correctAnswer: "Madhi = Lampau, Mudhari = Sekarang/Akan",
        explanation: "Madhi menunjukkan kejadian yang sudah selesai. Mudhari menunjukkan yang sedang atau akan terjadi."
      },
      {
        id: "q9",
        type: "multiple-choice",
        question: "Lengkapi: 'Mereka (L) telah pergi'.",
        questionAr: "هُمْ ____",
        options: ["ذَهَبَ", "ذَهَبَتْ", "ذَهَبُوا", "ذَهَبْنَ"],
        correctAnswer: "ذَهَبُوا",
        explanation: "Untuk 'Mereka L' (Hum) dalam bentuk lampau, ditambah akhiran wawu alif (u-a)."
      },
      {
        id: "q10",
        type: "multiple-choice",
        question: "Mana yang merupakan Fi'il Ibadah?",
        options: ["أَكَلَ", "صَلَّى", "نَامَ", "خَرَجَ"],
        correctAnswer: "صَلَّى",
        explanation: "Shallaa berarti shalat, merupakan aktivitas ibadah."
      },
      {
        id: "q11",
        type: "multiple-choice",
        question: "Bagaimana cara mengatakan 'Saya akan makan'?",
        options: ["أَكَلْتُ", "سَآكُلُ", "يَأْكُلُ", "كُلْ"],
        correctAnswer: "سَآكُلُ",
        explanation: "Awalan 'sa' pada mudhari menunjukkan masa depan (akan)."
      },
      {
        id: "q12",
        type: "multiple-choice",
        question: "Analisis I'rab: Dalam kalimat 'أَكَلَ الطِّفْلُ التُّفَّاحَةَ', kedudukan 'الطِّفْلُ' adalah...",
        options: ["Objek (Maf'ul)", "Pelaku (Fa'il)", "Kata Sifat", "Kata Tunjuk"],
        correctAnswer: "Pelaku (Fa'il)",
        explanation: "At-Thiflu (anak kecil) adalah yang melakukan aksi makan, berharakat dhammah."
      },
      {
        id: "q13",
        type: "multiple-choice",
        question: "Lengkapi dialog: 'أَيْنَ خَالِدٌ؟ - هُوَ ____ فِي الْفَصْلِ'",
        options: ["يَجْلِسُ", "تَجْلِسُ", "جَلَسَتْ", "أَجْلِسُ"],
        correctAnswer: "يَجْلِسُ",
        explanation: "Subjek 'Huwa' (Khalid) menggunakan mudhari awalan Ya."
      },
      {
        id: "q14",
        type: "multiple-choice",
        question: "Apa arti dari 'شَكَرْتُ اللَّهَ'?",
        options: ["Saya menyembah Allah", "Saya bersyukur kepada Allah", "Allah menolongku", "Bantulah Allah"],
        correctAnswer: "Saya bersyukur kepada Allah",
        explanation: "Shakartu (Saya bersyukur) dari akar kata syakara."
      },
      {
        id: "q15",
        type: "multiple-choice",
        question: "Bentuk Mudhari dari 'ذَهَبَ' untuk subjek 'Saya' adalah...",
        options: ["يَذْهَبُ", "تَذْهَبُ", "أَذْهَبُ", "نَذْهَبُ"],
        correctAnswer: "أَذْهَبُ",
        explanation: "Ana (Saya) -> Alif (أ). Jadi: Adzhabu."
      },
      {
        id: "q16",
        type: "multiple-choice",
        question: "Manakah yang merupakan kalimat perintah?",
        options: ["يَقْرَأُ الْكِتَابَ", "قَرَأَ الْكِتَابَ", "اِقْرَأِ الْكِتَابَ", "لَا يَقْرَأُ"],
        correctAnswer: "اِقْرَأِ الْكِتَابَ",
        explanation: "Iqra' adalah bentuk Amar (Bacalah!)."
      },
      {
        id: "q17",
        type: "multiple-choice",
        question: "Lengkapi: 'Kamu (P) sedang menulis'.",
        questionAr: "أَنْتِ ____",
        options: ["تَكْتُبُ", "تَكْتُبِينَ", "يَكْتُبُ", "كَتَبْتِ"],
        correctAnswer: "تَكْتُبِينَ",
        explanation: "Mudhari untuk 'Anti' (Kamu P) menggunakan awalan Ta dan akhiran -ina."
      },
      {
        id: "q18",
        type: "multiple-choice",
        question: "Apa lawan kata dari 'دَخَلَ' (Masuk)?",
        options: ["خَرَجَ", "قَامَ", "جَلَسَ", "نَامَ"],
        correctAnswer: "خَرَجَ",
        explanation: "Khara-ja berarti keluar."
      },
      {
        id: "q19",
        type: "multiple-choice",
        question: "Terjemahkan: 'Tulislah di papan tulis!' (L)",
        options: ["اُكْتُبِي عَلَى السَّبُّورَةِ", "يَكْتُبُ عَلَى السَّبُّورَةِ", "اُكْتُبْ عَلَى السَّبُّورَةِ", "كَتَبَ عَلَى السَّبُّورَةِ"],
        correctAnswer: "اُكْتُبْ عَلَى السَّبُّورَةِ",
        explanation: "Uktub (Amar L) + 'ala (di atas/pada) + Sabbuurah (papan tulis)."
      },
      {
        id: "q20",
        type: "multiple-choice",
        question: "Manakah bentuk Madhi untuk subjek 'Mereka Perempuan' (Hunna)?",
        options: ["كَتَبُوا", "كَتَبْنَ", "كَتَبَتْ", "كَتَبْتُنَّ"],
        correctAnswer: "كَتَبْنَ",
        explanation: "Hunna (Mereka P) dalam bentuk lampau diakhiri dengan Nun Niswah (na)."
      },
      {
        id: "q21",
        type: "multiple-choice",
        question: "Apa arti dari 'نَحْنُ نَدْعُو اللَّهَ'?",
        options: ["Allah mendoakan kami", "Kami telah berdoa", "Kami sedang berdoa kepada Allah", "Jangan berdoa"],
        correctAnswer: "Kami sedang berdoa kepada Allah",
        explanation: "Nahnu (Kami) + Nad'uu (sedang berdoa)."
      },
      {
        id: "q22",
        type: "multiple-choice",
        question: "Lengkapi: 'Ali dan Ahmad (berdua) sedang pergi'.",
        questionAr: "عَلِيٌّ وَأَحْمَدُ ____",
        options: ["يَذْهَبُ", "يَذْهَبَانِ", "تَذْهَبَانِ", "يَذْهَبُونَ"],
        correctAnswer: "يَذْهَبَانِ",
        explanation: "Subjek dual laki-laki (Humaa) menggunakan awalan Ya dan akhiran -aani."
      },
      {
        id: "q23",
        type: "multiple-choice",
        question: "Apa bahasa Arab dari 'Saya telah makan'?",
        options: ["أَكَلْتُ", "يَأْكُلُ", "آكُلُ", "كُلْ"],
        correctAnswer: "أَكَلْتُ",
        explanation: "Madhi + Ana = Akaltu."
      },
      {
        id: "q24",
        type: "multiple-choice",
        question: "Manakah yang menunjukkan waktu masa depan?",
        options: ["مَا كَتَبَ", "لَا يَكْتُبُ", "سَوْفَ يَكْتُبُ", "لَمْ يَكْتُبْ"],
        correctAnswer: "سَوْفَ يَكْتُبُ",
        explanation: "Sawfa menunjukkan masa depan yang agak jauh."
      },
      {
        id: "q25",
        type: "multiple-choice",
        question: "Ubah Fi'il Mudhari 'يَشْرَبُ' menjadi bentuk 'Kalian Laki-laki' (Antum).",
        options: ["تَشْرَبُونَ", "يَشْرَبُونَ", "تَشْرَبِينَ", "نَشْرَبُ"],
        correctAnswer: "تَشْرَبُونَ",
        explanation: "Antum (Kalian L) -> awalan Ta dan akhiran -uuna."
      },
      {
        id: "q26",
        type: "multiple-choice",
        question: "Analisis I'rab: Dalam 'ذَهَبْتُ إِلَى الْمَسْجِدِ', harakat الْمَسْجِدِ adalah kasrah karena...",
        options: ["Sebagai pelaku", "Setelah preposisi (ila)", "Sebagai objek", "Kata ganti"],
        correctAnswer: "Setelah preposisi (ila)",
        explanation: "Ila adalah harf jar yang menjadikannya majrur (kasrah)."
      },
      {
        id: "q27",
        type: "multiple-choice",
        question: "Apa arti 'تُبْتُ إِلَى اللَّهِ'?",
        options: ["Saya shalat kepada Allah", "Saya bertaubat kepada Allah", "Saya kembali kepada Allah", "Pilihan B dan C benar"],
        correctAnswer: "Pilihan B dan C benar",
        explanation: "Tauba (Taubat) berarti kembali kepada Allah dari dosa."
      },
      {
        id: "q28",
        type: "multiple-choice",
        question: "Bagaimana cara menyuruh teman perempuan duduk?",
        options: ["اِجْلِسْ", "اِجْلِسِي", "يَجْلِسُ", "جَلَسَتْ"],
        correctAnswer: "اِجْلِسِي",
        explanation: "Amar muannats tunggal (Ijlisii)."
      },
      {
        id: "q29",
        type: "multiple-choice",
        question: "Lengkapi: 'Matahari telah terbit (keluar)'. (Matahari/Syamsun itu muannats)",
        questionAr: "____ الشَّمْسُ",
        options: ["خَرَجَ", "خَرَجَتْ", "خَرَجُوا", "تَخْرُجُ"],
        correctAnswer: "خَرَجَتْ",
        explanation: "Syamsun dikategorikan muannats dalam bahasa Arab, maka fi'ilnya pakai ta taknis."
      },
      {
        id: "q30",
        type: "multiple-choice",
        question: "Apa makna dhomir 'نَحْنُ'?",
        options: ["Saya", "Kamu", "Mereka", "Kami/Kita"],
        correctAnswer: "Kami/Kita",
        explanation: "Nahnu berarti Kami atau Kita."
      }
    ]
  }
};
