import { useState } from 'react';
import { founders, facultyFilters } from '@/data/content';
import Reveal from '@/components/Reveal';
import FormLink from '@/components/FormLink';
import { ArrowUpRight } from 'lucide-react';

export default function Faculty() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? founders : founders.filter((f) => f.industry === filter);

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-20 bg-ink-950 text-white border-b border-white/10">
        <div className="section-padding">
          <Reveal>
            <span className="editorial-label text-ochre-400">Practitioner Ecosystem</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mt-4">
              250+ Founders &amp; Co-Founders.
              <br />
              <span className="text-ochre-400">Teaching Through Real Execution.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink-300 max-w-2xl leading-relaxed">
              Our faculty comprises founders, startup operators, and venture investors who have built companies from zero to scale across technology, finance, supply chains, and agriculture.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-ink-950 border-b border-ink-900/10 dark:border-white/10 transition-colors">
        <div className="section-padding">
          {/* Industry Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-ink-900/10 dark:border-white/10 pb-6">
            {facultyFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${
                  filter === f
                    ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-950 border-ink-900 dark:border-white'
                    : 'bg-ivory-50 dark:bg-ink-900 text-ink-700 dark:text-ink-300 border-ink-200 dark:border-ink-800 hover:border-ink-900 dark:hover:border-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((founder, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="border border-ink-900/10 dark:border-white/10 bg-ivory-50 dark:bg-ink-900 overflow-hidden group">
                  <div className="aspect-[3/4] relative overflow-hidden bg-ink-100 dark:bg-ink-800">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-ochre-400 block">
                        {founder.industry}
                      </span>
                      <h4 className="font-display font-bold text-sm text-white mt-0.5">
                        {founder.name}
                      </h4>
                      <p className="text-xs text-ink-300">
                        {founder.role}, {founder.company}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 border-t border-ink-900/10 dark:border-white/10">
                    <span className="editorial-label text-[9px] block text-ink-400">Masterclass Topic</span>
                    <p className="text-xs font-semibold text-ink-800 dark:text-ink-200 mt-0.5">
                      {founder.session}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ivory-100 dark:bg-ink-900 text-center">
        <div className="section-padding">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-ink-900 dark:text-white">
            Learn from operators, not textbooks.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-ink-600 dark:text-ink-300 max-w-xl mx-auto">
            Founder masterclasses and venture reviews are integrated across both Undergraduate (3 Yrs) and Postgraduate (2 Yrs) programs.
          </p>
          <div className="mt-8">
            <FormLink
              type="apply"
              className="btn-primary px-8 py-4 bg-ink-900 text-white dark:bg-white dark:text-ink-950 hover:bg-ochre-600 text-xs font-bold uppercase tracking-wider"
            >
              Apply to IIEI
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </FormLink>
          </div>
        </div>
      </section>
    </>
  );
}
