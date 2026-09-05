import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { siteSettings, programs } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-200 grain">
      <div className="section-padding py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 text-sm text-ink-300 leading-relaxed max-w-sm">
              {siteSettings.instituteName} — a new generation entrepreneurship and innovation institution.
              Initiated by {siteSettings.initiatedByShort}. {siteSettings.tagline}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4 text-ink-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-4">Programs</h4>
            <ul className="space-y-3">
              {programs.map((prog) => (
                <li key={prog.id}>
                  <Link
                    to={`/programs/${prog.slug}`}
                    className="text-sm text-ink-300 hover:text-white transition-colors"
                  >
                    {prog.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/#why-iiei" className="text-sm text-ink-300 hover:text-white transition-colors">Why IIEI</Link></li>
              <li><Link to="/#learn-by-doing" className="text-sm text-ink-300 hover:text-white transition-colors">Learn by Doing</Link></li>
              <li><Link to="/faculty" className="text-sm text-ink-300 hover:text-white transition-colors">Faculty</Link></li>
              <li><Link to="/industry" className="text-sm text-ink-300 hover:text-white transition-colors">Industry</Link></li>
              <li><Link to="/outcomes" className="text-sm text-ink-300 hover:text-white transition-colors">Outcomes</Link></li>
              <li><Link to="/about" className="text-sm text-ink-300 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-ink-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:admissions@iiei.in" className="text-sm text-ink-300 hover:text-white transition-colors">
                  admissions@iiei.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-ink-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-ink-300">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-ink-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-ink-300">India</span>
              </li>
            </ul>
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300"
            >
              Apply Now
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} {siteSettings.instituteName}. Initiated by {siteSettings.initiatedBy}.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-ink-400 hover:text-ink-200 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-ink-400 hover:text-ink-200 transition-colors">Terms of Use</a>
            <a href="#" className="text-xs text-ink-400 hover:text-ink-200 transition-colors">Academic Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
