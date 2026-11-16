# Design system — Luxury Desert Retreat Landing Page Template

`SN-W03083` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A desert resort hero on a warm sand-toned gradient, with a very widely tracked serif wordmark in white that dominates the centre of the screen. Supporting text is small and light, set in narrow lines beneath the mark. The page leans on the spacing and the wordmark rather than on imagery, so the first screen is calm and airy.

**Mood:** airy, calm, warm, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Cormorant Garamond, Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Three.js, React
- **Icons:** Lucide, Iconify

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

- **Do:** Set the wordmark in a serif with very wide letter spacing
- **Do:** Keep supporting text small and light below the wordmark
- **Do:** Use a warm sand-toned gradient as the hero ground
- **Don't:** Don't put a white wordmark on the lightest part of the sand gradient
- **Don't:** Don't add bold weights to the supporting text
- **Don't:** Don't introduce bright accent colours

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
