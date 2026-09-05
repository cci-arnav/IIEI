import { useState, type FormEvent } from 'react';
import Reveal from '@/components/Reveal';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Entrepreneurship & Innovation',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 lg:pt-40 pb-20 bg-ink-950 grain">
        <div className="section-padding">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4">
              Contact Us
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Let's talk.
            </h1>
            <p className="mt-6 text-lg text-ink-300 max-w-2xl leading-relaxed">
              Have questions about the program, the application process, or anything else? Our
              admissions team is here to help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-display text-2xl font-extrabold text-ink-900 mb-6">
                  Get in touch
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'admissions@iiei.in', href: 'mailto:admissions@iiei.in' },
                    { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX' },
                    { icon: MapPin, label: 'Location', value: 'India' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-ink-50 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-electric-500" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-ink-400">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-ink-900 hover:text-electric-600 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-ink-900">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-ink-50 border border-ink-100">
                  <MessageSquare className="w-6 h-6 text-electric-500 mb-3" />
                  <h3 className="font-bold text-ink-900 mb-2">Talk to an Advisor</h3>
                  <p className="text-sm text-ink-500">
                    Prefer a conversation? Submit the form and our team will reach out to schedule a
                    one-on-one session.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={200}>
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center p-12 rounded-3xl bg-ink-50 border border-ink-100 text-center">
                    <CheckCircle2 className="w-16 h-16 text-electric-500 mb-6" />
                    <h3 className="font-display text-2xl font-bold text-ink-900 mb-3">
                      Thank you!
                    </h3>
                    <p className="text-ink-500 max-w-md">
                      Your message has been received. Our admissions team will reach out to you
                      shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-sm font-semibold text-electric-600 hover:text-electric-700 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-ink-50 border border-ink-100 space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-ink-900 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-ink-200 text-ink-900 text-sm focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-ink-900 mb-2">
                          Phone
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
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-900 mb-2">
                        Email
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
                      <label className="block text-sm font-semibold text-ink-900 mb-2">
                        Program of Interest
                      </label>
                      <select
                        value={form.program}
                        onChange={(e) => setForm({ ...form, program: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-ink-200 text-ink-900 text-sm focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all outline-none"
                      >
                        <option>Entrepreneurship & Innovation</option>
                        <option>AgriTech Management</option>
                        <option>Financial Management</option>
                        <option>Logistics & Supply Chain Management</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-900 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-ink-200 text-ink-900 text-sm focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20 transition-all outline-none resize-none"
                        placeholder="Tell us what you'd like to know..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-ink-900 text-white font-semibold px-6 py-4 rounded-full hover:bg-ink-800 transition-all duration-300 hover:scale-[1.01]"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
