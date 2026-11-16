# Design system — Interactive 3D Background Website UI

`SN-W04204` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark landing page on a deep blue-black ground (#0f1116), with a fixed 3D background and soft blurred colour blobs in magenta and green behind the content. The headline is large white sans over a frosted header. Buttons are white on the dark ground, with a plain text link as the secondary action, and the blurred glow shapes add depth without hard edges.

**Mood:** modern, dark, atmospheric, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f1116` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d946ef` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#e5e7eb` · `#0f1116` · `#d946ef` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-glow`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="rounded-md px-4 py-2 text-sm font-medium hover:bg-white/10 transition-colors font-sans">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Logo cloud (`logo-cloud`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Process / steps (`how-it-works`)
8. Pricing (`pricing`)
9. Testimonials (`testimonials`)
10. FAQ (`faq`)
11. Call to action (`cta`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js, Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f1116;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #d946ef;
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
    background: '#0f1116',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#d946ef',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline large and white in Inter
- **Do:** Place blurred colour blobs behind content, never over text
- **Do:** Use a white primary button and a plain text secondary action
- **Don't:** Don't use solid bright blocks behind the hero
- **Don't:** Don't put the 3D background above the copy
- **Don't:** Don't use more than three blob colours at once

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
