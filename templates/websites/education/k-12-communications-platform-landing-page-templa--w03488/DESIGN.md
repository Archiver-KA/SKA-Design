# Design system — K-12 Communications Platform Landing Page Template

`SN-W03488` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A minimal software page on white and pale slate, with Playfair Display headlines in slate (#334155) above sans-serif copy. Feature blocks are light grey cards with thin borders, and the layout is spacious and quiet. Green (#4ade80) appears only as a small success mark, so the page reads as neutral and measured.

**Mood:** minimal, measured, quiet, clean, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#334155` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#334155` · `#f1f5f9` · `#e2e8f0` · `#94a3b8` · `#64748b` · `#475569` · `#f8fafc` · `#4ade80` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-navy-800 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-navy-900 transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Pricing (`pricing`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #334155;
  --color-accent-2: #4ade80;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#334155',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display in slate (#334155)
- **Do:** Keep the ground white and the cards pale grey with thin borders
- **Do:** Use green (#4ade80) only for small status or success marks
- **Don't:** Don't use the green as a button fill
- **Don't:** Don't add heavy shadows to the cards
- **Don't:** Don't set sans body copy in light grey on white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
