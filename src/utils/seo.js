// SEO configuration and utilities
export const siteConfig = {
  siteName: 'Yogev Portfolio',
  siteUrl: typeof window !== 'undefined' ? window.location.origin : '',
  author: 'Yogev',
  description: 'Portfolio of Yogev Saadon, a software engineer working on machine learning, deep learning systems, AI agents, performance optimization, and game development.',
  keywords: [
    'Yogev',
    'Software Engineer',
    'Machine Learning',
    'Deep Learning',
    'NLP',
    'AI Agents',
    'Python',
    'PyTorch',
    'HuggingFace',
    'Rust',
    'GDScript',
    'Godot Engine',
    'Game Development',
    'Performance Optimization',
    'Computer Science',
    'Portfolio'
  ],
  image: '/logo.png',
  twitterHandle: '@yogev',
  locale: 'en_US',
  themeColor: '#4A90E2'
};

// Page-specific SEO data
export const pageConfigs = {
  home: {
    title: `${siteConfig.author} - Software Engineer Portfolio`,
    description: siteConfig.description,
    keywords: siteConfig.keywords.join(', '),
    type: 'website',
    url: '/'
  },
  skills: {
    title: `Skills & Technologies - ${siteConfig.author}`,
    description: 'Explore my technical skills in machine learning, deep learning, AI agents, Python, Rust, game development, and computer science fundamentals.',
    keywords: 'Python, Machine Learning, Deep Learning, NLP, PyTorch, HuggingFace, AI Agents, Rust, GDScript, Godot Engine, Data Structures, Algorithms, Git, CI/CD',
    type: 'website',
    url: '#skills'
  },
  projects: {
    title: `Projects & Work - ${siteConfig.author}`,
    description: 'Browse through my portfolio of ML projects, deep learning research, AI agents, game development, and software engineering solutions.',
    keywords: 'ML Projects, Deep Learning, NLP, AI Agents, Game Development, Python Projects, Rust, Godot Engine, Software Engineering, Portfolio',
    type: 'website',
    url: '#projects'
  },
  education: {
    title: `Education & Background - ${siteConfig.author}`,
    description: 'Learn about my educational background, certifications, and professional development journey.',
    keywords: 'Education, Computer Science, Certifications, Learning',
    type: 'website',
    url: '#education'
  },
  contact: {
    title: `Contact Me - ${siteConfig.author}`,
    description: 'Get in touch for collaboration opportunities, project discussions, or professional inquiries.',
    keywords: 'Contact, Hire Developer, Collaboration, Professional Services',
    type: 'website',
    url: '#contact'
  }
};

