import { industryCards } from '@/data/content';
import Reveal from '@/components/Reveal';
import { ArrowRight, Briefcase, Network, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IndustryExposure() {
  return (
    <section className="py-24 lg:py-32 bg-ink-950 text-white border-b border-white/10 overflow-hidden">
      <div className="section-padding">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-white/15 pb-8">
            <div className="max-w-2xl">
              <span className="editorial-label text-ochre-400">Industry Exposure</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-3">
                Where Education Meets Enterprise.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-ink-300 leading-relaxed">
                Integrated corporate innovation sprints, startup venture internships, and dedicated PPO commitments.
              </p>
            </div>
            <Link
              to="/industry"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-ochre-400 transition-colors"
            >
              Explore Industry Partners
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        {/* Sector Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 mb-14">
          {industryCards.map((card, i) => (
            <Reveal key={i} delay={i * 40}>
              <div className="border border-white/15 bg-white/5 p-4 text-center hover:bg-white/10 hover:border-white/30 transition-colors">
                <span className="font-display text-xs sm:text-sm font-bold text-white block">
                  {card}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Three Institutional Commitments */}
        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-white/15 bg-white/5 p-8">
              <Briefcase className="w-6 h-6 text-ochre-400 mb-4" />
              <h4 className="font-display font-bold text-lg text-white mb-2">Multiple Internships</h4>
              <p className="text-xs sm:text-sm text-ink-300 leading-relaxed">
                Mandatory industry immersions embedded across the academic terms with real project deliverables.
              </p>
            </div>

            <div className="border border-white/15 bg-white/5 p-8">
              <TrendingUp className="w-6 h-6 text-ochre-400 mb-4" />
              <h4 className="font-display font-bold text-lg text-white mb-2">PPO Commitment</h4>
              <p className="text-xs sm:text-sm text-ink-300 leading-relaxed">
                An explicit institutional commitment towards connecting high-performing students with Pre-Placement Opportunities.
              </p>
            </div>

            <div className="border border-white/15 bg-white/5 p-8">
              <Network className="w-6 h-6 text-ochre-400 mb-4" />
              <h4 className="font-display font-bold text-lg text-white mb-2">Institutional Funding</h4>
              <p className="text-xs sm:text-sm text-ink-300 leading-relaxed">
                Structured support and access to institutional capital networks for student-led enterprise ventures.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
