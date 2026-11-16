# Design system — Wellness and Massage Center Template

`SN-W02558` · healthcare · light mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A calm massage-studio page on a warm off-white ground, with a large dark sans headline and near-black pill buttons for the primary actions. The hero pairs the type with a tall rounded photograph of a therapist working with a client, and a booking pill floats over the corner of the image. The stance is soft and practical: the photograph carries the warmth and the dark buttons keep the actions plain.

**Mood:** calm, practical, warm, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#111111` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a88b79`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[calc(1.5rem-1px)]` (calc(1.5rem-1px))
- **Shadows:** `shadow-lg`, `shadow-brand-dark/5`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex rounded-full bg-brand-button px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark shadow-sm shadow-brand-button/20">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #111111;
  --font-display: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#111111',
  },
  fontFamily: { display: ['Manrope'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use near-black (#111111) for the primary pill buttons
- **Do:** Pair the headline with a tall rounded photograph of the treatment in the right column
- **Do:** Float a small booking pill over the corner of the photograph
- **Don't:** Don't use the taupe (#a88b79) from the tokens as a page ground; the page is off-white
- **Don't:** Don't add a second accent colour
- **Don't:** Don't square off the photograph; it keeps its rounded corners

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
