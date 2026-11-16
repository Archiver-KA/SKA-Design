# Design system — Dental Clinic Landing Page 

`SN-W02346` · healthcare · light mode · Sinera Atlas theme `calm` · language `id`

## Direction

A friendly Indonesian dental page on white with near-black sans headlines and a bright teal-green (#00d9a3) for the key phrase, the logo mark and the primary button. The hero uses a small rounded badge, a rounded clinic photograph and a floating location card. Green is used sparingly, so the page feels fresh and approachable.

**Mood:** fresh, approachable, clean, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f0fdf4` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#00d9a3` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#111827` · `#00d9a3` · `#ffffff` · `#f3f4f6` · `#4b5563` · `#6b7280` · `#f0fdf4` · `#facc15` · `#374151` · `#16a34a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 border-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Feature grid (`features`)
6. Testimonials (`testimonials`)
7. Map / location (`map-location`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f0fdf4;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #00d9a3;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f0fdf4',
    ink: '#111827',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#00d9a3',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of the headline in teal-green (#00d9a3) and keep the rest near-black (#111827).
- **Do:** Make the primary button a solid teal-green pill with a trailing arrow icon.
- **Do:** Place a small floating card with an icon over the hero photo for location or safety details.
- **Don't:** Don't use the yellow (#facc15) for text.
- **Don't:** Don't set body copy in teal-green; it is for emphasis and buttons.
- **Don't:** Don't use serif type; the page is sans-only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
