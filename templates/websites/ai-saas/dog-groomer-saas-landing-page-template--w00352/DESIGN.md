# Design system — Dog Groomer SaaS Landing Page Template

`SN-W00352` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A light, practical booking page on warm off-white (#fafaf9) with charcoal headlines, and the promise clause of each headline set in deep green (#047857). The hero shows a product card with an agenda list, green status text and a pale-yellow price tag, so the product explains itself. Rounded green buttons and plain copy keep the tone trustworthy.

**Mood:** practical, warm, trustworthy, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#44403c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#047857` | Primary action and highlights |
| Second accent | `#fef3c7` | Supporting highlights |

Palette by frequency of use: `#44403c` · `#1c1917` · `#e7e5e4` · `#ffffff` · `#292524` · `#047857` · `#fafaf9` · `#57534e` · `#d1fae5` · `#ecfdf5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 30px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-normal`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white text-stone-800 hover:bg-stone-100 transition px-3 py-2 text-sm font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Logo cloud (`logo-cloud`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)
9. Video / media (`video-media`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #44403c;
  --color-border: #e7e5e4;
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
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#44403c',
    line: '#e7e5e4',
    accent: '#047857',
    accent2: '#fef3c7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the promise clause of each headline in deep green (#047857)
- **Do:** Use the pale yellow (#fef3c7) only for price and access tags
- **Do:** Show the agenda product card beside the hero copy
- **Don't:** Don't use green for large section backgrounds
- **Don't:** Don't add dark sections; the page stays light
- **Don't:** Don't set the price tag in bold green

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
