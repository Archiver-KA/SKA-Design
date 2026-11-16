# Design system — Smart Pilot OS AI Automation Landing Page Template

`SN-W00717` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `de`

## Direction

A dark, technical landing page for AI automation: a near-black, green-tinted ground with a heavy white sans headline whose second phrase is set in mint green (#34d399). A small uppercase status tag sits above it. The product preview is a dark bordered panel on the right. Green is the only accent.

**Mood:** technical, dark, precise, controlled, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020405` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#a3a3a3` · `#34d399` · `#737373` · `#09090b` · `#000000` · `#020405` · `#064e3b` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Orbitron, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 14px · h3 30px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-emerald-900/20`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[85%]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-orbitron rounded-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Integrations (`integrations`)
6. Feature grid (`features`)
7. Process / steps (`how-it-works`)
8. Team (`team`)
9. FAQ (`faq`)
10. Call to action (`cta`)
11. Contact form (`contact-form`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020405;
  --color-surface: #09090b;
  --color-text: #cbd5e1;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020405',
    surface: '#09090b',
    ink: '#cbd5e1',
    muted: '#737373',
    line: '#ffffff',
    accent: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline phrase in mint green (#34d399) and keep the first in white.
- **Do:** Use a small uppercase status tag with a green dot above the headline.
- **Do:** Frame product screenshots in a dark bordered panel on the right.
- **Don't:** Don't use green for body copy.
- **Don't:** Don't leave the product preview frame without its image.
- **Don't:** Don't add a light section to the dark hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
