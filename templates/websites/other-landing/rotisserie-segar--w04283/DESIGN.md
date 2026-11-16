# Design system — rotisserie Segar 

`SN-W04283` · other-landing · light mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A formal full-bleed hero with a large italic Cormorant Garamond headline in white, set over a dimmed grey photographic ground. Deep burgundy (#5a0f1c) fills the primary buttons, and a pale blush (#f6edee) secondary button sits beside them. A small pill label above the headline and a centred layout give it a measured, slow-paced tone.

**Mood:** formal, warm, serif, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f6edee` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#5a0f1c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#5a0f1c` · `#f6edee` · `#000000` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Lora
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 18px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-primary text-secondary border border-primary px-10 py-4 rounded-full text-lg font-medium transition-colors hover:bg-primary/90">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Menu list (`menu-list`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f6edee;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #5a0f1c;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f6edee',
    ink: '#111111',
    line: '#ffffff',
    accent: '#5a0f1c',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the headline in Cormorant Garamond italic at very large size in white
- **Do:** Use deep burgundy (#5a0f1c) for primary buttons and the pale blush (#f6edee) for secondary ones
- **Do:** Keep hero text centred over the dimmed image with a small pill label above it
- **Don't:** Don't set headlines in a sans-serif
- **Don't:** Don't use a bright red for buttons; keep to the burgundy
- **Don't:** Don't place the hero text over a bright, unshaded image

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
