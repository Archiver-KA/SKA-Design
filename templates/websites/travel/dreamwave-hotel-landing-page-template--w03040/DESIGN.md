# Design system — Dreamwave Hotel Landing Page Template

`SN-W03040` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dim, warm-toned hero with a sunglasses portrait behind it and a white serif headline on two lines, its second line set in bright cyan (#1ecad3). Cyan is the primary action, and a coral (#ff7a59) booking button sits in the nav, while a soft cream band at the foot of the hero leads into the light page. Cool cyan with warm coral gives a playful resort tone.

**Mood:** playful, tropical, warm, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff8f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1ecad3` | Primary action and highlights |
| Second accent | `#ff7a59` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1ecad3` · `#94a3b8` · `#64748b` · `#ff7a59` · `#0f172a` · `#fff8f0` · `#1e293b` · `#475569` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Nunito
- **Body:** Nunito
- **Loaded families:** Nunito, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto bg-[#1ECAD3] hover:bg-[#19b1b9] text-white text-base font-medium px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-[#1ECAD3]/30 hover:-translate-y-1 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fff8f0;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1ecad3;
  --color-accent-2: #ff7a59;
  --font-display: "Nunito", sans-serif;
  --font-body: "Nunito", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff8f0',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1ecad3',
    accent2: '#ff7a59',
  },
  fontFamily: { display: ['Nunito'], sans: ['Nunito'] },
} }
```

## Do and don't

- **Do:** Set the headline in white serif, with the second line in cyan (#1ecad3)
- **Do:** Use cyan for primary buttons and coral (#ff7a59) for the nav booking button only
- **Do:** Fade the hero bottom into the cream ground (#fff8f0)
- **Don't:** Don't use coral for body text; it marks actions
- **Don't:** Don't put cyan and coral on the same button
- **Don't:** Don't set small text over the bright sunglasses highlights without a darker overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
