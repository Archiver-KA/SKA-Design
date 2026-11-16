# Design system — Software Studio Portfolio & Landing Page Template

`SN-W02233` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A terminal-inspired studio page on a dark slate ground, with bordered panels and monospace type throughout. Nav keys are bracketed letters, a solid green cursor block follows the title, and sections sit in hairline-bordered panels, so the mono face and bracketed keys carry the identity.

**Mood:** terminal, technical, precise, studio

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-mono)
- **Body:** var(--font-mono)

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Three.js, Framer Motion, React
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "var(--font-mono)", sans-serif;
  --font-body: "var(--font-mono)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['var(--font-mono)'], sans: ['var(--font-mono)'] },
} }
```

## Do and don't

- **Do:** Set all headings and labels in the monospace face
- **Do:** Frame sections in dark panels with hairline borders
- **Do:** Show navigation keys as bracketed letters such as [h] and [a]
- **Don't:** Don't use a white ground; the page is dark slate
- **Don't:** Don't use a proportional sans for labels
- **Don't:** Don't add photos to the panels; the look is text and rules

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
