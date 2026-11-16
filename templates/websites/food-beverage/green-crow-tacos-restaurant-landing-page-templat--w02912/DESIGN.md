# Design system — Green Crow Tacos Restaurant Landing Page Template

`SN-W02912` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A stark monochrome page on white, built from black type and a black-bordered logo box, with a bold centred sans quote as the first heading. Body copy is set in mid-grey with bold black phrases and an underlined word, and a grid of photo tiles sits above the text. The stance is brand-forward and minimal, with ink black doing all the work; the layout depends on its photo grid.

**Mood:** monochrome, minimal, brand-forward, stark, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e7e5e4` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#1c1917` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#78716c` · `#1c1917` · `#ffffff` · `#57534e` · `#292524` · `#e7e5e4` · `#f5f5f4` · `#0c0a09` · `#a8a29e` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Geist, Roboto, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 60px · h2 36px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-7xl`, `max-w-[95%]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex justify-center items-center gap-2 bg-stone-900 text-white px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-stone-700 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Marquee (`marquee`)
4. Hero (`hero`)
5. Case studies (`case-studies`)
6. Call to action (`cta`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e7e5e4;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #1c1917;
  --color-accent: #1c1917;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e7e5e4',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#1c1917',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Use ink black (#1c1917) for headings, the logo border and all emphasis.
- **Do:** Set the opening quote as a bold centred sans heading.
- **Do:** Keep the photo grid as the base of the hero; photography carries the colour.
- **Don't:** Don't add a brand colour; the page is black, white and grey only.
- **Don't:** Don't leave grey image placeholders on the page; every photo tile needs its image.
- **Don't:** Don't underline more than one phrase per block.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
