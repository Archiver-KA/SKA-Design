# Design system — Luxury Car Rental Landing Page Template

`SN-W04007` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A bold, dark rental page split into two columns: a heavy uppercase white headline and a model card on the left, and a large photograph of a yellow sports car on the right. Amber (#f59e0b) marks the brand tile, the price line and the slider controls, so it works as a signal colour. The type is a plain sans-serif in white, and the buttons are rectangular.

**Mood:** bold, dark, energetic, direct, showroom

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#6b7280` · `#111111` · `#4b5563` · `#000000` · `#9ca3af` · `#d1d5db` · `#fbbf24` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Helvetica Neue
- **Body:** Helvetica Neue
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** bold, medium, black
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-[1400px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="bg-amber-500 text-black text-xs font-bold tracking-wider px-6 py-3 uppercase hover:bg-amber-400 transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #0a0a0a;
  --color-text: #d1d5db;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --font-display: "Helvetica Neue", sans-serif;
  --font-body: "Helvetica Neue", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#0a0a0a',
    ink: '#d1d5db',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Helvetica Neue'], sans: ['Helvetica Neue'] },
} }
```

## Do and don't

- **Do:** Use amber (#f59e0b) for the price line, labels and controls only
- **Do:** Set headlines in heavy uppercase, white, left aligned
- **Do:** Pair the headline with a photograph of the featured vehicle on the right
- **Don't:** Don't use amber for large background areas
- **Don't:** Don't set the headline in a serif
- **Don't:** Don't round the buttons heavily; keep them rectangular

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
