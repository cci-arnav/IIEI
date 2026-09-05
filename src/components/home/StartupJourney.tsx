import { startupJourney } from '@/data/content';
import Reveal from '@/components/Reveal';

export default function StartupJourney() {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-ink-950 border-b border-ink-900/10 dark:border-white/10 transition-colors">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-3xl mb-16 border-b border-ink-900/10 dark:border-white/10 pb-8">
            <span className="editorial-label">Venture Progression</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 dark:text-white tracking-tight mt-3">
              From Idea to Venture Scale
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
              The eight-stage experiential pathway embedded within IIEI's undergraduate and postgraduate degrees.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {startupJourney.map((stage, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="h-full border border-ink-900/10 dark:border-white/10 p-5 bg-ivory-50 dark:bg-ink-900 flex flex-col justify-between hover:border-ink-900 dark:hover:border-white transition-colors">
                <span className="font-display text-xl font-bold text-ink-300 dark:text-ink-700">
                  0{i + 1}
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-ink-900 dark:text-white mt-6">
                  {stage}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
