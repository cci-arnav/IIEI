import { ArrowUpRight } from 'lucide-react';
import { whyIIEICards } from '@/data/content';
import Reveal from '@/components/Reveal';

export default function WhyIIEI() {
  return (
    <section id="why-iiei" className="py-24 lg:py-32 bg-white">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <p className="editorial-label mb-5">
              Why IIEI
            </p>
            <h2 className="font-display text-4xl font-extrabold text-ink-900 tracking-tight sm:text-5xl">
              Built different.
            </h2>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              Six reasons IIEI is not like any other institution you've seen.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
          {whyIIEICards.map((card, i) => {
            return (
              <Reveal key={i} delay={i * 80}>
                <div className="group editorial-rule flex h-full gap-5 p-6 pl-0 pr-8 transition-colors hover:bg-ink-50 md:pl-0 lg:pr-10">
                  <span className="font-display text-2xl font-bold text-ink-300 group-hover:text-electric-600">{String(i + 1).padStart(2, '0')}</span>
                  <div><h3 className="font-display text-xl font-bold text-ink-900">{card.title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-500">{card.description}</p></div>
                  <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-ink-300 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
