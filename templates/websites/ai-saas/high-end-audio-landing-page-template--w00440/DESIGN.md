# Design system — High-End Audio Landing Page Template

`SN-W00440` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, cinematic product page where a very large heavy white wordmark, OBELISK, fills the top of the hero, with a pale cyan (#7fdcee) model name beneath. Cyan is the only colour: it fills the primary button and marks the product name, and the secondary button is outlined. Small monospace spec figures run along the bottom as a data strip.

**Mood:** cinematic, technical, austere, premium, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#7fdcee` | Primary action and highlights |

Palette by frequency of use: `#7fdcee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--tight)
- **Body:** var(--tight)
- **Loaded families:** Inter Tight, DM Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Listings (`listings`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-accent: #7fdcee;
  --font-display: "var(--tight)", sans-serif;
  --font-body: "var(--tight)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    accent: '#7fdcee',
  },
  fontFamily: { display: ['var(--tight)'], sans: ['var(--tight)'] },
} }
```

## Do and don't

- **Do:** Set the product wordmark in a very large heavy white sans at the top of the hero
- **Do:** Use the pale cyan (#7fdcee) for the product name and the solid primary button only
- **Do:** Run spec figures as a small monospace strip along the bottom of the hero
- **Don't:** Don't add a second accent colour to the spec strip
- **Don't:** Don't set the wordmark in a light weight
- **Don't:** Don't switch to a light page; the look is dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
