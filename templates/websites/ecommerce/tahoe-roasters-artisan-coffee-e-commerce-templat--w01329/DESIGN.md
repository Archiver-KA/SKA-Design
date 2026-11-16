# Design system — Tahoe Roasters Artisan Coffee E-commerce Template

`SN-W01329` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A minimal coffee roaster page on a near-white ground (#fafafa), with a faint grey radial glow behind the centred headline. The headline is large, tight-tracked sans-serif in near-black over a short paragraph, and the primary action is a near-black pill with a plain text link beside it. No colour appears in the first screen; space and type weight carry the page.

**Mood:** minimal, airy, centred, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |
| Second accent | `#b45309` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#e4e4e7` · `#71717a` · `#fafafa` · `#52525b` · `#d4d4d8` · `#f4f4f5` · `#27272a` · `#3f3f46` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-zinc-900 text-zinc-50 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Newsletter signup (`newsletter`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #f4f4f5;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
  --color-accent-2: #b45309;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#f4f4f5',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#18181b',
    accent2: '#b45309',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the hero headline in heavy Inter at large size, with tight tracking
- **Do:** Use a near-black pill (#18181b) for the primary action and a plain text link for the second
- **Do:** Keep the background near-white (#fafafa) with a soft grey glow and no colour blocks
- **Don't:** Don't add a red or brown accent; the first screen has no colour
- **Don't:** Don't left-align the hero; the centred layout is part of the look
- **Don't:** Don't put a background image behind the headline; the glow is the only texture

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
