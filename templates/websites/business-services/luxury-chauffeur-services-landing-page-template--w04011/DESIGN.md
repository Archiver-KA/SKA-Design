# Design system — Luxury Chauffeur Services Landing Page Template

`SN-W04011` · business-services · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

A formal chauffeur page with a flat grey hero carrying a large white sans-serif headline in short lines, under a white navigation bar with a gold quote button. The headline is set tight and the gold (#c09e5b) appears only on the reservation action. Sections below use a plain band with spaced capital labels, which keeps the page measured and businesslike.

**Mood:** formal, measured, businesslike, clean, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#7a7a7a` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#c09e5b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c09e5b` · `#000000` · `#f5f5f5` · `#f3f4f6` · `#e5e7eb` · `#7a7a7a` · `#c28f2b` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Dosis
- **Body:** Lato
- **Loaded families:** Dosis, Lato
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-md` (6px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="w-full bg-accent hover:bg-accentHover text-white font-medium py-4 rounded-lg transition-colors shadow-lg shadow-accent/20 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #000000;
  --color-muted: #7a7a7a;
  --color-border: #f3f4f6;
  --color-accent: #c09e5b;
  --font-display: "Dosis", sans-serif;
  --font-body: "Lato", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#000000',
    muted: '#7a7a7a',
    line: '#f3f4f6',
    accent: '#c09e5b',
  },
  fontFamily: { display: ['Dosis'], sans: ['Lato'] },
} }
```

## Do and don't

- **Do:** Use gold (#c09e5b) for the reservation button only
- **Do:** Set headlines in a tight sans-serif, white on the grey hero
- **Do:** Use spaced uppercase for the labels in the band under the hero
- **Don't:** Don't use gold for body copy
- **Don't:** Don't add a second button colour to the navigation
- **Don't:** Don't set the headline in a serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
