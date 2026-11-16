# Design system — Webmaker+ Drupal Landing Page Template

`SN-W00830` · ai-saas · light mode · Sinera Atlas theme `circuit`

## Direction

A clean, light SaaS hero on a pale grey ground with a dark grey headline set in the system sans at 48px. Blue (#0094cc) is the only accent, used for the primary button, and the rest is white cards and grey text. A small product panel on the right uses bordered rows and a soft blurred background, so the page reads as a neat product page rather than a poster.

**Mood:** clean, neutral, product-led, tidy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f6f7f8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#404040` | Headings and primary copy |
| Muted text | `#757575` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#0094cc` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#0094cc` · `#ffffff` · `#404040` · `#757575` · `#111111` · `#f6f7f8` · `#0082b3` · `#b0b0b0` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 16px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-black/5`, `shadow-lg`
- **Content width:** `max-w-6xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-full bg-[#0094CC] text-xs sm:text-sm font-medium text-white hover:bg-[#0082B3] transition-colors px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Product grid (`product-grid`)
5. Services (`services`)
6. Pricing (`pricing`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f6f7f8;
  --color-surface: #ffffff;
  --color-text: #404040;
  --color-muted: #757575;
  --color-border: #000000;
  --color-accent: #0094cc;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f6f7f8',
    surface: '#ffffff',
    ink: '#404040',
    muted: '#757575',
    line: '#000000',
    accent: '#0094cc',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in the system sans at 48px in dark grey
- **Do:** Use the blue (#0094cc) only for the primary button and small highlights
- **Do:** Keep product panels as white cards with thin bordered rows
- **Don't:** Don't add a second accent colour beside the blue
- **Don't:** Don't use a heavy black border on cards
- **Don't:** Don't set the headline in a display font; this template uses the system sans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
