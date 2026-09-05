import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { heroStatCards, siteSettings } from '@/data/content';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <section className="relative min-h-screen bg-ink-950 overflow-hidden grain">
      {/* Animated gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 bg-electric-500 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 bg-cyan-500 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative section-padding pt-32 lg:pt-40 pb-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-ink-200 font-medium">
              Initiated by {siteSettings.initiatedBy}
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight animate-slide-up">
            <span className="text-gradient">Learn</span>
            <br />
            <span className="text-white">by </span>
            <span className="relative inline-block">
              <span className="text-gradient">Doing.</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-500 to-cyan-500 rounded-full" />
            </span>
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-ink-300 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            The {siteSettings.instituteName} — a new generation entrepreneurship and innovation institution built around founder-led learning, real-world execution, and the belief that you learn by doing.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/apply"
              className="inline-flex items-center justify-center gap-2 bg-white text-ink-950 font-semibold px-8 py-4 rounded-full hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-electric-500/20"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/programs/entrepreneurship"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-full border border-white/20 backdrop-blur-md hover:bg-white/15 transition-all duration-300"
            >
              <Play className="w-5 h-5" fill="currentColor" />
              Explore Program
            </Link>
          </div>

          {/* Stat cards */}
          <div className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {heroStatCards.map((stat, i) => {
              const numeric = parseInt(stat.value.replace(/[^0-9]/g, ''));
              const hasPlus = stat.value.includes('+');
              return (
                <div
                  key={i}
                  className="group p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
                >
                  <div className="font-display text-3xl lg:text-4xl font-extrabold text-white">
                    {numeric > 0 ? (
                      <AnimatedCounter value={numeric} suffix={hasPlus ? '+' : ''} />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-xs font-bold text-cyan-400 mt-2 tracking-wider">{stat.label}</div>
                  <div className="text-xs text-ink-400 mt-1">{stat.sublabel}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-slow">
        <span className="text-xs text-ink-400 tracking-wider">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-ink-400 to-transparent" />
      </div>
    </section>
  );
}
