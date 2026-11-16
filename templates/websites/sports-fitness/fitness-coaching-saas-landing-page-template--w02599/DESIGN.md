# Design system — Fitness Coaching SaaS Landing Page Template

`SN-W02599` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark SaaS-style page on pure black with a large white sans-serif headline whose second line is a soft grey gradient. Blue (#3b82f6) is the accent, used on the logo mark and a small pill badge, and the nav and pre-order button are white and solid. The hero sits over a faint glow, and a dark product panel below gives the page a software feel.

**Mood:** software, dark, glossy, modern, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#94a3b8` · `#000000` · `#60a5fa` · `#cbd5e1` · `#e2e8f0` · `#6b7280` · `#34d399` · `#22d3ee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, JetBrains Mono, Oswald
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 18px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-[0_0_15px_rgba(59,130,246,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="group relative inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-[0_0_15px_rgba(255,255,255,0.1)] ring-0 transition-all duration-300 hover:scale-105 hover:bg-slate-100">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Stats band (`stats`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #f1f5f9;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #34d399;
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
    surface: '#0a0a0a',
    ink: '#f1f5f9',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans-serif with the second line as a grey gradient
- **Do:** Use the blue (#3b82f6) for the logo mark and the small badge only
- **Do:** Keep the nav as a thin bordered bar with a solid white button at right
- **Don't:** Don't fill buttons with blue; the primary buttons are white or outlined
- **Don't:** Don't remove the faint glow behind the headline; it gives the hero its depth
- **Don't:** Don't add extra accent colours beyond the blue and a small green status

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
