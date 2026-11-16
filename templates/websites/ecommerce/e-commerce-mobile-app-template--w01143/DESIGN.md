# Design system — E-commerce Mobile App Template

`SN-W01143` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A mobile furniture shop on a light grey ground with white cards and black type. The hero is a dark rounded card with a large white title and category chips, and the product grids below use white cards with a small blue add button in the corner. Yellow star ratings are the only warm tone, so the app reads clean, product-first and quiet.

**Mood:** clean, product-first, quiet, mobile

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#000000` · `#6b7280` · `#ffffff` · `#374151` · `#2563eb` · `#f3f4f6` · `#facc15` · `#e5e7eb` · `#dbeafe` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** SF Pro Text
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 30px · h3 48px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-1`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="flex-shrink-0 px-4 py-2 rounded-full font-medium bg-blue-600 text-white font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #2563eb;
  --color-accent-2: #facc15;
  --font-display: "Geist", sans-serif;
  --font-body: "SF Pro Text", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#2563eb',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Geist'], sans: ['SF Pro Text'] },
} }
```

## Do and don't

- **Do:** Use white cards on the light grey ground (#f3f4f6) for product grids
- **Do:** Set the blue (#2563eb) only on small add buttons and active tabs
- **Do:** Keep the hero as one dark rounded card with a large white title
- **Don't:** Don't use the yellow (#facc15) for buttons; it is for ratings only
- **Don't:** Don't put product text on photographs without a dark panel
- **Don't:** Don't crowd the category row; keep the chips on one line

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
