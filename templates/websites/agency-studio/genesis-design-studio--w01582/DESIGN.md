# Design system — Genesis Design Studio

`SN-W01582` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white ground with a bold condensed uppercase wordmark in Oswald, set in near-black (#101117) across the top. The hero is dominated by a large 3D cluster of soft pink spheres on the white field, which is the only colour on the first screen. Small labels and a thin vertical side label keep the rest of the page quiet, so the 3D piece carries the design.

**Mood:** minimal, sculptural, soft, condensed, playful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#101117` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#101117` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** Oswald
- **Loaded families:** Oswald

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #101117;
  --font-display: "Oswald", sans-serif;
  --font-body: "Oswald", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#101117',
  },
  fontFamily: { display: ['Oswald'], sans: ['Oswald'] },
} }
```

## Do and don't

- **Do:** Set headlines in Oswald in uppercase, condensed and bold, in near-black (#101117)
- **Do:** Let the 3D object carry the colour and keep all other elements monochrome
- **Do:** Keep the navigation to a thin top bar with small uppercase labels
- **Don't:** Don't add a second colour beside the pink 3D form
- **Don't:** Don't use a dark background; the page is white
- **Don't:** Don't set the wordmark in a wide sans; the condensed face is the identity

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
