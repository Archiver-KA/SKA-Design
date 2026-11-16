# Design system — Sorrel E-Commerce Landing Page Template

`SN-W01098` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A monochrome fashion store on pale grey, with a large grey gradient hero carrying uppercase white headline type. Buttons are solid near-black pills beside a white outlined pill, so the call to action is clear without colour. A thin light announcement strip runs across the top, and the page feels calm and fashion-led.

**Mood:** monochrome, calm, fashion-led, quiet, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e5e7eb` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Accent | `#111827` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#f3f4f6` · `#6b7280` · `#9ca3af` · `#e5e7eb` · `#000000` · `#374151` · `#f9fafb` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, bold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px)
- **Common gaps:** `gap-4`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Product grid (`product-grid`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e5e7eb;
  --color-surface: #f3f4f6;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-accent: #111827;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e5e7eb',
    surface: '#f3f4f6',
    ink: '#111827',
    muted: '#6b7280',
    accent: '#111827',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in bold uppercase white sans
- **Do:** Use near-black (#111827) pills for the primary button
- **Do:** Keep the page to greys, black and white
- **Don't:** Don't add accent colours to buttons or tags
- **Don't:** Don't set hero copy in light grey over a light area
- **Don't:** Don't replace the pill buttons with square corners

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
