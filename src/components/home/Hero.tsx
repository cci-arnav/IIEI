import { Link } from 'react-router-dom';
import { heroStatCards, siteSettings } from '@/data/content';
import AnimatedCounter from '@/components/AnimatedCounter';
import FormLink from '@/components/FormLink';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-ink-950 text-white pt-24 pb-12 lg:pt-32 lg:pb-16 border-b border-white/10 overflow-hidden">
      {/* Subtle architectural background texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative section-padding my-auto w-full">
        {/* Institutional Accreditation / Supporting Tag */}
        <div className="inline-flex items-center gap-3 border border-white/15 px-3.5 py-1.5 bg-white/5 mb-8">
          <span className="w-2 h-2 bg-ochre-400" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-200">
            Initiated by {siteSettings.initiatedBy} (CCI India)
          </span>
        </div>

        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bold Typography & Manifesto */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-[clamp(2.8rem,6.5vw,5.5rem)] font-black leading-[1.02] tracking-[-0.035em] text-white">
              LEARN BY
              <br />
              <span className="text-ochre-400 underline decoration-ochre-500/40 decoration-4 underline-offset-8">
                DOING.
              </span>
            </h1>

            <p className="mt-8 max-w-xl font-display text-lg sm:text-xl text-ink-200 font-medium leading-relaxed">
              An entrepreneurship and innovation education built around founders, real businesses, industry exposure, and relentless execution.
            </p>

            <p className="mt-4 max-w-lg text-sm sm:text-base text-ink-400 leading-relaxed">
              Two immersive tracks: Undergraduate (3 Years · ₹25 Lakh) and Postgraduate (2 Years · ₹30 Lakh) designed to build scalable enterprises.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#programs"
                className="btn-primary px-7 py-4 bg-white text-ink-950 hover:bg-ochre-400 hover:text-ink-950 text-xs font-bold uppercase tracking-[0.14em] transition-colors"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <FormLink
                type="enquiry"
                icon="external"
                className="btn-primary px-7 py-4 border border-white/25 text-white hover:border-white hover:bg-white/10 text-xs font-bold uppercase tracking-[0.14em] transition-colors"
              >
                Enquire
              </FormLink>

              <FormLink
                type="apply"
                className="btn-primary px-7 py-4 bg-ochre-500 hover:bg-ochre-400 text-ink-950 text-xs font-bold uppercase tracking-[0.14em] transition-colors"
              >
                Apply Now
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </FormLink>
            </div>
          </div>

          {/* Right Column: Large Editorial Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-white/15 bg-ink-900 overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full relative">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Students and founders collaborating on real startup ventures at IIEI"
                  className="w-full h-full object-cover object-center filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />

                {/* Editorial Caption Box */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 border-t border-white/15 bg-ink-950/90 backdrop-blur-sm">
                  <span className="editorial-label text-ochre-400 text-[10px]">
                    Institutional Foundation
                  </span>
                  <p className="font-display font-bold text-white text-lg mt-1 leading-snug">
                    Where ideas meet venture capital and operator discipline.
                  </p>
                  <p className="text-xs text-ink-300 mt-1">
                    250+ active founders mentor each cohort from day zero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Statistics Band */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {heroStatCards.map((stat, i) => {
            const numeric = parseInt(stat.value.replace(/[^0-9]/g, ''));
            const hasPlus = stat.value.includes('+');
            return (
              <div key={i} className="border-l border-white/15 pl-4 sm:pl-5 first:border-l-0 lg:first:border-l">
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                  {numeric > 0 ? (
                    <AnimatedCounter value={numeric} suffix={hasPlus ? '+' : ''} />
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-ochre-400 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-ink-400 mt-0.5 leading-snug">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
