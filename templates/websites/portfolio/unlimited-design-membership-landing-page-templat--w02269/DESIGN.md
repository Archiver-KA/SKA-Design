# Design system — Unlimited Design Membership Landing Page Template

`SN-W02269` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A clean membership landing page on a pale blue-grey gradient ground (#f1f5f9), with a dark navy headline (#0f172a) set in a large sans on two lines. Floating tag shapes in blue and orange (#f47f37) hover over the hero, and a dark pill button sits beside a white outline button. The floating colour tags and the mockup strip below them are what make the page distinctive, while the copy stays dark on light.

**Mood:** friendly, clean, playful, light, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f1f5f9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#f47f37` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#e2e8f0` · `#64748b` · `#f1f5f9` · `#475569` · `#f8fafc` · `#334155` · `#cbd5e1` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 16px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center justify-center hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 text-base font-normal text-white bg-slate-900 border-transparent border rounded-lg py-2 px-4">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Services (`services`)
5. Comparison (`comparison`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f1f5f9;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0f172a;
  --color-accent-2: #f47f37;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f1f5f9',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0f172a',
    accent2: '#f47f37',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the headline dark navy (#0f172a) on the pale ground.
- **Do:** Use the orange (#f47f37) only for floating tags and small highlights.
- **Do:** Pair the dark primary button with a white outline button for the secondary.
- **Don't:** Don't use the pale grey (#e2e8f0) for buttons; it is too close to the ground.
- **Don't:** Don't place body copy over the floating tags; they sit in the margins.
- **Don't:** Don't set the page on a dark ground; this style is light throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
