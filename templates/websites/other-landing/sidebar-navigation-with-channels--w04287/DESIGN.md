# Design system — Sidebar Navigation with Channels

`SN-W04287` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark aubergine sidebar with a workspace header, a channel list and a direct-message list, set against a blurred purple-to-black backdrop. Section labels are small and muted grey, the selected channel is a slightly lighter row, and presence is shown with small green dots. The deep plum tone sets the mood, while the text stays neutral white and grey.

**Mood:** moody, purple, dark, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#232129` | Page ground |
| Surface | `#19171c` | Cards, panels, raised areas |
| Text | `#e5e7eb` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#19171c` | Hairlines, dividers, outlines |
| Accent | `#4a154b` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#4a154b` · `#19171c` · `#9ca3af` · `#e5e7eb` · `#ffffff` · `#232129` · `#1f2937` · `#e9d5ff` · `#25113d` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Weights in use:** semibold, medium, extrabold
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-xl`
- **Common gaps:** `gap-3`

**Primary button**

```html
<a class="flex items-center px-3 py-2 rounded text-white font-medium bg-section hover:bg-accent/30 group transition">…</a>
```

## Page structure

Blocks in page order:

1. Sidebar (`sidebar`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #232129;
  --color-surface: #19171c;
  --color-text: #e5e7eb;
  --color-muted: #9ca3af;
  --color-border: #19171c;
  --color-accent: #4a154b;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#232129',
    surface: '#19171c',
    ink: '#e5e7eb',
    muted: '#9ca3af',
    line: '#19171c',
    accent: '#4a154b',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the deep aubergine (#4a154b) for the workspace header and sidebar tint only
- **Do:** Mark the selected channel with a slightly lighter row, not a colour change
- **Do:** Show presence with small green (#4ade80) dots beside names
- **Don't:** Don't use the plum tone for message text
- **Don't:** Don't remove the section labels for channels and direct messages
- **Don't:** Don't add bright fills to the list rows

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
