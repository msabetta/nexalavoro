const testimonials = [
  {
    quote: 'Finalmente una piattaforma che non mi chiede di svendermi. Il matching etico mi ha fatto incontrare un\'azienda che rispetta i miei orari e la mia vita privata. Ho ritrovato entusiasmo.',
    name: 'Sara Lorenzi',
    role: 'UX Designer · Milano',
    avatarBg: 'bg-gradient-to-br from-blue to-cyan',
    initials: 'SL',
  },
  {
    quote: 'Il pagamento istantaneo tramite smart contract mi ha svoltato la gestione finanziaria. Consegno il progetto e in pochi secondi ho i fondi disponibili. Zero attese, zero scuse.',
    name: 'Davide Brambilla',
    role: 'Software Developer · Torino',
    avatarBg: 'bg-gradient-to-br from-purple to-rose',
    initials: 'DB',
  },
  {
    quote: 'L\'alert burnout mi ha letteralmente salvato. Non mi ero accorto di essere in sovraccarico. Il piano di recupero personalizzato mi ha permesso di rimettermi in carreggiata senza sensi di colpa.',
    name: 'Francesca Costa',
    role: 'Project Manager · Bologna',
    avatarBg: 'bg-gradient-to-br from-green to-blue',
    initials: 'FC',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
      <div className="container">
        <span className="section-label">✦ Voci dalla community</span>
        <h2 className="section-title">Chi ha già scelto NexaLavoro.</h2>
        <p className="section-desc">Lavoratori reali, storie vere. Ecco cosa significa mettere la persona al centro.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card flex flex-col gap-4">
              <blockquote className="text-text-secondary italic text-sm leading-relaxed flex-1 before:content-['“'] before:text-4xl before:font-black before:text-cyan before:block before:mb-1 before:opacity-70">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-border-subtle">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${t.avatarBg}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-text-primary text-sm">{t.name}</div>
                  <div className="text-xs text-text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}