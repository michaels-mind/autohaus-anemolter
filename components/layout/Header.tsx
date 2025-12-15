import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white tracking-tight">
            Autohaus <span className="text-[var(--color-primary)]">Anemolter</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-[var(--color-text-secondary)]">
          <Link href="/fahrzeuge" className="hover:text-white transition-colors">
            Fahrzeuge
          </Link>
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/team" className="hover:text-white transition-colors">
            Über uns
          </Link>
          <Link href="/kontakt" className="hover:text-white transition-colors">
            Kontakt
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link href="/kontakt" className="btn-primary">
            Termin vereinbaren
          </Link>
        </div>
      </div>
    </header>
  );
}
