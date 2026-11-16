# Design system — Sector Gateway Landing Page Template

`SN-W00699` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A cinematic, dark immersive hero: a near-black navy ground (#020617) with a glowing circular portal at the centre and an oversized headline that moves from white into pale sky blue. Sky blue (#38bdf8) is used as light, in glows, rings and the headline gradient, never as a fill. The headline sits over the portal on the same centre axis, so type and graphic read as one object.

**Mood:** cinematic, futuristic, dark, luminous, immersive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#38bdf8` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#020617` · `#0f172a` · `#38bdf8` · `#94a3b8` · `#1e293b` · `#cbd5e1` · `#334155` · `#bae6fd` · `#7dd3fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 24px · body 30px
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_25px_rgba(255,255,255,0.15)]`, `shadow-[0_0_80px_rgba(14,165,233,0.15)]`
- **Content width:** `max-w-3xl`, `max-w-6xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-8 py-4 rounded-xl bg-white text-slate-950 font-light hover:bg-slate-200 transition-colors inline-flex items-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.15)] text-lg">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #38bdf8;
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
    ink: '#cbd5e1',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#38bdf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use sky blue (#38bdf8) for glows, rings and the headline gradient only.
- **Do:** Keep the hero headline centred and oversized over the portal graphic.
- **Do:** Set supporting copy in pale slate (#cbd5e1) on the dark navy ground.
- **Don't:** Don't place light backgrounds behind the hero; the look depends on darkness.
- **Don't:** Don't use a second accent colour in the hero.
- **Don't:** Don't fill the portal with solid colour; it reads as a ring of light.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
