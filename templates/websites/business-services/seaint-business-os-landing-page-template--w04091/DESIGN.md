# Design system — SEAINT Business OS Landing Page Template

`SN-W04091` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A black, minimal enterprise hero with a large white sans headline, in which one key word sits inside a thin outlined box. Small floating tags with white text hover around the headline, and the actions are a faint outlined button beside a white text button. A dark product window below the copy shows the software, so the page relies on interface detail rather than colour.

**Mood:** enterprise, minimal, dark, precise, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#64748b` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#94a3b8` · `#cbd5e1` · `#64748b` · `#d4d4d8` · `#a1a1aa` · `#171717` · `#f4f4f5` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, JetBrains Mono, Roboto, Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_4px_20px_rgba(255,255,255,0.4)]`, `shadow-[0_0_15px_rgba(255,255,255,0.05)]`, `shadow-[0_8px_24px_-8px_rgba(255,255,255,0.25)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group relative inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-white/5 via-white/10 to-white/5 px-5 py-3 text-sm font-medium text-white/90 shadow-[0_0_15px_rgba(255,255,255,0.05)] ring-0 transition-all duration-300 hover:scale-105 hover:border-slate-400/40 hover:bg-gradient-to-br hover:from-slate-500/30 hover:to-slate-500/20 hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Code / terminal (`code-terminal`)
5. Call to action (`cta`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #64748b;
  --color-text: #f1f5f9;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
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
    surface: '#64748b',
    ink: '#f1f5f9',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#60a5fa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans, with one key word inside a thin outlined box
- **Do:** Keep the page on black with grey text and outlined buttons
- **Do:** Show the product as a dark window with small tab labels
- **Don't:** Don't add saturated colour to the hero; the product window carries the detail
- **Don't:** Don't fill the secondary button; it stays outlined
- **Don't:** Don't set the floating tags in bright colours

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
