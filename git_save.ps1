# ==========================================
# AUTOHAUS ANEMOLTER - PROJECT SAFE
# Initialisiert Git und sichert den Stand
# ==========================================

Write-Host "[GIT] Starte Projektsicherung..." -ForegroundColor Cyan

# 1. Prüfen ob Git installiert ist
if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "[ERROR] Git ist nicht installiert!" -ForegroundColor Red
    Exit
}

# 2. Prüfen ob .gitignore existiert (sonst müllen wir das Repo zu)
if (!(Test-Path ".gitignore")) {
    Write-Host "[INIT] Erstelle .gitignore..." -ForegroundColor Yellow
    $ignoreContent = @"
node_modules
.next
.env
.env.local
.DS_Store
dist
build
"@
    Set-Content -Path ".gitignore" -Value $ignoreContent -Encoding UTF8
}

# 3. Git Repo initialisieren (falls noch nicht da)
if (!(Test-Path ".git")) {
    Write-Host "[INIT] Initialisiere neues Git Repository..." -ForegroundColor Green
    git init
}

# 4. Alles hinzufügen
Write-Host "[ADD] Füge alle Dateien hinzu..." -ForegroundColor Yellow
git add .

# 5. Commit erstellen
$date = Get-Date -Format "yyyy-MM-dd HH:mm"
Write-Host "[COMMIT] Erstelle Sicherungspunkt ($date)..." -ForegroundColor Green
git commit -m "Projekt-Status: Frontend Basis steht (Startseite, Fahrzeuge, Kontakt). Layout stabil."

Write-Host "`n[SUCCESS] Projekt ist lokal gesichert! ✅" -ForegroundColor Cyan
Write-Host "Um es auf GitHub zu laden:"
Write-Host "1. Erstelle ein leeres Repo auf GitHub."
Write-Host "2. Führe aus:"
Write-Host "   git remote add origin DEIN_GITHUB_LINK"
Write-Host "   git branch -M main"
Write-Host "   git push -u origin main"
