import {useState} from 'react';
import {Menu, MessageCircle, X} from 'lucide-react';
import {BUSINESS_NAME, getWhatsAppUrl} from '../data/invitations';

interface NavbarProps {
  onNavigateSection: (sectionId: string) => void;
  onGoHome: () => void;
}

const NAV_ITEMS = [
  {label: 'Home', id: 'home'},
  {label: 'Categories', id: 'categories'},
  {label: 'Our Templates', id: 'templates'},
  {label: 'Pricing', id: 'pricing'},
  {label: 'Contact Us', id: 'contact'},
];

export function Navbar({onNavigateSection, onGoHome}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    setMobileOpen(false);
    onNavigateSection(id);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#3B1230]/10 bg-[#FAF7F2]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8 lg:px-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            setMobileOpen(false);
            onGoHome();
          }}
          className="font-display text-xl font-semibold tracking-tight text-[#3B1230] whitespace-nowrap shrink-0 sm:text-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B1230]"
        >
          {BUSINESS_NAME}
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.id);
              }}
              className="relative py-1 text-sm font-medium text-[#4A2E41] transition-colors duration-150 hover:text-[#3B1230] whitespace-nowrap shrink-0 after:absolute after:inset-x-0 after:bottom-0 after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-[#C59B5F] after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B1230]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary WhatsApp CTA + mobile toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#3B1230] px-4 py-2 text-xs font-semibold text-[#FAF7F2] shadow-sm transition-all duration-150 hover:bg-[#521B44] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B1230]"
          >
            <MessageCircle className="h-3.5 w-3.5 text-[#D6B480]" aria-hidden="true" />
            <span>Chat With Us</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#3B1230]/15 text-[#3B1230] transition-colors hover:bg-[#3B1230]/5 lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B1230]"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="border-t border-[#3B1230]/10 bg-[#FAF7F2] px-4 pb-5 pt-3 lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-[#3B1230] transition-colors hover:bg-[#3B1230]/5"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-[#3B1230]/10">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#3B1230] px-4 py-2.5 text-sm font-semibold text-[#FAF7F2] transition-colors hover:bg-[#521B44]"
              >
                <MessageCircle className="h-4 w-4 text-[#D6B480]" aria-hidden="true" />
                <span>Chat With Us</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
