# Design system — Luxury Perfume Brand Landing Page Template

`SN-W02782` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A quiet, story-led perfume hero: a taupe-grey gradient, darkening toward the bottom, sits behind a centred white serif headline in two lines, the second in italic. A small tracked caption sits above, and below the short paragraph a solid white button sits beside a text-only link. The light nav bar is the only other surface, so the page reads as soft, grey and literary.

**Mood:** quiet, literary, soft, muted, intimate

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#ffedd5` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#57534e` · `#a8a29e` · `#e7e5e4` · `#ffffff` · `#fafaf9` · `#f5f5f4` · `#78716c` · `#d6d3d1` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="group relative px-8 py-3 bg-stone-50 text-stone-900 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white hover:shadow-lg border border-transparent">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. About (`about`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #ffedd5;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#ffedd5',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in serif, with the second line in italic.
- **Do:** Keep the hero as a grey-taupe gradient, with white text on the darker lower half.
- **Do:** Pair one solid white button with one text-only link, side by side.
- **Don't:** Don't add saturated colours; the palette stays grey and cream.
- **Don't:** Don't set the serif headline in bold weights.
- **Don't:** Don't place small tracked captions on the light nav bar.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
