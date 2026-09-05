import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Outcomes() {
  const cards = [
    {
      title: 'Startup Founder / Co-Founder',
      desc: 'Build and launch your own venture with institutional support.',
    },
    {
      title: 'Product Manager',
      desc: 'Lead product strategy and execution at startups and growth companies.',
    },
    {
      title: 'Venture Analyst',
      desc: 'Evaluate and support investments at venture capital firms.',
    },
    {
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
              <h2 className="font-display text-4xl font-extrabold text-ink-900 tracking-tight sm:text-5xl">
                What you'll become.
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

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="editorial-rule h-full p-6 pl-0 pr-8">
                <span className="font-display text-4xl font-bold text-ink-200">0{i + 1}</span>
                <h3 className="mt-6 font-display text-lg font-bold text-ink-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border-t-2 border-electric-500 py-6 pr-8">
              <h3 className="font-display text-xl font-bold mb-2">PPO Commitment</h3>
              <p className="text-sm text-ink-500 leading-relaxed">
                IIEI is committed to pre-placement opportunities for students. The career ecosystem
                is designed around practical experience and industry exposure.
              </p>
            </div>
            <div className="border-t-2 border-ink-900 py-6 pr-8">
              <h3 className="font-display text-xl font-bold mb-2">Institutional Funding</h3>
              <p className="text-sm text-ink-500 leading-relaxed">
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
