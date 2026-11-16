# Design system — Sapling Education Landing Page Template

`SN-W03530` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A light, airy learning page on a pale grey-green ground (#e9efed) with a large high-contrast serif headline in near-black. The second line is set in deep green (#1b6c42), and the same green fills the primary button, while small floating cards and scattered coloured dots suggest an adaptive knowledge map. Restraint in the palette keeps the focus on the headline.

**Mood:** airy, scholarly, fresh, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e9efed` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#1b6c42` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#1b6c42` · `#6b7280` · `#111827` · `#e5e7eb` · `#ffffff` · `#9ca3af` · `#f9fafb` · `#e9efed` · `#d1d5db` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Playfair Display
- **Scale (largest breakpoint):** h1 160px · h2 60px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_12px_40px_rgba(0,0,0,0.06)]`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="relative overflow-hidden group bg-[#1B6C42] text-white px-7 py-2.5 rounded-full font-medium text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-400 hover:scale-[1.04] active:scale-[0.97] btn-shimmer">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. Footer (`footer`)
8. Modal / overlay (`modal-overlay`)
9. Services (`services`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e9efed;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #1b6c42;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e9efed',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#1b6c42',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif in near-black, with the key word in deep green (#1b6c42)
- **Do:** Use the deep green (#1b6c42) for the primary button and the key headline word
- **Do:** Keep the scattered accent dots and floating cards small and light
- **Don't:** Don't place dark headline text on dark green backgrounds
- **Don't:** Don't use the deep green for body copy
- **Don't:** Don't crowd the hero with extra cards near the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
