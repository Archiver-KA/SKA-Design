# Design system — Luxury Brand Studio Landing Page Template

`SN-W02083` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black, cinematic studio page built around one oversized serif word, set in white at the centre of the first screen. Small, widely spaced uppercase captions frame it at the corners, and the nav is reduced to two words. The page is almost entirely black and white, so the type creates the drama without colour or imagery.

**Mood:** cinematic, stark, editorial, monochrome, sparse

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e6e6e6` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#050505` · `#e6e6e6` · `#d4d4d4` · `#a3a3a3` · `#525252` · `#737373` · `#111111` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Cormorant Garamond, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 12px · h2 96px · h3 96px · body 12px
- **Weights in use:** light
- **Letter spacing:** `tracking-widest`, `tracking-[0.3em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9)]`
- **Content width:** `max-w-screen-2xl`, `max-w-[200px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Marquee (`marquee`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e6e6e6;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e6e6e6',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the hero as one oversized word centred on the screen.
- **Do:** Frame the hero with small uppercase captions placed in the corners.
- **Do:** Keep the ground black (#000000) and all primary type white (#ffffff).
- **Don't:** Don't add colour to the hero; the page is strictly monochrome.
- **Don't:** Don't replace the high-contrast serif in the hero with a sans-serif.
- **Don't:** Don't add a full navigation bar; the nav is two small labels.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
