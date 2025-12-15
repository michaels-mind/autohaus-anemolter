import Link from 'next/link';
import { Vehicle } from '@/lib/types/vehicle';

// ... (Helper funktionen bleiben gleich) ...
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
      {/* Bild Bereich */}
      <div className="aspect-[4/3] bg-gray-800 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${vehicle.image})` }}
        />
        <div className="absolute top-2 right-2 bg-[var(--color-primary)] text-white text-xs font-bold px-2 py-1 rounded shadow-md">
          Top Angebot
        </div>
      </div>

      {/* Inhalt Bereich */}
      <div className="p-4 flex flex-col flex-grow">
        {/* FIX: Text bleibt Weiß, wird nicht mehr rot! */}
        <h3 className="font-bold text-lg text-white mb-1 line-clamp-1 group-hover:text-white transition-colors">
          {vehicle.title}
        </h3>
        
        {/* Preis ist eh schon rot, das passt als Highlight */}
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
