# Design system — Web3 Hackathon Landing Page Template

`SN-W00825` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, data-led page on a near-black ground, with green (#34d399) used for small uppercase labels and captions. Large white statistics sit at the top of each section, followed by cards with a thin border and a small icon tile. The green stays on labels and icons, so the figures read as white and the layout reads like a lab report.

**Mood:** data-led, dark, clinical, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#34d399` · `#737373` · `#a3a3a3` · `#000000` · `#064e3b` · `#525252` · `#262626` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Mono
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 36px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full bg-emerald-500 text-black font-mono font-semibold py-3 hover:bg-emerald-400 transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Schedule (`schedule-agenda`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#525252',
    line: '#ffffff',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use green (#34d399) only for small uppercase labels and stat captions
- **Do:** Set statistics large and white at the top of each section
- **Do:** Keep cards on a dark ground with a thin border and an icon in a small square tile
- **Don't:** Don't fill cards with the green
- **Don't:** Don't use a light background for this layout
- **Don't:** Don't add decorative gradients behind the stat row

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
