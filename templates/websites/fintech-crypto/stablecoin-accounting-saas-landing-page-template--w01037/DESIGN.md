# Design system — Stablecoin Accounting SaaS Landing Page Template

`SN-W01037` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white enterprise page has feature cards with fine light-grey borders on a near-white ground, with black text (#000000) in a bold sans. Icons sit in small squares with a pale lime tint, and green (#65a30d) appears only as small icon marks, so the page reads as accounting software rather than crypto. The bento grid of thin-bordered cards is the recognisable structure.

**Mood:** enterprise, clean, structured, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#171717` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#65a30d` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#65a30d` · `#a3e635` · `#e5e5e5` · `#f5f5f5` · `#a3a3a3` · `#fafafa` · `#84cc16`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 64px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-md`
- **Content width:** `max-w-[1300px]`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-lime-400 text-neutral-900 font-semibold px-6 py-3 rounded-full text-sm hover:bg-lime-300 transition-colors text-center shadow-[0_0_20px_rgba(163,230,53,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Logo cloud (`logo-cloud`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #000000;
  --color-muted: #171717;
  --color-border: #e5e5e5;
  --color-accent: #65a30d;
  --color-accent-2: #3b82f6;
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
    surface: '#fafafa',
    ink: '#000000',
    muted: '#171717',
    line: '#e5e5e5',
    accent: '#65a30d',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground white (#ffffff) and card surfaces at #fafafa with #e5e5e5 borders
- **Do:** Use the green (#65a30d) only for icon marks and small status accents
- **Do:** Build feature sections as bento grids with thin borders instead of shadows
- **Don't:** Don't use the bright lime (#a3e635) as a large fill; it appears only as a tint
- **Don't:** Don't add drop shadows to cards; the borders do the work
- **Don't:** Don't add a blue accent; the accents are green marks only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
