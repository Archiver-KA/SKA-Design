# Design system — Pricing Plans Display in Code Style

`SN-W04264` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Pricing is presented as a code editor: each plan is a JSON object inside a dark window with line numbers and file tabs. The middle plan gets a solid blue (#3b82f6) header and border, the only saturated colour in the block, so it marks the recommended option. The heading repeats that blue on one word, tying the title to the selection state.

**Mood:** technical, playful, dark, monospaced

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#f472b6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#86efac` · `#f472b6` · `#374151` · `#1f2937` · `#9ca3af` · `#3b82f6` · `#2563eb` · `#93c5fd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 36px
- **Weights in use:** bold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-blue-500/20`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-6`

**Primary button**

```html
<a class="w-full py-2 bg-gray-700 hover:bg-blue-600 text-white rounded transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Pricing (`pricing`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #374151;
  --color-accent: #3b82f6;
  --color-accent-2: #f472b6;
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
    muted: '#6b7280',
    line: '#374151',
    accent: '#3b82f6',
    accent2: '#f472b6',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Show each plan as a JSON-style block with line numbers and a file-tab header
- **Do:** Use the blue (#3b82f6) only for the highlighted plan's header and border
- **Do:** Keep the tab bar and window chrome in neutral greys so the code stays the focus
- **Don't:** Don't add green or pink accents to the plan blocks; blue is the only highlight
- **Don't:** Don't remove the line numbers from the code blocks
- **Don't:** Don't set the plan contents in a sans-serif face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
