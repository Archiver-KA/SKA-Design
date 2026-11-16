# Design system — Responsive Navigation and Social Sidebar

`SN-W04272` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, natural skincare page on a white ground with a large dark serif wordmark and headline. Green (#16a34a) is the single colour, used for the primary add-to-cart button and the selected size marker. Small grey body copy and a floating social rail keep the layout airy, with the product shown large on the right.

**Mood:** natural, airy, light, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#16a34a` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#16a34a` · `#ffffff` · `#111827` · `#4b5563` · `#facc15` · `#4ade80` · `#374151` · `#f9fafb` · `#1f2937` · `#15803d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-8`, `gap-12`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 transition-all duration-200 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Bento grid (`bento-grid`)
5. Call to action (`cta`)
6. Product grid (`product-grid`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-border: #ffffff;
  --color-accent: #16a34a;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#1f2937',
    line: '#ffffff',
    accent: '#16a34a',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the green (#16a34a) only for the primary purchase button and selected states
- **Do:** Set the headline in a large dark serif, with body copy in a small grey sans
- **Do:** Keep generous white space around the hero text and the product block
- **Don't:** Don't add a second accent colour beside the green
- **Don't:** Don't set the main headline in a sans-serif
- **Don't:** Don't fill the hero with dark panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
