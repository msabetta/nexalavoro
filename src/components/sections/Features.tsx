const features = [
  {
    icon: '🧠',
    iconBg: 'bg-cyan/10',
    iconColor: 'text-cyan',
    title: 'Competenze Mappate in Tempo Reale',
    desc: "Niente più CV statici. L'AI analizza e aggiorna continuamente le tue competenze, certificando ciò che sai fare oggi, non anni fa.",
    tag: 'AI-Powered',
    tagClass: 'bg-cyan/10 text-cyan',
  },
  {
    icon: '🤝',
    iconBg: 'bg-green/10',
    iconColor: 'text-green',
    title: 'Matching Etico con Aziende',
    desc: 'Colleghiamo talenti solo con realtà che rispettano orari sostenibili, valore reale e salute mentale. Zero compromessi al ribasso.',
    tag: 'Etico',
    tagClass: 'bg-green/10 text-green',
  },
  {
    icon: '⛓️',
    iconBg: 'bg-purple/10',
    iconColor: 'text-purple',
    title: 'Compensi Trasparenti & Pagamenti Istantanei',
    desc: 'Smart contract garantiscono pagamenti immediati alla consegna del lavoro. Nessuna attesa, nessuna sorpresa. Totale trasparenza.',
    tag: 'Blockchain',
    tagClass: 'bg-purple/10 text-purple',
  },
  {
    icon: '💚',
    iconBg: 'bg-rose/10',
    iconColor: 'text-rose',
    title: 'Alert Burnout & Piani di Recupero',
    desc: "L'AI monitora i segnali di stress e interviene prima che sia troppo tardi, suggerendo pause, upskilling e percorsi di benessere personalizzati.",
    tag: 'Salute Mentale',
    tagClass: 'bg-rose/10 text-rose',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="container">
        <span className="section-label">✦ Piattaforma AI-First</span>
        <h2 className="section-title">Progettata per potenziare,<br/>non per sostituire.</h2>
        <p className="section-desc">Quattro pilastri che ridefiniscono il rapporto tra persona e lavoro, mettendo la dignità al centro.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <div key={i} className="card group cursor-default">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${feat.iconBg} ${feat.iconColor}`}>
                {feat.icon}
              </div>
              <h3 className="font-extrabold text-lg mb-2">{feat.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{feat.desc}</p>
              <span className={`inline-block mt-4 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide ${feat.tagClass}`}>
                {feat.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}