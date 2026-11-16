# Design system — Tactical Raincoat Landing Page

`SN-W04299` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black product hero with a very large bold white sans headline, where the product name's last words are set in cyan (#67e8f9). Thin-bordered glass cards show colour swatches and a price beside the product image, and the navigation sits in a translucent bar across the top. The contrast is strong, and cyan appears only in the headline and key details.

**Mood:** bold, technical, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#475569` | Hairlines, dividers, outlines |
| Accent | `#67e8f9` | Primary action and highlights |
| Second accent | `#ca8a04` | Supporting highlights |

Palette by frequency of use: `#67e8f9` · `#94a3b8` · `#f1f5f9` · `#475569` · `#cbd5e1` · `#a5f3fc` · `#000000` · `#f3f4f6` · `#030712` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 24px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-3xl` (24px), `rounded-full` (9999px)
- **Shadows:** `shadow-md`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-3 font-semibold px-10 py-5 rounded-3xl transition-all duration-200 shadow-2xl hover:shadow-cyan-300/20 hover:scale-105 bg-cyan-300 hover:bg-cyan-200 text-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #0f172a;
  --color-text: #f3f4f6;
  --color-muted: #94a3b8;
  --color-border: #475569;
  --color-accent: #67e8f9;
  --color-accent-2: #ca8a04;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#0f172a',
    ink: '#f3f4f6',
    muted: '#94a3b8',
    line: '#475569',
    accent: '#67e8f9',
    accent2: '#ca8a04',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key words of the headline in cyan (#67e8f9) and the rest in white
- **Do:** Show colour swatches and the price in small glass cards beside the product image
- **Do:** Keep the navigation in a translucent bar with a thin border
- **Don't:** Don't use cyan for body text
- **Don't:** Don't add a light background to the hero
- **Don't:** Don't use more than one bright accent colour in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
