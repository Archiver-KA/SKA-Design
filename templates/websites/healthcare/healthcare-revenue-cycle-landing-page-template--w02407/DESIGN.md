# Design system — Healthcare Revenue Cycle Landing Page Template

`SN-W02407` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

PRISM RCM's hero is a diagonal gradient from deep slate at the lower left to pale grey-blue at the upper right, with a translucent glass navigation pill floating on top. The gradient and the white pill button carry the look. It reads as a cool, technical surface where depth comes from light falloff.

**Mood:** cool, glassy, technical, gradient-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0d9488` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0d9488` · `#e2e8f0` · `#0f172a` · `#94a3b8` · `#64748b` · `#1e293b` · `#cbd5e1` · `#475569` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Integrations (`integrations`)
5. About (`about`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #0d9488;
  --color-accent-2: #e2e8f0;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#0d9488',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use a diagonal slate gradient as the hero background
- **Do:** Put the navigation in a translucent glass pill with backdrop blur
- **Do:** Keep the primary button solid white with dark text
- **Don't:** Don't use flat colour blocks where the gradient is expected
- **Don't:** Don't add a second gradient over the hero; the single slate-to-grey ramp is the design
- **Don't:** Don't set navigation text in saturated colours

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
