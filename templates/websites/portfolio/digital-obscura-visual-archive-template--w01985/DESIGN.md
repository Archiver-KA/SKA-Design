# Design system — Digital Obscura Visual Archive Template

`SN-W01985` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Archival and technical: a warm off-white ground (#ebeae6) overlaid with a faint square grid, and a very large dark sans wordmark stacked on two lines. Tiny monospace labels sit around the edges like an instrument readout, and the only imagery is a framed image slot. The grid and the small labels do the work, so the page reads as a museum catalogue rather than a portfolio.

**Mood:** archival, technical, gridded, quiet, exhibition-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ebeae6` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#e5e5e5` · `#ebeae6` · `#111827` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 176px · h2 104px · h3 60px · body 10px
- **Weights in use:** light, thin
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-xl`, `shadow-base-text/10`
- **Content width:** `max-w-4xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-12`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Call to action (`cta`)
6. Footer (`footer`)
7. About (`about`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ebeae6;
  --color-surface: #e5e5e5;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ebeae6',
    surface: '#e5e5e5',
    ink: '#111111',
    line: '#ffffff',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the wordmark huge, dark (#111111) and stacked on two lines
- **Do:** Frame the page with a faint grid and tiny monospace labels
- **Do:** Use the red (#ef4444) only for a single marker, never for large text
- **Don't:** Don't switch to a dark ground; this design is light.
- **Don't:** Don't enlarge the small labels; they are part of the grid
- **Don't:** Don't fill the grid with cards; it is an exhibition layout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
