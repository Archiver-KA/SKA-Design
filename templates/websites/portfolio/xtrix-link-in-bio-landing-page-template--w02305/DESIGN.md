# Design system — Xtrix Link-in-Bio Landing Page Template

`SN-W02305` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a stacked uppercase sans headline that fades from white to grey on its lower lines. Small monospace labels with a slash prefix and a green status dot give a developer tone, and a faint circle with a rotated diamond illustrates the hero on the right. Hairlines and one white button keep the look precise.

**Mood:** precise, developer, dark, technical, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#262626` · `#000000` · `#a3a3a3` · `#525252` · `#050505` · `#404040` · `#171717` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 14px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_rgba(255,255,255,0.5)]`, `shadow-[0_0_50px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="flex items-center gap-2 pl-4 pr-3 py-1.5 border border-neutral-700 rounded-full hover:border-white transition-colors group bg-neutral-900/50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Dashboard preview (`dashboard-preview`)
5. Comparison (`comparison`)
6. Logo cloud (`logo-cloud`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #10b981;
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
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#262626',
    accent: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in uppercase sans, fading from white to grey across lines
- **Do:** Use monospace labels with a // prefix for supporting copy and status
- **Do:** Keep hero decoration to thin circles and hairlines
- **Don't:** Don't use a light background; the ground is black
- **Don't:** Don't add more than one solid button to the hero
- **Don't:** Don't use the green (#10b981) for headlines; it marks status only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
