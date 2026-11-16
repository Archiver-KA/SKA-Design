# Design system — Architectural Visualization Landing Page Template

`SN-W03182` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A monochrome, black-ground architecture page with a large italic serif headline in white, set on two centred lines. Navigation is a thin dark pill with a white button, and the body copy is muted grey. The drama comes from the scale of the type and the empty black field around it.

**Mood:** dramatic, monochrome, editorial, spare

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f97316` · `#fb923c` · `#e5e5e5` · `#333333` · `#7f1d1d` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif
- **Scale (largest breakpoint):** h1 104px · h2 60px · h3 20px · body 14px
- **Weights in use:** normal, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_40px_rgba(249,115,22,0.15)]`, `shadow-[0_0_30px_rgba(249,115,22,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-normal font-body hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Process / steps (`how-it-works`)
5. Product grid (`product-grid`)
6. Team (`team`)
7. Case studies (`case-studies`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e5e5e5',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a large italic serif in white
- **Do:** Keep the page black (#000000) with white type and grey body copy
- **Do:** Use the white pill button as the only call to action in the nav
- **Don't:** Don't add an accent colour; the page is black and white
- **Don't:** Don't set headlines in a light sans-serif
- **Don't:** Don't frame the hero with thick borders; use a hairline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
