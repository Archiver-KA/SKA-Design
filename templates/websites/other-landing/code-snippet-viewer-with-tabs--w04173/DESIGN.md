# Design system — Code Snippet Viewer with Tabs

`SN-W04173` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A tabbed code viewer on a deep slate ground (#111827): a row of language tabs sits above a rounded code panel with line numbers, and a short caption sits below. The active tab is white and the others are muted grey. Syntax colours are soft pale blue (#93c5fd) and pink (#f472b6), kept low in saturation so the panel reads calmly.

**Mood:** calm, technical, neat, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#374151` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#93c5fd` | Primary action and highlights |
| Second accent | `#f472b6` | Supporting highlights |

Palette by frequency of use: `#9ca3af` · `#93c5fd` · `#374151` · `#f472b6` · `#ffffff` · `#fde047` · `#111827` · `#1f2937` · `#c084fc` · `#86efac`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-4xl`

**Primary button**

```html
<a class="py-3 px-4 text-white font-medium relative hover:bg-gray-700 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Code / terminal (`code-terminal`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #374151;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #374151;
  --color-accent: #93c5fd;
  --color-accent-2: #f472b6;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#374151',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#374151',
    accent: '#93c5fd',
    accent2: '#f472b6',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Mark the active tab in white and leave the others grey.
- **Do:** Use pale blue (#93c5fd) and pink (#f472b6) for syntax highlights only.
- **Do:** Keep the caption below the panel in small grey text.
- **Don't:** Don't make the tabs filled colour blocks.
- **Don't:** Don't use bright yellow for body text.
- **Don't:** Don't remove line numbers from the code panel.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
