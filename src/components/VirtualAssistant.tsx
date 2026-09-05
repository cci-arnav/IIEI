import { useState, useRef, useEffect, type FormEvent } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { faqs, siteSettings } from '@/data/content';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

const quickQuestions = [
  'What is IIEI?',
  'How long is the program?',
  'What is the program fee?',
  'Which program is launching now?',
  'Does IIEI provide hostel accommodation?',
  'Are internships included?',
];

function findAnswer(question: string): string {
  const lower = question.toLowerCase();
  const match = faqs.find(
    (f) =>
      lower.includes(f.question.toLowerCase().slice(0, 10)) ||
      f.question.toLowerCase().includes(lower.slice(0, 10))
  );
  if (match) return match.answer;

  if (lower.includes('apply') || lower.includes('application'))
    return 'The application process has five steps: Explore the Program, Talk to an Advisor, Submit Application, Selection Process, and Join IIEI. You can start your application on the Apply Now page.';
  if (lower.includes('contact') || lower.includes('advisor'))
    return 'You can reach our admissions team at admissions@iiei.in or through the Contact page. We\'d be happy to schedule a one-on-one session.';
  if (lower.includes('founder'))
    return 'IIEI\'s teaching ecosystem includes 250+ founders and co-founders who conduct special courses, masterclasses and sessions. These are real practitioners who have built companies.';
  if (lower.includes('startup') || lower.includes('build'))
    return 'Absolutely! Entrepreneurship is central to the IIEI learning philosophy. Students can work through idea validation, prototyping, market testing, pitching and venture building as part of the ecosystem.';

  return `Great question! I'd recommend talking to our admissions team for more details. You can reach them at admissions@iiei.in or through the Contact page. In the meantime, ${siteSettings.tagline}`;
}

export default function VirtualAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hi! I'm the IIEI Virtual Assistant. Ask me anything about the program, fees, curriculum, or the application process.",
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
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const answer = findAnswer(input);
      setMessages((prev) => [...prev, { role: 'bot', text: answer }]);
      setTyping(false);
    }, 800);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 text-white shadow-xl shadow-ink-900/20 transition-all duration-300 hover:bg-electric-600 ${open ? 'rotate-90' : ''}`}
        aria-label="Toggle virtual assistant"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 max-w-md animate-fade-in">
          <div className="overflow-hidden border border-ink-200 bg-white shadow-2xl shadow-ink-900/15 flex flex-col" style={{ maxHeight: '70vh' }}>
            {/* Header */}
            <div className="bg-ink-950 p-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-cyan-400/30 text-cyan-300">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">IIEI Assistant</p>
                <p className="text-xs text-ink-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Online
                </p>
              </div>
              <Sparkles className="w-4 h-4 text-cyan-400 ml-auto" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-ink-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'bot'
                        ? 'bg-gradient-to-br from-electric-500 to-cyan-500'
                        : 'bg-ink-200'
                    }`}
                  >
                    {msg.role === 'bot' ? (
                      <Bot className="w-4 h-4 text-white" />
                    ) : (
                      <User className="w-4 h-4 text-ink-600" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'bot'
                        ? 'bg-white text-ink-700 rounded-tl-sm'
                        : 'bg-ink-900 text-white rounded-tr-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-ink-300 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-ink-300 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-ink-300 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 bg-ink-50">
                <p className="text-xs text-ink-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickQuestion(q)}
                      className="border-b border-ink-300 px-1 py-1.5 text-left text-xs font-medium text-ink-700 transition-colors hover:border-electric-500 hover:text-electric-600"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-ink-100 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 border-b border-ink-300 bg-transparent px-1 py-2.5 text-sm text-ink-900 outline-none transition-all focus:border-electric-500"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-electric-500 text-white flex items-center justify-center hover:bg-electric-600 transition-all flex-shrink-0"
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
