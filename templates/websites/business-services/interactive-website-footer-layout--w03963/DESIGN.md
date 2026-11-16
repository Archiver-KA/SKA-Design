# Design system — Interactive Website Footer Layout

`SN-W03963` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, quiet site footer on a near-black ground (#030712). It uses a four-column layout: a short brand note with social icons on the left, and link groups in muted grey to the right. Column headings are small and bold in white, links carry no underlines, and a thin divider separates the small legal row at the bottom.

**Mood:** quiet, dark, orderly, minimal, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#1f2937` · `#030712` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** body 14px
- **Weights in use:** semibold, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px)
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-8`

## Page structure

Blocks in page order:

1. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#1f2937',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the footer ground near-black (#030712) with muted grey links
- **Do:** Use bold white for column headings and muted grey for links
- **Do:** Place legal links in a small row beneath a thin divider
- **Don't:** Don't add a bright accent colour to the footer links
- **Don't:** Don't place background imagery behind the link columns
- **Don't:** Don't set the legal row in larger type than the links

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
