# Design system — High-End Audio Brand Landing Page Template

`SN-W02044` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A cinematic, dark audio landing page on near-black (#050505) with a large sans headline in a grey-to-white gradient and sparse, uppercase, letter-spaced navigation. Product photography sits behind the hero and does most of the work, while interface colour is almost absent: white fills and thin outlines only. The recognisable element is the pair of outlined buttons under a restrained grey headline.

**Mood:** cinematic, luxurious, restrained, monochrome, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#000000` · `#a3a3a3` · `#171717` · `#525252` · `#f97316` · `#050505` · `#0a0a0a` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,160,0,0.2)]`, `shadow-2xl`, `shadow-[0_0_10px_orange]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-16`

**Primary button**

```html
<a class="group flex items-center gap-2 text-xs font-medium tracking-widest uppercase border border-white/20 px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #22c55e;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the page black or near-black and let the product photography carry colour.
- **Do:** Set the headline in Manrope at large size with a grey-to-white fade.
- **Do:** Use a white fill for the primary button and thin outlines for secondary buttons.
- **Don't:** Don't use the orange (#f97316) in the hero.
- **Don't:** Don't put light backgrounds behind the hero.
- **Don't:** Don't set navigation in mixed case; it is uppercase and letter-spaced.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
