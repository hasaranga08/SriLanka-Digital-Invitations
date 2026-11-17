import {ArrowLeft, MessageCircle} from 'lucide-react';
import {
  BUSINESS_NAME,
  TEMPLATES,
  UNDER_CONSTRUCTION_IMAGE,
  getWhatsAppUrl,
} from '../data/invitations';
import {ResilientImage} from './ResilientImage';

interface ConstructionPageProps {
  templateSlug?: string | null;
  onBackHome: () => void;
}

export function ConstructionPage({templateSlug, onBackHome}: ConstructionPageProps) {
  const selectedTemplate = templateSlug
    ? TEMPLATES.find((t) => t.slug === templateSlug)
    : undefined;

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-[#FAF7F2] px-4 py-12 sm:px-6 sm:py-16">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[#C59B5F]/45 bg-white p-6 text-center shadow-sm sm:p-10">
        <div className="mx-auto max-w-md overflow-hidden rounded-xl border border-[#3B1230]/10 bg-[#FAF7F2]">
          <ResilientImage
            src={UNDER_CONSTRUCTION_IMAGE}
            alt="Minimalist luxury illustration showing digital invitation stationery being crafted"
            loading="eager"
            fallbackTitle="Sri Lanka Digital Invitations Studio"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <p className="mt-7 text-xs font-semibold tracking-[0.18em] uppercase text-[#A67C42]">
          {BUSINESS_NAME}
          {selectedTemplate ? ` · ${selectedTemplate.name}` : ''}
        </p>

        <h1 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#3B1230] text-balance sm:text-3xl lg:text-4xl">
          THIS PAGE IS UNDER CONSTRUCTION. WE WILL BE BACK SOON!
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#5E4354] sm:text-base">
          {selectedTemplate
            ? `Interactive live previews for "${selectedTemplate.name}" are currently being prepared. Reach out to us on WhatsApp and our team will gladly share sample designs with you directly.`
            : 'Our interactive invitation previews are currently being prepared. Reach out to us on WhatsApp and our team will gladly share sample designs with you directly.'}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#3B1230] px-6 py-3 text-sm font-semibold text-[#FAF7F2] transition-colors duration-150 hover:bg-[#521B44] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B1230]"
          >
            <ArrowLeft className="h-4 w-4 text-[#D6B480]" aria-hidden="true" />
            <span>Back to Main Website</span>
          </button>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg border border-[#3B1230]/25 bg-[#FAF7F2] px-6 py-3 text-sm font-semibold text-[#3B1230] transition-colors duration-150 hover:border-[#C59B5F] hover:bg-[#F4EAD9]/50 active:scale-[0.98] whitespace-nowrap shrink-0 sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B1230]"
          >
            <MessageCircle className="h-4 w-4 text-[#A67C42]" aria-hidden="true" />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </main>
  );
}
