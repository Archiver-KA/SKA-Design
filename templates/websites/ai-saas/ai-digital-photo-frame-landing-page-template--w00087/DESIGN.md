# Design system — AI Digital Photo Frame Landing Page Template

`SN-W00087` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Homture is a dark product page on a near-black navy ground, with a large white Inter headline stacked over three lines. A framed photo card with a soft shadow sits on the right, so the product imagery carries the colour. Cyan is used only in a faint glow behind the hero.

**Mood:** dark, product-led, warm imagery, clean, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#334155` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#000000` · `#64748b` · `#e2e8f0` · `#cbd5e1` · `#06b6d4` · `#22d3ee` · `#020617` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_rgba(34,211,238,0.8)]`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-slate-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Feature grid (`features`)
5. About (`about`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #334155;
  --color-text: #ffffff;
  --color-muted: #334155;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#334155',
    ink: '#ffffff',
    muted: '#334155',
    line: '#ffffff',
    accent: '#22d3ee',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white Inter at large size, over a near-black ground
- **Do:** Let the product photo carry the colour; keep the UI colours neutral
- **Do:** Use the cyan (#22d3ee) only for glows and small highlights
- **Don't:** Don't use the cyan (#06b6d4) as a full-page background
- **Don't:** Don't use a light-mode treatment; the ground is dark
- **Don't:** Don't add extra accent colours beside the photography

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
