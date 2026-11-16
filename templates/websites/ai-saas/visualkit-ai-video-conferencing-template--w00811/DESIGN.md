# Design system — Visualkit AI Video Conferencing Template

`SN-W00811` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark video-meeting product page where the hero is a single large panel showing the real interface: a code editor, a participant video grid and an AI side panel. Indigo (#6366f1) marks presence indicators and the primary action, and the text is light grey on near-black. The design is dense, tool-like and flat, with the product interface doing the work of the headline.

**Mood:** dense, dark, tool-like, flat

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#262626` · `#6366f1` · `#737373` · `#d4d4d4` · `#171717` · `#e5e5e5` · `#a3a3a3` · `#404040` · `#0a0a0a` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[0_0_10px_rgba(99,102,241,0.5)]`
- **Common gaps:** `gap-2`, `gap-1.5`, `gap-4`

**Primary button**

```html
<a class="px-4 h-10 rounded-xl flex items-center gap-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/20 transition-colors font-medium text-xs tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #f5f5f5;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #6366f1;
  --color-accent-2: #ef4444;
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
    surface: '#262626',
    ink: '#f5f5f5',
    muted: '#737373',
    line: '#262626',
    accent: '#6366f1',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Show the product interface at full width as the hero
- **Do:** Use indigo (#6366f1) for presence and primary highlights
- **Do:** Keep text in light grey on the near-black ground
- **Don't:** Don't add gradients behind the product screenshot
- **Don't:** Don't use red (#ef4444) for anything except leave or end actions
- **Don't:** Don't use a large display headline; the h1 is small (14px)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
