# Design system — Content Platform with Story Focus

`SN-W04177` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark slate page built from stacked, rounded cards under a bold white headline. Green (#4ade80) marks the key word in the headline and the icon chips, and a gradient runs through the headline's highlighted words. Generous rounded corners and layered panels give the grid a soft, editorial feel.

**Mood:** modern, layered, rounded, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1e293b` | Page ground |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#4ade80` · `#334155` · `#1e293b` · `#16a34a` · `#22c55e` · `#64748b` · `#c084fc` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-8`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-slate-100 transition-all duration-200 hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Pricing (`pricing`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1e293b;
  --color-text: #f1f5f9;
  --color-muted: #94a3b8;
  --color-border: #334155;
  --color-accent: #4ade80;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1e293b',
    ink: '#f1f5f9',
    muted: '#94a3b8',
    line: '#334155',
    accent: '#4ade80',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use green (#4ade80) for the highlighted headline word and the icon chips.
- **Do:** Keep cards rounded with a slate border (#334155).
- **Do:** Set the headline in bold Inter at about 60px.
- **Don't:** Don't use a flat light background behind the card grid.
- **Don't:** Don't put more than one gradient word in a headline.
- **Don't:** Don't set stat numbers in grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
