# Design system — Organic Dates E-commerce Landing Page Template

`SN-W01283` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A warm, premium food page on cream (#faf3e0) with deep chocolate-brown type (#3a2418) and a brown primary button (#6b3e26). The hero is a brown photograph that fades into cream, with a Playfair Display headline and an italic tan word (#d4a373) for emphasis. Lato body text and soft rounded cards keep the page calm and warm.

**Mood:** warm, artisanal, premium, earthy, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf3e0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#3a2418` | Headings and primary copy |
| Muted text | `#6f5a4c` | Secondary copy, captions |
| Border | `#faf3e0` | Hairlines, dividers, outlines |
| Accent | `#6b3e26` | Primary action and highlights |
| Second accent | `#d4a373` | Supporting highlights |

Palette by frequency of use: `#6b3e26` · `#faf3e0` · `#d4a373` · `#e6d8c8` · `#6f5a4c` · `#ffffff` · `#3a2418` · `#5a321f` · `#f3f4f6` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Lato
- **Loaded families:** Lato, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-[1200px]`, `max-w-2xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="flex items-center gap-2 text-sm text-primary font-medium border border-beige bg-white px-4 py-2 rounded-lg hover:border-primary transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Bento grid (`bento-grid`)
6. About (`about`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf3e0;
  --color-surface: #ffffff;
  --color-text: #3a2418;
  --color-muted: #6f5a4c;
  --color-border: #faf3e0;
  --color-accent: #6b3e26;
  --color-accent-2: #d4a373;
  --font-display: "Playfair Display", serif;
  --font-body: "Lato", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf3e0',
    surface: '#ffffff',
    ink: '#3a2418',
    muted: '#6f5a4c',
    line: '#faf3e0',
    accent: '#6b3e26',
    accent2: '#d4a373',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Lato'] },
} }
```

## Do and don't

- **Do:** Set the italic emphasis word in tan (#d4a373) inside the Playfair Display headline
- **Do:** Use chocolate brown (#6b3e26) for the primary button and cream (#faf3e0) for the page ground
- **Do:** Keep the hero photograph fading into cream so the headline sits on the light side
- **Don't:** Don't use cool greys or white panels; the neutrals are all warm
- **Don't:** Don't set body copy in the serif; Lato carries the paragraphs
- **Don't:** Don't place the headline over the brown photograph without the fade

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
