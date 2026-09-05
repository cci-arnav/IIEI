import { testimonials } from '@/data/content';
import Reveal from '@/components/Reveal';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-ink-950 grain overflow-hidden">
      <div className="section-padding">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4">
              Student Voices
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              From the launch cohort.
            </h2>
            <p className="mt-6 text-lg text-ink-400 leading-relaxed">
              Early voices from the IIEI launch cohort. More stories coming soon.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="h-full p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] transition-all duration-300">
                <Quote className="w-8 h-8 text-cyan-400/40 mb-6" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-cyan-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-ink-200 leading-relaxed text-sm">{t.quote}</p>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-ink-400 mt-1">
                    {t.program} · {t.batch}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
