import Reveal from '@/components/Reveal';
import ButtonLink from '@/components/ButtonLink';
import { siteSettings } from '@/data/content';
import { ArrowRight, Target, Eye, Heart, Zap } from 'lucide-react';

export default function About() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-20 bg-ink-950 grain overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-electric-500/15 blur-[100px]" />
        <div className="relative section-padding">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4">
              About IIEI
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
              A new generation
              <br />
              <span className="text-gradient">entrepreneurship institution.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-300 max-w-2xl leading-relaxed">
              {siteSettings.instituteName} is initiated by {siteSettings.initiatedBy}. It is built
              around a single philosophy: <span className="font-bold text-white">Learn by Doing.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: 'Mission', desc: 'To build entrepreneurs, not just graduates. To move beyond theory into real-world execution. To create a generation of builders who learn by doing.' },
              { icon: Eye, title: 'Vision', desc: 'To be India\'s most practical entrepreneurship and innovation institution — where every student builds, tests, pitches and launches.' },
              { icon: Heart, title: 'Values', desc: 'Founder-led learning. Real-world execution. Industry exposure. Innovation. And an unwavering commitment to doing, not just studying.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="h-full p-8 rounded-3xl bg-ink-50 border border-ink-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500 to-cyan-500 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink-50">
        <div className="section-padding">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ink-100 mb-6">
                <Zap className="w-4 h-4 text-electric-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-ink-500">
                  The IIEI Difference
                </span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-ink-900 tracking-tight">
                What makes us different
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Founder-Led, Not Theory-Led', desc: 'Learn from 250+ founders and co-founders who have built real companies.' },
              { title: 'Build While You Learn', desc: 'Students work on ideas, startups and ventures throughout the program — not after.' },
              { title: 'Real Industry Exposure', desc: 'Multiple internships, live projects and direct interaction with industry leaders.' },
              { title: 'Institutional Support for Ventures', desc: 'Funding commitment and ecosystem support for promising student ventures.' },
              { title: 'PPO Commitment', desc: 'A commitment towards pre-placement opportunities — not just a placement cell.' },
              { title: 'Learn by Doing Philosophy', desc: 'Every concept is paired with practice. Every semester includes real execution.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-ink-100">
                  <span className="font-display text-2xl font-extrabold text-ink-200 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-ink-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-ink-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink-950 grain">
        <div className="section-padding text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-white">
            Be part of the launch cohort.
          </h2>
          <p className="mt-6 text-lg text-ink-400 max-w-2xl mx-auto">
            Join the first cohort of builders at IIEI.
          </p>
          <div className="mt-10">
            <ButtonLink to="/apply" variant="primary" size="lg" icon={ArrowRight}>
              Apply Now
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
