# Design system — Galactic Product Studio Landing Page Template

`SN-W00416` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy-black page with indigo (#6366f1) used for the primary button and for one italic phrase in the headline. The headline is a large light sans, and the accent phrase in light italic indigo gives warmth without a second colour. A framed 3D panel sits on the right, with three small outlined chips holding icons beneath the buttons.

**Mood:** polished, dark, studio-like, confident, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b14` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#67e8f9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f8fafc` · `#818cf8` · `#6366f1` · `#a5b4fc` · `#4f46e5` · `#86efac` · `#67e8f9` · `#71717a` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 36px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs font-medium transition-all duration-300 hover-scale">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Pricing (`pricing`)
5. Stats band (`stats`)
6. Logo cloud (`logo-cloud`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0b14;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #67e8f9;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b14',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#67e8f9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use indigo (#6366f1) for the primary button and one italic headline phrase only
- **Do:** Frame the 3D visual with a thin lit border, not a filled card
- **Do:** Place three short icon chips under the hero buttons as proof points
- **Don't:** Don't set the whole headline in the accent colour
- **Don't:** Don't use italic for body copy; it is reserved for the headline phrase
- **Don't:** Don't leave the 3D panel empty or read as a placeholder

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
