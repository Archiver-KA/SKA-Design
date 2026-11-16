# Design system — Plumbing Services Landing Page Template

`SN-W04052` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A trade-service hero with a slate-blue photograph overlay and a bold white sans-serif headline in two short lines. An orange eyebrow line sits above it, and the orange submit button on a translucent form card carries the accent. A small row of ratings and stats under the copy adds credibility without extra colour.

**Mood:** urgent, direct, practical, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#082f49` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#f97316` · `#082f49` · `#0c4a6e` · `#94a3b8` · `#cbd5e1` · `#f8fafc` · `#f1f5f9` · `#0369a1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. Services (`services`)
6. Case studies (`case-studies`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #082f49;
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
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#082f49',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the eyebrow line in uppercase orange (#f97316) above the headline
- **Do:** Use orange for the submit button only
- **Do:** Keep the form card translucent with white labels
- **Don't:** Don't add a second brand colour to the hero
- **Don't:** Don't set the headline in lowercase
- **Don't:** Don't remove the rating row under the copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
