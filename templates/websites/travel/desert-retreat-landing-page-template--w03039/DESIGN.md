# Design system — Desert Retreat Landing Page Template

`SN-W03039` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A warm sand-and-dune hero: a soft pink-beige desert photograph fills the screen, with a white serif headline of three lines, the final phrase in italic, set centred over the dunes. A dark nav pill and a white pill with dark text carry the actions, and small spaced uppercase labels sit above the title. The palette is sand, stone and charcoal, calm and slow in tone.

**Mood:** calm, spacious, warm, slow

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#d6d3d1` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2d2a26` | Headings and primary copy |
| Border | `#2d2a26` | Hairlines, dividers, outlines |
| Accent | `#2d2a26` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#2d2a26` · `#ffffff` · `#f5f2eb` · `#d4c5b0` · `#d6d3d1` · `#000000` · `#e6e2da` · `#25d366` · `#20bd5a` · `#14532d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** Crimson Pro, DM Sans
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 36px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-16`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-[#2D2A26] text-[#F5F2EB] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Process / steps (`how-it-works`)
5. Feature grid (`features`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #d6d3d1;
  --color-surface: #ffffff;
  --color-text: #2d2a26;
  --color-border: #2d2a26;
  --color-accent: #2d2a26;
  --color-accent-2: #25d366;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#d6d3d1',
    surface: '#ffffff',
    ink: '#2d2a26',
    line: '#2d2a26',
    accent: '#2d2a26',
    accent2: '#25d366',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in white serif, with the final phrase in italic
- **Do:** Use charcoal (#2d2a26) for the navigation pill and primary button
- **Do:** Keep the palette to sand, stone and charcoal over the desert photograph
- **Don't:** Don't use bright colours in the hero; the palette is sand and stone
- **Don't:** Don't use the WhatsApp green (#25d366) for the main button; the booking button is white
- **Don't:** Don't set small body copy over the light dune areas; it loses contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
