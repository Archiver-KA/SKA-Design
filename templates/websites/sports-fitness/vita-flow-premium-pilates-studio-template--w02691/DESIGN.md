# Design system — Vita Flow Premium Pilates Studio Template

`SN-W02691` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

Premium Pilates studio page on a warm cream ground (#f9f5ef). The headline is a high-contrast serif in deep maroon (#481315), with one word in italic maroon for emphasis, and the same maroon fills the header button, so colour is used sparingly. The image sits in a soft beige frame with a warm fade, which gives the page a calm, editorial feel.

**Mood:** warm, editorial, calm, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f5ef` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2e2e2e` | Headings and primary copy |
| Muted text | `#6f725c` | Secondary copy, captions |
| Border | `#6f725c` | Hairlines, dividers, outlines |
| Accent | `#481315` | Primary action and highlights |

Palette by frequency of use: `#6f725c` · `#4a4a4a` · `#d5c0a7` · `#ffffff` · `#f9f5ef` · `#2e2e2e` · `#bea88a` · `#481315` · `#e0d4c1` · `#ede6da`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** Cormorant Garamond, DM Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 15px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-[-0.02em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[16px]` (16px), `rounded-[20px]` (20px)
- **Shadows:** `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-[1280px]`, `max-w-[800px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f9f5ef;
  --color-surface: #ffffff;
  --color-text: #2e2e2e;
  --color-muted: #6f725c;
  --color-border: #6f725c;
  --color-accent: #481315;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f5ef',
    surface: '#ffffff',
    ink: '#2e2e2e',
    muted: '#6f725c',
    line: '#6f725c',
    accent: '#481315',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use deep maroon (#481315) for the header button and the one emphasised word in each headline.
- **Do:** Set the headline in a high-contrast serif with one italic maroon word.
- **Do:** Keep the ground warm cream (#f9f5ef) and card surfaces white.
- **Don't:** Don't use beige (#d5c0a7) for text; it is a surface tone and too low in contrast.
- **Don't:** Don't add bright colours; the palette stays cream, brown and maroon.
- **Don't:** Don't remove the soft fade over the hero image; it is part of the warmth.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
