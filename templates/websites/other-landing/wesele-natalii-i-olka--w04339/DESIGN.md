# Design system — Wesele Natalii i Olka 

`SN-W04339` · other-landing · light mode · Sinera Atlas theme `circuit` · language `pl`

## Direction

A wedding invitation on a cream card with a thin inner border, set on a pale blue page. The names are set very large in navy [#0c4a6e] and joined by a small gold ampersand, and the date and venue follow in widely spaced capitals. A single line illustration sits above the names, and small language links sit in the top corner.

**Mood:** romantic, elegant, formal, airy, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f0f9ff` | Cards, panels, raised areas |
| Text | `#0c4a6e` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0c4a6e` | Primary action and highlights |
| Second accent | `#047857` | Supporting highlights |

Palette by frequency of use: `#0c4a6e` · `#047857` · `#475569` · `#f0f9ff` · `#059669` · `#0284c7` · `#64748b` · `#94a3b8` · `#eab308` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Alex Brush
- **Body:** Alex Brush
- **Loaded families:** Alex Brush, Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 20px · body 18px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sky-900/5`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f0f9ff;
  --color-text: #0c4a6e;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #0c4a6e;
  --color-accent-2: #047857;
  --font-display: "Alex Brush", sans-serif;
  --font-body: "Alex Brush", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f0f9ff',
    ink: '#0c4a6e',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#0c4a6e',
    accent2: '#047857',
  },
  fontFamily: { display: ['Alex Brush'], sans: ['Alex Brush'] },
} }
```

## Do and don't

- **Do:** Set the couple's names very large in navy (#0c4a6e)
- **Do:** Space the date and venue in widely tracked capitals
- **Do:** Keep the card on a thin inner border with generous margins
- **Don't:** Don't set the names in a bold sans-serif
- **Don't:** Don't use more than one accent colour on the card
- **Don't:** Don't place text over the illustration

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
