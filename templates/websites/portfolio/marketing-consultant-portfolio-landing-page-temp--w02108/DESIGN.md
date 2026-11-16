# Design system — Marketing Consultant Portfolio Landing Page Template

`SN-W02108` · portfolio · light mode · Sinera Atlas theme `workshop` · language `nl`

## Direction

A confident consultant page on white, where the name is set very large in dark green [#0f3d2e] serif, with a letter-spaced grey subtitle beneath it. Lime [#d2f86d] fills the primary button and also marks a thin rule beside the intro paragraph, while a dark green nav button anchors the top right. The palette is only dark green, lime and white, so the page reads crisp and deliberate.

**Mood:** confident, crisp, deliberate, fresh, professional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f3d2e` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d2f86d` | Primary action and highlights |
| Second accent | `#d2f86d` | Supporting highlights |

Palette by frequency of use: `#0f3d2e` · `#ffffff` · `#d2f86d` · `#475569` · `#e2e8f0` · `#cbd5e1` · `#64748b` · `#f1f5f9` · `#f8fafc` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-x-16`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #0f3d2e;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #d2f86d;
  --color-accent-2: #d2f86d;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#0f3d2e',
    muted: '#475569',
    line: '#ffffff',
    accent: '#d2f86d',
    accent2: '#d2f86d',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in large dark green serif (#0f3d2e) as the first element on the page.
- **Do:** Use lime (#d2f86d) for the primary button and the thin rule beside the intro only.
- **Do:** Keep the secondary button outlined in dark green, not filled.
- **Don't:** Don't put lime behind body text; it is a button and rule colour.
- **Don't:** Don't add a third colour; the palette is dark green, lime and white.
- **Don't:** Don't use the serif for the body paragraph or the buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
