# Design system — Padel 360 Sports Development Template

`SN-W02658` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A hero with a dark grey photographic gradient and large white sans-serif headlines, where the second line is set in lime (#d4f859). Lime is the only colour and is used for the emphasis phrase and the primary button. Below the hero, the page switches to a light ground with a row of partner logos, so dark and light sections alternate. The layout is precise and engineering-like.

**Mood:** precise, engineered, bright-accented, professional, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f6f6f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#d4f859` | Primary action and highlights |

Palette by frequency of use: `#1a1a1a` · `#ffffff` · `#d4f859` · `#e5e5e5` · `#737373` · `#a3a3a3` · `#525252` · `#f6f6f4` · `#f8f9fa` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit
- **Scale (largest breakpoint):** h1 96px · h2 56px · h3 24px · body 18px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.1em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-[0_4px_20px_rgb(0,0,0,0.02)]`, `shadow-[0_8px_30px_rgb(212,248,89,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-12`, `gap-6`

**Primary button**

```html
<a class="flex items-center gap-3 group cursor-pointer bg-[#D4F859] px-8 py-4 rounded-full hover:bg-white transition-colors shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Stats band (`stats`)
5. Timeline (`timeline`)
6. Services (`services`)
7. FAQ (`faq`)
8. Bento grid (`bento-grid`)
9. Process / steps (`how-it-works`)
10. Contact form (`contact-form`)
11. Call to action (`cta`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f6f6f4;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #d4f859;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f6f6f4',
    surface: '#ffffff',
    ink: '#1a1a1a',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#d4f859',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set the emphasis line of each headline in #d4f859 on a dark or grey ground.
- **Do:** Use lime only for the emphasis phrase and the primary button.
- **Do:** Alternate a dark hero with a light #f6f6f4 partner section below it.
- **Don't:** Don't place lime text on white or light grey.
- **Don't:** Don't add a second accent colour.
- **Don't:** Don't use the lime as a section background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
