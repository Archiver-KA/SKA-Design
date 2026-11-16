# Design system — Fragrance Discovery E-commerce Landing Page Template

`SN-W01166` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A catalogue page on a warm cream ground (#f3f0e6) with near-black green type (#0a2218) and hairline rules that divide the filter panel from the product grid. Lime (#d4f02e) marks active filters and selected states, the one saturated colour in the layout, and white product cards sit on the cream with thin dark outlines. Page titles are heavy uppercase sans, which gives the page an editorial catalogue tone.

**Mood:** editorial, fresh, structured, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f0e6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0a2218` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#0a2218` | Hairlines, dividers, outlines |
| Accent | `#d4f02e` | Primary action and highlights |

Palette by frequency of use: `#0a2218` · `#ffffff` · `#d4f02e` · `#6b7280` · `#f3f0e6` · `#f3f4f6` · `#8fb339` · `#fee2e2` · `#dc2626` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 48px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[2px_2px_0px_0px_rgba(10,34,24,1)]`, `shadow-[6px_6px_0px_0px_rgba(10,34,24,1)]`, `shadow-sm`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="flex items-center gap-1 rounded border border-[#0A2218] bg-[#D4F02E] px-2 py-1 text-[10px] font-bold uppercase transition-colors hover:bg-red-100 hover:line-through">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f3f0e6;
  --color-surface: #ffffff;
  --color-text: #0a2218;
  --color-muted: #6b7280;
  --color-border: #0a2218;
  --color-accent: #d4f02e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f0e6',
    surface: '#ffffff',
    ink: '#0a2218',
    muted: '#6b7280',
    line: '#0a2218',
    accent: '#d4f02e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#d4f02e) only for active filter chips and selected states.
- **Do:** Set page titles in heavy uppercase Inter, with a small breadcrumb above them.
- **Do:** Outline product cards in the dark green (#0a2218) on the cream ground.
- **Don't:** Don't use lime for buttons or text; it marks state, not action.
- **Don't:** Don't remove the hairline rules between the filter panel and the grid; the grid is structured by them.
- **Don't:** Don't set the page ground in white; the warm cream is the base of the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
