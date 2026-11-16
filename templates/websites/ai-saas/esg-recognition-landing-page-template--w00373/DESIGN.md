# Design system — ESG Recognition Landing Page Template

`SN-W00373` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fr-BE`

## Direction

A light, editorial page on a near-white ground, with a deep forest green (#31543a) used for the headline and the primary button. The headline is set in Playfair Display, and its one italic word, ESG, is picked out in teal (#3f8a84), which is the page's main typographic moment. The layout is calm and institutional, with a soft teal glow behind the hero rather than imagery.

**Mood:** editorial, institutional, calm, serif-led, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#31543a` | Cards, panels, raised areas |
| Text | `#2a2a2a` | Headings and primary copy |
| Muted text | `#2a2a2a` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#3f8a84` | Primary action and highlights |
| Second accent | `#3f8a84` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#31543a` · `#2a2a2a` · `#6b7280` · `#f3f4f6` · `#e4b756` · `#3f8a84` · `#c89a8f` · `#f9fafa` · `#6ca8c2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-[#31543A] hover:bg-[#3F8A84] text-white px-5 py-2 rounded-full text-xs font-medium transition-all transform hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #31543a;
  --color-text: #2a2a2a;
  --color-muted: #2a2a2a;
  --color-border: #f3f4f6;
  --color-accent: #3f8a84;
  --color-accent-2: #3f8a84;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#31543a',
    ink: '#2a2a2a',
    muted: '#2a2a2a',
    line: '#f3f4f6',
    accent: '#3f8a84',
    accent2: '#3f8a84',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Playfair Display in forest green (#31543a), with one italic word in teal (#3f8a84).
- **Do:** Use the forest green for the primary button with white text, and for the nav logo mark.
- **Do:** Keep the hero on a near-white ground with only a faint teal glow behind it.
- **Don't:** Don't add bright colours to the hero; the palette is green and teal.
- **Don't:** Don't set the headline in a sans-serif; the serif is part of the identity.
- **Don't:** Don't put the hero on a dark background; it sits on light.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
