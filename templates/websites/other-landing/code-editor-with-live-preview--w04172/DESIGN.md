# Design system — Code Editor with Live Preview

`SN-W04172` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A split view of a code editor on a dark slate ground (#111827), beside a plain white browser preview showing a simple page. Syntax is coloured in blue, green and amber, and the preview button uses a matching blue, which links the two halves. The interface is dense and utilitarian, with small type and a thin grey border around each pane.

**Mood:** utilitarian, technical, dense, split

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#60a5fa` · `#374151` · `#d1d5db` · `#1f2937` · `#4ade80` · `#111827` · `#fbbf24` · `#ef4444` · `#dc2626` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 30px
- **Weights in use:** medium, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-4`

**Primary button**

```html
<a class="text-gray-300 hover:text-gray-100 px-2 py-1 rounded border border-gray-600 hover:bg-gray-700 transition text-xs">…</a>
```

## Page structure

Blocks in page order:

1. Code / terminal (`code-terminal`)
2. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #1f2937;
  --color-text: #d1d5db;
  --color-muted: #9ca3af;
  --color-border: #374151;
  --color-accent: #60a5fa;
  --color-accent-2: #4ade80;
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
    ink: '#d1d5db',
    muted: '#9ca3af',
    line: '#374151',
    accent: '#60a5fa',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep the editor and the preview side by side with thin grey borders.
- **Do:** Use blue (#60a5fa) for tags and the preview button.
- **Do:** Keep the preview panel white so it reads as a real page.
- **Don't:** Don't style the preview in dark colours.
- **Don't:** Don't add rounded corners beyond a small radius.
- **Don't:** Don't add decorative gradients to the panes.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
