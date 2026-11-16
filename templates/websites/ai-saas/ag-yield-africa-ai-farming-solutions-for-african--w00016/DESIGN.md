# Design system — AG Yield Africa | AI Farming Solutions for African Farmers

`SN-W00016` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

The first screen is a large lime (#ccf32f) rounded panel on a white page, carrying a heavy black sans headline, 'Better harvests, less guesswork.', and two angled phone mockups. Black solid and outline buttons sit on the lime, and a hand-drawn arrow adds a playful touch. The lime works as a full-bleed hero block rather than as small accents.

**Mood:** bold, fresh, friendly, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#ccf32f` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#ccf32f` · `#737373` · `#262626` · `#a3a3a3` · `#fafafa` · `#e5e5e5` · `#f5f5f5` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex-1 bg-[#ccf32f] hover:bg-[#bce325] text-black font-medium py-3 rounded-xl transition-colors text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Articles (`blog-articles`)
5. Benefits (`benefits`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Dashboard preview (`dashboard-preview`)
8. Pricing (`pricing`)
9. FAQ (`faq`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #ccf32f;
  --color-accent-2: #22c55e;
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
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#ccf32f',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use the lime (#ccf32f) as a large hero panel with black text on it
- **Do:** Set the headline in heavy black sans with tight line spacing
- **Do:** Show product screens as angled phone mockups overlapping the panel edge
- **Don't:** Don't use lime for text on white backgrounds
- **Don't:** Don't add gradient fills to the hero panel
- **Don't:** Don't use more than one lime block per screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
