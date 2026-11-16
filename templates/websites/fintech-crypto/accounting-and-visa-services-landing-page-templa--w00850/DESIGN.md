# Design system — Accounting & Visa Services Landing Page Template

`SN-W00850` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A full-bleed yellow hero (#ffd026) with a large black Inter headline and a black primary pill beside a pale cream secondary. A rounded white card stack and a dark status panel on the right show a permit timeline, so the yellow is the single brand colour. The layout is bold, flat and direct, with no gradients.

**Mood:** bold, flat, direct, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#ffd026` | Primary action and highlights |
| Second accent | `#15803d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ffd026` · `#000000` · `#a3a3a3` · `#f5f5f5` · `#737373` · `#dcb00a` · `#262626` · `#fafafa` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-2.5`

**Primary button**

```html
<a class="bg-[#FFD026] text-black font-semibold px-8 py-4 rounded-full hover:bg-white transition-all hover:scale-105 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Team (`team`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #ffd026;
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
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#ffd026',
    accent2: '#15803d',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#ffd026) as the full hero background or as the primary highlight
- **Do:** Set the headline in Inter at 72px in black
- **Do:** Use a black pill for the primary button and a cream pill for the secondary
- **Don't:** Don't add gradients to the yellow hero
- **Don't:** Don't put body copy on the yellow in a grey tone
- **Don't:** Don't use the green from the palette in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
