# Design system — Vehicle Transfer Platform Landing Page Template

`SN-W04126` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, crisp transport page with a dark navy headline (#0f172a) that turns red (#bf1b22) on its final phrase. The primary button is solid red beside a white outline button, and a rounded white card with a dashed route line and status tags serves as the main visual. Near-white surfaces and soft grey borders leave the red to carry the emphasis.

**Mood:** crisp, clear, modern, corporate, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#bf1b22` | Primary action and highlights |
| Second accent | `#0f172a` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#94a3b8` · `#f1f5f9` · `#64748b` · `#475569` · `#334155` · `#e2e8f0` · `#f8fafc` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="inline-flex justify-center items-center bg-brand text-white px-6 py-3.5 rounded-full text-sm font-medium hover-bg-brand-dark transition-all shadow-md hover:shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Listings (`listings`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #bf1b22;
  --color-accent-2: #0f172a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#bf1b22',
    accent2: '#0f172a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the last headline phrase in red (#bf1b22) and the rest in dark navy (#0f172a)
- **Do:** Use solid red for the primary button and white outline for the secondary
- **Do:** Show route and status information in rounded white cards with a dashed route line
- **Don't:** Don't use red for body text
- **Don't:** Don't add a second saturated colour to the hero
- **Don't:** Don't place dark navy panels on the light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
