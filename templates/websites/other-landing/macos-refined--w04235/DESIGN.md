# Design system — MacOS Refined

`SN-W04235` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A macOS-style desktop shown as a blue-to-violet gradient, with a translucent menu bar across the top and a rounded dock of coloured app tiles at the bottom. The menu bar text is set in a serif face, which is unusual for the system look and gives the page an editorial touch. The design is the desktop itself, with no headline on the first screen.

**Mood:** desktop-like, soft, gradient, system-inspired

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#d1d5db` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#ffbd2e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f9fafb` · `#9ca3af` · `#f3f4f6` · `#4b5563` · `#3b82f6` · `#e5e7eb` · `#374151` · `#d1d5db` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Weights in use:** medium, bold
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow`
- **Common gaps:** `gap-4`, `gap-2`

**Primary button**

```html
<a class="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600">…</a>
```

## Page structure

Blocks in page order:

1. Contact form (`contact-form`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #f3f4f6;
  --color-text: #4b5563;
  --color-muted: #6b7280;
  --color-border: #d1d5db;
  --color-accent: #3b82f6;
  --color-accent-2: #ffbd2e;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#f3f4f6',
    ink: '#4b5563',
    muted: '#6b7280',
    line: '#d1d5db',
    accent: '#3b82f6',
    accent2: '#ffbd2e',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the desktop ground as a blue-to-violet gradient with translucent bars
- **Do:** Set the menu bar text in a serif face at small size
- **Do:** Use the dock as a rounded strip of coloured tiles at the bottom
- **Don't:** Don't add a sans-serif headline over the desktop; the first screen has none
- **Don't:** Don't use flat white backgrounds for the desktop ground
- **Don't:** Don't make the dock opaque; it stays translucent

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
