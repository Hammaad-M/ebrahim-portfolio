# Ebrahim Sorathia — Portfolio Website

## Brief for the coding agent

Build a modern, single-page portfolio website for **Ebrahim Sorathia**, a ~20-year-old B.Tech Chemical Engineering student at **IIT Bombay**, from Mumbai, India. He is research-driven, entrepreneurially ambitious, and interested in sustainability. This is not a generic "student portfolio" — it should read like the digital presence of someone building toward research + industry + eventually founding companies. Use the content and design direction below exactly; do not substitute your own default template.

---

## 1. About Ebrahim (source content — use verbatim ideas, rewrite into confident first-person copy)

- From Mumbai, India. Currently pursuing B.Tech in Chemical Engineering at IIT Bombay.
- Actively seeking **research internships** in chemical engineering and **research projects**.
- Plans to pursue a **minor in IEOR** (Industrial Engineering & Operations Research) *or* an **Honours in the Chemical Department** before graduating.
- Long-term academic goal: **Ph.D. or Master's**, or alternatively a strong **fresher role in the chemical industry**.
- Specific research interest: **sustainable/green chemical engineering projects**.
- Career arc: gain hands-on **industry experience** first → use that experience to **start his own business** → grow into **multiple businesses**.

**Tone for copy:** confident, curious, technically grounded, forward-looking — a researcher-founder in the making, not a generic "passionate student."

---

## 2. Credentials to feature (extracted from attached certificates)

All three are from **UGAC (Undergraduate Academic Council) — Career Cell**, "Learners' Space 2026" certificate series, "Certificate of Merit" for participating in and completing:

| Certification | Issuing Body | Program |
|---|---|---|
| Techno-Commercial Aspects of Chemical Industry | UGAC Career Cell | Learners' Space 2026 |
| AI in Chemical Engineering | UGAC Career Cell | Learners' Space 2026 |
| Data Science Fundamentals | UGAC Career Cell | Learners' Space 2026 |

Signed by: Siddhant Gupta (General Secretary, Academic Affairs – UG) & Preisha Desai (Institute Secretary, Academic Affairs / Head, Career Cell).

These three certifications are a deliberate cluster: they signal the intersection Ebrahim sits at — **core chemical engineering + business/commercial literacy + AI/data science**. Frame them that way in the credentials section rather than as a flat list.

---

## 3. Required sections

1. **Hero** — name, identity line ("Chemical Engineering @ IIT Bombay"), one-line thesis statement about where he's headed (research → industry → founder).
2. **About** — the bio narrative above, rewritten in first person.
3. **Education** — IIT Bombay, B.Tech Chemical Engineering, planned Minor in IEOR / Honours in Chemical Engineering.
4. **Research Interests & Goals** — sustainable chemical engineering, research internships, Ph.D./Masters track, target research areas.
5. **Certifications** — the 3 UGAC certificates, framed as a "technical + commercial + data" skill triangle.
6. **Vision / Path Forward** — the career arc: internship/research → industry experience → founding a business → multiple businesses. This is a great candidate for the page's signature visual (see design direction).
7. **Contact** — email, LinkedIn, resume download (placeholders the agent should leave as editable constants).

---

## 4. Design direction (do not default to generic AI-portfolio look)

Avoid the three most common AI-generated defaults: (a) cream background + terracotta accent, (b) black background + single neon accent, (c) broadsheet/hairline newspaper layout. None of these fit this brief.

### Concept
Ground the design in **process engineering visual language** — the world of P&IDs (Piping & Instrumentation Diagrams) and process flow diagrams — reinterpreted elegantly, not literally (no clip-art beakers/flasks). The page's sections are framed as **stages in a process**, connected by a continuous flowing line down the page, echoing how chemical engineers think in terms of streams, unit operations, and material flow. This directly mirrors Ebrahim's own path narrative (research → industry → founder), so the metaphor is functional, not decorative.

### Color tokens
- `--bg-primary: #0B1E2D` (deep blueprint navy — base background)
- `--bg-secondary: #12293B` (slightly lighter navy for section panels)
- `--accent-copper: #C97C3D` (warm brass/copper — reflects plant metallurgy, used sparingly for CTAs/highlights)
- `--accent-teal: #4FB6A6` (process-fluid teal — used for the flow-line, links, data highlights)
- `--text-primary: #F2EFE6` (warm ivory)
- `--text-muted: #8FA3B0` (desaturated slate-blue for secondary text)

### Typography
- **Display face:** `Fraunces` (variable, high-contrast serif) — used with restraint for section headers and the hero statement. Gives warmth against the technical palette.
- **Body face:** `Inter` — clean, highly legible for paragraphs.
- **Utility/data face:** `IBM Plex Mono` — used for labels, dates, certification codes, and small annotations, styled like engineering document markup (e.g., stream labels on a PFD).

### Layout & signature element
- A single continuous **flow-line** runs vertically down the left margin (desktop) / behind content (mobile), rendered as an SVG path with an animated dashed stroke that appears to "flow" (subtle offset animation, respects `prefers-reduced-motion`).
- At each section transition, the line passes through a small **node/valve marker** (a minimal circle-and-tick glyph, not a skeuomorphic icon) that acts as a scroll-progress indicator — filling with `--accent-teal` as that section is reached.
- The **Vision / Path Forward** section is the signature moment: render Ebrahim's career arc (Research → Industry → Founder → Multiple Ventures) as an actual horizontal process-flow diagram with labeled stream arrows, built in SVG, that animates/draws in on scroll. This is the one place to spend real visual ambition.
- Hero section: large `Fraunces` headline over a faint, large-scale background schematic grid (like isometric graph paper on the blueprint navy), with 2–3 background layers moving at different scroll speeds for a subtle parallax depth effect (not gratuitous — depth, not spectacle).

### Motion
- Scroll-triggered reveals for each section (fade + slight upward translate).
- Parallax limited to background schematic layers in the hero + the flow-line fill progress — not applied to every element.
- Hover micro-interactions on certification cards (slight lift + copper border glow) and on the vision diagram nodes (tooltip with detail).
- All animation must respect `prefers-reduced-motion: reduce`.

### Restraint
Keep everything besides the flow-line and the Vision diagram quiet and disciplined — generous whitespace, consistent type scale, no decorative icons that don't carry information.

---

## 5. Tech stack & specs

- **Framework:** React.js (JavaScript only — **no TypeScript**)
- **Styling:** Tailwind CSS (custom theme extending the color tokens above into `tailwind.config.js`)
- **Animation:** Framer Motion for scroll reveals and hover interactions
- **Parallax / SVG scroll-linked animation:** Framer Motion's `useScroll` + `useTransform` (avoid extra heavy parallax libraries unless needed)
- **Fonts:** Fraunces, Inter, IBM Plex Mono — loaded via Google Fonts or self-hosted
- **Icons:** lucide-react (used sparingly; prefer custom minimal SVG for the flow-line/node glyphs)
- **Structure:** Single-page app, component-per-section (`Hero.jsx`, `About.jsx`, `Education.jsx`, `Research.jsx`, `Certifications.jsx`, `Vision.jsx`, `Contact.jsx`), composed in `App.jsx`
- **Responsiveness:** Fully responsive down to mobile; flow-line repositions behind/beside content on small screens
- **Accessibility:** Visible keyboard focus states, semantic HTML, alt text on all visuals, reduced-motion support
- **Content as data:** Store bio, education, certifications, and vision-stage copy in a single `content.js` (or `.json`) constants file so text is easy to edit later without touching components

---

## 6. Editable placeholders to leave in code

- Email address
- LinkedIn URL
- Resume/CV download link
- Profile photo (placeholder image component)

---

## 7. Deliverable

A polished, deployable React + Tailwind single-page site implementing all sections above with the blueprint/process-flow design system, ready to run with `npm install && npm run dev`.
