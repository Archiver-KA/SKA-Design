# Design system — Renewable Energy AI Landing Page Template

`SN-W00666` · ai-saas · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A clean analytics SaaS page on a light grey ground, with white cards separated by hairline borders and generous rounding. The headline is dark slate in Inter, and the phrase that matters, '10x faster.', is set in green (#10b981). A dark code panel beside the copy shows the product's output, giving the page its only dark block and a technical tone.

**Mood:** clean, technical, analytical, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#64748b` · `#34d399` · `#10b981` · `#f5f5f5` · `#e5e5e5` · `#94a3b8` · `#1e293b` · `#14b8a6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 24px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-md` (6px)
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-emerald-500 text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f5;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #e5e5e5;
  --color-accent: #10b981;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f5',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#e5e5e5',
    accent: '#10b981',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of the headline in green (#10b981) and the rest in dark slate
- **Do:** Use white rounded cards with hairline borders on the light grey ground
- **Do:** Show the product as a dark code panel with monospace text beside the copy
- **Don't:** Don't add drop shadows to white cards; use borders
- **Don't:** Don't set the code panel on a light ground; it stays dark
- **Don't:** Don't use green for every heading; it marks one phrase per section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
