# Design system — F&B Brand Identity Studio Landing Page Template

`SN-W02013` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm off-white page with a high-contrast black-and-white photograph of a cocktail, placed beside a serif headline in dark ink. Cormorant Garamond sets the headline large and light, with one italic word in muted grey for emphasis. Small details carry the brand: a rotating circular badge over the photo and a floating card with a short title and body. Colour is almost absent, and the warmth comes from the cream ground and the photograph's tone.

**Mood:** refined, warm, editorial, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#ebe8e0` | Cards, panels, raised areas |
| Text | `#2c2926` | Headings and primary copy |
| Muted text | `#8c867d` | Secondary copy, captions |
| Border | `#ebe8e0` | Hairlines, dividers, outlines |
| Accent | `#2c2926` | Primary action and highlights |

Palette by frequency of use: `#2c2926` · `#fdfcf8` · `#57534e` · `#8c867d` · `#ebe8e0` · `#d6d3cd` · `#ffffff` · `#f5f4f0` · `#3e3832` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-16`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="w-full bg-[#FDFCF8] text-[#2C2926] p-4 text-sm uppercase tracking-widest font-medium hover:bg-[#D6D3CD] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Testimonials (`testimonials`)
5. Services (`services`)
6. Feature grid (`features`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #ebe8e0;
  --color-text: #2c2926;
  --color-muted: #8c867d;
  --color-border: #ebe8e0;
  --color-accent: #2c2926;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#ebe8e0',
    ink: '#2c2926',
    muted: '#8c867d',
    line: '#ebe8e0',
    accent: '#2c2926',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at large size, light weight, with one italic word
- **Do:** Use black-and-white or low-saturation photography for food and product
- **Do:** Use dark pill buttons with light text for the primary action
- **Don't:** Don't add a saturated accent colour; the palette is cream and ink
- **Don't:** Don't set the headline in a bold weight
- **Don't:** Don't place the circular badge over the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
