# Design system — Elyse Residence Real Estate Landing Page Template

`SN-W03236` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A luxury, monochrome residence page on near-black (#0a0a0a), dominated by a very large high-contrast serif wordmark, ELYSE, set along the bottom of the hero. A translucent dark card with an italic serif heading and grey body copy sits on the right. Nothing is coloured; the drama comes from scale and the serif letterforms.

**Mood:** luxurious, monochrome, dramatic, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#000000` · `#171717` · `#525252` · `#d4d4d4` · `#737373` · `#262626` · `#0a0a0a` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h2 36px · h3 24px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="hidden md:block bg-white text-black px-6 py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-neutral-200 transition-colors tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Case studies (`case-studies`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the brand wordmark very large in a high-contrast serif, anchored to the bottom of the hero.
- **Do:** Place body copy in a dark translucent card with a small italic serif heading.
- **Do:** Keep the whole page in black, white and grey; no accent colour appears.
- **Don't:** Don't add colour to buttons or links; the page stays monochrome.
- **Don't:** Don't shrink the wordmark to logo size on the hero; its scale is the design.
- **Don't:** Don't use a light background; the design depends on the black ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
