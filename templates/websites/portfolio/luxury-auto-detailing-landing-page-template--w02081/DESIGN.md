# Design system — Luxury Auto Detailing Landing Page Template

`SN-W02081` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A stark black-and-white automotive page: a near-black ground [#000000] with white, heavy uppercase headlines centred in the hero and a small, widely tracked nav. The first screen has no imagery or ornament, so the type carries the page alone. Red (#ff2800) stays in reserve as the single accent.

**Mood:** stark, bold, exclusive, minimal, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#ff2800` · `#737373` · `#000000` · `#a3a3a3` · `#0a0a0a` · `#050505` · `#121212` · `#d4d4d4` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Montserrat, Italiana
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 48px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[#FF2800]/5`
- **Content width:** `max-w-[1800px]`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full py-4 border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Pricing (`pricing`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the hero to one centred uppercase headline and a short subline.
- **Do:** Set all primary text in white (#ffffff) on black.
- **Do:** Reserve red (#ff2800) for a single call to action per section.
- **Don't:** Don't add imagery or ornament above the fold; the type is the design.
- **Don't:** Don't switch the hero to mixed-case headlines.
- **Don't:** Don't use red for body text or for large background areas.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
