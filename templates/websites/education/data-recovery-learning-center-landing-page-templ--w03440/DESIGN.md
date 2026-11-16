# Design system — Data Recovery Learning Center Landing Page Template

`SN-W03440` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A plain, reference-style learning page on light grey [#f5f5f5], with a thin table-of-contents sidebar on the left and a large sans headline in near-black. The content sits in a white card with bulleted lists in two columns. The only strong colour is the small red brand mark [#d2242a], so the page reads as a guide rather than a sales page.

**Mood:** plain, informational, calm, reference

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#111111` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#d2242a` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#7a7a7a` · `#111111` · `#d2242a` · `#ffffff` · `#e5e5e5` · `#f5f5f5` · `#a0a0a0` · `#22c55e` · `#d4d4d4` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f5f5;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #111111;
  --color-border: #e5e5e5;
  --color-accent: #d2242a;
  --color-accent-2: #22c55e;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f5',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#111111',
    line: '#e5e5e5',
    accent: '#d2242a',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the page title large in near-black (#111111) on light grey (#f5f5f5)
- **Do:** Hold content in a white card with two-column bullet lists
- **Do:** Keep the table of contents as a plain list in a left sidebar
- **Don't:** Don't add decorative colour to the body text
- **Don't:** Don't use the red brand colour for links or buttons beyond the logo
- **Don't:** Don't use dark backgrounds for reading sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
