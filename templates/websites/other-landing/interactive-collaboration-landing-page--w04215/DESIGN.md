# Design system — Interactive Collaboration Landing Page

`SN-W04215` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy hero (#0f172a) with a large white headline and a lavender star icon set inside a glowing ring on the left. The primary call to action is a purple-to-cyan gradient button, beside an outlined secondary button. Soft blurred light sits behind the ring, and the layout relies on glow and gradient rather than flat colour.

**Mood:** glowing, dark, futuristic, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#06b6d4` | Supporting highlights |

Palette by frequency of use: `#c084fc` · `#94a3b8` · `#ffffff` · `#a855f7` · `#06b6d4` · `#1e293b` · `#020617` · `#0f172a` · `#d8b4fe` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 60px · body 20px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-purple-500/25`, `shadow-purple-500/40`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105 hover:-translate-y-1">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #06b6d4;
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
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#06b6d4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline large and white
- **Do:** Use the purple-to-cyan gradient on the primary button only
- **Do:** Keep the glowing ring as the single hero graphic
- **Don't:** Don't use a light hero background
- **Don't:** Don't add a second gradient to the headline
- **Don't:** Don't use flat solid buttons with the glow treatment

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
