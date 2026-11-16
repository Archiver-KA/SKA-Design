# Design system — Premium Dealership Landing Page

`SN-W00640` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `de`

## Direction

A black automotive dealership page set in Bebas Neue, a tall condensed capital face that carries the brand name at very large size with little else on the first screen. Gold (#c9a84c) is reserved for the single contact button in the header, and the navigation sits in a thin outlined pill. The page is sparse, with the type standing in for a showroom sign.

**Mood:** sparse, condensed, luxurious, black, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#f2f0e8` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c9a84c` | Primary action and highlights |

Palette by frequency of use: `#c9a84c` · `#f2f0e8` · `#000000` · `#ffffff` · `#888888` · `#e0c266` · `#777777` · `#c8a45a` · `#0f0f0f` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bebas Neue
- **Body:** Bebas Neue
- **Loaded families:** Bebas Neue, Inter
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 48px · body 16px
- **Weights in use:** light, normal, extralight
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[520px]`
- **Section padding:** `py-16`, `py-14`
- **Common gaps:** `gap-4`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center uppercase hover:bg-white/5 hover:text-[#C9A84C] transition-all duration-300 cursor-pointer text-xs font-semibold text-black tracking-[0.1em] bg-[#C9A84C] border-[#C9A84C] border rounded-xl px-6 py-2.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Video / media (`video-media`)
3. Hero (`hero`)
4. Modal / overlay (`modal-overlay`)
5. Feature grid (`features`)
6. 3D / canvas scene (`3d-canvas`)
7. Services (`services`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #333333;
  --color-text: #f2f0e8;
  --color-muted: #888888;
  --color-border: #ffffff;
  --color-accent: #c9a84c;
  --font-display: "Bebas Neue", sans-serif;
  --font-body: "Bebas Neue", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#333333',
    ink: '#f2f0e8',
    muted: '#888888',
    line: '#ffffff',
    accent: '#c9a84c',
  },
  fontFamily: { display: ['Bebas Neue'], sans: ['Bebas Neue'] },
} }
```

## Do and don't

- **Do:** Set display headlines in Bebas Neue, off-white (#f2f0e8) on black (#000000)
- **Do:** Use gold (#c9a84c) for the contact button and one accent per section
- **Do:** Frame the navigation in a thin outlined pill
- **Don't:** Don't set body copy in Bebas Neue; it is for headings only
- **Don't:** Don't fill large areas with gold
- **Don't:** Don't place stock imagery over the title screen; it would break the sparse first screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
