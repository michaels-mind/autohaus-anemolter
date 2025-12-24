import { Vehicle } from '@/lib/types/vehicle';

export const DUMMY_VEHICLES: Vehicle[] = [
  {
    id: '1',
    title: 'Volkswagen Golf VIII GTI',
    make: 'Volkswagen',
    model: 'Golf VIII GTI',
    price: 34990,
    year: 2023,
    mileage: 25000,
    fuel: 'Benzin',
    transmission: 'Automatik',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a', // VW[web:25]
  },
  {
    id: '2',
    title: 'Audi A4 Avant S-Line',
    make: 'Audi',
    model: 'A4 Avant S-Line',
    price: 42500,
    year: 2022,
    mileage: 48000,
    fuel: 'Diesel',
    transmission: 'Automatik',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023', // Audi[web:25]
  },
  {
    id: '3',
    title: 'BMW 320i Touring M-Sport',
    make: 'BMW',
    model: '320i Touring M-Sport',
    price: 28900,
    year: 2020,
    mileage: 85000,
    fuel: 'Benzin',
    transmission: 'Automatik',
    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f', // BMW, anderer Link[web:23]
  },
  {
    id: '4',
    title: 'Mercedes C 220d T-Modell',
    make: 'Mercedes-Benz',
    model: 'C 220d T-Modell',
    price: 37900,
    year: 2021,
    mileage: 62000,
    fuel: 'Diesel',
    transmission: 'Automatik',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c', // Mercedes-artig[web:25]
  },
];
