# Design system — Stillpoint Recovery Studio Landing Page Template

`SN-W02535` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A stark, monochrome recovery studio: a pure black ground with white, tightly set sans headlines and no colour anywhere in the first screen. The hero is type-only, with a thin outlined circle at the bottom as the sole graphic, and the navigation and buttons are white or near-black pills. The stance is severe and premium, and the text carries all of the contrast.

**Mood:** severe, monochrome, premium, spare

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#050505` · `#020202` · `#030303` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-black/50`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-transform">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Process / steps (`how-it-works`)
3. Product grid (`product-grid`)
4. Pricing (`pricing`)
5. Testimonials (`testimonials`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-border: #ffffff;
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
    surface: '#0a0a0a',
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground pure black (#000000) with white headlines (#ffffff)
- **Do:** Set headlines large and tightly tracked in a single sans
- **Do:** Use a white pill for the primary action and keep the navigation as a thin outlined bar
- **Don't:** Don't introduce colour; the page has no accent in the first screen
- **Don't:** Don't add imagery to the hero; the type is the visual
- **Don't:** Don't set body copy in pure white; it steps down to a grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
