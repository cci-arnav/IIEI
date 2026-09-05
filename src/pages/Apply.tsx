import Reveal from '@/components/Reveal';
import FormLink from '@/components/FormLink';
import { hasGoogleForm } from '@/config/forms';

export default function Apply() {
  const configured = hasGoogleForm('apply');

  return (
    <>
      <section className="bg-ink-950 pt-32 pb-20 grain lg:pt-40">
        <div className="section-padding">
          <Reveal>
            <p className="editorial-label mb-5 text-cyan-300">Apply Now</p>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">Start your journey.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">Applications are handled through the IIEI admissions form. Share your details and the admissions team will guide you through the next steps.</p>
          </Reveal>
        </div>
      </section>
      <section className="bg-[#F7F5EF] py-24">
        <div className="section-padding">
          <div className="mx-auto max-w-3xl border-t-2 border-ink-900 pt-8">
            <p className="editorial-label">Admissions</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-4xl">Begin with the official application form.</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">The form opens in a new tab. IIEI does not process applications through this website.</p>
            <FormLink type="apply" className="cta-shine mt-10 inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-4 font-semibold text-white transition-all duration-300">Open application form</FormLink>
            {!configured && <p className="mt-5 text-sm text-amber-700">The application form link is ready to be configured through <code>VITE_GOOGLE_FORM_APPLY_URL</code>.</p>}
            <div className="mt-16 grid gap-8 border-t border-ink-200 pt-8 sm:grid-cols-3">
              {['Explore the programme', 'Submit your details', 'Continue with admissions'].map((step, index) => <div key={step}><span className="font-display text-4xl font-bold text-electric-600">0{index + 1}</span><p className="mt-3 font-semibold text-ink-900">{step}</p></div>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
