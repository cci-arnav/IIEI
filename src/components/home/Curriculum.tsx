import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { programs, commonCurriculum } from '@/data/content';
import Reveal from '@/components/Reveal';

export default function Curriculum() {
  const launchingProgram = programs.find((p) => p.status === 'launching')!;

  return (
    <section id="curriculum" className="py-24 lg:py-32 bg-white">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-bold uppercase tracking-wider text-electric-500 mb-4">
              Curriculum
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
              Two years. Four semesters.
              <br />
              <span className="text-gradient-dark">Built around doing.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              The curriculum for {launchingProgram.shortName} moves from foundation to real-world
              execution across four semesters.
            </p>
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
              <Reveal key={i} delay={i * 100}>
                <div className="group h-full p-8 rounded-3xl bg-ink-50 hover:bg-ink-900 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-display text-4xl font-extrabold text-ink-200 group-hover:text-ink-700 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-ink-400 group-hover:text-cyan-400 transition-colors">
                        {sem.label}
                      </div>
                      <div className="text-sm font-bold text-ink-900 group-hover:text-white transition-colors">
                        {sem.title}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {subjects.map((subject, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-ink-600 group-hover:text-ink-200 transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-electric-500 mt-2 flex-shrink-0" />
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
