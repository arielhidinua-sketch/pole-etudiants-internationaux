/**
 * ============================================================================
 * FICHIER CENTRAL DE CONTENU & CONFIGURATION — js/content.js
 * Pôle des Étudiants Internationaux · AEPUD — IUT de Saint-Dié
 * ============================================================================
 * Ce fichier regroupe toutes les informations modifiables du site :
 *  1. Liens (Google Forms, e-mail, Instagram, réseaux sociaux)
 *  2. Représentants de l'équipe (noms, photos, biographies, contacts)
 *  3. Événements et activités (liste vide par défaut, prête à être remplie)
 *  4. Galerie photo (visuels temporaires facilement remplaçables)
 *  5. Traductions complètes (Français par défaut + Anglais, architecture extensible)
 * ============================================================================
 */

window.SITE_CONFIG = {
  defaultLanguage: "fr",
  enabledLanguages: ["fr", "en"], // Ajoutez "pt" ici si vous souhaitez activer le portugais dans le menu

  // Lien du formulaire Google Forms (utilisé pour "Partager mes besoins" et "Rejoindre le pôle")
  // Remplacez "[GOOGLE_FORMS_URL]" par votre vrai lien (ex: "https://forms.gle/xxxxx")
  googleFormsUrl: "[GOOGLE_FORMS_URL]",

  // Image principale de la section Hero (avec image locale de secours automatique)
  heroMedia: {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85",
    fallback: "assets/images/hero-campus-placeholder.svg"
  },

  // Informations de contact officielles
  contact: {
    association: "Association des Étudiants (AEPUD) — IUT de Saint-Dié",
    pole: "Pôle des Étudiants Internationaux",
    email: "[À RENSEIGNER]",
    instagram: "@AEPUD",
    otherNetwork: "[À RENSEIGNER]",
    location: "IUT de Saint-Dié-des-Vosges · 11 Rue de l’Université, 88100 Saint-Dié-des-Vosges"
  },

  // Les 2 représentants du Pôle
  team: [
    {
      id: "rep-1",
      photo: "assets/images/ariel-hidinua.jpg",
      photoPosition: "center 78%",
      isPlaceholderPhoto: false,
      name: "Ariel Hidinua",
      roleKey: "teamRoleDefault",
      bio: {
        fr: "Étudiant angolais en BUT GEII à l’IUT de Saint-Dié, Ariel a obtenu une bourse d’excellence lui permettant de poursuivre ses études en France. Ancien président du pôle académique de l’association des élèves du lycée Eiffel d’Ondjiva et membre du pôle Génie de la Production Industrielle de l’ISPTEC, il possède une expérience en leadership étudiant. Il s’investit également dans l’entrepreneuriat social à travers Serenus, un projet dédié à la santé mentale bénéficiant d’un accompagnement dans l’écosystème de l’UNICEF.\n\nAujourd’hui, il souhaite mettre son expérience et son engagement au service de la communauté internationale de l’IUT.",
        en: "An Angolan student in BUT GEII (Electrical Engineering and Industrial Computing) at IUT de Saint-Dié, Ariel was awarded an excellence scholarship to pursue his studies in France. Former president of the academic hub of the student association at Lycée Eiffel of Ondjiva and a member of the Industrial Production Engineering hub at ISPTEC, he brings solid experience in student leadership. He is also committed to social entrepreneurship through Serenus, a mental health initiative supported within the UNICEF ecosystem.\n\nToday, he aims to put his experience and commitment at the service of the IUT’s international community.",
        pt: "Estudante angolano em BUT GEII no IUT de Saint-Dié, Ariel obteve uma bolsa de excelência que lhe permitiu prosseguir os estudos em França. Antigo presidente do polo académico da associação de estudantes do Liceu Eiffel de Ondjiva e membro do polo de Engenharia de Produção Industrial do ISPTEC, possui sólida experiência em liderança estudantil. Dedica-se também ao empreendedorismo social através da Serenus, um projeto dedicado à saúde mental acompanhado no ecossistema da UNICEF.\n\nAtualmente, deseja colocar a sua experiência e o seu compromisso ao serviço da comunidade internacional do IUT."
      },
      contact: "@AEPUD"
    },
    {
      id: "rep-2",
      photo: "assets/images/credo-charles.jpg",
      photoPosition: "center 80%",
      isPlaceholderPhoto: false,
      name: "Credo Charles",
      roleKey: "teamRoleDefault",
      bio: {
        fr: "Étudiant en Génie Électrique et Informatique Industrielle en France, lauréat d’une bourse d’excellence en 2024. Passionné par l’automatisation industrielle et les systèmes électriques. Ancien président de l’association des élèves du Lycée Eiffel d’Ondjiva et actuellement représentant des étudiants internationaux à l’IUT de Saint-Dié-des-Vosges. Doté d’un esprit de leadership, d’adaptation et de travail en équipe, je suis motivé par l’apprentissage et les nouveaux défis.",
        en: "A student in Electrical Engineering and Industrial Computing (GEII) in France and recipient of a 2024 excellence scholarship. Passionate about industrial automation and electrical systems. Former president of the student association at Lycée Eiffel of Ondjiva and currently International Students Representative at IUT de Saint-Dié-des-Vosges. Driven by leadership, adaptability, and teamwork, I am motivated by continuous learning and new challenges.",
        pt: "Estudante de Engenharia Eletrotécnica e Informática Industrial em França, bolseiro de excelência em 2024. Apaixonado por automação industrial e sistemas elétricos. Antigo presidente da associação de estudantes do Liceu Eiffel de Ondjiva e atualmente representante dos estudantes internacionais no IUT de Saint-Dié-des-Vosges. Dotado de espírito de liderança, adaptação e trabalho em equipa, sou motivado pela aprendizagem e por novos desafios."
      },
      contact: "@AEPUD"
    }
  ],

  /**
   * ÉVÉNEMENTS & ACTIVITÉS
   * Par défaut, aucun événement fictif n'est affiché ([]).
   * Pour ajouter un événement réel, décommentez et adaptez le modèle ci-dessous :
   *
   * {
   *   id: "evt-1",
   *   image: "assets/images/mon-evenement.jpg",
   *   status: "upcoming", // "upcoming" (À venir) ou "past" (Terminé)
   *   title: {
   *     fr: "Titre de l'activité",
   *     en: "Activity Title"
   *   },
   *   description: {
   *     fr: "Courte présentation de la rencontre ou sortie.",
   *     en: "Short description of the gathering or outing."
   *   },
   *   date: "Date confirmée",
   *   location: "Lieu confirmé (ex: Foyer AEPUD - IUT)"
   * }
   */
  events: [],

  // Galerie photo (emplacements temporaires clairement identifiés comme remplaçables)
  gallery: [
    {
      id: "gal-1",
      src: "assets/images/gallery-1.svg",
      isTemporary: true,
      title: {
        fr: "Emplacement · Rencontres sur le campus",
        en: "Placeholder · Campus Gatherings",
        pt: "Espaço reservado · Encontros no campus"
      },
      subtitle: {
        fr: "Remplacez par vos photos dans assets/images/",
        en: "Replace with your own photos in assets/images/",
        pt: "Substitua pelas vossas fotos em assets/images/"
      }
    },
    {
      id: "gal-2",
      src: "assets/images/gallery-2.svg",
      isTemporary: true,
      title: {
        fr: "Emplacement · Découverte de Saint-Dié & des Vosges",
        en: "Placeholder · Discovering Saint-Dié & the Vosges",
        pt: "Espaço reservado · Descoberta de Saint-Dié e Vosges"
      },
      subtitle: {
        fr: "Sorties nature et patrimoine local",
        en: "Nature outings and local heritage",
        pt: "Passeios na natureza e património local"
      }
    },
    {
      id: "gal-3",
      src: "assets/images/gallery-3.svg",
      isTemporary: true,
      title: {
        fr: "Emplacement · Échanges interculturels",
        en: "Placeholder · Intercultural Exchanges",
        pt: "Espaço reservado · Intercâmbios interculturais"
      },
      subtitle: {
        fr: "Moments de partage entre étudiants",
        en: "Moments of sharing among students",
        pt: "Momentos de partilha entre estudantes"
      }
    },
    {
      id: "gal-4",
      src: "assets/images/gallery-4.svg",
      isTemporary: true,
      title: {
        fr: "Emplacement · Entraide & ateliers pratiques",
        en: "Placeholder · Peer Support & Practical Sessions",
        pt: "Espaço reservado · Entreajuda e sessões práticas"
      },
      subtitle: {
        fr: "Accompagnement au quotidien à l'IUT",
        en: "Everyday support at the IUT",
        pt: "Acompanhamento no dia a dia no IUT"
      }
    },
    {
      id: "gal-5",
      src: "assets/images/gallery-5.svg",
      isTemporary: true,
      title: {
        fr: "Emplacement · Moments de convivialité",
        en: "Placeholder · Convivial Moments",
        pt: "Espaço reservado · Momentos de convívio"
      },
      subtitle: {
        fr: "Détente et cohésion étudiante",
        en: "Relaxation and student cohesion",
        pt: "Descontração e coesão estudantil"
      }
    },
    {
      id: "gal-6",
      src: "assets/images/gallery-6.svg",
      isTemporary: true,
      title: {
        fr: "Emplacement · Vie associative AEPUD",
        en: "Placeholder · AEPUD Student Life",
        pt: "Espaço reservado · Vida associativa AEPUD"
      },
      subtitle: {
        fr: "Participation active à la vie de l'IUT",
        en: "Active participation in IUT life",
        pt: "Participação ativa na vida do IUT"
      }
    }
  ]
};

window.TRANSLATIONS = {
  fr: {
    metaTitle: "Pôle des Étudiants Internationaux · AEPUD — IUT de Saint-Dié",
    metaDescription: "Un espace pour se rencontrer, s’entraider et construire ensemble une expérience étudiante plus enrichissante à l’IUT de Saint-Dié.",
    skipToContent: "Aller au contenu principal",

    // Navigation
    brandTitle: "Pôle International",
    brandSub: "AEPUD · IUT de Saint-Dié",
    navHome: "Accueil",
    navPole: "Le Pôle",
    navActivities: "Nos Activités",
    navTeam: "Notre Équipe",
    navJoin: "Nous Rejoindre",
    menuAriaLabel: "Ouvrir ou fermer le menu de navigation",

    // Hero
    heroMention: "Une initiative de l’Association des Étudiants (AEPUD) — IUT de Saint-Dié",
    heroTitleHtml: "L’IUT est aussi <span class=\"serif-accent\">chez vous.</span>",
    heroSubtitle: "Un espace pour se rencontrer, s’entraider et construire ensemble une expérience étudiante plus enrichissante.",
    heroCtaDiscover: "DÉCOUVRIR LE PÔLE",
    heroCtaJoin: "NOUS REJOINDRE",
    heroValue1: "Appartenance",
    heroValue2: "Confiance",
    heroValue3: "Opportunité",
    heroFloatingTitle: "Communauté ouverte",
    heroFloatingSub: "Écoute, entraide & vie étudiante",
    heroPhotoAlt: "Groupe diversifié d'étudiants internationaux réunis dans un cadre universitaire",
    heroCampusTag: "IUT de Saint-Dié-des-Vosges",

    // Section 4 : Qui sommes-nous ?
    aboutEyebrow: "01 · Qui sommes-nous ?",
    aboutTitleHtml: "Bienvenue dans votre <span class=\"serif-accent\">communauté.</span>",
    aboutLead: "Le Pôle des Étudiants Internationaux est une initiative de l’Association des Étudiants de l’IUT de Saint-Dié, créée pour favoriser l’intégration, l’entraide, le partage et la participation des étudiants internationaux à la vie étudiante.",
    signatureSecondary: "« Ensemble, faisons de notre diversité une force. »",
    signatureMeta: "Pôle des Étudiants Internationaux · AEPUD",

    pillar1Tag: "Notre raison d’être",
    pillar1Title: "Pourquoi le pôle existe",
    pillar1Desc: "Offrir un point de repère humain, bienveillant et structuré pour que chaque étudiant venant d’ailleurs se sente pleinement accueilli, écouté et représenté dès ses premiers pas à Saint-Dié.",

    pillar2Tag: "Public concerné",
    pillar2Title: "À qui il s’adresse",
    pillar2Desc: "Aux nouveaux arrivants internationaux, aux étudiants déjà installés à l’IUT, ainsi qu’à tous les étudiants souhaitant s’impliquer dans les échanges interculturels et la solidarité étudiante.",

    pillar3Tag: "Notre engagement",
    pillar3Title: "Ce qu’il apporte à la communauté",
    pillar3Desc: "Un réseau d’entraide concret au quotidien, un relais d’informations utiles, des moments fédérateurs et une passerelle directe vers la vie associative de l’AEPUD.",

    // Section 5 : Nos Initiatives
    initEyebrow: "02 · Nos Initiatives",
    initTitleHtml: "Ensemble, faisons vivre notre <span class=\"serif-accent\">communauté.</span>",
    initLead: "Cinq piliers complémentaires pour accompagner votre parcours et enrichir la vie collective à l’IUT.",

    init1Title: "Accueil & Intégration",
    init1Desc: "Faciliter les rencontres, l’adaptation et l’intégration des étudiants internationaux dans leur nouvel environnement.",

    init2Title: "Entraide & Accompagnement",
    init2Desc: "Partager des expériences, des conseils et des informations utiles pour mieux faire face aux défis du quotidien.",

    init3Title: "Orientation académique & professionnelle",
    init3Desc: "Faciliter l’accès aux informations et ressources utiles concernant les stages, l’alternance et les démarches professionnelles en France.",
    init3Note: "À noter : le pôle partage des pistes, retours d’expérience et ressources d’orientation, sans se substituer aux services officiels ni garantir l’obtention d’un stage ou d’un contrat d’alternance.",

    init4Title: "Loisirs & Activités",
    init4Desc: "Organiser des sorties, des activités de détente, des rencontres et des moments de convivialité.",

    init5Title: "Échanges & Réseau",
    init5Desc: "Favoriser les échanges interculturels, les rencontres et la création de liens entre étudiants.",

    // Section 6 : Nos Activités et Événements
    actEyebrow: "03 · Nos Activités & Événements",
    actTitleHtml: "La vie étudiante se construit <span class=\"serif-accent\">ensemble.</span>",
    actLead: "Sorties découvertes, rencontres interculturelles, temps d’entraide et moments forts rythment l’année avec vous.",
    actTag1: "Prochaines activités",
    actTag2: "Sorties organisées",
    actTag3: "Rencontres interculturelles",
    actTag4: "Événements du pôle",
    actTag5: "Moments forts",
    filterAll: "Tout voir",
    filterUpcoming: "À venir",
    filterPast: "Terminé",
    statusUpcoming: "À venir",
    statusPast: "Terminé",
    emptyBadge: "Programmation en cours",
    emptyTitle: "Les prochaines rencontres se préparent avec vous.",
    emptyText: "Aucune date n’est encore publiée pour le moment. Nous construisons le calendrier des premières sorties et activités à partir de vos envies — restez connectés et partagez vos idées !",
    emptyCtaSuggest: "PROPOSER UNE IDÉE",
    emptyCtaFollow: "RESTER INFORMÉ",
    emptyPreview1: "Rencontres d’accueil & cafés interculturels",
    emptyPreview2: "Sorties découvertes à Saint-Dié et dans les Vosges",
    emptyPreview3: "Temps d’échange d’expériences & entraide étudiante",
    emptyFilterNone: "Aucun événement ne correspond à ce filtre pour le moment.",

    // Section 7 : Notre Équipe
    teamEyebrow: "04 · Notre Équipe",
    teamTitleHtml: "Derrière le pôle, des personnes <span class=\"serif-accent\">à votre écoute.</span>",
    teamLead: "Nous sommes là pour vous représenter, vous écouter et faire évoluer cette initiative avec vous.",
    teamRepLabel1: "Représentant 01",
    teamRepLabel2: "Représentant 02",
    teamRoleDefault: "Représentant des étudiants internationaux",
    teamBioLabel: "Présentation",
    teamContactLabel: "Contact / Réseau",
    teamSlotBadge: "Emplacement portrait · Remplaçable",
    placeholderText: "[À RENSEIGNER]",
    teamAdminNote: "Responsables du pôle : vous pouvez prévisualiser vos photos et informations directement ici ou dans js/content.js.",
    teamAdminBtn: "Personnaliser les profils",

    // Section 8 : Participez à la construction du pôle
    partEyebrow: "05 · Nous Rejoindre & Participer",
    partTitleHtml: "Votre expérience compte. <span class=\"serif-accent\">Votre voix aussi.</span>",
    partLead: "Chaque étudiant a une expérience, des besoins et des idées qui méritent d’être entendus. Aidez-nous à construire un pôle qui vous ressemble.",

    opt1Tag: "Option 01 · Expression & Besoins",
    opt1Title: "Partager mes besoins",
    opt1Desc: "Faites-nous part de votre réalité étudiante afin d’orienter concrètement les actions prioritaires du pôle :",
    opt1Bullet1: "Vos informations générales d’étudiant à l’IUT",
    opt1Bullet2: "Vos besoins actuels et les difficultés rencontrées",
    opt1Bullet3: "Les domaines dans lesquels vous souhaiteriez être accompagné",
    opt1Bullet4: "Vos idées et suggestions pour améliorer la vie étudiante internationale",
    opt1Btn: "PARTAGER MES BESOINS",

    opt2Tag: "Option 02 · Engagement Associatif",
    opt2Title: "Rejoindre le pôle",
    opt2Desc: "Vous souhaitez contribuer activement, proposer des initiatives ou aider à accueillir d’autres étudiants ?",
    opt2Bullet1: "Manifester votre intérêt pour participer aux projets du pôle",
    opt2Bullet2: "Co-construire des sorties, rencontres et actions d’entraide",
    opt2Bullet3: "Rejoindre une dynamique conviviale au sein de l’AEPUD",
    opt2Btn: "REJOINDRE LE PÔLE",

    privacyNotice: "Confidentialité & protection des données : les informations recueillies via notre formulaire sont utilisées exclusivement dans le cadre des activités du Pôle des Étudiants Internationaux et de l’Association des Étudiants (AEPUD — IUT de Saint-Dié), conformément à la réglementation applicable sur la protection des données personnelles (RGPD). Aucune donnée n’est cédée à des tiers.",

    // Section 9 : Galerie
    galEyebrow: "06 · Galerie",
    galTitleHtml: "Des rencontres, des expériences, <span class=\"serif-accent\">des souvenirs.</span>",
    galLead: "Cet espace accueillera au fil de l’année les photographies authentiques de vos sorties, rencontres et temps forts.",
    galTempBadge: "Visuel temporaire · À remplacer",
    lightboxCloseAria: "Fermer l'aperçu plein écran",
    lightboxPrevAria: "Image précédente",
    lightboxNextAria: "Image suivante",

    // Section 10 : Contact & Footer
    contactEyebrow: "07 · Contact & Réseaux",
    contactTitleHtml: "Restons en <span class=\"serif-accent\">contact !</span>",
    contactLead: "Une question, une suggestion ou simplement envie d’échanger avec l’équipe du pôle ? Écrivez-nous ou retrouvez-nous sur le campus de l’IUT.",
    contactEmailLabel: "Adresse e-mail officielle",
    contactInstaLabel: "Compte Instagram",
    contactOtherLabel: "Autres réseaux sociaux",
    contactCampusLabel: "Campus",
    contactBtn: "NOUS CONTACTER",

    footerMainSig: "« L’IUT est aussi chez vous. »",
    footerSubSig: "« Ensemble, faisons de notre diversité une force. »",
    footerNavTitle: "Navigation",
    footerInfoTitle: "Organisation",
    footerAssocItem: "Association des Étudiants (AEPUD)",
    footerPoleItem: "Pôle des Étudiants Internationaux",
    footerIutItem: "IUT de Saint-Dié-des-Vosges",
    footerRights: "Pôle des Étudiants Internationaux · AEPUD — IUT de Saint-Dié. Tous droits réservés.",
    backToTop: "Haut de page ↑",

    // Modales & Messages interactifs
    formModalTitleNeeds: "Partager mes besoins — Formulaire",
    formModalTitleJoin: "Rejoindre le pôle — Formulaire",
    formModalPendingDesc: "Le lien officiel Google Forms ([GOOGLE_FORMS_URL]) est prêt à être connecté dans js/content.js. Vous pouvez tester ou renseigner l’URL ci-dessous pour l’ouvrir immédiatement :",
    formModalUrlLabel: "Lien Google Forms (pour aperçu ou configuration rapide)",
    formModalOpenBtn: "Enregistrer & Ouvrir le formulaire",
    formModalCloseBtn: "Fermer",

    contactModalTitle: "Contacter le Pôle International",
    contactModalPending: "Vous pouvez dès maintenant nous écrire directement via le compte Instagram officiel de l’association (@AEPUD). L’adresse e-mail dédiée sera ajoutée prochainement.",
    contactModalInstaBtn: "Écrire sur Instagram (@AEPUD)",
    contactCopySuccess: "Adresse e-mail copiée dans le presse-papiers !",

    teamModalTitle: "Personnaliser les représentants",
    teamModalDesc: "Testez vos portraits et informations en direct sur la page, puis copiez la configuration prête à coller dans js/content.js.",
    teamPhotoInputLabel: "Choisir une photographie (portrait)",
    teamNameInputLabel: "Nom complet",
    teamBioInputLabel: "Courte biographie",
    teamContactInputLabel: "Contact (e-mail ou lien réseau social)",
    teamApplyBtn: "Appliquer l'aperçu",
    teamCopyConfigBtn: "Copier le code pour content.js",
    teamResetBtn: "Réinitialiser",
    toastSavedTeam: "Aperçu des profils mis à jour sur la page !",
    toastCopiedConfig: "Configuration copiée ! Collez-la dans js/content.js.",
    toastInvalidUrl: "Veuillez saisir une adresse commençant par https://"
  },

  en: {
    metaTitle: "International Students Hub · AEPUD — IUT de Saint-Dié",
    metaDescription: "A welcoming space to connect, support one another, and build a richer student experience together at IUT de Saint-Dié.",
    skipToContent: "Skip to main content",

    // Navigation
    brandTitle: "International Hub",
    brandSub: "AEPUD · IUT de Saint-Dié",
    navHome: "Home",
    navPole: "The Hub",
    navActivities: "Activities",
    navTeam: "Our Team",
    navJoin: "Join Us",
    menuAriaLabel: "Toggle navigation menu",

    // Hero
    heroMention: "An initiative of the Student Association (AEPUD) — IUT de Saint-Dié",
    heroTitleHtml: "The IUT is your <span class=\"serif-accent\">home too.</span>",
    heroSubtitle: "A space to meet, support each other, and build a more rewarding student experience together.",
    heroCtaDiscover: "DISCOVER THE HUB",
    heroCtaJoin: "JOIN US",
    heroValue1: "Belonging",
    heroValue2: "Trust",
    heroValue3: "Opportunity",
    heroFloatingTitle: "Open Community",
    heroFloatingSub: "Listening, peer support & campus life",
    heroPhotoAlt: "Diverse group of international students gathered in a university setting",
    heroCampusTag: "IUT de Saint-Dié-des-Vosges",

    // Section 4: Who We Are
    aboutEyebrow: "01 · Who Are We?",
    aboutTitleHtml: "Welcome to your <span class=\"serif-accent\">community.</span>",
    aboutLead: "The International Students Hub (Pôle des Étudiants Internationaux) is an initiative of the Student Association at IUT de Saint-Dié, created to foster integration, mutual support, sharing, and active participation of international students in campus life.",
    signatureSecondary: "“Together, let’s make our diversity a strength.”",
    signatureMeta: "Pôle des Étudiants Internationaux · AEPUD",

    pillar1Tag: "Why we exist",
    pillar1Title: "Our Purpose",
    pillar1Desc: "To provide a warm, supportive, and structured point of reference so every student from abroad feels genuinely welcomed, heard, and represented from day one in Saint-Dié.",

    pillar2Tag: "Who it is for",
    pillar2Title: "Open to Everyone",
    pillar2Desc: "For newly arrived international students, students already settled at the IUT, and anyone eager to take part in intercultural exchange and student solidarity.",

    pillar3Tag: "What we bring",
    pillar3Title: "Value for the Community",
    pillar3Desc: "Practical peer-to-peer guidance for daily life, helpful shared resources, unifying events, and a direct bridge to AEPUD student life.",

    // Section 5: Our Initiatives
    initEyebrow: "02 · Our Initiatives",
    initTitleHtml: "Together, let’s bring our <span class=\"serif-accent\">community to life.</span>",
    initLead: "Five complementary pillars designed to support your journey and enrich collective life at the IUT.",

    init1Title: "Welcome & Integration",
    init1Desc: "Facilitating connections, smooth adaptation, and integration for international students in their new environment.",

    init2Title: "Mutual Aid & Support",
    init2Desc: "Sharing lived experiences, practical tips, and useful information to navigate everyday challenges with confidence.",

    init3Title: "Academic & Career Guidance",
    init3Desc: "Helping students access helpful information and resources regarding internships, work-study tracks (alternance), and professional steps in France.",
    init3Note: "Please note: the hub shares peer insights, guidance, and useful resources, without replacing official university services or guaranteeing internships or work-study contracts.",

    init4Title: "Leisure & Activities",
    init4Desc: "Organizing outings, relaxing activities, social meetups, and warm moments of togetherness.",

    init5Title: "Exchanges & Networking",
    init5Desc: "Encouraging intercultural dialogue, meaningful encounters, and lasting friendships across students.",

    // Section 6: Activities & Events
    actEyebrow: "03 · Activities & Events",
    actTitleHtml: "Student life is built <span class=\"serif-accent\">together.</span>",
    actLead: "Local outings, intercultural meetups, peer-support sessions, and shared highlights shaped alongside you throughout the year.",
    actTag1: "Upcoming activities",
    actTag2: "Organized outings",
    actTag3: "Intercultural meetups",
    actTag4: "Hub events",
    actTag5: "Highlights",
    filterAll: "All",
    filterUpcoming: "Upcoming",
    filterPast: "Completed",
    statusUpcoming: "Upcoming",
    statusPast: "Completed",
    emptyBadge: "Program in preparation",
    emptyTitle: "Our upcoming gatherings are being shaped with you.",
    emptyText: "No confirmed dates are published just yet. We are building our upcoming calendar of outings and activities around your needs — stay tuned and share your ideas!",
    emptyCtaSuggest: "SUGGEST AN IDEA",
    emptyCtaFollow: "STAY CONNECTED",
    emptyPreview1: "Welcome meetups & intercultural coffee chats",
    emptyPreview2: "Discovery outings in Saint-Dié and the Vosges",
    emptyPreview3: "Experience-sharing & peer support sessions",
    emptyFilterNone: "No events match this filter at the moment.",

    // Section 7: Our Team
    teamEyebrow: "04 · Our Team",
    teamTitleHtml: "Behind the hub, people <span class=\"serif-accent\">here to listen.</span>",
    teamLead: "We are here to represent you, listen to you, and help this initiative grow together with you.",
    teamRepLabel1: "Representative 01",
    teamRepLabel2: "Representative 02",
    teamRoleDefault: "International Students Representative",
    teamBioLabel: "Biography",
    teamContactLabel: "Contact / Social",
    teamSlotBadge: "Portrait slot · Easily replaceable",
    placeholderText: "[TO BE COMPLETED]",
    teamAdminNote: "Hub coordinators: preview your portraits and profile details live here or update them in js/content.js.",
    teamAdminBtn: "Customize profiles",

    // Section 8: Participate
    partEyebrow: "05 · Get Involved",
    partTitleHtml: "Your experience matters. <span class=\"serif-accent\">So does your voice.</span>",
    partLead: "Every student has experiences, needs, and ideas worth hearing. Help us build a hub that truly reflects you.",

    opt1Tag: "Option 01 · Voice & Needs",
    opt1Title: "Share my needs",
    opt1Desc: "Tell us about your student experience so we can focus the hub’s priorities on what matters most:",
    opt1Bullet1: "General background about your studies at the IUT",
    opt1Bullet2: "Current needs and everyday challenges you face",
    opt1Bullet3: "Areas where you would appreciate peer guidance or support",
    opt1Bullet4: "Your suggestions to improve international student life",
    opt1Btn: "SHARE MY NEEDS",

    opt2Tag: "Option 02 · Join the Initiative",
    opt2Title: "Join the hub",
    opt2Desc: "Want to contribute actively, suggest initiatives, or help welcome fellow students?",
    opt2Bullet1: "Express your interest in contributing to hub initiatives",
    opt2Bullet2: "Co-create outings, intercultural events, and peer-support actions",
    opt2Bullet3: "Be part of a welcoming team within AEPUD",
    opt2Btn: "JOIN THE HUB",

    privacyNotice: "Privacy & data protection: information collected through our form is used exclusively for the activities of the International Students Hub and the Student Association (AEPUD — IUT de Saint-Dié), in accordance with applicable data protection regulations (GDPR). No personal data is shared with third parties.",

    // Section 9: Gallery
    galEyebrow: "06 · Gallery",
    galTitleHtml: "Encounters, experiences, <span class=\"serif-accent\">memories.</span>",
    galLead: "Throughout the academic year, this space will showcase authentic photos from our outings, meetups, and community moments.",
    galTempBadge: "Temporary visual · Replaceable",
    lightboxCloseAria: "Close fullscreen preview",
    lightboxPrevAria: "Previous image",
    lightboxNextAria: "Next image",

    // Section 10: Contact & Footer
    contactEyebrow: "07 · Contact & Socials",
    contactTitleHtml: "Let’s stay in <span class=\"serif-accent\">touch!</span>",
    contactLead: "Have a question, a suggestion, or simply want to connect with the hub team? Reach out to us or meet us on the IUT campus.",
    contactEmailLabel: "Official email address",
    contactInstaLabel: "Instagram account",
    contactOtherLabel: "Other social channels",
    contactCampusLabel: "Campus",
    contactBtn: "CONTACT US",

    footerMainSig: "“The IUT is your home too.”",
    footerSubSig: "“Together, let’s make our diversity a strength.”",
    footerNavTitle: "Navigation",
    footerInfoTitle: "Organization",
    footerAssocItem: "Student Association (AEPUD)",
    footerPoleItem: "Pôle des Étudiants Internationaux",
    footerIutItem: "IUT de Saint-Dié-des-Vosges",
    footerRights: "Pôle des Étudiants Internationaux · AEPUD — IUT de Saint-Dié. All rights reserved.",
    backToTop: "Back to top ↑",

    // Modals & Interactive Feedback
    formModalTitleNeeds: "Share my needs — Form",
    formModalTitleJoin: "Join the hub — Form",
    formModalPendingDesc: "The official Google Forms URL ([GOOGLE_FORMS_URL]) is ready to be set in js/content.js. You can also paste or test the form URL below to open it right away:",
    formModalUrlLabel: "Google Forms URL (for quick preview or setup)",
    formModalOpenBtn: "Save & Open Form",
    formModalCloseBtn: "Close",

    contactModalTitle: "Contact the International Hub",
    contactModalPending: "You can reach out to us right now via the association’s official Instagram account (@AEPUD). Our dedicated email address will be added soon.",
    contactModalInstaBtn: "Message on Instagram (@AEPUD)",
    contactCopySuccess: "Email address copied to clipboard!",

    teamModalTitle: "Customize Representatives",
    teamModalDesc: "Preview portraits and profile details live on the page, then copy the ready-to-paste configuration for js/content.js.",
    teamPhotoInputLabel: "Select portrait photo",
    teamNameInputLabel: "Full name",
    teamBioInputLabel: "Short biography",
    teamContactInputLabel: "Contact (email or social URL)",
    teamApplyBtn: "Apply live preview",
    teamCopyConfigBtn: "Copy code for content.js",
    teamResetBtn: "Reset",
    toastSavedTeam: "Representative profiles updated on the page!",
    toastCopiedConfig: "Configuration copied! Paste it into js/content.js.",
    toastInvalidUrl: "Please enter a valid URL starting with https://"
  },

  pt: {
    metaTitle: "Pôle des Étudiants Internationaux · AEPUD — IUT de Saint-Dié",
    metaDescription: "Um espaço para se encontrar, entreajudar e construir em conjunto uma experiência estudantil mais enriquecedora no IUT de Saint-Dié.",
    skipToContent: "Ir para o conteúdo principal",
    brandTitle: "Pôle International",
    brandSub: "AEPUD · IUT de Saint-Dié",
    navHome: "Início",
    navPole: "O Pôle",
    navActivities: "Atividades",
    navTeam: "A Nossa Equipa",
    navJoin: "Juntar-se a Nós",
    menuAriaLabel: "Abrir ou fechar menu de navegação",
    heroMention: "Uma iniciativa da Association des Étudiants (AEPUD) — IUT de Saint-Dié",
    heroTitleHtml: "O IUT também é <span class=\"serif-accent\">a sua casa.</span>",
    heroSubtitle: "Um espaço para nos encontrarmos, ajudarmos mutuamente e construirmos juntos uma experiência estudantil mais enriquecedora.",
    heroCtaDiscover: "DESCOBRIR O PÔLE",
    heroCtaJoin: "JUNTAR-SE A NÓS",
    heroValue1: "Pertença",
    heroValue2: "Confiança",
    heroValue3: "Oportunidade",
    heroFloatingTitle: "Comunidade aberta",
    heroFloatingSub: "Escuta, entreajuda e vida estudantil",
    heroPhotoAlt: "Grupo diversificado de estudantes internacionais num ambiente universitário",
    heroCampusTag: "IUT de Saint-Dié-des-Vosges",
    aboutEyebrow: "01 · Quem somos?",
    aboutTitleHtml: "Bem-vindo à sua <span class=\"serif-accent\">comunidade.</span>",
    aboutLead: "O Pôle des Étudiants Internationaux é uma iniciativa da Association des Étudiants do IUT de Saint-Dié, criada para promover a integração, a entreajuda, a partilha e a participação dos estudantes internacionais na vida académica.",
    signatureSecondary: "« Juntos, façamos da nossa diversidade uma força. »",
    signatureMeta: "Pôle des Étudiants Internationaux · AEPUD",
    pillar1Tag: "A nossa missão",
    pillar1Title: "Porque existe o pôle",
    pillar1Desc: "Oferecer um ponto de referência humano e acolhedor para que cada estudante internacional se sinta representado e integrado desde o primeiro dia em Saint-Dié.",
    pillar2Tag: "Para quem",
    pillar2Title: "A quem se dirige",
    pillar2Desc: "Aos recém-chegados internacionais, aos estudantes já instalados no IUT e a todos os que desejam participar no intercâmbio intercultural.",
    pillar3Tag: "O nosso contributo",
    pillar3Title: "O que traz à comunidade",
    pillar3Desc: "Uma rede concreta de apoio diário, partilha de informações úteis, momentos de convívio e ligação direta à vida associativa da AEPUD.",
    initEyebrow: "02 · As Nossas Iniciativas",
    initTitleHtml: "Juntos, damos vida à nossa <span class=\"serif-accent\">comunidade.</span>",
    initLead: "Cinco eixos complementares para apoiar o seu percurso e enriquecer a vida coletiva no IUT.",
    init1Title: "Acolhimento & Integração",
    init1Desc: "Facilitar os encontros, a adaptação e a integração dos estudantes internacionais no seu novo ambiente.",
    init2Title: "Entreajuda & Acompanhamento",
    init2Desc: "Partilhar experiências, conselhos e informações úteis para enfrentar melhor os desafios do dia a dia.",
    init3Title: "Orientação académica & profissional",
    init3Desc: "Facilitar o acesso a informações e recursos úteis sobre estágios, alternância e etapas profissionais em França.",
    init3Note: "Nota importante: o pôle partilha recursos e experiências de orientação, sem substituir os serviços oficiais nem garantir estágios ou contratos de alternância.",
    init4Title: "Lazer & Atividades",
    init4Desc: "Organizar passeios, atividades de lazer, encontros e momentos de convívio.",
    init5Title: "Partilha & Rede",
    init5Desc: "Promover o intercâmbio intercultural, os encontros e a criação de laços entre estudantes.",
    actEyebrow: "03 · Atividades & Eventos",
    actTitleHtml: "A vida estudantil constrói-se <span class=\"serif-accent\">em conjunto.</span>",
    actLead: "Passeios, encontros interculturais e momentos de partilha construídos consigo ao longo do ano.",
    actTag1: "Próximas atividades",
    actTag2: "Passeios organizados",
    actTag3: "Encontros interculturais",
    actTag4: "Eventos do pôle",
    actTag5: "Momentos marcantes",
    filterAll: "Todos",
    filterUpcoming: "Próximos",
    filterPast: "Concluído",
    statusUpcoming: "Próximo",
    statusPast: "Concluído",
    emptyBadge: "Programação em preparação",
    emptyTitle: "Os próximos encontros estão a ser preparados consigo.",
    emptyText: "Ainda não existem datas confirmadas publicadas. Estamos a preparar as primeiras atividades com base nas vossas sugestões — fique atento!",
    emptyCtaSuggest: "PROPOR UMA IDEIA",
    emptyCtaFollow: "FICAR LIGADO",
    emptyPreview1: "Encontros de boas-vindas e cafés interculturais",
    emptyPreview2: "Passeios em Saint-Dié e nos Vosges",
    emptyPreview3: "Sessões de partilha de experiências e entreajuda",
    emptyFilterNone: "Nenhum evento corresponde a este filtro de momento.",
    teamEyebrow: "04 · A Nossa Equipa",
    teamTitleHtml: "Por detrás do pôle, pessoas <span class=\"serif-accent\">ao seu dispor.</span>",
    teamLead: "Estamos aqui para o representar, ouvir e fazer evoluir esta iniciativa consigo.",
    teamRepLabel1: "Representante 01",
    teamRepLabel2: "Representante 02",
    teamRoleDefault: "Representante dos estudantes internacionais",
    teamBioLabel: "Biografia",
    teamContactLabel: "Contacto / Rede",
    teamSlotBadge: "Espaço para retrato · Substituível",
    placeholderText: "[A PREENCHER]",
    teamAdminNote: "Responsáveis do pôle: pré-visualizem aqui as fotos e dados ou editem diretamente em js/content.js.",
    teamAdminBtn: "Personalizar perfis",
    partEyebrow: "05 · Participar",
    partTitleHtml: "A sua experiência conta. <span class=\"serif-accent\">A sua voz também.</span>",
    partLead: "Cada estudante tem uma experiência, necessidades e ideias que merecem ser ouvidas. Ajude-nos a construir um pôle à sua medida.",
    opt1Tag: "Opção 01 · Expressão & Necessidades",
    opt1Title: "Partilhar as minhas necessidades",
    opt1Desc: "Conte-nos a sua experiência para orientarmos as prioridades do pôle:",
    opt1Bullet1: "Informações gerais enquanto estudante no IUT",
    opt1Bullet2: "Necessidades atuais e dificuldades sentidas",
    opt1Bullet3: "Áreas em que gostaria de receber acompanhamento",
    opt1Bullet4: "Sugestões para melhorar a vida dos estudantes internacionais",
    opt1Btn: "PARTILHAR NECESSIDADES",
    opt2Tag: "Opção 02 · Participação Ativa",
    opt2Title: "Juntar-se ao pôle",
    opt2Desc: "Deseja contribuir ativamente, propor iniciativas ou ajudar a acolher outros estudantes?",
    opt2Bullet1: "Manifestar interesse em participar nas iniciativas do pôle",
    opt2Bullet2: "Co-construir passeios, encontros e ações de entreajuda",
    opt2Bullet3: "Integrar uma dinâmica acolhedora na AEPUD",
    opt2Btn: "JUNTAR-SE AO PÔLE",
    privacyNotice: "Confidencialidade e proteção de dados: as informações recolhidas são utilizadas exclusivamente no âmbito das atividades do Pôle des Étudiants Internationaux e da Association des Étudiants (AEPUD — IUT de Saint-Dié), em conformidade com o RGPD.",
    galEyebrow: "06 · Galeria",
    galTitleHtml: "Encontros, experiências, <span class=\"serif-accent\">memórias.</span>",
    galLead: "Este espaço reunirá ao longo do ano fotografias reais das atividades e convívios do pôle.",
    galTempBadge: "Visual temporário · Substituível",
    lightboxCloseAria: "Fechar ecrã inteiro",
    lightboxPrevAria: "Imagem anterior",
    lightboxNextAria: "Imagem seguinte",
    contactEyebrow: "07 · Contacto & Redes",
    contactTitleHtml: "Fiquemos em <span class=\"serif-accent\">contacto!</span>",
    contactLead: "Tem uma dúvida, sugestão ou quer falar connosco? Escreva-nos ou encontre-nos no campus do IUT.",
    contactEmailLabel: "E-mail oficial",
    contactInstaLabel: "Conta Instagram",
    contactOtherLabel: "Outras redes sociais",
    contactCampusLabel: "Campus",
    contactBtn: "CONTACTAR-NOS",
    footerMainSig: "« O IUT também é a sua casa. »",
    footerSubSig: "« Juntos, façamos da nossa diversidade uma força. »",
    footerNavTitle: "Navegação",
    footerInfoTitle: "Organização",
    footerAssocItem: "Association des Étudiants (AEPUD)",
    footerPoleItem: "Pôle des Étudiants Internationaux",
    footerIutItem: "IUT de Saint-Dié-des-Vosges",
    footerRights: "Pôle des Étudiants Internationaux · AEPUD — IUT de Saint-Dié. Todos os direitos reservados.",
    backToTop: "Topo da página ↑",
    formModalTitleNeeds: "Partilhar necessidades — Formulário",
    formModalTitleJoin: "Juntar-se ao pôle — Formulário",
    formModalPendingDesc: "O link oficial do Google Forms ([GOOGLE_FORMS_URL]) pode ser configurado em js/content.js ou testado abaixo:",
    formModalUrlLabel: "URL do Google Forms",
    formModalOpenBtn: "Guardar e Abrir Formulário",
    formModalCloseBtn: "Fechar",
    contactModalTitle: "Contactar o Pôle Internacional",
    contactModalPending: "Já pode contactar-nos diretamente através do Instagram oficial da associação (@AEPUD). O endereço de e-mail dedicado será adicionado em breve.",
    contactModalInstaBtn: "Enviar mensagem no Instagram (@AEPUD)",
    contactCopySuccess: "E-mail copiado!",
    teamModalTitle: "Personalizar representantes",
    teamModalDesc: "Pré-visualize retratos e biografias na página e copie a configuração para js/content.js.",
    teamPhotoInputLabel: "Escolher fotografia",
    teamNameInputLabel: "Nome completo",
    teamBioInputLabel: "Biografia curta",
    teamContactInputLabel: "Contacto (e-mail ou rede social)",
    teamApplyBtn: "Aplicar pré-visualização",
    teamCopyConfigBtn: "Copiar código para content.js",
    teamResetBtn: "Repor",
    toastSavedTeam: "Pré-visualização dos perfis atualizada!",
    toastCopiedConfig: "Configuração copiada! Cole em js/content.js.",
    toastInvalidUrl: "Introduza um URL válido iniciado por https://"
  }
};
