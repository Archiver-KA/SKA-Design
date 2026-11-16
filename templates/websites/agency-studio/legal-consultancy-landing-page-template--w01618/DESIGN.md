# Design system — Legal Consultancy Landing Page Template

`SN-W01618` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm, editorial law-firm page on cream (#f4f0e9). Near-black (#1a1816) Playfair Display headlines are set in uppercase and centred above a large framed portrait. The photograph carries the only strong colour, a saturated blue ground with an orange accent, so the rest of the palette stays neutral. Small sans body copy, a thin circular seal badge and a ghosted oversized letter in the background give the page a heritage tone.

**Mood:** heritage, editorial, calm, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f0e9` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#1a1816` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e8e2d2` | Primary action and highlights |
| Second accent | `#a64d4d` | Supporting highlights |

Palette by frequency of use: `#f4f0e9` · `#1a1816` · `#6b7280` · `#000000` · `#ffffff` · `#1f2937` · `#4b5563` · `#e8e2d2` · `#4a3728` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** Playfair Display, DM Sans
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-none` (0)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-12`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="bg-[#3E2D23] text-white text-[10px] font-medium tracking-wider px-6 py-3 rounded-full hover:bg-black transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Stats band (`stats`)
5. Benefits (`benefits`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f4f0e9;
  --color-surface: #e5e7eb;
  --color-text: #1a1816;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #e8e2d2;
  --color-accent-2: #a64d4d;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f0e9',
    surface: '#e5e7eb',
    ink: '#1a1816',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#e8e2d2',
    accent2: '#a64d4d',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display, uppercase, near-black (#1a1816)
- **Do:** Keep the page on cream (#f4f0e9) and use the beige (#e8e2d2) only for panels
- **Do:** Frame the hero portrait as a plain rectangle with no rounding
- **Don't:** Don't add colour to the typography; the only strong colour comes from photographs
- **Don't:** Don't set body copy in the serif
- **Don't:** Don't round the corners of the portrait

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
