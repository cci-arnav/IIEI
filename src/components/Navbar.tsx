import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import FormLink from "./FormLink";
import ThemeToggle from "./ThemeToggle";
import { navLinks, programs, degreeStructures, type DegreeLevel } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<DegreeLevel>('UG');
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const location = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setMoreOpen(false);
    setMobileProgramsOpen(false);
  }, [location.pathname]);

  const openMegaMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const scheduleMegaClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 240);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Priority navigation links
  const primaryLinks = navLinks.slice(0, 4); // Programs, Why IIEI, Learn by Doing, Fee Structure
  const secondaryLinks = navLinks.slice(4); // Faculty, Industry, Outcomes, About, Contact

  const activeStructure = degreeStructures[selectedLevel];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-ivory-50/95 dark:bg-ink-950/95 backdrop-blur-md border-b border-ink-900/10 dark:border-white/10 shadow-sm"
            : "bg-transparent border-b border-white/10 dark:border-white/5"
        }`}
      >
        <div className="mx-auto flex h-18 lg:h-20 w-full max-w-[1560px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
          <Logo variant={scrolled ? "dark" : "light"} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={openMegaMenu}
              onMouseLeave={scheduleMegaClose}
            >
              <button
                type="button"
                className={`nav-link inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.12em] py-2 transition-colors ${
                  scrolled
                    ? "text-ink-800 dark:text-ink-200 hover:text-ochre-600 dark:hover:text-ochre-400"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => (megaOpen ? setMegaOpen(false) : openMegaMenu())}
                aria-expanded={megaOpen}
                aria-haspopup="true"
              >
                Programs
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    megaOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Programs Mega Menu Panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[min(760px,calc(100vw-3rem))] transition-all duration-200 ${
                  megaOpen
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="border border-ink-900/15 dark:border-white/15 bg-white dark:bg-ink-900 p-6 shadow-2xl">
                  {/* UG / PG Segmented Selector */}
                  <div className="flex items-center justify-between border-b border-ink-900/10 dark:border-white/10 pb-4 mb-5">
                    <div>
                      <span className="editorial-label">Select Degree Track</span>
                      <p className="text-xs text-ink-500 dark:text-ink-400 mt-0.5">
                        {activeStructure.title} · {activeStructure.duration} · {activeStructure.totalFeeLakh}
                      </p>
                    </div>

                    <div className="inline-flex border border-ink-900/15 dark:border-white/15 p-1 bg-ivory-50 dark:bg-ink-950">
                      {(['UG', 'PG'] as const).map((lvl) => {
                        const struct = degreeStructures[lvl];
                        const isSelected = selectedLevel === lvl;
                        return (
                          <button
                            key={lvl}
                            type="button"
                            onClick={() => setSelectedLevel(lvl)}
                            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                              isSelected
                                ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-950'
                                : 'text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-white'
                            }`}
                          >
                            {lvl === 'UG' ? 'Undergraduate (3 Yrs)' : 'Postgraduate (2 Yrs)'}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4 Program Areas */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {programs.map((prog) => (
                      <Link
                        key={prog.id}
                        to={`/programs/${prog.slug}`}
                        className="group flex items-start justify-between border border-ink-900/10 dark:border-white/10 p-4 transition-colors hover:border-ink-900 dark:hover:border-white hover:bg-ivory-50 dark:hover:bg-ink-800/50"
                      >
                        <div className="min-w-0 pr-3">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-bold text-ochre-600 dark:text-ochre-400">
                              {prog.number}
                            </span>
                            <span
                              className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 ${
                                prog.status === 'launching'
                                  ? 'bg-ochre-500/10 text-ochre-700 dark:text-ochre-300'
                                  : 'bg-ink-100 dark:bg-ink-800 text-ink-500 dark:text-ink-400'
                              }`}
                            >
                              {prog.status === 'launching' ? 'Now Launching' : 'Coming Soon'}
                            </span>
                          </div>
                          <h4 className="font-display text-sm font-bold text-ink-900 dark:text-white group-hover:text-ochre-600 dark:group-hover:text-ochre-400 transition-colors">
                            {prog.name}
                          </h4>
                          <p className="text-[11.5px] text-ink-500 dark:text-ink-400 mt-1 line-clamp-2">
                            {prog.description}
                          </p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 shrink-0 text-ink-400 group-hover:text-ink-900 dark:group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-5 pt-3 border-t border-ink-900/10 dark:border-white/10 flex items-center justify-between text-xs">
                    <span className="text-ink-500 dark:text-ink-400">
                      Total Cohort: 120 seats (60 UG + 60 PG)
                    </span>
                    <Link
                      to="/#programs"
                      className="font-bold text-ink-900 dark:text-white hover:text-ochre-600 dark:hover:text-ochre-400 transition-colors inline-flex items-center gap-1"
                    >
                      Compare all program tracks &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Primary Links */}
            {primaryLinks.slice(1).map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`nav-link text-[13px] font-bold uppercase tracking-[0.12em] py-2 transition-colors ${
                  scrolled
                    ? "text-ink-800 dark:text-ink-200 hover:text-ochre-600 dark:hover:text-ochre-400"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* More Links Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                type="button"
                className={`nav-link inline-flex items-center gap-1 text-[13px] font-bold uppercase tracking-[0.12em] py-2 transition-colors ${
                  scrolled
                    ? "text-ink-800 dark:text-ink-200 hover:text-ochre-600 dark:hover:text-ochre-400"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => setMoreOpen(!moreOpen)}
                aria-expanded={moreOpen}
              >
                More
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute right-0 top-full pt-3 w-52 transition-all duration-200 ${
                  moreOpen
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="border border-ink-900/15 dark:border-white/15 bg-white dark:bg-ink-900 p-2 shadow-xl">
                  {secondaryLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block px-3.5 py-2 text-xs font-semibold text-ink-700 dark:text-ink-300 hover:bg-ivory-50 dark:hover:bg-ink-800 hover:text-ink-950 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden lg:flex items-center gap-3">
            <FormLink
              type="enquiry"
              icon="external"
              className={`text-[12.5px] font-bold uppercase tracking-[0.12em] px-3.5 py-2 transition-colors ${
                scrolled
                  ? "text-ink-700 dark:text-ink-300 hover:text-ink-950 dark:hover:text-white"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Enquire
            </FormLink>

            <ThemeToggle />

            <FormLink
              type="apply"
              className="btn-primary text-[12.5px] font-bold uppercase tracking-[0.12em] px-5 py-2.5 bg-ink-900 text-white hover:bg-ochre-600 dark:bg-white dark:text-ink-950 dark:hover:bg-ochre-400 dark:hover:text-ink-950 border border-transparent shadow-sm"
            >
              Apply Now
            </FormLink>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              className={`p-2 focus:outline-none ${
                scrolled ? "text-ink-900 dark:text-white" : "text-white"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-18 left-0 right-0 bottom-0 bg-white dark:bg-ink-950 border-t border-ink-900/10 dark:border-white/10 overflow-y-auto transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="section-padding py-6 flex flex-col gap-2">
            {/* Degree Track Selector in Mobile Menu */}
            <div className="border border-ink-900/10 dark:border-white/10 p-4 bg-ivory-50 dark:bg-ink-900/50 mb-2">
              <span className="editorial-label block mb-2">Degree Tracks</span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedLevel('UG')}
                  className={`p-2 text-left border ${
                    selectedLevel === 'UG'
                      ? 'border-ink-900 bg-ink-900 text-white dark:border-white dark:bg-white dark:text-ink-950'
                      : 'border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-300'
                  }`}
                >
                  <span className="block text-xs font-bold">Undergraduate</span>
                  <span className="block text-[10px] opacity-80">3 Years · ₹25L</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLevel('PG')}
                  className={`p-2 text-left border ${
                    selectedLevel === 'PG'
                      ? 'border-ink-900 bg-ink-900 text-white dark:border-white dark:bg-white dark:text-ink-950'
                      : 'border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-300'
                  }`}
                >
                  <span className="block text-xs font-bold">Postgraduate</span>
                  <span className="block text-[10px] opacity-80">2 Years · ₹30L</span>
                </button>
              </div>
            </div>

            {/* Programs Section in Mobile */}
            <div className="border-b border-ink-900/10 dark:border-white/10 pb-2">
              <button
                type="button"
                className="w-full flex items-center justify-between py-3 text-left font-display text-base font-bold text-ink-900 dark:text-white"
                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                aria-expanded={mobileProgramsOpen}
              >
                <span>Programs ({selectedLevel})</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileProgramsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileProgramsOpen && (
                <div className="pb-3 space-y-2 pl-2">
                  {programs.map((prog) => (
                    <Link
                      key={prog.id}
                      to={`/programs/${prog.slug}`}
                      className="block p-2 text-sm text-ink-700 dark:text-ink-300 border-l-2 border-ink-300 dark:border-ink-700 hover:border-ochre-600 hover:text-ink-900 dark:hover:text-white"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{prog.name}</span>
                        <span className="text-[9px] uppercase font-bold text-ochre-600 dark:text-ochre-400">
                          {prog.status === 'launching' ? 'Launching' : 'Soon'}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="py-3 font-display text-base font-bold text-ink-900 dark:text-white border-b border-ink-900/10 dark:border-white/10 hover:text-ochre-600 dark:hover:text-ochre-400"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <FormLink
                type="enquiry"
                icon="external"
                className="btn-primary w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider border border-ink-900 dark:border-white text-ink-900 dark:text-white"
              >
                Enquire
              </FormLink>
              <FormLink
                type="apply"
                className="btn-primary w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider bg-ink-900 dark:bg-white text-white dark:text-ink-950"
              >
                Apply Now
              </FormLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
