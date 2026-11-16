# Design system — Luxury Vineyard Resort Landing Page Template

`SN-W03112` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, editorial resort hero on a warm off-white ground (#fdfcf8). The headline is a large serif in near-black, with the middle phrase set in italic, and a tall arched image frame on the right fades into the page. The primary action is a full-width near-black button, and the page is restrained and warm, with the palette limited to neutrals.

**Mood:** warm, editorial, restrained, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d6d3d1` · `#1c1917` · `#e7e5e4` · `#78716c` · `#57534e` · `#a8a29e` · `#f5f5f4` · `#fafaf9` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 36px · body 14px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-stone-200`
- **Content width:** `max-w-screen-2xl`, `max-w-[200px]`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-12`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="bg-white text-stone-900 px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors rounded-full">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Call to action (`cta`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #1c1917;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display, with one phrase in italic
- **Do:** Use the near-black (#1c1917) for the primary search button
- **Do:** Frame hero imagery in a tall arched shape that fades into the page ground
- **Don't:** Don't introduce a strong colour; the palette is warm neutrals
- **Don't:** Don't set body copy in the serif
- **Don't:** Don't cut hard edges where the image meets the page; it fades

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
