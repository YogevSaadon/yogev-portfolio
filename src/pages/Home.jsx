import { Suspense, useEffect } from 'react';
import SEOHead from '../components/common/SEOHead';
import { LazyHero, LazySkills, LazyProjects, LazyEducation, LazyContact } from '../utils/lazyComponents.jsx';
import { pageConfigs } from '../utils/seo';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead {...pageConfigs.home} />
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <LazyHero />
      </Suspense>
      <Suspense fallback={null}>
        <LazySkills />
        <LazyProjects />
        <LazyEducation />
        <LazyContact />
      </Suspense>
    </>
  );
}

export default Home;
