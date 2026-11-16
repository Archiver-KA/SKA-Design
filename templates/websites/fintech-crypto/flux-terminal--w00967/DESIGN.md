# Design system — Flux Terminal

`SN-W00967` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black terminal-style page (#050505) with white display type and a bright cyan (#7dfdfe) primary button. Labels are small uppercase monospace text, and live metrics sit in a bordered panel with a bar chart in grey-green. The layout reads as a command console rather than a marketing page.

**Mood:** technical, terminal, stark, monospace, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e5e5` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#7dfdfe` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#7dfdfe` · `#050505` · `#000000` · `#10b981` · `#e5e5e5` · `#333333` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_10px_#7DFDFE]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="ml-4 px-3 py-1 border border-flux-border hover:border-flux-cyan text-[10px] font-mono hover:text-flux-cyan transition-all bg-flux-panel">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Process / steps (`how-it-works`)
6. Feature grid (`features`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #333333;
  --color-text: #ffffff;
  --color-muted: #e5e5e5;
  --color-border: #ffffff;
  --color-accent: #7dfdfe;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#333333',
    ink: '#ffffff',
    muted: '#e5e5e5',
    line: '#ffffff',
    accent: '#7dfdfe',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#7dfdfe) only for the primary action.
- **Do:** Set small labels in uppercase monospace with wide tracking.
- **Do:** Frame metrics in bordered panels with hairline edges.
- **Don't:** Don't round panels or buttons beyond the small radius used here.
- **Don't:** Don't set long paragraphs in monospace.
- **Don't:** Don't add soft shadows for depth.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
