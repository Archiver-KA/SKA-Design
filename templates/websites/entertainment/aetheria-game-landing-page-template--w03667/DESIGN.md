# Design system — AETHERIA Game Landing Page Template

`SN-W03667` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A minimal, near-black landing page whose navigation is small uppercase grey text and whose single action is a white pill labelled pre-order. The hero is left open for a three-dimensional scene, with large display type to set the mood. The interface itself is black and white, so the page's identity rests on restraint and the white call to action.

**Mood:** cinematic, sparse, dark, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#fb923c` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#18181b` · `#a1a1aa` · `#000000` · `#6366f1` · `#818cf8` · `#d4d4d8` · `#09090b` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_10px_rgba(99,102,241,0.8)]`, `shadow-[0_0_30px_-10px_rgba(79,70,229,0.4)]`, `shadow-[0_0_50px_-10px_rgba(79,70,229,0.6)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="group relative px-6 py-2.5 bg-white text-black text-xs font-semibold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Services (`services`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #fb923c;
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
    surface: '#18181b',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#fb923c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the interface black and white, with the white pill as the only button
- **Do:** Set navigation in small uppercase grey type
- **Do:** Leave the hero open for the three-dimensional scene, with large display type
- **Don't:** Don't add hues to the interface; colour comes from the scene
- **Don't:** Don't use the grey nav text at body size on the black background
- **Don't:** Don't place body copy over the scene without a clear contrast layer

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
