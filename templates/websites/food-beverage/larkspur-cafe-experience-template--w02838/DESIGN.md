# Design system — Larkspur Cafe Experience Template

`SN-W02838` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A minimalist café hero on a mid-grey field, with a white serif headline over three lines and its last phrase in italic. The navigation is a light translucent bar with a serif wordmark and a near-black Order Ahead button, and the hero pairs a white filled button with a thin outline one. The look is neutral and quiet, and the grey field does the work a photograph would do elsewhere.

**Mood:** neutral, quiet, minimal, hospitable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#78716c` · `#e7e5e4` · `#ffffff` · `#fafaf9` · `#a8a29e` · `#f5f5f4` · `#292524` · `#57534e` · `#2a2522`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 16px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="text-sm font-medium bg-stone-900 text-[#FAFAF9] px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Listings (`listings`)
5. Product grid (`product-grid`)
6. Menu list (`menu-list`)
7. Call to action (`cta`)
8. Gallery / portfolio (`gallery-portfolio`)
9. Testimonials (`testimonials`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in white serif with the final phrase in italic
- **Do:** Use a white filled button and a thin outline button side by side
- **Do:** Make the navigation's Order Ahead button near-black (#1c1917)
- **Don't:** Don't add colour; the palette is black, white and grey
- **Don't:** Don't set white body copy over the light grey field; it loses contrast
- **Don't:** Don't set the headline in a sans-serif; the serif is the design's voice

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
