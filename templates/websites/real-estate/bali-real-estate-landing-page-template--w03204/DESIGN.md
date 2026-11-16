# Design system — Bali Real Estate Landing Page Template

`SN-W03204` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A warm, light investment page on an off-white ground, with a large near-black sans-serif headline in which the word Bali is set in brown-orange. Check-icon chips list the key terms, and a rounded villa photograph sits on the right. Orange is the single accent, and the black pill button carries the primary action.

**Mood:** warm, clear, investment-led, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#d97706` | Primary action and highlights |
| Second accent | `#1c1917` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#e7e5e4` · `#78716c` · `#f5f5f4` · `#44403c` · `#fde68a` · `#fafaf9` · `#57534e` · `#d97706`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-medium text-white transition-all bg-amber-600 rounded-full hover:bg-amber-700 shadow-lg shadow-amber-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Map / location (`map-location`)
5. Case studies (`case-studies`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #d97706;
  --color-accent-2: #1c1917;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#d97706',
    accent2: '#1c1917',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans-serif, with the location word in orange (#d97706)
- **Do:** Use the black (#1c1917) for the primary button
- **Do:** Put key terms in a list with small check icons
- **Don't:** Don't use blue; the accent is orange only
- **Don't:** Don't set more than one orange word in the headline
- **Don't:** Don't add gradients behind the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
