# Design system — International University Landing Page Template

`SN-W03485` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A formal institutional page on a pale grey ground (#f9fafb), with a deep navy (#003c73) top bar and primary links. Below the hero, a steel-blue band of service tiles shows gold icons over white captions across five columns. The type is a plain sans, and the layout is a set of neat panels separated by thin lines.

**Mood:** formal, institutional, orderly, measured, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#003c73` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#003c73` · `#6b7280` · `#d1d5db` · `#f3f4f6` · `#374151` · `#4b5563` · `#1f2937` · `#111827` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 24px · body 16px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-10`

**Primary button**

```html
<a class="group bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center text-center h-40 border-b-2 border-transparent hover:border-brand-gold hover:-translate-y-1 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Services (`services`)
3. Articles (`blog-articles`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Swiper
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #003c73;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#003c73',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use navy (#003c73) for the top bar and primary links
- **Do:** Set each service tile as an icon above a short caption on the blue band
- **Do:** Keep the hero imagery neutral so the page stays calm
- **Don't:** Don't add bright colours beyond navy and gold
- **Don't:** Don't set captions in light text on the pale grey
- **Don't:** Don't use rounded blobs or decorative shapes

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
