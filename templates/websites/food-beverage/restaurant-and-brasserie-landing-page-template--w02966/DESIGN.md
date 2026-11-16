# Design system — Restaurant & Brasserie Landing Page Template

`SN-W02966` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A photo-led restaurant hero: a full-bleed dark interior photograph carries large white Inter headlines at 72px, with a floating glass pill navigation bar and white pill buttons on top of the image. The page ground is hidden behind the photo on the first screen, so the design relies on imagery and contrast rather than colour blocks. Cards and buttons use rounded-full and rounded-3xl shapes throughout.

**Mood:** photo-led, glassy, rounded, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f2f2` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fed7aa` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#a8a29e` · `#f5f5f4` · `#e7e5e4` · `#57534e` · `#000000` · `#292524` · `#f2f2f2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-[1600px]`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="px-5 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-full">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. About (`about`)
3. Menu list (`menu-list`)
4. Testimonials (`testimonials`)
5. Services (`services`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f2f2f2;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #fed7aa;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2f2f2',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#fed7aa',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Put white headlines over the dark photograph with a scrim, not over flat colour.
- **Do:** Use rounded-full pills for the navigation bar and for every button.
- **Do:** Keep the first screen image-led and bring the menu in within the first two sections.
- **Don't:** Don't set dark text over the hero photograph.
- **Don't:** Don't replace the glass navigation pill with a solid bar.
- **Don't:** Don't use square corners on buttons or cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
