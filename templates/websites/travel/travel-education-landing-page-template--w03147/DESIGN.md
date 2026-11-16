# Design system — Travel Education Landing Page Template

`SN-W03147` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, photo-led education hero: a tropical island photograph darkened to near-black sits behind a stacked headline. Lines alternate between white bold and coloured text, with an amber italic (#f59e0b) and a sky-blue bold line (#38bdf8). An amber button sits in the nav, so amber and sky are the two accents and the rest is white on dark.

**Mood:** bold, cinematic, energetic, dark, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#38bdf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#94a3b8` · `#64748b` · `#000000` · `#050505` · `#cbd5e1` · `#0c0c0c` · `#38bdf8` · `#0f0f0f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 12px
- **Weights in use:** normal, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-screen-xl`, `max-w-screen-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2.5 rounded-full text-sm font-medium transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. Timeline (`timeline`)
4. Case studies (`case-studies`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #38bdf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#38bdf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline as stacked lines alternating white bold and coloured text
- **Do:** Use amber (#f59e0b) for the italic line and nav button; use sky (#38bdf8) for the bold coloured line
- **Do:** Darken the photograph behind the headline so the coloured words stay readable
- **Don't:** Don't use amber as a page ground; the page is dark
- **Don't:** Don't add more than two accent colours
- **Don't:** Don't set body copy in the sky blue

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
