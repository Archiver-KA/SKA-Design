# Design system — Industrial Vacuum Solutions Landing Page Template

`SN-W03960` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A near-black hero with very large bold sans-serif headlines in white, where the second line fades to a cool grey-blue. A thin cyan light streak crosses the lower hero, and a dark floating navigation pill sits above it. The stance is stark and product-focused, with cyan used only for the light and small details.

**Mood:** stark, product-led, dark, cool, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#164e63` · `#94a3b8` · `#22d3ee` · `#64748b` · `#cbd5e1` · `#000000` · `#67e8f9` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-cyan-900/10`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/[0.05] rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Stats band (`stats`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #f97316;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the hero near-black (#050505) with white headlines
- **Do:** Use cyan (#06b6d4) for light streaks and small accent details only
- **Do:** Set the second headline line in muted cool grey
- **Don't:** Don't fill large areas or buttons with cyan
- **Don't:** Don't add warm colours beside the cyan
- **Don't:** Don't use a light page background for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
