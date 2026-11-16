# Design system — Coffee Brand Landing Page Template

`SN-W02876` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Editorial and tonal. The hero is a grey field that darkens toward the bottom, with a large white centred headline and a short italic line below it that adds a conversational aside. The single clear action is a light pill button. The dark brown SHOP pill in the light nav supplies the only solid colour, so the page feels calm and confident rather than bright.

**Mood:** tonal, editorial, calm, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2c2420` | Headings and primary copy |
| Border | `#2c2420` | Hairlines, dividers, outlines |
| Accent | `#2c2420` | Primary action and highlights |
| Second accent | `#009246` | Supporting highlights |

Palette by frequency of use: `#2c2420` · `#faf9f6` · `#ffffff` · `#ebe7df` · `#f0eee6` · `#e6e2d6` · `#4a3b32` · `#000000` · `#1a1614` · `#f5f2eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="inline-block bg-[#FAF9F6] text-[#2C2420] text-sm md:text-base px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white transition-all transform hover:scale-105 shadow-xl">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Feature grid (`features`)
5. Logo cloud (`logo-cloud`)
6. Testimonials (`testimonials`)
7. Product grid (`product-grid`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf9f6;
  --color-surface: #ffffff;
  --color-text: #2c2420;
  --color-border: #2c2420;
  --color-accent: #2c2420;
  --color-accent-2: #009246;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f6',
    surface: '#ffffff',
    ink: '#2c2420',
    line: '#2c2420',
    accent: '#2c2420',
    accent2: '#009246',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline large, white and centred over a grey field that darkens downward
- **Do:** Use a single italic line under the headline as a conversational aside
- **Do:** Make the one primary action a light pill and keep the nav solid dark brown (#2c2420)
- **Don't:** Don't use the red or green roles as accents; neither appears in the first screen
- **Don't:** Don't set the italic line in a bold weight
- **Don't:** Don't put a dark button on the grey hero field

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
