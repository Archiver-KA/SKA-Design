# Design system — Arena Society Premium Sports Venue Landing Page Template

`SN-W02577` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A sports-venue page with a full-width grey photographic hero under a dark tint, a bold white sans-serif headline and a rounded pill badge. The brand is split in two colours in the logo, with a green second word. The primary actions are orange, and the page works as a straightforward, bright, booking-led layout.

**Mood:** sporty, bright, direct, bold, practical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#6b7280` · `#4b5563` · `#e5e7eb` · `#f9fafb` · `#f3f4f6` · `#000000` · `#1f2937` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Inter
- **Loaded families:** Inter, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg shadow-green-500/30 transition-all hover:scale-105 gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Booking form (`booking`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #22c55e;
  --color-accent-2: #facc15;
  --font-display: "Poppins", sans-serif;
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
    ink: '#1f2937',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#22c55e',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Poppins'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the green (#22c55e) in the logo's second word and small status dots
- **Do:** Set the hero headline in bold white sans-serif over a dark tint of the photograph
- **Do:** Use the orange for the primary booking button and keep the secondary button outlined in white
- **Don't:** Don't use the green for large fills; it marks the logo and status dots only
- **Don't:** Don't place the headline over a bright part of the photo without the dark tint
- **Don't:** Don't add more than one solid primary button in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
