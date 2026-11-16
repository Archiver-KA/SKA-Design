# Design system — NEXA Creative Agency Template

`SN-W01648` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A plain, warm-grey contact page with a lowercase, large sans headline that reads as a question, then a short intro paragraph and a row of rounded grey pill options. The layout is text-first and unadorned: there is no accent colour, and the only emphasis is size and weight. It feels like a studio's open letter rather than a marketing page.

**Mood:** plain, text-first, quiet, editorial, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#121212` | Headings and primary copy |
| Muted text | `#8f8b85` | Secondary copy, captions |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#8f8b85` · `#121212`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sa-font-body)
- **Body:** var(--sa-font-body)
- **Loaded families:** Bricolage Grotesque, Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #121212;
  --color-muted: #8f8b85;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#121212',
    muted: '#8f8b85',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Set headlines in large lowercase sans in near-black (#121212)
- **Do:** Use rounded grey pill buttons for multi-select options
- **Do:** Keep the body paragraph short and left-aligned under the headline
- **Don't:** Don't introduce an accent colour; the design has none
- **Don't:** Don't use the grey ground as a text colour
- **Don't:** Don't add decorative imagery to the contact hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
