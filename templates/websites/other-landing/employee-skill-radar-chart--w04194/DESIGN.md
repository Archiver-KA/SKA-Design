# Design system — Employee Skill Radar Chart

`SN-W04194` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark skill assessment card on a near-black ground (#0a0a0a), with a slightly lighter grey panel (#262626) holding a hexagonal radar chart. The data shape is filled with translucent cyan (#22d3ee) and outlined in the same cyan, with small dots at each vertex. Axis labels are small and light around the chart, and a large cyan score sits at the foot of the card.

**Mood:** technical, clean, dark, data-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#22d3ee` · `#0a0a0a` · `#171717` · `#262626` · `#67e8f9` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 30px · h3 24px · body 18px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow`
- **Content width:** `max-w-2xl`, `max-w-[480px]`
- **Common gaps:** `gap-8`, `gap-2`

**Primary button**

```html
<a class="font-bold text-base px-6 py-3 rounded-xl bg-white/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 shadow transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#22d3ee',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Fill the radar shape in cyan (#22d3ee) at low opacity with a solid outline
- **Do:** Set the headline score large in cyan at the foot of the card
- **Do:** Keep axis labels small and light around the chart
- **Don't:** Don't use light card backgrounds in this chart family
- **Don't:** Don't add a second data colour to the radar
- **Don't:** Don't draw grid lines at full contrast; keep them faint

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
