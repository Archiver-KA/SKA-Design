# Design system — Cherry Note AI Study Companion Landing Page Template

`SN-W00276` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, friendly study-app page: a warm off-white ground (#fafaf9) with a large near-black headline and a grey (#78716c) second line set in the same weight. The nav and primary button are a dark charcoal pill, and a scrolling ticker of small pink-red labels runs across the top as the only colour. The product panel below uses flat cards with generous spacing, which keeps the page airy and student-facing.

**Mood:** friendly, airy, neutral, student-facing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#e7e5e4` · `#f5f5f4` · `#f43f5e` · `#a8a29e` · `#fafaf9` · `#292524` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 88px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-4xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-stone-800">…</a>
```

## Page structure

Blocks in page order:

1. Stats band (`stats`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Phosphor

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #1c1917;
  --color-text: #111111;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#1c1917',
    ink: '#111111',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use charcoal (#1c1917) for the nav pill and the primary button
- **Do:** Set headlines in heavy sans on the off-white ground (#fafaf9)
- **Do:** Keep the scrolling ticker labels small and reserve the pink-red for them
- **Don't:** Don't use the pink-red (#f43f5e) for buttons; it marks the ticker only
- **Don't:** Don't set the second headline line in the darker grey; it is a lighter tone
- **Don't:** Don't add heavy shadows to the product panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
