import { ContactForm } from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      
      {/* Header */}
      <div className="bg-[var(--color-surface)] border-b border-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kontaktieren Sie uns</h1>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Sie haben Fragen zu einem Fahrzeug oder möchten einen Termin vereinbaren? 
            Unser Team ist gerne für Sie da.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LINKE SPALTE: Infos */}
          <div className="space-y-12">
            
            {/* Kontaktdaten */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Autohaus Anemolter</h2>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <span>
                    An der Landstrasse 16<br />
                    31592 Stolzenau
                  </span>
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-2xl">📞</span>
                  <a href="tel:+4957613021" className="hover:text-[var(--color-primary)] transition-colors">
                    +49 5761 3021
                  </a>
                </p>
                <p className="flex items-center gap-4">
                  <span className="text-2xl">📧</span>
                  <a href="mailto:info@autohaus-anemolter.de" className="hover:text-[var(--color-primary)] transition-colors">
                    info@autohaus-anemolter.de
                  </a>
                </p>
              </div>
            </div>

            {/* Öffnungszeiten */}
            <div className="card p-8 border-l-4 border-l-[var(--color-primary)]">
              <h3 className="text-xl font-bold text-white mb-4">Öffnungszeiten</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Mo - Fr</span>
                  <span className="text-white font-medium">08:00 - 18:00 Uhr</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Samstag</span>
                  <span className="text-white font-medium">09:00 - 13:00 Uhr</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-gray-400">Sonntag</span>
                  <span className="text-[var(--color-primary)] font-medium">Geschlossen (Schautag)</span>
                </div>
              </div>
            </div>

            {/* Google Maps Platzhalter (Optional) */}
            <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 border border-gray-700">
              [Google Maps Integration]
            </div>

          </div>

          {/* RECHTE SPALTE: Formular */}
          <div>
            <div className="card p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white mb-6">Schreiben Sie uns</h2>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
