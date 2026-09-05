import { useState } from 'react';
import { degreeStructures, type DegreeLevel } from '@/data/content';
import Reveal from '@/components/Reveal';
import FormLink from '@/components/FormLink';
import { Info, ArrowUpRight } from 'lucide-react';

export default function Investment() {
  const [selectedLevel, setSelectedLevel] = useState<DegreeLevel>('UG');
  const activeStructure = degreeStructures[selectedLevel];

  // Mathematical validation
  const calculatedTotal = activeStructure.breakdown.reduce((sum, item) => sum + item.amount, 0);

  return (
    <section id="investment" className="py-24 lg:py-32 bg-ivory-50 dark:bg-ink-950 border-b border-ink-900/10 dark:border-white/10 transition-colors">
      <div className="section-padding">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 border-b border-ink-900/15 dark:border-white/15 pb-8">
            <div className="max-w-3xl">
              <span className="editorial-label">Fee Schedule &amp; Investment</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 dark:text-white tracking-tight mt-3">
                Total Program Investment
              </h2>
              <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-300 leading-relaxed max-w-2xl">
                Transparent and mathematically verified fee structure. Select your degree level to review the comprehensive component breakdown.
              </p>
            </div>

            {/* Interactive Degree Level Selector */}
            <div className="w-full lg:w-auto">
              <span className="editorial-label block mb-2 text-ink-500 dark:text-ink-400">
                Switch Degree Level
              </span>
              <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center bg-white dark:bg-ink-900 p-2 border border-ink-900/20 dark:border-white/20">
                {(['UG', 'PG'] as const).map((lvl) => {
                  const isSelected = selectedLevel === lvl;
                  const struct = degreeStructures[lvl];
                  return (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setSelectedLevel(lvl)}
                      className={`px-5 py-3 text-left transition-colors border ${
                        isSelected
                          ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-950 border-ink-900 dark:border-white shadow-md'
                          : 'bg-transparent text-ink-700 dark:text-ink-300 border-transparent hover:border-ink-200 dark:hover:border-ink-800'
                      }`}
                    >
                      <div className="text-xs font-black uppercase tracking-wider">
                        {lvl === 'UG' ? 'Undergraduate' : 'Postgraduate'}
                      </div>
                      <div className="text-[11px] font-semibold mt-0.5 opacity-90">
                        {struct.duration} · {struct.totalFeeLakh}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Total Highlight Header Card */}
        <Reveal delay={100}>
          <div className="p-8 lg:p-10 bg-white dark:bg-ink-900 border border-ink-900/15 dark:border-white/15 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div>
              <span className="editorial-label text-ochre-600 dark:text-ochre-400">
                {activeStructure.title} · {activeStructure.duration} Full Duration
              </span>
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-ink-900 dark:text-white mt-2">
                {activeStructure.totalFeeDisplay}
              </div>
              <p className="text-xs sm:text-sm text-ink-500 dark:text-ink-400 mt-2">
                Comprehensive academic and experiential tuition across all terms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
              <FormLink
                type="apply"
                className="btn-primary px-6 py-3.5 bg-ink-900 text-white hover:bg-ochre-600 dark:bg-white dark:text-ink-950 text-xs font-bold uppercase tracking-wider text-center"
              >
                Apply for {selectedLevel}
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </FormLink>
              <FormLink
                type="enquiry"
                icon="external"
                className="btn-primary px-6 py-3.5 border border-ink-900/20 dark:border-white/20 text-ink-900 dark:text-white hover:border-ink-900 dark:hover:border-white text-xs font-bold uppercase tracking-wider text-center"
              >
                Fee Enquiry
              </FormLink>
            </div>
          </div>
        </Reveal>

        {/* Vertical Institutional Fee Schedule List */}
        <Reveal delay={200}>
          <div className="border border-ink-900/15 dark:border-white/15 bg-white dark:bg-ink-900 divide-y divide-ink-900/10 dark:divide-white/10 shadow-sm">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-4 bg-ivory-100 dark:bg-ink-950/80 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
              <div className="col-span-1">No.</div>
              <div className="col-span-5">Component Category</div>
              <div className="col-span-4">Scope &amp; Deliverables</div>
              <div className="col-span-2 text-right">Investment</div>
            </div>

            {/* Breakdown Rows */}
            {activeStructure.breakdown.map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 sm:px-8 py-6 items-center hover:bg-ivory-50 dark:hover:bg-ink-800/40 transition-colors"
              >
                <div className="col-span-1">
                  <span className="font-display text-xl font-bold text-ink-300 dark:text-ink-700">
                    {item.number}
                  </span>
                </div>

                <div className="col-span-5">
                  <h4 className="font-display text-base font-bold text-ink-900 dark:text-white">
                    {item.title}
                  </h4>
                  <div className="w-36 h-1 bg-ink-100 dark:bg-ink-800 mt-2 overflow-hidden">
                    <div
                      className="h-full bg-ochre-500"
                      style={{ width: `${Math.min(item.percentage * 1.6, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="col-span-4">
                  <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="col-span-2 md:text-right flex md:flex-col justify-between items-baseline md:items-end pt-2 md:pt-0 border-t md:border-t-0 border-ink-900/5 dark:border-white/5">
                  <span className="font-display text-lg font-black text-ink-900 dark:text-white">
                    {item.amountDisplay}
                  </span>
                  <span className="text-[11px] text-ink-500 dark:text-ink-400 font-semibold">
                    ({item.lakhDisplay})
                  </span>
                </div>
              </div>
            ))}

            {/* Total Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 sm:px-8 py-6 bg-ivory-100 dark:bg-ink-950 items-center font-bold">
              <div className="hidden md:block col-span-1" />
              <div className="col-span-5 font-display text-base sm:text-lg uppercase tracking-wider text-ink-900 dark:text-white">
                Total Indicative Program Fee ({selectedLevel})
              </div>
              <div className="col-span-4 text-xs text-ink-500 dark:text-ink-400">
                Sum strictly verifies to ₹{calculatedTotal.toLocaleString('en-IN')}
              </div>
              <div className="col-span-2 md:text-right font-display text-xl sm:text-2xl font-black text-ochre-600 dark:text-ochre-400">
                {activeStructure.totalFeeDisplay}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Explicit Institutional Notes */}
        <Reveal delay={300}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-ink-600 dark:text-ink-400">
            <div className="p-5 border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-900 flex items-start gap-3">
              <Info className="w-4 h-4 text-ochre-600 dark:text-ochre-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-ink-900 dark:text-white">Indicative Schedule:</strong> Fee structure is presented as an indicative breakdown and may be updated by the institute prior to cohort finalization.
              </p>
            </div>

            <div className="p-5 border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-900 flex items-start gap-3">
              <Info className="w-4 h-4 text-ink-500 dark:text-ink-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-ink-900 dark:text-white">Accommodation Notice:</strong> IIEI currently does not provide hostel accommodation or food charges. Students arrange their own local boarding.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
