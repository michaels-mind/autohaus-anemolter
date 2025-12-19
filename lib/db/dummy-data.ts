import { Vehicle } from '@/lib/types/vehicle';

export const DUMMY_VEHICLES: Vehicle[] = [
  {
    id: '1',
    title: 'Volkswagen Golf VIII GTI',
    price: 34990,
    mileage: 25000,
    year: 2023,
    fuel: 'Benzin',
    transmission: 'Automatik',
    power: 245,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Audi A4 Avant S-Line',
    price: 42500,
    mileage: 48000,
    year: 2022,
    fuel: 'Diesel',
    transmission: 'Automatik',
    power: 204,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'BMW 320i Touring M-Sport',
    price: 28900,
    mileage: 85000,
    year: 2020,
    fuel: 'Benzin',
    transmission: 'Automatik',
    power: 184,
    image: '/images/bmw-dummy.webp',
  }, // <--- DIESE ZEILE HATTE GEFEHLT
  {
    id: '4',
    title: 'Mercedes-Benz C 220 d',
    price: 39900,
    mileage: 32000,
    year: 2021,
    fuel: 'Diesel',
    transmission: 'Automatik',
    power: 194,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800'
  }
];
