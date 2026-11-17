import {ArrowDown, MessageCircle} from 'lucide-react';
import {getWhatsAppUrl} from '../data/invitations';
import {IPhoneMockup} from './IPhoneMockup';

interface HeroSectionProps {
  onExploreDesigns: () => void;
}

export function HeroSection({onExploreDesigns}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FAF7F2] pb-16 pt-10 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-20"
    >
      {/* Subtle warm radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-[#C59B5F]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-[#3B1230]/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Left: Editorial Copy & Dual CTAs */}
        <div className="lg:col-span-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#A67C42]">
            Personalised Mobile Stationery · Sri Lanka
          </p>

          <h1
            className="mt-4 font-display font-semibold tracking-tight text-[#24091D] text-balance"
            style={{fontSize: 'clamp(2.35rem, 4.3vw, 3.75rem)', lineHeight: 1.08}}
          >
            Beautiful Moments Deserve Beautiful Invitations
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4E3546] sm:text-lg">
            Make every celebration unforgettable with personalised digital invitations. Elegant
            designs, beautiful animations, and invitations made especially for your special moments.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onExploreDesigns}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#3B1230] px-6 py-3 text-sm font-semibold text-[#FAF7F2] shadow-sm transition-all duration-150 hover:bg-[#521B44] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B1230]"
            >
              <span>Explore Our Designs</span>
              <ArrowDown className="h-4 w-4 text-[#D6B480]" aria-hidden="true" />
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#3B1230]/25 bg-white px-6 py-3 text-sm font-semibold text-[#3B1230] transition-all duration-150 hover:border-[#C59B5F] hover:bg-[#F4EAD9]/40 active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B1230]"
            >
              <MessageCircle className="h-4 w-4 text-[#A67C42]" aria-hidden="true" />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#3B1230]/10 pt-5 text-xs font-medium text-[#5E4354]">
            <span>WhatsApp &amp; Social Ready</span>
            <span aria-hidden="true" className="text-[#C59B5F]">
              ·
            </span>
            <span>Tailored to Your Celebration</span>
            <span aria-hidden="true" className="text-[#C59B5F]">
              ·
            </span>
            <span>Packages from LKR 2,500</span>
          </div>
        </div>

        {/* Right: Multi-Smartphone iPhone Pro Max Composition */}
        <div className="lg:col-span-6">
          <div className="relative mx-auto flex min-h-[390px] max-w-[500px] items-center justify-center sm:min-h-[470px]">
            {/* Left Tilted Phone: Traditional Kandyan Wedding */}
            <div className="absolute left-0 top-10 z-10 w-[40%] max-w-[180px] -rotate-6 transition-transform duration-300 ease-out hover:-translate-y-2 hover:-rotate-3 sm:left-3 sm:top-12">
              <IPhoneMockup
                src="/src/assets/images/tpl_kandyan_wedding_1794909134410.jpg"
                alt="Traditional Sri Lankan Kandyan wedding digital invitation on smartphone"
                fallbackTitle="Kandyan Royal Heritage"
                screenTone="dark"
                size="hero"
                loading="eager"
              />
            </div>

            {/* Right Tilted Phone: Floral Birthday */}
            <div className="absolute right-0 top-12 z-10 w-[40%] max-w-[180px] rotate-6 transition-transform duration-300 ease-out hover:-translate-y-2 hover:rotate-3 sm:right-3 sm:top-14">
              <IPhoneMockup
                src="/src/assets/images/tpl_floral_birthday_1794909137351.jpg"
                alt="Floral birthday digital invitation on smartphone"
                fallbackTitle="Gardenia Soirée"
                screenTone="ivory"
                size="hero"
                loading="eager"
              />
            </div>

            {/* Center Primary Phone: Modern Luxury Wedding */}
            <div className="relative z-20 w-[47%] max-w-[215px] transition-transform duration-300 ease-out hover:-translate-y-2">
              <IPhoneMockup
                src="/src/assets/images/tpl_luxury_wedding_1794909135084.jpg"
                alt="Modern luxury Sri Lankan wedding digital invitation displayed on iPhone Pro Max"
                fallbackTitle="Colombo Velvet & Orchid"
                screenTone="ivory"
                size="hero"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
