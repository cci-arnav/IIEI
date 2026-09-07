import { heroStatCards, siteSettings } from '@/data/content';
import AnimatedCounter from '@/components/AnimatedCounter';
import FormLink from '@/components/FormLink';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-ivory-100 dark:bg-[#080d1a] text-ink-900 dark:text-white transition-colors duration-300 border-b border-ink-900/10 dark:border-white/10 overflow-hidden">
      <div className="relative w-full min-h-[620px] lg:min-h-[720px] xl:min-h-[780px] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-0">

        {/* ── EDITORIAL PHOTOGRAPHY LAYER (Desktop) ─────────────── */}
        <div
          className="hidden lg:block absolute top-0 right-0 bottom-0 w-[56%] xl:w-[60%] 2xl:w-[62%] h-full pointer-events-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <img
            src="/assets/hero/iiei-hero.jpg"
            alt=""
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-[right_center]"
          />

          {/* Light mode left vignette */}
          <div
            className="absolute inset-0 dark:hidden"
            style={{
              background:
                'linear-gradient(90deg, #F8F6F0 0%, rgba(248,246,240,0.97) 10%, rgba(248,246,240,0.80) 25%, rgba(248,246,240,0.35) 50%, rgba(248,246,240,0) 72%)',
            }}
          />
          {/* Dark mode left vignette */}
          <div
            className="absolute inset-0 hidden dark:block"
            style={{
              background:
                'linear-gradient(90deg, #080d1a 0%, rgba(8,13,26,0.97) 10%, rgba(8,13,26,0.82) 25%, rgba(8,13,26,0.40) 50%, rgba(8,13,26,0) 72%)',
            }}
          />
          {/* Bottom shade — harmonises into stats strip */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 dark:hidden"
            style={{ background: 'linear-gradient(to top, rgba(248,246,240,0.75) 0%, transparent 100%)' }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-24 hidden dark:block"
            style={{ background: 'linear-gradient(to top, rgba(8,13,26,0.80) 0%, transparent 100%)' }}
          />
        </div>

        {/* ── MAIN EDITORIAL CONTENT ────────────────────────────── */}
        <div className="relative z-10 section-padding my-auto w-full">
          <div className="max-w-[560px] xl:max-w-[620px] 2xl:max-w-[660px]">

            {/* Eyebrow */}
            <div className="mb-5 lg:mb-7 animate-fade-in">
              <p className="text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.24em] text-ochre-600 dark:text-ochre-400">
                FOUNDER-LED. INDUSTRY-CONNECTED. IMPACT-DRIVEN.
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-display text-[3rem] sm:text-[4rem] md:text-[4.75rem] lg:text-[5.25rem] xl:text-[6rem] font-black leading-[0.96] tracking-[-0.035em] text-ink-900 dark:text-white">
              Learn by
              <br />
              <span className="text-ochre-600 dark:text-ochre-400">Doing.</span>
            </h1>

            {/* Supporting text */}
            <p className="mt-5 sm:mt-7 max-w-[460px] lg:max-w-[500px] text-base sm:text-[1.05rem] text-ink-700 dark:text-ink-200 font-normal leading-relaxed">
              An entrepreneurship and innovation education built around real-world execution, founder-led learning, industry exposure and venture creation.
            </p>

            {/* CTAs */}
            <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#programs"
                className="btn-primary whitespace-nowrap inline-flex items-center gap-2.5 px-6 py-3.5 bg-ink-900 text-white hover:bg-ochre-600 hover:text-white dark:bg-white dark:text-ink-950 dark:hover:bg-ochre-400 dark:hover:text-ink-950 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-200 shadow-sm"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <FormLink
                type="enquiry"
                icon="external"
                className="btn-primary whitespace-nowrap inline-flex items-center gap-2 px-6 py-3.5 border border-ink-900/30 text-ink-900 hover:border-ink-900 hover:bg-ink-900/5 dark:border-white/30 dark:text-white dark:hover:border-white dark:hover:bg-white/10 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-200"
              >
                Enquire Now
              </FormLink>
            </div>

            {/* Institutional note */}
            <div className="mt-6 pt-5 border-t border-ink-900/10 dark:border-white/10 flex items-center gap-2.5 text-xs text-ink-500 dark:text-ink-400">
              <span className="w-1.5 h-1.5 rounded-full bg-ochre-500 shrink-0" />
              <span>Initiated under the stewardship of {siteSettings.initiatedBy} (CCI India)</span>
            </div>
          </div>
        </div>

        {/* ── MOBILE / TABLET IMAGE (below text, < lg) ─────────── */}
        <div className="lg:hidden relative w-full mt-8 px-5 sm:px-8">
          <div className="relative w-full h-[340px] sm:h-[420px] overflow-hidden border border-ink-900/10 dark:border-white/10">
            <img
              src="/assets/hero/iiei-hero.jpg"
              alt="Students collaborating on an entrepreneurship project at IIEI"
              className="w-full h-full object-cover object-[right_center]"
            />
            <div
              className="absolute inset-0 dark:hidden"
              style={{ background: 'linear-gradient(to top, rgba(248,246,240,0.85) 0%, rgba(248,246,240,0.15) 45%, transparent 80%)' }}
            />
            <div
              className="absolute inset-0 hidden dark:block"
              style={{ background: 'linear-gradient(to top, rgba(8,13,26,0.90) 0%, rgba(8,13,26,0.25) 45%, transparent 80%)' }}
            />
          </div>
        </div>

        {/* ── STATS STRIP ──────────────────────────────────────── */}
        <div className="relative z-10 w-full mt-8 sm:mt-12 border-t border-ink-900/10 dark:border-white/10 bg-ivory-200/60 dark:bg-ink-950/80 backdrop-blur-md">
          <div className="section-padding py-5 sm:py-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
              {heroStatCards.map((stat, i) => {
                const numeric = parseInt(stat.value.replace(/[^0-9]/g, ''));
                const hasPlus = stat.value.includes('+');
                return (
                  <div
                    key={i}
                    className="border-l border-ink-900/15 dark:border-white/15 pl-4 first:border-l-0 lg:first:border-l"
                  >
                    <div className="font-display text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight text-ink-900 dark:text-white leading-none">
                      {numeric > 0 ? (
                        <AnimatedCounter value={numeric} suffix={hasPlus ? '+' : ''} />
                      ) : (
                        stat.value
                      )}
                    </div>
                    <div className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-ochre-600 dark:text-ochre-400 mt-1.5">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-ink-600 dark:text-ink-400 mt-0.5 leading-snug">
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
