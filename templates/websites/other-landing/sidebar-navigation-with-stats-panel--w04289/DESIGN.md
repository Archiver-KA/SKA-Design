# Design system — Sidebar Navigation with Stats Panel

`SN-W04289` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A sidebar that comes in a dark navy variant with a violet primary button and a light variant with a near-black one. Integration rows carry small coloured dots for their connection state, and a status line sits at the foot. Both use Inter, and the light variant marks connected apps with a mint tint (#34d399) on the row.

**Mood:** dual-theme, clean, functional, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f1f5f9` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1e293b` · `#0f172a` · `#64748b` · `#334155` · `#94a3b8` · `#f1f5f9` · `#475569` · `#34d399` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 18px · h3 12px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg px-4 py-3 font-medium transition-all duration-300 hover-lift">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Sidebar (`sidebar`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f1f5f9;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1e293b;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f1f5f9',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1e293b',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the violet primary button in the dark variant and a near-black one in the light variant
- **Do:** Show each connected app with a coloured status dot at the row's right edge
- **Do:** Keep the mint highlight for connected apps on the light variant only
- **Don't:** Don't mix the dark and light button colours within one variant
- **Don't:** Don't remove the status line at the foot of the sidebar
- **Don't:** Don't use mint for the dark variant's highlight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
