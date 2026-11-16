# Design system — Web3 SaaS Landing Page Template

`SN-W00827` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark purple page with a centred white headline and a lilac highlight on 'Without Coding' that carries the accent. The primary action is a solid purple pill beside a dark email field. Below the hero, a dark card shows a trading-style panel, and purple is the only colour. The layout is simple and centred, with glow shapes kept in the background.

**Mood:** centred, purple-led, dark, simple

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05060e` | Page ground |
| Surface | `#0b0c15` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#a855f7` · `#94a3b8` · `#c084fc` · `#0b0c15` · `#34d399` · `#e2e8f0` · `#cbd5e1` · `#f472b6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 16px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-purple-900/20`, `shadow-[0_-10px_40px_rgba(168,85,247,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="reveal reveal-up delay-200 bg-white hover:bg-slate-100 text-purple-950 transition-all duration-300 font-medium text-sm rounded-full px-10 py-3.5 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Code / terminal (`code-terminal`)
7. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #05060e;
  --color-surface: #0b0c15;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #a855f7;
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
    background: '#05060e',
    surface: '#0b0c15',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the purple (#a855f7) for the highlighted headline phrase and the primary button
- **Do:** Keep the hero centred with one headline, one line of copy and one input-plus-button row
- **Do:** Place product cards on a dark surface (#0b0c15) with rounded corners
- **Don't:** Don't set body copy in purple
- **Don't:** Don't add a second button colour next to the purple
- **Don't:** Don't use a light background in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
