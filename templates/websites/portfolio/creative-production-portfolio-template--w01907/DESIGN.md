# Design system — Creative Production Portfolio Template

`SN-W01907` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black stage dominated by a large black orb with a soft grey rim light, set against a dark charcoal field on the right. Uppercase white and grey sans titles sit over the orb, and the navigation and a vertical tracked label are small and warm grey. Colour is absent, so the look is cinematic and quiet, built on light and shape alone.

**Mood:** cinematic, sculptural, monochrome, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0b` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#8f8b85` | Secondary copy, captions |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#121212` · `#8f8b85` · `#0b0b0b`.

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
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0b0b0b;
  --color-surface: #121212;
  --color-text: #f5f5f5;
  --color-muted: #8f8b85;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0b',
    surface: '#121212',
    ink: '#f5f5f5',
    muted: '#8f8b85',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Keep the orb as a hard black form with a soft grey rim light.
- **Do:** Set the title in uppercase sans, first word white and second grey.
- **Do:** Keep navigation and vertical labels small and widely tracked in warm grey (#8f8b85).
- **Don't:** Don't add colour; the page is monochrome.
- **Don't:** Don't fill the orb with gradients; the rim alone carries the light.
- **Don't:** Don't set the vertical label horizontally; it reads top to bottom.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
