# Design system — Gold Miner Play-to-Earn Game Template

`SN-W03713` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark charcoal page with a white sans headline and a reward schedule panel, where each tier carries its own small colour chip: grey for common, amber for rare, violet for epic and blue for legendary. The game field is a warm sand-yellow block with a dark outline, the one large area of colour on the page. Emerald (#10b981) marks active states and small highlights.

**Mood:** playful, dense, game-like, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#262626` | Page ground |
| Surface | `#404040` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#404040` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#262626` · `#171717` · `#10b981` · `#f59e0b` · `#404040` · `#ffffff` · `#a3a3a3` · `#fbbf24` · `#000000` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 30px · h2 16px · h3 14px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-md`, `shadow-black/30`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-1`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="w-full rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-medium text-base py-3.5 transition shadow-lg shadow-orange-500/30">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Bento grid (`bento-grid`)
3. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #262626;
  --color-surface: #404040;
  --color-text: #f5f5f5;
  --color-muted: #a3a3a3;
  --color-border: #404040;
  --color-accent: #10b981;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#262626',
    surface: '#404040',
    ink: '#f5f5f5',
    muted: '#a3a3a3',
    line: '#404040',
    accent: '#10b981',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep panel surfaces in charcoal with thin grey borders
- **Do:** Use one colour per reward tier as a small chip, not as a fill
- **Do:** Use emerald (#10b981) for active states and small highlights
- **Don't:** Don't fill whole cards with tier colours
- **Don't:** Don't use a light page background
- **Don't:** Don't set the headline in a serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
