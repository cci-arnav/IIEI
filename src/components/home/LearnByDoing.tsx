import { useEffect, useState } from 'react';
import { learnByDoingWords } from '@/data/content';
import Reveal from '@/components/Reveal';

export default function LearnByDoing() {
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % learnByDoingWords.length);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="learn-by-doing" className="py-24 lg:py-32 bg-ink-950 text-white border-b border-white/10 overflow-hidden">
      <div className="section-padding">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="editorial-label text-ochre-400">Core Methodology</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-3">
              The Execution Cycle
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-300 leading-relaxed">
              Every term rotates through this cycle repeatedly — translating theory into market validation and enterprise scaling.
            </p>
          </div>
        </Reveal>

        {/* Word Sequence */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-8 max-w-5xl mx-auto my-12">
          {learnByDoingWords.map((word, i) => {
            const isActive = i === activeWord;
            return (
              <div key={i} className="flex items-center gap-3 sm:gap-6">
                <span
                  className={`font-display text-2xl sm:text-4xl lg:text-6xl font-black transition-all duration-300 ${
                    isActive
                      ? 'text-ochre-400 scale-105 underline decoration-ochre-500/50 decoration-4 underline-offset-8'
                      : 'text-ink-600 dark:text-ink-700'
                  }`}
                >
                  {word}
                </span>
                {i < learnByDoingWords.length - 1 && (
                  <span className="text-ink-700 text-xl font-bold hidden sm:inline">→</span>
                )}
              </div>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 max-w-3xl mx-auto text-center border-t border-white/15 pt-10">
            <p className="text-base sm:text-lg text-ink-200 leading-relaxed">
              Students do not write hypothetical reports. You validate ideas directly with customers, write real software or business models, pitch to venture capitalists, and iterate until commercial viability.
            </p>
            <p className="mt-3 text-xs sm:text-sm text-ochre-400 font-bold uppercase tracking-wider">
              That is Learn by Doing at IIEI.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
