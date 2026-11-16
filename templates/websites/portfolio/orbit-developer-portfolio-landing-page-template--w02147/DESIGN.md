# Design system — Orbit Developer Portfolio Landing Page Template

`SN-W02147` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark developer landing page on a deep navy ground, with a white headline in which one word, 'Intelligent', takes a violet-to-blue gradient. A small outlined status pill and a glowing orbital 3D illustration on the right give the hero its technical mood. Buttons are a solid white primary and a dark outlined secondary, so the gradient word is the one accent on the first screen.

**Mood:** futuristic, dark, technical, polished, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#c084fc` · `#64748b` · `#3b82f6` · `#93c5fd` · `#a855f7` · `#60a5fa` · `#0f172a` · `#6366f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-blue-900/20`
- **Content width:** `max-w-6xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Dashboard preview (`dashboard-preview`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #0f172a;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c084fc;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#0f172a',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the single gradient word in the hero (#c084fc to #3b82f6) and keep the rest of the headline white.
- **Do:** Place the orbital 3D illustration on the right of the hero, clear of the copy.
- **Do:** Use a solid white primary button with a dark outlined secondary beside it.
- **Don't:** Don't use the indigo #6366f1 as the ground; the ground is navy.
- **Don't:** Don't apply the gradient to body copy; only the highlighted word takes it.
- **Don't:** Don't remove the glow around the orbit; it is part of the mood.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
