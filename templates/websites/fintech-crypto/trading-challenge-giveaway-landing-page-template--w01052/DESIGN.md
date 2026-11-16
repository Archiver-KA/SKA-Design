# Design system — Trading Challenge Giveaway Landing Page Template

`SN-W01052` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black giveaway page is built around a very large, heavy white sans headline, with the second line in grey that falls away from the first. A gold-bordered promo strip carries the discount and code, and gold (#c5a059) is the only colour, so the offer is read first. The hero is a photograph of the prize rising from the bottom edge on a dark ground.

**Mood:** bold, promotional, dark, luxurious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c5a059` | Primary action and highlights |
| Second accent | `#312e81` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#171717` · `#c5a059` · `#0a0a0a` · `#d4d4d4` · `#000000` · `#f59e0b` · `#d4af37`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_30px_-10px_rgba(197,160,89,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full py-3 bg-[#C5A059] text-black font-semibold rounded hover:bg-[#D4AF37] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. FAQ (`faq`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #c5a059;
  --color-accent-2: #312e81;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#c5a059',
    accent2: '#312e81',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans, with the second line in grey
- **Do:** Use the gold (#c5a059) only for the promo strip and its code
- **Do:** Place the prize image at the bottom of the hero, fading into the black ground
- **Don't:** Don't use the deep indigo (#312e81) in the hero.
- **Don't:** Don't use gold for body text or navigation; it marks the offer
- **Don't:** Don't outline the promo strip in a second colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
