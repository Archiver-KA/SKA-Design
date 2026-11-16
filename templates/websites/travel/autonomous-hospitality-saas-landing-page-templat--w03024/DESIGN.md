# Design system — Autonomous Hospitality SaaS Landing Page Template

`SN-W03024` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A pale sage-white page with a centred serif headline in deep green-black, set on two lines with the second line in regular weight. A dark green pill button (#2d4438) is the only strong shape, and a faint blurred glow sits low in the hero. Green on white runs through the page, and the serif headline carries the editorial tone.

**Mood:** calm, editorial, green, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f7f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f3027` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e3ebe6` | Hairlines, dividers, outlines |
| Accent | `#2d4438` | Primary action and highlights |
| Second accent | `#312e81` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1f3027` · `#c5d6cc` · `#2d4438` · `#e3ebe6` · `#78716c` · `#f4f7f5` · `#4f705d` · `#57534e` · `#3e5a4a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Satoshi
- **Body:** Satoshi
- **Loaded families:** Cormorant Garamond, Satoshi
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-5`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2 rounded-full bg-[#2D4438] text-white text-sm font-medium hover:bg-[#1F3027] transition-all hover:shadow-lg hover:shadow-[#C5D6CC] active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Comparison (`comparison`)
5. Feature grid (`features`)
6. Listings (`listings`)
7. Cart / checkout (`cart-checkout`)
8. Pricing (`pricing`)
9. Video / media (`video-media`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f4f7f5;
  --color-surface: #ffffff;
  --color-text: #1f3027;
  --color-muted: #78716c;
  --color-border: #e3ebe6;
  --color-accent: #2d4438;
  --color-accent-2: #312e81;
  --font-display: "Satoshi", sans-serif;
  --font-body: "Satoshi", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f7f5',
    surface: '#ffffff',
    ink: '#1f3027',
    muted: '#78716c',
    line: '#e3ebe6',
    accent: '#2d4438',
    accent2: '#312e81',
  },
  fontFamily: { display: ['Satoshi'], sans: ['Satoshi'] },
} }
```

## Do and don't

- **Do:** Set the headline in serif, in deep green (#1f3027), centred on two lines
- **Do:** Use the dark green (#2d4438) for the primary button and dark accents
- **Do:** Keep the page ground pale sage (#f4f7f5) with white cards
- **Don't:** Don't use the bright green (#4ade80) for buttons; it does not show on the first screen
- **Don't:** Don't set body text in warm grey on sage; it lowers contrast
- **Don't:** Don't use a geometric sans for headlines; the first screen uses serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
