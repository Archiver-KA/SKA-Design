# Design system — Market Research Report Landing Page Template

`SN-W00523` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white research-report page with a dark grey (#111827) headline and a row of light-tinted stat cards in pale green, blue and amber. The primary Export PDF button is blue (#2563eb), with the green (#16a34a) kept for the figures. The header band and the hairline dividers make the page read as a clear, data-led document.

**Mood:** clear, data-led, informative, light, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#dcfce7` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#111827` · `#4b5563` · `#ffffff` · `#374151` · `#e5e7eb` · `#16a34a` · `#2563eb` · `#dcfce7` · `#f3f4f6` · `#dbeafe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 16px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-1`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Bento grid (`bento-grid`)
5. Product grid (`product-grid`)
6. Articles (`blog-articles`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #dcfce7;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #e5e7eb;
  --color-accent: #2563eb;
  --color-accent-2: #2563eb;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#dcfce7',
    ink: '#111827',
    muted: '#4b5563',
    line: '#e5e7eb',
    accent: '#2563eb',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the blue (#2563eb) for the primary button and links.
- **Do:** Set stat cards on the pale tints with large figures in dark grey.
- **Do:** Keep headlines in near-black (#111827) on white.
- **Don't:** Don't use green for buttons; it marks figures.
- **Don't:** Don't add gradients or glows to the header.
- **Don't:** Don't use more than three tints for the stat cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
