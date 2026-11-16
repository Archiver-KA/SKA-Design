# Design system — Interactive 3D Stacked Sphere Cards

`SN-W04212` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white ground with a single card in the centre: a white panel with a soft shadow, a monospace label row at the top with a stack number and a code, and a sphere in the middle drawn in thin blue lines. Geist Mono sets every label, so the piece reads like a technical specimen. Its restraint comes from the single colour and the wide white space around the card.

**Mood:** technical, minimal, precise, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#404040` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#262626` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist Mono
- **Body:** Geist Mono
- **Loaded families:** Geist Mono
- **Weights in use:** bold

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px)
- **Shadows:** `shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_16px_44px_0_rgba(0,0,0,0.13)]`, `shadow-[0_20px_60px_0_rgba(0,0,0,0.20),0px_0px_0px_2px_rgba(37,99,235,0.21)]`, `shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_28px_-4px_rgba(0,0,0,0.07)]`

## Page structure

Blocks in page order:

1. Video / media (`video-media`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #404040;
  --font-display: "Geist Mono", sans-serif;
  --font-body: "Geist Mono", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#404040',
  },
  fontFamily: { display: ['Geist Mono'], sans: ['Geist Mono'] },
} }
```

## Do and don't

- **Do:** Set labels in Geist Mono at small sizes
- **Do:** Keep the card white with rounded corners and a soft shadow
- **Do:** Draw the sphere in thin blue lines on the card
- **Don't:** Don't use a dark background for this light piece
- **Don't:** Don't add more than one colour to the card
- **Don't:** Don't use a heavy shadow under the card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
