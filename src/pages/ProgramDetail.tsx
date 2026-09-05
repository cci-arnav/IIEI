import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Users, Briefcase, Building2, Lightbulb, Clock, IndianRupee } from 'lucide-react';
import { programs, degreeStructures, type DegreeLevel } from '@/data/content';
import Reveal from '@/components/Reveal';
import FormLink from '@/components/FormLink';

export default function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find((p) => p.slug === slug);
  const [selectedLevel, setSelectedLevel] = useState<DegreeLevel>('UG');

  if (!program) return <Navigate to="/" replace />;

  const isLaunching = program.status === 'launching';
  const activeStructure = degreeStructures[selectedLevel];

  return (
    <>
      {/* Editorial Program Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-ink-950 text-white border-b border-white/10 overflow-hidden">
        <div className="section-padding">
          <Link
            to="/#programs"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Programs Explorer
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              {/* Status & Degree Selector */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="font-display text-base font-black text-ochre-400">
                  {program.number}
                </span>
                <span
                  className={`text-[10px] font-extrabold uppercase tracking-[0.16em] px-2.5 py-0.5 border ${
                    isLaunching
                      ? 'bg-ochre-500/10 border-ochre-500/40 text-ochre-300'
                      : 'bg-white/10 border-white/20 text-ink-300'
                  }`}
                >
                  {isLaunching ? 'Now Launching' : 'Coming Soon'}
                </span>
              </div>

              {/* UG / PG Interactive Switcher */}
              <div className="inline-flex border border-white/20 p-1 bg-white/5 mb-8">
                {(['UG', 'PG'] as const).map((lvl) => {
                  const struct = degreeStructures[lvl];
                  const isSelected = selectedLevel === lvl;
                  return (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setSelectedLevel(lvl)}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                        isSelected
                          ? 'bg-white text-ink-950 font-black'
                          : 'text-ink-300 hover:text-white'
                      }`}
                    >
                      {lvl === 'UG' ? 'Undergraduate (3 Years)' : 'Postgraduate (2 Years)'}
                    </button>
                  );
                })}
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
                {program.name}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-ink-200 leading-relaxed max-w-2xl">
                {program.longDescription}
              </p>

              {/* Program Attributes Quick Strip */}
              <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-ink-400 block font-medium uppercase tracking-wider text-[10px]">Track Duration</span>
                  <span className="text-white font-bold text-sm mt-0.5 block">{activeStructure.duration}</span>
                </div>
                <div>
                  <span className="text-ink-400 block font-medium uppercase tracking-wider text-[10px]">Indicative Fee</span>
                  <span className="text-white font-bold text-sm mt-0.5 block">{activeStructure.totalFeeDisplay}</span>
                </div>
                <div>
                  <span className="text-ink-400 block font-medium uppercase tracking-wider text-[10px]">Cohort Capacity</span>
                  <span className="text-white font-bold text-sm mt-0.5 block">{activeStructure.cohortCapacity} Seats</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                {isLaunching ? (
                  <FormLink
                    type="apply"
                    className="btn-primary px-8 py-4 bg-white text-ink-950 hover:bg-ochre-400 hover:text-ink-950 text-xs font-bold uppercase tracking-wider"
                  >
                    Apply Now
                    <ArrowUpRight className="w-4 h-4 ml-1.5" />
                  </FormLink>
                ) : (
                  <span className="inline-flex items-center px-6 py-3.5 bg-white/10 text-ink-300 text-xs font-bold uppercase tracking-wider border border-white/15">
                    Applications Opening Soon
                  </span>
                )}
                <FormLink
                  type="enquiry"
                  icon="external"
                  className="btn-primary px-8 py-4 border border-white/20 text-white hover:border-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider"
                >
                  Enquire for {selectedLevel}
                </FormLink>
              </div>
            </div>

            {/* Editorial Image */}
            <div className="lg:col-span-5 relative">
              <div className="border border-white/20 bg-ink-900 overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover object-center filter contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-ink-950/90 border border-white/15">
                    <span className="editorial-label text-ochre-400 text-[10px]">Curriculum Model</span>
                    <p className="font-bold text-white text-sm mt-0.5">Learn by Doing · Founder Mentored</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Core Pillars */}
      <section className="py-20 bg-white dark:bg-ink-950 border-b border-ink-900/10 dark:border-white/10 transition-colors">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'Candidate Fit', value: program.whoIsItFor },
              { icon: Building2, label: 'Industry Immersion', value: program.industryExposure },
              { icon: Briefcase, label: 'Internship Structure', value: program.internshipInfo },
              { icon: Lightbulb, label: 'Learning Philosophy', value: 'Learn by Doing — builder focus, problem sprints, and live execution.' },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="h-full border border-ink-900/10 dark:border-white/10 p-6 bg-ivory-50 dark:bg-ink-900">
                  <card.icon className="w-5 h-5 text-ochre-600 dark:text-ochre-400 mb-4" />
                  <span className="editorial-label text-[10px] block mb-2 text-ink-500 dark:text-ink-400">
                    {card.label}
                  </span>
                  <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 leading-relaxed font-medium">
                    {card.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 bg-ivory-100 dark:bg-ink-900 border-b border-ink-900/10 dark:border-white/10 transition-colors">
        <div className="section-padding">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <span className="editorial-label">Curriculum Framework</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-ink-900 dark:text-white tracking-tight mt-3">
                {selectedLevel === 'UG' ? 'Undergraduate 3-Year Scope' : 'Postgraduate 2-Year Scope'}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                Structured into progressive execution phases. Core management foundations transition directly into startup building and venture capstones.
              </p>
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
                <Reveal key={i} delay={i * 80}>
                  <div className="h-full border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950 p-6">
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

                    <ul className="space-y-2.5 text-xs text-ink-600 dark:text-ink-300">
                      {subjects.map((sub, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-ochre-500 shrink-0 mt-1" />
                          <span>{sub}</span>
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
      <section className="py-20 bg-white dark:bg-ink-950 border-b border-ink-900/10 dark:border-white/10">
        <div className="section-padding">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="editorial-label">Career Outcomes</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white mt-2">
                What graduates build towards
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {program.careerPathways.map((role, idx) => (
              <div
                key={idx}
                className="p-4 border border-ink-900/10 dark:border-white/10 bg-ivory-50 dark:bg-ink-900 flex items-center gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-ochre-600 dark:text-ochre-400 shrink-0" />
                <span className="font-display font-semibold text-xs sm:text-sm text-ink-900 dark:text-white">
                  {role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
