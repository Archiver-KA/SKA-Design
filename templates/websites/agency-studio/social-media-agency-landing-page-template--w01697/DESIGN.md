# Design system — Social Media Agency Landing Page Template

`SN-W01697` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm light-grey page with a large near-black sans headline and an italic serif final word, 'converts.' Product photography sits in a rounded phone frame at the right, with small floating dots as decoration. The ground is light and beige, with photography carrying the colour.

**Mood:** warm, editorial, soft, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#efeae5` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#000000` · `#6b7280` · `#4b5563` · `#f3f4f6` · `#efeae5` · `#1f2937` · `#d1c8c0` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="relative bg-green-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Services (`services`)
6. Stats band (`stats`)
7. Testimonials (`testimonials`)
8. Feature grid (`features`)
9. Team (`team`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #efeae5;
  --color-surface: #1f2937;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #3b82f6;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#efeae5',
    surface: '#1f2937',
    ink: '#111827',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy near-black sans, with the last word in italic serif.
- **Do:** Frame product photography in a rounded phone-shaped border.
- **Do:** Keep the ground a warm light neutral (#efeae5) with decorative dots in white and black.
- **Don't:** Don't use a black background.
- **Don't:** Don't add saturated colour to the chrome; let the photography provide it.
- **Don't:** Don't set the main headline words in a serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
