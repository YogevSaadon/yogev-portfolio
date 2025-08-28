// SEO configuration and utilities
export const siteConfig = {
  siteName: 'Yogev Portfolio',
  siteUrl: typeof window !== 'undefined' ? window.location.origin : '',
  author: 'Yogev',
  description: 'Professional portfolio of Yogev, a passionate full-stack developer specializing in modern web technologies, React, Node.js, and innovative software solutions.',
  keywords: [
    'Yogev',
    'Full Stack Developer',
    'React Developer',
    'Node.js',
    'JavaScript',
    'Python',
    'GDScript',
    'Web Development',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Portfolio',
    'Modern Web Technologies'
  ],
  image: '/logo.png',
  twitterHandle: '@yogev',
  locale: 'en_US',
  themeColor: '#4A90E2'
};

// Page-specific SEO data
export const pageConfigs = {
  home: {
    title: `${siteConfig.author} - Full Stack Developer Portfolio`,
    description: siteConfig.description,
    keywords: siteConfig.keywords.join(', '),
    type: 'website',
    url: '/'
  },
  skills: {
    title: `Skills & Technologies - ${siteConfig.author}`,
    description: 'Explore my technical skills and expertise in modern web development technologies, frameworks, and tools.',
    keywords: 'Python, GDScript, Node.js, React, JavaScript, HTML, CSS, Git, CI/CD',
    type: 'website',
    url: '#skills'
  },
  projects: {
    title: `Projects & Work - ${siteConfig.author}`,
    description: 'Browse through my portfolio of web development projects, showcasing modern technologies and innovative solutions.',
    keywords: 'Web Projects, React Applications, Full Stack Projects, Portfolio',
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

