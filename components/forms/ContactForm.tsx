'use client';

import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  // Honeypot State (muss leer bleiben)
  const [honeyPot, setHoneyPot] = useState(''); 

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // 🛡️ SPAM SCHUTZ (Honeypot Check)
    // Wenn ein Bot dieses Feld ausgefüllt hat, brechen wir hier ab.
    // Wir geben aber 'success' zurück, damit der Bot denkt, er war erfolgreich!
    if (honeyPot !== '') {
      console.warn('Spam Bot detected and blocked! 🤖');
      setStatus('success'); 
      return;
    }

    setStatus('loading');
    
    // Hier simulieren wir das Senden an den Server
    setTimeout(() => {
      setStatus('success');
      // Später: Echter API Call an /api/contact
    }, 1500);
  }

  if (status === 'success') {
    return (
      <div className="bg-green-500/10 border border-green-500/20 p-8 rounded-lg text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-white mb-2">Nachricht gesendet!</h3>
        <p className="text-gray-400">Wir melden uns schnellstmöglich bei Ihnen.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-[var(--color-primary)] hover:underline"
        >
          Neue Nachricht schreiben
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* 
         🛡️ HONEYPOT FELD (Für Menschen unsichtbar) 
         Wir nennen es "fax_number" oder "company_role", damit der Bot denkt, es sei wichtig.
         Wir nutzen CSS (opacity-0 absolute), um es vor Usern zu verstecken, 
         aber im DOM zu lassen für Bots.
      */}
      <div className="opacity-0 absolute top-0 left-0 h-0 w-0 overflow-hidden -z-10">
        <label htmlFor="fax_number">Bitte dieses Feld leer lassen</label>
        <input
          type="text"
          id="fax_number"
          name="fax_number"
          tabIndex={-1} // Damit man nicht reintabben kann
          autoComplete="off"
          value={honeyPot}
          onChange={(e) => setHoneyPot(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">Ihr Name</label>
          <input 
            required 
            type="text" 
            id="name"
            className="w-full bg-[var(--color-surface)] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
            placeholder="Max Mustermann"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">Ihre E-Mail</label>
          <input 
            required 
            type="email" 
            id="email"
            className="w-full bg-[var(--color-surface)] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
            placeholder="max@beispiel.de"
          />
        </div>
      </div>

      {/* Betreff */}
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-gray-300">Betreff</label>
        <select 
          id="subject"
          className="w-full bg-[var(--color-surface)] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all appearance-none"
        >
          <option>Allgemeine Anfrage</option>
          <option>Probefahrt vereinbaren</option>
          <option>Werkstatt-Termin</option>
          <option>Fahrzeugankauf</option>
        </select>
      </div>

      {/* Nachricht */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">Ihre Nachricht</label>
        <textarea 
          required 
          id="message"
          rows={5}
          className="w-full bg-[var(--color-surface)] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none"
          placeholder="Wie können wir Ihnen helfen?"
        />
      </div>

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="btn-primary w-full md:w-auto flex items-center justify-center gap-2 min-w-[200px]"
      >
        {status === 'loading' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>
            Sende...
          </>
        ) : (
          'Nachricht absenden'
        )}
      </button>
    </form>
  );
}
