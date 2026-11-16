# Design system — Industrial Truck Manufacturing Landing Page Template

`SN-W03959` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy hero with bold white sans-serif headlines, where the second line drops to a muted blue-grey so the top line stays sharpest. Safety orange (#ea580c) marks the primary button and the brand accent in the logo, while the secondary button is a dark slate fill. A thin utility bar above the navigation carries contact details in small type.

**Mood:** industrial, direct, corporate, clear, sturdy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ea580c` · `#0f172a` · `#64748b` · `#f8fafc` · `#f1f5f9` · `#94a3b8` · `#f97316` · `#e2e8f0` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-medium rounded hover:bg-orange-700 transition-all shadow-lg shadow-orange-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Benefits (`benefits`)
4. Product grid (`product-grid`)
5. Video / media (`video-media`)
6. Listings (`listings`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #ea580c;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#ea580c',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero on dark navy (#0f172a) with white headlines
- **Do:** Use orange (#ea580c) for the primary button and the logo accent only
- **Do:** Set secondary buttons in dark slate rather than outline
- **Don't:** Don't set orange text on the navy ground
- **Don't:** Don't add more than one accent colour to the header
- **Don't:** Don't set the second headline line in pure white; keep it muted blue-grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
