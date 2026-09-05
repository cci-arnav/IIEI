import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Outcomes() {
  const cards = [
    {
      title: 'Startup Founder / Co-Founder',
      desc: 'Build, capitalize, and scale your own enterprise with institutional incubation support.',
    },
    {
      title: 'Product & Growth Leader',
      desc: 'Drive high-velocity product development and user growth at scale-ups.',
    },
    {
      title: 'Venture Capital Analyst',
      desc: 'Evaluate early-stage startups and diligence investment theses for venture funds.',
    },
    {
      title: 'Corporate Innovation Strategist',
      desc: 'Lead new venture creation and digital business transformation for enterprise groups.',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-ink-950 border-b border-ink-900/10 dark:border-white/10 transition-colors">
      <div className="section-padding">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-ink-900/10 dark:border-white/10 pb-8">
            <div className="max-w-2xl">
              <span className="editorial-label">Cohort Outcomes</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 dark:text-white tracking-tight mt-3">
                What Graduates Build.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
                IIEI prepares students for high-velocity venture execution and operational leadership.
              </p>
            </div>
            <Link
              to="/outcomes"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-900 dark:text-white hover:text-ochre-600 dark:hover:text-ochre-400 transition-colors"
            >
              View All Outcomes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="h-full border border-ink-900/10 dark:border-white/10 bg-ivory-50 dark:bg-ink-900 p-8 flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl font-black text-ink-300 dark:text-ink-700 block mb-6">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
