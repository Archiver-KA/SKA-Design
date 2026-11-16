# Design system — Freq Event Production Landing Page Template

`SN-W03607` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The first screen is a near-black field (#0a0a0a) with a faint blue glow at its centre and a small grey navigation bar. The only bright element is an outlined blue button at the top right, so the page reads as an empty, dark stage. Blue appears as a soft light rather than a solid fill.

**Mood:** dark, quiet, minimal, glowing, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0445f3` · `#a3a3a3` · `#171717` · `#000000` · `#262626` · `#737373` · `#0a0a0a` · `#60a5fa` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-blue-900/20`, `shadow-[0_0_50px_rgba(4,69,243,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="border-beam-btn px-8 py-4 rounded-full text-white font-bold text-lg bg-[#0445f3] hover:scale-105 transition shadow-lg shadow-blue-900/50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. 3D / canvas scene (`3d-canvas`)
4. Integrations (`integrations`)
5. Stats band (`stats`)
6. Product grid (`product-grid`)
7. About (`about`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #4ade80;
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
    surface: '#171717',
    ink: '#f5f5f5',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on near-black (#0a0a0a) with a soft blue glow behind the hero
- **Do:** Use the blue (#60a5fa) for the top right button outline
- **Do:** Keep navigation small and grey
- **Don't:** Don't fill the hero with a solid blue background
- **Don't:** Don't add bright colours beyond the blue
- **Don't:** Don't crowd the hero with text on top of the glow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
