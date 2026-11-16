# Design system — Futuristic Space Logistics Landing Page Template

`SN-W03919` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A near-black page where oversized uppercase headlines in a heavy white sans run across the first screen and partly overlap the cards beside them. The layout is asymmetric, with a glass card on the right holding a short mission statement and figures in small uppercase. Small monospace labels and a thin green status bar add technical detail. The look is stark, cinematic and deliberately sparse.

**Mood:** cinematic, stark, sparse, technical, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#0a0a0a` · `#171717` · `#000000` · `#3b82f6` · `#a855f7` · `#34d399` · `#60a5fa` · `#c084fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Bricolage Grotesque, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h2 72px · h3 30px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(16,185,129,0.6)]`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-12`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 text-white/50 hover:text-white hover:bg-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Timeline (`timeline`)
5. Stats band (`stats`)
6. Logo cloud (`logo-cloud`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #fafafa;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#fafafa',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the display headline in heavy uppercase at very large size, allowed to overlap the cards.
- **Do:** Use small monospace labels for status and dates, in grey.
- **Do:** Keep figures and status bars in the green accent (#10b981) only.
- **Don't:** Don't add colour to the headline; keep it white on black.
- **Don't:** Don't place the glass cards on light backgrounds.
- **Don't:** Don't crowd the hero with extra images; the type is the feature.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
