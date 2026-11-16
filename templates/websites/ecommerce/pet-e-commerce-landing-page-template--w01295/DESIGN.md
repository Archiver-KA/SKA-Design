# Design system — Pet E-commerce Landing Page Template

`SN-W01295` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

A quiet pet shop whose hero sits on a flat mid-grey ground (#a1a1aa), which is unusual for a light template. White headlines and white pill buttons carry all the contrast, and the copy, subline and buttons form one centred stack. The navigation sits on a pale grey bar, and no imagery competes with the type.

**Mood:** calm, restrained, soft, centred, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#a1a1aa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#52525b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#fafafa` · `#e4e4e7` · `#f4f4f5` · `#a1a1aa` · `#52525b` · `#d97706` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 14px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3 bg-white text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Product grid (`product-grid`)
6. About (`about`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Articles (`blog-articles`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #a1a1aa;
  --color-surface: #ffffff;
  --color-text: #52525b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#a1a1aa',
    surface: '#ffffff',
    ink: '#52525b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero headline in white on the grey ground, large and centred
- **Do:** Use a white filled pill for the primary action and a thin outlined pill for the second
- **Do:** Stack the headline, subline and buttons as one centred group
- **Don't:** Don't use the amber (#d97706) accent.
- **Don't:** Don't set dark text on the mid-grey hero; the contrast drops
- **Don't:** Don't add photography to the hero; it is type and buttons only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
