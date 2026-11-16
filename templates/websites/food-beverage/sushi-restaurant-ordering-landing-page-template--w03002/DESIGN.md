# Design system — Sushi Restaurant Ordering Landing Page Template

`SN-W03002` · food-beverage · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, clean ordering hero on a pale blue-white ground (#f0f8ff), with a large sans headline in dark grey where the place name Lelystad is set in green. A solid green Order Sushi button leads, beside a pale grey pill that shows the delivery time. The nigiri photograph sits in a rounded frame with a small label, so the page reads as fresh and quick.

**Mood:** fresh, clean, quick, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f0f8ff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#f0f8ff` · `#e5e7eb` · `#f5f5f5` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 60px · h2 24px · body 12px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-[var(--radius)]` (var(--radius)), `rounded-full` (9999px), `rounded-[var(--radius-sm)]` (var(--radius-sm))
- **Shadows:** `shadow`, `shadow-[var(--shadow)]`, `shadow-[var(--shadow-sm)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary)]/80 h-9 px-4 py-2 rounded-[var(--radius)] text-sm font-medium transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f0f8ff;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-border: #e5e7eb;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: var(--radius);
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f0f8ff',
    surface: '#ffffff',
    ink: '#111111',
    line: '#e5e7eb',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the place name in green as the headline highlight.
- **Do:** Use the green filled button for the order action only.
- **Do:** Keep the delivery and rating facts in small pills beneath the buttons.
- **Don't:** Don't use the green for body text.
- **Don't:** Don't replace the pale blue ground with pure white.
- **Don't:** Don't show the photograph without its rounded frame and label.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
