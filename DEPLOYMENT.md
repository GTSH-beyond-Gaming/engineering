# 🚀 DEPLOYMENT-ANLEITUNG - GTSH Engineering Website

**Status:** ✅ Ready for Production  
**Commit:** 7105f7c  
**Datum:** 10.03.2026

---

## 📦 WAS IST NEU?

1. **14b-Modell Live-Demo** auf /ki-schulungen
2. **Security Hardening** (CORS, Prompt-Injection, Rate-Limiting)
3. **Mobile-Optimierung** (Button-Umbruch gefixt)
4. **API-Server** (Ollama-Proxy mit Sicherheits-Features)

---

## 🎯 DEPLOYMENT-SCHRITTE

### 1️⃣ FRONTEND (Vite App)

**Build erstellen:**
```bash
cd C:\Users\rando\repos\engineering
npm run build
```

**Output:** `dist/` Ordner (statische Dateien)

**Deployment-Optionen:**

#### A) Cloudflare Pages (empfohlen)
1. Cloudflare Dashboard → Pages
2. "Create a project" → "Connect to Git"
3. Repository: `GTSH-beyond-Gaming/engineering`
4. **Build Settings:**
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy!

**Automatisch:** Jeder Git-Push deployed automatisch neu!

#### B) Vercel
```bash
npm install -g vercel
vercel deploy --prod
```

#### C) Manuell (FTP/SSH)
```bash
# dist/ Ordner hochladen auf Webserver
scp -r dist/* user@server:/var/www/gtsh-engineering.de/
```

---

### 2️⃣ BACKEND (API Server)

**WICHTIG:** Der API-Server muss auf einem **Linux/Windows-Server** laufen (nicht Cloudflare Pages!).

#### Deployment-Optionen:

##### A) Windows Server (MeanMachine / CrackMachine)

**1. Server vorbereiten:**
```powershell
# Auf MeanMachine oder CrackMachine
cd C:\gtsh\engineering-api
git clone https://github.com/GTSH-beyond-Gaming/engineering.git .
cd server
npm install
```

**2. Environment-Variables setzen:**
```powershell
# .env erstellen
Copy-Item .env.example .env

# .env bearbeiten:
PORT=3001
OLLAMA_URL=http://192.168.178.98:11434  # CrackMachine
NODE_ENV=production
```

**3. Als Windows-Service einrichten (NSSM):**
```powershell
# NSSM installiert? (Download: nssm.cc)
nssm install "Engineering-API" "C:\Program Files\nodejs\node.exe" `
  "-r dotenv/config C:\gtsh\engineering-api\server\api-demo-secure.js"
  
nssm set "Engineering-API" AppDirectory "C:\gtsh\engineering-api\server"
nssm start "Engineering-API"
```

**4. Firewall öffnen:**
```powershell
netsh advfirewall firewall add rule name="Engineering API" dir=in action=allow protocol=TCP localport=3001
```

##### B) Linux Server (VPS/Cloud)

**1. Server vorbereiten:**
```bash
cd /opt
git clone https://github.com/GTSH-beyond-Gaming/engineering.git
cd engineering/server
npm install
```

**2. Environment-Variables:**
```bash
cp .env.example .env
nano .env  # Bearbeiten
```

**3. PM2 für Auto-Start:**
```bash
npm install -g pm2
pm2 start api-demo-secure.js --name engineering-api
pm2 save
pm2 startup
```

**4. Reverse-Proxy (Nginx):**
```nginx
# /etc/nginx/sites-available/engineering-api
server {
    listen 80;
    server_name api.gtsh-engineering.de;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

### 3️⃣ CLOUDFLARE TUNNEL (Lokale API nach außen)

**Falls API auf MeanMachine/CrackMachine läuft:**

**1. Cloudflare Tunnel erstellen:**
```bash
cloudflared tunnel create engineering-api
```

**2. Config:**
```yaml
# config.yml
tunnel: <TUNNEL-ID>
credentials-file: /path/to/credentials.json

ingress:
  - hostname: api.gtsh-engineering.de
    service: http://localhost:3001
  - service: http_status:404
```

**3. DNS:**
```bash
cloudflared tunnel route dns engineering-api api.gtsh-engineering.de
```

**4. Tunnel starten:**
```bash
cloudflared tunnel run engineering-api
```

---

### 4️⃣ CORS ANPASSEN (WICHTIG!)

**In `server/api-demo-secure.js`:**

```javascript
const corsOptions = {
  origin: [
    'https://gtsh-engineering.de',
    'https://www.gtsh-engineering.de',
    // Bei Cloudflare Pages auch:
    'https://engineering-xyz.pages.dev'
  ]
}
```

**NICHT vergessen:** Nach Änderung Server neu starten!

---

### 5️⃣ FRONTEND-API-URL ANPASSEN

**In `vite.config.js`:**

**Development (localhost):**
```javascript
proxy: {
  '/api': 'http://localhost:3001'
}
```

**Production:**
```javascript
// OPTION A: Cloudflare Tunnel
proxy: {
  '/api': 'https://api.gtsh-engineering.de'
}

// OPTION B: Direkter Server
proxy: {
  '/api': 'http://<SERVER-IP>:3001'
}
```

**ODER:** Nutze Environment-Variable:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

// In AIDemo.jsx:
fetch(`${API_URL}/api/ai-demo`, ...)
```

Dann in `.env.production`:
```
VITE_API_URL=https://api.gtsh-engineering.de
```

---

## ✅ CHECKLISTE

**Vor Deployment:**
- [ ] `npm run build` erfolgreich
- [ ] API-Server lokal getestet (3x Anfragen)
- [ ] Mobile responsive geprüft
- [ ] Rate-Limiting funktioniert
- [ ] CORS konfiguriert
- [ ] .env auf Server (NICHT in Git!)

**Nach Deployment:**
- [ ] Frontend erreichbar (https://gtsh-engineering.de)
- [ ] API erreichbar (curl https://api.gtsh-engineering.de/api/health)
- [ ] Demo auf /ki-schulungen funktioniert
- [ ] Mobile testen
- [ ] Rate-Limiting testen (3x Anfragen)
- [ ] Logs checken (Server)

---

## 🔧 TROUBLESHOOTING

### "CORS Error" im Browser
→ CORS-Origin in `api-demo-secure.js` anpassen (siehe oben)

### "API not reachable"
→ Firewall/Port prüfen (3001)
→ Server läuft? (`pm2 status` / `Get-Service Engineering-API`)

### "Rate Limit nach 1 Anfrage"
→ Server-Neustart: Alte Counts im Memory
→ Lösung: `http://localhost:3001/api/reset-limit` (nur Dev!)

### "Antworten abgeschnitten"
→ `num_predict` in `api-demo-secure.js` erhöhen (aktuell 800)

---

## 📊 MONITORING

**API-Logs:**
```bash
# Linux (PM2)
pm2 logs engineering-api

# Windows (NSSM)
Get-Content C:\gtsh\engineering-api\server\logs\*.log -Tail 50
```

**Ollama-Status (CrackMachine):**
```bash
ssh bravo "curl http://localhost:11434/api/tags"
```

---

## 🚀 NÄCHSTE SCHRITTE

1. **Deployment testen** (alle Checklisten-Punkte)
2. **LinkedIn-Post** vorbereiten (14b-Modell live!)
3. **Analytics** einbinden (Posthog/Plausible)
4. **Monitoring** aufsetzen (Sentry/Uptime-Kuma)

---

**Fragen?** → Randy anrufen oder Clawdius fragen! 🦞

**Status:** Ready to deploy! 🚀
