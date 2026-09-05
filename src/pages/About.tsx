import Reveal from '@/components/Reveal';
import FormLink from '@/components/FormLink';
import { siteSettings } from '@/data/content';
import { Target, Eye, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-20 bg-ink-950 text-white border-b border-white/10">
        <div className="section-padding">
          <Reveal>
            <div className="max-w-4xl">
              <span className="editorial-label text-ochre-400">Institutional Charter</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mt-4">
                A new generation
                <br />
                <span className="text-ochre-400">institution for venture builders.</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-ink-200 leading-relaxed max-w-2xl">
                {siteSettings.instituteName} was initiated under the auspices of {siteSettings.initiatedBy} (CCI India) to build an academic foundation around real operators, venture creation, and execution discipline.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Governance */}
      <section className="py-24 bg-white dark:bg-ink-950 border-b border-ink-900/10 dark:border-white/10 transition-colors">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Mission',
                desc: 'To cultivate capable entrepreneurs and high-impact operators through rigorous practitioner guidance, live venture builds, and direct market immersion.',
              },
              {
                icon: Eye,
                title: 'Vision',
                desc: 'To establish India’s benchmark institutional ecosystem for entrepreneurship, where commercial enterprises are developed and scaled within the curriculum.',
              },
              {
                icon: ShieldCheck,
                title: 'Governance',
                desc: 'Steered with institutional credibility through CCI India, connecting students with a nationwide network of industry leaders, chambers, and capital providers.',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="h-full p-8 border border-ink-900/10 dark:border-white/10 bg-ivory-50 dark:bg-ink-900">
                  <div className="w-10 h-10 border border-ink-900/15 dark:border-white/15 bg-white dark:bg-ink-950 flex items-center justify-center text-ochre-600 dark:text-ochre-400 mb-6">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Pillars */}
      <section className="py-24 bg-ivory-100 dark:bg-ink-900 border-b border-ink-900/10 dark:border-white/10 transition-colors">
        <div className="section-padding">
          <Reveal>
            <div className="max-w-3xl mb-16 border-b border-ink-900/15 dark:border-white/15 pb-8">
              <span className="editorial-label">The IIEI Advantage</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-ink-900 dark:text-white tracking-tight mt-3">
                Core Institutional Tenets
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Founder-Led Instruction',
                desc: 'Curriculums and masterclasses delivered by 250+ founders and co-founders who have built real companies.',
              },
              {
                title: 'Build While Learning',
                desc: 'Venture incubation and prototype sprints occur alongside academic terms rather than post-graduation.',
              },
              {
                title: 'Multiple Industry Internships',
                desc: 'Real corporate innovation and startup internships embedded into each semester with tangible deliverables.',
              },
              {
                title: 'Institutional Venture Commitment',
                desc: 'Explicit funding commitment and venture backing pathways for high-potential student enterprises.',
              },
              {
                title: 'PPO Commitment',
                desc: 'A dedicated commitment towards pre-placement opportunities through industry partner networks.',
              },
              {
                title: 'Learn by Doing Philosophy',
                desc: 'Every business discipline is grounded in practical execution, market testing, and commercial validation.',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="p-6 border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950 flex items-start gap-4">
                  <span className="font-display text-xl font-bold text-ink-300 dark:text-ink-700 shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base text-ink-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-ink-950 text-white">
        <div className="section-padding text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
            Be part of the launch cohort.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink-300 max-w-xl mx-auto">
            Applications are actively reviewed for Undergraduate (3 Years · ₹25L) and Postgraduate (2 Years · ₹30L) cohorts.
          </p>
          <div className="mt-8">
            <FormLink
              type="apply"
              className="btn-primary px-8 py-4 bg-white text-ink-950 hover:bg-ochre-400 text-xs font-bold uppercase tracking-wider"
            >
              Apply Now
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </FormLink>
          </div>
        </div>
      </section>
    </>
  );
}
