# Design system — FinanceFlow Analytics Landing Page Template

`SN-W00927` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark analytics hero on near-black [#0b0b11], where the first headline line is pale slate and the second is a magenta-to-violet gradient. Body copy is muted grey. The buttons are ghost-styled and so low in contrast that they read as faint, and a small pill badge above the headline announces a real-time feature. Soft purple glow sits in the corners, away from the copy.

**Mood:** dark, analytic, soft, gradient-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b11` | Page ground |
| Surface | `#0f0f17` | Cards, panels, raised areas |
| Text | `#e2e8f0` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d946ef` | Primary action and highlights |
| Second accent | `#d946ef` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#cbd5e1` · `#94a3b8` · `#e2e8f0` · `#0b0b11` · `#d946ef` · `#6366f1` · `#e879f9` · `#0f0f17` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Geist Mono, Plus Jakarta Sans, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 72px · body 20px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]`, `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]`, `shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_40px_80px_-20px_rgba(0,0,0,0.7)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 opacity-0 translate-y-2 animate-[fadeInUp_500ms_ease-out_700ms_forwards] font-geist font-light">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Booking form (`booking`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D, Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0b11;
  --color-surface: #0f0f17;
  --color-text: #e2e8f0;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #d946ef;
  --color-accent-2: #d946ef;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b11',
    surface: '#0f0f17',
    ink: '#e2e8f0',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#d946ef',
    accent2: '#d946ef',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the magenta-to-violet gradient
- **Do:** Keep the pill badge above the headline small and outlined
- **Do:** Confine purple glow to the corners of the hero
- **Don't:** Don't use the gradient on body copy
- **Don't:** Don't reduce the button contrast further; the ghost buttons already read weakly
- **Don't:** Don't use a light background for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
