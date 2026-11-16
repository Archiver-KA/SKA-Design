# Design system — Bio.tm Digital Identity Landing Page Template

`SN-W01836` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Clean SaaS landing on a light grey ground (#fafafa) with a faint grid pattern behind the hero. A very large, tightly tracked grotesque headline in near-black sits centred, with a lime (#84cc16) highlighter stroke under one word. Buttons are dark filled and outlined. The look is confident, airy and product-led.

**Mood:** airy, confident, product-led, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#84cc16` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#525252` · `#737373` · `#262626` · `#e5e5e5` · `#a3a3a3` · `#d4d4d4` · `#f5f5f5` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Noto Sans Arabic
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="text-sm font-semibold bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Logo cloud (`logo-cloud`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #84cc16;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#84cc16',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use lime (#84cc16) only for the highlight stroke under one headline word
- **Do:** Set headlines very large and tightly tracked in near-black
- **Do:** Keep the faint grid behind the hero as the only texture
- **Don't:** Don't add more lime highlight strokes than one per section
- **Don't:** Don't set the hero on a dark ground
- **Don't:** Don't add decorative photography to the first screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
