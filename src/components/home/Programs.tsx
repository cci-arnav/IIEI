import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { programs } from '@/data/content';
import Reveal from '@/components/Reveal';

export default function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-ink-50">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-bold uppercase tracking-wider text-electric-500 mb-4">
              Our Programs
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
              Four programs. One philosophy.
              <br />
              <span className="text-gradient-dark">Learn by Doing.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              One program is launching now. Three are coming soon. Each is built around the same
              core: founder-led learning, real-world execution, and the belief that you learn by
              doing.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((prog, i) => (
            <Reveal key={prog.id} delay={i * 100}>
              <Link
                to={`/programs/${prog.slug}`}
                className="group block h-full bg-white rounded-3xl overflow-hidden border border-ink-100 hover:border-ink-200 hover:shadow-2xl hover:shadow-ink-900/10 transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-xs font-bold text-white/80 bg-ink-950/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                      {prog.number}
                    </span>
                    {prog.status === 'launching' ? (
                      <span className="text-xs font-bold uppercase tracking-wide text-emerald-300 bg-emerald-500/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-400/30">
                        {prog.statusLabel}
                      </span>
                    ) : (
                      <span className="text-xs font-bold uppercase tracking-wide text-ink-200 bg-ink-950/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                        {prog.statusLabel}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl lg:text-2xl font-extrabold text-white">
                      {prog.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <p className="text-sm text-ink-500 leading-relaxed line-clamp-3">
                    {prog.description}
                  </p>

                  {prog.status === 'launching' && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {prog.careerPathways.slice(0, 3).map((path) => (
                        <span
                          key={path}
                          className="inline-flex items-center gap-1 text-xs font-medium text-ink-600 bg-ink-50 px-3 py-1.5 rounded-full"
                        >
                          <CheckCircle2 className="w-3 h-3 text-electric-500" />
                          {path}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-semibold text-ink-900 group-hover:text-electric-600 transition-colors">
                      {prog.status === 'launching' ? 'View Program Details' : 'Learn More'}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-ink-100 group-hover:bg-electric-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 text-ink-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
