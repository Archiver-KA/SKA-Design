# Design system — GhostCard Crypto Prepaid Card Landing Page Template

`SN-W00977` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page with a large white headline in Inter, where the second line fades to grey. Violet-indigo appears in the logo and product tiles, while the buttons are white and outlined. Gradient card tiles run along the bottom edge of the hero, so the product is shown as the visual, inside a dark and playful frame.

**Mood:** dark, playful, product-led, gradient, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#000000` · `#10b981` · `#94a3b8` · `#64748b` · `#171717` · `#c7d2fe` · `#e2e8f0` · `#06b6d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 72px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-indigo-500/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-2`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/5 px-4 py-2 rounded-full transition-all font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground near-black with white headlines.
- **Do:** Use indigo (#6366f1) in the logo and product tiles only.
- **Do:** Show the product as gradient card tiles along the hero edge.
- **Don't:** Don't use indigo for the primary button.
- **Don't:** Don't add a light section between dark ones.
- **Don't:** Don't set the grey second headline line in a low-contrast tone.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
