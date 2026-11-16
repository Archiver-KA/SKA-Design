# Design system — Coffee Shop Landing Page Template

`SN-W01131` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A warm coffee page whose hero is a muted grey field with a large white serif headline over three centred lines. A dark green pill sits in the cream header, and a terracotta button with white text is the single call to action below the copy. The serif display and cream header give an editorial, neighbourhood feel, with terracotta kept to one button.

**Mood:** editorial, warm, neighbourhood, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2a2624` | Headings and primary copy |
| Muted text | `#5c554e` | Secondary copy, captions |
| Border | `#fdfbf7` | Hairlines, dividers, outlines |
| Accent | `#a44c3a` | Primary action and highlights |

Palette by frequency of use: `#a44c3a` · `#fdfbf7` · `#2a2624` · `#5c554e` · `#e8dcc4` · `#2d4a3e` · `#c59b27` · `#1e332a` · `#8a3f30` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Fraunces
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 12px · body 12px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-[#A44C3A] px-8 text-sm font-medium text-[#FDFBF7] shadow-lg hover:bg-[#8A3F30] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Map / location (`map-location`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #ffffff;
  --color-text: #2a2624;
  --color-muted: #5c554e;
  --color-border: #fdfbf7;
  --color-accent: #a44c3a;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#ffffff',
    ink: '#2a2624',
    muted: '#5c554e',
    line: '#fdfbf7',
    accent: '#a44c3a',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a large white serif across three centred lines
- **Do:** Use terracotta (#a44c3a) for the single main button in the hero
- **Do:** Use the dark green (#2d4a3e) for the header's secondary button
- **Don't:** Don't use terracotta for more than one button on a screen
- **Don't:** Don't set the headline in a sans-serif
- **Don't:** Don't place the headline on the cream header; it sits on the darker hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
