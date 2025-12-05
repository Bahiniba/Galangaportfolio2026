import imgAvenzor from "figma:asset/e33195a80fd6bd33ab4ae3f418d65e36d5cb474d.png";
import imgPlywood from "figma:asset/afb24e8572c9450898ecde0cfdc542d61bf80fe7.png";
import imgHuggl10 from "figma:asset/70291f70eb21813fe3c3418cfc95f5981fc7002b.png";
import imgCharmantFramerWebsite from "figma:asset/0b8d98fdd1221dd9ac93eae462b01d5c450b25bd.png";
import imgPredictScreen from "figma:asset/45a277f356ceeb146fd30e72fabc987f82daa051.png";
import imgHuggl20 from "figma:asset/2770a18cdff21d8764dab408ca2e7a555c140c61.png";
import imgRentlyScreen from "figma:asset/62cc135783ac479861c83f00572b7529cf840530.png";
import imgQuomiScreen from "figma:asset/c2318931eb407caf67cded54bb71972c78f5b76f.png";
import imgKemetPodsScreen from "figma:asset/0a68e991884542bea6f13c3935ac358f8aee6587.png";
import imgBahinibaScreen from "figma:asset/baea28db757a9cf60a5df9e5362df212fad648ef.png";
import imgKelleleScreen from "figma:asset/19283a75418772727e8f314748ffdce2881a8d95.png";
import imgMedicalRagScreen from "figma:asset/0c3add61a41d021835cb2d9362e41eb75a834e54.png";
import imgEduConnectScreen from "figma:asset/0fb239c40eb9db610bd69ae549b27dce5937aef4.png";

// Project Images URLs
const imgEsmcScreen =
  "https://images.unsplash.com/photo-1762330466873-9a7dba6135b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hZ2VtZW50JTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0ODkxMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080";
const imgErpScreen =
  "https://images.unsplash.com/photo-1610689096391-801034c438fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwZXJwJTIwZGFzaGJvYXJkfGVufDF8fHx8MTY0ODkxMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080";
const imgSanitaryScreen =
  "https://images.unsplash.com/photo-1654762930571-dcf2ebc11542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MXx8fHwxNzY0ODkxMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  duration: string;
  year: string;
  mainImage: string;
  images: string[];
  website?: string; // Lien optionnel vers le site web
  description: {
    en: string;
    fr: string;
  };
  challenge: {
    en: string;
    fr: string;
  };
  solution: {
    en: string;
    fr: string;
  };
  results: {
    en: string;
    fr: string;
  };
  technologies: string[];
  features: {
    en: string[];
    fr: string[];
  };
}

export const projects: Record<string, Project> = {
  bahiniba: {
    id: "bahiniba",
    title: "Bahiniba",
    subtitle: "Solutions digitales et technologiques",
    category: "Application Web & Mobile",
    client: "Bahiniba SARL",
    duration: "En cours",
    year: "2024 - 2025",
    mainImage: imgBahinibaScreen,
    images: [
      imgBahinibaScreen,
      imgBahinibaScreen,
      imgBahinibaScreen,
    ],
    website: "https://bahiniba.com",

    description: {
      en: "Bahiniba is a technology-driven company offering digital solutions, mobile applications, web platforms, and integrated systems for the African market. The project involved building and managing multiple digital products, including ERP/CRM systems, a podcast streaming platform, and an event management mobile application.",
      fr: "Bahiniba est une entreprise orientée technologie proposant des solutions digitales, des applications mobiles, des plateformes web et des systèmes intégrés pour le marché africain. Le projet a consisté à concevoir et gérer plusieurs produits digitaux, dont un ERP/CRM, une plateforme d'écoute de podcasts et une application mobile de gestion d'événements.",
    },

    challenge: {
      en: "Bahiniba needed scalable platforms capable of supporting large user bases, real-time interactions, financial transactions, secure authentication, and advanced analytics while maintaining performance across different African environments.",
      fr: "Bahiniba avait besoin de plateformes scalables capables de supporter un grand nombre d'utilisateurs, des interactions en temps réel, des transactions financières, une authentification sécurisée et des analyses avancées, tout en maintenant des performances optimales dans divers environnements africains.",
    },

    solution: {
      en: "We developed several robust and scalable systems: a complete ERP/CRM for internal operations, a podcast streaming platform (KemetPods) with community features, and a full event management mobile app (Kellele) supporting ticketing, payments, and real-time statistics.",
      fr: "Nous avons développé plusieurs systèmes robustes et scalables : un ERP/CRM complet pour les opérations internes, une plateforme d'écoute de podcasts (KemetPods) avec fonctionnalités communautaires, et une application mobile de gestion d'événements (Kellele) intégrant billetterie, paiements et statistiques en temps réel.",
    },

    results: {
      en: "The platforms significantly improved operational efficiency, increased user engagement, and enabled Bahiniba to centralize its processes. KemetPods gained strong adoption, Kellele streamlined event management, and the ERP/CRM enhanced internal coordination.",
      fr: "Les plateformes ont considérablement amélioré l'efficacité opérationnelle, augmenté l'engagement des utilisateurs et permis à Bahiniba de centraliser ses processus. KemetPods a connu une forte adoption, Kellele a fluidifié la gestion des événements, et l'ERP/CRM a renforcé la coordination interne.",
    },

    technologies: [
      "Flutter",
      "Laravel",
      "Angular",
      "MySQL",
      "Firebase",
      "Docker",
      "Node.js",
      "REST API",
      "Power BI",
    ],

    features: {
      en: [
        "Internal ERP/CRM for sales, stock, agents, finance & operations",
        "Podcast streaming with analytics (KemetPods)",
        "Event management mobile app with ticketing (Kellele)",
        "Payment integration and QR-code scanning",
        "User profiles and engagement statistics",
        "Role-based access control system",
        "Mobile-first architecture optimized for Africa",
        "Interactive dashboards and reporting",
      ],
      fr: [
        "ERP/CRM interne pour la gestion des ventes, stocks, agents, finances et opérations",
        "Plateforme d'écoute de podcasts avec statistiques (KemetPods)",
        "Application mobile d'événementiel avec billetterie (Kellele)",
        "Intégration de paiements et scan de QR Code",
        "Profils utilisateurs et statistiques d'engagement",
        "Système d'accès basé sur les rôles",
        "Architecture mobile-first optimisée pour l'Afrique",
        "Tableaux de bord interactifs et reporting",
      ],
    },
  },
  kemetpods: {
    id: "kemetpods",
    title: "KemetPods",
    subtitle: "Plateforme d'écoute de podcasts",
    category: "Application Mobile & Web",
    client: "Bahiniba SARL",
    duration: "6 mois",
    year: "2024 - 2025",
    mainImage: imgKemetPodsScreen, // remplacer avec l'image réelle
    images: [
      imgKemetPodsScreen,
      imgKemetPodsScreen,
      imgKemetPodsScreen,
    ],
    website: "https://kemetpods.com", // Exemple de lien (à remplacer par le vrai lien)

    description: {
      en: "KemetPods is a modern audio streaming platform designed to elevate African podcast creators. It includes community features, user profiles, content discovery, engagement analytics, and a premium listening experience on mobile and web.",
      fr: "KemetPods est une plateforme moderne de streaming audio conçue pour valoriser les créateurs de podcasts africains. Elle intègre des fonctionnalités communautaires, des profils utilisateurs, de la découverte de contenus, des statistiques d’engagement et une expérience d’écoute premium sur mobile et web.",
    },

    challenge: {
      en: "Content creators and listeners in Africa lacked a unified platform dedicated to podcast distribution, community engagement, advanced statistics, and monetization opportunities.",
      fr: "Les créateurs et auditeurs en Afrique manquaient d'une plateforme unifiée dédiée à la diffusion de podcasts, à l'engagement communautaire, aux statistiques avancées et aux opportunités de monétisation.",
    },

    solution: {
      en: "We built a scalable mobile-first platform with real-time analytics, personalized content recommendations, high-quality audio streaming, content creator tools, and a structured backend for managing episodes, categories, and user interactions.",
      fr: "Nous avons développé une plateforme mobile-first scalable avec des analyses en temps réel, des recommandations personnalisées, un streaming audio de haute qualité, des outils pour créateurs de contenus et un backend structuré pour gérer épisodes, catégories et interactions utilisateurs.",
    },

    results: {
      en: "KemetPods significantly increased creator visibility, improved listener engagement, and established a strong user base. The platform enabled structured content analytics and enhanced community interaction.",
      fr: "KemetPods a considérablement augmenté la visibilité des créateurs, amélioré l’engagement des auditeurs et établi une base solide d'utilisateurs. La plateforme a permis une analyse structurée des contenus et renforcé les interactions communautaires.",
    },

    technologies: [
      "Flutter",
      "Laravel",
      "Firebase",
      "MySQL",
      "Node.js",
      "REST API",
      "Pusher",
      "Power BI",
    ],

    features: {
      en: [
        "High-quality audio streaming",
        "User profiles and creator accounts",
        "Content discovery and trending sections",
        "Community interactions (likes, comments)",
        "Engagement analytics for creators",
        "Playlist & episode management",
        "Push notifications for new episodes",
        "Content categories and tags",
        "Dashboard for creators & admins",
      ],
      fr: [
        "Streaming audio de haute qualité",
        "Profils utilisateurs et comptes créateurs",
        "Découverte de contenus et sections tendances",
        "Interactions communautaires (likes, commentaires)",
        "Statistiques d’engagement pour créateurs",
        "Gestion de playlists et épisodes",
        "Notifications push pour nouveaux épisodes",
        "Catégories et tags de contenus",
        "Dashboard pour créateurs et administrateurs",
      ],
    },
  },
  kellele: {
    id: "kellele",
    title: "Kellelé",
    subtitle:
      "Application mobile de gestion d'événements et billetterie",
    category: "Application Mobile & Web",
    client: "Bahiniba SARL",
    duration: "4 mois",
    year: "2024 - 2025",
    mainImage: imgKelleleScreen, // remplacer avec l'image réelle
    images: [
      imgKelleleScreen,
      imgKelleleScreen,
      imgKelleleScreen,
    ],
    website: "https://kellele.com",
    description: {
      en: "Kellelé is an all-in-one event management and ticketing platform designed to simplify event creation, ticket sales, attendee check-in and analytics for organizers across Africa. The app supports promoters, venues and attendees with an intuitive mobile-first experience.",
      fr: "Kellelé est une plateforme complète de gestion d'événements et de billetterie conçue pour simplifier la création d'événements, la vente de billets, l'entrée des participants et l'analyse pour les organisateurs en Afrique. L'application prend en charge les promoteurs, les lieux et les participants via une expérience mobile-first intuitive.",
    },

    challenge: {
      en: "Event organizers needed a reliable, mobile-first solution that handled ticket sales, diverse payment methods (mobile money), fast on-site check-in, and real-time reporting while remaining resilient on low-bandwidth networks.",
      fr: "Les organisateurs d'événements avaient besoin d'une solution mobile-first fiable capable de gérer la vente de billets, des méthodes de paiement variées (mobile money), un contrôle d'accès rapide sur site et des rapports en temps réel, tout en restant résiliente sur des réseaux à faible bande passante.",
    },

    solution: {
      en: "We built a mobile-first app and admin dashboard with ticketing (QR codes), integrated mobile money and card payments, offline-capable check-in tools, role-based access for staff, real-time sales and attendance analytics, and a vendor management module.",
      fr: "Nous avons conçu une application mobile et un tableau de bord administrateur mobile-first avec billetterie (QR codes), intégration des paiements mobile money et cartes, outils de contrôle d'accès fonctionnant hors ligne, gestion des rôles pour le personnel, analytics en temps réel sur ventes et présences, ainsi qu'un module de gestion des prestataires.",
    },

    results: {
      en: "Kellelé reduced on-site queue times, increased on-time check-ins by 65%, and improved ticket sales conversion through smoother purchase flows. Organizers gained actionable dashboards for attendee behaviour and revenue tracking.",
      fr: "Kellelé a réduit les files d'attente sur site, augmenté les contrôles d'accès à temps de 65% et amélioré la conversion des ventes de billets grâce à un parcours d'achat plus fluide. Les organisateurs ont bénéficié de tableaux de bord exploitables pour le comportement des participants et le suivi des revenus.",
    },

    technologies: [
      "Flutter",
      "Laravel",
      "MySQL",
      "Firebase",
      "Pusher",
      "Docker",
      "Redis",
      "Mobile Money APIs (MTN/Orange/Wave)",
      "REST API",
    ],

    features: {
      en: [
        "Event creation & management (sessions, speakers, schedules)",
        "Multi-tier ticketing (VIP, Early bird, General)",
        "Secure payments: Mobile Money & Card",
        "QR-code ticket generation and fast check-in scanners",
        "Offline-capable check-in for low connectivity",
        "Seating maps & reserved seating",
        "Real-time sales & attendance dashboard",
        "Role-based access for organizers and staff",
        "Vendor/partner management module",
        "Promo codes and discounts",
        "Push notifications and reminders",
        "Exportable reports (CSV/PDF)",
      ],
      fr: [
        "Création et gestion d'événements (sessions, intervenants, planning)",
        "Billetterie multi-catégories (VIP, Early bird, Général)",
        "Paiements sécurisés : Mobile Money & Carte",
        "Génération QR-code pour billets et check-in rapide",
        "Contrôle d'accès hors ligne pour faible connectivité",
        "Plan de salle & sièges réservés",
        "Tableau de bord ventes & présences en temps réel",
        "Gestion des rôles pour organisateurs et staff",
        "Module de gestion des prestataires/partenaires",
        "Codes promo et réductions",
        "Notifications push et rappels",
        "Rapports exportables (CSV/PDF)",
      ],
    },
  },
  esmc: {
    id: "esmc",
    title: "ESMC GIE",
    subtitle: "Plateforme Web & Mobile – Solutions de gestion",
    category: "Application Web & Mobile",
    client: "ESMC GIE, Lomé – Togo",
    duration: "Jan 2024 - Apr 2024",
    year: "2024",
    mainImage: imgEsmcScreen, // Remplacer par ta capture
    images: [imgEsmcScreen, imgEsmcScreen, imgEsmcScreen],

    description: {
      en: "The ESMC GIE project involved building and enhancing internal web and mobile applications used for operations management, member tracking, financial processes and cooperative activities. The mission included prototype development, new modules, API creation and database structuring.",
      fr: "Le projet ESMC GIE a consisté à développer et améliorer des applications web et mobiles internes utilisées pour la gestion des opérations, le suivi des membres, les processus financiers et les activités coopératives. La mission incluait le développement de prototypes, de nouveaux modules, la création d’API et la structuration de la base de données.",
    },

    challenge: {
      en: "The organization needed modernized digital tools to replace outdated manual processes, ensure data centralization, support thousands of cooperative members and secure sensitive financial operations with robust backend systems.",
      fr: "L’organisation avait besoin d’outils digitaux modernisés pour remplacer des processus manuels obsolètes, assurer la centralisation des données, supporter des milliers de membres et sécuriser les opérations financières sensibles grâce à un backend robuste.",
    },

    solution: {
      en: "We developed Angular-based modules, built Spring Boot APIs for secure data exchange, redesigned database structures for higher performance, and implemented mobile-friendly interfaces. The system now supports structured workflows, role-based access, and reliable data management.",
      fr: "Nous avons développé des modules en Angular, créé des API Spring Boot pour des échanges de données sécurisés, redéfini les structures de base de données pour de meilleures performances et conçu des interfaces adaptées au mobile. Le système prend désormais en charge des workflows structurés, un accès basé sur les rôles et une gestion fiable des données.",
    },

    results: {
      en: "ESMC GIE benefited from a faster, more organized digital workflow, improved member management, and stronger reliability in financial and operational processes. The new APIs and modules increased automation and transparency.",
      fr: "ESMC GIE a bénéficié d’un workflow digital plus rapide et structuré, d’une meilleure gestion des membres et d’une fiabilité accrue des processus financiers et opérationnels. Les nouveaux modules et API ont permis une automatisation renforcée et plus de transparence.",
    },

    technologies: [
      "Angular",
      "Spring Boot",
      "MySQL",
      "Docker",
      "REST API",
      "HTML/CSS",
      "TypeScript",
      "Git",
    ],

    features: {
      en: [
        "Web and mobile dashboard for internal operations",
        "Member registration and tracking module",
        "Financial process automation",
        "Spring Boot REST APIs for secure communication",
        "Database optimization and restructuring",
        "Role-based access and permissions",
        "Data visualization and reporting tools",
        "Responsive interface for mobile use",
      ],
      fr: [
        "Dashboard web et mobile pour opérations internes",
        "Module d’enregistrement et suivi des membres",
        "Automatisation des processus financiers",
        "API REST Spring Boot pour communication sécurisée",
        "Optimisation et restructuration de la base de données",
        "Gestion des rôles et permissions",
        "Outils de visualisation et reporting",
        "Interface responsive adaptée au mobile",
      ],
    },
  },
  erp_bahiniba: {
    id: "erp_bahiniba",
    title: "ERP / CRM Bahiniba",
    subtitle: "Système interne de gestion d'entreprise",
    category: "Application Web",
    client: "Bahiniba SARL",
    duration: "8 mois",
    year: "2024 - 2025",
    mainImage: imgErpScreen, // À remplacer avec ta capture
    images: [imgErpScreen, imgErpScreen, imgErpScreen],

    description: {
      en: "A complete enterprise management system designed for Bahiniba to centralize operations, finances, sales, agents, partners, and internal workflows. The ERP/CRM ensures unified data management, real-time insights, and enhanced operational efficiency.",
      fr: "Un système complet de gestion d’entreprise conçu pour Bahiniba afin de centraliser les opérations, finances, ventes, agents, partenaires et workflows internes. L’ERP/CRM assure une gestion unifiée des données, des informations en temps réel et une efficacité opérationnelle renforcée.",
    },

    challenge: {
      en: "Bahiniba needed a unified digital platform capable of replacing fragmented tools, automating internal processes, managing financial and operational workflows, tracking agents' activities, and generating insightful analytics for strategic decisions.",
      fr: "Bahiniba avait besoin d’une plateforme digitale unifiée capable de remplacer les outils fragmentés, d’automatiser les processus internes, de gérer les workflows financiers et opérationnels, de suivre les activités des agents et de générer des analyses pertinentes pour la prise de décision.",
    },

    solution: {
      en: "We built a scalable and modular ERP/CRM system with dashboards, sales tracking, inventory management, financial flow monitoring, agent management modules, partner relations tools, analytics reports, and automated notifications. The backend architecture ensures performance, security, and maintainability.",
      fr: "Nous avons développé un ERP/CRM scalable et modulaire intégrant des dashboards, suivi des ventes, gestion des stocks, suivi des flux financiers, modules de gestion des agents, outils pour les relations partenaires, rapports analytiques et notifications automatiques. L’architecture backend garantit performance, sécurité et maintenabilité.",
    },

    results: {
      en: "The platform significantly increased operational visibility, reduced manual work, improved team coordination, and enabled faster, data-driven decision-making. Bahiniba now benefits from centralized processes and accurate real-time monitoring.",
      fr: "La plateforme a considérablement amélioré la visibilité opérationnelle, réduit les tâches manuelles, renforcé la coordination des équipes et permis une prise de décision plus rapide et basée sur les données. Bahiniba bénéficie désormais de processus centralisés et d’un suivi précis en temps réel.",
    },

    technologies: [
      "Laravel",
      "Angular",
      "MySQL",
      "Docker",
      "REST API",
      "Redis",
      "Firebase Notifications",
      "Node.js",
    ],

    features: {
      en: [
        "Real-time dashboard for global company metrics",
        "Sales tracking & revenue monitoring",
        "Inventory & stock management",
        "Agent and team activity management",
        "Partner and client relationship management (CRM)",
        "Financial flow tracking & reporting",
        "Role-based access control for internal teams",
        "Automated notifications & task reminders",
        "Advanced analytics with interactive charts",
        "Exportable reports (PDF, CSV)",
        "Modular architecture for future extensions",
      ],
      fr: [
        "Dashboard en temps réel des indicateurs globaux",
        "Suivi des ventes et du chiffre d'affaires",
        "Gestion des stocks et inventaires",
        "Gestion des activités des agents et équipes",
        "Module CRM pour relations partenaires et clients",
        "Suivi des flux financiers et reporting",
        "Système d’accès basé sur les rôles",
        "Notifications automatiques et rappels de tâches",
        "Analyses avancées avec graphiques interactifs",
        "Rapports exportables (PDF, CSV)",
        "Architecture modulaire pour extensions futures",
      ],
    },
  },
  educonnect: {
    id: "educonnect",
    title: "EduConnect CI",
    subtitle: "Plateforme éducative web & mobile",
    category: "Application Web & Mobile",
    client: "EduConnect – Côte d'Ivoire",
    duration: "Fév 2025 – Présent",
    year: "2025",
    mainImage: imgEduConnectScreen,
    images: [
      imgEduConnectScreen,
      imgEduConnectScreen,
      imgEduConnectScreen,
    ],
    website: "https://app.educonnect-platform.com",
    description: {
      en: "EduConnect is a digital education platform used by students, teachers and institutions across Côte d'Ivoire. The mission included improving features, optimizing performance, redesigning interfaces and implementing new modules to enhance the learning experience.",
      fr: "EduConnect est une plateforme éducative numérique utilisée par les étudiants, enseignants et institutions en Côte d'Ivoire. La mission consistait à améliorer les fonctionnalités, optimiser les performances, redessiner certaines interfaces et implémenter de nouveaux modules afin d'améliorer l'expérience d'apprentissage.",
    },

    challenge: {
      en: "The platform needed better performance, clearer user flows, modern UI updates and new features requested by institutions. Legacy code, inconsistent UI elements and complex workflows required restructuring and improvements.",
      fr: "La plateforme avait besoin de meilleures performances, de parcours utilisateurs plus clairs, de mises à jour UI modernes et de nouvelles fonctionnalités demandées par les institutions. Le code existant, l'incohérence de certaines interfaces et la complexité des workflows nécessitaient une restructuration et des améliorations.",
    },

    solution: {
      en: "We enhanced the platform with new pedagogical modules, optimized database queries, improved UI/UX consistency, refactored key features, implemented better navigation, and added mobile-friendly improvements to support students and teachers more efficiently.",
      fr: "Nous avons amélioré la plateforme avec de nouveaux modules pédagogiques, optimisé les requêtes de base de données, renforcé la cohérence UI/UX, refactorisé des fonctionnalités clés, amélioré la navigation et ajouté des optimisations mobile-friendly pour mieux soutenir étudiants et enseignants.",
    },

    results: {
      en: "The platform became faster, more intuitive and more stable. User satisfaction increased thanks to smoother interactions, optimized modules and improved accessibility on both web and mobile.",
      fr: "La plateforme est devenue plus rapide, plus intuitive et plus stable. La satisfaction des utilisateurs a augmenté grâce à des interactions plus fluides, des modules optimisés et une meilleure accessibilité sur web et mobile.",
    },

    technologies: [
      "Angular",
      "Laravel",
      "MySQL",
      "TypeScript",
      "REST API",
      "Docker",
      "HTML/CSS",
      "Git",
    ],

    features: {
      en: [
        "Improved UI/UX and navigation flows",
        "Optimization of existing student and teacher modules",
        "Database performance enhancements",
        "New pedagogical feature implementations",
        "Bug fixing and stability improvements",
        "Responsive design enhancements for mobile users",
        "Refactoring of legacy components",
        "Role-based access and permissions updates",
        "Reporting and activity tracking improvements",
      ],
      fr: [
        "Amélioration de l'UI/UX et des parcours utilisateurs",
        "Optimisation des modules étudiants et enseignants",
        "Amélioration des performances de la base de données",
        "Implémentation de nouvelles fonctionnalités pédagogiques",
        "Corrections de bugs et amélioration de la stabilité",
        "Optimisations responsive pour utilisateurs mobiles",
        "Refactorisation de composants obsolètes",
        "Mise à jour des rôles et permissions",
        "Amélioration du reporting et du suivi d'activités",
      ],
    },
  },
  medical_rag: {
    id: "medical_rag",
    title: "Medical RAG",
    subtitle:
      "Système intelligent de recherche documentaire médicale",
    category: "IA & Big Data",
    client: "Mawaba Technologie – USA",
    duration: "En cours",
    year: "2025",
    mainImage: imgMedicalRagScreen,
    images: [
      imgMedicalRagScreen,
      imgMedicalRagScreen,
      imgMedicalRagScreen,
    ],

    description: {
      en: "Medical RAG is an AI-powered retrieval-augmented system designed to assist healthcare practitioners and researchers by delivering precise, contextual medical information extracted from large collections of documents, medical notes, and research papers.",
      fr: "Medical RAG est un système intelligent basé sur le principe RAG permettant d'assister les professionnels de santé et chercheurs en fournissant des informations médicales précises et contextualisées extraites de vastes collections de documents, notes médicales et publications scientifiques.",
    },

    challenge: {
      en: "Healthcare professionals needed a reliable, fast, and secure system capable of querying vast amounts of unstructured medical data while ensuring accuracy, patient confidentiality, and compliance with healthcare regulations (HIPAA).",
      fr: "Les professionnels de santé avaient besoin d'un système fiable, rapide et sécurisé capable d'interroger de vastes quantités de données médicales non structurées tout en garantissant précision, confidentialité des patients et conformité aux réglementations de santé (HIPAA).",
    },

    solution: {
      en: "We built an advanced RAG (Retrieval-Augmented Generation) system using vector databases, embedding models, LLMs for contextual understanding, and a custom-designed query pipeline. The system includes document ingestion, semantic search, context-aware response generation, and a user-friendly interface for clinicians.",
      fr: "Nous avons développé un système RAG avancé utilisant des bases de données vectorielles, des modèles d'embedding, des LLM pour la compréhension contextuelle et un pipeline de requêtes personnalisé. Le système comprend l'ingestion de documents, la recherche sémantique, la génération de réponses contextuelles et une interface conviviale pour les cliniciens.",
    },

    results: {
      en: "Medical RAG significantly reduced the time required for healthcare professionals to access relevant information, improved diagnostic support, and enhanced research capabilities. The system maintains high accuracy rates while ensuring data security and compliance.",
      fr: "Medical RAG a considérablement réduit le temps nécessaire aux professionnels de santé pour accéder aux informations pertinentes, amélioré le support diagnostic et renforcé les capacités de recherche. Le système maintient des taux de précision élevés tout en garantissant sécurité et conformité des données.",
    },

    technologies: [
      "Python",
      "LangChain",
      "OpenAI GPT-4",
      "Pinecone / Weaviate",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Redis",
      "React",
    ],

    features: {
      en: [
        "Semantic search across medical documents and research papers",
        "Context-aware AI responses using RAG architecture",
        "Vector database for efficient similarity search",
        "Document ingestion pipeline with preprocessing",
        "Secure query handling with HIPAA compliance",
        "Citation tracking and source verification",
        "Multi-language medical terminology support",
        "Real-time query processing and response generation",
        "User-friendly interface for clinicians and researchers",
        "Continuous learning and model improvement",
      ],
      fr: [
        "Recherche sémantique dans documents médicaux et publications",
        "Réponses IA contextuelles via architecture RAG",
        "Base de données vectorielle pour recherche par similarité",
        "Pipeline d'ingestion de documents avec prétraitement",
        "Gestion sécurisée des requêtes conforme HIPAA",
        "Traçabilité des citations et vérification des sources",
        "Support terminologie médicale multilingue",
        "Traitement de requêtes et génération de réponses en temps réel",
        "Interface conviviale pour cliniciens et chercheurs",
        "Apprentissage continu et amélioration du modèle",
      ],
    },
  },
  sanitary: {
    id: "sanitary",
    title: "Healthcare Management System",
    subtitle: "Système de gestion sanitaire intégré",
    category: "Application Web & Mobile",
    client: "Établissements de santé – Afrique",
    duration: "9 mois",
    year: "2023 - 2024",
    mainImage: imgSanitaryScreen,
    images: [
      imgSanitaryScreen,
      imgSanitaryScreen,
      imgSanitaryScreen,
    ],

    description: {
      en: "A comprehensive healthcare management platform designed for hospitals and clinics across Africa, integrating patient records, appointment scheduling, pharmacy management, billing, and medical reporting into a unified digital ecosystem.",
      fr: "Une plateforme complète de gestion sanitaire conçue pour les hôpitaux et cliniques en Afrique, intégrant dossiers patients, planification de rendez-vous, gestion de pharmacie, facturation et reporting médical dans un écosystème digital unifié.",
    },

    challenge: {
      en: "Healthcare facilities needed to modernize paper-based processes, centralize patient data, improve appointment management, track medication inventory, automate billing, and generate compliance reports while operating in low-resource environments.",
      fr: "Les établissements de santé devaient moderniser les processus papier, centraliser les données patients, améliorer la gestion des rendez-vous, suivre les stocks de médicaments, automatiser la facturation et générer des rapports de conformité tout en opérant dans des environnements à ressources limitées.",
    },

    solution: {
      en: "We developed a modular web and mobile platform with patient management, electronic health records (EHR), appointment scheduling, pharmacy inventory tracking, billing automation, role-based access control, and offline-capable features for areas with unstable connectivity.",
      fr: "Nous avons développé une plateforme web et mobile modulaire avec gestion des patients, dossiers médicaux électroniques (DME), planification de rendez-vous, suivi des stocks de pharmacie, automatisation de la facturation, contrôle d'accès basé sur les rôles et fonctionnalités hors ligne pour les zones à connectivité instable.",
    },

    results: {
      en: "The system improved patient care quality, reduced administrative workload by 60%, eliminated paper records, enhanced medication tracking, and enabled data-driven decision-making. Healthcare facilities reported better resource management and patient satisfaction.",
      fr: "Le système a amélioré la qualité des soins, réduit la charge administrative de 60%, éliminé les dossiers papier, renforcé le suivi des médicaments et permis une prise de décision basée sur les données. Les établissements ont constaté une meilleure gestion des ressources et satisfaction des patients.",
    },

    technologies: [
      "Laravel",
      "Vue.js",
      "MySQL",
      "Flutter",
      "Docker",
      "Redis",
      "REST API",
      "Node.js",
      "Firebase",
    ],

    features: {
      en: [
        "Electronic Health Records (EHR) management",
        "Patient registration and profile management",
        "Appointment scheduling and reminders",
        "Pharmacy inventory and medication tracking",
        "Billing and payment processing",
        "Medical reporting and analytics dashboards",
        "Role-based access for doctors, nurses, admin",
        "Offline-capable mode for low connectivity",
        "Laboratory test results integration",
        "Insurance and claims management",
        "SMS and email notification system",
        "Multi-facility support and data synchronization",
      ],
      fr: [
        "Gestion des Dossiers Médicaux Électroniques (DME)",
        "Enregistrement et gestion des profils patients",
        "Planification de rendez-vous et rappels",
        "Inventaire pharmacie et suivi des médicaments",
        "Facturation et traitement des paiements",
        "Reporting médical et tableaux de bord analytiques",
        "Accès basé sur les rôles pour médecins, infirmiers, admin",
        "Mode hors ligne pour faible connectivité",
        "Intégration des résultats de tests laboratoire",
        "Gestion des assurances et réclamations",
        "Système de notifications SMS et email",
        "Support multi-établissements et synchronisation des données",
      ],
    },
  },
};

export const projectsList = Object.values(projects);