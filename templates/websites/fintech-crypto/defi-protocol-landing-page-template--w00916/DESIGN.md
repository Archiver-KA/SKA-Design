# Design system — DeFi Protocol Landing Page Template

`SN-W00916` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark DeFi protocol hero on near-black, where a saturated blue [#0069d0] carries the second headline line and the primary button. Stats sit in a row along the bottom edge, with bold numerals above small labels. A glass card on the right shows a blue chart and one large total-value figure, so the product reads as a finance dashboard rather than an abstract image.

**Mood:** institutional, dark, blue-led, data-rich

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020204` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0069d0` | Primary action and highlights |
| Second accent | `#0069d0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#d4d4d8` · `#020204` · `#000000` · `#27272a` · `#18181b` · `#c084fc` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-brand-900/20`, `shadow-[0_0_20px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="relative overflow-hidden group bg-white text-black text-xs font-semibold px-4 py-2 rounded-lg hover:bg-brand-50 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020204;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #0069d0;
  --color-accent-2: #0069d0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020204',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#0069d0',
    accent2: '#0069d0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line and the primary button in blue (#0069d0)
- **Do:** Place stats in a bottom row with bold numerals and small labels
- **Do:** Keep the glass product card on the right with one chart and one large figure
- **Don't:** Don't add purple accents; they do not appear in the first screen
- **Don't:** Don't set the second headline line in white; it is blue
- **Don't:** Don't crowd the stats row with more than three or four figures

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
