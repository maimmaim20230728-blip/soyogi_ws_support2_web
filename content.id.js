/*
 * Dukungan untuk Pendamping (Edisi Disabilitas) - Konten (Bahasa Indonesia)
 * Prinsip:
 *  - Ini adalah kecenderungan dan petunjuk, bukan label. Orang di hadapan Anda yang utama.
 *  - Tidak ada keputusan medis. Jika ragu, arahkan ke layanan darurat setempat / dokter yang merawat.
 *  - Struktur (id / emoji / indeks jawaban / rujukan situasi) persis mengikuti content.ja.js.
 */
window.SHIEN_CONTENT = window.SHIEN_CONTENT || {};
window.SHIEN_CONTENT.id = {
  version: 1,

  basis: [
    "NICE Inggris NG10 \"Kekerasan dan agresi: penanganan jangka pendek\" (2015) — utamakan de-eskalasi tanpa pengekangan. Pengekangan fisik adalah jalan terakhir.",
    "NICE Inggris NG11 \"Perilaku menantang dan disabilitas intelektual\" (2015) — Positive Behaviour Support (PBS): pahami alasan di balik perilaku dan tata lingkungannya. Termasuk dukungan bagi keluarga dan pendamping.",
    "Positive Behaviour Support (PBS) / pendekatan Low Arousal — kurangi tuntutan dan rangsangan; jangan berkonfrontasi.",
    "Dukungan terstruktur untuk autisme (TEACCH) / Latihan Komunikasi Fungsional (FCT).",
    "Pertolongan pertama kejang: Epilepsy Foundation AS & CDC \"Stay·Safe·Side\" dan aturan 5 menit.",
    "Konvensi PBB tentang Hak Penyandang Disabilitas (CRPD) / WHO QualityRights — lindungi martabat dan penentuan nasib sendiri; sebisa mungkin hindari paksaan dan pengekangan."
  ],

  scenes: [
    {
      id: "medical", medical: true,
      title: "Kejang, cedera, kesadaran tidak normal", emoji: "🚑",
      lead: "Aplikasi ini tidak membuat keputusan medis. Jika ragu, hubungi layanan darurat — itu keputusan yang benar.",
      do: [
        "Jika hampir jatuh, topang dan baringkan perlahan; singkirkan benda berbahaya di sekitar (lepas kacamata, longgarkan kerah)",
        "Setelah kejang berhenti, miringkan tubuhnya (posisi pemulihan)",
        "Lihat jam saat kejang dimulai (hitung waktunya)"
      ],
      call119: [
        "Kejang pertama seumur hidup",
        "Kejang berlangsung lebih dari 5 menit",
        "Kejang berulang dalam jarak pendek, kesadaran tidak kembali",
        "Ada cedera, napas tidak normal",
        "Kejang di dalam air atau saat mandi"
      ],
      note: "Jika orang tersebut punya instruksi khusus dari dokter (obat darurat, suppositoria, dsb.), ikuti instruksi itu.",
      dont: [
        "Memasukkan benda ke mulut (\"mencegah lidah tergigit\" itu keliru — menyebabkan tersedak dan cedera)",
        "Menahan tubuh dengan paksa untuk menghentikan kejang",
        "Memberi makanan atau minuman segera setelah kejang"
      ],
      outdoor: [
        "Jauhkan dari tepi peron, jalan raya, tangga (pindahkan tubuh hanya jika tempat itu berbahaya)",
        "Di stasiun minta bantuan petugas; di jalan minta bantuan orang sekitar (katakan jelas: \"Tolong panggil ambulans\")",
        "Beri tahu layanan darurat nama stasiun, nomor pintu keluar, dan penanda lokasi"
      ],
      after: [
        "Catat lama dan gambaran kejang (berapa menit, gerakan apa, kesadaran sesudahnya)",
        "Laporkan ke dokter yang merawat dan keluarga",
        "Jika tampak mengantuk, biarkan istirahat di tempat aman"
      ],
      why: "Hal terpenting saat kejang bukan \"menghentikannya\", melainkan menjaga keamanan, menghitung waktu, dan menyampaikan. Ketenangan Anda adalah pertolongan terbesar bagi orang itu.",
      src: "Asosiasi Epilepsi Jepang \"Pendampingan dan pengamatan saat kejang\" / Epilepsy Foundation & CDC AS \"Stay·Safe·Side\" (pertolongan pertama, aturan 5 menit)"
    },
    {
      id: "panic",
      title: "Panik", emoji: "🌀",
      do: [
        "Amankan orang itu dan sekitarnya (jauhkan benda berbahaya)",
        "Kurangi rangsangan (berhenti bicara, jauhkan orang, redupkan suara dan cahaya)",
        "Tunggu. Temani dengan tenang sampai reda"
      ],
      dont: [
        "Menghentikan dengan suara keras, memarahi (memperkuat gejolak)",
        "Menahan tubuh dengan paksa (cedera, hilang kepercayaan — setipis rambut dari kekerasan)",
        "Menghujani pertanyaan, membujuk (tak bisa diproses, makin buruk)",
        "Mengerumuni, menarik perhatian"
      ],
      outdoor: [
        "Menepi keluar dari arus orang — dekat dinding, balik pilar, bangku",
        "Jika tak bisa bergerak, jangan paksa pindah; jadikan diri Anda dinding penghalang pandangan dan orang",
        "Sepatah kata singkat ke sekitar (\"Tidak apa-apa, sebentar lagi tenang\") — mencegah campur tangan berniat baik atau laporan ke petugas"
      ],
      after: [
        "Tawarkan air dan istirahat",
        "Catat apa pemicunya (suara? orang? perubahan jadwal? nyeri?)",
        "Bagikan di dalam lembaga"
      ],
      why: "Panik bukan \"manja\", melainkan reaksi atas rangsangan, kecemasan, atau runtuhnya kepastian yang tak sanggup lagi diproses. Yang paling menderita adalah orang itu sendiri. Lingkungan yang menenangkan dan waktu adalah dukungan terbaik.",
      src: "Buku pelatihan pendamping gangguan perilaku berat (Nozominosono, Jepang) / NICE NG11 (PBS) · NG10 (agresi: utamakan de-eskalasi tanpa pengekangan)"
    },
    {
      id: "selfharm",
      title: "Melukai diri", emoji: "🤕",
      do: [
        "Nilai apakah mengancam nyawa (benturan kepala, gigitan kuat: redam secara fisik dengan bantal dsb.)",
        "Kurangi rangsangan, bawa ke lingkungan yang menenangkan",
        "Awasi dengan tenang, rawat lukanya setelah reda"
      ],
      dont: [
        "Berteriak \"Hentikan!\" (perhatian bisa memperkuat perilaku)",
        "Terus mencengkeram lengan dengan paksa",
        "Menghukum, memarahi"
      ],
      outdoor: [
        "Jauhkan tubuh dari benda keras — aspal, pilar, pagar pembatas (menyisipkan tas atau jaket di antaranya juga membantu)",
        "Jika kerumunan mulai terbentuk, sepatah kata (\"Tidak apa-apa\") — tatapan itu sendiri adalah rangsangan"
      ],
      after: [
        "Periksa dan rawat luka",
        "Catat situasi sesaat sebelumnya (setelah kejadian apa?)",
        "Jika sering terjadi, diskusikan peninjauan rencana dukungan (dokter, koordinator)"
      ],
      why: "Melukai diri sering punya fungsi: mengungkapkan rasa tak nyaman, meminta, memastikan sensasi, mencari perhatian. Pekerjaan sesungguhnya adalah menumbuhkan \"cara pengganti\" yang sesuai fungsinya (pemikiran analisis perilaku terapan).",
      src: "Buku pelatihan pendamping gangguan perilaku berat (Nozominosono, Jepang) / NICE NG11 (PBS) · NG10 (agresi: utamakan de-eskalasi tanpa pengekangan)"
    },
    {
      id: "aggression",
      title: "Menyakiti orang lain, merusak barang", emoji: "💥",
      do: [
        "Ambil jarak dulu (minimal sepanjang lengan). Jauhkan pengguna lain, amankan sekitar",
        "Segera panggil bantuan dan laporkan ke atasan (boleh sambil menangani. Jangan pikul sendirian)",
        "Suara rendah, kata-kata pendek — atau diam dan kurangi rangsangan"
      ],
      dont: [
        "Bergulat dari depan, menindih (risiko kecelakaan dan kekerasan)",
        "Membentak, saling melotot",
        "Mendesak: \"Kenapa kamu begini?!\""
      ],
      outdoor: [
        "Prioritas utama menjauhkan pejalan kaki (\"Maaf, tolong menjauh\" dengan jelas)",
        "Di stasiun minta bantuan petugas atau satpam (di luar, jangan pikul sendirian)"
      ],
      after: [
        "Periksa cedera dan kerusakan. Hubungi sesuai aturan lembaga",
        "Catat pemicu dan kronologinya",
        "Bagikan tanda-tanda awal (ekspresi, suara, gerakan) antar staf"
      ],
      why: "Kebanyakan agresi adalah \"ledakan\" dari permintaan, rasa tak nyaman, atau ketakutan yang tak tersampaikan. Bukan mengincar orang; sering kali hanya berakhir mengenai orang. Mengenali tanda awal adalah langkah pertama pencegahan.",
      src: "Buku pelatihan pendamping gangguan perilaku berat (Nozominosono, Jepang) / NICE NG11 (PBS) · NG10 (agresi: utamakan de-eskalasi tanpa pengekangan)"
    },
    {
      id: "runaway",
      title: "Kabur, menghilang", emoji: "🏃",
      do: [
        "Jangan kejar tepat dari belakang (mengejar membuatnya makin cepat). Tetap terlihat, berlari sejajar, dan utamakan menutup arah berbahaya: jalan raya, air, rel",
        "Segera panggil bantuan dan laporkan ke atasan (sambil bertindak. Jangan tangani sendirian atau hanya dengan tim sendiri)",
        "Jika hilang dari pandangan, tanpa ragu: lapor sesuai aturan lembaga (polisi) dan mulai pencarian"
      ],
      dont: [
        "Terus meneriakkan namanya (bisa memperkuat pelarian)",
        "Memikul sendiri, menunda laporan",
        "Memarahi saat kembali (ia akan belajar: \"kembali = terjadi hal tak menyenangkan\")"
      ],
      outdoor: [
        "Di stasiun, begitu hilang dari pandangan segera ke petugas (peron, gerbang tiket, kamera — petugas yang paling cepat)",
        "Sampaikan pakaian, perawakan, tempat yang mungkin dituju dan minta bantuan (jangan ragu: beberapa menit bisa menentukan nyawa)"
      ],
      after: [
        "Saat ditemukan, hampiri dengan tenang dan periksa cedera",
        "Catat rute dan waktu (arah tujuannya adalah petunjuk dukungan)",
        "Jangan biarkan keluarga memikul sendirian. Minta bantuan atau arahan dari pendamping terkait (koordinator, petugas), dan sesuai situasi, dokter yang merawat",
        "Tinjau ulang pintu keluar-masuk dan sistem pengawasan"
      ],
      why: "Di balik kabur sering ada \"rangsangan yang ingin dihindari\" atau \"tujuan yang ingin didatangi\". Mencari alasannya, bukan menyalahkan — itulah yang menyiapkan pencegahan berikutnya.",
      src: "Dasar-dasar pelatihan pendampingan bepergian (menjaga keselamatan di luar) dll."
    },
    {
      id: "freeze",
      title: "Membeku, tak bisa bergerak", emoji: "🧊",
      do: [
        "Tunggu (tetapkan waktunya: 5 menit dulu)",
        "Kurangi rangsangan dan tuntutan (jangan buru-buru, jangan sentuh)",
        "Tunjukkan satu saja gambaran berikutnya, singkat dan terlihat (\"selesai ini, minum teh\")"
      ],
      dont: [
        "Menarik tangan agar bergerak",
        "Menyapa bertubi-tubi (\"ayo, jalan, cepat\")",
        "Berunding dengan orang lain di atas kepalanya"
      ],
      outdoor: [
        "Jika di tengah lorong, arahkan pelan keluar dari arus orang (dekat dinding). Jika tak bisa bergerak, jadilah perisai dan tunggu",
        "Daripada mendesak, katakan \"Masih ada waktu, kok\". Ke sekitar cukup singkat: \"Kami menunggu sebentar\""
      ],
      after: [
        "Catat apa yang membuatnya bisa bergerak (waktu? benda yang ditunjukkan? pergantian orang?)",
        "Petakan dan bagikan situasi yang mudah membuatnya membeku"
      ],
      why: "Membeku bukan penolakan; sering kali \"pemrosesan peralihan yang butuh waktu\". Dari orang yang bisa bergerak jika ditunggu, pendamping yang sanggup menunggu bisa belajar.",
      src: "Pemikiran dukungan terstruktur untuk autisme (TEACCH dll.)"
    },
    {
      id: "shouting",
      title: "Suara keras, teriakan", emoji: "📢",
      do: [
        "Curigai dulu lingkungannya (panas? berisik? lapar? nyeri?)",
        "Arahkan ke tempat tenang, atau turunkan rangsangan sekitar",
        "Justru saat sedang tenang, perbanyak keterlibatan"
      ],
      dont: [
        "Membalas suara keras dengan suara keras",
        "Mengulang-ulang \"Diam!\"",
        "Selalu meluluskan tuntutan agar diam (ia belajar: \"bersuara = terkabul\")"
      ],
      outdoor: [
        "Pindah perlahan ke tempat tenang (ujung peron, luar gerbang tiket, luar toko)",
        "Jangan bertengkar dengan yang menegur: singkat saja \"Maaf, ini bagian dari disabilitasnya\". Menunjukkan kartu/tanda bantuan juga efektif"
      ],
      after: [
        "Catat jam, tempat, kejadian sesaat sebelumnya (jika selalu di jam sama, curigai kondisi badan atau faktor lingkungan)",
        "Periksa juga riwayat nyeri (gigi, telinga, perut)",
        "Catat perubahan yang mengganjal dan bagikan ke tim dan atasan"
      ],
      why: "Suara adalah alat ekspresi yang paling mudah dikeluarkan. Bila sarana menyampaikan (kartu, menunjuk, alat) tumbuh, suara keras sering berkurang.",
      src: "Pemikiran Latihan Komunikasi Fungsional (FCT) dll."
    },
    {
      id: "fixation",
      title: "Terpaku, tak bisa lanjut", emoji: "🔁",
      do: [
        "Jika aman, ikuti dulu (kekakuan itu cara dia merasa aman)",
        "Tunjukkan akhirnya secara terlihat (timer, \"3 kali lagi\")",
        "Perubahan yang benar-benar perlu: pemberitahuan awal + 2 pilihan (\"A atau B, pilih mana?\")"
      ],
      dont: [
        "Memutus dengan paksa",
        "Mengambil dengan menipu (kepercayaan hilang, berikutnya makin kuat)",
        "Janji bohong sekadar lolos saat itu"
      ],
      outdoor: [
        "Untuk kekakuan soal kereta, rute, urutan: kelonggaran waktu adalah pencegahan terbaik",
        "Jika harus berubah: jangan berlarut di tempat, beri gambaran (\"hari ini jalan A, lain kali jalan B\")"
      ],
      after: [
        "Catat objek dan kondisi kekakuannya (kapan, di mana, pada apa)",
        "Pertimbangkan sistem pemberitahuan awal (kartu gambar, jadwal)",
        "Catat kesulitan dan bagikan ke tim dan atasan"
      ],
      why: "Kekakuan adalah upaya orang itu membuat dunia yang mencemaskan jadi bisa diprediksi. Bukan merampasnya, melainkan memperluas landasan rasa aman dan menambah pilihan sedikit demi sedikit.",
      src: "Buku pelatihan gangguan perilaku berat / dukungan terstruktur (TEACCH) / NICE NG11 (PBS)"
    },
    {
      id: "hallucination",
      title: "Keluhan seperti halusinasi/waham", emoji: "💭",
      do: [
        "Jangan menyangkal, jangan membenarkan (jawab perasaannya: \"Terdengar begitu, ya. Pasti cemas, ya\")",
        "Alihkan perlahan ke topik atau kegiatan nyata yang menenangkan",
        "Jika bertambah sering: bagikan ke dokter dan keluarga, konsultasikan pemeriksaan"
      ],
      dont: [
        "Berdebat: \"Tidak ada yang begitu\"",
        "Mengikuti cerita dan ikut membesar-besarkan",
        "Menertawakan, menganggap enteng"
      ],
      after: [
        "Catat isi, jam, frekuensi (setelah ganti obat? tidurnya cukup?)",
        "Isi bernada perintah (\"disuruh mati\" dsb.): segera ke medis"
      ],
      why: "Bagi orang itu, suara dan bayangan itu sungguh terdengar dan terlihat. Yang dipersoalkan bukan benar-salahnya, melainkan kecemasan yang dibawa pengalaman itu. Rasa aman adalah prioritas utama.",
      src: "Pengetahuan umum panduan keluarga (kegawatdaruratan psikiatri, skizofrenia)"
    },
    {
      id: "hyperventilation",
      title: "Hiperventilasi", emoji: "😮‍💨",
      do: [
        "Ke tempat tenang. Dudukkan, dampingi di sisinya",
        "\"Tidak apa-apa. Buang napas pelan-pelan\" — sesuaikan ucapan dengan embusan napasnya",
        "Temani sampai tenang"
      ],
      dont: [
        "Menutup mulut dengan kantong kertas (metode kantong kertas berisiko hipoksia dan kini tidak dianjurkan)",
        "Berkata keras \"Tenang!\"",
        "Meninggalkannya sendirian di tempat"
      ],
      outdoor: [
        "Dudukkan di bangku atau undakan, menjauh dari kerumunan",
        "Ke sekitar sepatah kata: \"Tidak apa-apa, istirahat sebentar juga tenang\""
      ],
      after: [
        "Jika pertama kali, ada penyakit bawaan, atau tak kunjung pulih: ke medis",
        "Catat pemicunya (cemas, lelah, keramaian)",
        "Jika berulang, catat dan bagikan ke tim dan atasan"
      ],
      why: "Hiperventilasi sendiri jarang merenggut nyawa, tetapi orang itu berada dalam ketakutan \"mungkin aku mati\". Suara yang tenang dan pendampingan adalah obat terbaik.",
      src: "Penjelasan medis sindrom hiperventilasi (metode kantong kertas tidak dianjurkan)"
    },
    {
      id: "medication",
      title: "Menolak minum obat", emoji: "💊",
      do: [
        "Mundur sekali (beri jeda, lalu coba lagi)",
        "Ubah bentuk, waktu, atau orang yang membantu",
        "Jika berlanjut, jangan putuskan sendiri: konsultasi ke dokter/apoteker (ganti sediaan, bantuan minum obat)"
      ],
      dont: [
        "Menahan tubuh dan memaksa minum",
        "Mencampur ke makanan diam-diam (sumber ketidakpercayaan. Kalaupun dilakukan, hanya dengan persetujuan dokter dan keluarga)",
        "Bertransaksi: \"Kalau tidak minum, tidak boleh ...\""
      ],
      after: [
        "Catat gambaran penolakannya (rasa? ukuran? suasana hati? — mungkin tanda efek samping)",
        "Pastikan disampaikan saat periksa ke dokter"
      ],
      why: "Penolakan punya alasan (sulit ditelan, efek samping berat, tak paham maknanya). Pencarian penyebab dilakukan bersama medis. Memaksa membuat kehilangan jauh lebih banyak daripada satu butir obat hari ini.",
      src: "Pengetahuan umum bantuan minum obat (asosiasi apoteker dll.)"
    },
    {
      id: "anxiety",
      title: "Cemas berat, \"mau pulang\"", emoji: "🏠",
      do: [
        "Terima perasaannya apa adanya (\"Ingin pulang, ya\")",
        "Tunjukkan gambaran konkret (\"habis camilan, naik bus, ya\")",
        "Jembatani ke benda penenang atau kegiatan kesukaan"
      ],
      dont: [
        "Terus mengelak (\"sebentar lagi, kok\")",
        "Membujuk dengan logika",
        "Menyebut waktu bohong (kepercayaan hilang)"
      ],
      outdoor: [
        "Beri gambaran dengan satuan yang terlihat: \"2 stasiun lagi\", \"belok tikungan ini\"",
        "Di hari kecemasan berat, keberanian memangkas jadwal juga bagian dari dukungan"
      ],
      after: [
        "Catat jam dan hari saat kecemasan menguat",
        "Bagikan kiat menambah rasa aman lewat barang bawaan atau lingkungan"
      ],
      why: "\"Mau pulang\" sering kali kata yang mencari rasa aman, bukan tempat. Kita tambah satu per satu bahan yang membuatnya merasa \"di sini aman\".",
      src: "Pengetahuan umum dukungan bagi orang dengan kecemasan berat"
    }
  ],

  /* ===== Komunikasi: frasa siap pakai ===== */
  phraseGroups: [
    { id: "feel",  label: "Perasaan",  emoji: "💙", items: ["Aku senang", "Aku sedih", "Aku takut", "Aku tidak mau", "Aku baik-baik saja", "Aku marah"] },
    { id: "body",  label: "Badan",  emoji: "🩹", items: ["Sakit", "Aku lelah", "Toilet", "Aku lapar", "Aku haus", "Aku mengantuk", "Badanku tidak enak"] },
    { id: "ask",   label: "Permintaan", emoji: "🙏", items: ["Tolong bantu", "Aku mau istirahat", "Bicaralah pelan-pelan", "Tolong ulangi", "Tolong tuliskan", "Tolong jangan berisik"] },
    { id: "reply", label: "Jawaban",  emoji: "💬", items: ["Ya", "Tidak", "Tidak tahu", "Tunggu sebentar", "Terima kasih", "Maaf"] }
  ],

  /* ===== Catatan: pilihan (cukup ketuk, selesai dalam hitungan detik) ===== */
  logOptions: {
    triggers: ["Suara / cahaya", "Orang dekat / ramai", "Perubahan jadwal", "Permintaan tak terpenuhi", "Nyeri / kondisi badan", "Menunggu", "Tidak tahu", "Lainnya"],
    durations: ["≤ 5 mnt", "≤ 15 mnt", "≤ 30 mnt", "Lebih lama"],
    responses: ["Mengurangi rangsangan", "Pindah tempat", "Mengawasi", "Memberi gambaran berikutnya", "Memakai tulisan / dukungan visual", "Menghubungkan ke medis / darurat", "Lainnya"],
    injuries: ["Tidak ada", "Orangnya terluka", "Orang lain terluka", "Barang rusak"]
  },

  traits: [
    {
      id: "asd", name: "Gangguan spektrum autisme (ASD)", emoji: "🧩",
      short: "Kekhasan relasi, kelekatan, dan sensorik",
      what: [
        "Kekhasan yang memadukan cara berelasi dan berkomunikasi yang unik, minat dan kelekatan yang kuat, serta kepekaan sensorik yang tinggi (atau rendah). Ada yang disertai keterlambatan intelektual, ada yang tidak.",
        "Wujudnya sangat berbeda pada tiap orang (\"spektrum\" = kontinum). Jangan menghakimi; lihatlah orangnya.",
        "Bagi dirinya, dunia sulit diprediksi dan rangsangannya kuat — mengurangi kecemasan itulah inti dukungan."
      ],
      prepare: [
        "Tempat baru dan bepergian: \"pelajari dulu\" lewat foto atau survei awal. Bagikan alurnya lebih dahulu dalam bentuk yang terlihat.",
        "Justru saat perubahan tak terelakkan: beri tahu lebih awal + sisakan ruang memilih (perubahan mendadak adalah stres terbesar).",
        "Jangan memburu, jangan mengagetkan. Tahapan yang disepakati orangnya menciptakan ketenangan di hari H."
      ],
      comm: [
        "Singkat, konkret, satu per satu (\"kalau jarum jam di angka 3\" daripada \"nanti\")",
        "Bentuk yang \"terlihat\" daripada kata-kata (gambar, foto, tulisan, benda nyata)",
        "Sindiran, lelucon, ironi sulit sampai. Kalimat afirmatif yang jelas (\"jalan kaki\" daripada \"jangan lari\")",
        "Jawaban bisa butuh waktu. Tunggu tanpa memburu"
      ],
      env: [
        "Perlihatkan jadwal lebih dahulu (strukturisasi jadwal)",
        "Kurangi rangsangan (suara, cahaya, keramaian). Siapkan earmuff atau tempat tenang",
        "Perubahan selalu berpasangan dengan pemberitahuan awal. Perubahan mendadak adalah stres terbesar"
      ],
      scenes: ["panic", "runaway", "fixation", "shouting", "selfharm", "freeze"],
      ng: [
        "Memaksa kontak mata",
        "Menghentikan kelekatan dengan paksa",
        "Memarahi secara abstrak (\"yang benar dong\", \"baca suasana\")"
      ],
      src: "NICE NG11 (PBS) / dukungan terstruktur autisme (TEACCH) / DSM-5"
    },
    {
      id: "adhd", name: "Gangguan pemusatan perhatian dan hiperaktivitas (ADHD)", emoji: "⚡",
      short: "Kurang perhatian, hiperaktif, impulsif yang kuat",
      what: [
        "Kurang perhatian (mudah teralih, lupa) serta hiperaktif-impulsif (sulit diam, sulit menunggu) yang jauh lebih kuat dibanding usianya.",
        "Bukan malas, bukan watak, melainkan perbedaan cara kerja \"fungsi eksekutif\" otak.",
        "Karena terus dimarahi, mudah kehilangan percaya diri. Keterlibatan yang menyoroti keberhasilan itu manjur."
      ],
      comm: [
        "Instruksi satu per satu, singkat. Padukan dengan memo dan pengingat",
        "Puji secara konkret \"pada detik\" berhasilnya (jeda waktu membuatnya kurang mempan)",
        "Jangan menghardik. Jangan salahkan perilakunya; carikan caranya bersama-sama"
      ],
      env: [
        "Kurangi rangsangan pengalih (penataan tempat duduk, barang, suara)",
        "Visualisasi (daftar tugas, timer, tabel centang)",
        "Sediakan jeda untuk bergerak dan beristirahat berkala"
      ],
      scenes: ["shouting", "runaway", "anxiety"],
      ng: [
        "Memarahi berulang \"Berapa kali harus dibilang?\"",
        "Penjelasan panjang, banyak instruksi sekaligus",
        "Menganggap tindakan impulsif sebagai cacat pribadi"
      ],
      src: "NICE (pedoman ADHD) / DSM-5"
    },
    {
      id: "id", name: "Disabilitas intelektual", emoji: "📘",
      short: "Pemahaman dan penilaian berjalan pelan",
      what: [
        "Perkembangan pemahaman-penilaian, baca-tulis-hitung, pengelolaan uang dan waktu yang lebih lambat, sehingga keseharian terasa \"sulit dimengerti\".",
        "Derajat serta kekuatan-kelemahan tiap orang berbeda. Jangan perlakukan seperti anak kecil; hormati sesuai usia.",
        "Sering kesulitan karena tak bisa berkata \"tidak mengerti\". Ubah cara menyampaikan, maka akan sampai."
      ],
      prepare: [
        "Bagikan yang akan dikerjakan lebih dahulu dengan foto atau benda nyata, sambil \"mencontohkan\". Hindari \"mendadak di hari H\".",
        "Pecah langkah jadi kecil-kecil, rapikan ke bentuk yang bisa dilakukan sebelum mulai.",
        "Rencana yang longgar, yang bisa dijalani sesuai temponya sendiri."
      ],
      comm: [
        "Pelan, singkat, dengan kata yang ramah. Hindari kata sulit dan banyak hal sekaligus",
        "Konkret daripada abstrak (benda nyata, gambar, peragaan). Contohkan",
        "Daripada \"mengerti?\", pastikan dengan memintanya mencoba",
        "Sopan sesuai usia (jangan bahasa bayi)"
      ],
      env: [
        "Jadikan urutan kerja terlihat (panduan foto, tabel centang)",
        "Persempit pilihan agar mudah memilih",
        "Pecah jadi langkah kecil yang bisa berhasil"
      ],
      scenes: ["runaway", "fixation", "anxiety", "freeze"],
      ng: [
        "Memperlakukan seperti anak kecil, nada merendahkan",
        "Memburu-buru, memberi banyak instruksi sekaligus",
        "Menyalahkan: \"tadi kan sudah dibilang\""
      ],
      src: "NICE NG11 (PBS) / DSM-5 (gangguan perkembangan intelektual)"
    },
    {
      id: "ld", name: "Gangguan belajar spesifik (LD)", emoji: "✏️",
      short: "Kesulitan khusus: membaca, menulis, berhitung",
      what: [
        "Tanpa keterlambatan besar pada kecerdasan umum, hanya \"bidang belajar tertentu\" — membaca, menulis, berhitung — yang sangat sulit.",
        "Bukan kurang usaha, bukan masalah kecerdasan, melainkan ketimpangan kuat-lemah pemrosesan informasi otak.",
        "Tanpa menyalahkan kelemahannya, kompensasi lewat cara lain membuat kemampuannya keluar."
      ],
      comm: [
        "Sulit membaca → pembacaan, penanda baca, audio. Sulit menulis → mengetik, foto, rekaman",
        "Sampaikan lewat lisan dan tulisan, dua-duanya",
        "Kepedulian untuk tidak menyuruh tugas yang sulit di depan orang"
      ],
      env: [
        "Manfaatkan TIK (tablet, input suara, kalkulator)",
        "Huruf besar, jarak baris lebar, format sederhana",
        "Cara agar bisa berpartisipasi lewat jalur kuatnya"
      ],
      scenes: ["anxiety"],
      ng: [
        "Memvonis \"pemalas\"",
        "Memaksa membaca nyaring atau menyalin papan yang sulit",
        "Membandingkan dengan orang lain"
      ],
      src: "DSM-5 (gangguan belajar spesifik) / pemikiran akomodasi yang layak (CRPD)"
    },
    {
      id: "scz", name: "Skizofrenia", emoji: "🌫️",
      short: "Halusinasi, waham, gelombang penurunan minat",
      what: [
        "Penyakit jiwa yang bisa menimbulkan halusinasi (mendengar suara yang tak ada), waham, pikiran sulit runtut, dan penurunan minat.",
        "Ada gelombangnya; ada juga masa kondisi baik. Dengan pengobatan dan dukungan tepat, bisa hidup tenang.",
        "\"Bagi orangnya itu nyata\" — jangan berdebat; mendampingi kecemasannya adalah dasar."
      ],
      comm: [
        "Halusinasi/waham jangan disangkal atau dibenarkan; jawab perasaannya (\"Cemas, ya\")",
        "Singkat, lembut, sedikit rangsangan",
        "Perhatikan apakah obat berlanjut dan tidurnya cukup"
      ],
      env: [
        "Lingkungan tenang dan aman. Hindari perubahan mendadak dan rangsangan kuat",
        "Sadari dini perubahan kondisi (tak bisa tidur, keluhan merasa dijahati bertambah)",
        "Bekerja sama dengan orangnya, keluarga, dan dokter yang merawat"
      ],
      scenes: ["hallucination", "anxiety", "panic"],
      ng: [
        "Berusaha mengalahkan waham dengan logika",
        "Mengikuti cerita dan ikut membesar-besarkan",
        "Salah paham sebagai malas dan memaksa beraktivitas"
      ],
      src: "NICE (pedoman psikosis/skizofrenia) / WHO QualityRights"
    },
    {
      id: "mood", name: "Depresi, gangguan bipolar (gangguan suasana hati)", emoji: "🌗",
      short: "Keterpurukan berat / gelombang suasana hati",
      what: [
        "\"Depresi\": keterpurukan dan hilangnya minat yang berkepanjangan. \"Bipolar\": bolak-balik antara depresi dan fase naik (mania).",
        "Tidak sembuh dengan kemauan. Kata \"semangat!\" justru bisa memojokkan.",
        "Memahami gelombangnya, tidak memaksakan, dan menemani — itulah penopangnya."
      ],
      comm: [
        "Jangan ucapkan \"semangat\" atau \"cuma perasaanmu\". Terima dulu penderitaannya",
        "Jangan paksa keputusan atau pekerjaan rumit",
        "Saat fase naik: rem bersama keputusan besar dan pemborosan"
      ],
      env: [
        "Lingkungan untuk istirahat, atur tempo. Jangan salahkan hari yang tak bisa apa-apa",
        "Bantu menata ritme hidup dan tidur",
        "Keluhan \"ingin mati\" jangan dianggap enteng: segera medis dan keluarga"
      ],
      scenes: ["anxiety", "selfharm"],
      ng: [
        "Menyemangati berlebihan, mencambuk",
        "Membandingkan: \"semua orang juga susah\"",
        "Mengabaikan isyarat ingin mati"
      ],
      src: "NICE (pedoman depresi/bipolar) / pengetahuan umum pencegahan bunuh diri"
    },
    {
      id: "anx", name: "Gangguan kecemasan, OCD", emoji: "🫧",
      short: "Cemas berlebihan, ritual pengecekan",
      what: [
        "Kecemasan dan ketakutan yang berlebihan (serangan panik, pengecekan yang tak bisa berhenti) sampai mengaduk-aduk kehidupan.",
        "Bukan \"terlalu dipikirkan\": rem kecemasan otak sedang kurang pakem.",
        "Dengan menumpuk rasa aman, perlahan mereda."
      ],
      comm: [
        "Jangan sangkal kecemasannya (\"saya di sini\" daripada \"tidak apa-apa kok\")",
        "Gambaran yang konkret (\"10 menit lagi selesai\")",
        "Jangan langsung melarang ritual pengecekan"
      ],
      env: [
        "Lingkungan yang bisa diprediksi dan aman",
        "Kurangi rangsangan dan tekanan",
        "Tempat tenang untuk menata napas"
      ],
      scenes: ["anxiety", "hyperventilation", "panic", "fixation"],
      ng: [
        "Menepis \"terlalu dipikirkan\"",
        "Memaksa menghadapi situasi yang dicemaskan",
        "Melarang ritual pengecekan dengan kekuatan"
      ],
      src: "NICE (pedoman gangguan kecemasan/OCD)"
    },
    {
      id: "ptsd", name: "PTSD, isu kelekatan (attachment)", emoji: "🕯️",
      short: "Pengalaman pahit yang terus berlanjut kini",
      what: [
        "Pengalaman pahit di masa lalu (kekerasan, bencana, kecelakaan…) berlanjut sebagai kilas balik, kepekaan berlebih, dan penghindaran. Ada pula yang membawa luka kelekatan.",
        "Bukan \"berlebihan\" ataupun \"urusan masa lalu\": reaksi itu masih berlangsung sekarang.",
        "Rasa aman-nyaman dan tumpukan kepercayaan \"orang ini tidak apa-apa\" adalah landasan pemulihan."
      ],
      comm: [
        "Jangan sentuh tiba-tiba, jangan dekati dari belakang (jangan kagetkan)",
        "Sisakan ruang memilih dan menolak (rasa kendali memberi aman)",
        "Tepati janji, tumpuk kepercayaan kecil"
      ],
      env: [
        "Lingkungan aman dan bisa diprediksi. Hindari suara keras dan pendekatan mendadak",
        "Ketahui bahwa suara, tempat, situasi tertentu bisa jadi pemicu",
        "Saat kilas balik: sampaikan dengan tenang \"sekarang aman\""
      ],
      scenes: ["panic", "anxiety", "selfharm"],
      ng: [
        "Memaksa menceritakan pengalamannya",
        "Mengagetkan, kontak fisik tiba-tiba",
        "Memperlakukan reaksinya sebagai \"manja\""
      ],
      src: "NICE (pedoman PTSD) / pemikiran trauma-informed care"
    },
    {
      id: "epi", name: "Epilepsi", emoji: "🧠",
      short: "Kejang akibat gangguan sesaat di otak",
      what: [
        "Gangguan listrik sesaat di otak menimbulkan \"kejang\". Bentuknya beragam: dari kejang-kejang hingga bengong sekejap.",
        "Di luar kejang, kebanyakan hidup biasa saja. Bukan \"orang berbahaya\".",
        "Yang penting: respons tenang saat kejang dan mengetahui \"aturan 5 menit\"."
      ],
      comm: [
        "Kejang bukan kehendaknya. Awasi dengan tenang",
        "Setelah kejang bisa linglung. Biarkan istirahat tanpa diburu",
        "Ketahui lebih dulu \"tipe kejang\"-nya dan instruksi dokternya"
      ],
      env: [
        "Cegah cedera (sudut, area air, ketinggian, saat mandi)",
        "Catat kejang (waktu, gambaran) dan bagikan",
        "Dukung pengelolaan obat secara halus"
      ],
      scenes: ["medical"],
      ng: [
        "Memasukkan benda ke mulut (keliru; sumber tersedak dan cedera)",
        "Menahan dengan paksa",
        "Memberi makan-minum segera setelah kejang"
      ],
      src: "Epilepsy Foundation & CDC AS \"Stay·Safe·Side\" / Asosiasi Epilepsi Jepang"
    },
    {
      id: "abi", name: "Gangguan fungsi luhur otak", emoji: "🧭",
      short: "Disabilitas tak kasatmata pasca kecelakaan/penyakit",
      what: [
        "Setelah kecelakaan atau penyakit (cedera otak, stroke, dll.), memori, atensi, perencanaan, dan kendali emosi terganggu secara tak kasatmata.",
        "Dari luar sulit terlihat; mudah disalahpahami \"orangnya berubah\". Dirinya sendiri pun kebingungan.",
        "Banyak kemampuan yang tersisa. Kiat mengompensasi kelemahan memperluas kehidupannya."
      ],
      comm: [
        "Satu per satu, singkat. Padukan memo dan pengingat",
        "Saat emosi mudah memuncak: kurangi rangsangan, jangan salahkan",
        "Jangan tegur \"tadi kan sudah bilang\" (itu gangguan memori)"
      ],
      env: [
        "Jadikan urutan dan jadwal terlihat (memo, jadwal, alarm)",
        "Lingkungan tenang tanpa pengalih",
        "Stabilkan dengan urutan sama, tempat sama"
      ],
      scenes: ["shouting", "anxiety", "freeze"],
      ng: [
        "Salah paham sebagai \"malas\" atau \"manja\"",
        "Memberi banyak instruksi sekaligus",
        "Menunjuk-nunjuk berulang hal yang tak bisa"
      ],
      src: "Pengetahuan umum dukungan gangguan fungsi luhur otak (Pusat Rehabilitasi Nasional Jepang dll.)"
    },
    {
      id: "sbd", name: "Gangguan perilaku berat", emoji: "🆘",
      short: "Melukai diri/orang lain dst.; butuh dukungan ekstra",
      what: [
        "\"Keadaan\" — bukan nama penyakit — ketika melukai diri, menyakiti orang, kelekatan kuat, perusakan terjadi dengan frekuensi dan intensitas sangat tinggi sehingga butuh dukungan ekstra tebal.",
        "Orangnya bukan \"orang yang merepotkan\", melainkan \"sedang kesulitan\". Latar belakangnya: tak tersampaikan, ketidakcocokan dengan lingkungan.",
        "Dengan Positive Behaviour Support (PBS), membaca alasan perilaku dan menata lingkungan bisa banyak mengubah keadaan."
      ],
      prepare: [
        "Panggung utama dukungan adalah \"sebelum perilaku terjadi\". Bepergian dan acara dimulai dari menyusun rencana yang realistis dengan saksama.",
        "Agar orangnya punya gambaran dan menyetujui (di mana, apa, berapa lama, selesai lalu bagaimana — dibagikan lebih dahulu).",
        "Tahapan yang menghindari rangsangan yang tak disukai, keramaian, dan menunggu. Tentukan lebih dulu tempat istirahat, waktu pulang, dan jalan keluar.",
        "Jangan berusaha membereskan setelah panik terjadi — hanya menyakitkan bagi semua. Catat yang berhasil / yang berat, jadikan bekal rencana berikutnya."
      ],
      comm: [
        "Telusuri \"fungsi (alasan)\" perilaku (permintaan, penghindaran, perhatian, sensasi)",
        "Tumbuhkan sarana menyampaikan (kartu, alat)",
        "Justru saat sedang baik, terlibatlah lebih tebal"
      ],
      env: [
        "Kurangi rangsangan, tuntutan, runtuhnya kepastian (strukturisasi, rangsangan rendah)",
        "Catat pemicu → perilaku → hasil, analisis sebagai tim",
        "Jangan bergantung pada pengekangan dan bentakan. Bekerja sama dengan profesional dan medis"
      ],
      scenes: ["selfharm", "aggression", "runaway", "panic", "fixation", "shouting"],
      ng: [
        "Menekan dengan kekuatan, menghentikan dengan bentakan",
        "Terus meluluskan tuntutan demi aman sesaat",
        "Dipikul sendirian atau oleh satu lembaga saja"
      ],
      src: "Buku pelatihan pendamping gangguan perilaku berat (Nozominosono, Jepang) / NICE NG11 (PBS)"
    }
  ],

  /* ===== Belajar: kiat hari ini ===== */
  hints: [
    "Kiat dukungan hanyalah \"kecenderungan\". Orang di hadapan Anda selalu buku pelajaran nomor satu.",
    "Perilaku selalu punya alasan. Sekadar melihat \"orang yang kesulitan\", bukan \"orang yang menyulitkan\", sudah mengubah respons.",
    "Dengan gambaran ke depan, orang bisa tenang. Menyampaikan \"selanjutnya ada apa\" lebih dulu adalah pencegahan terbesar.",
    "Perubahan bukan mendadak, melainkan berpasangan dengan pemberitahuan. \"Perubahan mendadak\" cenderung jadi stres terbesar.",
    "Bentuk \"terlihat\" daripada kata-kata. Gambar, foto, tulisan, benda nyata kadang menyampaikan berlipat kali lebih baik.",
    "\"Jalan kaki\" daripada \"jangan lari\". Perilaku yang diharapkan, dalam kalimat afirmatif, lebih sampai daripada larangan.",
    "Satu per satu. Instruksi singkat dan konkret. \"Yang benar\", \"yang rapi\" justru kata paling sulit dipahami.",
    "Puji konkret \"pada detik\" berhasilnya. Diberi jeda, pujian jadi sulit sampai.",
    "Justru saat tenang, perbanyak keterlibatan. Bila hanya didekati saat bermasalah, masalah menjadi \"cara memanggil\".",
    "Pengekangan setipis rambut dari cedera, hilangnya kepercayaan, kekerasan. Mulailah dari jarak dan mengurangi rangsangan.",
    "Di tengah panik, penjelasan dan bujukan tak sampai. Kurangi rangsangan dulu, tunggu redanya.",
    "Panggung utama dukungan adalah \"sebelum terjadi\". Persiapan dan rencana menciptakan ketenangan hari H.",
    "Bepergian: rencanakan dengan saksama. Tempat istirahat, waktu pulang, jalan keluar yang diputuskan lebih dulu memberi tenang.",
    "Sebelum respons yang baik, jangan lakukan dulu \"yang tidak boleh\". Itu saja sudah sangat mengurangi kecelakaan.",
    "Catatan cukup puluhan detik. Menyimpan \"pemicu → perilaku → hasilnya\" meringankan dukungan berikutnya.",
    "Jangan pikul sendirian. Yang mengganjal, sampaikan ke tim dan atasan. Berbagi lebih awal melindungi orangnya.",
    "\"Tidak mau\" dan \"tidak tahu\" darinya adalah sinyal penting. Terima dulu bahwa ia berhasil mengatakannya.",
    "Bisa memilih membawa rasa aman. Daripada \"cuma ini\", tanyakan \"A atau B, pilih mana?\".",
    "Sensasi tiap orang berbeda. Silau, berisik, gatal — bagi orangnya mungkin rangsangan yang menyiksa.",
    "Perilaku yang tampak \"manja\" pun sering punya alasan dan siasatnya sendiri. Jangan menghakimi.",
    "Kelekatan adalah siasat membuat dunia yang mencemaskan jadi terprediksi. Daripada merampas, perluas rasa aman.",
    "\"Semangat!\" kadang memojokkan. Kepada yang terpuruk, terima dulu penderitaannya.",
    "Halusinasi dan waham: jangan disangkal, jangan dibenarkan. \"Cemas, ya\" — dampingi perasaannya.",
    "Telan kembali \"tadi kan sudah dibilang\". Lupa bisa jadi bagian dari kekhasannya.",
    "Jangan perlakukan seperti anak kecil. Meski pemahamannya pelan, hormati sesuai usia.",
    "Menunggu pun dukungan yang utuh. Ada orang yang bisa bergerak jika ditunggu; peralihannya saja yang butuh waktu.",
    "Jangan paksa kontak mata. Ada yang tersiksa saat harus bertatapan.",
    "Jangan mengagetkan. Mendekat tiba-tiba dari belakang, menyentuh tiba-tiba: hindari.",
    "Tepati janji. Tumpukan kecil \"ditepati\" menjadi kepercayaan.",
    "Saat kejang, memasukkan benda ke mulut itu keliru. Sumber tersedak dan cedera. Tenang, hitung waktunya.",
    "Kantong kertas untuk hiperventilasi kini tidak boleh. Berisiko hipoksia. Dampingi embusan napas pelan di sisinya.",
    "Medis urusan medis, dukungan urusan dukungan. Situasi medis yang meragukan: tanpa ragu ke darurat dan instruksi dokter.",
    "Bila sarana menyampaikan bertambah, suara keras dan agresi bisa berkurang. Kartu dan alat pun adalah \"bahasa\".",
    "\"Kesukaan\"-nya adalah sekutu terbesar. Kegiatan, benda, topik favorit: jalan pintas menuju rasa aman.",
    "Ketenangan pendamping adalah bahan penenang nomor satu di tempat kejadian.",
    "Sayangi juga dirimu. Jika pendamping tumbang, dukungan tak berlanjut. Beristirahat pun bagian dari pekerjaan."
  ],

  /* ===== Belajar: kuis kasus (belajar \"mengapa\", bukan benar-salah) ===== */
  quizzes: [
    {
      q: "Pengguna layanan panik hebat. Pertama-tama, apa yang dilakukan?",
      options: ["Menyerukan keras \"Tenang!\"", "Berhenti menyapa, kurangi orang dan rangsangan, tunggu redanya", "Mencengkeram lengannya dan memindahkannya"],
      answer: 1,
      explain: "Di tengah panik, kata-kata dan rangsangan tak bisa diproses dan justru memperburuk. Hentikan sapaan, kurangi orang-suara-cahaya, temani dengan tenang di tempat aman. Menunggu reda adalah respons tercepat."
    },
    {
      q: "Kelekatan pada urutan tertentu membuat kegiatan macet. Yang baik?",
      options: ["Menghentikan paksa dan lanjut ke berikutnya", "Jika aman, ikuti sambil tunjukkan akhirnya secara terlihat (\"3 kali lagi\" dsb.)", "Diam-diam menukar dengan benda lain"],
      answer: 1,
      explain: "Kelekatan adalah siasat rasa amannya. Dihentikan paksa atau ditipu akan menghilangkan kepercayaan, dan berikutnya makin kuat. Kiatnya: ikuti, dan buat \"akhir\" terlihat dengan timer atau \"tinggal X kali\"."
    },
    {
      q: "Terjadi penyerangan; dua bantuan datang. Pertama apa?",
      options: ["Semua mengepung orangnya untuk menghentikan", "Bagi peran (satu menangani orangnya, satu menjauhkan pengguna lain)", "Semua meninggalkan tempat"],
      answer: 1,
      explain: "Saat bantuan datang, lebih aman \"membagi peran\" daripada berkumpul di satu titik: satu menghadapi orangnya dengan tenang, yang lain menjauhkan pengguna lain dan pejalan. Mengepung dan mengumpulkan perhatian justru memperkuat gejolak."
    },
    {
      q: "Pengguna layanan tiba-tiba lari keluar. Cara mengejarnya?",
      options: ["Mengejar sekuat tenaga tepat dari belakang", "Berlari sejajar dalam jangkauan pandangnya sambil menutup arah berbahaya (jalan raya dll.)", "Terus memanggil namanya keras-keras agar tak hilang"],
      answer: 1,
      explain: "Mengejar dari belakang berubah jadi \"lomba\" dan mempercepat. Teriakan pun bisa memperkuat pelarian. Dari samping tetap terlihat, tutup dulu jalan raya, rel, area air. Lalu segera: bantuan dan laporan."
    },
    {
      q: "Terjadi kejang. Yang TIDAK boleh dilakukan?",
      options: ["Melihat jam mulai kejang dan menghitung waktu", "Memasukkan sumpit atau handuk ke mulut", "Menopang jika hampir jatuh dan menyingkirkan benda berbahaya"],
      answer: 1,
      explain: "Memasukkan benda ke mulut \"agar lidah tak tergigit\" itu keliru; sumber tersedak dan cedera gigi-rahang. Yang dilakukan: amankan dan hitung waktu kejang. Lebih dari 5 menit, berulang, cedera, di air: layanan darurat."
    },
    {
      q: "Serangan hiperventilasi. Respons yang benar?",
      options: ["Menutupkan kantong kertas ke mulut untuk bernapas", "Mendampingi dan menopang embusan napas pelan dengan suara", "Berkata keras \"Tenang!\" agar tersadar"],
      answer: 1,
      explain: "Metode kantong kertas berisiko hipoksia dan kini tidak dianjurkan. Yang dilakukan: dampingi di tempat tenang dan sesuaikan suara dengan embusan napas — \"buang napas pelan-pelan\". Temani sampai reda."
    },
    {
      q: "Bepergian pertama ke tempat asing bersama orang dengan gangguan perilaku berat. Yang terpenting?",
      options: ["Hari H, tangani apa pun secara improvisasi", "Susun rencana saksama lebih dulu agar ia punya gambaran dan menyetujui", "Padatkan jadwal agar harinya penuh kegiatan"],
      answer: 1,
      explain: "Panggung utama dukungan adalah \"sebelum terjadi\". Menangani perilaku yang sudah meledak itu sulit dan menyakitkan bagi semua. Bagikan lebih dulu di mana-apa-berapa lama-lalu bagaimana, dan putuskan lebih dulu tempat istirahat serta waktu pulang: itulah dukungan terbaik."
    },
    {
      q: "\"Tunggu yang manis, ya.\" Kalimat yang lebih tersampaikan?",
      options: ["\"Kalau jarum jam di angka 3, kita berangkat. Sampai itu, duduk menunggu di kursi\"", "\"Jadi anak baik, ya\"", "\"Sebentar lagi selesai, sabar dulu\""],
      answer: 0,
      explain: "\"Yang manis\", \"sebentar lagi\", \"anak baik\" justru kata-kata paling tak tersampaikan. Kapan, apa, bagaimana — konkret dan terlihat — barulah sampai."
    },
    {
      q: "Memuji keberhasilan, kapan?",
      options: ["Di akhir hari, sekaligus", "\"Pada detik itu juga\", secara konkret", "Saat gagal berikutnya, sambil membandingkan"],
      answer: 1,
      explain: "Pujian yang berjeda jadi sulit sampai. Bukan \"hebat\", tapi \"bisa pakai sepatu sendiri, ya!\" — pada detik berhasil, konkret. Bila jelas apa yang dipuji, tersambung ke langkah berikutnya."
    },
    {
      q: "Menyapa orang yang terpuruk berat. Yang ingin dihindari?",
      options: ["Menerima: \"Berat sekali, ya\"", "Menyemangati: \"Semangat! Semua orang juga susah\"", "Diam-diam menemani di sisinya"],
      answer: 1,
      explain: "Depresi tidak sembuh dengan kemauan. \"Semangat\" dan membandingkan dengan orang lain bisa makin memojokkan. Terima dulu penderitaannya. Dan keluhan \"ingin mati\" jangan dianggap enteng: segera medis dan keluarga."
    },
    {
      q: "\"Dari dalam tembok terdengar hinaan,\" ia ketakutan. Bagaimana?",
      options: ["Meluruskan fakta: \"Tidak ada suara begitu\"", "Mendampingi perasaan \"Menakutkan, ya\" dan mengalihkan ke yang menenangkan", "\"Bilang apa katanya?\" — ikut mendengarkan"],
      answer: 1,
      explain: "Bagi orangnya benar-benar terdengar. Jangan disangkal-didebat, jangan pula diikuti-dibesarkan. Persoalannya bukan benar-salah, melainkan \"kecemasan\". Dampingi perasaannya, alihkan perlahan ke kegiatan nyata yang menenangkan. Jika bertambah: konsultasi periksa."
    },
    {
      q: "Di supermarket tiba-tiba gelisah dan menutup telinga. Yang pertama dicurigai?",
      options: ["Sengaja menyusahkan", "Beratnya rangsangan sensorik: suara, cahaya, keramaian", "Cuma lapar saja"],
      answer: 1,
      explain: "Pada spektrum autisme dan lainnya, indera bisa sangat peka. Musik latar, pencahayaan, keriuhan mungkin rangsangan yang menyiksa baginya. Pindah ke tempat tenang, pakai earmuff — kurangi rangsangan."
    },
    {
      q: "Penanganan sudah reda. Hal penting yang bisa dilakukan dalam puluhan detik?",
      options: ["Tidak perlu apa-apa", "Mencatat pemicu → perilaku → hasilnya, lalu membagikannya", "Meminta orangnya menulis surat penyesalan"],
      answer: 1,
      explain: "Menyimpan singkat \"apa pemicunya\" saja sudah tersambung ke pencegahan berikutnya. Catatan pemicu × penanganan yang menumpuk menjadi \"buku panduan\" orang itu. Jangan dipikul sendiri; bagikan sebagai tim."
    },
    {
      q: "Ia bersikeras tak mau minum obat. Penanganan yang baik?",
      options: ["Menahan tubuhnya dan meminumkan", "Mundur dulu beri jeda; jika berlanjut, konsultasi ke dokter/apoteker", "Diam-diam mencampurkan ke makanannya"],
      answer: 1,
      explain: "Penolakan punya alasan (sulit ditelan, efek samping berat, tak paham maknanya). Memaksa menghilangkan kepercayaan. Mundur dan beri jeda, ubah bentuk atau waktunya. Jika berlanjut: jangan putuskan sendiri, ke dokter/apoteker. Mencampur diam-diam hanya bila ada persetujuan dokter dan keluarga."
    }
  ]
};
