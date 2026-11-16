# Design system — Automotive Service & Car Buyback Template

`SN-W03830` · business-services · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

A hero built on a darkened, black-and-white photograph of a car, with a large white uppercase headline set over the image. A solid white button and an outline button sit under a short bold line, and a row of small trust points runs beneath them. Below the hero the page moves to a light section, so the contrast comes from black and white alone with no accent colour.

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

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll, React
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

- **Do:** Set the hero headline in white uppercase over a darkened photograph.
- **Do:** Use white solid and outline buttons on dark imagery only.
- **Do:** Keep trust points as short small lines under the buttons.
- **Don't:** Don't add colour accents; the page relies on black and white.
- **Don't:** Don't place the headline over bright parts of the photograph.
- **Don't:** Don't use a light background for the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
