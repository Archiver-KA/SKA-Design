# Design system — Padel Club Landing Page Template

`SN-W02659` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, photo-led club page with sections on black (#000000), white headlines and large rounded photo cards. Blue (#1e3a8a) appears as a gradient inside a card rather than as a page colour, so it works as a highlight. The layout uses a bento grid of cards with generous corner radii.

**Mood:** dark, photographic, modern, spacious, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e3a8a` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f3f4f6` · `#0f172a` · `#1e3a8a` · `#2563eb` · `#94a3b8` · `#475569` · `#dcfce7` · `#16a34a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-[1600px]`, `max-w-[70%]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition text-sm font-medium tracking-wide glass-panel font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Bento grid (`bento-grid`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #1e3a8a;
  --color-accent-2: #16a34a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#475569',
    line: '#ffffff',
    accent: '#1e3a8a',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use black (#000000) as the page ground and white for headlines.
- **Do:** Lay out features as a bento grid of large rounded photo cards.
- **Do:** Use the deep blue (#1e3a8a) only as a gradient inside a card or a highlight.
- **Don't:** Don't set the page on light grey (#f3f4f6); the sections are black.
- **Don't:** Don't use the green (#16a34a) as a large fill.
- **Don't:** Don't use square corners on photo cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
