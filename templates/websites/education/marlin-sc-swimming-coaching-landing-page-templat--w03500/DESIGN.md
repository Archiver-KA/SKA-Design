# Design system — Marlin SC Swimming Coaching Landing Page Template

`SN-W03500` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A coaching page built around a large rounded hero panel with a soft blue gradient (#1a8be4 fading to pale blue). White Inter headlines are set at very large size with tight leading, and a floating testimonial card with a white surface sits at the panel edge. Colour is confined to the hero and a few accents, while the rest of the page stays white and open.

**Mood:** friendly, airy, confident, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1a8be4` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#4b5563` · `#1e3a8a` · `#1a8be4` · `#f9fafb` · `#2da6ef` · `#6b7280` · `#0d346c` · `#2563eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 88px · h2 64px · h3 56px · body 18px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-[3rem]` (3rem)
- **Shadows:** `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-[90rem]`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="hidden md:block bg-white text-gray-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Product grid (`product-grid`)
3. Booking form (`booking`)
4. Articles (`blog-articles`)
5. Feature grid (`features`)
6. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #1a8be4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
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
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#1a8be4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the blue gradient (#1a8be4) for the hero panel and its action area only
- **Do:** Set headlines in Inter at large size with tight leading, in white on the blue panel
- **Do:** Float testimonial cards with white backgrounds and a soft shadow over the panel edge
- **Don't:** Don't place blue text on blue backgrounds
- **Don't:** Don't use more than one gradient panel per screen
- **Don't:** Don't shrink the hero headline to body-text scale

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
