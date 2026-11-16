# Design system — Lumora | Luxury Artisan E-commerce Template

`SN-W01205` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A soft, minimal stance: a flat taupe field with a centred, large serif headline in off-white, a small spaced uppercase eyebrow and one off-white button. No imagery appears in the hero, so the ground colour does the work.

**Mood:** minimal, quiet, centred, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf7f2` | Page ground |
| Text | `#2c1a0e` | Headings and primary copy |
| Border | `#faf7f2` | Hairlines, dividers, outlines |
| Accent | `#c9927a` | Primary action and highlights |

Palette by frequency of use: `#2c1a0e` · `#c9927a` · `#faf7f2` · `#e8ddd0` · `#ffffff` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-[0_20px_40px_-15px_rgba(44,26,14,0.12)]`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-8`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="group inline-flex items-center gap-3 bg-[#FAF7F2] text-[#2C1A0E] px-8 py-4 text-sm font-medium tracking-wide hover:bg-[#E8DDD0] hover:text-[#2C1A0E] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. About (`about`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf7f2;
  --color-text: #2c1a0e;
  --color-border: #faf7f2;
  --color-accent: #c9927a;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf7f2',
    ink: '#2c1a0e',
    line: '#faf7f2',
    accent: '#c9927a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use one flat taupe ground for the whole hero and keep the type off-white.
- **Do:** Set the headline in a centred serif at large size, with a short sans-serif subline.
- **Do:** Use a single off-white button with dark text as the only call to action.
- **Don't:** Don't add a second accent colour to the hero.
- **Don't:** Don't use the light cream (#faf7f2) as the hero ground; the taupe field is the ground.
- **Don't:** Don't crowd the hero with imagery; keep it to type and one button.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
