# Design system — VOID Digital Studio Landing Page Template

`SN-W01726` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black, almost empty studio page with a single large glowing wordmark in the centre, so the hero is typography alone. The white letters carry a soft halo, and the only other colour is a warm gold call to action in the navigation. The page is about restraint: wide tracking, small navigation and no imagery in the first screen.

**Mood:** minimal, dark, atmospheric, spare, wide-tracked

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Syne, Space Grotesk

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Case studies (`case-studies`)
6. Stats band (`stats`)
7. Process / steps (`how-it-works`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the hero wordmark in wide-tracked white capitals with a soft glow
- **Do:** Keep the first screen free of imagery; type carries the hero
- **Do:** Use the gold colour only for the single navigation call to action
- **Don't:** Don't add a second bright colour to the hero
- **Don't:** Don't use light backgrounds; the page is black from top to bottom
- **Don't:** Don't add many navigation items; the navigation is a few short links

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
