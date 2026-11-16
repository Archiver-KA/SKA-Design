# Design system — Athletic Brand Landing Page Template

`SN-W02578` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A stark, poster-like athletic brand page on pure black with heavy white capitals. The headline is very large and split: one line solid white, the next an outlined stroke, which makes the type itself the image. A small red (#c1232e) eyebrow line and the logo dot are the only colour, and the layout uses hard edges and no radius.

**Mood:** stark, poster-like, intense, monochrome, defiant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c1232e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c1232e` · `#000000` · `#121212` · `#1e1e1e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Helvetica Custom
- **Body:** Helvetica Custom
- **Loaded families:** Oswald, Helvetica Custom
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 16px
- **Weights in use:** medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-1`, `gap-[0.1rem]`

**Primary button**

```html
<a class="bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 font-display text-xs tracking-widest px-10 py-5 flex items-center justify-center gap-3 w-fit mx-auto sm:mx-0 rounded-none">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #121212;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c1232e;
  --font-display: "Helvetica Custom", sans-serif;
  --font-body: "Helvetica Custom", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#121212',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#c1232e',
  },
  fontFamily: { display: ['Helvetica Custom'], sans: ['Helvetica Custom'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase at very large size, alternating solid and outlined lines
- **Do:** Use the red (#c1232e) only for the eyebrow line and the logo accent
- **Do:** Keep corners square and the background pure black
- **Don't:** Don't add rounded corners or gradients; the page is flat black with hard edges
- **Don't:** Don't use red for large fills or body text
- **Don't:** Don't set the outlined line in a colour; the outline is white stroke on black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
