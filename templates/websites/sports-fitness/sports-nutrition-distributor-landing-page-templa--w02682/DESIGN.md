# Design system — Sports Nutrition Distributor Landing Page Template

`SN-W02682` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A light, clean distributor page on white with a dark headline whose second line is set in deep green (#047857). The green fills the primary button and the small eyebrow label, and pale yellow appears only in small award pills. A large grey photograph of powder in a rounded frame sits to the right, which keeps the page product-led and credible. The tone is measured and commercial.

**Mood:** clean, credible, measured, fresh, commercial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#047857` | Primary action and highlights |
| Second accent | `#fef3c7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#f5f5f5` · `#737373` · `#047857` · `#a3a3a3` · `#fafafa` · `#065f46` · `#059669` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex px-4 py-2 bg-emerald-800 text-white text-sm font-medium rounded-full hover:bg-emerald-700 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. About (`about`)
5. Awards / press (`awards-press`)
6. Logo cloud (`logo-cloud`)
7. Product grid (`product-grid`)
8. Bento grid (`bento-grid`)
9. Feature grid (`features`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #047857;
  --color-accent-2: #fef3c7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#047857',
    accent2: '#fef3c7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in #047857 and keep the first line near-black.
- **Do:** Use #047857 for the primary button and eyebrow labels.
- **Do:** Keep pale yellow (#fef3c7) to small award pills only.
- **Don't:** Don't use the pale yellow as a background for large areas.
- **Don't:** Don't use green for body copy.
- **Don't:** Don't set the photograph without rounded corners.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
