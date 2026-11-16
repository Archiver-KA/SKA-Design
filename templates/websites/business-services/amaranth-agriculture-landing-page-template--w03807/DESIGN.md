# Design system — Amaranth Agriculture Landing Page Template

`SN-W03807` · business-services · light mode · Sinera Atlas theme `route` · language `ru`

## Direction

A full-bleed photograph of an amaranth field at sunset, with a centred large white headline in a heavy sans-serif and a smaller uppercase subtitle beneath it. A green pill button (#16a34a) sits at the centre of the hero, and a row of short feature labels runs along the bottom edge. The green is kept to the action, so the crop itself supplies most of the colour.

**Mood:** organic, bold, centred, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#16a34a` | Primary action and highlights |
| Second accent | `#2a3557` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#171717` · `#737373` · `#262626` · `#e5e5e5` · `#a3a3a3` · `#f5f5f5` · `#16a34a` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h2 60px · h3 20px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="group p-2 hover:bg-black/5 rounded-full transition-colors cursor-pointer">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Sidebar (`sidebar`)
3. Hero (`hero`)
4. About (`about`)
5. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #16a34a;
  --color-accent-2: #2a3557;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#16a34a',
    accent2: '#2a3557',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Centre the hero headline in a heavy sans-serif at a large size, in white, over the photograph.
- **Do:** Use green (#16a34a) for the hero action button only.
- **Do:** Set the subtitle in small uppercase letter-spaced text.
- **Don't:** Don't place the green button on the brightest part of the photograph.
- **Don't:** Don't add more colour to the hero beyond the photograph and the green.
- **Don't:** Don't left-align the centred hero block.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
