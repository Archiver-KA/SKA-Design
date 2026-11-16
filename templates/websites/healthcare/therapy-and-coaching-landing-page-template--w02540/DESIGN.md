# Design system — Therapy & Coaching Landing Page Template

`SN-W02540` · healthcare · light mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A calm, interior-led therapy page: the hero is a warm, low-light photograph of a living room under a dark overlay, with a white serif headline centred over it. The single accent is a deep forest green (#2d5a3d) on the primary booking button, and the secondary button is a thin outline over the photograph. The stance is contemplative and domestic, so the room itself stands in for the practice.

**Mood:** contemplative, domestic, warm, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#eef4ef` | Cards, panels, raised areas |
| Text | `#2c2c2c` | Headings and primary copy |
| Muted text | `#6b7b6e` | Secondary copy, captions |
| Border | `#d4ded6` | Hairlines, dividers, outlines |
| Accent | `#2d5a3d` | Primary action and highlights |

Palette by frequency of use: `#2d5a3d` · `#2c2c2c` · `#ffffff` · `#6b7b6e` · `#d4ded6` · `#eef4ef` · `#faf8f5` · `#1e4a2e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 30px · body 16px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_1px_4px_rgba(0,0,0,0.06)]`, `shadow-[0_4px_12px_rgba(0,0,0,0.04)]`, `shadow-[0_2px_8px_rgba(0,0,0,0.12)]`
- **Content width:** `max-w-screen-md`, `max-w-screen-lg`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-16`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto bg-[#2D5A3D] text-[#FFFFFF] px-10 py-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-[#1E4A2E] transition-all duration-300 text-base">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Call to action (`cta`)
4. FAQ (`faq`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #eef4ef;
  --color-text: #2c2c2c;
  --color-muted: #6b7b6e;
  --color-border: #d4ded6;
  --color-accent: #2d5a3d;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#eef4ef',
    ink: '#2c2c2c',
    muted: '#6b7b6e',
    line: '#d4ded6',
    accent: '#2d5a3d',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use forest green (#2d5a3d) for the primary booking button only
- **Do:** Set the hero headline in a white serif, centred over the darkened photograph
- **Do:** Keep the secondary action as a thin outline button over the image
- **Don't:** Don't replace the room photograph with a flat colour; the image carries the mood
- **Don't:** Don't set the hero headline in a sans face
- **Don't:** Don't put green text over the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
