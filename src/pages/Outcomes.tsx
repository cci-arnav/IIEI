import Reveal from '@/components/Reveal';
import FormLink from '@/components/FormLink';
import { Rocket, Briefcase, TrendingUp, Award, Lightbulb, Users, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Outcomes() {
  const pathways = [
    {
      icon: Rocket,
      title: 'Startup Founder / Co-Founder',
      desc: 'Build, capitalize, and scale your own enterprise with institutional incubation support.',
    },
    {
      icon: Briefcase,
      title: 'Product & Growth Leader',
      desc: 'Drive product strategy, metrics, and growth execution at scaling technology ventures.',
    },
    {
      icon: TrendingUp,
      title: 'Venture Capital Analyst',
      desc: 'Evaluate early-stage startups and diligence investment theses for venture capital funds.',
    },
    {
      icon: Award,
      title: 'Corporate Innovation Consultant',
      desc: 'Design and lead intrapreneurship ventures and business model innovation for enterprise groups.',
    },
    {
      icon: Lightbulb,
      title: 'Business Strategist',
      desc: 'Spearhead expansion, market entry, and commercialization strategies for high-growth firms.',
    },
    {
      icon: Users,
      title: 'Entrepreneur in Residence',
      desc: 'Incubate new products and strategic business units within established corporations.',
    },
  ];

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-20 bg-ink-950 text-white border-b border-white/10">
        <div className="section-padding">
          <Reveal>
            <span className="editorial-label text-ochre-400">Graduate Pathways</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mt-4">
              What You Will Build.
              <br />
              <span className="text-ochre-400">Not Just What You Study.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink-300 max-w-2xl leading-relaxed">
              IIEI programs are architected around tangible operational capability, venture building, and market leadership.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-24 bg-white dark:bg-ink-950 border-b border-ink-900/10 dark:border-white/10 transition-colors">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pathways.map((path, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="h-full p-8 border border-ink-900/10 dark:border-white/10 bg-ivory-50 dark:bg-ink-900 hover:border-ink-900 dark:hover:border-white transition-colors">
                  <div className="w-10 h-10 border border-ink-900/15 dark:border-white/15 bg-white dark:bg-ink-950 flex items-center justify-center text-ochre-600 dark:text-ochre-400 mb-6">
                    <path.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white mb-2">
                    {path.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {path.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Commitments */}
      <section className="py-24 bg-ivory-100 dark:bg-ink-900 border-b border-ink-900/10 dark:border-white/10 transition-colors">
        <div className="section-padding">
          <Reveal>
            <div className="max-w-2xl mb-12 text-center mx-auto">
              <span className="editorial-label">Core Guarantees</span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-ink-900 dark:text-white mt-2">
                Institutional Commitments
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal delay={100}>
              <div className="p-8 border border-ink-900/15 dark:border-white/15 bg-white dark:bg-ink-950">
                <CheckCircle2 className="w-8 h-8 text-ochre-600 dark:text-ochre-400 mb-4" />
                <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white mb-2">
                  PPO Commitment
                </h3>
                <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  IIEI maintains an explicit Pre-Placement Opportunity commitment, aligning academic terms and corporate internships directly with hiring pipelines.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="p-8 border border-ink-900/15 dark:border-white/15 bg-white dark:bg-ink-950">
                <CheckCircle2 className="w-8 h-8 text-ochre-600 dark:text-ochre-400 mb-4" />
                <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white mb-2">
                  Institutional Venture Funding
                </h3>
                <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  IIEI provides an institutional funding commitment and incubation infrastructure to support high-potential student ventures with seed access and mentor networks.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink-950 text-white text-center">
        <div className="section-padding">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
            Build your venture with IIEI.
          </h2>
          <div className="mt-8">
            <FormLink
              type="apply"
              className="btn-primary px-8 py-4 bg-white text-ink-950 hover:bg-ochre-400 text-xs font-bold uppercase tracking-wider"
            >
              Apply to the Launch Cohort
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </FormLink>
          </div>
        </div>
      </section>
    </>
  );
}
