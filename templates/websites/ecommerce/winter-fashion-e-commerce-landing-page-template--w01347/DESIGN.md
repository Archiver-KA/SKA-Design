# Design system — Winter Fashion E-commerce Landing Page Template

`SN-W01347` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

An editorial winter fashion hero on warm cream (#fdfbf7). Oversized, heavy dark sans-serif words, 'PURE' and 'COMFORT', span the page behind a central photograph, so type and image overlap in a layered poster composition. Small tracked labels sit at the edges, and a product card floats over the photo. Orange appears only in the sale link, keeping the rest of the page neutral.

**Mood:** editorial, bold, layered, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#404040` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#737373` · `#f5f5f5` · `#525252` · `#fdfbf7` · `#a3a3a3` · `#ea580c` · `#000000` · `#facc15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h2 48px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-0`

**Primary button**

```html
<a class="bg-orange-600 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Logo cloud (`logo-cloud`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #404040;
  --color-accent: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#404040',
    accent: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set oversized heavy sans-serif headline words behind the central photograph, so type and image overlap
- **Do:** Keep the ground warm cream (#fdfbf7) with near-black (#171717) type
- **Do:** Use small tracked uppercase labels at the edges of the hero for secondary messages
- **Don't:** Don't use orange beyond the sale link and small highlights
- **Don't:** Don't let the photograph sit behind the headline; the image sits in front of the type
- **Don't:** Don't add pastel or saturated backgrounds; the cream ground is the base

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
