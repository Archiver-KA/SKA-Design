# Design system — Gamers Bangladesh E-commerce Template

`SN-W01171` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark gaming storefront on a deep navy ground (#060912), with a heavy uppercase headline that fades from white to grey down the stack. A blue primary button and a ghost secondary sit beside a photograph of a gaming setup that bleeds into the dark. Below the hero, deal and community panels continue the navy surfaces, and yellow (#eab308) is kept for small icons and labels.

**Mood:** gaming, dark, energetic, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#060912` | Page ground |
| Surface | `#0a0e1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#000000` · `#9ca3af` · `#eab308` · `#0a0e1a` · `#4b5563` · `#060912` · `#d1d5db` · `#a3e635`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** bold, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]`, `shadow-[0_0_30px_rgba(59,130,246,0.3)]`, `shadow-[0_0_40px_rgba(59,130,246,0.5)]`
- **Content width:** `max-w-[1440px]`, `max-w-[420px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="bg-brand-blue text-white text-sm font-semibold py-2 px-5 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Newsletter signup (`newsletter`)
5. Pricing (`pricing`)
6. Product grid (`product-grid`)
7. Logo cloud (`logo-cloud`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #060912;
  --color-surface: #0a0e1a;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#060912',
    surface: '#0a0e1a',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#eab308',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in uppercase with a white-to-grey vertical fade.
- **Do:** Use the deep navy ground (#060912) for the page and #0a0e1a for raised panels.
- **Do:** Keep yellow (#eab308) for small icons and labels, not for buttons.
- **Don't:** Don't show the hero photograph at full strength; it fades into the navy ground.
- **Don't:** Don't use pure black panels; the surfaces are navy, not black.
- **Don't:** Don't add light backgrounds to sections; the page stays dark throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
