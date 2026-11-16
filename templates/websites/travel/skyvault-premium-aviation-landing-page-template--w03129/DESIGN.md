# Design system — SkyVault Premium Aviation Landing Page Template

`SN-W03129` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, glossy aviation landing page on a near-black ground (#000000) with a soft violet-to-blue glow behind the hero. The headline is large heavy sans, and its middle word takes a blue-violet gradient for emphasis above a small pill label. Solid blue is the action colour on the nav button, and the gradient is the one expressive move on the page.

**Mood:** dark, polished, luxurious, glowing, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#4b5563` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#60a5fa` · `#3b82f6` · `#d1d5db` · `#4b5563` · `#6366f1` · `#4ade80` · `#a855f7` · `#facc15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** SF Pro Display
- **Body:** SF Pro Display
- **Loaded families:** SF Pro Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 20px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-blue-500/40`, `shadow-blue-500/30`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 font-semibold border border-blue-500/30 transition-all hover:from-blue-500/30 hover:to-indigo-500/30 hover:scale-105 transform">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #4b5563;
  --color-accent: #3b82f6;
  --color-accent-2: #4ade80;
  --font-display: "SF Pro Display", sans-serif;
  --font-body: "SF Pro Display", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#4b5563',
    accent: '#3b82f6',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['SF Pro Display'], sans: ['SF Pro Display'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a heavy sans at large size, with one highlighted word in the blue-violet gradient
- **Do:** Use solid blue (#3b82f6) only for primary buttons such as Member Login
- **Do:** Keep the nav in a translucent dark glass bar with a hairline border
- **Don't:** Don't put the gradient on more than one word per headline
- **Don't:** Don't use light-coloured panels on the black ground
- **Don't:** Don't use the blue glow as a flat background fill; it stays a soft blurred light behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
