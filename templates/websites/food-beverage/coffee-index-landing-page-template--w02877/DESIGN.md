# Design system — Coffee Index Landing Page Template

`SN-W02877` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `ca`

## Direction

Warm and practical, a price directory with a friendly editorial hero. A cream ground (#fffdf5) carries a sans headline in dark brown (#2c221c), and the middle phrase is set in orange-red (#e05a38) as the single accent. A monospaced ticker strip across the top gives the index a market-data feel, and the orange pill is the one button colour. White search and feature cards sit on the cream without shadows.

**Mood:** warm, practical, market-data, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffdf5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2c221c` | Headings and primary copy |
| Muted text | `#2c221c` | Secondary copy, captions |
| Border | `#2c221c` | Hairlines, dividers, outlines |
| Accent | `#e05a38` | Primary action and highlights |

Palette by frequency of use: `#2c221c` · `#e05a38` · `#ffffff` · `#f5f2e8` · `#fffdf5` · `#cc4d2e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="bg-[#E05A38] hover:bg-[#CC4D2E] text-white pl-5 pr-6 py-4 rounded-full shadow-[0_10px_30px_rgba(224,90,56,0.4)] flex items-center gap-3 transition-all active:scale-95 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Footer (`footer`)
6. Comparison (`comparison`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fffdf5;
  --color-surface: #ffffff;
  --color-text: #2c221c;
  --color-muted: #2c221c;
  --color-border: #2c221c;
  --color-accent: #e05a38;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffdf5',
    surface: '#ffffff',
    ink: '#2c221c',
    muted: '#2c221c',
    line: '#2c221c',
    accent: '#e05a38',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the middle headline phrase in orange-red (#e05a38) and the rest in dark brown
- **Do:** Use the orange-red pill (#e05a38) for the main action only
- **Do:** Keep the price ticker as a single monospaced strip above the nav
- **Don't:** Don't use the orange for large background areas
- **Don't:** Don't use the orange for body text; it is for headlines and actions
- **Don't:** Don't add a second brand colour to the ticker

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
