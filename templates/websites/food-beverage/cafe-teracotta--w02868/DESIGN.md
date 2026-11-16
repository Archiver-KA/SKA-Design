# Design system — Cafe Teracotta

`SN-W02868` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Rustic and handmade. A cream and peach ground (#fed7aa) carries a bold red-brown serif headline (#88301b) set over a warm shelf scene of jars and wood, with a white italic script overlay for the tagline. The palette is red-brown, cream and dark brown, and the loud type carries the personality more than the imagery does. The top ribbon is small uppercase caps in dark brown.

**Mood:** rustic, warm, bold, handmade

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fed7aa` | Page ground |
| Surface | `#fdfbf7` | Cards, panels, raised areas |
| Text | `#2c2420` | Headings and primary copy |
| Border | `#2c2420` | Hairlines, dividers, outlines |
| Accent | `#88301b` | Primary action and highlights |

Palette by frequency of use: `#2c2420` · `#88301b` · `#ffffff` · `#fdfbf7` · `#000000` · `#e6dcd3` · `#f5f2eb` · `#d4c5b9` · `#fed7aa` · `#fdba74`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Geist, Space Mono
- **Scale (largest breakpoint):** h1 36px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-[200px]`
- **Common gaps:** `gap-4`, `gap-x-4`, `gap-y-4`

**Primary button**

```html
<a class="group relative px-8 py-3 bg-[#88301B] text-[#FDFBF7] text-sm tracking-widest uppercase hover:bg-[#722816] transition-all duration-300 shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. About (`about`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Menu list (`menu-list`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fed7aa;
  --color-surface: #fdfbf7;
  --color-text: #2c2420;
  --color-border: #2c2420;
  --color-accent: #88301b;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fed7aa',
    surface: '#fdfbf7',
    ink: '#2c2420',
    line: '#2c2420',
    accent: '#88301b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a bold serif in red-brown (#88301b)
- **Do:** Use red-brown (#88301b) for the primary button and headline accents
- **Do:** Keep the top announcement ribbon in small uppercase caps above the nav
- **Don't:** Don't stack the white script tagline over the red headline; they collide in the hero
- **Don't:** Don't use cool greys in the nav or cards
- **Don't:** Don't add a second red for buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
