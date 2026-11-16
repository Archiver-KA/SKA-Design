# Design system — Visionary 3D Portfolio Website Template

`SN-W02282` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Near-black space with one cyan accent (#22d3ee) that glows through the large headline and the primary action. Inter at 96px in a heavy weight carries the title, with a small uppercase status label above it for a systems feel. Depth comes from blurred glow and dark glass panels rather than from hard edges.

**Mood:** futuristic, dark, technical, glowing, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#02040a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#22d3ee` · `#64748b` · `#06b6d4` · `#94a3b8` · `#020617` · `#cbd5e1` · `#000000` · `#02040a` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 30px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)]`, `shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)]`, `shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-medium text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 rounded-full hover:bg-cyan-900/40 hover:border-cyan-500/40 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #02040a;
  --color-surface: #000000;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
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
    background: '#02040a',
    surface: '#000000',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use #22d3ee only for the headline accent and the primary action
- **Do:** Pair the headline with a small uppercase status label above it
- **Do:** Put blurred glow behind the hero headline, not behind body text
- **Don't:** Don't add a second bright accent colour to the hero
- **Don't:** Don't lighten the page background above near-black
- **Don't:** Don't use soft pastel or rounded card fills; the surfaces stay dark and glassy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
