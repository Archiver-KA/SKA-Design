# Design system — Home Automation Features Overview

`SN-W00443` · ai-saas · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, conventional feature page: a bold navy-blue headline and one solid blue button, with four equal white feature cards in a row, each with a pastel icon tile in blue, green, red or yellow. Cards have soft rounded corners and short bold titles over muted grey copy, and a pale blue panel holds the stats. The layout is clear and uniform, and the colour lives only in the icon tiles.

**Mood:** clear, familiar, light, uniform, approachable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2563eb` · `#dbeafe` · `#4b5563` · `#dcfce7` · `#16a34a` · `#1e40af` · `#374151` · `#1d4ed8` · `#eff6ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 18px · body 18px
- **Weights in use:** bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-8`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-accent: #2563eb;
  --color-accent-2: #16a34a;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#4b5563',
    accent: '#2563eb',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold navy-blue (#1e40af) and the primary button in blue (#2563eb)
- **Do:** Use one pastel icon tile per feature card, in a single hue each
- **Do:** Lay out feature cards as an equal four-up row with short titles
- **Don't:** Don't use the pale yellow tint (#fef9c3) for text; it is only a background tint
- **Don't:** Don't mix icon hues within one card
- **Don't:** Don't use a dark background; the page is light

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
