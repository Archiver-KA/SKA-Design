# Design system — Real Estate Renovation Landing Page Template

`SN-W03374` · real-estate · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A clean, bright hero on white with a large dark slate headline (#0f172a) set over four lines and a short grey lead paragraph. Orange (#ff6600) is the single accent, filling the primary button and the header contact button, and a plain text link sits beside the primary button as the secondary action. A small uppercase eyebrow with an orange dot sits above the title.

**Mood:** bright, direct, trustworthy, local

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#cbd5e1` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#ff6600` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ff6600` · `#0f172a` · `#ffffff` · `#e2e8f0` · `#64748b` · `#cbd5e1` · `#f1f5f9` · `#f8fafc` · `#475569` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-slate-200/50`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-5`, `gap-6`

**Primary button**

```html
<a class="inline-block border border-white/30 hover:bg-white hover:text-slate-900 text-white px-10 py-5 text-lg font-normal transition-all rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Contact form (`contact-form`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Logo cloud (`logo-cloud`)
7. Footer (`footer`)
8. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #cbd5e1;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #ff6600;
  --color-accent-2: #e2e8f0;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#cbd5e1',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#ff6600',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use orange (#ff6600) for primary buttons and the header contact button only
- **Do:** Set headlines large in dark slate (#0f172a) across several short lines
- **Do:** Pair the orange primary button with a plain text link as the secondary action
- **Don't:** Don't use orange for body copy or large backgrounds
- **Don't:** Don't set the lead paragraph in full black; keep it grey
- **Don't:** Don't add a second brand colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
