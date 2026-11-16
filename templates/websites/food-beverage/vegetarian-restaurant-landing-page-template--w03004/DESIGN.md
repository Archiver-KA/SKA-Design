# Design system — Vegetarian Restaurant Landing Page Template

`SN-W03004` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A warm, soft hero on a beige ground, with a large sans headline in dark slate and the second line in an italic serif. A small pill tag above the headline states the vegetarian offer, and dark filled and outlined pills carry the actions. A tall rounded photo card with a serif italic caption sits on the right, with a soft yellow glow behind it.

**Mood:** soft, warm, elegant, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#111827` | Hairlines, dividers, outlines |
| Accent | `#1f2937` | Primary action and highlights |
| Second accent | `#ffedd5` | Supporting highlights |

Palette by frequency of use: `#111827` · `#1f2937` · `#ffffff` · `#6b7280` · `#4b5563` · `#000000` · `#f3f4f6` · `#d1d5db` · `#374151` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:pr-6 duration-300 group">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Modal / overlay (`modal-overlay`)
4. Timeline (`timeline`)
5. About (`about`)
6. Menu list (`menu-list`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #111827;
  --color-accent: #1f2937;
  --color-accent-2: #ffedd5;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#111827',
    accent: '#1f2937',
    accent2: '#ffedd5',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic serif, as the hero does.
- **Do:** Use dark slate (#1f2937) for the primary button and the headline.
- **Do:** Keep the photo card rounded, with a light gradient fade and a serif caption.
- **Don't:** Don't set the headline in one weight; the italic contrast is the feature.
- **Don't:** Don't use green for buttons; buttons are dark slate.
- **Don't:** Don't add bright colours over the beige ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
