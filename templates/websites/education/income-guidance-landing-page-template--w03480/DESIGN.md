# Design system — Income Guidance Landing Page Template

`SN-W03480` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A warm, airy landing page on a pale off-white ground (#f9f8f6), with a large dark slate headline (#2d3b42) in a geometric sans and a bright coral (#ef4623) primary button. Soft blurred blue and coral gradients sit in the corners of the hero, and the rest of the page is kept simple and open. Rounded corners keep every element friendly.

**Mood:** airy, warm, friendly, simple, open

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f8f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2d3b42` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4623` | Primary action and highlights |
| Second accent | `#bbddef` | Supporting highlights |

Palette by frequency of use: `#2d3b42` · `#ffffff` · `#ef4623` · `#bbddef` · `#f9f8f6` · `#f9f0e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Source Serif 4
- **Loaded families:** Geist, Plus Jakarta Sans, Source Serif 4
- **Scale (largest breakpoint):** h2 48px · h3 24px · body 20px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-coral/20`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="bg-coral font-sans font-medium text-lg px-8 py-4 rounded-full shadow-lg shadow-coral/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-white flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. 3D / canvas scene (`3d-canvas`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9f8f6;
  --color-surface: #ffffff;
  --color-text: #2d3b42;
  --color-border: #ffffff;
  --color-accent: #ef4623;
  --color-accent-2: #bbddef;
  --font-display: "Geist", sans-serif;
  --font-body: "Source Serif 4", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f8f6',
    surface: '#ffffff',
    ink: '#2d3b42',
    line: '#ffffff',
    accent: '#ef4623',
    accent2: '#bbddef',
  },
  fontFamily: { display: ['Geist'], sans: ['Source Serif 4'] },
} }
```

## Do and don't

- **Do:** Use coral (#ef4623) for the primary button only
- **Do:** Keep headlines in dark slate (#2d3b42) at large size
- **Do:** Keep blurred gradients to the corners behind the hero
- **Don't:** Don't add coral to body text
- **Don't:** Don't use hard-edged cards; the corners stay rounded
- **Don't:** Don't fill the page with more than two hues

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
