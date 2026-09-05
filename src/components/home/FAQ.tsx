import { useState } from 'react';
import { faqs } from '@/data/content';
import Reveal from '@/components/Reveal';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-ink-50">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal>
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-wider text-electric-500 mb-4">
                FAQ
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
                Questions?
                <br />
                <span className="text-gradient-dark">We've got answers.</span>
              </h2>
              <p className="mt-6 text-lg text-ink-500 leading-relaxed">
                Everything you need to know about IIEI, the program, the fee, and what makes us
                different.
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <Reveal key={i} delay={i * 30}>
                  <div className="bg-white rounded-2xl border border-ink-100 overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    >
                      <span className="font-display font-bold text-ink-900 text-base">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-ink-400 flex-shrink-0 transition-transform duration-300 ${
                          openIndex === i ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: openIndex === i ? '300px' : '0px',
                        opacity: openIndex === i ? 1 : 0,
                      }}
                    >
                      <p className="px-6 pb-6 text-sm text-ink-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
