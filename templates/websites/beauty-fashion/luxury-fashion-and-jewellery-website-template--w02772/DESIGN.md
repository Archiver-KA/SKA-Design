# Design system — Luxury Fashion & Jewellery Website Template

`SN-W02772` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark luxury storefront with a black ground and serif display type. The hero headline pairs upright white serif capitals with an italic serif line in a gold gradient, and that contrast is the signature. Small tracked uppercase labels, a thin nav and a single outlined button sit in the margins, and a soft golden glow sits behind the text. Gold is reserved for the highlighted phrase and accents.

**Mood:** opulent, dark, ceremonial, elegant, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#78716c` · `#f59e0b` · `#fde68a` · `#a8a29e` · `#fbbf24` · `#fef3c7` · `#d6d3d1` · `#0f0f0f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 24px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(255,255,255,0.4)]`, `shadow-[0_0_15px_rgba(245,158,11,0.3)]`
- **Content width:** `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-amber-500 px-4 py-2 rounded-sm text-xs uppercase tracking-widest transition-colors flex items-center gap-2 font-semibold shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:bg-amber-400 text-black">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Product grid (`product-grid`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)
8. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #a8a29e;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#a8a29e',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero's second phrase in italic serif with a gold gradient from #f59e0b to #fde68a.
- **Do:** Keep labels small, uppercase and widely tracked.
- **Do:** Use one outlined button per hero rather than a solid fill.
- **Don't:** Don't use the brown (#713f12) as a page background; the page is black.
- **Don't:** Don't set body copy in gold; it is for headline emphasis only.
- **Don't:** Don't add a second bright accent beside the gold.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
