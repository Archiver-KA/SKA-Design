# Design system — Lachowski

`SN-W02071` · portfolio · light mode · Sinera Atlas theme `workshop` · language `pl`

## Direction

A bold, solid hero where a heavy white sans headline in two short lines sits on a grey gradient that fades down into a near-black strip of three figures. A warm gold (#c8933a) fill carries the primary button, with a dark outline secondary beside it. Grey and gold give the page a dependable, premium-trades tone, and the figure strip at the foot of the hero is the recognisable device.

**Mood:** solid, premium, bold, trustworthy, industrial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8f9fa` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#c8933a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1c1e` · `#c8933a` · `#f3f4f6` · `#6b7280` · `#f8f9fa` · `#9ca3af` · `#4b5563` · `#d1d5db` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Inter
- **Loaded families:** Inter, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="bg-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-dark/90 transition-all shadow-sm hover:shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Map / location (`map-location`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8f9fa;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #c8933a;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8f9fa',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#c8933a',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a heavy sans in white, in two short lines.
- **Do:** Use gold (#c8933a) only for the primary button.
- **Do:** Finish the hero with a dark strip of three figures, each with a short label.
- **Don't:** Don't fill the secondary button with gold; it is a dark outline.
- **Don't:** Don't set body copy in dark ink on the grey hero; it needs the light tone.
- **Don't:** Don't add a light background behind the hero copy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
