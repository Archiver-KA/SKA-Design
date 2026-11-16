# Design system — Crypto Airdrop Claim Landing Page Template

`SN-W00893` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page with a white two-line headline where the second word is set in grey, and an orange (#fb5e01) glow washing the top right. The primary action is a solid orange pill with white text beside a dark outline button. A phone and transaction-feed mock sits on the right with green (#4ade80) incoming amounts, and a trust-label ticker runs along the bottom edge. Orange marks action; green marks value arriving.

**Mood:** dark, urgent, product-led, warm, orange-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#fb5e01` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#fb5e01` · `#71717a` · `#18181b` · `#a1a1aa` · `#000000` · `#52525b` · `#d4d4d8` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_40px_-10px_#fb5e01]`, `shadow-[0_0_20px_rgba(251,94,1,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-[#fb5e01] text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-[#ff6a13] hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_#fb5e01]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Map / location (`map-location`)
5. Footer (`footer`)
6. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #27272a;
  --color-accent: #fb5e01;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#27272a',
    accent: '#fb5e01',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the primary CTA as a solid orange (#fb5e01) pill with white text
- **Do:** Use green (#4ade80) only for incoming amounts in the feed mock
- **Do:** Run a trust-label ticker along the bottom edge of the hero
- **Don't:** Don't use orange for body copy or section backgrounds
- **Don't:** Don't set the headline in one colour; the second word is grey
- **Don't:** Don't use the green (#4ade80) for call-to-action buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
