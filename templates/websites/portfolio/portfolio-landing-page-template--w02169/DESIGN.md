# Design system — Portfolio Landing Page Template

`SN-W02169` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark product-card hero: a near-black ground (#0a0a0a) with a large white Inter headline and a rounded, glossy mockup card floating over a soft blue glow. The primary button is a blue-to-violet gradient, with a plain outline button beside it. Gradients, glow and a 3D scene carry the decoration while the type stays plain.

**Mood:** glossy, dark, product-led, modern, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#000000` · `#f5f5f5` · `#262626` · `#ffffff` · `#d4d4d4` · `#e5e5e5` · `#404040` · `#818cf8` · `#0a0a0a` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 72px · h3 30px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow`, `shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]`
- **Content width:** `max-w-3xl`, `max-w-4xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-medium shadow-sm transition-colors font-geist text-neutral-100 hover:bg-amber-600">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #d4d4d4;
  --color-border: #000000;
  --color-accent: #818cf8;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#d4d4d4',
    line: '#000000',
    accent: '#818cf8',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white Inter at large size with a short sub-line
- **Do:** Use the blue-to-violet gradient only on the primary button and the card highlight
- **Do:** Keep one outline button beside each primary button
- **Don't:** Don't use amber (#f59e0b) for calls to action.
- **Don't:** Don't add a second gradient to the same view
- **Don't:** Don't put text over the 3D canvas without a dark scrim

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
