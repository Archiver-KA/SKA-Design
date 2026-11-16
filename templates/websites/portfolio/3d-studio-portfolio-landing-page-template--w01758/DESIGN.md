# Design system — 3D Studio Portfolio Landing Page Template

`SN-W01758` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The opening view is a near-black field with a small top navigation bar: a square logo mark, three grey text links, and a white outlined Start Project button. The rest of the view is a dark, empty stage, with colour kept almost entirely out.

**Mood:** sparse, dark, restrained, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#f97316` · `#0a0a0a` · `#d4d4d4` · `#3b82f6` · `#a855f7` · `#525252` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white border border-white/10 rounded-full hover:bg-white/10 transition-all group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Case studies (`case-studies`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #050505;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#050505',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the opening view dark (#0a0a0a) and leave it uncluttered.
- **Do:** Use small grey navigation links with one outlined button at the right.
- **Do:** Keep the logo mark and wordmark compact, in white, at the top left.
- **Don't:** Don't fill the stage with colour or imagery.
- **Don't:** Don't use a filled primary button in the nav; the Start Project CTA is outlined.
- **Don't:** Don't set the nav links in white; keep them grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
