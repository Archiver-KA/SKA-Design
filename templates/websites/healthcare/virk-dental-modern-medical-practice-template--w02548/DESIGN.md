# Design system — Virk Dental - Modern Medical Practice Template

`SN-W02548` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A luxury dental studio on a near-black ground with a faint green cast, and a large white serif headline whose final phrase is italic gold. Gold carries the primary button and the emphasis, while the secondary button is a dark outline, so the page reads as a private atelier.

**Mood:** luxurious, restrained, atelier, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Text | `#ffffff` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sans)
- **Body:** var(--sans)
- **Loaded families:** Fraunces, Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** React
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111111;
  --color-text: #ffffff;
  --font-display: "var(--sans)", sans-serif;
  --font-body: "var(--sans)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    ink: '#ffffff',
  },
  fontFamily: { display: ['var(--sans)'], sans: ['var(--sans)'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large white serif, with the final phrase in italic gold
- **Do:** Use the gold for the primary button and the emphasised phrase only
- **Do:** Keep the secondary button a dark outline with white text
- **Don't:** Don't use the gold for body copy; body text is light grey
- **Don't:** Don't brighten the ground; the page stays near-black
- **Don't:** Don't add photography to the hero; it relies on type

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
