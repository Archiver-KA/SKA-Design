# Design system — Fashion Hero Slider Landing Page Template

`SN-W02744` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark, cinematic hero slider with a full-bleed photograph dimmed almost to black, and a large light sans headline set over the image in grey-white. Thin white bars at the bottom left show slide progress, and a small translucent control panel sits top right. Colour comes from the photography, while the interface stays white on black.

**Mood:** cinematic, dark, editorial, moody

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#e4e4e7` · `#d4d4d8` · `#a1a1aa` · `#71717a` · `#f4f4f5` · `#3f3f46` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · body 20px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group relative px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium transition-transform hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. About (`about`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #f4f4f5;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #ffffff;
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
    surface: '#000000',
    ink: '#f4f4f5',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Dim full-bleed photography under a dark overlay so the headline stays readable
- **Do:** Set the headline in Inter at large size in off-white (#f4f4f5)
- **Do:** Use thin white bars for slider progress and white pills for actions
- **Don't:** Don't brighten the photo; the overlay is what keeps the type legible
- **Don't:** Don't add accent colour to the controls; the interface is white on black
- **Don't:** Don't use #3f3f46 as the page ground; the ground is black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
