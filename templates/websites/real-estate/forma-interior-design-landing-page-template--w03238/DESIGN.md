# Design system — Forma Interior Design Landing Page Template

`SN-W03238` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A grey, photograph-led interior-design hero with a centred white sans headline over a soft grey gradient, the second line in heavier weight. The primary action is a solid white button beside a round ghost play control, and three figures sit in a translucent card along the bottom. Faint blurred squares in the background add a soft, studio-like depth.

**Mood:** soft, studio, elegant, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#4b5563` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4b5563` · `#facc15` · `#9ca3af` · `#111827` · `#6366f1` · `#f3f4f6` · `#e5e7eb` · `#374151` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 18px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #4b5563;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #111827;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#4b5563',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#111827',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline centred in white sans, with the second line in heavier weight.
- **Do:** Use a solid white primary button with a round secondary control beside it.
- **Do:** Keep the stats in a translucent card with three figures across the bottom of the hero.
- **Don't:** Don't add yellow highlights; the palette is only greys, white and near-black.
- **Don't:** Don't put saturated colour in the hero; the design is neutral.
- **Don't:** Don't left-align the stat row; it sits centred under the buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
