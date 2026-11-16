# Design system — AcrediÓtica Eyewear Landing Page Template

`SN-W02308` · healthcare · light mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A warm off-white page with a bold black sans headline in which two words switch to a light italic serif, a play on the optical theme. Saturated yellow (#fecd01) is the accent for the offer tag and the primary button, set against a grey navigation bar. The product panel stays neutral and light, so the yellow does the work.

**Mood:** bright, retail, warm, playful, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e2dfd8` | Cards, panels, raised areas |
| Text | `#333333` | Headings and primary copy |
| Muted text | `#6b6963` | Secondary copy, captions |
| Border | `#e2dfd8` | Hairlines, dividers, outlines |
| Accent | `#fecd01` | Primary action and highlights |

Palette by frequency of use: `#fecd01` · `#1a1a1a` · `#333333` · `#6b6963` · `#e2dfd8` · `#ffffff` · `#99968f` · `#d4d2cb` · `#181818` · `#f8f7f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 16px · body 12px
- **Weights in use:** light, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-2xl`
- **Content width:** `max-w-[160px]`, `max-w-[1800px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 text-sm font-medium text-[#333333] bg-[#FECD01] px-5 py-2.5 rounded-md hover:bg-[#e6b800] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e2dfd8;
  --color-text: #333333;
  --color-muted: #6b6963;
  --color-border: #e2dfd8;
  --color-accent: #fecd01;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e2dfd8',
    ink: '#333333',
    muted: '#6b6963',
    line: '#e2dfd8',
    accent: '#fecd01',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set key words in a light italic serif inside the bold sans headline
- **Do:** Use the yellow (#fecd01) for the offer tag and the primary button
- **Do:** Keep the product panel neutral and light
- **Don't:** Don't make the page background yellow; yellow is the accent
- **Don't:** Don't use yellow for body text
- **Don't:** Don't place a yellow button on a yellow background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
