// Wir nutzen hier Lucide Icons (Standard in modernen Stacks), 
// aber falls du die noch nicht installiert hast, nutzen wir erstmal Emojis als Platzhalter.
// Das hält es simpel und funktioniert sofort.

export function FeaturesSection() {
  const features = [
    {
      title: "Geprüfte Qualität",
      desc: "Jedes Fahrzeug durchläuft unseren strengen 50-Punkte-Meistercheck.",
      icon: "🛡️"
    },
    {
      title: "Faire Finanzierung",
      desc: "Maßgeschneiderte Ratenzahlung, die genau zu Ihrem Budget passt.",
      icon: "💶"
    },
    {
      title: "Eigene Werkstatt",
      desc: "Rundum-Service auch nach dem Kauf: Inspektion, TÜV & Reparatur.",
      icon: "🔧"
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-background)] relative z-20 -mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card p-8 bg-[var(--color-surface)] border border-white/5 hover:border-[var(--color-primary)] transition-all duration-300 shadow-xl">
              <div className="text-4xl mb-6 bg-white/5 w-16 h-16 rounded-lg flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
