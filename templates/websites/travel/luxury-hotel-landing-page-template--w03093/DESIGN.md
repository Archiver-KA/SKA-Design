# Design system — Luxury Hotel Landing Page Template

`SN-W03093` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark hotel hero over a grey photograph darkened by a bottom gradient, with a white serif headline whose second line is italic. The eyebrow is small tan caps, the solid button is tan (#c8a878) and the secondary button is an outlined ghost. The palette is warm stone and tan, and the page leans on the photograph and warm neutrals rather than bright colour.

**Mood:** classical, warm, photographic, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#3a2e2a` | Page ground |
| Text | `#f5f0e8` | Headings and primary copy |
| Muted text | `#3a2e2a` | Secondary copy, captions |
| Border | `#f5f0e8` | Hairlines, dividers, outlines |
| Accent | `#c8a878` | Primary action and highlights |

Palette by frequency of use: `#c8a878` · `#f5f0e8` · `#3a2e2a` · `#ffffff` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-5`, `gap-8`

**Primary button**

```html
<a class="bg-[#C8A878] text-[#1A1A1A] px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-[#F5F0E8] transition-colors duration-300 min-w-[160px]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Listings (`listings`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #3a2e2a;
  --color-text: #f5f0e8;
  --color-muted: #3a2e2a;
  --color-border: #f5f0e8;
  --color-accent: #c8a878;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#3a2e2a',
    ink: '#f5f0e8',
    muted: '#3a2e2a',
    line: '#f5f0e8',
    accent: '#c8a878',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a white serif with the second line in italic
- **Do:** Use the tan (#c8a878) only for the primary button and the eyebrow text
- **Do:** Darken photographs with a bottom gradient before placing white text on them
- **Don't:** Don't fill secondary buttons; keep them as outlines
- **Don't:** Don't use cool blues or greens in this palette
- **Don't:** Don't set the hero on light tan; it is dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
