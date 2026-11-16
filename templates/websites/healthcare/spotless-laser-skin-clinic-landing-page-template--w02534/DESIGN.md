# Design system — Spotless Laser Skin Clinic Landing Page Template

`SN-W02534` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A single offer card on a pale ground, with dark teal (#0e282f) on the navigation button and the base of the card image, and a tan (#cd944e) pill marking the featured plan. The stance is a clean, pricing-led clinic page rather than a spa. The price sits large in a serif against a photograph fading into teal, so the card does the selling.

**Mood:** pricing-led, clean, minimal, clinical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#0e282f` | Cards, panels, raised areas |
| Text | `#061116` | Headings and primary copy |
| Muted text | `#0e282f` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#cd944e` | Primary action and highlights |
| Second accent | `#ecfccb` | Supporting highlights |

Palette by frequency of use: `#0e282f` · `#ffffff` · `#cd944e` · `#f5f5f4` · `#fafaf9` · `#e7e5e4` · `#ecfccb` · `#061116` · `#f8f8f2` · `#e0e7ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist
- **Scale (largest breakpoint):** h1 48px · h2 48px · h3 16px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-[#0E282F] text-[#F8F8F2] px-5 py-2.5 rounded-lg text-sm hover:bg-[#061116] transition-all hover:scale-105 active:scale-95 shadow-md font-geist font-semibold tracking-wider">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #0e282f;
  --color-text: #061116;
  --color-muted: #0e282f;
  --color-border: #ffffff;
  --color-accent: #cd944e;
  --color-accent-2: #ecfccb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#0e282f',
    ink: '#061116',
    muted: '#0e282f',
    line: '#ffffff',
    accent: '#cd944e',
    accent2: '#ecfccb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use tan (#cd944e) only for the featured-plan pill and small highlights
- **Do:** Fade the card photograph into the dark teal (#0e282f) at its base
- **Do:** Set prices in a large serif, with the period in a smaller sans
- **Don't:** Don't use the tan as a page background; the ground is off-white
- **Don't:** Don't add more than one featured-plan badge
- **Don't:** Don't use the pale lime (#ecfccb) on the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
