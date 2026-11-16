# Design system — Creative Portfolio Website Template

`SN-W01905` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a centred identity block: a plain circular profile slot, a large black sans name, a grey role line and a row of pale grey pill chips for sections. Below the fold, a row of colour-blocked project cards in blue, cream, orange and deep red carries the colour, so the identity stays neutral while the work supplies the colour.

**Mood:** clean, neutral, personal, colour-blocked

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#1f2937` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#fcd775` | Primary action and highlights |
| Second accent | `#d7fbe8` | Supporting highlights |

Palette by frequency of use: `#000000` · `#e5e7eb` · `#1f2937` · `#111827` · `#f7f6f2` · `#ffffff` · `#6b7280` · `#f3f4f6` · `#4b5563` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 24px · body 20px
- **Weights in use:** medium, normal, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Common gaps:** `gap-1`, `gap-1.5`, `gap-3`

**Primary button**

```html
<a class="bg-gray-100 hover:bg-gray-200 transition-colors px-5 py-2.5 rounded-full text-base font-medium text-gray-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Logo cloud (`logo-cloud`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5e7eb;
  --color-text: #111827;
  --color-muted: #1f2937;
  --color-border: #f5f5f4;
  --color-accent: #fcd775;
  --color-accent-2: #d7fbe8;
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
    surface: '#e5e7eb',
    ink: '#111827',
    muted: '#1f2937',
    line: '#f5f5f4',
    accent: '#fcd775',
    accent2: '#d7fbe8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the name large, black and sans, centred under the profile slot.
- **Do:** Set section chips as pale grey pills in a single row.
- **Do:** Let the project cards carry colour; keep the identity block neutral.
- **Don't:** Don't add colour to the identity block or the chips.
- **Don't:** Don't place the cards above the chips; the order is identity, chips, cards.
- **Don't:** Don't shrink the name to a small line.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
