# Design system — Premium DJ Business Bootcamp Landing Page Template

`SN-W04061` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A bright, sales-led page built on a white ground with a faint warm glow behind the top of the hero. The headline is set in heavy Montserrat at a very large size, with the key figures in orange (#ff5a00) so the offer reads first. A small pill badge and an orange navigation button repeat the accent, and the page uses almost no other colour.

**Mood:** bold, direct, energetic, clean, promotional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#ff5a00` | Primary action and highlights |

Palette by frequency of use: `#ff5a00` · `#111827` · `#ffffff` · `#e5e7eb` · `#6b7280` · `#4b5563` · `#f9fafb` · `#374151` · `#9ca3af` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** extrabold, bold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_0_20px_rgba(255,90,0,0.3)]`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center bg-[#FF5A00] text-white font-semibold text-xs px-4 py-2 rounded-sm hover:opacity-90 transition-opacity uppercase tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Pricing (`pricing`)
5. Feature grid (`features`)
6. Services (`services`)
7. Booking form (`booking`)
8. Product grid (`product-grid`)
9. Logo cloud (`logo-cloud`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #ff5a00;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#ff5a00',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set headlines in Montserrat at a heavy weight, with the price or number highlighted in orange (#ff5a00)
- **Do:** Keep the page on white with dark ink (#111827) for text
- **Do:** Use the orange only for the navigation button, the badge and the highlighted figures
- **Don't:** Don't add a second brand colour to the headline
- **Don't:** Don't reduce the hero headline below the display scale; large type is the main device
- **Don't:** Don't place orange text on the orange glow, where the figures would lose contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
