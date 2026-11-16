# Design system — Animated Shader Circle with Testimonials

`SN-W04156` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black ground (#111111) with a glowing blue ring behind a row of testimonial cards. The pale blue accent (#93c5fd) is used for the animated ring and the highlighted words in the heading, which gives the page its soft, atmospheric character. Cards are plain near-black with white quotes and grey names, so the ring supplies the visual energy.

**Mood:** atmospheric, soft, dark, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Accent | `#93c5fd` | Primary action and highlights |

Palette by frequency of use: `#93c5fd` · `#111111` · `#60a5fa` · `#ffffff` · `#9ca3af` · `#6366f1` · `#bfdbfe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 36px · body 18px
- **Weights in use:** medium, semibold, light

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-8`

## Page structure

Blocks in page order:

1. Testimonials (`testimonials`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #111111;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-accent: #93c5fd;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    ink: '#ffffff',
    muted: '#9ca3af',
    accent: '#93c5fd',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the pale blue (#93c5fd) for the animated ring and heading highlights only.
- **Do:** Set quotes in white and names in grey on the dark cards.
- **Do:** Keep the testimonial cards plain, with only a thin edge.
- **Don't:** Don't fill cards with colour; keep them near-black.
- **Don't:** Don't add a second glow colour.
- **Don't:** Don't place the ring behind small grey body text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
