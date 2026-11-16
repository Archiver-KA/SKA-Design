# Design system — Email Client Sidebar Navigation

`SN-W04193` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark mail dashboard with a near-black sidebar (#0c0a09) and a warm grey panel system (#292524). Navigation rows are quiet light text with small count badges, and four coloured dots mark the labels: red, blue, green and amber. Stat tiles across the top and large chart panels below share the same panel grey, and Inter sets all text in light stone grey.

**Mood:** dark, utilitarian, calm, organised

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#e7e5e4` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#a8a29e` · `#292524` · `#1c1917` · `#000000` · `#57534e` · `#78716c` · `#e7e5e4` · `#10b981` · `#44403c` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 30px · h2 30px · h3 11px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-black/20`, `shadow-md`, `shadow`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-stone-300/90 to-stone-50/90 text-stone-900 font-medium py-3 shadow-inner shadow-white/10 hover:scale-[1.01] transition">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #292524;
  --color-text: #e7e5e4;
  --color-muted: #a8a29e;
  --color-border: #292524;
  --color-accent: #10b981;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#292524',
    ink: '#e7e5e4',
    muted: '#a8a29e',
    line: '#292524',
    accent: '#10b981',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep sidebar items as quiet text rows with small count badges
- **Do:** Use coloured dots, not filled chips, to mark labels
- **Do:** Set stat values large and their labels small in the top row
- **Don't:** Don't use bright fills for navigation items
- **Don't:** Don't set the sidebar and the panels on the same grey
- **Don't:** Don't use more than four label colours

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
