# Design system — Freelance Billing and Time Tracking Landing Page Template

`SN-W00403` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, product-led hero with a white Inter headline on near-black, a green-outlined primary button and a grey outlined secondary. On the right, a large dark app mockup shows a timer, an invoice and a weekly-hours panel, with green used for billable tags and active states. The green signals money and status, which keeps the page focused on the work rather than on decoration.

**Mood:** product-led, focused, dark, practical, crisp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#e4e4e7` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fcd34d` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#18181b` · `#d4d4d8` · `#fcd34d` · `#6ee7b7` · `#a5b4fc` · `#6366f1` · `#10b981` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Bricolage Grotesque
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 18px · body 14px
- **Weights in use:** light, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-inner`, `shadow-indigo-500/10`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center gap-1 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/30 font-geist tracking-tight animate-scale-in delay-900">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Integrations (`integrations`)
8. Pricing (`pricing`)
9. Testimonials (`testimonials`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D, Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #e4e4e7;
  --color-border: #ffffff;
  --color-accent: #fcd34d;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#e4e4e7',
    line: '#ffffff',
    accent: '#fcd34d',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the green (#10b981) only for billable tags, active states and the primary button outline.
- **Do:** Set the hero headline in Inter, white, in two lines at about 48px.
- **Do:** Show the product as a dark app mockup beside the copy, with dark cards and small labelled rows.
- **Don't:** Don't fill the primary button with green; it is outlined on a dark fill.
- **Don't:** Don't use green for body text.
- **Don't:** Don't add gradients or glow behind the mockup; its panels are flat dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
