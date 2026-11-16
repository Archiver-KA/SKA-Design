# Design system — Luxury Architecture Studio Landing Page Template

`SN-W03272` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Austere and cinematic: a pure black ground (#000000) with a thin top navigation, an outlined pill for the inquiry action and a row of muted, letter-spaced press names low on the screen. The hero shows no headline in the preview, so the page is carried by the black field and generous spacing. Contrast is high and the palette is strictly monochrome.

**Mood:** austere, cinematic, monochrome, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#737373` · `#000000` · `#a3a3a3` · `#171717` · `#0a0a0a` · `#262626` · `#e5e5e5` · `#d4d4d4` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 48px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-12`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="text-sm font-medium border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Process / steps (`how-it-works`)
5. Feature grid (`features`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the ground pure black (#000000) with white navigation text.
- **Do:** Set press and credit names in small, widely spaced grey capitals.
- **Do:** Use the outlined pill only for the inquiry action in the header.
- **Don't:** Don't add colour to this monochrome page.
- **Don't:** Don't place body copy over the empty hero field.
- **Don't:** Don't use filled buttons; the page uses outlines.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
