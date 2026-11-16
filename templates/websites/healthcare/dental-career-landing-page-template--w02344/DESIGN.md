# Design system — Dental Career Landing Page Template

`SN-W02344` · healthcare · light mode · Sinera Atlas theme `calm` · language `de`

## Direction

A premium dental careers page on warm off-white (#fafaf8) with a deep teal (#0f4c5c) serif headline and a gold (#c9a24d) italic phrase. The type is large and centred, with a teal primary pill and a pale outlined secondary. The palette reads as established and understated, and gold appears only in the italic word.

**Mood:** established, understated, elegant, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2b2b2b` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0f4c5c` | Primary action and highlights |
| Second accent | `#c9a24d` | Supporting highlights |

Palette by frequency of use: `#0f4c5c` · `#c9a24d` · `#ffffff` · `#2b2b2b` · `#fafaf8` · `#d1d5db` · `#b08d41` · `#0a3540`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-[#0F4C5C] text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-[#0F4C5C]/90 transition-all hover:shadow-lg hover:shadow-[#0F4C5C]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf8;
  --color-surface: #ffffff;
  --color-text: #2b2b2b;
  --color-border: #ffffff;
  --color-accent: #0f4c5c;
  --color-accent-2: #c9a24d;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf8',
    surface: '#ffffff',
    ink: '#2b2b2b',
    line: '#ffffff',
    accent: '#0f4c5c',
    accent2: '#c9a24d',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif in deep teal (#0f4c5c), with one italic phrase in gold (#c9a24d).
- **Do:** Use a solid deep teal pill for the primary action and a pale outline for the second.
- **Do:** Keep backgrounds warm off-white (#fafaf8) and use white for cards.
- **Don't:** Don't use gold for buttons or large fills; it is for the italic phrase.
- **Don't:** Don't set headlines in a sans-serif.
- **Don't:** Don't add bright colours; the page is teal, gold and off-white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
