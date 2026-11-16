# Design system — Luxury Hotel & Resort Landing Page Template

`SN-W03088` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black hero (#1c1917) carries an oversized, tightly set display headline in white, the dominant element on the screen. Colour is almost absent: white is the only strong note, used on the Reserve button and the outlined search bar. The headline is a high-contrast serif, with Inter for the remaining text.

**Mood:** bold, minimal, dark, cinematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#f5f5f4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#e7e5e4` · `#78716c` · `#d6d3d1` · `#f5f5f4` · `#a8a29e` · `#57534e` · `#000000` · `#fafaf9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Playfair Display, Geist
- **Scale (largest breakpoint):** h1 136px · h2 48px · h3 30px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-black/20`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-white text-stone-900 px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-stone-200 transition-colors font-medium font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Listings (`listings`)
5. Feature grid (`features`)
6. Services (`services`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #f5f5f4;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#f5f5f4',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline very large and tightly tracked in white on the dark ground (#1c1917)
- **Do:** Use the white fill (#ffffff) for the single primary button, Reserve
- **Do:** Place the search bar as an outlined panel at the foot of the hero
- **Don't:** Don't use a light page ground for the hero; it is dark
- **Don't:** Don't add a second accent colour; the design has none
- **Don't:** Don't put small body text over the photo without a dark gradient behind it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
