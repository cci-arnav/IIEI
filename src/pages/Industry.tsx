import { industryCards } from '@/data/content';
import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { ArrowRight, Building2, Briefcase, Network, TrendingUp } from 'lucide-react';

export default function Industry() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-20 bg-ink-950 grain">
        <div className="section-padding">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4">
              Industry Exposure
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Where learning meets
              <br />
              <span className="text-gradient">the real world.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-300 max-w-2xl leading-relaxed">
              Students connect with real business environments through internships, live projects,
              founder sessions and industry partnerships across multiple sectors.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-padding">
          <Reveal>
            <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-ink-900 mb-12">
              Sectors we connect with
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {industryCards.map((card, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="group aspect-square rounded-2xl bg-ink-50 border border-ink-100 hover:border-electric-500 hover:bg-electric-50 flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <span className="font-display text-lg font-bold text-ink-700 group-hover:text-electric-600 transition-colors text-center px-2">
                    {card}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink-50">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, title: 'Multiple Internships', desc: 'Across startups, venture firms and innovation teams — with real deliverables.' },
              { icon: Network, title: '250+ Founder Network', desc: 'Direct access to builders, practitioners and industry leaders.' },
              { icon: Building2, title: 'Live Projects', desc: 'Real business problems from real companies — not case studies.' },
              { icon: TrendingUp, title: 'PPO Commitment', desc: 'A commitment towards pre-placement opportunities for students.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="h-full p-8 rounded-3xl bg-white border border-ink-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500 to-cyan-500 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink-950 grain">
        <div className="section-padding text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-white">
            Ready to get real-world experience?
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
