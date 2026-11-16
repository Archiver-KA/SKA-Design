# Design system — Brutalist Brand Manifesto Landing Page Template

`SN-W01115` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A near-black brutalist manifesto page with oversized outlined type. The hero words are set in Inter at very large size with a white outline and no fill, over a faint, larger ghost of the same word, so the type becomes the image. The orange (#ff5f1f) appears only in the navigation and small labels, and the layout is flat, with square corners and hairline captions along the edges.

**Mood:** brutalist, austere, bold, manifesto

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ff5f1f` | Primary action and highlights |

Palette by frequency of use: `#ff5f1f` · `#ffffff` · `#000000` · `#050505` · `#a3a3a3` · `#525252` · `#737373` · `#0a0a0a` · `#262626` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 224px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_0_4px_#0a0a0a]`
- **Content width:** `max-w-screen-2xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #000000;
  --color-accent: #ff5f1f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#000000',
    accent: '#ff5f1f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at very large size, outlined rather than filled
- **Do:** Use the orange (#ff5f1f) only for the active navigation item and small labels
- **Do:** Keep corners square; captions and panels have no radius
- **Don't:** Don't fill the outlined headlines with solid colour
- **Don't:** Don't add soft drop shadows or gradients; the page is flat
- **Don't:** Don't use the orange as a page background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
