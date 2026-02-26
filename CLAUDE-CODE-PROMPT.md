# CLAUDE CODE PROMPT - BUSINESS WEBSITE BOSS MOVE

**Datum:** 13.02.2026 18:05  
**Projekt:** GTSH Engineering Website (https://gtsh-engineering.de/)  
**Mission:** Website maximal schärfen + Portfolio-Showcases

---

## 📋 FÜR CLAUDE CODE (POWERSHELL-PROMPT)

**Kopiere diesen Text und gib ihn Claude Code in der PowerShell:**

```
Hi Claude Code! 🤖

Randy hat mit Clawdius eine komplette Analyse für die Business-Website gemacht.
Bitte lies diese Dokumente und setze die Updates um:

1. ANALYSE-IST-SOLL-2026-02-13.md (Hauptdokument - WAS muss geändert werden)
2. SEO-CRITICAL-TASKS.md (SEO-Basics - Phase 0, SEHR WICHTIG!)
3. TASKS-FOR-CLAUDE-CODE.md (Deine Aufgaben - Phase 0 bis 5)
4. Dieses Dokument (Portfolio-Showcases - NEU!)

Pfad: F:\GTSH_BOS_ROOT\04_PROJEKTE\Websites\Website_Digital_Solutions_Clawdius\

---

WICHTIG - NEUE REQUIREMENTS (13.02.2026):

Randy will 2 ECHTE WEBSEITEN im Portfolio showcasen:
1. Randolf Hoppe Website (https://randolf-hoppe.de/ - in Arbeit)
2. GTSH Gaming Website (https://gtsh-beyond-gaming.de/ - LIVE!)

Beide sollen auf der Business-Website prominent als Referenzen/Showcases erscheinen!

Details siehe unten ("Portfolio-Showcases").

---

ARBEITSWEISE:

1. LESE ZUERST alle 4 Dokumente komplett durch
2. Beginne mit PHASE 0 (SEO-Basics) - 2-3h Arbeit
3. Dann Phase 1-5 wie in TASKS-FOR-CLAUDE-CODE.md beschrieben
4. Portfolio-Showcases parallel einbauen (siehe unten)
5. Teste alles im Dev-Server (npm run dev)
6. Bei Fragen: Randy fragen!

Los geht's! 🚀
```

---

## 🎯 PORTFOLIO-SHOWCASES (NEUE REQUIREMENTS!)

**Randy's Wunsch:** 2 echte Webseiten showcasen!

### **1. RANDOLF HOPPE WEBSITE**

**URL (wird):** https://randolf-hoppe.de/  
**Status:** In Arbeit (Launch Ende Feb 2026)  
**Kunde:** Randolf Hoppe (Elektroinstallateur, arbeitet an TU Dresden!)  
**Projekt-Wert:** €500  
**Besonderheit:** Gateway zu TU Dresden (MEGA wichtig für Portfolio!)

**Design-Style:**
- "High-Voltage Engineering"
- Metal-Ästhetik
- Theaterbühnen-Projekte (tjg Dresden)
- Seil-Zopf-Technik (HTW-Forschung)

**Showcase-Beschreibung (für Website):**
```markdown
### Randolf Hoppe - High-Voltage Engineering

Professionelle Website für Elektroinstallateur mit Fokus auf Theatertechnik und
Forschungsprojekte. Metal-inspiriertes Design für technische Kompetenz.

- **Technologie:** React + Tailwind CSS
- **Timeline:** 2-3 Wochen (Ende Feb 2026)
- **Besonderheit:** Kunde arbeitet an TU Dresden
- **Features:** Portfolio, Kontaktformular, DSGVO-ready

**Testimonial (kommt nach Launch!):**
"Professionell, schnell, versteht technische Anforderungen!"
```

**Screenshot:** `TBD` (kommt nach Launch!)

---

### **2. GTSH GAMING WEBSITE**

**URL:** https://gtsh-beyond-gaming.de/  
**Status:** ✅ LIVE!  
**Projekt:** Randy's eigene Gaming-Hardware-Website  
**Features:** Portfolio, Showcases, Kontaktformular, Easter Egg (Konami-Code!)

**Design-Style:**
- Modern Gaming-Ästhetik
- Cyber-Neon-Look (Cyan/Magenta/Orange)
- Smooth Animations (Framer Motion)
- MEGA professionell!

**Showcase-Beschreibung (für Website):**
```markdown
### GTSH beyond Gaming - Gaming Hardware & Services

Professionelle Website für Gaming-PC-Builds und Hardware-Service.
Premium-Design mit Cyber-Ästhetik und interaktiven Elementen.

- **Technologie:** React + Vite + Tailwind CSS
- **Features:** 
  - Interaktives Portfolio
  - Calendly-Integration (Termin-Buchung)
  - Audio-Player (Musik-Feature!)
  - Easter Egg: CYBER ASSAULT 2.0 (Konami-Code: ↑↑↓↓←→←→BA)
  - 100% DSGVO-konform
- **Performance:** Lighthouse Score 90+
- **Besonderheit:** Komplexes Spiel als Easter Egg (10+ Power-Ups!)

**Technische Highlights:**
- Progressive Web App ready
- Lazy Loading
- Code Splitting
- SEO-optimiert
```

**Screenshot:** `TBD` (Randy hat bestimmt Screenshots!)

---

## 💻 IMPLEMENTIERUNG (FÜR CLAUDE CODE)

### **NEUE SEITE: Portfolio.jsx**

**Location:** `src/pages/Portfolio.jsx`

**Struktur:**

```jsx
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Code, Zap } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: "GTSH beyond Gaming",
      url: "https://gtsh-beyond-gaming.de",
      status: "LIVE",
      description: "Gaming Hardware & Services Website mit Premium-Design und interaktiven Features.",
      image: "/images/portfolio/gtsh-gaming-showcase.jpg", // Randy muss Screenshot liefern!
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      highlights: [
        "Lighthouse Score 90+",
        "Easter Egg: CYBER ASSAULT 2.0",
        "Calendly-Integration",
        "Audio-Player Feature",
        "100% DSGVO-konform"
      ],
      category: "Website Development",
      timeline: "4 Wochen",
      year: "2026"
    },
    {
      title: "Randolf Hoppe - High-Voltage Engineering",
      url: "https://randolf-hoppe.de",
      status: "IN ARBEIT",
      launchDate: "Ende Feb 2026",
      description: "Professionelle Website für Elektroinstallateur. Metal-inspiriertes Design für technische Kompetenz.",
      image: "/images/portfolio/hoppe-preview.jpg", // TBD - Mockup oder später Screenshot
      tech: ["React", "Tailwind CSS", "Formspree"],
      highlights: [
        "Kunde arbeitet an TU Dresden",
        "Metal-Ästhetik",
        "Portfolio + Kontaktformular",
        "Theaterbühnen-Projekte",
        "Responsive Design"
      ],
      category: "Website Development",
      timeline: "2-3 Wochen",
      year: "2026"
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="section bg-gradient-to-r from-primary to-primary-dark dark:from-gray-900 dark:to-gray-800 text-white">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            Portfolio & Referenzen
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Echte Projekte. Echte Resultate. Modernste Technologie.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="card hover:shadow-xl transition-shadow"
                >
                  {/* Project Image */}
                  <div className="relative mb-6 rounded-lg overflow-hidden aspect-video bg-gray-200 dark:bg-gray-700">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Code className="w-16 h-16 text-gray-400" />
                      </div>
                    )}
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        project.status === 'LIVE' 
                          ? 'bg-green-500 text-white'
                          : 'bg-orange-500 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-2 dark:text-white">{project.title}</h3>
                  
                  {project.launchDate && (
                    <p className="text-sm text-orange-600 dark:text-orange-400 mb-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Launch: {project.launchDate}
                    </p>
                  )}
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      Technologie:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary dark:bg-primary/20 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      Highlights:
                    </p>
                    <ul className="space-y-1">
                      {project.highlights.map(highlight => (
                        <li key={highlight} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <Zap className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span>{project.category}</span>
                    <span>{project.timeline} • {project.year}</span>
                  </div>

                  {/* CTA */}
                  {project.status === 'LIVE' && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      Website ansehen
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            {/* More Coming Soon */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 text-center card bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20"
            >
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Weitere Projekte folgen!</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Wir arbeiten ständig an neuen Projekten für KMU in Thüringen.
                <br />
                Interesse? Lassen Sie uns über Ihr Projekt sprechen!
              </p>
              <a href="/contact" className="btn-secondary">
                Jetzt Projekt starten
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
```

---

### **UPDATE: Navigation**

**In App.jsx (oder Layout-Component):**

```jsx
// Navigation updaten
<nav>
  <Link to="/">Home</Link>
  <Link to="/services">Leistungen</Link>
  <Link to="/portfolio">Portfolio</Link> {/* NEU! */}
  <Link to="/pakete">Pakete</Link>
  <Link to="/about">Über uns</Link>
  <Link to="/contact">Kontakt</Link>
</nav>
```

---

### **UPDATE: Home.jsx - Portfolio Preview**

**Neue Sektion auf Homepage (nach Services-Teaser):**

```jsx
{/* Portfolio Preview */}
<section className="section bg-gray-50 dark:bg-gray-800">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
        Echte Projekte. Echte Resultate.
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300">
        Modernste Technologie für KMU in Thüringen
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* GTSH Gaming Preview */}
      <Link to="/portfolio" className="card hover:shadow-xl transition-all group">
        <div className="aspect-video bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">GTSH</span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors dark:text-white">
          GTSH beyond Gaming
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          Gaming Hardware Website • React + Vite • Easter Egg
        </p>
        <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
          ✅ LIVE
        </span>
      </Link>

      {/* Hoppe Preview */}
      <Link to="/portfolio" className="card hover:shadow-xl transition-all group">
        <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">⚡</span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors dark:text-white">
          Randolf Hoppe
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          High-Voltage Engineering • Metal-Ästhetik • TU Dresden
        </p>
        <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">
          🔨 IN ARBEIT (Launch Ende Feb)
        </span>
      </Link>
    </div>

    <div className="text-center mt-8">
      <Link to="/portfolio" className="btn-primary">
        Alle Projekte ansehen →
      </Link>
    </div>
  </div>
</section>
```

---

## 📸 SCREENSHOTS BENÖTIGT

**Randy muss liefern:**

1. **GTSH Gaming Website:**
   - Hero-Screenshot (Desktop)
   - Mobile-Screenshot (optional)
   - Easter Egg Screenshot (CYBER ASSAULT 2.0) (optional, aber MEGA!)

2. **Hoppe Website:**
   - Mockup/Preview (bis Launch)
   - Später: Echter Screenshot nach Launch

**Speichern unter:**
```
public/images/portfolio/
- gtsh-gaming-showcase.jpg
- gtsh-gaming-mobile.jpg (optional)
- gtsh-gaming-easter-egg.jpg (optional)
- hoppe-preview.jpg (Mockup)
- hoppe-screenshot.jpg (später)
```

---

## 🚀 DEPLOYMENT

**Nach Implementation:**

1. Build erstellen:
   ```bash
   npm run build
   ```

2. Testen:
   ```bash
   npm run preview
   ```

3. Upload zu IONOS (via Clawdius!)

4. Live: https://gtsh-engineering.de/portfolio

---

## ✅ SUCCESS CRITERIA

**Portfolio-Seite ist fertig wenn:**
- ✅ 2 Projekte prominent showcased
- ✅ GTSH Gaming = LIVE Badge
- ✅ Hoppe = IN ARBEIT Badge + Launch-Datum
- ✅ Tech-Stack sichtbar
- ✅ Highlights aufgelistet
- ✅ Links funktionieren (nur GTSH, Hoppe später)
- ✅ Mobile-responsive
- ✅ Dark-Mode funktioniert
- ✅ In Navigation verlinkt
- ✅ Homepage-Preview funktioniert

---

**CLAUDE CODE: Du schaffst das! 💪🤖**

Bei Fragen: Randy fragen!

**Let's go! 🚀**
