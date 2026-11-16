# Design system — Verkh EdTech Landing Page Template

`SN-W03555` · education · dark mode · Sinera Atlas theme `calm` · language `ru`

## Direction

Verkh is a deep-blue hero with white headlines and a single yellow accent (#f5c842) on the top navigation button and the highest bar in the progress chart. The page is layered: a white results card floats over the blue ground, with bars drawn in blue tints and one gold bar to lead the eye. The headline is large sans-serif, and the tone is confident and academic.

**Mood:** confident, academic, bold, blue-gold, data-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d1f5c` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f5c842` | Primary action and highlights |
| Second accent | `#1a3faa` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f5c842` · `#0d1f5c` · `#1a3faa` · `#eef2ff` · `#1f2937` · `#6b7280` · `#f3f4f6` · `#e5b832` · `#f8f9fb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, normal, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-[#F5C842] text-[#0D1F5C] px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 hover:bg-[#E5B832] hover:scale-[1.02] shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. FAQ (`faq`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d1f5c;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #f5c842;
  --color-accent-2: #1a3faa;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d1f5c',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#f5c842',
    accent2: '#1a3faa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use yellow (#f5c842) for the primary button and the highlighted data point
- **Do:** Set hero headlines in white on the deep navy ground (#0d1f5c)
- **Do:** Float white data cards over the blue hero for proof points
- **Don't:** Don't use yellow for large text areas
- **Don't:** Don't set hero text in grey on the blue ground
- **Don't:** Don't flatten the progress chart into a plain list

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
