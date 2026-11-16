# Design system — Luxury Villa Booking Confirmation Email Template

`SN-W03111` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark booking-confirmation card (#09090b) centred on black, with a large heavy sans-serif headline in two lines: You're going in white and to Split. in orange (#f97316). A green dot and label mark the confirmed state, and the details sit in thin-ruled cells with small uppercase labels above large values. The orange is the single accent, used on the second headline line.

**Mood:** confident, dark, crisp, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#18181b` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#a1a1aa` · `#f97316` · `#ffffff` · `#09090b` · `#71717a` · `#d4d4d8` · `#0ea5e9` · `#52525b` · `#38bdf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Bebas Neue, Inter
- **Scale (largest breakpoint):** h1 96px · h3 24px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-0.5`

**Primary button**

```html
<a class="font-bebas mt-8 w-full rounded bg-white py-3 text-2xl tracking-wide text-black transition-colors hover:bg-zinc-200 uppercase">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Product grid (`product-grid`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #09090b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #18181b;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#09090b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#18181b',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline large and heavy in white, with the second line in orange (#f97316)
- **Do:** Use the green (#22c55e) only for the confirmed status
- **Do:** Divide details into thin-ruled cells with small uppercase labels above large values
- **Don't:** Don't use the orange as a fill; in this design it is a text colour
- **Don't:** Don't set detail values in small type; the dates are large
- **Don't:** Don't use bright borders on the card; the rules are faint

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
