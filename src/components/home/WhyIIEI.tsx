import {
  Users,
  Rocket,
  Hammer,
  Building2,
  Network,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import { whyIIEICards } from '@/data/content';
import Reveal from '@/components/Reveal';

const iconMap: Record<string, LucideIcon> = {
  Users,
  Rocket,
  Hammer,
  Building2,
  Network,
  TrendingUp,
};

export default function WhyIIEI() {
  return (
    <section id="why-iiei" className="py-24 lg:py-32 bg-white">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-bold uppercase tracking-wider text-electric-500 mb-4">
              Why IIEI
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
              Built different.
              <br />
              <span className="text-gradient-dark">On purpose.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              Six reasons IIEI is not like any other institution you've seen.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyIIEICards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <Reveal key={i} delay={i * 80}>
                <div className="group h-full p-8 rounded-3xl bg-ink-50 hover:bg-white border border-transparent hover:border-ink-200 hover:shadow-xl hover:shadow-ink-900/5 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{card.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
