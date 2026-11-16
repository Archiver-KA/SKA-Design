# Design system — Holistic PCOD Wellness Landing Page Template

`SN-W02414` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

The PCOD page is a soft, natural-toned wellness layout: a warm off-white ground, a large serif headline in near-black with the second line in italic sage, and a dark green primary button. A rounded photo of a group doing beach yoga supplies the colour, so the green stays on type and controls. The benefit list is plain small text, which keeps the page calm.

**Mood:** natural, soft, reassuring, organic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#a8a29e` · `#78716c` · `#e7e5e4` · `#f5f5f4` · `#fafaf9` · `#57534e` · `#44403c` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Serif Display
- **Body:** Inter
- **Loaded families:** DM Serif Display, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage-600 text-white text-sm font-medium hover:bg-sage-700 transition-all shadow-lg shadow-sage-600/20 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Process / steps (`how-it-works`)
5. Articles (`blog-articles`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --color-accent-2: #22c55e;
  --font-display: "DM Serif Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['DM Serif Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in serif in near-black, with the closing phrase in italic sage
- **Do:** Use the dark green button for the primary action and keep it the only filled control
- **Do:** Place a rounded photo of people or nature beside the hero copy
- **Don't:** Don't use amber as an accent.
- **Don't:** Don't set benefit lists in bold or coloured type
- **Don't:** Don't use hard-edged cards; keep the photo and panels rounded

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
