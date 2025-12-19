import Link from 'next/link';
import Image from 'next/image'; // <-- WICHTIG: Import hinzufügen
import { Vehicle } from '@/lib/types/vehicle';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price);
};
const formatKm = (km: number) => {
  return new Intl.NumberFormat('de-DE').format(km);
};

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link 
      href={`/fahrzeuge/${vehicle.id}`} 
      className="card group overflow-hidden block h-full flex flex-col hover:border-[var(--color-primary)] hover:shadow-[0_0_15px_rgba(183,28,28,0.2)] transition-all duration-300"
    >
      {/* Bild Bereich - Jetzt mit Next/Image */}
      <div className="aspect-[4/3] bg-gray-800 relative overflow-hidden">
        <Image
          src={vehicle.image}
          alt={`${vehicle.make} ${vehicle.model}`}
          fill // Füllt den Parent-Container
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        <div className="absolute top-2 right-2 bg-[var(--color-primary)] text-white text-xs font-bold px-2 py-1 rounded shadow-md z-10">
          Top Angebot
        </div>
      </div>

      {/* Inhalt Bereich */}
      <div className="p-4 flex flex-col flex-grow">
        {/* FIX: Text bleibt Weiß */}
        <h3 className="font-bold text-lg text-white mb-1 line-clamp-1 group-hover:text-white transition-colors">
          {vehicle.title}
        </h3>
        
        {/* Preis */}
        <div className="text-xl font-bold text-[var(--color-primary)] mb-4">
          {formatPrice(vehicle.price)}
        </div>

        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-[var(--color-text-secondary)] mt-auto border-t border-gray-700 pt-3">
          <div className="flex items-center gap-2">
            <span>📅</span> {vehicle.year}
          </div>
          <div className="flex items-center gap-2">
            <span>🛣️</span> {formatKm(vehicle.mileage)} km
          </div>
          <div className="flex items-center gap-2">
            <span>⛽</span> {vehicle.fuel}
          </div>
          <div className="flex items-center gap-2">
            <span>⚙️</span> {vehicle.transmission}
          </div>
        </div>
      </div>
    </Link>
  );
}
