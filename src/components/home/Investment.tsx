import { feeCategories, siteSettings } from '@/data/content';
import Reveal from '@/components/Reveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import { CheckCircle2 } from 'lucide-react';

export default function Investment() {
  return (
    <section id="investment" className="py-24 lg:py-32 bg-ink-50">
      <div className="section-padding">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-wider text-electric-500 mb-4">
              Program Investment
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
              ₹25,00,000.
              <br />
              <span className="text-gradient-dark">An investment in building.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              The complete two-year program investment is ₹25 lakh — the same for both UG and PG
              cohorts. Here's what it includes.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-ink-900 to-ink-950 text-white overflow-hidden grain">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-electric-500/20 blur-[80px]" />
              <div className="relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div>
                    <p className="text-sm text-ink-300">Total Program Investment</p>
                    <div className="font-display text-4xl lg:text-6xl font-extrabold mt-2">
                      <AnimatedCounter value={25} prefix="₹" suffix=" Lakh" />
                    </div>
                    <p className="text-sm text-ink-400 mt-2">
                      Same for UG &amp; PG · 2 Years · 4 Semesters
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm text-ink-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      Academic &amp; Tuition
                    </div>
                    <div className="flex items-center gap-2 text-sm text-ink-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      Founder-Led Learning
                    </div>
                    <div className="flex items-center gap-2 text-sm text-ink-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      Internships &amp; Industry Exposure
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {feeCategories.map((cat, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group h-full p-6 rounded-2xl bg-white border border-ink-100 hover:border-electric-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl font-extrabold text-ink-200 group-hover:text-electric-500 transition-colors">
                    {cat.number}
                  </span>
                  <span className="text-sm font-bold text-ink-700">{cat.amount}</span>
                </div>
                <h3 className="font-display font-bold text-ink-900 mb-2">{cat.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{cat.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mt-8 text-center text-sm text-ink-400 max-w-2xl mx-auto">
            Exact rupee allocations across categories will be announced soon. The ₹25 lakh
            investment covers all six components above.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
