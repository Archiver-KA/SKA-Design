# Design system — Market Intelligence SaaS Landing Page Template

`SN-W00522` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark financial dashboard landing page on #020617 with a white sans headline and a violet-to-lavender gradient on the second line. Pill buttons sit at the top, with a white primary and an outline secondary, and below them data cards show large numerals in a monospaced tracker. The layout is data-first and calm, with the violet carrying the emphasis.

**Mood:** data-first, calm, financial, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#64748b` | Cards, panels, raised areas |
| Text | `#94a3b8` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#6366f1` · `#818cf8` · `#94a3b8` · `#10b981` · `#f59e0b` · `#8b5cf6` · `#34d399` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="text-xs font-medium px-3 py-1.5 bg-white text-slate-950 rounded-full hover:bg-slate-200 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Comparison (`comparison`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #64748b;
  --color-text: #94a3b8;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#64748b',
    ink: '#94a3b8',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the lavender-to-violet gradient (#818cf8).
- **Do:** Use a white primary and an outline secondary button for the hero.
- **Do:** Show metrics as large numerals on dark cards with small labels.
- **Don't:** Don't set body copy in the violet.
- **Don't:** Don't use the amber (#f59e0b) for buttons; it is for chart highlights only.
- **Don't:** Don't fill cards with the mid grey (#64748b); it is for text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
