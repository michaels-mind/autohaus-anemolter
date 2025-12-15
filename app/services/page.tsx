import { ServiceCard } from '@/components/ui/ServiceCard';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "HU & AU Service",
      desc: "Die Hauptuntersuchung ist fällig? Wir bereiten Ihr Fahrzeug vor und führen die Prüfung direkt bei uns im Haus durch (in Kooperation mit Prüforganisationen).",
      icon: "📋"
    },
    {
      title: "Inspektion & Wartung",
      desc: "Regelmäßige Wartung nach Herstellervorgaben erhält den Wert Ihres Fahrzeugs. Wir nutzen modernste Diagnosegeräte für alle Marken.",
      icon: "🔧"
    },
    {
      title: "Reifen-Service",
      desc: "Radwechsel, Wuchten und Einlagerung. Wir sorgen für den perfekten Kontakt zur Straße, egal ob Sommer oder Winter.",
      icon: "🛞"
    },
    {
      title: "Klimaservice",
      desc: "Damit Sie einen kühlen Kopf bewahren. Wir prüfen Dichtheit, füllen Kältemittel nach und desinfizieren die Anlage.",
      icon: "❄️"
    },
    {
      title: "Unfallinstandsetzung",
      desc: "Kratzer oder Blechschaden? Unsere Karosserie-Experten machen Ihr Auto wieder wie neu. Inklusive Abwicklung mit der Versicherung.",
      icon: "🔨"
    },
    {
      title: "Finanzierung",
      desc: "Der Traumwagen muss kein Traum bleiben. Wir erstellen Ihnen ein individuelles Angebot für Finanzierung oder Leasing.",
      icon: "💶"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      
      {/* Header Section */}
      <div className="bg-[var(--color-surface)] border-b border-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Unsere <span className="text-[var(--color-primary)]">Leistungen</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
            In unserer Meisterwerkstatt bieten wir Ihnen Full-Service rund um Ihr Fahrzeug. 
            Kompetent, transparent und zu fairen Preisen.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard 
              key={i}
              title={s.title}
              description={s.desc}
              icon={s.icon}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-gray-900 to-[var(--color-surface)] rounded-2xl border border-gray-800 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Nicht das Passende gefunden?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Wir helfen Ihnen gerne bei individuellen Anliegen weiter. Rufen Sie uns einfach an oder schreiben Sie uns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary">
                Kontakt aufnehmen
              </Link>
              <a href="tel:+4957613021" className="px-6 py-3 rounded-md font-semibold text-sm text-white border border-gray-600 hover:bg-white/5 transition-all">
                📞 +49 5761 3021 anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
