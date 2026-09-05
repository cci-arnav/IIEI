import { useState, type FormEvent } from 'react';
import Reveal from '@/components/Reveal';
import { applicationSteps, programs } from '@/data/content';
import { ArrowRight, CheckCircle2, User, Mail, Phone, GraduationCap, FileText } from 'lucide-react';

export default function Apply() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Entrepreneurship & Innovation',
    education: '',
    message: '',
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen pt-32 lg:pt-40 pb-20 bg-ink-950 grain flex items-center">
        <div className="section-padding w-full">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Application received.
            </h1>
            <p className="mt-6 text-lg text-ink-300 max-w-xl mx-auto leading-relaxed">
              Thank you for applying to IIEI. Our admissions team will review your application and
              reach out to you shortly with next steps.
            </p>
            <a
              href="/"
              className="mt-10 inline-flex items-center gap-2 bg-white text-ink-950 font-semibold px-8 py-4 rounded-full hover:scale-[1.02] transition-all duration-300"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-12 bg-ink-950 grain">
        <div className="section-padding">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4">
              Apply Now
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Start your journey.
            </h1>
            <p className="mt-6 text-lg text-ink-300 max-w-2xl leading-relaxed">
              Complete the application below. It takes less than 5 minutes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto">
            {/* Progress */}
            <div className="flex items-center justify-between mb-12">
              {applicationSteps.slice(0, 3).map((s, i) => (
                <div key={i} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        step >= i + 1
                          ? 'bg-electric-500 text-white'
                          : 'bg-ink-100 text-ink-400'
                      }`}
                    >
                      {step > i + 1 ? <CheckCircle2 className="w-5 h-5" /> : s.number}
                    </div>
                    <span className="text-xs text-ink-500 mt-2 hidden sm:block">{s.title}</span>
                  </div>
                  {i < 2 && (
                    <div className={`flex-1 h-0.5 mx-2 ${step > i + 1 ? 'bg-electric-500' : 'bg-ink-100'}`} />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-8 lg:p-10 rounded-3xl bg-ink-50 border border-ink-100">
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-ink-900 mb-2">
                      <User className="w-4 h-4" /> Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-ink-200 text-ink-900 text-sm focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-ink-900 mb-2">
                      <Mail className="w-4 h-4" /> Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-ink-200 text-ink-900 text-sm focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-ink-900 mb-2">
                      <Phone className="w-4 h-4" /> Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-ink-200 text-ink-900 text-sm focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all outline-none"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full inline-flex items-center justify-center gap-2 bg-ink-900 text-white font-semibold px-6 py-4 rounded-full hover:bg-ink-800 transition-all duration-300"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-ink-900 mb-2">
                      <GraduationCap className="w-4 h-4" /> Program of Interest
                    </label>
                    <select
                      value={form.program}
                      onChange={(e) => setForm({ ...form, program: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-ink-200 text-ink-900 text-sm focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all outline-none"
                    >
                      {programs.map((p) => (
                        <option key={p.id}>{p.shortName}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-ink-900 mb-2">
                      <FileText className="w-4 h-4" /> Educational Background
                    </label>
                    <textarea
                      rows={3}
                      value={form.education}
                      onChange={(e) => setForm({ ...form, education: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-ink-200 text-ink-900 text-sm focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all outline-none resize-none"
                      placeholder="Tell us about your education..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink-900 mb-2">
                      Anything else we should know?
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-ink-200 text-ink-900 text-sm focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all outline-none resize-none"
                      placeholder="Optional"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-ink-900 font-semibold px-6 py-4 rounded-full border border-ink-200 hover:bg-ink-100 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-ink-900 text-white font-semibold px-6 py-4 rounded-full hover:bg-ink-800 transition-all duration-300"
                    >
                      Review
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="font-display text-xl font-bold text-ink-900">
                    Review your application
                  </h3>
                  <div className="space-y-3 p-6 rounded-2xl bg-white border border-ink-100">
                    {[
                      { label: 'Name', value: form.name },
                      { label: 'Email', value: form.email },
                      { label: 'Phone', value: form.phone },
                      { label: 'Program', value: form.program },
                      { label: 'Education', value: form.education || '—' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-ink-500">{item.label}</span>
                        <span className="font-medium text-ink-900 text-right max-w-[60%]">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-ink-900 font-semibold px-6 py-4 rounded-full border border-ink-200 hover:bg-ink-100 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-electric-500 text-white font-semibold px-6 py-4 rounded-full hover:bg-electric-600 transition-all duration-300 shadow-lg shadow-electric-500/30"
                    >
                      Submit Application
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
