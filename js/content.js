/**
 * ============================================================================
 * DONNÉES PUBLIQUES & TRADUCTIONS BILINGUES (FR / EN) — js/content.js
 * Pôle des Étudiants Internationaux · AEPUD — IUT de Saint-Dié-des-Vosges
 * ============================================================================
 */

window.SITE_CONFIG = {
  defaultLanguage: "fr",
  enabledLanguages: ["fr", "en"],

  // Identité visuelle : emplacement prêt pour le logotype officiel de l'AEPUD
  branding: {
    aepudLogoPath: "assets/images/logo-aepud.png",
    poleEmblemPath: "assets/icons/logo-pole.svg"
  },

  // Lien officiel du questionnaire Google Forms
  questionnaireUrl: "https://forms.gle/CHkm3dPJak6t5zyA7",

  // Informations générales de l'association (sans e-mail général ni réseaux secondaires)
  contact: {
    association: "Association des Étudiants (AEPUD) — IUT de Saint-Dié-des-Vosges",
    pole: "Pôle des Étudiants Internationaux",
    instagramHandle: "@AEPUD",
    instagramUrl: "https://www.instagram.com/AEPUD/",
    location: "IUT de Saint-Dié-des-Vosges · 11 Rue de l’Université, 88100 Saint-Dié-des-Vosges"
  },

  // Les 2 représentants du Pôle et leurs adresses e-mail universitaires directes
  team: [
    {
      id: "ariel-hidinua",
      photo: "assets/images/ariel-hidinua.jpg",
      photoPosition: "center 78%",
      name: "Ariel Hidinua",
      roleKey: "teamRoleDefault",
      email: "ariel-aleluia.hidinua9@etu.univ-lorraine.fr",
      bio: {
        fr: "Étudiant angolais en BUT GEII à l’IUT de Saint-Dié, Ariel a obtenu une bourse d’excellence lui permettant de poursuivre ses études en France. Ancien président du pôle académique de l’association des élèves du lycée Eiffel d’Ondjiva et membre du pôle Génie de la Production Industrielle de l’ISPTEC, il possède une expérience en leadership étudiant. Il s’investit également dans l’entrepreneuriat social à travers Serenus, un projet dédié à la santé mentale bénéficiant d’un accompagnement dans l’écosystème de l’UNICEF.\n\nAujourd’hui, il souhaite mettre son expérience et son engagement au service de la communauté internationale de l’IUT.",
        en: "An Angolan student in BUT GEII (Electrical Engineering and Industrial Computing) at IUT de Saint-Dié, Ariel was awarded an excellence scholarship to pursue his studies in France. Former president of the academic hub of the student association at Lycée Eiffel of Ondjiva and a member of the Industrial Production Engineering hub at ISPTEC, he brings solid experience in student leadership. He is also committed to social entrepreneurship through Serenus, a mental health initiative supported within the UNICEF ecosystem.\n\nToday, he aims to put his experience and commitment at the service of the IUT’s international community."
      }
    },
    {
      id: "credo-charles",
      photo: "assets/images/credo-charles.jpg",
      photoPosition: "center 80%",
      name: "Credo Charles",
      roleKey: "teamRoleDefault",
      email: "credo.charles2@etu.univ-lorraine.fr",
      bio: {
        fr: "Étudiant en Génie Électrique et Informatique Industrielle en France, lauréat d’une bourse d’excellence en 2024. Passionné par l’automatisation industrielle et les systèmes électriques. Ancien président de l’association des élèves du Lycée Eiffel d’Ondjiva et actuellement représentant des étudiants internationaux à l’IUT de Saint-Dié-des-Vosges. Doté d’un esprit de leadership, d’adaptation et de travail en équipe, je suis motivé par l’apprentissage et les nouveaux défis.",
        en: "A student in Electrical Engineering and Industrial Computing (GEII) in France and recipient of a 2024 excellence scholarship. Passionate about industrial automation and electrical systems. Former president of the student association at Lycée Eiffel of Ondjiva and currently International Students Representative at IUT de Saint-Dié-des-Vosges. Driven by leadership, adaptability, and teamwork, I am motivated by continuous learning and new challenges."
      }
    }
  ],

  // Événements confirmés (vide tant qu'aucune date officielle n'est annoncée)
  events: [],

  // Ressources utiles & accompagnement pour les étudiants internationaux
  resources: [
    {
      id: "res-housing",
      icon: "home",
      tag: {
        fr: "Installation & Logement",
        en: "Housing & Settling In"
      },
      title: {
        fr: "Se loger et s’installer à Saint-Dié",
        en: "Finding housing and settling in Saint-Dié"
      },
      description: {
        fr: "Repères essentiels pour vos démarches de logement étudiant (CROUS / Lokaviz), la demande d’aide personnalisée au logement (CAF) et l’assurance habitation obligatoire.",
        en: "Key pointers for student accommodation (CROUS / Lokaviz), applying for French housing assistance (CAF), and mandatory home insurance."
      },
      links: [
        {
          label: { fr: "Portail MesServices Étudiant", en: "MesServices Étudiant Portal" },
          url: "https://www.messervices.etudiant.gouv.fr/"
        },
        {
          label: { fr: "Aides au logement — CAF", en: "Housing Aid — CAF" },
          url: "https://www.caf.fr/"
        }
      ]
    },
    {
      id: "res-admin",
      icon: "shield",
      tag: {
        fr: "Santé & Démarches",
        en: "Health & Admin Steps"
      },
      title: {
        fr: "Sécurité sociale, titre de séjour & CVEC",
        en: "Health insurance, residence permit & CVEC"
      },
      description: {
        fr: "Accès direct aux plateformes officielles pour valider votre visa long séjour (ANEF), vous affilier gratuitement à l’Assurance Maladie étudiante et gérer vos formalités de rentrée.",
        en: "Direct access to official platforms to validate your student visa (ANEF), register free of charge for French student health coverage, and complete enrollment steps."
      },
      links: [
        {
          label: { fr: "Sécurité sociale — Ameli Étudiant", en: "Health Coverage — Ameli Student" },
          url: "https://etudiant-etranger.ameli.fr/"
        },
        {
          label: { fr: "Titre de séjour — Portail ANEF", en: "Residence Permit — ANEF Portal" },
          url: "https://administration-etrangers-en-france.interieur.gouv.fr/"
        }
      ]
    },
    {
      id: "res-academic",
      icon: "compass",
      tag: {
        fr: "Études & Parcours Pro",
        en: "Studies & Career Path"
      },
      title: {
        fr: "Repères académiques, stages & alternance",
        en: "Academic guidance, internships & work-study"
      },
      description: {
        fr: "Conseils entre pairs sur les méthodes de travail en BUT, la rédaction de CV et lettres de motivation aux standards français, et l’orientation vers les ressources officielles.",
        en: "Peer tips on IUT study methods, tailoring your CV and cover letter to French standards, and finding official career resources."
      },
      links: [
        {
          label: { fr: "Campus France — Étudier & préparer son parcours", en: "Campus France — Student Resources" },
          url: "https://www.campusfrance.org/fr"
        }
      ]
    },
    {
      id: "res-campus",
      icon: "map",
      tag: {
        fr: "Quotidien & Campus",
        en: "Campus & Daily Life"
      },
      title: {
        fr: "Vivre et se déplacer à Saint-Dié-des-Vosges",
        en: "Living and getting around Saint-Dié-des-Vosges"
      },
      description: {
        fr: "Informations pratiques sur la restauration universitaire (Izly), la vie sur le campus de l’IUT, les mobilités locales et les liaisons ferroviaires vers Nancy, Strasbourg et Paris.",
        en: "Practical information on university dining (Izly), IUT campus life, local transit, and rail connections to Nancy, Strasbourg, and Paris."
      },
      links: [
        {
          label: { fr: "IUT de Saint-Dié — Université de Lorraine", en: "IUT de Saint-Dié — University of Lorraine" },
          url: "https://iutsd.univ-lorraine.fr/"
        }
      ]
    }
  ]
};

window.TRANSLATIONS = {
  fr: {
    metaTitle: "Pôle des Étudiants Internationaux · AEPUD — IUT de Saint-Dié",
    metaDescription: "Un espace pour se rencontrer, s’entraider et construire ensemble une expérience étudiante plus enrichissante à l’IUT de Saint-Dié-des-Vosges.",
    skipToContent: "Aller au contenu principal",

    // Navigation (Nouvel ordre en 6 points)
    brandTitle: "Pôle International",
    brandSub: "AEPUD · IUT de Saint-Dié",
    aepudLogoAlt: "Logotype officiel de l'Association des Étudiants AEPUD",
    navHome: "Accueil",
    navTeam: "Notre équipe",
    navPole: "Présentation du pôle",
    navInitiatives: "Nos initiatives",
    navResources: "Ressources & accompagnement",
    navContact: "Contact / Rejoindre",
    menuAriaLabel: "Ouvrir ou fermer le menu de navigation",

    // 1. Section Hero — Accueil
    heroMention: "Une initiative de l’Association des Étudiants (AEPUD) — IUT de Saint-Dié",
    heroTitleHtml: "L’IUT est aussi <span class=\"serif-accent\">chez vous.</span>",
    heroSubtitle: "Un espace pour se rencontrer, s’entraider et construire ensemble une expérience étudiante plus enrichissante.",
    heroCtaDiscover: "DÉCOUVRIR LE PÔLE",
    heroCtaJoin: "REJOINDRE LE PÔLE",
    heroSurveyPrompt: "Étudiant international à l’IUT ?",
    heroSurveyLink: "Répondre au questionnaire (2 min) →",
    heroValue1: "Appartenance",
    heroValue2: "Confiance",
    heroValue3: "Opportunité",
    heroIllustrationAlt: "Illustration éditoriale représentant des étudiants internationaux de différentes cultures connectés autour du Pôle International de l'IUT de Saint-Dié",

    // 2. Section Notre équipe (placée juste après l'accueil)
    teamEyebrow: "01 · Notre équipe",
    teamTitleHtml: "Derrière le pôle, des personnes <span class=\"serif-accent\">à votre écoute.</span>",
    teamLead: "Nous sommes là pour vous représenter, vous écouter et faire évoluer cette initiative avec vous.",
    teamRepLabel1: "Représentant 01",
    teamRepLabel2: "Représentant 02",
    teamRoleDefault: "Représentant des étudiants internationaux",
    teamBioLabel: "Parcours & Engagement",
    teamContactLabel: "Contact direct (E-mail universitaire)",

    // 3. Section Présentation du pôle
    aboutEyebrow: "02 · Présentation du pôle",
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

    // 4. Section Nos initiatives & Activités
    initEyebrow: "03 · Nos initiatives",
    initTitleHtml: "Ensemble, faisons vivre notre <span class=\"serif-accent\">communauté.</span>",
    initLead: "Cinq piliers complémentaires pour accompagner votre parcours, créer du lien et dynamiser la vie étudiante à l’IUT.",

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

    // Sous-bloc programmation d'activités (intégré sans duplication)
    actSubBadge: "Agenda & Vie étudiante",
    actSubTitle: "Les prochaines activités se construisent avec vous.",
    actSubText: "Sorties découvertes, rencontres interculturelles et temps d’entraide : aucune date fictive n’est affichée. Suivez nos annonces sur Instagram @AEPUD ou partagez vos envies via notre questionnaire.",
    actSubBtnJoin: "Rejoindre nos activités",
    actSubBtnSurvey: "Suggérer une initiative",
    statusUpcoming: "À venir",
    statusPast: "Terminé",

    // 5. Section Ressources et accompagnement
    resEyebrow: "04 · Ressources et accompagnement",
    resTitleHtml: "Des repères concrets pour faciliter <span class=\"serif-accent\">votre quotidien.</span>",
    resLead: "Retrouvez les portails essentiels pour vos démarches en France et n’hésitez pas à solliciter vos représentants pour un conseil ou un retour d’expérience.",
    resHelpTitle: "Besoin d’un coup de pouce ou d’une orientation entre étudiants ?",
    resHelpDesc: "Nos représentants sont disponibles par e-mail pour vous écouter et vous orienter dans vos démarches à l’IUT.",

    // Section Phare — Questionnaire Google Forms
    surveyBadge: "Consultation étudiante · Priorité du Pôle",
    surveyTitle: "TON EXPÉRIENCE COMPTE. FAIS-NOUS ENTENDRE TA VOIX !",
    surveyText1: "« Logement, démarches administratives, intégration, études, stages, alternance… Nous souhaitons mieux comprendre les défis que tu rencontres afin de construire des initiatives réellement utiles à la communauté internationale de l’IUT. »",
    surveyText2: "« Quelques minutes suffisent pour nous aider à mieux agir. »",
    surveyCtaBtn: "RÉPONDRE AU QUESTIONNAIRE",
    surveyAudienceNote: "Ce questionnaire est destiné aux étudiants internationaux de l’IUT de Saint-Dié-des-Vosges. Vos réponses nous permettent d’identifier des besoins réels et d’orienter concrètement les prochaines actions du pôle (traitement confidentiel dans le cadre associatif de l’AEPUD).",
    surveyIllustrationAlt: "Illustration symbolisant l'expression et la participation des étudiants internationaux au questionnaire",

    // 6. Section Contact / Rejoindre le pôle
    contactEyebrow: "05 · Contact / Rejoindre le pôle",
    contactTitleHtml: "Envie d’échanger ou de <span class=\"serif-accent\">nous rejoindre ?</span>",
    contactLead: "Retrouvez l’actualité de l’Association des Étudiants sur Instagram, participez à la dynamique du pôle ou écrivez directement à vos deux représentants.",
    contactJoinBtn: "REJOINDRE LE PÔLE",
    contactSurveySecondaryBtn: "RÉPONDRE AU QUESTIONNAIRE",
    contactInstaLabel: "Instagram officiel de l’association",
    contactInstaSub: "Suivre les activités et nous écrire en message privé",
    contactRepsTitle: "Contacter directement les représentants",
    contactCampusLabel: "Campus",

    // Modale « Rejoindre le pôle »
    joinModalBadge: "Communauté Internationale · AEPUD",
    joinModalTitle: "Envie de rejoindre notre communauté ?",
    joinModalText: "« Pour participer à nos initiatives et suivre nos activités, il suffit de nous contacter sur Instagram. Nous serons ravis d’échanger avec toi ! »",
    joinModalInstaLabel: "Instagram officiel de l’association",
    joinModalInstaBtn: "Nous contacter sur Instagram",
    joinModalRepsHeading: "Ou écrire directement aux représentants :",
    joinModalCloseAria: "Fermer la fenêtre",

    // Footer
    footerMainSig: "« L’IUT est aussi chez vous. »",
    footerSubSig: "« Ensemble, faisons de notre diversité une force. »",
    footerNavTitle: "Navigation",
    footerInfoTitle: "Contacts & Liens",
    footerAssocItem: "Association des Étudiants (AEPUD)",
    footerPoleItem: "Pôle des Étudiants Internationaux",
    footerSurveyLink: "Questionnaire étudiants internationaux",
    footerRights: "Pôle des Étudiants Internationaux · AEPUD — IUT de Saint-Dié-des-Vosges. Tous droits réservés.",
    backToTop: "Haut de page ↑"
  },

  en: {
    metaTitle: "International Students Hub · AEPUD — IUT de Saint-Dié",
    metaDescription: "A welcoming space to connect, support one another, and build a richer student experience together at IUT de Saint-Dié-des-Vosges.",
    skipToContent: "Skip to main content",

    // Navigation (New 6-item order)
    brandTitle: "International Hub",
    brandSub: "AEPUD · IUT de Saint-Dié",
    aepudLogoAlt: "Official logo of the AEPUD Student Association",
    navHome: "Home",
    navTeam: "Our Team",
    navPole: "About the Hub",
    navInitiatives: "Our Initiatives",
    navResources: "Resources & Support",
    navContact: "Contact / Join Us",
    menuAriaLabel: "Toggle navigation menu",

    // 1. Hero Section — Home
    heroMention: "An initiative of the Student Association (AEPUD) — IUT de Saint-Dié",
    heroTitleHtml: "The IUT is your <span class=\"serif-accent\">home too.</span>",
    heroSubtitle: "A space to meet, support each other, and build a more rewarding student experience together.",
    heroCtaDiscover: "DISCOVER THE HUB",
    heroCtaJoin: "JOIN THE HUB",
    heroSurveyPrompt: "International student at the IUT?",
    heroSurveyLink: "Take our quick survey (2 min) →",
    heroValue1: "Belonging",
    heroValue2: "Trust",
    heroValue3: "Opportunity",
    heroIllustrationAlt: "Editorial illustration depicting diverse international students connected around the IUT de Saint-Dié International Hub",

    // 2. Our Team Section (second section right after Home)
    teamEyebrow: "01 · Our Team",
    teamTitleHtml: "Behind the hub, people <span class=\"serif-accent\">here to listen.</span>",
    teamLead: "We are here to represent you, listen to you, and help this initiative grow together with you.",
    teamRepLabel1: "Representative 01",
    teamRepLabel2: "Representative 02",
    teamRoleDefault: "International Students Representative",
    teamBioLabel: "Background & Commitment",
    teamContactLabel: "Direct Contact (University Email)",

    // 3. About the Hub Section
    aboutEyebrow: "02 · About the Hub",
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

    // 4. Our Initiatives & Activities
    initEyebrow: "03 · Our Initiatives",
    initTitleHtml: "Together, let’s bring our <span class=\"serif-accent\">community to life.</span>",
    initLead: "Five complementary pillars designed to support your journey, build connections, and energize student life at the IUT.",

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

    actSubBadge: "Student Life & Schedule",
    actSubTitle: "Our upcoming activities are shaped with you.",
    actSubText: "Discovery outings, intercultural meetups, and peer-support sessions: we never list fictional dates. Follow @AEPUD on Instagram for announcements or share what you’d like to see through our survey.",
    actSubBtnJoin: "Join our activities",
    actSubBtnSurvey: "Suggest an initiative",
    statusUpcoming: "Upcoming",
    statusPast: "Completed",

    // 5. Resources & Support
    resEyebrow: "04 · Resources & Support",
    resTitleHtml: "Practical guidance for your <span class=\"serif-accent\">everyday life.</span>",
    resLead: "Access essential official portals for living and studying in France, and reach out directly to your representatives whenever you need peer advice.",
    resHelpTitle: "Need peer guidance or have a question about settling in?",
    resHelpDesc: "Your two representatives are available by email to listen and help point you in the right direction at the IUT.",

    // Spotlight Section — Google Forms Survey
    surveyBadge: "Student Survey · Hub Priority",
    surveyTitle: "YOUR EXPERIENCE MATTERS. MAKE YOUR VOICE HEARD!",
    surveyText1: "“Housing, administrative procedures, integration, studies, internships, work-study tracks… We want to better understand the challenges you face so we can build initiatives that are genuinely useful to the IUT’s international community.”",
    surveyText2: "“Just a few minutes are enough to help us take better action.”",
    surveyCtaBtn: "TAKE THE SURVEY",
    surveyAudienceNote: "This survey is intended for international students at IUT de Saint-Dié-des-Vosges. Your responses directly help identify real needs and guide the Hub’s upcoming initiatives (handled confidentially within AEPUD activities).",
    surveyIllustrationAlt: "Illustration symbolizing international student participation and voice in the community survey",

    // 6. Contact / Join Us
    contactEyebrow: "05 · Contact / Join the Hub",
    contactTitleHtml: "Want to connect or <span class=\"serif-accent\">join us?</span>",
    contactLead: "Follow the Student Association on Instagram, get involved in Hub initiatives, or write directly to your two student representatives.",
    contactJoinBtn: "JOIN THE HUB",
    contactSurveySecondaryBtn: "TAKE THE SURVEY",
    contactInstaLabel: "Official Association Instagram",
    contactInstaSub: "Follow upcoming activities and message us directly",
    contactRepsTitle: "Email the representatives directly",
    contactCampusLabel: "Campus",

    // « Join the Hub » Modal
    joinModalBadge: "International Community · AEPUD",
    joinModalTitle: "Want to join our community?",
    joinModalText: "“To take part in our initiatives and follow our activities, simply reach out to us on Instagram. We would love to chat with you!”",
    joinModalInstaLabel: "Official Association Instagram",
    joinModalInstaBtn: "Contact us on Instagram",
    joinModalRepsHeading: "Or email your representatives directly:",
    joinModalCloseAria: "Close window",

    // Footer
    footerMainSig: "“The IUT is your home too.”",
    footerSubSig: "“Together, let’s make our diversity a strength.”",
    footerNavTitle: "Navigation",
    footerInfoTitle: "Contacts & Links",
    footerAssocItem: "Student Association (AEPUD)",
    footerPoleItem: "Pôle des Étudiants Internationaux",
    footerSurveyLink: "International Students Survey",
    footerRights: "Pôle des Étudiants Internationaux · AEPUD — IUT de Saint-Dié-des-Vosges. All rights reserved.",
    backToTop: "Back to top ↑"
  }
};
