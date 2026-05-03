'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="newsletter" className="py-16 bg-secondary border-y border-border-subtle">
      <div className="container max-w-xl text-center">
        <span className="section-label">✦ Resta aggiornato</span>
        <h2 className="section-title">Iscriviti alla newsletter</h2>
        <p className="section-desc mx-auto">Ricevi aggiornamenti su nuove funzionalità, eventi e storie dalla community del lavoro etico.</p>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-3 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="La tua email professionale..."
            className="flex-1 min-w-[240px] rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white placeholder-text-muted focus:border-cyan focus:ring-4 ring-cyan/10"
            required
          />
          <button type="submit" className="btn-primary">✉️ Iscriviti</button>
        </form>
        {status === 'success' && <p className="mt-3 text-green">Iscrizione completata! 🎉</p>}
        {status === 'error' && <p className="mt-3 text-rose">Email non valida o errore.</p>}
      </div>
    </section>
  );
}