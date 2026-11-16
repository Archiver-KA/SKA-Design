# Design system — Audio Video Events Landing Page Template

`SN-W03671` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A nearly empty black entry screen with a thin logo, a short row of uppercase navigation and a single square-cornered outline button for quotes. The first screen carries only a small scroll cue at the bottom, so the impact comes from what follows the entry. Type is minimal and white, with no decorative colour.

**Mood:** stark, minimal, cinematic, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#ff0000` · `#050505` · `#000000` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Syne
- **Body:** Syne
- **Loaded families:** Syne
- **Scale (largest breakpoint):** h1 128px · h2 14px · h3 48px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-neon/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="border border-white/20 bg-white/5 hover:bg-neon hover:border-neon text-white px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 backdrop-blur-md">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. About (`about`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --font-display: "Syne", sans-serif;
  --font-body: "Syne", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['Syne'], sans: ['Syne'] },
} }
```

## Do and don't

- **Do:** Keep the entry screen black with white type and a single thin scroll cue
- **Do:** Set navigation in small uppercase with a light weight
- **Do:** Use the square outline button as the only call to action in the header
- **Don't:** Don't add colour to the header; the page is strictly monochrome
- **Don't:** Don't fill the entry screen with copy
- **Don't:** Don't use red as a background fill

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
