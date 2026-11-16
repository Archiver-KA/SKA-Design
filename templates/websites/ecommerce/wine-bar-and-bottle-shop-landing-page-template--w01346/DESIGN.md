# Design system — Wine Bar & Bottle Shop Landing Page Template

`SN-W01346` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A full-bleed hero on a deep burgundy ground (#8b2332), with the page reduced to one centred serif wordmark, 'Vine', in white. Small tracked uppercase text carries the location and the navigation, a hairline rule separates the title from a single line of offerings, and a faint 'Discover' label sits at the foot. The colour is the brand: the first screen is almost all ground and one word.

**Mood:** intimate, classic, monochrome, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#8b2332` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b5e5a` | Secondary copy, captions |
| Border | `#1a1a1a` | Hairlines, dividers, outlines |
| Accent | `#8b2332` | Primary action and highlights |
| Second accent | `#fed7aa` | Supporting highlights |

Palette by frequency of use: `#8b2332` · `#ffffff` · `#f0e0d8` · `#1a1a1a` · `#faf5f0` · `#fca5a5` · `#000000` · `#6b5e5a` · `#450a0a` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Londrina Solid
- **Body:** Manrope
- **Loaded families:** Londrina Solid, Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 36px · h2 48px · h3 30px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-x-4`, `gap-y-4`

**Primary button**

```html
<a class="flex-1 py-3 border border-textMain/10 text-center text-xs uppercase tracking-widest hover:bg-primary hover:text-surface hover:border-primary transition-all font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Map / location (`map-location`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #8b2332;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #6b5e5a;
  --color-border: #1a1a1a;
  --color-accent: #8b2332;
  --color-accent-2: #fed7aa;
  --font-display: "Londrina Solid", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#8b2332',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#6b5e5a',
    line: '#1a1a1a',
    accent: '#8b2332',
    accent2: '#fed7aa',
  },
  fontFamily: { display: ['Londrina Solid'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the hero on a full burgundy ground (#8b2332) with white type only
- **Do:** Set the wordmark in large white serif, centred, with a short hairline rule beneath
- **Do:** Use small tracked uppercase for the location line, navigation and the discover label
- **Don't:** Don't add a second colour to the hero; burgundy and white are the whole system
- **Don't:** Don't set the wordmark in sans-serif; the serif is the identity
- **Don't:** Don't use a filled button on the first screen; the page uses text labels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
