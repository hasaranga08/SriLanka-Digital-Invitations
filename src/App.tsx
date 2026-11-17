import {useCallback, useEffect, useState} from 'react';
import {CategoriesSection} from './components/CategoriesSection';
import {ConstructionPage} from './components/ConstructionPage';
import {ContactAndFooter} from './components/ContactAndFooter';
import {HeroSection} from './components/HeroSection';
import {Navbar} from './components/Navbar';
import {PricingSection} from './components/PricingSection';
import {TemplatesSection} from './components/TemplatesSection';
import {WhyChooseUsAndProcess} from './components/WhyChooseUsAndProcess';

function parsePreviewSlug(pathname: string): string | null {
  const normalized = pathname.replace(/\/+$/, '');
  if (normalized === '/preview' || normalized === '/under-construction') {
    return '';
  }
  if (normalized.startsWith('/preview/')) {
    return decodeURIComponent(normalized.slice('/preview/'.length));
  }
  return null;
}

export default function App() {
  const [pathname, setPathname] = useState<string>(() => window.location.pathname);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const previewSlug = parsePreviewSlug(pathname);
  const isConstructionRoute = previewSlug !== null;

  const scrollToSection = useCallback((sectionId: string) => {
    const scrollNow = () => {
      if (sectionId === 'home') {
        window.scrollTo({top: 0, behavior: 'smooth'});
        return;
      }
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    };

    if (parsePreviewSlug(window.location.pathname) !== null) {
      window.history.pushState({}, '', '/');
      setPathname('/');
      requestAnimationFrame(() => {
        requestAnimationFrame(scrollNow);
      });
    } else {
      scrollNow();
    }
  }, []);

  const handleGoHome = useCallback(() => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
      setPathname('/');
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  const handleSelectCategory = useCallback(
    (categorySlug: string) => {
      setActiveFilter(categorySlug);
      scrollToSection('templates');
    },
    [scrollToSection],
  );

  const handleLivePreview = useCallback((templateSlug: string) => {
    const targetPath = `/preview/${encodeURIComponent(templateSlug)}`;
    window.history.pushState({}, '', targetPath);
    setPathname(targetPath);
    window.scrollTo({top: 0, behavior: 'auto'});
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#22121D]">
      <Navbar onNavigateSection={scrollToSection} onGoHome={handleGoHome} />

      {isConstructionRoute ? (
        <ConstructionPage templateSlug={previewSlug} onBackHome={handleGoHome} />
      ) : (
        <main>
          <HeroSection onExploreDesigns={() => scrollToSection('templates')} />
          <CategoriesSection onSelectCategory={handleSelectCategory} />
          <TemplatesSection
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            onLivePreview={handleLivePreview}
          />
          <PricingSection />
          <WhyChooseUsAndProcess />
          <ContactAndFooter onNavigateSection={scrollToSection} />
        </main>
      )}
    </div>
  );
}
