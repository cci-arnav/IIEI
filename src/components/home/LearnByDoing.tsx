import { useEffect, useState } from 'react';
import { learnByDoingWords } from '@/data/content';
import Reveal from '@/components/Reveal';

export default function LearnByDoing() {
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % learnByDoingWords.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="learn-by-doing" className="py-24 lg:py-32 bg-ink-950 overflow-hidden grain">
      <div className="section-padding">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4">
              Learn by Doing
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              The cycle of building.
            </h2>
            <p className="mt-6 text-lg text-ink-400 max-w-2xl mx-auto leading-relaxed">
              Every student moves through this cycle — not once, but repeatedly. That's how you
              learn by doing.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
          {learnByDoingWords.map((word, i) => (
            <div key={i} className="flex items-center gap-4 lg:gap-6">
              <span
                className={`font-display text-3xl sm:text-4xl lg:text-6xl font-extrabold transition-all duration-500 ${
                  i === activeWord
                    ? 'text-gradient scale-110'
                    : 'text-ink-700 scale-100'
                }`}
              >
                {word}
              </span>
              {i < learnByDoingWords.length - 1 && (
                <span className="text-2xl lg:text-3xl text-ink-600">→</span>
              )}
            </div>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-lg text-ink-300 leading-relaxed">
              You <span className="font-bold text-white">learn</span> the foundations. You{' '}
              <span className="font-bold text-white">build</span> something real. You{' '}
              <span className="font-bold text-white">test</span> it in the market. You{' '}
              <span className="font-bold text-white">pitch</span> it to founders and investors. You{' '}
              <span className="font-bold text-white">launch</span> it. And then you{' '}
              <span className="font-bold text-white">grow</span> it.
            </p>
            <p className="mt-4 text-lg text-ink-400">
              That's not a tagline. That's the curriculum.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
