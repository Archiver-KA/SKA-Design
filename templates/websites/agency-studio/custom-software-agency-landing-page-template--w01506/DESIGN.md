# Design system — Custom Software Agency Landing Page Template

`SN-W01506` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A deep forest-green ground (#0b1e14) with a left-aligned, regular-weight sans headline in white over three lines and light grey body copy. On the right, a wireframe-style dashboard is drawn in tonal greens (#0e2519), so the illustration stays inside the same palette. The primary button is solid white and the secondary is outlined, and the page reads as calm and sober rather than loud.

**Mood:** sober, calm, tonal, corporate

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b1e14` | Page ground |
| Surface | `#0a1a11` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0b1e14` · `#34d399` · `#f3f4f6` · `#0e2519` · `#ef4444` · `#eab308` · `#22c55e` · `#0a1a11` · `#08160f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#0B1E14] bg-white rounded-lg hover:bg-gray-100 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Integrations (`integrations`)
5. Timeline (`timeline`)
6. Logo cloud (`logo-cloud`)
7. Feature grid (`features`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b1e14;
  --color-surface: #0a1a11;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b1e14',
    surface: '#0a1a11',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground deep green (#0b1e14) and draw illustrations in tonal greens (#0e2519).
- **Do:** Set the headline left-aligned in regular-weight sans in white over three lines.
- **Do:** Use a solid white button for the primary action and an outlined button beside it.
- **Don't:** Don't add red; the page uses only green and white.
- **Don't:** Don't set the headline in bold; the layout relies on regular weight.
- **Don't:** Don't use bright illustrations; the mockup stays tonal.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
