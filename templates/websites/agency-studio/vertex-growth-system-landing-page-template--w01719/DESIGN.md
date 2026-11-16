# Design system — Vertex Growth System Landing Page Template

`SN-W01719` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light, airy landing page on a near-white ground with a faint blue wash. Headlines are heavy sans in deep navy [#0f172a], and one line of each headline is set in blue [#2563eb] to carry the emphasis. Blue is the only chroma; calls to action are solid navy and blue buttons, so the page reads as clean and fast rather than decorative.

**Mood:** clean, light, fast, modern, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#fef9c3` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#2563eb` · `#e2e8f0` · `#f1f5f9` · `#64748b` · `#f8fafc` · `#dbeafe` · `#1d4ed8` · `#eff6ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 20px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-slate-200/50`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 font-semibold rounded-xl text-lg shadow-xl transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #0f172a;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
  --color-accent-2: #fef9c3;
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
    surface: '#0f172a',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#2563eb',
    accent2: '#fef9c3',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy sans in navy (#0f172a) with one line in blue (#2563eb)
- **Do:** Use solid blue for the primary button and navy for the dark secondary button
- **Do:** Keep the background near white with at most a soft blue gradient behind the hero
- **Don't:** Don't set the hero on a solid blue field, which breaks the light scheme
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't use thin weights for headlines

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
