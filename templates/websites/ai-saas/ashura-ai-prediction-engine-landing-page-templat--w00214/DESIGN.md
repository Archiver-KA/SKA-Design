# Design system — ASHURA AI Prediction Engine Landing Page Template

`SN-W00214` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, glowing predictive-analytics hero on near-black navy (#020617). The name is set in large white sans, with the word AI in a violet-to-cyan gradient, and a grey serif-free subtitle below. Cyan and violet appear as gradient text and as the purple primary button, and a live-server strip at the bottom edge gives the page an operational feel.

**Mood:** dark, analytical, glowing, operational

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#475569` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#8b5cf6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#020617` · `#94a3b8` · `#22d3ee` · `#06b6d4` · `#1e293b` · `#0f172a` · `#475569` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)]`, `shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="bg-white text-slate-950 hover:bg-cyan-50 transition-colors px-4 py-2 rounded text-sm font-medium tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #475569;
  --color-text: #ffffff;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #8b5cf6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#475569',
    ink: '#ffffff',
    muted: '#475569',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#8b5cf6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in white and the highlight word in a violet-to-cyan gradient
- **Do:** Use the purple gradient fill on the primary button only
- **Do:** Keep the live status strip along the bottom edge as a thin, dark panel
- **Don't:** Don't use the gradient on body text
- **Don't:** Don't add a light section to the hero
- **Don't:** Don't use more than two hues in the hero gradients

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
