import { founders } from '@/data/content';
import Reveal from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FounderLed() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-100 dark:bg-ink-900 border-b border-ink-900/10 dark:border-white/10 transition-colors">
      <div className="section-padding">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-ink-900/15 dark:border-white/15 pb-8">
            <div className="max-w-2xl">
              <span className="editorial-label">Teaching Ecosystem</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 dark:text-white tracking-tight mt-3">
                250+ Founders &amp; Co-Founders.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
                IIEI's teaching ecosystem connects students with active operators who have built, capitalized, and scaled enterprises.
              </p>
            </div>
            <Link
              to="/faculty"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-900 dark:text-white hover:text-ochre-600 dark:hover:text-ochre-400 transition-colors"
            >
              View Founder Faculty
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        {/* Founder Portraits Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {founders.map((founder, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="group border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950 overflow-hidden">
                <div className="aspect-[3/4] relative overflow-hidden bg-ink-100 dark:bg-ink-900">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-ochre-400 block">
                      {founder.industry}
                    </span>
                    <span className="text-xs font-bold block truncate mt-0.5">
                      {founder.name}
                    </span>
                    <span className="text-[10px] text-ink-300 block truncate">
                      {founder.role}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 3 Pillars of Founder Learning */}
        <Reveal delay={200}>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Special Courses',
                desc: 'Practitioner-designed modular curriculums covering venture finance, supply chain scaling, and product execution.',
              },
              {
                title: 'Venture Masterclasses',
                desc: 'Unfiltered problem-solving sessions analyzing real startup failures, pivots, and scaling bottlenecks.',
              },
              {
                title: 'Founder Advisory',
                desc: 'Direct critique and office hours on student business models, term sheets, and investor pitches.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950 p-6"
              >
                <span className="editorial-label text-[10px] text-ochre-600 dark:text-ochre-400">
                  Format 0{i + 1}
                </span>
                <h4 className="font-display font-bold text-base text-ink-900 dark:text-white mt-1 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
