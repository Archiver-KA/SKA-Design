# Design system — Subscription Payment and Progress Panel

`SN-W01039` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A single dark card on a black ground, with a bold product name and price, a date row, and a thin progress bar in light grey (#e5e5e5). The actions are quiet: a small outlined Change Plan link and a full-width ghost button for cancelling, with a muted note beneath. The component is tonal, with greys doing all the work and no hue at all.

**Mood:** quiet, greyscale, functional, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#404040` | Hairlines, dividers, outlines |
| Accent | `#e5e5e5` | Primary action and highlights |

Palette by frequency of use: `#262626` · `#737373` · `#404040` · `#a3a3a3` · `#d4d4d4` · `#f5f5f5` · `#e5e5e5` · `#0a0a0a` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`
- **Common gaps:** `gap-2`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-800 text-neutral-300 text-xs font-medium hover:bg-neutral-700 transition">…</a>
```

## Page structure

Blocks in page order:

1. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #f5f5f5;
  --color-muted: #737373;
  --color-border: #404040;
  --color-accent: #e5e5e5;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#f5f5f5',
    muted: '#737373',
    line: '#404040',
    accent: '#e5e5e5',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the card on #0a0a0a with a #262626 surface and a #404040 border
- **Do:** Draw progress as a light grey (#e5e5e5) bar on a dark track
- **Do:** Show cancel as a full-width ghost button, not a filled button
- **Don't:** Don't add colour to the progress or status; the component is greyscale
- **Don't:** Don't use a filled red button for cancel
- **Don't:** Don't add drop shadows to the card; the border defines it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
