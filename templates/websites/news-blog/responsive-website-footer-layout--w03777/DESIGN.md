# Design system — Responsive Website Footer Layout

`SN-W03777` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A footer on a near-black ground, with muted grey link columns under small uppercase headings. The indigo (#6366f1) appears only on the newsletter subscribe button, so the single saturated colour marks the one action. Separation comes from a hairline rule above the legal line rather than from panels or shadows, and the system sans-serif keeps the block quiet.

**Mood:** quiet, dark, structured, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |

Palette by frequency of use: `#9ca3af` · `#ffffff` · `#1f2937` · `#6b7280` · `#000000` · `#6366f1` · `#312e81` · `#818cf8` · `#111827` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h3 14px · body 14px
- **Weights in use:** extralight, normal, light
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Section padding:** `py-20`
- **Common gaps:** `gap-12`

**Primary button**

```html
<a class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-r-md transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #111827;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #6366f1;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#111827',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#6366f1',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the footer ground to black (#000000) and keep link text in muted grey (#9ca3af).
- **Do:** Reserve indigo (#6366f1) for the newsletter subscribe button only.
- **Do:** Separate footer blocks with hairline dividers in #1f2937.
- **Don't:** Don't add drop shadows or coloured panels behind the link columns.
- **Don't:** Don't use the accent colour for links or icons.
- **Don't:** Don't place the newsletter field on a bright background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
