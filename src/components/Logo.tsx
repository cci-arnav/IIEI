import { Link, useLocation } from 'react-router-dom';

interface LogoProps {
  /**
   * 'light'  → header is transparent (dark/hero background) — text is white
   * 'dark'   → header is scrolled (light background)        — text is dark
   */
  variant?: 'dark' | 'light';
  /** Controls rendered size; footer uses a smaller value */
  height?: 'navbar' | 'footer';
  /** Kept for API compatibility — unused for image logo */
  showCciTag?: boolean;
}

export default function Logo({ variant = 'dark', height = 'navbar' }: LogoProps) {
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isFooter  = height === 'footer';
  const isLight   = variant === 'light';   // white text (dark bg / transparent header)

  // ── Monogram image height ────────────────────────────────────────────────
  // navbar: 40 → 44 → 48px across breakpoints
  // footer: 32 → 36px
  const imgHeightClass = isFooter
    ? 'h-8 sm:h-9'
    : 'h-10 sm:h-11 lg:h-12';

  // ── Colour tokens ────────────────────────────────────────────────────────
  // Footer always sits on the dark ink-950 background.
  // Navbar: light variant = transparent over hero.
  //   Light mode (html has no 'dark' class): hero is bright → use dark navy text.
  //   Dark mode (html has 'dark' class):     hero is dark  → use white text.
  // scrolled (dark variant): light bg in light mode, dark bg in dark mode.
  const dividerColor = isFooter
    ? 'bg-white/25'
    : isLight
      ? 'bg-ink-900/25 dark:bg-white/25'
      : 'bg-ink-900/20 dark:bg-white/25';

  const primaryColor = isFooter
    ? 'text-ink-200'
    : isLight
      ? 'text-ink-900 dark:text-white'
      : 'text-ink-900 dark:text-white';

  const secondaryColor = isFooter
    ? 'text-ink-500'
    : isLight
      ? 'text-ink-500 dark:text-white/65'
      : 'text-ink-500 dark:text-ink-400';

  // ── Typography scale ─────────────────────────────────────────────────────
  // Footer is slightly smaller.  Navbar scales across breakpoints.
  // Both lines use whitespace-nowrap so they never wrap and break the lockup.
  const primaryTypo = isFooter
    ? 'text-[8.5px] sm:text-[9px] tracking-[0.13em] font-bold'
    : 'text-[8px] sm:text-[8.5px] lg:text-[9px] xl:text-[9.5px] tracking-[0.13em] xl:tracking-[0.15em] font-bold';

  const secondaryTypo = isFooter
    ? 'text-[7px] sm:text-[7.5px] tracking-[0.10em] font-semibold mt-[2.5px]'
    : 'text-[7px] sm:text-[7px] lg:text-[7.5px] xl:text-[8px] tracking-[0.09em] xl:tracking-[0.11em] font-semibold mt-[2.5px]';

  // ── Divider spacing ──────────────────────────────────────────────────────
  const dividerSpacing = isFooter
    ? 'mx-2.5 sm:mx-3'
    : 'mx-2 sm:mx-2.5 lg:mx-3';

  return (
    <Link
      to="/"
      onClick={handleLogoClick}
      className="inline-flex items-center select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-500 focus-visible:ring-offset-2 rounded-sm"
      aria-label="Indian Institute of Entrepreneurship &amp; Innovation — Home"
    >
      {/* ── MONOGRAM — completely untouched ─────────────────────── */}
      <img
        src="/assets/iiei-logo.png"
        alt=""
        className={`${imgHeightClass} w-auto object-contain object-left flex-shrink-0`}
        draggable={false}
        loading="eager"
        decoding="async"
      />

      {/* ── VERTICAL DIVIDER ─────────────────────────────────────── */}
      <span
        className={`w-px self-stretch flex-shrink-0 ${dividerColor} ${dividerSpacing}`}
        aria-hidden="true"
      />

      {/* ── TEXT LOCKUP ──────────────────────────────────────────── */}
      {/*
        aria-hidden on the visual spans; the accessible name lives
        on the parent <Link> via aria-label above.
      */}
      <span className="flex flex-col justify-center leading-none" aria-hidden="true">
        <span className={`block uppercase whitespace-nowrap ${primaryTypo} ${primaryColor}`}>
          Entrepreneurship &amp; Innovation
        </span>
        <span className={`block uppercase whitespace-nowrap ${secondaryTypo} ${secondaryColor}`}>
          Initiated by CCI India
        </span>
      </span>
    </Link>
  );
}
