# Design system — Buildshop Weekend Bootcamp Landing Page Template

`SN-W01851` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A monochrome, dark-first launch page where a very large bold Inter headline fills the centre of the first screen. The word 'real' is set in grey italic, the only change of tone, and the small uppercase line above it is dim. The nav is thin and text-only with one outlined button, so the headline does almost all the work.

**Mood:** bold, monochrome, urgent, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#a3a3a3` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#525252` · `#171717` · `#737373` · `#d4d4d4` · `#000000` · `#a3a3a3` · `#e5e5e5` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 14px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="group flex items-center gap-2 border border-neutral-700 px-5 py-2 hover:bg-white hover:text-black transition-all duration-300 text-xs font-medium tracking-wide uppercase">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Feature grid (`features`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #262626;
  --color-accent: #a3a3a3;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#525252',
    line: '#262626',
    accent: '#a3a3a3',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter at very large size, tightly tracked
- **Do:** Mark one word per headline in grey italic (#a3a3a3) for emphasis
- **Do:** Keep the nav text-only with one outlined button on the right
- **Don't:** Don't introduce a colour accent; the page is black, white and grey
- **Don't:** Don't set the headline in a light weight
- **Don't:** Don't add decorative imagery behind the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
