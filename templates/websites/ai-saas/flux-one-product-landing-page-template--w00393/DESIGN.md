# Design system — Flux One Product Landing Page Template

`SN-W00393` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A product page with a light grey site header and a pure black hero, where a very large bold white 'Flux One' fills the left of the hero above a short paragraph and two buttons. The contrast is stark: the grey header and the sticky product strip are light, while the hero is black. Hierarchy comes from the wordmark's size and white-on-black contrast, and the page reads like an electronics product launch.

**Mood:** stark, product-launch, minimal, monochrome, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#1d4ed8` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#e5e5e5` · `#525252` · `#404040` · `#d4d4d4` · `#fafafa` · `#262626` · `#171717` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[85%]`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-neutral-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Comparison (`comparison`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #1d4ed8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#1d4ed8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the product name in a very large bold sans, white, on the black hero.
- **Do:** Keep the primary Buy button white with a dark label, and the secondary as an outline.
- **Do:** Use the light grey strip (#e5e5e5) for the sticky buy bar at the bottom, with the Buy action dark.
- **Don't:** Don't make the hero white; it is black, and light grey is for the header and bars only.
- **Don't:** Don't add colour; the design is black, white and grey.
- **Don't:** Don't centre the wordmark; it sits left-aligned.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
