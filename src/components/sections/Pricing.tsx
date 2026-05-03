const plans = [
  {
    name: 'Starter',
    price: '€0',
    period: '/mese',
    features: [
      'Profilo dinamico base',
      'Fino a 5 match/mese',
      'Pagamenti istantanei',
      'Alert burnout base',
      'Community access',
    ],
    cta: 'Inizia Gratis',
    ctaClass: 'btn-secondary',
    featured: false,
  },
  {
    name: 'Pro',
    price: '€24',
    period: '/mese',
    features: [
      'Profilo avanzato con AI',
      'Match illimitati',
      'Smart contract premium',
      'Alert burnout avanzati',
      'Upskilling personalizzato',
      'Supporto prioritario',
    ],
    cta: 'Scegli Pro',
    ctaClass: 'btn-primary',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Contattaci',
    period: '',
    features: [
      'Tutto il piano Pro',
      'Dashboard aziendale',
      'API personalizzate',
      'SLA garantito',
      'Formazione team',
    ],
    cta: 'Parlaci del tuo team',
    ctaClass: 'btn-secondary',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16">
      <div className="container">
        <span className="section-label">✦ Piani trasparenti</span>
        <h2 className="section-title">Scegli il piano che<br/>rispetta il tuo valore.</h2>
        <p className="section-desc">Nessun costo nascosto. Solo opportunità reali.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`card relative flex flex-col gap-5 p-6 text-center ${
                plan.featured ? 'border-cyan shadow-[0_0_60px_rgba(77,124,255,0.2)] scale-105 bg-card-hover' : ''
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan text-black font-bold text-xs px-4 py-1 rounded-full uppercase tracking-wide">
                  Più scelto
                </span>
              )}
              <div className="font-extrabold text-xl">{plan.name}</div>
              <div className="text-4xl font-black">
                {plan.price}
                {plan.period && <span className="text-lg font-medium text-text-muted">{plan.period}</span>}
              </div>
              <ul className="text-left text-sm text-text-secondary space-y-2 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="before:content-['✓_'] before:text-green before:font-bold">{f}</li>
                ))}
              </ul>
              <a href="#cta" className={`${plan.ctaClass} w-full justify-center`}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}