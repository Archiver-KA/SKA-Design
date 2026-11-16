# Design system — Untitled Design

`SN-W04322` · other-landing · light mode · Sinera Atlas theme `circuit` · language `cs`

## Direction

A warm, craft-focused hero with a large light serif headline in white over a taupe gradient, its second line set in pale tan italic. Small spaced uppercase labels mark the founding year and the brand line, and a brown outlined button sits in the header and hero. The palette is restrained and earthy, so the page reads as warm rather than loud.

**Mood:** warm, craft, elegant, earthy, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#faf7f2` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#cdb598` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#78716c` · `#57534e` · `#000000` · `#faf7f2` · `#cdb598` · `#9c754d` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 16px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-wood-900/10`, `shadow-lg`
- **Content width:** `max-w-[1920px]`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="magnetic-btn w-full sm:w-auto min-w-[200px] bg-wood-100 text-wood-950 px-8 py-4 rounded-sm font-semibold tracking-wide hover:bg-white transition-all duration-300 shadow-xl shadow-black/20 flex items-center justify-center gap-2 group hover:scale-[1.02]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Contact form (`contact-form`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #faf7f2;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #cdb598;
  --font-display: "Playfair Display", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#faf7f2',
    ink: '#57534e',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#cdb598',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set headlines in a light serif, with the second line in pale tan italic (#cdb598)
- **Do:** Use spaced uppercase labels for the year and the brand line
- **Do:** Keep buttons brown or outlined in brown, never in bright colours
- **Don't:** Don't set the headline in a bold weight; it stays light
- **Don't:** Don't add saturated colours to the hero
- **Don't:** Don't place small body text on the pale tan areas

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
