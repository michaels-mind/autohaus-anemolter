import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[var(--color-surface)] mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Spalte 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Autohaus Anemolter</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Ihr vertrauensvoller Partner für Neu- und Gebrauchtwagen seit über 20 Jahren.
            </p>
          </div>

          {/* Spalte 2: Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li><Link href="/fahrzeuge" className="hover:text-white">Fahrzeugbestand</Link></li>
              <li><Link href="/services" className="hover:text-white">Werkstatt & Service</Link></li>
              <li><Link href="/kontakt" className="hover:text-white">Kontakt & Anfahrt</Link></li>
            </ul>
          </div>

          {/* Spalte 3: Rechtliches */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li><Link href="/impressum" className="hover:text-white">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white">Datenschutz</Link></li>
            </ul>
          </div>

          {/* Spalte 4: Kontakt */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Kontakt</h4>
            <p className="text-sm text-[var(--color-text-secondary)]">
              An der Landstrasse 16<br />
              31592 Stolzenau<br /><br />
              Tel: +49 5761 3021
            </p>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-[var(--color-text-secondary)]">
          © {new Date().getFullYear()} Autohaus Anemolter. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
