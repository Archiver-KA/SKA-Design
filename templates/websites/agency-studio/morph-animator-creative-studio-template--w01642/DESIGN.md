# Design system — Morph Animator Creative Studio Template

`SN-W01642` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark application UI, not a marketing page: a near-black canvas (#09090b) with a slim top toolbar of colour swatches, a large empty drawing stage, and a frame timeline along the bottom. Indigo (#6366f1) marks the selected frame and tool state, and the rest is greyscale. The design is a tool interface, so density and clarity matter more than display type.

**Mood:** functional, dark, dense, quiet, tool-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#6366f1` · `#ffffff` · `#a1a1aa` · `#18181b` · `#09090b` · `#3f3f46` · `#f4f4f5` · `#f87171` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-indigo-500/20`, `shadow-[0_0_10px_rgba(99,102,241,0.1)]`
- **Content width:** `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="flex items-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-2 rounded-full font-medium hover:bg-zinc-700 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-zinc-700">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #6366f1;
  --color-accent-2: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#6366f1',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Mark the active frame or tool with the indigo (#6366f1) outline only
- **Do:** Keep the drawing stage on a slightly lighter panel than the page background
- **Do:** Set small toolbar labels and frame numbers in muted grey (#a1a1aa)
- **Don't:** Don't read this as a hero-led landing page; it has one heading and no marketing sections
- **Don't:** Don't use the red (#f87171) accent for controls other than the colour swatch
- **Don't:** Don't add large display type to the tool chrome

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
