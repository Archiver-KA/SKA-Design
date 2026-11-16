# Design system — User Profile and Settings Menu

`SN-W04328` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light mobile menu on pale grey with a large purple-to-pink gradient card at the top holding the user's name and an Edit pill. Below it, white rows each carry a tinted circular icon in its own pastel, a bold label, a grey sub-line and a chevron. The gradient is the one saturated block, and the rest of the screen stays white and quiet.

**Mood:** friendly, clean, mobile-first, soft, tidy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#9333ea` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#6b7280` · `#faf5ff` · `#1f2937` · `#f3f4f6` · `#9333ea` · `#a855f7` · `#ec4899` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 24px
- **Weights in use:** semibold, medium, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[54px]` (54px)
- **Shadows:** `shadow`, `shadow-2xl`

**Primary button**

```html
<a class="w-full flex items-center justify-center bg-red-50 text-red-600 rounded-2xl font-bold py-3 mt-2 hover:bg-red-100 transition">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #9333ea;
  --color-accent-2: #eab308;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#9333ea',
    accent2: '#eab308',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the purple gradient only for the profile header card
- **Do:** Give each menu row a tinted circular icon and a chevron
- **Do:** Keep menu rows white with a bold label and a grey secondary line
- **Don't:** Don't add gradients to the menu rows
- **Don't:** Don't colour every label with the accent
- **Don't:** Don't drop the grey secondary line from menu rows

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
