'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function LoginGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Login-Seite selbst NIE schützen
    if (pathname === '/login') {
      setIsChecking(false);
      setIsAuthenticated(false);
      return;
    }

    const auth = typeof window !== 'undefined'
      ? localStorage.getItem('authenticated')
      : null;

    if (auth === 'true') {
      setIsAuthenticated(true);
      setIsChecking(false);
    } else {
      router.replace('/login');
    }
  }, [pathname, router]);

  // Während Redirect / Check: nichts blockieren, damit /login sichtbar ist
  if (pathname === '/login') {
    return <>{children}</>;
  }

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] text-white">
        Lade...
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
