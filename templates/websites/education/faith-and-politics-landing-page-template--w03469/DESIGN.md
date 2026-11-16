# Design system — Faith and Politics Landing Page Template

`SN-W03469` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A plain media page on a near-white ground (#f8fafc) with headlines in deep navy (#172554) and a navy outlined secondary button beside a solid navy primary. Red (#b91c1c) marks live labels and the donation actions, and a large navy video panel with a red live tag sits beside the headline. Sections are white cards on the pale grey, with no decorative gradients.

**Mood:** plain, direct, sober, organised, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#172554` | Primary action and highlights |
| Second accent | `#b91c1c` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#172554` · `#e2e8f0` · `#94a3b8` · `#b91c1c` · `#475569` · `#f59e0b` · `#64748b` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 rounded-full bg-blue-950 px-6 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-blue-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. About (`about`)
5. Video / media (`video-media`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #172554;
  --color-accent-2: #b91c1c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#172554',
    accent2: '#b91c1c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in deep navy (#172554)
- **Do:** Use red (#b91c1c) for live labels and donation actions only
- **Do:** Place white cards on the pale grey ground for each section
- **Don't:** Don't use red for headings or long text
- **Don't:** Don't place the navy video panel on a navy section
- **Don't:** Don't add decorative gradients to the cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
