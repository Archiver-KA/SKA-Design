# Design system — Vantage Ecommerce Collections Landing Page Template

`SN-W01337` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A soft, product-led storefront hero in which a lavender-to-white gradient panel sits on a white page. The headline is dark navy (#111827) in a bold sans-serif, with the single word 'beautiful' in violet (#a855f7), and a product-card mockup floats over the panel's right edge. The primary action is a white pill on the gradient, and the mockup's black Add to Cart bar supplies the contrast.

**Mood:** soft, polished, product-led, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#ff5f57` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#000000` · `#6b7280` · `#4b5563` · `#9ca3af` · `#f3f4f6` · `#1f2937` · `#581c87` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 80px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[32px]` (32px), `rounded-[40px]` (40px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-2xl`, `max-w-[1440px]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="group inline-flex items-center justify-between gap-4 bg-white text-gray-900 pl-6 pr-2 py-2 rounded-full font-medium text-base shadow-lg shadow-purple-900/5 transition-transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. App download (`app-download`)
5. Articles (`blog-articles`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #ff5f57;
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
    surface: '#f3f4f6',
    ink: '#111827',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#ff5f57',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold sans-serif in navy (#111827), with one word in violet (#a855f7)
- **Do:** Place the lavender gradient inside a rounded panel, not across the full page
- **Do:** Use a black bar for the add-to-cart action in product mockups for contrast
- **Don't:** Don't use violet for more than the highlight word and small accents
- **Don't:** Don't put the gradient behind body copy; keep it behind the hero visual
- **Don't:** Don't use a solid violet button; the primary action is white or black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
