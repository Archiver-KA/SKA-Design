# Design system — Minimal Fashion E‑commerce Store Template

`SN-W02801` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, minimal shop page on white. A large black sans headline, 'Synthesized Spectrum.', sits over a faded desk photograph of flowers, a brass lamp and glass vials, and the image fades where the type sits. Solid and outlined black buttons sit below, and category tabs run along the bottom edge. The objects supply the colour.

**Mood:** minimal, airy, gallery-like, neutral, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#171717` · `#737373` · `#e5e5e5` · `#a3a3a3` · `#fafafa` · `#f5f5f5` · `#262626` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0)
- **Content width:** `max-w-[1920px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-6`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center h-12 px-8 bg-black text-white text-xs font-medium tracking-widest uppercase hover:bg-neutral-800 transition-colors rounded-none">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Awards / press (`awards-press`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #000000;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#000000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page white (#ffffff) and set headlines in near-black sans.
- **Do:** Use a solid black button for the primary action and an outlined black button beside it.
- **Do:** Fade product photography into the white ground wherever type sits over it.
- **Don't:** Don't use a dark background for this shop; the page is light.
- **Don't:** Don't add colour to the interface; the products carry it.
- **Don't:** Don't set headlines over busy image areas without the fade.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
