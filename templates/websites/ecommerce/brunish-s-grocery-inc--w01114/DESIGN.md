# Design system — Brunish's Grocery Inc

`SN-W01114` · ecommerce · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A bright grocery storefront on a white ground that uses a deep red (#c8102e) for the logo, the eyebrow label and the main button. The hero headline is Open Sans in heavy uppercase black, with the last word in grey, set beside a full-height photograph of produce. The red is used sparingly, so the page reads as fresh and direct rather than promotional.

**Mood:** fresh, direct, bold, familiar

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#c8102e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#c8102e` · `#e4e4e7` · `#f4f4f5` · `#27272a` · `#71717a` · `#a1a1aa` · `#52525b` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Open Sans
- **Body:** Open Sans
- **Loaded families:** Oswald, Open Sans
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 18px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-[#C8102E] hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold uppercase tracking-wide text-xs md:text-sm transition-transform hover:-translate-y-0.5 shadow-sm flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f4f4f5;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #c8102e;
  --font-display: "Open Sans", sans-serif;
  --font-body: "Open Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f4f4f5',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#c8102e',
  },
  fontFamily: { display: ['Open Sans'], sans: ['Open Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in Open Sans, heavy and uppercase, with the final word in grey
- **Do:** Use the red (#c8102e) for the logo, eyebrow label and primary button only
- **Do:** Place full-height product photography beside the hero copy
- **Don't:** Don't use the red for body text or large backgrounds
- **Don't:** Don't turn the pill-shaped order buttons into square ones
- **Don't:** Don't set the eyebrow label in any colour other than the brand red

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
