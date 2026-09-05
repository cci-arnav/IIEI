import { siteSettings } from '@/data/content';
import Reveal from '@/components/Reveal';

export default function BigIdea() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-50 dark:bg-ink-950 border-b border-ink-900/10 dark:border-white/10 transition-colors">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="editorial-label">Institutional Philosophy</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 dark:text-white leading-[1.12] tracking-tight mt-4">
              We do not just teach entrepreneurship.
              <br />
              <span className="text-ochre-600 dark:text-ochre-400">
                We build operators and ventures.
              </span>
            </h2>

            <p className="mt-8 text-base sm:text-lg lg:text-xl text-ink-600 dark:text-ink-300 leading-relaxed max-w-3xl mx-auto">
              {siteSettings.instituteName} is established under the stewardship of {siteSettings.initiatedBy} with a single core principle:{' '}
              <strong className="text-ink-900 dark:text-white font-black">Learn by Doing.</strong>{' '}
              Founder-led masterclasses, live business building, multiple industry internships, and direct institutional funding for promising student ventures.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
