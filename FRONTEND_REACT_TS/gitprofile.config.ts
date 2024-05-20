// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'JKen0', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/v1/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'jken0/v1',
          'jken0/vr-kat-project-python',
          'jken0/kat-walk-c-estimating-position',
          'jken0/test-projects',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'KAT Walk C: Foot Estimation Position Code',
          description:
            "The estimation of foot position on the KAT Walk C relies on sparse sensor readings to gauge the foot's location relative to the treadmill surface, employing techniques like Baycentric Interpolation for estimation.",
          imageUrl:
            'https://www.knoxlabs.com/cdn/shop/files/KAT-Walk-C2-Plus-2nd-Generation-Personal-VR-Treadmill-with-Haptic-Feedback-04_512x512.webp?v=1689714498',
          link: 'https://jken0.github.io/v1/?goto=projects&content=katc-estimate-position-project',
        },
        {
          title: 'Automated Insurance Policies On Chainlink',
          description:
            'In the Chainlink project, I leveraged Chainlink to develop data- centric parametrized insurance policies.These policies were designed to dynamically adjust payouts based on real - time rain data, enhancing flexibility and accuracy in insurance coverage.',
          imageUrl:
            'https://cryptologos.cc/logos/chainlink-link-logo.png?v=029',
          link: 'https://jken0.github.io/v1/?goto=projects&content=chainlink-project',
        },
      ],
    },
  },
  seo: {
    title: '',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'kennethmatira',
    website: 'https://jken0.github.io/v1/',
    email: 'matirk1@mcmaster.ca',
  },
  resume: {
    fileUrl: 'https://jken0.tiiny.site',
  },
  skills: [
    'TypeScript',
    'JavaScript',
    'Python',
    'C++',
    'C#',
    'SQL',
    'React.js',
    'Node.js',
    'MySQL',
    'MSSQL Server',
    'Latex',
    'TensorFlow',
    'Git',
    'Github',
    'BitBucket',
    'CSS',
    'Tableau',
    'Excel',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'McMaster University',
      degree: 'Masters of Engineering in Computing & Software',
      from: 'Sept 2022',
      to: 'Apr 2024'
    },
    {
      institution: 'McMaster University',
      degree:
        'Bachelor of Science in Honours Actuarial & Financial Mathematics',
      from: 'Sept 2017',
      to: 'Apr 2022'
    },
  ],
  publications: [
    {
      title: 'KATNN: KAT Walk C Alternative Motion Capture Algorithm',
      conferenceName: '',
      journalName: 'Masters of Engineering Technical Reports',
      authors: 'Kenneth Matira',
      link: 'https://macsphere.mcmaster.ca/handle/11375/29390',
      description:
        'In the world of Virtual Reality (VR), motion sickness, nausea, and disorientation remains a big concern for many users. The KAT Walk C is an omni-directional treadmill, which aims to convert human motion to virtual movement. This is intended to reduce the aforementioned concerns. However, the original KAT C algorithm of human locomotion has its limitations, where motion is frequently converted incorrectly. In this report, we will introduce an alternative input mechanism for the KAT Walk C, KATNN, which focuses on two primary objectives: allowing the user to move in multiple directions, and having the ability to register slower type motions. KATNN was created by the construction of modular neural networks. We will discuss steps to create the models, investigate current issues and potential solutions involving calibration and disorientation.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 5, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

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
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: '',

  enablePWA: true,
  experience_mod: [
    {
      title:
        `Software Engineer / SQL Developer`,
      company: 'Scale AI',
      date: 'Apr 2024 - Present',
      location: 'San Francisco, California',
      description: [
        'Responsible for devising prompts designed to challenge our Language Model (LLM), pushing it to its limits and uncovering areas for improvement.',
        'Analyze and modify the incorrect response from the LLM to align with the original prompt, ensuring accurate execution.',
        'Enhance the overall functionality of the LLM through reinforcement learning by iteratively making incremental tweaks.',
      ],
      link: 'https://macsphere.mcmaster.ca/handle/11375/29390',
      image: 'https://media.licdn.com/dms/image/C4D0BAQFUABvcOwaFGg/company-logo_200_200/0/1630493502009/scaleai_logo?e=2147483647&v=beta&t=yBrEdT6NZhPtXLKlu6aqQLXrfBmgpo3b2NiKMAqRako',
      tags: [
        'SQL',
        'Python',
        'Data-science',
        'AI',
        'Quality-assurance',
      ],
    },
    {
      title:
        `Motion Capture and Machine Learning Researcher (Research)`,
      company: 'McMaster University',
      date: 'Jan 2023 - Dec 2023',
      location: 'Hamilton, Ontario',
      description: [
        'Developed an alternative algorithm utilizing the KAT Walk C motion capture system for precise data acquisition of human motion, successfully testing its accuracy and efficiency in a created sandbox Unity game.',
        'Conducted extensive research on motion capture technologies, exploring various data-fetching techniques from sensors and optimizing data conversion processes.',
        'Employed machine learning techniques, neural networks, and data science to analyze and interpret the captured motion data accurately.',
        'Github Repository: https://github.com/JKen0/vr-kat-project-python',
        'Research Results (Video): https://youtu.be/SbUXoQ0-G9Q',
      ],
      link: 'https://macsphere.mcmaster.ca/handle/11375/29390',
      image: 'https://privatech.ca/wp-content/uploads/2015/04/mcmaster.jpg',
      tags: [
        'Python',
        'TensorFlow',
        'C#',
        'Unity',
        'VR',
        'motion-capture',
        'neural-networks',
      ],
    },
    {
      title: 'Full Stack Application Developer',
      company: 'Kenna Technology Solutions',
      date: 'May 2021 - Sep 2022',
      location: 'Mississauga, Ontario',
      description: [
        'Developed applications with Node.js (backend development) and React.js or jQuery (frontend development) for seamless user experiences.',
        'Collaborated in dynamic teams to meet client needs, handling big data sets with Microsoft SQL Server.',
        'Versatile tech stack utilization for optimized performance and data processing.',
      ],
      link: 'https://www.kenna.ca/',
      image:
        'https://media.licdn.com/dms/image/C4E0BAQEjGLoIwliplg/company-logo_200_200/0/1630601311630/kennacommunications_logo?e=2147483647&v=beta&t=Ojlv8QTUp4qfwgFQbohDw0RlefdtQca-i57vj70Gmdo',
      tags: [
        'JavaScript',
        'TypeScript',
        'React.js',
        'Node.js',
        'jQuery',
        'SQL',
        'MS-SQL-Server',
        'Git',
        'BitBucket',
        'Jenkins',
      ],
    },
    {
      title: 'Business Intelligence / SQL Developer',
      company: 'Kenna Technology Solutions',
      date: 'Jan 2020 - Jan 2021',
      location: 'Mississauga, Ontario',
      description: [
        'Proficiently managed data pulls and custom report creation for clients, utilizing SQL scripts to extract requested data and generate dynamic Tableau reports linked to daily- updated SQL tables.',
        'Expertly executed data retrieval operations, transforming SQL query results into Excel sheets, delivering precise and relevant data to clients, thereby supporting informed decision - making and enhancing business insights',
      ],
      link: 'https://www.kenna.ca/',
      image:
        'https://media.licdn.com/dms/image/C4E0BAQEjGLoIwliplg/company-logo_200_200/0/1630601311630/kennacommunications_logo?e=2147483647&v=beta&t=Ojlv8QTUp4qfwgFQbohDw0RlefdtQca-i57vj70Gmdo',
      tags: ['SQL', 'MS-SQL-Server', 'Tableau', 'Excel'],
    },

    {
      title: 'Teaching Assistant',
      company: 'McMaster University',
      date: 'Sep 2018 - Apr 2023',
      location: 'Hamilton, Ontario',
      description: [
        'Facilitated interactive tutorial sessions and provided one-on-one support to undergraduate students in topics such as Calculus, Linear Algebra, Analysis, Probability, Discrete Math, and Logic.',
      ],
      link: 'https://www.eng.mcmaster.ca/cas/',
      image: 'https://privatech.ca/wp-content/uploads/2015/04/mcmaster.jpg',
      tags: ['Python', 'Expertise', 'Communication', 'Adaptable'],
    },
  ],
  educations_mod: [
    {
      institution: 'McMaster University',
      degree: 'Masters of Engineering in Computing & Software',
      from: 'Sept 2022',
      to: 'Apr 2024',
      description: [
        'GPA: 3.9 (A+)',
        , 'Demonstrated exceptional problem-solving skills through complex projects related in machine learning, motion capture, and distributed databases for innovative and analytical solutions.'
      ],
    },
    {
      institution: 'McMaster University',
      degree:
        'Bachelor of Science in Honours Actuarial & Financial Mathematics',
      from: 'Sept 2017',
      to: 'Apr 2022',
      description: [
        'GPA: 3.8 (A)',
        'Mathematics enthusiast with a interest in number theory, cryptography, and mathematical modeling, adept at analytical thinking and problem-solving.',
        'Developed a robust understanding of a wide range of financial derivatives such as options, futures, swaps, and credit derivatives.'
      ],
    }
  ]
};

export default CONFIG;
