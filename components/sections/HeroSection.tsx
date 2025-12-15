import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gray-900">
      
      {/* HINTERGRUND (Das Tapetenmuster) */}
      <div className="absolute inset-0 z-0">
        {/* Dunkler Overlay, damit Text lesbar ist */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[var(--color-background)] z-10" />
        
        {/* Hier können wir später dein Bild reinladen. Für jetzt ein edler Verlauf: */}
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-surface)_0%,_#000000_100%)]" />
      </div>

      {/* CONTENT (Was auf dem Sofa liegt) */}
      <div className="container relative z-20 px-4 text-center">
        
        {/* Kleine Label oben drüber */}
        <div className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="text-sm font-medium text-[var(--color-primary)]">
            Seit 20 Jahren in Stolzenau
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Autohaus <span className="text-[var(--color-primary)]">Anemolter</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ihr Partner für geprüfte Gebrauchtwagen und erstklassigen Service. 
          Wir bringen Sie sicher ans Ziel.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/fahrzeuge" className="btn-primary w-full sm:w-auto text-center min-w-[200px]">
            Fahrzeuge ansehen
          </Link>
          <Link 
            href="/kontakt" 
            className="px-8 py-3 rounded-md font-semibold text-sm text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all w-full sm:w-auto text-center min-w-[200px]"
          >
            Werkstatt & Service
          </Link>
        </div>
      </div>
    </section>
  );
}
