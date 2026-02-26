# GOOGLE ANALYTICS SETUP - BUSINESS WEBSITE

**Datum:** 13.02.2026  
**Website:** https://gtsh-engineering.de/  
**Projekt:** Website_Digital_Solutions_Clawdius

---

## 🎯 SETUP STEPS

### **1. GOOGLE ANALYTICS ACCOUNT ERSTELLEN**

**Falls noch nicht vorhanden:**
1. Gehe zu: https://analytics.google.com/
2. Login mit: randolfhahn@gmail.com
3. "Konto erstellen"
4. Name: "GTSH Engineering"

---

### **2. PROPERTY ERSTELLEN**

**Property-Name:** GTSH Engineering Website  
**Zeitzone:** Deutschland (Europe/Berlin)  
**Währung:** EUR

**Website-URL:** https://gtsh-engineering.de/

---

### **3. MEASUREMENT ID ERHALTEN**

Nach Property-Erstellung:
- Du bekommst eine **Measurement ID**
- Format: `G-XXXXXXXXXX`
- **Diese ID brauchst du für die Website!**

---

### **4. TRACKING CODE EINFÜGEN**

**In React/Vite Website:**

**Option A: Google Tag Manager (EMPFOHLEN!)**

1. Erstelle GTM Account: https://tagmanager.google.com/
2. Container erstellen für gtsh-engineering.de
3. GTM Code in `index.html` einfügen (im `<head>` Tag):

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

4. Auch im `<body>` (direkt nach öffnendem Tag):

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

5. In GTM: Google Analytics 4 Tag hinzufügen mit Measurement ID

---

**Option B: Direktes GA4 Script (Einfacher, aber weniger flexibel)**

In `index.html` im `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
<!-- End Google Analytics -->
```

**Ersetze `G-XXXXXXXXXX` mit deiner echten Measurement ID!**

---

### **5. COOKIE-BANNER ANPASSEN**

**WICHTIG für DSGVO!**

In `src/components/CookieBanner.jsx`:

```jsx
const handleAccept = () => {
  // Set cookie
  document.cookie = "cookieConsent=true; path=/; max-age=31536000";
  
  // ENABLE GOOGLE ANALYTICS
  if (window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  }
  
  setShowBanner(false);
};

const handleReject = () => {
  // Set cookie
  document.cookie = "cookieConsent=false; path=/; max-age=31536000";
  
  // DISABLE GOOGLE ANALYTICS
  if (window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
  }
  
  setShowBanner(false);
};
```

**Default (vor User-Choice):**
```jsx
// In index.html BEFORE GA script
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'analytics_storage': 'denied'
  });
</script>
```

---

### **6. DATENSCHUTZERKLÄRUNG UPDATEN**

In `src/pages/Datenschutz.jsx`:

**Abschnitt hinzufügen:**

```markdown
## Google Analytics

Wir nutzen Google Analytics zur Analyse der Website-Nutzung.

**Welche Daten werden erfasst:**
- Seitenaufrufe
- Verweildauer
- Herkunftsland/Stadt (anonymisiert)
- Gerätetyp (Desktop/Mobile)
- Browser

**IP-Anonymisierung:**
Ihre IP-Adresse wird gekürzt und anonymisiert.

**Opt-Out:**
Sie können der Erfassung widersprechen über unser Cookie-Banner.

**Rechtsgrundlage:**
Art. 6 Abs. 1 lit. a DSGVO (Einwilligung via Cookie-Banner)

**Speicherdauer:**
14 Monate (Google Analytics Standard)

**Mehr Infos:**
https://policies.google.com/privacy
```

---

### **7. TESTING**

**Nach Deployment:**

1. Website öffnen: https://gtsh-engineering.de/
2. Browser DevTools → Console
3. Prüfen: Keine Fehler von GA/GTM
4. Cookie-Banner → "Akzeptieren"
5. Google Analytics → Echtzeit-Bericht
6. Sollte dich als aktiven User zeigen!

**Testing-Tools:**
- Google Tag Assistant (Chrome Extension)
- GA Debugger (Chrome Extension)

---

### **8. GOALS & EVENTS EINRICHTEN (Optional, später!)**

**Wichtige Events:**
- Contact Form Submit
- Calendly Booking Click
- Portfolio Project Click
- Service-Paket Click

**In GTM einrichten oder via gtag:**
```javascript
gtag('event', 'contact_form_submit', {
  'event_category': 'engagement',
  'event_label': 'Contact Form'
});
```

---

## ✅ CHECKLIST

- [ ] Google Analytics Account erstellt
- [ ] Property erstellt (gtsh-engineering.de)
- [ ] Measurement ID erhalten
- [ ] GTM oder GA4 Code in index.html
- [ ] Cookie-Banner updated (consent management)
- [ ] Datenschutzerklärung updated
- [ ] Website deployed
- [ ] Testing: Echtzeit-Bericht funktioniert
- [ ] Events eingerichtet (optional)

---

## 📊 WAS DU TRACKEN KANNST

**Sofort nach Setup:**
- Besucher-Zahlen (täglich/wöchentlich/monatlich)
- Herkunft (organisch/direkt/social/referral)
- Beliebteste Seiten
- Bounce Rate
- Durchschnittliche Session-Dauer
- Geräte (Desktop vs Mobile)
- Browser
- Geografische Herkunft

**Mit Events später:**
- Conversion Rate (Kontaktformular)
- Calendly-Buchungen
- Portfolio-Interesse
- Service-Paket-Interesse

---

**READY TO TRACK! 📊🚀**

Nach Website-Launch + Analytics = DATA-DRIVEN DECISIONS! 💪
