# Design system — Nightclub Event Landing Page Template

`SN-W03627` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark nightclub page in which a dimmed, desaturated photograph fills the first screen behind a centred italic serif name. The photograph is darkened so the light text stays readable, and the navigation and small capital labels sit directly on top of it. Colour is absent throughout, and the atmosphere comes from the photograph's grain and contrast.

**Mood:** moody, monochrome, atmospheric, nocturnal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#0a0a0a` · `#a3a3a3` · `#737373` · `#171717` · `#262626` · `#525252` · `#d4d4d4` · `#f9fafb` · `#404040`.

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
- **Shadows:** `shadow-2xl`
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
3. Gallery / portfolio (`gallery-portfolio`)
4. Process / steps (`how-it-works`)
5. Map / location (`map-location`)
6. Timeline (`timeline`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

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

- **Do:** Desaturate hero photography and darken it behind the text
- **Do:** Set the headline as a centred italic serif in the light text colour
- **Do:** Keep navigation and labels in small uppercase over the photograph
- **Don't:** Don't use full-colour photography in the hero
- **Don't:** Don't place light text over the bright areas of a photograph
- **Don't:** Don't add coloured accents to the layout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
