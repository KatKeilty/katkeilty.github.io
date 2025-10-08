// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'KatKeilty', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
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
        projects: [''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Project Highlights',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title:
            'Digital Transformation & ERP Implementation | Business Analyst',
          description:
            'Large-scale digital transformation across multiple sites, coordinating with francophone partners and consultants. Led Process coordination efforts  to aid adoption across teams.\
            ✓ Cross-functional coordination ✓ Bilingual stakeholder management ✓ Agile/Waterfall methodologies ✓ Legacy system migration ✓ DevOps collaboration ✓ AI-assisted productivity',
          imageUrl:
            'https://rawcdn.githack.com/KatKeilty/katkeilty.github.io/d198146425b4680e8373ba088cb132fd7854b0fd/public/canvaCreations/icon/Metrics.png',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
        {
          title: 'CRM Implementation | Subject Matter Expert',
          description:
            'Supported deployment of a new CRM system for a manufacturing site, resulting in rapid adoption and measurable business impact in less than 6 months.\
            ✓ Change management ✓ User training & adoption ✓ Metrics tracking ✓ Sales process optimization',
          imageUrl:
            'https://rawcdn.githack.com/KatKeilty/katkeilty.github.io/d198146425b4680e8373ba088cb132fd7854b0fd/public/canvaCreations/icon/QMS.png',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
        {
          title: 'Quality Management System Implementation | Project Manager',
          description:
            'Replaced aging quality management database with modern system while maintaining business continuity and driving measurable quality improvements.\
            ✓ Full project lifecycle management ✓ Change management at scale ✓ User training & documentation ✓ Data migration & integrity ✓ ROI measurement ✓ Vendor relationship management ✓ Process optimization ✓ Strategic reporting ',
          imageUrl:
            'https://rawcdn.githack.com/KatKeilty/katkeilty.github.io/d198146425b4680e8373ba088cb132fd7854b0fd/public/canvaCreations/icon/Audit.png',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
        {
          title: 'Enterprise M365 Platform Rollout | Super User',
          description:
            'Supported bilingual M365 deployment across sites for cross-cultural adoption and effective use of new collaboration tools.\
            ✓ Cross-cultural facilitation ✓ Early adopter / pilot tester ✓ User advocacy ✓ Documentation translation ✓ Change champion',
          imageUrl:
            'https://rawcdn.githack.com/KatKeilty/katkeilty.github.io/d198146425b4680e8373ba088cb132fd7854b0fd/public/canvaCreations/icon/ERP.png',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
        {
          title: 'Business Improvement Numbers',
          description:
            '📋 40% increase in QMS traffic\
            ✅ 94% increase in quality reports\
            📉 93% supplier NC reduction\
            📉 85% customer NC reduction\
            📉 23% internal NC reduction\
            🔍 10+ modules configured (50 users)\
            📄 400+ documents migrated 500+ Active\
            ⭐ 83% on-time action completion rate\
            📈 48% rework/scrap decrease\
            💰 $90K+ cost savings delivered\
            ✅ 19% improvement in On-Time Delivery',
          imageUrl:
            'https://rawcdn.githack.com/KatKeilty/katkeilty.github.io/d198146425b4680e8373ba088cb132fd7854b0fd/public/canvaCreations/icon/Documentation.png',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
        {
          title: 'Team Development Numbers',
          description:
            '👤 Trained 4 Junior ISO Auditors\
            👥 Onboarded & mentored 3 junior staff\
            📚 Managed ~20 QMS users during implementation\
            🎓 Guided 25+ end users (M365)\
            🌟 10+ years of service\
            👥 500+ training hours delivered\
            📱 200+ training sessions conducted\
            🌐 650+ employees supported (6 sites)\
            💻 75+ DevOps sprints supported',
          imageUrl:
            'https://rawcdn.githack.com/KatKeilty/katkeilty.github.io/d198146425b4680e8373ba088cb132fd7854b0fd/public/canvaCreations/icon/Leadership.png',
          link: 'https://www.linkedin.com/in/katkeilty',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Kat Keilty',
    description:
      'With 10+ years transforming processes and empowering teams, I make technology work for people, not the other way around.',
    imageURL:
      'https://rawcdn.githack.com/KatKeilty/katkeilty.github.io/9b65af2610bfe6eab4cdf4fb9f5a63222db8bb90/public/logoBranding/womanLogo.png',
  },
  social: {
    linkedin: 'katkeilty',
    website: '',
    email: 'portfolio@katkeilty.com',
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
  },
  resume: {
    fileUrl:
      'https://rawcdn.githack.com/KatKeilty/katkeilty.github.io/b8870adfb365bf1ffdef9f11ad7d6fa14eb8a2bc/public/resume/Kat%20Keilty%20Professional%20Summary%20Public.pdf', // Empty fileUrl will hide the `Download Resume` button.
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
      company: 'Prelco Industrial | Quality Specialist',
      position: '👥 Collaborate with corporate, vendors & consultants\
      🚀 Managed QMS implementation saving $90K+ & cutting defects by up to 93%\
      📊 Build bilingual dashboards (PowerBI, SQL, Excel) with SQL views from FR/EN data\
      🔧 Use DevOps, Git, VsCode, M365 for version control\
      🧠 Boost efficiency via AI, automation & standardization\
      🔍 Lead ISO 9001/14001 audit program; train Junior Auditors\
      🌐 Create bilingual SharePoint and translate materials',
      from: '2022',
      to: 'Present',
      companyLink: 'https://www.prelco.ca/en/',
    },
    {
      company: 'Beclawat Manufacturing | Quality Auditor ',
      position: '📄 Manage standards, specs, docs & training for 45+ staff\
      🗃️ Maintain QMS database; train & support ~20 users\
      📊 Streamline reporting & vendor scorecards via Power Automate\
      🔄 Coordinate interdepartmental reporting & communication\
      👥 Onboard & train junior staff with focus on quality\
      🔍 Audit ISO 9001 compliance; investigate & report processes',
      from: '2018',
      to: '2022',
      companyLink: 'https://beclawat.com/',
    },
  ],
  certifications: [
    {
      name: 'ASQ Certified Quality Process Analyst',
      body: 'CQPA Body of Knowledge: Quality Concepts and Tools, Problem Solving and Improvement, Data Analysis, Customer-Supplier Relations, Corrective and Preventive Action (CAPA)',
      year: '2025',
      link: 'https://credentials.asq.org/7ab48487-1ba4-424b-b032-93d254a126ab#acc.mgu4ZKnL',
    },
    {
      name: 'Lean Six Sigma Black Belt',
      body: 'Six Sigma Body of Knowledge: Team leadership & dynamics, DMAIC model, Hypothesis testing, Design of Experiment',
      year: '2025',
      link: 'https://www.credential.net/59384ce5-82e8-40b2-b1b1-1b92e48698d7?username=katrinakeilty53897',
    },
    {
      name: 'CFI BIDA Certificate, Business Intelligence & Data Analyst',
      body: 'Advanced Excel, Power BI, Power Query, Power Pivot, SQL, Tableau, Python. Statistical analysis, business intelligence, data science principles.',
      year: '2024',
      link: 'http://credentials.corporatefinanceinstitute.com/bf3107b3-e933-4ed7-8d00-2c6e75e60f15#acc.rUYKB5ij',
    },
    {
      name: 'ISO 9001:2015 & 14001:2015 Internal Auditor',
      body: 'Internal Audits · ISO Standards · Interviewing · Process Improvement · Corrective and Preventive Action (CAPA)',
      year: '2017, 2024',
      link: 'https://www.credential.net/59384ce5-82e8-40b2-b1b1-1b92e48698d7?username=katrinakeilty53897',
    },
    {
      name: 'Failure Modes and Effects Analysis AIAG & VDA FMEA Training',
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
    {
      institution: 'Loyalist College',
      degree: 'Diploma, Office Administration – Executive',
      from: '2021',
      to: '2023',
      description:
        'Financial accounting, business law, organizational behaviour, software, management',
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
    defaultTheme: 'procyon',

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
      'corporate',
      'retro',
      'cyberpunk',
      'wireframe',
      'luxury',
      'synthwave',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#e98403',
      secondary: '#0368E9',
      accent: '#FC910A',
      neutral: '#FFD580',
      'base-100': '#1a103d',
      '--rounded-box': '2rem',
      '--rounded-btn': '2rem',
    },
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
