# Design system — Restaurant Landing Page Template

`SN-W02985` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, bold food page: a near-black ground (#09090b) with a dimmed food photograph behind the hero, and a heavy white Inter headline whose second line runs in a red-to-amber gradient. Red (#dc2626) fills the primary buttons and the navigation order button, while a thin amber outlined tag sits above the headline. The layout is direct and food-first, with the red doing the action work.

**Mood:** bold, dark, food-first, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#27272a` · `#f59e0b` · `#09090b` · `#18181b` · `#dc2626` · `#ef4444` · `#d4d4d8` · `#71717a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-sm transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Timeline (`timeline`)
5. Map / location (`map-location`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f5f5f5;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #dc2626;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#f5f5f5',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#dc2626',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use red (#dc2626) for the primary buttons and the navigation order button.
- **Do:** Set the second headline line in the red-to-amber gradient, and the first in white.
- **Do:** Keep the hero photograph dimmed behind a dark overlay so the headline stays legible.
- **Don't:** Don't use the red as a page ground.
- **Don't:** Don't fill the eyebrow tag solid; it is an outline.
- **Don't:** Don't set body text in white; the copy is light grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
