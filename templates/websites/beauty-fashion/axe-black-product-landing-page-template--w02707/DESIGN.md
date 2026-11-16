# Design system — AXE Black Product Landing Page Template

`SN-W02707` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Fragrance product page on black (#000000) with a heavy, uppercase sans headline stacked on three lines, and the last word fading from white to grey. The subheading is small grey, and the only interactive hints are small 'drag to rotate' and 'scroll to explore' labels for a 3D bottle viewer. The page is monochrome, with the product and motion carrying the design.

**Mood:** monochrome, heavy, product-led, cinematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#18181b` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#000000` · `#27272a` · `#52525b` · `#e4e4e7` · `#71717a` · `#3f3f46` · `#d4d4d8` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_40px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #18181b;
  --color-accent: #4ade80;
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
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#18181b',
    accent: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase sans, white fading to grey on the black ground (#000000).
- **Do:** Keep the 3D product as the only visual, centred on or beside the headline.
- **Do:** Use small, tracked labels for interaction hints such as drag to rotate.
- **Don't:** Don't add a green (#4ade80) accent; the page is monochrome.
- **Don't:** Don't lighten the ground to grey (#3f3f46); it is pure black.
- **Don't:** Don't set long body copy in full white; keep it muted grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
