# Design system — IPS Merch Branded Merchandise Template

`SN-W00472` · ai-saas · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A bright, promotional merch page on a white ground, with a pink-to-purple gradient on one headline phrase and the primary button. Pink-red (#ff5765) and deep purple (#8000a3) carry the energy, while product photos sit in neutral grey cards with bold labels. Inter at heavy weight sets large headlines, and the top bar is a thin gradient strip. The tone is quick, friendly and commercial.

**Mood:** promotional, energetic, friendly, commercial, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#1d2530` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ff5765` | Primary action and highlights |
| Second accent | `#8000a3` | Supporting highlights |

Palette by frequency of use: `#ff5765` · `#ffffff` · `#1d2530` · `#000000` · `#8000a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Outfit
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_2px_16px_rgba(29,37,48,0.02)]`, `shadow-[0_10px_34px_-10px_rgba(255,87,101,0.45)]`, `shadow-[0_2px_16px_rgba(29,37,48,0.06)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-3`, `gap-1.5`, `gap-2.5`

**Primary button**

```html
<a class="bg-[linear-gradient(90deg,#FF5765_0%,#8000A3_100%)] text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-[0_10px_34px_-10px_rgba(255,87,101,0.45)] hover:brightness-110 hover:scale-[1.03] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Product grid (`product-grid`)
7. Comparison (`comparison`)
8. Testimonials (`testimonials`)
9. FAQ (`faq`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #1d2530;
  --color-border: #000000;
  --color-accent: #ff5765;
  --color-accent-2: #8000a3;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#1d2530',
    line: '#000000',
    accent: '#ff5765',
    accent2: '#8000a3',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the pink-to-purple gradient on one headline phrase and the primary button
- **Do:** Keep product photos in neutral grey cards with a bold label
- **Do:** Set the announcement bar as a thin full-width strip
- **Don't:** Don't use the gradient on body text
- **Don't:** Don't add a third strong colour
- **Don't:** Don't use outlined buttons for the primary action

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
