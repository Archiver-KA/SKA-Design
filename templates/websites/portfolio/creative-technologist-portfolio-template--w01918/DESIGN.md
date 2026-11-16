# Design system — Creative Technologist Portfolio Template

`SN-W01918` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black field with oversized white numerals and small grey details, set up like a technical readout for one person. Colour is almost absent in the first screen: the only tints are small icons in blue and purple. Inter in one family carries the page, with glass panels and a red-lit portrait below.

**Mood:** minimal, technical, monochrome, dark, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#d4d4d4` · `#34d399` · `#000000` · `#10b981` · `#e5e5e5` · `#22d3ee` · `#818cf8` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 30px · h3 16px · body 14px
- **Weights in use:** semibold, medium, extrabold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-white/5 hover:bg-white/10 ring-1 ring-white/10">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Dashboard preview (`dashboard-preview`)
5. About (`about`)
6. Services (`services`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #34d399;
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
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero figure in Inter at display size, white on black
- **Do:** Keep small grey details in one row of three items with line icons
- **Do:** Use glass panels with backdrop blur for cards over the 3D scene
- **Don't:** Don't add a second typeface; the template uses Inter for display and body
- **Don't:** Don't put colour on text blocks; tints belong to the icons only
- **Don't:** Don't put light backgrounds behind sections; the page ground is black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
