/*
  MARQUEE / TICKER — PROPER INFINITE SCROLL ARCHITECTURE
  -------------------------------------------------------
  Pattern: overflow-hidden viewport → two identical flex tracks side-by-side.
  The animation translates the entire container by -50% (exactly one track width),
  then loops seamlessly. No absolute positioning. No negative margins.
  Each item has stable intrinsic width via padding + whitespace-nowrap.
  The two tracks are structurally identical — same items, same spacing.
*/

const ITEMS = [
  '3 YEARS UG',
  '2 YEARS PG',
  '120 COHORT SEATS',
  '250+ FOUNDERS',
  'MULTIPLE INTERNSHIPS',
  'PPO COMMITMENT',
  'INSTITUTIONAL FUNDING',
  'LEARN BY DOING',
];

function Track() {
  return (
    // Each track is a flex row. flex-shrink-0 ensures it never compresses.
    // whitespace-nowrap on each item keeps the label on one line,
    // but items are separated by visible bullets — no collision possible.
    <div className="flex items-center shrink-0" aria-hidden="true">
      {ITEMS.map((text, i) => (
        <div key={i} className="flex items-center shrink-0">
          <span className="font-display text-xs sm:text-sm font-bold text-ink-300 tracking-[0.16em] whitespace-nowrap px-5 sm:px-7">
            {text}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-ochre-400 shrink-0" aria-hidden="true" />
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      className="bg-ink-950 py-4 sm:py-5 border-y border-white/10 overflow-hidden"
      aria-label="Key statistics ticker"
    >
      {/*
        Outer wrapper: overflow-hidden clips the scrolling content.
        This is intentional — it is the ticker "viewport".
        Inner scroller: flex row containing TWO identical Track copies.
        Animation moves the scroller left by 50% (= one track width),
        then instantly resets — creating a seamless loop.
      */}
      <div
        className="flex items-center w-max animate-[ticker_28s_linear_infinite]"
      >
        {/* Copy A */}
        <Track />
        {/* Copy B — structurally identical, provides seamless loop */}
        <Track />
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        /* Pause on hover for accessibility */
        @media (hover: hover) {
          section:hover .animate-\\[ticker_28s_linear_infinite\\] {
            animation-play-state: paused;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[ticker_28s_linear_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
