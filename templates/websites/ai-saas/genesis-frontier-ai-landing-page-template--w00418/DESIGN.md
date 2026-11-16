# Design system — Genesis Frontier AI Landing Page Template

`SN-W00418` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page with a large serif wordmark, GENESIS, filled with a pale blue-grey gradient, and an italic serif line beneath it. The tone is literary and quiet for an AI research company. Small spaced uppercase labels with short rules sit above the headline, and the buttons are outlined pills in muted tones.

**Mood:** literary, quiet, dark, refined, research-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#03040a` | Page ground |
| Surface | `#02030a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#aab4c6` | Secondary copy, captions |
| Accent | `#ccd5e8` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#03040a` · `#ccd5e8` · `#aab4c6` · `#cdd5e4` · `#d6dcec` · `#eef2ff` · `#ced7ec` · `#02030a` · `#b1bccc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sans)
- **Body:** var(--sans)
- **Loaded families:** Fraunces, Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Gallery / portfolio (`gallery-portfolio`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. 3D / canvas scene (`3d-canvas`)
6. Feature grid (`features`)
7. Stats band (`stats`)
8. Testimonials (`testimonials`)
9. Newsletter signup (`newsletter`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #03040a;
  --color-surface: #02030a;
  --color-text: #ffffff;
  --color-muted: #aab4c6;
  --color-accent: #ccd5e8;
  --font-display: "var(--sans)", sans-serif;
  --font-body: "var(--sans)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#03040a',
    surface: '#02030a',
    ink: '#ffffff',
    muted: '#aab4c6',
    accent: '#ccd5e8',
  },
  fontFamily: { display: ['var(--sans)'], sans: ['var(--sans)'] },
} }
```

## Do and don't

- **Do:** Set the display word and the italic subline in the serif, in pale blue-grey (#ccd5e8)
- **Do:** Frame eyebrow labels with short horizontal rules in tracked uppercase
- **Do:** Keep buttons outlined and pill-shaped, with a text link beside them
- **Don't:** Don't use saturated colour; the page stays in near-black and pale grey
- **Don't:** Don't set the italic subline in bold
- **Don't:** Don't use a solid fill for the primary button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
