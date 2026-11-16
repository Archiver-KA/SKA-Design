# Design system — Oppa Travel Booking Landing Page Template

`SN-W03123` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light travel marketplace hero: a faint photograph of limestone islands sits behind a white fade, and a white header carries the search field and navigation. The headline is a heavy near-black sans-serif, Your Dream Destinations, with an orange search button and an orange Explore All Trips action. Rounded destination cards fan across the lower band, so orange is the one brand colour.

**Mood:** bright, marketplace, friendly, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#ea580c` · `#000000` · `#f97316` · `#737373` · `#f5f5f5` · `#525252` · `#a3a3a3` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-orange-500/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-y-2`

**Primary button**

```html
<a class="rounded-lg bg-orange-500 px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Stats band (`stats`)
6. Product grid (`product-grid`)
7. Process / steps (`how-it-works`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #ea580c;
  --color-accent-2: #4ade80;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#ea580c',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use the orange (#ea580c) for search and the main action only
- **Do:** Set the headline in heavy near-black sans-serif
- **Do:** Fan destination photographs as rounded cards with small labels
- **Don't:** Don't set photographs behind dark text without the white fade
- **Don't:** Don't use the green (#4ade80) as an accent
- **Don't:** Don't put dark text on the orange buttons; keep it white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
