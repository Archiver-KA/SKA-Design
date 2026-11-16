# Design system — Creative Studio Landing Page Template

`SN-W01497` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a near-black headline set in uppercase sans over two centred lines, with small coral diamond marks (#ff6b47) between the words as the only accent. Below, product panels sit on light grey tiles with rounded corners, and the solid black button is the one filled shape in the hero. The stance is a clean, product-style studio layout where colour is confined to small marks.

**Mood:** clean, product-led, crisp, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#d1d5db` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#ff6b47` | Primary action and highlights |

Palette by frequency of use: `#e5e7eb` · `#ffffff` · `#111827` · `#4b5563` · `#d1d5db` · `#374151` · `#f9fafb` · `#6b7280` · `#f3f4f6` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-20`, `py-14`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #d1d5db;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #e5e7eb;
  --color-accent: #ff6b47;
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
    surface: '#d1d5db',
    ink: '#111827',
    muted: '#4b5563',
    line: '#e5e7eb',
    accent: '#ff6b47',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in uppercase near-black sans, centred over two lines.
- **Do:** Use the coral (#ff6b47) only for the small diamond marks between words.
- **Do:** Keep cards on light grey tiles with rounded corners, and use a solid black primary button.
- **Don't:** Don't use the coral for buttons or large fills.
- **Don't:** Don't add heavy shadows to the tiles; the tone change does the separation.
- **Don't:** Don't set the headline in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
