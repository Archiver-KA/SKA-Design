# Design system — User Profile and Account Overview

`SN-W04327` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark profile screen on slate, with a centred indigo avatar, a white name and a row of three small stat tiles beneath it. Account details sit in a stacked list where each row has a small coloured icon and a muted label above the value, separated by thin borders. Cards are a shade lighter than the page, so depth comes from tone rather than from shadow.

**Mood:** calm, organised, dark, personal, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#14532d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#1f2937` · `#374151` · `#4f46e5` · `#111827` · `#6b7280` · `#818cf8` · `#14532d` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 20px · h2 20px · h3 14px · body 12px
- **Weights in use:** bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[54px]` (54px)
- **Shadows:** `shadow-xl`
- **Common gaps:** `gap-3`

**Primary button**

```html
<a class="absolute bottom-0 right-0 bg-indigo-600 rounded-full p-1.5 border-4 border-gray-800">…</a>
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
  --color-background: #111827;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #374151;
  --color-accent: #4f46e5;
  --color-accent-2: #14532d;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#374151',
    accent: '#4f46e5',
    accent2: '#14532d',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use slate surfaces one step lighter than the page for cards and rows
- **Do:** Set each detail row with a small coloured icon and a muted label
- **Do:** Keep the three stat tiles in one row with equal widths
- **Don't:** Don't add drop shadows; depth comes from tone
- **Don't:** Don't put a bright background behind the avatar
- **Don't:** Don't use a light page background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
