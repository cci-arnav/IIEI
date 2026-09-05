import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { Rocket, Briefcase, TrendingUp, Award, Lightbulb, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Outcomes() {
  const pathways = [
    { icon: Rocket, title: 'Startup Founder / Co-Founder', desc: 'Build and launch your own venture with institutional support and mentorship.' },
    { icon: Briefcase, title: 'Product Manager', desc: 'Lead product strategy and execution at startups and growth-stage companies.' },
    { icon: TrendingUp, title: 'Venture Analyst', desc: 'Evaluate and support investments at venture capital firms and funds.' },
    { icon: Award, title: 'Innovation Consultant', desc: 'Help organizations build innovation capabilities and launch new ventures.' },
    { icon: Lightbulb, title: 'Business Strategist', desc: 'Shape growth strategy and business development at scaling companies.' },
    { icon: Users, title: 'Entrepreneur in Residence', desc: 'Work within established companies to build and launch new initiatives.' },
  ];

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-20 bg-ink-950 grain">
        <div className="section-padding">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4">
              Outcomes
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              What you'll become.
              <br />
              <span className="text-gradient">Not just what you'll learn.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-300 max-w-2xl leading-relaxed">
              IIEI is built around outcomes — not just knowledge. Here's where the program can take
              you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathways.map((path, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group h-full p-8 rounded-3xl bg-ink-50 hover:bg-ink-900 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-electric-500 flex items-center justify-center mb-6 transition-all duration-300">
                    <path.icon className="w-6 h-6 text-ink-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink-900 group-hover:text-white transition-colors mb-3">
                    {path.title}
                  </h3>
                  <p className="text-sm text-ink-500 group-hover:text-ink-300 transition-colors leading-relaxed">
                    {path.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink-50">
        <div className="section-padding">
          <Reveal>
            <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-ink-900 mb-12 text-center">
              Institutional commitments
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Reveal delay={100}>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-electric-500 to-electric-600 text-white">
                <CheckCircle2 className="w-8 h-8 mb-4" />
                <h3 className="font-display text-xl font-bold mb-3">PPO Commitment</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  IIEI is committed to pre-placement opportunities for students. The career
                  ecosystem is designed around practical experience, industry exposure and a
                  commitment towards pre-placement opportunities.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-ink-800 to-ink-950 text-white">
                <CheckCircle2 className="w-8 h-8 mb-4 text-cyan-400" />
                <h3 className="font-display text-xl font-bold mb-3">Institutional Funding</h3>
                <p className="text-sm text-ink-300 leading-relaxed">
                  IIEI provides an institutional commitment towards supporting promising student
                  ventures through its entrepreneurship and funding ecosystem. Exact funding
                  mechanics will be announced as they are finalized.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink-950 grain">
        <div className="section-padding text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-white">
            Build your future. Literally.
          </h2>
          <div className="mt-10">
            <ButtonLink to="/apply" variant="primary" size="lg" icon={ArrowRight}>
              Apply Now
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
