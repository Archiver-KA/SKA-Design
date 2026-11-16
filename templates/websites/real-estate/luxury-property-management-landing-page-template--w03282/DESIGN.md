# Design system — Luxury Property Management Landing Page Template

`SN-W03282` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Restrained and editorial: a vertical grey gradient runs from pale at the top to a deeper grey at the bottom, under a white serif headline with its middle word in italic. Buttons are square-cornered, a white filled rectangle for the primary and a thin outline for the secondary. Navigation is set in small tracked capitals, and the whole palette stays neutral.

**Mood:** restrained, editorial, neutral, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#faf9f6` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#c5a059` | Primary action and highlights |
| Second accent | `#14532d` | Supporting highlights |

Palette by frequency of use: `#c5a059` · `#ffffff` · `#71717a` · `#18181b` · `#e4e4e7` · `#a1a1aa` · `#d4d4d8` · `#09090b` · `#27272a` · `#faf9f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 10px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-[0.2em]`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="bg-white text-zinc-950 px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#C5A059] hover:text-white transition-colors duration-500 min-w-[200px]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #faf9f6;
  --color-text: #27272a;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #c5a059;
  --color-accent-2: #14532d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#faf9f6',
    ink: '#27272a',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#c5a059',
    accent2: '#14532d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero ground a vertical grey gradient, pale at the top and deeper below.
- **Do:** Set the middle word of each headline in italic.
- **Do:** Use square-cornered buttons: white filled for the primary, thin outline for the secondary.
- **Don't:** Don't add colour to the grey hero.
- **Don't:** Don't darken the top of the gradient; the pale top is part of the look.
- **Don't:** Don't set the navigation in bold; it uses small tracked capitals.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
