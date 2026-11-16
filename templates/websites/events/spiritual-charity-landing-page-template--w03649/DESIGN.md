# Design system — Spiritual Charity Landing Page Template

`SN-W03649` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A calm, light charity page on an almost white ground, with a large sans-serif headline set in two lines: the first in near-black and the second in deep green (#047857). A small pill label with a green dot sits above, and the primary action is a near-black filled button beside a plain outlined one. Faint grey partner labels run along the lower edge, and generous spacing keeps the page measured.

**Mood:** calm, light, trustworthy, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#52525b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#047857` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#047857` · `#18181b` · `#ffffff` · `#e4e4e7` · `#71717a` · `#fafafa` · `#a1a1aa` · `#52525b` · `#f4f4f5` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="bg-emerald-700 text-white rounded-md px-3 py-2 hover:bg-emerald-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. About (`about`)
5. Product grid (`product-grid`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Alpine.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #52525b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #047857;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#52525b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#047857',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in deep green (#047857) and the first in near-black
- **Do:** Use the near-black button for the primary action and green only for headlines and status dots
- **Do:** Keep the hero on a white ground with generous spacing
- **Don't:** Don't use the green as a button fill
- **Don't:** Don't add dark photography to the hero
- **Don't:** Don't set partner labels in strong colour; they stay pale

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
