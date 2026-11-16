# Design system — Groundtruth Retail Spatial Capture Template

`SN-W01177` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A flat, engineering-style spatial capture page on a mid grey ground (#464949) with very little chrome: a letter-spaced monospace wordmark, small grey navigation, and a short two-tone headline in light sans. Three large numeric readouts in lime-green sit at the lower right and are the only accent, reading like instrument output. Most of the page is empty grey, so the design relies on measured negative space.

**Mood:** technical, measured, quiet, industrial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#464949` | Page ground |
| Surface | `#3b3e3e` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#12140c` · `#3b3e3e` · `#464949` · `#26292b` · `#2c3037` · `#222527`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sans)
- **Body:** var(--sans)

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. 3D / canvas scene (`3d-canvas`)
4. About (`about`)
5. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js

## Tokens

```css
:root {
  --color-background: #464949;
  --color-surface: #3b3e3e;
  --color-text: #f5f5f5;
  --font-display: "var(--sans)", sans-serif;
  --font-body: "var(--sans)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#464949',
    surface: '#3b3e3e',
    ink: '#f5f5f5',
  },
  fontFamily: { display: ['var(--sans)'], sans: ['var(--sans)'] },
} }
```

## Do and don't

- **Do:** Keep the page on the mid grey ground (#464949) and use the surface (#3b3e3e) for raised panels.
- **Do:** Set the headline in light sans, with the second line in a lighter grey for a two-tone effect.
- **Do:** Use letter-spaced monospace for navigation, captions and readout labels.
- **Don't:** Don't add decorative imagery to the empty areas; the negative space is the design.
- **Don't:** Don't set small body copy in pure white; it is a light grey.
- **Don't:** Don't use the lime readouts for headlines; they are data values only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
