# Design system — Jewellery E-commerce Landing Page Template

`SN-W01193` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A soft, feminine luxury stance: a cream page, black type and a blush-pink announcement bar above a split hero. The headline is a large serif with an italic second line, and the right half is a close product photograph on a pink backdrop. Solid black buttons and a thin outline secondary keep the controls crisp.

**Mood:** soft, elegant, feminine, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffcfa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e0e7ff` | Hairlines, dividers, outlines |
| Accent | `#d4a5a5` | Primary action and highlights |
| Second accent | `#312e81` | Supporting highlights |

Palette by frequency of use: `#d4a5a5` · `#ffffff` · `#171717` · `#000000` · `#525252` · `#737373` · `#262626` · `#a3a3a3` · `#eef2ff` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="w-full bg-[#D4A5A5] text-sm font-medium py-3 hover:bg-[#c49292] transition-colors text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Testimonials (`testimonials`)
5. Call to action (`cta`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fffcfa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e0e7ff;
  --color-accent: #d4a5a5;
  --color-accent-2: #312e81;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffcfa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#525252',
    line: '#e0e7ff',
    accent: '#d4a5a5',
    accent2: '#312e81',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blush pink (#d4a5a5) for the announcement bar and product backdrops, not for buttons.
- **Do:** Set headlines in a serif, with an italic second line.
- **Do:** Use solid black for the primary button and an outlined button beside it.
- **Don't:** Don't use the indigo (#312e81) accent; nothing on the first screen uses it.
- **Don't:** Don't place text over the product photograph; keep copy on the cream half.
- **Don't:** Don't use heavy shadows or gradients on the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
