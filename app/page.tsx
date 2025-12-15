import Link from 'next/link';
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { VehicleCard } from '@/components/ui/VehicleCard';
import { DUMMY_VEHICLES } from '@/lib/db/dummy-data';

export default function Home() {
  // Wir nehmen nur die ersten 3 Fahrzeuge für den Teaser
  const featuredVehicles = DUMMY_VEHICLES.slice(0, 3);

  return (
    <div className="flex flex-col gap-0 bg-[var(--color-background)]">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Vorteile */}
      <FeaturesSection />
      
      {/* 3. NEU: Fahrzeug Teaser */}
      <section className="py-24 border-t border-gray-800">
        <div className="container mx-auto px-4">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Neuzugänge</h2>
              <p className="text-gray-400">Entdecken Sie unsere aktuellen Highlights.</p>
            </div>
            <Link href="/fahrzeuge" className="btn-secondary">
              Alle Fahrzeuge anzeigen →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map((car) => (
              <VehicleCard key={car.id} vehicle={car} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. Kleiner CTA für Ankauf */}
      <section className="py-20 bg-[var(--color-surface)] text-center border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Wir kaufen Ihr Auto</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Faire Bewertung, sofortige Auszahlung. Lassen Sie Ihr Fahrzeug unverbindlich von uns schätzen.
          </p>
          <Link href="/kontakt" className="btn-primary">
            Kostenlose Bewertung anfragen
          </Link>
        </div>
      </section>
    </div>
  );
}
