# Design system — AI4SOM Inclusive Education Platform Template

`SN-W03410` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Bright education-platform page on a pale grey-blue ground with a large dark navy headline in heavy sans. The final word is set in an indigo-to-violet gradient, and the primary button carries a similar gradient toward cyan, so the brand colours appear only in those two places. Large stat figures in dark navy sit below the buttons, with a soft gradient orb in the corner.

**Mood:** bright, institutional, modern, optimistic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0a2540` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#f1f5f9` · `#e2e8f0` · `#06b6d4` · `#0a2540` · `#22d3ee` · `#f8fafc` · `#64748b` · `#0891b2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-blue-900/10`
- **Content width:** `max-w-7xl`, `max-w-[80%]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="text-sm font-medium px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-50 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Dashboard preview (`dashboard-preview`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Timeline (`timeline`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0a2540;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #22d3ee;
  --color-accent-2: #c084fc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#0a2540',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#22d3ee',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in dark navy (#0a2540) with the last word in the indigo gradient.
- **Do:** Use the indigo-to-cyan gradient on the primary button only.
- **Do:** Set the stat figures in dark navy at large size, with small labels beneath.
- **Don't:** Don't apply the gradient to body copy or labels.
- **Don't:** Don't add a second gradient button in the same section.
- **Don't:** Don't use the orb as a decorative element behind text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
