# Design system — Architect Exchange Landing Page Template

`SN-W03176` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark exchange landing page with a near-black ground, white headlines and a blue highlight on the key word, which is the only colour in the heading. Cyan and blue appear in the navigation button and in the trading panel. The page is built around a trading terminal panel, so the interface does most of the visual work.

**Mood:** technical, dark, precise, financial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#06b6d4` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#3b82f6` · `#60a5fa` · `#cbd5e1` · `#22d3ee` · `#64748b` · `#06b6d4` · `#000000` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_rgba(59,130,246,0.1)]`, `shadow-[0_0_20px_rgba(59,130,246,0.2)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[240px]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-cyan-600 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Pricing (`pricing`)
5. Feature grid (`features`)
6. Code / terminal (`code-terminal`)
7. Stats band (`stats`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #06b6d4;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #34d399;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#06b6d4',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use blue (#3b82f6) for the highlighted word in each headline
- **Do:** Set headlines in Plus Jakarta Sans in white on the dark ground
- **Do:** Show the trading terminal panel as the hero visual
- **Don't:** Don't add more than one highlight colour to a heading
- **Don't:** Don't use light grey panels in the hero
- **Don't:** Don't use decorative gradient backgrounds behind the terminal

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
