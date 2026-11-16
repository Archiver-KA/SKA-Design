# Design system — Automotive Services Landing Page Template

`SN-W03834` · business-services · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

A photographic hero in which a black-and-white car fills the frame behind a bold white uppercase headline set in the lower left. The buttons are a white solid and a dark outline, and small trust points sit in a single line beneath them. The page keeps its colour out of the way, and the photograph and typography carry the look.

**Mood:** sober, direct, monochrome, reassuring

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#040506` | Headings and primary copy |
| Muted text | `#656363` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#656363` · `#040506` · `#e5e7eb` · `#c7cace` · `#f9fafb` · `#f0f2f4` · `#a5a9b1` · `#252b31`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Archivo Narrow
- **Body:** Archivo Narrow
- **Loaded families:** Archivo Narrow, Inter, Lato
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 14px
- **Weights in use:** semibold, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-screen-2xl`, `max-w-7xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="group inline-flex min-h-14 items-center justify-between gap-5 border border-white/70 px-5 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-white hover:text-[#040506]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #040506;
  --color-muted: #656363;
  --color-border: #ffffff;
  --font-display: "Archivo Narrow", sans-serif;
  --font-body: "Archivo Narrow", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#040506',
    muted: '#656363',
    line: '#ffffff',
  },
  fontFamily: { display: ['Archivo Narrow'], sans: ['Archivo Narrow'] },
} }
```

## Do and don't

- **Do:** Set the headline in white uppercase over the darkened photograph.
- **Do:** Use white solid and outline buttons on dark imagery only.
- **Do:** Keep trust points as one short line under the buttons.
- **Don't:** Don't introduce a colour accent into the hero.
- **Don't:** Don't place the headline over bright parts of the car image.
- **Don't:** Don't switch the hero to a light background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
