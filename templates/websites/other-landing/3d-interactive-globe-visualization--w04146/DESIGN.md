# Design system — 3D Interactive Globe Visualization

`SN-W04146` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A small glass-effect card sits in the middle of a dark slate ground (#111827), with a white title, a grey subtitle and an open map area for the globe. Accents appear only as legend markers: a pink dot (#ec4899) for the main hub and a blue dot (#60a5fa) for regional offices. Rounded corners and a thin light border give the panel its structure.

**Mood:** glassy, restrained, dark, informational

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ec4899` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#111827` · `#ec4899` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 24px · body 14px
- **Weights in use:** medium, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #111827;
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
    background: '#111827',
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

- **Do:** Keep the card frame rounded with a thin light border.
- **Do:** Use pink (#ec4899) for the main hub marker only.
- **Do:** Use blue (#60a5fa) for regional office markers only.
- **Don't:** Don't fill the card with a solid colour; the translucent surface is the look.
- **Don't:** Don't use the pink for anything except the hub marker.
- **Don't:** Don't add more than two legend colours.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
