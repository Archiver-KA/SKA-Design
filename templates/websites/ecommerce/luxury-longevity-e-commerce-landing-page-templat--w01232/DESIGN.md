# Design system — Luxury Longevity E-commerce Landing Page Template

`SN-W01232` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A HUD-style longevity page on a near-black ground, with a white headline whose second line is light grey italic. The primary button is acid lime, the only saturated colour on the screen. Small uppercase monospace labels and status bars make the page read like an instrument panel, and a soft glow sits behind the centred headline.

**Mood:** technical, clinical, dark, instrument-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020202` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e3a8a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#000000` · `#374151` · `#1f2937` · `#050505` · `#0a0a0a` · `#080808` · `#9ca3af` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Syne
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Syne
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 12px
- **Weights in use:** light, bold, medium
- **Letter spacing:** `tracking-wide`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_15px_rgba(212,255,0,0.4)]`, `shadow-[0_0_30px_rgba(255,255,255,0.05)]`, `shadow-[0_0_30px_rgba(212,255,0,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-nour-accent text-nour-black text-xs font-mono font-bold tracking-[0.2em] uppercase overflow-hidden rounded-sm transition-transform hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020202;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #1e3a8a;
  --font-display: "Syne", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020202',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#1e3a8a',
  },
  fontFamily: { display: ['Syne'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the primary button in acid lime as the only saturated colour on each screen
- **Do:** Set labels and status readouts in uppercase monospace with wide tracking
- **Do:** Centre headlines and set the second line in a lighter weight or grey italic
- **Don't:** Don't use a navy accent; the page uses lime
- **Don't:** Don't round the buttons heavily; corners are square or slightly rounded
- **Don't:** Don't use a light background for hero sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
