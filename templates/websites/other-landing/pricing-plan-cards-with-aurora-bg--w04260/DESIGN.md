# Design system — Pricing Plan Cards with Aurora BG

`SN-W04260` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black pricing page with three dark grey cards and a monthly and annual toggle above them. The middle Professional plan is the focus, with a purple-to-blue gradient button and a violet outline around its card, while the outer plans use grey buttons. Prices are white and large, and the feature lists are short and quiet.

**Mood:** focused, dark, quiet, gradient

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#e5e7eb` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e7eb` · `#818cf8` · `#9ca3af` · `#d1d5db` · `#c084fc` · `#60a5fa` · `#6366f1` · `#000000` · `#9333ea`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** -apple-system
- **Body:** -apple-system
- **Scale (largest breakpoint):** h1 36px · h3 20px · body 14px
- **Weights in use:** light, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #e5e7eb;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #c084fc;
  --font-display: "-apple-system", sans-serif;
  --font-body: "-apple-system", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#e5e7eb',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['-apple-system'], sans: ['-apple-system'] },
} }
```

## Do and don't

- **Do:** Use the purple-to-blue gradient only on the highlighted plan's button
- **Do:** Keep the outer plan buttons in dark grey with light text
- **Do:** Set prices large and white, with a monthly and annual toggle above the cards
- **Don't:** Don't use the gradient on the outer plans
- **Don't:** Don't add a light background to the pricing page
- **Don't:** Don't put the toggle inside the cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
