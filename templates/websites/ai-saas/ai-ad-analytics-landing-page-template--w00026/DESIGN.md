# Design system — AI Ad Analytics Landing Page Template

`SN-W00026` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black ground with a centred navigation pill and Inter throughout. Emerald (#10b981) is the accent and purple (#a855f7) a secondary, with glass-blur panels and a Three.js scene for 3D content.

**Mood:** technical, dark, glassy, ai-forward, restrained

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

- **Do:** Keep the navigation as a centred floating pill with blurred glass (backdrop blur)
- **Do:** Use the emerald (#10b981) for one primary action per section
- **Do:** Keep headings in Inter and let weight carry the hierarchy
- **Don't:** Don't put a white background behind the hero; the ground is black
- **Don't:** Don't use purple as a second primary button colour; keep it as a small accent
- **Don't:** Don't drop the Three.js layer; the template is built around a 3D canvas

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
