# Design system — Mosaic Animation Landing Page Template

`SN-W00551` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A single animated component on black: a short wordmark in lime green (#84cc16) between thin bracket marks, with a small outlined Replay pill below. The rest of the stage is empty, so the component's colour and motion carry the look. The palette is near-black with grey text and one lime accent.

**Mood:** minimal, dark, animated, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#84cc16` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#365314` · `#8df885` · `#050505` · `#e5e5e5` · `#84cc16` · `#0a0a0a` · `#a3a3a3` · `#000000` · `#a3e635`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Weights in use:** medium

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_15px_#8DF885]`, `shadow-lg`, `shadow-lime-900/10`
- **Content width:** `max-w-4xl`
- **Common gaps:** `gap-8`, `gap-1.5`

**Primary button**

```html
<a class="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-medium text-neutral-400 hover:text-white backdrop-blur-md active:scale-95 shadow-sm shadow-black/50 px-2.5 py-1 text-[10px]">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #e5e5e5;
  --color-border: #ffffff;
  --color-accent: #84cc16;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#e5e5e5',
    line: '#ffffff',
    accent: '#84cc16',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the stage black and let one lime line (#84cc16) carry the component
- **Do:** Use thin bracket marks around animated text rather than heavy frames
- **Do:** Use a small outlined pill for the replay control
- **Don't:** Don't add extra accent colours to the component
- **Don't:** Don't fill the empty stage with imagery
- **Don't:** Don't colour the Replay control lime; it stays neutral

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
