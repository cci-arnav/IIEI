import { useState, useRef, useEffect, type FormEvent } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { faqs, programs, siteSettings, degreeStructures } from '@/data/content';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

const quickQuestions = [
  'What programs are offered?',
  'Undergraduate duration & fee',
  'Postgraduate duration & fee',
  'Who teaches at IIEI?',
  'Are internships included?',
  'Does IIEI provide hostel?',
];

function findAnswer(question: string): string {
  const lower = question.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|namaste|good morning|good evening)\b/.test(lower)) {
    return `Hi! Welcome to IIEI (Indian Institute of Entrepreneurship & Innovation). I can help you explore our program areas, undergraduate and postgraduate structures, fees, founder-led learning, and admissions. What would you like to know?`;
  }

  // What programs
  if (lower.includes('what program') || lower.includes('programs offered') || lower.includes('which program') || lower.includes('courses')) {
    return `IIEI offers four specialized program areas:\n1. Entrepreneurship & Innovation (Now Launching)\n2. AgriTech Management (Coming Soon)\n3. Financial Management (Coming Soon)\n4. Logistics & Supply Chain Management (Coming Soon)\n\nEach is available across Undergraduate (3 Years) and Postgraduate (2 Years) tracks.`;
  }

  // Fees & Investment
  if (lower.includes('fee') || lower.includes('cost') || lower.includes('investment') || lower.includes('tuition')) {
    return `IIEI program investment is structured by degree level:\n• Undergraduate (3 Years): ₹25,00,000 (₹25 Lakh)\n• Postgraduate (2 Years): ₹30,00,000 (₹30 Lakh)\n\nBoth cover academic tuition, masterclasses with 250+ founders, experiential learning labs, industry internships, and startup incubation support.`;
  }

  // Duration
  if (lower.includes('duration') || lower.includes('how long') || lower.includes('years') || lower.includes('semester')) {
    return `Program durations at IIEI:\n• Undergraduate Track: 3 Years\n• Postgraduate Track: 2 Years (4 Semesters)\n\nBoth tracks combine classroom learning with real-world startup building and internships.`;
  }

  // Undergraduate specifics
  if (lower.includes('ug') || lower.includes('undergraduate') || lower.includes('bachelor')) {
    return `The Undergraduate program is 3 Years in duration with an indicative investment of ₹25,00,000 (₹25 Lakh). Cohort capacity is strictly capped at 60 students to ensure intensive founder-led mentorship.`;
  }

  // Postgraduate specifics
  if (lower.includes('pg') || lower.includes('postgraduate') || lower.includes('masters')) {
    return `The Postgraduate program is 2 Years (4 Semesters) with an indicative investment of ₹30,00,000 (₹30 Lakh). Cohort capacity is 60 students focused on advanced venture creation and scaling.`;
  }

  // Founder network
  if (lower.includes('founder') || lower.includes('faculty') || lower.includes('teacher') || lower.includes('who teach')) {
    return `IIEI features a teaching ecosystem of 250+ founders and co-founders who lead masterclasses, practical courses, and venture reviews. You learn directly from operators who have founded and scaled real companies.`;
  }

  // Internships
  if (lower.includes('internship') || lower.includes('industry exposure') || lower.includes('work')) {
    return `Yes, multiple internships are an integral part of the curriculum. Students work directly on live deliverables across startups, venture firms, and corporate innovation teams.`;
  }

  // PPO
  if (lower.includes('ppo') || lower.includes('placement') || lower.includes('job')) {
    return `IIEI maintains an explicit PPO (Pre-Placement Opportunity) commitment, preparing students for high-impact operator and leadership opportunities through our industry partner network.`;
  }

  // Funding
  if (lower.includes('funding') || lower.includes('invest') || lower.includes('capital') || lower.includes('venture backing')) {
    return `Yes. IIEI provides an institutional funding commitment and venture incubation infrastructure to support high-potential student ventures.`;
  }

  // Hostel / Accommodation
  if (lower.includes('hostel') || lower.includes('stay') || lower.includes('accommodation') || lower.includes('dorm')) {
    return `No. IIEI currently does not provide hostel accommodation or boarding facilities. Students make their own independent living arrangements.`;
  }

  // Application / Admissions
  if (lower.includes('apply') || lower.includes('admission') || lower.includes('join') || lower.includes('form')) {
    return `Admissions are open for the launch cohort of Entrepreneurship & Innovation. You can click 'Apply Now' in the navigation to fill out the official IIEI admissions form, or click 'Enquire' to connect with an advisor.`;
  }

  // Match FAQ answers
  const matchedFaq = faqs.find((f) =>
    lower.includes(f.question.toLowerCase().slice(0, 15)) ||
    f.question.toLowerCase().includes(lower.slice(0, 15))
  );
  if (matchedFaq) return matchedFaq.answer;

  return `I can help you with details on IIEI programs, Undergraduate (3 Yrs, ₹25L) and Postgraduate (2 Yrs, ₹30L) tracks, founder-led learning, internships, and admissions. Feel free to ask!`;
}

export default function VirtualAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hi! Welcome to IIEI. How can I assist you with our academic programs, degree tracks, fees, or admissions today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    const query = input;
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const answer = findAnswer(query);
      setMessages((prev) => [...prev, { role: 'bot', text: answer }]);
      setTyping(false);
    }, 450);
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = { role: 'user', text: question };
    setMessages((prev) => [...prev, userMessage]);
    setTyping(true);

    setTimeout(() => {
      const answer = findAnswer(question);
      setMessages((prev) => [...prev, { role: 'bot', text: answer }]);
      setTyping(false);
    }, 400);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 flex h-13 w-13 items-center justify-center border border-white/20 bg-ink-900 text-white dark:bg-white dark:text-ink-950 shadow-2xl transition-all duration-300 hover:bg-ochre-600 dark:hover:bg-ochre-400 ${
          open ? 'rotate-90' : ''
        }`}
        aria-label="Toggle virtual admissions assistant"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:bottom-22 sm:right-6 sm:w-[420px] animate-fade-in">
          <div className="flex h-[min(640px,calc(100vh-6rem))] flex-col border border-ink-900/20 dark:border-white/20 bg-white dark:bg-ink-950 shadow-2xl">
            {/* Header */}
            <div className="bg-ink-900 dark:bg-ink-900 text-white p-4 flex items-center justify-between border-b border-ink-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-ochre-500/20 border border-ochre-400 text-ochre-300 flex items-center justify-center font-bold text-xs">
                  IIEI
                </div>
                <div>
                  <p className="font-display font-bold text-sm leading-tight">Admissions Assistant</p>
                  <p className="text-[11px] text-ink-300 flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Online · Official Guidance
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-ink-400 hover:text-white p-1"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message Area: LARGE & PROMINENT */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-ivory-50 dark:bg-ink-900/50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2.5 ${
                    msg.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-7 h-7 flex items-center justify-center shrink-0 border ${
                      msg.role === 'bot'
                        ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-950 border-transparent'
                        : 'bg-ochre-500 text-ink-950 border-ochre-600'
                    }`}
                  >
                    {msg.role === 'bot' ? (
                      <Bot className="w-3.5 h-3.5" />
                    ) : (
                      <User className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <div
                    className={`max-w-[82%] p-3.5 text-xs sm:text-sm leading-relaxed border ${
                      msg.role === 'bot'
                        ? 'bg-white dark:bg-ink-900 text-ink-800 dark:text-ink-100 border-ink-900/10 dark:border-white/10'
                        : 'bg-ink-900 text-white dark:bg-white dark:text-ink-950 border-transparent'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 flex items-center justify-center shrink-0 bg-ink-900 text-white dark:bg-white dark:text-ink-950">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-3 bg-white dark:bg-ink-900 border border-ink-900/10 dark:border-white/10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-ink-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-ink-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-ink-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Compact Quick Action Chips */}
            <div className="px-3 py-2 border-t border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleQuickQuestion(q)}
                  className="whitespace-nowrap px-2.5 py-1 text-[11px] font-semibold border border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-300 hover:border-ink-900 dark:hover:border-white hover:text-ink-900 dark:hover:text-white transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={handleSend}
              className="p-3 bg-white dark:bg-ink-950 border-t border-ink-900/10 dark:border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about programs, UG/PG fees, founders..."
                className="flex-1 text-xs sm:text-sm px-3 py-2.5 border border-ink-200 dark:border-ink-800 bg-transparent text-ink-900 dark:text-white placeholder:text-ink-400 focus:border-ink-900 dark:focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 bg-ink-900 text-white dark:bg-white dark:text-ink-950 flex items-center justify-center hover:bg-ochre-600 dark:hover:bg-ochre-400 disabled:opacity-40 transition-colors shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
