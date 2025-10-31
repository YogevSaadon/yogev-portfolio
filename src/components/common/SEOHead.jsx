
const SEOHead = ({
  title = 'Yogev - Software Engineer Portfolio',
  description = 'Professional portfolio of Yogev, a software engineer specializing in AI & Machine Learning, LLMs, RAG systems, Python development, and game development with Godot Engine.',
  keywords = 'Yogev, Software Engineer, AI Developer, Machine Learning, LLMs, RAG, Python, GDScript, Godot Engine, Game Development, Portfolio',
  image = '/logo.png',
  url = '',
  type = 'website',
  author = 'Yogev',
  locale = 'en_US',
  siteName = 'Yogev Portfolio',
  twitterHandle = '@yogev',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  // Construct full URL
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : 'Person',
    ...(type === 'website' ? {
      name: author,
      jobTitle: 'Software Engineer',
      url: fullUrl,
      image: fullImageUrl,
      sameAs: [
        'https://github.com/yogev',
        'https://linkedin.com/in/yogev',
        'https://twitter.com/yogev'
      ],
      worksFor: {
        "@type": "Organization",
        name: "Independent"
      },
      knowsAbout: [
        'Artificial Intelligence',
        'Machine Learning',
        'Large Language Models',
        'RAG Systems',
        'Python',
        'GDScript',
        'Game Development',
        'Godot Engine',
        'Data Structures',
        'Algorithms',
        'Software Engineering'
      ]
    } : {
      headline: title,
      description: description,
      image: fullImageUrl,
      author: {
        "@type": "Person",
        name: author
      },
      publisher: {
        "@type": "Person",
        name: author
      },
      url: fullUrl,
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      articleSection: section,
      keywords: tags.join(', ')
    })
  };

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Article specific OG tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && 
        tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))
      }
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#4A90E2" />
      <meta name="msapplication-TileColor" content="#4A90E2" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional structured data for website */}
      {type === 'website' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteName,
            url: fullUrl,
            author: {
              "@type": "Person",
              name: author
            },
            potentialAction: {
              "@type": "SearchAction",
              target: `${fullUrl}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      )}
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    </>
  );
};

export default SEOHead;