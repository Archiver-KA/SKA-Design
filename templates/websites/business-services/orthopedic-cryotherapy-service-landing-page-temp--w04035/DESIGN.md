# Design system — Orthopedic Cryotherapy Service Landing Page Template

`SN-W04035` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark clinical page on a deep navy ground. The headline is a clean white sans-serif, and its key phrase is set in pale cyan. A white pill is the primary booking button, and the hero image sits in a rounded panel with a soft cyan glow beneath it, giving the page a calm, medical tone.

**Mood:** clinical, calm, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#94a3b8` · `#64748b` · `#06b6d4` · `#f1f5f9` · `#e2e8f0` · `#f8fafc` · `#ecfeff` · `#eef2ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 16px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full py-3 bg-cyan-500 text-white font-medium rounded-xl hover:bg-cyan-400 transition-colors text-center text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Pricing (`pricing`)
5. Benefits (`benefits`)
6. Stats band (`stats`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #06b6d4;
  --color-accent-2: #6366f1;
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
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#06b6d4',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of the headline in cyan (#06b6d4)
- **Do:** Use a solid white pill for the main booking button
- **Do:** Frame the hero image in a rounded panel with a soft cyan glow
- **Don't:** Don't add light section backgrounds to the dark page
- **Don't:** Don't set body paragraphs in cyan
- **Don't:** Don't stack more than one glow behind the same panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
