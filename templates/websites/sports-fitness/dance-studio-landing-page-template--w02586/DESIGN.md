# Design system — Dance Studio Landing Page Template

`SN-W02586` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A restrained dark studio page on a near-black ground with a large white sans-serif headline whose second line steps down to grey. The layout is quiet and spare: a small pill badge, two buttons (one solid white, one outlined) and plenty of empty space. Colour plays almost no part in the hero.

**Mood:** quiet, spare, dark, minimal, contemporary

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#78716c` · `#292524` · `#1c1917` · `#0c0a09` · `#d6d3d1` · `#57534e` · `#44403c` · `#a8a29e` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="bg-white text-stone-950 text-xs font-semibold px-4 py-2 rounded-full hover:bg-stone-200 transition-colors tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Schedule (`schedule-agenda`)
5. Pricing (`pricing`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #1c1917;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #292524;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#1c1917',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#292524',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in a muted grey to step down the hierarchy
- **Do:** Use a solid white button for the primary action and an outlined button beside it
- **Do:** Keep the hero spare with a small pill badge above the headline
- **Don't:** Don't add an orange accent to the hero; colour stays out of it
- **Don't:** Don't fill buttons with colour; they are white or outlined
- **Don't:** Don't crowd the hero with imagery; the layout depends on empty space

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
