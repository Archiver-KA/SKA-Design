# Design system — website building agency 

`SN-W01737` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, product-style agency page on near-black [#09090b], with a large white sans headline and a browser-window mock-up as the hero visual. The window frame and inner panels use layered dark surfaces with blur, so depth comes from stacking rather than colour. Accent colour appears only on small elements, and the page is built from rounded cards and terminal-style code blocks.

**Mood:** dark, product-led, clean, layered, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#0a0a0c` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#71717a` · `#a1a1aa` · `#6366f1` · `#3f3f46` · `#d4d4d8` · `#f4f4f5` · `#09090b` · `#18181b` · `#0a0a0c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 83px · h2 30px · h3 18px · body 16px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-inner`, `shadow-[0_0_8px_rgba(161,161,170,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Code / terminal (`code-terminal`)
5. Timeline (`timeline`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #0a0a0c;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#0a0a0c',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in large white sans with a browser-window mock-up beneath
- **Do:** Use layered dark surfaces (#0a0a0c and #27272a) with rounded corners for cards
- **Do:** Present code and process steps in terminal-style blocks
- **Don't:** Don't set the page on a light background
- **Don't:** Don't use the indigo accent for large areas
- **Don't:** Don't use square cards; the page relies on rounded corners

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
