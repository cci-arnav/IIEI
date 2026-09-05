import { campusCategories } from '@/data/content';
import Reveal from '@/components/Reveal';
import { Info } from 'lucide-react';

export default function Campus() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-100 dark:bg-ink-900 border-b border-ink-900/10 dark:border-white/10 transition-colors">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-3xl mb-16 border-b border-ink-900/15 dark:border-white/15 pb-8">
            <span className="editorial-label">Environment &amp; Spaces</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 dark:text-white tracking-tight mt-3">
              Spaces Designed for Execution
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
              Where venture builders, faculty, and practitioners convene to test, build, and scale.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {campusCategories.map((cat, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="group border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950 overflow-hidden">
                <div className="aspect-[4/5] relative overflow-hidden bg-ink-100 dark:bg-ink-900">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="font-display text-xs sm:text-sm font-bold text-white block">
                      {cat.title}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Accommodation Notice Banner */}
        <Reveal delay={300}>
          <div className="mt-12 p-5 border border-ink-900/15 dark:border-white/15 bg-white dark:bg-ink-950 max-w-3xl flex items-start gap-3">
            <Info className="w-5 h-5 text-ochre-600 dark:text-ochre-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              <strong className="text-ink-900 dark:text-white">Accommodation Policy:</strong> IIEI does not currently provide hostel facilities. Students are responsible for their local accommodation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
