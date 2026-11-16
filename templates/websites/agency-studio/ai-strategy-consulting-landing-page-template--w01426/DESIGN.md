# Design system — AI Strategy Consulting Landing Page Template

`SN-W01426` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a violet glow in the top right corner, and a heavy sans headline in near-black with the phrase 'intelligent systems' set in a violet gradient. The primary button is a solid violet (#5c4cff) and the secondary is white with a thin border. A faint wireframe card on the right and a small floating stat give the hero a product feel without heavy imagery.

**Mood:** bright, product-led, violet, clean, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#171717` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#5c4cff` | Primary action and highlights |
| Second accent | `#00e5a8` | Supporting highlights |

Palette by frequency of use: `#5c4cff` · `#171717` · `#e5e5e5` · `#ffffff` · `#525252` · `#fafafa` · `#737373` · `#d280ff` · `#00e5a8` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Space Grotesk
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-[1200px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="px-5 py-2.5 rounded-full bg-[#5C4CFF] text-white text-sm font-medium hover:bg-[#4a3ce0] transition-colors shadow-sm hover:shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #262626;
  --color-text: #171717;
  --color-muted: #171717;
  --color-border: #e5e5e5;
  --color-accent: #5c4cff;
  --color-accent-2: #00e5a8;
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
    surface: '#262626',
    ink: '#171717',
    muted: '#171717',
    line: '#e5e5e5',
    accent: '#5c4cff',
    accent2: '#00e5a8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase in the violet gradient (#5c4cff to #d280ff) and keep the rest near-black.
- **Do:** Use the solid violet (#5c4cff) for the primary button only.
- **Do:** Keep the wireframe card flat and white, with the floating stat over its corner.
- **Don't:** Don't use the dark mode tokens; the ground is white.
- **Don't:** Don't put heavy imagery in the hero; the visual is a wireframe card.
- **Don't:** Don't set the violet as the page background; the ground is white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
