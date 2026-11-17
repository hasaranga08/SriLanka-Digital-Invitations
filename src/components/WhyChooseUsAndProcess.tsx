import {Palette, Share2, Smartphone, Tag} from 'lucide-react';
import {HOW_IT_WORKS, WHY_CHOOSE_US, type WhyChooseUsItem} from '../data/invitations';

function BenefitIcon({icon}: {icon: WhyChooseUsItem['icon']}) {
  const iconClass = 'h-5 w-5 text-[#A67C42]';
  switch (icon) {
    case 'palette':
      return <Palette className={iconClass} aria-hidden="true" />;
    case 'smartphone':
      return <Smartphone className={iconClass} aria-hidden="true" />;
    case 'share':
      return <Share2 className={iconClass} aria-hidden="true" />;
    case 'tag':
      return <Tag className={iconClass} aria-hidden="true" />;
  }
}

export function WhyChooseUsAndProcess() {
  return (
    <>
      {/* Why Choose Us Section */}
      <section className="border-t border-[#3B1230]/8 bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#A67C42]">
              Crafted With Care
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#24091D] text-balance sm:text-4xl">
              Why Choose Sri Lanka Digital Invitations?
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-xl border border-[#3B1230]/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#C59B5F]/60 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#C59B5F]/30 bg-[#FAF7F2]">
                  <BenefitIcon icon={item.icon} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-[#24091D]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5E4354]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-t border-[#3B1230]/8 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#A67C42]">
              Simple Process
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#24091D] text-balance sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#5E4354] sm:text-base">
              From selecting your style to sharing with every guest in four easy steps.
            </p>
          </div>

          <div className="relative mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
            {/* Subtle horizontal connector line on desktop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-10 right-10 top-6 hidden h-px bg-[#C59B5F]/35 lg:block"
            />

            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-row items-start gap-4 rounded-xl border border-[#3B1230]/10 bg-[#FAF7F2] p-6 lg:flex-col lg:gap-5"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C59B5F] bg-white font-display text-xl font-semibold text-[#3B1230] tabular-nums">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#24091D]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5E4354]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
