# Design system — Casa Flow Luxury Interior & Furnishing Template

`SN-W03208` · real-estate · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A calm, light furniture-sourcing page on warm off-white, with small grey text and a large open hero that leaves most of the first screen empty. Pale grey outline cubes run down the right side, and a warm grey pill button marks the main action. The look is quiet and product-led, with restrained accents.

**Mood:** calm, quiet, product-led, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#827a71` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#78716c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e7e5e4` · `#1c1917` · `#827a71` · `#2c2b29` · `#f5f5f4` · `#57534e` · `#78716c` · `#000000` · `#c1b6a9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Montserrat, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 30px · body 16px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2.5`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full bg-[#817872] text-white py-3.5 rounded-xl font-normal tracking-widest uppercase text-sm hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(129,120,114,0.3)] hover:shadow-[0_6px_16px_rgba(28,25,23,0.4)] transform hover:-translate-y-0.5 duration-300 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Stats band (`stats`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #827a71;
  --color-border: #e7e5e4;
  --color-accent: #78716c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#827a71',
    line: '#e7e5e4',
    accent: '#78716c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use warm grey (#78716c) for the primary button and small text
- **Do:** Draw the cube illustration as light outline shapes on the right
- **Do:** Keep the first screen open, with the copy at the lower left
- **Don't:** Don't add saturated colour; the page is off-white and warm grey
- **Don't:** Don't use dark blocks in the hero
- **Don't:** Don't crowd the open hero with extra panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
