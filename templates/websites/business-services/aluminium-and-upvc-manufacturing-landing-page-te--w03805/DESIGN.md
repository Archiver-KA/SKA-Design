# Design system — Aluminium & uPVC Manufacturing Landing Page Template

`SN-W03805` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A bold manufacturing hero with a full-width interior photograph under a dark overlay and large uppercase white Inter headlines set tight. Red (#dc2626) is the single accent, used on the eyebrow tag and the primary button, while the secondary action is a white button beside it. Square corners on the buttons and tags make the page feel engineered and direct.

**Mood:** bold, engineered, direct, industrial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#d4d4d4` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#dc2626` · `#d4d4d4` · `#000000` · `#a3a3a3` · `#525252` · `#737373` · `#e5e5e5` · `#f5f5f5` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="h-14 px-8 bg-red-600 text-white text-sm font-semibold uppercase tracking-wider hover:bg-red-700 transition-colors w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Product grid (`product-grid`)
5. Timeline (`timeline`)
6. Logo cloud (`logo-cloud`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #d4d4d4;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #dc2626;
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
    surface: '#d4d4d4',
    ink: '#171717',
    muted: '#737373',
    line: '#ffffff',
    accent: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter, uppercase, at a very large size, in white, over the darkened photograph.
- **Do:** Use red (#dc2626) for the eyebrow tag and the primary button only.
- **Do:** Keep buttons and tags with square corners.
- **Don't:** Don't round the corners of the buttons or tags.
- **Don't:** Don't add a second accent colour beside the red.
- **Don't:** Don't place the headline over a light area of the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
