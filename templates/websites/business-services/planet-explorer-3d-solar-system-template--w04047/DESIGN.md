# Design system — Planet Explorer 3D Solar System Template

`SN-W04047` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A minimal dark loading state on a deep navy ground. A small indigo spinner sits at the centre with a single line of small grey status text beneath it. Nothing else is shown, so the component relies on the indigo accent and the spinner's motion alone. The look is quiet and full-screen.

**Mood:** minimal, quiet, dark, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#e2e8f0` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#e2e8f0` · `#4f46e5` · `#6366f1` · `#818cf8` · `#cbd5e1` · `#020617` · `#0f172a` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 18px · h2 30px · h3 12px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-indigo-500/20`, `shadow-indigo-500/30`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg py-2.5 px-4 text-xs font-medium tracking-tight transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Hero (`hero`)
3. Sidebar (`sidebar`)

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #e2e8f0;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #4f46e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#e2e8f0',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#4f46e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the loading ground near-black navy (#020617)
- **Do:** Use indigo (#4f46e5) for the spinner only
- **Do:** Centre the status text in small grey type beneath the spinner
- **Don't:** Don't add progress bars or coloured text
- **Don't:** Don't use bright white for the status line
- **Don't:** Don't fill the loading state with extra decoration

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
