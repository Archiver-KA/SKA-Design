# Design system — PetEssentials Vintage E-Commerce Landing Page Template

`SN-W01299` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A heritage page on a cream ground (#f5f2e9) with black Playfair Display headlines and one italic word in deep burgundy for emphasis. The hero photograph sits in a thin-bordered frame, slightly askew, with a circular stamp at its corner, and a thin rule sets off the quote beside the copy. Filled burgundy buttons with a hard offset edge give it a printed, classic feel.

**Mood:** vintage, heritage, warm, editorial, nostalgic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f2e9` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#f5f2e9` · `#efede6` · `#e8e4d9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display, Cinzel
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 14px
- **Weights in use:** bold, normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-[8px_8px_0px_0px_#782221]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-28`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="bg-vintage-red hover:bg-vintage-redlight text-vintage-cream px-10 py-4 font-bold tracking-widest uppercase text-xs transition-all shadow-[4px_4px_0px_0px_#2C2420] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#2C2420] border border-vintage-dark">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Call to action (`cta`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f2e9;
  --color-text: #111111;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f2e9',
    ink: '#111111',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display, with one italic word in burgundy
- **Do:** Keep the hero photograph in a thin-bordered frame, slightly rotated
- **Do:** Use filled burgundy buttons with a hard offset edge for the primary action
- **Don't:** Don't set body copy in the display serif; use a sans for paragraphs
- **Don't:** Don't use bright or cool colours; the palette is cream and burgundy
- **Don't:** Don't remove the frame or the tilt from the hero photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
