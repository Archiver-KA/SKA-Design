# Design system — FundedX Prop Trading Landing Page Template

`SN-W00976` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pale grey hero has a large heavy display headline in dark grey, set on a soft blurred gradient. A single blue (#3b82f6) call to action sits beside a grey outlined secondary button, and small wide-tracked labels mark the sections. The page is light and capital-markets in tone, with blue kept to the one action.

**Mood:** light, capital-markets, bold, measured, animated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#0c0a09` | Headings and primary copy |
| Muted text | `#8a8f98` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#8a8f98` · `#f2f2f3` · `#3b82f6` · `#08090a` · `#fbbf24` · `#0b0c0e` · `#050505` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Mono
- **Body:** Inter
- **Loaded families:** Inter, Space Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_8px_rgba(59,130,246,0.6)]`, `shadow-[0_0_30px_rgba(37,99,235,0.4)]`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full py-3 px-4 rounded bg-amber-500 text-[#050505] text-sm font-semibold hover:bg-amber-400 transition-all text-left flex justify-between items-center shadow-[0_0_20px_rgba(245,158,11,0.3)] relative z-10 hover:scale-[1.02]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Pricing (`pricing`)
6. Integrations (`integrations`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f4;
  --color-text: #0c0a09;
  --color-muted: #8a8f98;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #3b82f6;
  --font-display: "Space Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f4',
    ink: '#0c0a09',
    muted: '#8a8f98',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Space Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#3b82f6) for the primary call to action only.
- **Do:** Set the hero headline heavy and very large in dark grey.
- **Do:** Track small section labels wide and keep them short.
- **Don't:** Don't use the amber (#f59e0b) next to the blue action.
- **Don't:** Don't set the blurred hero gradient behind body copy.
- **Don't:** Don't use more than one saturated colour in the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
