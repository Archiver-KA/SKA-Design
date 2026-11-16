# Design system — Luxury Fashion E-commerce Template

`SN-W01220` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

An editorial, photographic stance: a full-bleed fashion photograph under a white header, with a white serif headline centred over the image and a small spaced eyebrow above it. A solid white and an outline button sit side by side, and a dark floating pill in the lower right holds the section tabs. The photograph carries the mood, and the interface stays black, white and grey.

**Mood:** editorial, photographic, calm, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#18181b` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#f4f4f5` · `#52525b` · `#a1a1aa` · `#d4d4d8` · `#e4e4e7` · `#09090b` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 36px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_0_2px_white]`, `shadow-xl`
- **Content width:** `max-w-[1920px]`, `max-w-2xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="px-4 py-2 text-xs font-medium rounded-md text-zinc-600 hover:bg-zinc-100 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f4f4f5;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #18181b;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f4f4f5',
    ink: '#18181b',
    muted: '#71717a',
    line: '#18181b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white serif, centred over the photograph.
- **Do:** Pair a solid white primary button with an outline secondary button on the image.
- **Do:** Use a small dark floating pill for in-page section tabs at the lower right.
- **Don't:** Don't place dark text over the photograph; the hero copy is white.
- **Don't:** Don't add a saturated accent; the interface is black, white and grey.
- **Don't:** Don't let the floating section pill cover the headline or the buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
