# Design system — Art Therapy Studio Landing Page Template

`SN-W02317` · healthcare · light mode · Sinera Atlas theme `calm` · language `es`

## Direction

A pale page with a heavy near-black sans headline, where one word, sana, is set in terracotta (#d87744), the only warm accent. A small rounded tag sits above the headline, a terracotta button appears in the nav, and a slightly tilted photograph of painting supplies sits in a rounded frame at right. The warm accent against neutrals keeps the page creative and calm.

**Mood:** creative, warm, calm, approachable, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#111827` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#d87744` | Primary action and highlights |
| Second accent | `#5b9aa9` | Supporting highlights |

Palette by frequency of use: `#d87744` · `#ffffff` · `#111827` · `#7a9b76` · `#4b5563` · `#f3f4f6` · `#e5e7eb` · `#374151` · `#1f2937` · `#e6a83c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Playfair Display, Bricolage Grotesque, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 30px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 bg-[#D87744] hover:bg-[#c26538] text-base font-semibold py-3.5 px-8 rounded-xl transition-all hover:scale-105 shadow-md shadow-[#D87744]/25 text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Call to action (`cta`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #000000;
  --color-text: #111111;
  --color-muted: #111827;
  --color-border: #e5e7eb;
  --color-accent: #d87744;
  --color-accent-2: #5b9aa9;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#000000',
    ink: '#111111',
    muted: '#111827',
    line: '#e5e7eb',
    accent: '#d87744',
    accent2: '#5b9aa9',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the accent word in the headline in terracotta (#d87744)
- **Do:** Use terracotta for the nav button and the accent word only
- **Do:** Keep the hero photograph in a rounded frame with a slight tilt
- **Don't:** Don't use the terracotta as a page background; the ground is off-white
- **Don't:** Don't add a second warm colour to the headline
- **Don't:** Don't set the headline in a light weight; it is heavy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
