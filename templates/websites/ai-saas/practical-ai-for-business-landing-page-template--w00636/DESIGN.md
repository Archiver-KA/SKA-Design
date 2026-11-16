# Design system — Practical AI for Business Landing Page Template

`SN-W00636` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm, near-black field carries one line of spaced serif capitals in off-white with a hairline rule beneath it. The first screen works as a title card, and nothing else sits on it, so the title card stays spare.

**Mood:** quiet, dark, spaced-caps, understated, modest

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sans)
- **Body:** var(--sans)
- **Loaded families:** Fraunces, Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Process / steps (`how-it-works`)
5. Timeline (`timeline`)
6. 3D / canvas scene (`3d-canvas`)
7. Stats band (`stats`)
8. Team (`team`)
9. Marquee (`marquee`)
10. Newsletter signup (`newsletter`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "var(--sans)", sans-serif;
  --font-body: "var(--sans)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['var(--sans)'], sans: ['var(--sans)'] },
} }
```

## Do and don't

- **Do:** Set the opening line in spaced serif capitals in off-white on the warm near-black ground
- **Do:** Keep a hairline rule under the title and nothing else on the first screen
- **Do:** Keep type in off-white on the first screen, with no bright colour
- **Don't:** Don't set the first screen on a light ground; it is warm near-black
- **Don't:** Don't add bright accents to the title card
- **Don't:** Don't set the opening line in sans-serif; the spaced serif is the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
