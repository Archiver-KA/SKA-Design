# Design system — FundedTrader Journal Landing Page Template

`SN-W03770` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark trading-workspace hero on a deep navy-black ground [#0b0f14]. A heavy white sans-serif headline ends in a softer grey-blue second line, and a cyan [#00d1ff] primary button leads the actions beside a dark outlined secondary. Small tinted pill badges and a dim framed dashboard panel below suggest a data product, and the colour stays cool throughout.

**Mood:** analytical, focused, cool, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0f14` | Page ground |
| Surface | `#0f1720` | Cards, panels, raised areas |
| Text | `#e6eef6` | Headings and primary copy |
| Muted text | `#9aa8b2` | Secondary copy, captions |
| Border | `#2d3748` | Hairlines, dividers, outlines |
| Accent | `#00d1ff` | Primary action and highlights |
| Second accent | `#ff6b6b` | Supporting highlights |

Palette by frequency of use: `#9aa8b2` · `#00d1ff` · `#0b0f14` · `#e6eef6` · `#0f1720` · `#38d89b` · `#ff6b6b` · `#ffffff` · `#1e293b` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_40px_-10px_rgba(0,209,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="bg-surface border border-border hover:border-accent/50 text-text text-xs font-medium px-4 py-2 rounded-lg transition-all flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Code / terminal (`code-terminal`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0b0f14;
  --color-surface: #0f1720;
  --color-text: #e6eef6;
  --color-muted: #9aa8b2;
  --color-border: #2d3748;
  --color-accent: #00d1ff;
  --color-accent-2: #ff6b6b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0f14',
    surface: '#0f1720',
    ink: '#e6eef6',
    muted: '#9aa8b2',
    line: '#2d3748',
    accent: '#00d1ff',
    accent2: '#ff6b6b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#00d1ff) for the primary button and status badges only
- **Do:** Set the headline in heavy white sans-serif with a grey-blue second line
- **Do:** Keep the dashboard preview as a dim, framed panel below the hero
- **Don't:** Don't use cyan for body text or long links
- **Don't:** Don't add more than one filled button to the hero
- **Don't:** Don't introduce warm colours into the chrome

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
