# Design system — Nebula SaaS Landing Page Template

`SN-W00559` · ai-saas · light mode · Sinera Atlas theme `circuit`

## Direction

A light hero on white with a centred, large black headline in heavy sans-serif and a short grey subline. A solid blue primary button sits beside an outline button, and a small text label above marks a release note. Below the buttons, a product editor is shown in a faded state as the main proof. The page is restrained, so the blue button is the one strong colour.

**Mood:** clean, bright, direct, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0ea5e9` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#cbd5e1` · `#000000` · `#94a3b8` · `#0ea5e9` · `#38bdf8` · `#e2e8f0` · `#c084fc` · `#fbbf24` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h3 36px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-black/50`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-[12px]`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="rounded-md bg-sky-500/90 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-500">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #000000;
  --color-border: #ffffff;
  --color-accent: #0ea5e9;
  --color-accent-2: #fbbf24;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#000000',
    line: '#ffffff',
    accent: '#0ea5e9',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the solid blue button (#0ea5e9) for the primary action and an outline for the second
- **Do:** Set the headline in heavy black sans-serif, centred
- **Do:** Show the product editor below the buttons as the main visual
- **Don't:** Don't add colour to the headline
- **Don't:** Don't leave the product preview faded in production; it is the proof of the product
- **Don't:** Don't use a dark ground for the hero; the template is white throughout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
