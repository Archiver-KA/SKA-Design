# Design system — CryptoVault Trading Platform Template

`SN-W00911` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, Czech-language finance landing page on black, with deep violet [#6d28d9] used for the second phrase of the headline. The hero splits into a large headline on the left and stacked service cards on the right. Each card is a flat dark panel with a small coloured icon tile. Body copy is light grey at a comfortable line length.

**Mood:** dark, direct, structured, financial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6d28d9` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6d28d9` · `#5b21b6` · `#f97316` · `#3b82f6` · `#000000` · `#4ade80` · `#f87171` · `#4c1d95` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-3xl` (24px), `rounded-full` (9999px)
- **Shadows:** `shadow-[#6D28D9]/25`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="text-sm font-medium text-black bg-white hover:bg-white/90 transition-all duration-300 rounded-2xl px-6 py-2.5 shadow-lg shadow-white/20">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #6d28d9;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#6d28d9',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the highlighted headline phrase in violet (#6d28d9)
- **Do:** Keep service cards as flat dark panels with a small icon tile
- **Do:** Keep body copy in light grey at a readable line length
- **Don't:** Don't use violet for body text
- **Don't:** Don't use orange as a brand colour; it appears only in icon tiles
- **Don't:** Don't set the headline in a light weight; it is bold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
