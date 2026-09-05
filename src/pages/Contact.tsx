import Reveal from '@/components/Reveal';
import FormLink from '@/components/FormLink';
import { hasGoogleForm } from '@/config/forms';

export default function Contact() {
  const configured = hasGoogleForm('enquiry');

  return (
    <>
      <section className="bg-ink-950 pt-32 pb-20 grain lg:pt-40">
        <div className="section-padding">
          <Reveal>
            <p className="editorial-label mb-5 text-cyan-300">Enquire</p>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">Let&apos;s talk.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">For programme, admissions, or institutional enquiries, use the official enquiry form and the IIEI team will respond.</p>
          </Reveal>
        </div>
      </section>
      <section className="bg-[#F7F5EF] py-24">
        <div className="section-padding">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="editorial-label">Admissions office</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink-900">A direct line to IIEI.</h2>
              <p className="mt-5 text-base leading-relaxed text-ink-500">Email admissions@iiei.in for general information. The enquiry form is the best route for programme-specific questions and follow-up.</p>
              <a href="mailto:admissions@iiei.in" className="mt-8 inline-block border-b border-ink-900 pb-2 font-semibold text-ink-900">admissions@iiei.in</a>
            </div>
            <div className="border-t-2 border-ink-900 pt-8">
              <p className="editorial-label">Start an enquiry</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-4xl">Tell us what you want to know.</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-500">The official enquiry form opens in a new tab. IIEI does not submit or fabricate enquiries inside this website.</p>
              <FormLink type="enquiry" icon="external" className="cta-shine mt-10 inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-4 font-semibold text-white transition-all duration-300">Open enquiry form</FormLink>
              {!configured && <p className="mt-5 text-sm text-amber-700">The enquiry form link is ready to be configured through <code>VITE_GOOGLE_FORM_ENQUIRY_URL</code>.</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
