# Design system — Visual Code Blocks Workspace

`SN-W04334` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A playful light workspace on pale blue [#dbeafe] with three white panels set side by side. Command blocks are colour-coded by category in solid blue, violet and green, each a flat rounded bar with a white label, and the stage holds a sprite on a light sky panel. Bold section titles and bright category colours make the tool read as friendly and educational.

**Mood:** playful, bright, educational, clear, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#dbeafe` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#d1d5db` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4b5563` · `#3b82f6` · `#a855f7` · `#d1d5db` · `#22c55e` · `#fb923c` · `#000000` · `#f3f4f6` · `#dbeafe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 30px · h2 20px · h3 14px
- **Weights in use:** bold

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-md`
- **Common gaps:** `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #dbeafe;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #4b5563;
  --color-border: #d1d5db;
  --color-accent: #3b82f6;
  --color-accent-2: #a855f7;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#dbeafe',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#4b5563',
    line: '#d1d5db',
    accent: '#3b82f6',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Colour each block category with one solid hue and a white label
- **Do:** Keep panel headings in bold dark type above each column
- **Do:** Use rounded corners on the blocks and the stage panel
- **Don't:** Don't mix block colours within one category
- **Don't:** Don't use a dark background for the workspace
- **Don't:** Don't add shadows to the blocks; they sit flat on the panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
