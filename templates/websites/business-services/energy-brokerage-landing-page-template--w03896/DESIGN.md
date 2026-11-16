# Design system — Energy Brokerage Landing Page Template

`SN-W03896` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A warm off-white page with a large near-black sans-serif headline set in tight lines, and a pale grey circle filling the right side as a quiet backdrop. The primary button is olive green, and a rotating circular badge with olive text adds one decorative motif. Small pale cards hold secondary facts, so the layout reads calm and editorial.

**Mood:** calm, editorial, natural, restrained, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f4f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#5c5c5a` | Secondary copy, captions |
| Border | `#dcdacd` | Hairlines, dividers, outlines |
| Accent | `#5d674f` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#1a1a1a` · `#ffffff` · `#5d674f` · `#5c5c5a` · `#dcdacd` · `#f5f4f0` · `#e8eae4` · `#333333` · `#000000` · `#f9f9f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-screen-2xl`, `max-w-screen-xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="border border-[#1a1a1a] text-[#1a1a1a] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#1a1a1a] hover:text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Services (`services`)
5. Stats band (`stats`)
6. Team (`team`)
7. Marquee (`marquee`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)
11. Modal / overlay (`modal-overlay`)
12. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f4f0;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #5c5c5a;
  --color-border: #dcdacd;
  --color-accent: #5d674f;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f4f0',
    surface: '#ffffff',
    ink: '#1a1a1a',
    muted: '#5c5c5a',
    line: '#dcdacd',
    accent: '#5d674f',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in large near-black sans-serif with tight line spacing
- **Do:** Use the olive green (#5d674f) for the primary button and the circular badge
- **Do:** Keep the page on warm off-white (#f5f4f0) with pale grey shapes as backdrops
- **Don't:** Don't use bright green; the olive stays muted
- **Don't:** Don't add more than one decorative badge to a screen
- **Don't:** Don't place text over the pale circle shapes; they stay as backdrops

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
