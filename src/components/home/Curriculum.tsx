import { Link } from 'react-router-dom';
import { programs } from '@/data/content';
import Reveal from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';

export default function Curriculum() {
  const launchingProgram = programs.find((p) => p.status === 'launching')!;

  return (
    <section id="curriculum" className="py-24 lg:py-32 bg-ivory-50 dark:bg-ink-950 border-b border-ink-900/10 dark:border-white/10 transition-colors">
      <div className="section-padding">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-ink-900/10 dark:border-white/10 pb-8">
            <div className="max-w-2xl">
              <span className="editorial-label">Academic Roadmap</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 dark:text-white tracking-tight mt-3">
                Rigorous Foundation to Capstone
              </h2>
              <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed">
                Examining the curriculum structure of {launchingProgram.name}.
              </p>
            </div>
            <Link
              to={`/programs/${launchingProgram.slug}`}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-900 dark:text-white hover:text-ochre-600 dark:hover:text-ochre-400 transition-colors"
            >
              View Full Program Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {launchingProgram.semesterLabels.map((sem, i) => {
            const subjects =
              i === 0
                ? launchingProgram.curriculum.semester1
                : i === 1
                ? launchingProgram.curriculum.semester2
                : i === 2
                ? launchingProgram.curriculum.semester3
                : launchingProgram.curriculum.semester4;

            return (
              <Reveal key={i} delay={i * 80}>
                <div className="h-full border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-900 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-ink-900/10 dark:border-white/10 pb-4 mb-4">
                      <span className="font-display text-2xl font-black text-ink-300 dark:text-ink-700">
                        0{i + 1}
                      </span>
                      <div className="text-right">
                        <span className="editorial-label text-[9px] block text-ochre-600 dark:text-ochre-400">
                          {sem.label}
                        </span>
                        <span className="text-xs font-bold text-ink-900 dark:text-white">
                          {sem.title}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 text-xs text-ink-600 dark:text-ink-300">
                      {subjects.map((sub, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-ochre-500 shrink-0 mt-1" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
