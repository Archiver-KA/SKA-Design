# Design system — Candle E-commerce Landing Page Template

`SN-W01119` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A minimal candle store on a warm off-white ground (#faf9f6), with a large serif headline in near-black and one italic word in grey. The hero is centred and carries a single brown (#92400e) button under a small, tracked uppercase eyebrow. Nothing else competes, so the page relies on whitespace and the product photograph to carry the brand.

**Mood:** minimal, warm, calm, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#92400e` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#78716c` · `#faf9f6` · `#e7e5e4` · `#f5f5f4` · `#92400e` · `#57534e` · `#78350f` · `#292524` · `#b45309`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 hover:bg-stone-700 transition-all text-xs font-medium text-[#faf9f6] bg-amber-800 rounded-full px-5 py-2.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. About (`about`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf9f6;
  --color-surface: #f5f5f4;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #92400e;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f6',
    surface: '#f5f5f4',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#92400e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with one italic word in grey
- **Do:** Use the brown (#92400e) for the one primary button and small eyebrow labels
- **Do:** Keep the eyebrow label small, uppercase and tracked
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't crowd the hero; keep generous vertical space above the headline
- **Don't:** Don't set the headline in a heavy sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
