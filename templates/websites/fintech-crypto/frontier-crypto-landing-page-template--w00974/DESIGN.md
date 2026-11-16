# Design system — Frontier Crypto Landing Page Template

`SN-W00974` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A brutalist page on light grey (#e5e5e5) with oversized uppercase headlines and acid-lime (#ccff00) as the one loud colour. Hard-edged boxes with black borders and monospace body text make the layout read as a manifesto rather than a product page. The page is light grey, not dark.

**Mood:** brutalist, loud, raw, uppercase, manifesto

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e5e5e5` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ccff00` · `#ffffff` · `#e5e5e5` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 18px
- **Weights in use:** black, bold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-[12px_12px_0_0_#CCFF00]`, `shadow-[4px_4px_0_0_#000]`, `shadow-[6px_6px_0_0_#000]`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="px-6 py-2 border-2 font-bold text-sm uppercase tracking-tight transition-all rounded-none border-[#CCFF00] bg-[#CCFF00] text-black hover:bg-black hover:border-black hover:text-[#CCFF00] font-mono tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e5e5e5;
  --color-text: #000000;
  --color-border: #000000;
  --color-accent: #ccff00;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e5e5e5',
    ink: '#000000',
    line: '#000000',
    accent: '#ccff00',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase, with the key phrase in lime (#ccff00).
- **Do:** Frame text blocks in hard black borders with no radius.
- **Do:** Use monospace for body text inside the bordered boxes.
- **Don't:** Don't put white headline text on the light grey ground.
- **Don't:** Don't use soft shadows or rounded corners.
- **Don't:** Don't use lime for body copy on light grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
