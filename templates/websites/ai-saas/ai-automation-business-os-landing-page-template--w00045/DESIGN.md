# Design system — AI Automation Business OS Landing Page Template

`SN-W00045` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark page (#0a0a0f) carries a large white sans headline with an italic serif line for emphasis. Cyan (#00c2ff) marks console-style labels and the glowing dashboard panel. Monospace status text and a faux terminal make it read as an operations console rather than a marketing page. Amber (#f59e0b) appears on some panel metrics.

**Mood:** technical, dark, operational, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0f` | Page ground |
| Surface | `#94a3b8` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00c2ff` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#00c2ff` · `#94a3b8` · `#f59e0b` · `#22c55e` · `#a855f7` · `#000000` · `#0a0a0f` · `#0b1220` · `#00f0ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, JetBrains Mono, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_8px_white]`, `shadow-2xl`, `shadow-[0_0_8px_rgba(255,255,255,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="relative h-10 flex items-center justify-center rounded-[14px] bg-primary/10 border border-primary/30 px-6 text-[11px] font-bold tracking-wide text-primary hover:bg-primary/20 transition-all duration-300 overflow-hidden group shadow-neon-primary hover:shadow-[0_0_20px_rgba(0,194,255,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Stats band (`stats`)
6. Pricing (`pricing`)
7. Product grid (`product-grid`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0f;
  --color-surface: #94a3b8;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #00c2ff;
  --color-accent-2: #f59e0b;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0f',
    surface: '#94a3b8',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#00c2ff',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set status labels and tags in monospace in cyan (#00c2ff)
- **Do:** Use the glowing dashboard-style panel as the hero visual
- **Do:** Keep the italic serif for the emphasis line of the headline only
- **Don't:** Don't switch to a light page treatment
- **Don't:** Don't use amber (#f59e0b) for body text
- **Don't:** Don't put more than one glowing panel above the fold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
