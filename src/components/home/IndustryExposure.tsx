import { industryCards } from '@/data/content';
import Reveal from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IndustryExposure() {
  return (
    <section className="py-24 lg:py-32 bg-ink-950 grain overflow-hidden">
      <div className="section-padding">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4">
                Industry Exposure
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Where learning meets
                <br />
                <span className="text-gradient">the real world.</span>
              </h2>
              <p className="mt-6 text-lg text-ink-400 leading-relaxed">
                Students connect with real business environments through internships, live
                projects, founder sessions and industry partnerships across multiple sectors.
              </p>
            </div>
            <Link
              to="/industry"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors whitespace-nowrap"
            >
              Explore industry ecosystem
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 lg:gap-4">
          {industryCards.map((card, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="group aspect-square rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-cyan-400/30 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
                <span className="font-display text-lg lg:text-xl font-bold text-ink-300 group-hover:text-cyan-400 transition-colors text-center px-2">
                  {card}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: 'Multiple', label: 'Internships', desc: 'Across startups, ventures and innovation teams' },
              { stat: '250+', label: 'Founder Network', desc: 'Direct access to builders and practitioners' },
              { stat: 'Real', label: 'Projects', desc: 'Live business problems with real deliverables' },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08]">
                <div className="font-display text-3xl font-extrabold text-gradient mb-2">
                  {item.stat}
                </div>
                <div className="text-sm font-bold text-white">{item.label}</div>
                <p className="text-sm text-ink-400 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
