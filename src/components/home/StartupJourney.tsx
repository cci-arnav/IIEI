import { startupJourney } from '@/data/content';
import Reveal from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';

export default function StartupJourney() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-bold uppercase tracking-wider text-electric-500 mb-4">
              The Startup Journey
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
              From idea to growth.
              <br />
              <span className="text-gradient-dark">The full journey.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              Students don't just study startups. They build them — moving through every stage of
              the startup journey as part of their learning.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-500 via-cyan-500 to-electric-500 opacity-20" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-2">
            {startupJourney.map((stage, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex flex-col items-center text-center group">
                  <div className="relative w-24 h-24 rounded-full bg-ink-50 border-2 border-ink-100 group-hover:border-electric-500 group-hover:bg-electric-50 flex items-center justify-center transition-all duration-300 group-hover:scale-105 z-10">
                    <span className="font-display text-2xl font-extrabold text-ink-300 group-hover:text-electric-600 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="mt-4 text-sm font-bold text-ink-700 group-hover:text-ink-900 transition-colors">
                    {stage}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={400}>
          <div className="mt-16 flex items-center justify-center gap-4 p-6 rounded-2xl bg-ink-50 max-w-2xl mx-auto">
            <p className="text-sm text-ink-500 text-center">
              Every stage is integrated into the curriculum — not as theory, but as practice.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
