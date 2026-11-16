# Design system — Interactive Design Agency Landing Page

`SN-W01605` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pure black hero with a large sans headline in white, where the first word takes an indigo-to-lavender gradient (#6366f1 to #a5b4fc). The palette stays cool and minimal: one gradient word, a white solid button and an outlined secondary button, both with a small radius. The hero reads on type and gradient alone.

**Mood:** minimal, cool, dark, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#6366f1` · `#a5b4fc` · `#9ca3af` · `#000000` · `#ffffff` · `#818cf8` · `#c084fc` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 96px · body 24px
- **Weights in use:** light, extralight, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px)
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-white text-black font-light rounded-md px-6 py-3 hover:bg-opacity-90 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-accent: #6366f1;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#9ca3af',
    accent: '#6366f1',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Apply the indigo gradient (#6366f1) to one keyword in the headline only
- **Do:** Keep the page background pure black (#000000) with white text
- **Do:** Use a white solid button and an outlined button side by side for CTAs
- **Don't:** Don't add a second gradient colour to the headline
- **Don't:** Don't rely on the 3D background for hierarchy; the hero must read without it
- **Don't:** Don't round buttons beyond rounded-md

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
