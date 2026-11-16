# Design system — Multi-Step Payment and Order Summary

`SN-W01004` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A checkout flow shown as a white card on a saturated indigo field (#6366f1), with a numbered step rail, a plan summary and payment options. The card is the main surface, and indigo appears only as the frame and in a purple payment card, so colour stays at the edges. Type is a plain sans in dark ink (#111827), and a black Continue button is the single action.

**Mood:** clean, functional, structured, focused, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#6366f1` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#111827` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#111827` · `#e5e7eb` · `#4b5563` · `#d1d5db` · `#374151` · `#6366f1` · `#333333` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono, Geist, Mono
- **Scale (largest breakpoint):** h1 30px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-4xl`
- **Common gaps:** `gap-4`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #6366f1;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #111827;
  --color-border: #000000;
  --color-accent: #6366f1;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#6366f1',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#111827',
    line: '#000000',
    accent: '#6366f1',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the form on a white card over the indigo frame (#6366f1).
- **Do:** Use the black Continue button as the only primary action in the card.
- **Do:** Show step progress as a numbered rail of small circles.
- **Don't:** Don't use the indigo as a fill inside the card.
- **Don't:** Don't add a second button colour to the payment step.
- **Don't:** Don't place summary text directly on the indigo field.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
