# Design system — Podcast Weekly Trending List

`SN-W03740` · entertainment · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, card-based podcast directory on a pale slate ground [#f8fafc]. Each row is a white card with a cover thumbnail, a bold title, the host's name and an outlined Add button. A single dark now-playing panel provides contrast, and amber star ratings are the only warm note on the page.

**Mood:** clean, airy, directory-like, restrained, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#f8fafc` · `#64748b` · `#1e293b` · `#f59e0b` · `#f1f5f9` · `#93c5fd` · `#9333ea` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 30px · body 14px
- **Weights in use:** medium, semibold, extrabold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-1`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="add-btn flex items-center gap-1 text-sm font-medium bg-white rounded-lg px-3 lg:px-4 py-2 shadow-sm hover:bg-slate-100 transition ml-3">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #1e293b;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#1e293b',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Place list rows on white cards with thin borders over the pale slate ground
- **Do:** Keep amber (#f59e0b) for rating stars only
- **Do:** Use the dark navy panel only once, as the contrasting now-playing element
- **Don't:** Don't make the whole page dark; the list stays light
- **Don't:** Don't fill the Add buttons with colour; they stay outlined
- **Don't:** Don't add heavy shadows to the rows

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
