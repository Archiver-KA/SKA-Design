# Design system — Great Foundation Business Directory Template

`SN-W03608` · events · light mode · Sinera Atlas theme `workshop` · language `ru`

## Direction

The directory template is brutalist and blocky. A mustard (#d8a24a) field holds a heavy black sans headline stacked in three lines, beside a black-and-white photo, and the sections are divided by heavy black rules. Cream (#f4f1ea) is the page ground, and the header is outlined in black. Boxes and buttons are flat and square-cornered, and colour is used as flat blocks.

**Mood:** brutalist, bold, editorial, blocky, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f1ea` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#77736d` | Secondary copy, captions |
| Border | `#111111` | Hairlines, dividers, outlines |
| Accent | `#d8a24a` | Primary action and highlights |
| Second accent | `#035bf6` | Supporting highlights |

Palette by frequency of use: `#111111` · `#ffffff` · `#d8a24a` · `#035bf6` · `#f4f1ea` · `#c6552e` · `#b8e2c2` · `#247a3e` · `#e3e1db` · `#77736d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo
- **Body:** Archivo
- **Loaded families:** Archivo, Manrope
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-[10px_10px_0_0_#C6552E]`, `shadow-none`
- **Content width:** `max-w-[1600px]`, `max-w-5xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-5`

**Primary button**

```html
<a class="group relative min-h-72 overflow-hidden border-b-2 border-r-2 border-[#111111] bg-[#D8A24A] p-6 hover:bg-[#111111] hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Product grid (`product-grid`)
7. Articles (`blog-articles`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f4f1ea;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #77736d;
  --color-border: #111111;
  --color-accent: #d8a24a;
  --color-accent-2: #035bf6;
  --font-display: "Archivo", sans-serif;
  --font-body: "Archivo", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f1ea',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#77736d',
    line: '#111111',
    accent: '#d8a24a',
    accent2: '#035bf6',
  },
  fontFamily: { display: ['Archivo'], sans: ['Archivo'] },
} }
```

## Do and don't

- **Do:** Use heavy black (#111111) rules to divide sections and frame photos
- **Do:** Set headlines in heavy black uppercase sans on flat colour blocks
- **Do:** Use the mustard (#d8a24a) as a flat block behind the hero headline
- **Don't:** Don't add rounded corners or soft shadows
- **Don't:** Don't put gradients on the colour blocks
- **Don't:** Don't set body copy in mustard

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
