import { ArrowUpRight, Check, Lightbulb, Rocket, Target, Wrench } from 'lucide-react';
import { startupJourney } from '@/data/content';

const stageIcons = [Lightbulb, Target, Wrench, Target, ArrowUpRight, Check, Rocket, Rocket];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] min-h-[390px] sm:min-h-[440px] lg:min-h-[500px]" aria-label="The IIEI venture journey: idea, validation, prototype, market testing, pitch, funding, launch and growth">
      <div className="relative z-10 h-full border-y border-white/15 py-5 sm:py-7">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300">The venture journey</p>
            <p className="mt-2 font-display text-xl font-bold text-white">Build something real.</p>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">In motion</span>
        </div>

        <div className="relative mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-gradient-to-r from-electric-400/60 via-cyan-300/60 to-electric-400/60 sm:block" />
          {startupJourney.map((stage, index) => {
            const Icon = stageIcons[index];
            return (
              <div key={stage} className="relative flex min-w-0 flex-col items-center text-center">
                <div className={`relative z-10 flex h-12 w-12 items-center justify-center border-b ${index < 3 ? 'border-cyan-300 text-cyan-200' : 'border-white/20 text-ink-300'} transition-colors`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="mt-2 max-w-full break-words text-[10px] font-bold uppercase tracking-wider text-ink-300">{stage}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-[1.2fr_0.8fr] gap-3">
          <div className="border-t border-white/15 pt-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-ink-400">Working brief</p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-white">An idea is only the beginning. Every semester moves it closer to the market.</p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-3/5 rounded-full bg-gradient-to-r from-electric-400 to-cyan-300" /></div>
          </div>
          <div className="border-t border-cyan-300/40 pt-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-200">Next move</p>
            <p className="mt-3 font-display text-lg font-bold text-white">Pitch day</p>
            <p className="mt-1 text-xs text-ink-300">Make it clear. Make it useful.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
