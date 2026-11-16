# Design system — Habit Tracking Landing Page Template

`SN-W02384` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A neo-brutalist app hero on a cream ground, with heavy black sans-serif type and a pink highlight block behind one headline line. Product cards and a score panel carry thick black outlines and hard offsets, and the mint and blue chips add small bursts of colour. The page is playful and blunt, built on outlines and flat fills rather than soft depth.

**Mood:** neo-brutalist, playful, bold, blunt, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffdf7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#86efac` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#71717a` · `#27272a` · `#fafafa` · `#86efac` · `#52525b` · `#fffdf7` · `#60a5fa` · `#fde047`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 20px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="bg-black text-white px-6 py-2.5 text-sm font-bold rounded-lg border-2 border-black brutal-shadow brutal-hover transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Logo cloud (`logo-cloud`)
5. Dashboard preview (`dashboard-preview`)
6. Integrations (`integrations`)
7. Sign-in form (`auth-form`)
8. Comparison (`comparison`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fffdf7;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #71717a;
  --color-border: #000000;
  --color-accent: #60a5fa;
  --color-accent-2: #86efac;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffdf7',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#71717a',
    line: '#000000',
    accent: '#60a5fa',
    accent2: '#86efac',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy Inter with one line on a flat highlight block.
- **Do:** Outline cards and buttons in black at a consistent thick weight.
- **Do:** Use the mint (#86efac) and blue (#60a5fa) only for small chips and data bars.
- **Don't:** Don't soften the outlines or use blurred shadows; depth comes from hard offsets.
- **Don't:** Don't set the page on the yellow (#fef08a); the ground is cream.
- **Don't:** Don't use gradients on the cards or buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
