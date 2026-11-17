import {MessageCircle} from 'lucide-react';
import {PRICING_PACKAGES, getPackageWhatsAppUrl} from '../data/invitations';

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="border-t border-[#3B1230]/8 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#A67C42]">
            Packages &amp; Rates
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#24091D] text-balance sm:text-4xl">
            Simple &amp; Affordable Pricing
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#5E4354] sm:text-base">
            Beautiful digital invitations at prices that suit your celebration.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {PRICING_PACKAGES.map((pkg) => {
            const isFeatured = Boolean(pkg.featured);

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 transition-transform duration-200 hover:-translate-y-1 sm:p-8 ${
                  isFeatured
                    ? 'border border-[#C59B5F] bg-[#3B1230] text-[#FAF7F2] shadow-xl md:-my-2'
                    : 'border border-[#3B1230]/12 bg-[#FAF7F2] text-[#24091D]'
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3
                      className={`font-display text-2xl font-semibold ${
                        isFeatured ? 'text-[#FAF7F2]' : 'text-[#24091D]'
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    {isFeatured && (
                      <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#D6B480] whitespace-nowrap shrink-0">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <div
                    className={`mt-5 border-b pb-5 ${
                      isFeatured ? 'border-[#FAF7F2]/15' : 'border-[#3B1230]/10'
                    }`}
                  >
                    <p
                      className={`font-display text-4xl font-semibold tracking-tight tabular-nums ${
                        isFeatured ? 'text-[#D6B480]' : 'text-[#3B1230]'
                      }`}
                    >
                      {pkg.price}
                    </p>
                  </div>

                  <p
                    className={`mt-5 text-sm leading-relaxed ${
                      isFeatured ? 'text-[#EFE6EC]' : 'text-[#5E4354]'
                    }`}
                  >
                    {pkg.description}
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href={getPackageWhatsAppUrl(pkg.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-150 active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      isFeatured
                        ? 'bg-[#C59B5F] text-[#24091D] hover:bg-[#D6B480] focus-visible:outline-[#D6B480]'
                        : 'bg-[#3B1230] text-[#FAF7F2] hover:bg-[#521B44] focus-visible:outline-[#3B1230]'
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Get This Package</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
