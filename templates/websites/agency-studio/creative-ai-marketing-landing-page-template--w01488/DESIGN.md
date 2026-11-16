# Design system — Creative AI Marketing Landing Page Template

`SN-W01488` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a soft radial glow of pale lavender-blue behind the hero, which gives the screen its only colour. The headline 'CREATIVE AI' is set in heavy uppercase near-black sans, with a light grey subline beneath and a small rounded label above. Two pill buttons, one near-black and one light grey, sit under the copy. The stance is calm and product-led.

**Mood:** calm, airy, product-led, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#111827` · `#f9fafb` · `#1f2937` · `#4b5563` · `#e5e7eb` · `#374151` · `#6b7280` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium shadow-[0_6px_20px_rgba(0,0,0,0.18)] hover:bg-gray-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Call to action (`cta`)
7. Stats band (`stats`)
8. Logo cloud (`logo-cloud`)
9. Pricing (`pricing`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #000000;
  --color-accent: #111827;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#4b5563',
    line: '#000000',
    accent: '#111827',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase near-black sans, centred, with a light grey subline.
- **Do:** Keep the radial glow pale and behind the hero only, never as a fill on the page.
- **Do:** Use the near-black pill button for the primary action and the light grey pill for secondary.
- **Don't:** Don't add the green (#4ade80) to this page.
- **Don't:** Don't put a dark background behind the hero; the ground is white.
- **Don't:** Don't add more than one glow shape per screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
