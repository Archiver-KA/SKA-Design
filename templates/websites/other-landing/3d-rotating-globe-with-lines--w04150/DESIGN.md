# Design system — 3D Rotating Globe with Lines

`SN-W04150` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black stage with a rotating globe built from thin lines that expand and contract. The palette is strictly black and white, with no colour anywhere, so the design depends on motion and line weight. Any added interface should stay small and monochrome so the globe keeps the focus.

**Mood:** stark, monochrome, kinetic, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#f5f5f5` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #f5f5f5;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#f5f5f5',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the background pure black (#000000).
- **Do:** Draw the lines in white (#ffffff).
- **Do:** Keep any caption small and in a corner.
- **Don't:** Don't add colour to the lines.
- **Don't:** Don't put a large heading over the globe.
- **Don't:** Don't add a background pattern behind the globe.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
