// gitprofile.config.fr.ts

const CONFIG = {
  //icons from https://www.svgrepo.com/collection/corporate-pale-color-vectors/
  github: {
    username: 'KatKeilty',
  },

  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Projets Github',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'Faits saillants et projets',
      projects: [
        {
          title: 'Faits saillants | Amélioration des affaires',
          description:
            'Réalisé des économies importantes avec des améliorations mesurables en livraison (+15%), profit (+22%), efficacité (+11%), et satisfaction client (-88% de plaintes).',
          imageUrl:
            'https://www.svgrepo.com/show/415755/analytics-chart-diagram.svg',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
        {
          title: "Faits saillants | Développement d'équipe",
          description:
            'Offert 500+ heures de formation sur 200+ sessions, soutenant la direction et les employés sur plusieurs sites. Formé des auditeurs ISO et intégré des membres du personnel.',
          imageUrl:
            'https://www.svgrepo.com/show/415747/achievement-award-badge.svg',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
        {
          title: "Transformation numérique | Analyste d'affaires",
          description:
            'Transformation numérique multi-sites à grande échelle, coordination avec des partenaires et consultants francophones. Implémentation de NetSuite ERP, Fabric et logiciels de soutien. Direction des efforts de coordination de processus interfonctionnels.',
          imageUrl:
            'https://www.svgrepo.com/show/415759/chat-conversation-laptop.svg',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
        {
          title: 'Implémentation CRM | Expert en la matière',
          description:
            "Soutenu le déploiement d'un nouveau système CRM, résultant en une adoption rapide et un impact commercial mesurable la première année.",
          imageUrl:
            'https://www.svgrepo.com/show/415749/email-inbox-letter.svg',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
        {
          title: 'Implémentation SGQ | Chef de projet',
          description:
            'Remplacé une base de données de gestion de la qualité vieillissante par un système moderne tout en maintenant la continuité des affaires et en réalisant des améliorations de qualité mesurables.',
          imageUrl:
            'https://www.svgrepo.com/show/415741/rocket-spaceship-start.svg',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
        {
          title: 'Déploiement de la plateforme M365 | Super utilisateur',
          description: [
            'Soutenu le déploiement bilingue de M365 sur plusieurs sites pour une adoption interculturelle et une utilisation efficace des nouveaux outils de collaboration.',
          ],
          imageUrl:
            'https://www.svgrepo.com/show/415765/documents-storage-files.svg',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio de Kat Keilty',
    description:
      "Avec plus de 10 ans à transformer les processus et à autonomiser les équipes, je fais en sorte que la technologie travaille pour les gens, et non l'inverse.",
    imageURL: 'https://www.svgrepo.com/show/415752/favorite-heart-like.svg',
  },
  social: {
    linkedin: 'katkeilty',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'KatKeilty',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: 'https://www.katkeilty.com',
    phone: '',
    email: 'kat.keilty@outlook.com',
  },
  resume: {
    fileUrl: 'https://katkeilty.com/ProfessionalSummaryPublic.pdf',
  },
  skills: [
    "Intelligence d'affaires",
    'SQL',
    'NetSuite',
    'ETL',
    'PowerBI',
    'DAX',
    'PowerQuery',
    'VsCode',
    'Azure DevOps',
    'Git',
    'HTML',
    'Développement de solutions',
    'M365',
    'SharePoint',
    'CRM',
    'ERP',
    'Agile',
    'Waterfall',
    'Amélioration des processus',
    'SGQ',
    'ISO 9001/14001',
    'PFMEA',
    'Visio',
    'LucidChart',
  ],
  experiences: [
    {
      company:
        "Gérer des projets d'implémentation de logiciels et créer des outils et ressources bilingues. Diriger des audits ISO 9001/14001 tout en améliorant les processus avec des informations basées sur les données.",
      position: 'Prelco | Spécialiste qualité',
      from: '2022',
      to: 'Présent',
      companyLink: 'https://www.prelco.ca/fr/',
    },
    {
      company:
        'Gérer les normes, la documentation et la base de données SGQ pour 45+ employés. Rationaliser la communication via Power BI et Power Automate. Auditer la conformité ISO 9001 et intégrer/former le personnel avec un accent sur la qualité.',
      position: 'Beclawat | Auditeur qualité',
      from: '2018',
      to: '2022',
      companyLink: 'https://beclawat.com/',
    },
  ],
  certifications: [
    {
      name: 'ASQ | Analyste certifié des processus qualité (CQPA)',
      body: 'Corps de connaissances CQPA : Concepts et outils de qualité, résolution de problèmes et amélioration, analyse de données, relations client-fournisseur, actions correctives et préventives (CAPA)',
      year: '2025',
      link: 'https://credentials.asq.org/7ab48487-1ba4-424b-b032-93d254a126ab#acc.mgu4ZKnL',
    },
    {
      name: 'CSSB | Ceinture noire Lean Six Sigma (LSSBB)',
      body: "Corps de connaissances Six Sigma : Leadership et dynamique d'équipe, modèle DMAIC, tests d'hypothèses, plan d'expériences",
      year: '2025',
      link: 'https://www.credential.net/59384ce5-82e8-40b2-b1b1-1b92e48698d7?username=katrinakeilty53897',
    },
    {
      name: "CFI | Analyste en intelligence d'affaires et données (BIDA)",
      body: "Excel avancé, Power BI, Power Query, Power Pivot, SQL, Tableau, Python. Analyse statistique, intelligence d'affaires, principes de science des données.",
      year: '2024',
      link: 'http://credentials.corporatefinanceinstitute.com/bf3107b3-e933-4ed7-8d00-2c6e75e60f15#acc.rUYKB5ij',
    },
    {
      name: 'BRC | Auditeur interne ISO 9001:2015 et 14001:2015',
      body: 'Audits internes, normes ISO, entrevues, amélioration des processus, actions correctives et préventives (CAPA)',
      year: '2017, 2024',
      link: 'https://www.credential.net/59384ce5-82e8-40b2-b1b1-1b92e48698d7?username=katrinakeilty53897',
    },
    {
      name: 'BRC | Formation AMDEC AIAG et VDA',
      body: 'Qualité (ISO 9001), Automobile (IATF 16949), Fabrication et opérations, Amélioration des processus',
      year: '2023',
      link: 'https://thebrc.ca/product/aiag-vda-fmea-1st-edition-2/',
    },
  ],
  educations: [
    {
      institution: 'Université Athabasca',
      degree:
        "Baccalauréat en sciences, majeure en informatique et systèmes d'information",
      from: 'Actuellement inscrit',
      to: '',
      description:
        'Gestion de bases de données, structures de données et algorithmes, programmation, analyse et conception de systèmes, recherche scientifique, mathématiques et statistiques, développement, gestion et optimisation des systèmes informatiques dans tous les secteurs.',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
  ],
  blog: {
    source: 'medium',
    username: 'KatKeilty',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'synthwave',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },
  footer: `Créé avec <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> et ❤️`,
  enablePWA: true,
};

export default CONFIG;
