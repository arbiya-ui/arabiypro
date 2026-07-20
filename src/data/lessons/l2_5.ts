import { Lesson } from '../../types';

export const l2_5: Lesson = {
  id: "l2_5",
  title: "Al-Mihnah (Pekerjaan & Karir)",
  titleAr: "الْمِهْنَةُ",
  description: "Pelajari bahasa perkantoran dan lamaran kerja, beserta penggunaan Masdar.",
  xpReward: 40,
  isCompleted: false,
  isLocked: false,
  type: "conversation",
  content: {
    introduction: "Selamat! Anda telah melewati hampir setengah perjalanan di Level 2. Ingatlah cita-cita Anda saat mulai belajar di Level 1; kini cita-cita itu terasa semakin dekat di Bab 5: Al-Mihnah (Pekerjaan & Karir). Bahasa Arab adalah bahasa profesional yang akan membuka peluang karir Anda secara global. Jangan pernah merasa sulit, karena setiap pola yang Anda pelajari adalah tangga menuju kesuksesan yang lebih besar.\n\nDi bab ini, kita akan mengenal berbagai profesi dan dunia kerja secara mendalam. Anda akan belajar cara menceritakan 'apa yang Anda kerjakan' dan 'apa profesi impian Anda'. Semangat membara Anda hari ini adalah cerminan dari kesuksesan Anda di masa depan. Setelah menguasai dunia profesi, kita akan belajar bagaimana memahami informasi dari seluruh penjuru dunia di bab selanjutnya!",
    introTitle: "Membangun Masa Depan: Bahasa Arab di Dunia Kerja",
    introVerse: {
      ar: "وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ",
      translation: "Dan Katakanlah: 'Bekerjalah kamu, maka Allah dan Rasul-Nya serta orang-orang mukmin akan melihat pekerjaanmu itu'. (QS. At-Taubah: 105)"
    },
    introBadges: [
      { icon: "💼", text: "PROFESIONAL MUDA (Mahir berkomunikasi di lingkungan kantor)" },
      { icon: "📜", text: "MASTER MASDAR (Kuasai akar kata benda untuk bahasa formal)" }
    ],

    grammar: {
    "title": "Masdar (Kata Benda Abstrak)",
    "logicExplanation": "Masdar adalah kata benda (isim) yang menunjukkan suatu perbuatan atau kejadian tanpa terikat dengan waktu (lampau, sekarang, atau masa depan). Ibaratnya, ini adalah 'nama' dari sebuah aktivitas. Misalnya, dari kata kerja كَتَبَ (dia telah menulis), masdarnya adalah كِتَابَة (kegiatan menulis / tulisan).\n\nLogika Pembentukan:\n1. **Fi'il Tsulasi (Tiga Huruf)**: Pembentukan masdar dari kata kerja tiga huruf bersifat *Sama'i* (berdasarkan pendengaran/hapalan dari kamus). Tidak ada satu pola baku. Contoh: قَرَأَ (membaca) -> قِرَاءَة (bacaan), عَمِلَ (bekerja) -> عَمَل (pekerjaan).\n2. **Fi'il Lebih dari Tiga Huruf (Ruba'i, Khumasi, Sudasi)**: Pembentukannya bersifat *Qiyasi* (beraturan dengan pola yang pasti).\n   - Pola فَعَّلَ -> تَفْعِيل (contoh: رَتَّبَ -> تَرْتِيب / menyusun).\n   - Pola فَاعَلَ -> مُفَاعَلَة / فِعَال (contoh: قَابَلَ -> مُقَابَلَة / wawancara).\n   - Pola أَفْعَلَ -> إِفْعَال (contoh: أَرْسَلَ -> إِرْسَال / pengiriman).\n   - Pola اسْتَفْعَلَ -> اسْتِفْعَال (contoh: اسْتَقْبَلَ -> اسْتِقْبَال / penerimaan).\n\nDalam kalimat, Masdar sering digunakan sebagai Subjek (Mubtada), Objek (Maf'ul bih), atau setelah huruf Jar.",
    "examples": [
        {
            "ar": "الْعَمَلُ عِبَادَةٌ",
            "translation": "Bekerja itu ibadah.",
            "grammarNote": "Logika: Masdar 'Amal' sebagai subjek (Mubtada) di awal kalimat."
        },
        {
            "ar": "أُحِبُّ الْقِرَاءَةَ",
            "translation": "Saya suka membaca.",
            "grammarNote": "Logika: Masdar 'Qiraa'ah' sebagai objek (Maf'ul bih) berharakat fathah."
        },
        {
            "ar": "لَدَيَّ مُقَابَلَةُ عَمَلٍ",
            "translation": "Saya punya wawancara kerja.",
            "grammarNote": "Logika: 'Muqaabalah' adalah masdar dari wazan 'Faa'ala' (berinteraksi)."
        },
        {
            "ar": "إِرْسَالُ الرِّسَالَةِ",
            "translation": "Pengiriman surat.",
            "grammarNote": "Logika: 'Irsaal' adalah masdar dari wazan 'Af'ala'."
        },
        {
            "ar": "بَعْدَ التَّخَرُّجِ أَبْحَثُ عَنْ عَمَلٍ",
            "translation": "Setelah kelulusan, saya mencari pekerjaan.",
            "grammarNote": "Logika: 'Takharruj' adalah masdar wazan 'Tafa'ula' (lulus)."
        },
        {
            "ar": "اسْتِقْبَالُ الضُّيُوفِ مُهِمٌّ",
            "translation": "Menyambut tamu itu penting.",
            "grammarNote": "Logika: 'Istiqbaal' dari wazan 'Istaf'ala' (menerima/menyambut)."
        }
    ],
    "commonMistakes": [
        {
            "wrong": "أُحِبُّ أَقْرَأَ",
            "correct": "أُحِبُّ الْقِرَاءَةَ (atau أَنْ أَقْرَأَ)",
            "explanation": "Kesalahan: Menggabungkan dua kata kerja tanpa partikel 'An'. Lebih baik gunakan Masdar (Al-Qiraa'ah) sebagai objek."
        },
        {
            "wrong": "مُقَابِلٌ",
            "correct": "مُقَابَلَةٌ",
            "explanation": "Tertukar antara Isim Fa'il (Muqaabil = pewawancara) dan Masdar (Muqaabalah = wawancara)."
        },
        {
            "wrong": "تَعْلَمٌ",
            "correct": "تَعْلِيمٌ",
            "explanation": "Salah pola: Akar kata 'Allama' (mengajar) masdarnya Ta'liim (pola Taf'iil), bukan Ta'lam."
        },
        {
            "wrong": "نَجَاحٌ لَهُ",
            "correct": "النَّجَاحُ لَهُ",
            "explanation": "Menggunakan masdar tanpa Alif-Lam atau Idhafah di awal kalimat biasanya kurang tepat untuk makrifah."
        }
    ],
    "tashrif": {
        "title": "Tabel Pola Masdar (Pekerjaan)",
        "rows": [
            {
                "dhamir": "عَمِلَ",
                "dhaminMeaning": "Bekerja",
                "fiil": "فَعَل (Tsulasi)",
                "akhiran": "عَمَلٌ",
                "contoh": "الْعَمَلُ جَادٌّ (Pekerjaan serius)"
            },
            {
                "dhamir": "دَرَّسَ",
                "dhaminMeaning": "Mengajar",
                "fiil": "تَفْعِيل (Ruba'i)",
                "akhiran": "تَدْرِيسٌ",
                "contoh": "أُحِبُّ التَّدْرِيسَ (Saya suka mengajar)"
            },
            {
                "dhamir": "قَابَلَ",
                "dhaminMeaning": "Mewawancarai",
                "fiil": "مُفَاعَلَة (Ruba'i)",
                "akhiran": "مُقَابَلَةٌ",
                "contoh": "مُقَابَلَةُ الْعَمَلِ (Wawancara kerja)"
            },
            {
                "dhamir": "أَرْسَلَ",
                "dhaminMeaning": "Mengirim",
                "fiil": "إِفْعَال (Ruba'i)",
                "akhiran": "إِرْسَالٌ",
                "contoh": "إِرْسَالُ السِّيرَةِ (Pengiriman CV)"
            },
            {
                "dhamir": "اسْتَقَال",
                "dhaminMeaning": "Resign",
                "fiil": "اسْتِفْعَال (Sudasi)",
                "akhiran": "اسْتِقَالَةٌ",
                "contoh": "قَدَّمَ اسْتِقَالَتَهُ (Dia mengajukan resign)"
            }
        ]
    }
},
    cards: [
    {
        "id": "l2_5_c1",
        "wordAr": "عَمَلٌ",
        "translation": "Pekerjaan",
        "description": "Aktivitas fisik atau mental untuk mendapatkan hasil (Masdar dari 'Amila).",
        "category": "Dasar",
        "examples": [
            {
                "ar": "أَيْنَ تَعْمَلُ؟",
                "translation": "Di mana kamu bekerja?",
                "grammarNote": "Logika: Fi'il mudhari dari akar yang sama."
            },
            {
                "ar": "هَذَا عَمَلٌ شَاقٌّ",
                "translation": "Ini pekerjaan yang berat.",
                "grammarNote": "Logika: Masdar sebagai benda, diikuti kata sifat (na'at)."
            },
            {
                "ar": "الْعَمَلُ مُهِمٌّ لِلْحَيَاةِ",
                "translation": "Pekerjaan itu penting untuk kehidupan.",
                "grammarNote": "Logika: Masdar makrifah sebagai mubtada."
            },
            {
                "ar": "أَبْحَثُ عَنْ عَمَلٍ",
                "translation": "Saya mencari pekerjaan.",
                "grammarNote": "Logika: Masdar majrur setelah preposisi 'An'."
            },
            {
                "ar": "عَمَلُهُ مُمْتَازٌ",
                "translation": "Pekerjaannya luar biasa.",
                "grammarNote": "Logika: Masdar disandarkan pada dhamir (Idhafah)."
            },
            {
                "ar": "وَقْتُ الْعَمَلِ",
                "translation": "Waktu kerja.",
                "grammarNote": "Logika: Mudhaf ilaihi."
            },
            {
                "ar": "بَدَأَ الْعَمَلَ مُبَكِّرًا",
                "translation": "Dia memulai pekerjaan lebih awal.",
                "grammarNote": "Logika: Masdar sebagai objek (Maf'ul bih)."
            },
            {
                "ar": "كَيْفَ الْعَمَلُ؟",
                "translation": "Bagaimana pekerjaannya?",
                "grammarNote": "Logika: Kalimat tanya menanyakan kondisi masdar."
            },
            {
                "ar": "عَمَلٌ يَدَوِيٌّ",
                "translation": "Pekerjaan kasar/tangan.",
                "grammarNote": "Logika: Na'at (sifat benda)."
            },
            {
                "ar": "أُنْجِزُ الْعَمَلَ",
                "translation": "Saya menyelesaikan pekerjaan.",
                "grammarNote": "Logika: Objek dari kata kerja."
            }
        ]
    },
    {
        "id": "l2_5_c2",
        "wordAr": "مُقَابَلَةٌ",
        "translation": "Wawancara / Interview",
        "description": "Pertemuan tanya jawab untuk evaluasi (Masdar dari Qaabala).",
        "category": "Lamaran",
        "examples": [
            {
                "ar": "لَدَيَّ مُقَابَلَةُ عَمَلٍ",
                "translation": "Saya punya wawancara kerja.",
                "grammarNote": "Logika: Idhafah (Wawancara kerja)."
            },
            {
                "ar": "نَجَحْتُ فِي الْمُقَابَلَةِ",
                "translation": "Saya lulus dalam wawancara.",
                "grammarNote": "Logika: Majrur setelah huruf 'Fi'."
            },
            {
                "ar": "مَتَى الْمُقَابَلَةُ؟",
                "translation": "Kapan wawancaranya?",
                "grammarNote": "Logika: Menanyakan waktu kegiatan (masdar)."
            },
            {
                "ar": "الْمُقَابَلَةُ صَعْبَةٌ",
                "translation": "Wawancaranya sulit.",
                "grammarNote": "Logika: Masdar muannats (karena ta marbuthah) + sifat muannats."
            },
            {
                "ar": "أَسْتَعِدُّ لِلْمُقَابَلَةِ",
                "translation": "Saya bersiap untuk wawancara.",
                "grammarNote": "Logika: Majrur dengan huruf 'Li'."
            },
            {
                "ar": "مُقَابَلَةٌ شَخْصِيَّةٌ",
                "translation": "Wawancara pribadi.",
                "grammarNote": "Logika: Sifat muannats."
            },
            {
                "ar": "أَجْرَى الْمُدِيرُ مُقَابَلَةً",
                "translation": "Direktur mengadakan wawancara.",
                "grammarNote": "Logika: Masdar sebagai objek tak tentu (fathatain)."
            },
            {
                "ar": "نَتِيجَةُ الْمُقَابَلَةِ",
                "translation": "Hasil wawancara.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "مُقَابَلَةٌ عَبْرَ الْإِنْتَرْنِت",
                "translation": "Wawancara online.",
                "grammarNote": "Logika: Keterangan cara."
            },
            {
                "ar": "تَأَجَّلَتِ الْمُقَابَلَةُ",
                "translation": "Wawancaranya ditunda.",
                "grammarNote": "Logika: Masdar sebagai subjek dari kata kerja pasif/intransitif."
            }
        ]
    },
    {
        "id": "l2_5_c3",
        "wordAr": "سِيرَةٌ ذَاتِيَّةٌ",
        "translation": "Riwayat Hidup (CV)",
        "description": "Dokumen perjalanan hidup dan karir seseorang.",
        "category": "Lamaran",
        "examples": [
            {
                "ar": "أَرْسَلْتُ السِّيرَةَ الذَّاتِيَّةَ",
                "translation": "Saya telah mengirimkan CV.",
                "grammarNote": "Logika: Objek (Maf'ul bih) + Na'at, keduanya berharakat fathah."
            },
            {
                "ar": "هَذِهِ سِيرَتِي الذَّاتِيَّةُ",
                "translation": "Ini CV saya.",
                "grammarNote": "Logika: Disandarkan pada Ya Mutakallim."
            },
            {
                "ar": "اُكْتُبْ سِيرَةً ذَاتِيَّةً",
                "translation": "Tulislah CV.",
                "grammarNote": "Logika: Perintah."
            },
            {
                "ar": "السِّيرَةُ الذَّاتِيَّةُ طَوِيلَةٌ",
                "translation": "CV-nya panjang.",
                "grammarNote": "Logika: Mubtada + Khabar muannats."
            },
            {
                "ar": "تَحْدِيثُ السِّيرَةِ الذَّاتِيَّةِ",
                "translation": "Pembaruan CV.",
                "grammarNote": "Logika: Idhafah masdar ke masdar."
            },
            {
                "ar": "قَرَأَ الْمُدِيرُ السِّيرَةَ الذَّاتِيَّةَ",
                "translation": "Direktur membaca CV.",
                "grammarNote": "Logika: Objek dari Fi'il madi."
            },
            {
                "ar": "سِيرَةٌ ذَاتِيَّةٌ مُمْتَازَةٌ",
                "translation": "CV yang sangat baik.",
                "grammarNote": "Logika: Sifat berantai."
            },
            {
                "ar": "كَيْفَ أُصَمِّمُ سِيرَةً ذَاتِيَّةً؟",
                "translation": "Bagaimana saya mendesain CV?",
                "grammarNote": "Logika: Kata tanya + kata kerja."
            },
            {
                "ar": "مُرْفَقٌ: السِّيرَةُ الذَّاتِيَّةُ",
                "translation": "Terlampir: CV.",
                "grammarNote": "Logika: Format formal."
            },
            {
                "ar": "طَبَعْتُ السِّيرَةَ الذَّاتِيَّةَ",
                "translation": "Saya mencetak CV.",
                "grammarNote": "Logika: Aksi fisik."
            }
        ]
    },
    {
        "id": "l2_5_c4",
        "wordAr": "رَاتِبٌ",
        "translation": "Gaji / Upah bulanan",
        "description": "Imbalan uang bulanan untuk karyawan.",
        "category": "Keuangan",
        "examples": [
            {
                "ar": "الرَّاتِبُ جَيِّدٌ",
                "translation": "Gajinya bagus.",
                "grammarNote": "Logika: Mubtada mudzakkar."
            },
            {
                "ar": "مَتَى يَنْزِلُ الرَّاتِبُ؟",
                "translation": "Kapan gajinya turun?",
                "grammarNote": "Logika: Subjek dari kata kerja 'Yanzilu'."
            },
            {
                "ar": "أُرِيدُ زِيَادَةً فِي الرَّاتِبِ",
                "translation": "Saya ingin kenaikan gaji.",
                "grammarNote": "Logika: Majrur."
            },
            {
                "ar": "هَذَا رَاتِبِي",
                "translation": "Ini gaji saya.",
                "grammarNote": "Logika: Kepemilikan."
            },
            {
                "ar": "رَاتِبٌ شَهْرِيٌّ",
                "translation": "Gaji bulanan.",
                "grammarNote": "Logika: Sifat/Nisbah."
            },
            {
                "ar": "اسْتَلَمْتُ الرَّاتِبَ",
                "translation": "Saya telah menerima gaji.",
                "grammarNote": "Logika: Objek (nashab)."
            },
            {
                "ar": "رَاتِبٌ مُرْتَفِعٌ",
                "translation": "Gaji yang tinggi.",
                "grammarNote": "Logika: Sifat mudzakkar."
            },
            {
                "ar": "خَصْمٌ مِنَ الرَّاتِبِ",
                "translation": "Pemotongan dari gaji.",
                "grammarNote": "Logika: Istilah keuangan."
            },
            {
                "ar": "مُفَاوَضَةُ الرَّاتِبِ",
                "translation": "Negosiasi gaji.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "الرَّاتِبُ الْأَسَاسِيُّ",
                "translation": "Gaji pokok.",
                "grammarNote": "Logika: Na'at."
            }
        ]
    },
    {
        "id": "l2_5_c5",
        "wordAr": "شَرِكَةٌ",
        "translation": "Perusahaan",
        "description": "Badan usaha komersial.",
        "category": "Instansi",
        "examples": [
            {
                "ar": "أَعْمَلُ فِي شَرِكَةٍ كَبِيرَةٍ",
                "translation": "Saya bekerja di perusahaan besar.",
                "grammarNote": "Logika: Majrur + Sifat muannats."
            },
            {
                "ar": "الشَّرِكَةُ مَشْهُورَةٌ",
                "translation": "Perusahaannya terkenal.",
                "grammarNote": "Logika: Mubtada + Khabar muannats."
            },
            {
                "ar": "شَرِكَةٌ دَوْلِيَّةٌ",
                "translation": "Perusahaan internasional.",
                "grammarNote": "Logika: Nisbah muannats."
            },
            {
                "ar": "مُدِيرُ الشَّرِكَةِ",
                "translation": "Direktur perusahaan.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "تَأْسِيسُ شَرِكَةٍ",
                "translation": "Pendirian perusahaan.",
                "grammarNote": "Logika: Masdar + Benda."
            },
            {
                "ar": "مَقَرُّ الشَّرِكَةِ",
                "translation": "Kantor pusat perusahaan.",
                "grammarNote": "Logika: Struktur tempat."
            },
            {
                "ar": "هَذِهِ شَرِكَةٌ تِجَارِيَّةٌ",
                "translation": "Ini perusahaan komersial.",
                "grammarNote": "Logika: Isim isyarah muannats."
            },
            {
                "ar": "فُرُوعُ الشَّرِكَةِ",
                "translation": "Cabang-cabang perusahaan.",
                "grammarNote": "Logika: Jamak taksir."
            },
            {
                "ar": "انْتَقَلْتُ إِلَى شَرِكَةٍ أُخْرَى",
                "translation": "Saya pindah ke perusahaan lain.",
                "grammarNote": "Logika: Kata sifat 'Ukhra' (lain)."
            },
            {
                "ar": "شَرِكَةُ اتِّصَالَاتٍ",
                "translation": "Perusahaan telekomunikasi.",
                "grammarNote": "Logika: Idhafah jamak."
            }
        ]
    },
    {
        "id": "l2_5_c6",
        "wordAr": "وَظِيفَةٌ",
        "translation": "Pekerjaan / Jabatan (Position)",
        "description": "Posisi atau peran spesifik di sebuah perusahaan.",
        "category": "Dasar",
        "examples": [
            {
                "ar": "وَظِيفَةٌ شَاغِرَةٌ",
                "translation": "Lowongan pekerjaan (jabatan kosong).",
                "grammarNote": "Logika: Sifat muannats."
            },
            {
                "ar": "مَا هِيَ وَظِيفَتُكَ؟",
                "translation": "Apa jabatan/pekerjaanmu?",
                "grammarNote": "Logika: Tanya identitas."
            },
            {
                "ar": "قَبِلْتُ الْوَظِيفَةَ",
                "translation": "Saya menerima jabatan itu.",
                "grammarNote": "Logika: Objek (nashab)."
            },
            {
                "ar": "وَظِيفَةٌ حُكُومِيَّةٌ",
                "translation": "Pekerjaan pemerintah (PNS).",
                "grammarNote": "Logika: Nisbah institusi."
            },
            {
                "ar": "أَبْحَثُ عَنْ وَظِيفَةٍ جَدِيدَةٍ",
                "translation": "Saya mencari jabatan baru.",
                "grammarNote": "Logika: Majrur + Na'at."
            },
            {
                "ar": "تَقَدَّمْتُ لِلْوَظِيفَةِ",
                "translation": "Saya melamar untuk jabatan itu.",
                "grammarNote": "Logika: Preposisi 'Li'."
            },
            {
                "ar": "الْوَظِيفَةُ مُتْعِبَةٌ",
                "translation": "Pekerjaan/jabatan itu melelahkan.",
                "grammarNote": "Logika: Khabar isim fa'il."
            },
            {
                "ar": "طَلَبُ وَظِيفَةٍ",
                "translation": "Surat lamaran kerja.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "فَقَدَ وَظِيفَتَهُ",
                "translation": "Dia kehilangan jabatannya.",
                "grammarNote": "Logika: Idhafah kepemilikan orang ke-3."
            },
            {
                "ar": "وَظِيفَةُ الْمُدِيرِ",
                "translation": "Jabatan direktur.",
                "grammarNote": "Logika: Hubungan posisi."
            }
        ]
    },
    {
        "id": "l2_5_c7",
        "wordAr": "مُدِيرٌ",
        "translation": "Manajer / Direktur",
        "description": "Orang yang memimpin atau mengelola.",
        "category": "Profesi",
        "examples": [
            {
                "ar": "الْمُدِيرُ فِي الْمَكْتَبِ",
                "translation": "Manajer ada di kantor.",
                "grammarNote": "Logika: Mubtada."
            },
            {
                "ar": "تَحَدَّثْتُ مَعَ الْمُدِيرِ",
                "translation": "Saya berbicara dengan manajer.",
                "grammarNote": "Logika: Preposisi 'Ma'a'."
            },
            {
                "ar": "مُدِيرُ الشَّرِكَةِ",
                "translation": "Direktur perusahaan.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "هَذَا مُدِيرٌ نَاجِحٌ",
                "translation": "Ini manajer yang sukses.",
                "grammarNote": "Logika: Na'at mudzakkar."
            },
            {
                "ar": "أَصْبَحْتُ مُدِيرًا",
                "translation": "Saya telah menjadi manajer.",
                "grammarNote": "Logika: Khabar 'Asbaha' (nashab)."
            },
            {
                "ar": "الْمُدِيرَةُ مُجْتَهِدَةٌ",
                "translation": "Manajer (perempuan) itu rajin.",
                "grammarNote": "Logika: Bentuk muannats (Ta marbuthah)."
            },
            {
                "ar": "قَرَارُ الْمُدِيرِ",
                "translation": "Keputusan manajer.",
                "grammarNote": "Logika: Kepemilikan otoritas."
            },
            {
                "ar": "اجْتِمَاعٌ مَعَ الْمُدِيرِ",
                "translation": "Rapat bersama manajer.",
                "grammarNote": "Logika: Konteks aktivitas."
            },
            {
                "ar": "مُدِيرُ التَّسْوِيقِ",
                "translation": "Manajer pemasaran.",
                "grammarNote": "Logika: Idhafah ke bidang."
            },
            {
                "ar": "شَكَرَ الْمُدِيرُ الْمُوَظَّفِينَ",
                "translation": "Manajer berterima kasih kepada para pegawai.",
                "grammarNote": "Logika: Subjek kalimat verbal."
            }
        ]
    },
    {
        "id": "l2_5_c8",
        "wordAr": "مُوَظَّفٌ",
        "translation": "Pegawai / Karyawan",
        "description": "Orang yang dipekerjakan dalam suatu instansi.",
        "category": "Profesi",
        "examples": [
            {
                "ar": "أَنَا مُوَظَّفٌ حُكُومِيٌّ",
                "translation": "Saya pegawai negeri.",
                "grammarNote": "Logika: Identitas diri."
            },
            {
                "ar": "الْمُوَظَّفُ مَشْغُولٌ",
                "translation": "Pegawai itu sibuk.",
                "grammarNote": "Logika: Mubtada + Khabar."
            },
            {
                "ar": "الْمُوَظَّفُونَ فِي الِاجْتِمَاعِ",
                "translation": "Para pegawai (Jamak Mudzakkar Salim) sedang rapat.",
                "grammarNote": "Logika: Jamak berakhiran Wawu-Nun."
            },
            {
                "ar": "مُوَظَّفَةُ الِاسْتِقْبَالِ",
                "translation": "Resepsionis (pegawai penerima tamu).",
                "grammarNote": "Logika: Idhafah muannats."
            },
            {
                "ar": "رَاتِبُ الْمُوَظَّفِ",
                "translation": "Gaji pegawai.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "مُوَظَّفٌ جَدِيدٌ",
                "translation": "Pegawai baru.",
                "grammarNote": "Logika: Na'at mudzakkar."
            },
            {
                "ar": "كَافَأَ الْمُدِيرُ الْمُوَظَّفَ",
                "translation": "Manajer memberi penghargaan kepada pegawai itu.",
                "grammarNote": "Logika: Objek (nashab)."
            },
            {
                "ar": "تَدْرِيبُ الْمُوَظَّفِينَ",
                "translation": "Pelatihan para pegawai.",
                "grammarNote": "Logika: Idhafah jamak majrur (Ya-Nun)."
            },
            {
                "ar": "مُوَظَّفٌ نَشِيطٌ",
                "translation": "Karyawan yang aktif/giat.",
                "grammarNote": "Logika: Sifat karakter."
            },
            {
                "ar": "شُؤُونُ الْمُوَظَّفِينَ",
                "translation": "Urusan kepegawaian (HRD).",
                "grammarNote": "Logika: Istilah departemen."
            }
        ]
    },
    {
        "id": "l2_5_c9",
        "wordAr": "خِبْرَةٌ",
        "translation": "Pengalaman (Kerja)",
        "description": "Pengetahuan atau keterampilan yang didapat dari praktik (Masdar/Isim).",
        "category": "Kualifikasi",
        "examples": [
            {
                "ar": "لَدَيَّ خِبْرَةٌ جَيِّدَةٌ",
                "translation": "Saya punya pengalaman yang bagus.",
                "grammarNote": "Logika: Mubtada muakhkhar (di akhir)."
            },
            {
                "ar": "خِبْرَةُ عَمَلٍ",
                "translation": "Pengalaman kerja.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "كَمْ سَنَةً خِبْرَتُكَ؟",
                "translation": "Berapa tahun pengalamanmu?",
                "grammarNote": "Logika: Kata tanya jumlah."
            },
            {
                "ar": "أَحْتَاجُ إِلَى خِبْرَةٍ",
                "translation": "Saya butuh pengalaman.",
                "grammarNote": "Logika: Majrur."
            },
            {
                "ar": "بِدُونِ خِبْرَةٍ سَابِقَةٍ",
                "translation": "Tanpa pengalaman sebelumnya.",
                "grammarNote": "Logika: Syarat melamar."
            },
            {
                "ar": "شَهَادَةُ الْخِبْرَةِ",
                "translation": "Sertifikat pengalaman (Paklaring).",
                "grammarNote": "Logika: Dokumen kerja."
            },
            {
                "ar": "مَطْلُوبٌ خِبْرَةٌ مِهْنِيَّةٌ",
                "translation": "Dibutuhkan pengalaman profesional.",
                "grammarNote": "Logika: Isim Maf'ul (Mathluub) + Naibul Fa'il."
            },
            {
                "ar": "خِبْرَةٌ فِي الْحَاسُوبِ",
                "translation": "Pengalaman di bidang komputer.",
                "grammarNote": "Logika: Keterangan bidang."
            },
            {
                "ar": "لَيْسَ لَدَيْهِ خِبْرَةٌ",
                "translation": "Dia tidak punya pengalaman.",
                "grammarNote": "Logika: Negasi 'Laysa'."
            },
            {
                "ar": "تَبَادُلُ الْخِبْرَاتِ",
                "translation": "Pertukaran pengalaman (jamak).",
                "grammarNote": "Logika: Jamak muannats salim."
            }
        ]
    },
    {
        "id": "l2_5_c10",
        "wordAr": "شَهَادَةٌ",
        "translation": "Ijazah / Sertifikat",
        "description": "Dokumen bukti pendidikan atau kelulusan.",
        "category": "Kualifikasi",
        "examples": [
            {
                "ar": "شَهَادَةٌ جَامِعِيَّةٌ",
                "translation": "Ijazah universitas.",
                "grammarNote": "Logika: Nisbah (kata sifat institusi)."
            },
            {
                "ar": "أَيْنَ شَهَادَتُكَ؟",
                "translation": "Di mana ijazahmu?",
                "grammarNote": "Logika: Pertanyaan dokumen."
            },
            {
                "ar": "حَصَلْتُ عَلَى الشَّهَادَةِ",
                "translation": "Saya mendapatkan ijazah/sertifikat.",
                "grammarNote": "Logika: Majrur setelah 'Ala'."
            },
            {
                "ar": "شَهَادَةُ الْبَكَالُورِيُوس",
                "translation": "Ijazah sarjana (S1).",
                "grammarNote": "Logika: Istilah serapan."
            },
            {
                "ar": "نُسْخَةٌ مِنَ الشَّهَادَةِ",
                "translation": "Salinan dari ijazah (fotokopi).",
                "grammarNote": "Logika: Kebutuhan dokumen."
            },
            {
                "ar": "شَهَادَةُ التَّخَرُّجِ",
                "translation": "Sertifikat kelulusan.",
                "grammarNote": "Logika: Idhafah dengan masdar."
            },
            {
                "ar": "أَرْسَلْتُ صُورَةَ الشَّهَادَةِ",
                "translation": "Saya mengirimkan foto ijazah.",
                "grammarNote": "Logika: Objek ganda."
            },
            {
                "ar": "شَهَادَةٌ عُلْيَا",
                "translation": "Ijazah tinggi (Pascasarjana).",
                "grammarNote": "Logika: Sifat muannats (Ulyaa)."
            },
            {
                "ar": "تَصْدِيقُ الشَّهَادَةِ",
                "translation": "Legalisir ijazah.",
                "grammarNote": "Logika: Masdar wazan Taf'iil."
            },
            {
                "ar": "شَهَادَةٌ مُعْتَمَدَةٌ",
                "translation": "Sertifikat yang diakui/terakreditasi.",
                "grammarNote": "Logika: Sifat isim maf'ul."
            }
        ]
    },
    {
        "id": "l2_5_c11",
        "wordAr": "طَلَبٌ",
        "translation": "Lamaran / Permohonan",
        "description": "Masdar dari Thalaba (Meminta/Melamar).",
        "category": "Lamaran",
        "examples": [
            {
                "ar": "قَدَّمْتُ طَلَبَ عَمَلٍ",
                "translation": "Saya mengajukan surat lamaran kerja.",
                "grammarNote": "Logika: Masdar sebagai objek."
            },
            {
                "ar": "طَلَبٌ مَرْفُوضٌ",
                "translation": "Permohonan/lamaran yang ditolak.",
                "grammarNote": "Logika: Sifat isim maf'ul."
            },
            {
                "ar": "طَلَبٌ مَقْبُولٌ",
                "translation": "Permohonan/lamaran yang diterima.",
                "grammarNote": "Logika: Antonim 'Marfuudh'."
            },
            {
                "ar": "رَقْمُ الطَّلَبِ",
                "translation": "Nomor pendaftaran/lamaran.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "نَمُوذَجُ الطَّلَبِ",
                "translation": "Formulir lamaran.",
                "grammarNote": "Logika: Dokumen pendukung."
            },
            {
                "ar": "تَعْبِئَةُ الطَّلَبِ",
                "translation": "Pengisian permohonan.",
                "grammarNote": "Logika: Masdar wazan Taf'iilah."
            },
            {
                "ar": "نَدْرُسُ طَلَبَكَ",
                "translation": "Kami mempelajari lamaranmu.",
                "grammarNote": "Logika: Fi'il mudhari Nahnu."
            },
            {
                "ar": "إِلْغَاءُ الطَّلَبِ",
                "translation": "Pembatalan lamaran.",
                "grammarNote": "Logika: Masdar wazan If'aal."
            },
            {
                "ar": "مَرْكَزُ تَلَقِّي الطَّلَبَاتِ",
                "translation": "Pusat penerimaan lamaran (jamak).",
                "grammarNote": "Logika: Jamak muannats salim."
            },
            {
                "ar": "حَالَةُ الطَّلَبِ: قَيْدَ الْمُرَاجَعَةِ",
                "translation": "Status lamaran: dalam tinjauan.",
                "grammarNote": "Logika: Istilah sistem."
            }
        ]
    },
    {
        "id": "l2_5_c12",
        "wordAr": "تَخَصُّصٌ",
        "translation": "Jurusan / Spesialisasi",
        "description": "Masdar dari Takhasshasa (Mengkhususkan diri). Bidang studi/kerja.",
        "category": "Kualifikasi",
        "examples": [
            {
                "ar": "مَا هُوَ تَخَصُّصُكَ؟",
                "translation": "Apa jurusan/bidangmu?",
                "grammarNote": "Logika: Pertanyaan identitas akademik."
            },
            {
                "ar": "تَخَصُّصِي هُوَ الْحَاسُوبُ",
                "translation": "Jurusan saya adalah komputer.",
                "grammarNote": "Logika: Jawaban mubtada-khabar."
            },
            {
                "ar": "وَظِيفَةٌ فِي نَفْسِ التَّخَصُّصِ",
                "translation": "Pekerjaan di bidang yang sama.",
                "grammarNote": "Logika: Preposisi + penegasan."
            },
            {
                "ar": "تَخَصُّصٌ مَطْلُوبٌ",
                "translation": "Jurusan yang dicari/dibutuhkan.",
                "grammarNote": "Logika: Na'at isim maf'ul."
            },
            {
                "ar": "شَهَادَةُ التَّخَصُّصِ",
                "translation": "Ijazah spesialisasi.",
                "grammarNote": "Logika: Idhafah akademik."
            },
            {
                "ar": "تَغْيِيرُ التَّخَصُّصِ",
                "translation": "Mengganti jurusan.",
                "grammarNote": "Logika: Masdar wazan Taf'iil."
            },
            {
                "ar": "تَخَصُّصٌ طِبِّيٌّ",
                "translation": "Spesialisasi medis.",
                "grammarNote": "Logika: Nisbah medis."
            },
            {
                "ar": "خِبْرَةٌ حَسَبَ التَّخَصُّصِ",
                "translation": "Pengalaman sesuai jurusan.",
                "grammarNote": "Logika: Keterangan kesesuaian."
            },
            {
                "ar": "تَخَصُّصَاتٌ مُتَعَدِّدَةٌ",
                "translation": "Berbagai macam disiplin ilmu (jamak).",
                "grammarNote": "Logika: Jamak + sifat muannats."
            },
            {
                "ar": "لَدَيْهِ تَخَصُّصَانِ",
                "translation": "Dia memiliki dua jurusan.",
                "grammarNote": "Logika: Mutsanna (dual) alif-nun."
            }
        ]
    },
    {
        "id": "l2_5_c13",
        "wordAr": "عَقْدٌ",
        "translation": "Kontrak (Kerja)",
        "description": "Perjanjian tertulis antara pekerja dan perusahaan (Masdar 'Aqada).",
        "category": "Keuangan",
        "examples": [
            {
                "ar": "تَوْقِيعُ الْعَقْدِ",
                "translation": "Penandatanganan kontrak.",
                "grammarNote": "Logika: Masdar wazan Taf'iil."
            },
            {
                "ar": "عَقْدُ عَمَلٍ",
                "translation": "Kontrak kerja.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "نِهَايَةُ الْعَقْدِ",
                "translation": "Akhir kontrak.",
                "grammarNote": "Logika: Batas waktu."
            },
            {
                "ar": "تَجْدِيدُ الْعَقْدِ",
                "translation": "Pembaruan kontrak.",
                "grammarNote": "Logika: Masdar wazan Taf'iil."
            },
            {
                "ar": "عَقْدٌ سَنَوِيٌّ",
                "translation": "Kontrak tahunan.",
                "grammarNote": "Logika: Nisbah waktu."
            },
            {
                "ar": "شُرُوطُ الْعَقْدِ",
                "translation": "Syarat-syarat kontrak.",
                "grammarNote": "Logika: Jamak taksir (Syuruuth)."
            },
            {
                "ar": "فَسْخُ الْعَقْدِ",
                "translation": "Pembatalan/Pemutusan kontrak.",
                "grammarNote": "Logika: Masdar hukum."
            },
            {
                "ar": "مُدَّةُ الْعَقْدِ",
                "translation": "Durasi kontrak.",
                "grammarNote": "Logika: Jangka waktu."
            },
            {
                "ar": "وَقَّعْتُ الْعَقْدَ",
                "translation": "Saya telah menandatangani kontrak.",
                "grammarNote": "Logika: Objek (nashab)."
            },
            {
                "ar": "عَقْدٌ دَائِمٌ",
                "translation": "Kontrak permanen/tetap.",
                "grammarNote": "Logika: Sifat isim fa'il."
            }
        ]
    },
    {
        "id": "l2_5_c14",
        "wordAr": "تَرْقِيَةٌ",
        "translation": "Promosi / Naik Jabatan",
        "description": "Peningkatan posisi dalam karir (Masdar dari Raqqaa).",
        "category": "Karir",
        "examples": [
            {
                "ar": "حَصَلْتُ عَلَى تَرْقِيَةٍ",
                "translation": "Saya mendapat promosi.",
                "grammarNote": "Logika: Majrur setelah 'Ala'."
            },
            {
                "ar": "أَنْتَظِرُ التَّرْقِيَةَ",
                "translation": "Saya menunggu promosi.",
                "grammarNote": "Logika: Objek (nashab)."
            },
            {
                "ar": "تَرْقِيَةٌ مُسْتَحَقَّةٌ",
                "translation": "Promosi yang layak didapatkan.",
                "grammarNote": "Logika: Na'at isim maf'ul."
            },
            {
                "ar": "مَوْعِدُ التَّرْقِيَةِ",
                "translation": "Jadwal promosi.",
                "grammarNote": "Logika: Isim zaman + Idhafah."
            },
            {
                "ar": "رُفِضَتِ التَّرْقِيَةُ",
                "translation": "Promosinya ditolak.",
                "grammarNote": "Logika: Subjek dari fi'il pasif (Naibul Fa'il)."
            },
            {
                "ar": "تَرْقِيَةُ الْمُوَظَّفِينَ",
                "translation": "Promosi para pegawai.",
                "grammarNote": "Logika: Idhafah jamak."
            },
            {
                "ar": "تَرْقِيَةٌ سَرِيعَةٌ",
                "translation": "Promosi yang cepat.",
                "grammarNote": "Logika: Sifat waktu."
            },
            {
                "ar": "قَرَارُ التَّرْقِيَةِ",
                "translation": "SK/Keputusan promosi.",
                "grammarNote": "Logika: Dokumen administratif."
            },
            {
                "ar": "يَسْتَحِقُّ التَّرْقِيَةَ",
                "translation": "Dia berhak mendapat promosi.",
                "grammarNote": "Logika: Fi'il mudhari + objek."
            },
            {
                "ar": "بَارَكْتُ لَهُ عَلَى التَّرْقِيَةِ",
                "translation": "Saya memberinya selamat atas promosi itu.",
                "grammarNote": "Logika: Konteks sosial."
            }
        ]
    },
    {
        "id": "l2_5_c15",
        "wordAr": "اسْتِقَالَةٌ",
        "translation": "Pengunduran Diri / Resign",
        "description": "Berhenti bekerja atas kemauan sendiri (Masdar dari Istaqaala).",
        "category": "Karir",
        "examples": [
            {
                "ar": "قَدَّمْتُ اسْتِقَالَتِي",
                "translation": "Saya telah mengajukan pengunduran diri.",
                "grammarNote": "Logika: Objek + Ya mutakallim."
            },
            {
                "ar": "قَبِلَ الْمُدِيرُ الِاسْتِقَالَةَ",
                "translation": "Manajer menerima pengunduran diri itu.",
                "grammarNote": "Logika: Objek (fathah)."
            },
            {
                "ar": "اسْتِقَالَةٌ رَسْمِيَّةٌ",
                "translation": "Pengunduran diri resmi.",
                "grammarNote": "Logika: Sifat muannats."
            },
            {
                "ar": "رَفْضُ الِاسْتِقَالَةِ",
                "translation": "Penolakan resign.",
                "grammarNote": "Logika: Masdar berantai."
            },
            {
                "ar": "كِتَابَةُ الِاسْتِقَالَةِ",
                "translation": "Penulisan surat resign.",
                "grammarNote": "Logika: Persiapan administratif."
            },
            {
                "ar": "فَكَّرْتُ فِي الِاسْتِقَالَةِ",
                "translation": "Saya berpikir untuk resign.",
                "grammarNote": "Logika: Preposisi 'Fi'."
            },
            {
                "ar": "سَبَبُ الِاسْتِقَالَةِ",
                "translation": "Alasan pengunduran diri.",
                "grammarNote": "Logika: Idhafah alasan."
            },
            {
                "ar": "رِسَالَةُ اسْتِقَالَةٍ",
                "translation": "Surat resign.",
                "grammarNote": "Logika: Jenis dokumen."
            },
            {
                "ar": "تَرَاجَعَ عَنِ الِاسْتِقَالَةِ",
                "translation": "Dia menarik kembali pengunduran dirinya.",
                "grammarNote": "Logika: Preposisi 'An'."
            },
            {
                "ar": "اسْتِقَالَةٌ مُفَاجِئَةٌ",
                "translation": "Pengunduran diri yang mendadak.",
                "grammarNote": "Logika: Sifat kondisi."
            }
        ]
    },
    {
        "id": "l2_5_c16",
        "wordAr": "تَوْظِيفٌ",
        "translation": "Rekrutmen / Perekrutan",
        "description": "Proses mencari dan mempekerjakan karyawan (Masdar dari Wadhdhafa).",
        "category": "Kantor",
        "examples": [
            {
                "ar": "حَمْلَةُ التَّوْظِيفِ",
                "translation": "Kampanye rekrutmen.",
                "grammarNote": "Logika: Masdar pola Taf'iil."
            },
            {
                "ar": "مَسْؤُولُ التَّوْظِيفِ",
                "translation": "HRD / Petugas rekrutmen.",
                "grammarNote": "Logika: Idhafah posisi."
            },
            {
                "ar": "بَرَامِجُ التَّوْظِيفِ",
                "translation": "Program-program rekrutmen.",
                "grammarNote": "Logika: Jamak taksir."
            },
            {
                "ar": "تَوْظِيفٌ جَدِيدٌ",
                "translation": "Perekrutan baru.",
                "grammarNote": "Logika: Sifat mudzakkar."
            },
            {
                "ar": "وَكَالَةُ تَوْظِيفٍ",
                "translation": "Agen/yayasan penyalur kerja.",
                "grammarNote": "Logika: Institusi terkait."
            },
            {
                "ar": "مُقَابَلَةُ التَّوْظِيفِ",
                "translation": "Wawancara rekrutmen.",
                "grammarNote": "Logika: Dua masdar."
            },
            {
                "ar": "إِعْلَانُ تَوْظِيفٍ",
                "translation": "Iklan lowongan kerja.",
                "grammarNote": "Logika: Media informasi."
            },
            {
                "ar": "أَوْقَفُوا التَّوْظِيفَ",
                "translation": "Mereka menghentikan perekrutan.",
                "grammarNote": "Logika: Objek (nashab)."
            },
            {
                "ar": "شُرُوطُ التَّوْظِيفِ",
                "translation": "Syarat-syarat rekrutmen.",
                "grammarNote": "Logika: Ketentuan administratif."
            },
            {
                "ar": "التَّوْظِيفُ مُسْتَمِرٌّ",
                "translation": "Rekrutmen sedang berlangsung.",
                "grammarNote": "Logika: Mubtada + Khabar (Isim Fa'il)."
            }
        ]
    },
    {
        "id": "l2_5_c17",
        "wordAr": "اجْتِمَاعٌ",
        "translation": "Rapat / Pertemuan",
        "description": "Masdar dari Ijtama'a (Berkumpul). Pola Ifti'aal.",
        "category": "Kantor",
        "examples": [
            {
                "ar": "عِنْدَنَا اجْتِمَاعٌ",
                "translation": "Kita punya rapat.",
                "grammarNote": "Logika: Masdar pola Ifti'aal."
            },
            {
                "ar": "الِاجْتِمَاعُ السَّاعَةَ الْعَاشِرَةَ",
                "translation": "Rapatnya jam 10.",
                "grammarNote": "Logika: Mubtada + Keterangan waktu."
            },
            {
                "ar": "فِي غُرْفَةِ الِاجْتِمَاعَاتِ",
                "translation": "Di ruang rapat (jamak).",
                "grammarNote": "Logika: Idhafah ke bentuk jamak."
            },
            {
                "ar": "انْتَهَى الِاجْتِمَاعُ",
                "translation": "Rapat telah selesai.",
                "grammarNote": "Logika: Subjek dari fi'il madi."
            },
            {
                "ar": "اجْتِمَاعٌ هَامٌّ",
                "translation": "Rapat penting.",
                "grammarNote": "Logika: Na'at mudzakkar."
            },
            {
                "ar": "حَضَرْتُ الِاجْتِمَاعَ",
                "translation": "Saya menghadiri rapat.",
                "grammarNote": "Logika: Objek (nashab)."
            },
            {
                "ar": "تَأَجَّلَ الِاجْتِمَاعُ",
                "translation": "Rapatnya ditunda.",
                "grammarNote": "Logika: Subjek dari kata kerja 'Ta'ajjala'."
            },
            {
                "ar": "جَدْوَلُ أَعْمَالِ الِاجْتِمَاعِ",
                "translation": "Agenda rapat.",
                "grammarNote": "Logika: Idhafah majemuk."
            },
            {
                "ar": "اجْتِمَاعٌ شَهْرِيٌّ",
                "translation": "Rapat bulanan.",
                "grammarNote": "Logika: Sifat periode waktu."
            },
            {
                "ar": "رَئِيسُ الِاجْتِمَاعِ",
                "translation": "Pemimpin rapat.",
                "grammarNote": "Logika: Peran administratif."
            }
        ]
    },
    {
        "id": "l2_5_c18",
        "wordAr": "تَقْرِيرٌ",
        "translation": "Laporan / Report",
        "description": "Masdar dari Qarrara (Menetapkan/Melaporkan). Pola Taf'iil.",
        "category": "Kantor",
        "examples": [
            {
                "ar": "اُكْتُبِ التَّقْرِيرَ",
                "translation": "Tulislah laporan itu.",
                "grammarNote": "Logika: Masdar pola Taf'iil sebagai objek."
            },
            {
                "ar": "تَقْرِيرٌ يَوْمِيٌّ",
                "translation": "Laporan harian.",
                "grammarNote": "Logika: Nisbah waktu."
            },
            {
                "ar": "أَرْسَلْتُ التَّقْرِيرَ",
                "translation": "Saya telah mengirim laporan.",
                "grammarNote": "Logika: Objek (fathah)."
            },
            {
                "ar": "تَقْرِيرُ الْعَمَلِ",
                "translation": "Laporan pekerjaan.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "هَلْ قَرَأْتَ التَّقْرِيرَ؟",
                "translation": "Apakah kamu sudah membaca laporan?",
                "grammarNote": "Logika: Tanya aktivitas."
            },
            {
                "ar": "تَقْرِيرٌ مُفَصَّلٌ",
                "translation": "Laporan yang terperinci.",
                "grammarNote": "Logika: Sifat isim maf'ul."
            },
            {
                "ar": "تَقْدِيمُ التَّقْرِيرِ",
                "translation": "Penyajian/Penyerahan laporan.",
                "grammarNote": "Logika: Dua masdar."
            },
            {
                "ar": "تَقْرِيرٌ مَالِيٌّ",
                "translation": "Laporan keuangan.",
                "grammarNote": "Logika: Sifat bidang."
            },
            {
                "ar": "التَّقْرِيرُ جَاهِزٌ",
                "translation": "Laporannya sudah siap.",
                "grammarNote": "Logika: Mubtada + Khabar."
            },
            {
                "ar": "مُرَاجَعَةُ التَّقْرِيرِ",
                "translation": "Review/Revisi laporan.",
                "grammarNote": "Logika: Aktivitas kantor."
            }
        ]
    },
    {
        "id": "l2_5_c19",
        "wordAr": "إِجَازَةٌ",
        "translation": "Cuti / Libur",
        "description": "Izin tidak bekerja atau hari libur (Masdar dari Ajaaza).",
        "category": "Waktu",
        "examples": [
            {
                "ar": "أَنَا فِي إِجَازَةٍ",
                "translation": "Saya sedang cuti.",
                "grammarNote": "Logika: Masdar pola If'aalah."
            },
            {
                "ar": "طَلَبُ إِجَازَةٍ",
                "translation": "Surat permohonan cuti.",
                "grammarNote": "Logika: Idhafah administratif."
            },
            {
                "ar": "إِجَازَةٌ سَنَوِيَّةٌ",
                "translation": "Cuti tahunan.",
                "grammarNote": "Logika: Sifat muannats."
            },
            {
                "ar": "مَتَى تَبْدَأُ الْإِجَازَةُ؟",
                "translation": "Kapan cutinya dimulai?",
                "grammarNote": "Logika: Subjek kalimat verbal."
            },
            {
                "ar": "إِجَازَةٌ مَرَضِيَّةٌ",
                "translation": "Cuti sakit.",
                "grammarNote": "Logika: Alasan spesifik."
            },
            {
                "ar": "أَحْتَاجُ إِلَى إِجَازَةٍ",
                "translation": "Saya butuh liburan/cuti.",
                "grammarNote": "Logika: Majrur."
            },
            {
                "ar": "انْتَهَتِ الْإِجَازَةُ",
                "translation": "Cutinya telah berakhir.",
                "grammarNote": "Logika: Fi'il madi muannats."
            },
            {
                "ar": "إِجَازَةٌ بِدُونِ رَاتِبٍ",
                "translation": "Cuti di luar tanggungan (tanpa gaji).",
                "grammarNote": "Logika: Istilah HRD."
            },
            {
                "ar": "رَصِيدُ الْإِجَازَاتِ",
                "translation": "Sisa jatah cuti (jamak).",
                "grammarNote": "Logika: Jamak muannats salim."
            },
            {
                "ar": "أَخَذْتُ إِجَازَةً يَوْمَيْنِ",
                "translation": "Saya mengambil cuti dua hari.",
                "grammarNote": "Logika: Mutsanna sebagai keterangan waktu."
            }
        ]
    },
    {
        "id": "l2_5_c20",
        "wordAr": "مِهْنَةٌ",
        "translation": "Profesi / Karir",
        "description": "Pekerjaan yang membutuhkan keahlian khusus.",
        "category": "Karir",
        "examples": [
            {
                "ar": "مَا هِيَ مِهْنَتُكَ؟",
                "translation": "Apa profesimu?",
                "grammarNote": "Logika: Isim muannats, tanya identitas."
            },
            {
                "ar": "مِهْنَةُ الطِّبِّ",
                "translation": "Profesi kedokteran.",
                "grammarNote": "Logika: Idhafah spesifik."
            },
            {
                "ar": "مِهْنَةٌ شَرِيفَةٌ",
                "translation": "Profesi yang mulia.",
                "grammarNote": "Logika: Na'at muannats."
            },
            {
                "ar": "أُحِبُّ مِهْنَتِي",
                "translation": "Saya mencintai profesi saya.",
                "grammarNote": "Logika: Objek + Kepemilikan."
            },
            {
                "ar": "أَخْلَاقُ الْمِهْنَةِ",
                "translation": "Etika profesi.",
                "grammarNote": "Logika: Konsep abstrak."
            },
            {
                "ar": "تَطْوِيرُ الْمِهْنَةِ",
                "translation": "Pengembangan karir/profesi.",
                "grammarNote": "Logika: Masdar wazan Taf'iil."
            },
            {
                "ar": "مِهْنَةُ التَّعْلِيمِ",
                "translation": "Profesi pendidikan/mengajar.",
                "grammarNote": "Logika: Idhafah dengan masdar."
            },
            {
                "ar": "تَغْيِيرُ الْمِهْنَةِ",
                "translation": "Beralih profesi.",
                "grammarNote": "Logika: Keputusan hidup."
            },
            {
                "ar": "مِهْنَةٌ حُرَّةٌ",
                "translation": "Pekerjaan lepas (Freelance).",
                "grammarNote": "Logika: Istilah karir modern."
            },
            {
                "ar": "الِاحْتِرَافُ فِي الْمِهْنَةِ",
                "translation": "Profesionalisme dalam karir.",
                "grammarNote": "Logika: Masdar wazan Ifti'aal."
            }
        ]
    },
    {
        "id": "l2_5_c21",
        "wordAr": "مُحَاسِبٌ",
        "translation": "Akuntan",
        "description": "Isim Fa'il dari Haashaba. Profesi pengelola keuangan.",
        "category": "Profesi",
        "examples": [
            {
                "ar": "أَعْمَلُ مُحَاسِبًا",
                "translation": "Saya bekerja sebagai akuntan.",
                "grammarNote": "Logika: Haal (keadaan) / Tamyiz (nashab)."
            },
            {
                "ar": "الْمُحَاسِبُ فِي مَكْتَبِهِ",
                "translation": "Akuntan itu di kantornya.",
                "grammarNote": "Logika: Mubtada."
            },
            {
                "ar": "نَحْتَاجُ إِلَى مُحَاسِبٍ",
                "translation": "Kami butuh seorang akuntan.",
                "grammarNote": "Logika: Majrur."
            },
            {
                "ar": "مُحَاسِبٌ مَالِيٌّ",
                "translation": "Akuntan keuangan.",
                "grammarNote": "Logika: Sifat bidang."
            },
            {
                "ar": "الْمُحَاسِبَةُ دَقِيقَةٌ",
                "translation": "Akuntan (perempuan) itu teliti.",
                "grammarNote": "Logika: Muannats + Sifat."
            },
            {
                "ar": "تَقْرِيرُ الْمُحَاسِبِ",
                "translation": "Laporan akuntan.",
                "grammarNote": "Logika: Idhafah kepemilikan."
            },
            {
                "ar": "وَظِيفَةُ مُحَاسِبٍ",
                "translation": "Lowongan akuntan.",
                "grammarNote": "Logika: Relasi posisi."
            },
            {
                "ar": "مُحَاسِبٌ مُعْتَمَدٌ",
                "translation": "Akuntan publik/bersertifikat (CPA).",
                "grammarNote": "Logika: Istilah profesional."
            },
            {
                "ar": "خَطَأُ الْمُحَاسِبِ",
                "translation": "Kesalahan akuntan.",
                "grammarNote": "Logika: Kesalahan kerja."
            },
            {
                "ar": "قِسْمُ الْمُحَاسَبَةِ",
                "translation": "Departemen akuntansi (menggunakan masdar).",
                "grammarNote": "Logika: Perbedaan isim fa'il dan masdar."
            }
        ]
    },
    {
        "id": "l2_5_c22",
        "wordAr": "مُهَنْدِسٌ",
        "translation": "Insinyur / Engineer",
        "description": "Profesi di bidang teknik dan rancang bangun.",
        "category": "Profesi",
        "examples": [
            {
                "ar": "أَخِي مُهَنْدِسٌ",
                "translation": "Saudara laki-lakiku seorang insinyur.",
                "grammarNote": "Logika: Khabar isim."
            },
            {
                "ar": "مُهَنْدِسُ حَاسُوبٍ",
                "translation": "Insinyur komputer (Software Engineer).",
                "grammarNote": "Logika: Idhafah profesi."
            },
            {
                "ar": "الْمُهَنْدِسُونَ فِي الْمَوْقِعِ",
                "translation": "Para insinyur ada di lokasi proyek.",
                "grammarNote": "Logika: Jamak mudzakkar salim (Wawu-Nun)."
            },
            {
                "ar": "مُهَنْدِسٌ مِعْمَارِيٌّ",
                "translation": "Arsitek (Insinyur arsitektur).",
                "grammarNote": "Logika: Sifat bidang."
            },
            {
                "ar": "مُهَنْدِسَةٌ مَدَنِيَّةٌ",
                "translation": "Insinyur sipil (perempuan).",
                "grammarNote": "Logika: Muannats."
            },
            {
                "ar": "شَرِكَةُ مُهَنْدِسِينَ",
                "translation": "Perusahaan insinyur (jamak majrur).",
                "grammarNote": "Logika: Ya-Nun untuk jamak majrur."
            },
            {
                "ar": "تَصْمِيمُ الْمُهَنْدِسِ",
                "translation": "Desain/rancangan insinyur.",
                "grammarNote": "Logika: Kepemilikan karya."
            },
            {
                "ar": "نَقَابَةُ الْمُهَنْدِسِينَ",
                "translation": "Persatuan/Serikat insinyur.",
                "grammarNote": "Logika: Organisasi profesi."
            },
            {
                "ar": "مُهَنْدِسٌ بَارِعٌ",
                "translation": "Insinyur yang mahir.",
                "grammarNote": "Logika: Na'at puji."
            },
            {
                "ar": "يَعْمَلُ مُهَنْدِسًا",
                "translation": "Dia bekerja sebagai insinyur.",
                "grammarNote": "Logika: Posisi kerja (nashab)."
            }
        ]
    },
    {
        "id": "l2_5_c23",
        "wordAr": "مُدَرِّسٌ",
        "translation": "Guru / Pengajar",
        "description": "Profesi pengajar (Isim Fa'il dari Darrasa).",
        "category": "Profesi",
        "examples": [
            {
                "ar": "الْمُدَرِّسُ فِي الْفَصْلِ",
                "translation": "Guru ada di kelas.",
                "grammarNote": "Logika: Mubtada."
            },
            {
                "ar": "أَنَا مُدَرِّسُ لُغَةٍ",
                "translation": "Saya guru bahasa.",
                "grammarNote": "Logika: Idhafah profesi."
            },
            {
                "ar": "سَأَلْتُ الْمُدَرِّسَ",
                "translation": "Saya bertanya kepada guru.",
                "grammarNote": "Logika: Objek (nashab)."
            },
            {
                "ar": "مُدَرِّسَةٌ جَدِيدَةٌ",
                "translation": "Guru (perempuan) baru.",
                "grammarNote": "Logika: Muannats + Sifat."
            },
            {
                "ar": "غُرْفَةُ الْمُدَرِّسِينَ",
                "translation": "Ruang guru (jamak).",
                "grammarNote": "Logika: Jamak mudzakkar salim (majrur)."
            },
            {
                "ar": "مُدَرِّسٌ مُخْلِصٌ",
                "translation": "Guru yang ikhlas.",
                "grammarNote": "Logika: Karakter sifat."
            },
            {
                "ar": "شُكْرًا أَيُّهَا الْمُدَرِّسُ",
                "translation": "Terima kasih wahai guru.",
                "grammarNote": "Logika: Seruan (Nida')."
            },
            {
                "ar": "وَظِيفَةُ مُدَرِّسٍ",
                "translation": "Lowongan guru.",
                "grammarNote": "Logika: Posisi kerja."
            },
            {
                "ar": "الْمُدَرِّسُ يَشْرَحُ الدَّرْسَ",
                "translation": "Guru sedang menjelaskan pelajaran.",
                "grammarNote": "Logika: Subjek kalimat verbal."
            },
            {
                "ar": "رَاتِبُ الْمُدَرِّسِ",
                "translation": "Gaji guru.",
                "grammarNote": "Logika: Kepemilikan finansial."
            }
        ]
    },
    {
        "id": "l2_5_c24",
        "wordAr": "طَبِيبٌ",
        "translation": "Dokter",
        "description": "Profesi di bidang medis.",
        "category": "Profesi",
        "examples": [
            {
                "ar": "ذَهَبْتُ إِلَى الطَّبِيبِ",
                "translation": "Saya pergi ke dokter.",
                "grammarNote": "Logika: Majrur."
            },
            {
                "ar": "الطَّبِيبُ يَعْحَصُ الْمَرِيضَ",
                "translation": "Dokter memeriksa pasien.",
                "grammarNote": "Logika: Subjek aktif."
            },
            {
                "ar": "أُرِيدُ أَنْ أُصْبِحَ طَبِيبًا",
                "translation": "Saya ingin menjadi dokter.",
                "grammarNote": "Logika: Khabar 'Usbiha' (nashab)."
            },
            {
                "ar": "طَبِيبُ الْأَسْنَانِ",
                "translation": "Dokter gigi.",
                "grammarNote": "Logika: Idhafah spesialis."
            },
            {
                "ar": "طَبِيبَةُ أَطْفَالٍ",
                "translation": "Dokter (perempuan) anak.",
                "grammarNote": "Logika: Muannats + spesialis."
            },
            {
                "ar": "عِيَادَةُ الطَّبِيبِ",
                "translation": "Klinik dokter.",
                "grammarNote": "Logika: Tempat praktik."
            },
            {
                "ar": "طَبِيبٌ مَشْهُورٌ",
                "translation": "Dokter terkenal.",
                "grammarNote": "Logika: Reputasi."
            },
            {
                "ar": "اسْتِشَارَةُ الطَّبِيبِ",
                "translation": "Konsultasi dokter.",
                "grammarNote": "Logika: Masdar wazan Istif'aal + profesi."
            },
            {
                "ar": "مَوْعِدٌ مَعَ الطَّبِيبِ",
                "translation": "Janji dengan dokter.",
                "grammarNote": "Logika: Aktivitas medis."
            },
            {
                "ar": "وَصْفَةُ الطَّبِيبِ",
                "translation": "Resep dokter.",
                "grammarNote": "Logika: Dokumen medis."
            }
        ]
    },
    {
        "id": "l2_5_c25",
        "wordAr": "نَجَاحٌ",
        "translation": "Kesuksesan / Keberhasilan",
        "description": "Masdar dari Najaha (Sukses/Lulus).",
        "category": "Abstrak",
        "examples": [
            {
                "ar": "النَّجَاحُ هَدَفِي",
                "translation": "Kesuksesan adalah tujuanku.",
                "grammarNote": "Logika: Masdar makrifah sebagai mubtada."
            },
            {
                "ar": "أَتَمَنَّى لَكَ النَّجَاحَ",
                "translation": "Saya berharap kesuksesan untukmu.",
                "grammarNote": "Logika: Masdar sebagai objek."
            },
            {
                "ar": "سِرُّ النَّجَاحِ",
                "translation": "Rahasia kesuksesan.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "نَجَاحٌ بَاهِرٌ",
                "translation": "Kesuksesan yang gemilang.",
                "grammarNote": "Logika: Na'at."
            },
            {
                "ar": "طَرِيقُ النَّجَاحِ",
                "translation": "Jalan menuju kesuksesan.",
                "grammarNote": "Logika: Kiasan jalan."
            },
            {
                "ar": "نَحْتَفِلُ بِالنَّجَاحِ",
                "translation": "Kami merayakan kesuksesan.",
                "grammarNote": "Logika: Majrur dengan 'Bi'."
            },
            {
                "ar": "مِفْتَاحُ النَّجَاحِ هُوَ الْعَمَلُ",
                "translation": "Kunci kesuksesan adalah bekerja.",
                "grammarNote": "Logika: Kalimat definisi."
            },
            {
                "ar": "النَّجَاحُ فِي الْعَمَلِ",
                "translation": "Kesuksesan dalam pekerjaan.",
                "grammarNote": "Logika: Preposisi."
            },
            {
                "ar": "لَمْ يَتَوَقَّعِ النَّجَاحَ",
                "translation": "Dia tidak menyangka akan sukses.",
                "grammarNote": "Logika: Objek dari fi'il."
            },
            {
                "ar": "شَهَادَةُ النَّجَاحِ",
                "translation": "Sertifikat kelulusan/keberhasilan.",
                "grammarNote": "Logika: Bukti."
            }
        ]
    },
    {
        "id": "l2_5_c26",
        "wordAr": "مُدِيرُ الْمَوَارِدِ الْبَشَرِيَّةِ",
        "translation": "Manajer HRD",
        "description": "Orang yang mengelola sumber daya manusia.",
        "category": "Profesi",
        "examples": [
            {
                "ar": "قَابَلَنِي مُدِيرُ الْمَوَارِدِ الْبَشَرِيَّةِ",
                "translation": "Manajer HRD mewawancaraiku.",
                "grammarNote": "Logika: Subjek panjang."
            },
            {
                "ar": "مَكْتَبُ الْمَوَارِدِ الْبَشَرِيَّةِ",
                "translation": "Kantor HRD.",
                "grammarNote": "Logika: Tempat."
            },
            {
                "ar": "قَرَارُ مَوَارِدِ الْبَشَرِيَّةِ",
                "translation": "Keputusan HRD.",
                "grammarNote": "Logika: Otoritas."
            },
            {
                "ar": "أَرْسِلِ السِّيرَةَ إِلَى الْمَوَارِدِ الْبَشَرِيَّةِ",
                "translation": "Kirim CV ke HRD.",
                "grammarNote": "Logika: Tujuan surat."
            },
            {
                "ar": "مُوَظَّفُ مَوَارِدَ بَشَرِيَّةٍ",
                "translation": "Staf HRD.",
                "grammarNote": "Logika: Posisi bawahan."
            },
            {
                "ar": "قِسْمُ الْمَوَارِدِ الْبَشَرِيَّةِ",
                "translation": "Departemen SDM.",
                "grammarNote": "Logika: Nama bagian."
            },
            {
                "ar": "مُدِيرَةُ الْمَوَارِدِ الْبَشَرِيَّةِ",
                "translation": "Manajer HRD (perempuan).",
                "grammarNote": "Logika: Muannats."
            },
            {
                "ar": "اسْتِشَارَةُ الْمَوَارِدِ الْبَشَرِيَّةِ",
                "translation": "Konsultasi HRD.",
                "grammarNote": "Logika: Aktivitas."
            },
            {
                "ar": "تَقْيِيمُ الْمَوَارِدِ الْبَشَرِيَّةِ",
                "translation": "Evaluasi dari HRD.",
                "grammarNote": "Logika: Masdar penilaian."
            },
            {
                "ar": "سِيَاسَةُ الْمَوَارِدِ الْبَشَرِيَّةِ",
                "translation": "Kebijakan HRD.",
                "grammarNote": "Logika: Aturan."
            }
        ]
    },
    {
        "id": "l2_5_c27",
        "wordAr": "تَطْوِيرٌ",
        "translation": "Pengembangan",
        "description": "Masdar dari Tawwara (Mengembangkan). Pola Taf'iil.",
        "category": "Abstrak",
        "examples": [
            {
                "ar": "تَطْوِيرُ الْمَهَارَاتِ",
                "translation": "Pengembangan keterampilan.",
                "grammarNote": "Logika: Idhafah masdar ke jamak."
            },
            {
                "ar": "بَرْنَامَجُ التَّطْوِيرِ",
                "translation": "Program pengembangan.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "تَطْوِيرٌ مُسْتَمِرٌّ",
                "translation": "Pengembangan berkelanjutan.",
                "grammarNote": "Logika: Na'at."
            },
            {
                "ar": "نَهْتَمُّ بِالتَّطْوِيرِ",
                "translation": "Kami peduli dengan pengembangan.",
                "grammarNote": "Logika: Majrur."
            },
            {
                "ar": "تَطْوِيرُ الذَّاتِ",
                "translation": "Pengembangan diri (Self-development).",
                "grammarNote": "Logika: Konsep populer."
            },
            {
                "ar": "خُطَّةُ التَّطْوِيرِ",
                "translation": "Rencana pengembangan.",
                "grammarNote": "Logika: Dokumen."
            },
            {
                "ar": "مَرْكَزُ التَّطْوِيرِ",
                "translation": "Pusat pengembangan.",
                "grammarNote": "Logika: Tempat."
            },
            {
                "ar": "يَحْتَاجُ إِلَى تَطْوِيرٍ",
                "translation": "Membutuhkan pengembangan.",
                "grammarNote": "Logika: Syarat."
            },
            {
                "ar": "تَطْوِيرُ الْمُنْتَجَاتِ",
                "translation": "Pengembangan produk.",
                "grammarNote": "Logika: Bisnis."
            },
            {
                "ar": "دَوْرَةٌ فِي التَّطْوِيرِ",
                "translation": "Kursus dalam pengembangan.",
                "grammarNote": "Logika: Pendidikan."
            }
        ]
    },
    {
        "id": "l2_5_c28",
        "wordAr": "مُفَاوَضَةٌ",
        "translation": "Negosiasi / Perundingan",
        "description": "Masdar dari Faawadha. Pola Mufaa'alah.",
        "category": "Aktivitas",
        "examples": [
            {
                "ar": "مُفَاوَضَةُ الرَّاتِبِ",
                "translation": "Negosiasi gaji.",
                "grammarNote": "Logika: Masdar + hal."
            },
            {
                "ar": "مُفَاوَضَاتٌ صَعْبَةٌ",
                "translation": "Negosiasi yang sulit (jamak).",
                "grammarNote": "Logika: Jamak muannats salim."
            },
            {
                "ar": "نَجَحَتِ الْمُفَاوَضَةُ",
                "translation": "Negosiasinya berhasil.",
                "grammarNote": "Logika: Subjek."
            },
            {
                "ar": "فِي جَلْسَةِ الْمُفَاوَضَةِ",
                "translation": "Dalam sesi negosiasi.",
                "grammarNote": "Logika: Waktu/kegiatan."
            },
            {
                "ar": "مَهَارَاتُ الْمُفَاوَضَةِ",
                "translation": "Keterampilan bernegosiasi.",
                "grammarNote": "Logika: Skill."
            },
            {
                "ar": "بَدَأْنَا الْمُفَاوَضَاتِ",
                "translation": "Kami memulai negosiasi.",
                "grammarNote": "Logika: Objek jamak."
            },
            {
                "ar": "مُفَاوَضَةٌ مُبَاشِرَةٌ",
                "translation": "Negosiasi langsung.",
                "grammarNote": "Logika: Na'at."
            },
            {
                "ar": "انْتَهَتِ الْمُفَاوَضَاتُ",
                "translation": "Negosiasinya telah berakhir.",
                "grammarNote": "Logika: Selesai."
            },
            {
                "ar": "فَرِيقُ الْمُفَاوَضَةِ",
                "translation": "Tim negosiasi.",
                "grammarNote": "Logika: Kelompok."
            },
            {
                "ar": "قُدْرَةٌ عَلَى الْمُفَاوَضَةِ",
                "translation": "Kemampuan untuk bernegosiasi.",
                "grammarNote": "Logika: Sifat."
            }
        ]
    },
    {
        "id": "l2_5_c29",
        "wordAr": "مُكَافَأَةٌ",
        "translation": "Bonus / Hadiah / Kompensasi",
        "description": "Masdar dari Kaafa'a (Memberi hadiah/bonus). Pola Mufaa'alah.",
        "category": "Keuangan",
        "examples": [
            {
                "ar": "مُكَافَأَةٌ سَنَوِيَّةٌ",
                "translation": "Bonus tahunan.",
                "grammarNote": "Logika: Na'at waktu."
            },
            {
                "ar": "حَصَلْتُ عَلَى مُكَافَأَةٍ",
                "translation": "Saya mendapat bonus.",
                "grammarNote": "Logika: Majrur."
            },
            {
                "ar": "مُكَافَأَةُ نِهَايَةِ الْخِدْمَةِ",
                "translation": "Pesangon (Kompensasi akhir masa kerja).",
                "grammarNote": "Logika: Istilah HRD."
            },
            {
                "ar": "نِظَامُ الْمُكَافَآتِ",
                "translation": "Sistem bonus (jamak).",
                "grammarNote": "Logika: Aturan."
            },
            {
                "ar": "مُكَافَأَةٌ مَالِيَّةٌ",
                "translation": "Bonus berupa uang.",
                "grammarNote": "Logika: Sifat bentuk."
            },
            {
                "ar": "صَرَفَ الْمُدِيرُ الْمُكَافَأَةَ",
                "translation": "Manajer mencairkan bonus.",
                "grammarNote": "Logika: Objek."
            },
            {
                "ar": "مُكَافَأَةٌ تَشْجِيعِيَّةٌ",
                "translation": "Bonus insentif/dorongan.",
                "grammarNote": "Logika: Sifat tujuan."
            },
            {
                "ar": "لَا تُوجَدُ مُكَافَأَةٌ",
                "translation": "Tidak ada bonus.",
                "grammarNote": "Logika: Negasi keberadaan."
            },
            {
                "ar": "تَقْسِيمُ الْمُكَافَآتِ",
                "translation": "Pembagian bonus.",
                "grammarNote": "Logika: Aktivitas keuangan."
            },
            {
                "ar": "مُكَافَأَةُ الْأَدَاءِ",
                "translation": "Bonus kinerja.",
                "grammarNote": "Logika: Alasan."
            }
        ]
    },
    {
        "id": "l2_5_c30",
        "wordAr": "تَوْقِيعٌ",
        "translation": "Tanda Tangan",
        "description": "Masdar dari Waqqa'a. Pola Taf'iil.",
        "category": "Administrasi",
        "examples": [
            {
                "ar": "تَوْقِيعُ الْعَقْدِ",
                "translation": "Penandatanganan kontrak.",
                "grammarNote": "Logika: Idhafah."
            },
            {
                "ar": "أَيْنَ التَّوْقِيعُ؟",
                "translation": "Mana tanda tangannya?",
                "grammarNote": "Logika: Pertanyaan letak."
            },
            {
                "ar": "تَوْقِيعُ الْمُدِيرِ مُهِمٌّ",
                "translation": "Tanda tangan manajer itu penting.",
                "grammarNote": "Logika: Mubtada."
            },
            {
                "ar": "أَحْتَاجُ إِلَى تَوْقِيعِكَ",
                "translation": "Saya butuh tanda tanganmu.",
                "grammarNote": "Logika: Majrur + Dhamir."
            },
            {
                "ar": "تَوْقِيعٌ رَسْمِيٌّ",
                "translation": "Tanda tangan resmi.",
                "grammarNote": "Logika: Na'at."
            },
            {
                "ar": "بِدُونِ تَوْقِيعٍ",
                "translation": "Tanpa tanda tangan.",
                "grammarNote": "Logika: Syarat."
            },
            {
                "ar": "تَوْقِيعٌ إِلِكْتُرُونِيٌّ",
                "translation": "Tanda tangan elektronik/digital.",
                "grammarNote": "Logika: Istilah modern."
            },
            {
                "ar": "خَتْمٌ وَتَوْقِيعٌ",
                "translation": "Stempel dan tanda tangan.",
                "grammarNote": "Logika: Pasangan."
            },
            {
                "ar": "تَزْوِيرُ التَّوْقِيعِ",
                "translation": "Pemalsuan tanda tangan.",
                "grammarNote": "Logika: Masdar ganda."
            },
            {
                "ar": "قِسْمُ التَّوْقِيعَاتِ",
                "translation": "Bagian tanda tangan.",
                "grammarNote": "Logika: Jamak."
            }
        ]
    }
],
    dialog: [
    {
        "speaker": "مُدِيرُ الْمَوَارِدِ",
        "textAr": "أَهْلًا وَسَهْلًا، تَفَضَّلْ بِالْجُلُوسِ.",
        "translation": "Selamat datang, silakan duduk."
    },
    {
        "speaker": "أَحْمَد",
        "textAr": "شُكْرًا جَزِيلًا لَكَ.",
        "translation": "Terima kasih banyak."
    },
    {
        "speaker": "مُدِيرُ الْمَوَارِدِ",
        "textAr": "قَرَأْتُ السِّيرَةَ الذَّاتِيَّةَ، وَهِيَ مُمْتَازَةٌ. حَدِّثْنِي عَنْ نَفْسِكَ.",
        "translation": "Saya sudah membaca CV, dan itu sangat baik. Ceritakan tentang dirimu."
    },
    {
        "speaker": "أَحْمَد",
        "textAr": "اِسْمِي أَحْمَد، تَخَرَّجْتُ فِي الْجَامِعَةِ بِتَخَصُّصِ الْحَاسُوبِ.",
        "translation": "Nama saya Ahmad, saya lulus dari universitas dengan jurusan komputer."
    },
    {
        "speaker": "مُدِيرُ الْمَوَارِدِ",
        "textAr": "مَا هِيَ خِبْرَتُكَ فِي هَذَا الْمَجَالِ؟",
        "translation": "Apa pengalamanmu di bidang ini?"
    },
    {
        "speaker": "أَحْمَد",
        "textAr": "لَدَيَّ خِبْرَةُ ثَلَاثِ سَنَوَاتٍ كَمُهَنْدِسٍ.",
        "translation": "Saya memiliki pengalaman tiga tahun sebagai insinyur."
    },
    {
        "speaker": "مُدِيرُ الْمَوَارِدِ",
        "textAr": "لِمَاذَا تُرِيدُ الْعَمَلَ فِي شَرِكَتِنَا؟",
        "translation": "Mengapa kamu ingin bekerja di perusahaan kami?"
    },
    {
        "speaker": "أَحْمَد",
        "textAr": "لِأَنَّ شَرِكَتَكُمْ مَشْهُورَةٌ بِالتَّطْوِيرِ الْمُسْتَمِرِّ.",
        "translation": "Karena perusahaan kalian terkenal dengan pengembangan yang berkelanjutan."
    },
    {
        "speaker": "مُدِيرُ الْمَوَارِدِ",
        "textAr": "هَلْ تَتَحَمَّلُ ضَغْطَ الْعَمَلِ؟",
        "translation": "Apakah kamu tahan dengan tekanan pekerjaan?"
    },
    {
        "speaker": "أَحْمَد",
        "textAr": "نَعَمْ، أَنَا مُسْتَعِدٌّ لِذَلِكَ بِفَضْلِ التَّدْرِيبِ السَّابِقِ.",
        "translation": "Ya, saya siap untuk itu berkat pelatihan sebelumnya."
    },
    {
        "speaker": "مُدِيرُ الْمَوَارِدِ",
        "textAr": "مَا هُوَ الرَّاتِبُ الَّذِي تَتَوَقَّعُهُ؟",
        "translation": "Berapa gaji yang kamu harapkan?"
    },
    {
        "speaker": "أَحْمَد",
        "textAr": "أَتَوَقَّعُ رَاتِبًا يُنَاسِبُ الْخِبْرَةَ وَالسُّوقَ.",
        "translation": "Saya mengharapkan gaji yang sesuai dengan pengalaman dan pasar."
    },
    {
        "speaker": "مُدِيرُ الْمَوَارِدِ",
        "textAr": "حَسَنًا، سَنَتَّصِلُ بِكَ قَرِيبًا.",
        "translation": "Baiklah, kami akan menghubungimu segera."
    },
    {
        "speaker": "أَحْمَد",
        "textAr": "أَنْتَظِرُ اتِّصَالَكُمْ، شُكْرًا لِلْمُقَابَلَةِ.",
        "translation": "Saya menunggu telepon kalian, terima kasih untuk wawancaranya."
    }
],
    quiz: [
    {
        "id": "q1",
        "type": "multiple-choice",
        "question": "Apa arti dari 'شَرِكَةٌ'?",
        "options": [
            "Pasar",
            "Perusahaan",
            "Rumah Sakit",
            "Universitas"
        ],
        "correctAnswer": "Perusahaan",
        "explanation": "شَرِكَةٌ berarti Perusahaan. Dari kata 'Syarika' (Bermitra/Berserikat)."
    },
    {
        "id": "q2",
        "type": "multiple-choice",
        "question": "Bentuk masdar dari kata 'عَمِلَ' (bekerja) adalah...",
        "options": [
            "عَامِلٌ",
            "عَمَلٌ",
            "مَعْمَلٌ",
            "مُعَامَلَةٌ"
        ],
        "correctAnswer": "عَمَلٌ",
        "explanation": "Masdar dari 'Amila adalah عَمَلٌ yang berarti pekerjaan (perbuatan)."
    },
    {
        "id": "q3",
        "type": "multiple-choice",
        "question": "Kata 'مُدِيرٌ' termasuk dalam bentuk...",
        "options": [
            "Masdar",
            "Isim Fa'il",
            "Isim Makan",
            "Isim Zaman"
        ],
        "correctAnswer": "Isim Fa'il",
        "explanation": "مُدِيرٌ adalah Isim Fa'il (pelaku) dari Adaara-Yudiiru, berarti yang memimpin/direktur."
    },
    {
        "id": "q4",
        "type": "multiple-choice",
        "question": "Terjemahkan ke bahasa Arab: 'Wawancara'",
        "options": [
            "مُقَابَلَةٌ",
            "تَوْقِيعٌ",
            "تَرْقِيَةٌ",
            "عَقْدٌ"
        ],
        "correctAnswer": "مُقَابَلَةٌ",
        "explanation": "Wawancara adalah مُقَابَلَةٌ (Muqaabalah). Masdar dari Qaabala (bertemu/berhadapan)."
    },
    {
        "id": "q5",
        "type": "multiple-choice",
        "question": "Apa arti 'سِيرَةٌ ذَاتِيَّةٌ'?",
        "options": [
            "Surat Izin",
            "Ijazah",
            "Riwayat Hidup (CV)",
            "Kontrak Kerja"
        ],
        "correctAnswer": "Riwayat Hidup (CV)",
        "explanation": "سِيرَةٌ ذَاتِيَّةٌ adalah Curriculum Vitae (CV) atau Riwayat Hidup."
    },
    {
        "id": "q6",
        "type": "multiple-choice",
        "question": "Lengkapi kalimat: 'أَبْحَثُ عَنْ ... جَدِيدَةٍ' (Saya mencari pekerjaan baru)",
        "options": [
            "وَظِيفَةٍ",
            "مُدِيرٍ",
            "عَقْدٍ",
            "رَاتِبٍ"
        ],
        "correctAnswer": "وَظِيفَةٍ",
        "explanation": "وَظِيفَةٍ (Wazhiifah) berarti pekerjaan/jabatan. Karena ada sifat muannats 'jadiidatin'."
    },
    {
        "id": "q7",
        "type": "multiple-choice",
        "question": "Kata 'رَاتِبٌ' berarti...",
        "options": [
            "Cuti",
            "Gaji",
            "Pajak",
            "Bonus"
        ],
        "correctAnswer": "Gaji",
        "explanation": "رَاتِبٌ (Raatib) berarti gaji atau upah bulanan."
    },
    {
        "id": "q8",
        "type": "multiple-choice",
        "question": "Manakah yang merupakan masdar (pola Taf'iil) dari kata 'طَوَّرَ' (mengembangkan)?",
        "options": [
            "تَطْوِيرٌ",
            "مُطَوِّرٌ",
            "تَطَوُّرٌ",
            "طَوْرٌ"
        ],
        "correctAnswer": "تَطْوِيرٌ",
        "explanation": "Fi'il wazan Fa'ala (طَوَّرَ) masdarnya wazan Taf'iil (تَطْوِيرٌ) yaitu pengembangan."
    },
    {
        "id": "q9",
        "type": "multiple-choice",
        "question": "Bentuk masdar (pola Taf'iil) dari kata 'وَظَّفَ' (mempekerjakan) adalah...",
        "options": [
            "وَظِيفَةٌ",
            "مُوَظَّفٌ",
            "تَوْظِيفٌ",
            "تَوَظُّفٌ"
        ],
        "correctAnswer": "تَوْظِيفٌ",
        "explanation": "Fi'il wazan Fa'ala (وَظَّفَ) masdarnya wazan Taf'iil (تَوْظِيفٌ) yaitu rekrutmen."
    },
    {
        "id": "q10",
        "type": "multiple-choice",
        "question": "Apa arti 'مُوَظَّفٌ'?",
        "options": [
            "Pekerjaan",
            "Pegawai/Karyawan",
            "Direktur",
            "Kantor"
        ],
        "correctAnswer": "Pegawai/Karyawan",
        "explanation": "مُوَظَّفٌ adalah isim maf'ul (orang yang dipekerjakan) yang berarti Pegawai."
    },
    {
        "id": "q11",
        "type": "multiple-choice",
        "question": "Terjemahkan: 'Pengalaman kerja'",
        "options": [
            "خِبْرَةُ عَمَلٍ",
            "شَهَادَةُ عَمَلٍ",
            "عَقْدُ عَمَلٍ",
            "طَلَبُ عَمَلٍ"
        ],
        "correctAnswer": "خِبْرَةُ عَمَلٍ",
        "explanation": "خِبْرَةٌ (Khibrah) artinya pengalaman. خِبْرَةُ عَمَلٍ adalah pengalaman kerja."
    },
    {
        "id": "q12",
        "type": "multiple-choice",
        "question": "Kata 'شَهَادَةٌ' berarti...",
        "options": [
            "Ijazah / Sertifikat",
            "Cuti / Libur",
            "Promosi",
            "Wawancara"
        ],
        "correctAnswer": "Ijazah / Sertifikat",
        "explanation": "شَهَادَةٌ (Syahaadah) berarti ijazah, sertifikat, atau kesaksian."
    },
    {
        "id": "q13",
        "type": "multiple-choice",
        "question": "Manakah yang berarti 'Kontrak Kerja'?",
        "options": [
            "رِسَالَةُ عَمَلٍ",
            "عَقْدُ عَمَلٍ",
            "سِيرَةُ عَمَلٍ",
            "تَقْرِيرُ عَمَلٍ"
        ],
        "correctAnswer": "عَقْدُ عَمَلٍ",
        "explanation": "عَقْدٌ ('Aqd) berarti kontrak. عَقْدُ عَمَلٍ adalah kontrak kerja."
    },
    {
        "id": "q14",
        "type": "multiple-choice",
        "question": "Kata 'تَرْقِيَةٌ' berarti...",
        "options": [
            "Pengunduran diri",
            "Promosi (Naik Jabatan)",
            "Bonus",
            "Hukuman"
        ],
        "correctAnswer": "Promosi (Naik Jabatan)",
        "explanation": "تَرْقِيَةٌ (Tarqiyah) adalah masdar yang berarti promosi atau kenaikan pangkat."
    },
    {
        "id": "q15",
        "type": "multiple-choice",
        "question": "Lengkapi kalimat: 'قَدَّمْتُ ... إِلَى الْمُدِيرِ' (Saya mengajukan pengunduran diri kepada manajer)",
        "options": [
            "اسْتِقَالَتِي",
            "مُقَابَلَتِي",
            "عَقْدِي",
            "رَاتِبِي"
        ],
        "correctAnswer": "اسْتِقَالَتِي",
        "explanation": "اسْتِقَالَةٌ (Istiqaalah) artinya pengunduran diri (resign)."
    },
    {
        "id": "q16",
        "type": "multiple-choice",
        "question": "Kata 'مُدِيرُ الْمَوَارِدِ الْبَشَرِيَّةِ' merujuk kepada...",
        "options": [
            "Manajer Pemasaran",
            "Manajer Keuangan",
            "Manajer HRD",
            "Direktur Utama"
        ],
        "correctAnswer": "Manajer HRD",
        "explanation": "الْمَوَارِدِ الْبَشَرِيَّةِ (Al-Mawaarid Al-Basyariyyah) berarti Sumber Daya Manusia (HRD)."
    },
    {
        "id": "q17",
        "type": "multiple-choice",
        "question": "Apa arti 'مُحَاسِبٌ'?",
        "options": [
            "Akuntan",
            "Insinyur",
            "Dokter",
            "Guru"
        ],
        "correctAnswer": "Akuntan",
        "explanation": "مُحَاسِبٌ (Muhaasib) adalah Isim Fa'il untuk profesi Akuntan (penghitung)."
    },
    {
        "id": "q18",
        "type": "multiple-choice",
        "question": "Terjemahkan: 'Insinyur komputer'",
        "options": [
            "مُهَنْدِسُ حَاسُوبٍ",
            "طَبِيبُ حَاسُوبٍ",
            "مُدَرِّسُ حَاسُوبٍ",
            "مُدِيرُ حَاسُوبٍ"
        ],
        "correctAnswer": "مُهَنْدِسُ حَاسُوبٍ",
        "explanation": "مُهَنْدِسٌ (Muhandis) adalah Insinyur. حَاسُوبٍ (Haasuub) adalah komputer."
    },
    {
        "id": "q19",
        "type": "multiple-choice",
        "question": "Kata 'اجْتِمَاعٌ' berarti...",
        "options": [
            "Liburan",
            "Rapat / Pertemuan",
            "Gaji",
            "Wawancara"
        ],
        "correctAnswer": "Rapat / Pertemuan",
        "explanation": "اجْتِمَاعٌ (Ijtimaa') adalah masdar dari Ijtama'a yang berarti rapat/berkumpul."
    },
    {
        "id": "q20",
        "type": "multiple-choice",
        "question": "Bentuk masdar (pola Ifti'aal) dari kata 'اجْتَمَعَ' (berkumpul) adalah...",
        "options": [
            "جَمَاعَةٌ",
            "جَمْعٌ",
            "اجْتِمَاعٌ",
            "مَجْمُوعَةٌ"
        ],
        "correctAnswer": "اجْتِمَاعٌ",
        "explanation": "Fi'il Ifta'ala (اجْتَمَعَ) masdarnya Ifti'aal (اجْتِمَاعٌ)."
    },
    {
        "id": "q21",
        "type": "multiple-choice",
        "question": "Manakah yang berarti 'Laporan'?",
        "options": [
            "تَقْرِيرٌ",
            "تَوْقِيعٌ",
            "تَوْظِيفٌ",
            "تَرْقِيَةٌ"
        ],
        "correctAnswer": "تَقْرِيرٌ",
        "explanation": "تَقْرِيرٌ (Taqriir) berarti laporan. Masdar dari Qarrara."
    },
    {
        "id": "q22",
        "type": "multiple-choice",
        "question": "Apa arti 'إِجَازَةٌ سَنَوِيَّةٌ'?",
        "options": [
            "Kontrak tahunan",
            "Gaji tahunan",
            "Cuti tahunan",
            "Bonus tahunan"
        ],
        "correctAnswer": "Cuti tahunan",
        "explanation": "إِجَازَةٌ (Ijaazah) artinya cuti/libur, dan سَنَوِيَّةٌ (Sanawiyyah) artinya tahunan."
    },
    {
        "id": "q23",
        "type": "multiple-choice",
        "question": "Manakah yang berarti 'Bonus / Hadiah'?",
        "options": [
            "مُكَافَأَةٌ",
            "مُفَاوَضَةٌ",
            "مُقَابَلَةٌ",
            "مِهْنَةٌ"
        ],
        "correctAnswer": "مُكَافَأَةٌ",
        "explanation": "مُكَافَأَةٌ (Mukaafa'ah) berarti kompensasi, hadiah, atau bonus."
    },
    {
        "id": "q24",
        "type": "multiple-choice",
        "question": "Kata 'مُفَاوَضَةٌ' berarti...",
        "options": [
            "Negosiasi",
            "Tanda Tangan",
            "Cuti",
            "Rapat"
        ],
        "correctAnswer": "Negosiasi",
        "explanation": "مُفَاوَضَةٌ (Mufaawadhah) berarti negosiasi/perundingan."
    },
    {
        "id": "q25",
        "type": "multiple-choice",
        "question": "Terjemahkan: 'Tanda tangan manajer'",
        "options": [
            "تَوْقِيعُ الْمُدِيرِ",
            "تَقْرِيرُ الْمُدِيرِ",
            "عَقْدُ الْمُدِيرِ",
            "طَلَبُ الْمُدِيرِ"
        ],
        "correctAnswer": "تَوْقِيعُ الْمُدِيرِ",
        "explanation": "تَوْقِيعٌ (Tawqii') berarti tanda tangan."
    },
    {
        "id": "q26",
        "type": "multiple-choice",
        "question": "Apa arti kata 'تَخَصُّصٌ'?",
        "options": [
            "Jurusan/Spesialisasi",
            "Pengalaman",
            "Ijazah",
            "Pekerjaan"
        ],
        "correctAnswer": "Jurusan/Spesialisasi",
        "explanation": "تَطَخَصُّصٌ (Takhasshus) berarti spesialisasi atau jurusan akademik/karir."
    },
    {
        "id": "q27",
        "type": "multiple-choice",
        "question": "Lengkapi: 'أَنَا أَعْمَلُ فِي ... كَبِيرَةٍ' (Saya bekerja di sebuah perusahaan besar)",
        "options": [
            "مَكْتَبٍ",
            "شَرِكَةٍ",
            "مُسْتَشْفَى",
            "جَامِعَةٍ"
        ],
        "correctAnswer": "شَرِكَةٍ",
        "explanation": "شَرِكَةٍ (Syarikatin) adalah perusahaan (muannats) sehingga sifatnya juga muannats (kabiiratin)."
    },
    {
        "id": "q28",
        "type": "multiple-choice",
        "question": "Bentuk masdar (pola Istif'aal) dari kata 'اسْتَقَالَ' (resign) adalah...",
        "options": [
            "إِقَالَةٌ",
            "اسْتِقَالَةٌ",
            "مُقَالَاتٌ",
            "تَقَايُلٌ"
        ],
        "correctAnswer": "اسْتِقَالَةٌ",
        "explanation": "Masdar dari Istafaala (اسْتَقَالَ) adalah Istifaalah (اسْتِقَالَةٌ)."
    },
    {
        "id": "q29",
        "type": "multiple-choice",
        "question": "Kata 'مِهْنَةٌ' bersinonim paling dekat dengan...",
        "options": [
            "وَظِيفَةٌ / عَمَلٌ",
            "رَاتِبٌ",
            "إِجَازَةٌ",
            "شَهَادَةٌ"
        ],
        "correctAnswer": "وَظِيفَةٌ / عَمَلٌ",
        "explanation": "مِهْنَةٌ (Mihnah) berarti profesi atau pekerjaan, sinonim dengan Wazhiifah atau 'Amal."
    },
    {
        "id": "q30",
        "type": "multiple-choice",
        "question": "Lengkapi kalimat dialog: 'مَا هُوَ الرَّاتِبُ الَّذِي ...؟' (Berapa gaji yang kamu harapkan?)",
        "options": [
            "تَتَوَقَّعُهُ",
            "تَكْتُبُهُ",
            "تَقْرَؤُهُ",
            "تَرْفُضُهُ"
        ],
        "correctAnswer": "تَتَوَقَّعُهُ",
        "explanation": "تَتَوَقَّعُهُ (Tatawaqqa'uhu) berasal dari fi'il Tawaqqa'a (mengharapkan/memprediksi)."
    }
    ]
  }
};
