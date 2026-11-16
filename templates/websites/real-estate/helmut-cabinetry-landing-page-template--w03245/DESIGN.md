# Design system — Helmut Cabinetry Landing Page Template

`SN-W03245` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A minimal, monochrome cabinetry page on a white ground with a large black sans headline in two lines, the second line set in italic. Body copy is muted grey, and calls to action are small tracked uppercase text links rather than filled buttons. Navigation is a row of small uppercase labels with a wordmark at the right, so the page feels quiet and gallery-like.

**Mood:** minimal, gallery-like, quiet, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#71717a` · `#ffffff` · `#f4f4f5` · `#a1a1aa` · `#e4e4e7` · `#3f3f46` · `#52525b` · `#fafafa` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Noto Serif, Instrument Serif, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 24px · body 14px
- **Weights in use:** semibold, normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-zinc-200/50`
- **Content width:** `max-w-screen-xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-x-6`

**Primary button**

```html
<a class="inline-block bg-zinc-900 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-zinc-800 transition-colors font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f4f4f5;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #18181b;
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
    surface: '#f4f4f5',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#18181b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large black sans, with the second line in italic.
- **Do:** Style calls to action as small tracked uppercase text links, not filled buttons.
- **Do:** Use muted grey (#71717a) for body copy and light grey (#f4f4f5) for image frames.
- **Don't:** Don't add a colour accent; the palette is black, white and greys.
- **Don't:** Don't use filled buttons for the main action; keep them as text links.
- **Don't:** Don't set navigation labels in mixed case; they are small uppercase.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
