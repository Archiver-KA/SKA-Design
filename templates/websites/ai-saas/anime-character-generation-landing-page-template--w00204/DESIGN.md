# Design system — Anime Character Generation Landing Page Template

`SN-W00204` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A poster-like layout: a cream ground (#ebe9de), a solid black navbar pill, and a headline stacked three lines deep in heavy uppercase sans at a very large size. Black carries nearly all the type, and the pale yellow (#f2f584) is kept for small image frames and highlights rather than text. The page reads as a bold typographic block with the images sitting beneath it.

**Mood:** bold, poster-like, high-contrast, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ebe9de` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#f2f584` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#ebe9de` · `#e5e7eb` · `#f2f584` · `#ecee70` · `#6b7280` · `#111827` · `#d1d5db` · `#e5e2d6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 144px · h3 20px · body 18px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-[1400px]`, `max-w-5xl`
- **Common gaps:** `gap-8`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="bg-[#EBE9DE] text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ebe9de;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #000000;
  --color-accent: #f2f584;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ebe9de',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#6b7280',
    line: '#000000',
    accent: '#f2f584',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans at very large sizes with tight leading
- **Do:** Keep the ground cream (#ebe9de) and the type black (#000000)
- **Do:** Use the pale yellow (#f2f584) for small highlights and image frame accents only
- **Don't:** Don't set the headline in a light weight or in grey
- **Don't:** Don't use the yellow as a large background
- **Don't:** Don't soften the headline with gradients or shadows

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
