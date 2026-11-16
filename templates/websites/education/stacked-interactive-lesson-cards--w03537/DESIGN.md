# Design system — Stacked Interactive Lesson Cards

`SN-W03537` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Stacked Lesson Cards shows course modules as overlapping translucent panels over a grey field, with violet 3D wireframe lines drawn behind them. The cards are frosted and offset in depth, so the stack reads as layers rather than a flat list. Text is white Inter, and the violet of the animated background is the only colour. The layered glass stack over the moving 3D field is what makes it recognisable.

**Mood:** layered, translucent, dreamy, grey, animated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#334155` | Page ground |
| Surface | `#475569` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#f87171` · `#34d399` · `#c084fc` · `#64748b` · `#334155` · `#a78bfa` · `#f1f5f9` · `#f3f4f6` · `#475569` · `#fda4af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js, Spline 3D
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #334155;
  --color-surface: #475569;
  --color-text: #f3f4f6;
  --color-accent: #c084fc;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#334155',
    surface: '#475569',
    ink: '#f3f4f6',
    accent: '#c084fc',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the lesson panels translucent so the 3D background shows through
- **Do:** Use the violet (#c084fc) only in the animated background lines
- **Do:** Keep white text on the darkest panel for legibility
- **Don't:** Don't make the cards fully opaque
- **Don't:** Don't add a second accent colour to the background animation
- **Don't:** Don't place small body copy over the busiest part of the 3D field

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
