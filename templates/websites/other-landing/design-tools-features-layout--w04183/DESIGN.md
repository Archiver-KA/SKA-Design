# Design system — Design Tools Features Layout

`SN-W04183` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark grid of wide and tall cards on a near-black ground (#0f0f0f), with each card set on a dark panel (#212121) and divided by thin borders. Lilac and violet fills make up the card illustrations, and Inter carries the titles and short descriptions in light grey. The cards rely on their illustrations and a clear title hierarchy rather than on colour blocks.

**Mood:** dark, technical, understated, modular

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0f0f` | Page ground |
| Surface | `#212121` | Cards, panels, raised areas |
| Text | `#e5e7eb` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#2a2a2a` | Hairlines, dividers, outlines |
| Accent | `#6e56cf` | Primary action and highlights |

Palette by frequency of use: `#6e56cf` · `#9e8cfc` · `#212121` · `#1a1a1a` · `#2a2a2a` · `#9ca3af` · `#0f0f0f` · `#c4b5fd` · `#333333` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 24px · h3 16px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_2px_10px_rgba(0,0,0,0.2)]`, `shadow-[0_4px_20px_rgba(0,0,0,0.3)]`
- **Content width:** `max-w-[800px]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-1`, `gap-2`, `gap-4`

## Page structure

Blocks in page order:

1. Bento grid (`bento-grid`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0f0f0f;
  --color-surface: #212121;
  --color-text: #e5e7eb;
  --color-muted: #9ca3af;
  --color-border: #2a2a2a;
  --color-accent: #6e56cf;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0f0f',
    surface: '#212121',
    ink: '#e5e7eb',
    muted: '#9ca3af',
    line: '#2a2a2a',
    accent: '#6e56cf',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Give each card a small illustration above a bold title and a short description
- **Do:** Use lilac and violet only inside the card illustrations
- **Do:** Keep card titles in Inter at one size across the grid
- **Don't:** Don't place bright colour blocks behind the card text
- **Don't:** Don't use drop shadows; the thin border defines each card
- **Don't:** Don't mix card corner radii within the same row

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
