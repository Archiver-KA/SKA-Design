# Design system — Aurora Mobile Experience Landing Page Template

`SN-W03673` · entertainment · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm cream mobile layout with dark charcoal type and a single orange (#f97316) accent for small details. The gallery uses tile grids and an arch-shaped frame, and headlines are set large and tightly grouped, with one word in italic orange for emphasis. Price, bid and status details use the same dark type on the cream surface.

**Mood:** warm, gallery-like, calm, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#000000` · `#e7e5e4` · `#fdfbf7` · `#f5f5f4` · `#a8a29e` · `#78716c` · `#f97316` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter, Allura
- **Scale (largest breakpoint):** h1 48px · h2 30px · body 12px
- **Weights in use:** medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[56px]` (56px)
- **Shadows:** `shadow-[0_50px_100px_-20px_rgba(50,50,93,0.15),_0_30px_60px_-30px_rgba(0,0,0,0.1),_inset_0_-2px_6px_0_rgba(10,37,64,0.05)]`, `shadow-sm`
- **Common gaps:** `gap-1`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="bg-stone-900 text-white px-8 py-3 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-orange-500 transition-colors flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Product grid (`product-grid`)
2. Hero (`hero`)
3. About (`about`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #f5f5f4;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#f5f5f4',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange (#f97316) for one italic word or a small dot per section
- **Do:** Set section headings large, stacked over two or three lines
- **Do:** Keep the cream ground (#fdfbf7) for every surface, with dark type
- **Don't:** Don't use orange for button fills across the page
- **Don't:** Don't place image tiles on dark panels
- **Don't:** Don't mix in a second accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
