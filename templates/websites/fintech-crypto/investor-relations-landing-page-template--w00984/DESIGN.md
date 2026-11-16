# Design system — Investor Relations Landing Page Template

`SN-W00984` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, editorial banking page: a near-black navy (#020617) ground with large white serif headlines, where one word per headline is set in italic grey-blue (#94a3b8). Colour is almost entirely neutral, and the only hue is a small green status dot. The serif display type carries the identity, while the sans-serif body and small uppercase labels stay quiet beside it.

**Mood:** editorial, restrained, institutional, monochrome, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#e2e8f0` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#94a3b8` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#64748b` · `#94a3b8` · `#cbd5e1` · `#0f172a` · `#020617` · `#475569` · `#e2e8f0` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, JetBrains Mono, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 48px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_0_50px_rgba(59,130,246,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="bg-white text-slate-950 px-4 py-1.5 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Stats band (`stats`)
5. Marquee (`marquee`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #e2e8f0;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #94a3b8;
  --color-accent-2: #34d399;
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
    surface: '#0f172a',
    ink: '#e2e8f0',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#94a3b8',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in the light serif display face and italicise one key word in grey-blue (#94a3b8).
- **Do:** Keep the page on the near-black ground (#020617) with white text.
- **Do:** Use the green dot (#34d399) only as a status marker, never as a button colour.
- **Don't:** Don't add a saturated accent colour to headings or buttons.
- **Don't:** Don't set headlines in the sans-serif body face.
- **Don't:** Don't place the hero copy on a bright or photographic panel.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
