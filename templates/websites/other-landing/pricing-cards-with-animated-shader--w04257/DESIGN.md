# Design system — Pricing Cards with Animated Shader

`SN-W04257` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Three glass pricing cards sit over a dark ring of blue and violet light, with the middle plan raised and lit from behind. The highlighted card carries a cyan gradient button, while the outer cards use plain grey buttons, so the highlighted plan is the only one with colour. Type is a clean sans-serif with a large price and short feature lists in grey.

**Mood:** glassy, luminous, dark, plan-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#22d3ee` · `#4ade80` · `#111111` · `#f87171` · `#cffafe` · `#67e8f9` · `#2bffea` · `#06b6d4` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Inter
- **Scale (largest breakpoint):** h2 30px
- **Weights in use:** bold, semibold, extrabold
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-md`
- **Content width:** `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-5`, `gap-8`

**Primary button**

```html
<a class="w-full py-2 rounded-lg bg-gradient-to-tr from-white/10 to-white/20 border border-white/20 text-white font-semibold hover:bg-white/20 transition">…</a>
```

## Page structure

Blocks in page order:

1. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #111111;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #4ade80;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use the cyan gradient (#22d3ee) only on the highlighted plan's button
- **Do:** Keep the outer plan cards as dark glass with plain grey buttons
- **Do:** Set prices large in a clean sans-serif, with feature lists in grey
- **Don't:** Don't colour the outer plan buttons; they stay grey
- **Don't:** Don't place the shader ring over the pricing text
- **Don't:** Don't add a second highlighted plan

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
