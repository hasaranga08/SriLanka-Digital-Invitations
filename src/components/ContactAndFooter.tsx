import {MessageCircle, Phone} from 'lucide-react';
import {
  BUSINESS_NAME,
  WHATSAPP_NUMBER_DISPLAY,
  getWhatsAppUrl,
} from '../data/invitations';

interface ContactAndFooterProps {
  onNavigateSection: (sectionId: string) => void;
}

const FOOTER_LINKS = [
  {label: 'Home', id: 'home'},
  {label: 'Categories', id: 'categories'},
  {label: 'Templates', id: 'templates'},
  {label: 'Pricing', id: 'pricing'},
  {label: 'Contact Us', id: 'contact'},
];

export function ContactAndFooter({onNavigateSection}: ContactAndFooterProps) {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="border-t border-[#3B1230]/10 bg-[#3B1230] py-16 text-[#FAF7F2] sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#D6B480]">
            Start Your Order
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Let&apos;s Create Something Beautiful Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#EFE6EC] sm:text-base">
            Planning a wedding, birthday, or another special occasion? Get in touch with us and
            let&apos;s create a beautiful digital invitation for your event.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-lg bg-[#C59B5F] px-7 py-3.5 text-sm font-semibold text-[#24091D] shadow-md transition-all duration-150 hover:bg-[#D6B480] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6B480]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              <span>Chat With Us on WhatsApp</span>
            </a>
          </div>

          <div className="mx-auto mt-10 inline-flex flex-col items-center gap-2 rounded-xl border border-[#FAF7F2]/15 bg-[#24091D]/45 px-7 py-5 sm:flex-row sm:gap-6">
            <span className="font-display text-lg font-semibold text-white">
              {BUSINESS_NAME}
            </span>
            <span aria-hidden="true" className="hidden text-[#C59B5F] sm:inline">
              ·
            </span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#D6B480] transition-colors hover:text-white tabular-nums"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>WhatsApp: {WHATSAPP_NUMBER_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#FAF7F2]/10 bg-[#24091D] py-12 text-[#E5D9E1]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="font-display text-2xl font-semibold text-white">
                {BUSINESS_NAME}
              </p>
              <p className="mt-1.5 text-sm text-[#D6B480]">
                Making your special moments even more memorable.
              </p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
            >
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection(link.id);
                  }}
                  className="text-[#E5D9E1] transition-colors hover:text-[#D6B480] whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-[#FAF7F2]/10 pt-6 text-xs text-[#C8B4C2] sm:flex-row sm:items-center">
            <p>© 2026 {BUSINESS_NAME}. All Rights Reserved.</p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#D6B480] transition-colors hover:text-white tabular-nums"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              <span>WhatsApp: {WHATSAPP_NUMBER_DISPLAY}</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
