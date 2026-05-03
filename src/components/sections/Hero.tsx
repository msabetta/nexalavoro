export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover" poster="/videos/hero-fallback.svg">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
      </div>
      <div className="container relative z-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-4 py-1.5 text-sm font-semibold text-cyan animate-fadeInUp">
          <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" /> Lancio Ufficiale — 1° Maggio 2026
        </div>
        <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-cyan via-blue to-purple bg-clip-text text-transparent animate-fadeInUp">
          Il lavoro si adatta a te.<br/>Non il contrario.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-text-secondary animate-fadeInUp">
          NexaLavoro è la prima piattaforma <strong>AI‑first</strong> progettata dal lavoratore, per il lavoratore.
          Competenze dinamiche, matching etico, pagamenti istantanei e protezione dal burnout.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fadeInUp">
          <a href="#cta" className="btn-primary">🚀 Inizia il tuo percorso</a>
          <a href="#features" className="btn-secondary">Scopri di più ↓</a>
        </div>
      </div>
    </section>
  );
}