# Design system — Procedural Art Landing Page Template

`SN-W00644` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet generative-art control panel on a warm off-white ground (#f5f3ee). A small white card at the top right holds four vertical parameter sliders in pastel lavender, sage, blue and pink. Pink (#edb9d6) is the single accent, used for the active label dot, and the look comes from the panel rather than the canvas.

**Mood:** quiet, pastel, instrumental, soft, experimental

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f3ee` | Page ground |
| Surface | `#fcfaf7` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#334155` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#edb9d6` | Primary action and highlights |
| Second accent | `#c3aed6` | Supporting highlights |

Palette by frequency of use: `#000000` · `#64748b` · `#334155` · `#edb9d6` · `#f5f3ee` · `#fcfaf7` · `#1e293b` · `#94a3b8` · `#c3aed6` · `#7b9c6a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_8px_32px_rgba(0,0,0,0.04)]`, `shadow-[0_0_8px_rgba(237,185,214,0.6)]`

**Primary button**

```html
<a class="flex items-center space-x-3 px-4 py-2 rounded-full hover:bg-black/5 transition-colors group cursor-pointer">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f3ee;
  --color-surface: #fcfaf7;
  --color-text: #000000;
  --color-muted: #334155;
  --color-border: #000000;
  --color-accent: #edb9d6;
  --color-accent-2: #c3aed6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f3ee',
    surface: '#fcfaf7',
    ink: '#000000',
    muted: '#334155',
    line: '#000000',
    accent: '#edb9d6',
    accent2: '#c3aed6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the background warm off-white (#f5f3ee) and let the canvas carry the colour
- **Do:** Use the pink (#edb9d6) only for the active dot and one control highlight
- **Do:** Set control labels in small grey sans with a short letter code
- **Don't:** Don't add heavy shadows to the parameter panel
- **Don't:** Don't place text over the generative canvas
- **Don't:** Don't use saturated colours in the controls; the pastels are the set

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
