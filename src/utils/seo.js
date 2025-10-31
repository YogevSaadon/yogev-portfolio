// SEO configuration and utilities
export const siteConfig = {
  siteName: 'Yogev Portfolio',
  siteUrl: typeof window !== 'undefined' ? window.location.origin : '',
  author: 'Yogev',
  description: 'Professional portfolio of Yogev, a software engineer specializing in AI & Machine Learning, LLMs, RAG systems, Python development, and game development with Godot Engine.',
  keywords: [
    'Yogev',
    'Software Engineer',
    'AI Developer',
    'Machine Learning',
    'LLMs',
    'Large Language Models',
    'RAG',
    'Retrieval-Augmented Generation',
    'Python',
    'GDScript',
    'Godot Engine',
    'Game Development',
    'Agent Architecture',
    'Embeddings',
    'Data Structures',
    'Algorithms',
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
    description: 'Explore my technical skills in AI & Machine Learning, LLMs, RAG systems, Python, game development, and computer science fundamentals.',
    keywords: 'Python, AI, Machine Learning, LLMs, RAG, Embeddings, GDScript, Godot Engine, Data Structures, Algorithms, Git, CI/CD',
    type: 'website',
    url: '#skills'
  },
  projects: {
    title: `Projects & Work - ${siteConfig.author}`,
    description: 'Browse through my portfolio of AI/ML projects, game development, and software engineering solutions.',
    keywords: 'AI Projects, Machine Learning, Game Development, Python Projects, Godot Engine, Software Engineering, Portfolio',
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

