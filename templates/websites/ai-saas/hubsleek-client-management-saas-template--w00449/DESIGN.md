# Design system — Hubsleek Client Management SaaS Template

`SN-W00449` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, monochrome SaaS hero on a near-black ground, with a white headline, white pill buttons and a large dark product frame below. The type is Inter at large size, with rounded corners and glass-style panels. Colour is almost absent apart from grey text and the frame.

**Mood:** monochrome, dark, glassy, calm, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#525252` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#d4d4d4` · `#fb923c` · `#525252` · `#0a0a0a` · `#f97316` · `#000000` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 88px · h2 36px · h3 14px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Feature grid (`features`)
5. Logo cloud (`logo-cloud`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #525252;
  --color-accent: #ffffff;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#525252',
    accent: '#ffffff',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use white pill buttons for the primary hero action
- **Do:** Keep the page on the near-black ground (#0a0a0a) with grey secondary text
- **Do:** Let the large product frame carry the detail and keep the copy short
- **Don't:** Don't introduce orange or green into the hero buttons
- **Don't:** Don't use drop shadows for depth on dark panels; use borders
- **Don't:** Don't centre long paragraphs; keep copy within about three lines

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
