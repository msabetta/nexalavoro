'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'Come funziona il matching etico?',
    a: 'Il nostro algoritmo AI valuta competenze e valori dichiarati: orari flessibili, rispetto della salute mentale, equità retributiva. Solo i match etici vengono proposti.',
  },
  {
    q: 'I pagamenti istantanei sono sicuri?',
    a: 'Sì, utilizziamo smart contract su blockchain che garantiscono l’esecuzione automatica del pagamento appena il lavoro viene confermato.',
  },
  {
    q: 'Come protegge NexaLavoro dal burnout?',
    a: 'L’AI analizza pattern di lavoro e feedback emotivi. Se rileva stress invia alert e suggerisce pause e upskilling leggero.',
  },
  {
    q: 'Posso usare NexaLavoro gratuitamente?',
    a: 'Certo! Il piano Starter è gratis e include profilo dinamico, match mensili e community access.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16">
      <div className="container max-w-2xl">
        <span className="section-label">✦ Domande frequenti</span>
        <h2 className="section-title">Hai dubbi? Abbiamo le risposte.</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border-subtle rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-bold hover:text-cyan transition-colors"
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <span className={`text-cyan text-2xl transform transition-transform ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                <p className="text-text-secondary">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}