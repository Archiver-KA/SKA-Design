# Design system — Architect Portfolio Landing Page Template

`SN-W01796` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a very large white uppercase sans headline set in two short lines, placed flush left, and a long hairline rule across the screen above it. A small uppercase kicker and a short paragraph sit to the right, with a light outlined link below. The stance is severe and minimal, with lots of empty dark space and no colour at all.

**Mood:** severe, minimal, monochrome, spare

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#737373` · `#525252` · `#050505` · `#262626` · `#e5e5e5` · `#a3a3a3` · `#d4d4d4` · `#171717` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 96px · h2 14px · h3 14px · body 12px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0)
- **Content width:** `max-w-[1920px]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #262626;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#737373',
    line: '#262626',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in white uppercase sans, flush left, with plenty of space above.
- **Do:** Keep the hairline rules thin and full width.
- **Do:** Keep all text white or grey; the page uses no accent colour.
- **Don't:** Don't add colour; the monochrome is the identity.
- **Don't:** Don't use a light background; the page is black.
- **Don't:** Don't fill the empty space with imagery or decorative shapes.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
