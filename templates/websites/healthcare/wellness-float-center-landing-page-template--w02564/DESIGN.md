# Design system — Wellness Float Center Landing Page Template

`SN-W02564` · healthcare · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A full-bleed hero photograph under a flat grey-blue tint carries a centred white headline, with the second line set in the bright cyan (#2cbdf1) as the single colour accent. The look is calm and atmospheric, with a light italic tagline and two pill-shaped buttons, one solid cyan and one translucent. The hero does most of the work and the sections below stay plain and light.

**Mood:** atmospheric, calm, cool, soft, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#6b7280` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2cbdf1` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#2cbdf1` · `#0f172a` · `#475569` · `#f1f5f9` · `#e2e8f0` · `#1da9dc` · `#1e293b` · `#334155` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 16px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-[#2CBDF1] text-white rounded hover:bg-[#1da9dc] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #6b7280;
  --color-surface: #f1f5f9;
  --color-text: #1e293b;
  --color-border: #f1f5f9;
  --color-accent: #2cbdf1;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#6b7280',
    surface: '#f1f5f9',
    ink: '#1e293b',
    line: '#f1f5f9',
    accent: '#2cbdf1',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Place the cyan (#2cbdf1) only on the second headline line and the primary booking button
- **Do:** Keep the hero headline centred, white, and set over a tinted image so the text stays readable
- **Do:** Use a translucent glass-style button beside the solid primary button
- **Don't:** Don't use the cyan for body text or large fills; it is an accent for emphasis and action
- **Don't:** Don't leave the logo image without a fallback.
- **Don't:** Don't drop the image tint; without it the white headline loses contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
