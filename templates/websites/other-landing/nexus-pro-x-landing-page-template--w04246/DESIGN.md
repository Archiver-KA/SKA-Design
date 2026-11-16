# Design system — Nexus Pro X Landing Page Template

`SN-W04246` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark product launch page on near-black (#08080d), with an uppercase, wide-set headline in white and a single purple (#b985ff) used for the X in the name, the primary button and the controller's glow. The hero centres on a large product image with a soft violet light behind it, while small, tracked caption text does the labelling.

**Mood:** cinematic, product-driven, uppercase, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#08080d` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#b985ff` | Primary action and highlights |
| Second accent | `#b985ff` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#b985ff` · `#08080d` · `#ff6a5a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--f-d)
- **Body:** var(--f-d)
- **Loaded families:** Archivo, JetBrains Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Stats band (`stats`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #08080d;
  --color-text: #ffffff;
  --color-accent: #b985ff;
  --color-accent-2: #b985ff;
  --font-display: "var(--f-d)", sans-serif;
  --font-body: "var(--f-d)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#08080d',
    ink: '#ffffff',
    accent: '#b985ff',
    accent2: '#b985ff',
  },
  fontFamily: { display: ['var(--f-d)'], sans: ['var(--f-d)'] },
} }
```

## Do and don't

- **Do:** Set the headline in uppercase with wide spacing, and the X in purple (#b985ff)
- **Do:** Use purple (#b985ff) for the primary button and one highlight only
- **Do:** Keep small captions tracked out in uppercase above the headline
- **Don't:** Don't use a second bright colour on the buttons
- **Don't:** Don't place the headline over the product image
- **Don't:** Don't add lighter backgrounds to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
