import { siteSettings } from '@/data/content';
import Reveal from '@/components/Reveal';
import { Quote } from 'lucide-react';

export default function BigIdea() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="section-padding">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink-50 border border-ink-100 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-ink-500">The Big Idea</span>
            </div>
            <Quote className="w-12 h-12 text-electric-500/20 mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-ink-900 leading-[1.1] tracking-tight">
              We don't just teach entrepreneurship.
              <br />
              <span className="text-gradient-dark">We build entrepreneurs.</span>
            </h2>
            <p className="mt-8 text-lg lg:text-xl text-ink-500 leading-relaxed">
              {siteSettings.instituteName} is a new generation institution initiated by{' '}
              {siteSettings.initiatedBy}. It is built around a single philosophy:{' '}
              <span className="font-semibold text-ink-900">Learn by Doing.</span> Founder-led
              learning. Real-world execution. Industry exposure. Internships. Innovation. And a
              commitment to building, not just studying.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
