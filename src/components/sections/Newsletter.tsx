'use client';
import { useState } from 'react';
import type { NewsletterResponse } from '@/types';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Per favore, inserisci un indirizzo email valido.');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data: NewsletterResponse = await res.json();
      
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Si è verificato un errore. Riprova.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Errore di connessione. Controlla la tua rete.');
    }
  };

  return (
    <section id="newsletter" className="py-16 bg-secondary border-y border-border-subtle">
      <div className="container max-w-xl text-center">
        <span className="section-label">✦ Resta aggiornato</span>
        <h2 className="section-title">Entra nella Beta privata</h2>
        <p className="section-desc mx-auto">Ricevi l&apos;accesso in anteprima alle nuove funzionalità e partecipa alla costruzione del futuro del lavoro.</p>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-3 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="La tua email professionale..."
            className="flex-1 min-w-[240px] rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white placeholder-text-muted focus:border-cyan focus:ring-4 ring-cyan/10"
            required
          />
          <button type="submit" className="btn-primary" disabled={status === 'loading'}>
            {status === 'loading' ? 'Inviando...' : 'Richiedi Accesso Anticipato'}
          </button>
        </form>
        {status === 'success' && <p className="mt-3 text-green font-semibold">Richiesta registrata! Ti contatteremo presto. 🎉</p>}
        {status === 'error' && <p className="mt-3 text-rose font-medium">{errorMessage}</p>}
      </div>
    </section>
  );
}