# Design system — Building Materials Business Website Template

`SN-W03847` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark brown-grey hero with a centred white headline, where the second line is set in a red-to-pink gradient. A small pill label above the headline reads as a trust mark, and a solid red button sits beside a dark grey outline button. The white navigation bar sits above the dark hero, and a cyan quote button adds one cool note at the top of the page.

**Mood:** sturdy, bold, trustworthy, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#292524` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#44403c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#0891b2` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#44403c` · `#dc2626` · `#292524` · `#e7e5e4` · `#f5f5f4` · `#ef4444` · `#fafaf9` · `#fecaca`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Merriweather, Manrope, Quicksand
- **Scale (largest breakpoint):** h1 36px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3 rounded-lg transition-all shadow-lg hover:-translate-y-1 text-white font-playfair font-medium hover:bg-red-500 hover:shadow-red-500/25 bg-red-600">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Product grid (`product-grid`)
6. Services (`services`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Contact form (`contact-form`)
9. Booking form (`booking`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #292524;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #44403c;
  --color-border: #e7e5e4;
  --color-accent: #dc2626;
  --color-accent-2: #0891b2;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#292524',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#44403c',
    line: '#e7e5e4',
    accent: '#dc2626',
    accent2: '#0891b2',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the red-to-pink gradient only.
- **Do:** Use the solid red for the primary button and the active navigation item.
- **Do:** Keep the hero on the dark brown-grey ground with white headline type.
- **Don't:** Don't apply the gradient to body copy or small labels.
- **Don't:** Don't place the cyan quote button beside the red primary action.
- **Don't:** Don't put a light panel on the dark hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
