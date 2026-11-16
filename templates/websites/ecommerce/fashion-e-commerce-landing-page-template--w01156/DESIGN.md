# Design system — Fashion E-commerce Landing Page Template

`SN-W01156` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A minimal fashion page has a pale mint-and-pink wash behind the hero and near-black pill buttons on a white ground. The headline is set very large in Fraunces, a soft display serif, against body copy in Inter. Colour is limited to the wash, so the type and the black buttons carry the design.

**Mood:** minimal, airy, editorial, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#737373` · `#f5f5f5` · `#a3a3a3` · `#e5e5e5` · `#525252` · `#d4d4d4` · `#fafafa` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Fraunces
- **Body:** Inter
- **Loaded families:** Inter, Fraunces, Great Vibes
- **Scale (largest breakpoint):** h1 192px · h2 18px · h3 24px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wider`, `tracking-[0.25em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-8xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-1`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="group px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition-all duration-300 hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Newsletter signup (`newsletter`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #000000;
  --color-accent-2: #f43f5e;
  --font-display: "Fraunces", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#ffffff',
    accent: '#000000',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Fraunces'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Fraunces at very large size, as one word or a short phrase.
- **Do:** Use solid black (#000000) pill buttons for primary actions and an outline pill for secondary.
- **Do:** Keep the pale wash behind the hero only; sections below stay on white.
- **Don't:** Don't add a saturated accent colour; the page is black, white and grey.
- **Don't:** Don't set body copy in Fraunces; it is for display and Inter takes the rest.
- **Don't:** Don't use square buttons; the buttons are fully rounded pills.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
