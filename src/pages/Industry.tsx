import { industryCards } from '@/data/content';
import Reveal from '@/components/Reveal';
import FormLink from '@/components/FormLink';
import { Briefcase, Network, Building2, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function Industry() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-20 bg-ink-950 text-white border-b border-white/10">
        <div className="section-padding">
          <Reveal>
            <span className="editorial-label text-ochre-400">Enterprise Network</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mt-4">
              Where Academic Rigor
              <br />
              <span className="text-ochre-400">Meets Enterprise Scale.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink-300 max-w-2xl leading-relaxed">
              IIEI integrates corporate innovation challenges, operational problem-solving sprints, and mandatory industry internships across our programs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-20 bg-white dark:bg-ink-950 border-b border-ink-900/10 dark:border-white/10 transition-colors">
        <div className="section-padding">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <span className="editorial-label">Ecosystem Focus</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white mt-2">
                Industry sectors engaged in teaching &amp; internships
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {industryCards.map((card, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="p-6 border border-ink-900/10 dark:border-white/10 bg-ivory-50 dark:bg-ink-900 text-center hover:border-ink-900 dark:hover:border-white transition-colors">
                  <span className="font-display text-xs sm:text-sm font-bold text-ink-800 dark:text-ink-200 block">
                    {card}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pillars of Engagement */}
      <section className="py-24 bg-ivory-100 dark:bg-ink-900 border-b border-ink-900/10 dark:border-white/10 transition-colors">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Briefcase,
                title: 'Mandatory Internships',
                desc: 'Multi-term immersive internships embedded into the curriculum with real operational deliverables.',
              },
              {
                icon: Network,
                title: 'Founder Network',
                desc: 'Continuous advisory from 250+ founders offering venture review and business validation.',
              },
              {
                icon: Building2,
                title: 'Live Enterprise Projects',
                desc: 'Direct problem statements solved for mid-market and enterprise corporate partners.',
              },
              {
                icon: TrendingUp,
                title: 'PPO Commitment',
                desc: 'Pre-Placement Opportunities aligned with high-performance industry internships.',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="h-full border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950 p-8">
                  <item.icon className="w-6 h-6 text-ochre-600 dark:text-ochre-400 mb-6" />
                  <h3 className="font-display font-bold text-base text-ink-900 dark:text-white mb-2">
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

      {/* CTA */}
      <section className="py-20 bg-ink-950 text-white text-center">
        <div className="section-padding">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white">
            Connect with IIEI admissions
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-ink-300 max-w-xl mx-auto">
            Discuss corporate partnerships, recruitment, or applicant enrollment.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <FormLink
              type="enquiry"
              icon="external"
              className="btn-primary px-8 py-4 border border-white/20 text-white hover:border-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider"
            >
              Enquire
            </FormLink>
          </div>
        </div>
      </section>
    </>
  );
}
