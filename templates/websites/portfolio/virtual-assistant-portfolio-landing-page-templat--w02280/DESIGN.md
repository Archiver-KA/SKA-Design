# Design system — Virtual Assistant Portfolio Landing Page Template

`SN-W02280` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark forest-green service page on a deep green ground (#111e16), with a bold white sans headline. The phrase Operational Velocity is set in lime (#d4f64d), and a lime pill button and a short lime stat sit below the copy. A rounded dark card on the right holds a mock task panel, and the lime phrase is the one accent that makes the page recognisable.

**Mood:** confident, modern, focused, dark, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111e16` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4f64d` | Primary action and highlights |

Palette by frequency of use: `#111e16` · `#ffffff` · `#d4f64d` · `#a8a29e` · `#000000` · `#292524` · `#78716c` · `#eff59b` · `#57534e` · `#1c1917`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-16`

**Primary button**

```html
<a class="bg-[#d4f64d] text-[#111e16] px-8 py-4 rounded-full text-base font-semibold hover:bg-[#c3e63b] transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Testimonials (`testimonials`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111e16;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #d4f64d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111e16',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#d4f64d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one headline phrase in the lime (#d4f64d) and make the primary button the same lime.
- **Do:** Keep the ground deep green (#111e16) with white headlines and light grey body copy.
- **Do:** Use the rounded mock panel on the right as the hero visual.
- **Don't:** Don't add a second accent colour; the lime is the only one.
- **Don't:** Don't set the page on a light ground; it is dark.
- **Don't:** Don't use the lime for body text; it is reserved for emphasis.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
