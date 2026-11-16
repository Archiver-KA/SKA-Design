# Design system — BANA Template

`SN-W01108` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A fresh-produce page on warm cream (#fffdf5), with a dark green headline in heavy sans and one word picked out in leaf green (#6fa650) with a yellow underline. Yellow (#f7d83d) fills the hero product card, so the brand colour is large and the text colour stays small. Dark green-black buttons and a dark pill tag keep the page grounded.

**Mood:** fresh, playful, cheerful, natural, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffdf5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1d241a` | Headings and primary copy |
| Muted text | `#74806e` | Secondary copy, captions |
| Border | `#24301f` | Hairlines, dividers, outlines |
| Accent | `#f7d83d` | Primary action and highlights |
| Second accent | `#6fa650` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#24301f` · `#202a1d` · `#1d241a` · `#74806e` · `#52604c` · `#f7d83d` · `#64705e` · `#33402e` · `#fffdf5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Manrope
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="relative flex h-10 items-center gap-2 rounded-full border border-[#24301F]/15 bg-white px-3.5 text-sm font-medium shadow-sm transition hover:border-[#24301F]/30 hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. About (`about`)
6. Logo cloud (`logo-cloud`)
7. Testimonials (`testimonials`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)
10. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fffdf5;
  --color-surface: #ffffff;
  --color-text: #1d241a;
  --color-muted: #74806e;
  --color-border: #24301f;
  --color-accent: #f7d83d;
  --color-accent-2: #6fa650;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffdf5',
    surface: '#ffffff',
    ink: '#1d241a',
    muted: '#74806e',
    line: '#24301f',
    accent: '#f7d83d',
    accent2: '#6fa650',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set one headline word in leaf green (#6fa650) with a yellow underline
- **Do:** Use yellow (#f7d83d) for hero product panels and badges only
- **Do:** Use dark green-black (#24301f) for primary buttons
- **Don't:** Don't put body text on yellow panels
- **Don't:** Don't use leaf green for large fills
- **Don't:** Don't tighten the soft corners on product panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
