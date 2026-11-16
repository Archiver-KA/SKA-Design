# Design system — Subscription Pricing Plan Layout

`SN-W04296` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm pricing set on a cream ground (#fff9e6), with three white-edged cards whose titles are set in red (#dc3545). Prices are large, buttons and the highlighted middle card are filled in amber, and a green tick marks included features while a red cross marks excluded ones. The rounded Poppins face and the soft cream keep the set friendly.

**Mood:** warm, friendly, cream, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff9e6` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Accent | `#dc3545` | Primary action and highlights |
| Second accent | `#28a745` | Supporting highlights |

Palette by frequency of use: `#f3d2c1` · `#fff9e6` · `#28a745` · `#dc3545`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Poppins

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Pricing (`pricing`)

## Motion, effects and stack

- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #fff9e6;
  --color-text: #111111;
  --color-accent: #dc3545;
  --color-accent-2: #28a745;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff9e6',
    ink: '#111111',
    accent: '#dc3545',
    accent2: '#28a745',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Set plan titles in red (#dc3545) and prices large in amber
- **Do:** Use green (#28a745) ticks for included features and a red cross for excluded ones
- **Do:** Set all text and buttons in Poppins, with the highlighted middle card raised slightly
- **Don't:** Don't place the cards on a white ground
- **Don't:** Don't set feature text in red or green
- **Don't:** Don't add a second button colour to the cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
