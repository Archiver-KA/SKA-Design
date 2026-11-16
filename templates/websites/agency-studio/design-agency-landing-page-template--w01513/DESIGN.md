# Design system — Design Agency Landing Page Template

`SN-W01513` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A minimal black hero with white display type at 96px and one indigo gradient word, which carries the accent. The page relies on the Manrope sans-serif, one family for display and body, and on plain black space rather than panels or borders. The gradient word in the headline is the one place the brand colour appears on the first screen.

**Mood:** minimal, dark, gradient-accented, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#6366f1` · `#a5b4fc` · `#9ca3af` · `#ffffff` · `#000000` · `#818cf8` · `#c084fc` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · body 24px
- **Weights in use:** light, extralight, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px)
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-x-6`

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

- **Do:** Set headlines in Manrope at display size, with one word in the indigo gradient (#6366f1)
- **Do:** Keep the page ground pure black (#000000) with white text (#ffffff)
- **Do:** Use indigo only for the highlighted headline word and the calls to action
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't place light-filled hero sections on the black ground
- **Don't:** Don't set body copy lighter than the muted grey (#9ca3af)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
