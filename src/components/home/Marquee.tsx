
export default function Marquee() {
  return (
    <section className="bg-ink-950 dark:bg-ink-950 py-5 border-y border-white/10 overflow-hidden">
      <div className="flex items-center gap-8 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...Array(3)].map((_, set) => (
          <div key={set} className="flex items-center gap-8">
            {[
              '3 YEARS UG',
              '2 YEARS PG',
              '120 COHORT SEATS',
              '250+ FOUNDERS',
              'MULTIPLE INTERNSHIPS',
              'PPO COMMITMENT',
              'INSTITUTIONAL FUNDING',
              'LEARN BY DOING',
            ].map((text, i) => (
              <div key={`${set}-${i}`} className="flex items-center gap-8">
                <span className="font-display text-xs sm:text-sm font-bold text-ink-300 tracking-[0.16em]">
                  {text}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-ochre-400" />
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
