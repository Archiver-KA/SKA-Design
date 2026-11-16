# Design system — Luxury Travel Landing Page Template

`SN-W03108` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark hero over a painted landscape of mountains and jungle foliage, with a tall wooden door set in the middle as the focal image. The headline is white sans-serif with one italic word, Door. The primary button is gold (#c8a96a) and sits under the body copy. Four destination cards run across the lower band with uppercase titles, so the mood is cinematic and storybook, held together by the gold and the dark foliage.

**Mood:** cinematic, storybook, dark, lush

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c8a96a` | Primary action and highlights |
| Second accent | `#1f3e3d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c8a96a` · `#1f3e3d` · `#000000` · `#333333` · `#d4af37` · `#0b101a` · `#e2e8f0` · `#f1f5f9` · `#2d1b0e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** Inter
- **Loaded families:** Inter, Oswald, ./index.html
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-xl` (12px)
- **Shadows:** `shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]`, `shadow-2xl`, `shadow-[inset_-2px_0_10px_rgba(0,0,0,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-5`

**Primary button**

```html
<a class="bg-[#C8A96A] text-[#1F3E3D] px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-sm font-medium hover:bg-white hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)] transition-all duration-300 w-max shadow-lg flex items-center gap-3 group">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #333333;
  --color-text: #ffffff;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #c8a96a;
  --color-accent-2: #1f3e3d;
  --font-display: "Oswald", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#333333',
    ink: '#ffffff',
    muted: '#475569',
    line: '#ffffff',
    accent: '#c8a96a',
    accent2: '#1f3e3d',
  },
  fontFamily: { display: ['Oswald'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the gold (#c8a96a) for the primary button and small details only
- **Do:** Set card titles in uppercase over the image, on a dark gradient
- **Do:** Keep the central door image as the focal point of the hero
- **Don't:** Don't place body copy over the busy foliage without a dark overlay
- **Don't:** Don't use the gold for more than one action per section
- **Don't:** Don't leave destination cards with broken images

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
