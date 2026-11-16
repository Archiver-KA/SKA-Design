# Design system — Luxury Niche Perfumery Landing Page Template

`SN-W02091` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, warm perfumery page with a near-black hero ground and a light grey navigation strip across the top. The headline is an uppercase serif with the closing phrase in italic, and the copper button [#c27c59] is the one strong colour, echoing the warm tones of the portrait. Small spaced labels sit above the headline and beside the button, and the photograph is a cropped portrait on deep blue.

**Mood:** warm, dark, luxurious, sensory, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c27c59` | Primary action and highlights |
| Second accent | `#14532d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#c27c59` · `#111827` · `#6b7280` · `#4b5563` · `#d1d5db` · `#1a1a1a` · `#9ca3af` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-[0_0_20px_rgba(194,124,89,0.3)]`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[90rem]`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-4`, `gap-12`, `gap-2`

**Primary button**

```html
<a class="px-6 py-2 bg-[#c27c59] text-[10px] uppercase tracking-widest font-light text-white w-full">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Call to action (`cta`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #c27c59;
  --color-accent-2: #14532d;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#c27c59',
    accent2: '#14532d',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase serif with the closing phrase in italic.
- **Do:** Use copper (#c27c59) only for the primary button and one accent line per section.
- **Do:** Keep the nav on a light grey strip with a small serif wordmark on the left.
- **Don't:** Don't make the hero light; it sits on a dark ground.
- **Don't:** Don't set body copy in copper.
- **Don't:** Don't place the copper button beside another filled button.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
