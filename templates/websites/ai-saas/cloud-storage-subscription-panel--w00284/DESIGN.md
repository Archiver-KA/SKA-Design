# Design system — Cloud Storage Subscription Panel

`SN-W00284` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A single centred glass card on a dark navy-to-blue gradient, the component is a calm subscription panel rather than a loud one. The card is a translucent panel with a soft border, and the one strong colour is the cyan-to-blue primary button. Inter is used throughout, with the title set larger and the benefit list as small check rows. Depth comes from the blurred panel over the gradient.

**Mood:** calm, glassy, focused, product

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#030712` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e7eb` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#e5e7eb` · `#ffffff` · `#d1d5db` · `#4ade80` · `#22d3ee` · `#4b5563` · `#1e293b` · `#3b82f6` · `#111827` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 36px · body 18px
- **Weights in use:** light, medium, normal

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-3xl` (24px), `rounded-full` (9999px)
- **Common gaps:** `gap-3`, `gap-2`

## Page structure

Blocks in page order:

1. Articles (`blog-articles`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #030712;
  --color-text: #ffffff;
  --color-muted: #e5e7eb;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#030712',
    ink: '#ffffff',
    muted: '#e5e7eb',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the card centred with a translucent surface and a thin light border
- **Do:** Use the cyan-to-blue gradient (#22d3ee to #3b82f6) for the single primary button
- **Do:** Set benefit lines as small check rows with a muted text colour
- **Don't:** Don't use green (#4ade80) for the primary action; the button is cyan-blue
- **Don't:** Don't add a second saturated colour to the card
- **Don't:** Don't put the card on a flat light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
