# Design system — Interactive Coupon Envelope Template

`SN-W01188` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A component demo for an animated gift voucher on a near-black stage (#09090b). An orange voucher card (#ea580c) slides out of a dark grey envelope, with a dashed perforation and a small code badge, and a soft orange glow spills around its edges. Orange is the only colour; greys carry the envelope and labels, so the piece reads as one glowing object.

**Mood:** glowing, tactile, minimal, playful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#e4e4e7` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#3f3f46` · `#ffffff` · `#18181b` · `#27272a` · `#ea580c` · `#09090b` · `#e4e4e7` · `#f59e0b` · `#ff8800`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** body 10px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-inner`, `shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]`, `shadow-sm`
- **Common gaps:** `gap-2`, `gap-1.5`, `gap-4`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #e4e4e7;
  --color-border: #000000;
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
    background: '#09090b',
    surface: '#18181b',
    ink: '#e4e4e7',
    line: '#000000',
    accent: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the voucher orange (#ea580c) as the only colour and use greys for the envelope and labels.
- **Do:** Add the soft orange glow around the card, not around the envelope.
- **Do:** Show the code in a small dark badge with a dashed perforation above it.
- **Don't:** Don't add a second accent colour to the voucher.
- **Don't:** Don't use light backgrounds; the glow only reads on near-black.
- **Don't:** Don't set labels in full white; they stay in muted greys.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
