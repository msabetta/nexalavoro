'use client';
import { useState, useRef, useEffect } from 'react';

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'bot' | 'user' }[]>([
    { text: '👋 Ciao! Sono Nexa AI. Come posso aiutarti?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { text: input, sender: 'user' as const };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Chiamata all'API chatbot
    const res = await fetch('/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setMessages((prev) => [...prev, { text: data.reply, sender: 'bot' }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-80 max-w-[calc(100vw-2rem)] bg-card border border-blue/30 rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-4 py-3 bg-card-hover border-b border-border-subtle flex items-center gap-2 font-bold text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-green animate-pulse" /> Assistente Nexa AI
          </div>
          <div className="h-64 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`px-3 py-2 rounded-xl max-w-[85%] ${msg.sender === 'bot' ? 'bg-blue/10 self-start' : 'bg-blue text-white self-end ml-auto'}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex gap-2 p-3 border-t border-border-subtle">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Scrivi qui..."
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-text-muted focus:border-cyan"
            />
            <button onClick={sendMessage} className="w-9 h-9 flex items-center justify-center rounded-full bg-cyan text-black font-bold hover:bg-white transition-colors">➤</button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan to-blue text-white shadow-lg shadow-blue/40 hover:scale-110 transition-transform"
        aria-label={open ? 'Chiudi chat' : 'Apri chat'}
      >
        {open ? '✕' : '💬'}
      </button>
    </div>
  );
}