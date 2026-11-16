# Design system — Crypto Wealth Group Landing Page Template

`SN-W00908` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, understated hero for an investment community, on a near-black ground. The second headline line is set in pale cyan [#22d3ee] in a regular weight of a geometric sans. Navigation is quiet, with small uppercase links and a thin underline on the active item.

**Mood:** premium, dark, cool, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#06b6d4` | Page ground |
| Surface | `#d4d4d8` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#22d3ee` · `#94a3b8` · `#2563eb` · `#d4d4d4` · `#06b6d4` · `#737373` · `#64748b` · `#71717a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 18px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_20px_rgba(59,130,246,0.1)]`, `shadow-[0_0_15px_rgba(6,182,212,0.2)]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-x-3`, `gap-y-3`

**Primary button**

```html
<a class="w-full py-3 text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mt-auto border bg-white/5 border-white/10 text-white hover:bg-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Integrations (`integrations`)
7. Pricing (`pricing`)
8. Logo cloud (`logo-cloud`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #06b6d4;
  --color-surface: #d4d4d8;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #f97316;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#06b6d4',
    surface: '#d4d4d8',
    ink: '#111111',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in cyan (#22d3ee)
- **Do:** Use small uppercase labels above the headline
- **Do:** Keep the nav underline thin and tied to the active item
- **Don't:** Don't use cyan for large background fields
- **Don't:** Don't set the headline in bold weight; it uses a regular weight
- **Don't:** Don't place a filled button in the hero; the buttons are outlined

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
