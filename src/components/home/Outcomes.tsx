import { Link } from 'react-router-dom';
import { TrendingUp, Rocket, Briefcase, Award, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Outcomes() {
  const cards = [
    {
      icon: Rocket,
      title: 'Startup Founder / Co-Founder',
      desc: 'Build and launch your own venture with institutional support.',
    },
    {
      icon: Briefcase,
      title: 'Product Manager',
      desc: 'Lead product strategy and execution at startups and growth companies.',
    },
    {
      icon: TrendingUp,
      title: 'Venture Analyst',
      desc: 'Evaluate and support investments at venture capital firms.',
    },
    {
      icon: Award,
      title: 'Innovation Consultant',
      desc: 'Help organizations build innovation capabilities and new ventures.',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="section-padding">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-electric-500 mb-4">
                Outcomes
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
                What you'll become.
                <br />
                <span className="text-gradient-dark">Not just what you'll learn.</span>
              </h2>
            </div>
            <Link
              to="/outcomes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-electric-600 transition-colors whitespace-nowrap"
            >
              View all outcomes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group h-full p-8 rounded-3xl bg-ink-50 hover:bg-ink-900 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-electric-500 flex items-center justify-center mb-6 transition-all duration-300">
                  <card.icon className="w-6 h-6 text-ink-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink-900 group-hover:text-white transition-colors mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-ink-500 group-hover:text-ink-300 transition-colors leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-electric-500 to-electric-600 text-white">
              <h3 className="font-display text-xl font-bold mb-2">PPO Commitment</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                IIEI is committed to pre-placement opportunities for students. The career ecosystem
                is designed around practical experience and industry exposure.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-ink-800 to-ink-950 text-white">
              <h3 className="font-display text-xl font-bold mb-2">Institutional Funding</h3>
              <p className="text-sm text-ink-300 leading-relaxed">
                IIEI provides an institutional commitment towards supporting promising student
                ventures through its entrepreneurship and funding ecosystem.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
