import Reveal from '@/components/Reveal';
import FormLink from '@/components/FormLink';
import { siteSettings } from '@/data/content';
import { ShieldCheck, Award, Building2, ArrowUpRight } from 'lucide-react';

export default function InstitutionalIdentity() {
  return (
    <section className="py-14 lg:py-20 bg-ivory-200 dark:bg-ink-950 border-b border-ink-900/10 dark:border-white/10 transition-colors">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-4xl mx-auto border border-ink-900/15 dark:border-white/15 bg-white dark:bg-ink-900 p-8 sm:p-12 lg:p-16 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="editorial-label">Founding Governance</span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-ink-900 dark:text-white tracking-tight mt-2">
                  Initiated by Chamber of Commerce &amp; Industry of India
                </h3>
                <p className="mt-4 text-sm sm:text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                  {siteSettings.instituteName} was established under the stewardship of CCI India to transform management education in India into a founder-led, high-execution venture accelerator.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-ink-700 dark:text-ink-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-ochre-600 dark:text-ochre-400" />
                    <span>Institutional Credibility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-ochre-600 dark:text-ochre-400" />
                    <span>Pan-India Industry Network</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-ochre-600 dark:text-ochre-400" />
                    <span>Founder-Led Stewardship</span>
                  </div>
                </div>
              </div>

              {/* Real CCI India Logo Slot */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-ink-900/10 dark:border-white/10 pt-6 lg:pt-0 lg:pl-8 flex flex-col items-center justify-center text-center">
                <div className="p-5 border border-ink-900/10 dark:border-white/10 bg-ivory-50 dark:bg-ink-950/60 w-full max-w-[200px] flex items-center justify-center">
                  {/* Light mode: natural colour PNG */}
                  <img
                    src="/assets/branding/cci-logo.png"
                    alt="Chamber of Commerce & Industry of India (CCI India)"
                    className="max-h-14 w-auto object-contain dark:hidden"
                  />
                  {/* Dark mode: inverted to white */}
                  <img
                    src="/assets/branding/cci-logo.png"
                    alt="Chamber of Commerce & Industry of India (CCI India)"
                    className="max-h-14 w-auto object-contain hidden dark:block"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-ink-400 mt-3">
                  Initiating Body · CCI India
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
