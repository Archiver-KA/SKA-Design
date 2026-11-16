# Design system — Recovery Access Montana Non-profit Landing Page Template

`SN-W03642` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A stark, data-driven hero on pure black, built from one large centred numeric readout in white with a small uppercase status line beneath it, divided by a thin hairline rule. The first screen uses only type and a single line and reads like a system console. Colour is absent; the design depends on monospaced figures, hairline rules and strict contrast.

**Mood:** stark, technical, precise, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#e5e7eb` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0ea5e9` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0ea5e9` · `#d1d5db` · `#9ca3af` · `#000000` · `#94a3b8` · `#6b7280` · `#22c55e` · `#050505` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Inter, JetBrains Mono, Geist
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-[1400px]`, `max-w-[1800px]`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="bg-white text-black px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors duration-200 magnetic-btn shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Stats band (`stats`)
6. FAQ (`faq`)
7. Services (`services`)
8. About (`about`)
9. Benefits (`benefits`)
10. Testimonials (`testimonials`)
11. Call to action (`cta`)
12. Contact form (`contact-form`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #e5e7eb;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #0ea5e9;
  --color-accent-2: #22c55e;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#e5e7eb',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#0ea5e9',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set key figures large and white on the black ground (#050505)
- **Do:** Use small uppercase captions separated from figures by hairline rules
- **Do:** Keep the first screen to type and a single line, with no imagery
- **Don't:** Don't add rounded cards or soft shadows
- **Don't:** Don't set captions larger than the figures they describe
- **Don't:** Don't add colour to status text unless it carries meaning

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
