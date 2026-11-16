# Design system — Mindfulness Course Landing Page Template

`SN-W03506` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A soft, contemplative course page with a warm taupe hero gradient that blends into blurred pink and teal shapes. The headline is set in a light weight with tight spacing, and the supporting copy sits beneath in a muted cream-white. Pink (#f58aa7) marks the header action, and frosted, rounded panels keep the page gentle and unhurried.

**Mood:** gentle, calm, warm, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2d2d2d` | Headings and primary copy |
| Muted text | `#a6946e` | Secondary copy, captions |
| Border | `#f3efea` | Hairlines, dividers, outlines |
| Accent | `#f58aa7` | Primary action and highlights |
| Second accent | `#3cc6c4` | Supporting highlights |

Palette by frequency of use: `#2d2d2d` · `#ffffff` · `#f58aa7` · `#3cc6c4` · `#f3efea` · `#f4c542` · `#faf9f7` · `#fff7ed` · `#a6946e` · `#ca93a1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-soft`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-8`, `gap-16`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center font-poppins font-medium text-sm bg-pink text-white px-6 py-2.5 rounded-full hover:bg-gold transition-all duration-300 shadow-soft hover:shadow-glow hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. About (`about`)
5. Feature grid (`features`)
6. Benefits (`benefits`)
7. Testimonials (`testimonials`)
8. Services (`services`)
9. Timeline (`timeline`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf9f7;
  --color-surface: #ffffff;
  --color-text: #2d2d2d;
  --color-muted: #a6946e;
  --color-border: #f3efea;
  --color-accent: #f58aa7;
  --color-accent-2: #3cc6c4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f7',
    surface: '#ffffff',
    ink: '#2d2d2d',
    muted: '#a6946e',
    line: '#f3efea',
    accent: '#f58aa7',
    accent2: '#3cc6c4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline at light weight with tight spacing
- **Do:** Use pink (#f58aa7) only for the header action and the main call to action
- **Do:** Place content on frosted, rounded panels over the soft gradient
- **Don't:** Don't place saturated colour blocks behind body text
- **Don't:** Don't add hard-edged, high-contrast blocks to the hero
- **Don't:** Don't set the hero copy in a heavy weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
