# Design system — Luxury Watch E-commerce Landing Page Template

`SN-W01246` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

The first screen is a product detail modal over a blurred, oversized dark word. The modal shows template tokens such as {{ detailName }} and {{ detailPrice }} in a serif, with a white solid ADD TO CART button and an outlined CLOSE button. The panel is dark blue-black with a thin border, and the only colour is the blue-grey tint of the ground.

**Mood:** modal-led, dark, precise, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#04060b` | Page ground |
| Surface | `#09101a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#eef1f6` | Secondary copy, captions |
| Accent | `#dfe5ee` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#eef1f6` · `#dfe5ee` · `#04060b` · `#f4f6fa` · `#bcc7d7` · `#7f8999` · `#eef2f7` · `#f2f4f8` · `#8f9bad`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, JetBrains Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, React
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #04060b;
  --color-surface: #09101a;
  --color-text: #ffffff;
  --color-muted: #eef1f6;
  --color-accent: #dfe5ee;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#04060b',
    surface: '#09101a',
    ink: '#ffffff',
    muted: '#eef1f6',
    accent: '#dfe5ee',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Build product detail as a centred dark panel with a thin border over a blurred backdrop
- **Do:** Use a solid white button for the add action and an outlined button for close
- **Do:** Set small tracked caps labels above each value
- **Don't:** Don't use bright colour for the panel or buttons
- **Don't:** Don't leave template tokens such as {{ detailName }} in shipped copy
- **Don't:** Don't remove the blurred backdrop; it carries the depth

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
