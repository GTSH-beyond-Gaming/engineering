# DEPLOYMENT PLAN - Digital Solutions Website

**Datum:** 13.02.2026 17:38  
**Hosting:** IONOS (Aljona)  
**Status:** Vorbereitung

---

## 🎯 DEPLOYMENT-STRATEGIE

### **PHASE 1: DEVELOPMENT** (Claude Code)
- Services.jsx überarbeiten
- Home.jsx schärfen
- Neue Seiten erstellen
- SEO-Basics implementieren
- Lokaler Test (Dev Server)

**Output:** Fertiger Code in `src/`

---

### **PHASE 2: BUILD** (Clawdius koordiniert)
```bash
cd F:\GTSH_BOS_ROOT\04_PROJEKTE\Websites\Website_Digital_Solutions_Clawdius
npm run build
```

**Output:** `dist/` Ordner mit Production-Build

**Check:**
- Alle Seiten funktionieren?
- Assets korrekt gebundled?
- Keine Console-Errors?

---

### **PHASE 3: GOOGLE ANALYTICS SETUP** (Clawdius)

**Steps:**
1. GA4-Property erstellen
   - Name: "GTSH Digital Solutions"
   - URL: [Domain von Randy]
   - Zeitzone: Europe/Berlin
   - Währung: EUR

2. Tracking-Code generieren
   - Measurement-ID: G-XXXXXXXXXX

3. In Website integrieren
   - Option A: `public/index.html` (im `<head>`)
   - Option B: React-Component (`GoogleAnalytics.jsx`)

4. Goals/Events definieren
   - Contact Form Submit
   - Call Booking Click
   - Package Selection
   - Download (wenn vorhanden)

**Test:**
- Real-Time View in GA4
- Event-Tracking funktioniert?

---

### **PHASE 4: GOOGLE SEARCH CONSOLE** (Clawdius)

**Steps:**
1. Property hinzufügen
   - Domain: [von Randy]
   - Verifizierungs-Methode: HTML-File Upload (einfachste!)

2. Sitemap einreichen
   - URL: https://[domain]/sitemap.xml

3. URL-Inspection
   - Check: Seiten indexierbar?
   - Keine Crawling-Errors?

4. Performance überwachen
   - Welche Seiten ranken?
   - Welche Keywords bringen Traffic?

---

### **PHASE 5: UPLOAD ZU IONOS** (Clawdius)

**Zugang:**
- Server: IONOS (Aljona)
- ✅ SSH/FTP-Zugang vorhanden

**Upload-Methoden:**

#### **Option A: FTP/SFTP** (Empfohlen!)
```bash
# Via FileZilla, WinSCP oder CLI
sftp user@server.ionos.de
put -r dist/* /public_html/
```

#### **Option B: IONOS File Manager**
- Login: IONOS Panel
- File Manager öffnen
- `dist/` Ordner hochladen
- Nach `/public_html/` (oder entsprechend)

#### **Option C: SSH + Git** (Für Updates!)
```bash
ssh user@server.ionos.de
cd /public_html
git pull
npm run build
```

**Vorteil:** Einfache Updates via Git Push!

---

### **PHASE 6: DOMAIN-KONFIGURATION** (Clawdius + Randy)

**Check:**
- Domain zeigt auf richtigen Server?
- DNS-Einträge korrekt?
- SSL-Zertifikat aktiv? (HTTPS!)

**Wenn nicht:**
- IONOS-Panel: Domain-Verwaltung
- A-Record auf Server-IP
- CNAME für www
- SSL via Let's Encrypt (kostenlos!)

---

### **PHASE 7: FINAL TESTING** (Clawdius)

**Checks:**
1. ✅ Website erreichbar unter [Domain]
2. ✅ Alle Seiten funktionieren
3. ✅ Forms funktionieren (Contact, Calendly)
4. ✅ Mobile-Responsiveness ok
5. ✅ Google Analytics trackt
6. ✅ Search Console zeigt keine Errors
7. ✅ Lighthouse Score >90
8. ✅ SSL-Zertifikat aktiv (🔒 im Browser)

**Tools:**
- Google Lighthouse
- PageSpeed Insights
- Mobile-Friendly Test
- GTmetrix

---

### **PHASE 8: MONITORING** (Laufend)

**Weekly Checks:**
- Google Analytics: Traffic-Entwicklung?
- Search Console: Indexierungs-Status?
- Lighthouse: Performance ok?
- Fehler-Logs: Irgendwelche Probleme?

**Monthly:**
- SEO-Rankings checken
- Content aktualisieren (Blog!)
- Neue Leads tracken
- ROI berechnen

---

## 📋 CHECKLISTE FÜR RANDY

**Bevor Deployment starten kann, brauche ich:**

1. ✅ **Domain-Name**
   - Wie lautet die Live-Domain?
   - Beispiel: `digital-solutions.gtsh.de`?
   - Oder ganz neue Domain?

2. ✅ **IONOS-Zugang Bestätigung**
   - Ich habe angeblich Zugang - welcher User?
   - SSH oder nur FTP?
   - Passwort/Key vorhanden?

3. ✅ **SSL-Zertifikat**
   - Schon eingerichtet?
   - Oder soll ich via Let's Encrypt machen?

4. ✅ **Email für Google Analytics**
   - Welche Email-Adresse für GA4?
   - `randolfhahn@gmail.com`?

5. ✅ **Priorität**
   - Erst Development fertig, dann deployen?
   - Oder parallel?

---

## 🚀 TIMELINE

**Wenn Randy grünes Licht gibt:**

- **Tag 1-2:** Claude Code macht Development (Phase 0-5)
- **Tag 2:** Clawdius macht GA4 + Search Console Setup
- **Tag 3:** Build + Upload zu IONOS
- **Tag 3:** Final Testing
- **Tag 4:** Launch! 🎉

**Total:** ~3-4 Tage (wenn alles glatt läuft!)

---

## 💬 NÄCHSTER SCHRITT

**Randy, sag mir:**
1. **Domain-Name?** (für Meta-Tags, Sitemap, etc.)
2. **IONOS User?** (welcher Zugang genau?)
3. **Wann deployen?** (Nach Development? Oder parallel?)

**Dann kann ich:**
- Claude Code die finale Domain mitteilen
- Deployment vorbereiten
- GA4 + Search Console einrichten

---

**Bereit für Launch! 🚀🦞**
