# Design system — Airline E-Ticket Layout

`SN-W03020` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A single boarding-pass style ticket, a white card on a pale grey ground. A navy vertical stripe with a rotated white airline name sits on the left, separated from the body by a perforated edge. Small grey labels sit above bold navy values, and a dense barcode and small disclaimer fill the foot, so it reads like a printed ticket.

**Mood:** printed, orderly, navy, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#003366` | Primary action and highlights |

Palette by frequency of use: `#9ca3af` · `#f5f5f5` · `#003366` · `#111827` · `#ffffff` · `#005288` · `#e5e7eb` · `#f3f4f6` · `#1f2937` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Manrope, Inter
- **Scale (largest breakpoint):** h2 18px · h3 20px · body 13px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px)
- **Content width:** `max-w-[600px]`
- **Common gaps:** `gap-3`

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #003366;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#003366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set field labels as small grey caps above bold navy values
- **Do:** Use navy (#003366) only for the side stripe and key values
- **Do:** Keep the perforated divider between the stripe and the body
- **Don't:** Don't add extra colours; the ticket is navy and grey on white
- **Don't:** Don't remove the barcode; it is the component's signature detail
- **Don't:** Don't round the outer corners much beyond a small radius

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
