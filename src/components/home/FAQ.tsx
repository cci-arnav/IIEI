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
    <section id="faq" className="py-14 lg:py-20 bg-ivory-100 dark:bg-ink-900 border-b border-ink-900/10 dark:border-white/10 transition-colors">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* LEFT — sticky editorial column */}
          <div className="lg:col-span-4 lg:sticky lg:top-20 self-start">
            <Reveal>
              <span className="editorial-label">Institutional Inquiries</span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-ink-900 dark:text-white tracking-tight mt-3 leading-tight">
                Everything you need to know about IIEI.
              </h2>
              <p className="mt-4 text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                Clear answers on programs, degree tracks, fees, founder ecosystem, and our learn-by-doing philosophy.
              </p>
              <div className="mt-6 pt-5 border-t border-ink-900/12 dark:border-white/12">
                <p className="text-[11px] text-ink-500 dark:text-ink-400 mb-2.5">
                  Have a specific question?
                </p>
                <FormLink
                  type="enquiry"
                  icon="external"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ochre-600 dark:text-ochre-400 hover:text-ink-900 dark:hover:text-white transition-colors"
                >
                  Contact Admissions
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </FormLink>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — compact accordion list */}
          <div className="lg:col-span-8">
            <div className="border-t border-ink-900/15 dark:border-white/15">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border-b border-ink-900/10 dark:border-white/10"
                  >
                    {/* Question row */}
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="w-full py-4 sm:py-5 flex items-start justify-between gap-4 text-left group focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-sm sm:text-[15px] font-bold text-ink-900 dark:text-white group-hover:text-ochre-600 dark:group-hover:text-ochre-400 transition-colors leading-snug">
                        {faq.question}
                      </span>
                      <div
                        className={`w-6 h-6 border flex items-center justify-center shrink-0 mt-px transition-colors ${
                          isOpen
                            ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-950 border-ink-900 dark:border-white'
                            : 'border-ink-900/20 dark:border-white/20 text-ink-400 group-hover:border-ink-700 dark:group-hover:border-ink-300'
                        }`}
                      >
                        {isOpen
                          ? <Minus className="w-3 h-3" />
                          : <Plus className="w-3 h-3" />}
                      </div>
                    </button>

                    {/* Answer — natural height, no overflow clipping */}
                    {isOpen && (
                      <div className="pb-5 pr-6 sm:pr-10 text-sm text-ink-600 dark:text-ink-300 leading-relaxed animate-fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
