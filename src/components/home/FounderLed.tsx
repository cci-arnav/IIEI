import { founders } from '@/data/content';
import Reveal from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FounderLed() {
  return (
    <section className="py-24 lg:py-32 bg-ink-50">
      <div className="section-padding">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-electric-500 mb-4">
                Founder-Led Learning
              </p>
              <h2 className="font-display text-4xl font-extrabold text-ink-900 tracking-tight sm:text-5xl lg:text-6xl">
                250+ founders.
              </h2>
              <p className="mt-6 text-lg text-ink-500 leading-relaxed">
                IIEI's teaching ecosystem brings together 250+ founders, co-founders and industry
                practitioners. These are people who have built companies — not just studied them.
              </p>
            </div>
            <Link
              to="/faculty"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-electric-600 transition-colors whitespace-nowrap"
            >
              View all faculty
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {founders.map((founder, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-ink-100">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      {founder.industry}
                    </p>
                    <p className="text-sm font-bold text-white mt-1">{founder.name}</p>
                    <p className="text-xs text-ink-300">{founder.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Masterclasses', desc: 'Deep-dive sessions with founders on specific topics.' },
              { title: 'Founder Sessions', desc: 'Open conversations about building, failing and growing.' },
              { title: 'Special Courses', desc: 'Structured courses designed and delivered by practitioners.' },
            ].map((item, i) => (
                <div key={i} className="editorial-rule p-6 pl-0">
                <h4 className="font-display font-bold text-ink-900 mb-2">{item.title}</h4>
                <p className="text-sm text-ink-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
