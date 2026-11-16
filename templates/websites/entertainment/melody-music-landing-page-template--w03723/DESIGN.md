# Design system — Melody Music Landing Page Template

`SN-W03723` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Near-black page with a very large, centred bold sans headline in white on a single line, set low in the hero beneath a wide area of empty dark space. A small translucent pill with an icon sits above it, and a short grey subtitle in regular weight follows. The page is minimal and confident, and the headline is the only strong visual weight on the first screen.

**Mood:** minimal, confident, dark, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#0a0a0a` · `#f0abfc` · `#5b21b6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Plus Jakarta Sans, PT Serif, Geist Mono, Quicksand
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 20px · body 14px
- **Weights in use:** normal, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Listings (`listings`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
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
    background: '#0a0a0a',
    surface: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in very large bold sans, centred, in white
- **Do:** Place a small translucent pill above the headline
- **Do:** Keep the subtitle short, in regular weight and grey
- **Don't:** Don't add colour to the hero
- **Don't:** Don't stack a second large headline above the first
- **Don't:** Don't fill the empty hero area with decorative shapes

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
