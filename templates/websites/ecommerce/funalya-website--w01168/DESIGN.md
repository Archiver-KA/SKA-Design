# Design system — Funalya Website

`SN-W01168` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A repair-focused page has its hero inside a large rounded panel with a soft pink-to-blue gradient wash. The headline is heavy black sans with its second line in red (#dc2626), and the primary button is red while the purchase action on a product card is blue (#2563eb). Floating cards with soft shadows overlap the hero edge to show a product and an order status.

**Mood:** friendly, practical, soft, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#eff6ff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#6b7280` · `#4b5563` · `#000000` · `#f3f4f6` · `#eff6ff` · `#9ca3af` · `#dc2626` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 80px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[32px]` (32px), `rounded-[40px]` (40px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-[2px]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="group inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full font-medium text-base shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] bg-red-600 text-white shadow-red-900/20 hover:bg-red-700">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Product grid (`product-grid`)
5. Call to action (`cta`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #eff6ff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #dc2626;
  --color-accent-2: #2563eb;
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
    surface: '#eff6ff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#dc2626',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second line of the hero headline in red (#dc2626).
- **Do:** Use red for primary buttons and blue (#2563eb) for purchase actions inside product cards.
- **Do:** Keep the hero content inside the large rounded panel and its gradient wash.
- **Don't:** Don't use blue for hero buttons; blue is reserved for the purchase action.
- **Don't:** Don't remove the rounded corners of the hero panel; the pastel wash is contained by it.
- **Don't:** Don't set the headline in a lighter weight; it is heavy sans.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
