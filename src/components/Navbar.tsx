import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { navLinks, programs } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const location = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
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
    closeTimer.current = setTimeout(() => setMegaOpen(false), 280);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-ink-900/5 border-b border-ink-100"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12 min-[1440px]:px-12 2xl:px-24 lg:h-20">
          <Logo variant={scrolled ? "dark" : "light"} />

          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-1 min-[1440px]:hidden">
            {navLinks.slice(0, 3).map((link) =>
              link.hasMegaMenu ? (
                <div key={link.label} className="relative" onMouseEnter={openMegaMenu} onMouseLeave={scheduleMegaClose}>
                  <button
                    className={`nav-link flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors ${scrolled ? "text-ink-700" : "text-white/85"}`}
                    onClick={() => megaOpen ? setMegaOpen(false) : openMegaMenu()}
                    onFocus={openMegaMenu}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`absolute left-0 top-full z-50 w-[min(640px,calc(100vw-2rem))] pt-3 transition-all duration-300 ${megaOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 pointer-events-none opacity-0"}`}>
                    <div className="grid grid-cols-2 gap-2 border border-ink-100 bg-white p-3 shadow-2xl shadow-ink-900/15">
                      {programs.map((prog) => (
                        <Link key={prog.id} to={`/programs/${prog.slug}`} className="group border-b border-ink-100 p-4 transition-colors last:border-0 hover:bg-ink-50">
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 text-xs font-bold text-electric-500">{prog.number}</span>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-2">
                                <span className="text-sm font-semibold text-ink-900 transition-colors group-hover:text-electric-600">{prog.shortName}</span>
                                <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wide ${prog.status === "launching" ? "text-emerald-600" : "text-ink-400"}`}>{prog.status === "launching" ? "Now" : "Soon"}</span>
                              </div>
                              <p className="mt-1 line-clamp-2 text-xs text-ink-500">{prog.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.label} to={link.href} className={`nav-link px-3 py-2 text-[13px] font-medium transition-colors ${scrolled ? "text-ink-700" : "text-white/85"}`}>{link.label}</Link>
              ),
            )}
            <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
              <button className={`nav-link flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors ${scrolled ? "text-ink-700" : "text-white/85"}`} onClick={() => setMoreOpen(!moreOpen)} aria-expanded={moreOpen} aria-haspopup="true">
                More <ChevronDown className={`h-4 w-4 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute right-0 top-full z-50 w-56 pt-3 transition-all duration-300 ${moreOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 pointer-events-none opacity-0"}`}>
                <div className="border border-ink-100 bg-white p-2 shadow-xl shadow-ink-900/10">
                  {navLinks.slice(3).map((link) => <Link key={link.label} to={link.href} className="block border-b border-ink-100 px-3 py-3 text-sm font-medium text-ink-700 last:border-0 hover:bg-ink-50 hover:text-ink-900">{link.label}</Link>)}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden min-[1440px]:flex min-[1440px]:flex-1 min-[1440px]:justify-center min-[1440px]:gap-1">
            {navLinks.map((link) =>
              link.hasMegaMenu ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openMegaMenu}
                  onMouseLeave={scheduleMegaClose}
                >
                  <button
                    className={`nav-link flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors ${scrolled ? "text-ink-700" : "text-white/85"}`}
                    onClick={() =>
                      megaOpen ? setMegaOpen(false) : openMegaMenu()
                    }
                    onFocus={openMegaMenu}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[min(640px,calc(100vw-2rem))] transition-all duration-300 ${megaOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1 pointer-events-none"}`}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl shadow-ink-900/15 border border-ink-100 p-3 grid grid-cols-2 gap-2">
                      {programs.map((prog) => (
                        <Link
                          key={prog.id}
                          to={`/programs/${prog.slug}`}
                          className="group p-4 rounded-xl hover:bg-ink-50 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-xs font-bold text-electric-500 mt-0.5">
                              {prog.number}
                            </span>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm text-ink-900 group-hover:text-electric-600 transition-colors">
                                  {prog.shortName}
                                </span>
                                {prog.status === "launching" && (
                                  <span className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                    Now
                                  </span>
                                )}
                                {prog.status === "coming-soon" && (
                                  <span className="text-[10px] font-bold uppercase tracking-wide text-ink-400 bg-ink-100 px-2 py-0.5 rounded-full">
                                    Soon
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-ink-500 mt-1 line-clamp-2">
                                {prog.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                    className={`nav-link px-3 py-2 text-[13px] font-medium transition-colors ${scrolled ? "text-ink-700" : "text-white/85"}`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          <div className="hidden lg:flex shrink-0 items-center gap-2">
            <Link
              to="/contact"
              className={`nav-link whitespace-nowrap px-3 py-2 text-[13px] font-medium transition-colors ${scrolled ? "text-ink-700" : "text-white/85"}`}
            >
              Talk to Advisor
            </Link>
            <Link
              to="/apply"
              className="cta-shine inline-flex shrink-0 items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-[13px] font-semibold text-white shadow-lg shadow-ink-900/20 transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 ${scrolled ? "text-ink-900" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}`}
      >
        <div
          className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 bottom-0 bg-white overflow-y-auto transition-transform duration-300 ${mobileOpen ? "translate-y-0" : "-translate-y-3"}`}
        >
          <div className="section-padding py-6 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.hasMegaMenu ? (
                <div key={link.label} className="border-b border-ink-100">
                  <button
                    className="w-full flex items-center justify-between py-3 text-left text-lg font-medium text-ink-900"
                    onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                    aria-expanded={mobileProgramsOpen}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${mobileProgramsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${mobileProgramsOpen ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      {programs.map((prog) => (
                        <Link
                          key={prog.id}
                          to={`/programs/${prog.slug}`}
                          className="flex items-start gap-3 py-3 pl-3 text-sm text-ink-700"
                        >
                          <span className="text-xs font-bold text-electric-500 mt-0.5">
                            {prog.number}
                          </span>
                          <span>
                            <span className="block font-semibold text-ink-900">
                              {prog.shortName}
                            </span>
                            <span className="text-xs text-ink-500">
                              {prog.statusLabel}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="py-3 text-lg font-medium text-ink-900 border-b border-ink-100"
                >
                  {link.label}
                </Link>
              ),
            )}
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
    </>
  );
}
