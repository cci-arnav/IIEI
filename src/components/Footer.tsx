import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import FormLink from './FormLink';
import { siteSettings, programs } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300 border-t border-white/10 transition-colors">
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column & CCI Lockup */}
          <div className="lg:col-span-5">
            <Logo variant="light" showCciTag={true} />
            <p className="mt-5 text-xs sm:text-sm text-ink-300 leading-relaxed max-w-sm">
              {siteSettings.instituteName} — an institutional business school established under the stewardship of {siteSettings.initiatedBy} ({siteSettings.initiatedByShort}).
            </p>

            {/* Supporting CCI India Asset Slot */}
            <div className="mt-6 inline-flex items-center gap-3 border border-white/15 px-3.5 py-2 bg-white/5">
              <img
                src="/assets/branding/cci-logo.svg"
                alt="CCI India"
                className="h-6 w-auto object-contain text-white opacity-90"
              />
              <span className="text-[10px] font-bold uppercase tracking-wider text-ink-300 border-l border-white/20 pl-3">
                Initiating Body
              </span>
            </div>

            <div className="flex items-center gap-2.5 mt-8">
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-ink-400 transition-colors hover:border-white hover:text-white"
                  aria-label="Social Link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-3">
            <span className="editorial-label text-[10px] text-ochre-400 block mb-4">Programs</span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {programs.map((prog) => (
                <li key={prog.id}>
                  <Link
                    to={`/programs/${prog.slug}`}
                    className="text-ink-300 hover:text-white transition-colors block"
                  >
                    {prog.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institute Column */}
          <div className="lg:col-span-2">
            <span className="editorial-label text-[10px] text-ochre-400 block mb-4">Institute</span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link to="/#why-iiei" className="text-ink-300 hover:text-white transition-colors">Why IIEI</Link></li>
              <li><Link to="/#learn-by-doing" className="text-ink-300 hover:text-white transition-colors">Learn by Doing</Link></li>
              <li><Link to="/#investment" className="text-ink-300 hover:text-white transition-colors">Fee Schedule</Link></li>
              <li><Link to="/faculty" className="text-ink-300 hover:text-white transition-colors">Founder Faculty</Link></li>
              <li><Link to="/industry" className="text-ink-300 hover:text-white transition-colors">Industry Network</Link></li>
              <li><Link to="/about" className="text-ink-300 hover:text-white transition-colors">About the Institute</Link></li>
            </ul>
          </div>

          {/* Admissions & Contact */}
          <div className="lg:col-span-2">
            <span className="editorial-label text-[10px] text-ochre-400 block mb-4">Admissions</span>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-ochre-400 shrink-0 mt-0.5" />
                <a href="mailto:admissions@iiei.in" className="text-ink-300 hover:text-white transition-colors">
                  admissions@iiei.in
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-ochre-400 shrink-0 mt-0.5" />
                <span className="text-ink-300">India</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-2">
              <FormLink
                type="apply"
                className="btn-primary text-center px-4 py-2.5 bg-white text-ink-950 text-xs font-bold uppercase tracking-wider hover:bg-ochre-400"
              >
                Apply Now
              </FormLink>
              <FormLink
                type="enquiry"
                icon="external"
                className="btn-primary text-center px-4 py-2.5 border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10"
              >
                Enquire
              </FormLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-400">
          <p>
            © {new Date().getFullYear()} {siteSettings.instituteName}. Initiated by {siteSettings.initiatedBy}.
          </p>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Academic Charter</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
