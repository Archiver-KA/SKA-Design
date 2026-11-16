# Design system — Investor Relations Landing Page Template

`SN-W00985` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A corporate annual-report style page: a dark, photographic hero with a full-bleed architectural image of city towers under a near-black overlay. The white wordmark and small uppercase labels sit on the image, and figures such as 30+ and $4.2B are set large and plain. The look is institutional and sober, and the photograph, not colour, does most of the work.

**Mood:** institutional, sober, photographic, corporate, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d2ff00` | Primary action and highlights |
| Second accent | `#60a5fa` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d2ff00` · `#000000` · `#60a5fa` · `#64748b` · `#3b82f6` · `#94a3b8` · `#020617` · `#1e293b` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, JetBrains Mono, Google Sans Flex, Geist, Roboto
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 16px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.8)]`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="tab-btn text-left px-6 py-4 rounded-xl text-lg font-medium text-white bg-white/5 border border-white/10 transition-all hover:bg-white/10 ring-1 ring-blue-500/50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Contact form (`contact-form`)
4. About (`about`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #d2ff00;
  --color-accent-2: #60a5fa;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#d2ff00',
    accent2: '#60a5fa',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Place the hero copy over a darkened photograph, not a flat light panel.
- **Do:** Set key figures large with small uppercase captions beneath them.
- **Do:** Keep the logo white, top left, over the image.
- **Don't:** Don't place the wordmark on a light background.
- **Don't:** Don't add a second accent colour to the stats row.
- **Don't:** Don't tint the photograph with the brand colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
