import { useState } from 'react';
import { founders, facultyFilters } from '@/data/content';
import Reveal from '@/components/Reveal';
import FormLink from '@/components/FormLink';

export default function Faculty() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? founders : founders.filter((f) => f.industry === filter);

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-20 bg-ink-950 grain">
        <div className="section-padding">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4">
              Founder-Led Learning
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              250+ founders.
              <br />
              <span className="text-gradient">One ecosystem.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-300 max-w-2xl leading-relaxed">
              IIEI's teaching ecosystem brings together founders, co-founders, entrepreneurs and
              industry practitioners. These are people who have built companies — not just studied
              them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="flex flex-wrap gap-3 mb-12">
            {facultyFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === f
                    ? 'bg-ink-900 text-white'
                    : 'bg-ink-50 text-ink-600 hover:bg-ink-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((founder, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="group">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-ink-100">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                        {founder.industry}
                      </p>
                      <p className="font-bold text-white mt-1">{founder.name}</p>
                      <p className="text-xs text-ink-300">
                        {founder.role}, {founder.company}
                      </p>
                      <p className="text-xs text-ink-400 mt-2">Session: {founder.session}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink-50">
        <div className="section-padding text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-ink-900">
            Learn from the builders.
          </h2>
          <p className="mt-6 text-lg text-ink-500 max-w-2xl mx-auto">
            Masterclasses, founder sessions and special courses — all led by practitioners.
          </p>
          <FormLink type="apply" className="cta-shine mt-10 inline-flex items-center gap-2 rounded-full bg-ink-900 px-8 py-4 font-semibold text-white transition-all duration-300">Apply Now</FormLink>
        </div>
      </section>
    </>
  );
}
