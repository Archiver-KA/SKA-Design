# Design system — Boutique Vacation Rental

`SN-W03033` · travel · light mode · Sinera Atlas theme `dwell` · language `es`

## Direction

A warm off-white page with a stacked serif headline in near-black, its key phrase set in grey italic. Actions are solid near-black rectangles with small corner radii. Four framed property photographs sit in a staggered grid on the right, each with a thin pale border, which gives the page a quiet, property-led feel.

**Mood:** editorial, warm, understated, property-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#e7e5e4` · `#f5f5f4` · `#78716c` · `#57534e` · `#a8a29e` · `#fafaf9` · `#292524` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 24px · body 12px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-[300px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="px-3 py-1.5 rounded-full hover:bg-stone-100 text-xs font-medium tracking-wide uppercase transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Articles (`blog-articles`)
5. Call to action (`cta`)
6. Footer (`footer`)
7. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
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
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in serif, with the emphasis phrase in grey italic
- **Do:** Use near-black (#1c1917) for primary buttons and key text
- **Do:** Frame property photography in thin pale borders in a staggered grid
- **Don't:** Don't use bright accent colours; the page is ink on off-white
- **Don't:** Don't set body copy in pale stone grey (#a8a29e); it is too faint
- **Don't:** Don't round the buttons into pills; they keep small radii

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
