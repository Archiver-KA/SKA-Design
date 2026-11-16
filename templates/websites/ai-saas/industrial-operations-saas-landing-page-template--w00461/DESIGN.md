# Design system — Industrial Operations SaaS Landing Page Template

`SN-W00461` · ai-saas · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, data-first operations page on a cool grey ground (#e9eef3), with near-black headlines and a deep green (#166534) for the primary action. The hero is centred, with a large sans headline, a short grey subline and a white secondary button beside the green one. A product panel below uses a small red dot for alerts, so red is kept for status. The tone is clear and industrial.

**Mood:** clear, industrial, data-first, light, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e9eef3` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#0e0e0e` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#166534` | Primary action and highlights |
| Second accent | `#166534` | Supporting highlights |

Palette by frequency of use: `#0e0e0e` · `#6b7280` · `#d64545` · `#ffffff` · `#166534` · `#000000` · `#f9fafb` · `#e9eef3` · `#4a90e2` · `#f7f7f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[10px]` (10px), `rounded-[14px]` (14px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-[#0E0E0E] text-white text-sm font-medium px-4 py-2 rounded-[10px] hover:bg-black/80 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Comparison (`comparison`)
3. Feature grid (`features`)
4. Dashboard preview (`dashboard-preview`)
5. Pricing (`pricing`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e9eef3;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #0e0e0e;
  --color-border: #000000;
  --color-accent: #166534;
  --color-accent-2: #166534;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e9eef3',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#0e0e0e',
    line: '#000000',
    accent: '#166534',
    accent2: '#166534',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use deep green (#166534) for the primary button and nothing else decorative
- **Do:** Reserve the small red dot (#d64545) for anomaly and alert states
- **Do:** Keep the hero centred with two buttons side by side
- **Don't:** Don't treat this as a dark theme; the ground is light
- **Don't:** Don't use red for buttons or decoration
- **Don't:** Don't add gradient backgrounds to the grey ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
