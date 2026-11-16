# Design system — Cybersecurity Landing Page Template

`SN-W00318` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, calm security page on near-black [#0a0a0a], where the hero headline is white and the second line is set in pale mint [#86efac]. Pill buttons sit under the headline, one solid with a small icon and one outlined, and a dark product panel below the hero sits in a soft green glow. The Czech copy and the restrained green give a premium, understated tone.

**Mood:** calm, premium, understated, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#86efac` | Primary action and highlights |
| Second accent | `#84cc16` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#22c55e` · `#a3a3a3` · `#171717` · `#86efac` · `#000000` · `#4ade80` · `#0a0a0a` · `#14b8a6` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Instrument Serif, Inter, Space Grotesk, Geist, Cormorant Garamond
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="relative border-gradient bg-transparent hover:bg-white/10 transition-colors text-xs font-semibold text-white rounded-full px-4 py-1.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Stats band (`stats`)
5. Marquee (`marquee`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Spline 3D
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #86efac;
  --color-accent-2: #84cc16;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#86efac',
    accent2: '#84cc16',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in pale mint (#86efac) and the first in white
- **Do:** Use one solid pill button and one outlined pill button side by side
- **Do:** Keep the green glow soft and behind the product panel, never behind text
- **Don't:** Don't use the violet (#a855f7) as a page ground
- **Don't:** Don't reflow the Czech headlines without checking the wrap
- **Don't:** Don't add a second accent colour; the page is green on black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
