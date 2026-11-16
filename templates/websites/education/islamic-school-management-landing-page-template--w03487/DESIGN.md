# Design system — Islamic School Management Landing Page Template

`SN-W03487` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A calm software page on white and a very pale grey-green, with forest green (#1e3a2b) for headlines and the primary button. The key word in the hero sits on a bright green (#28b879) block, and the product appears as a soft dashboard preview with stat tiles. A serif display face for headlines contrasts with a clean sans for the copy.

**Mood:** calm, organised, trustworthy, fresh, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f6f6f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e3a2b` | Headings and primary copy |
| Muted text | `#3c4a40` | Secondary copy, captions |
| Border | `#dde5df` | Hairlines, dividers, outlines |
| Accent | `#1e3a2b` | Primary action and highlights |
| Second accent | `#28b879` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1e3a2b` · `#28b879` · `#3c4a40` · `#dde5df` · `#4fb848` · `#f6f6f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Fraunces
- **Body:** Inter
- **Loaded families:** Fraunces, Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center bg-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Dashboard preview (`dashboard-preview`)
5. About (`about`)
6. Testimonials (`testimonials`)
7. Bento grid (`bento-grid`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f6f6f6;
  --color-surface: #ffffff;
  --color-text: #1e3a2b;
  --color-muted: #3c4a40;
  --color-border: #dde5df;
  --color-accent: #1e3a2b;
  --color-accent-2: #28b879;
  --font-display: "Fraunces", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f6f6f6',
    surface: '#ffffff',
    ink: '#1e3a2b',
    muted: '#3c4a40',
    line: '#dde5df',
    accent: '#1e3a2b',
    accent2: '#28b879',
  },
  fontFamily: { display: ['Fraunces'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of the hero headline on a bright green (#28b879) block
- **Do:** Use forest green (#1e3a2b) for headlines and primary buttons
- **Do:** Show the product in a soft dashboard panel with rounded corners
- **Don't:** Don't set the bright green as a text colour on white
- **Don't:** Don't use the serif for body copy
- **Don't:** Don't add shadows to the dashboard panel; keep it flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
