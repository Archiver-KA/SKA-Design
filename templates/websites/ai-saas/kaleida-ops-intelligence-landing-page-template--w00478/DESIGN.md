# Design system — Kaleida Ops Intelligence Landing Page Template

`SN-W00478` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A cinematic dark intelligence page: a near-black ground with a dotted globe rendered in blue points, and very large uppercase headlines in white and steel grey. The last word fades into a pale blue gradient (#3b82f6 to a lighter blue), and a monospaced status line adds a surveillance-style texture. Blue is the only accent.

**Mood:** cinematic, surveillance-style, dark, uppercase, intense

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020204` | Page ground |
| Surface | `#555555` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#60a5fa` · `#a3a3a3` · `#020204` · `#737373` · `#525252` · `#000000` · `#2563eb` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 14px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_30px_rgba(0,0,0,0.5)]`, `shadow-[0_0_20px_rgba(59,130,246,0.3)]`, `shadow-[0_0_20px_rgba(59,130,246,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-1`, `gap-10`

**Primary button**

```html
<a class="hidden md:flex items-center gap-3 px-5 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all clip-hud relative overflow-hidden group">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, React
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #020204;
  --color-surface: #555555;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #f97316;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020204',
    surface: '#555555',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#f97316',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase, with the last word in the blue gradient
- **Do:** Use blue (#3b82f6) for the primary action and the globe points
- **Do:** Keep small status labels in monospace uppercase
- **Don't:** Don't add orange to the hero; blue is the only accent
- **Don't:** Don't use light backgrounds
- **Don't:** Don't place text over the brightest globe points

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
