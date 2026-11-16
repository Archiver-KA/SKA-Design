# Design system — Crypto Poker Gaming & Affiliate Template

`SN-W00903` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, high-contrast gaming landing page built on near-black [#08090c] with one saturated red [#e22d3e] reserved for the bonus call-to-action and the promo bar at the top. Headlines are large, heavy Inter with tight spacing. A cropped portrait with a red live-stat badge carries the trust signal, and blurred glass panels sit behind the content for depth.

**Mood:** high-contrast, bold, promotional, nocturnal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#08090c` | Page ground |
| Surface | `#12151a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e22d3e` | Primary action and highlights |
| Second accent | `#22d3ee` | Supporting highlights |

Palette by frequency of use: `#e22d3e` · `#9ca3af` · `#12151a` · `#ffffff` · `#f04352` · `#6b7280` · `#d1d5db` · `#f27681` · `#08090c` · `#0d0f13`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 56px · h2 40px · h3 18px · body 15px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.25em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-[#E22D3E]/10`, `shadow-[#E22D3E]/30`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 bg-[#E22D3E] hover:bg-[#F04352] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-[#E22D3E]/25 hover:shadow-[#E22D3E]/40">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #08090c;
  --color-surface: #12151a;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #e22d3e;
  --color-accent-2: #22d3ee;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#08090c',
    surface: '#12151a',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#e22d3e',
    accent2: '#22d3ee',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the red (#e22d3e) only for the main bonus button and the promo bar
- **Do:** Set headlines in heavy Inter at large size with tight leading
- **Do:** Place a red live-stat badge over the hero image to carry the trust signal
- **Don't:** Don't use the cyan (#22d3ee) for buttons; it is a secondary accent
- **Don't:** Don't introduce light backgrounds in the hero; it stays on near-black
- **Don't:** Don't replace the portrait with an illustration; the photo is the proof point

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
