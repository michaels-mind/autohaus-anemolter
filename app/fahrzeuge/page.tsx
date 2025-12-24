import { VehicleCard } from '@/components/ui/VehicleCard';
import { DUMMY_VEHICLES } from '@/lib/db/dummy-data';

export default function VehicleIndexPage() {
  // Exakt 4 Fahrzeuge (oder weniger, wenn Array kürzer ist)
  const vehiclesToShow = DUMMY_VEHICLES.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Bereich */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Unser Fahrzeugbestand
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Aktuell {vehiclesToShow.length} geprüfte Fahrzeuge verfügbar.
          </p>
        </div>

        {/* Placeholder für Filter Button (später) */}
        <button className="btn-secondary">
          Filter &amp; Suche 🔍
        </button>
      </div>

      {/* Das Grid - Hier werden die Fahrzeuge aufgestellt */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {vehiclesToShow.map((car) => (
          <VehicleCard key={car.id} vehicle={car} />
        ))}
      </div>
    </div>
  );
}
