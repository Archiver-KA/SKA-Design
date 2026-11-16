# Design system — JoyCo Tours | Faith-Inspired Group Travel & Pilgrimages

`SN-W03071` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A bright, faith-focused tour page with a pale blue gradient hero (#bdd9ff family) and a centred dark headline in a bold sans set over three lines. Blue (#1155c0) is the action colour on the navigation button and the search button, and the grey subline keeps the copy calm. A white rounded search bar sits below the headline, so the page leads with destinations rather than decoration.

**Mood:** bright, trustworthy, warm, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#1155c0` | Primary action and highlights |
| Second accent | `#f5a623` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#bdd8ff` · `#a5ccfa` · `#1155c0` · `#bdd9ff` · `#f5a623`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Listings (`listings`)
5. Timeline (`timeline`)
6. Stats band (`stats`)
7. Services (`services`)
8. Testimonials (`testimonials`)
9. Logo cloud (`logo-cloud`)
10. Pricing (`pricing`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Phosphor

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-accent: #1155c0;
  --color-accent-2: #f5a623;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    accent: '#1155c0',
    accent2: '#f5a623',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use the deep blue (#1155c0) for the primary buttons only
- **Do:** Set the hero headline in a bold sans in three centred lines
- **Do:** Keep the pale blue gradient behind the hero
- **Don't:** Don't use the orange (#f5a623) for buttons; it is a tint
- **Don't:** Don't add dark sections; the page stays light
- **Don't:** Don't centre body text in long paragraphs

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
