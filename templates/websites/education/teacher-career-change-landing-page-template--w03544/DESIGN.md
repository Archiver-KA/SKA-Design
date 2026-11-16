# Design system — Teacher Career Change Landing Page Template

`SN-W03544` · education · light mode · Sinera Atlas theme `calm` · language `fr`

## Direction

The teacher career-change page is a light, formal layout with a deep navy (#0b1354) headline and primary button. The large sans-serif headline is set in navy, with the second line softened to a lighter slate grey for contrast. The centred hero uses generous white space and a single navy call to action. The tone is measured and institutional, suited to a training campus.

**Mood:** formal, measured, spacious, institutional, navy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#334155` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0b1354` | Primary action and highlights |
| Second accent | `#00e5ff` | Supporting highlights |

Palette by frequency of use: `#0b1354` · `#ffffff` · `#00e5ff` · `#64748b` · `#e2e8f0` · `#cbd5e1` · `#94a3b8` · `#f8fafc` · `#fafafa` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 18px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-lg bg-[#0B1354] text-white px-5 py-2.5 text-lg font-normal transition-all hover:bg-[#0B1354]/90 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Pricing (`pricing`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. FAQ (`faq`)
7. About (`about`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #334155;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #0b1354;
  --color-accent-2: #00e5ff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#334155',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#0b1354',
    accent2: '#00e5ff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in deep navy (#0b1354) with the second line in lighter slate
- **Do:** Use navy for the primary button and no other solid fill
- **Do:** Centre the hero text on a near-white ground with generous space
- **Don't:** Don't add bright colours to the hero
- **Don't:** Don't use the cyan accent for text on white
- **Don't:** Don't crowd the hero with more than one call to action

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
