import { whyIIEICards } from '@/data/content';
import Reveal from '@/components/Reveal';
import { Users, Rocket, Hammer, Building2, TrendingUp, Network } from 'lucide-react';

const iconMap = {
  Users,
  Rocket,
  Hammer,
  Building2,
  TrendingUp,
  Network,
};

export default function WhyIIEI() {
  return (
    <section id="why-iiei" className="py-24 lg:py-32 bg-white dark:bg-ink-950 border-b border-ink-900/10 dark:border-white/10 transition-colors">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-3xl mb-16 border-b border-ink-900/10 dark:border-white/10 pb-8">
            <span className="editorial-label">Institutional Pillars</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 dark:text-white tracking-tight mt-3">
              Built Different.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
              Six structural commitments that distinguish IIEI from traditional business schools.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyIIEICards.map((card, i) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap] || Rocket;
            return (
              <Reveal key={i} delay={i * 70}>
                <div className="h-full p-8 border border-ink-900/10 dark:border-white/10 bg-ivory-50 dark:bg-ink-900 hover:border-ink-900 dark:hover:border-white transition-all duration-200">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 border border-ink-900/15 dark:border-white/15 bg-white dark:bg-ink-950 flex items-center justify-center text-ochre-600 dark:text-ochre-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-display text-2xl font-black text-ink-300 dark:text-ink-700">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
