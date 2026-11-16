# Design system — Travel Package Pricing Plans

`SN-W03149` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A three-tier pricing table on a dark ground, with a centred headline, a monthly and annual toggle, and dark cards. The middle card is marked as the popular plan with a violet top border and a solid violet button, while the other two stay as outlined dark panels.

**Mood:** clear, dark, structured, calm, tiered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 30px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Common gaps:** `gap-6`

**Primary button**

```html
<a class="w-full py-2 border border-linear-accent text-linear-accent rounded-lg font-medium hover:bg-linear-accent/10 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#a855f7',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Mark the recommended plan with a violet top border (#a855f7) and a solid button
- **Do:** Keep the other plan cards as dark outlined panels
- **Do:** List features with small check icons and short lines
- **Don't:** Don't use violet for more than the highlighted plan and the toggle
- **Don't:** Don't put white card fills on the dark ground
- **Don't:** Don't add more than one highlighted plan

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
