# Design system — Strategy and Branding Content Layout

`SN-W01708` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-white layout with a large near-black sans headline on the left and a grid of white cards on the right, each with a small uppercase label, a short paragraph and outlined tag chips. The cards and chips carry the design, and indigo is used sparingly.

**Mood:** clean, structured, calm, service-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#262626` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |

Palette by frequency of use: `#4f46e5` · `#3730a3` · `#ffffff` · `#000000` · `#4338ca` · `#262626` · `#525252` · `#fafafa` · `#eef2ff` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · body 16px
- **Weights in use:** light
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-10`, `gap-3`

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #262626;
  --color-border: #000000;
  --color-accent: #4f46e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#262626',
    line: '#000000',
    accent: '#4f46e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use white cards with a small uppercase label and outlined tag chips.
- **Do:** Set the headline in large regular-weight sans in near-black.
- **Do:** Keep indigo (#4f46e5) for the single key action.
- **Don't:** Don't fill the cards with colour; keep them white.
- **Don't:** Don't use the lavender background (#e0e7ff); the page is near-white.
- **Don't:** Don't make the layout depend on the 3D background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
