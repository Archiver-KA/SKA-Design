# Design system — Plastic Surgery Hospital Landing Page Template

`SN-W02503` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark green-black hero where the headline is white bold sans and its second line is an italic in pale mint (#6ee7b7). Mint is the only colour, used for the italic line and the primary button, while everything else is near-black. Photo cards with small captions sit below the hero in a dark, editorial grid.

**Mood:** dark, premium, precise, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1b2320` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ecfdf5` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#6ee7b7` | Primary action and highlights |
| Second accent | `#fef3c7` | Supporting highlights |

Palette by frequency of use: `#065f46` · `#064e3b` · `#1c1917` · `#ffffff` · `#ecfdf5` · `#6ee7b7` · `#d1fae5` · `#a7f3d0` · `#e7e5e4` · `#78716c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 42px · h3 20px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-14`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-emerald-950 px-4 py-2 text-xs sm:text-sm font-medium hover:bg-emerald-300 hover:shadow-sm transition-colors cursor-pointer">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Stats band (`stats`)
7. Logo cloud (`logo-cloud`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1b2320;
  --color-surface: #1c1917;
  --color-text: #ecfdf5;
  --color-muted: #a8a29e;
  --color-border: #e7e5e4;
  --color-accent: #6ee7b7;
  --color-accent-2: #fef3c7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1b2320',
    surface: '#1c1917',
    ink: '#ecfdf5',
    muted: '#a8a29e',
    line: '#e7e5e4',
    accent: '#6ee7b7',
    accent2: '#fef3c7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic mint (#6ee7b7) and keep mint out of body copy
- **Do:** Use the mint button as the primary action and keep secondary buttons outlined
- **Do:** Keep the dark green ground and white text across the hero
- **Don't:** Don't use mint for body copy or small labels
- **Don't:** Don't add a second accent colour
- **Don't:** Don't add light grey panels to the hero; they break the dark ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
