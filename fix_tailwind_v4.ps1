# ==========================================
# AUTOHAUS ANEMOLTER - TAILWIND 4 FIX
# Repariert den Konfigurations-Fehler
# ==========================================

Write-Host "[FIX] Repariere Tailwind 4 Konfiguration..." -ForegroundColor Cyan

# 1. POSTCSS CONFIG (Zwingend fuer Next.js + TW4)
# ------------------------------------------
$postCssConfig = @"
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
export default config;
"@
Set-Content -Path "postcss.config.mjs" -Value $postCssConfig -Encoding UTF8
Write-Host " + postcss.config.mjs aktualisiert." -ForegroundColor Green

# 2. GLOBALS.CSS (Der "Modern Way" fuer TW4)
# Wir definieren die Variablen direkt im CSS via @theme
# ------------------------------------------
$globalsCss = @"
@import "tailwindcss";

@theme {
  /* Corporate Colors */
  --color-primary: #B71C1C;
  --color-primary-hover: #9D1717;
  
  /* Backgrounds */
  --color-background: #101319;
  --color-surface: #202731;
  
  /* Text */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #A0A8B0;

  /* Fonts */
  --font-sans: var(--font-geist-sans), system-ui, sans-serif;
}

/* Base Styles */
:root {
  background-color: var(--color-background);
  color: var(--color-text-primary);
}

/* Custom Utilities via CSS (TW4 Style) */
@layer components {
  .btn-primary {
    @apply bg-primary text-text-primary px-6 py-3 rounded-md font-semibold text-sm transition-all shadow-lg;
  }
  .btn-primary:hover {
    @apply bg-primary-hover -translate-y-0.5;
  }
  
  .card {
    @apply bg-surface border border-gray-800 rounded-lg shadow-sm transition-colors;
  }
  .card:hover {
    @apply border-primary;
  }
}
"@
Set-Content -Path "app/globals.css" -Value $globalsCss -Encoding UTF8
Write-Host " + app/globals.css auf Tailwind 4 Syntax umgestellt." -ForegroundColor Green

# 3. CLEANUP (Alte Config loeschen, da sie Konflikte verursacht)
# ------------------------------------------
if (Test-Path "tailwind.config.ts") {
    Remove-Item "tailwind.config.ts" -Force
    Write-Host " + Alte tailwind.config.ts geloescht (nicht mehr noetig)." -ForegroundColor Yellow
}

Write-Host "`n[FERTIG] Versuch es jetzt noch einmal mit 'npm run dev'!" -ForegroundColor White

