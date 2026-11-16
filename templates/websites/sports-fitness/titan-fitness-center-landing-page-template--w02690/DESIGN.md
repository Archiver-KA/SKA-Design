# Design system — TITAN Fitness Center Landing Page Template

`SN-W02690` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

Gym landing page with a dark photograph hero, large white headlines in bold Inter stacked on four lines, and a single lime (#a3e635) accent on the primary button and a feature card. The template is labelled light, but the first screen is dark, so the lime and white carry the contrast. Rounded cards sit below the hero, and the lime block is the one bright area on the page.

**Mood:** bold, athletic, high contrast, lime accent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#a3e635` · `#000000` · `#1c1c1a` · `#242422` · `#737373` · `#404040` · `#bef264` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="group flex items-center gap-3 rounded-full bg-lime-400 py-2 pl-6 pr-2 text-sm font-semibold text-neutral-900 transition hover:bg-lime-300">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#a3e635',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep headlines in bold Inter, white on the dark (#171717) photograph hero.
- **Do:** Use lime (#a3e635) for the primary button and one feature card per screen.
- **Do:** Keep cards rounded and set them on the dark ground with white text.
- **Don't:** Don't set the hero on a light background; the lime and white need the dark ground.
- **Don't:** Don't use lime for body text or small links.
- **Don't:** Don't cover the hero photograph with a flat colour block.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
