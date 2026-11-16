# Design system — Cosmetic Wholesaler Landing Page Template

`SN-W02733` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Light, soft luxury page on a cream ground with a large serif headline whose second and third lines are set in lighter warm grey italic. Black pills carry the actions, and the right side shows a tall pale product panel with a small white badge. Contrast comes from the weight and tone shift in the headline rather than from colour.

**Mood:** soft, luxurious, neutral, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcfb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |
| Second accent | `#fecdd3` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#fff1f2` · `#f59e0b` · `#fecdd3` · `#fdfcfb` · `#d8cfc4` · `#ffe4e6` · `#dcfce7` · `#15803d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-brand-900/5`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-brand-900 border border-brand-200 rounded-full px-5 py-2 text-xs font-medium hover:bg-white transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Logo cloud (`logo-cloud`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfcfb;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #000000;
  --color-accent-2: #fecdd3;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcfb',
    surface: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#000000',
    accent2: '#fecdd3',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif, with the second and third lines in light warm grey italic
- **Do:** Use black filled pills for the main call to action
- **Do:** Keep imagery as a pale framed panel with a small white badge overlay
- **Don't:** Don't add saturated colour to buttons; the actions are black pills
- **Don't:** Don't use a pink page ground; the ground is cream and white
- **Don't:** Don't set the headline in a sans serif; the contrast depends on the serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
