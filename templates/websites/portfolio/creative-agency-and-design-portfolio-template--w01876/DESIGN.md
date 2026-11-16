# Design system — Creative Agency & Design Portfolio Template

`SN-W01876` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm off-white layout split into two halves: the left is an empty ground, and the right is a tall image panel with a grey gradient and a white sans caption. Small tracked monospace labels mark the category and date, and a small red dot marks availability in the nav. The layout is spare, so the photograph and the type carry the design.

**Mood:** spare, warm, editorial, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f0ea` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171716` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#e45d48` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#e45d48` · `#f2f0ea` · `#171716` · `#d6d1c7` · `#1d2926` · `#9e3d30` · `#c9c2b6` · `#202020`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** DM Mono, Inter, Manrope
- **Scale (largest breakpoint):** h2 96px · h3 48px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.18rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="group inline-flex items-center gap-6 rounded-full bg-[#171716] py-3 pl-5 pr-3 text-sm text-white transition-colors hover:bg-[#e45d48]">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Call to action (`cta`)
6. Process / steps (`how-it-works`)
7. Feature grid (`features`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f2f0ea;
  --color-surface: #ffffff;
  --color-text: #171716;
  --color-border: #000000;
  --color-accent: #e45d48;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2f0ea',
    surface: '#ffffff',
    ink: '#171716',
    line: '#000000',
    accent: '#e45d48',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Split the first screen into a large plain ground and a tall image panel
- **Do:** Set captions over the image in a white sans on a dark gradient
- **Do:** Use small tracked monospace for category and date labels
- **Don't:** Don't leave the image panel without its photograph.
- **Don't:** Don't use the red dot (#e45d48) beyond the availability marker
- **Don't:** Don't fill the left ground with decorative shapes

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
