# Design system — Luxury Landscaping Landing Page Template

`SN-W02090` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A landscaping template whose hero is a softly lit bathroom photograph under a dark overlay, with large white headlines and one italic word for emphasis. The only strong colour is the mint-green pill button [#10b981], paired with a plain white text link for the secondary action. Copy sits in a narrow column on the left, leaving the photograph open on the right.

**Mood:** calm, airy, polished, natural, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#10b981` · `#111827` · `#000000` · `#e5e7eb` · `#6b7280` · `#4b5563` · `#059669` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Loaded families:** Playfair Display
- **Scale (largest breakpoint):** h1 88px · h2 14px · h3 48px · body 18px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="group w-full mt-2 bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-medium py-4 px-6 rounded-xl transition-all duration-300 flex justify-center items-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Listings (`listings`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #10b981;
  --color-accent-2: #f59e0b;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
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
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#10b981',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep hero headlines white over a darkened photograph, with one italic word per headline.
- **Do:** Use the green (#10b981) only for the primary pill button.
- **Do:** Pair the primary button with a plain text link as the secondary action.
- **Don't:** Don't use the green for headlines or large fills.
- **Don't:** Don't place body copy on bright areas of the photograph without the overlay.
- **Don't:** Don't add a second filled button beside the primary one.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
