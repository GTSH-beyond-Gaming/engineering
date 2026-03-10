# 📅 CALENDLY SETUP - TODO für Randy

**Status:** ⚠️ Noch nicht eingerichtet!
**Priorität:** HOCH (für optimale Website-Performance)

---

## 🎯 WARUM CALENDLY?

Aus dem Strategiedokument:

> **Das größte Problem vieler Websites:** Der Besucher ist interessiert – aber weiß nicht, was er jetzt tun soll.

**Calendly löst das:**
- ✅ Besucher buchen **sofort** einen Termin (auch nachts!)
- ✅ Kein E-Mail-Ping-Pong mehr
- ✅ Automatische Kalender-Integration
- ✅ Professioneller Eindruck

---

## 📋 SCHRITT-FÜR-SCHRITT ANLEITUNG

### 1. Calendly-Account erstellen
1. Gehe zu: https://calendly.com
2. "Sign up" (kostenlose Version reicht!)
3. Mit Google-Kalender verbinden

### 2. Event erstellen
**Event-Name:** "30-Minuten Erstgespräch"

**Beschreibung:**
```
Kostenloses Erstgespräch für Ihr KI- oder Website-Projekt.

Wir besprechen:
✓ Ihre aktuellen Herausforderungen
✓ Mögliche Lösungen (KI, Automation, Website)
✓ Nächste Schritte & grobe Kostenschätzung

Kein Verkaufsgespräch – wir schauen gemeinsam, ob und wie ich helfen kann.
```

**Dauer:** 30 Minuten
**Verfügbarkeit:** Mo-Fr, 9:00-17:00 (oder nach Wunsch)
**Ort:** Videocall (Zoom/Teams) oder vor Ort in Saalfeld

### 3. Link kopieren
Nach Erstellung bekommst du einen Link wie:
```
https://calendly.com/randyhahn/erstgespraech
```

**Diesen Link brauchst du für die Website!**

---

## 🔧 INTEGRATION IN WEBSITE

### Aktueller Stand (Placeholder):
Ich habe bereits **PLACEHOLDER-Links** in der Website eingebaut:
```javascript
href="https://calendly.com/randyhahn/erstgespraech"
```

**⚠️ Diese URL funktioniert NOCH NICHT!**

### Was Randy tun muss:
1. Calendly-Account erstellen (siehe oben)
2. Event "30-Minuten Erstgespräch" anlegen
3. **Echten Calendly-Link** hier eintragen:

**DEIN CALENDLY-LINK:**
```
[HIER EINTRAGEN nach Setup!]
```

### Wo der Link verwendet wird:
- **Hero-Section** (Haupt-CTA): "Jetzt kostenlos beraten lassen"
- **Featured Products** (nach jedem Produkt): "Demo buchen", "Workshop anfragen"
- **About-Section** (mit Randy's Foto): "Jetzt persönlich kennenlernen"
- **Footer** (optional): "Termin vereinbaren"

### Wie Randy den Link aktualisiert:
**Option A: Suchen & Ersetzen (einfach)**
```bash
# In VSCode oder Editor:
Suche nach: https://calendly.com/randyhahn/erstgespraech
Ersetze mit: [DEIN ECHTER CALENDLY-LINK]
```

**Option B: Environment Variable (professionell)**
```javascript
// In .env.local
VITE_CALENDLY_URL=https://calendly.com/randyhahn/erstgespraech

// Im Code verwenden:
const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || '/contact'
```

---

## 🚀 ALTERNATIVE: cal.com (Open Source)

**Falls du Calendly nicht magst:**
- **cal.com** ist Open Source
- Kann selbst gehostet werden (volle Kontrolle!)
- Ähnliche Funktionen wie Calendly
- Kostenlos bei Self-Hosting

**Link:** https://cal.com

---

## ✅ CHECKLISTE

- [ ] Calendly-Account erstellt
- [ ] Event "30-Minuten Erstgespräch" angelegt
- [ ] Kalender verbunden (Google/Outlook)
- [ ] Verfügbarkeiten gesetzt
- [ ] Link kopiert
- [ ] Link in Website aktualisiert (siehe oben)
- [ ] Getestet: Termin buchen funktioniert!
- [ ] Benachrichtigungen aktiviert (damit du neue Buchungen siehst)

---

## 📊 ERWARTETER IMPACT

**Vorher (ohne Calendly):**
- Besucher klickt "Kontakt" → Formular → E-Mail → Hin-und-her → Termin (Tage später)
- **Conversion:** ~5%

**Nachher (mit Calendly):**
- Besucher klickt "Termin buchen" → Kalender → Termin gebucht (30 Sekunden)
- **Conversion:** ~15-20% (erfahrungsgemäß)

**Das bedeutet:** 3-4x mehr Erstgespräche!

---

## 💡 TIPP: Calendly in E-Mail-Signatur

Füge deinen Calendly-Link auch in deine E-Mail-Signatur ein:

```
Randolf Hahn
GTSH Engineering
📧 info@gtsh-engineering.de
📞 +49 176 84940127
📅 Termin buchen: https://calendly.com/randyhahn/erstgespraech
```

So kann jeder Empfänger sofort einen Termin buchen!

---

**Status:** Warte auf Randy's Calendly-Setup! 🦞
