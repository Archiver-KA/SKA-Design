# Design system — Creative Studio Portfolio Landing Page Template

`SN-W01914` · portfolio · light mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A soft diagonal gradient from pale blue to pale pink fills the hero, with a large dark-brown serif headline, 'Bila' upright over an italic 'Designs.'. A white curve sweeps across the bottom and carries a small gradient pill button. The cookie panel is white with a dark accept button, so the page is pastel and editorial, with one dark ink for all the type.

**Mood:** airy, pastel, editorial, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#d6d3d1` | Hairlines, dividers, outlines |
| Accent | `#0d9488` | Primary action and highlights |
| Second accent | `#fb923c` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#d6d3d1` · `#e7e5e4` · `#000000` · `#0d9488` · `#78716c` · `#a8a29e` · `#fdfcf8` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Instrument Serif, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h2 48px · h3 36px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-[90rem]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="mobile-link mt-4 px-8 py-3 border border-stone-900 rounded-full font-manrope not-italic text-lg hover:bg-stone-900 hover:text-white transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Contact form (`contact-form`)
4. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #d6d3d1;
  --color-accent: #0d9488;
  --color-accent-2: #fb923c;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#d6d3d1',
    accent: '#0d9488',
    accent2: '#fb923c',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the hero gradient pale, from blue to pink, behind the headline only.
- **Do:** Set the headline in a large serif, with the second word in italic.
- **Do:** Keep the primary button as a small gradient pill on the white curve.
- **Don't:** Don't use saturated colour in the gradient; the blend stays pale.
- **Don't:** Don't set the headline in a sans; the serif is the identity.
- **Don't:** Don't place body copy over the gradient pill.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
