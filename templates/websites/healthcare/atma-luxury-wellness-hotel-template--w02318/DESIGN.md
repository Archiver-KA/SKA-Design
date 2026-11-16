# Design system — ÂTMA Luxury Wellness Hotel Template

`SN-W02318` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A warm stone-beige page with a large dark serif headline in capitals, the final phrase set in italic. A black nav button in the top corner is the only dark block, and the hero photograph is cropped in a large curve that cuts into the beige. The olive dot and the curved crop give a calm, nature-rooted feel.

**Mood:** nature-rooted, calm, luxurious, minimal, stone

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e6e4dc` | Page ground |
| Surface | `#d3d1c8` | Cards, panels, raised areas |
| Text | `#1c1c1a` | Headings and primary copy |
| Muted text | `#82836d` | Secondary copy, captions |
| Border | `#d3d1c8` | Hairlines, dividers, outlines |
| Accent | `#82836d` | Primary action and highlights |

Palette by frequency of use: `#1a1a19` · `#82836d` · `#e6e4dc` · `#d3d1c8` · `#ffffff` · `#666666` · `#555555` · `#333333` · `#a09e94` · `#b5b4a9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 104px · h2 48px · h3 30px · body 18px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-[0_20px_40px_rgba(0,0,0,0.04)]`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-6`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full md:w-auto bg-[#1a1a19] text-white px-8 py-5 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#82836d] transition-colors flex items-center justify-center flex-shrink-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Product grid (`product-grid`)
5. Menu list (`menu-list`)
6. Articles (`blog-articles`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e6e4dc;
  --color-surface: #d3d1c8;
  --color-text: #1c1c1a;
  --color-muted: #82836d;
  --color-border: #d3d1c8;
  --color-accent: #82836d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e6e4dc',
    surface: '#d3d1c8',
    ink: '#1c1c1a',
    muted: '#82836d',
    line: '#d3d1c8',
    accent: '#82836d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large dark serif capitals with the last phrase in italic
- **Do:** Use the black button as the only dark block in the top corner
- **Do:** Crop the hero photograph in a large curve against the beige
- **Don't:** Don't add bright accent colour; the olive (#82836d) is the only accent
- **Don't:** Don't place the photo in a plain rectangle; the curved crop is the look
- **Don't:** Don't set the headline in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
