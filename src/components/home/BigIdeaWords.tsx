import { useEffect, useRef, useState } from 'react';
import { bigIdeaWords } from '@/data/content';

export default function BigIdeaWords() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bigIdeaWords.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-ink-950 overflow-hidden grain">
      <div className="section-padding">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4">
            What You'll Do
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-white">
            More than a degree. A way of working.
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
          {bigIdeaWords.map((word, i) => (
            <span
              key={i}
              className={`font-display text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-extrabold transition-all duration-500 ${
                i === activeIndex
                  ? 'text-gradient scale-110'
                  : 'text-ink-700 scale-100'
              }`}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {word}
            </span>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {bigIdeaWords.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === activeIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-ink-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
