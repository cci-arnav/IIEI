import { applicationSteps } from '@/data/content';
import Reveal from '@/components/Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ApplicationProcess() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-bold uppercase tracking-wider text-electric-500 mb-4">
              Application Process
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
              Five steps to join.
              <br />
              <span className="text-gradient-dark">Simple and clear.</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-electric-500 via-cyan-500 to-electric-500 opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {applicationSteps.map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-ink-50 border-2 border-ink-100 hover:border-electric-500 hover:bg-electric-50 flex items-center justify-center mb-6 transition-all duration-300 z-10 relative">
                    <span className="font-display text-xl font-extrabold text-ink-300">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-ink-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={500}>
          <div className="mt-16 text-center">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-ink-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-ink-800 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-ink-900/20"
            >
              Start Your Application
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
