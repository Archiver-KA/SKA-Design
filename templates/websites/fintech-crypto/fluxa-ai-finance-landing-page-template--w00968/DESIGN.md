# Design system — Fluxa AI Finance Landing Page Template

`SN-W00968` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white page where deep blue (#1d4ed8) marks the headline emphasis and the primary button, over near-black navy text (#020617). The headline is blurred mid-animation, so the reveal effect is part of the look. A product dashboard card with a left navigation list sits on the right, with a blue notification pill at its bottom edge.

**Mood:** clean, financial, blue, animated, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#020617` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1d4ed8` | Primary action and highlights |
| Second accent | `#a5f3fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1d4ed8` · `#e2e8f0` · `#64748b` · `#020617` · `#f8fafc` · `#94a3b8` · `#2563eb` · `#06145b` · `#dbeafe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 81px · h2 60px · h3 24px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-[-0.02em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[18px]` (18px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_22px_48px_rgba(37,84,244,0.36),inset_0_1px_0_rgba(255,255,255,0.38)]`, `shadow-[0_18px_38px_rgba(37,84,244,0.28),inset_0_1px_0_rgba(255,255,255,0.32)]`
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group inline-flex h-13 items-center justify-center gap-3 bg-blue-700 px-5 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(29,78,216,0.22)] transition hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-[0_22px_48px_rgba(29,78,216,0.28)] active:translate-y-0">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Pricing (`pricing`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #020617;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #1d4ed8;
  --color-accent-2: #a5f3fc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#020617',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#1d4ed8',
    accent2: '#a5f3fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#1d4ed8) on the emphasised headline phrase and the primary button.
- **Do:** Set headlines in heavy Inter in navy (#020617).
- **Do:** Keep the reveal animation on the hero headline only.
- **Don't:** Don't use the pale cyan (#a5f3fc) for text on white.
- **Don't:** Don't add more than one blue tone per section.
- **Don't:** Don't blur body copy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
