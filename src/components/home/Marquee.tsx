import { siteSettings } from '@/data/content';
import Reveal from '@/components/Reveal';

export default function Marquee() {
  return (
    <section className="bg-ink-950 py-6 border-y border-white/5 overflow-hidden">
      <div className="flex items-center gap-8 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...Array(3)].map((_, set) => (
          <div key={set} className="flex items-center gap-8">
            {[
              '2 YEARS',
              '4 SEMESTERS',
              '120 STUDENTS',
              '250+ FOUNDERS',
              'MULTIPLE INTERNSHIPS',
              'PPO COMMITMENT',
              'INSTITUTIONAL FUNDING',
              'LEARN BY DOING',
            ].map((text, i) => (
              <div key={`${set}-${i}`} className="flex items-center gap-8">
                <span className="font-display text-sm font-bold text-ink-400 tracking-widest">
                  {text}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
