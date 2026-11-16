# Design system — Digital Space Landing Page UI

`SN-W04188` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm off-white landing page with a Lora serif headline in dark ink, and the key phrase set in coral. Soft blurred blobs sit behind the hero, and the layout is open, with rounded pill buttons and one short line of copy. Nunito Sans sets the body text, and the palette stays warm throughout.

**Mood:** soft, warm, calm, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#facc15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Lora
- **Body:** Nunito Sans
- **Loaded families:** Nunito Sans, Lora
- **Scale (largest breakpoint):** h1 60px · h3 18px · body 14px
- **Weights in use:** semibold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-pastel`, `shadow-pastel-lg`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-12`

**Primary button**

```html
<a class="btn-hover-effect px-8 py-3 bg-pastel-primary text-white font-semibold rounded-full shadow-pastel transition-all duration-300 hover:bg-pastel-primaryHover hover:transform hover:-translate-y-1 text-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #facc15;
  --font-display: "Lora", serif;
  --font-body: "Nunito Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#facc15',
  },
  fontFamily: { display: ['Lora'], sans: ['Nunito Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Lora with the key phrase in coral
- **Do:** Use rounded pill buttons, one filled and one outlined
- **Do:** Keep the blurred background blobs soft and behind the content
- **Don't:** Don't use cool or saturated blues; the palette stays warm
- **Don't:** Don't add more than one accent colour to the hero
- **Don't:** Don't use hard-edged buttons or square cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
