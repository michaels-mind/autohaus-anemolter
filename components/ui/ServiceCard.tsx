import Link from 'next/link';

type ServiceProps = {
  title: string;
  description: string;
  icon: string;
  link?: string;
};

export function ServiceCard({ title, description, icon, link = "/kontakt" }: ServiceProps) {
  return (
    <div className="card p-8 group hover:border-[var(--color-primary)] transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_20px_rgba(183,28,28,0.15)]">
      
      {/* Icon Bubble */}
      <div className="w-16 h-16 rounded-xl bg-[var(--color-surface)] border border-gray-700 flex items-center justify-center text-3xl mb-6 group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] group-hover:text-white transition-colors shadow-lg">
        {icon}
      </div>
      
      {/* Titel (Bleibt weiß) */}
      <h3 className="text-xl font-bold text-white mb-3 transition-colors">
        {title}
      </h3>
      
      {/* Text (Bleibt grau/silber) */}
      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors">
        {description}
      </p>

      {/* Link Button FIX */}
      <Link 
        href={link} 
        className="mt-auto inline-flex items-center text-sm font-semibold text-[var(--color-primary)] transition-all duration-300 group-hover:translate-x-2 hover:text-white"
      >
        Termin vereinbaren 
        <span className="ml-2">→</span>
      </Link>
    </div>
  );
}
