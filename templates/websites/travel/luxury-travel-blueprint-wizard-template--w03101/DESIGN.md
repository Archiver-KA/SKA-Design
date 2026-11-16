# Design system — Luxury Travel Blueprint Wizard Template

`SN-W03101` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black wizard screen (#0c0a09) with a centred italic serif question in white, How would you like to travel?, above two large rounded photo cards side by side. Each card carries a white sans-serif title and a short muted line over a dark gradient at its foot. The choices are equal and quiet, so the photographs supply the colour and the type stays white.

**Mood:** editorial, quiet, dark, cinematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#e7e5e4` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#44403c` | Hairlines, dividers, outlines |
| Accent | `#7c2d12` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#78716c` · `#a8a29e` · `#e7e5e4` · `#1c1917` · `#44403c` · `#d6d3d1` · `#0c0a09` · `#292524` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 14px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-stone-900/50`, `shadow-inner'`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="pointer-events-auto opacity-0 translate-y-4 transition-all duration-500 group bg-stone-100 text-stone-950 px-8 py-4 rounded-sm font-medium tracking-tight hover:bg-white hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-stone-900/50 flex items-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Process / steps (`how-it-works`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #1c1917;
  --color-text: #e7e5e4;
  --color-muted: #a8a29e;
  --color-border: #44403c;
  --color-accent: #7c2d12;
  --color-accent-2: #1e3a8a;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#1c1917',
    ink: '#e7e5e4',
    muted: '#a8a29e',
    line: '#44403c',
    accent: '#7c2d12',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the step question in an italic serif, centred, in off-white (#e7e5e4)
- **Do:** Place card titles over a dark gradient at the foot of each photo card
- **Do:** Keep the two choices equal in size and side by side
- **Don't:** Don't use the warm brown (#44403c) as the screen ground; the screen is near-black
- **Don't:** Don't put text over the bright sky of a photograph without the gradient
- **Don't:** Don't add accent colour to the choices; the photographs supply it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
