# Design system — FluxRFP Premium RFP Curation Landing Page Template

`SN-W00396` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A cream ground with a faint warm glow at the top, a small black logo at top left, grey navigation links and a black Subscribe button. Playfair Display sets the headlines on the warm ground, giving a quiet editorial tone.

**Mood:** quiet, warm, editorial, minimal, unverified

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#7c2d12` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#ffedd5` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f3f4f6` · `#6b7280` · `#e5e7eb` · `#111827` · `#9ca3af` · `#fdfcf8` · `#4b5563` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-black text-white hover:bg-gray-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Schedule (`schedule-agenda`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #ffffff;
  --color-text: #7c2d12;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #22c55e;
  --color-accent-2: #ffedd5;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#ffffff',
    ink: '#7c2d12',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#22c55e',
    accent2: '#ffedd5',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground cream (#fdfcf8) with its faint warm glow rather than pure white.
- **Do:** Use the black Subscribe button as the single filled control in the header.
- **Do:** Set headlines in Playfair Display on the cream ground.
- **Don't:** Don't add heavy colour to the header; the nav is grey text and one black button.
- **Don't:** Don't set headlines in a sans-serif face.
- **Don't:** Don't add a second button colour to the header.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
