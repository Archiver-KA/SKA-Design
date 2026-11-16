# Design system — SortBot Algorithmic Visualizer

`SN-W03535` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

SortBot is a near-black, minimal interface where the content is a bar chart of sorting data. Controls sit in a compact top row of plain buttons, and the Arrange action is the only filled control, in solid white. Colour is kept to status: the bars are neutral grey, and indigo and green appear only in the Pending, Scanning and Sorted legend. Type is Inter throughout, with small uppercase labels for system status.

**Mood:** minimal, dark, technical, restrained, data-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#6366f1` · `#71717a` · `#d4d4d8` · `#10b981` · `#f4f4f5` · `#000000` · `#0a0a0a` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_10px_rgba(99,102,241,0.5)]`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use solid white only for the primary action button
- **Do:** Reserve indigo (#6366f1) and green (#10b981) for status states
- **Do:** Keep the bars in neutral greys so the sorting state reads clearly
- **Don't:** Don't add decorative gradients or illustrations behind the chart
- **Don't:** Don't fill secondary buttons with colour
- **Don't:** Don't use more than two accent colours for status

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
