# Design system — Luxury Skincare E-commerce Landing Page Template

`SN-W01239` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark skincare hero on a near-black ground, with a tightly set bold white sans headline and a short grey lede. The primary action is a solid white pill and the secondary is an outlined pill. Proof points sit as a row of small icon-led stats, and a floating product card with yellow and green dots adds the only colour.

**Mood:** clinical, luminous, dark, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#171717` · `#d4d4d4` · `#34d399` · `#e5e5e5` · `#0a0a0a` · `#94a3b8` · `#fbbf24` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Bricolage Grotesque, Newsreader, Google Sans Flex, Oswald, DM Sans
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-3xl` (24px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 text-sm text-white/80 border-gradient before:rounded-2xl bg-white/5 hover:text-white transition font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Gallery / portfolio (`gallery-portfolio`)
3. Services (`services`)
4. Testimonials (`testimonials`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #d4d4d4;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#d4d4d4',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a heavy sans with tight letter spacing
- **Do:** Use white pills for the main action and outlined pills for the secondary
- **Do:** Put proof points as one row of small icon stats under the hero
- **Don't:** Don't use a light background; the design is near-black throughout
- **Don't:** Don't add more colour dots to the product card
- **Don't:** Don't use serif display type

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
