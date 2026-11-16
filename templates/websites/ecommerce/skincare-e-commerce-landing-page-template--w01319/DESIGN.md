# Design system — Skincare E-commerce Landing Page Template

`SN-W01319` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A restrained, monochrome skincare page: near-black type and a near-black primary button on a white ground, with the second headline line in mid-grey to create tone rather than colour. The product sits in a soft grey photo card with a small white caption bar. Hierarchy comes from the large Inter headline and generous whitespace, and no saturated colour appears in the first screen.

**Mood:** calm, minimal, monochrome, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#737373` · `#e5e5e5` · `#a3a3a3` · `#f5f5f5` · `#fafafa` · `#262626` · `#d4d4d4` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 24px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="h-12 px-8 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-all active:scale-95 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Product grid (`product-grid`)
5. Bento grid (`bento-grid`)
6. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --color-accent-2: #10b981;
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
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at large size, with the second line in mid-grey (#737373)
- **Do:** Make the primary button near-black (#171717) with a white outline pill as the secondary
- **Do:** Frame product photography in a soft grey card with a small caption bar
- **Don't:** Don't introduce a blue or green accent into the hero; the page is neutral
- **Don't:** Don't add decorative glow shapes behind the product
- **Don't:** Don't centre the headline; it sits left-aligned with the product to the right

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
