import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import FormLink from "./FormLink";
import ThemeToggle from "./ThemeToggle";
import { navLinks, programs, degreeStructures, type DegreeLevel } from "@/data/content";

/*
  NAVBAR RESPONSIVE STRATEGY
  ─────────────────────────────────────────────────────────
  < lg  (< 1024px) : Mobile drawer — hamburger menu
  lg    (1024–1279px) : Compact desktop — Programs + Why IIEI + More → actions
  xl+   (≥ 1280px)   : Full desktop   — Programs + Why IIEI + Learn by Doing + Fee Structure + More → actions

  This ensures nav items NEVER collide at any standard viewport.
  Each nav label uses whitespace-nowrap (correct — they are short labels).
  The nav container has flex-1 with justify-center; the logo and
  right-actions are shrink-0 so they never compress.

  On the compact lg breakpoint, "Learn by Doing" and "Fee Structure"
  move into the More dropdown rather than squeezing into the row.
*/

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<DegreeLevel>("UG");
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const location = useLocation();
  const megaCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const moreCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openMega = () => {
    if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    megaCloseTimer.current = setTimeout(() => setMegaOpen(false), 220);
  };
  const openMore = () => {
    if (moreCloseTimer.current) clearTimeout(moreCloseTimer.current);
    setMoreOpen(true);
  };
  const closeMore = () => {
    moreCloseTimer.current = setTimeout(() => setMoreOpen(false), 220);
  };

  /*
    navLinks indices:
    [0] Programs  (mega)
    [1] Why IIEI
    [2] Learn by Doing
    [3] Fee Structure
    [4] Faculty
    [5] Industry
    [6] Outcomes
    [7] About
    [8] Contact

    lg breakpoint (1024–1279px): show [1] "Why IIEI" only from primary links.
      "Learn by Doing" + "Fee Structure" move into More.
    xl breakpoint (≥ 1280px): show [1] "Why IIEI" + [2] "Learn by Doing" + [3] "Fee Structure".
      More = Faculty, Industry, Outcomes, About, Contact only.

    We implement this with two separate nav renders, hidden/visible at lg vs xl.
  */

  // lg (compact) primary: Why IIEI only
  const lgPrimaryLinks = navLinks.slice(1, 2);
  // lg (compact) more: Learn by Doing, Fee Structure, Faculty, Industry, Outcomes, About, Contact
  const lgMoreLinks = navLinks.slice(2);

  // xl (full) primary: Why IIEI, Learn by Doing, Fee Structure
  const xlPrimaryLinks = navLinks.slice(1, 4);
  // xl (full) more: Faculty, Industry, Outcomes, About, Contact
  const xlMoreLinks = navLinks.slice(4);

  const activeStructure = degreeStructures[selectedLevel];

  // Base nav link classes — whitespace-nowrap is correct for short labels
  const navLinkBase =
    "whitespace-nowrap nav-link text-[12px] xl:text-[12.5px] font-bold uppercase tracking-[0.11em] xl:tracking-[0.12em] py-2 transition-colors";

  const linkColor = scrolled
    ? "text-ink-800 dark:text-ink-200 hover:text-ochre-600 dark:hover:text-ochre-400"
    : "text-ink-900 dark:text-white/90 hover:text-ochre-600 dark:hover:text-white";

  // Shared mega menu panel — used by both lg and xl nav renders
  const MegaMenuPanel = () => (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
        megaOpen
          ? "visible opacity-100 translate-y-0"
          : "invisible opacity-0 -translate-y-1 pointer-events-none"
      }`}
      style={{ width: "min(720px, calc(100vw - 2.5rem))" }}
    >
      <div className="border border-ink-900/15 dark:border-white/15 bg-white dark:bg-ink-900 p-5 shadow-2xl">
        {/* UG / PG Selector */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-ink-900/10 dark:border-white/10 pb-4 mb-4">
          <div className="min-w-0">
            <span className="editorial-label">Degree Track</span>
            <p className="text-[11px] text-ink-500 dark:text-ink-400 mt-0.5">
              {activeStructure.title} · {activeStructure.duration} · {activeStructure.totalFeeLakh}
            </p>
          </div>
          <div className="inline-flex border border-ink-900/15 dark:border-white/15 p-0.5 bg-ivory-50 dark:bg-ink-950 gap-0.5 shrink-0">
            {(["UG", "PG"] as const).map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setSelectedLevel(lvl)}
                className={`whitespace-nowrap px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                  selectedLevel === lvl
                    ? "bg-ink-900 text-white dark:bg-white dark:text-ink-950"
                    : "text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-white"
                }`}
              >
                {lvl === "UG" ? "UG (3 Yrs)" : "PG (2 Yrs)"}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Program Cards — grid with minmax(0,1fr) to prevent overflow */}
        <div className="grid grid-cols-2 gap-2.5" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {programs.map((prog) => (
            <Link
              key={prog.id}
              to={`/programs/${prog.slug}`}
              className="group flex items-start justify-between border border-ink-900/10 dark:border-white/10 p-3.5 transition-colors hover:border-ink-900 dark:hover:border-white hover:bg-ivory-50 dark:hover:bg-ink-800/50 min-w-0"
            >
              <div className="min-w-0 pr-2 flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-[11px] font-bold text-ochre-600 dark:text-ochre-400 shrink-0">
                    {prog.number}
                  </span>
                  <span
                    className={`text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 whitespace-nowrap ${
                      prog.status === "launching"
                        ? "bg-ochre-500/10 text-ochre-700 dark:text-ochre-300"
                        : "bg-ink-100 dark:bg-ink-800 text-ink-500 dark:text-ink-400"
                    }`}
                  >
                    {prog.status === "launching" ? "Now Launching" : "Coming Soon"}
                  </span>
                </div>
                {/* Program name must wrap — do NOT add whitespace-nowrap here */}
                <h4 className="font-display text-sm font-bold text-ink-900 dark:text-white group-hover:text-ochre-600 dark:group-hover:text-ochre-400 transition-colors leading-snug break-words">
                  {prog.name}
                </h4>
                <p className="text-[11px] text-ink-500 dark:text-ink-400 mt-1 line-clamp-2 leading-snug">
                  {prog.description}
                </p>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-ink-400 group-hover:text-ink-900 dark:group-hover:text-white mt-0.5" />
            </Link>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-ink-900/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px]">
          <span className="text-ink-500 dark:text-ink-400">120 seats · 60 UG + 60 PG</span>
          <Link
            to="/#programs"
            className="font-bold text-ink-900 dark:text-white hover:text-ochre-600 dark:hover:text-ochre-400 transition-colors inline-flex items-center gap-1 whitespace-nowrap"
          >
            Compare programs &rarr;
          </Link>
        </div>
      </div>
    </div>
  );

  // Shared More dropdown panel
  const MoreMenuPanel = ({ links }: { links: typeof navLinks }) => (
    <div
      className={`absolute right-0 top-full pt-3 w-48 transition-all duration-200 ${
        moreOpen
          ? "visible opacity-100 translate-y-0"
          : "invisible opacity-0 -translate-y-1 pointer-events-none"
      }`}
    >
      <div className="border border-ink-900/15 dark:border-white/15 bg-white dark:bg-ink-900 py-1.5 shadow-xl">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="block px-4 py-2 text-[12.5px] font-semibold text-ink-700 dark:text-ink-300 hover:bg-ivory-50 dark:hover:bg-ink-800 hover:text-ink-950 dark:hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );

  // Shared right actions
  const RightActions = () => (
    <div className="hidden lg:flex items-center gap-2 shrink-0">
      <FormLink
        type="enquiry"
        icon="external"
        className={`whitespace-nowrap text-[11.5px] xl:text-[12px] font-bold uppercase tracking-[0.11em] px-2.5 xl:px-3 py-2 transition-colors ${linkColor}`}
      >
        Enquire
      </FormLink>
      <ThemeToggle />
      <FormLink
        type="apply"
        className="whitespace-nowrap btn-primary text-[11.5px] xl:text-[12px] font-bold uppercase tracking-[0.11em] px-3.5 xl:px-5 py-2 bg-ink-900 text-white hover:bg-ochre-600 dark:bg-white dark:text-ink-950 dark:hover:bg-ochre-400 dark:hover:text-ink-950 border border-transparent shadow-sm"
      >
        Apply Now
      </FormLink>
    </div>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-ivory-50/97 dark:bg-ink-950/97 backdrop-blur-md border-b border-ink-900/10 dark:border-white/10 shadow-sm"
            : "bg-transparent border-b border-ink-900/10 dark:border-white/10"
        }`}
      >
        <div className="mx-auto h-16 w-full max-w-[1560px] px-5 sm:px-8 lg:px-10 xl:px-14 2xl:px-16 flex items-center justify-between gap-3">

          {/* LOGO — never shrinks */}
          <div className="shrink-0">
            <Logo height="navbar" variant={scrolled ? 'dark' : 'light'} />
          </div>

          {/* ── COMPACT DESKTOP NAV (lg: 1024–1279px) ────────────── */}
          {/*
            Shows: Programs | Why IIEI | More (contains Learn by Doing, Fee Structure, Faculty, etc.)
            This keeps the navbar collision-free at 1024–1279px.
          */}
          <nav
            aria-label="Main navigation (compact)"
            className="hidden lg:flex xl:hidden items-center gap-0.5 flex-1 justify-center"
          >
            {/* Programs */}
            <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
              <button
                type="button"
                className={`${navLinkBase} inline-flex items-center gap-1 px-2.5 ${linkColor}`}
                onClick={() => (megaOpen ? setMegaOpen(false) : openMega())}
                aria-expanded={megaOpen}
                aria-haspopup="true"
              >
                Programs
                <ChevronDown className={`w-3 h-3 shrink-0 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
              </button>
              <MegaMenuPanel />
            </div>

            {/* Why IIEI */}
            {lgPrimaryLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`${navLinkBase} px-2.5 ${linkColor}`}
              >
                {link.label}
              </Link>
            ))}

            {/* More — includes Learn by Doing, Fee Structure, Faculty, etc. */}
            <div className="relative" onMouseEnter={openMore} onMouseLeave={closeMore}>
              <button
                type="button"
                className={`${navLinkBase} inline-flex items-center gap-1 px-2.5 ${linkColor}`}
                onClick={() => setMoreOpen(!moreOpen)}
                aria-expanded={moreOpen}
              >
                More
                <ChevronDown className={`w-3 h-3 shrink-0 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
              </button>
              <MoreMenuPanel links={lgMoreLinks} />
            </div>
          </nav>

          {/* ── FULL DESKTOP NAV (xl: ≥ 1280px) ─────────────────── */}
          {/*
            Shows: Programs | Why IIEI | Learn by Doing | Fee Structure | More
            Full nav at wide viewports.
          */}
          <nav
            aria-label="Main navigation"
            className="hidden xl:flex items-center gap-1 flex-1 justify-center"
          >
            {/* Programs */}
            <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
              <button
                type="button"
                className={`${navLinkBase} inline-flex items-center gap-1 px-2.5 xl:px-3 ${linkColor}`}
                onClick={() => (megaOpen ? setMegaOpen(false) : openMega())}
                aria-expanded={megaOpen}
                aria-haspopup="true"
              >
                Programs
                <ChevronDown className={`w-3 h-3 shrink-0 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
              </button>
              <MegaMenuPanel />
            </div>

            {/* Why IIEI, Learn by Doing, Fee Structure */}
            {xlPrimaryLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`${navLinkBase} px-2.5 xl:px-3 ${linkColor}`}
              >
                {link.label}
              </Link>
            ))}

            {/* More — Faculty, Industry, Outcomes, About, Contact */}
            <div className="relative" onMouseEnter={openMore} onMouseLeave={closeMore}>
              <button
                type="button"
                className={`${navLinkBase} inline-flex items-center gap-1 px-2.5 xl:px-3 ${linkColor}`}
                onClick={() => setMoreOpen(!moreOpen)}
                aria-expanded={moreOpen}
              >
                More
                <ChevronDown className={`w-3 h-3 shrink-0 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
              </button>
              <MoreMenuPanel links={xlMoreLinks} />
            </div>
          </nav>

          {/* RIGHT ACTIONS — lg and xl */}
          <RightActions />

          {/* MOBILE / TABLET — hamburger */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <ThemeToggle />
            <button
              type="button"
              className={`p-2 focus:outline-none transition-colors ${
                scrolled ? "text-ink-900 dark:text-white" : "text-ink-900 dark:text-white"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ─────────────────────────────────────────── */}
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
          className={`absolute top-16 left-0 right-0 bottom-0 bg-white dark:bg-ink-950 border-t border-ink-900/10 dark:border-white/10 overflow-y-auto transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-y-0" : "-translate-y-2 opacity-0"
          }`}
        >
          <div className="px-5 sm:px-8 py-5 flex flex-col gap-1">

            {/* Degree Track Selector */}
            <div className="border border-ink-900/10 dark:border-white/10 p-4 bg-ivory-50 dark:bg-ink-900/50 mb-3">
              <span className="editorial-label block mb-2.5">Select Degree Track</span>
              <div className="grid grid-cols-2 gap-2">
                {(["UG", "PG"] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSelectedLevel(lvl)}
                    className={`p-2.5 text-left border transition-colors ${
                      selectedLevel === lvl
                        ? "border-ink-900 bg-ink-900 text-white dark:border-white dark:bg-white dark:text-ink-950"
                        : "border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-300 hover:border-ink-500"
                    }`}
                  >
                    <span className="block text-xs font-bold">
                      {lvl === "UG" ? "Undergraduate" : "Postgraduate"}
                    </span>
                    <span className="block text-[10px] opacity-75 mt-0.5">
                      {lvl === "UG" ? "3 Years · ₹25L" : "2 Years · ₹30L"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Programs Expandable */}
            <div className="border-b border-ink-900/10 dark:border-white/10">
              <button
                type="button"
                className="w-full flex items-center justify-between py-3.5 text-left"
                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                aria-expanded={mobileProgramsOpen}
              >
                <span className="font-display text-[15px] font-bold text-ink-900 dark:text-white">
                  Programs
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-ink-500 transition-transform shrink-0 ${
                    mobileProgramsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileProgramsOpen && (
                <div className="pb-3 space-y-1 pl-3">
                  {programs.map((prog) => (
                    <Link
                      key={prog.id}
                      to={`/programs/${prog.slug}`}
                      className="flex items-center justify-between p-2 text-sm text-ink-700 dark:text-ink-300 border-l-2 border-ink-200 dark:border-ink-700 hover:border-ochre-600 hover:text-ink-900 dark:hover:text-white transition-colors"
                    >
                      {/* Program name can wrap on mobile */}
                      <span className="font-semibold leading-snug min-w-0 pr-2">{prog.name}</span>
                      <span className="text-[9px] uppercase font-bold text-ochre-600 dark:text-ochre-400 whitespace-nowrap shrink-0">
                        {prog.status === "launching" ? "Launching" : "Soon"}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* All other nav links — can wrap naturally */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="py-3.5 font-display text-[15px] font-bold text-ink-900 dark:text-white border-b border-ink-900/10 dark:border-white/10 hover:text-ochre-600 dark:hover:text-ochre-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTAs */}
            <div className="flex flex-col gap-2.5 mt-5 pt-5 border-t border-ink-900/10 dark:border-white/10">
              <FormLink
                type="enquiry"
                icon="external"
                className="btn-primary w-full py-3 text-center text-xs font-bold uppercase tracking-wider border border-ink-900 dark:border-white text-ink-900 dark:text-white hover:bg-ink-900 hover:text-white dark:hover:bg-white dark:hover:text-ink-950 transition-colors"
              >
                Enquire
              </FormLink>
              <FormLink
                type="apply"
                className="btn-primary w-full py-3 text-center text-xs font-bold uppercase tracking-wider bg-ink-900 dark:bg-white text-white dark:text-ink-950 hover:bg-ochre-600 dark:hover:bg-ochre-400 transition-colors"
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
