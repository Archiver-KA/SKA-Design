# Design system — FinTech Analytics Mobile App Template

`SN-W00943` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark mobile insights screen with a centred column of stacked cards on a near-black navy ground. A greeting card holds a short list of bullet insights and a full-width outlined button. The For You cards use a coloured left border, green for upgrades and red for alerts, and the bottom tab bar is a compact pill strip. Hierarchy comes from weight and colour in a small sans.

**Mood:** calm, dark, mobile, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#020617` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#64748b` · `#cbd5e1` · `#34d399` · `#3b82f6` · `#60a5fa` · `#10b981` · `#fbbf24` · `#020617`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · h2 18px · h3 18px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]`, `shadow-[0_0_8px_rgba(59,130,246,0.8)]`, `shadow-[0_0_8px_rgba(245,158,11,0.8)]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="relative z-10 w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10 flex items-center justify-center gap-2 text-sm font-medium text-white">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)
3. Articles (`blog-articles`)
4. Video / media (`video-media`)
5. Feature grid (`features`)
6. Navigation bar (`navbar`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #020617;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#020617',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use a coloured left border on cards: green for upgrades, red for alerts
- **Do:** Set the greeting as the main heading with the insight bullets below it
- **Do:** Keep the bottom tab bar as a compact pill strip
- **Don't:** Don't use blue as a background; the screen is dark navy
- **Don't:** Don't set body copy in full white; use the muted grey
- **Don't:** Don't use more than two status colours on one screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
