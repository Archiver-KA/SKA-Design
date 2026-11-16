# Design system — Interactive 3D Globe with Features

`SN-W04211` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark dashboard of rounded feature cards on a near-black ground (#030712). One large card holds a 3D globe, a legend, three location captions and a short paragraph, and the smaller cards hold single features. Icons sit in small coloured tiles, pink, blue and violet, on dark slate panels with hairline borders, and the text is white with grey supporting copy.

**Mood:** dark, modular, technical, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ec4899` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#ec4899` · `#030712` · `#6366f1` · `#a5b4fc` · `#60a5fa` · `#38bdf8` · `#1d4ed8` · `#7dd3fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 30px · h3 20px · body 12px
- **Weights in use:** bold, medium, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-6`, `gap-4`

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Integrations (`integrations`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ec4899;
  --color-accent-2: #60a5fa;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#ec4899',
    accent2: '#60a5fa',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use rounded cards with hairline borders on the near-black ground
- **Do:** Put a coloured icon tile at the top of each feature card
- **Do:** Use the pink and blue marker colours for hubs and regional offices only
- **Don't:** Don't use bright fills on the cards; keep them dark
- **Don't:** Don't add more than three icon colours to the grid
- **Don't:** Don't make the globe card the same size as the small feature cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
