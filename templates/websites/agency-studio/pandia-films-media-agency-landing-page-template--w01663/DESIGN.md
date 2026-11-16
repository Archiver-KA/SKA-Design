# Design system — Pandia Films Media Agency Landing Page Template

`SN-W01663` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black cinematic hero with a very large uppercase headline in a high-contrast serif-like face, the second line set in italic grey gradient, and a white primary button beside an outlined secondary. The palette is greyscale, so the imagery and the type carry the film-studio mood. The look is dramatic and restrained, with no accent colour in the hero.

**Mood:** cinematic, dramatic, monochrome, restrained, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#050505` · `#a3a3a3` · `#262626` · `#3b82f6` · `#171717` · `#000000` · `#60a5fa` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Cinzel, Manrope
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-[1800px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full py-4 bg-white text-black font-medium uppercase tracking-widest text-xs hover:bg-neutral-200 transition-colors mt-4">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Marquee (`marquee`)
5. Testimonials (`testimonials`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline very large and uppercase, with an italic grey second line
- **Do:** Use a solid white pill for the primary button and an outline for the secondary
- **Do:** Keep the page greyscale; let the film imagery supply the colour
- **Don't:** Don't use the blue (#3b82f6) accent in the hero
- **Don't:** Don't use a light ground; the page is near-black
- **Don't:** Don't set the headline in a regular weight; it relies on display size and contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
