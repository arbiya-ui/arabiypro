import { Lesson } from "../../types";

export const l1_2: Lesson = {
  id: "l1_2",
  title: "Bab 2: Al-Hawiyyah (Identitas Diri)",
  titleAr: "الْهُوِيَّةُ",
  description: "Memperkenalkan diri dengan lengkap dalam Bahasa Arab — nama, asal, profesi, dan status.",
  xpReward: 1000,
  isCompleted: false,
  isLocked: false,
  type: "comprehensive",
  content: {
    introduction: "Membangun identitas yang kuat (الْهُوِيَّةُ) adalah pilar utama dalam pergaulan bahasa Arab. Di Bab 2 ini, Anda tidak sekadar belajar menghafal nama dan profesi, melainkan sedang merajut identitas lengkap—mulai dari diri sendiri, keluarga, hingga rekan profesional—yang akan mendefinisikan siapa Anda di mata dunia. Jika Anda merasa belajar bahasa baru itu berat, bersiaplah untuk takjub, karena bahasa Arab sangatlah sistematis dan mudah ditebak polanya!\n\nMenguasai bahasa Arab melampaui sekadar hafalan kosakata; ini tentang menyelami kaidah 'Keselarasan Gender' (Mudzakkar & Muannats) yang menjiwai setiap detak pembicaraan. Anda akan dilatih menguasai kosakata inti dan variasi kalimat yang dirancang untuk melatih insting bahasa Anda secara natural tanpa harus berpikir keras. Ini adalah tentang menanamkan kepercayaan diri, di mana setiap kalimat yang Anda ucapkan adalah pernyataan jati diri yang kokoh, penuh kebanggaan, dan bukti betapa mudahnya menaklukkan bahasa Al-Qur'an ini.",
    introTitle: "Pilar Identitas: Merajut Diri dan Relasi dalam Bahasa Arab",
    introVerse: {
      ar: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا",
      translation: "Hai manusia, sesungguhnya Kami menciptakan kamu dari seorang laki-laki dan seorang perempuan dan menjadikan kamu berbangsa-bangsa dan bersuku-suku supaya kamu saling kenal-mengenal. (QS. Al-Hujurat: 13)"
    },
    introBadges: [
      { icon: "🗣️", text: "EKSPRESI DIRI (Mampu memperkenalkan diri dan orang lain)" },
      { icon: "⚖️", text: "HARMONI GENDER (Presisi menggunakan Mudzakkar & Muannats)" }
    ],
    totalSentencesDisplay: "300 Kalimat Progresif",
    tips: [
      {
        title: "Transformasi Profesi",
        content: "Cukup tambahkan Ta Marbuthah (ة) di akhir profesi laki-laki untuk mengubahnya menjadi profesi perempuan. Contoh: Mudarris (guru pria) menjadi Mudarrisah (guru wanita)!"
      },
      {
        title: "Kata Ganti 'Ana' yang Netral",
        content: "Berbeda dengan profesi, kata ganti 'Ana' (saya) bersifat netral. Baik pria maupun wanita menggunakan kata yang sama tanpa perubahan bentuk sedikitpun."
      },
      {
        title: "Struktur Kalimat Sempurna",
        content: "Dalam bahasa Arab, Anda bisa membuat kalimat sempurna hanya dengan menggabungkan 'Ana' + [Nama Profesi]. Sesimpel itu untuk mulai berbicara!"
      }
    ],
    cards: [
      {
        id: "l1_2_c1",
        wordAr: "أَنَا",
        translation: "Saya",
        category: "Kata Ganti",
        description: "Kata ganti orang pertama tunggal.",
        logicBox: "Dhamir ini bersifat universal untuk laki-laki maupun perempuan.",
        examples: [
          { ar: "أَنَا طَالِبٌ", translation: "Saya siswa (L)", grammarNote: "Mubtada 'Ana' + Khabar mudzakkar.", analysis: "Mubtada 'Ana' + Khabar mudzakkar." },
          { ar: "أَنَا مُعَلِّمَةٌ", translation: "Saya guru (P)", grammarNote: "Mubtada 'Ana' + Khabar muannats.", analysis: "Mubtada 'Ana' + Khabar muannats." },
          { ar: "أَنَا مِنْ إِنْدُونِيسِيَا", translation: "Saya dari Indonesia", grammarNote: "Mubtada 'Ana' + Syibhul Jumlah.", analysis: "Mubtada 'Ana' + Syibhul Jumlah." },
          { ar: "أَنَا مُسْلِمٌ", translation: "Saya muslim", grammarNote: "Mubtada 'Ana' + Khabar mudzakkar.", analysis: "Mubtada 'Ana' + Khabar mudzakkar." },
          { ar: "أَنَا مُتَزَوِّجٌ", translation: "Saya sudah menikah", grammarNote: "Mubtada 'Ana' + Khabar mudzakkar.", analysis: "Mubtada 'Ana' + Khabar mudzakkar." },
          { ar: "أَنَا أَعْزَبُ", translation: "Saya lajang (L)", grammarNote: "Mubtada 'Ana' + Khabar mudzakkar (ghairu munsharif).", analysis: "Mubtada 'Ana' + Khabar mudzakkar (ghairu munsharif)." },
          { ar: "أَنَا عَزْبَاءُ", translation: "Saya lajang (P)", grammarNote: "Mubtada 'Ana' + Khabar muannats (ghairu munsharif).", analysis: "Mubtada 'Ana' + Khabar muannats (ghairu munsharif)." },
          { ar: "اِسْمِي أَحْمَدُ وَأَنَا مُعَلِّمٌ", translation: "Namaku Ahmad dan saya guru", grammarNote: "Mubtada 'Ana' + Khabar mudzakkar.", analysis: "Mubtada 'Ana' + Khabar mudzakkar." },
          { ar: "أَنَا طَبِيبٌ جَدِيدٌ", translation: "Saya dokter baru", grammarNote: "Mubtada 'Ana' + Khabar + Sifat mudzakkar.", analysis: "Mubtada 'Ana' + Khabar + Sifat mudzakkar." },
          { ar: "أَنَا فِي الْمَدِينَةِ", translation: "Saya di kota", grammarNote: "Mubtada 'Ana' + Syibhul Jumlah keterangan tempat.", analysis: "Mubtada 'Ana' + Syibhul Jumlah keterangan tempat." }
        ]
      },
      {
        id: "l1_2_c2",
        wordAr: "أَنْتَ",
        translation: "Kamu (Laki-laki)",
        category: "Kata Ganti",
        description: "Kata ganti orang kedua tunggal untuk laki-laki.",
        logicBox: "Dhamir ini khusus untuk laki-laki, ditandai dengan harakat fathah di akhir.",
        examples: [
          { ar: "أَنْتَ طَالِبٌ مُجْتَهِدٌ", translation: "Kamu adalah siswa yang rajin", grammarNote: "Mubtada 'Anta' + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada 'Anta' + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "أَنْتَ مُعَلِّمٌ رَائِعٌ", translation: "Kamu adalah guru (L) yang luar biasa", grammarNote: "Mubtada 'Anta' + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada 'Anta' + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "هَلْ أَنْتَ طَبِيبٌ؟", translation: "Apakah kamu seorang dokter?", grammarNote: "Partikel tanya 'Hal' + Mubtada 'Anta' + Khabar mudzakkar.", analysis: "Partikel tanya 'Hal' + Mubtada 'Anta' + Khabar mudzakkar." },
          { ar: "أَنْتَ مِنْ إِنْدُونِيسِيَا", translation: "Kamu berasal dari Indonesia", grammarNote: "Mubtada 'Anta' + Khabar frasa preposisi.", analysis: "Mubtada 'Anta' + Khabar frasa preposisi." },
          { ar: "أَنْتَ مُسْلِمٌ صَالِحٌ", translation: "Kamu adalah seorang muslim yang saleh", grammarNote: "Mubtada 'Anta' + Khabar + Sifat mudzakkar.", analysis: "Mubtada 'Anta' + Khabar + Sifat mudzakkar." },
          { ar: "أَنْتَ أَعْزَبُ الْآنَ", translation: "Kamu lajang sekarang", grammarNote: "Mubtada 'Anta' + Khabar + Keterangan waktu.", analysis: "Mubtada 'Anta' + Khabar + Keterangan waktu." },
          { ar: "أَنْتَ تَاجِرٌ أَمِينٌ", translation: "Kamu adalah pedagang yang amanah", grammarNote: "Mubtada 'Anta' + Khabar + Sifat mudzakkar.", analysis: "Mubtada 'Anta' + Khabar + Sifat mudzakkar." },
          { ar: "أَنْتَ مُوَظَّفٌ نَشِيطٌ", translation: "Kamu adalah pegawai yang aktif", grammarNote: "Mubtada 'Anta' + Khabar + Sifat mudzakkar.", analysis: "Mubtada 'Anta' + Khabar + Sifat mudzakkar." },
          { ar: "أَنْتَ مُهَنْدِسٌ بَارِعٌ", translation: "Kamu adalah insinyur yang mahir", grammarNote: "Mubtada 'Anta' + Khabar + Sifat mudzakkar.", analysis: "Mubtada 'Anta' + Khabar + Sifat mudzakkar." },
          { ar: "أَنْتَ فِي الْعَاصِمَةِ", translation: "Kamu berada di ibukota", grammarNote: "Mubtada 'Anta' + Syibhul Jumlah.", analysis: "Mubtada 'Anta' + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_2_c3",
        wordAr: "أَنْتِ",
        translation: "Kamu (Perempuan)",
        category: "Kata Ganti",
        description: "Kata ganti orang kedua tunggal untuk perempuan.",
        logicBox: "Dhamir ini khusus untuk perempuan, ditandai dengan harakat kasrah di akhir.",
        examples: [
          { ar: "أَنْتِ طَالِبَةٌ ذَكِيَّةٌ", translation: "Kamu adalah siswi yang cerdas", grammarNote: "Mubtada 'Anti' + Khabar muannats + Sifat muannats.", analysis: "Mubtada 'Anti' + Khabar muannats + Sifat muannats." },
          { ar: "أَنْتِ مُعَلِّمَةٌ رَحِيمَةٌ", translation: "Kamu adalah guru (P) yang penyayang", grammarNote: "Mubtada 'Anti' + Khabar muannats + Sifat muannats.", analysis: "Mubtada 'Anti' + Khabar muannats + Sifat muannats." },
          { ar: "هَلْ أَنْتِ طَبِيبَةٌ؟", translation: "Apakah kamu seorang dokter (P)?", grammarNote: "Mubtada 'Anti' + Khabar muannats.", analysis: "Mubtada 'Anti' + Khabar muannats." },
          { ar: "أَنْتِ جِنْسِيَّتُكِ إِنْدُونِيسِيَّةٌ", translation: "Kamu berkewarganegaraan Indonesia", grammarNote: "Mubtada 'Anti' + Jumlah Ismiyyah khabar.", analysis: "Mubtada 'Anti' + Jumlah Ismiyyah khabar." },
          { ar: "أَنْتِ مُسْلِمَةٌ صَالِحَةٌ", translation: "Kamu adalah seorang muslimah yang saleha", grammarNote: "Mubtada 'Anti' + Khabar muannats + Sifat muannats.", analysis: "Mubtada 'Anti' + Khabar muannats + Sifat muannats." },
          { ar: "أَنْتِ عَزْبَاءُ جَمِيلَةٌ", translation: "Kamu adalah lajang (P) yang cantik", grammarNote: "Mubtada 'Anti' + Khabar muannats + Sifat muannats.", analysis: "Mubtada 'Anti' + Khabar muannats + Sifat muannats." },
          { ar: "أَنْتِ تَاجِرَةٌ نَاجِحَةٌ", translation: "Kamu adalah pedagang (P) yang sukses", grammarNote: "Mubtada 'Anti' + Khabar muannats + Sifat muannats.", analysis: "Mubtada 'Anti' + Khabar muannats + Sifat muannats." },
          { ar: "أَنْتِ مُوَظَّفَةٌ مُجْتَهِدَةٌ", translation: "Kamu adalah pegawai (P) yang rajin", grammarNote: "Mubtada 'Anti' + Khabar muannats + Sifat muannats.", analysis: "Mubtada 'Anti' + Khabar muannats + Sifat muannats." },
          { ar: "أَنْتِ فِي الْمَدِينَةِ الْآنَ", translation: "Kamu berada di kota sekarang", grammarNote: "Mubtada 'Anti' + Syibhul Jumlah + Keterangan waktu.", analysis: "Mubtada 'Anti' + Syibhul Jumlah + Keterangan waktu." },
          { ar: "أَنْتِ سَعِيدَةٌ جِدًّا", translation: "Kamu sangat bahagia", grammarNote: "Mubtada 'Anti' + Khabar muannats.", analysis: "Mubtada 'Anti' + Khabar muannats." }
        ]
      },
      {
        id: "l1_2_c4",
        wordAr: "هُوَ",
        translation: "Dia (Laki-laki)",
        category: "Kata Ganti",
        description: "Kata ganti orang ketiga tunggal untuk laki-laki.",
        logicBox: "Dhamir ini digunakan untuk membicarakan seorang laki-laki.",
        examples: [
          { ar: "هُوَ مُعَلِّمٌ جَدِيدٌ", translation: "Dia adalah guru baru", grammarNote: "Mubtada 'Huwa' + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada 'Huwa' + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "هُوَ طَالِبٌ فِي الْمَدْرَسَةِ", translation: "Dia adalah seorang siswa di sekolah", grammarNote: "Mubtada 'Huwa' + Khabar mudzakkar + Syibhul Jumlah.", analysis: "Mubtada 'Huwa' + Khabar mudzakkar + Syibhul Jumlah." },
          { ar: "هُوَ طَبِيبٌ مَاهِرٌ", translation: "Dia adalah dokter yang mahir", grammarNote: "Mubtada 'Huwa' + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada 'Huwa' + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "هُوَ مُسْلِمٌ مُتَّقٍ", translation: "Dia adalah seorang muslim yang bertakwa", grammarNote: "Mubtada 'Huwa' + Khabar + Sifat mudzakkar.", analysis: "Mubtada 'Huwa' + Khabar + Sifat mudzakkar." },
          { ar: "هُوَ مُتَزَوِّجٌ هُنَا", translation: "Dia sudah menikah di sini", grammarNote: "Mubtada 'Huwa' + Khabar mudzakkar + Keterangan tempat.", analysis: "Mubtada 'Huwa' + Khabar mudzakkar + Keterangan tempat." },
          { ar: "هُوَ أَعْزَبُ جَمِيلٌ", translation: "Dia lajang yang tampan", grammarNote: "Mubtada 'Huwa' + Khabar + Sifat mudzakkar.", analysis: "Mubtada 'Huwa' + Khabar + Sifat mudzakkar." },
          { ar: "هُوَ مُهَنْدِسٌ فِي الْعَاصِمَةِ", translation: "Dia adalah insinyur di ibukota", grammarNote: "Mubtada 'Huwa' + Khabar mudzakkar + Syibhul Jumlah.", analysis: "Mubtada 'Huwa' + Khabar mudzakkar + Syibhul Jumlah." },
          { ar: "هُوَ تَاجِرٌ فِي الدُّكَّانِ", translation: "Dia adalah pedagang di toko", grammarNote: "Mubtada 'Huwa' + Khabar + Syibhul Jumlah.", analysis: "Mubtada 'Huwa' + Khabar + Syibhul Jumlah." },
          { ar: "هُوَ فَلَّاحٌ نَشِيطٌ", translation: "Dia adalah petani yang rajin", grammarNote: "Mubtada 'Huwa' + Khabar + Sifat mudzakkar.", analysis: "Mubtada 'Huwa' + Khabar + Sifat mudzakkar." },
          { ar: "هُوَ مِنْ بَلَدٍ كَبِيرٍ", translation: "Dia berasal dari negara yang besar", grammarNote: "Mubtada 'Huwa' + Syibhul Jumlah + Sifat.", analysis: "Mubtada 'Huwa' + Syibhul Jumlah + Sifat." }
        ]
      },
      {
        id: "l1_2_c5",
        wordAr: "هِيَ",
        translation: "Dia (Perempuan)",
        category: "Kata Ganti",
        description: "Kata ganti orang ketiga tunggal untuk perempuan.",
        logicBox: "Dhamir ini digunakan untuk membicarakan seorang perempuan.",
        examples: [
          { ar: "هِيَ مُعَلِّمَةٌ جَدِيدَةٌ", translation: "Dia adalah guru (P) baru", grammarNote: "Mubtada 'Hiya' + Khabar muannats + Sifat muannats.", analysis: "Mubtada 'Hiya' + Khabar muannats + Sifat muannats." },
          { ar: "هِيَ طَالِبَةٌ فِي الْفَصْلِ", translation: "Dia adalah siswi di kelas", grammarNote: "Mubtada 'Hiya' + Khabar muannats + Syibhul Jumlah.", analysis: "Mubtada 'Hiya' + Khabar muannats + Syibhul Jumlah." },
          { ar: "هِيَ طَبِيبَةٌ مَاهِرَةٌ", translation: "Dia adalah dokter (P) yang mahir", grammarNote: "Mubtada 'Hiya' + Khabar muannats + Sifat muannats.", analysis: "Mubtada 'Hiya' + Khabar muannats + Sifat muannats." },
          { ar: "هِيَ مُسْلِمَةٌ مُتَّقِيَّةٌ", translation: "Dia adalah seorang muslimah yang bertakwa", grammarNote: "Mubtada 'Hiya' + Khabar + Sifat muannats.", analysis: "Mubtada 'Hiya' + Khabar + Sifat muannats." },
          { ar: "هِيَ مُتَزَوِّجَةٌ سَعِيدَةٌ", translation: "Dia adalah seorang istri yang bahagia", grammarNote: "Mubtada 'Hiya' + Khabar + Sifat muannats.", analysis: "Mubtada 'Hiya' + Khabar + Sifat muannats." },
          { ar: "هِيَ عَزْبَاءُ ذَكِيَّةٌ", translation: "Dia lajang (P) yang cerdas", grammarNote: "Mubtada 'Hiya' + Khabar muannats + Sifat muannats.", analysis: "Mubtada 'Hiya' + Khabar muannats + Sifat muannats." },
          { ar: "هِيَ مُوَظَّفَةٌ فِي الْمَكْتَبِ", translation: "Dia adalah pegawai (P) di kantor", grammarNote: "Mubtada 'Hiya' + Khabar muannats + Syibhul Jumlah.", analysis: "Mubtada 'Hiya' + Khabar muannats + Syibhul Jumlah." },
          { ar: "هِيَ تَاجِرَةٌ فِي السُّوقِ", translation: "Dia adalah pedagang (P) di pasar", grammarNote: "Mubtada 'Hiya' + Khabar muannats + Syibhul Jumlah.", analysis: "Mubtada 'Hiya' + Khabar muannats + Syibhul Jumlah." },
          { ar: "هِيَ فَلَّاحَةٌ فِي الْقَرْيَةِ", translation: "Dia adalah petani (P) di desa", grammarNote: "Mubtada 'Hiya' + Khabar muannats + Syibhul Jumlah.", analysis: "Mubtada 'Hiya' + Khabar muannats + Syibhul Jumlah." },
          { ar: "هِيَ مِنْ مَدِينَةِ جَاكَرْتَا", translation: "Dia berasal dari kota Jakarta", grammarNote: "Mubtada 'Hiya' + Syibhul Jumlah.", analysis: "Mubtada 'Hiya' + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_2_c6",
        wordAr: "اِسْمٌ",
        translation: "Nama",
        category: "Identitas",
        description: "Kata benda yang merujuk pada nama seseorang atau benda.",
        logicBox: "Kata benda ini bergender mudzakkar. Bentuk kepemilikan ditempeli dhamir muttashil.",
        examples: [
          { ar: "اِسْمِيْ زَيْدٌ", translation: "Namaku Zayd", grammarNote: "Mubtada Ism + ya mutakallim + Khabar mudzakkar.", analysis: "Mubtada Ism + ya mutakallim + Khabar mudzakkar." },
          { ar: "مَا اسْمُكَ؟", translation: "Siapa namamu? (L)", grammarNote: "Tanya 'Maa' + Mubtada 'Ismuka' (idhafah).", analysis: "Tanya 'Maa' + Mubtada 'Ismuka' (idhafah)." },
          { ar: "مَا اسْمُكِ؟", translation: "Siapa namamu? (P)", grammarNote: "Tanya 'Maa' + Mubtada 'Ismuki' (idhafah).", analysis: "Tanya 'Maa' + Mubtada 'Ismuki' (idhafah)." },
          { ar: "هَذَا اِسْمٌ جَمِيلٌ", translation: "Ini adalah nama yang bagus", grammarNote: "Mubtada 'Hadza' + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada 'Hadza' + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "اِسْمُهُ خَالِدٌ", translation: "Namanya adalah Khalid", grammarNote: "Mubtada 'Ismuhu' + Khabar mudzakkar.", analysis: "Mubtada 'Ismuhu' + Khabar mudzakkar." },
          { ar: "اِسْمُهَا فَاطِمَةُ", translation: "Namanya adalah Fatimah", grammarNote: "Mubtada 'Ismuhaa' + Khabar muannats (ghairu munsharif).", analysis: "Mubtada 'Ismuhaa' + Khabar muannats (ghairu munsharif)." },
          { ar: "اِسْمُ الْبَلَدِ إِنْدُونِيسِيَا", translation: "Nama negara ini adalah Indonesia", grammarNote: "Mubtada 'Ismul baladi' (idhafah) + Khabar.", analysis: "Mubtada 'Ismul baladi' (idhafah) + Khabar." },
          { ar: "هَلْ هَذَا اِسْمُكَ؟", translation: "Apakah ini namamu?", grammarNote: "Tanya + Mubtada + Khabar (idhafah).", analysis: "Tanya + Mubtada + Khabar (idhafah)." },
          { ar: "اِسْمِيْ مَكْتُوبٌ هُنَا", translation: "Namaku tertulis di sini", grammarNote: "Mubtada 'Ismiy' + Khabar mudzakkar + Keterangan.", analysis: "Mubtada 'Ismiy' + Khabar mudzakkar + Keterangan." },
          { ar: "كَتَبْتُ اِسْمِيْ فِي الْوَرَقَةِ", translation: "Aku menulis namaku di kertas", grammarNote: "Fi'il-Fa'il 'Katabtu' + Maf'ul bih 'Ismiy' + Syibhul Jumlah.", analysis: "Fi'il-Fa'il 'Katabtu' + Maf'ul bih 'Ismiy' + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_2_c7",
        wordAr: "عُمْرٌ",
        translation: "Umur",
        category: "Identitas",
        description: "Kata benda yang menyatakan usia atau umur seseorang.",
        logicBox: "Kata benda ini bergender mudzakkar. Ditanyakan dengan partikel 'Kam'.",
        examples: [
          { ar: "عُمْرِيْ عِشْرُونَ سَنَةً", translation: "Umurku dua puluh tahun", grammarNote: "Mubtada 'Umriy' + Khabar bilangan.", analysis: "Mubtada 'Umriy' + Khabar bilangan." },
          { ar: "كَمْ عُمْرُكَ؟", translation: "Berapa umurmu? (L)", grammarNote: "Tanya 'Kam' + Mubtada 'Umruka' (idhafah).", analysis: "Tanya 'Kam' + Mubtada 'Umruka' (idhafah)." },
          { ar: "كَمْ عُمْرُكِ؟", translation: "Berapa umurmu? (P)", grammarNote: "Tanya 'Kam' + Mubtada 'Umruki' (idhafah).", analysis: "Tanya 'Kam' + Mubtada 'Umruki' (idhafah)." },
          { ar: "عُمْرُهُ خَمْسُ سَنَوَاتٍ", translation: "Umurnya lima tahun", grammarNote: "Mubtada 'Umruhu' + Khabar bilangan.", analysis: "Mubtada 'Umruhu' + Khabar bilangan." },
          { ar: "عُمْرُهَا ثَلَاثُونَ سَنَةً", translation: "Umurnya tiga puluh tahun", grammarNote: "Mubtada 'Umruhaa' + Khabar bilangan.", analysis: "Mubtada 'Umruhaa' + Khabar bilangan." },
          { ar: "هَذَا عُمْرٌ طَوِيلٌ", translation: "Ini adalah umur yang panjang", grammarNote: "Mubtada 'Hadza' + Khabar mudzakkar + Sifat.", analysis: "Mubtada 'Hadza' + Khabar mudzakkar + Sifat." },
          { ar: "الْعُمْرُ يَجْرِي سَرِيعًا", translation: "Umur berjalan dengan cepat", grammarNote: "Mubtada 'Al-Umru' + Khabar kalimat fi'liyyah.", analysis: "Mubtada 'Al-Umru' + Khabar kalimat fi'liyyah." },
          { ar: "هَلْ عُمْرُكَ عِشْرُونَ سَنَةً؟", translation: "Apakah umurmu dua puluh tahun?", grammarNote: "Tanya + Mubtada 'Umruka' + Khabar.", analysis: "Tanya + Mubtada 'Umruka' + Khabar." },
          { ar: "كَتَبْتُ عُمْرِيْ فِي الْإِسْتِمَارَةِ", translation: "Aku menulis umurku di formulir", grammarNote: "Fi'il-Fa'il 'Katabtu' + Maf'ul bih 'Umriy' + Syibhul Jumlah.", analysis: "Fi'il-Fa'il 'Katabtu' + Maf'ul bih 'Umriy' + Syibhul Jumlah." },
          { ar: "عُمْرُ الطَّالِبِ صَغِيرٌ", translation: "Umur siswa itu masih muda", grammarNote: "Mubtada 'Umrut thaalibi' (idhafah) + Khabar mudzakkar.", analysis: "Mubtada 'Umrut thaalibi' (idhafah) + Khabar mudzakkar." }
        ]
      },
      {
        id: "l1_2_c8",
        wordAr: "جِنْسِيَّةٌ",
        translation: "Kewarganegaraan",
        category: "Identitas",
        description: "Kata benda yang menyatakan asal kebangsaan atau kewarganegaraan.",
        logicBox: "Kata benda ini bergender muannats karena berakhiran Ta Marbuthah.",
        examples: [
          { ar: "جِنْسِيَّتِيْ إِنْدُونِيسِيَّةٌ", translation: "Kewarganegaraanku adalah Indonesia", grammarNote: "Mubtada muannats 'Jinsiyyatiy' + Khabar muannats.", analysis: "Mubtada muannats 'Jinsiyyatiy' + Khabar muannats." },
          { ar: "مَا جِنْسِيَّتُكَ؟", translation: "Apa kewarganegaraanmu? (L)", grammarNote: "Tanya 'Maa' + Mubtada 'Jinsiyyatuka' (muannats).", analysis: "Tanya 'Maa' + Mubtada 'Jinsiyyatuka' (muannats)." },
          { ar: "مَا جِنْسِيَّتُكِ؟", translation: "Apa kewarganegaraanmu? (P)", grammarNote: "Tanya 'Maa' + Mubtada 'Jinsiyyatuki' (muannats).", analysis: "Tanya 'Maa' + Mubtada 'Jinsiyyatuki' (muannats)." },
          { ar: "جِنْسِيَّتُهُ سُعُودِيَّةٌ", translation: "Kewarganegaraannya adalah Arab Saudi", grammarNote: "Mubtada muannats 'Jinsiyyatuhu' + Khabar muannats.", analysis: "Mubtada muannats 'Jinsiyyatuhu' + Khabar muannats." },
          { ar: "جِنْسِيَّتُهَا مِصْرِيَّةٌ", translation: "Kewarganegaraannya adalah Mesir", grammarNote: "Mubtada muannats 'Jinsiyyatuhaa' + Khabar muannats.", analysis: "Mubtada muannats 'Jinsiyyatuhaa' + Khabar muannats." },
          { ar: "هَذِهِ جِنْسِيَّةٌ جَدِيدَةٌ", translation: "Ini adalah kewarganegaraan baru", grammarNote: "Mubtada 'Hadzihi' + Khabar muannats + Sifat muannats.", analysis: "Mubtada 'Hadzihi' + Khabar muannats + Sifat muannats." },
          { ar: "هَلْ جِنْسِيَّتُكَ إِنْدُونِيسِيَّةٌ؟", translation: "Apakah kewarganegaraanmu Indonesia?", grammarNote: "Tanya + Mubtada + Khabar muannats.", analysis: "Tanya + Mubtada + Khabar muannats." },
          { ar: "جِنْسِيَّةُ زَوْجَتِيْ مِصْرِيَّةٌ", translation: "Kewarganegaraan istriku adalah Mesir", grammarNote: "Mubtada 'Jinsiyyatu zawjatiy' (idhafah) + Khabar muannats.", analysis: "Mubtada 'Jinsiyyatu zawjatiy' (idhafah) + Khabar muannats." },
          { ar: "كَتَبْتُ الْجِنْسِيَّةَ فِي الْوَرَقَةِ", translation: "Aku menulis kewarganegaraan di kertas", grammarNote: "Fi'il-Fa'il + Maf'ul bih 'Al-Jinsiyyata' + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih 'Al-Jinsiyyata' + Syibhul Jumlah." },
          { ar: "الْجِنْسِيَّةُ تُحَدِّدُ الْقَوَانِينَ", translation: "Kewarganegaraan menentukan hukum", grammarNote: "Mubtada muannats + Khabar kalimat fi'liyyah.", analysis: "Mubtada muannats + Khabar kalimat fi'liyyah." }
        ]
      },
      {
        id: "l1_2_c9",
        wordAr: "عُنْوَانٌ",
        translation: "Alamat",
        category: "Identitas",
        description: "Kata benda yang menyatakan alamat rumah atau tempat tinggal.",
        logicBox: "Kata benda ini bergender mudzakkar.",
        examples: [
          { ar: "عُنْوَانِيْ فِيْ جَاكَرْتَا", translation: "Alamatku di Jakarta", grammarNote: "Mubtada 'Unwaaniy' + Syibhul Jumlah.", analysis: "Mubtada 'Unwaaniy' + Syibhul Jumlah." },
          { ar: "مَا عُنْوَانُكَ؟", translation: "Apa alamatmu? (L)", grammarNote: "Tanya 'Maa' + Mubtada 'Unwaanuka' (mudzakkar).", analysis: "Tanya 'Maa' + Mubtada 'Unwaanuka' (mudzakkar)." },
          { ar: "مَا عُنْوَانُكِ؟", translation: "Apa alamatmu? (P)", grammarNote: "Tanya 'Maa' + Mubtada 'Unwaanuki' (mudzakkar).", analysis: "Tanya 'Maa' + Mubtada 'Unwaanuki' (mudzakkar)." },
          { ar: "هَذَا عُنْوَانٌ قَرِيبٌ", translation: "Ini adalah alamat yang dekat", grammarNote: "Mubtada 'Hadza' + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada 'Hadza' + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "عُنْوَانُه بَعِيدٌ جِدًّا", translation: "Alamatnya sangat jauh", grammarNote: "Mubtada 'Unwaanuhu' + Khabar mudzakkar.", analysis: "Mubtada 'Unwaanuhu' + Khabar mudzakkar." },
          { ar: "عُنْوَانُهَا فِيْ هَذِهِ الشَّارِعِ", translation: "Alamatnya di jalan ini", grammarNote: "Mubtada 'Unwaanuhaa' + Syibhul Jumlah.", analysis: "Mubtada 'Unwaanuhaa' + Syibhul Jumlah." },
          { ar: "هَلْ هَذَا عُنْوَانُ الْمَدْرَسَةِ؟", translation: "Apakah ini alamat sekolah?", grammarNote: "Tanya + Mubtada + Khabar (idhafah).", analysis: "Tanya + Mubtada + Khabar (idhafah)." },
          { ar: "عُنْوَانُ الْبَيْتِ وَاضِحٌ", translation: "Alamat rumah itu sangat jelas", grammarNote: "Mubtada 'Unwaanul bayti' (idhafah) + Khabar mudzakkar.", analysis: "Mubtada 'Unwaanul bayti' (idhafah) + Khabar mudzakkar." },
          { ar: "كَتَبْتُ الْعُنْوَانَ فِي الرِّسَالَةِ", translation: "Aku menulis alamat di surat", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah." },
          { ar: "عُنْوَانُ الطَّبِيبِ مَعْرُوفٌ", translation: "Alamat dokter itu dikenal", grammarNote: "Mubtada 'Unwaanut thabiibi' (idhafah) + Khabar mudzakkar.", analysis: "Mubtada 'Unwaanut thabiibi' (idhafah) + Khabar mudzakkar." }
        ]
      },
      {
        id: "l1_2_c10",
        wordAr: "هَاتِفٌ",
        translation: "Telepon/HP",
        category: "Identitas",
        description: "Kata benda yang menyatakan alat komunikasi telepon atau HP.",
        logicBox: "Kata benda ini bergender mudzakkar.",
        examples: [
          { ar: "هَاتِفِيْ جَدِيدٌ", translation: "HP-ku baru", grammarNote: "Mubtada 'Haatifiy' + Khabar mudzakkar.", analysis: "Mubtada 'Haatifiy' + Khabar mudzakkar." },
          { ar: "مَا رَقْمُ هَاتِفِكَ؟", translation: "Berapa nomor HP-mu? (L)", grammarNote: "Tanya + Mubtada 'Raqmu' (idhafah).", analysis: "Tanya + Mubtada 'Raqmu' (idhafah)." },
          { ar: "مَا رَقْمُ هَاتِفِكِ؟", translation: "Berapa nomor HP-mu? (P)", grammarNote: "Tanya + Mubtada 'Raqmu' (idhafah).", analysis: "Tanya + Mubtada 'Raqmu' (idhafah)." },
          { ar: "هَذَا هَاتِفٌ جَمِيلٌ", translation: "Ini HP yang bagus", grammarNote: "Mubtada + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "هَاتِفُهُ غَالِي الثَّمَنِ", translation: "HP-nya harganya mahal", grammarNote: "Mubtada + Khabar (idhafah).", analysis: "Mubtada + Khabar (idhafah)." },
          { ar: "هَاتِفُهَا رَخِيصٌ جِدًّا", translation: "HP-nya sangat murah", grammarNote: "Mubtada + Khabar mudzakkar + Keterangan.", analysis: "Mubtada + Khabar mudzakkar + Keterangan." },
          { ar: "هَلْ مَعَكَ هَاتِفٌ؟", translation: "Apakah bersamamu ada HP?", grammarNote: "Tanya + Khabar muqaddam + Mubtada muakhkhar.", analysis: "Tanya + Khabar muqaddam + Mubtada muakhkhar." },
          { ar: "هَاتِفُ الْمُعَلِّمِ عَلَى الْمَكْتَبِ", translation: "HP guru ada di atas meja", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah.", analysis: "Mubtada (idhafah) + Syibhul Jumlah." },
          { ar: "أَشْتَرِي هَاتِفًا جَدِيدًا", translation: "Aku membeli HP baru", grammarNote: "Fi'il-Fa'il + Maf'ul bih 'Haatifan' + Sifat mudzakkar.", analysis: "Fi'il-Fa'il + Maf'ul bih 'Haatifan' + Sifat mudzakkar." },
          { ar: "رَنَّ هَاتِفُ خَالِدٍ", translation: "HP Khalid berdering", grammarNote: "Fi'il 'Ranna' + Fa'il 'Haatiful Khaalidin' (idhafah).", analysis: "Fi'il 'Ranna' + Fa'il 'Haatiful Khaalidin' (idhafah)." }
        ]
      },
      {
        id: "l1_2_c11",
        wordAr: "طَالِبٌ",
        translation: "Pelajar (Laki-laki)",
        category: "Profesi",
        description: "Seorang murid atau siswa laki-laki.",
        logicBox: "Kata benda ini bergender mudzakkar. Jamak taksir-nya adalah طُلَّابٌ.",
        examples: [
          { ar: "أَنَا طَالِبٌ جَدِيدٌ", translation: "Saya siswa baru", grammarNote: "Mubtada + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "هُوَ طَالِبٌ فِي الْجَامِعَةِ", translation: "Dia adalah mahasiswa di universitas", grammarNote: "Mubtada + Khabar mudzakkar + Syibhul Jumlah.", analysis: "Mubtada + Khabar mudzakkar + Syibhul Jumlah." },
          { ar: "هَلْ أَنْتَ طَالِبٌ؟", translation: "Apakah kamu seorang siswa?", grammarNote: "Tanya + Mubtada + Khabar mudzakkar.", analysis: "Tanya + Mubtada + Khabar mudzakkar." },
          { ar: "زَيْدٌ طَالِبٌ ذَكِيٌّ", translation: "Zayd adalah siswa yang cerdas", grammarNote: "Mubtada nama orang + Khabar + Sifat mudzakkar.", analysis: "Mubtada nama orang + Khabar + Sifat mudzakkar." },
          { ar: "ذَهَبَ الطَّالِبُ إِلَى الْمَدْرَسَةِ", translation: "Siswa itu pergi ke sekolah", grammarNote: "Fi'il 'Dzahaba' + Fa'il 'At-Thaalibu' + Syibhul Jumlah.", analysis: "Fi'il 'Dzahaba' + Fa'il 'At-Thaalibu' + Syibhul Jumlah." },
          { ar: "هَذَا الْوَلَدُ طَالِبٌ", translation: "Anak ini adalah seorang siswa", grammarNote: "Mubtada 'Hadza' + Badal 'Al-Waladu' + Khabar mudzakkar.", analysis: "Mubtada 'Hadza' + Badal 'Al-Waladu' + Khabar mudzakkar." },
          { ar: "أَخِي طَالِبٌ نَشِيطٌ", translation: "Saudaraku adalah siswa yang aktif", grammarNote: "Mubtada 'Akhiy' + Khabar + Sifat mudzakkar.", analysis: "Mubtada 'Akhiy' + Khabar + Sifat mudzakkar." },
          { ar: "رَأَيْتُ طَالِبًا فِي الطَّرِيقِ", translation: "Aku melihat seorang siswa di jalan", grammarNote: "Fi'il-Fa'il + Maf'ul bih 'Thaaliban' + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih 'Thaaliban' + Syibhul Jumlah." },
          { ar: "طَالِبُ الْعِلْمِ مَحْبُوبٌ", translation: "Penuntut ilmu itu dicintai", grammarNote: "Mubtada 'Thaalibul ilmi' (idhafah) + Khabar mudzakkar.", analysis: "Mubtada 'Thaalibul ilmi' (idhafah) + Khabar mudzakkar." },
          { ar: "كَلَّمْتُ طَالِبًا جَدِيدًا", translation: "Aku berbicara dengan siswa baru", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Sifat.", analysis: "Fi'il-Fa'il + Maf'ul bih + Sifat." }
        ]
      },
      {
        id: "l1_2_c12",
        wordAr: "طَالِبَةٌ",
        translation: "Pelajar (Perempuan)",
        category: "Profesi",
        description: "Seorang murid atau siswi perempuan.",
        logicBox: "Menggunakan Ta Marbuthah di akhir untuk menandakan gender muannats.",
        examples: [
          { ar: "أَنَا طَالِبَةٌ جَدِيدَةٌ", translation: "Saya siswi baru", grammarNote: "Mubtada + Khabar muannats + Sifat muannats.", analysis: "Mubtada + Khabar muannats + Sifat muannats." },
          { ar: "هِيَ طَالِبَةٌ فِي الْمَدْرَسَةِ", translation: "Dia adalah siswi di sekolah", grammarNote: "Mubtada + Khabar muannats + Syibhul Jumlah.", analysis: "Mubtada + Khabar muannats + Syibhul Jumlah." },
          { ar: "هَلْ أَنْتِ طَالِبَةٌ؟", translation: "Apakah kamu seorang siswi?", grammarNote: "Tanya + Mubtada + Khabar muannats.", analysis: "Tanya + Mubtada + Khabar muannats." },
          { ar: "فَاطِمَةُ طَالِبَةٌ ذَكِيَّةٌ", translation: "Fatimah adalah siswi yang cerdas", grammarNote: "Mubtada + Khabar muannats + Sifat muannats.", analysis: "Mubtada + Khabar muannats + Sifat muannats." },
          { ar: "ذَهَبَتْ الطَّالِبَةُ إِلَى الْفَصْلِ", translation: "Siswi itu pergi ke kelas", grammarNote: "Fi'il-Fa'il muannats + Syibhul Jumlah.", analysis: "Fi'il-Fa'il muannats + Syibhul Jumlah." },
          { ar: "هَذِهِ الْبِنْتُ طَالِبَةٌ", translation: "Anak perempuan ini adalah siswi", grammarNote: "Mubtada + Badal + Khabar muannats.", analysis: "Mubtada + Badal + Khabar muannats." },
          { ar: "أُخْتِي طَالِبَةٌ نَشِيطَةٌ", translation: "Saudariku adalah siswi yang aktif", grammarNote: "Mubtada + Khabar muannats + Sifat muannats.", analysis: "Mubtada + Khabar muannats + Sifat muannats." },
          { ar: "رَأَيْتُ طَالِبَةً فِي الْمَكْتَبَةِ", translation: "Aku melihat seorang siswi di perpustakaan", grammarNote: "Fi'il-Fa'il + Maf'ul bih 'Thaalibatan' + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih 'Thaalibatan' + Syibhul Jumlah." },
          { ar: "عَائِشَةُ طَالِبَةٌ مَاهِرَةٌ", translation: "Aisyah adalah siswi yang mahir", grammarNote: "Mubtada + Khabar muannats + Sifat muannats.", analysis: "Mubtada + Khabar muannats + Sifat muannats." },
          { ar: "سَأَلْتُ طَالِبَةً عَنِ الْوَاجِبِ", translation: "Aku bertanya kepada seorang siswi tentang PR", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_2_c13",
        wordAr: "مُعَلِّمٌ",
        translation: "Guru (Laki-laki)",
        category: "Profesi",
        description: "Seorang pendidik atau pengajar laki-laki.",
        logicBox: "Berasal dari kata kerja 'Allama' (mengajar). Jamak mudzakkar salim-nya adalah مُعَلِّمُونَ.",
        examples: [
          { ar: "أَنَا مُعَلِّمٌ فِي هَذِهِ الْمَدْرَسَةِ", translation: "Saya guru di sekolah ini", grammarNote: "Mubtada + Khabar mudzakkar + Syibhul Jumlah.", analysis: "Mubtada + Khabar mudzakkar + Syibhul Jumlah." },
          { ar: "هُوَ مُعَلِّمٌ مَحْبُوبٌ", translation: "Dia adalah guru yang dicintai", grammarNote: "Mubtada + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "هَلْ أَنْتَ مُعَلِّمٌ؟", translation: "Apakah kamu seorang guru?", grammarNote: "Tanya + Mubtada + Khabar mudzakkar.", analysis: "Tanya + Mubtada + Khabar mudzakkar." },
          { ar: "جَاءَ الْمُعَلِّمُ إِلَى الْفَصْلِ", translation: "Guru itu telah datang ke kelas", grammarNote: "Fi'il 'Jaa'a' + Fa'il 'Al-Mu'allimu'.", analysis: "Fi'il 'Jaa'a' + Fa'il 'Al-Mu'allimu'." },
          { ar: "هَذَا الرَّجُلُ مُعَلِّمٌ بَارِعٌ", translation: "Pria ini adalah guru yang mahir", grammarNote: "Mubtada + Badal + Khabar + Sifat.", analysis: "Mubtada + Badal + Khabar + Sifat." },
          { ar: "أَبِي مُعَلِّمٌ قَدِيرٌ", translation: "Ayahku adalah guru yang berwibawa", grammarNote: "Mubtada 'Abiy' + Khabar + Sifat mudzakkar.", analysis: "Mubtada 'Abiy' + Khabar + Sifat mudzakkar." },
          { ar: "سَأَلْتُ الْمُعَلِّمَ عَنِ الدَّرْسِ", translation: "Aku bertanya kepada guru tentang pelajaran", grammarNote: "Fi'il-Fa'il + Maf'ul bih 'Al-Mu'allima' + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih 'Al-Mu'allima' + Syibhul Jumlah." },
          { ar: "مُعَلِّمُ اللُّغَةِ الْعَرَبِيَّةِ نَشِيطٌ", translation: "Guru bahasa Arab itu sangat aktif", grammarNote: "Mubtada (idhafah) + Sifat + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Sifat + Khabar mudzakkar." },
          { ar: "نَحْنُ نُحِبُّ الْمُعَلِّمَ", translation: "Kami menyukai guru itu", grammarNote: "Mubtada + Khabar kalimat fi'liyyah.", analysis: "Mubtada + Khabar kalimat fi'liyyah." },
          { ar: "شَكَرْتُ الْمُعَلِّمَ عَلَى نَصِيحَتِهِ", translation: "Aku berterima kasih kepada guru atas nasihatnya", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_2_c14",
        wordAr: "مُعَلِّمَةٌ",
        translation: "Guru (Perempuan)",
        category: "Profesi",
        description: "Seorang pendidik atau pengajar perempuan.",
        logicBox: "Bentuk muannats dari مُعَلِّمٌ, jamak muannats salim-nya adalah مُعَلِّمَاتٌ.",
        examples: [
          { ar: "أَنَا مُعَلِّمَةٌ فِي الْمَدْرَسَةِ", translation: "Saya guru (P) di sekolah", grammarNote: "Mubtada + Khabar muannats + Syibhul Jumlah.", analysis: "Mubtada + Khabar muannats + Syibhul Jumlah." },
          { ar: "هِيَ مُعَلِّمَةٌ رَحِيمَةٌ", translation: "Dia adalah guru (P) yang penyayang", grammarNote: "Mubtada + Khabar muannats + Sifat muannats.", analysis: "Mubtada + Khabar muannats + Sifat muannats." },
          { ar: "هَلْ أَنْتِ مُعَلِّمَةٌ؟", translation: "Apakah kamu seorang guru (P)?", grammarNote: "Tanya + Mubtada + Khabar muannats.", analysis: "Tanya + Mubtada + Khabar muannats." },
          { ar: "جَاءَتِ الْمُعَلِّمَةُ إِلَى الْقَاعَةِ", translation: "Guru (P) itu telah datang ke aula", grammarNote: "Fi'il 'Jaa'at' (muannats) + Fa'il + Syibhul Jumlah.", analysis: "Fi'il 'Jaa'at' (muannats) + Fa'il + Syibhul Jumlah." },
          { ar: "هَذِهِ الْمَرْأَةُ مُعَلِّمَةٌ", translation: "Wanita ini adalah seorang guru (P)", grammarNote: "Mubtada + Badal + Khabar muannats.", analysis: "Mubtada + Badal + Khabar muannats." },
          { ar: "أُمِّي مُعَلِّمَةٌ قَدِيرَةٌ", translation: "Ibuku adalah guru (P) yang berwibawa", grammarNote: "Mubtada 'Ummiy' + Khabar + Sifat muannats.", analysis: "Mubtada 'Ummiy' + Khabar + Sifat muannats." },
          { ar: "سَأَلْتُ الْمُعَلِّمَةَ عَنِ الْمَسْأَلَةِ", translation: "Aku bertanya kepada guru (P) tentang soal itu", grammarNote: "Fi'il-Fa'il + Maf'ul bih 'Al-Mu'allimata' + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih 'Al-Mu'allimata' + Syibhul Jumlah." },
          { ar: "مُعَلِّمَةُ الرِّيَاضِيَّاتِ ذَكِيَّةٌ", translation: "Guru matematika (P) itu cerdas", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "شَكَرْنَا الْمُعَلِّمَةَ", translation: "Kami berterima kasih kepada guru (P) itu", grammarNote: "Fi'il-Fa'il + Maf'ul bih.", analysis: "Fi'il-Fa'il + Maf'ul bih." },
          { ar: "مُعَلِّمَتُنَا نَشِيطَةٌ جِدًّا", translation: "Guru (P) kami sangat aktif", grammarNote: "Mubtada + Khabar muannats + Keterangan.", analysis: "Mubtada + Khabar muannats + Keterangan." }
        ]
      },
      {
        id: "l1_2_c15",
        wordAr: "طَبِيبٌ",
        translation: "Dokter (Laki-laki)",
        category: "Profesi",
        description: "Seorang dokter atau ahli medis laki-laki.",
        logicBox: "Kata benda ini bergender mudzakkar. Jamak taksir-nya adalah أَطِبَّاءُ.",
        examples: [
          { ar: "أَنَا طَبِيبٌ فِي الْمُسْتَشْفَى", translation: "Saya dokter di rumah sakit", grammarNote: "Mubtada + Khabar mudzakkar + Syibhul Jumlah.", analysis: "Mubtada + Khabar mudzakkar + Syibhul Jumlah." },
          { ar: "هُوَ طَبِيبٌ مَاهِرٌ", translation: "Dia adalah dokter yang mahir", grammarNote: "Mubtada + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "هَلْ أَنْتَ طَبِيبٌ جَدِيدٌ؟", translation: "Apakah kamu dokter baru?", grammarNote: "Tanya + Mubtada + Khabar + Sifat mudzakkar.", analysis: "Tanya + Mubtada + Khabar + Sifat mudzakkar." },
          { ar: "ذَهَبْتُ إِلَى الطَّبِيبِ الْمَشْهُورِ", translation: "Aku pergi ke dokter yang terkenal", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Sifat.", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Sifat." },
          { ar: "خَالِدٌ طَبِيبُ الْأَطْفَالِ", translation: "Khalid adalah dokter anak", grammarNote: "Mubtada + Khabar (idhafah).", analysis: "Mubtada + Khabar (idhafah)." },
          { ar: "هَذَا الرَّجُلُ طَبِيبٌ طَيِّبٌ", translation: "Pria ini adalah dokter yang baik", grammarNote: "Mubtada + Badal + Khabar + Sifat.", analysis: "Mubtada + Badal + Khabar + Sifat." },
          { ar: "أَخِيْ طَبِيبٌ فِي الْقَرْيَةِ", translation: "Saudaraku dokter di desa", grammarNote: "Mubtada + Khabar + Syibhul Jumlah.", analysis: "Mubtada + Khabar + Syibhul Jumlah." },
          { ar: "نَصَحَنِي الطَّبِيبُ بِالرَّاحَةِ", translation: "Dokter menyarankanku untuk istirahat", grammarNote: "Fi'il + Maf'ul bih + Fa'il + Syibhul Jumlah.", analysis: "Fi'il + Maf'ul bih + Fa'il + Syibhul Jumlah." },
          { ar: "طَبِيبُ الْأَسْنَانِ غَائِبٌ", translation: "Dokter gigi itu sedang absen", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "عَالَجَنِي طَبِيبٌ مَاهِرٌ", translation: "Seorang dokter mahir telah mengobatiku", grammarNote: "Fi'il + Maf'ul bih + Fa'il + Sifat.", analysis: "Fi'il + Maf'ul bih + Fa'il + Sifat." }
        ]
      },
      {
        id: "l1_2_c16",
        wordAr: "طَبِيبَةٌ",
        translation: "Dokter (Perempuan)",
        category: "Profesi",
        description: "Seorang dokter atau ahli medis perempuan.",
        logicBox: "Bentuk muannats dari طَبِيبٌ, menggunakan Ta Marbuthah di akhir.",
        examples: [
          { ar: "أَنَا طَبِيبَةٌ فِي هَذِهِ الْعِيَادَةِ", translation: "Saya dokter (P) di klinik ini", grammarNote: "Mubtada + Khabar muannats + Syibhul Jumlah.", analysis: "Mubtada + Khabar muannats + Syibhul Jumlah." },
          { ar: "هِيَ طَبِيبَةٌ مَاهِرَةٌ جِدًّا", translation: "Dia adalah dokter (P) yang sangat mahir", grammarNote: "Mubtada + Khabar muannats + Sifat muannats.", analysis: "Mubtada + Khabar muannats + Sifat muannats." },
          { ar: "هَلْ أَنْتِ طَبِيبَةٌ؟", translation: "Apakah kamu seorang dokter (P)?", grammarNote: "Tanya + Mubtada + Khabar muannats.", analysis: "Tanya + Mubtada + Khabar muannats." },
          { ar: "ذَهَبَتْ زَوْجَتِي إِلَى الطَّبِيبَةِ", translation: "Istriku pergi ke dokter (P)", grammarNote: "Fi'il + Fa'il + Syibhul Jumlah.", analysis: "Fi'il + Fa'il + Syibhul Jumlah." },
          { ar: "فَاطِمَةُ طَبِيبَةٌ نَاجِحَةٌ", translation: "Fatimah adalah dokter (P) yang sukses", grammarNote: "Mubtada + Khabar muannats + Sifat muannats.", analysis: "Mubtada + Khabar muannats + Sifat muannats." },
          { ar: "هَذِهِ الْمَرْأَةُ طَبِيبَةُ الْقَلْبِ", translation: "Wanita ini adalah dokter spesialis jantung", grammarNote: "Mubtada + Badal + Khabar (idhafah).", analysis: "Mubtada + Badal + Khabar (idhafah)." },
          { ar: "أُخْتِيْ طَبِيبَةٌ فِي الْعَاصِمَةِ", translation: "Saudariku dokter (P) di ibukota", grammarNote: "Mubtada + Khabar muannats + Syibhul Jumlah.", analysis: "Mubtada + Khabar muannats + Syibhul Jumlah." },
          { ar: "عَالَجَتْنِي طَبِيبَةٌ رَحِيمَةٌ", translation: "Seorang dokter (P) yang penyayang mengobatiku", grammarNote: "Fi'il + Maf'ul bih + Fa'il + Sifat muannats.", analysis: "Fi'il + Maf'ul bih + Fa'il + Sifat muannats." },
          { ar: "طَبِيبَةُ الْعُيُونِ غَائِبَةٌ الْيَوْمَ", translation: "Dokter mata (P) itu absen hari ini", grammarNote: "Mubtada (idhafah) + Khabar muannats + Keterangan.", analysis: "Mubtada (idhafah) + Khabar muannats + Keterangan." },
          { ar: "الْتَقَيْتُ بِطَبِيبَةٍ جَدِيدَةٍ", translation: "Aku bertemu dengan dokter (P) baru", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Sifat.", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Sifat." }
        ]
      },
      {
        id: "l1_2_c17",
        wordAr: "مُهَنْدِسٌ",
        translation: "Insinyur (Laki-laki)",
        category: "Profesi",
        description: "Seorang ahli teknik atau insinyur laki-laki.",
        logicBox: "Kata benda mudzakkar, jamak mudzakkar salim-nya adalah مُهَنْدِسُونَ.",
        examples: [
          { ar: "أَنَا مُهَنْدِسٌ مِعْمَارِيٌّ", translation: "Saya insinyur arsitektur", grammarNote: "Mubtada + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "هُوَ مُهَنْدِسٌ فِي الشَّرِكَةِ", translation: "Dia adalah insinyur di perusahaan", grammarNote: "Mubtada + Khabar mudzakkar + Syibhul Jumlah.", analysis: "Mubtada + Khabar mudzakkar + Syibhul Jumlah." },
          { ar: "هَلْ أَنْتَ مُهَنْدِسٌ؟", translation: "Apakah kamu seorang insinyur?", grammarNote: "Tanya + Mubtada + Khabar mudzakkar.", analysis: "Tanya + Mubtada + Khabar mudzakkar." },
          { ar: "زَيْدٌ مُهَنْدِسٌ بَارِعٌ", translation: "Zayd adalah insinyur yang mahir", grammarNote: "Mubtada + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "جَاءَ الْمُهَنْدِسُ إِلَى الْمَوْقِعِ", translation: "Insinyur itu telah datang ke proyek", grammarNote: "Fi'il + Fa'il 'Al-Muhandisu' + Syibhul Jumlah.", analysis: "Fi'il + Fa'il 'Al-Muhandisu' + Syibhul Jumlah." },
          { ar: "أَبِيْ مُهَنْدِسٌ تِقَنِيٌّ", translation: "Ayahku adalah insinyur teknik", grammarNote: "Mubtada + Khabar + Sifat mudzakkar.", analysis: "Mubtada + Khabar + Sifat mudzakkar." },
          { ar: "سَأَلْتُ الْمُهَنْدِسَ عَنِ الْبِنَاءِ", translation: "Aku bertanya kepada insinyur tentang bangunan itu", grammarNote: "Fi'il-Fa'il + Maf'ul bih 'Al-Muhandisa' + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih 'Al-Muhandisa' + Syibhul Jumlah." },
          { ar: "مُهَنْدِسُ الْمَشْرُوعِ غَائِبٌ", translation: "Insinyur proyek itu absen", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "شَكَرْنَا الْمُهَنْدِسَ عَلَى عَمَلِهِ", translation: "Kami berterima kasih kepada insinyur atas kerjanya", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah." },
          { ar: "هَذَا مُهَنْدِسٌ نَشِيطٌ", translation: "Ini adalah insinyur yang aktif", grammarNote: "Mubtada + Khabar + Sifat mudzakkar.", analysis: "Mubtada + Khabar + Sifat mudzakkar." }
        ]
      },
      {
        id: "l1_2_c18",
        wordAr: "مُهَنْدِسَةٌ",
        translation: "Insinyur (Perempuan)",
        category: "Profesi",
        description: "Seorang ahli teknik atau insinyur perempuan.",
        logicBox: "Bentuk muannats dari مُهَنْدِسٌ, jamak muannats salim-nya adalah مُهَنْدِسَاتٌ.",
        examples: [
          { ar: "أَنَا مُهَنْدِسَةٌ فِي الْمَكْتَبِ", translation: "Saya insinyur (P) di kantor", grammarNote: "Mubtada + Khabar muannats + Syibhul Jumlah.", analysis: "Mubtada + Khabar muannats + Syibhul Jumlah." },
          { ar: "هِيَ مُهَنْدِسَةٌ نَاجِحَةٌ", translation: "Dia adalah insinyur (P) yang sukses", grammarNote: "Mubtada + Khabar muannats + Sifat muannats.", analysis: "Mubtada + Khabar muannats + Sifat muannats." },
          { ar: "هَلْ أَنْتِ مُهَنْدِسَةٌ؟", translation: "Apakah kamu seorang insinyur (P)?", grammarNote: "Tanya + Mubtada + Khabar muannats.", analysis: "Tanya + Mubtada + Khabar muannats." },
          { ar: "جَاءَتِ الْمُهَنْدِسَةُ إِلَى الْبَيْتِ", translation: "Insinyur (P) itu telah datang ke rumah", grammarNote: "Fi'il + Fa'il + Syibhul Jumlah.", analysis: "Fi'il + Fa'il + Syibhul Jumlah." },
          { ar: "أُخْتِيْ مُهَنْدِسَةٌ مَاهِرَةٌ", translation: "Saudariku adalah insinyur (P) yang mahir", grammarNote: "Mubtada + Khabar + Sifat muannats.", analysis: "Mubtada + Khabar + Sifat muannats." },
          { ar: "هَذِهِ الْمَرْأَةُ مُهَنْدِسَةٌ", translation: "Wanita ini adalah seorang insinyur (P)", grammarNote: "Mubtada + Badal + Khabar muannats.", analysis: "Mubtada + Badal + Khabar muannats." },
          { ar: "سَأَلْتُ الْمُهَنْدِسَةَ عَنِ الرَّسْمِ", translation: "Aku bertanya kepada insinyur (P) tentang gambar itu", grammarNote: "Fi'il-Fa'il + Maf'ul bih 'Al-Muhandisata' + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih 'Al-Muhandisata' + Syibhul Jumlah." },
          { ar: "مُهَنْدِسَةُ الدِّيكُورِ ذَكِيَّةٌ", translation: "Insinyur dekorasi (P) itu cerdas", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "شَكَرْتُ الْمُهَنْدِسَةَ عَلَى التَّصْمِيمِ", translation: "Aku berterima kasih kepada insinyur (P) atas desainnya", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah." },
          { ar: "هِيَ مُهَنْدِسَةٌ فِي مَشْرُوعٍ كَبِيرٍ", translation: "Dia adalah insinyur (P) di proyek besar", grammarNote: "Mubtada + Khabar muannats + Syibhul Jumlah.", analysis: "Mubtada + Khabar muannats + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_2_c19",
        wordAr: "مُوَظَّفٌ",
        translation: "Pegawai (Laki-laki)",
        category: "Profesi",
        description: "Seorang karyawan atau pegawai administrasi laki-laki.",
        logicBox: "Kata benda mudzakkar, jamak mudzakkar salim-nya adalah مُوَظَّفُونَ.",
        examples: [
          { ar: "أَنَا مُوَظَّفٌ فِي الْبَنْكِ", translation: "Saya pegawai di bank", grammarNote: "Mubtada + Khabar mudzakkar + Syibhul Jumlah.", analysis: "Mubtada + Khabar mudzakkar + Syibhul Jumlah." },
          { ar: "هُوَ مُوَظَّفٌ حُكُومِيٌّ", translation: "Dia adalah pegawai negeri/pemerintah", grammarNote: "Mubtada + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "هَلْ أَنْتَ مُوَظَّفٌ فِي الشَّرِكَةِ؟", translation: "Apakah kamu pegawai di perusahaan?", grammarNote: "Tanya + Mubtada + Khabar + Syibhul Jumlah.", analysis: "Tanya + Mubtada + Khabar + Syibhul Jumlah." },
          { ar: "زَيْدٌ مُوَظَّفٌ نَشِيطٌ", translation: "Zayd adalah pegawai yang aktif", grammarNote: "Mubtada + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "جَاءَ الْمُوَظَّفُ إِلَى الْمَكْتَبِ", translation: "Pegawai itu telah datang ke kantor", grammarNote: "Fi'il + Fa'il 'Al-Muwadhhafu' + Syibhul Jumlah.", analysis: "Fi'il + Fa'il 'Al-Muwadhhafu' + Syibhul Jumlah." },
          { ar: "أَخِيْ مُوَظَّفٌ جَدِIDٌ", translation: "Saudaraku adalah pegawai baru", grammarNote: "Mubtada + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "سَأَلْتُ الْمُوَظَّفَ عَنِ الْمُعَامَلَةِ", translation: "Aku bertanya kepada pegawai tentang transaksi itu", grammarNote: "Fi'il-Fa'il + Maf'ul bih 'Al-Muwadhhafa' + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih 'Al-Muwadhhafa' + Syibhul Jumlah." },
          { ar: "مُوَظَّفُ الْإِسْتِقْبَالِ لَطِيفٌ", translation: "Pegawai resepsionis itu ramah", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "شَكَرْنَا الْمُوَظَّفَ عَلَى الْمُسَاعَدَةِ", translation: "Kami berterima kasih kepada pegawai atas bantuannya", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah." },
          { ar: "هَذَا مُوَظَّفٌ أَمِينٌ", translation: "Ini adalah pegawai yang amanah", grammarNote: "Mubtada + Khabar + Sifat mudzakkar.", analysis: "Mubtada + Khabar + Sifat mudzakkar." }
        ]
      },
      {
        id: "l1_2_c20",
        wordAr: "مُوَظَّفَةٌ",
        translation: "Pegawai (Perempuan)",
        category: "Profesi",
        description: "Seorang karyawan atau pegawai administrasi perempuan.",
        logicBox: "Bentuk muannats dari مُوَظَّفٌ, menggunakan Ta Marbuthah di akhir.",
        examples: [
          { ar: "أَنَا مُوَظَّفَةٌ فِي الْمَكْتَبِ", translation: "Saya pegawai (P) di kantor", grammarNote: "Mubtada + Khabar muannats + Syibhul Jumlah.", analysis: "Mubtada + Khabar muannats + Syibhul Jumlah." },
          { ar: "هِيَ مُوَظَّفَةٌ أَمِينَةٌ", translation: "Dia adalah pegawai (P) yang amanah", grammarNote: "Mubtada + Khabar muannats + Sifat muannats.", analysis: "Mubtada + Khabar muannats + Sifat muannats." },
          { ar: "هَلْ أَنْتِ مُوَظَّفَةٌ فِي الْمَصْنَعِ؟", translation: "Apakah kamu pegawai (P) di pabrik?", grammarNote: "Tanya + Mubtada + Khabar + Syibhul Jumlah.", analysis: "Tanya + Mubtada + Khabar + Syibhul Jumlah." },
          { ar: "جَاءَتِ الْمُوَظَّفَةُ إِلَى الْإِدَارَةِ", translation: "Pegawai (P) itu telah datang ke bagian administrasi", grammarNote: "Fi'il + Fa'il + Syibhul Jumlah.", analysis: "Fi'il + Fa'il + Syibhul Jumlah." },
          { ar: "أُخْتِيْ مُوَظَّفَةٌ فِي الْبَنْكِ", translation: "Saudariku pegawai (P) di bank", grammarNote: "Mubtada + Khabar + Syibhul Jumlah.", analysis: "Mubtada + Khabar + Syibhul Jumlah." },
          { ar: "هَذِهِ الْمَرْأَةُ مُوَظَّفَةٌ مَاهِرَةٌ", translation: "Wanita ini adalah pegawai (P) yang mahir", grammarNote: "Mubtada + Badal + Khabar muannats + Sifat muannats.", analysis: "Mubtada + Badal + Khabar muannats + Sifat muannats." },
          { ar: "سَأَلْتُ الْمُوَظَّفَةَ عَنِ الْأَوْرَاقِ", translation: "Aku bertanya kepada pegawai (P) tentang berkas-berkas", grammarNote: "Fi'il-Fa'il + Maf'ul bih 'Al-Muwadhhafata' + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih 'Al-Muwadhhafata' + Syibhul Jumlah." },
          { ar: "مُوَظَّفَةُ الْإِسْتِقْبَالِ نَشِيطَةٌ", translation: "Pegawai resepsionis (P) itu aktif", grammarNote: "Mubtada (idhafah) + Khabar muannats.", analysis: "Mubtada (idhafah) + Khabar muannats." },
          { ar: "شَكَرْتُ الْمُوَظَّفَةَ عَلَى خِدْمَتِهَا", translation: "Aku berterima kasih kepada pegawai (P) atas jasanya", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah." },
          { ar: "هِيَ مُوَظَّفَةٌ فِي شَرِكَةٍ جَدِيدَةٍ", translation: "Dia adalah pegawai (P) di perusahaan baru", grammarNote: "Mubtada + Khabar muannats + Syibhul Jumlah.", analysis: "Mubtada + Khabar muannats + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_2_c21",
        wordAr: "إِنْدُونِيسِيَا",
        translation: "Indonesia",
        category: "Negara",
        description: "Negara Indonesia.",
        logicBox: "Merupakan isim alam (nama tempat) yang muannats secara maknawi. Berakhiran alif mamdudah.",
        examples: [
          { ar: "أَنَا مِنْ إِنْدُونِيسِيَا", translation: "Saya dari Indonesia", grammarNote: "Mubtada + Syibhul Jumlah (min + Indonesia, mabni).", analysis: "Mubtada + Syibhul Jumlah (min + Indonesia, mabni)." },
          { ar: "إِنْدُونِيسِيَا بَلَدٌ كَبِيرٌ", translation: "Indonesia adalah negara yang besar", grammarNote: "Mubtada 'Indonesia' + Khabar 'Baladun' + Sifat mudzakkar.", analysis: "Mubtada 'Indonesia' + Khabar 'Baladun' + Sifat mudzakkar." },
          { ar: "هَلْ أَنْتَ مِنْ إِنْدُونِيسِيَا؟", translation: "Apakah kamu dari Indonesia?", grammarNote: "Tanya + Mubtada + Syibhul Jumlah.", analysis: "Tanya + Mubtada + Syibhul Jumlah." },
          { ar: "عَاصِمَةُ إِنْدُونِيسِيَا جَاكَرْتَا", translation: "Ibukota Indonesia adalah Jakarta", grammarNote: "Mubtada (idhafah) + Khabar.", analysis: "Mubtada (idhafah) + Khabar." },
          { ar: "زِرْتُ إِنْدُونِيسِيَا الْعَامَ الْمَاضِيَ", translation: "Aku mengunjungi Indonesia tahun lalu", grammarNote: "Fi'il-Fa'il + Maf'ul bih 'Indonesia' + Keterangan.", analysis: "Fi'il-Fa'il + Maf'ul bih 'Indonesia' + Keterangan." },
          { ar: "إِنْدُونِيسِيَا جَمِيلَةٌ جِدًّا", translation: "Indonesia sangat indah", grammarNote: "Mubtada 'Indonesia' + Khabar muannats 'Jamiilatun' + Keterangan.", analysis: "Mubtada 'Indonesia' + Khabar muannats 'Jamiilatun' + Keterangan." },
          { ar: "أُحِبُّ بَلَدِي إِنْدُونِيسِيَا", translation: "Aku mencintai negaraku Indonesia", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Badal 'Indonesia'.", analysis: "Fi'il-Fa'il + Maf'ul bih + Badal 'Indonesia'." },
          { ar: "هَذَا جَوَازُ سَفَرِ إِنْدُونِيسِيَا", translation: "Ini paspor Indonesia", grammarNote: "Mubtada + Khabar (idhafah).", analysis: "Mubtada + Khabar (idhafah)." },
          { ar: "شَعْبُ إِنْدُونِيسِيَا لَطِيفٌ", translation: "Rakyat Indonesia ramah", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "تَقَعُ إِنْدُونِيسِيَا فِي آسِيَا", translation: "Indonesia terletak di Asia", grammarNote: "Fi'il muannats 'Taqa'u' + Fa'il 'Indonesia' + Syibhul Jumlah.", analysis: "Fi'il muannats 'Taqa'u' + Fa'il 'Indonesia' + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_2_c22",
        wordAr: "مِصْرٌ",
        translation: "Mesir",
        category: "Negara",
        description: "Negara Mesir.",
        logicBox: "Merupakan isim alam muannats yang terdiri dari 3 huruf dan sukun di tengah (boleh munsharif atau ghairu munsharif).",
        examples: [
          { ar: "أَنَا مِنْ مِصْرَ", translation: "Saya berasal dari Mesir", grammarNote: "Mubtada + Syibhul Jumlah (min + Misra, majrur dengan fathah).", analysis: "Mubtada + Syibhul Jumlah (min + Misra, majrur dengan fathah)." },
          { ar: "مِصْرُ بَلَدٌ تَارِيخِيٌّ", translation: "Mesir adalah negara bersejarah", grammarNote: "Mubtada + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "هَلْ زُرْتَ مِصْرَ؟", translation: "Apakah kamu pernah mengunjungi Mesir?", grammarNote: "Tanya + Fi'il-Fa'il + Maf'ul bih 'Misra'.", analysis: "Tanya + Fi'il-Fa'il + Maf'ul bih 'Misra'." },
          { ar: "عَاصِمَةُ مِصْرَ الْقَاهِرَةُ", translation: "Ibukota Mesir adalah Kairo", grammarNote: "Mubtada (idhafah) + Khabar.", analysis: "Mubtada (idhafah) + Khabar." },
          { ar: "مِصْرُ جَمِيلَةٌ فِي الشِّتَاءِ", translation: "Mesir indah di musim dingin", grammarNote: "Mubtada + Khabar muannats + Syibhul Jumlah.", analysis: "Mubtada + Khabar muannats + Syibhul Jumlah." },
          { ar: "يَجْرِي نَهْرُ النِّيلِ فِي مِصْرَ", translation: "Sungai Nil mengalir di Mesir", grammarNote: "Fi'il + Fa'il (idhafah) + Syibhul Jumlah.", analysis: "Fi'il + Fa'il (idhafah) + Syibhul Jumlah." },
          { ar: "الْتَقَيْتُ بِصَدِيقٍ مِنْ مِصْرَ", translation: "Aku bertemu teman dari Mesir", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Syibhul Jumlah." },
          { ar: "طَلَبَةُ مِصْرَ مُجْتَهِدُونَ", translation: "Para pelajar Mesir sangat rajin", grammarNote: "Mubtada (idhafah) + Khabar jamak.", analysis: "Mubtada (idhafah) + Khabar jamak." },
          { ar: "تَارِيخُ مِصْرَ قَدِيمٌ جَدِيدٌ", translation: "Sejarah Mesir itu kuno sekaligus baru", grammarNote: "Mubtada (idhafah) + Khabar.", analysis: "Mubtada (idhafah) + Khabar." },
          { ar: "أَذْهَبُ إِلَى مِصْرَ لِلدِّرَاسَةِ", translation: "Aku pergi ke Mesir untuk belajar", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_2_c23",
        wordAr: "السُّعُودِيَّةُ",
        translation: "Arab Saudi",
        category: "Negara",
        description: "Negara Arab Saudi.",
        logicBox: "Menggunakan Alif Lam (Al-) dan bergender muannats karena diakhiri Ta Marbuthah.",
        examples: [
          { ar: "أَنَا مِنْ السُّعُودِيَّةِ", translation: "Saya dari Arab Saudi", grammarNote: "Mubtada + Syibhul Jumlah (min + As-Su'uudiyyah, majrur dengan kasrah).", analysis: "Mubtada + Syibhul Jumlah (min + As-Su'uudiyyah, majrur dengan kasrah)." },
          { ar: "السُّعُودِيَّةُ بَلَدٌ مُقَدَّسٌ", translation: "Arab Saudi adalah negara yang suci", grammarNote: "Mubtada + Khabar + Sifat mudzakkar (mengikuti Baladun).", analysis: "Mubtada + Khabar + Sifat mudzakkar (mengikuti Baladun)." },
          { ar: "عَاصِمَةُ السُّعُودِيَّةِ الرِّيَاضُ", translation: "Ibukota Arab Saudi adalah Riyadh", grammarNote: "Mubtada (idhafah) + Khabar.", analysis: "Mubtada (idhafah) + Khabar." },
          { ar: "تَقَعُ مَكَّةُ فِي السُّعُودِيَّةِ", translation: "Makkah terletak di Arab Saudi", grammarNote: "Fi'il + Fa'il 'Makkatu' + Syibhul Jumlah.", analysis: "Fi'il + Fa'il 'Makkatu' + Syibhul Jumlah." },
          { ar: "سَافَرْتُ إِلَى السُّعُودِيَّةِ لِلْعُمْرَةِ", translation: "Aku pergi ke Arab Saudi untuk umrah", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Syibhul Jumlah." },
          { ar: "السُّعُودِيَّةُ غَنِيَّةٌ بِالنِّفْطِ", translation: "Arab Saudi kaya dengan minyak", grammarNote: "Mubtada + Khabar muannats + Syibhul Jumlah.", analysis: "Mubtada + Khabar muannats + Syibhul Jumlah." },
          { ar: "هَلْ أَنْتَ مِنْ السُّعُودِيَّةِ؟", translation: "Apakah kamu dari Arab Saudi?", grammarNote: "Tanya + Mubtada + Syibhul Jumlah.", analysis: "Tanya + Mubtada + Syibhul Jumlah." },
          { ar: "جَوُّ السُّعُودِيَّةِ حَارٌّ صَيْفًا", translation: "Cuaca Arab Saudi panas di musim panas", grammarNote: "Mubtada (idhafah) + Khabar + Keterangan.", analysis: "Mubtada (idhafah) + Khabar + Keterangan." },
          { ar: "أَعْمَلُ فِي السُّعُودِيَّةِ", translation: "Aku bekerja di Arab Saudi", grammarNote: "Fi'il-Fa'il 'A'malu' + Syibhul Jumlah.", analysis: "Fi'il-Fa'il 'A'malu' + Syibhul Jumlah." },
          { ar: "زَوْجِي مِنْ السُّعُودِيَّةِ", translation: "Suamiku berasal dari Arab Saudi", grammarNote: "Mubtada 'Zawjiy' + Syibhul Jumlah.", analysis: "Mubtada 'Zawjiy' + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_2_c24",
        wordAr: "مَالِيزِيَا",
        translation: "Malaysia",
        category: "Negara",
        description: "Negara Malaysia.",
        logicBox: "Isim alam muannats luar Arab (A'jami) yang berakhiran alif mamdudah.",
        examples: [
          { ar: "أَنَا مِنْ مَالِيزِيَا", translation: "Saya berasal dari Malaysia", grammarNote: "Mubtada + Syibhul Jumlah (min + Maaliizyaa, mabni).", analysis: "Mubtada + Syibhul Jumlah (min + Maaliizyaa, mabni)." },
          { ar: "مَالِيزِيَا بَلَدٌ قَرِيبٌ", translation: "Malaysia adalah negara yang dekat", grammarNote: "Mubtada + Khabar + Sifat mudzakkar.", analysis: "Mubtada + Khabar + Sifat mudzakkar." },
          { ar: "عَاصِمَةُ مَالِيزِيَا كُوالَالَمْبُور", translation: "Ibukota Malaysia adalah Kuala Lumpur", grammarNote: "Mubtada (idhafah) + Khabar.", analysis: "Mubtada (idhafah) + Khabar." },
          { ar: "هَلْ زُرْتَ مَالِيزِيَا؟", translation: "Apakah kamu pernah ke Malaysia?", grammarNote: "Tanya + Fi'il-Fa'il + Maf'ul bih 'Maaliizyaa'.", analysis: "Tanya + Fi'il-Fa'il + Maf'ul bih 'Maaliizyaa'." },
          { ar: "مَالِيزِيَا جَمِيلَةٌ جِدًّا", translation: "Malaysia sangat indah", grammarNote: "Mubtada + Khabar muannats + Keterangan.", analysis: "Mubtada + Khabar muannats + Keterangan." },
          { ar: "الْتَقَيْتُ بِطَالِبٍ مِنْ مَالِيزِيَا", translation: "Aku bertemu seorang mahasiswa dari Malaysia", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Syibhul Jumlah." },
          { ar: "هَذَا جَوَازُ سَفَرِ مَالِيزِيَا", translation: "Ini paspor Malaysia", grammarNote: "Mubtada + Khabar (idhafah).", analysis: "Mubtada + Khabar (idhafah)." },
          { ar: "شَعْبُ مَالِيزِيَا مُتَعَاوِنٌ", translation: "Rakyat Malaysia saling tolong menolong", grammarNote: "Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "تَقَعُ مَالِيزِيَا فِي جَنُوبِ شَرْقِ آسِيَا", translation: "Malaysia terletak di Asia Tenggara", grammarNote: "Fi'il + Fa'il + Syibhul Jumlah.", analysis: "Fi'il + Fa'il + Syibhul Jumlah." },
          { ar: "سَافَرْتُ إِلَى مَالِيزِيَا لِلْعُطْلَةِ", translation: "Aku bepergian ke Malaysia untuk liburan", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_2_c25",
        wordAr: "بَلَدٌ",
        translation: "Negara",
        category: "Negara",
        description: "Sebuah wilayah kedaulatan negara atau tanah air.",
        logicBox: "Kata benda mudzakkar, jamak taksir-nya adalah بِلَادٌ atau بُلْدَانٌ.",
        examples: [
          { ar: "هَذَا بَلَدِي", translation: "Ini adalah negaraku", grammarNote: "Mubtada + Khabar 'Balad' + ya mutakallim.", analysis: "Mubtada + Khabar 'Balad' + ya mutakallim." },
          { ar: "إِنْدُونِيسِيَا بَلَدٌ إِسْلَامِيٌّ", translation: "Indonesia adalah negara Islam", grammarNote: "Mubtada + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "هَلْ هَذَا بَلَدٌ جَمِيلٌ؟", translation: "Apakah ini negara yang indah?", grammarNote: "Tanya + Mubtada + Khabar + Sifat mudzakkar.", analysis: "Tanya + Mubtada + Khabar + Sifat mudzakkar." },
          { ar: "عِشْتُ فِي بَلَدٍ بَعِيدٍ", translation: "Aku pernah tinggal di negara yang jauh", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Sifat.", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Sifat." },
          { ar: "مِصْرُ بَلَدُ الْأَهْرَامِ", translation: "Mesir adalah negara piramida", grammarNote: "Mubtada + Khabar (idhafah).", analysis: "Mubtada + Khabar (idhafah)." },
          { ar: "هَذَا بَلَدٌ نَامٍ", translation: "Ini adalah negara berkembang", grammarNote: "Mubtada + Khabar mudzakkar + Sifat.", analysis: "Mubtada + Khabar mudzakkar + Sifat." },
          { ar: "سَافَرْتُ إِلَى بَلَدٍ جَدِيدٍ", translation: "Aku bepergian ke negara baru", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Sifat mudzakkar.", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Sifat mudzakkar." },
          { ar: "الْبَلَدُ آمِنٌ وَالْحَمْدُ لِلَّهِ", translation: "Negara ini aman, segala puji bagi Allah", grammarNote: "Mubtada + Khabar mudzakkar + Kalimat penyerta.", analysis: "Mubtada + Khabar mudzakkar + Kalimat penyerta." },
          { ar: "حُبُّ الْبَلَدِ مِنَ الْإِيمَانِ", translation: "Cinta tanah air sebagian dari iman", grammarNote: "Mubtada (idhafah) + Syibhul Jumlah.", analysis: "Mubtada (idhafah) + Syibhul Jumlah." },
          { ar: "الْبَلَدُ نَاجِحٌ فِي الِاقْتِصَادِ", translation: "Negara itu sukses dalam ekonomi", grammarNote: "Mubtada + Khabar mudzakkar + Syibhul Jumlah.", analysis: "Mubtada + Khabar mudzakkar + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_2_c26",
        wordAr: "مُتَزَوِّجٌ",
        translation: "Sudah Menikah (Laki-laki)",
        category: "Status / Sifat",
        description: "Status pernikahan bagi laki-laki.",
        logicBox: "Kata sifat (isim fa'il) bergender mudzakkar.",
        examples: [
          { ar: "أَنَا مُتَزَوِّجٌ", translation: "Saya sudah menikah (L)", grammarNote: "Mubtada + Khabar mudzakkar.", analysis: "Mubtada + Khabar mudzakkar." },
          { ar: "هُوَ مُتَزَوِّجٌ الْآنَ", translation: "Dia sudah menikah sekarang (L)", grammarNote: "Mubtada + Khabar mudzakkar + Keterangan waktu.", analysis: "Mubtada + Khabar mudzakkar + Keterangan waktu." },
          { ar: "هَلْ أَنْتَ مُتَزَوِّجٌ؟", translation: "Apakah kamu sudah menikah? (L)", grammarNote: "Tanya + Mubtada + Khabar mudzakkar.", analysis: "Tanya + Mubtada + Khabar mudzakkar." },
          { ar: "أَخِي مُتَزَوِّجٌ مِنْ طَبِيبَةٍ", translation: "Saudaraku menikah dengan seorang dokter (P)", grammarNote: "Mubtada + Khabar mudzakkar + Syibhul Jumlah.", analysis: "Mubtada + Khabar mudzakkar + Syibhul Jumlah." },
          { ar: "زَيْدٌ رَجُلٌ مُتَزَوِّجٌ", translation: "Zayd adalah pria yang sudah menikah", grammarNote: "Mubtada + Khabar + Sifat mudzakkar.", analysis: "Mubtada + Khabar + Sifat mudzakkar." },
          { ar: "أَصْبَحْتُ مُتَزَوِّجًا الْيَوْمَ", translation: "Aku telah menjadi orang yang menikah hari ini", grammarNote: "Fi'il naqis 'Asbahtu' + Khabar 'Mutazawwijan' manshub + Keterangan.", analysis: "Fi'il naqis 'Asbahtu' + Khabar 'Mutazawwijan' manshub + Keterangan." },
          { ar: "هَذَا الْمُعَلِّمُ مُتَزَوِّجٌ", translation: "Guru ini sudah menikah", grammarNote: "Mubtada + Badal + Khabar mudzakkar.", analysis: "Mubtada + Badal + Khabar mudzakkar." },
          { ar: "هَلْ صَدِيقُكَ مُتَزَوِّجٌ؟", translation: "Apakah temanmu sudah menikah?", grammarNote: "Tanya + Mubtada (idhafah) + Khabar mudzakkar.", analysis: "Tanya + Mubtada (idhafah) + Khabar mudzakkar." },
          { ar: "عِشْتُ مَعَ صَدِيقٍ مُتَزَوِّجٍ", translation: "Aku tinggal bersama teman yang sudah menikah", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Sifat.", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Sifat." },
          { ar: "الرَّجُلُ الْمُتَزَوِّجُ سَعِيدٌ", translation: "Pria yang menikah itu bahagia", grammarNote: "Mubtada + Sifat + Khabar mudzakkar.", analysis: "Mubtada + Sifat + Khabar mudzakkar." }
        ]
      },
      {
        id: "l1_2_c27",
        wordAr: "مُتَزَوِّجَةٌ",
        translation: "Sudah Menikah (Perempuan)",
        category: "Status / Sifat",
        description: "Status pernikahan bagi perempuan.",
        logicBox: "Bentuk muannats dari مُتَزَوِّجٌ, diakhiri dengan Ta Marbuthah.",
        examples: [
          { ar: "أَنَا مُتَزَوِّجَةٌ", translation: "Saya sudah menikah (P)", grammarNote: "Mubtada + Khabar muannats.", analysis: "Mubtada + Khabar muannats." },
          { ar: "هِيَ مُتَزَوِّجَةٌ جَدِيدًا", translation: "Dia baru saja menikah (P)", grammarNote: "Mubtada + Khabar muannats + Keterangan.", analysis: "Mubtada + Khabar muannats + Keterangan." },
          { ar: "هَلْ أَنْتِ مُتَزَوِّجَةٌ؟", translation: "Apakah kamu sudah menikah? (P)", grammarNote: "Tanya + Mubtada + Khabar muannats.", analysis: "Tanya + Mubtada + Khabar muannats." },
          { ar: "أُخْتِي مُتَزَوِّجَةٌ مِنْ مُهَنْدِسٍ", translation: "Saudariku menikah dengan seorang insinyur", grammarNote: "Mubtada + Khabar muannats + Syibhul Jumlah.", analysis: "Mubtada + Khabar muannats + Syibhul Jumlah." },
          { ar: "فَاطِمَةُ اِمْرَأَةٌ مُتَزَوِّجَةٌ", translation: "Fatimah adalah wanita yang sudah menikah", grammarNote: "Mubtada + Khabar + Sifat muannats.", analysis: "Mubtada + Khabar + Sifat muannats." },
          { ar: "أَصْبَحَتْ أُخْتِي مُتَزَوِّجَةً", translation: "Saudariku telah menikah", grammarNote: "Fi'il naqis 'Asbahat' + Isim 'Ukhtiy' + Khabar 'Mutazawwijatan'.", analysis: "Fi'il naqis 'Asbahat' + Isim 'Ukhtiy' + Khabar 'Mutazawwijatan'." },
          { ar: "هَذِهِ الْمُعَلِّمَةُ مُتَزَوِّجَةٌ", translation: "Guru (P) ini sudah menikah", grammarNote: "Mubtada + Badal + Khabar muannats.", analysis: "Mubtada + Badal + Khabar muannats." },
          { ar: "هَلْ صَدِيقَتُكِ مُتَزَوِّجَةٌ؟", translation: "Apakah temanmu (P) sudah menikah?", grammarNote: "Tanya + Mubtada + Khabar muannats.", analysis: "Tanya + Mubtada + Khabar muannats." },
          { ar: "عِشْتُ مَعَ أُخْتٍ مُتَزَوِّجَةٍ", translation: "Aku tinggal bersama saudara (P) yang sudah menikah", grammarNote: "Fi'il-Fa'il + Syibhul Jumlah + Sifat muannats.", analysis: "Fi'il-Fa'il + Syibhul Jumlah + Sifat muannats." },
          { ar: "الْمَرْأَةُ الْمُتَزَوِّجَةُ نَشِيطَةٌ", translation: "Wanita yang sudah menikah itu aktif", grammarNote: "Mubtada + Sifat + Khabar muannats.", analysis: "Mubtada + Sifat + Khabar muannats." }
        ]
      },
      {
        id: "l1_2_c28",
        wordAr: "أَعْزَبُ",
        translation: "Lajang (Laki-laki)",
        category: "Status / Sifat",
        description: "Status belum menikah bagi laki-laki.",
        logicBox: "Merupakan isim ghairu munsharif (tidak menerima tanwin) karena berwazan 'Af'alu'.",
        examples: [
          { ar: "أَنَا أَعْزَبُ حَالِيًّا", translation: "Saya lajang saat ini", grammarNote: "Mubtada + Khabar mudzakkar (mabni dhommah tanpa tanwin) + Keterangan.", analysis: "Mubtada + Khabar mudzakkar (mabni dhommah tanpa tanwin) + Keterangan." },
          { ar: "هُوَ أَعْزَبُ سَعِيدٌ", translation: "Dia adalah lajang yang bahagia", grammarNote: "Mubtada + Khabar + Sifat mudzakkar.", analysis: "Mubtada + Khabar + Sifat mudzakkar." },
          { ar: "هَلْ أَنْتَ أَعْزَبُ؟", translation: "Apakah kamu lajang? (L)", grammarNote: "Tanya + Mubtada + Khabar mudzakkar.", analysis: "Tanya + Mubtada + Khabar mudzakkar." },
          { ar: "أَخِي الْكَبِيرُ أَعْزَبُ", translation: "Saudaraku yang besar masih lajang", grammarNote: "Mubtada + Sifat + Khabar mudzakkar.", analysis: "Mubtada + Sifat + Khabar mudzakkar." },
          { ar: "زَيْدٌ مَا زَالَ أَعْزَبَ", translation: "Zayd masih tetap lajang", grammarNote: "Mubtada + Fi'il naqis 'Maa Zaala' + Khabar 'A'zaba' manshub dengan fathah tunggal.", analysis: "Mubtada + Fi'il naqis 'Maa Zaala' + Khabar 'A'zaba' manshub dengan fathah tunggal." },
          { ar: "أَعْزَبُ لَا يُرِيدُ الزَّوَاجَ حَالِيًّا", translation: "Seorang lajang tidak ingin menikah sekarang", grammarNote: "Mubtada + Khabar kalimat fi'liyyah.", analysis: "Mubtada + Khabar kalimat fi'liyyah." },
          { ar: "هَذَا الطَّالِبُ أَعْزَبُ جَمِيلٌ", translation: "Siswa ini lajang yang tampan", grammarNote: "Mubtada + Badal + Khabar + Sifat.", analysis: "Mubtada + Badal + Khabar + Sifat." },
          { ar: "هَلْ صَدِيقُكَ أَعْزَبُ؟", translation: "Apakah temanmu masih lajang?", grammarNote: "Tanya + Mubtada + Khabar mudzakkar.", analysis: "Tanya + Mubtada + Khabar mudzakkar." },
          { ar: "سَأَلْتُ رَجُلًا أَعْزَبَ عَنْ عَمَلِهِ", translation: "Aku bertanya kepada seorang pria lajang tentang kerjanya", grammarNote: "Fi'il-Fa'il + Maf'ul bih 'Rajulan' + Sifat 'A'zaba' manshub.", analysis: "Fi'il-Fa'il + Maf'ul bih 'Rajulan' + Sifat 'A'zaba' manshub." },
          { ar: "الرَّجُلُ الْأَعْزَبُ نَشِيطٌ فِي الْعَمَلِ", translation: "Pria lajang itu aktif dalam bekerja", grammarNote: "Mubtada + Sifat + Khabar mudzakkar + Syibhul Jumlah.", analysis: "Mubtada + Sifat + Khabar mudzakkar + Syibhul Jumlah." }
        ]
      },
      {
        id: "l1_2_c29",
        wordAr: "عَزْبَاءُ",
        translation: "Lajang (Perempuan)",
        category: "Status / Sifat",
        description: "Status belum menikah bagi perempuan.",
        logicBox: "Merupakan isim ghairu munsharif (tidak menerima tanwin) karena diakhiri alif mamdudah untuk gender muannats.",
        examples: [
          { ar: "أَنَا عَزْبَاءُ سَعِيدَةٌ", translation: "Saya lajang (P) yang bahagia", grammarNote: "Mubtada + Khabar muannats (tanpa tanwin) + Sifat muannats.", analysis: "Mubtada + Khabar muannats (tanpa tanwin) + Sifat muannats." },
          { ar: "هِيَ عَزْبَاءُ الْآنَ", translation: "Dia sekarang lajang (P)", grammarNote: "Mubtada + Khabar muannats + Keterangan waktu.", analysis: "Mubtada + Khabar muannats + Keterangan waktu." },
          { ar: "هَلْ أَنْتِ عَزْبَاءُ؟", translation: "Apakah kamu lajang? (P)", grammarNote: "Tanya + Mubtada + Khabar muannats.", analysis: "Tanya + Mubtada + Khabar muannats." },
          { ar: "أُخْتِي الصَّغِيرَةُ عَزْبَاءُ", translation: "Saudariku yang kecil masih lajang", grammarNote: "Mubtada + Sifat + Khabar muannats.", analysis: "Mubtada + Sifat + Khabar muannats." },
          { ar: "فَاطِمَةُ مَا زَالَتْ عَزْبَاءَ", translation: "Fatimah masih tetap lajang", grammarNote: "Mubtada + Fi'il naqis + Khabar 'Azbaa'a' manshub fathah tunggal.", analysis: "Mubtada + Fi'il naqis + Khabar 'Azbaa'a' manshub fathah tunggal." },
          { ar: "عَزْبَاءُ تَعْمَلُ فِي الْمَكْتَبِ", translation: "Seorang lajang (P) bekerja di kantor", grammarNote: "Mubtada + Khabar kalimat fi'liyyah.", analysis: "Mubtada + Khabar kalimat fi'liyyah." },
          { ar: "هَذِهِ الطَّالِبَةُ عَزْبَاءُ ذَكِيَّةٌ", translation: "Siswi ini lajang yang cerdas", grammarNote: "Mubtada + Badal + Khabar + Sifat muannats.", analysis: "Mubtada + Badal + Khabar + Sifat muannats." },
          { ar: "هَلْ صَدِيقَتُكِ عَزْبَاءُ؟", translation: "Apakah temanmu (P) masih lajang?", grammarNote: "Tanya + Mubtada + Khabar muannats.", analysis: "Tanya + Mubtada + Khabar muannats." },
          { ar: "سَأَلْتُ بِنْتًا عَزْبَاءَ عَنْ عُمْرِهَا", translation: "Aku bertanya kepada seorang gadis lajang tentang usianya", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Sifat 'Azbaa'a' manshub.", analysis: "Fi'il-Fa'il + Maf'ul bih + Sifat 'Azbaa'a' manshub." },
          { ar: "الْمَرْأَةُ الْعَزْبَاءُ مُجْتَهِدَةٌ", translation: "Wanita lajang itu sangat rajin", grammarNote: "Mubtada + Sifat + Khabar muannats.", analysis: "Mubtada + Sifat + Khabar muannats." }
        ]
      },
      {
        id: "l1_2_c30",
        wordAr: "صَدِيقٌ",
        translation: "Teman",
        category: "Status / Sifat",
        description: "Teman, sahabat, atau rekan dekat laki-laki.",
        logicBox: "Kata benda mudzakkar, jamak taksir-nya adalah أَصْدِقَاءُ.",
        examples: [
          { ar: "هَذَا صَدِيقِي خَالِدٌ", translation: "Ini temanku, Khalid", grammarNote: "Mubtada + Khabar 'Shadiiqiy' + Badal nama.", analysis: "Mubtada + Khabar 'Shadiiqiy' + Badal nama." },
          { ar: "هُوَ صَدِيقٌ مُخْلِصٌ", translation: "Dia adalah teman yang setia", grammarNote: "Mubtada + Khabar mudzakkar + Sifat mudzakkar.", analysis: "Mubtada + Khabar mudzakkar + Sifat mudzakkar." },
          { ar: "هَلْ أَنْتَ صَدِيقُ زَيْدٍ؟", translation: "Apakah kamu teman Zayd?", grammarNote: "Tanya + Mubtada + Khabar (idhafah).", analysis: "Tanya + Mubtada + Khabar (idhafah)." },
          { ar: "جَاءَ صَدِيقِي إِلَى الْبَيْتِ", translation: "Temanku datang ke rumah", grammarNote: "Fi'il + Fa'il 'Shadiiqiy' + Syibhul Jumlah.", analysis: "Fi'il + Fa'il 'Shadiiqiy' + Syibhul Jumlah." },
          { ar: "أُحِبُّ صَدِيقِي الْعَزِيزَ", translation: "Aku mencintai temanku yang tercinta", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Sifat manshub dengan kasrah muqaddarah.", analysis: "Fi'il-Fa'il + Maf'ul bih + Sifat manshub dengan kasrah muqaddarah." },
          { ar: "هَذَا الرَّجُلُ صَدِيقٌ طَيِّبٌ", translation: "Pria ini adalah teman yang baik", grammarNote: "Mubtada + Badal + Khabar + Sifat.", analysis: "Mubtada + Badal + Khabar + Sifat." },
          { ar: "سَأَفْتَقِدُ صَدِيقِي فِي السَّفَرِ", translation: "Aku akan merindukan temanku dalam perjalanan", grammarNote: "Harf istiqbal 'sa' + Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah.", analysis: "Harf istiqbal 'sa' + Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah." },
          { ar: "هَلْ هَذَا صَدِيقُكَ فِي الْمَدْرَسَةِ؟", translation: "Apakah ini teman sekolahmu?", grammarNote: "Tanya + Mubtada + Khabar + Syibhul Jumlah.", analysis: "Tanya + Mubtada + Khabar + Syibhul Jumlah." },
          { ar: "شَكَرْتُ صَدِيقِي عَلَى الْهَدِيَّةِ", translation: "Aku berterima kasih kepada temanku atas hadiahnya", grammarNote: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah.", analysis: "Fi'il-Fa'il + Maf'ul bih + Syibhul Jumlah." },
          { ar: "الصَّدِيقُ الصَّالِحُ نِعْمَةٌ كَبِيرَةٌ", translation: "Teman yang saleh adalah nikmat yang besar", grammarNote: "Mubtada + Sifat + Khabar + Sifat.", analysis: "Mubtada + Sifat + Khabar + Sifat." }
        ]
      }
    ],
    grammarSection: {
      title: "Jumlah Ismiyyah & Keselarasan Gender",
      explanation: "Kalimat Arab yang tidak diawali kata kerja disebut JUMLAH ISMIYYAH.\n\nStrukturnya:\nMUBTADA (Subjek) + KHABAR (Predikat)\n\nContoh:\nأَنَا طَالِبٌ\nMubtada: أَنَا (Saya)\nKhabar: طَالِبٌ (pelajar)\n= Saya adalah pelajar\n\nATURAN PENTING:\n1. Tidak perlu kata 'adalah'!\n2. Khabar harus selaras gender dengan mubtada\n3. Dhamir (kata ganti) menentukan gender khabar:\n- أَنَا مُسْلِمٌ (saya laki = khabar mudzakkar)\n- أَنَا مُسْلِمَةٌ (saya perempuan = khabar muannats)\n- هُوَ مُعَلِّمٌ (dia laki = khabar mudzakkar)\n- هِيَ مُعَلِّمَةٌ (dia perempuan = khabar muannats)",
      examples: [
        {
          ar: "أَنَا مُعَلِّمٌ",
          translation: "Saya adalah seorang guru (L)",
          grammarNote: "Mubtada 'Ana' (Saya) maskulin, khabar 'Mu'allimun' (guru) selaras bergender mudzakkar.",
          analysis: "Mubtada 'Ana' (Saya) maskulin, khabar 'Mu'allimun' (guru) selaras bergender mudzakkar."
        },
        {
          ar: "أَنْتِ طَبِيبَةٌ",
          translation: "Kamu adalah seorang dokter perempuan",
          grammarNote: "Mubtada 'Anti' (Kamu [P]) feminin, khabar 'Thabiibatun' (dokter) wajib muannats dengan Ta Marbuthah.",
          analysis: "Mubtada 'Anti' (Kamu [P]) feminin, khabar 'Thabiibatun' (dokter) wajib muannats dengan Ta Marbuthah."
        },
        {
          ar: "هُوَ مُهَنْدِسٌ",
          translation: "Dia adalah seorang insinyur",
          grammarNote: "Mubtada 'Huwa' (Dia [L]) sebagai subjek, khabar 'Muhandisun' (insinyur) bergender mudzakkar tanpa Ta Marbuthah.",
          analysis: "Mubtada 'Huwa' (Dia [L]) sebagai subjek, khabar 'Muhandisun' (insinyur) bergender mudzakkar tanpa Ta Marbuthah."
        },
        {
          ar: "هِيَ تَاجِرَةٌ",
          translation: "Dia adalah seorang pedagang perempuan",
          grammarNote: "Mubtada 'Hiya' (Dia [P]) sebagai subjek, khabar 'Taajiratun' (pedagang) wajib muannats dengan Ta Marbuthah.",
          analysis: "Mubtada 'Hiya' (Dia [P]) sebagai subjek, khabar 'Taajiratun' (pedagang) wajib muannats dengan Ta Marbuthah."
        },
        {
          ar: "إِنْدُونِيسِيَا بَلَدٌ كَبِيرٌ",
          translation: "Indonesia adalah negara yang besar",
          grammarNote: "Mubtada 'Induuniisiyaa' (nama negara, feminin), khabar 'Baladun' (negara, mudzakkar), sifat 'Kabiirun' mengikuti gender khabar.",
          analysis: "Mubtada 'Induuniisiyaa' (nama negara, feminin), khabar 'Baladun' (negara, mudzakkar), sifat 'Kabiirun' mengikuti gender khabar."
        },
        {
          ar: "عُنْوَانِي فِي جَاكَرْتَا",
          translation: "Alamatku di Jakarta",
          grammarNote: "Mubtada 'Unwaaniy' (alamatku, mudzakkar), khabar berupa frasa preposisi (syibhul jumlah) 'fiy Jaakarta'.",
          analysis: "Mubtada 'Unwaaniy' (alamatku, mudzakkar), khabar berupa frasa preposisi (syibhul jumlah) 'fiy Jaakarta'."
        },
        {
          ar: "أَنَا أَعْزَبُ",
          translation: "Saya lajang (L)",
          grammarNote: "Mubtada 'Ana' (Saya [L]), khabar 'A'zabu' bergender mudzakkar (isim ghairu munsharif).",
          analysis: "Mubtada 'Ana' (Saya [L]), khabar 'A'zabu' bergender mudzakkar (isim ghairu munsharif)."
        },
        {
          ar: "أَنْتِ عَزْبَاءُ",
          translation: "Kamu lajang (P)",
          grammarNote: "Mubtada 'Anti' (Kamu [P]), khabar 'Azbaa'u' bergender muannats (isim ghairu munsharif).",
          analysis: "Mubtada 'Anti' (Kamu [P]), khabar 'Azbaa'u' bergender muannats (isim ghairu munsharif)."
        }
      ],
      commonMistakes: [
        {
          wrong: "أَنَا مُعَلِّمَةٌ (Dikatakan oleh Ahmad)",
          correct: "أَنَا مُعَلِّمٌ",
          reason: "Ahmad adalah laki-laki, maka khabarnya harus 'Mu'allimun' (mudzakkar), bukan muannats."
        },
        {
          wrong: "هُوَ طَبِيبَةٌ (Dia [L] adalah dokter perempuan)",
          correct: "هُوَ طَبِيبٌ",
          reason: "Kata ganti 'Huwa' (maskulin) tidak selaras dengan khabar 'Thabiibatun' (feminin). Yang benar adalah 'Huwa Thabiibun' atau 'Hiya Thabiibatun'."
        },
        {
          wrong: "أَنْتِ مُتَزَوِّجٌ (Kamu [P] sudah menikah [L])",
          correct: "أَنْتِ مُتَزَوِّجَةٌ",
          reason: "Kata ganti 'Anti' (feminin) dipasangkan dengan khabar maskulin 'Mutazawwijun'. Yang benar adalah 'Anti Mutazawwijatun'."
        }
      ],
      comparisonWithIndonesian: "Dalam bahasa Indonesia, kita menggunakan kata 'adalah' untuk menghubungkan subjek dan predikat nominal, sedangkan dalam bahasa Arab tidak perlu. Selain itu, predikat (khabar) dalam bahasa Arab harus selalu diselaraskan dengan jenis kelamin subjek (mubtada).",
      rules: [
        {
          title: "Struktur Jumlah Ismiyyah",
          content: "Mubtada (Subjek) + Khabar (Predikat). Keduanya harus selaras dalam hal gender (mudzakkar/muannats).",
          examples: []
        }
      ],
      editorialBox: {
        title: "TIPS: KESELARASAN GENDER",
        content: "Selalu perhatikan siapa yang sedang dibicarakan. Jika membicarakan perempuan atau kata ganti perempuan (Anti, Hiya), pastikan profesi atau statusnya memiliki akhiran Ta Marbuthah (ة)!"
      }
    },
    readingSection: {
      title: "Analisis Kalimat Utuh (Qira'ah)",
      sentences: [
        {
          ar: "أَنَا طَالِبٌ وَاِسْمِي زَيْدٌ",
          translation: "Saya adalah seorang siswa dan namaku Zayd",
          grammarNote: "Mubtada 'Ana' (Saya [L]) diikuti khabar 'Thaalibun' mudzakkar. Kalimat kedua 'Ismiy Zaydun' juga merupakan Jumlah Ismiyyah."
        },
        {
          ar: "هِيَ مُعَلِّمَةٌ فِي مَدِينَةِ جَاكَرْتَا",
          translation: "Dia adalah seorang guru perempuan di kota Jakarta",
          grammarNote: "Mubtada 'Hiya' muannats, khabar 'Mu'allimatun' muannats, diikuti frasa preposisi 'fiy madiinati Jaakarta'."
        }
      ]
    },
    dialogueSection: {
      title: "Perkenalan Pertama di Kelas Bahasa Arab",
      context: "Ustadz Ahmad berkenalan dengan murid baru bernama Zayd di kelas.",
      lines: [
        {
          speaker: "Ustadz",
          ar: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
          translation: "Semoga keselamatan, rahmat Allah, dan berkah-Nya tercurah kepadamu",
          meaning: "Semoga keselamatan, rahmat Allah, dan berkah-Nya tercurah kepadamu"
        },
        {
          speaker: "Zayd",
          ar: "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
          translation: "Dan semoga keselamatan, rahmat Allah, dan berkah-Nya juga tercurah kepadamu",
          meaning: "Dan semoga keselamatan, rahmat Allah, dan berkah-Nya juga tercurah kepadamu"
        },
        {
          speaker: "Ustadz",
          ar: "أَهْلًا وَسَهْلًا بِكُمْ فِي صَفِّ اللُّغَةِ الْعَرَبِيَّةِ",
          translation: "Selamat datang semuanya di kelas Bahasa Arab",
          meaning: "Selamat datang semuanya di kelas Bahasa Arab"
        },
        {
          speaker: "Zayd",
          ar: "أَهْلًا بِكَ يَا أُسْتَاذُ، أَنَا سَعِيدٌ جِدًّا هُنَا",
          translation: "Selamat datang kembali wahai Ustadz, saya sangat senang berada di sini",
          meaning: "Selamat datang kembali wahai Ustadz, saya sangat senang berada di sini"
        },
        {
          speaker: "Ustadz",
          ar: "مَا اسْمُكَ يَا أَخِي؟ وَمِنْ أَيْنَ أَنْتَ؟",
          translation: "Siapa namamu wahai saudaraku? Dan dari mana asalmu?",
          meaning: "Siapa namamu wahai saudaraku? Dan dari mana asalmu?"
        },
        {
          speaker: "Zayd",
          ar: "اِسْمِيْ زَيْدٌ، وَأَنَا مِنْ مَدِينَةِ جَاكَرْتَا فِيْ إِنْدُونِيسِيَا",
          translation: "Namaku Zayd, dan saya berasal dari kota Jakarta di Indonesia",
          meaning: "Namaku Zayd, dan saya berasal dari kota Jakarta di Indonesia"
        },
        {
          speaker: "Ustadz",
          ar: "مَاشَاءَ اللهُ! وَكَمْ عُمْرُكَ الْآنَ يَا زَيْدُ؟",
          translation: "Masya Allah! Dan berapa umurmu sekarang wahai Zayd?",
          meaning: "Masya Allah! Dan berapa umurmu sekarang wahai Zayd?"
        },
        {
          speaker: "Zayd",
          ar: "عُمْرِي الْآنَ عِشْرُونَ سَنَةً يَا أُسْتَاذُ",
          translation: "Umurku sekarang dua puluh tahun wahai Ustadz",
          meaning: "Umurku sekarang dua puluh tahun wahai Ustadz"
        },
        {
          speaker: "Ustadz",
          ar: "هَلْ أَنْتَ طَالِبٌ فِي هَذِهِ الْجَامِعَةِ؟",
          translation: "Apakah kamu seorang mahasiswa di universitas ini?",
          meaning: "Apakah kamu seorang mahasiswa di universitas ini?"
        },
        {
          speaker: "Zayd",
          ar: "نَعَمْ، أَنَا طَالِبٌ جَدِيدٌ، وَأَنَا أَعْزَبُ",
          translation: "Ya, saya mahasiswa baru, dan saya lajang",
          meaning: "Ya, saya mahasiswa baru, dan saya lajang"
        },
        {
          speaker: "Ustadz",
          ar: "مُمْتَازٌ جِدًّا! أَنْتَ طَالِبٌ مُجْتَهِدٌ، بَارَكَ اللهُ فِيكَ",
          translation: "Sangat luar biasa! Kamu adalah siswa yang rajin, semoga Allah memberkahimu",
          meaning: "Sangat luar biasa! Kamu adalah siswa yang rajin, semoga Allah memberkahimu"
        },
        {
          speaker: "Zayd",
          ar: "وَفِيكَ بَارَكَ اللهُ يَا أُسْتَاذُ، شُكْرًا جَزِيلًا",
          translation: "Dan semoga Allah memberkahimu juga wahai Ustadz, terima kasih banyak",
          meaning: "Dan semoga Allah memberkahimu juga wahai Ustadz, terima kasih banyak"
        }
      ]
    },
    quiz: [
      {
        id: "q1",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'طَالِبٌ'?",
        options: ["Pelajar (laki)", "Pelajar (perempuan)", "Guru (laki)", "Dokter (laki)"],
        correctAnswer: "Pelajar (laki)",
        explanation: "Thaalibun (طَالِبٌ) berarti pelajar atau siswa laki-laki."
      },
      {
        id: "q2",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'مُعَلِّمَةٌ'?",
        options: ["Guru (perempuan)", "Guru (laki)", "Siswa (perempuan)", "Pegawai (perempuan)"],
        correctAnswer: "Guru (perempuan)",
        explanation: "Mu'allimatun (مُعَلِّمَةٌ) berarti guru perempuan, ditandai oleh Ta Marbuthah (ة)."
      },
      {
        id: "q3",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'طَبِيبٌ'?",
        options: ["Dokter (laki)", "Dokter (perempuan)", "Insinyur", "Petani"],
        correctAnswer: "Dokter (laki)",
        explanation: "Thabiibun (طَبِيبٌ) berarti dokter laki-laki."
      },
      {
        id: "q4",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'مُهَنْدِسٌ'?",
        options: ["Insinyur", "Arsitek", "Pegawai", "Pedagang"],
        correctAnswer: "Insinyur",
        explanation: "Muhandisun (مُهَنْدِسٌ) berarti insinyur."
      },
      {
        id: "q5",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'تَاجِرٌ'?",
        options: ["Pedagang", "Petani", "Nelayan", "Supir"],
        correctAnswer: "Pedagang",
        explanation: "Taajirun (تَاجِرٌ) berarti pedagang."
      },
      {
        id: "q6",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'مُوَظَّفٌ'?",
        options: ["Pegawai", "Buruh", "Petani", "Pelajar"],
        correctAnswer: "Pegawai",
        explanation: "Muwazh-zhafun (مُوَظَّفٌ) berarti pegawai."
      },
      {
        id: "q7",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'فَلَّاحٌ'?",
        options: ["Petani", "Insinyur", "Dokter", "Guru"],
        correctAnswer: "Petani",
        explanation: "Fallaahun (فَلَّاحٌ) berarti petani."
      },
      {
        id: "q8",
        type: "fill-blank",
        question: "Lengkapi kalimat berikut: 'Saya adalah seorang siswi (perempuan)'.",
        questionAr: "أَنَا ____",
        options: ["طَالِبٌ", "طَالِبَةٌ", "مُعَلِّمٌ", "مُعَلِّمَةٌ"],
        correctAnswer: "طَالِبَةٌ",
        explanation: "Karena subjek menyatakan dirinya siswi (perempuan), maka khabar yang tepat adalah Thaalibatun (طَالِبَةٌ) yang muannats."
      },
      {
        id: "q9",
        type: "fill-blank",
        question: "Lengkapi kalimat berikut: 'Dia (laki-laki) adalah seorang guru'.",
        questionAr: "هُوَ ____",
        options: ["مُعَلِّمٌ", "مُعَلِّمَةٌ", "طَالِبٌ", "طَالِبَةٌ"],
        correctAnswer: "مُعَلِّمٌ",
        explanation: "Subjeknya adalah Huwa (dia laki-laki), sehingga khabarnya wajib mudzakkar yaitu Mu'allimun (مُعَلِّمٌ)."
      },
      {
        id: "q10",
        type: "fill-blank",
        question: "Lengkapi kalimat berikut: 'Dia (perempuan) adalah seorang dokter'.",
        questionAr: "هِيَ ____",
        options: ["طَبِيبٌ", "طَبِيبَةٌ", "مُهَنْدِسٌ", "مُهَنْدِسَةٌ"],
        correctAnswer: "طَبِيبَةٌ",
        explanation: "Subjeknya adalah Hiya (dia perempuan), sehingga khabarnya wajib muannats yaitu Thabiibatun (طَبِيبَةٌ)."
      },
      {
        id: "q11",
        type: "multiple-choice",
        question: "Manakah khabar yang tepat untuk mubtada 'أَنْتَ'?",
        options: ["مُتَزَوِّجٌ", "مُتَزَوِّجَةٌ", "طَالِبَةٌ", "مُسْلِمَةٌ"],
        correctAnswer: "مُتَزَوِّجٌ",
        explanation: "Anta adalah subjek laki-laki, sehingga khabar harus mudzakkar (mutazawwijun)."
      },
      {
        id: "q12",
        type: "multiple-choice",
        question: "Manakah khabar yang tepat untuk mubtada 'أَنْتِ'?",
        options: ["مُسْلِمٌ", "مُسْلِمَةٌ", "أَعْزَبُ", "مُهَنْدِسٌ"],
        correctAnswer: "مُسْلِمَةٌ",
        explanation: "Anti adalah subjek perempuan, sehingga khabar harus muannats (muslimatun)."
      },
      {
        id: "q13",
        type: "translate",
        question: "Apakah arti dari kalimat 'اِسْمِيْ عُثْمَانُ'?",
        options: ["Nama saya Utsman", "Nama kamu Utsman", "Nama dia Utsman", "Nama mereka Utsman"],
        correctAnswer: "Nama saya Utsman",
        explanation: "Ismiy (اِسْمِيْ) diakhiri ya mutakallim kepemilikan orang pertama tunggal (saya)."
      },
      {
        id: "q14",
        type: "translate",
        question: "Apakah arti dari kalimat 'عُمْرِيْ عِشْرُونَ سَنَةً'?",
        options: ["Umur saya 20 tahun", "Umur saya 30 tahun", "Umur saya 10 tahun", "Umur saya 40 tahun"],
        correctAnswer: "Umur saya 20 tahun",
        explanation: "Umriy (عُمْرِي) berarti umurku, dan 'Isyruuna (عِشْرُونَ) berarti 20."
      },
      {
        id: "q15",
        type: "translate",
        question: "Apakah arti dari kalimat 'عُنْوَانِيْ فِيْ جَاكَرْتَا'?",
        options: ["Alamat saya di Jakarta", "Kantor saya di Jakarta", "Rumah saya di Jakarta", "Negara saya di Jakarta"],
        correctAnswer: "Alamat saya di Jakarta",
        explanation: "Unwaaniy (عُنْوَانِيْ) berarti alamatku, fiy (فِيْ) di, Jaakarta (جَاكَرْتَا) Jakarta."
      },
      {
        id: "q16",
        type: "translate",
        question: "Apakah arti dari kalimat 'هِيَ عَزْبَاءُ'?",
        options: ["Dia lajang (perempuan)", "Dia lajang (laki-laki)", "Dia sudah menikah", "Dia seorang pelajar"],
        correctAnswer: "Dia lajang (perempuan)",
        explanation: "Hiya (هِيَ) berarti dia perempuan, Azbaa'u (عَزْبَاءُ) berarti lajang untuk perempuan."
      },
      {
        id: "q17",
        type: "translate",
        question: "Apakah arti dari kalimat 'هُوَ أَعْزَبُ'?",
        options: ["Dia lajang (laki-laki)", "Dia lajang (perempuan)", "Dia sudah menikah", "Dia seorang pegawai"],
        correctAnswer: "Dia lajang (laki-laki)",
        explanation: "Huwa (هُوَ) berarti dia laki-laki, A'zabu (أَعْزَبُ) berarti lajang untuk laki-laki."
      },
      {
        id: "q18",
        type: "translate",
        question: "Apakah arti dari kalimat 'جِنْسِيَّتِيْ إِنْدُونِيسِيَّةٌ'?",
        options: ["Kewarganegaraan saya Indonesia", "Negara saya Indonesia", "Alamat saya Indonesia", "Keluarga saya Indonesia"],
        correctAnswer: "Kewarganegaraan saya Indonesia",
        explanation: "Jinsiyyatiy (جِنْسِيَّتِيْ) berarti kewarganegaraanku, Induuniisiyyatun (إِنْدُونِيسِيَّةٌ) berarti Indonesia (bentuk feminin)."
      },
      {
        id: "q19",
        type: "fill-blank",
        question: "Pilih kata ganti (dhamir) yang tepat: '___ طَبِيبٌ جَدِيدٌ' (Dia adalah dokter baru).",
        options: ["هُوَ", "هِيَ", "أَنْتِ", "أَنَا (perempuan)"],
        correctAnswer: "هُوَ",
        explanation: "Karena Thabiibun Jadiidun adalah maskulin, maka kata ganti orang ketiga tunggal yang tepat adalah Huwa (هُوَ)."
      },
      {
        id: "q20",
        type: "fill-blank",
        question: "Pilih kata ganti (dhamir) yang tepat: '___ مُعَلِّمَةٌ رَحِيمَةٌ' (Dia adalah guru perempuan yang penyayang).",
        options: ["هِيَ", "هُوَ", "أَنْتَ", "أَنَا (laki-laki)"],
        correctAnswer: "هِيَ",
        explanation: "Karena Mu'allimatun Rahiimatun bergender muannats, maka kata ganti yang selaras adalah Hiya (هِيَ)."
      },
      {
        id: "q21",
        type: "multiple-choice",
        question: "Apa kesalahan pada kalimat 'أَنَا طَبِيبَةٌ' jika diucapkan oleh Zayd (laki-laki)?",
        options: [
          "Thabiibatun adalah feminin, seharusnya Thabiibun",
          "Zayd harus memakai kata ganti Huwa",
          "Subjek Ana tidak boleh diikuti profesi",
          "Tidak ada kesalahan sama sekali"
        ],
        correctAnswer: "Thabiibatun adalah feminin, seharusnya Thabiibun",
        explanation: "Karena Zayd berjenis kelamin laki-laki, maka ia harus menggunakan bentuk mudzakkar yaitu Thabiibun (طَبِيبٌ)."
      },
      {
        id: "q22",
        type: "multiple-choice",
        question: "Struktur kalimat 'أَنَا طَالِبٌ' dalam tata bahasa Arab disebut sebagai...",
        options: ["Jumlah Ismiyyah", "Jumlah Fi'liyyah", "Syibhul Jumlah", "Idhafah"],
        correctAnswer: "Jumlah Ismiyyah",
        explanation: "Kalimat yang diawali oleh isim (kata benda/kata ganti) seperti Ana disebut Jumlah Ismiyyah (kalimat nominal)."
      },
      {
        id: "q23",
        type: "multiple-choice",
        question: "Dalam kalimat 'أَنَا مُعَلِّمٌ', kata 'أَنَا' berkedudukan sebagai...",
        options: ["Mubtada (Subjek)", "Khabar (Predikat)", "Fa'il (Pelaku)", "Maf'ul bih (Objek)"],
        correctAnswer: "Mubtada (Subjek)",
        explanation: "Isim di awal Jumlah Ismiyyah berkedudukan sebagai Mubtada (subjek)."
      },
      {
        id: "q24",
        type: "multiple-choice",
        question: "Dalam kalimat 'أَنْتَ مُسْلِمٌ', kata 'مُسْلِمٌ' berkedudukan sebagai...",
        options: ["Khabar (Predikat)", "Mubtada (Subjek)", "Na'at (Sifat)", "Harf"],
        correctAnswer: "Khabar (Predikat)",
        explanation: "Kata yang menerangkan keadaan mubtada disebut Khabar (predikat)."
      },
      {
        id: "q25",
        type: "multiple-choice",
        question: "Manakah penulisan kata 'Indonesia' yang tepat dalam Bahasa Arab?",
        options: ["إِنْدُونِيسِيَا", "إِنْدُونِسِيَا", "أَنْدُونِيسِيَا", "إِنْدُوْنِيْسِيَا"],
        correctAnswer: "إِنْدُونِيسِيَا",
        explanation: "Penulisan standar Indonesia dalam Bahasa Arab adalah إِنْدُونِيسِيَا."
      },
      {
        id: "q26",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'عَاصِمَةٌ'?",
        options: ["Ibukota", "Negara", "Kota", "Desa"],
        correctAnswer: "Ibukota",
        explanation: "Aashimatun (عَاصِمَةٌ) berarti ibukota."
      },
      {
        id: "q27",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'قَرْيَةٌ'?",
        options: ["Desa", "Kota", "Ibukota", "Negara"],
        correctAnswer: "Desa",
        explanation: "Qaryatun (قَرْيَةٌ) berarti desa."
      },
      {
        id: "q28",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'مَدِينَةٌ'?",
        options: ["Kota", "Desa", "Ibukota", "Pasar"],
        correctAnswer: "Kota",
        explanation: "Madiinatun (مَدِينَةٌ) berarti kota."
      },
      {
        id: "q29",
        type: "multiple-choice",
        question: "Apakah arti dari kata 'بَلَدٌ'?",
        options: ["Negara/Kampung", "Kota besar", "Ibukota", "Hutan"],
        correctAnswer: "Negara/Kampung",
        explanation: "Baladun (بَلَدٌ) berarti negara atau kampung halaman."
      },
      {
        id: "q30",
        type: "multiple-choice",
        question: "Kalimat manakah yang merupakan perkenalan diri yang tepat untuk seorang perempuan?",
        options: [
          "اِسْمِي فَاطِمَةُ وَأَنَا طَالِبَةٌ",
          "اِسْمِي فَاطِمَةُ وَأَنَا طَالِبٌ",
          "اِسْمِي أَحْمَدُ وَأَنَا طَالِبَةٌ",
          "اِسْمِي زَيْدٌ وَأَنَا مُعَلِّمَةٌ"
        ],
        correctAnswer: "اِسْمِي فَاطِمَةُ وَأَنَا طَالِبَةٌ",
        explanation: "Fatimah adalah nama perempuan, sehingga ia harus menggunakan khabar feminin yaitu Thaalibatun (طَالِبَةٌ)."
      }
    ]
  }
};
