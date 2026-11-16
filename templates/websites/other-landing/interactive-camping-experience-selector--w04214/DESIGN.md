# Design system — Interactive Camping Experience Selector

`SN-W04214` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark charcoal page (#222222) with a centred bold white headline and a short grey line beneath it. A row of tall dark panels forms the selector: the chosen panel widens and gets a white outline with a caption at its base, while the others stay narrow. Inter sets all text, and the layout uses no accent colour, so the white outline alone marks the selection.

**Mood:** moody, minimal, dark, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#222222` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#d1d5db` · `#292929` · `#18181b` · `#222222`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 48px · body 20px
- **Weights in use:** bold, extrabold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow`
- **Content width:** `max-w-2xl`, `max-w-[900px]`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Articles (`blog-articles`)
3. Listings (`listings`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #222222;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#222222',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Expand the selected panel and outline it in white
- **Do:** Set the headline in bold white Inter at large size
- **Do:** Keep unselected panels narrow and dark
- **Don't:** Don't add an accent colour; white marks the selection
- **Don't:** Don't use light panels on the charcoal ground
- **Don't:** Don't show full captions on panels that are not selected

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
