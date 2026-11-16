# Design system — Conference Landing Page Template

`SN-W03580` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The conference page is monochrome and academic. A heavy near-black (#0f172a) sans headline sits on a white ground, with muted slate grey for supporting text. A row of info cells separated by hairline rules carries the date, place and theme, so the first screen reads like a printed programme. Colour is almost absent; structure and type size do the work.

**Mood:** academic, austere, structured, monochrome, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |

Palette by frequency of use: `#0f172a` · `#e2e8f0` · `#64748b` · `#475569` · `#ffffff` · `#94a3b8` · `#f8fafc` · `#cbd5e1` · `#020617` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="bg-slate-950 text-white text-xs font-medium px-5 py-2.5 hover:bg-slate-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Team (`team`)
5. About (`about`)
6. Product grid (`product-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #cbd5e1;
  --color-accent: #0f172a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#475569',
    muted: '#64748b',
    line: '#cbd5e1',
    accent: '#0f172a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the main headline in heavy near-black (#0f172a) sans at display size
- **Do:** Divide key facts into cells with hairline rules
- **Do:** Keep the register button near-black and the only solid shape on the first screen
- **Don't:** Don't add a bright accent colour to the first screen
- **Don't:** Don't use decorative graphics where the rules do the work
- **Don't:** Don't set the supporting text in dark weights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
