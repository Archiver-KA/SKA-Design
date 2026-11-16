# Design system — Cafe Restaurant Landing Page Template

`SN-W02865` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark, quiet and contemporary. A near-black hero (#1c1917, fading to black) holds a centred white sans headline and a short line of body copy. The main action is a white pill with a black circular arrow knob, and the navigation is a dark rounded bar with small grey links. The page leans on shape and spacing rather than colour, and the first screen is almost entirely monochrome.

**Mood:** dark, quiet, contemporary, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fed7aa` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#a8a29e` · `#e7e5e4` · `#f5f5f4` · `#292524` · `#d6d3d1` · `#fafaf9` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-[1600px]`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="w-full bg-stone-900 text-white font-medium py-4 rounded-xl mt-4 hover:bg-stone-800 flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. About (`about`)
3. Menu list (`menu-list`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Map / location (`map-location`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #fed7aa;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#fed7aa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans, centred over a dark gradient
- **Do:** Make the primary button a white pill with a black circular knob
- **Do:** Put the navigation in a dark rounded bar with small grey links
- **Don't:** Don't place the hero on a light background
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't add drop shadows to the navigation bar; it sits flat on the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
