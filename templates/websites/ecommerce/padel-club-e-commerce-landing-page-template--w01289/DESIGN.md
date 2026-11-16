# Design system — Padel Club E-commerce Landing Page Template

`SN-W01289` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A sporty, high-contrast page with a dark charcoal hero card framed inside a light page, carrying white uppercase headlines and a blue pill button (#006cb7). Below the hero the layout turns light, clean and grid-based. Blue carries every action, and the rest of the colour stays neutral so the product photography stands out.

**Mood:** sporty, crisp, confident, clean, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#006cb7` | Primary action and highlights |
| Second accent | `#008840` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#006cb7` · `#000000` · `#71717a` · `#f8f8f8` · `#008840` · `#94a3b8` · `#f3f4f6` · `#18181b` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 24px · body 10px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-[1600px]`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-3 bg-[#006cb7] text-white px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-widest font-oswald hover:bg-[#005088] transition group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #006cb7;
  --color-accent-2: #008840;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#006cb7',
    accent2: '#008840',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue (#006cb7) for primary buttons and links only
- **Do:** Set hero headlines in bold uppercase sans at large size in white on the dark card
- **Do:** Keep the hero inside a rounded dark card, with light page space around it
- **Don't:** Don't use the green (#008840) for buttons; it is a secondary tone
- **Don't:** Don't put dark sections into the light grid below the hero
- **Don't:** Don't use serif type; all headings are sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
