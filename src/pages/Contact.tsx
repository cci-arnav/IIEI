import Reveal from '@/components/Reveal';
import FormLink from '@/components/FormLink';
import { hasGoogleForm } from '@/config/forms';
import { siteSettings } from '@/data/content';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const configured = hasGoogleForm('enquiry');

  return (
    <>
      <section className="bg-ink-950 text-white pt-32 pb-20 lg:pt-40 border-b border-white/10">
        <div className="section-padding">
          <Reveal>
            <span className="editorial-label text-ochre-400">Admissions Office</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mt-4">
              Get in Touch with IIEI.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-ink-300 leading-relaxed">
              For academic, admissions, corporate, or institutional enquiries, connect directly with the admissions team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-50 dark:bg-ink-950 py-24 border-b border-ink-900/10 dark:border-white/10 transition-colors">
        <div className="section-padding">
          <div className="grid gap-12 lg:grid-cols-12 max-w-5xl mx-auto">
            {/* Left Contact Details */}
            <div className="lg:col-span-5 p-8 border border-ink-900/15 dark:border-white/15 bg-white dark:bg-ink-900">
              <span className="editorial-label">Direct Communication</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-ink-900 dark:text-white">
                Admissions Directorate
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                Connect with our academic counselors for detailed guidance regarding curriculum structure, cohort eligibility, and selection rounds.
              </p>

              <div className="mt-8 space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-ochre-600 dark:text-ochre-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-ink-400 block">Email</span>
                    <a
                      href="mailto:admissions@iiei.in"
                      className="font-semibold text-ink-900 dark:text-white hover:text-ochre-600 transition-colors"
                    >
                      admissions@iiei.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-ink-900/10 dark:border-white/10">
                  <MapPin className="w-4 h-4 text-ochre-600 dark:text-ochre-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-ink-400 block">Institution</span>
                    <span className="font-semibold text-ink-900 dark:text-white">
                      {siteSettings.instituteName}
                    </span>
                    <span className="text-xs text-ink-500 dark:text-ink-400 block mt-0.5">
                      Initiated by {siteSettings.initiatedBy} (CCI India)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Link Card */}
            <div className="lg:col-span-7 p-8 sm:p-10 border border-ink-900/15 dark:border-white/15 bg-white dark:bg-ink-900 flex flex-col justify-between">
              <div>
                <span className="editorial-label">Official Enquiry Form</span>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink-900 dark:text-white">
                  Submit an Institutional Enquiry
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  Our official enquiry form opens in a secure new tab. Submissions are reviewed daily by our admissions advisors.
                </p>

                <div className="mt-6 p-4 bg-ivory-50 dark:bg-ink-950 border border-ink-900/10 dark:border-white/10 text-xs text-ink-600 dark:text-ink-300">
                  <p>
                    <strong>Programs in Scope:</strong> Entrepreneurship &amp; Innovation (Now Launching), AgriTech Management, Financial Management, and Logistics &amp; Supply Chain Management across Undergraduate and Postgraduate tracks.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <FormLink
                  type="enquiry"
                  icon="external"
                  className="btn-primary px-8 py-4 bg-ink-900 text-white dark:bg-white dark:text-ink-950 hover:bg-ochre-600 text-xs font-bold uppercase tracking-wider"
                >
                  Open Official Enquiry Form
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </FormLink>

                {!configured && (
                  <p className="mt-4 text-xs text-ochre-600 dark:text-ochre-400">
                    Note: Enquiry Form URL is configurable via <code>VITE_GOOGLE_FORM_ENQUIRY_URL</code> in your environment.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
