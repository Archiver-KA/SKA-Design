# Design system — Creative Features Showcase

`SN-W03583` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The features section uses a magenta-to-violet gradient (#ff3b9a into #7928ca) for its heading and the circular play button, set on a white ground. Feature cards are white, with pale pink and lavender media panels and slate grey body text. Gradients carry the colour while the text stays neutral. The look is bright and upbeat, built on gradient fills and soft pastel panels.

**Mood:** vivid, gradient, creative, soft, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fce7f3` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Accent | `#ff3b9a` | Primary action and highlights |
| Second accent | `#7928ca` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4b5563` · `#ff3b9a` · `#7928ca` · `#1f2937` · `#22c55e` · `#f3e8ff` · `#fce7f3` · `#db2777` · `#faf5ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 30px · h3 20px
- **Weights in use:** bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-8`

**Primary button**

```html
<a class="bg-gradient-to-r from-primary to-secondary hover:from-pink-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fce7f3;
  --color-text: #4b5563;
  --color-accent: #ff3b9a;
  --color-accent-2: #7928ca;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fce7f3',
    ink: '#4b5563',
    accent: '#ff3b9a',
    accent2: '#7928ca',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the magenta-to-violet gradient only on headings and the main icon
- **Do:** Keep body text in slate grey (#4b5563) on white
- **Do:** Use the pale pink panel (#fce7f3) behind feature media
- **Don't:** Don't apply the gradient to body copy or small labels
- **Don't:** Don't put dark panels in this layout
- **Don't:** Don't add hues beyond pink, violet and the green check marks

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
