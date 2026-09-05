import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { navLinks, programs } from '@/data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-ink-900/5 border-b border-ink-100'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-padding h-16 lg:h-20 flex items-center justify-between">
          <Logo variant={scrolled ? 'dark' : 'dark'} />

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasMegaMenu ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors">
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {megaOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[640px]">
                      <div className="bg-white rounded-2xl shadow-2xl shadow-ink-900/10 border border-ink-100 p-3 grid grid-cols-2 gap-2 animate-fade-in">
                        {programs.map((prog) => (
                          <Link
                            key={prog.id}
                            to={`/programs/${prog.slug}`}
                            className="group p-4 rounded-xl hover:bg-ink-50 transition-colors"
                          >
                            <div className="flex items-start gap-3">
                              <span className="text-xs font-bold text-electric-500 mt-0.5">{prog.number}</span>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold text-sm text-ink-900 group-hover:text-electric-600 transition-colors">
                                    {prog.shortName}
                                  </span>
                                  {prog.status === 'launching' && (
                                    <span className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                      Now
                                    </span>
                                  )}
                                  {prog.status === 'coming-soon' && (
                                    <span className="text-[10px] font-bold uppercase tracking-wide text-ink-400 bg-ink-100 px-2 py-0.5 rounded-full">
                                      Soon
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-ink-500 mt-1 line-clamp-2">{prog.description}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-2 text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors px-4 py-2"
            >
              Talk to Advisor
            </Link>
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-ink-900 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-ink-800 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-ink-900/20"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-ink-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bottom-0 bg-white overflow-y-auto animate-fade-in">
            <div className="section-padding py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="py-3 text-lg font-medium text-ink-900 border-b border-ink-100"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-6">
                <Link
                  to="/contact"
                  className="text-center py-3 text-sm font-semibold text-ink-900 border-2 border-ink-200 rounded-full"
                >
                  Talk to Advisor
                </Link>
                <Link
                  to="/apply"
                  className="text-center py-3 text-sm font-semibold text-white bg-ink-900 rounded-full"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
