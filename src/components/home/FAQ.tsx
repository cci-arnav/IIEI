import { useState } from 'react';
import { faqs } from '@/data/content';
import Reveal from '@/components/Reveal';
import FormLink from '@/components/FormLink';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-ivory-100 dark:bg-ink-900 border-b border-ink-900/10 dark:border-white/10 transition-colors">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Sticky Editorial Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <Reveal>
              <span className="editorial-label">Institutional Inquiries</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 dark:text-white tracking-tight mt-3">
                Everything you need to know about IIEI.
              </h2>
              <p className="mt-5 text-sm sm:text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                Clear answers regarding our programs, degree tracks, fees, founder ecosystem, and experiential learning philosophy.
              </p>

              <div className="mt-8 pt-8 border-t border-ink-900/15 dark:border-white/15">
                <p className="text-xs text-ink-500 dark:text-ink-400 mb-3">
                  Have a specific question not addressed here?
                </p>
                <FormLink
                  type="enquiry"
                  icon="external"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ochre-600 dark:text-ochre-400 hover:text-ink-900 dark:hover:text-white transition-colors"
                >
                  Contact Admissions Office
                  <ArrowUpRight className="w-4 h-4" />
                </FormLink>
              </div>
            </Reveal>
          </div>

          {/* Right Editorial Accordion List */}
          <div className="lg:col-span-8">
            <div className="border-t border-ink-900/15 dark:border-white/15 divide-y divide-ink-900/15 dark:divide-white/15">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <Reveal key={index} delay={index * 25}>
                    <div className="transition-colors">
                      <button
                        type="button"
                        onClick={() => toggleItem(index)}
                        className="w-full py-6 flex items-start justify-between gap-6 text-left group focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className="font-display text-base sm:text-lg font-bold text-ink-900 dark:text-white group-hover:text-ochre-600 dark:group-hover:text-ochre-400 transition-colors pr-4">
                          {faq.question}
                        </span>
                        <div
                          className={`w-7 h-7 border border-ink-900/20 dark:border-white/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isOpen
                              ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-950 border-ink-900 dark:border-white'
                              : 'text-ink-500 dark:text-ink-400 group-hover:border-ink-900 dark:group-hover:border-white'
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-3.5 h-3.5" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="pb-6 pr-8 text-sm text-ink-600 dark:text-ink-300 leading-relaxed animate-fade-in">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
