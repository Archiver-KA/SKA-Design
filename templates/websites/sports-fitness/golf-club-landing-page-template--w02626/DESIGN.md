# Design system — Golf Club Landing Page Template

`SN-W02626` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A photograph-first golf club hero. A full-bleed image of a green and ball fills the hero, with an oversized white uppercase sans-serif word, GOLF, laid across it and small white caps in the top bar. Colour comes from the photograph, so the page is calm and image-led.

**Mood:** image-led, calm, uppercase, open, natural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#64748b` · `#10b981` · `#475569` · `#94a3b8` · `#000000` · `#e2e8f0` · `#6ee7b7` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 48px · h3 48px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-slate-100/50`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[1400px]`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="hidden md:inline-flex px-7 py-3 rounded-full border border-white/40 text-[10px] font-semibold tracking-widest hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm uppercase">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Timeline (`timeline`)
5. Articles (`blog-articles`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #10b981;
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
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero word in very large white uppercase sans-serif over a full-bleed photograph.
- **Do:** Keep the navigation small and white on the image.
- **Do:** Let the photograph carry the colour; keep UI accents out of the hero.
- **Don't:** Don't set dark text over the photograph.
- **Don't:** Don't add a coloured overlay that hides the green.
- **Don't:** Don't set the hero word in a serif; it is a sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
