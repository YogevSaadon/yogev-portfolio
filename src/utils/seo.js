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
    'TypeScript',
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
    keywords: 'JavaScript, React, Node.js, TypeScript, HTML, CSS, Git, MongoDB, PostgreSQL',
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

// Generate sitemap data
export const generateSitemapData = () => {
  const baseUrl = siteConfig.siteUrl;
  const currentDate = new Date().toISOString();
  
  return {
    pages: [
      {
        url: baseUrl,
        lastmod: currentDate,
        priority: 1.0,
        changefreq: 'weekly'
      },
      {
        url: `${baseUrl}#skills`,
        lastmod: currentDate,
        priority: 0.8,
        changefreq: 'monthly'
      },
      {
        url: `${baseUrl}#projects`,
        lastmod: currentDate,
        priority: 0.9,
        changefreq: 'weekly'
      },
      {
        url: `${baseUrl}#education`,
        lastmod: currentDate,
        priority: 0.7,
        changefreq: 'monthly'
      },
      {
        url: `${baseUrl}#contact`,
        lastmod: currentDate,
        priority: 0.8,
        changefreq: 'monthly'
      }
    ]
  };
};

// Generate robots.txt content
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_*

Sitemap: ${siteConfig.siteUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;
};

// SEO best practices checker
export const checkSEO = (config) => {
  const issues = [];
  
  // Title checks
  if (!config.title) {
    issues.push('Missing page title');
  } else if (config.title.length < 10) {
    issues.push('Title is too short (minimum 10 characters)');
  } else if (config.title.length > 60) {
    issues.push('Title is too long (maximum 60 characters)');
  }
  
  // Description checks
  if (!config.description) {
    issues.push('Missing meta description');
  } else if (config.description.length < 120) {
    issues.push('Meta description is too short (minimum 120 characters)');
  } else if (config.description.length > 160) {
    issues.push('Meta description is too long (maximum 160 characters)');
  }
  
  // Keywords checks
  if (!config.keywords) {
    issues.push('Missing keywords');
  }
  
  // Image checks
  if (!config.image) {
    issues.push('Missing social media image');
  }
  
  // URL checks
  if (!config.url) {
    issues.push('Missing canonical URL');
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
};

// Performance monitoring for SEO
export const trackPageView = () => {
  // Disabled to prevent analytics calls
  return;
};

// Social sharing utilities
export const generateShareUrls = (url, title, description) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  
  return {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  };
};

// JSON-LD structured data helpers
export const generatePersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author,
  jobTitle: "Full Stack Developer",
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}${siteConfig.image}`,
  sameAs: [
    "https://github.com/yogev",
    "https://linkedin.com/in/yogev",
    "https://twitter.com/yogev"
  ],
  knowsAbout: siteConfig.keywords,
  worksFor: {
    "@type": "Organization",
    name: "Independent Developer"
  }
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.siteName,
  url: siteConfig.siteUrl,
  author: {
    "@type": "Person",
    name: siteConfig.author
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});

export const generateBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteConfig.siteUrl}${item.url}`
  }))
});