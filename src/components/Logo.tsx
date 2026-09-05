import { Link, useLocation } from 'react-router-dom';

interface LogoProps {
  variant?: 'dark' | 'light';
  showCciTag?: boolean;
}

export default function Logo({ variant = 'dark', showCciTag = true }: LogoProps) {
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : 'text-ink-900 dark:text-white';
  const subColor = isLight ? 'text-ink-300' : 'text-ink-500 dark:text-ink-400';
  const borderColor = isLight ? 'border-white/20' : 'border-ink-900/15 dark:border-white/20';

  return (
    <Link
      to="/"
      onClick={handleLogoClick}
      className="flex items-center gap-3.5 group text-left select-none"
      aria-label="IIEI - Indian Institute of Entrepreneurship & Innovation Homepage"
    >
      <div className="flex items-baseline gap-2">
        <span className={`font-display text-2xl lg:text-[26px] font-black tracking-[-0.06em] transition-colors ${textColor}`}>
          IIEI
        </span>
      </div>

      <div className={`hidden sm:flex flex-col border-l pl-3 py-0.5 text-left ${borderColor}`}>
        <span className={`text-[10.5px] font-extrabold uppercase tracking-[0.16em] leading-tight transition-colors ${textColor}`}>
          Entrepreneurship &amp; Innovation
        </span>
        {showCciTag && (
          <span className={`text-[9px] font-semibold tracking-[0.08em] uppercase mt-0.5 ${subColor}`}>
            Initiated by CCI India
          </span>
        )}
      </div>
    </Link>
  );
}
