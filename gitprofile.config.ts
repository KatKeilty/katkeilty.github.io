// gitprofile.config.ts

const CONFIG = {
  //icons from https://www.svgrepo.com/collection/corporate-pale-color-vectors/
  github: {
    username: 'KatKeilty', // Your GitHub org/user name. (This is the only required config)
  },

  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Highlights & Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Highlights | Business Improvement',
          description: [
            'Delivered significant savings with measurable improvements in delivery (+15%), profit (+22%), efficiency (+11%), and customer satisfaction (-88% complaints).',
          ],
          imageUrl:
            'https://www.svgrepo.com/show/415755/analytics-chart-diagram.svg',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
        {
          title: 'Highlights | Team Development',
          description: [
            'Delivered 500+ training hours across 200+ sessions, supporting management and employees across multiple sites. Trained ISO auditors and onboarded staff members. ',
          ],
          imageUrl:
            'https://www.svgrepo.com/show/415747/achievement-award-badge.svg',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
        {
          title: 'Digital Transformation | Business Analyst',
          description: [
            'Large-scale multi-site digital transformation, coordinating with francophone partners and consultants. Implementation of NetSuite ERP, Fabric, and supporting softwares. Led cross-functional process coordination efforts.',
          ],
          imageUrl:
            'https://www.svgrepo.com/show/415759/chat-conversation-laptop.svg',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
        {
          title: 'CRM Implementation | Subject Matter Expert',
          description: [
            'Supported deployment of a new CRM system, resulting in rapid adoption and measurable business impact in first year.',
          ],
          imageUrl:
            'https://www.svgrepo.com/show/415749/email-inbox-letter.svg',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
        {
          title: 'QMS Implementation | Project Manager',
          description: [
            'Replaced aging quality management database with modern system while maintaining business continuity and driving measurable quality improvements.',
          ],
          imageUrl:
            'https://www.svgrepo.com/show/415741/rocket-spaceship-start.svg',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
        {
          title: 'M365 Platform Rollout | Super User',
          description: [
            'Supported bilingual M365 deployment across sites for cross-cultural adoption and effective use of new collaboration tools.',
          ],
          imageUrl:
            'https://www.svgrepo.com/show/415765/documents-storage-files.svg',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Kat Keilty',
    description:
      'With 10+ years transforming processes and empowering teams, I make technology work for people, not the other way around.',
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
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://www.katkeilty.com',
    phone: '',
    email: 'kat.keilty@outlook.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Business Intelligence',
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
    'Solutions Development',
    'M365',
    'SharePoint',
    'CRM',
    'ERP',
    'Agile',
    'Waterfall',
    'Process Improvement',
    'QMS',
    'ISO 9001/14001',
    'PFMEA',
    'Visio',
    'LucidChart',
  ],
  experiences: [
    {
      company: ` Manage software implementation projects and build bilingual tools and resources. Lead ISO 9001/14001 audits while improving processes with data driven insights.`,
      position: 'Prelco | Quality Specialist',
      from: '2022',
      to: 'Present',
      companyLink: 'https://www.prelco.ca/en/',
    },
    {
      company:
        'Manage standards, documentation, and QMS database for 45+ staff. Streamline communication through Power BI and Power Automate. Audit ISO 9001 compliance and onboard/train staff with focus on quality.',
      position: 'Beclawat | Quality Auditor',
      from: '2018',
      to: '2022',
      companyLink: 'https://beclawat.com/',
    },
  ],
  certifications: [
    {
      name: 'ASQ | Certified Quality Process Analyst (CQPA)',
      body: 'CQPA Body of Knowledge: Quality Concepts and Tools, Problem Solving and Improvement, Data Analysis, Customer-Supplier Relations, Corrective and Preventive Action (CAPA)',
      year: '2025',
      link: 'https://credentials.asq.org/7ab48487-1ba4-424b-b032-93d254a126ab#acc.mgu4ZKnL',
    },
    {
      name: 'CSSB | Lean Six Sigma Black Belt (LSSBB)',
      body: 'Six Sigma Body of Knowledge: Team leadership & dynamics, DMAIC model, Hypothesis testing, Design of Experiment',
      year: '2025',
      link: 'https://www.credential.net/59384ce5-82e8-40b2-b1b1-1b92e48698d7?username=katrinakeilty53897',
    },
    {
      name: 'CFI | Business Intelligence & Data Analyst (BIDA)',
      body: 'Advanced Excel, Power BI, Power Query, Power Pivot, SQL, Tableau, Python. Statistical analysis, business intelligence, data science principles.',
      year: '2024',
      link: 'http://credentials.corporatefinanceinstitute.com/bf3107b3-e933-4ed7-8d00-2c6e75e60f15#acc.rUYKB5ij',
    },
    {
      name: 'BRC | ISO 9001:2015 & 14001:2015 Internal Auditor',
      body: 'Internal Audits, ISO Standards, Interviewing, Process Improvement, Corrective and Preventive Action (CAPA)',
      year: '2017, 2024',
      link: 'https://www.credential.net/59384ce5-82e8-40b2-b1b1-1b92e48698d7?username=katrinakeilty53897',
    },
    {
      name: 'BRC | Failure Modes and Effects Analysis AIAG & VDA FMEA Training',
      body: 'Quality (ISO 9001), Automotive (IATF 16949), Manufacturing & Operations, Process Improvement',
      year: '2023',
      link: 'https://thebrc.ca/product/aiag-vda-fmea-1st-edition-2/',
    },
  ],
  educations: [
    {
      institution: 'Athabasca University',
      degree: 'Bachelor of Science, Computing and Information Systems Major',
      from: 'Currently Enrolled',
      to: '',
      description:
        'Database management, Data structures and algorithms, Programming, Systems analysis and design, Scientific research, Math and Statistics, Development, management, and optimization of IT systems across sectors.',
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
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
