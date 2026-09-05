import FormLink from '@/components/FormLink';
import Reveal from '@/components/Reveal';
import { ArrowUpRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-ink-950 text-white border-b border-white/10 overflow-hidden">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="editorial-label text-ochre-400">Join the Launch Cohort</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mt-4 leading-[1.08]">
              Do not just study entrepreneurship.
              <br />
              <span className="text-ochre-400">Build it.</span>
            </h2>

            <p className="mt-8 text-base sm:text-lg lg:text-xl text-ink-200 leading-relaxed max-w-2xl mx-auto">
              Undergraduate (3 Years · ₹25 Lakh) and Postgraduate (2 Years · ₹30 Lakh) pathways built alongside 250+ founders.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <FormLink
                type="apply"
                className="btn-primary px-8 py-4 bg-white text-ink-950 hover:bg-ochre-400 text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                Apply Now
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </FormLink>

              <FormLink
                type="enquiry"
                icon="external"
                className="btn-primary px-8 py-4 border border-white/25 text-white hover:border-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider"
              >
                Enquire with Admissions
              </FormLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
