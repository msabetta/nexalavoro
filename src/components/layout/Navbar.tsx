'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b border-border-subtle transition-colors ${scrolled ? 'bg-primary/90 shadow-lg' : 'bg-primary/60'}`}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-xl text-text-primary hover:scale-105 transition-transform">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-hero text-white shadow-[0_0_20px_rgba(77,124,255,0.5)]">⚡</span>
          NexaLavoro
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="block md:hidden p-2 text-text-primary"
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-text-primary transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-0.5 w-6 bg-text-primary my-1.5 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-text-primary transition-all ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
        <ul className={`md:flex md:items-center gap-1 absolute md:static top-full left-0 right-0 bg-primary/95 md:bg-transparent md:backdrop-blur-none flex-col md:flex-row py-4 md:py-0 ${mobileOpen ? 'flex' : 'hidden'}`}>
          <li><Link href="#features" className="block px-4 py-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5" onClick={() => setMobileOpen(false)}>Funzionalità</Link></li>
          <li><Link href="#testimonials" className="block px-4 py-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5" onClick={() => setMobileOpen(false)}>Testimonial</Link></li>
          <li><Link href="#pricing" className="block px-4 py-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5" onClick={() => setMobileOpen(false)}>Piani</Link></li>
          <li><Link href="#faq" className="block px-4 py-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5" onClick={() => setMobileOpen(false)}>FAQ</Link></li>
          <li><Link href="#cta" className="block ml-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan to-blue text-white font-bold shadow-md hover:scale-105 transition-transform" onClick={() => setMobileOpen(false)}>Inizia Gratis</Link></li>
        </ul>
      </div>
    </nav>
  );
}