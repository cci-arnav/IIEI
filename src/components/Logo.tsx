import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-ink-900';
  const subColor = variant === 'light' ? 'text-blue-200' : 'text-ink-500';

  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="IIEI Home">
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-electric-500/30 group-hover:scale-105 transition-transform duration-300">
          <Zap className="w-5 h-5 text-white" fill="white" strokeWidth={2.5} />
        </div>
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-electric-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-display font-extrabold text-lg tracking-tight ${textColor}`}>
          IIEI
        </span>
        <span className={`text-[10px] font-medium tracking-wide ${subColor}`}>
          Entrepreneurship &amp; Innovation
        </span>
      </div>
    </Link>
  );
}
