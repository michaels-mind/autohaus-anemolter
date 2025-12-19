import Image from 'next/image';
import Link from 'next/link';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      
      {/* Header */}
      <div className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Über uns</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Seit über 20 Jahren Ihr vertrauensvoller Partner für Mobilität in Stolzenau.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-24">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Tradition trifft Moderne</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Gegründet im Jahr 2005, begann das Autohaus Anemolter als kleine Werkstatt mit einer klaren Vision: 
                Ehrliche Arbeit zu fairen Preisen.
              </p>
              <p>
                Heute sind wir stolz darauf, einer der führenden Ansprechpartner für geprüfte Gebrauchtwagen 
                in der Region zu sein. Unser Anspruch hat sich dabei nie geändert: Wir verkaufen nicht einfach nur Autos, 
                wir sorgen dafür, dass Sie sicher und zufrieden unterwegs sind.
              </p>
            </div>
            <div className="pt-4 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary)]">20+</div>
                <div className="text-sm text-gray-500">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary)]">2.500+</div>
                <div className="text-sm text-gray-500">Zufriedene Kunden</div>
              </div>
            </div>
          </div>
          
          {/* Bild von Witali */}
          <div className="aspect-square bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 relative group">
              <Image 
                src="/images/witali.webp"
                alt="Witali Böhm - Inhaber Autohaus Anemolter"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              {/* Overlay für bessere Lesbarkeit des Textes unten, falls nötig */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-bold text-lg">Vitalij Böhm</p>
                <p className="text-[var(--color-primary)] text-sm">Inhaber & Gründer</p>
              </div>
          </div>
        </div>

        {/* Werte Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 bg-[var(--color-surface)]">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-2">Transparenz</h3>
              <p className="text-sm text-gray-400">Keine versteckten Kosten. Wir besprechen jede Reparatur vorab mit Ihnen.</p>
            </div>
            <div className="card p-8 bg-[var(--color-surface)]">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-white mb-2">Qualität</h3>
              <p className="text-sm text-gray-400">Wir nutzen nur Originalteile oder Teile in Erstausrüsterqualität.</p>
            </div>
            <div className="card p-8 bg-[var(--color-surface)]">
              <div className="text-4xl mb-4">🏎️</div>
              <h3 className="text-xl font-bold text-white mb-2">Leidenschaft</h3>
              <p className="text-sm text-gray-400">Autos sind unser Leben. Diese Begeisterung spüren Sie in jedem Service.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--color-surface)] rounded-2xl p-12 text-center border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Lernen Sie uns kennen</h2>
          <p className="text-gray-400 mb-8">Kommen Sie auf einen Kaffee vorbei und schauen Sie sich um.</p>
          <Link href="/kontakt" className="btn-primary">
            Termin vereinbaren
          </Link>
        </div>

      </div>
    </div>
  );
}
