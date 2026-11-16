# Design system — Neighbourhood Café Landing Page Template

`SN-W02953` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A plain, modern cafe page on white (#ffffff) with a tightly set, heavy near-black sans headline and muted grey body copy. The primary action is a solid near-black pill, and the secondary is a pale outline pill beside it. The layout is a text column on the left and a tall image frame on the right, so the page is typographic and very restrained.

**Mood:** plain, warm, neighbourly, uncluttered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#e5e5e5` · `#737373` · `#d4d4d4` · `#f5f5f5` · `#fafafa` · `#a3a3a3` · `#262626` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Call to action (`cta`)
5. Feature grid (`features`)
6. Testimonials (`testimonials`)
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
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
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
    line: '#e5e5e5',
    accent: '#171717',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in tight-tracked heavy sans in near-black
- **Do:** Use the solid near-black pill for the primary button and a pale outline for the secondary
- **Do:** Keep body copy in muted grey at a readable size with generous line height
- **Don't:** Don't add colour accents; the page is black, white and grey
- **Don't:** Don't use a second typeface
- **Don't:** Don't leave the image frame empty in production; it shows a broken placeholder here

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
