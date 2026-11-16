# Design system — Luxury Fragrance E-commerce Template

`SN-W01226` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A minimal, object-led stance: a monochrome still-life photograph fills the right side and fades into a near-white page, while a tight sans-serif headline in black sits on the left. Black and pale grey buttons sit side by side, and the announcement bar is black with small tracked uppercase text. The palette is neutral throughout, so the object and the type do the work.

**Mood:** minimal, monochrome, austere, sculptural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#18181b` · `#71717a` · `#a1a1aa` · `#f4f4f5` · `#ffffff` · `#fafafa` · `#e4e4e7` · `#52525b` · `#27272a` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-2xl`, `shadow-zinc-200`
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-16`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-10 py-4 text-[11px] font-medium tracking-widest uppercase text-white bg-zinc-900 hover:bg-zinc-800 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Articles (`blog-articles`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #f4f4f5;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
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
    line: '#f4f4f5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in tight sans-serif at large size, in black, on the left.
- **Do:** Pair a solid black primary button with a pale grey secondary button.
- **Do:** Use monochrome still-life photography and let it fade into the page background.
- **Don't:** Don't add colour to the photography; the image is grey.
- **Don't:** Don't set the headline in a serif; use sans-serif.
- **Don't:** Don't use a coloured button; the palette is black and grey only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
