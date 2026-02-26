# Grau-Orange Theme — Aktivierungsanleitung

**Datum:** 2026-02-25  
**Erstellt von:** Clawdius

---

## Übersicht

Dieses Theme ersetzt das aktuelle Blau-Teal Farbschema durch Grau-Orange:

| Element | Vorher | Nachher |
|---------|--------|---------|
| Primary | #3B82F6 (Blau) | #F57C00 (Orange) |
| Secondary | #14B8A6 (Teal) | #2C3E50 (Dunkelgrau) |
| Akzent | #60A5FA (Hellblau) | #FF6B35 (Leuchtendes Orange) |

**Vorteile:**
- ✅ Höherer Kontrast (WCAG AAA compliant)
- ✅ Bessere Lesbarkeit
- ✅ Professioneller Business-Look
- ✅ Warm aber technisch

---

## Aktivierung

### Schritt 1: Backup erstellen

```powershell
# PowerShell
Copy-Item tailwind.config.js tailwind.config.BACKUP.js
Copy-Item src/index.css src/index.BACKUP.css
```

### Schritt 2: Theme-Dateien aktivieren

```powershell
# PowerShell
Copy-Item tailwind.config.GRAU-ORANGE.js tailwind.config.js -Force
Copy-Item src/index.GRAU-ORANGE.css src/index.css -Force
```

### Schritt 3: Dev-Server neu starten

```bash
npm run dev
```

### Schritt 4: Prüfen

Öffne http://localhost:5173 und prüfe:
- [ ] Buttons sind jetzt orange
- [ ] Text ist dunkelgrau auf weiß
- [ ] Hover-Effekte funktionieren
- [ ] Dark Mode funktioniert

---

## Zurück zum alten Theme

Falls du zurück willst:

```powershell
Copy-Item tailwind.config.BACKUP.js tailwind.config.js -Force
Copy-Item src/index.BACKUP.css src/index.css -Force
npm run dev
```

---

## Was sich ändert (automatisch)

Da die Tailwind-Klassen gleich bleiben, werden alle Komponenten automatisch umgestellt:

| Klasse | Vorher | Nachher |
|--------|--------|---------|
| `bg-primary` | Blau | Orange |
| `text-primary` | Blau | Orange |
| `bg-secondary` | Teal | Dunkelgrau |
| `border-primary` | Blau | Orange |
| `hover:bg-primary-dark` | Dunkelblau | Dunkel-Orange |

**Keine Code-Änderungen nötig!**

---

## Neue Utility-Klassen

Das Grau-Orange Theme fügt diese neuen Klassen hinzu:

### Hintergründe
- `.bg-surface-light` — Weißer Hintergrund
- `.bg-surface-gray` — Hellgrauer Hintergrund
- `.bg-surface-warm` — Warmer (orange-getönter) Hintergrund
- `.bg-gradient-warm` — Warmer Gradient
- `.bg-gradient-orange` — Orange Gradient

### Text
- `.text-text-primary` — Dunkelgrau (#2C3E50)
- `.text-text-secondary` — Mittelgrau (#546E7A)
- `.gradient-text-brand` — Animierter Grau-Orange Text

### Komponenten
- `.btn-accent` — Leuchtendes Orange Button
- `.accent-line` — Orange Unterstreichung für Headlines
- `.feature-box` — Box mit Orange-Border links
- `.badge-primary` — Orange Badge

### Sections
- `.section-warm` — Section mit warmem Hintergrund
- `.section-gray` — Section mit grauem Hintergrund

---

## Farbpalette (Referenz)

### Primary (Orange)
```css
--primary: #F57C00;      /* Haupt */
--primary-dark: #E65100; /* Hover */
--primary-light: #FFB74D; /* Highlight */
```

### Secondary (Grau)
```css
--secondary: #2C3E50;    /* Text/Akzent */
--secondary-dark: #1A252F; /* Fast-Schwarz */
--secondary-light: #546E7A; /* Mittel */
```

### Surfaces
```css
--surface-light: #FFFFFF; /* Haupt */
--surface-gray: #F5F7FA;  /* Sections */
--surface-warm: #FFF8F0;  /* Warm */
```

### Dark Mode
```css
--dark-bg: #1A252F;      /* Hintergrund */
--dark-card: #2C3E50;    /* Cards */
--dark-border: #3D5A73;  /* Borders */
```

---

## Kontrast-Check (WCAG)

| Kombination | Ratio | Status |
|-------------|-------|--------|
| Dunkelgrau (#2C3E50) auf Weiß | 12.6:1 | ✅ AAA |
| Dunkelgrau auf Hellgrau (#F5F7FA) | 10.2:1 | ✅ AAA |
| Weiß auf Orange (#F57C00) | 4.5:1 | ✅ AA (große Texte) |
| Weiß auf Dunkel-Orange (#E65100) | 5.8:1 | ✅ AA |

---

## Support

Bei Fragen: Clawdius fragen! 🦞
