# CHATBOT UPGRADE PLAN
**Von:** Clawdius | **Datum:** 18.02.2026
**Status:** IN PROGRESS

---

## IST-Zustand

Der aktuelle ChatBot.jsx ist **rule-based**:
- Statische Knowledge-Base mit Keywords
- Keine echte KI, nur Pattern-Matching
- Funktioniert, aber nicht intelligent

## SOLL-Zustand (Forge's Plan)

**Echter KI-Chatbot mit:**
- Ollama (lokal) als Primary
- Claude als Fallback (optional)
- Context-aware Antworten
- Wiederholbar & verlässlich

---

## ARCHITEKTUR

```
┌─────────────────┐
│  React Frontend │
│  (ChatBot.jsx)  │
└────────┬────────┘
         │ HTTP/POST
         ▼
┌─────────────────┐
│  Chat-API       │
│  (Node.js)      │
│  Port: 3334     │
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌───────┐ ┌───────┐
│Ollama │ │Claude │
│:11434 │ │(API)  │
└───────┘ └───────┘
Primary   Fallback
```

---

## IMPLEMENTATION

### Phase 1: Backend API (chat-api-server.js)

**Features:**
- POST /api/chat - Nimmt User-Message, gibt AI-Response
- System-Prompt mit GTSH-Kontext
- Ollama first, Claude fallback
- Rate-Limiting (Spam-Schutz)
- CORS für Website

### Phase 2: Frontend Update (ChatBot.jsx)

**Changes:**
- `findBestAnswer()` → `fetchFromAPI()`
- Loading-State während API-Call
- Error-Handling
- Typing-Indicator

### Phase 3: Deploy & Test

- Server als PM2 Service
- CORS konfigurieren
- Rate-Limits testen

---

## SYSTEM PROMPT (GTSH-Kontext)

```
Du bist der GTSH Engineering Assistent auf gtsh-engineering.de.
GTSH Engineering bietet:
- Web-Engineering (React, Tailwind)
- Business Automation (PowerShell, Python, n8n)
- KI-Schulungen
- Grafikdesign
- Private AI Solutions (lokale LLMs)

Gründer: Randolf Hahn, Saalfeld/Thüringen
Kontakt: randolf-hahn@gtsh-beyond-gaming.de, +49 176 84940127

PREISE:
- Web ab €800
- Automation ab €1.500
- KI-Schulungen ab €800
- Grafikdesign ab €300
- Private AI ab €3.000
- Pakete: Starter €3.500, Growth €6.500, Scale €12.000

REGELN:
- Antworte kurz und hilfreich
- Verweise auf Kontakt für komplexe Fragen
- Keine Konkurrenz-Empfehlungen
- Immer freundlich und professionell
- Bei Unsicherheit: Erstgespräch empfehlen
```

---

## FILES

- `chat-api-server.js` - Backend API
- `ChatBot.jsx` - Updated Frontend
- `ecosystem.config.js` - PM2 Config

---

## STATUS (18.02.2026 12:30)

**Erstellt:**
- ✅ `chat-api-server.cjs` - Backend (v3 mit http.request)
- ✅ `ChatBot.jsx` - Frontend mit API-Call + Fallback
- ✅ System-Prompt mit GTSH-Kontext

**Problem:**
Der Node.js Server crasht beim Ollama-Request ohne Error-Message.
- Ollama läuft ✅ (api/tags funktioniert)
- Health-Check funktioniert ✅
- Chat-Request crasht den Server ❌

**Debugging nötig:**
1. Prüfen ob Ollama VRAM-Problem hat bei qwen3:8b
2. Alternative: kleineres Modell (qwen3:3b oder llama3.2:3b)
3. Oder: Node.js Version Issue?

**Workaround:**
Der alte ChatBot mit rule-based Answers funktioniert.
KI-Upgrade kann später gemacht werden.

---

*Stand: 18.02.2026 - Clawdius*
