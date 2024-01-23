export default function dzikir() {
  const dzikirs = [
    {
      arab: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ . الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ . وَأَتُوبُ إِلَيْه",
      latin:
        "Astaghfirullaahal ‘adziim alladzii laaailaaha illaa huwal hayyulqoyyuum wa atuubu ilaih.",
      arti: "Aku memohon ampun kepada Allah yang maha agung , tiada Tuhan yang berhak disembah kecuali Allah, dzat yang maha hidup kekal abadi dan terus menerus mengurus makhluknya tiada henti. Dan aku bertaubat kepada-Nya.",
      dibaca: "3x",
    },
    {
      arab: "اَللَّهُمَّ أَنْتَ السَّلاَمُ . وَمِنْكَ السَّلاَمُ . وَإِلَيْكَ يَعُوْدُ السَّلاَمُ  فَحَيِّنَا رَبَّنَا بِالسَّلاَمِ . وَأَدْخِلْنَا الْجَنَّةَ دَارَ السَّلاَمِ . تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ <br> يَا ذَالْجَلاَلِ وَالْأِ كْرَامِ",
      latin:
        "Allaahumma antas salaam waminkas salaam wa ilaika ya’uudus salaam fahayyinaa robbanaa bis salaam wa adkhilnal jannata daaros salaam tabaarokta robbanaa wa ta’aalaita yaa dzal jalaali wal ikroom",
      arti: "Ya Allah, engkaulah Dzat yang memberi keselamatan (kesejahteraan), hanya darimu lah keselamatan (kesejahteraan) dan kepadamua lah segala keselamatan (kesejahteraan) itu kembali. Maka hidupkanlah kami Ya Allah dengan selamat (sejahtera), masukkan kami ke dalam surga rumah keselamatan (kesejahteraan), Engkaulah Dzat yang berkah wahai Tuhan kami dan maha luhur Engkau, Ya Tuhan kami yang Dzat yang memiliki keagungan dan kemuliaan.",
      dibaca: "1x",
    },
    {
      arab: "اَللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ وَلاَ مُعْطِيَ لِمَا مَنَعْتَ وَلاَ يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ لاَ إِلَهَ إِلاَّ أَنْتَ",
      latin:
        "Allahumma la mani a lima a thaita wa la mu’thiya lima mana’ta wa la yanfa’u dzal jadii minkal jaddu, la ilaha illa anta.",
      arti: "Ya Allah tidak ada yang menghalangi bagi apa yang telah Engkau berikan dan tidak kepada orang yang kaya di sisi Engkau segala kekayaanya selain dari kebesaran-Mu ya Rabb. Tidak ada Tuhan yang layak disembah selain Engkau.",
      dibaca: "1x",
    },
    {
      arab: "اَللَّـهُمَّ اَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
      latin: "Allahumma a'inni 'ala dzikrika wasyukrika wa husni 'ibadatika.",
      arti: "Ya Allah, bantulah aku untuk berdzikir dan bersyukur kepadaMu serta beribadah kepadaMu dengan baik.",
      dibaca: "1x",
    },
    {
      arab: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ  لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ  يُحْيِيْ  وَيُمِيْتُ وَهُوَ عَلَى كُلِّ شَيْئٍ قَدِيْرٌ",
      latin:
        "Laaailaaha illallaah wahdahu laa syariikalah lahul mulku walahul hamdu yuhyii wayumiitu wahuwa ‘alaa kulli syain qodiir.",
      arti: "Tiada Tuhan yang haq disembah kecuali Allah semata, tiada sekutu baginya. Hanya milikinya segala kerajaan dan hanya milikinya segala puji, baik yang hidup atau mati, Dialah Dzat yang kuasa atas segala sesuatu.",
      dibaca: "3 atau 10x",
    },
    {
      arab: "اَللَّهُمَّ أَجِرْنِـى مِنَ النَّارِ",
      latin: "alloohumma ajrinii minannaar.",
      arti: "Ya Allah, lindungilah aku daripada api neraka",
      dibaca: "3 atau 7x",
    },
    {
      arab: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ <br> بِسْمِاللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ <br> اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ <br> . لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ <br> لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ <br> مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ <br> يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ <br> وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ <br> وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ <br> وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
      latin:
        "Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim",
      arti: "Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya? Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar.",
      dibaca: "1x",
    },
    {
      arab: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ <br> قُلْ هُوَ اللّٰهُ اَحَدٌۚ <br> اَللّٰهُ الصَّمَدُۚ <br> لَمْ يَلِدْ وَلَمْ يُوْلَدْۙ <br> وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
      latin:
        "qul huwallāhu aḥad. allāhuṣ-ṣamad. lam yalid wa lam yụlad wa lam yakul lahụ kufuwan aḥad.",
      arti: "Aku berlindung kepada Tuhan yang menguasai subuh (fajar), dari kejahatan (makhluk yang) Dia ciptakan, dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan (perempuan-perempuan) penyihir yang meniup pada buhul-buhul (talinya), dan dari kejahatan orang yang dengki apabila dia dengki.",
      dibaca: "1x",
    },
    {
      arab: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ <br> قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ <br> مِنْ شَرِّ مَا خَلَقَ <br> وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ <br> وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ<br>  وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
      latin:
        "qul a'ụżu birabbil-falaq. min syarri mā khalaq. wa min syarri gāsiqin iżā waqab. wa min syarrin-naffāṡāti fil-'uqad. wa min syarri ḥāsidin iżā ḥasad",
      arti: "Aku berlindung kepada Tuhan yang menguasai subuh (fajar), dari kejahatan (makhluk yang) Dia ciptakan, dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan (perempuan-perempuan) penyihir yang meniup pada buhul-buhul (talinya), dan dari kejahatan orang yang dengki apabila dia dengki.",
      dibaca: "1x",
    },
    {
      arab: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ <br> قُلْ أَعُوذُ بِرَبِّ النَّاسِ <br> مَلِكِ النَّاسِ إِلَهِ النَّاسِ <br> مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ <br> الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ <br> مِنَ الْجِنَّةِ وَالنَّاسِ",
      latin:
        "qul a'ụżu birabbin-nās. malikin-nās. ilāhin-nās. min syarril-waswāsil-khannās. allażī yuwaswisu fī ṣudụrin-nās. minal-jinnati wan-nās.",
      arti: "Aku berlindung kepada Tuhannya manusia, Raja manusia, sembahan manusia, dari kejahatan (bisikan) setan yang bersembunyi, yang membisikkan (kejahatan) ke dalam dada manusia, dari (golongan) jin dan manusia.",
      dibaca: "1x",
    },
    {
      arab: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ <br> اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ <br> الرَّحْمَنِ الرَّحِيمِ <br> مَالِكِ يَوْمِ الدِّينِ <br> اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِينُ <br> اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ <br> صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ <br> غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ <br> وَلَا الضَّالِّينَ <br> آمِيْنَ",
      latin:
        "bismillāhir-raḥmānir-raḥīm. al-ḥamdu lillāhi rabbil-'ālamīn. ar-raḥmānir-raḥīm. māliki yaumid-dīn. iyyāka na'budu wa iyyāka nasta'īn. ihdinaṣ-ṣirāṭal-mustaqīm. ṣirāṭallażīna an'amta 'alaihim gairil-magḍụbi 'alaihim wa laḍ-ḍāllīn.",
      arti: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang. Segala puji bagi Allah, Tuhan seluruh alam, Yang Maha Pengasih, Maha Penyayang, Pemilik hari pembalasan. Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan. Tunjukilah kami jalan yang lurus, (yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.",
      dibaca: "1x",
    },
    {
      arab: "سُبْحَانَ اللّهُ",
      latin: "Subhaanallah.",
      arti: "Maha Suci Allah.",
      dibaca: "33x",
    },
    {
      arab: "اَلْحَمْدُلِلَّهِ",
      latin: "Alhamdulillaah.",
      arti: "Segala puji bagi Allah.",
      dibaca: "33x",
    },
    {
      arab: "اَللّهُ اَكْبَرُ",
      latin: "Allaahu Akbar.",
      arti: "Allah Maha Besar.",
      dibaca: "33x",
    },
    {
      arab: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ",
      latin: "LaaIlaha Illalloh.",
      arti: "Tiada Tuhan Selain Allah.",
      dibaca: "33x",
    },
    {
      arab: "رَبِّ أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ",
      latin: "Robbi Anni masanniyad dhurru wa anta ar-hamur rahimin",
      arti: "[Ya Tuhanku], sesungguhnya aku telah ditimpa penyakit dan Engkau adalah Tuhan Yang Maha Penyayang di antara semua penyayang.",
      dibaca: "33x",
    },
    {
      arab: "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَتُبْ عَلَيَّ",
      latin: "Rabbighfirlii warhamnii watub 'alayya.",
      arti: "Tuhanku, ampunilah aku, sayangilah aku, dan terimalah taubatku.",
      dibaca: "33x",
    },
    {
      arab: "سُبْحَانَ اللّٰهِ وَبِحَمْدِهِ عَدَدَ خَلْقَهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ ",
      latin:
        "Subhanallahi wa bihamdihi `adada khalqihi wa ridha nafsihi wa zinata `arsyihi wa midada kalimatihi.",
      arti: "Maha Suci Allah dan dengan mengucapkan puji-pujian pada-Nya. sebanyak hitungan makhluk-Nya, sesuai dengan keridhaan Zat-Nya, seberat timbangan `arasy-Nya dan sepanjang beberapa kalimah-Nya.",
      dibaca: "7x",
    },
  ];
  return dzikirs;
}
