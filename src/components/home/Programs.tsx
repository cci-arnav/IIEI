import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { programs, degreeStructures, type DegreeLevel } from '@/data/content';
import Reveal from '@/components/Reveal';

export default function Programs() {
  const [selectedLevel, setSelectedLevel] = useState<DegreeLevel>('UG');
  const activeStructure = degreeStructures[selectedLevel];

  return (
    <section id="programs" className="py-24 lg:py-32 bg-ivory-100 dark:bg-ink-900 border-b border-ink-900/10 dark:border-white/10 transition-colors">
      <div className="section-padding">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 border-b border-ink-900/15 dark:border-white/15 pb-8">
            <div className="max-w-3xl">
              <span className="editorial-label">Academic Programs</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 dark:text-white tracking-tight mt-3">
                Choose your path.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed max-w-2xl">
                Explore our four specialized program tracks across Undergraduate and Postgraduate levels. Each program is grounded in founder-led instruction and live market execution.
              </p>
            </div>

            {/* UG / PG Segmented Controls */}
            <div className="w-full lg:w-auto">
              <span className="editorial-label block mb-2 text-ink-500 dark:text-ink-400">
                Degree Level Filter
              </span>
              <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center bg-white dark:bg-ink-950 p-2 border border-ink-900/20 dark:border-white/20">
                {(['UG', 'PG'] as const).map((lvl) => {
                  const struct = degreeStructures[lvl];
                  const isSelected = selectedLevel === lvl;
                  return (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setSelectedLevel(lvl)}
                      className={`px-5 py-3 text-left transition-colors border ${
                        isSelected
                          ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-950 border-ink-900 dark:border-white shadow-md'
                          : 'bg-transparent text-ink-700 dark:text-ink-300 border-transparent hover:border-ink-200 dark:hover:border-ink-800'
                      }`}
                    >
                      <div className="text-xs font-black uppercase tracking-wider">
                        {lvl === 'UG' ? 'Undergraduate' : 'Postgraduate'}
                      </div>
                      <div className="text-[11px] font-semibold mt-0.5 opacity-90">
                        {struct.duration} · {struct.totalFeeLakh}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Selected Degree Level Overview Banner */}
        <Reveal delay={100}>
          <div className="p-6 sm:p-8 bg-white dark:bg-ink-950 border border-ink-900/10 dark:border-white/10 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-display text-xl font-bold text-ink-900 dark:text-white">
                  {activeStructure.title}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-ochre-500/15 text-ochre-700 dark:text-ochre-300 border border-ochre-500/30">
                  {activeStructure.duration} Track
                </span>
              </div>
              <p className="text-sm text-ink-600 dark:text-ink-300 mt-2 max-w-2xl leading-relaxed">
                {activeStructure.highlight}
              </p>
            </div>

            <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-ink-900/10 dark:border-white/10 pt-4 sm:pt-0 sm:pl-8 shrink-0">
              <span className="text-xs text-ink-500 dark:text-ink-400 block font-medium uppercase tracking-wider">
                Total Investment
              </span>
              <span className="font-display text-2xl sm:text-3xl font-black text-ink-900 dark:text-white block mt-0.5">
                {activeStructure.totalFeeDisplay}
              </span>
              <span className="text-[11px] text-ochre-600 dark:text-ochre-400 font-semibold block mt-0.5">
                Indicative breakdown in Fee Section
              </span>
            </div>
          </div>
        </Reveal>

        {/* 4 Program Areas Editorial Cards List */}
        <div className="space-y-6">
          {programs.map((program, index) => {
            const isLaunching = program.status === 'launching';
            return (
              <Reveal key={program.id} delay={index * 80}>
                <Link
                  to={`/programs/${program.slug}`}
                  className="group block bg-white dark:bg-ink-950 border border-ink-900/10 dark:border-white/10 hover:border-ink-900 dark:hover:border-white transition-all duration-300 p-6 sm:p-8 lg:p-10 hover:shadow-xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    {/* Index Number & Status */}
                    <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start justify-between">
                      <span className="font-display text-3xl sm:text-4xl font-black text-ink-300 dark:text-ink-700 group-hover:text-ochre-600 dark:group-hover:text-ochre-400 transition-colors">
                        {program.number}
                      </span>
                    </div>

                    {/* Program Title & Overview */}
                    <div className="lg:col-span-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-[0.16em] px-2.5 py-0.5 border ${
                            isLaunching
                              ? 'bg-ochre-500/10 border-ochre-500/30 text-ochre-700 dark:text-ochre-300'
                              : 'bg-ink-100 dark:bg-ink-800 border-ink-200 dark:border-ink-700 text-ink-500 dark:text-ink-400'
                          }`}
                        >
                          {isLaunching ? 'Now Launching' : 'Coming Soon'}
                        </span>
                        <span className="text-xs text-ink-500 dark:text-ink-400 font-medium">
                          {selectedLevel === 'UG' ? '3 Years' : '2 Years'} Duration
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white group-hover:text-ochre-600 dark:group-hover:text-ochre-400 transition-colors">
                        {program.name}
                      </h3>

                      <p className="mt-3 text-sm text-ink-600 dark:text-ink-300 leading-relaxed line-clamp-2 max-w-xl">
                        {program.description}
                      </p>
                    </div>

                    {/* Pathways & Features */}
                    <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-ink-900/10 dark:border-white/10 pt-4 lg:pt-0 lg:pl-8">
                      <span className="editorial-label text-[10px] block mb-2 text-ink-500 dark:text-ink-400">
                        Primary Career Focus
                      </span>
                      <ul className="space-y-1.5 text-xs text-ink-700 dark:text-ink-300">
                        {program.careerPathways.slice(0, 3).map((path, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-ochre-600 dark:text-ochre-400 shrink-0" />
                            <span>{path}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow / Explore Action */}
                    <div className="lg:col-span-2 flex items-center justify-end">
                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-ink-900 dark:text-white group-hover:text-ochre-600 dark:group-hover:text-ochre-400 transition-colors">
                        <span>{isLaunching ? 'Explore Program' : 'View Scope'}</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
