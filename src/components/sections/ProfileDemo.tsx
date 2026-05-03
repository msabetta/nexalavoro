'use client';
import { useState } from 'react';

const allSkills = [
  'React', 'TypeScript', 'Python', 'Node.js',
  'AI Prompt Engineering', 'Docker', 'Figma', 'SQL',
];
const initiallyActive = ['React', 'AI Prompt Engineering'];

export default function ProfileDemo() {
  const [activeSkills, setActiveSkills] = useState<Set<string>>(new Set(initiallyActive));

  const toggleSkill = (skill: string) => {
    setActiveSkills(prev => {
      const next = new Set(prev);
      if (next.has(skill)) next.delete(skill);
      else next.add(skill);
      return next;
    });
  };

  return (
    <section className="py-16 bg-secondary border-y border-border-subtle">
      <div className="container max-w-2xl">
        <span className="section-label">✦ Il Tuo Profilo Dinamico</span>
        <h2 className="section-title">Un&apos;identità professionale<br/>finalmente viva.</h2>
        <p className="section-desc">Ogni skill, ogni esperienza, ogni alert è connesso in tempo reale. Ecco un&apos;anteprima.</p>

        <div className="card p-6 md:p-8">
          {/* Intestazione profilo */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan to-blue flex items-center justify-center text-white font-black text-2xl shadow-[0_0_28px_rgba(77,124,255,0.5)]">
              MR
            </div>
            <div>
              <h3 className="font-extrabold text-xl">Marco Rossi</h3>
              <div className="text-cyan font-semibold text-sm">Full-Stack Developer · AI Specialist</div>
              <div className="text-text-muted text-xs mt-0.5">🟢 Disponibile per progetti etici</div>
            </div>
          </div>

          {/* Skills cloud */}
          <p className="text-text-muted text-xs font-bold uppercase tracking-wide mb-3">Competenze Rilevate in Tempo Reale</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {allSkills.map(skill => {
              const isActive = activeSkills.has(skill);
              return (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                    isActive
                      ? 'bg-blue border-blue text-white font-bold animate-pulse-glow'
                      : 'bg-blue/10 border-blue/25 text-text-primary hover:bg-blue/20 hover:border-cyan'
                  }`}
                  aria-pressed={isActive}
                >
                  {skill}
                </button>
              );
            })}
          </div>

          {/* Statistiche */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-black text-cyan">94%</div>
              <div className="text-xs text-text-muted uppercase tracking-wide">Skill Relevance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-cyan">12</div>
              <div className="text-xs text-text-muted uppercase tracking-wide">Progetti Etici</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-cyan">€0</div>
              <div className="text-xs text-text-muted uppercase tracking-wide">Commissioni Nascoste</div>
            </div>
          </div>

          {/* Indicatore burnout */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-green/5 border border-green/20 text-green font-semibold text-sm">
            <span className="w-3.5 h-3.5 rounded-full bg-green animate-pulse" />
            🟢 Rischio Burnout: <strong>Basso</strong> — Ottimo equilibrio vita-lavoro rilevato
          </div>
        </div>
      </div>
    </section>
  );
}