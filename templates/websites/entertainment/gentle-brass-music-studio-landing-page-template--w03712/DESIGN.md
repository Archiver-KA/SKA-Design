# Design system — Gentle Brass Music Studio Landing Page Template

`SN-W03712` · entertainment · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Warm off-white ground with large rounded cards in translucent taupe, each carrying a short label in light type. Ochre-brown dots (#b55d30) and an outlined pill button are the only accents, which keeps the palette earthy and calm. Corners are generously rounded and the spacing is wide, so the layout feels airy and unhurried.

**Mood:** warm, soft, artisanal, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f1ea` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b55d30` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#d6d3d1` · `#f4f1ea` · `#b55d30` · `#292524` · `#e7e5e4` · `#000000` · `#a8a29e` · `#78716c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-[1440px]`
- **Common gaps:** `gap-6`, `gap-x-6`, `gap-y-6`

**Primary button**

```html
<a class="pl-8 pr-6 py-5 rounded-l-full border-l border-y border-stone-900 text-stone-900 font-semibold tracking-wide text-xs hover:bg-stone-900 hover:text-[#F4F1EA] transition-all uppercase bg-transparent">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Feature grid (`features`)
6. Bento grid (`bento-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f4f1ea;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #b55d30;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f1ea',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#b55d30',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the warm off-white ground (#f4f1ea) with taupe cards and generous spacing
- **Do:** Round cards and buttons with large radii
- **Do:** Keep the brown accent (#b55d30) to dot patterns and small markers
- **Don't:** Don't use cool grey or blue in the layout
- **Don't:** Don't set text in a saturated colour over the cards
- **Don't:** Don't use sharp square corners on cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
