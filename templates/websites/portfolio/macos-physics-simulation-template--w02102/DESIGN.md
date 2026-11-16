# Design system — macOS Physics Simulation Template

`SN-W02102` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A snippet that imitates a macOS desktop: a deep navy-to-violet gradient fills the screen, with a translucent menu bar across the top, rounded app icons in soft colours, and a glass weather widget. Labels are small white sans text under each icon, and a translucent dock sits at the bottom. Its colours come from the icons rather than a fixed brand palette, so the navy ground is the constant.

**Mood:** playful, dark, glassy, tactile, interactive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f87171` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f87171` · `#ef4444` · `#0f172a` · `#94a3b8` · `#fb923c` · `#4ade80` · `#22d3ee` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-black/20`
- **Common gaps:** `gap-1`, `gap-2`, `gap-2.5`

**Primary button**

```html
<a class="group flex items-center justify-between px-3.5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition-all active:scale-[0.98]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Case studies (`case-studies`)
3. Code / terminal (`code-terminal`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f87171;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f87171',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the desktop ground a navy-to-violet gradient (#0f172a) behind all icons.
- **Do:** Use uniform rounded app tiles with white labels beneath each one.
- **Do:** Keep the menu bar and dock translucent with backdrop blur.
- **Don't:** Don't use a light background; the desktop reads as dark.
- **Don't:** Don't mix icon sizes across the desktop.
- **Don't:** Don't drop the labels' contrast; they must stay legible on the gradient.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
