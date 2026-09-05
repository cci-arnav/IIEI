import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-ink-950 grain overflow-hidden">
      <div className="section-padding">
        <Reveal>
          <div className="relative max-w-5xl mx-auto">
            {/* Gradient orbs */}
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-electric-500/20 blur-[100px]" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-cyan-500/20 blur-[100px]" />

            <div className="relative text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-6">
                Your journey starts here
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
                Don't just study
                <br />
                <span className="text-gradient">entrepreneurship.</span>
                <br />
                <span className="text-white">Build it.</span>
              </h2>
              <p className="mt-8 text-lg lg:text-xl text-ink-300 max-w-2xl mx-auto leading-relaxed">
                Join the launch cohort. Learn from 250+ founders. Build real ventures. And become
                the entrepreneur you're meant to be.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/apply"
                  className="inline-flex items-center justify-center gap-2 bg-white text-ink-950 font-semibold px-8 py-4 rounded-full hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-electric-500/20"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-full border border-white/20 backdrop-blur-md hover:bg-white/15 transition-all duration-300"
                >
                  Talk to an Advisor
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
