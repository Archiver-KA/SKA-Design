# Design system — Medical4U Plastic Surgery Clinic Template

`SN-W02474` · healthcare · light mode · Sinera Atlas theme `calm` · language `cs`

## Direction

A taupe hero with a soft gradient and an animated glow behind a charcoal serif headline, with the second line in italic. The brown primary button and a faint outline partner sit below a short intro. The palette is warm and close to monochrome, and the animated scene is the only motion on the page.

**Mood:** warm, atmospheric, monochrome, soft, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ad8c6f` | Page ground |
| Surface | `#9a7b60` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#44403c` | Secondary copy, captions |
| Border | `#ad8c6f` | Hairlines, dividers, outlines |
| Accent | `#ad8c6f` | Primary action and highlights |

Palette by frequency of use: `#ad8c6f` · `#ffffff` · `#332233` · `#f8fafc` · `#9a7b60` · `#e7e5e4` · `#dfd6d3` · `#323232`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Manrope, Marcellus, Poppins, Urbanist
- **Scale (largest breakpoint):** h1 60px · body 18px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-[#ad8c6f]/40`, `shadow-lg`
- **Common gaps:** `gap-4`, `gap-x-12`, `gap-y-0`

**Primary button**

```html
<a class="hidden xl:inline-flex overflow-hidden hover:bg-[#ad8c6f] uppercase transition-all group hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#ad8c6f]/30 duration-300 text-xs font-medium text-slate-50 tracking-widest bg-[#ad8c6f]/90 rounded-full px-7 py-3 relative">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ad8c6f;
  --color-surface: #9a7b60;
  --color-text: #111111;
  --color-muted: #44403c;
  --color-border: #ad8c6f;
  --color-accent: #ad8c6f;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ad8c6f',
    surface: '#9a7b60',
    ink: '#111111',
    muted: '#44403c',
    line: '#ad8c6f',
    accent: '#ad8c6f',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero to taupe and charcoal, with the brown (#ad8c6f) for the button
- **Do:** Set the headline in Playfair Display, with the second line in italic
- **Do:** Use the animated scene only behind the hero, not in the content sections
- **Don't:** Don't add a second accent colour
- **Don't:** Don't place body copy over the brightest part of the glow
- **Don't:** Don't set white text on the taupe ground at small sizes

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
