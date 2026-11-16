# Design system — Nexura Creative Agency Landing Page Template

`SN-W01649` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark navy hero with a centred, tightly set white headline and a soft blue glow behind it, followed by a row of big stat numbers in a monospace face. White and dark-grey buttons sit in a pair, and the mono type and small badge give a technical, data-report tone. Blue (#3b82f6) appears mostly as glow and background tint.

**Mood:** technical, data-driven, dark, precise, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0f19` | Page ground |
| Surface | `#262a34` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#6b7280` · `#1c1f26` · `#34d399` · `#262a34` · `#3b82f6` · `#60a5fa` · `#a855f7` · `#c084fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** JetBrains Mono
- **Loaded families:** DotGothic16, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 16px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.2)]`, `shadow-[0_30px_100px_-20px_rgba(0,0,0,1)]`, `shadow-[0_0_30px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="px-5 py-2 rounded-full bg-white/10 border border-white/5 text-white text-xs font-medium hover:bg-white/20 transition-all backdrop-blur-md">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Logo cloud (`logo-cloud`)
4. Hero (`hero`)
5. Testimonials (`testimonials`)
6. Process / steps (`how-it-works`)
7. Pricing (`pricing`)
8. Stats band (`stats`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b0f19;
  --color-surface: #262a34;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #34d399;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "JetBrains Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0f19',
    surface: '#262a34',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#34d399',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['JetBrains Mono'] },
} }
```

## Do and don't

- **Do:** Set stat numbers large in the monospace face with short grey labels below
- **Do:** Use white for the primary button and dark grey for the secondary
- **Do:** Keep the blue glow behind the hero as the only colour field
- **Don't:** Don't set long body copy in the monospace face; keep it for numbers and labels
- **Don't:** Don't use the green (#34d399) on the hero buttons
- **Don't:** Don't add a second glow colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
