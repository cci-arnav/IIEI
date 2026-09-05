import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Users, Briefcase, Building2, Lightbulb } from 'lucide-react';
import { programs } from '@/data/content';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';

export default function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find((p) => p.slug === slug);

  if (!program) return <Navigate to="/" replace />;

  const isLaunching = program.status === 'launching';

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-ink-950 grain overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-electric-500/15 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-500/15 blur-[100px]" />

        <div className="relative section-padding">
          <Link
            to="/#programs"
            className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Programs
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-sm font-bold text-ink-500">{program.number}</span>
                {isLaunching ? (
                  <span className="text-xs font-bold uppercase tracking-wide text-emerald-300 bg-emerald-500/20 px-3 py-1.5 rounded-full border border-emerald-400/30">
                    {program.statusLabel}
                  </span>
                ) : (
                  <span className="text-xs font-bold uppercase tracking-wide text-ink-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    {program.statusLabel}
                  </span>
                )}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
                {program.name}
              </h1>
              <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-xl">
                {program.longDescription}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {isLaunching && (
                  <ButtonLink to="/apply" variant="primary" size="lg" icon={ArrowRight}>
                    Apply Now
                  </ButtonLink>
                )}
                <ButtonLink to="/contact" variant="light" size="lg">
                  Talk to an Advisor
                </ButtonLink>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-80 lg:h-96">
              <img src={program.image} alt={program.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Info Cards */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'Who is it for', value: program.whoIsItFor },
              { icon: Building2, label: 'Industry Exposure', value: program.industryExposure },
              { icon: Briefcase, label: 'Internships', value: program.internshipInfo },
              { icon: Lightbulb, label: 'Philosophy', value: 'Learn by Doing — founder-led, real-world execution.' },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="h-full p-6 rounded-2xl bg-ink-50 border border-ink-100">
                  <card.icon className="w-6 h-6 text-electric-500 mb-4" />
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-2">
                    {card.label}
                  </p>
                  <p className="text-sm text-ink-600 leading-relaxed">{card.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-ink-50">
        <div className="section-padding">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <p className="text-sm font-bold uppercase tracking-wider text-electric-500 mb-4">
                Curriculum
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-ink-900 tracking-tight">
                Two years. Four semesters.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {program.semesterLabels.map((sem, i) => {
              const subjects =
                i === 0
                  ? program.curriculum.semester1
                  : i === 1
                  ? program.curriculum.semester2
                  : i === 2
                  ? program.curriculum.semester3
                  : program.curriculum.semester4;

              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="group h-full p-8 rounded-3xl bg-white border border-ink-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-display text-4xl font-extrabold text-ink-200">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-electric-500">
                          {sem.label}
                        </div>
                        <div className="text-sm font-bold text-ink-900">{sem.title}</div>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {subjects.map((subject, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-ink-600">
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
        </div>
      </section>

      {/* Career Pathways */}
      {isLaunching && (
        <section className="py-24 bg-white">
          <div className="section-padding">
            <Reveal>
              <div className="max-w-3xl mb-16">
                <p className="text-sm font-bold uppercase tracking-wider text-electric-500 mb-4">
                  Career Pathways
                </p>
                <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-ink-900 tracking-tight">
                  Where this takes you.
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.careerPathways.map((path, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="flex items-center gap-3 p-6 rounded-2xl bg-ink-50 border border-ink-100">
                    <CheckCircle2 className="w-5 h-5 text-electric-500 flex-shrink-0" />
                    <span className="font-medium text-ink-900">{path}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-ink-950 grain">
        <div className="section-padding text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            {isLaunching ? 'Ready to build?' : 'Coming soon. Stay tuned.'}
          </h2>
          <p className="mt-6 text-lg text-ink-400 max-w-2xl mx-auto">
            {isLaunching
              ? 'Join the launch cohort and start your journey in entrepreneurship and innovation.'
              : 'This program is coming soon. Talk to us to learn more.'}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {isLaunching && (
              <ButtonLink to="/apply" variant="primary" size="lg" icon={ArrowRight}>
                Apply Now
              </ButtonLink>
            )}
            <ButtonLink to="/contact" variant="light" size="lg">
              Talk to an Advisor
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
