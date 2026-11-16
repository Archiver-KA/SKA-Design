# Design system — Luxury Villa Investment Landing Page Template

`SN-W00995` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pale, airy coastal real estate page uses a soft gradient from white to pale blue-grey in the hero. A deep teal (#2da4a8) is reserved for the header inquiry button, and a bold serif wordmark and a spacious header set the tone. Colour is kept to one teal action on light surfaces.

**Mood:** airy, calm, coastal, quiet, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#4b5563` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#2da4a8` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#f3f4f6` · `#2da4a8` · `#4b5563` · `#e5e7eb` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 12px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-4`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="w-full py-4 bg-ocean-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-ocean-dark transition-colors rounded shadow-lg shadow-ocean-primary/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Call to action (`cta`)
6. Listings (`listings`)
7. Stats band (`stats`)
8. Bento grid (`bento-grid`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #4b5563;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #2da4a8;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#4b5563',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#2da4a8',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the teal (#2da4a8) only for the header inquiry button.
- **Do:** Keep the header light and set the wordmark in a bold serif.
- **Do:** Keep the page on white and pale grey surfaces.
- **Don't:** Don't add dark sections; the page is built on light surfaces.
- **Don't:** Don't use teal for body text.
- **Don't:** Don't place a dark photograph behind the header.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
