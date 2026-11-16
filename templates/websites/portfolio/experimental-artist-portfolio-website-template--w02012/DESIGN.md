# Design system — Experimental Artist Portfolio Website Template

`SN-W02012` · portfolio · light mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A bold gradient field that moves from blue and teal into green, with an outlined cyan blob and a solid orange blob as the graphic elements. The name is set huge in white bold sans, with a second word in orange-amber italic, and the nav and small labels are orange. Colour carries the whole screen, so the layout stays simple and the shapes do the expressive work.

**Mood:** vivid, playful, experimental, colourful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#06b6d4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1e3a8a` · `#ea580c` · `#f59e0b` · `#06b6d4` · `#059669` · `#92400e` · `#000000` · `#f0f0f0` · `#0f172a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Darker Grotesque
- **Body:** Darker Grotesque
- **Loaded families:** Darker Grotesque, Syne
- **Scale (largest breakpoint):** h1 128px · h2 96px · h3 24px · body 14px
- **Weights in use:** bold, black, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]` (30%_70%_70%_30%_/_30%_30%_70%_70%), `rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%]` (40%_60%_70%_30%_/_40%_50%_60%_50%)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-12`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-white text-black rounded-full p-4 hover:scale-110 transition-transform">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #06b6d4;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ea580c;
  --color-accent-2: #1e3a8a;
  --font-display: "Darker Grotesque", sans-serif;
  --font-body: "Darker Grotesque", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#06b6d4',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#ea580c',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['Darker Grotesque'], sans: ['Darker Grotesque'] },
} }
```

## Do and don't

- **Do:** Keep the gradient as the hero ground and place the headline over its lighter side
- **Do:** Use the orange (#ea580c) for the second name line, the nav and one button
- **Do:** Use organic blob shapes, outlined or solid, as the only decoration
- **Don't:** Don't set orange body copy on the teal ground; it is hard to read
- **Don't:** Don't use the grey (#f0f0f0) as the page ground; the gradient is the ground
- **Don't:** Don't put two solid blobs in the same section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
