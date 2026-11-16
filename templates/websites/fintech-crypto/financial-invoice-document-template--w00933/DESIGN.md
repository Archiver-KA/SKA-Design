# Design system — Financial Invoice Document Template

`SN-W00933` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A printed-style financial document on a pale stone backdrop, with a white sheet as the surface. The wordmark is a classical all-caps serif, and each section opens with a small spaced uppercase header over a hairline. Fields are laid out as label-and-value pairs in two columns. Apart from one green status word, the page is monochrome, so it reads as a formal record rather than a marketing page.

**Mood:** formal, printed, orderly, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e7e5e4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |

Palette by frequency of use: `#64748b` · `#1e293b` · `#e2e8f0` · `#0f172a` · `#334155` · `#475569` · `#cbd5e1` · `#1e3a8a` · `#94a3b8` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Cinzel
- **Loaded families:** Cinzel, Inter, Libre Baskerville, Reenie Beanie
- **Scale (largest breakpoint):** h1 24px · h2 12px · h3 12px · body 10px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-[210mm]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-y-4`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e7e5e4;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #cbd5e1;
  --color-accent: #1e293b;
  --font-display: "Cinzel", serif;
  --font-body: "Cinzel", serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e7e5e4',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#cbd5e1',
    accent: '#1e293b',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Cinzel'] },
} }
```

## Do and don't

- **Do:** Set section headers in small spaced uppercase with a hairline below
- **Do:** Lay out fields as label-and-value pairs in two columns
- **Do:** Use green only for status words such as ACTIVE
- **Don't:** Don't add decorative imagery to the document
- **Don't:** Don't set every value in bold
- **Don't:** Don't use the serif for body text; it is reserved for the wordmark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
