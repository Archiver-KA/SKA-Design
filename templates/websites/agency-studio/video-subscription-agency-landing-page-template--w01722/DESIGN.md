# Design system — Video Subscription Agency Landing Page Template

`SN-W01722` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, centred SaaS-style agency page on near-black [#0a0a0a] with white Inter headlines and a soft radial vignette behind the hero. The primary action is a white pill and the secondary is a dark outlined pill, so buttons carry the contrast rather than colour. Stats and service blocks sit on slightly lifted #171717 surfaces.

**Mood:** minimal, dark, confident, centred, saas

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#3b82f6` · `#d4d4d4` · `#737373` · `#0a0a0a` · `#60a5fa` · `#171717` · `#ef4444` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_1px_2px_rgba(0,0,0,0.2)]`, `shadow`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-2`, `gap-x-2`, `gap-y-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
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
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use white pills for primary buttons and dark outlined pills for secondary ones
- **Do:** Set headlines in Inter at large size with tight line spacing
- **Do:** Keep the page on #0a0a0a and lift cards to #171717
- **Don't:** Don't use a bright accent colour for buttons
- **Don't:** Don't left-align the hero; the layout is centred
- **Don't:** Don't put light backgrounds behind the stats blocks

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
