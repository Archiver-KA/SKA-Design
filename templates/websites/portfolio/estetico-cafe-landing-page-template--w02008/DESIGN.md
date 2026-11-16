# Design system — Estetico Café Landing Page Template

`SN-W02008` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A full-bleed, softly blurred cafe photograph frames the first screen, with a frosted pill navigation bar floating at the top. The headline is a large white sans in mixed case, stacked on two lines and centred, above a white pill button that carries the primary action. Glass panels and rounded shapes keep the page friendly rather than formal, and the photo does the warming work.

**Mood:** warm, friendly, photographic, glassy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f2f2` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#a8a29e` · `#e7e5e4` · `#f5f5f4` · `#292524` · `#d6d3d1` · `#fafaf9` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-[1600px]`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="w-full bg-stone-900 text-white font-medium py-4 rounded-xl mt-4 hover:bg-stone-800 flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. About (`about`)
3. Menu list (`menu-list`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Map / location (`map-location`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f2f2f2;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #ffffff;
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
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use a blurred, dimmed photograph as the full hero background
- **Do:** Set the headline in white Inter at large size, centred
- **Do:** Use white pill buttons with dark text for primary actions
- **Don't:** Don't put headline text on a bright, unshaded part of the photo
- **Don't:** Don't drop the frosted glass nav; it floats over the photograph
- **Don't:** Don't use the peach (#fed7aa) for large fills; it is a highlight tone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
