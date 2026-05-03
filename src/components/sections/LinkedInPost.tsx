export default function LinkedInPost() {
  return (
    <section className="py-12 animate-fadeInUp">
      <div className="container max-w-3xl">
        <article className="card relative overflow-hidden p-6 md:p-8 bg-gradient-to-br from-card to-secondary border border-border-subtle shadow-card before:absolute before:-top-12 before:-right-12 before:w-40 before:h-40 before:bg-cyan/10 before:rounded-full before:blur-3xl before:pointer-events-none">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan to-blue flex items-center justify-center text-white font-black text-lg shadow-[0_0_18px_rgba(77,124,255,0.5)]">N</div>
            <div>
              <div className="font-bold text-text-primary">NexaLavoro</div>
              <div className="text-xs text-text-muted">@nexalavoro · AI-first Work Platform</div>
              <div className="text-xs text-text-muted flex items-center gap-1 mt-0.5">📅 1 maggio 2026 · 🌍 Pubblico</div>
            </div>
          </div>

          {/* Contenuto */}
          <div className="space-y-4 text-text-primary text-sm leading-relaxed">
            <p>
              Oggi è il <strong>1° maggio</strong>. Per decenni abbiamo celebrato il lavoro chiedendo alle persone di <span className="text-cyan font-semibold">adattarsi</span>. Nel 2026, è ora che sia il lavoro ad <span className="text-cyan font-semibold">adattarsi a loro</span>.
            </p>
            <p>Oggi lanciamo ufficialmente <strong>NexaLavoro</strong> 🚀</p>
            <p>La prima piattaforma <span className="text-cyan font-semibold">AI-first</span> progettata <em>dal lavoratore, per il lavoratore</em>.</p>
            <ul className="list-none space-y-1.5 pl-0">
              <li>✦ <strong>Competenze mappate in tempo reale</strong> (niente più CV statici o Skills obsolete)</li>
              <li>✦ <strong>Matching etico</strong> con aziende/progetti che rispettano orari, valore e salute mentale</li>
              <li>✦ <strong>Compensi trasparenti e pagamenti istantanei</strong> garantiti da smart contract</li>
              <li>✦ <strong>Alert proattivi contro il burnout</strong>, con piani di recupero e upskilling personalizzati</li>
            </ul>
            <p className="font-semibold">Non automatizziamo le persone. <span className="text-cyan">Le potenziamo.</span></p>
            <p>Il 1° maggio 2026 non è solo una data sul calendario. È il punto di partenza per un <strong>nuovo patto</strong>: dove la tecnologia serve la dignità, non la sostituisce.</p>
            <p>💬 <em>Se potessi cambiare una sola regola del lavoro moderno, quale sarebbe?</em><br/>Scrivilo nei commenti.</p>
          </div>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {['#1Maggio','#FestaDeiLavoratori','#FutureOfWork','#AIforGood','#NexaLavoro','#LavoroEtico','#Innovazione2026','#SkillsFirst','#HumanCenteredAI'].map(tag => (
              <span key={tag} className="text-blue text-xs font-medium hover:text-cyan transition-colors cursor-default">{tag}</span>
            ))}
          </div>

          {/* Engagement */}
          <div className="flex flex-wrap gap-6 mt-5 pt-4 border-t border-border-subtle text-xs text-text-muted">
            <span>👍 2.847</span>
            <span>💬 612 commenti</span>
            <span>🔄 1.203 condivisioni</span>
            <span>📤 Invia</span>
          </div>
        </article>
      </div>
    </section>
  );
}