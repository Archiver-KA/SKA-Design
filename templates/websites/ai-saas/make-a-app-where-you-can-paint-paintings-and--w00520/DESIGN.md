# Design system — make a app where you can paint paintings and ...

`SN-W00520` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light-grey page with a white top bar, a small indigo-purple wordmark and three small icon links. The ground is pale grey-blue (#f8fafc), with near-black text and system typography. The design is plain and utilitarian, with little visual detail.

**Mood:** plain, utilitarian, light, minimal, system

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Accent | `#e6dac3` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#f1f5f9` · `#f8fafc` · `#e2e8f0` · `#e0e7ff` · `#8b5a2b` · `#111111` · `#e6dac3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** -apple-system
- **Body:** -apple-system

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** React
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #f1f5f9;
  --color-text: #111111;
  --color-accent: #e6dac3;
  --color-accent-2: #e2e8f0;
  --font-display: "-apple-system", sans-serif;
  --font-body: "-apple-system", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#f1f5f9',
    ink: '#111111',
    accent: '#e6dac3',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['-apple-system'], sans: ['-apple-system'] },
} }
```

## Do and don't

- **Do:** Keep the page on the pale ground (#f8fafc) with near-black text.
- **Do:** Use the system font stack for all text.
- **Do:** Keep the top bar white with a thin bottom border and small icon links.
- **Don't:** Don't add decoration to the hero.
- **Don't:** Don't introduce a display typeface; the page uses system fonts.
- **Don't:** Don't use the beige accent (#e6dac3) for text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
