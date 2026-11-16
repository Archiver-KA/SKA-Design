# Design system — AI Crypto Trading Platform Landing Page Template

`SN-W00860` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, high-contrast landing page: a near-black ground (#05050a) with white headlines and one lime accent (#87fe00) on the emphasised headline line and the status pill. The headline is a large serif, so the serif is the face to use. Colour carries the page and the layout stays sparse around a single hero.

**Mood:** dark, high-contrast, technical, sparse, neon-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05050a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#87fe00` | Primary action and highlights |
| Second accent | `#605de0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#87fe00` · `#a1a1aa` · `#05050a` · `#71717a` · `#605de0` · `#3f3f46` · `#d4d4d8` · `#00a6a6` · `#f43f5e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Playfair Display, Geist
- **Scale (largest breakpoint):** h1 88px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_rgba(135,254,0,0.3)]`, `shadow-[0_0_10px_rgba(135,254,0,0.5)]`, `shadow-[0_0_30px_rgba(135,254,0,0.25)]`
- **Content width:** `max-w-[1440px]`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Integrations (`integrations`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #05050a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #87fe00;
  --color-accent-2: #605de0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#05050a',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#87fe00',
    accent2: '#605de0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the lime (#87fe00) only on the emphasised headline line and the status pill
- **Do:** Keep the page ground near-black (#05050a) with muted grey body copy
- **Do:** Stack the hero headline large across four to five lines
- **Don't:** Don't use the purple (#605de0) as an accent
- **Don't:** Don't put lime on white surfaces or use it for body text
- **Don't:** Don't add decorative cards or glow shapes to the hero; the type carries it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
