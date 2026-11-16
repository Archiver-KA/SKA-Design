# Design system — AI Travel Concierge Landing Page Template

`SN-W03017` · travel · dark mode · Sinera Atlas theme `dwell` · language `ru`

## Direction

A dark, cinematic concierge page on near-black, with a large sans headline in white whose last line is pale gold (#fde68a). A tall portrait photograph fills the right half, and a small live-chat notification sits over its lower corner. Buttons are small-radius blocks, one solid gold and one dark outline, so the gold stays with the main action.

**Mood:** cinematic, dark, personal, luxurious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fde68a` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#64748b` · `#cbd5e1` · `#fde68a` · `#000000` · `#1e293b` · `#475569` · `#164e63` · `#02040a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_10px_#22c55e]`, `shadow-[0_0_40px_rgba(0,0,0,0.5)]`, `shadow-[0_0_30px_rgba(212,175,55,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-[85%]`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-valo-gold hover:bg-[#c5a028] transition-all duration-300 rounded-sm overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #fde68a;
  --color-accent-2: #1e293b;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#fde68a',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans, with the last line in pale gold (#fde68a)
- **Do:** Frame the portrait photograph in a tall block on the right half
- **Do:** Use the solid gold button as the primary action only
- **Don't:** Don't use a light background; the page is near-black.
- **Don't:** Don't use rounded pills; buttons keep small corner radii
- **Don't:** Don't spread the gold across large areas; it marks the headline line and one button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
