import {ArrowRight} from 'lucide-react';
import {CATEGORIES} from '../data/invitations';
import {IPhoneMockup} from './IPhoneMockup';

interface CategoriesSectionProps {
  onSelectCategory: (categorySlug: string) => void;
}

export function CategoriesSection({onSelectCategory}: CategoriesSectionProps) {
  return (
    <section
      id="categories"
      className="border-t border-[#3B1230]/8 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#A67C42]">
            Occasions We Celebrate
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#24091D] text-balance sm:text-4xl">
            Invitations for Every Special Occasion
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#5E4354] sm:text-base">
            Select a category to browse bespoke mobile designs tailored for your celebration.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.slug)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#3B1230]/10 bg-[#FAF7F2] text-left transition-all duration-200 hover:-translate-y-1 hover:border-[#C59B5F]/60 hover:shadow-md cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B1230]"
            >
              <div className="flex w-full items-center justify-center bg-[#F3EDE3] px-4 py-5 sm:px-6 sm:py-7">
                <div className="w-[108px] transition-transform duration-300 ease-out group-hover:-translate-y-1 sm:w-[132px]">
                  <IPhoneMockup
                    src={category.image}
                    alt={`${category.title} mobile preview`}
                    fallbackTitle={category.title}
                    screenTone={category.screenTone}
                    size="compact"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-[#24091D] transition-colors group-hover:text-[#3B1230] sm:text-xl">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#5E4354] sm:text-sm">
                    {category.subtitle}
                  </p>
                </div>

                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B1230]">
                  <span>View Designs</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 text-[#A67C42] transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
