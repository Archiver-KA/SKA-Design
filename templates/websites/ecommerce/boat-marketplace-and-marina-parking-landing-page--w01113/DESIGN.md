# Design system — Boat Marketplace & Marina Parking Landing Page Template

`SN-W01113` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A light, airy marketplace page on a near-white ground, with dark navy headlines and a bright blue accent on the second headline line. The hero is a two-column layout with a large rounded search card on the right and pill filter chips below. Most surfaces are white cards with soft borders, so the page reads as clean and commercial rather than decorative.

**Mood:** clean, commercial, airy, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#e2e8f0` · `#94a3b8` · `#f1f5f9` · `#475569` · `#f8fafc` · `#64748b` · `#0ea5e9` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 20px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-soft`, `shadow-md`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium whitespace-nowrap hover:border-marine-500 hover:text-marine-600 hover:shadow-sm transition-all active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Pricing (`pricing`)
5. Bento grid (`bento-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at large weight in the dark navy (#0f172a)
- **Do:** Keep cards white on the near-white ground with thin light borders
- **Do:** Use the blue accent for the second headline line and primary actions only
- **Don't:** Don't use the red (#ef4444) as a headline colour; it appears only in small tags
- **Don't:** Don't put the search form on a dark panel in the hero
- **Don't:** Don't reduce the large corner radius on the hero search card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
