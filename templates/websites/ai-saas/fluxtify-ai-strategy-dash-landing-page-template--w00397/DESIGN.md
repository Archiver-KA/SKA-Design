# Design system — Fluxtify AI Strategy Dash Landing Page Template

`SN-W00397` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, dense SaaS dashboard for a strategy canvas: a left sidebar of navigation and a central canvas of linked idea cards joined by thin cyan connectors. Each card carries small metrics in coloured bars (purple, pink, blue) and a numeric score, so the page reads as an analytical tool. The base is a deep navy-black, and cyan lines are the only bright element in the structure.

**Mood:** dense, analytical, dark, structured, tool-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050914` | Page ground |
| Surface | `#0b0f19` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#131b2c` · `#22d3ee` · `#06b6d4` · `#0b0f19` · `#64748b` · `#050914` · `#67e8f9` · `#164e63`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 14px · h3 20px · body 12px
- **Weights in use:** medium, bold, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_rgba(0,255,255,0.1)]`, `shadow-[0_0_5px_rgba(0,255,255,0.8)]`, `shadow-[0_0_30px_rgba(0,255,255,0.05)]`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="px-4 py-2 bg-cyan-500 text-[#050914] text-sm font-bold rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:bg-cyan-400 transition-all hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]">…</a>
```

## Page structure

Blocks in page order:

1. Sidebar (`sidebar`)
2. Navigation bar (`navbar`)
3. Code / terminal (`code-terminal`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050914;
  --color-surface: #0b0f19;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050914',
    surface: '#0b0f19',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#22d3ee) for connectors and the active navigation state.
- **Do:** Set metric bars in purple (#a855f7) or pink-red, one colour per metric type.
- **Do:** Build cards on the dark panel (#0b0f19) with thin borders and small labelled numbers.
- **Don't:** Don't use bright fills for cards; they stay dark with coloured bars.
- **Don't:** Don't add more than one connector colour.
- **Don't:** Don't switch to a light background; the interface is dark navy throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
