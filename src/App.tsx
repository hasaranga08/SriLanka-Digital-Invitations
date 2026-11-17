import {useCallback, useEffect, useState} from 'react';
import {CategoriesSection} from './components/CategoriesSection';
import {ConstructionPage} from './components/ConstructionPage';
import {ContactAndFooter} from './components/ContactAndFooter';
import {HeroSection} from './components/HeroSection';
import {Navbar} from './components/Navbar';
import {PricingSection} from './components/PricingSection';
import {TemplatesSection} from './components/TemplatesSection';
import {WhyChooseUsAndProcess} from './components/WhyChooseUsAndProcess';

const BASE_URL = import.meta.env.BASE_URL || '/';
const NORMALIZED_BASE = BASE_URL.endsWith('/') ? BASE_URL : `${BASE_URL}/`;
const BASE_PREFIX = NORMALIZED_BASE.slice(0, -1);

function stripBase(pathname: string): string {
  if (BASE_PREFIX && pathname.startsWith(BASE_PREFIX)) {
    const rest = pathname.slice(BASE_PREFIX.length);
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  return pathname;
}

function withRouteBase(routePath: string): string {
  const cleanRoute = routePath.startsWith('/') ? routePath : `/${routePath}`;
  return `${BASE_PREFIX}${cleanRoute}` || '/';
}

function parsePreviewSlug(pathname: string): string | null {
  const relativePath = stripBase(pathname);
  const normalized = relativePath.replace(/\/+$/, '');
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
      const homePath = withRouteBase('/');
      window.history.pushState({}, '', homePath);
      setPathname(homePath);
      requestAnimationFrame(() => {
        requestAnimationFrame(scrollNow);
      });
    } else {
      scrollNow();
    }
  }, []);

  const handleGoHome = useCallback(() => {
    const homePath = withRouteBase('/');
    if (window.location.pathname !== homePath) {
      window.history.pushState({}, '', homePath);
      setPathname(homePath);
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
    const targetPath = withRouteBase(`/preview/${encodeURIComponent(templateSlug)}`);
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
