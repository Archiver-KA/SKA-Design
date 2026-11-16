# Design system — Nightclub Event Landing Page Template

`SN-W03625` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A minimal, moody nightclub page on an almost black ground, with a centred italic serif name at large size as the only display element. Short paragraphs of light grey text sit in narrow centred blocks, and small letter-spaced capitals label the address and the scroll cue. The page is monochrome and relies on contrast, spacing and a single thin vertical line rather than on colour or cards.

**Mood:** minimal, moody, nocturnal, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#0a0a0a` · `#a3a3a3` · `#737373` · `#171717` · `#525252` · `#262626` · `#d4d4d4` · `#404040` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 30px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-black`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest uppercase text-white border border-neutral-700 hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Articles (`blog-articles`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Process / steps (`how-it-works`)
6. Map / location (`map-location`)
7. Timeline (`timeline`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #262626;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#262626',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name as a centred italic serif at large size
- **Do:** Keep the ground near-black (#0a0a0a) with light grey text (#d4d4d4)
- **Do:** Set the address and scroll labels in small letter-spaced capitals
- **Don't:** Don't add colour to the page; the design is monochrome
- **Don't:** Don't use cards or heavy borders to separate content
- **Don't:** Don't set body copy in full white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
