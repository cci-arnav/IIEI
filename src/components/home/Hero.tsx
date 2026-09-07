import { heroStatCards, siteSettings } from '@/data/content';
import AnimatedCounter from '@/components/AnimatedCounter';
import FormLink from '@/components/FormLink';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-ivory-100 dark:bg-[#080d1a] text-ink-900 dark:text-white transition-colors duration-300 overflow-hidden border-b border-ink-900/10 dark:border-white/10">
      {/* 
        EDITORIAL HERO CANVAS CONTAINER
        On Desktop (lg+): min-h-[720px] max-h-[860px], relative flex layout with absolute right-anchored photograph layer.
        On Mobile/Tablet: structured natural flow with text above and expansive photo layer below.
      */}
      <div className="relative w-full min-h-[640px] lg:min-h-[760px] xl:min-h-[820px] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-0">
        
        {/* 
          EDITORIAL PHOTOGRAPHY LAYER (Absolute on Desktop, block on Tablet/Mobile)
          Image: /assets/hero/iiei-hero.jpg
          Positioned to preserve collaborating people on the right and blend naturally into left negative space.
        */}
        <div 
          className="hidden lg:block absolute top-0 right-0 bottom-0 w-[58%] xl:w-[62%] 2xl:w-[65%] h-full pointer-events-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <img
            src="/assets/hero/iiei-hero.jpg"
            alt=""
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-[right_center] transition-all duration-700"
          />

          {/* LIGHT MODE VIGNETTE OVERLAY: Seamless gradient transition from ivory canvas to warm photo */}
          <div 
            className="absolute inset-0 dark:hidden"
            style={{
              background: `linear-gradient(90deg, #F8F6F0 0%, rgba(248, 246, 240, 0.98) 12%, rgba(248, 246, 240, 0.82) 26%, rgba(248, 246, 240, 0.40) 48%, rgba(248, 246, 240, 0) 70%)`
            }}
          />

          {/* DARK MODE VIGNETTE OVERLAY: Seamless gradient transition from ink navy to warm photo */}
          <div 
            className="absolute inset-0 hidden dark:block"
            style={{
              background: `linear-gradient(90deg, #080d1a 0%, rgba(8, 13, 26, 0.98) 12%, rgba(8, 13, 26, 0.85) 26%, rgba(8, 13, 26, 0.45) 48%, rgba(8, 13, 26, 0) 72%)`
            }}
          />

          {/* Subtle Bottom Shade to harmonize into stats border */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-28 dark:hidden"
            style={{
              background: `linear-gradient(to top, rgba(248, 246, 240, 0.8) 0%, rgba(248, 246, 240, 0) 100%)`
            }}
          />
          <div 
            className="absolute bottom-0 left-0 right-0 h-28 hidden dark:block"
            style={{
              background: `linear-gradient(to top, rgba(8, 13, 26, 0.85) 0%, rgba(8, 13, 26, 0) 100%)`
            }}
          />
        </div>

        {/* MAIN EDITORIAL CONTENT GRID */}
        <div className="relative z-10 section-padding my-auto w-full">
          <div className="max-w-[580px] xl:max-w-[640px] 2xl:max-w-[680px]">
            
            {/* EYEBROW: Pure typographic statement, no background pills */}
            <div className="mb-6 lg:mb-8 animate-fade-in">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-ochre-600 dark:text-ochre-400">
                FOUNDER-LED. INDUSTRY-CONNECTED. IMPACT-DRIVEN.
              </p>
            </div>

            {/* HEADLINE: Large Editorial Display */}
            <h1 className="font-display text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.25rem] font-black leading-[0.98] tracking-[-0.035em] text-ink-900 dark:text-white">
              Learn by
              <br />
              <span className="text-ochre-600 dark:text-ochre-400">
                Doing.
              </span>
            </h1>

            {/* SUPPORTING TEXT: Focused width for editorial readability */}
            <p className="mt-6 sm:mt-8 max-w-[480px] lg:max-w-[540px] text-base sm:text-lg lg:text-[1.05rem] text-ink-700 dark:text-ink-200 font-normal leading-relaxed">
              An entrepreneurship and innovation education built around real-world execution, founder-led learning, industry exposure and venture creation.
            </p>

            {/* CTA BUTTON CLUSTER */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#programs"
                className="btn-primary px-7 py-4 bg-ink-900 text-white hover:bg-ochre-600 hover:text-white dark:bg-white dark:text-ink-950 dark:hover:bg-ochre-400 dark:hover:text-ink-950 text-xs font-bold uppercase tracking-[0.14em] rounded-sm transition-all duration-200 shadow-sm"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4 ml-2.5" />
              </a>

              <FormLink
                type="enquiry"
                icon="external"
                className="btn-primary px-7 py-4 border border-ink-900/30 text-ink-900 hover:border-ink-900 hover:bg-ink-900/5 dark:border-white/30 dark:text-white dark:hover:border-white dark:hover:bg-white/10 text-xs font-bold uppercase tracking-[0.14em] rounded-sm transition-all duration-200"
              >
                Enquire Now
              </FormLink>
            </div>

            {/* Sub-text Micro-note */}
            <div className="mt-6 pt-5 border-t border-ink-900/10 dark:border-white/10 flex items-center gap-2.5 text-xs text-ink-500 dark:text-ink-400">
              <span className="w-1.5 h-1.5 rounded-full bg-ochre-500" />
              <span>Initiated under the stewardship of {siteSettings.initiatedBy} (CCI India)</span>
            </div>
          </div>
        </div>

        {/* 
          TABLET & MOBILE IMAGE PRESENTATION (Below Text on < lg screens)
          Preserves generous height, aspect ratio, people on the right, and editorial annotation.
        */}
        <div className="lg:hidden relative w-full mt-10 px-5 sm:px-8">
          <div className="relative w-full h-[380px] sm:h-[460px] overflow-hidden rounded-sm border border-ink-900/10 dark:border-white/10">
            <img
              src="/assets/hero/iiei-hero.jpg"
              alt="Students collaborating on an entrepreneurship project at IIEI"
              className="w-full h-full object-cover object-[right_center]"
            />
            {/* Soft vignette overlay */}
            <div 
              className="absolute inset-0 dark:hidden"
              style={{
                background: `linear-gradient(to top, rgba(248, 246, 240, 0.9) 0%, rgba(248, 246, 240, 0.2) 40%, transparent 80%)`
              }}
            />
            <div 
              className="absolute inset-0 hidden dark:block"
              style={{
                background: `linear-gradient(to top, rgba(8, 13, 26, 0.95) 0%, rgba(8, 13, 26, 0.3) 40%, transparent 80%)`
              }}
            />

            {/* Mobile / Tablet 250+ Founders Annotation */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-ink-900/90 dark:bg-ink-950/90 backdrop-blur-sm border border-white/15 p-3.5 sm:p-4 text-left max-w-[240px]">
              <div className="font-display text-2xl font-black text-white leading-none">
                250+
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-ochre-400 mt-1">
                Founders &amp; Co-Founders
              </div>
              <div className="text-[10.5px] text-ink-300 mt-0.5 leading-tight">
                In our active teaching ecosystem
              </div>
            </div>
          </div>
        </div>

        {/* 
          DESKTOP 250+ FOUNDERS EDITORIAL ANNOTATION (Placed over lower-right of image)
        */}
        <div className="hidden lg:block absolute bottom-28 xl:bottom-32 right-12 xl:right-16 z-20 pointer-events-none">
          <div className="bg-ink-900/90 dark:bg-ink-950/90 backdrop-blur-sm border border-white/15 p-4 xl:p-5 text-left max-w-[270px] shadow-xl">
            <div className="font-display text-3xl xl:text-4xl font-black text-white leading-none">
              250+
            </div>
            <div className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-ochre-400 mt-1.5">
              Founders &amp; Co-Founders
            </div>
            <div className="text-xs text-ink-300 mt-1 leading-snug">
              In our active teaching ecosystem
            </div>
          </div>
        </div>

        {/* 
          INSTITUTIONAL STATISTICS STRIP
          Annual-report editorial style with vertical dividers and clean typography.
        */}
        <div className="relative z-10 w-full mt-10 sm:mt-14 border-t border-ink-900/10 dark:border-white/10 bg-ivory-200/70 dark:bg-ink-950/80 backdrop-blur-md">
          <div className="section-padding py-6 sm:py-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
              {heroStatCards.map((stat, i) => {
                const numeric = parseInt(stat.value.replace(/[^0-9]/g, ''));
                const hasPlus = stat.value.includes('+');
                return (
                  <div 
                    key={i} 
                    className="border-l border-ink-900/15 dark:border-white/15 pl-4 sm:pl-5 first:border-l-0 lg:first:border-l"
                  >
                    <div className="font-display text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-black tracking-tight text-ink-900 dark:text-white">
                      {numeric > 0 ? (
                        <AnimatedCounter value={numeric} suffix={hasPlus ? '+' : ''} />
                      ) : (
                        stat.value
                      )}
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-ochre-600 dark:text-ochre-400 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-ink-600 dark:text-ink-400 mt-0.5 leading-snug">
                      {stat.sublabel}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

