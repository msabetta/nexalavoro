'use client';
import { useState } from 'react';

export default function CTA() {
  const [comment, setComment] = useState('');
  const [feedback, setFeedback] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) {
      setFeedback({ text: 'Per favore, scrivi un commento prima di inviare.', type: 'error' });
      return;
    }
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment }),
      });
      if (res.ok) {
        setFeedback({ text: '✨ Grazie! La tua idea è stata registrata. Insieme stiamo scrivendo il nuovo patto del lavoro.', type: 'success' });
        setComment('');
      } else {
        setFeedback({ text: 'Errore durante l\'invio. Riprova.', type: 'error' });
      }
    } catch {
      setFeedback({ text: 'Errore di rete. Controlla la connessione.', type: 'error' });
    }
  };

  return (
    <section id="cta" className="py-16">
      <div className="container max-w-2xl">
        <div className="card p-8 md:p-10 border border-blue/30 shadow-[0_0_60px_rgba(77,124,255,0.2)] relative overflow-hidden before:absolute before:-top-20 before:-left-20 before:w-60 before:h-60 before:bg-purple/10 before:rounded-full before:blur-3xl before:pointer-events-none">
          <span className="section-label text-center block">✦ Unisciti alla rivoluzione</span>
          <h2 className="section-title text-center">
            Se potessi cambiare una sola regola<br/>del lavoro moderno, quale sarebbe?
          </h2>
          <p className="text-center text-text-secondary text-lg mb-6">
            💬 Scrivilo qui sotto. La tua voce darà forma al nuovo patto lavorativo.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-3 justify-center">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength={280}
              placeholder='Es: "Orari flessibili per tutti, senza eccezioni"...'
              className="flex-1 min-w-[220px] rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white placeholder-text-muted focus:border-cyan focus:ring-4 ring-cyan/10"
              aria-label="Il tuo commento sulla regola del lavoro da cambiare"
            />
            <button type="submit" className="btn-primary">
              ✦ Condividi la tua idea
            </button>
          </form>
          {feedback && (
            <p className={`mt-4 text-sm font-medium text-center ${
              feedback.type === 'success' ? 'text-green' : 'text-rose'
            }`}>
              {feedback.text}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}