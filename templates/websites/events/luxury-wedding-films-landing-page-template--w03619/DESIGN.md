# Design system — Luxury Wedding Films Landing Page Template

`SN-W03619` · events · light mode · Sinera Atlas theme `workshop` · language `de`

## Direction

A warm, cream-toned editorial layout in which a tall portrait photograph fills the left half of the first screen, with the text sitting on the cream ground to its right. The page ground is off-white (#fbf7f0) and the text is a dark warm brown, so the photography is the only saturated element. Headlines use a classical serif, which gives the studio a quiet, film-industry feel.

**Mood:** editorial, warm, cinematic, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbf7f0` | Page ground |
| Surface | `#f6f0e6` | Cards, panels, raised areas |
| Text | `#2b2622` | Headings and primary copy |
| Border | `#2b2622` | Hairlines, dividers, outlines |
| Accent | `#b89b5e` | Primary action and highlights |

Palette by frequency of use: `#2b2622` · `#b89b5e` · `#d8c3a5` · `#fbf7f0` · `#ffffff` · `#000000` · `#f6f0e6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 36px · body 14px
- **Weights in use:** light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-screen-xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-4`, `gap-16`

**Primary button**

```html
<a class="inline-block border border-[#2B2622] px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#2B2622] hover:text-[#FBF7F0] transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fbf7f0;
  --color-surface: #f6f0e6;
  --color-text: #2b2622;
  --color-border: #2b2622;
  --color-accent: #b89b5e;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbf7f0',
    surface: '#f6f0e6',
    ink: '#2b2622',
    line: '#2b2622',
    accent: '#b89b5e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond on the cream ground
- **Do:** Use the warm gold (#b89b5e) for small accents and dividers only
- **Do:** Keep portrait photography tall and full-bleed on one side of the first screen
- **Don't:** Don't use pure black; keep text in warm dark brown (#2b2622)
- **Don't:** Don't give sections coloured backgrounds; alternate cream and the light surface only
- **Don't:** Don't round the corners of image frames

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
