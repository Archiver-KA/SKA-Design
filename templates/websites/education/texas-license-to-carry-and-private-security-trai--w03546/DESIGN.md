# Design system — Texas License to Carry & Private Security Training Template

`SN-W03546` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

The Texas LTC page is a dark, formal training page on a deep navy-black ground, with centred serif headlines set in white. A red (#b91c1c) pair of buttons gives the only solid colour, and a translucent stats bar sits under the hero with its figures in plain white. The serif headings and the state-approved badge give it an official, certificate-like tone.

**Mood:** formal, official, dark, serif, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b91c1c` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#b91c1c` · `#475569` · `#020617` · `#e2e8f0` · `#334155` · `#fcd34d` · `#cbd5e1` · `#f8fafc` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.18rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-slate-950/10`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="rounded-lg bg-red-700 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 transition hover:bg-red-600">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Testimonials (`testimonials`)
5. About (`about`)
6. Team (`team`)
7. Comparison (`comparison`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #334155;
  --color-text: #ffffff;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #b91c1c;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#334155',
    ink: '#ffffff',
    muted: '#475569',
    line: '#ffffff',
    accent: '#b91c1c',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in white serif, centred on the hero
- **Do:** Use red (#b91c1c) for the two primary course buttons only
- **Do:** Show key figures in a translucent stats bar under the hero
- **Don't:** Don't add a light background to the hero
- **Don't:** Don't set headlines in a casual or playful typeface
- **Don't:** Don't use more than one bright colour beyond the red and the gold badge

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
