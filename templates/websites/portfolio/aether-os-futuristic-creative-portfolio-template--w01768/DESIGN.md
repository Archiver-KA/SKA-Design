# Design system — Aether OS - Futuristic Creative Portfolio Template

`SN-W01768` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page ([#030305]) with a large white Inter headline over a glowing particle sphere. The sphere shifts through green-teal, blue and violet, and small coloured dots sit at the right edge. Colour comes almost entirely from that particle field, so the interface stays neutral and the sci-fi tone comes from the visuals.

**Mood:** luminous, dark, sci-fi, neutral interface

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030305` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#34d399` · `#10b981` · `#f97316` · `#030305` · `#000000` · `#6366f1` · `#9333ea` · `#0891b2` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 14px · body 20px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_8px_rgba(16,185,129,0.8)]`, `shadow-lg`, `shadow-black/20`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-8 py-3.5 rounded-full border border-orange-500/40 text-white/80 hover:text-white hover:bg-orange-500/5 hover:border-orange-500/70 transition-all duration-300 text-sm font-medium shadow-[0_0_15px_-5px_rgba(249,115,22,0.15)] hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Hero (`hero`)
3. About (`about`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030305;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030305',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the interface neutral and let the particle sphere carry the colour.
- **Do:** Set the headline in Inter, white, with the sub line in grey.
- **Do:** Use the green (#10b981) only for small status marks and sphere accents.
- **Don't:** Don't place a solid colour block behind the sphere; it flattens the effect.
- **Don't:** Don't use a light background; the design depends on the dark field.
- **Don't:** Don't add a second headline font; the page uses Inter throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
