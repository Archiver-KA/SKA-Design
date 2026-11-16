# Design system — Futuristic Technology Landing Page Template

`SN-W00415` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Inter is used throughout, with near-black text (#171717) on a light-leaning palette, and green (#10b981) is the most-used colour. The template combines a 3D canvas with bento, timeline and pricing sections, using GSAP and Three.js for motion.

**Mood:** modern, modular, unverified, tech-forward, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#10b981` | Page ground |
| Surface | `#a3a3a3` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#10b981` · `#737373` · `#171717` · `#e5e5e5` · `#a3a3a3` · `#f5f5f5` · `#020202` · `#fafafa` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 88px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_10px_30px_rgba(0,0,0,0.06)]`, `shadow-[0_18px_60px_rgba(0,0,0,0.55)]`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-40`, `py-20`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2 text-[13px] font-semibold bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full hover:scale-[1.02] transition-all duration-300 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. 3D / canvas scene (`3d-canvas`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Stats band (`stats`)
7. Bento grid (`bento-grid`)
8. Timeline (`timeline`)
9. Pricing (`pricing`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #10b981;
  --color-surface: #a3a3a3;
  --color-text: #171717;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#10b981',
    surface: '#a3a3a3',
    ink: '#171717',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use Inter for all text and near-black (#171717) for headings
- **Do:** Avoid using the green (#10b981) as a page background
- **Do:** Use GSAP and Three.js for motion and 3D as the template already loads them
- **Don't:** Don't add a second accent colour beside the green
- **Don't:** Don't add 3D scenes beyond the one canvas the template uses
- **Don't:** Don't set grey (#a3a3a3) text on the green without checking contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
