import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { heroStatCards, siteSettings } from '@/data/content';
import AnimatedCounter from '@/components/AnimatedCounter';
import HeroVisual from './HeroVisual';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(pointer: coarse)').matches) return;
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
        className="pointer-events-none absolute top-1/4 left-1/4 h-[min(600px,70vw)] w-[min(600px,70vw)] rounded-full bg-electric-500 opacity-20 blur-[120px] transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-[min(500px,60vw)] w-[min(500px,60vw)] rounded-full bg-cyan-500 opacity-15 blur-[120px] transition-transform duration-1000 ease-out"
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

      <div className="relative section-padding flex min-h-screen flex-col justify-center py-28 lg:py-32">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="min-w-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-ink-200 font-medium">
              Initiated by {siteSettings.initiatedBy}
            </span>
          </div>

          <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-extrabold leading-[1.02] tracking-tight animate-slide-up">
            <span className="text-gradient">Learn</span>
            <br />
            <span className="text-white">by </span>
            <span className="relative inline-block">
              <span className="text-gradient">Doing.</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-500 to-cyan-500 rounded-full" />
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg lg:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
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

          </div>

          <div className="hidden lg:block">
            <HeroVisual />
          </div>
          <div className="lg:hidden">
            <HeroVisual />
          </div>

          <div className="mt-2 grid grid-cols-2 border-y border-white/15 py-5 sm:grid-cols-3 lg:col-span-2 lg:mt-8 lg:grid-cols-5 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {heroStatCards.map((stat, i) => {
              const numeric = parseInt(stat.value.replace(/[^0-9]/g, ''));
              const hasPlus = stat.value.includes('+');
              return (
                <div key={i} className="group min-w-0 border-r border-white/10 px-4 py-1 first:pl-0 last:border-r-0 sm:px-5 lg:first:pl-0">
                  <div className="font-display text-3xl font-extrabold text-white lg:text-4xl">
                    {numeric > 0 ? <AnimatedCounter value={numeric} suffix={hasPlus ? '+' : ''} /> : stat.value}
                  </div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-400">{stat.label}</div>
                  <div className="mt-1 text-[11px] leading-snug text-ink-400">{stat.sublabel}</div>
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
