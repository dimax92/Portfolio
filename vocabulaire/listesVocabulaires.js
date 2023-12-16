const listeMots21 = [
    { francais: 'suivre', arabe: 'اِتَّبَعَ/يَتَّبِعُ‎‎' },
    { francais: 'Bien faire', arabe: 'أَحْسَنَ/يُحْسِنُ‎‎' },
    { francais: 'être en désaccord', arabe: 'اِخْتَلَفَ/يَخْتَلِفُ‎‎' },
    { francais: 'prendre', arabe: 'أَخَذَ/يَأْخُذُ‎‎' },
    { francais: 'medicaments', arabe: 'دَوَاء/أَدْوِيَة‎' },
    { francais: 'brun', arabe: 'أَسْمَر/سُمْر‎' },
    { francais: 'Se plaindre', arabe: 'اِشْتَكَى/يَشْتَكِي‎‎' },
    { francais: 'choses', arabe: 'شَيْء/أَشْيَاء‎' },
    { francais: 'devenir', arabe: 'أَصْبَحَ/يُصْبِحُ‎‎' },
    { francais: 'medecins', arabe: 'طَبِيب/أَطِبَّاء‎' },
    { francais: 'croire', arabe: 'اِعْتَقَدَ/يَعْتَقِدُ‎' },
    { francais: 'douleurs', arabe: 'أَلَم/آلَام‎' },
    { francais: 'Ordre, commandement', arabe: 'أَمْر/أَوَامِر‎' },
    { francais: 'maladies', arabe: 'مَرَض/أَمْرَاض‎' },
    { francais: 'ventre', arabe: 'بَطْن/(بُطُون‎/أَبْطُن‎)' },
    { francais: 'vente', arabe: 'بَيْع/بُيُوع‎' },
    { francais: 'Se ressembler', arabe: 'تَشَابَهَ/يَتَشَابَهُ‎‎' },
    { francais: 'preceder', arabe: 'تَقَدَّمَ/يَتَقَدَّمُ‎‎' },
    { francais: 'Etat, condition', arabe: 'حَالَة/حَالَات‎' },
    { francais: 'essayer', arabe: 'حَاوَلَ/يُحَاوِلُ‎‎' },
    { francais: 'arriver, avoir lieu', arabe: 'حَدَثَ/يَحْدُثُ‎‎' },
    { francais: 'avertir', arabe: 'حَذَّرَ/يُحَذِّرُ‎‎' },
    { francais: 'Regime(nutrition)', arabe: 'حِمْيَة' },
    { francais: 'dangereux', arabe: 'خَطِير' },
    { francais: 'toujours', arabe: 'دَائِمًا' },
    { francais: 'obturer, bloquer', arabe: 'دَسَمَ/يَدْسُمُ‎‎' },
    { francais: 'appeler', arabe: 'دَعَا/يَدْعُو‎‎' },
    { francais: 'medecin', arabe: 'دُكْتور/دَكَاتِرَة‎' },
    { francais: 'qui', arabe: 'اَلَّذِي' },
    { francais: 'voir', arabe: 'رَأَى/يَرَى‎‎' },
    { francais: 'hommes', arabe: 'رَجُل/رِجَال‎' },
    { francais: 'malgre', arabe: 'رَغْمَ' },
    { francais: 'ajouter', arabe: 'زَادَ/يَزِيدُ‎‎' },
    { francais: 'mariage', arabe: 'زَوَاج' },
    { francais: 'Donner a boire', arabe: 'سَقَى/يَسْقِي‎‎' },
    { francais: 'graisse', arabe: 'شَحْم/شُحُوم‎' },
    { francais: 'compagnon', arabe: 'صَحَابِيّ/صَحَابِيُّون‎' },
    { francais: 'persister', arabe: 'ظَلَّ/يَظَلُّ‎‎' },
    { francais: 'Etre perceptible, clair', arabe: 'ظَهَرَ/يَظْهَرُ‎‎' },
    { francais: 'normal', arabe: 'عَادِيّ' },
    { francais: 'Traiter(malade)', arabe: 'عَالَجَ/يُعَالِجُ‎‎' },
    { francais: 'connaitre', arabe: 'عَرَفَ/يَعْرِفُ‎‎' },
    { francais: 'jus', arabe: 'عَصِير/عَصَائِر‎' },
    { francais: 'Signe, symbole', arabe: 'عَلَامَة/عَلَامَات‎' },
    { francais: 'reflechir', arabe: 'فَكَّرَ/يُفَكِّرُ‎‎' },
    { francais: 'fruits', arabe: 'فَاكِهَة/فَوَاكِه‎' },
    { francais: 'moche', arabe: 'قَبِيح' },
    { francais: 'Histoire, conte', arabe: 'قِصَّة/قِصَص‎' },
    { francais: 'Complet, entier', arabe: 'كَامِل' },
    { francais: 'Comme cela', arabe: 'كَذَلِكَ' },
    { francais: 'suffire', arabe: 'كَفَى/يَكْفِي‎‎' },
    { francais: 'Chaque, tout', arabe: 'كُلّ' },
    { francais: 'kilo', arabe: 'كيل/كيلو' },
    { francais: 'Il est necessaire', arabe: 'لا بُدَّ' },
    { francais: 'Mais(conjonction)', arabe: 'لٰكِنْ' },
    { francais: 'pratiquer', arabe: 'مَارَسَ/يُمَارِسُ‎‎' },
    { francais: 'passé', arabe: 'مَاضٍ‎' },
    { francais: 'Comme(similaire)', arabe: 'مِثْل/أَمْثَال‎' },
    { francais: 'magasins', arabe: 'مَحَلّ/مَحَلَّات‎' },
    { francais: 'femme', arabe: 'مَرْأَة' },
    { francais: 'occupé', arabe: 'مَشْغُول' },
    { francais: 'gens', arabe: 'نَاس' },
    { francais: 'réussir', arabe: 'نَجَحَ/يَنْجَحُ‎‎' },
    { francais: 'amidons', arabe: 'نَشَوِيات' },
    { francais: 'reduire', arabe: 'نَقَصَ/يَنْقُصُ‎‎' },
    { francais: 'cadeau', arabe: 'هَدِيَّة/هَدَايَا‎' },
    { francais: 'Doit etre', arabe: 'وَجَبَ/يَجِبُ‎‎' },
    { francais: 'trouver', arabe: 'وَجَدَ/يَجِدُ‎‎' },
    { francais: 'solitude', arabe: 'وَحْدَه' },
];

const listeMots22 = [
    { francais: 'portes', arabe: 'بَاب/أَبْوَاب‎' },
    { francais: 'Avoir besoin', arabe: 'اِحْتَاجَ/يَحْتَاجُ‎‎' },
    { francais: 'outils', arabe: 'أَدَاة/أَدَوَات‎' },
    { francais: 'quand', arabe: 'إِذَا' },
    { francais: 'avis', arabe: 'رَأْي/آرَاء‎' },
    { francais: 'style', arabe: 'أُسْلُوب/أَسَالِيب‎' },
    { francais: 'chasser', arabe: 'اِصْطَادَ/يَصْطَادُ‎‎' },
    { francais: 'preparer', arabe: 'أَعَدَّ/يُعِدُّ‎‎' },
    { francais: 'preparation', arabe: 'إِعْدَاد' },
    { francais: 's\'évanouir', arabe: 'أُغْمِيَ/يُغْمَى' },
    { francais: 'Se reveiller', arabe: 'أَفَاقَ/يُفِيقُ‎‎' },
    { francais: 'jeux', arabe: 'لَعْب/أَلْعَاب‎' },
    { francais: 'humain', arabe: 'إِنْسَان/أَنَاسِيّ‎' },
    { francais: 'activités', arabe: 'نَشَاط/أَنْشِطَة‎' },
    { francais: 'recipients', arabe: 'إِنَاء/أَوَانٍ‎' },
    { francais: 'programmes', arabe: 'بَرْنَامَج/بَرَامِج‎' },
    { francais: 'maisons', arabe: 'بَيْت/بُيُوت‎' },
    { francais: 'loisirs', arabe: 'تَرويح' },
    { francais: 'photographie', arabe: 'تَصْوِير' },
    { francais: 'jardin', arabe: 'حَدِيقَة/حَدَائِق‎' },
    { francais: 'porter', arabe: 'حَمَلَ/يَحْمِلُ‎‎' },
    { francais: 'vie', arabe: 'حَيَاة/حَيَوَات‎' },
    { francais: 'où', arabe: 'حَيْثُ' },
    { francais: 'tente', arabe: 'خَيْمَة/خِيَام‎' },
    { francais: 'Rentrer chez soi', arabe: 'رَوَّحَ/يُرَوِّحُ' },
    { francais: 'nager', arabe: 'سَبَحَ/يَسْبَحُ‎‎' },
    { francais: 'Savoir(nom)', arabe: 'شِعْر/أَشْعَار‎' },
    { francais: 'desert', arabe: 'صَحْرَاء' },
    { francais: 'être honnête', arabe: 'صَدَقَ/يَصْدُقُ‎‎' },
    { francais: 'formes', arabe: 'صُورَة/صُوَر‎' },
    { francais: 'chasse', arabe: 'صَيْد' },
    { francais: 'oiseaux', arabe: 'طَيْر/طُيُور‎' },
    { francais: 'ouvrier', arabe: 'عَامِل' },
    { francais: 'etrange', arabe: 'عَجِيب' },
    { francais: 'sagesse', arabe: 'عَقْل/عُقُول‎' },
    { francais: 'inquietude', arabe: 'عَنَاء' },
    { francais: 'forêt', arabe: 'غَابَة' },
    { francais: 'reprocher', arabe: 'عَيَّرَ/يُعَيِّرُ‎‎' },
    { francais: 'avantage', arabe: 'فَائِدَة/فَوَائِد‎' },
    { francais: 'seulement', arabe: 'فَقَطْ' },
    { francais: 'tuer', arabe: 'قَتَلَ/يَقْتُلُ‎‎' },
    { francais: 'Vouloir dire', arabe: 'قَصَدَ/يَقْصِدُ‎‎' },
    { francais: 'histoire', arabe: 'قَصَص' },
    { francais: 'juridiction', arabe: 'قَضَاء/أَقْضِيَة‎' },
    { francais: 'force', arabe: 'قُوَّة' },
    { francais: 'Cela ne derange pas', arabe: 'لا مانِع' },
    { francais: 'jouer', arabe: 'لَعِبَ/يَلْعَبُ‎‎' },
    { francais: 'jouissance', arabe: 'مُتْعَة/مُتَع‎' },
    { francais: 'campements', arabe: 'مُخَيَّم/مُخَيَّمَات‎' },
    { francais: 'musulman', arabe: 'مُسْلِم/مُسْلِمُون‎' },
    { francais: 'marche', arabe: 'مَشْي' },
    { francais: 'Station estivale', arabe: 'مَصِيف/مَصائِف‎' },
    { francais: 'crier', arabe: 'نَادَى/يُنَادِي‎‎' },
    { francais: 'discuter', arabe: 'نَاقَشَ/يُنَاقِشُ‎‎' },
    { francais: 'établir', arabe: 'نَصَبَ/يَنْصُبُ‎' },
    { francais: 'conseil', arabe: 'نَصِيحَة/نَصَائِح‎' },
    { francais: 'Soi-meme', arabe: 'نَفْس' },
    { francais: 'but', arabe: 'هَدَف/أَهْدَاف‎' },
    { francais: 'instruments', arabe: 'وَسِيلَة/وَسَائِل‎' },
];

const listeMots23 = [
    { francais: 'peres', arabe: 'آبَاء' },
    { francais: 'Fils(pluriel)', arabe: 'أَبْنَاء‎' },
    { francais: 'parfois', arabe: 'أحيانا' },
    { francais: 'disparition', arabe: 'اِخْتِفَاء' },
    { francais: 'disparaitre', arabe: 'اِخْتَفَى/يَخْتَفِي ‎‎' },
    { francais: 'desaccord', arabe: 'اِخْتِلَاف' },
    { francais: 'ecouter', arabe: 'اِسْتَمَعَ/يَسْتَمِعُ‎' },
    { francais: 'individu', arabe: 'فَرْد/أَفْرَاد‎' },
    { francais: 'mere', arabe: 'أُمّ' },
    { francais: 'lieus', arabe: 'مَكَان/أَمَاكِن‎' },
    { francais: 'affaires', arabe: 'أَمْر/أُمُور‎' },
    { francais: 'Prendre soin', arabe: 'اِهْتَمَّ/يَهْتَمُّ‎‎' },
    { francais: 'verifier', arabe: 'تَحَقَّقَ/يَتَحَقِّقُ' },
    { francais: 'changer', arabe: 'تَغَيَّرَ/يَتَغَيَّرُ‎‎' },
    { francais: 'Se revolter', arabe: 'ثَارَ/يَثُورُ‎‎' },
    { francais: 'chameau', arabe: 'جَمَل‎/جِمَال' },
    { francais: 'hadith', arabe: 'حَدِيث' },
    { francais: 'Mesure(nom)', arabe: 'حَسَب/أَحْسَاب‎' },
    { francais: 'sortie', arabe: 'خُرُوج' },
    { francais: 'desaccord', arabe: 'خِلَاف/خِلَافَات‎' },
    { francais: 'bonté', arabe: 'خَيْر' },
    { francais: 'savoir', arabe: 'دَرَى/يَدْرِي‎‎' },
    { francais: 'religion', arabe: 'دِين/أَدْيَان‎' },
    { francais: 'Possesseur(feminin)', arabe: 'ذَات' },
    { francais: 'revenir', arabe: 'رَجَعَ/يَرْجِعُ‎‎' },
    { francais: 'chemin', arabe: 'سَبِيل/سُبُل‎' },
    { francais: 'bonheur', arabe: 'سَعَادَة' },
    { francais: 'veiller', arabe: 'سَهِرَ/يَسْهَرُ‎‎' },
    { francais: 'politique', arabe: 'سِيَاسَة/سِيَاسَات‎' },
    { francais: 'Jeunes hommes', arabe: 'شَابّ/شَبَاب‎' },
    { francais: 'personnalité', arabe: 'شَخْصِيَّة/شَخْصِيَّات‎' },
    { francais: 'Se plaindre', arabe: 'شَكَا/يَشْكُو‎‎' },
    { francais: 'plainte', arabe: 'شَكْوَى' },
    { francais: 'nécessité', arabe: 'ضَرُورَة' },
    { francais: 'faiblesse', arabe: 'ضَعْف' },
    { francais: 'regrouper', arabe: 'ضَمَّ/يَضُمُّ‎‎' },
    { francais: 'enfance', arabe: 'طُفُولَة' },
    { francais: 'divorce', arabe: 'طَلَاق' },
    { francais: 'longueur', arabe: 'طُول/أَطْوَال‎' },
    { francais: 'revenir', arabe: 'عَادَ/يَعُودُ‎‎' },
    { francais: 'vivre', arabe: 'عَاشَ/يَعِيشُ‎‎' },
    { francais: 'Etre incapable', arabe: 'عَجَزَ/يَعْجِزُ‎‎' },
    { francais: 'Apres-midi', arabe: 'عَصْر' },
    { francais: 'relation', arabe: 'عَلَاقَة/عَلَاقَات‎' },
    { francais: 'têtu', arabe: 'عَنِيدَة‎' },
    { francais: 'riche', arabe: 'غَنِيَّة‎' },
    { francais: 'contraire', arabe: 'غَيْر' },
    { francais: 'Jeune fille', arabe: 'فَتَاة/فَتَيَات‎' },
    { francais: 'effectivement', arabe: 'فِعْلًا' },
    { francais: 'pauvre', arabe: 'فَقِيرَة‎' },
    { francais: 'Se lever', arabe: 'قَامَ/يَقُومُ‎‎' },
    { francais: 'anxieux', arabe: 'قَلِق' },
    { francais: 'Bien eleve', arabe: 'مُؤَدَّب' },
    { francais: 'Se pencher', arabe: 'مَالَ/يَمِيلُ‎‎' },
    { francais: 'fatigué', arabe: 'مُتْعَب' },
    { francais: 'communauté', arabe: 'مُجْتَمَع/مُجْتَمَعَات‎' },
    { francais: 'soir', arabe: 'مَسَاء' },
    { francais: 'obeissant', arabe: 'مُطيعة' },
    { francais: 'La plupart', arabe: 'مُعْظَم' },
    { francais: 'négligent', arabe: 'مُهْمِل' },
    { francais: 'endormi', arabe: 'نَائِم' },
    { francais: 'région spécifique', arabe: 'نَاحِيَة/نَوَاحٍ‎' },
    { francais: 'succès', arabe: 'نَجَاح/نَجَاحَات‎' },
    { francais: 'femmes', arabe: 'نِسَاء' },
    { francais: 'ascendance', arabe: 'نَسَب' },
    { francais: 'propreté', arabe: 'نَظَافَة' },
    { francais: 'ensemble organisé', arabe: 'نِظَام' },
    { francais: 'Progeniture', arabe: 'وَلَد' },
];

const listeMots24 = [
    { francais: 'Se diriger', arabe: 'اِتّجَهَ/يَتّجِهُ' },
    { francais: 'antiquites', arabe: 'آثار' },
    { francais: 'continuer', arabe: 'اِسْتَمَر/يَسْتَمِرُ' },
    { francais: 'Signal lumineux', arabe: 'إشارَة ضَؤئِيّة' },
    { francais: 'Devenir celebre', arabe: 'اشْتُهِرَ/يُشْتَهَرُ' },
    { francais: 'Plus grand', arabe: 'أَكْبَر' },
    { francais: 'empereur', arabe: 'إمْبَراطور' },
    { francais: 'pays', arabe: 'الأُمَمُ' },
    { francais: 'uni', arabe: 'المُتّحِدَة' },
    { francais: 'creer', arabe: 'أَنْشَأ/يُنْشِئ' },
    { francais: 'tourner', arabe: 'اِنْعَطَفَ/يَنْطِفُ' },
    { francais: 'vendre', arabe: 'باعَ/يَبيعُ' },
    { francais: 'Malgre cela', arabe: 'بالرّغْمِ' },
    { francais: 'voisins', arabe: 'جيران' },
    { francais: 'droit', arabe: 'حَق' },
    { francais: 'accidents', arabe: 'حَوادِث' },
    { francais: 'effraye', arabe: 'خائِفَة' },
    { francais: 'Rond-point', arabe: 'دَوّار' },
    { francais: 'pays', arabe: 'دُوَل' },
    { francais: 'Agent de circulation', arabe: 'رَجُلُ مُرورٍ' },
    { francais: 'partir', arabe: 'رَحَلَ/يَرْحَلُ' },
    { francais: 'paturage', arabe: 'رَعْي' },
    { francais: 'campagne', arabe: 'ريف' },
    { francais: 'coin', arabe: 'زاوِيَة' },
    { francais: 'agriculture', arabe: 'زِراعَة' },
    { francais: 'plantation', arabe: 'زَرْع' },
    { francais: 'Tremblements de terre', arabe: 'زَلازِل' },
    { francais: 'conducteur', arabe: 'سائق' },
    { francais: 'marcher', arabe: 'سارَ/يسيرُ' },
    { francais: 'habitants', arabe: 'سُكّان' },
    { francais: 'annee', arabe: 'سَنَة' },
    { francais: 'arbres', arabe: 'شَجَرٌ' },
    { francais: 'pharmacie', arabe: 'صَيْدَلِيّة' },
    { francais: 'route', arabe: 'طَريق' },
    { francais: 'scientifique', arabe: 'عالَم' },
    { francais: 'plusieurs', arabe: 'عَدّة' },
    { francais: 'nombre', arabe: 'عدد' },
    { francais: 'science', arabe: 'عِلْم' },
    { francais: 'batiments', arabe: 'عِمارات' },
    { francais: 'Caire', arabe: 'القاهِرَة' },
    { francais: 'siecle', arabe: 'قَرْن' },
    { francais: 'minarets', arabe: 'مآذِنُ' },
    { francais: 'metre', arabe: 'مِتْر' },
    { francais: 'drogues', arabe: 'مُخَدِّرات' },
    { francais: 'ecoles', arabe: 'مَدارِس' },
    { francais: 'villes', arabe: 'مُدُن' },
    { francais: 'mosquees', arabe: 'مَساجِد' },
    { francais: 'banques', arabe: 'مَصارِفُ' },
    { francais: 'usines', arabe: 'مَصانِعُ' },
    { francais: 'Oppose(nom)', arabe: 'مُقابِل' },
    { francais: 'milliard', arabe: 'مِلْيار' },
    { francais: 'milliards', arabe: 'مِلْيارات' },
    { francais: 'nous', arabe: 'نَحْنُ' },
    { francais: 'vers', arabe: 'نَحْوٌ' },
    { francais: 'taux', arabe: 'نِسْبَة' },
    { francais: 'immigrer', arabe: 'هاجَرَ/يُهاجِرُ' },
    { francais: 'migration', arabe: 'هِجْرَة' },
    { francais: 'tomber', arabe: 'وَقَعَ/يَقَعُ' },
];

const listeMots25 = [
    { francais: 'contacter', arabe: 'اِتّصَلَ/يَتّصِلُ' },
    { francais: 'salaire', arabe: 'أَجْر' },
    { francais: 'circonstances', arabe: 'أحْوال' },
    { francais: 'facultatif', arabe: 'اِخْتِيارِيّ' },
    { francais: 'superviser', arabe: 'أَشْرَفَ/يُشْرِفُ' },
    { francais: 'ages', arabe: 'أَعْمار' },
    { francais: 'communaute', arabe: 'أَهْلَ' },
    { francais: 'inscription', arabe: 'اِلْتِحاق' },
    { francais: 'Se repandre', arabe: 'اِنْتَشَرَ/يَنْتَشِرُ' },
    { francais: 'terminer', arabe: 'أَنْهَى/يُنْهي' },
    { francais: 'papiers', arabe: 'أَوْراق' },
    { francais: 'origines', arabe: 'أورُبّا' },
    { francais: 'pays', arabe: 'بِلاد' },
    { francais: 'atteindre', arabe: 'بَلَغَ/يَبْلُغُ' },
    { francais: 'Etre influence', arabe: 'تَأثّر/يَتَأثّرُ' },
    { francais: 'Etre en retard', arabe: 'تَأخّر/يتأخّر' },
    { francais: 'varier', arabe: 'تَراوَحَ/يَتَرَوَّحُ' },
    { francais: 'traduire', arabe: 'تَرْجَمَ/يُتَرْجِمُ' },
    { francais: 'education', arabe: 'تَعليم' },
    { francais: 'estimation', arabe: 'تَقدير' },
    { francais: 'eleves', arabe: 'تَلاميذ' },
    { francais: 'preparatoire', arabe: 'تَمْهيدِيّ' },
    { francais: 'Enseignement secondaire', arabe: 'ثانَوِيّة' },
    { francais: 'Enseignement superieur', arabe: 'جامِعِيّة' },
    { francais: 'geographie', arabe: 'جُغْرافِيا' },
    { francais: 'Tres bien', arabe: 'جَيِّد جِدّاً' },
    { francais: 'obtenir', arabe: 'حَصَلَ/يَحْصُلُ' },
    { francais: 'obtention', arabe: 'حُصول' },
    { francais: 'civilisation', arabe: 'حَضارَة' },
    { francais: 'creche', arabe: 'حَضانَة' },
    { francais: 'Groupes de discussion', arabe: 'حَلَقات' },
    { francais: 'pendant', arabe: 'خِلال' },
    { francais: 'etudes', arabe: 'دِراسات' },
    { francais: 'superieur', arabe: 'عُلْيا' },
    { francais: 'doctorat', arabe: 'دُكْتوراه' },
    { francais: 'desirer', arabe: 'رَغِبَ/يَرْغَبُ' },
    { francais: 'Ecole maternelle', arabe: 'رَوْضَة' },
    { francais: 'age', arabe: 'سِنّ' },
    { francais: 'naturel', arabe: 'طَبيعِيّة' },
    { francais: 'habitude', arabe: 'عادَة' },
    { francais: 'savants', arabe: 'عُلَماء' },
    { francais: 'Doyen(universite)', arabe: 'عَميد' },
    { francais: 'majoritaire', arabe: 'غالِب' },
    { francais: 'Periode de temps specifique', arabe: 'فَتْرَة' },
    { francais: 'astronomie', arabe: 'فَلَك' },
    { francais: 'Accepter', arabe: 'قَبِلَ/يقْبَل' },
    { francais: 'acceptation', arabe: 'قَبول' },
    { francais: 'Avancer/presenter', arabe: 'قَدّمَ/يُقَدِّمُ' },
    { francais: 'livres', arabe: 'كُتُب' },
    { francais: 'Faculte des lettres', arabe: 'كُلِّيّةُ الآدابِ' },
    { francais: 'Pas etonnant', arabe: 'لا عَجَبَ' },
    { francais: 'Master(diplôme)', arabe: 'ماجِسْتير' },
    { francais: 'directement', arabe: 'مُباشَرَة' },
    { francais: 'Passer', arabe: 'مَرّ/يَمُرُ' },
    { francais: 'etapes', arabe: 'مَراحِلُ' },
    { francais: 'egalite', arabe: 'مُسْتَويا' },
    { francais: 'instituts', arabe: 'مَعاهِد' },
    { francais: 'Assigne, designe', arabe: 'مُعَيّن' },
    { francais: 'excellent', arabe: 'ممُتاز' },
    { francais: 'Etre d\'accord', arabe: 'وافَقَ/يوافِق' },
    { francais: 'Que dieu lui accorde la reussite', arabe: 'وفّقَهُ الله' },
];

const listeMots26 = [
    { francais: 'venir', arabe: 'أَتَى/يَأْتي' },
    { francais: 'Faire des provisions', arabe: 'اِحْتَطَبَ/يَحْتَطِبُ' },
    { francais: 'ethique', arabe: 'أَخْلاق' },
    { francais: 'administrer', arabe: 'أَدارَ/يُديرُ' },
    { francais: 'fondamental', arabe: 'أَساسِيّة' },
    { francais: 'compagnons', arabe: 'أَصْحاب' },
    { francais: 'reparer', arabe: 'أَصْلَحَ/يُصْلِحُ' },
    { francais: 'Dependre de quelque chose', arabe: 'اِعْتَمَدَ/يَعْتَمِد' },
    { francais: 'nomade', arabe: 'أعْرابِيّ' },
    { francais: 'exil', arabe: 'اِغْتِراب' },
    { francais: 'S\'exiler', arabe: 'اِغْتَرَبَ/يَغْتَرِبُ' },
    { francais: 'Endommager quelque chose', arabe: 'أَفْسَدَ/يُفْسِدُ' },
    { francais: 'Tenir quelque chose', arabe: 'أَمْسَكَ/يُمْسِكُ' },
    { francais: 'La fin', arabe: 'اِنْتِهاء' },
    { francais: 'Bien sur', arabe: 'بالطّبْعِ' },
    { francais: 'chomage', arabe: 'بَطالَة' },
    { francais: 'Obtenir un diplome', arabe: 'تَخَرّجَ/يَتَخَرّجُ' },
    { francais: 'mendier', arabe: 'تَسَوّلَ/يَتَسَوّلُ' },
    { francais: 'Se purifier', arabe: 'تَطَهّرَ/يَتَطَهّرُ' },
    { francais: 'Se desintegrer', arabe: 'تَفَكّكَ/يَتَفَكّكُ' },
    { francais: 'proteger', arabe: 'حافَظَ/يُحافِظُ' },
    { francais: 'illicite', arabe: 'حَرام' },
    { francais: 'gouvernement', arabe: 'حُكومَة' },
    { francais: 'licite', arabe: 'حَلال' },
    { francais: 'tristesse', arabe: 'حِلْسٌ' },
    { francais: 'domestique', arabe: 'خادِمَة' },
    { francais: 'Melanger/frequenter', arabe: 'خالَطَ/يُخالِطُ' },
    { francais: 'S\'opposer', arabe: 'خالَفَ/يُخالِفُ' },
    { francais: 'experiences', arabe: 'خِبْرات' },
    { francais: 'payer', arabe: 'دفَعَ/يَدْفَعُ' },
    { francais: 'salaire', arabe: 'راتِب' },
    { francais: 'eduquer', arabe: 'ربّى/يُرَبِّي' },
    { francais: 'esperer', arabe: 'رَجا/يَرْجو' },
    { francais: 'En toute securite', arabe: 'سالمِاً' },
    { francais: 'facile', arabe: 'سَهْلَة' },
    { francais: 'condition', arabe: 'شَرْط' },
    { francais: 'diplome', arabe: 'شَهادِة' },
    { francais: 'chose', arabe: 'شَيْء' },
    { francais: 'Etre valide', arabe: 'صَحّ/يَصِحُ' },
    { francais: 'accompagner', arabe: 'صَحِبَ/يَصْحَبُ' },
    { francais: 'perte', arabe: 'ضَياع' },
    { francais: 'chomeuse', arabe: 'عاطِلَةٌ' },
    { francais: 'Se propager', arabe: 'عَمّ/يَعُمُ' },
    { francais: 'retour', arabe: 'عود' },
    { francais: 'butin', arabe: 'غانِم' },
    { francais: 'etrange', arabe: 'غَريبَة' },
    { francais: 'opportunite', arabe: 'فُرَص' },
    { francais: 'equipe', arabe: 'فِرَق' },
    { francais: 'L\'arrivee', arabe: 'قَدّوم' },
    { francais: 'Plateau repas', arabe: 'قَصْعَة' },
    { francais: 'Ne pas etre', arabe: 'لَيْسَ' },
    { francais: 'optimiste', arabe: 'مُتَفائِل' },
    { francais: 'Domaine d\'activite', arabe: 'مَجال' },
    { francais: 'different', arabe: 'مُخْتَلِفَة' },
    { francais: 'Periode de temps', arabe: 'مُدّة' },
    { francais: 'aide', arabe: 'مُساعَدَة' },
    { francais: 'question', arabe: 'مسألة' },
    { francais: 'rencontre', arabe: 'مُقابَلَة' },
    { francais: 'depuis', arabe: 'مُنْذُ' },
    { francais: 'interdire', arabe: 'مَنَعَ/يَمْنَعُ' },
    { francais: 'convenir', arabe: 'ناسَبَ/يُناسِبُ' },
    { francais: 'nettoyer', arabe: 'نَظّفَ/يُنَظِّفُ' },
    { francais: 'benediction', arabe: 'نِعْمَة' },
    { francais: 'patrie', arabe: 'وَطَن' },
    { francais: 'Emploi(travail)', arabe: 'وَظيفَة' },
];

const listeMots27 = [
    { francais: 'connexion', arabe: 'اِتِّصال' },
    { francais: 'influencer', arabe: 'أثّرَ/يُؤَثِّرُ' },
    { francais: 'autre', arabe: 'أُخْرَى' },
    { francais: 'dernier', arabe: 'أَخير' },
    { francais: 'radio', arabe: 'إذاعَة' },
    { francais: 'odieux', arabe: 'أُرْدِيّة' },
    { francais: 'prosperer', arabe: 'اِزْدَهَرَ/يَزْدَهِرُ' },
    { francais: 'fondement', arabe: 'أساس' },
    { francais: 'methodes', arabe: 'أساليب' },
    { francais: 'espagnol', arabe: 'إسبانِيّة' },
    { francais: 'colonisation', arabe: 'اِسْتِعْمار' },
    { francais: 'ajouter', arabe: 'أَضافَ/يُضيفُ' },
    { francais: 'preter', arabe: 'أَقرَضَ/يُقْرِضُ' },
    { francais: 'rejoindre', arabe: 'اِلْتَحَقَ/يَلْتَحِقُ' },
    { francais: 'mots', arabe: 'أَلْفاظ' },
    { francais: 'eloquence', arabe: 'بَلاغَة' },
    { francais: 'complet', arabe: 'تامّ' },
    { francais: 'exercices', arabe: 'تَدريبات' },
    { francais: 'sonorite', arabe: 'صَؤتِيّة' },
    { francais: 'traduction', arabe: 'تَرجَمَة' },
    { francais: 'apprendre', arabe: 'تَعَلّمَ/يَتَعلّمُ' },
    { francais: 'interpretation', arabe: 'تَفْسير' },
    { francais: 'venir', arabe: 'جاء/يجيء' },
    { francais: 'nouveau', arabe: 'جَديدَة' },
    { francais: 'fragment', arabe: 'جُزْء' },
    { francais: 'ile', arabe: 'جَزيرَة' },
    { francais: 'Faire la guerre', arabe: 'حارَبَ/يُحارِبُ' },
    { francais: 'lettre', arabe: 'حَرْف' },
    { francais: 'memoriser', arabe: 'حَفِظَ/يَحْفَظُ' },
    { francais: 'orateur', arabe: 'خَطابة' },
    { francais: 'Etudes islamiques', arabe: 'دِراساتٌ إسْلامِيّةٌ' },
    { francais: 'officiel', arabe: 'رَسْمِيّة' },
    { francais: 'swahili', arabe: 'سَواحِلِيّة' },
    { francais: 'encourager', arabe: 'شَجّعَ/يُشَجِعُ' },
    { francais: 'conjugaison', arabe: 'صَرْف' },
    { francais: 'L\'ere abbasside', arabe: 'العَصْرُ العَبّاسِيّ' },
    { francais: 'epoques', arabe: 'عُصور' },
    { francais: 'pardon', arabe: 'عفوا' },
    { francais: 'persan', arabe: 'فارِسِيّة' },
    { francais: 'eloquent', arabe: 'فَصيحَة' },
    { francais: 'Jurisprudence islamique', arabe: 'فِقْه' },
    { francais: 'Salutation(depart)', arabe: 'في أمانِ الله' },
    { francais: 'tribu', arabe: 'قَبيلَة' },
    { francais: 'forcer', arabe: 'قَوِيَ/يَقْوَى' },
    { francais: 'Faculte de droit islamique', arabe: 'كُلِّيّة الشّريعَة' },
    { francais: 'accent', arabe: 'لَهْجَة' },
    { francais: 'Commun(partage)', arabe: 'مُشْتَرَك' },
    { francais: 'significations', arabe: 'مَعانٍ' },
    { francais: 'million', arabe: 'مِلْيون' },
    { francais: 'appel', arabe: 'نِداء' },
    { francais: 'grandir', arabe: 'نَشَأَ/يَنْشَأ' },
    { francais: 'prononcer', arabe: 'نطَق/يَنْطِقُ' },
    { francais: 'abandonner', arabe: 'هَجَرَ/يَهْجُرُ' },
];

const listeMots28 = [
    { francais: 'Se reunir', arabe: 'اِجْتَمَعَ/يَجْتَمِعُ' },
    { francais: 'examens', arabe: 'اِخْتِبارات' },
    { francais: 'choix', arabe: 'اِخْتِيار' },
    { francais: 'Plus heureux', arabe: 'أَسْعَدُ' },
    { francais: 'noms', arabe: 'أَسْماء' },
    { francais: 'personnes', arabe: 'أَشْخاص' },
    { francais: 'Plus grand', arabe: 'أَعْظَم' },
    { francais: 'annoncer', arabe: 'أَعْلَنَ/يُعْلِنُ' },
    { francais: 'privilege', arabe: 'اِمْتِياز' },
    { francais: 'regions', arabe: 'أَنحاء' },
    { francais: 'humanite', arabe: 'إنْسانِيّة' },
    { francais: 'diviser', arabe: 'اِنْقَسَمَ/يَنْقَسِمُ' },
    { francais: 'carte', arabe: 'بِطاقَة' },
    { francais: 'recompense', arabe: 'جائِزَة' },
    { francais: 'collecter', arabe: 'جَمَعَ/يَجْمَعُ' },
    { francais: 'Prix d\'encouragement', arabe: 'جَوائِزُ تَشْجيعِيّة' },
    { francais: 'Prix d\'appreciation', arabe: 'جَوائِزُ تَقْديرِيّة' },
    { francais: 'recompenses', arabe: 'جَوائِز' },
    { francais: 'service', arabe: 'خِدْمَة' },
    { francais: 'bouclier', arabe: 'دِرْع' },
    { francais: 'invocation', arabe: 'دُعاء' },
    { francais: 'Doree(or)', arabe: 'ذَهَبِيّة' },
    { francais: 'soulever', arabe: 'رَفَعَ/يَرْفَعُ' },
    { francais: 'collegues', arabe: 'زُمَلاء' },
    { francais: 'Biographie du prophete', arabe: 'السّيرَةُ النّبَوِيّة' },
    { francais: 'Participer/partager', arabe: 'شارَكَ/يُشارِكُ' },
    { francais: 'conditions', arabe: 'شُروط' },
    { francais: 'caracteristiques', arabe: 'صِفات' },
    { francais: 'Etudiant modele', arabe: 'طالِب مِثاليّ' },
    { francais: 'public', arabe: 'عامّة' },
    { francais: 'Que dieu te pardonne', arabe: 'عَفا الله عَنْكَ' },
    { francais: 'pardon', arabe: 'عفْوٌ' },
    { francais: 'valeur', arabe: 'قيمَة' },
    { francais: 'comites', arabe: 'لجِان' },
    { francais: 'creatif', arabe: 'مُبْدِع' },
    { francais: 'somme', arabe: 'مَبْلَغ' },
    { francais: 'appreciee', arabe: 'مَحبوب' },
    { francais: 'competition', arabe: 'مُسابَقَة' },
    { francais: 'celebre', arabe: 'مَشْهور' },
    { francais: 'aspect', arabe: 'مَظْهَر' },
    { francais: 'informations', arabe: 'مَعلومات' },
    { francais: 'recompense', arabe: 'مُكافَأَة' },
    { francais: 'resume', arabe: 'مُلَخّص' },
    { francais: 'rivalite', arabe: 'مُنافَسَة' },
    { francais: 'accorder', arabe: 'مَنَحَ/يَمْنَحُ' },
    { francais: 'Nouveau-ne', arabe: 'مَوْلود' },
    { francais: 'obtenir', arabe: 'نالَ/يَنالُ' },
    { francais: 'organisation', arabe: 'هَيئَة' },
];


let listeMots29 = [
    { francais: "Etre d'accord", arabe: "اِتّفَقَ/يَتّفِقُ" },
    { francais: "nouvelles", arabe: "أَخْبار" },
    { francais: "Effectuer quelque chose", arabe: "أدّى/يُؤدّي" },
    { francais: "Envoyer quelque chose", arabe: "أَرْسَلَ/يُرْسِلُ" },
    { francais: "Plus rapide", arabe: "أَسْرَعُ" },
    { francais: "En bonne sante", arabe: "أَصِحّاء" },
    { francais: "Les riches", arabe: "أَغْنِياء" },
    { francais: "moins", arabe: "أقَلُ" },
    { francais: "A quel point c'est peu", arabe: "ما أقَلّ" },
    { francais: "decoller", arabe: "اِنْطَلَقَ/يَنْطَلِقُ" },
    { francais: "Courrier electronique", arabe: "بَريدٌ إلِكْترونيّ" },
    { francais: "lent", arabe: "بَطيئَة" },
    { francais: "envoyer", arabe: "بَعَثَ/يَبْعَثُ" },
    { francais: "Se promener", arabe: "تَجَوّلَ/يَتَجَوّلُ" },
    { francais: "combattre", arabe: "تَقاتَلَ/يَتَقاتَلُ" },
    { francais: "Se former", arabe: "تَكَوّنَ/يَتَكَوّنُ" },
    { francais: "developpement", arabe: "تَنْمِيَة" },
    { francais: "Cotee", arabe: "جانِب" },
    { francais: "Rendre quelque chose", arabe: "جَعَلَ/يَجْعَلُ" },
    { francais: "chameau", arabe: "جَمَلٌ" },
    { francais: "ignorance", arabe: "جَهْل" },
    { francais: "preuve", arabe: "حُجّة" },
    { francais: "guerre", arabe: "حَرْب" },
    { francais: "ane", arabe: "حِمار" },
    { francais: "Pigeon voyageur", arabe: "حَمامٌ زاجِل" },
    { francais: "ordinateurs", arabe: "حَواسيب" },
    { francais: "animaux", arabe: "حَيَوانات" },
    { francais: "confort", arabe: "رَخاء" },
    { francais: "Lettres(messages)", arabe: "رَسائِل" },
    { francais: "Lettre(message)", arabe: "رِسالَة" },
    { francais: "Refuser quelque chose", arabe: "رَفَضَ/يَرْفُضُ" },
    { francais: "chaud", arabe: "ساخِن" },
    { francais: "bateaux", arabe: "سُفُن" },
    { francais: "ecran", arabe: "شاشَة" },
    { francais: "internet", arabe: "الشّبَكَة الدّوْلِيّة" },
    { francais: "Compagnon/possesseur", arabe: "صاحِب" },
    { francais: "fabriquer", arabe: "صَيَعَ/يَصْنَعُ" },
    { francais: "son", arabe: "صَوْت" },
    { francais: "Voler(dans les airs)", arabe: "طارَ/يَطيرُ" },
    { francais: "apparitions", arabe: "ظُهور" },
    { francais: "roues", arabe: "عَجَلات" },
    { francais: "coureur", arabe: "عَدّاء" },
    { francais: "Chariots/wagons", arabe: "عَرَبات" },
    { francais: "Adresses/titres", arabe: "عَناوين" },
    { francais: "outils", arabe: "عَولَمَةَ" },
    { francais: "Imposer/appliquer", arabe: "فَرَضَ/يَفْرِضُ" },
    { francais: "pauvrete", arabe: "فَقْر" },
    { francais: "avantages", arabe: "فَوائِد" },
    { francais: "elephant", arabe: "فيل" },
    { francais: "continent", arabe: "قارّة" },
    { francais: "A quel point c'est beau", arabe: "ما أَجْمَلَ" },
    { francais: "orateur", arabe: "مُتَحَدِّث" },
    { francais: "connectee", arabe: "مُتّصِلَة" },
    { francais: "moteur", arabe: "مُحَرِّك" },
    { francais: "voilliers", arabe: "مَراكِبُ شِراعِيّة" },
    { francais: "Centres de recherches", arabe: "مَراكِزُ البَحْثِ" },
    { francais: "maladie", arabe: "مَرَض" },
    { francais: "malades", arabe: "مَرْضى" },
    { francais: "vehicules", arabe: "مَرْكَبات" },
    { francais: "Fermes(agriculture)", arabe: "مُزَارِع" },
    { francais: "posseder", arabe: "مَلَكَ/يَمْلِكُ" },
    { francais: "fenetre", arabe: "نافِذَة" },
    { francais: "seminaire", arabe: "نَدْوَة" },
    { francais: "transport", arabe: "نَقْل" },
    { francais: "telephone", arabe: "هاتِف" },
    { francais: "dominance", arabe: "هَيْمَنَة" },
    { francais: "large", arabe: "واسِع" }
];

let listeMots210 = [
    { arabe: "أَداء", francais: "Action ou exécution d'une tâche ou d'une responsabilité." },
    { arabe: "إذَنْ", francais: "Permission ou autorisation." },
    { arabe: "أَزالَ/يُزيلُ", francais: "Enlever ou ôter quelque chose." },
    { arabe: "اِسْتَعْمَلَ/يَسْتَعْمِلُ", francais: "Utiliser ou employer quelque chose." },
    { arabe: "اِغْتَسَلَ/يَغْتَسِلُ", francais: "Prendre un bain ou se laver." },
    { arabe: "أَكَلات", francais: "Plats ou repas." },
    { arabe: "أَكْواب", francais: "Tasses ou verres." },
    { arabe: "أَمْوال", francais: "Biens ou avoirs, souvent associés à des finances." },
    { arabe: "أَنْفَقَ/يُنْفِقُ", francais: "Dépenser de l'argent ou des ressources." },
    { arabe: "اِهْتِمام", francais: "Attention ou intérêt porté à quelque chose ou à quelqu'un." },
    { arabe: "أَوْساخ", francais: "Saleté ou déchets." },
    { arabe: "بيئَة", francais: "Environnement ou contexte." },
    { arabe: "تَسَمُم", francais: "Intoxication ou empoisonnement." },
    { arabe: "تَكرّرَ/يَتَكَرّرُ", francais: "Se reproduire ou se répéter." },
    { arabe: "ثِياب", francais: "Vêtements." },
    { arabe: "جابَ/يَجوبُ", francais: "Parcourir ou explorer." },
    { arabe: "جَسَد", francais: "Corps." },
    { arabe: "جَنابَة", francais: "Impureté rituelle." },
    { arabe: "حالاً", francais: "Actuellement ou en ce moment." },
    { arabe: "حاوِيَة", francais: "Conteneur ou récipient." },
    { arabe: "حَثّ/يَحُثُ", francais: "Encourager ou inciter." },
    { arabe: "حَدائِق", francais: "Jardins." },
    { arabe: "حَرَق/يَحْرِق", francais: "Brûler ou incendier." },
    { arabe: "حَطّ/يَحُطُ", francais: "Poser ou placer quelque chose." },
    { arabe: "حَيْض", francais: "Menstruation." },
    { arabe: "خاصّة", francais: "Particulièrement ou spécifiquement." },
    { arabe: "دَوْلَة", francais: "État ou nation." },
    { arabe: "ذُباب", francais: "Mouches." },
    { arabe: "رُبّما", francais: "Peut-être." },
    { arabe: "صِحِّيّ", francais: "Sain ou en bonne santé." },
    { arabe: "طَهارَة", francais: "Pureté rituelle." },
    { arabe: "عِبادات", francais: "Pratiques religieuses ou dévotions." },
    { arabe: "عِطْر", francais: "Parfum ou fragrance." },
    { arabe: "عُمّال", francais: "Travailleurs ou employés." },
    { arabe: "غُسْل", francais: "Lavage rituel." },
    { arabe: "قاسَ/يَقيسُ", francais: "Mesurer ou évaluer." },
    { arabe: "قَذارَة", francais: "Saleté ou impureté." },
    { arabe: "لاحَظَ/يُلاحِظُ", francais: "Remarquer ou observer." },
    { arabe: "لَذيذ", francais: "Délicieux ou savoureux." },
    { arabe: "ما أَطْيَبَ", francais: "Comme c'est bon !" },
    { arabe: "مُتَحَضِّرَة", francais: "Civilisée ou raffinée." },
    { arabe: "مُتَخَلِّفَة", francais: "Arriérée ou en retard." },
    { arabe: "مَرّات", francais: "Fois ou occasions." },
    { arabe: "مَسْؤولِيّة", francais: "Responsabilité." },
    { arabe: "مُسْتَمِرّة", francais: "Continue ou constante." },
    { arabe: "مَسْكَن", francais: "Logement ou domicile." },
    { arabe: "مَلْبَس", francais: "Vêtements." },
    { arabe: "مِنْ أدَبِ", francais: "Poliment ou de manière courtoise." },
    { arabe: "مُهِمّ", francais: "Important ou significatif." },
    { arabe: "مُواطِن", francais: "Citoyen ou résident." },
    { arabe: "نزَل/يَنْزِلُ", francais: "Descendre." },
    { arabe: "نَظيف", francais: "Propre." },
    { arabe: "نِفاس", francais: "Accouchement." },
    { arabe: "نُفايات", francais: "Déchets." },
    { arabe: "نَوعانِ", francais: "Deux types ou deux genres." },
    { arabe: "وَجْه", francais: "Visage." },
    { arabe: "وُضوء", francais: "Ablution rituelle." },
    { arabe: "يَد", francais: "Main." }
];

/*fetch("http://localhost:4000/deuxieme", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(listeMots210)
})
.then(() => console.log("ok"))
.catch(error => console.log(error))*/
fetch("http://localhost:4001/donnees")
.then(()=>{
    fetch("http://localhost:4001/donnees", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        motsoublies: {
          apprentissage: ['toto','gogo']
        }
      })
    })
    .then(() => console.log("OK"))
    .catch(error => console.log(error))
})
.catch(error => console.log(error))