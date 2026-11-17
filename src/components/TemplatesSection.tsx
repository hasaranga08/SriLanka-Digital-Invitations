import {Briefcase, Cake, Crown, Eye, Gem, Heart} from 'lucide-react';
import {TEMPLATES} from '../data/invitations';
import {IPhoneMockup} from './IPhoneMockup';
import {ResilientImage} from './ResilientImage';

interface TemplatesSectionProps {
  activeFilter: string;
  onFilterChange: (categorySlug: string) => void;
  onLivePreview: (templateSlug: string) => void;
}

const FILTER_TABS = [
  {slug: 'all', label: 'All Designs'},
  {slug: 'wedding', label: 'Wedding'},
  {slug: 'engagement', label: 'Engagement'},
  {slug: 'birthday', label: 'Birthday'},
  {slug: 'bride-to-be', label: 'Bride-to-Be'},
  {slug: 'corporate', label: 'Corporate'},
];

function CategoryIcon({slug}: {slug: string}) {
  const cls = 'h-3.5 w-3.5 text-[#A67C42] shrink-0';
  switch (slug) {
    case 'wedding':
      return <Heart className={cls} aria-hidden="true" />;
    case 'engagement':
      return <Gem className={cls} aria-hidden="true" />;
    case 'birthday':
      return <Cake className={cls} aria-hidden="true" />;
    case 'bride-to-be':
      return <Crown className={cls} aria-hidden="true" />;
    case 'corporate':
      return <Briefcase className={cls} aria-hidden="true" />;
    default:
      return <Heart className={cls} aria-hidden="true" />;
  }
}

export function TemplatesSection({
  activeFilter,
  onFilterChange,
  onLivePreview,
}: TemplatesSectionProps) {
  const filtered =
    activeFilter === 'all'
      ? TEMPLATES
      : TEMPLATES.filter((t) => t.categorySlug === activeFilter);
  const visibleTemplates = filtered.length > 0 ? filtered : TEMPLATES;

  return (
    <section
      id="templates"
      className="border-t border-[#3B1230]/8 bg-gradient-to-b from-[#FDF7F9] via-[#FAF5F7] to-[#FAF7F2] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#A67C42]">
            Template Gallery
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#24091D] text-balance sm:text-4xl">
            Explore Our Beautiful Designs
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#5E4354] sm:text-base">
            Discover our collection of elegant digital invitation designs, created to make your
            special occasion even more memorable.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex justify-start sm:justify-center">
          <div
            role="tablist"
            aria-label="Filter invitation templates by category"
            className="no-scrollbar flex max-w-full items-center gap-1.5 overflow-x-auto rounded-xl border border-[#3B1230]/10 bg-[#F4E9ED]/80 p-1.5"
          >
            {FILTER_TABS.map((tab) => {
              const isActive =
                activeFilter === tab.slug ||
                (filtered.length === 0 && tab.slug === 'all');
              return (
                <button
                  key={tab.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onFilterChange(tab.slug)}
                  className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B1230] ${
                    isActive
                      ? 'bg-[#3B1230] text-[#FAF7F2] shadow-sm'
                      : 'text-[#4E3546] hover:bg-white/75 hover:text-[#24091D]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 8-Template Dual Showcase Grid: 4 per row on desktop (2 rows), phone on left + full invitation on right */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {visibleTemplates.map((template) => (
            <article
              key={template.id}
              className="group flex flex-col justify-between rounded-2xl border border-[#EBD5DD] bg-[#FFF9FB] p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#C59B5F]/70 hover:shadow-lg"
            >
              <div>
                {/* Dual Visual Stage: Smartphone Preview (Left) + Larger Full Invitation Preview (Right) */}
                <div className="flex items-end justify-center gap-3 rounded-xl border border-[#F0DCE3] bg-gradient-to-br from-[#FBF0F4] via-[#F7EBF0] to-[#F3E5EC] p-3.5">
                  {/* A. Realistic iPhone Pro Max Mockup (Left) */}
                  <div className="w-[39%] shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                    <IPhoneMockup
                      src={template.image}
                      alt={`${template.name} mobile invitation preview`}
                      fallbackTitle={template.name}
                      screenTone={template.screenTone}
                      size="compact"
                    />
                  </div>

                  {/* B. Larger Vertical Full Invitation Preview (Right) */}
                  <div className="w-[57%] flex-1 overflow-hidden rounded-lg border border-[#3B1230]/12 bg-white shadow-md transition-transform duration-300 ease-out group-hover:-translate-y-1">
                    <ResilientImage
                      src={template.image}
                      alt={`${template.name} — ${template.categoryLabel} full invitation design`}
                      fallbackTitle={template.name}
                      className="aspect-[9/16] w-full object-cover"
                    />
                  </div>
                </div>

                {/* Template Information */}
                <div className="mt-4">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#A67C42]">
                    <CategoryIcon slug={template.categorySlug} />
                    <span>{template.categoryLabel}</span>
                  </div>

                  <h3 className="mt-1.5 font-display text-2xl font-semibold leading-snug text-[#24091D]">
                    {template.name}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-[#5E4354]">
                    {template.shortDescription}
                  </p>
                </div>
              </div>

              {/* Starting Price + Live Preview CTA */}
              <div className="mt-4 border-t border-[#3B1230]/8 pt-3.5">
                <div className="mb-3 flex items-center justify-between text-xs">
                  <span className="text-[#6B4F62]">Starting at</span>
                  <span className="font-semibold text-[#3B1230] tabular-nums">
                    {template.startingPrice}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onLivePreview(template.slug)}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-[#3B1230]/20 bg-white px-4 py-2.5 text-xs font-semibold text-[#3B1230] transition-colors duration-150 hover:border-[#3B1230] hover:bg-[#3B1230] hover:text-[#FAF7F2] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B1230]"
                >
                  <Eye className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>Live Preview</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
