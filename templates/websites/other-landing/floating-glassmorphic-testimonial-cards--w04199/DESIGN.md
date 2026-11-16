# Design system — Floating Glassmorphic Testimonial Cards

`SN-W04199` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Three testimonial cards float on a pure black ground (#000000), each a dark translucent panel with a faint outline and a soft glow. A date pill sits at the top left and five yellow stars at the top right, with a short italic quote in white and a small avatar and name below. Geist sets the text, and the glow and blur do most of the work.

**Mood:** glassy, moody, soft, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#facc15` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#facc15` · `#ffffff` · `#34d399` · `#fb923c` · `#c084fc` · `#93c5fd` · `#60a5fa` · `#3b82f6` · `#6ee7b7` · `#14b8a6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Scale (largest breakpoint):** body 14px
- **Weights in use:** medium, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-6`

## Page structure

Blocks in page order:

1. Testimonials (`testimonials`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-accent: #facc15;
  --color-accent-2: #34d399;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    accent: '#facc15',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep testimonial cards as dark translucent panels with a soft outer glow
- **Do:** Use yellow (#facc15) only for the star ratings
- **Do:** Set quotes in italic
- **Don't:** Don't place the cards on a light background; the glass effect needs black
- **Don't:** Don't use more than one star colour
- **Don't:** Don't add heavy borders around the glass panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
