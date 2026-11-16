# Design system — SprintForge AI Product Studio Template

`SN-W00732` · ai-saas · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A soft, airy agency hero: a pale grey ground with blurred grey and red-orange glows at the edges and a floating white nav bar with a near-black pill button. Three small rounded tiles, green, blue and white, float in the right half and are the only solid colour. The headline area is empty in this frame, so the page's look rests on the glows, the tiles and the nav.

**Mood:** soft, airy, modern, glowing, agency

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ecedee` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#232427` | Headings and primary copy |
| Muted text | `#55575c` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#e34a32` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#e34a32` · `#55575c` · `#f4f5f5` · `#8a8c91` · `#f05a3c` · `#171719` · `#ecedee` · `#2e3034`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_14px_30px_-18px_rgba(35,36,39,0.25)]`, `shadow-[0_24px_44px_-18px_rgba(35,36,39,0.3)]`
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Common gaps:** `gap-2.5`, `gap-2`, `gap-1.5`

**Primary button**

```html
<a class="group hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#171719] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_10px_22px_-10px_rgba(23,23,25,0.7)] hover:shadow-[0_1px_0_rgba(255,255,255,0.3)_inset,0_16px_28px_-10px_rgba(23,23,25,0.8)]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Services (`services`)
3. Bento grid (`bento-grid`)
4. Stats band (`stats`)
5. Team (`team`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ecedee;
  --color-surface: #ffffff;
  --color-text: #232427;
  --color-muted: #55575c;
  --color-border: #000000;
  --color-accent: #e34a32;
  --color-accent-2: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ecedee',
    surface: '#ffffff',
    ink: '#232427',
    muted: '#55575c',
    line: '#000000',
    accent: '#e34a32',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground pale grey, with coloured glows at the edges only.
- **Do:** Float small rounded tiles in green, blue and white as the solid accents.
- **Do:** Use a near-black pill button in the nav.
- **Don't:** Don't fill the hero with flat colour; the glows are the atmosphere.
- **Don't:** Don't use more than the three tile colours as solid accents.
- **Don't:** Don't add dark sections to this light hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
