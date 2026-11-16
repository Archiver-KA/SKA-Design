# Design system — Eco-Logic Habitat Energy Renovation Template

`SN-W03882` · business-services · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

A bold, saturated green hero where a deep green ground carries a centred white headline, with the middle line set in bright green. Primary buttons are solid bright green with white text, and a pale grey header bar sits above the hero. Copy is centred and kept wide, with a small pill tag above the headline, so the page reads as confident and direct.

**Mood:** confident, natural, direct, bold, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#3baa35` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#3baa35` | Primary action and highlights |
| Second accent | `#0b2745` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3baa35` · `#0b2745` · `#f3f4f6` · `#6b7280` · `#f9fafb` · `#374151` · `#e5e7eb` · `#9ca3af` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgba(0,0,0,0.04)]`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-[#3BAA35] text-white px-5 py-2.5 text-sm font-normal rounded-md hover:bg-[#32962d] transition-colors shadow-sm font-montserrat">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Services (`services`)
6. Call to action (`cta`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #3baa35;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #f3f4f6;
  --color-accent: #3baa35;
  --color-accent-2: #0b2745;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#3baa35',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#f3f4f6',
    accent: '#3baa35',
    accent2: '#0b2745',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans-serif with the middle phrase in bright green
- **Do:** Use bright green (#3baa35) for the primary button and the highlight phrase
- **Do:** Keep supporting copy centred and short, in a lighter white
- **Don't:** Don't set bright green text on light backgrounds; the contrast fails
- **Don't:** Don't put a solid dark header over the green hero; the header stays light
- **Don't:** Don't add more colours to the hero; green and white carry it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
