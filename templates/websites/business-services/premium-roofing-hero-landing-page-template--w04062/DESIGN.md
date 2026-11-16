# Design system — Premium Roofing Hero Landing Page Template

`SN-W04062` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A clean, light conversion page where a near-black headline is broken by one blue phrase (#2563eb) at the end of the hero line. Blue also marks the eyebrow label, the main button and the check marks, while grey body copy stays calm beneath. Trust ratings sit in a plain row at the foot of the hero, so the page reads as a straightforward offer.

**Mood:** clean, trustworthy, direct, light, local

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |

Palette by frequency of use: `#4b5563` · `#2563eb` · `#ffffff` · `#f3f4f6` · `#e5e7eb` · `#6b7280` · `#111827` · `#000000` · `#1d4ed8` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-gray-200/50`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 group text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #4b5563;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#4b5563',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter in dark ink, colouring only its closing phrase in blue (#2563eb)
- **Do:** Use blue for the primary button, the check marks and the eyebrow label
- **Do:** Place trust ratings and reviews in a small row below the hero copy
- **Don't:** Don't use blue for body copy or for more than one phrase in a headline
- **Don't:** Don't add gradients or glows to the hero; the surfaces stay flat and white
- **Don't:** Don't shrink the headline below the hero scale

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
