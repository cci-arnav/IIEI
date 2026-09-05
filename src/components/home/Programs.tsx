import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { programs } from '@/data/content';
import Reveal from '@/components/Reveal';

export default function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-ink-50">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-4xl mb-14">
            <p className="editorial-label mb-5">
              Our Programs
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink-900 tracking-tight">
              Four programs. One philosophy.
            </h2>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              One program is launching now. Three are coming soon. Each is built around the same
              core: founder-led learning, real-world execution, and the belief that you learn by
              doing.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal>
            {(() => {
              const flagship = programs[0];
              return <Link to={`/programs/${flagship.slug}`} className="group block border-t-2 border-ink-900 pt-5">
                <div className="relative aspect-[16/9] overflow-hidden bg-ink-900">
                  <img src={flagship.image} alt={flagship.name} className="h-full w-full object-cover grayscale-[20%] transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                    <span className="editorial-label text-cyan-300">{flagship.statusLabel}</span>
                    <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
                <div className="mt-5 flex gap-5">
                  <span className="font-display text-2xl font-bold text-electric-600">{flagship.number}</span>
                  <div><h3 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">{flagship.name}</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-500">{flagship.description}</p></div>
                </div>
              </Link>;
            })()}
          </Reveal>
          <div className="mt-12 lg:mt-0">
            {programs.slice(1).map((prog, i) => (
              <Reveal key={prog.id} delay={(i + 1) * 80}>
                <Link to={`/programs/${prog.slug}`} className="group editorial-rule flex items-start gap-5 py-6 first:border-t-0">
                  <span className="font-display text-xl font-bold text-ink-300 group-hover:text-electric-600">{prog.number}</span>
                  <span className="min-w-0 flex-1"><span className="block font-display text-lg font-bold text-ink-900">{prog.name}</span><span className="mt-2 block text-xs font-bold uppercase tracking-wider text-ink-400">{prog.statusLabel}</span></span>
                  <ArrowUpRight className="h-5 w-5 text-ink-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
