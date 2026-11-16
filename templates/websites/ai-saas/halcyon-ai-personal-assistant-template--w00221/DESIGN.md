# Design system — HALCYON AI Personal Assistant Template

`SN-W00221` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bright product-UI hero on a pale blue-grey ground. A heavy black sans headline is followed by a solid blue block carrying the phrase 'Move faster.' in white, and a product mockup of white cards with floating notifications sits on the right. Blue (#3b82f6) is the single accent, used for the block, the primary button and the active state inside the mockup.

**Mood:** bright, product-led, energetic, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f5f8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#fcd34d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#eff6ff` · `#dbeafe` · `#2563eb` · `#020617` · `#e2e8f0` · `#64748b` · `#94a3b8` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 102px · h2 60px · h3 18px · body 12px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-[-0.04em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-[inset_0_1px_0_white]`, `shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]`, `shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`
- **Content width:** `max-w-5xl`, `max-w-7xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-slate-700 text-sm font-normal shadow-[0_4px_12px_rgba(15,23,42,0.05),inset_0_1px_0_white] hover:from-slate-50 hover:to-slate-100 hover:-translate-y-0.5 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Case studies (`case-studies`)
5. Bento grid (`bento-grid`)
6. Process / steps (`how-it-works`)
7. Team (`team`)
8. Feature grid (`features`)
9. Pricing (`pricing`)
10. FAQ (`faq`)
11. Call to action (`cta`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f3f5f8;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #fcd34d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f5f8',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#fcd34d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Put one key phrase of the headline in a solid blue (#3b82f6) block with white text
- **Do:** Build product mockups from white cards on a pale blue-grey ground
- **Do:** Use blue for the active states inside the UI mockup
- **Don't:** Don't use more than one saturated colour in the hero
- **Don't:** Don't add dark backgrounds to the mockups
- **Don't:** Don't float notification cards over the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
