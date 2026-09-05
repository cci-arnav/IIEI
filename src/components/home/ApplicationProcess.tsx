import { applicationSteps } from '@/data/content';
import Reveal from '@/components/Reveal';
import FormLink from '@/components/FormLink';
import { ArrowUpRight } from 'lucide-react';

export default function ApplicationProcess() {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-ink-950 border-b border-ink-900/10 dark:border-white/10 transition-colors">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-3xl mb-16 border-b border-ink-900/10 dark:border-white/10 pb-8">
            <span className="editorial-label">Admissions Process</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 dark:text-white tracking-tight mt-3">
              Five Steps to Join IIEI
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
              Transparent, merit-based selection evaluating entrepreneurial aptitude, ambition, and execution capability.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {applicationSteps.map((step, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="h-full border border-ink-900/10 dark:border-white/10 bg-ivory-50 dark:bg-ink-900 p-6 flex flex-col justify-between">
                <div>
                  <span className="font-display text-2xl font-black text-ochre-600 dark:text-ochre-400 block mb-4">
                    {step.number}
                  </span>
                  <h4 className="font-display text-sm sm:text-base font-bold text-ink-900 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between p-8 border border-ink-900/10 dark:border-white/10 bg-ivory-100 dark:bg-ink-900 gap-6">
            <div>
              <h4 className="font-display text-lg font-bold text-ink-900 dark:text-white">
                Ready to begin your application?
              </h4>
              <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 mt-1">
                Applications for the launch cohort are currently being accepted through the official form.
              </p>
            </div>
            <FormLink
              type="apply"
              className="btn-primary shrink-0 px-8 py-4 bg-ink-900 text-white dark:bg-white dark:text-ink-950 text-xs font-bold uppercase tracking-wider hover:bg-ochre-600 dark:hover:bg-ochre-400"
            >
              Start Application
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </FormLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
