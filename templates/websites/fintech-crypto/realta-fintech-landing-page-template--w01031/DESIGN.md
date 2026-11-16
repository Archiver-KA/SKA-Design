# Design system — Realta Fintech Landing Page Template

`SN-W01031` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A soft sage-green institutional page: the hero sits on a pale green gradient, with dark forest (#204036) buttons and deep green (#132a24) headlines. The headline is a regular-weight grotesk, and its key words are picked out in a lighter green tone, so emphasis comes from colour rather than bold weight. It reads as a calm, trustworthy front for regulated assets, with the deep greens doing all the work.

**Mood:** calm, institutional, green, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f7f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#132a24` | Headings and primary copy |
| Muted text | `#879f98` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#204036` | Primary action and highlights |
| Second accent | `#dfb28e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#132a24` · `#879f98` · `#000000` · `#4b615a` · `#204036` · `#274f44` · `#2aa168` · `#eef3f0` · `#1d3a31`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Satoshi
- **Body:** Satoshi
- **Loaded families:** Satoshi
- **Scale (largest breakpoint):** h1 80px · h2 64px · h3 36px · body 20px
- **Weights in use:** thin, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[280px]`, `max-w-5xl`
- **Section padding:** `py-16`, `py-40`
- **Common gaps:** `gap-2`, `gap-3`, `gap-10`

**Primary button**

```html
<a class="group bg-[#132a24] text-white px-6 py-3 rounded-full text-lg flex items-center gap-2 hover:bg-[#1b3b33] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-light tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Announcement bar (`announcement-bar`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f7f6;
  --color-surface: #ffffff;
  --color-text: #132a24;
  --color-muted: #879f98;
  --color-border: #ffffff;
  --color-accent: #204036;
  --color-accent-2: #dfb28e;
  --font-display: "Satoshi", sans-serif;
  --font-body: "Satoshi", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f7f6',
    surface: '#ffffff',
    ink: '#132a24',
    muted: '#879f98',
    line: '#ffffff',
    accent: '#204036',
    accent2: '#dfb28e',
  },
  fontFamily: { display: ['Satoshi'], sans: ['Satoshi'] },
} }
```

## Do and don't

- **Do:** Set headlines in deep green (#132a24) and pick out the emphasised phrase in a lighter green
- **Do:** Use the dark forest green (#204036) for the primary button and keep the secondary button outlined
- **Do:** Keep the hero ground as a pale green gradient, not a flat fill
- **Don't:** Don't use bold weights for emphasis; colour carries it
- **Don't:** Don't introduce warm accents into the hero; the palette stays green
- **Don't:** Don't fill secondary buttons with colour; they stay outlined

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
