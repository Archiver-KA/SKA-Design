# Design system — Aesthetic Laser E-commerce Landing Page Template

`SN-W01072` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, technical storefront on near-black (#050505), with one saturated green (#22c55e) doing the accent work. Headlines are large white Inter with one phrase picked out in the same green, which is the signature move. Product photography sits in rounded frames, and the header call to action is a light outlined button beside small text links.

**Mood:** technical, dark, clinical, confident, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#22c55e` · `#4ade80` · `#000000` · `#171717` · `#86efac` · `#262626` · `#16a34a` · `#ef4444` · `#14532d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_rgba(34,197,94,0.4)]`, `shadow-[0_0_25px_rgba(34,197,94,0.6)]`, `shadow-[0_0_20px_rgba(34,197,94,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-green-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Stats band (`stats`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Pick out one phrase in each headline in green (#22c55e)
- **Do:** Keep the header small: thin text links and one outlined action
- **Do:** Use rounded frames for product imagery with a green badge for offers
- **Don't:** Don't use green for large background fills
- **Don't:** Don't set headlines in more than one weight
- **Don't:** Don't add decorative glows behind the product images

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
