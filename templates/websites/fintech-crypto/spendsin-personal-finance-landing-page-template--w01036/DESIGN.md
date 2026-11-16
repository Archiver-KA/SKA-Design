# Design system — SpendsIn Personal Finance Landing Page Template

`SN-W01036` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A neo-brutalist finance page on a pale yellow ground (#fef08a), with heavy black outlines on cards, badges and buttons. Headlines are bold black sans, and one phrase per headline sits on a pink highlight block with a black border, which is the signature. Product mockups are white cards with black borders, so the page reads as bold and playful rather than polished.

**Mood:** neo-brutalist, playful, bold, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fef08a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#86efac` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#71717a` · `#27272a` · `#fafafa` · `#86efac` · `#52525b` · `#fffdf7` · `#60a5fa` · `#fde047`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 20px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="bg-black text-white px-6 py-2.5 text-sm font-bold rounded-lg border-2 border-black brutal-shadow brutal-hover transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Process / steps (`how-it-works`)
6. Comparison (`comparison`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fef08a;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #71717a;
  --color-border: #000000;
  --color-accent: #60a5fa;
  --color-accent-2: #86efac;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fef08a',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#71717a',
    line: '#000000',
    accent: '#60a5fa',
    accent2: '#86efac',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Give every card, badge and button a solid black border (#000000)
- **Do:** Use the pale yellow (#fef08a) as the page ground, not white
- **Do:** Put one phrase per headline on a solid highlight block
- **Don't:** Don't use soft gradients or blurred glows; the style is flat and hard-edged
- **Don't:** Don't remove the black borders from cards to make them look lighter
- **Don't:** Don't use more than two highlight colours at once

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
