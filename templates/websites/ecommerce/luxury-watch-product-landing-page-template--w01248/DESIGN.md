# Design system — Luxury Watch Product Landing Page Template

`SN-W01248` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark product landing page built around a circular spotlight: a watch sits in a dark round frame over a huge, faded word, PHANTOM, with small spec cards floating at the sides. The headline is white sans, and one white pill button sits at the bottom with a scroll cue. Blur and glow do the depth work.

**Mood:** spotlit, dark, product-led, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#000000` · `#262626` · `#a3a3a3` · `#171717` · `#404040` · `#e5e5e5` · `#3b82f6` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 200px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_100px_rgba(0,0,0,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Marquee (`marquee`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
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
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Frame the product in a circular dark spotlight with a blurred oversized word behind it
- **Do:** Float small spec cards at the sides with thin borders and tiny labels
- **Do:** Use one white pill button for the main action
- **Don't:** Don't use a light background; the hero is black.
- **Don't:** Don't put spec cards on top of the product
- **Don't:** Don't use blue highlights.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
