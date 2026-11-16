# Design system — Crypto Charity Landing Page Template

`SN-W00897` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, airy page on a near-white ground with a faint mint and blush wash, where a large dark navy headline runs in one line with the word gives set in green (#059669). The primary button is near-black and the secondary a white outline, so green is kept for the one word. Centred copy and a small green status dot keep it gentle and community-led. The mint (#a7f3d0) is a soft wash on the background, not a solid ground.

**Mood:** light, gentle, airy, community-led, green-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#111827` · `#6b7280` · `#ffffff` · `#059669` · `#9ca3af` · `#10b981` · `#000000` · `#1f2937` · `#d1fae5` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, bold, extrabold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-md`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center text-sm font-bold text-gray-800 glass hover:bg-white/80 rounded-xl px-5 py-2.5 transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Product grid (`product-grid`)
6. Comparison (`comparison`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #059669;
  --color-accent-2: #fbbf24;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#059669',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the one green word in the headline (#059669) and keep the rest near-black
- **Do:** Make the primary button near-black (#111827) and the secondary a white outline
- **Do:** Keep the mint and blush wash as a soft background gradient only
- **Don't:** Don't use the mint (#a7f3d0) as a solid fill for cards or buttons
- **Don't:** Don't add a second accent hue to the hero
- **Don't:** Don't set the subline in a heavy weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
