# Design system — Barbershop Landing Page Template

`SN-W02715` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Barbershop page on a dark black-and-white photograph of clippers and tools, with a heavy uppercase sans headline in white. The only colour is a red (#ef4444) primary button, set inside a dark booking panel with plain inputs and a select, so the red marks the one action. The page is high-contrast and blunt, and the red stays on that action alone.

**Mood:** blunt, high contrast, dark, single accent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#171717` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#000000` · `#a3a3a3` · `#171717` · `#dc2626` · `#525252` · `#ef4444` · `#404040` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Helvetica Neue
- **Body:** Helvetica Neue
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="glow-red flex items-center justify-center w-full h-full border hover:border-red-500 transition-all duration-300 text-sm font-medium px-4 py-2 uppercase tracking-wide bg-red-600 border-red-600 text-white hover:bg-red-600">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. About (`about`)
5. Pricing (`pricing`)
6. Services (`services`)
7. Team (`team`)
8. Gallery / portfolio (`gallery-portfolio`)
9. Testimonials (`testimonials`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #a3a3a3;
  --color-border: #171717;
  --color-accent: #ef4444;
  --font-display: "Helvetica Neue", sans-serif;
  --font-body: "Helvetica Neue", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#a3a3a3',
    line: '#171717',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Helvetica Neue'], sans: ['Helvetica Neue'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans (Helvetica Neue) in white on the dark photograph.
- **Do:** Use red (#ef4444) for the booking button only, as the single accent.
- **Do:** Build booking forms as a dark panel (#171717) with plain inputs and small uppercase labels.
- **Don't:** Don't set the page ground in red (#dc2626); the ground is black.
- **Don't:** Don't use red for headlines or links; it is for the action.
- **Don't:** Don't add rounded corners to the panel or buttons; the edges are square.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
