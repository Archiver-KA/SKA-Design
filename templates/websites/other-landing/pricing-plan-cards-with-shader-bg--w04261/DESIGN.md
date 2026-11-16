# Design system — Pricing Plan Cards with Shader BG

`SN-W04261` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black pricing page where the second phrase of the headline is set in a pale cyan gradient, and a glowing blue ring passes behind the three cards. The cards are dark, with the middle Pro plan raised and marked by a cyan Most Popular badge. Cyan fills the buttons on the first two plans, while Enterprise uses a dark outline button.

**Mood:** luminous, dark, centred, symmetrical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#22d3ee` · `#111111` · `#67e8f9` · `#0f172a` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Inter
- **Scale (largest breakpoint):** h1 64px · h2 48px · body 16px
- **Weights in use:** semibold
- **Letter spacing:** `tracking-[-0.03em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="mt-auto w-full py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold text-[14px] transition">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Pricing (`pricing`)

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
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
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
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the highlight phrase in a pale cyan gradient (#22d3ee)
- **Do:** Use cyan (#22d3ee) for the buttons on the first two plans only
- **Do:** Keep the blue ring behind the cards, never over the text
- **Don't:** Don't add cyan to the Enterprise button
- **Don't:** Don't place the Most Popular badge on two plans
- **Don't:** Don't set the page on a light background; the ring needs dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
