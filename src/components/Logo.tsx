import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-ink-900';
  const subColor = variant === 'light' ? 'text-blue-200' : 'text-ink-500';

  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="IIEI Home">
      <div className="flex items-center gap-3">
        <span className={`font-display text-2xl font-extrabold tracking-[-0.08em] ${textColor}`}>IIEI</span>
        <span className={`hidden border-l pl-3 text-[10px] font-medium uppercase tracking-[0.16em] sm:block ${variant === 'light' ? 'border-white/30' : 'border-ink-200'} ${subColor}`}>
          Entrepreneurship<br />&amp; Innovation
        </span>
        <ArrowUpRight className={`h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${subColor}`} />
      </div>
    </Link>
  );
}
