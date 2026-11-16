# Design system — Luxury Jazz Club & Fine Dining Template

`SN-W02932` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A near-monochrome, cinematic hero on deep emerald (#022c22) with an off-white (#f5f5f0) Playfair Display headline at very large size. The second line is set in italic, and small widely tracked caps mark the nav and eyebrow labels. Colour comes only from the green ground, so the page feels exclusive and quiet.

**Mood:** cinematic, exclusive, quiet, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#022c22` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f0` | Headings and primary copy |
| Border | `#f5f5f0` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#f5f5f0` · `#022c22` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 48px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-[0.2em]`, `tracking-[0.3em]`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-2xl`, `shadow-[#022C22]`
- **Content width:** `max-w-screen-2xl`, `max-w-4xl`
- **Section padding:** `py-14`, `py-64`
- **Common gaps:** `gap-12`, `gap-0`, `gap-6`

**Primary button**

```html
<a class="group relative px-12 py-5 overflow-hidden border border-[#022C22] text-xs uppercase tracking-[0.3em] font-light transition-all duration-1000 ease-out hover:text-[#F5F5F0] z-10 bg-transparent">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Schedule (`schedule-agenda`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #022c22;
  --color-surface: #000000;
  --color-text: #f5f5f0;
  --color-border: #f5f5f0;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#022c22',
    surface: '#000000',
    ink: '#f5f5f0',
    line: '#f5f5f0',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display at very large size with the second line in italic
- **Do:** Keep the ground at deep emerald (#022c22) and text in off-white (#f5f5f0)
- **Do:** Set nav labels and eyebrows in small, widely tracked uppercase
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't set the headline in a sans face
- **Don't:** Don't put light text on a light section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
