# Design system — Package Tracking App Landing Page Template

`SN-W00621` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A promotional app page built around one large violet (#7847cb) panel that holds a white headline and two phone mockups at the right edge. The rest of the page is white, so the purple reads as a single block rather than a background wash. Plus Jakarta Sans is set large and bold, with black store buttons placed under the copy.

**Mood:** bold, app-promo, violet-block, friendly, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#7847cb` | Primary action and highlights |
| Second accent | `#ffedd5` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#7847cb` · `#171717` · `#737373` · `#a3a3a3` · `#f5f5f5` · `#e5e5e5` · `#000000` · `#111111` · `#585983`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[#7847CB]/20`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-[#7847CB] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#6338ab] transition-colors flex items-center gap-2 shadow-md shadow-[#7847CB]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Schedule (`schedule-agenda`)
7. Articles (`blog-articles`)
8. Product grid (`product-grid`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5e5e5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #7847cb;
  --color-accent-2: #ffedd5;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e5e5e5',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#7847cb',
    accent2: '#ffedd5',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Keep violet (#7847cb) to one large hero panel with white type
- **Do:** Overlap the phone mockups across the panel edge
- **Do:** Use black store buttons with a small caption line above the label
- **Don't:** Don't place a second violet block lower on the page; keep it to the hero
- **Don't:** Don't set violet text on white surfaces
- **Don't:** Don't add busy illustrations beside the phones; the app screens are the illustration

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
