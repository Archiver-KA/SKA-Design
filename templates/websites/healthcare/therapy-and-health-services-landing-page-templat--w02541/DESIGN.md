# Design system — Therapy & Health Services Landing Page Template

`SN-W02541` · healthcare · light mode · Sinera Atlas theme `calm` · language `nl`

## Direction

A plain, clinical-warm treatment page: a cream ground (#fbf6ef) with a heavy black centred headline and a single saturated orange (#f79601) pill button. A three-column proof strip sits at the foot of the hero, with short bold figures and small grey captions. The stance is direct and reassuring, and the page is built on text and one button rather than imagery.

**Mood:** direct, clinical, warm, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbf6ef` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#f79601` | Primary action and highlights |

Palette by frequency of use: `#f79601` · `#ffffff` · `#4b5563` · `#f3f4f6` · `#fff7ed` · `#fbf6ef` · `#6b7280` · `#9ca3af` · `#000000` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Roboto
- **Body:** Roboto
- **Loaded families:** Roboto, Titillium Web
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_60px_rgba(247,150,1,0.2)]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-[#F79601] text-white px-8 py-4 font-medium text-lg hover:bg-orange-600 transition-colors inline-flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fbf6ef;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #f79601;
  --font-display: "Roboto", sans-serif;
  --font-body: "Roboto", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbf6ef',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#f79601',
  },
  fontFamily: { display: ['Roboto'], sans: ['Roboto'] },
} }
```

## Do and don't

- **Do:** Use orange (#f79601) for the primary button only
- **Do:** Set the hero headline centred in a heavy black sans
- **Do:** Keep the proof strip as three columns of short figures with small grey captions
- **Don't:** Don't add photography to the hero; the page is typographic
- **Don't:** Don't use the orange for headings or large fills
- **Don't:** Don't set headings in italic

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
