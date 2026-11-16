# Design system — Luxury Salon Studios Landing Page Template

`SN-W02795` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A monochrome studio-leasing hero on near-black (#000000). A white geometric W-shaped mark sits centred above a thin outlined pill label, then a large uppercase serif headline, 'WHERE ARTISTRY', with an italic second line, 'MEETS FREEDOM'. A short grey paragraph and a tracked uppercase text link finish the centred stack. Colour is absent, so the mark, the type and generous black space do all the work.

**Mood:** monochrome, formal, spacious, editorial, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#e7e5e4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d6d3d1` · `#000000` · `#f59e0b` · `#78716c` · `#292524` · `#a8a29e` · `#fafaf9` · `#0c0a09` · `#fde68a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 36px · body 14px
- **Weights in use:** bold, normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-amber-900/10`, `shadow-lg`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Common gaps:** `gap-4`, `gap-3`, `gap-10`

**Primary button**

```html
<a class="group relative px-10 py-4 overflow-hidden rounded-sm bg-gold-500 text-dark hover:bg-white transition-colors duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Timeline (`timeline`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #292524;
  --color-text: #e7e5e4;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#292524',
    ink: '#e7e5e4',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the mark, pill label, headline, paragraph and link in one vertical stack.
- **Do:** Set the headline in uppercase serif with the second line in italic.
- **Do:** Use thin outlined pill labels for status text such as the leasing phase.
- **Don't:** Don't add colour; the page is black, white and grey.
- **Don't:** Don't crowd the stack; the space between blocks is part of the look.
- **Don't:** Don't set the headline in a heavy weight; the serif reads better light.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
