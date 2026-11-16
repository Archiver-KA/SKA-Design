# Design system — Demimonde AI Companion Landing Page Template

`SN-W00337` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, saturated companion-app page on a near-black violet ground (#090514). The headline uses a pink-to-cyan gradient on its final word, and pink (#f9308d) and cyan (#1cd7f6) glow behind two phone previews. Rounded chips and soft neon edges make the page feel immersive and personal.

**Mood:** immersive, intimate, neon, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#090514` | Page ground |
| Surface | `#120822` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f9308d` | Primary action and highlights |
| Second accent | `#1cd7f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f9308d` · `#1cd7f6` · `#9b44e5` · `#94a3b8` · `#090514` · `#120822` · `#cbd5e1` · `#e2e8f0` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 76px · h2 56px · h3 20px · body 13px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[24px]` (24px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1440px]`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="relative inline-flex items-center justify-center rounded-full overflow-hidden group transition-transform hover:scale-105 duration-300 shadow-[0_0_25px_rgba(249,48,141,0.3)] bg-gradient-to-r from-[#f9308d] via-[#b63ce6] to-[#1cd7f6] px-6 py-2.5 text-[13px] font-semibold text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. Stats band (`stats`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #090514;
  --color-surface: #120822;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #f9308d;
  --color-accent-2: #1cd7f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#090514',
    surface: '#120822',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#f9308d',
    accent2: '#1cd7f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing headline phrase with the pink-to-cyan gradient
- **Do:** Frame product mockups with a soft pink or cyan neon edge
- **Do:** Keep the primary button a pink-to-cyan gradient, the only solid fill
- **Don't:** Don't use flat solid pink over large areas
- **Don't:** Don't add more than two glow colours to one screen
- **Don't:** Don't put the phone previews on light backgrounds

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
