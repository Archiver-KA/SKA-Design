# Design system — VIBRA'SON Arts & Expression Landing Page Template

`SN-W02276` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

An association page on a white ground with a small italic logotype and one row of plain text links. A round green chat button sits at the bottom right, and the blue accent (#4d65ff) marks the main calls to action.

**Mood:** community, clean, open, light, modest

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f6f5f2` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#1a1a1c` | Secondary copy, captions |
| Accent | `#4d65ff` | Primary action and highlights |
| Second accent | `#ffcc00` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1a1a1c` · `#000000` · `#4d65ff` · `#f6f5f2` · `#6b7280` · `#5f6368` · `#f3f4f6` · `#fbbf24` · `#5a5a6a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, React
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f6f5f2;
  --color-text: #000000;
  --color-muted: #1a1a1c;
  --color-accent: #4d65ff;
  --color-accent-2: #ffcc00;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f6f5f2',
    ink: '#000000',
    muted: '#1a1a1c',
    accent: '#4d65ff',
    accent2: '#ffcc00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue (#4d65ff) for the main calls to action.
- **Do:** Keep the nav as one row of plain text links under the logotype.
- **Do:** Place the round chat button fixed at the bottom-right corner.
- **Don't:** Don't add imagery; the first screen is text only.
- **Don't:** Don't use the yellow (#ffcc00) for body text; it is a highlight colour.
- **Don't:** Don't add a second accent beside the blue.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
