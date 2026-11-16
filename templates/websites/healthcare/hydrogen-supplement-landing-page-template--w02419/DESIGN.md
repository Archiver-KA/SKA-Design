# Design system — Hydrogen Supplement Landing Page Template

`SN-W02419` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

The hydrogen supplement page is monochrome: a white ground, a heavy black sans headline whose second line is set in light italic grey (#a3a3a3), and a solid black pill button. A black announcement bar across the top is the only band of contrast, and a white product card with a soft grey gradient stands in for the product. Hierarchy comes from weight, italic and tone.

**Mood:** monochrome, minimal, crisp, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#a3a3a3` · `#262626` · `#737373` · `#e5e5e5` · `#f5f5f5` · `#171717` · `#fafafa` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-black text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Articles (`blog-articles`)
4. Feature grid (`features`)
5. Benefits (`benefits`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #000000;
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
    line: '#262626',
    accent: '#000000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy black sans with a light italic grey second line
- **Do:** Use solid black pill buttons for primary actions
- **Do:** Place the announcement bar in solid black across the top of the page
- **Don't:** Don't add a coloured accent; the page is monochrome
- **Don't:** Don't make the primary button outlined or pale; it stays solid black
- **Don't:** Don't drop the italic grey second line; the contrast of style is part of the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
