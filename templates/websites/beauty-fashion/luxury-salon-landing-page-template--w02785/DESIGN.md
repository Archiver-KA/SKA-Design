# Design system — Luxury Salon Landing Page Template

`SN-W02785` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A refined, monochrome light beauty page on warm off-white (#fafaf9). The hero headline is a large high-contrast serif in near-black, with the middle word set in a soft grey italic that acts as the only contrast device. A small pill caption and a short grey paragraph sit on the left, and the right side holds a tall hairline-bordered image frame. Hierarchy comes from scale and the italic word, not colour.

**Mood:** editorial, quiet, austere, refined, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#d6d3d1` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#78716c` · `#57534e` · `#a8a29e` · `#d6d3d1` · `#e7e5e4` · `#ffffff` · `#fafaf9` · `#292524` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 16px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-stone-200/50`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="group relative inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest px-6 py-3 border border-stone-200 rounded-full hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Timeline (`timeline`)
6. Team (`team`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #d6d3d1;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#d6d3d1',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large serif with the middle phrase in grey italic (#a8a29e).
- **Do:** Keep the ground off-white (#fafaf9) and the type near-black (#1c1917).
- **Do:** Frame imagery with a thin border rather than a shadow.
- **Don't:** Don't add colour; the page is monochrome.
- **Don't:** Don't set the italic phrase in dark ink; the grey is the contrast device.
- **Don't:** Don't use drop shadows; depth comes from hairline borders.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
