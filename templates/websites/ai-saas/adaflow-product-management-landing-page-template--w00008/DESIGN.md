# Design system — AdaFlow Product Management Landing Page Template

`SN-W00008` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy frame holds a product-led hero, with a large serif headline in the left column and a preview of the app on the right. Small floating cards overlap the preview edge for live activity, and the blue primary button keeps the interface quiet.

**Mood:** focused, calm, product-led, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#cbd5e1` · `#1e293b` · `#4ade80` · `#0f172a` · `#334155` · `#475569` · `#e2e8f0` · `#6366f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="liquid-glass-button relative inline-flex h-11 cursor-pointer outline-none overflow-hidden hover:scale-105 hover:shadow-xl hover:-translate-y-0.5 active:scale-98 active:translate-y-px transition-all duration-300 ease-out text-sm font-medium text-white/90 bg-gradient-to-r from-white/10 to-white/5 border-white/15 border rounded-xl px-5 py-2.5 shadow-lg backdrop-blur-xl items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #0f172a;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #1e293b;
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
    surface: '#0f172a',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#1e293b',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Frame the hero as a rounded dark panel with the product preview on the right
- **Do:** Set the headline large and left-aligned above the body copy
- **Do:** Use small floating cards overlapping the preview edge for live activity
- **Don't:** Don't use the indigo (#6366f1) as the page background
- **Don't:** Don't place a bright gradient behind the preview
- **Don't:** Don't stack more than two floating cards on one preview

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
