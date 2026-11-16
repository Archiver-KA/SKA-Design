# Design system — Tattoo Artist Portfolio Landing Page Template

`SN-W02249` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A monochrome tattoo studio page: a near-black ground (#0a0a0a) and a greyscale portrait make the hero black and white, with no accent colour. The headline is a high-contrast serif with the first line in italic, centred over the image, and small uppercase tracked labels sit above and below it. The page depends on image contrast and restraint, and the italic serif opening line over a dark portrait is what makes it recognisable.

**Mood:** monochrome, restrained, dramatic, intimate, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#d4d4d4` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#0a0a0a` · `#a3a3a3` · `#171717` · `#262626` · `#525252` · `#d4d4d4` · `#e5e5e5` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 30px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-black`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest uppercase text-white border border-neutral-700 hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Process / steps (`how-it-works`)
5. Map / location (`map-location`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

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
  --color-accent: #d4d4d4;
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
    accent: '#d4d4d4',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the whole page greyscale, using only the greys from the palette.
- **Do:** Set the first headline line in serif italic and the second in regular.
- **Do:** Use small, widely tracked uppercase for labels and the scroll cue.
- **Don't:** Don't introduce a colour accent; the design is black, white and grey.
- **Don't:** Don't set the hero over a light photograph; the portrait is dark and the type is light.
- **Don't:** Don't add drop shadows to the headline; contrast comes from the ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
