# Design system — Shimago Pizzeria Restaurant Landing Page Template

`SN-W02999` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark pizzeria hero on a near-black ground with a heavy white Outfit headline, where the second word, PIZZERIA, is set in red (#ef4444). A red filled ORDER NOW button is the main action beside a dark outlined VIEW MENU, and a circular pizza photograph with a floating price chip sits on the right. Red is the only colour, which keeps the page bold and direct.

**Mood:** bold, direct, dark, red-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#dc2626` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#dc2626` · `#ef4444` · `#171717` · `#262626` · `#000000` · `#a3a3a3` · `#737373` · `#f87171` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_0_15px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-red-600 text-white rounded-lg font-semibold tracking-tight overflow-hidden transition-all hover:bg-red-700 shadow-[0_10px_30px_-10px_rgba(220,38,38,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Menu list (`menu-list`)
5. Testimonials (`testimonials`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #dc2626;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #ef4444;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#dc2626',
    surface: '#171717',
    ink: '#f5f5f5',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set the second headline word in red (#ef4444), and the first in white.
- **Do:** Use the red filled button for the primary order action only.
- **Do:** Crop the food photograph into a circle with a floating price chip beside it.
- **Don't:** Don't use red as the page ground.
- **Don't:** Don't set the subtitle in white; it is muted grey.
- **Don't:** Don't add a second accent colour next to the red.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
