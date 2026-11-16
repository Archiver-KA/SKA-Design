# Design system — Cinematic Storytelling & Proposal Template

`SN-W01861` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black intro screen where a dim oxblood glow (#9d3f4b) rises from the centre behind a thin-line ring emblem. The only text is a small, widely spaced serif line in cream with a short rule beneath it, so the page opens as a quiet title card. Cormorant Garamond carries the type, and the warmth comes from the glow rather than from any solid colour.

**Mood:** romantic, hushed, ceremonial, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#070707` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f8f4ee` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#9d3f4b` | Primary action and highlights |
| Second accent | `#e9e0d7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#dda4aa` · `#d99ea4` · `#9d3f4b` · `#d89da3` · `#b6505c` · `#dca4aa` · `#d49ba0` · `#d8979d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Manrope
- **Scale (largest breakpoint):** h1 128px · h2 96px · h3 36px · body 12px
- **Weights in use:** medium
- **Letter spacing:** `tracking-[0.18rem]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-[0_2rem_5rem_rgba(48,30,25,0.16)]`, `shadow-[0_0_1rem_rgba(228,169,174,0.8)]`
- **Content width:** `max-w-[90rem]`, `max-w-[96rem]`
- **Section padding:** `py-28`
- **Common gaps:** `gap-3`, `gap-4`, `gap-5`

**Primary button**

```html
<a class="flex h-10 items-center gap-2 rounded-full border border-white/15 bg-black/15 px-4 text-xs font-medium text-white/70 backdrop-blur-xl transition hover:border-white/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d49ba0]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Listings (`listings`)
7. Call to action (`cta`)
8. Footer (`footer`)
9. Services (`services`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #070707;
  --color-surface: #000000;
  --color-text: #f8f4ee;
  --color-border: #ffffff;
  --color-accent: #9d3f4b;
  --color-accent-2: #e9e0d7;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#070707',
    surface: '#000000',
    ink: '#f8f4ee',
    line: '#ffffff',
    accent: '#9d3f4b',
    accent2: '#e9e0d7',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Use a soft radial glow in oxblood (#9d3f4b) behind the centre of the screen
- **Do:** Set text in Cormorant Garamond in cream (#f8f4ee), small and widely spaced
- **Do:** Use thin-line emblems and short rules instead of filled shapes
- **Don't:** Don't use the glow as a solid background fill
- **Don't:** Don't add bright accent colours; cream and oxblood are the whole palette
- **Don't:** Don't put the glow behind dense body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
