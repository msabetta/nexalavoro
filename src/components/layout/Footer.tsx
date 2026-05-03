export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8 text-center text-text-muted text-sm">
      <div className="container flex flex-wrap justify-center gap-6 mb-4">
        <a href="#features" className="hover:text-cyan">Funzionalità</a>
        <a href="#testimonials" className="hover:text-cyan">Testimonial</a>
        <a href="#pricing" className="hover:text-cyan">Piani</a>
        <a href="#faq" className="hover:text-cyan">FAQ</a>
        <a href="#newsletter" className="hover:text-cyan">Newsletter</a>
        <a href="#" className="hover:text-cyan">Privacy</a>
        <a href="#" className="hover:text-cyan">Termini</a>
      </div>
      <p>© 2026 <strong>NexaLavoro</strong> — La tecnologia serve la dignità, non la sostituisce. ✦ AI‑First · Human‑Centered</p>
      <p className="mt-1 text-xs">#1Maggio #FestaDeiLavoratori #FutureOfWork #AIforGood #NexaLavoro #LavoroEtico #Innovazione2026</p>
    </footer>
  );
}