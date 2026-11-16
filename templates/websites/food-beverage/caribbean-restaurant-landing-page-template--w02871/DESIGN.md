# Design system — Caribbean Restaurant Landing Page Template

`SN-W02871` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Photo-led and bold, with a dark wash over a close crop of grilled chicken and wings. The headline is large white sans with tight leading, and the pill buttons are white with a black knob or outlined, so they read clearly against the food. The page keeps its colour in the food itself, and the interface stays black, white and grey.

**Mood:** photo-led, bold, dark, appetising

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f5f5f4` · `#1c1917` · `#f97316` · `#44403c` · `#d6d3d1` · `#57534e` · `#ea580c` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Geist
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-[1600px]`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-3 glass-panel text-white pl-8 pr-2 py-2.5 rounded-full font-normal text-sm hover:bg-white/20 transition font-geist group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Bento grid (`bento-grid`)
5. Map / location (`map-location`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #57534e;
  --color-border: #ffffff;
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
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#57534e',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans with tight leading over a dark photo
- **Do:** Use white pills with a black knob for the primary action and outlined pills for secondary
- **Do:** Let the food photography carry the colour; keep the interface monochrome
- **Don't:** Don't add orange or brand colours to the hero chrome
- **Don't:** Don't place the headline on bright food highlights without the dark wash
- **Don't:** Don't use more than two pill button styles in one hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
