# Design system — Rooftop Restaurant Landing Page Template

`SN-W02994` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark rooftop page with a large white Playfair Display headline, where the second phrase, the Skyline, is set in gold (#fbbf24). A gold-amber fill marks the primary Reserve a Table button, with a dark grey and a dark outlined button beside it. Small spaced capitals list the amenities in a row at the bottom of the hero, which gives the page a night-time, understated tone.

**Mood:** dark, luxurious, serif-led, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#404040` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |

Palette by frequency of use: `#fbbf24` · `#ffffff` · `#404040` · `#737373` · `#d4d4d4` · `#0a0a0a` · `#a3a3a3` · `#f59e0b` · `#171717` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-900 text-sm font-medium rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Timeline (`timeline`)
6. Testimonials (`testimonials`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Booking form (`booking`)
9. Map / location (`map-location`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #404040;
  --color-accent: #fbbf24;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#404040',
    accent: '#fbbf24',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set the gold phrase of the headline in gold (#fbbf24), and the rest in white.
- **Do:** Use the gold fill for the Reserve a Table button only.
- **Do:** Set the amenity row in small spaced capitals below the hero.
- **Don't:** Don't set body text in gold.
- **Don't:** Don't turn the primary button white; the gold is the primary colour.
- **Don't:** Don't set the wordmark in sans-serif; the gold serif is the logo.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
