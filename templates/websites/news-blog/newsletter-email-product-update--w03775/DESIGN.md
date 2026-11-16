# Design system — Newsletter Email Product Update

`SN-W03775` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark product-update card on a charcoal ground, with a heading and short subtitle at the top and a green status line marking availability. Feature blocks sit on grey panels with small coloured dots, a placeholder preview frame and a highlighted results box at the foot. Type is a plain sans-serif in white and light grey, with calm spacing between the blocks.

**Mood:** calm, technical, neutral, structured, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#52525b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#3f3f46` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#f4f4f5` · `#3f3f46` · `#a1a1aa` · `#52525b` · `#d4d4d8` · `#71717a` · `#a855f7` · `#3b82f6` · `#f97316` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 30px · h2 24px · body 14px
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2.5 rounded-md font-medium transition-all duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Process / steps (`how-it-works`)
3. 3D / canvas scene (`3d-canvas`)
4. Case studies (`case-studies`)
5. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #52525b;
  --color-text: #f4f4f5;
  --color-muted: #a1a1aa;
  --color-border: #3f3f46;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#52525b',
    ink: '#f4f4f5',
    muted: '#a1a1aa',
    line: '#3f3f46',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use green only for status lines such as available now
- **Do:** Mark feature points with small coloured dots rather than coloured icon boxes
- **Do:** Set key results in a bordered box with a bold label
- **Don't:** Don't fill the card with bright gradients
- **Don't:** Don't add colour to the headings
- **Don't:** Don't give each feature block more than one preview frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
