# Design system — Luxury Fashion E-commerce Website Template

`SN-W01222` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A quiet luxury fashion stance: an off-white page with a tight serif headline in near-black, a grey uppercase eyebrow and short body copy. The hero photograph sits in a tall arched frame on the right, showing a full-length black suit, and the announcement bar is pale pink with dark text. Solid black and outline buttons keep the controls restrained.

**Mood:** quiet, tailored, editorial, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e7e5e4` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#78716c` · `#e7e5e4` · `#57534e` · `#f5f5f4` · `#a8a29e` · `#f43f5e` · `#292524` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-stone-900/10`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white text-sm uppercase tracking-widest font-medium hover:bg-stone-800 transition-all duration-300 text-center">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Call to action (`cta`)
6. About (`about`)
7. Product grid (`product-grid`)
8. Feature grid (`features`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e7e5e4;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #f43f5e;
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
    surface: '#e7e5e4',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#f43f5e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a tight serif at large size, in near-black.
- **Do:** Frame the hero photograph in a tall shape with a rounded top.
- **Do:** Keep the announcement bar pale pink with dark uppercase text, and use black for the primary button.
- **Don't:** Don't use the rose (#f43f5e) for buttons or large areas; the pink is a pale bar tint only.
- **Don't:** Don't crop the hero photograph into a square frame; the arch is the signature.
- **Don't:** Don't add a second button colour; primary is black and the secondary is an outline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
