# Design system — Auric Fintech Finance Intelligence Template

`SN-W00882` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark hero with a large off-white headline set in four lines over a blurred band of purple, blue and amber light. Dark glass cards holding live figures sit on the right, and the primary button is a dark glass pill. The headline is set in a monospaced face, and the background light is the only colour while the UI chrome stays monochrome.

**Mood:** dark, technical, atmospheric, calm, monochrome-ui

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#f2f0eb` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#f2f0eb` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#f2f0eb` · `#1c1917` · `#a8a29e` · `#ffffff` · `#050505` · `#0a0a0a` · `#292524` · `#e4f7eb` · `#0b0c0e` · `#121417`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Inter, Geist, DotGothic16, &quot
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.18rem]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_30px_-10px_rgba(242,240,235,0.25)]`, `shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]`, `shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_0_40px_-15px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="group hidden items-center gap-2 rounded-full bg-[#F2F0EB] px-5 py-3 text-sm font-medium text-[#1C1917] transition-all duration-500 hover:scale-[1.03] hover:bg-white md:flex font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Feature grid (`features`)
5. Awards / press (`awards-press`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Pricing (`pricing`)
9. Contact form (`contact-form`)
10. Gallery / portfolio (`gallery-portfolio`)
11. FAQ (`faq`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #1c1917;
  --color-text: #f2f0eb;
  --color-muted: #a8a29e;
  --color-border: #f2f0eb;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#1c1917',
    ink: '#f2f0eb',
    muted: '#a8a29e',
    line: '#f2f0eb',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in off-white (#f2f0eb) at large size in a monospaced face
- **Do:** Place dark glass cards with small caps labels over the light imagery
- **Do:** Keep UI chrome monochrome and let the background imagery carry the colour
- **Don't:** Don't add a solid accent colour to buttons
- **Don't:** Don't put headline text directly over the bright streaks without a dark scrim
- **Don't:** Don't use the pale mint (#e4f7eb) as a fill

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
