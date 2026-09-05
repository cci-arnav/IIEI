import { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem('iiei-preloader-seen'));

  useEffect(() => {
    if (!visible) return;
    sessionStorage.setItem('iiei-preloader-seen', 'true');
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 250 : 900;
    const timer = window.setTimeout(() => setVisible(false), duration);
    return () => window.clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950 text-white transition-opacity duration-500" role="status" aria-label="Loading IIEI">
      <div className="w-[min(22rem,calc(100vw-3rem))] text-center">
        <div className="font-display text-5xl font-extrabold tracking-[-0.08em] text-white">IIEI</div>
        <div className="mx-auto mt-5 h-px w-full overflow-hidden bg-white/20"><div className="h-full w-1/3 animate-preloader bg-amber-300" /></div>
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.24em] text-ink-300">Indian Institute of Entrepreneurship &amp; Innovation</p>
      </div>
    </div>
  );
}
