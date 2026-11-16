# Design system — Fitness Training Landing Page Template

`SN-W02611` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en-US`

## Direction

A light, editorial training hub on an off-white ground with a heavy black Inter headline set in uppercase. The hero is split, with copy on the left and a rounded grey media panel on the right, and the palette is black on white with grey secondary text. A single dark button is the only strong emphasis, so the page reads as clear and quiet rather than energetic.

**Mood:** light, quiet, editorial, monochrome, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#111827` · `#000000` · `#ffffff` · `#4b5563` · `#e5e7eb` · `#6b7280` · `#f9fafb` · `#f3f4f6` · `#9ca3af` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 20px · body 14px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-base font-normal text-white hover:bg-gray-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Services (`services`)
5. Video / media (`video-media`)
6. Process / steps (`how-it-works`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5e7eb;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #000000;
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
    muted: '#4b5563',
    line: '#000000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase Inter in near-black (#111827).
- **Do:** Use the dark button (#111827) as the only strong emphasis per section.
- **Do:** Keep the media panel in light grey with generous padding around it.
- **Don't:** Don't add a bright accent colour; the page is black and white.
- **Don't:** Don't set the headline in a light weight.
- **Don't:** Don't use a dark page background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
