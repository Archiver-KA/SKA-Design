# Design system — Slomo Media | Done-For-You Content for Experience Brands

`SN-W02675` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A light, warm agency page on an off-white ground, with a large dark sans-serif headline whose second line is set in a tan-to-brown gradient. The peach (#e3a66a) fills the primary button, and a thin tan frame around the hero adds a soft editorial border. Body copy is grey on the light ground. The look is polished and soft, with the warm gradient doing most of the emphasis work.

**Mood:** warm, polished, soft, editorial, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e7e5e4` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#e3a66a` | Primary action and highlights |
| Second accent | `#15803d` | Supporting highlights |

Palette by frequency of use: `#e3a66a` · `#ffffff` · `#4b5563` · `#000000` · `#f5f5f4` · `#e7e5e4` · `#1c1917` · `#6b7280` · `#fafaf9` · `#fff7ed`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e3a66a] to-[#d89555] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-200/50 transition-all duration-300 hover:scale-105 hover:shadow-orange-300 hover:shadow-xl w-full sm:w-auto overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Timeline (`timeline`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. About (`about`)
8. Contact form (`contact-form`)
9. Footer (`footer`)
10. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e7e5e4;
  --color-text: #000000;
  --color-muted: #4b5563;
  --color-border: #f5f5f4;
  --color-accent: #e3a66a;
  --color-accent-2: #15803d;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e7e5e4',
    ink: '#000000',
    muted: '#4b5563',
    line: '#f5f5f4',
    accent: '#e3a66a',
    accent2: '#15803d',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in a tan-to-brown gradient on the off-white ground.
- **Do:** Use the peach (#e3a66a) for the primary button only.
- **Do:** Frame the hero with a thin tan border and rounded corners.
- **Don't:** Don't use the peach as the page background; it is for buttons and emphasis.
- **Don't:** Don't use the dark green (#15803d) for any large area.
- **Don't:** Don't add a second warm accent to the same view.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
