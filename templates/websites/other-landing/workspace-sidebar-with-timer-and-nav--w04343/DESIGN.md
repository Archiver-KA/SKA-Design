# Design system — Workspace Sidebar with Timer and Nav

`SN-W04343` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark time-tracking workspace with a narrow grouped sidebar on the left and a weekly calendar grid filling the main area. Events are drawn as tinted blocks with a short title and a time line, and the active navigation item is a solid blue [#3b82f6] bar. A thin red line marks the current time across the grid, and the summary tiles above use green for logged totals.

**Mood:** functional, dark, dense, organised, productive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#374151` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#374151` · `#9ca3af` · `#d1d5db` · `#ffffff` · `#1f2937` · `#3b82f6` · `#4b5563` · `#e5e7eb` · `#34d399` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 20px · h2 18px · h3 12px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs font-medium py-2 px-3 rounded-md transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #374151;
  --color-text: #f3f4f6;
  --color-muted: #9ca3af;
  --color-border: #374151;
  --color-accent: #3b82f6;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#374151',
    ink: '#f3f4f6',
    muted: '#9ca3af',
    line: '#374151',
    accent: '#3b82f6',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#3b82f6) for the active navigation item and primary buttons only
- **Do:** Draw calendar events as tinted blocks with a title and a time line
- **Do:** Use green (#10b981) for logged totals and completed time
- **Don't:** Don't use light surfaces for the sidebar or calendar
- **Don't:** Don't add more than one solid button to the header
- **Don't:** Don't use red anywhere except the current-time line

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
