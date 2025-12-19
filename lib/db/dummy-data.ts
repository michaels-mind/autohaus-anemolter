import { Vehicle } from '@/lib/types/vehicle';

export const DUMMY_VEHICLES: Vehicle[] = [
  {
    id: '1',
    title: 'Volkswagen Golf VIII GTI 2.0 TSI',
    make: 'Volkswagen',
    model: 'Golf GTI',
    price: 34900,
    // Dieser Link funktioniert bereits bei dir (siehe Screenshot)
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    mileage: 25000,
    year: 2023,
    fuel: 'Benzin',
    transmission: 'Automatik',
    power: 245,
    type: 'Limousine'
  },
  {
    id: '2',
    title: 'BMW 320i Touring M Sport',
    make: 'BMW',
    model: '320i',
    price: 42500,
    // Neuer, funktionierender Link für BMW
    image: 'https://images.unsplash.com/photo-1555215696-99ac45e43d34?auto=format&fit=crop&w=800&q=80', 
    mileage: 12000,
    year: 2024,
    fuel: 'Benzin',
    transmission: 'Automatik',
    power: 184,
    type: 'Kombi'
  },
  {
    id: '3',
    title: 'Audi A4 Avant 40 TDI quattro',
    make: 'Audi',
    model: 'A4 Avant',
    price: 29900,
    // Neuer, funktionierender Link für Audi
    image: 'https://images.unsplash.com/photo-1603584173870-7b23139f95f1?auto=format&fit=crop&w=800&q=80',
    mileage: 58000,
    year: 2021,
    fuel: 'Diesel',
    transmission: 'Automatik',
    power: 204,
    type: 'Kombi'
  }
];
