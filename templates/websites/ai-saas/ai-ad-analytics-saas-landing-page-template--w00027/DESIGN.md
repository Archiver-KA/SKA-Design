# Design system — AI Ad Analytics SaaS Landing Page Template

`SN-W00027` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark-mode page with a black ground and a centred navigation pill. Emerald (#10b981) is the accent with purple (#a855f7) as a secondary, Inter is used throughout, and glass-blur panels with a Three.js scene handle the 3D parts.

**Mood:** dark, analytical, glassy, modern, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#171717` · `#a3a3a3` · `#e5e5e5` · `#737373` · `#525252` · `#000000` · `#fafafa` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 60px · h2 14px · h3 20px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-wide`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="group inline-flex items-center justify-center bg-emerald-500 text-white h-16 px-10 rounded-full text-lg font-semibold shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Pricing (`pricing`)
7. Integrations (`integrations`)
8. Call to action (`cta`)
9. Timeline (`timeline`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #fafafa;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#fafafa',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the navigation as a centred floating pill with blurred glass
- **Do:** Use the emerald (#10b981) for pricing buttons and the single primary action per section
- **Do:** Set section headings in Inter with a clear size step from body copy
- **Don't:** Don't switch to a white page ground; the page is black
- **Don't:** Don't use purple for primary buttons; it is a secondary accent
- **Don't:** Don't remove the Three.js canvas, which the template uses for its 3D content

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
