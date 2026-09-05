import Reveal from '@/components/Reveal';
import FormLink from '@/components/FormLink';
import { hasGoogleForm } from '@/config/forms';
import { siteSettings, degreeStructures } from '@/data/content';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Apply() {
  const configured = hasGoogleForm('apply');

  return (
    <>
      <section className="bg-ink-950 text-white pt-32 pb-20 lg:pt-40 border-b border-white/10">
        <div className="section-padding">
          <Reveal>
            <span className="editorial-label text-ochre-400">Admissions Portal</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mt-4">
              Apply to the Launch Cohort.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-ink-300 leading-relaxed">
              Applications for {siteSettings.instituteName} are managed through our official admissions form. Review cohort eligibility and begin your application.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-50 dark:bg-ink-950 py-24 border-b border-ink-900/10 dark:border-white/10 transition-colors">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto border border-ink-900/15 dark:border-white/15 bg-white dark:bg-ink-900 p-8 sm:p-12 shadow-sm">
            <span className="editorial-label">Official Application</span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-black text-ink-900 dark:text-white">
              Direct Application to IIEI
            </h2>
            <p className="mt-4 text-sm sm:text-base text-ink-600 dark:text-ink-300 leading-relaxed">
              The official Google Form opens in a secure new tab. Submitting your application allows our admissions committee to review your background and schedule your interview.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-ink-900/10 dark:border-white/10 py-6 my-6">
              <div className="p-4 bg-ivory-50 dark:bg-ink-950 border border-ink-900/10 dark:border-white/10">
                <span className="editorial-label text-[10px] text-ochre-600 dark:text-ochre-400 block mb-1">
                  Undergraduate Track
                </span>
                <span className="font-display font-bold text-lg text-ink-900 dark:text-white block">
                  3 Years · ₹25 Lakh
                </span>
                <span className="text-xs text-ink-500 dark:text-ink-400 block mt-1">
                  60 seats launch cohort capacity
                </span>
              </div>

              <div className="p-4 bg-ivory-50 dark:bg-ink-950 border border-ink-900/10 dark:border-white/10">
                <span className="editorial-label text-[10px] text-ochre-600 dark:text-ochre-400 block mb-1">
                  Postgraduate Track
                </span>
                <span className="font-display font-bold text-lg text-ink-900 dark:text-white block">
                  2 Years · ₹30 Lakh
                </span>
                <span className="text-xs text-ink-500 dark:text-ink-400 block mt-1">
                  60 seats launch cohort capacity
                </span>
              </div>
            </div>

            <div className="mt-8">
              <FormLink
                type="apply"
                className="btn-primary px-8 py-4 bg-ink-900 text-white dark:bg-white dark:text-ink-950 hover:bg-ochre-600 text-xs font-bold uppercase tracking-wider"
              >
                Open Official Application Form
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </FormLink>

              {!configured && (
                <p className="mt-4 text-xs text-ochre-600 dark:text-ochre-400">
                  Note: Google Form URL is configurable via <code>VITE_GOOGLE_FORM_APPLY_URL</code> in your environment.
                </p>
              )}
            </div>

            <div className="mt-14 pt-8 border-t border-ink-900/10 dark:border-white/10 grid gap-6 sm:grid-cols-3">
              {[
                'Review Specialization Options',
                'Submit Candidacy Profile',
                'Admissions Interview & Decision',
              ].map((step, index) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="font-display text-xl font-bold text-ochre-600 dark:text-ochre-400">
                    0{index + 1}
                  </span>
                  <p className="text-xs font-semibold text-ink-800 dark:text-ink-200 mt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
