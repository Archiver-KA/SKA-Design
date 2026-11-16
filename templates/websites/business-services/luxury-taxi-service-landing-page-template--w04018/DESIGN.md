# Design system — Luxury Taxi Service Landing Page Template

`SN-W04018` · business-services · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

An editorial layout built on a warm off-white ground and one oversized black sans-serif word. Colour arrives through photographs and flat blocks of sage green, terracotta and pale blue rather than through interface accents. Navigation and social links are small, widely spaced capitals, so the page reads like a magazine spread.

**Mood:** editorial, airy, minimal, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#10212b` | Headings and primary copy |
| Muted text | `#4a5c68` | Secondary copy, captions |
| Border | `#cdd5da` | Hairlines, dividers, outlines |
| Accent | `#ff7f36` | Primary action and highlights |
| Second accent | `#1f5f8b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4a5c68` · `#cdd5da` · `#10212b` · `#1f5f8b` · `#ff7f36` · `#f26b1d` · `#c9d3d9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sa-font-body)
- **Body:** var(--sa-font-body)
- **Loaded families:** Barlow Condensed, Inter
- **Scale (largest breakpoint):** h1 120px · h2 60px · h3 24px · body 15px
- **Weights in use:** semibold, bold, normal
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-8`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center min-h-[52px] px-8 bg-ink text-white font-semibold">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #10212b;
  --color-muted: #4a5c68;
  --color-border: #cdd5da;
  --color-accent: #ff7f36;
  --color-accent-2: #1f5f8b;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#10212b',
    muted: '#4a5c68',
    line: '#cdd5da',
    accent: '#ff7f36',
    accent2: '#1f5f8b',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Set the hero word in one oversized black sans-serif weight
- **Do:** Place photographs inside flat colour blocks rather than floating them
- **Do:** Keep navigation and footer links small, uppercase and widely spaced
- **Don't:** Don't add rounded cards or drop shadows
- **Don't:** Don't use the orange as a full-page background
- **Don't:** Don't set the hero word in a serif or light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
