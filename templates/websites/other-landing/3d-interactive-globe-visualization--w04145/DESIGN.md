# Design system — 3D Interactive Globe Visualization

`SN-W04145` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A single centred headline on a deep navy ground (#0a2540), with a pale blue subtitle beneath it. The sans-serif heading is large and bold, and the globe it introduces is the only ornament. Colour is restrained: white for the headline and pale blue (#bfdbfe) for secondary text, which gives the page a calm, corporate tone.

**Mood:** corporate, focused, restrained, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a2540` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#bfdbfe` | Primary action and highlights |

Palette by frequency of use: `#0a2540` · `#ffffff` · `#bfdbfe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 48px · body 20px
- **Weights in use:** bold

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-2xl`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js

## Tokens

```css
:root {
  --color-background: #0a2540;
  --color-text: #ffffff;
  --color-accent: #bfdbfe;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a2540',
    ink: '#ffffff',
    accent: '#bfdbfe',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the headline centred on the navy ground (#0a2540).
- **Do:** Use the pale blue (#bfdbfe) only for secondary text.
- **Do:** Set the headline in bold sans-serif at its existing large size.
- **Don't:** Don't add a badge or second headline above the title.
- **Don't:** Don't set white text on a lighter background.
- **Don't:** Don't add gradient fills to the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
