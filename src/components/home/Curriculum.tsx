import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { programs } from '@/data/content';
import Reveal from '@/components/Reveal';

export default function Curriculum() {
  const launchingProgram = programs.find((p) => p.status === 'launching')!;

  return (
    <section id="curriculum" className="py-24 lg:py-32 bg-white">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <p className="editorial-label mb-5">
              Curriculum
            </p>
            <h2 className="font-display text-4xl font-extrabold text-ink-900 tracking-tight sm:text-5xl">
              Two years. Four semesters.
            </h2>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              The curriculum for {launchingProgram.shortName} moves from foundation to real-world
              execution across four semesters.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
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
              <Reveal key={i} delay={i * 100}>
                <div className="group h-full border-t border-ink-200 py-7 pr-8 transition-colors hover:bg-ink-50 lg:pl-5 lg:first:pl-0">
                  <div className="flex items-start gap-4 mb-7">
                    <span className="font-display text-5xl font-extrabold text-ink-200 transition-colors group-hover:text-electric-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-400">
                        {sem.label}
                      </div>
                      <div className="text-sm font-bold text-ink-900">
                        {sem.title}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {subjects.map((subject, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-ink-600"
                      >
                        <span className="mt-2 h-px w-3 shrink-0 bg-electric-500" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={400}>
          <div className="mt-12 flex justify-center">
            <Link
              to={`/programs/${launchingProgram.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-electric-600 transition-colors"
            >
              View full program details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
