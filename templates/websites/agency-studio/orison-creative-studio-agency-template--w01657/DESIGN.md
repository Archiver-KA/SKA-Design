# Design system — Orison Creative Studio Agency Template

`SN-W01657` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, warm-black hero with a very large tight-set headline in cream on the left and three tilted book-like cards on the right, in charcoal, tan and cream tones. The tan (#c3a47b) is the only accent, used on card faces and small labels. The stance is editorial and craft-led, with the cards carrying the imagery and the type kept spare.

**Mood:** editorial, warm, craft-led, tactile, spare

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0c0a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#f8f7f3` | Headings and primary copy |
| Muted text | `#111111` | Secondary copy, captions |
| Border | `#0d0c0a` | Hairlines, dividers, outlines |
| Accent | `#c3a47b` | Primary action and highlights |
| Second accent | `#5537ee` | Supporting highlights |

Palette by frequency of use: `#f8f7f3` · `#0d0c0a` · `#ffffff` · `#c3a47b` · `#0b0c17` · `#08080a` · `#000000` · `#09090b` · `#5537ee` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** DM Mono, Manrope
- **Scale (largest breakpoint):** h3 18px
- **Weights in use:** medium
- **Letter spacing:** `tracking-[0.2em]`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-[13rem]`, `max-w-[96rem]`
- **Common gaps:** `gap-2`, `gap-[6vw]`, `gap-2.5`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Services (`services`)
5. Dashboard preview (`dashboard-preview`)
6. Marquee (`marquee`)
7. Timeline (`timeline`)
8. Testimonials (`testimonials`)
9. Pricing (`pricing`)
10. FAQ (`faq`)
11. Logo cloud (`logo-cloud`)
12. Call to action (`cta`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d0c0a;
  --color-surface: #ffffff;
  --color-text: #f8f7f3;
  --color-muted: #111111;
  --color-border: #0d0c0a;
  --color-accent: #c3a47b;
  --color-accent-2: #5537ee;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0c0a',
    surface: '#ffffff',
    ink: '#f8f7f3',
    muted: '#111111',
    line: '#0d0c0a',
    accent: '#c3a47b',
    accent2: '#5537ee',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline very large, tightly tracked, in cream (#f8f7f3)
- **Do:** Use tan (#c3a47b) for small labels and card accents only
- **Do:** Show project work as tilted, card-like panels on the right of the hero
- **Don't:** Don't use a light ground; the page is warm black (#0d0c0a)
- **Don't:** Don't use the violet (#5537ee) accent in the hero
- **Don't:** Don't add more than one accent colour to a card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
