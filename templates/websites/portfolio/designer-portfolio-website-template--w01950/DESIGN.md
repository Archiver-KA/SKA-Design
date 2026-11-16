# Design system — Designer Portfolio Website Template

`SN-W01950` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a very large bold sans headline in tight lines, right-aligned in near-black, with a grey year line beneath. The left side holds a single white pill-shaped outline as a visual device, and a short paragraph with a small uppercase link sits at lower left. Navigation is tiny grey uppercase text, which keeps the page quiet and editorial.

**Mood:** editorial, quiet, monochrome, bold, spare

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#f87171` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#e5e5e5` · `#171717` · `#f5f5f5` · `#ffffff` · `#000000` · `#737373` · `#a3a3a3` · `#525252` · `#fafafa` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Geist Mono, Geist
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-6xl`, `max-w-[1400px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-12`, `gap-3`

**Primary button**

```html
<a class="px-6 py-3 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors font-geist-mono text-sm">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Hero (`hero`)
3. Sidebar (`sidebar`)
4. Services (`services`)
5. Logo cloud (`logo-cloud`)
6. Case studies (`case-studies`)
7. Product grid (`product-grid`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #f87171;
  --color-accent-2: #4ade80;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#f87171',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the headline right-aligned in heavy sans, tight leading, black
- **Do:** Keep navigation tiny, grey and uppercase
- **Do:** Use the grey year line as the only muted element in the headline area
- **Don't:** Don't add colour; the page is black on white
- **Don't:** Don't centre the headline; it sits to the right
- **Don't:** Don't add a second accent beside the outline device

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
