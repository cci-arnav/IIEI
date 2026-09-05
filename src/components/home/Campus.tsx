import { campusCategories } from '@/data/content';
import Reveal from '@/components/Reveal';

export default function Campus() {
  return (
    <section className="py-24 lg:py-32 bg-ink-50">
      <div className="section-padding">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-bold uppercase tracking-wider text-electric-500 mb-4">
              Campus &amp; Experience
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
              Where builders
              <br />
              <span className="text-gradient-dark">come together.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              Spaces designed for learning, building, and connecting — from classrooms to startup
              labs to founder sessions.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {campusCategories.map((cat, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-ink-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-base font-bold text-white">{cat.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-12 p-6 rounded-2xl bg-amber-50 border border-amber-200 max-w-3xl mx-auto">
            <p className="text-sm text-amber-800 leading-relaxed">
              <span className="font-bold">Note:</span> IIEI currently does not provide hostel
              accommodation. Students will need to make their own accommodation arrangements.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
